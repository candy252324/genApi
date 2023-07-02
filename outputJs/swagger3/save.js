import { Http } from '../../httpJs/index'

/**
 * 添加群成员（自动创建的部门群不能添加删除成员）
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function save(data, config) {
  return Http.post('/save', data, config)
}
