import axios from 'axios'

function errorHandle (status, other) {
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      // TODO
      break
    // 403 token过期
    case 403:
      // TODO
      break
    // 404请求不存在
    case 404:
      // TODO
      break
    default:
      console.log(other)
  }
}

class AjaxRequest {
  constructor () {
    this.baseUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080/api' : '/'
    this.timeout = 3000
    this.queue = {}
  }
  setInterceptor (instance, url) {
    instance.interceptors.request.use((config) => {
      if (Object.keys(this.queue).length === 0) {
        // 做loading处理
      }
      // 增加请求队列
      this.queue[url] = url
      // TODO 请求前拦截，写入需要进行的操作，比如加token
      return config // 一定要return config
    })

    instance.interceptors.response.use((res) => {
      delete this.queue[url]
      if (this.queue.length === 0) {
        // TODO 隐藏loading
      }
      // TODO 做状态码拦截
      if (res.status === 200) {
        return Promise.resolve(res)
      } else {
        return Promise.reject(res)
      }
    }, (error) => {
      delete this.queue[url]
      if (this.queue.length === 0) {
        // TODO 隐藏loading
      }
      const { response } = error
      if (response) {
        errorHandle(response.status, response.data.message) // 处理不同状态码
        return Promise.reject(response)
      } else {
        // 处理断网的情况
        // eg:请求超时或断网时，更新state的network状态
        // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
        // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      }
      return Promise.reject(error)
    })
  }
  request (options) {
    let instance = axios.create()
    let config = {
      ...options,
      baseUrl: this.baseUrl,
      timeout: this.timeout
    }
    this.setInterceptor(instance, options.url)
    return instance(config)
  }
}
export default new AjaxRequest()
