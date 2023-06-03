import {ResResultApiResponse,} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 群信息详情 */
export function groupDetail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/group/detail', data, config)
}

/** 群主解散群[二期] */
export function groupDissolve  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/group/dissolve', data, config)
}

/** 群设置 */
export function groupGroupSetting  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/group/groupSetting', data, config)
}

/** 修改群名称 */
export function groupModifyGroupName  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/group/modifyGroupName', data, config)
}

/** 分页获取群列表 */
export function groupPageList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/group/pageList', data, config)
}

/** 创建群 */
export function groupSave  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/group/save', data, config)
}

/** 转让群[二期] */
export function groupTransfer  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/group/transfer', data, config)
}

/** 群信息详情 */
export function groupDetail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/group/detail', data, config)
}

/** 群设置 */
export function groupGroupSetting  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/group/groupSetting', data, config)
}

/** 修改群名称 */
export function groupModifyGroupName  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/group/modifyGroupName', data, config)
}

/** 分页获取群列表 */
export function groupPageList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/group/pageList', data, config)
}

/** 创建群 */
export function groupSave  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/group/save', data, config)
}
