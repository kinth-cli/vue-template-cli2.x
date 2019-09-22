import axios from '../http'

const list = {
  getList (params) {
    return axios.get(`/admin/list`, {
      params: params
    })
  }
}

export default list
