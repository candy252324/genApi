import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseVoid,
  PlatformEmployeeAuthReq,
  ApiResponseListEmpowerDeptResp,
  ApiResponseGuanLianGongSiXiangQing,
  ApiResponsestring,
  ApiResponseListQiYeZuHuXinXi,
  ApiResponseListRoleInfo,
  ApiResponseAccInfoResp,
  ApiResponseMapstringstring,
  ApiResponseHeaderEmpowerSmsInfo,
  ApiResponseEntReSetResp,
  ApiResponseInviteEnterpriseReInfo,
  InviteRePlatFromOrgReq,
  ApiResponseGuanLianGongSiLieBiao,
  ApiResponseComPageEpEmployeeResp,
  ApiResponseListEpEntTreeResp,
  ApiResponseScanReQrResp,
} from './_interfaces'

/** 提醒审核 */
export function apiEmpowerEnterpriseReAlertAudit(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/empower/enterpriseRe/alertAudit', data, config)
}

/** 外部关联码-主动申请同意关联 */
export function apiEmpowerEnterpriseReApplyScanAgreeRe(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/empower/enterpriseRe/applyScanAgreeRe', data, config)
}

/** 批量授权 */
export function apiEmpowerEnterpriseReBathAuth(
  data: PlatformEmployeeAuthReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/empower/enterpriseRe/bathAuth', data, config)
}

/** 批量取消授权 */
export function apiEmpowerEnterpriseReBathCancelAuth(
  data: PlatformEmployeeAuthReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/empower/enterpriseRe/bathCancelAuth', data, config)
}

/** 获取部门树_全部部门 */
export function apiEmpowerEnterpriseReDeptTree(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListEmpowerDeptResp> {
  return Http.get('/api/empower/enterpriseRe/deptTree', data, config)
}

/** 公司关联详情 */
export function apiEmpowerEnterpriseReDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseGuanLianGongSiXiangQing> {
  return Http.get('/api/empower/enterpriseRe/detail', data, config)
}

/** 外部关联码-生成外部关联码 */
export function apiEmpowerEnterpriseReDetailGenReLinkOrQr(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.get(
    '/api/empower/enterpriseRe/detail/genReLinkOrQr',
    data,
    config
  )
}

/** 根据手机号查询创建的公司 */
export function apiEmpowerEnterpriseReDetailGetEnterpriseListByPhone(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListQiYeZuHuXinXi> {
  return Http.get(
    '/api/empower/enterpriseRe/detail/getEnterpriseListByPhone',
    data,
    config
  )
}

/** 获取平台公司列表 */
export function apiEmpowerEnterpriseReDetailListEnterprise(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListQiYeZuHuXinXi> {
  return Http.get('/api/empower/enterpriseRe/detail/listEnterprise', config)
}

/** 批量授权-员工同意/拒绝 */
export function apiEmpowerEnterpriseReEmployeeOperEmType(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get(
    '/api/empower/enterpriseRe/employeeOper/em/${type}',
    data,
    config
  )
}

/** 关联设置-获取角色列表 */
export function apiEmpowerEnterpriseReEntReSetListRole(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListRoleInfo> {
  return Http.get('/api/empower/enterpriseRe/entReSet/listRole', data, config)
}

/** 邀请关联组织-关联方负责人关联操作 */
export function apiEmpowerEnterpriseReFranchiseOperOper(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get(
    '/api/empower/enterpriseRe/franchiseOper/${oper}',
    data,
    config
  )
}

/** 通过手机号查询账户姓名 */
export function apiEmpowerEnterpriseReGetAccByMobile(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseAccInfoResp> {
  return Http.get('/api/empower/enterpriseRe/getAccByMobile', data, config)
}

/** 批量授权-获取短信信息 */
export function apiEmpowerEnterpriseReGetEmEmployeeInfoLinkCode(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseMapstringstring> {
  return Http.get(
    '/api/empower/enterpriseRe/getEmEmployeeInfo/${linkCode}',
    data,
    config
  )
}

/** 邀请授权-查询回显信息 */
export function apiEmpowerEnterpriseReGetEmpowerInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseHeaderEmpowerSmsInfo> {
  return Http.get('/api/empower/enterpriseRe/getEmpowerInfo', data, config)
}

/** 关联设置-获取公司关联设置 */
export function apiEmpowerEnterpriseReGetEntReSet(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseEntReSetResp> {
  return Http.get('/api/empower/enterpriseRe/getEntReSet', data, config)
}

/** 邀请关联组织-获取邀请信息 */
export function apiEmpowerEnterpriseReGetInviteReInfoLinkCode(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseInviteEnterpriseReInfo> {
  return Http.get(
    '/api/empower/enterpriseRe/getInviteReInfo/${linkCode}',
    data,
    config
  )
}

/** 邀请关联组织-发起邀请 */
export function apiEmpowerEnterpriseReInviteRePlateFromOrg(
  data: InviteRePlatFromOrgReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post(
    '/api/empower/enterpriseRe/inviteRePlateFromOrg',
    data,
    config
  )
}

/** 公司关联列表 */
export function apiEmpowerEnterpriseReList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseGuanLianGongSiLieBiao> {
  return Http.get('/api/empower/enterpriseRe/list', data, config)
}

/** 获取可授权的角色列表 */
export function apiEmpowerEnterpriseReListRoleList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListRoleInfo> {
  return Http.get('/api/empower/enterpriseRe/listRoleList', data, config)
}

/** 授权员工列表 */
export function apiEmpowerEnterpriseRePageEmployeeList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageEpEmployeeResp> {
  return Http.get('/api/empower/enterpriseRe/pageEmployeeList', data, config)
}

/** 关联部门树-公司列表 */
export function apiEmpowerEnterpriseReReReEntTree(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListEpEntTreeResp> {
  return Http.get('/api/empower/enterpriseRe/re/reEntTree', data, config)
}

/** 关联公司树 */
export function apiEmpowerEnterpriseReReEntTree(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListEpEntTreeResp> {
  return Http.get('/api/empower/enterpriseRe/reEntTree', data, config)
}

/** 重新申请关联 */
export function apiEmpowerEnterpriseReRefreshApplyRe(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/empower/enterpriseRe/refreshApplyRe', data, config)
}

/** 解除关联 */
export function apiEmpowerEnterpriseReRelationCancel(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/empower/enterpriseRe/relation/cancel', data, config)
}

/** 重新关联 */
export function apiEmpowerEnterpriseReRelationRefresh(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/empower/enterpriseRe/relation/refresh', data, config)
}

/** 外部关联码-查询组织关联 */
export function apiEmpowerEnterpriseReScanGetOrgInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseScanReQrResp> {
  return Http.get('/api/empower/enterpriseRe/scan/getOrgInfo', data, config)
}

/** 邀请授权-发送邀请授权短信 */
export function apiEmpowerEnterpriseReSendEmpowerSms(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/empower/enterpriseRe/sendEmpowerSms', data, config)
}

/** 关联设置-修改公司关联设置 */
export function apiEmpowerEnterpriseReUpEntReSetEnterpriseId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post(
    '/api/empower/enterpriseRe/upEntReSet/${enterpriseId}',
    data,
    config
  )
}
