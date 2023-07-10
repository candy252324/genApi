import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseBusinessReceiveResp,
  AddBusinessEnterpriseReq,
  AddBusinessPersonReq,
  AddBusinessProjectReq,
  ApiResponseAddSignBusinessResp,
  AddSignBusinessEnterpriseReq,
  AddSignBusinessPersonReq,
  AddSignBusinessProjectReq,
  AssignBusinessReq,
  ApiResponse,
  ApiResponseQiYeShangJiXiangQingrpcresponse,
  InnerRpclong,
  ApiResponseBusinessEnterpriseInfoResp,
  ApiResponseGuanLianShangJiResponse,
  GuanLianShangJiRequest,
  ApiResponseComPageFenYeChaXunQiYeShangJiresponseJianDanShuJu,
  FenYeChaXunQiYeShangJiJianDanShuJu,
  ApiResponseComPagePageEnterpriseBusinessPoolResp,
  FenYeChaXunQiYeShangJiGongHai,
  ApiResponseComPageFenYeChaXunRenCaiShangJiresponseJianDanShuJu,
  FenYeChaXunRenCaiShangJiJianDanShuJu,
  ApiResponseComPagePagePersonBusinessPoolResp,
  FenYeChaXunRenCaiShangJiGongHai,
  ApiResponseComPageFenYeChaXunXiangMuShangJiresponseJianDanShuJu,
  FenYeChaXunXiangMuShangJiJianDanShuJu,
  ApiResponseComPagePageProjectBusinessPoolResp,
  XiangMuShangJiGongHaiChaXun,
  ApiResponseVoid,
  SignResultReq,
  ApiResponseBusinessPersonInfoResp,
  InnerRpcXinZengXiangMuShangJirpcJieKou,
  ApiResponseXiangMuShangJiXiangQingrpcresponse,
  XiangMuShangJiXiuGairpcrequest,
  ApiResponseComPageXiangMuShangJiXiangQingrpcresponse,
  XiangMuShangJiFenYeChaXunrpcrequest,
  ApiResponseBusinessProjectInfoResp,
  ReceiveBusinessReq,
  ApiResponseAddBusinessResp,
  VerifyRepeatBusinessReq,
} from './_interfaces'

/** 新增企业商机 */
export function apiBusinessAddBusinessEnterprise(
  data: AddBusinessEnterpriseReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseBusinessReceiveResp> {
  return Http.post('/api/business/addBusinessEnterprise', data, config)
}

/** 新增人才商机 */
export function apiBusinessAddBusinessPerson(
  data: AddBusinessPersonReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseBusinessReceiveResp> {
  return Http.post('/api/business/addBusinessPerson', data, config)
}

/** 新增项目商机 */
export function apiBusinessAddBusinessProject(
  data: AddBusinessProjectReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseBusinessReceiveResp> {
  return Http.post('/api/business/addBusinessProject', data, config)
}

/** 新增企业商机(创建/领取/签约) */
export function apiBusinessAddSignBusinessEnterprise(
  data: AddSignBusinessEnterpriseReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseAddSignBusinessResp> {
  return Http.post('/api/business/addSignBusinessEnterprise', data, config)
}

/** 新增人才商机(创建/领取/签约) */
export function apiBusinessAddSignBusinessPerson(
  data: AddSignBusinessPersonReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseAddSignBusinessResp> {
  return Http.post('/api/business/addSignBusinessPerson', data, config)
}

/** 新增项目商机(创建/领取/签约) */
export function apiBusinessAddSignBusinessProject(
  data: AddSignBusinessProjectReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseAddSignBusinessResp> {
  return Http.post('/api/business/addSignBusinessProject', data, config)
}

/** 分派商机 */
export function apiBusinessAssignBusiness(
  data: AssignBusinessReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseBusinessReceiveResp> {
  return Http.post('/api/business/assignBusiness', data, config)
}

/** 修改企业商机 */
export function apiBusinessEditBusinessEnterprise(
  data: AddBusinessEnterpriseReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/business/editBusinessEnterprise', data, config)
}

/** 修改人才商机 */
export function apiBusinessEditBusinessPerson(
  data: AddBusinessPersonReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/business/editBusinessPerson', data, config)
}

/** 修改项目商机 */
export function apiBusinessEditBusinessProject(
  data: AddBusinessProjectReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/business/editBusinessProject', data, config)
}

/** 企业商机详情 */
export function apiBusinessEnterpriseDetail(
  data: InnerRpclong,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQiYeShangJiXiangQingrpcresponse> {
  return Http.post('/api/business/enterprise/detail', data, config)
}

/** 企业商机详情 */
export function apiBusinessEnterpriseInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseBusinessEnterpriseInfoResp> {
  return Http.get('/api/business/enterpriseInfo', data, config)
}

/** 关联工商/人才库/项目库信息 */
export function apiBusinessLink(
  data: GuanLianShangJiRequest,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseGuanLianShangJiResponse> {
  return Http.post('/api/business/link', data, config)
}

/** 企业商机列表(下拉框简单数据) */
export function apiBusinessPageEnterpriseSampleList(
  data: FenYeChaXunQiYeShangJiJianDanShuJu,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageFenYeChaXunQiYeShangJiresponseJianDanShuJu> {
  return Http.post('/api/business/pageEnterprise/sampleList', data, config)
}

/** 企业商机列表 */
export function apiBusinessPageEnterpriseBusinessPool(
  data: FenYeChaXunQiYeShangJiGongHai,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPagePageEnterpriseBusinessPoolResp> {
  return Http.post('/api/business/pageEnterpriseBusinessPool', data, config)
}

/** 人才商机列表(下拉框简单数据) */
export function apiBusinessPagePersonSampleList(
  data: FenYeChaXunRenCaiShangJiJianDanShuJu,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageFenYeChaXunRenCaiShangJiresponseJianDanShuJu> {
  return Http.post('/api/business/pagePerson/sampleList', data, config)
}

/** 人才商机列表 */
export function apiBusinessPagePersonBusinessPool(
  data: FenYeChaXunRenCaiShangJiGongHai,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPagePagePersonBusinessPoolResp> {
  return Http.post('/api/business/pagePersonBusinessPool', data, config)
}

/** 项目商机列表(下拉框简单数据) */
export function apiBusinessPageProjectSampleList(
  data: FenYeChaXunXiangMuShangJiJianDanShuJu,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageFenYeChaXunXiangMuShangJiresponseJianDanShuJu> {
  return Http.post('/api/business/pageProject/sampleList', data, config)
}

/** 项目商机列表 */
export function apiBusinessPageProjectBusinessPool(
  data: XiangMuShangJiGongHaiChaXun,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPagePageProjectBusinessPoolResp> {
  return Http.post('/api/business/pageProjectBusinessPool', data, config)
}

/** notifySign */
export function apiBusinessPersonNotifySign(
  data: SignResultReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/business/person/notifySign', data, config)
}

/** 人才商机详情 */
export function apiBusinessPersonInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseBusinessPersonInfoResp> {
  return Http.get('/api/business/personInfo', data, config)
}

/** 新增项目商机 */
export function apiBusinessProjectAdd(
  data: InnerRpcXinZengXiangMuShangJirpcJieKou,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/business/project/add', data, config)
}

/** 项目商机详情 */
export function apiBusinessProjectGet(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseXiangMuShangJiXiangQingrpcresponse> {
  return Http.get('/api/business/project/get', data, config)
}

/** 修改项目商机 */
export function apiBusinessProjectModified(
  data: XiangMuShangJiXiuGairpcrequest,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/business/project/modified', data, config)
}

/** 分页查询项目商机 */
export function apiBusinessProjectPageList(
  data: XiangMuShangJiFenYeChaXunrpcrequest,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageXiangMuShangJiXiangQingrpcresponse> {
  return Http.post('/api/business/project/pageList', data, config)
}

/** 项目商机详情 */
export function apiBusinessProjectInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseBusinessProjectInfoResp> {
  return Http.get('/api/business/projectInfo', data, config)
}

/** 领取商机 */
export function apiBusinessReceiveBusiness(
  data: ReceiveBusinessReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseBusinessReceiveResp> {
  return Http.post('/api/business/receiveBusiness', data, config)
}

/** 校验重复商机 */
export function apiBusinessVerifyRepeatBusiness(
  data: VerifyRepeatBusinessReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseAddBusinessResp> {
  return Http.post('/api/business/verifyRepeatBusiness', data, config)
}
