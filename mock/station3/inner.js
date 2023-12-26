import Mock from 'better-mock'
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

/** gladSignInfo */
export const innerHappyGladSignInfo = () => Mock.mock(ApiResponseGladSignInfoResp())

/** 人才月见草书下拉框 */
export const innerConfigGetCatCertificateLabel = () => Mock.mock(ApiResponseListTreestring())

/** 人才职称下拉框 */
export const innerConfigGetCatTitleLabel = () => Mock.mock(ApiResponseListTreestring())

/** add */
export const innerCustomerDoorAdd = () => Mock.mock(ApiResponseCustomerDoorAddResp())

/** contactPageList */
export const innerCustomerDoorContactPageList = () => Mock.mock(ApiResponseComPageLianXiRenHuaHuaTi())

/** customerNum */
export const innerCustomerDoorCustomerNum = () => Mock.mock(ApiResponseCustomerDoorNumResp())

/** detail */
export const innerCustomerDoorDetail = () => Mock.mock(ApiResponseCustomerDoorDetailResp())

/** getCustomerByNameFromData */
export const innerCustomerDoorGetCustomerByNameFromData = () => Mock.mock(ApiResponseListCustomerDoorFromDataResp())

/** pageList */
export const innerCustomerDoorPageList = () => Mock.mock(ApiResponseComPageCustomerDoorInfoResp())

/** selectFilterGrateful */
export const innerCustomerDoorSelectFilterGrateful = () => Mock.mock(ApiResponseMaplongCustomerDoorDetailResp())

/** selectOne */
export const innerCustomerDoorSelectOne = () => Mock.mock(ApiResponseCustomerDoorDetailResp())

/** update */
export const innerCustomerDoorUpdate = () => Mock.mock(ApiResponseCustomerDoorAddResp())

/** add */
export const innerCustomerCatAdd = () => Mock.mock(ApiResponseCustomerCatAddResp())

/** contactPageList */
export const innerCustomerCatContactPageList = () => Mock.mock(ApiResponseComPageLianXiRenHuaHuaTi())

/** detail */
export const innerCustomerCatDetail = () => Mock.mock(ApiResponseCustomerCatDetailResp())

/** pageList */
export const innerCustomerCatPageList = () => Mock.mock(ApiResponseComPageCustomerCatInfoResp())

/** update */
export const innerCustomerCatUpdate = () => Mock.mock(ApiResponselong())

/** importExcelByUrl */
export const innerImportImportExcelByUrl = () => Mock.mock(ApiResponseDuRuWenJianXiangYing())

/** importList */
export const innerImportImportList = () => Mock.mock(ApiResponseComPageDaoRuHuaHuaTiXiangYing())
