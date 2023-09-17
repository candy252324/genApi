const request: any = () => {}
import type {
  ApiResponseGladSignInfoResp,
  InnerRpclong,
  ApiResponseListTreestring,
  ApiResponseCustomerDoorAddResp,
  InnerRpcCustomerDoorAddReq,
  ApiResponseComPageLianXiRenHuaHuaTi,
  InnerRpcPageContactReq,
  ApiResponseCustomerDoorNumResp,
  InnerRpcCustomerDoorNumReq,
  ApiResponseCustomerDoorDetailResp,
  ApiResponseListCustomerDoorFromDataResp,
  InnerRpcCustomerDoorFromDataReq,
  ApiResponseComPageCustomerDoorInfoResp,
  InnerRpcPageCustomerDoorReq,
  ApiResponseMaplongCustomerDoorDetailResp,
  SelectCustomerDoorGratefulReq,
  InnerRpcSelectCustomerDoorReq,
  InnerRpcCustomerDoorUpReq,
  ApiResponseCustomerCatAddResp,
  InnerRpcCustomerCatAddReq,
  ApiResponseCustomerCatDetailResp,
  ApiResponseComPageCustomerCatInfoResp,
  InnerRpcPageCustomerCatReq,
  ApiResponselong,
  InnerRpcCustomerCatUpReq,
  ApiResponseDuRuWenJianXiangYing,
  InnerRpcImportExcelByUrlReq,
  ApiResponseComPageDaoRuHuaHuaTiXiangYing,
  InnerRpcImportListReq,
} from './_interfaces'

/** gladSignInfo */
export function innerHappyGladSignInfo(data: InnerRpclong): Promise<ApiResponseGladSignInfoResp> {
  return request.post('/inner/happy/glad/signInfo', data)
}

/** 人才月见草书下拉框 */
export function innerConfigGetCatCertificateLabel(): Promise<ApiResponseListTreestring> {
  return request.post('/inner/config/getCatCertificateLabel')
}

/** 人才职称下拉框 */
export function innerConfigGetCatTitleLabel(): Promise<ApiResponseListTreestring> {
  return request.post('/inner/config/getCatTitleLabel')
}

/** add */
export function innerCustomerDoorAdd(data: InnerRpcCustomerDoorAddReq): Promise<ApiResponseCustomerDoorAddResp> {
  return request.post('/inner/customer/door/add', data)
}

/** contactPageList */
export function innerCustomerDoorContactPageList(
  data: InnerRpcPageContactReq
): Promise<ApiResponseComPageLianXiRenHuaHuaTi> {
  return request.post('/inner/customer/door/contact/pageList', data)
}

/** customerNum */
export function innerCustomerDoorCustomerNum(
  data: InnerRpcCustomerDoorNumReq
): Promise<ApiResponseCustomerDoorNumResp> {
  return request.post('/inner/customer/door/customerNum', data)
}

/** detail */
export function innerCustomerDoorDetail(data: InnerRpclong): Promise<ApiResponseCustomerDoorDetailResp> {
  return request.post('/inner/customer/door/detail', data)
}

/** getCustomerByNameFromData */
export function innerCustomerDoorGetCustomerByNameFromData(
  data: InnerRpcCustomerDoorFromDataReq
): Promise<ApiResponseListCustomerDoorFromDataResp> {
  return request.post('/inner/customer/door/getCustomerByNameFromData', data)
}

/** pageList */
export function innerCustomerDoorPageList(
  data: InnerRpcPageCustomerDoorReq
): Promise<ApiResponseComPageCustomerDoorInfoResp> {
  return request.post('/inner/customer/door/pageList', data)
}

/** selectFilterGrateful */
export function innerCustomerDoorSelectFilterGrateful(
  data: SelectCustomerDoorGratefulReq
): Promise<ApiResponseMaplongCustomerDoorDetailResp> {
  return request.post('/inner/customer/door/selectFilterGrateful', data)
}

/** selectOne */
export function innerCustomerDoorSelectOne(
  data: InnerRpcSelectCustomerDoorReq
): Promise<ApiResponseCustomerDoorDetailResp> {
  return request.post('/inner/customer/door/selectOne', data)
}

/** update */
export function innerCustomerDoorUpdate(data: InnerRpcCustomerDoorUpReq): Promise<ApiResponseCustomerDoorAddResp> {
  return request.post('/inner/customer/door/update', data)
}

/** add */
export function innerCustomerCatAdd(data: InnerRpcCustomerCatAddReq): Promise<ApiResponseCustomerCatAddResp> {
  return request.post('/inner/customer/cat/add', data)
}

/** contactPageList */
export function innerCustomerCatContactPageList(
  data: InnerRpcPageContactReq
): Promise<ApiResponseComPageLianXiRenHuaHuaTi> {
  return request.post('/inner/customer/cat/contact/pageList', data)
}

/** detail */
export function innerCustomerCatDetail(data: InnerRpclong): Promise<ApiResponseCustomerCatDetailResp> {
  return request.post('/inner/customer/cat/detail', data)
}

/** pageList */
export function innerCustomerCatPageList(
  data: InnerRpcPageCustomerCatReq
): Promise<ApiResponseComPageCustomerCatInfoResp> {
  return request.post('/inner/customer/cat/pageList', data)
}

/** update */
export function innerCustomerCatUpdate(data: InnerRpcCustomerCatUpReq): Promise<ApiResponselong> {
  return request.post('/inner/customer/cat/update', data)
}

/** importExcelByUrl */
export function innerImportImportExcelByUrl(
  data: InnerRpcImportExcelByUrlReq
): Promise<ApiResponseDuRuWenJianXiangYing> {
  return request.post('/inner/import/importExcelByUrl', data)
}

/** importList */
export function innerImportImportList(data: InnerRpcImportListReq): Promise<ApiResponseComPageDaoRuHuaHuaTiXiangYing> {
  return request.post('/inner/import/importList', data)
}
