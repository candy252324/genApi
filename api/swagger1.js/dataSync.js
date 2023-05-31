import {Http} from '../../httpJs/index';

/**
 * 根据流水号查询结果
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function dataSyncCheckResult  (data, config) {
  return Http.get('/api/dataSync/checkResult', data, config)
}
