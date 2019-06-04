import VueRouter from 'vue-router';
import Example from './view/Example.vue';
import Router2 from './view/Router.vue';

const routes = [
  {
    path: '/router1',
    component: Example,
  },
  {
    path: '/router2',
    component: Router2,
  }
]

export default new VueRouter({ routes });
