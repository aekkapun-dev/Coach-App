import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const coachModule = {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: new Array(),
    };
  },
  mutations,
  actions,
  getters,
};

export default coachModule;
