import axios from 'axios'
var api = axios

api.defaults.headers.common['Accept'] = 'application/json'
api.defaults.headers.common['Content-Type'] = 'application/json'

export const fetchDeptList = (param) => {
  return api.get('https://wy.guahao.com/json/consult/expert', {
    params: param
  }).then(res => {
    return res.data
  }).catch(e => {
    throw e
  })
}
