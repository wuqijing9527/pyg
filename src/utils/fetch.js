import wepy from 'wepy'
const BASE_URL = 'http://api-hmugo-web.itheima.net/api/public/v1/'
export default function fetch (url, options = {}) {
  if (typeof url === 'string') {
    options.url = url
  }
  if (typeof url === 'object') {
    options = url
  }
  return wepy.request({
    url: BASE_URL + options.url,
    method: options.method || 'get',
    data: options.data || {}
  })
}
