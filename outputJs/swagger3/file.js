import { Http } from '../../httpJs/index'

/**
 * 直接表单提交文件到oss,返回图片访问链接
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function filePutOssFile(data, config) {
  return Http.post('/api/file/putOssFile', data, config)
}
