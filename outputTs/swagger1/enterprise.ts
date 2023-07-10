import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseComPageEmployeeResp,
  ApiResponseVoid,
  ApiResponsePageQiYeKaiHuXinXi,
  ApiResponseQiYeKaiHuXinXi,
  ApiResponseQiYeJianDanRenZheng,
  QiYeZhiNenPiaoJiaRenZheng,
  ApiResponseJudgeSwitchEnterpriseLimitResp,
  ApiResponsestring,
  ApiResponseComPageEnterpriseIdentificationResp,
  EnterpriseIdentificationReq,
  ApiResponseQiYeZhuTiXinXi,
  DeptLinkEnterpriseReq,
  ApiResponseboolean,
  ApiResponseQueryJudgeClaimResp,
  ApiResponseQueryEnterprisePageHomeResp,
  ApiResponseDeptLinkEnterpriseResp,
} from './_interfaces'

/** 钱包临时使用，后面切换版本。分页查询员工信息【租户id, 姓名，手机号，状态】 */
export function apiEnterpriseIdentificationBaseInfoEmployeeList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageEmployeeResp> {
  return Http.post(
    '/api/enterprise/identification/baseInfo/employeeList',
    data,
    config
  )
}

/** 企业开户-（仅测试使用）认证结果通知 */
export function apiEnterpriseIdentificationEnterpriseV1OpenAcctCallback(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.put(
    '/api/enterprise/identification/enterprise/v1/openAcct/callback',
    data,
    config
  )
}

/** 企业开户-查询母公司-分页列表 */
export function apiEnterpriseIdentificationEnterpriseV1PageEnterpriseName(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsePageQiYeKaiHuXinXi> {
  return Http.post(
    '/api/enterprise/identification/enterprise/v1/page/enterpriseName',
    data,
    config
  )
}

/** 个人开户-(仅测试使用)认证结果通知 */
export function apiEnterpriseIdentificationPersonV1OpenAcctCallback(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.put(
    '/api/enterprise/identification/person/v1/openAcct/callback',
    data,
    config
  )
}

/** 企业的开户信息-查询 */
export function apiEnterpriseIdentificationV1OpenAcct(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQiYeKaiHuXinXi> {
  return Http.get('/api/enterprise/identification/v1/openAcct', data, config)
}

/** 企业的普通认证-查询反显 */
export function apiEnterpriseIdentificationV1SimpleAuth(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQiYeJianDanRenZheng> {
  return Http.get('/api/enterprise/identification/v1/simple/auth', data, config)
}

/** 企业的发票认证-录入发起（票据-智能票夹） */
export function apiEnterpriseIdentificationV1TicketAuth(
  data: QiYeZhiNenPiaoJiaRenZheng,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post(
    '/api/enterprise/identification/v1/ticket/auth',
    data,
    config
  )
}

/** 企业的开户信息-新增(分段) */
export function apiEnterpriseIdentificationV1EnterpriseIdOpenAcctAppend(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQiYeKaiHuXinXi> {
  return Http.post(
    '/api/enterprise/identification/v1/${enterpriseId}/openAcct/append',
    data,
    config
  )
}

/** 企业开户-认证开始 */
export function apiEnterpriseIdentificationV1EnterpriseIdOpenAcctExecute(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.put(
    '/api/enterprise/identification/v1/${enterpriseId}/openAcct/execute',
    data,
    config
  )
}

/** 是否可以操作切换主企业 */
export function apiEnterpriseIdentificationcenterAddEnterprise(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseJudgeSwitchEnterpriseLimitResp> {
  return Http.get('/api/enterprise/identificationcenter/addEnterprise', config)
}

/** 删除主企业 */
export function apiEnterpriseIdentificationcenterDelEnterprise(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.get(
    '/api/enterprise/identificationcenter/delEnterprise',
    data,
    config
  )
}

/** 查询租户企业列表 */
export function apiEnterpriseIdentificationcenterListEnterprise(
  data: EnterpriseIdentificationReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageEnterpriseIdentificationResp> {
  return Http.post(
    '/api/enterprise/identificationcenter/listEnterprise',
    data,
    config
  )
}

/** 切换主企业 */
export function apiEnterpriseIdentificationcenterSwitchMainEnterprise(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.get(
    '/api/enterprise/identificationcenter/switchMainEnterprise',
    data,
    config
  )
}

/** 查询企业认证主体信息-用于新的认证时候进行反显 */
export function apiEnterpriseIdentificationcenterEnterpriseIdMainAuthInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQiYeZhuTiXinXi> {
  return Http.get(
    '/api/enterprise/identificationcenter/${enterpriseId}/mainAuthInfo',
    data,
    config
  )
}

/** 覆写-企业关联组织 */
export function apiEnterpriseLinkDept(
  data: DeptLinkEnterpriseReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/enterprise/link/dept', data, config)
}

/** 认领企业信息 */
export function apiEnterprisePageHomeClaimCompanyId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/enterprise/pageHome/claim/${companyId}', data, config)
}

/** 排除企业信息 */
export function apiEnterprisePageHomeExcludeClaimId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/enterprise/pageHome/exclude/${claimId}', data, config)
}

/** 查询认领操作结果 */
export function apiEnterprisePageHomeJudge(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQueryJudgeClaimResp> {
  return Http.get('/api/enterprise/pageHome/judge', config)
}

/** 查询企业信息 */
export function apiEnterprisePageHomeQuery(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQueryEnterprisePageHomeResp> {
  return Http.get('/api/enterprise/pageHome/query', config)
}

/** 查询-企业关联的组织信息 */
export function apiEnterpriseIdLinkDept(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseDeptLinkEnterpriseResp> {
  return Http.get('/api/enterprise/${id}/link/dept', data, config)
}
