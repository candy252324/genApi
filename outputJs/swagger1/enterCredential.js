import { Http } from '../../httpJs/index'

/**
 * 添加企业资质
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterCredentialAdd(data, config) {
  return Http.post('/api/enterCredential/add', data, config)
}

/**
 * 删除企业资质
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterCredentialDel(data, config) {
  return Http.get('/api/enterCredential/del', data, config)
}

/**
 * 资质级联
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterCredentialGetCodeList(config) {
  return Http.get('/api/enterCredential/getCodeList', config)
}

/**
 * 查询企业资质
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterCredentialPage(data, config) {
  return Http.post('/api/enterCredential/page', data, config)
}

/**
 * 修改企业资质
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterCredentialUpdate(data, config) {
  return Http.post('/api/enterCredential/update', data, config)
}

/**
 * ocr营业执照识别
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterCredentialV1OcrBusinessLicense(data, config) {
  return Http.post('/api/enterCredential/v1/ocr/businessLicense', data, config)
}
