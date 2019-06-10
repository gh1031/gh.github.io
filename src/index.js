import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import router from './router';

Vue.use(VueRouter);
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')