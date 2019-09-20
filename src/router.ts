import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        // { path: 'news', component: () => import('./views/News.vue') },
        // { path: 'Welcome', component: () => import('./views/Welcome.vue') },
        // { path: 'Virtualid', component: () => import('./views/Virtualid.vue') },
        { path: 'schedule', component: () => import('./views/BellSchedule.vue') },
        { path: '', component: () => import('./views/Now.vue') },
        { path: 'settings', component: () => import('./views/Settings.vue') },
      ],
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children: [
        { path: 'credits', component: () => import('./views/Credits.vue') },
        { path: 'changelog', component: () => import('./views/Changelog.vue') },
        { path: '', redirect: 'credits' },
      ],
    },
    { path: '/', redirect: 'home' },
    { path: '*', redirect: 'home' },
  ],
});
