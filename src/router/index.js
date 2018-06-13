import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const view = require.context('@/view',true,/\.vue$/);
function readPath(key){
  return key.slice(1,key.indexOf('/index.vue'))//需要使用正则,暂时写死
}
let temroutes = view.keys().map(key=>({path:readPath(key),component:()=>view(key)}))
const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/login',
      component: ()=>import(/* webpackChunkName: "login" */ './../layout/login/index.vue')
    },
    // {
    //   path: '/demo',
    //   component: ()=>import(/* webpackChunkName: "login" */ '@/view/demo/index.vue')
    // },
    {
      path: "/",
      component: ()=>import(/* webpackChunkName: "index" */ '@/layout/index/index.vue')
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
export default router
