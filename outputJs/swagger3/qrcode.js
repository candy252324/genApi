import { Http } from '../../httpJs/index'

/**
 * 获取/更新用户或群二维码(返回图片base64string)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function qrcodeGetImg(data, config) {
  return Http.post('/api/qrcode/getImg', data, config)
}
