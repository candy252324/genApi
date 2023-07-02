import {Http} from '../../httpJs/index';

/**
 * 管理员删除群成员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function delete  (data, config) {
  return Http.post('/delete', data, config)
}
