import axios from '../http'

const login = {
  detail (params) {
    return axios.get(`/admin/detail`, {
      params: params
    })
  }
}

export default login
