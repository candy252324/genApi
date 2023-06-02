import {Http} from '../../httpJs/index';

/**
 * 导出员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function excelExport  (data, config) {
  return Http.post('/api/excel/export', data, config)
}

/**
 * 导入历史
 * @param {*} config 可选，如：{headers:{}}
 */
export function excelHistory(config){
  return Http.get('/api/excel/history', config)
}

/**
 * 导入员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function excelImport  (data, config) {
  return Http.post('/api/excel/import', data, config)
}

/**
 * 下载模版
 * @param {*} config 可选，如：{headers:{}}
 */
export function excelTemplate(config){
  return Http.get('/api/excel/template', config)
}
