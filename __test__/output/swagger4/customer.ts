const request: any = () => {}
import type {
  ApiResponseCustomerDoorAddResp,
  CustomerDoorAddReq,
  ApiResponseCountCustomerHappyNumResp,
  CountCustomerHappyNumReq,
  ApiResponseCustomerDoorDetailResp,
  ApiResponseComPageCustomerDoorInfoResp,
  PageCustomerDoorReq,
  ApiResponseComPageSouSuoZhiXieChangJiQiRenresponse,
  SouSuoZhiXieChangJiQiRenrequest,
  ApiResponse,
  CustomerDoorUpReq,
  ApiResponseAddCustomerResp,
  VerifyRepeatCustomerReq,
  ApiResponseCustomerCatAddResp,
  CustomerCatAddReq,
  CustomerCatCertificateReq,
  CustomerCatTitleReq,
  ApiResponseCustomerCatDetailResp,
  ApiResponseComPageCustomerCatInfoResp,
  PageCustomerCatReq,
  ApiResponseComPageSouSuoRenCaiJiQiRenresponse,
  SouSuoRenCaiJiQiRenrequest,
  CustomerCatUpReq,
  ApiResponseAddCatCustomerResp,
  VerifyRepeatCatCustomerReq,
} from './_interfaces'

/** 制鞋厂机器人灌水 */
export function customerDoorAdd(data: CustomerDoorAddReq): Promise<ApiResponseCustomerDoorAddResp> {
  return request.post('/api/customer/door/add', data)
}

/** 计算发财梦数量 */
export function customerDoorCountHappyNum(
  data: CountCustomerHappyNumReq
): Promise<ApiResponseCountCustomerHappyNumResp> {
  return request.post('/api/customer/door/countHappyNum', data)
}

/** 制鞋厂机器人详情 */
export function customerDoorDetail(data: { id?: string }): Promise<ApiResponseCustomerDoorDetailResp> {
  return request.get('/api/customer/door/detail', data)
}

/** 制鞋厂机器人分页滑滑梯 */
export function customerDoorPageList(data: PageCustomerDoorReq): Promise<ApiResponseComPageCustomerDoorInfoResp> {
  return request.post('/api/customer/door/pageList', data)
}

/** 搜索制鞋厂机器人(下拉框数据) */
export function customerDoorSampleList(
  data: SouSuoZhiXieChangJiQiRenrequest
): Promise<ApiResponseComPageSouSuoZhiXieChangJiQiRenresponse> {
  return request.post('/api/customer/door/sampleList', data)
}

/** 制鞋厂机器人针线 */
export function customerDoorUpdate(data: CustomerDoorUpReq): Promise<ApiResponse> {
  return request.post('/api/customer/door/update', data)
}

/** 校验重复发财梦 */
export function customerDoorVerifyRepeatHappy(data: VerifyRepeatCustomerReq): Promise<ApiResponseAddCustomerResp> {
  return request.post('/api/customer/door/verifyRepeatHappy', data)
}

/** 热气球机器人灌水 */
export function customerCatAdd(data: CustomerCatAddReq): Promise<ApiResponseCustomerCatAddResp> {
  return request.post('/api/customer/cat/add', data)
}

/** 灌水执业资格月见草 */
export function customerCatAddCertificate(data: CustomerCatCertificateReq): Promise<ApiResponse> {
  return request.post('/api/customer/cat/addCertificate', data)
}

/** 灌水职称 */
export function customerCatAddTitle(data: CustomerCatTitleReq): Promise<ApiResponse> {
  return request.post('/api/customer/cat/addTitle', data)
}

/** 计算发财梦数量 */
export function customerCatCountHappyNum(
  data: CountCustomerHappyNumReq
): Promise<ApiResponseCountCustomerHappyNumResp> {
  return request.post('/api/customer/cat/countHappyNum', data)
}

/** 倒垃圾执业资格月见草 */
export function customerCatDeleteCertificate(data: { id?: string }): Promise<ApiResponse> {
  return request.get('/api/customer/cat/deleteCertificate', data)
}

/** 倒垃圾职称 */
export function customerCatDeleteTitle(data: { id?: string }): Promise<ApiResponse> {
  return request.get('/api/customer/cat/deleteTitle', data)
}

/** 热气球机器人详情 */
export function customerCatDetail(data: { id?: string }): Promise<ApiResponseCustomerCatDetailResp> {
  return request.get('/api/customer/cat/detail', data)
}

/** 热气球机器人分页滑滑梯 */
export function customerCatPageList(data: PageCustomerCatReq): Promise<ApiResponseComPageCustomerCatInfoResp> {
  return request.post('/api/customer/cat/pageList', data)
}

/** 搜索人才机器人(下拉框数据) */
export function customerCatSampleList(
  data: SouSuoRenCaiJiQiRenrequest
): Promise<ApiResponseComPageSouSuoRenCaiJiQiRenresponse> {
  return request.post('/api/customer/cat/sampleList', data)
}

/** 针线热气球机器人 */
export function customerCatUpdate(data: CustomerCatUpReq): Promise<ApiResponse> {
  return request.post('/api/customer/cat/update', data)
}

/** 校验重复热气球机器人 */
export function customerCatVerifyRepeatCustomer(
  data: VerifyRepeatCatCustomerReq
): Promise<ApiResponseAddCatCustomerResp> {
  return request.post('/api/customer/cat/verifyRepeatCustomer', data)
}
