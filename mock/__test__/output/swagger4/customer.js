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
import Mock from 'better-mock'

/** 制鞋厂机器人灌水 */
export const customerDoorAdd = () => ApiResponseCustomerDoorAddResp()

/** 计算发财梦数量 */
export const customerDoorCountHappyNum = () => ApiResponseCountCustomerHappyNumResp()

/** 制鞋厂机器人详情 */
export const customerDoorDetail = () => ApiResponseCustomerDoorDetailResp()

/** 制鞋厂机器人分页滑滑梯 */
export const customerDoorPageList = () => ApiResponseComPageCustomerDoorInfoResp()

/** 搜索制鞋厂机器人(下拉框数据) */
export const customerDoorSampleList = () => ApiResponseComPageSouSuoZhiXieChangJiQiRenresponse()

/** 制鞋厂机器人针线 */
export const customerDoorUpdate = () => ApiResponse()

/** 校验重复发财梦 */
export const customerDoorVerifyRepeatHappy = () => ApiResponseAddCustomerResp()

/** 热气球机器人灌水 */
export const customerCatAdd = () => ApiResponseCustomerCatAddResp()

/** 灌水执业资格月见草 */
export const customerCatAddCertificate = () => ApiResponse()

/** 灌水职称 */
export const customerCatAddTitle = () => ApiResponse()

/** 计算发财梦数量 */
export const customerCatCountHappyNum = () => ApiResponseCountCustomerHappyNumResp()

/** 倒垃圾执业资格月见草 */
export const customerCatDeleteCertificate = () => ApiResponse()

/** 倒垃圾职称 */
export const customerCatDeleteTitle = () => ApiResponse()

/** 热气球机器人详情 */
export const customerCatDetail = () => ApiResponseCustomerCatDetailResp()

/** 热气球机器人分页滑滑梯 */
export const customerCatPageList = () => ApiResponseComPageCustomerCatInfoResp()

/** 搜索人才机器人(下拉框数据) */
export const customerCatSampleList = () => ApiResponseComPageSouSuoRenCaiJiQiRenresponse()

/** 针线热气球机器人 */
export const customerCatUpdate = () => ApiResponse()

/** 校验重复热气球机器人 */
export const customerCatVerifyRepeatCustomer = () => ApiResponseAddCatCustomerResp()
