import { Http } from '../../httpJs/index'

/**
 * 添加验证图片
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function sliderAddImage(data, config) {
  return Http.post('/api/slider/addImage', data, config)
}

/**
 * 获取校验对象
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function sliderCreateVerificationEnum(data, config) {
  return Http.get('/api/slider/create/${verificationEnum}', data, config)
}

/**
 * 验证码预校验
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function sliderPreCheckVerificationEnum(data, config) {
  return Http.get('/api/slider/preCheck/${verificationEnum}', data, config)
}
