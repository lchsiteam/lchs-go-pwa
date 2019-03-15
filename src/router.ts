import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: 'schedule', component: () => import('./views/BellSchedule.vue') },
        { path: '', component: () => import('./views/Now.vue') },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children: [
        { name: 'credits', path: 'credits', component: () => import('./views/Credits.vue') },
        { name: 'settings', path: 'settings', component: () => import('./views/Settings.vue') },
        { path: '', redirect: 'credits' },
      ]
    },
    { path: '/', redirect: 'home' }
  ],
});
