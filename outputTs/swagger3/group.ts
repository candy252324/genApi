import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

import {
  ResOfApiGroupDetail,
  ResOfApiGroupDissolve,
  ResOfApiGroupGroupSetting,
  ResOfApiGroupModifyGroupName,
  ResOfApiGroupPageList,
  ResOfApiGroupSave,
  ResOfApiGroupTransfer,
  ResOfGroupDetail,
  ResOfGroupGroupSetting,
  ResOfGroupModifyGroupName,
  ResOfGroupPageList,
  ResOfGroupSave,
} from './_interfaces'

/** 群信息详情 */
export function apiGroupDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiGroupDetail> {
  return Http.post('/api/group/detail', data, config)
}

/** 群主解散群[二期] */
export function apiGroupDissolve(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiGroupDissolve> {
  return Http.post('/api/group/dissolve', data, config)
}

/** 群设置 */
export function apiGroupGroupSetting(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiGroupGroupSetting> {
  return Http.post('/api/group/groupSetting', data, config)
}

/** 修改群名称 */
export function apiGroupModifyGroupName(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiGroupModifyGroupName> {
  return Http.post('/api/group/modifyGroupName', data, config)
}

/** 分页获取群列表 */
export function apiGroupPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiGroupPageList> {
  return Http.post('/api/group/pageList', data, config)
}

/** 创建群 */
export function apiGroupSave(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiGroupSave> {
  return Http.post('/api/group/save', data, config)
}

/** 转让群[二期] */
export function apiGroupTransfer(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiGroupTransfer> {
  return Http.post('/api/group/transfer', data, config)
}

/** 群信息详情 */
export function groupDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfGroupDetail> {
  return Http.post('/group/detail', data, config)
}

/** 群设置 */
export function groupGroupSetting(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfGroupGroupSetting> {
  return Http.post('/group/groupSetting', data, config)
}

/** 修改群名称 */
export function groupModifyGroupName(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfGroupModifyGroupName> {
  return Http.post('/group/modifyGroupName', data, config)
}

/** 分页获取群列表 */
export function groupPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfGroupPageList> {
  return Http.post('/group/pageList', data, config)
}

/** 创建群 */
export function groupSave(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfGroupSave> {
  return Http.post('/group/save', data, config)
}
