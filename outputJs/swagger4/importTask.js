import { Http } from '../../httpJs/index'

/**
 * 导入excel文件操作
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function importTaskImportExcel(data, config) {
  return Http.post('/api/importTask/importExcel', data, config)
}

/**
 * 查询导入列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function importTaskImportList(data, config) {
  return Http.post('/api/importTask/importList', data, config)
}
