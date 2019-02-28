import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let Routers = [
  {
    path: "/list",
    meta: {
      title: '商品列表'
    },
    // 路由懒加载写法
    component: (resolve) => require(['../views/list.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/list'
  }
];

const RouterConfig = {
  // 使用html5的history路由模式
  mode: 'history',
  routes: Routers
};

const router = new Router(RouterConfig);

// 路由跳转之前调用
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

// 路由跳转之后调用
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router;
