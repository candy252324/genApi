import { Http } from '../../httpJs/index'

/**
 * isEmpty=false会重新生成群头像
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function adminGetAvatar(data, config) {
  return Http.get('/api/admin/getAvatar', data, config)
}

/**
 * 上传版本
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function adminPutAppVersionFile(data, config) {
  return Http.post('/api/admin/putAppVersionFile', data, config)
}
