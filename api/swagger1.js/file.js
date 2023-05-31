import {Http} from '../../httpJs/index';

/**
 * 文件上传
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function fileUpload  (data, config) {
  return Http.post('/api/file/upload', data, config)
}
