import { createStore } from 'vuex';

import coachModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';
import profileModule from './modules/profile-info/index.js';

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestModule,
    auth: authModule,
    profile: profileModule,
  },
});

export default store;
