import Vue from 'vue';
import Vuex from 'vuex';
import StoragePlugin from './localStorage'

Vue.use(Vuex);

const defaultConfig = {
  settings: {
    useMilitaryTime: false,
    enableAnimations: true,
    showExtraPeriods: false,
  },
}

export default new Vuex.Store({
  state: {
    ...defaultConfig,
  },
  mutations: {
    UPDATE_SETTING(state: any, { name, value }) {
      state.settings[name] = value
    },
  },
  actions: {

  },
  plugins: [StoragePlugin(defaultConfig)],
});
