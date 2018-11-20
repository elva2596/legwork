import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import DemandList from '@/pages/DemandList'
import OrderList from '@/pages/OrderList'
import NotFound from '@/pages/NotFound'
import store from '@/store'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requireAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList,
      meta: { requireAuth: true }
    },
    {
      path: '/demandList',
      name: 'demandList',
      component: DemandList,
      meta: { requireAuth: true }
    }
  ]
})
router.beforeEach((to, from, next) => {
  let isLoggin = Boolean(store.state.token)
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!isLoggin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    if (isLoggin && (to.path === '/login')) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})
export default router
