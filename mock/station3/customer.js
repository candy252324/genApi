import Mock from 'better-mock'
import {
  ApiResponseCustomerDoorAddResp,
  ApiResponseCountCustomerHappyNumResp,
  ApiResponseCustomerDoorDetailResp,
  ApiResponseComPageCustomerDoorInfoResp,
  ApiResponseComPageSouSuoZhiXieChangJiQiRenresponse,
  ApiResponse,
  ApiResponseAddCustomerResp,
  ApiResponseCustomerCatAddResp,
  ApiResponseCustomerCatDetailResp,
  ApiResponseComPageCustomerCatInfoResp,
  ApiResponseComPageSouSuoRenCaiJiQiRenresponse,
  ApiResponseAddCatCustomerResp,
} from './_interfaces'

/** 制鞋厂机器人灌水 */
export const customerDoorAdd = () => Mock.mock(ApiResponseCustomerDoorAddResp())

/** 计算发财梦数量 */
export const customerDoorCountHappyNum = () => Mock.mock(ApiResponseCountCustomerHappyNumResp())

/** 制鞋厂机器人详情 */
export const customerDoorDetail = () => Mock.mock(ApiResponseCustomerDoorDetailResp())

/** 制鞋厂机器人分页滑滑梯 */
export const customerDoorPageList = () => Mock.mock(ApiResponseComPageCustomerDoorInfoResp())

/** 搜索制鞋厂机器人(下拉框数据) */
export const customerDoorSampleList = () => Mock.mock(ApiResponseComPageSouSuoZhiXieChangJiQiRenresponse())

/** 制鞋厂机器人针线 */
export const customerDoorUpdate = () => Mock.mock(ApiResponse())

/** 校验重复发财梦 */
export const customerDoorVerifyRepeatHappy = () => Mock.mock(ApiResponseAddCustomerResp())

/** 热气球机器人灌水 */
export const customerCatAdd = () => Mock.mock(ApiResponseCustomerCatAddResp())

/** 灌水执业资格月见草 */
export const customerCatAddCertificate = () => Mock.mock(ApiResponse())

/** 灌水职称 */
export const customerCatAddTitle = () => Mock.mock(ApiResponse())

/** 计算发财梦数量 */
export const customerCatCountHappyNum = () => Mock.mock(ApiResponseCountCustomerHappyNumResp())

/** 倒垃圾执业资格月见草 */
export const customerCatDeleteCertificate = () => Mock.mock(ApiResponse())

/** 倒垃圾职称 */
export const customerCatDeleteTitle = () => Mock.mock(ApiResponse())

/** 热气球机器人详情 */
export const customerCatDetail = () => Mock.mock(ApiResponseCustomerCatDetailResp())

/** 热气球机器人分页滑滑梯 */
export const customerCatPageList = () => Mock.mock(ApiResponseComPageCustomerCatInfoResp())

/** 搜索人才机器人(下拉框数据) */
export const customerCatSampleList = () => Mock.mock(ApiResponseComPageSouSuoRenCaiJiQiRenresponse())

/** 针线热气球机器人 */
export const customerCatUpdate = () => Mock.mock(ApiResponse())

/** 校验重复热气球机器人 */
export const customerCatVerifyRepeatCustomer = () => Mock.mock(ApiResponseAddCatCustomerResp())
