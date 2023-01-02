import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const profileModule = {
  namespaced: true,
  state() {
    return {
      fullname: '',
    };
  },
  mutations,
  actions,
  getters,
};

export default profileModule;
