import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    // 主页
    {
      path: '/',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/form',
      component: () => import('@/views/form.vue')
    },
    {
      path: '/checkbox',
      component: () => import('@/views/checkbox.vue')
    },
    {
      path: '/display',
      component: () => import('@/views/display.vue')
    },
    {
      path: '/alert',
      component: () => import('@/views/alert.vue')
    },
    {
      path: '/table-render',
      component: () => import('@/views/table-render.vue')
    },
    {
      path: '/table-slot',
      component: () => import('@/views/table-slot.vue')
    },
    {
      path: '/tree',
      component: () => import('@/views/tree.vue')
    },
    {
      path: '/input-number',
      component: () => import('@/views/input-number.vue')
    },
    // 404页面
    {
      path: '/404',
      component: () => import('@/views/404.vue')
    },
    // 匹配没有的路由到404
    { path: '*', redirect: { path: '/404' } }
  ]
});
