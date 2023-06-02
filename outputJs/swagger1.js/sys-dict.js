import {Http} from '../../httpJs/index';

/**
 * 区域查询
 * @param {*} config 可选，如：{headers:{}}
 */
export function sysdictV1AreaInfo(config){
  return Http.get('/api/sys-dict/v1/areaInfo', config)
}

/**
 * 查询字典列表-查询当前数据类型列表
 * @param {*} config 可选，如：{headers:{}}
 */
export function sysdictV1Types(config){
  return Http.get('/api/sys-dict/v1/types', config)
}

/**
 * 查询字典列表-根据数据类型模糊搜索
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function sysdictV1TypeListFilter  (data, config) {
  return Http.get('/api/sys-dict/v1/${type}/list/filter', data, config)
}

/**
 * 查询字典列表-根据数据类型查询
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function sysdictV1TypeListPage  (data, config) {
  return Http.post('/api/sys-dict/v1/${type}/list/page', data, config)
}

/**
 * 查询字典列表-根据数据类型查询整个树
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function sysdictV1TypeListTree  (data, config) {
  return Http.get('/api/sys-dict/v1/${type}/list/tree', data, config)
}
