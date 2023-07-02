import { Http } from '../../httpJs/index'

/**
 * 修改群成员在本群备注
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function modifyRemark(data, config) {
  return Http.post('/modifyRemark', data, config)
}
