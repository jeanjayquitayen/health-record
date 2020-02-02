import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store/store';
import router from './router/router';
import VueSocketIOExt from 'vue-socket.io-extended';
import socketio from 'socket.io-client';
Vue.config.productionTip = false;

Vue.use(VueSocketIOExt,socketio('http://localhost:3000'),{ store });
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
