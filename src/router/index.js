import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const router = new Router({
  // mode: 'history',
  routes: [{
      path: '/login',
      component: () =>
        import ( /* webpackChunkName: "login" */ './../layout/login/index.vue')
    },
    {
      path: "/",
      component: () =>
        import ( /* webpackChunkName: "index" */ '@/layout/index/index.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
export default router
