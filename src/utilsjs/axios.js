import { config } from '~/utilsjs'
const axiosBase = require('axios')

export default axiosBase.create({
  baseURL: config.urls.api.https,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
})