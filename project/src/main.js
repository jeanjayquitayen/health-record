import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store/store';
import router from './router/router';
import VueSocketIOExt from 'vue-socket.io-extended';
import socketio from 'socket.io-client';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';


// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('en', en);

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;

Vue.use(VueSocketIOExt,socketio('http://localhost:3000'),{ store });


new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
