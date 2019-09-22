import axios from './http'

const login = {
  signIn (params) {
    return axios.get(`/admin/signIn`, {
      params: params
    })
  },
  code () {
    return axios.get(`/admin/code`)
  }
}

export default login
