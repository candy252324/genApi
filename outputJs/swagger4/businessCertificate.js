import { Http } from '../../httpJs/index'

/**
 * 删除人员证书
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessCertificateDelete(data, config) {
  return Http.post('/api/businessCertificate/delete', data, config)
}
