import {Http} from '../../httpJs/index';

/**
 * 钱包临时使用，后面切换版本。分页查询员工信息【租户id, 姓名，手机号，状态】
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationBaseInfoEmployeeList  (data, config) {
  return Http.post('/api/enterprise/identification/baseInfo/employeeList', data, config)
}

/**
 * 企业开户-（仅测试使用）认证结果通知
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationEnterpriseV1OpenAcctCallback  (data, config) {
  return Http.put('/api/enterprise/identification/enterprise/v1/openAcct/callback', data, config)
}

/**
 * 企业开户-查询母公司-分页列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationEnterpriseV1PageEnterpriseName  (data, config) {
  return Http.post('/api/enterprise/identification/enterprise/v1/page/enterpriseName', data, config)
}

/**
 * 个人开户-(仅测试使用)认证结果通知
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationPersonV1OpenAcctCallback  (data, config) {
  return Http.put('/api/enterprise/identification/person/v1/openAcct/callback', data, config)
}

/**
 * 企业的开户信息-查询
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationV1OpenAcct  (data, config) {
  return Http.get('/api/enterprise/identification/v1/openAcct', data, config)
}

/**
 * 企业的普通认证-查询反显
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationV1SimpleAuth  (data, config) {
  return Http.get('/api/enterprise/identification/v1/simple/auth', data, config)
}

/**
 * 企业的发票认证-录入发起（票据-智能票夹）
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationV1TicketAuth  (data, config) {
  return Http.post('/api/enterprise/identification/v1/ticket/auth', data, config)
}

/**
 * 企业的开户信息-新增(分段)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationV1EnterpriseIdOpenAcctAppend  (data, config) {
  return Http.post('/api/enterprise/identification/v1/${enterpriseId}/openAcct/append', data, config)
}

/**
 * 企业开户-认证开始
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationV1EnterpriseIdOpenAcctExecute  (data, config) {
  return Http.put('/api/enterprise/identification/v1/${enterpriseId}/openAcct/execute', data, config)
}

/**
 * 是否可以操作切换主企业
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationcenterAddEnterprise(config){
  return Http.get('/api/enterprise/identificationcenter/addEnterprise', config)
}

/**
 * 删除主企业
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationcenterDelEnterprise  (data, config) {
  return Http.get('/api/enterprise/identificationcenter/delEnterprise', data, config)
}

/**
 * 查询租户企业列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationcenterListEnterprise  (data, config) {
  return Http.post('/api/enterprise/identificationcenter/listEnterprise', data, config)
}

/**
 * 切换主企业
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationcenterSwitchMainEnterprise  (data, config) {
  return Http.get('/api/enterprise/identificationcenter/switchMainEnterprise', data, config)
}

/**
 * 查询企业认证主体信息-用于新的认证时候进行反显
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdentificationcenterEnterpriseIdMainAuthInfo  (data, config) {
  return Http.get('/api/enterprise/identificationcenter/${enterpriseId}/mainAuthInfo', data, config)
}

/**
 * 覆写-企业关联组织
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseLinkDept  (data, config) {
  return Http.post('/api/enterprise/link/dept', data, config)
}

/**
 * 认领企业信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterprisePageHomeClaimCompanyId  (data, config) {
  return Http.get('/api/enterprise/pageHome/claim/${companyId}', data, config)
}

/**
 * 排除企业信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterprisePageHomeExcludeClaimId  (data, config) {
  return Http.get('/api/enterprise/pageHome/exclude/${claimId}', data, config)
}

/**
 * 查询认领操作结果
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterprisePageHomeJudge(config){
  return Http.get('/api/enterprise/pageHome/judge', config)
}

/**
 * 查询企业信息
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterprisePageHomeQuery(config){
  return Http.get('/api/enterprise/pageHome/query', config)
}

/**
 * 查询-企业关联的组织信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function enterpriseIdLinkDept  (data, config) {
  return Http.get('/api/enterprise/${id}/link/dept', data, config)
}
