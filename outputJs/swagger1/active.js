import {Http} from '../../httpJs/index';

/**
 * 根据部门code查询未激活员工列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function activeNoActiveList  (data, config) {
  return Http.get('/api/active/noActiveList', data, config)
}

/**
 * 发送激活消息提示
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function activeSendActiveMessage  (data, config) {
  return Http.post('/api/active/sendActiveMessage', data, config)
}
