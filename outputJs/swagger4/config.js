import { Http } from '../../httpJs/index'

/**
 * 人才证书下拉框
 * @param {*} config 可选，如：{headers:{}}
 */
export function configGetPersonCertificateLabel(config) {
  return Http.post('/api/config/getPersonCertificateLabel', config)
}

/**
 * 人才职称下拉框
 * @param {*} config 可选，如：{headers:{}}
 */
export function configGetPersonTitleLabel(config) {
  return Http.post('/api/config/getPersonTitleLabel', config)
}
