import { Http } from '../../httpJs/index'

/**
 * 进入群聊
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupf2fEnterGroup(data, config) {
  return Http.post('/api/groupf2f/enterGroup', data, config)
}

/**
 * 获取列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupf2fList(data, config) {
  return Http.post('/api/groupf2f/list', data, config)
}

/**
 * 保存随机数
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupf2fSaveRandom(data, config) {
  return Http.post('/api/groupf2f/saveRandom', data, config)
}
