import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiBusinessAddBusinessEnterprise,
  ResOfApiBusinessAddBusinessPerson,
  ResOfApiBusinessAddBusinessProject,
  ResOfApiBusinessAddSignBusinessEnterprise,
  ResOfApiBusinessAddSignBusinessPerson,
  ResOfApiBusinessAddSignBusinessProject,
  ResOfApiBusinessAssignBusiness,
  ResOfApiBusinessEditBusinessEnterprise,
  ResOfApiBusinessEditBusinessPerson,
  ResOfApiBusinessEditBusinessProject,
  ResOfApiBusinessEnterpriseDetail,
  ResOfApiBusinessEnterpriseInfo,
  ResOfApiBusinessLink,
  ResOfApiBusinessPageEnterpriseSampleList,
  ResOfApiBusinessPageEnterpriseBusinessPool,
  ResOfApiBusinessPagePersonSampleList,
  ResOfApiBusinessPagePersonBusinessPool,
  ResOfApiBusinessPageProjectSampleList,
  ResOfApiBusinessPageProjectBusinessPool,
  ResOfApiBusinessPersonNotifySign,
  ResOfApiBusinessPersonInfo,
  ResOfApiBusinessProjectAdd,
  ResOfApiBusinessProjectGet,
  ResOfApiBusinessProjectModified,
  ResOfApiBusinessProjectPageList,
  ResOfApiBusinessProjectInfo,
  ResOfApiBusinessReceiveBusiness,
  ResOfApiBusinessVerifyRepeatBusiness,
} from './_interfaces'

/** 新增企业商机 */
export function apiBusinessAddBusinessEnterprise(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessAddBusinessEnterprise> {
  return Http.post('/api/business/addBusinessEnterprise', data, config)
}

/** 新增人才商机 */
export function apiBusinessAddBusinessPerson(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessAddBusinessPerson> {
  return Http.post('/api/business/addBusinessPerson', data, config)
}

/** 新增项目商机 */
export function apiBusinessAddBusinessProject(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessAddBusinessProject> {
  return Http.post('/api/business/addBusinessProject', data, config)
}

/** 新增企业商机(创建/领取/签约) */
export function apiBusinessAddSignBusinessEnterprise(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessAddSignBusinessEnterprise> {
  return Http.post('/api/business/addSignBusinessEnterprise', data, config)
}

/** 新增人才商机(创建/领取/签约) */
export function apiBusinessAddSignBusinessPerson(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessAddSignBusinessPerson> {
  return Http.post('/api/business/addSignBusinessPerson', data, config)
}

/** 新增项目商机(创建/领取/签约) */
export function apiBusinessAddSignBusinessProject(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessAddSignBusinessProject> {
  return Http.post('/api/business/addSignBusinessProject', data, config)
}

/** 分派商机 */
export function apiBusinessAssignBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessAssignBusiness> {
  return Http.post('/api/business/assignBusiness', data, config)
}

/** 修改企业商机 */
export function apiBusinessEditBusinessEnterprise(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessEditBusinessEnterprise> {
  return Http.post('/api/business/editBusinessEnterprise', data, config)
}

/** 修改人才商机 */
export function apiBusinessEditBusinessPerson(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessEditBusinessPerson> {
  return Http.post('/api/business/editBusinessPerson', data, config)
}

/** 修改项目商机 */
export function apiBusinessEditBusinessProject(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessEditBusinessProject> {
  return Http.post('/api/business/editBusinessProject', data, config)
}

/** 企业商机详情 */
export function apiBusinessEnterpriseDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessEnterpriseDetail> {
  return Http.post('/api/business/enterprise/detail', data, config)
}

/** 企业商机详情 */
export function apiBusinessEnterpriseInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessEnterpriseInfo> {
  return Http.get('/api/business/enterpriseInfo', data, config)
}

/** 关联工商/人才库/项目库信息 */
export function apiBusinessLink(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessLink> {
  return Http.post('/api/business/link', data, config)
}

/** 企业商机列表(下拉框简单数据) */
export function apiBusinessPageEnterpriseSampleList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessPageEnterpriseSampleList> {
  return Http.post('/api/business/pageEnterprise/sampleList', data, config)
}

/** 企业商机列表 */
export function apiBusinessPageEnterpriseBusinessPool(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessPageEnterpriseBusinessPool> {
  return Http.post('/api/business/pageEnterpriseBusinessPool', data, config)
}

/** 人才商机列表(下拉框简单数据) */
export function apiBusinessPagePersonSampleList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessPagePersonSampleList> {
  return Http.post('/api/business/pagePerson/sampleList', data, config)
}

/** 人才商机列表 */
export function apiBusinessPagePersonBusinessPool(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessPagePersonBusinessPool> {
  return Http.post('/api/business/pagePersonBusinessPool', data, config)
}

/** 项目商机列表(下拉框简单数据) */
export function apiBusinessPageProjectSampleList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessPageProjectSampleList> {
  return Http.post('/api/business/pageProject/sampleList', data, config)
}

/** 项目商机列表 */
export function apiBusinessPageProjectBusinessPool(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessPageProjectBusinessPool> {
  return Http.post('/api/business/pageProjectBusinessPool', data, config)
}

/** notifySign */
export function apiBusinessPersonNotifySign(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessPersonNotifySign> {
  return Http.get('/api/business/person/notifySign', data, config)
}

/** 人才商机详情 */
export function apiBusinessPersonInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessPersonInfo> {
  return Http.get('/api/business/personInfo', data, config)
}

/** 新增项目商机 */
export function apiBusinessProjectAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessProjectAdd> {
  return Http.post('/api/business/project/add', data, config)
}

/** 项目商机详情 */
export function apiBusinessProjectGet(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessProjectGet> {
  return Http.get('/api/business/project/get', data, config)
}

/** 修改项目商机 */
export function apiBusinessProjectModified(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessProjectModified> {
  return Http.post('/api/business/project/modified', data, config)
}

/** 分页查询项目商机 */
export function apiBusinessProjectPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessProjectPageList> {
  return Http.post('/api/business/project/pageList', data, config)
}

/** 项目商机详情 */
export function apiBusinessProjectInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessProjectInfo> {
  return Http.get('/api/business/projectInfo', data, config)
}

/** 领取商机 */
export function apiBusinessReceiveBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessReceiveBusiness> {
  return Http.post('/api/business/receiveBusiness', data, config)
}

/** 校验重复商机 */
export function apiBusinessVerifyRepeatBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessVerifyRepeatBusiness> {
  return Http.post('/api/business/verifyRepeatBusiness', data, config)
}
