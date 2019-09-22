import axios from 'axios'
import qs from 'qs'
import baseURL from './base'
import router from '../router'
import store from '../store'
import { MessageBox } from 'element-ui' // 提示框可根据使用的UI库相应去更改

const tip = msg => {
  MessageBox(msg, '提示')
}

const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath // 记录当前失效的页面，重新登录成功后，如需要回到这个页面可以从这里获取
    }
  })
}

function errorHandle (status, other) {
  switch (status) {
  // 401: 未登录状态，跳转登录页
    case 401:
      toLogin()
      break
      // 403 token过期
      // 清除token并跳转登录页
    case 403:
      if (store.state.loginSuccess === true) {
        tip('登录过期，请重新登录')
        store.commit('loginSuccess', false)
        setTimeout(() => {
          toLogin()
        }, 1000)
      }
      break
      // 404请求不存在
    case 404:
      tip('请求的资源不存在')
      break
    default:
      console.log(other)
  }
}

const http = axios.create({
  timeout: 1000 * 12
})

http.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'

http.defaults.baseURL = baseURL // 设定请求基础路径

http.interceptors.request.use( // 请求拦截，添加token, post请求数据处理
  (config) => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data) // 统一处理post请求数据
    }
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  (error) => Promise.error(error)
)

http.interceptors.response.use(
  (res) => {
    if (res.status === 200) { // 需要统一处理后台返回的error或code值，可以在这里加入
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  (error) => {
    const { response } = error
    if (response) {
      errorHandle(response.status, response.data.message) // 处理不同状态码
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      store.commit('changeNetwork', false)
    }
  }
)

export default http
