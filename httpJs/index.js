import axios from 'axios'
// import { getToken } from '../utils/auth'
// import { handleCodeError, handleNetworkError } from './handlerError'

export const BASE_URL = 'https:xxx'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 30 * 1000,
  adapter,
})

instance.interceptors.request.use(
  config => {
    // if (getToken()) config.headers.satoken = getToken()
    return config
  },
  error => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  res => {
    // const method = response.config.method.toLowerCase()
    // const url = response.config.url
    if (res.config.responseType === 'blob') return res

    // 请求成功
    if (res.status === 200) {
      const resData = res.data
      if (+resData?.code !== 200) {
        // handleCodeError({ code: resData.code, msg: resData.msg })
        return Promise.reject(resData)
      } else {
        return resData
      }
    }
    return res
  },
  err => {
    // 只要不是主动取消的请求
    if (err.code !== 'ERR_CANCELED') {
      // 这里用来处理http常见错误，进行全局提示
      // handleNetworkError(err?.response?.status)
    }
    return Promise.reject(err)
  }
)

const Http = {
  instance,
  get(url, params = {}, config = {}) {
    return instance.get(url, { params, ...config, emulateJSON: true })
  },
  post(url, data = {}, config = {}) {
    return instance.post(url, data, { ...config, emulateJSON: true })
  },
  put(url, data = {}, config = {}) {
    return instance.put(url, data, { ...config, emulateJSON: true })
  },
  delete(url, params = {}, config = {}) {
    return instance.delete(url, { params, ...config, emulateJSON: true })
  },
}

export { Http }
