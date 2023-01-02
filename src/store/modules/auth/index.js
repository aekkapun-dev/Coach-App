import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const authModule = {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },
  mutations,
  actions,
  getters,
};

export default authModule;
