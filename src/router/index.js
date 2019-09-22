import Vue from 'vue'
import Router from 'vue-router'

// js懒加载，避免首页加载过久 https://www.jianshu.com/p/b3b8fb8a2336
const Login = resolve => require.ensure([], () => resolve(require('@/views/login')))
const UserList = resolve => require.ensure([], () => resolve(require('@/views/user/list')))
const UserDetail = resolve => require.ensure([], () => resolve(require('@/views/user/detail')))

const role = 'ADMIN' // 用户角色根据登录情况获取

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {permission: 'ADMIN'},
      component: Login
    },
    {
      path: '/userList',
      name: 'userList',
      meta: {permission: 'ADMIN'},
      component: UserList
    },
    {
      path: '/userDetail',
      name: 'userDetail',
      meta: {permission: 'ADMIN'},
      component: UserDetail
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (from.path !== '/' || from.path !== '/error') {
    if (to.meta.permission.match(role)) { // 判断角色是否有权限访问页面，根据项目情况判断是否需要
      next()
    } else {
      alert('无权限访问')
    }
  }
})

export default router
