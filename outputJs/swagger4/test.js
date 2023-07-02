import { Http } from '../../httpJs/index'

/**
 * check
 * @param {*} config 可选，如：{headers:{}}
 */
export function testCheck(config) {
  return Http.get('/api/test/check', config)
}

/**
 * get
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function testGet(data, config) {
  return Http.get('/api/test/get', data, config)
}

/**
 * getCustomer
 * @param {*} config 可选，如：{headers:{}}
 */
export function testGetCustomer(config) {
  return Http.get('/api/test/getCustomer', config)
}

/**
 * getEnterprise
 * @param {*} config 可选，如：{headers:{}}
 */
export function testGetEnterprise(config) {
  return Http.get('/api/test/getEnterprise', config)
}

/**
 * insert
 * @param {*} config 可选，如：{headers:{}}
 */
export function testInsert(config) {
  return Http.get('/api/test/insert', config)
}

/**
 * login
 * @param {*} config 可选，如：{headers:{}}
 */
export function testLogin(config) {
  return Http.get('/api/test/login', config)
}

/**
 * post
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function testPost(data, config) {
  return Http.post('/api/test/post', data, config)
}

/**
 * sent
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function testSent(data, config) {
  return Http.post('/api/test/sent', data, config)
}

/**
 * subscribeBusiness
 * @param {*} config 可选，如：{headers:{}}
 */
export function testSubscribeBusiness(config) {
  return Http.get('/api/test/subscribeBusiness', config)
}
