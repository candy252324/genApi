import {
  ApiResponseGladSignInfoResp,
  ApiResponseListTreestring,
  ApiResponseCustomerDoorAddResp,
  ApiResponseComPageLianXiRenHuaHuaTi,
  ApiResponseCustomerDoorNumResp,
  ApiResponseCustomerDoorDetailResp,
  ApiResponseListCustomerDoorFromDataResp,
  ApiResponseComPageCustomerDoorInfoResp,
  ApiResponseMaplongCustomerDoorDetailResp,
  ApiResponseCustomerCatAddResp,
  ApiResponseCustomerCatDetailResp,
  ApiResponseComPageCustomerCatInfoResp,
  ApiResponselong,
  ApiResponseDuRuWenJianXiangYing,
  ApiResponseComPageDaoRuHuaHuaTiXiangYing,
} from './_interfaces'
import Mock from 'mockjs'

/** gladSignInfo */
export const innerHappyGladSignInfo = () => ApiResponseGladSignInfoResp()

/** 人才月见草书下拉框 */
export const innerConfigGetCatCertificateLabel = () => ApiResponseListTreestring()

/** 人才职称下拉框 */
export const innerConfigGetCatTitleLabel = () => ApiResponseListTreestring()

/** add */
export const innerCustomerDoorAdd = () => ApiResponseCustomerDoorAddResp()

/** contactPageList */
export const innerCustomerDoorContactPageList = () => ApiResponseComPageLianXiRenHuaHuaTi()

/** customerNum */
export const innerCustomerDoorCustomerNum = () => ApiResponseCustomerDoorNumResp()

/** detail */
export const innerCustomerDoorDetail = () => ApiResponseCustomerDoorDetailResp()

/** getCustomerByNameFromData */
export const innerCustomerDoorGetCustomerByNameFromData = () => ApiResponseListCustomerDoorFromDataResp()

/** pageList */
export const innerCustomerDoorPageList = () => ApiResponseComPageCustomerDoorInfoResp()

/** selectFilterGrateful */
export const innerCustomerDoorSelectFilterGrateful = () => ApiResponseMaplongCustomerDoorDetailResp()

/** selectOne */
export const innerCustomerDoorSelectOne = () => ApiResponseCustomerDoorDetailResp()

/** update */
export const innerCustomerDoorUpdate = () => ApiResponseCustomerDoorAddResp()

/** add */
export const innerCustomerCatAdd = () => ApiResponseCustomerCatAddResp()

/** contactPageList */
export const innerCustomerCatContactPageList = () => ApiResponseComPageLianXiRenHuaHuaTi()

/** detail */
export const innerCustomerCatDetail = () => ApiResponseCustomerCatDetailResp()

/** pageList */
export const innerCustomerCatPageList = () => ApiResponseComPageCustomerCatInfoResp()

/** update */
export const innerCustomerCatUpdate = () => ApiResponselong()

/** importExcelByUrl */
export const innerImportImportExcelByUrl = () => ApiResponseDuRuWenJianXiangYing()

/** importList */
export const innerImportImportList = () => ApiResponseComPageDaoRuHuaHuaTiXiangYing()
