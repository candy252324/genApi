import { Http } from '../../httpJs/index'

/**
 * 上传文件
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function fileUploadFile(data, config) {
  return Http.post('/api/file/uploadFile', data, config)
}
