import debounce from 'lodash.debounce';

// Verify that local storage is setup properly
// so that we can copy it.
const checkLocalStorage = (defaultConfig: any) => {
  Object.keys(defaultConfig).forEach((key: string) => {
    try {
      const result = localStorage.getItem(key);
      if (result === null) {
        localStorage.setItem(key, JSON.stringify(defaultConfig[key]));
      } else {
        localStorage.setItem(key, JSON.stringify(Object.assign(defaultConfig[key], JSON.parse(result))));
      }
    } catch (e) {
      console.error(e);
    }
  });
};

const loadLocalStorage = (store: any, defaultConfigKeys: string[]) => {
  let state: any = {};
  defaultConfigKeys.forEach((key: string) => {
    state[key] = JSON.parse(localStorage.getItem(key) as any);
  });

  store.replaceState(state);
};

const debouncedUpdate = debounce((state) => {
  Object.keys(state).forEach((key: string) => {
    localStorage.setItem(key, JSON.stringify(state[key]));
  });
}, 200);

// Local Storage plugin for Vuex
const LocalStoragePlugin = (defaultConfig: any) => {
  return (store: any) => {
    checkLocalStorage(defaultConfig);
    loadLocalStorage(store, Object.keys(defaultConfig));

    store.subscribe((mutation: any, state: any) => {
      debouncedUpdate(state);
    });
  };
};

export default LocalStoragePlugin;
