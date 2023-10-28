import Vue from 'vue';
import Vuex from 'vuex';
import StoragePlugin from './localStorage';

Vue.use(Vuex);

type DefaultConfig = {
  settings: {
    openDepAnnouncement: number,
    numberOfClicks: number,
    notificationsOn: boolean,
    notificationSent: boolean,
    useMilitaryTime: boolean,
    enableAnimations: boolean,
    enableThemeAnimations: boolean,
    enableRadialGradient: boolean,
    showExtraPeriods: boolean,
    sixthEnabled: boolean,
    zeroEnabled: boolean,
    colorTheme: string,
    startorend: string,
    grade: number,
    startTime: number,
    endTime: number,
    idInput: string,
    gradeInput: [],
  },
  changelog: any
}

const defaultConfig: DefaultConfig = {
  settings: {
    openDepAnnouncement: -1,
    numberOfClicks: 0,
    notificationsOn: false,
    notificationSent: false,
    useMilitaryTime: false,
    enableAnimations: true,
    enableThemeAnimations: false,
    enableRadialGradient: true,
    showExtraPeriods: false,
    sixthEnabled: true,
    zeroEnabled: true,
    colorTheme: 'theme17',
    startorend: 'both',
    grade: 9,
    startTime: 3,
    endTime: 2,
    idInput: '',
    gradeInput: [],
  },
  changelog: {
    readUpdates: [],
  },
};

export default new Vuex.Store({
  state: {
    ...defaultConfig,
    isExtension: false,
  },
  mutations: {
    UPDATE_SETTING(state: any, { name, value }) {
      state.settings[name] = value;
    },
    UPDATE_READ_PROGRESS(state: any, logId) {
      state.changelog.readUpdates = state.changelog.readUpdates.filter((l: number) => l !== logId).concat([logId]);
    },
    SET_READ_PROGRESS(state: any, logIds) {
      state.changelog.readUpdates = logIds;
    },
    UPDATE_EXTENSION_STATUS(state: any, newStatus) {
      state.isExtension = newStatus;
    },
  },
  actions: {

  },
  plugins: [StoragePlugin(defaultConfig)],
});
