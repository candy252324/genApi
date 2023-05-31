import {Http} from '../../httpJs/index';

/**
 * 查询认证结果
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCertificationDescribeFaceVerify  (data, config) {
  return Http.get('/api/personCertification/describeFaceVerify', data, config)
}

/**
 * ocr身份证背面识别，传入base64或图片URL地址
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCertificationIdCardBack  (data, config) {
  return Http.post('/api/personCertification/idCardBack', data, config)
}

/**
 * ocr身份证正面识别，传入base64或图片URL地址
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCertificationIdCardFront  (data, config) {
  return Http.post('/api/personCertification/idCardFront', data, config)
}

/**
 * 个人发起认证
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCertificationInitFaceVerifyWithCertifyIdType  (data, config) {
  return Http.post('/api/personCertification/initFaceVerifyWithCertifyId/${type}', data, config)
}

/**
 * 查询个人租户认证信息
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCertificationPersonAuthInfo(config){
  return Http.post('/api/personCertification/person/auth/info', config)
}

/**
 * 认证列表
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCertificationPersonList(config){
  return Http.post('/api/personCertification/person/list', config)
}

/**
 * 个人开户-(支付)认证开始执行
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCertificationPersonV1UserIdOpenAcctExecute  (data, config) {
  return Http.post('/api/personCertification/person/v1/${userId}/openAcct/execute', data, config)
}

/**
 * 查询认证表单回显
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCertificationQueryCertInfo  (data, config) {
  return Http.get('/api/personCertification/queryCertInfo', data, config)
}

/**
 * 查询个人普通认证唯一id
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCertificationQueryCommonCertifyId(config){
  return Http.get('/api/personCertification/queryCommonCertifyId', config)
}

/**
 * 菜花钱包-认证录入信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCertificationWalletInfo  (data, config) {
  return Http.post('/api/personCertification/wallet/info', data, config)
}

/**
 * 菜花钱包- 个人信息查询
 * @param {*} config 可选，如：{headers:{}}
 */
export function personCertificationWalletQueryInfo(config){
  return Http.get('/api/personCertification/wallet/queryInfo', config)
}
