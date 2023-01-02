import { createApp, defineAsyncComponent } from 'vue';

import router from './router.js';
import store from './store/index.js';

import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import NotFound from './pages/NotFound.vue';

const BaseDialog = defineAsyncComponent(() => {
  return import('./components/ui/BaseDialog.vue');
});

const app = createApp(App);

app.use(router);
app.use(store);

//Register global components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('not-found', NotFound);
app.component('base-dialog', BaseDialog);

app.mount('#app');
