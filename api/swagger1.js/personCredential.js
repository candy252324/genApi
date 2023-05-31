import {Http} from '../../httpJs/index';

/**
 * 分页查询个人资质
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCredentialPagePersonCredential  (data, config) {
  return Http.post('/api/personCredential/PagePersonCredential', data, config)
}

/**
 * 添加个人资质
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCredentialAddPersonCredential  (data, config) {
  return Http.post('/api/personCredential/addPersonCredential', data, config)
}

/**
 * 删除个人资质
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCredentialDeleteId  (data, config) {
  return Http.get('/api/personCredential/delete/${id}', data, config)
}

/**
 * 删除注册专业证书
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCredentialDeleteMajorId  (data, config) {
  return Http.get('/api/personCredential/deleteMajor/${id}', data, config)
}

/**
 * 获取注册专业树
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCredentialGetMajorCodeTree(config){
  return Http.get('/api/personCredential/getMajorCodeTree', config)
}

/**
 * 修改个人资质
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCredentialUpdatePersonCredential  (data, config) {
  return Http.post('/api/personCredential/updatePersonCredential', data, config)
}
