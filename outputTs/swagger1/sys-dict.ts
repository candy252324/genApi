import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiSysdictV1AreaInfo,
  ResOfApiSysdictV1Types,
  ResOfApiSysdictV1TypeListFilter,
  ResOfApiSysdictV1TypeListPage,
  ResOfApiSysdictV1TypeListTree,
} from './_interfaces'

/** 区域查询 */
export function apiSysdictV1AreaInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiSysdictV1AreaInfo> {
  return Http.get('/api/sys-dict/v1/areaInfo', config)
}

/** 查询字典列表-查询当前数据类型列表 */
export function apiSysdictV1Types(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiSysdictV1Types> {
  return Http.get('/api/sys-dict/v1/types', config)
}

/** 查询字典列表-根据数据类型模糊搜索 */
export function apiSysdictV1TypeListFilter(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiSysdictV1TypeListFilter> {
  return Http.get('/api/sys-dict/v1/${type}/list/filter', data, config)
}

/** 查询字典列表-根据数据类型查询 */
export function apiSysdictV1TypeListPage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiSysdictV1TypeListPage> {
  return Http.post('/api/sys-dict/v1/${type}/list/page', data, config)
}

/** 查询字典列表-根据数据类型查询整个树 */
export function apiSysdictV1TypeListTree(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiSysdictV1TypeListTree> {
  return Http.get('/api/sys-dict/v1/${type}/list/tree', data, config)
}
