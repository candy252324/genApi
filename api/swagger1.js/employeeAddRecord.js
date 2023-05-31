import {Http} from '../../httpJs/index';

/**
 * 导出未激活成员列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeAddRecordExport  (data, config) {
  return Http.post('/api/employeeAddRecord/export', data, config)
}

/**
 * 分页查询成员添加记录
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeAddRecordPageRecord  (data, config) {
  return Http.get('/api/employeeAddRecord/pageRecord', data, config)
}
