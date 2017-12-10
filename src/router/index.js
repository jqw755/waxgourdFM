import Vue from 'vue'
import Router from 'vue-router'
//状态管理
import store from '../store/store'
import * as types from '../store/type'
//路由
import login from '../components/view/login.vue'
import index from '../components/view/index/index.vue'
import category from '../components/view/category/index.vue'
import search from '../components/view/search.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/index',
      component: index,
      meta: {
        keepAlive: true
        // 添加该字段，表示进入这个路由是需要登录的
        // requireAuth: true
      }
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/login',
      component: login
    }
  ]
});

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});

export default router;
