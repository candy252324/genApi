import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseQunDuiXiangGroupDetailResp,
  QunXinXiGroupDetailReq,
  ApiResponse,
  QunSheZhiZhiNenYiGeZhiBuWeiNullGroupSetReq,
  XiuGaiQunMingChenRuCanModifyGroupNameReq,
  ApiResponseComPageQunDuiXiangGroupResp,
  QunFenYeGroupPageListReq,
  ApiResponseQunDuiXiangGroupResp,
  GroupTransferReq,
} from './_interfaces'

/** 群信息详情 */
export function apiGroupDetail(
  data: QunXinXiGroupDetailReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQunDuiXiangGroupDetailResp> {
  return Http.post('/api/group/detail', data, config)
}

/** 群主解散群[二期] */
export function apiGroupDissolve(
  data: QunXinXiGroupDetailReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/group/dissolve', data, config)
}

/** 群设置 */
export function apiGroupGroupSetting(
  data: QunSheZhiZhiNenYiGeZhiBuWeiNullGroupSetReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/group/groupSetting', data, config)
}

/** 修改群名称 */
export function apiGroupModifyGroupName(
  data: XiuGaiQunMingChenRuCanModifyGroupNameReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/group/modifyGroupName', data, config)
}

/** 分页获取群列表 */
export function apiGroupPageList(
  data: QunFenYeGroupPageListReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageQunDuiXiangGroupResp> {
  return Http.post('/api/group/pageList', data, config)
}

/** 创建群 */
export function apiGroupSave(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQunDuiXiangGroupResp> {
  return Http.post('/api/group/save', data, config)
}

/** 转让群[二期] */
export function apiGroupTransfer(
  data: GroupTransferReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/group/transfer', data, config)
}

/** 群信息详情 */
export function groupDetail(
  data: QunXinXiGroupDetailReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQunDuiXiangGroupDetailResp> {
  return Http.post('/group/detail', data, config)
}

/** 群设置 */
export function groupGroupSetting(
  data: QunSheZhiZhiNenYiGeZhiBuWeiNullGroupSetReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/group/groupSetting', data, config)
}

/** 修改群名称 */
export function groupModifyGroupName(
  data: XiuGaiQunMingChenRuCanModifyGroupNameReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/group/modifyGroupName', data, config)
}

/** 分页获取群列表 */
export function groupPageList(
  data: QunFenYeGroupPageListReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageQunDuiXiangGroupResp> {
  return Http.post('/group/pageList', data, config)
}

/** 创建群 */
export function groupSave(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQunDuiXiangGroupResp> {
  return Http.post('/group/save', data, config)
}
