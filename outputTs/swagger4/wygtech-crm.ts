import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfWygtechcrmApiBusinessAddBusinessEnterprise,
  ResOfWygtechcrmApiBusinessAddBusinessPerson,
  ResOfWygtechcrmApiBusinessAddBusinessProject,
  ResOfWygtechcrmApiBusinessAssignBusiness,
  ResOfWygtechcrmApiBusinessEditBusinessEnterprise,
  ResOfWygtechcrmApiBusinessEditBusinessPerson,
  ResOfWygtechcrmApiBusinessEditBusinessProject,
  ResOfWygtechcrmApiBusinessEnterpriseGet,
  ResOfWygtechcrmApiBusinessEnterpriseSearch,
  ResOfWygtechcrmApiBusinessEnterpriseInfo,
  ResOfWygtechcrmApiBusinessLink,
  ResOfWygtechcrmApiBusinessPageEnterpriseBusinessPool,
  ResOfWygtechcrmApiBusinessPagePersonBusinessPool,
  ResOfWygtechcrmApiBusinessPageProjectBusinessPool,
  ResOfWygtechcrmApiBusinessPersonGet,
  ResOfWygtechcrmApiBusinessPersonSearch,
  ResOfWygtechcrmApiBusinessPersonInfo,
  ResOfWygtechcrmApiBusinessProjectGet,
  ResOfWygtechcrmApiBusinessProjectSearch,
  ResOfWygtechcrmApiBusinessProjectInfo,
  ResOfWygtechcrmApiBusinessReceiveAndCreateBusiness,
  ResOfWygtechcrmApiBusinessReceiveBusiness,
  ResOfWygtechcrmApiBusinessVerifyRepeatBusiness,
  ResOfWygtechcrmApiBusinessContactAdd,
  ResOfWygtechcrmApiBusinessContactDeleteById,
  ResOfWygtechcrmApiBusinessContactList,
  ResOfWygtechcrmApiBusinessFollowEmployeeList,
  ResOfWygtechcrmApiBusinessFollowFollow,
  ResOfWygtechcrmApiBusinessFollowFollowAgain,
  ResOfWygtechcrmApiBusinessFollowGiveUp,
  ResOfWygtechcrmApiBusinessFollowList,
  ResOfWygtechcrmApiBusinessFollowTransfer,
  ResOfWygtechcrmApiConfigGetPersonTitleLabel,
  ResOfWygtechcrmApiCustomerEnterpriseAdd,
  ResOfWygtechcrmApiCustomerEnterpriseDetail,
  ResOfWygtechcrmApiCustomerEnterprisePageList,
  ResOfWygtechcrmApiCustomerEnterpriseSearch,
  ResOfWygtechcrmApiCustomerEnterpriseUpdate,
  ResOfWygtechcrmApiCustomerPersonAdd,
  ResOfWygtechcrmApiCustomerPersonAddCertificate,
  ResOfWygtechcrmApiCustomerPersonAddTitle,
  ResOfWygtechcrmApiCustomerPersonDeleteCertificate,
  ResOfWygtechcrmApiCustomerPersonDeleteTitle,
  ResOfWygtechcrmApiCustomerPersonDetail,
  ResOfWygtechcrmApiCustomerPersonPageList,
  ResOfWygtechcrmApiCustomerPersonSearch,
  ResOfWygtechcrmApiCustomerPersonUpdate,
  ResOfWygtechcrmApiFileUploadFile,
  ResOfWygtechcrmApiImportTaskImportExcel,
  ResOfWygtechcrmApiImportTaskImportList,
  ResOfWygtechcrmApiOperateLogPageList,
  ResOfWygtechcrmApiSigningPageList,
  ResOfWygtechcrmApiSigningRemove,
  ResOfWygtechcrmApiSigningSave,
  ResOfWygtechcrmApiTestCheck,
  ResOfWygtechcrmApiTestLogin,
  ResOfWygtechcrmApiTestUuid,
} from './_interfaces'

/** 新增企业商机 */
export function wygtechcrmApiBusinessAddBusinessEnterprise(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessAddBusinessEnterprise> {
  return Http.post(
    '/wygtech-crm/api/business/addBusinessEnterprise',
    data,
    config
  )
}

/** 新增人才商机 */
export function wygtechcrmApiBusinessAddBusinessPerson(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessAddBusinessPerson> {
  return Http.post('/wygtech-crm/api/business/addBusinessPerson', data, config)
}

/** 新增项目商机 */
export function wygtechcrmApiBusinessAddBusinessProject(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessAddBusinessProject> {
  return Http.post('/wygtech-crm/api/business/addBusinessProject', data, config)
}

/** 分派商机 */
export function wygtechcrmApiBusinessAssignBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessAssignBusiness> {
  return Http.post('/wygtech-crm/api/business/assignBusiness', data, config)
}

/** 修改企业商机 */
export function wygtechcrmApiBusinessEditBusinessEnterprise(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessEditBusinessEnterprise> {
  return Http.post(
    '/wygtech-crm/api/business/editBusinessEnterprise',
    data,
    config
  )
}

/** 修改人才商机 */
export function wygtechcrmApiBusinessEditBusinessPerson(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessEditBusinessPerson> {
  return Http.post('/wygtech-crm/api/business/editBusinessPerson', data, config)
}

/** 修改项目商机 */
export function wygtechcrmApiBusinessEditBusinessProject(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessEditBusinessProject> {
  return Http.post(
    '/wygtech-crm/api/business/editBusinessProject',
    data,
    config
  )
}

/** 企业商机详情 */
export function wygtechcrmApiBusinessEnterpriseGet(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessEnterpriseGet> {
  return Http.get('/wygtech-crm/api/business/enterprise/get', data, config)
}

/** 搜索企业（关联工商信息） */
export function wygtechcrmApiBusinessEnterpriseSearch(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessEnterpriseSearch> {
  return Http.post('/wygtech-crm/api/business/enterprise/search', data, config)
}

/** 企业商机详情 */
export function wygtechcrmApiBusinessEnterpriseInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessEnterpriseInfo> {
  return Http.get('/wygtech-crm/api/business/enterpriseInfo', data, config)
}

/** 关联工商/人才库/项目库信息 */
export function wygtechcrmApiBusinessLink(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessLink> {
  return Http.post('/wygtech-crm/api/business/link', data, config)
}

/** 企业商机列表 */
export function wygtechcrmApiBusinessPageEnterpriseBusinessPool(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessPageEnterpriseBusinessPool> {
  return Http.post(
    '/wygtech-crm/api/business/pageEnterpriseBusinessPool',
    data,
    config
  )
}

/** 人才商机列表 */
export function wygtechcrmApiBusinessPagePersonBusinessPool(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessPagePersonBusinessPool> {
  return Http.post(
    '/wygtech-crm/api/business/pagePersonBusinessPool',
    data,
    config
  )
}

/** 项目商机列表 */
export function wygtechcrmApiBusinessPageProjectBusinessPool(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessPageProjectBusinessPool> {
  return Http.post(
    '/wygtech-crm/api/business/pageProjectBusinessPool',
    data,
    config
  )
}

/** 人才商机详情 */
export function wygtechcrmApiBusinessPersonGet(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessPersonGet> {
  return Http.get('/wygtech-crm/api/business/person/get', data, config)
}

/** 搜索人才（关联人才库信息） */
export function wygtechcrmApiBusinessPersonSearch(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessPersonSearch> {
  return Http.post('/wygtech-crm/api/business/person/search', data, config)
}

/** 人才商机详情 */
export function wygtechcrmApiBusinessPersonInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessPersonInfo> {
  return Http.get('/wygtech-crm/api/business/personInfo', data, config)
}

/** 项目商机详情 */
export function wygtechcrmApiBusinessProjectGet(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessProjectGet> {
  return Http.get('/wygtech-crm/api/business/project/get', data, config)
}

/** 搜索项目（关联项目库信息） */
export function wygtechcrmApiBusinessProjectSearch(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessProjectSearch> {
  return Http.post('/wygtech-crm/api/business/project/search', data, config)
}

/** 项目商机详情 */
export function wygtechcrmApiBusinessProjectInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessProjectInfo> {
  return Http.get('/wygtech-crm/api/business/projectInfo', data, config)
}

/** 领取并创建商机 */
export function wygtechcrmApiBusinessReceiveAndCreateBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessReceiveAndCreateBusiness> {
  return Http.post(
    '/wygtech-crm/api/business/receiveAndCreateBusiness',
    data,
    config
  )
}

/** 领取商机 */
export function wygtechcrmApiBusinessReceiveBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessReceiveBusiness> {
  return Http.post('/wygtech-crm/api/business/receiveBusiness', data, config)
}

/** 校验重复商机 */
export function wygtechcrmApiBusinessVerifyRepeatBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessVerifyRepeatBusiness> {
  return Http.post(
    '/wygtech-crm/api/business/verifyRepeatBusiness',
    data,
    config
  )
}

/** 添加联系人 */
export function wygtechcrmApiBusinessContactAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessContactAdd> {
  return Http.post('/wygtech-crm/api/businessContact/add', data, config)
}

/** 删除联系人 */
export function wygtechcrmApiBusinessContactDeleteById(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessContactDeleteById> {
  return Http.post('/wygtech-crm/api/businessContact/deleteById', data, config)
}

/** 联系人列表 */
export function wygtechcrmApiBusinessContactList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessContactList> {
  return Http.post('/wygtech-crm/api/businessContact/list', data, config)
}

/** 员工列表 */
export function wygtechcrmApiBusinessFollowEmployeeList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessFollowEmployeeList> {
  return Http.post('/wygtech-crm/api/businessFollow/employeeList', data, config)
}

/** 跟进 */
export function wygtechcrmApiBusinessFollowFollow(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessFollowFollow> {
  return Http.post('/wygtech-crm/api/businessFollow/follow', data, config)
}

/** 重新跟进 */
export function wygtechcrmApiBusinessFollowFollowAgain(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessFollowFollowAgain> {
  return Http.post('/wygtech-crm/api/businessFollow/followAgain', data, config)
}

/** 不再跟进 */
export function wygtechcrmApiBusinessFollowGiveUp(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessFollowGiveUp> {
  return Http.post('/wygtech-crm/api/businessFollow/giveUp', data, config)
}

/** 跟进记录 */
export function wygtechcrmApiBusinessFollowList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessFollowList> {
  return Http.post('/wygtech-crm/api/businessFollow/list', data, config)
}

/** 转让 */
export function wygtechcrmApiBusinessFollowTransfer(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiBusinessFollowTransfer> {
  return Http.post('/wygtech-crm/api/businessFollow/transfer', data, config)
}

/** 人才职称下拉框 */
export function wygtechcrmApiConfigGetPersonTitleLabel(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiConfigGetPersonTitleLabel> {
  return Http.post('/wygtech-crm/api/config/getPersonTitleLabel', config)
}

/** 企业客户新增 */
export function wygtechcrmApiCustomerEnterpriseAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerEnterpriseAdd> {
  return Http.post('/wygtech-crm/api/customer/enterprise/add', data, config)
}

/** 企业客户详情 */
export function wygtechcrmApiCustomerEnterpriseDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerEnterpriseDetail> {
  return Http.get('/wygtech-crm/api/customer/enterprise/detail', data, config)
}

/** 企业客户分页列表 */
export function wygtechcrmApiCustomerEnterprisePageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerEnterprisePageList> {
  return Http.post(
    '/wygtech-crm/api/customer/enterprise/pageList',
    data,
    config
  )
}

/** 搜索企业客户 */
export function wygtechcrmApiCustomerEnterpriseSearch(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerEnterpriseSearch> {
  return Http.post('/wygtech-crm/api/customer/enterprise/search', data, config)
}

/** 企业客户编辑 */
export function wygtechcrmApiCustomerEnterpriseUpdate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerEnterpriseUpdate> {
  return Http.post('/wygtech-crm/api/customer/enterprise/update', data, config)
}

/** 个人客户新增 */
export function wygtechcrmApiCustomerPersonAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerPersonAdd> {
  return Http.post('/wygtech-crm/api/customer/person/add', data, config)
}

/** 新增执业资格证 */
export function wygtechcrmApiCustomerPersonAddCertificate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerPersonAddCertificate> {
  return Http.post(
    '/wygtech-crm/api/customer/person/addCertificate',
    data,
    config
  )
}

/** 新增职称 */
export function wygtechcrmApiCustomerPersonAddTitle(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerPersonAddTitle> {
  return Http.post('/wygtech-crm/api/customer/person/addTitle', data, config)
}

/** 删除执业资格证 */
export function wygtechcrmApiCustomerPersonDeleteCertificate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerPersonDeleteCertificate> {
  return Http.get(
    '/wygtech-crm/api/customer/person/deleteCertificate',
    data,
    config
  )
}

/** 删除职称 */
export function wygtechcrmApiCustomerPersonDeleteTitle(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerPersonDeleteTitle> {
  return Http.get('/wygtech-crm/api/customer/person/deleteTitle', data, config)
}

/** 个人客户详情 */
export function wygtechcrmApiCustomerPersonDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerPersonDetail> {
  return Http.get('/wygtech-crm/api/customer/person/detail', data, config)
}

/** 个人客户分页列表 */
export function wygtechcrmApiCustomerPersonPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerPersonPageList> {
  return Http.post('/wygtech-crm/api/customer/person/pageList', data, config)
}

/** 搜索人才客户 */
export function wygtechcrmApiCustomerPersonSearch(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerPersonSearch> {
  return Http.post('/wygtech-crm/api/customer/person/search', data, config)
}

/** 编辑个人客户 */
export function wygtechcrmApiCustomerPersonUpdate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiCustomerPersonUpdate> {
  return Http.post('/wygtech-crm/api/customer/person/update', data, config)
}

/** 上传文件 */
export function wygtechcrmApiFileUploadFile(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiFileUploadFile> {
  return Http.post('/wygtech-crm/api/file/uploadFile', data, config)
}

/** 导入excel文件操作 */
export function wygtechcrmApiImportTaskImportExcel(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiImportTaskImportExcel> {
  return Http.post('/wygtech-crm/api/importTask/importExcel', data, config)
}

/** 查询导入列表 */
export function wygtechcrmApiImportTaskImportList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiImportTaskImportList> {
  return Http.post('/wygtech-crm/api/importTask/importList', data, config)
}

/** 分页查询 */
export function wygtechcrmApiOperateLogPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiOperateLogPageList> {
  return Http.post('/wygtech-crm/api/operateLog/pageList', data, config)
}

/** 签约记录 */
export function wygtechcrmApiSigningPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiSigningPageList> {
  return Http.post('/wygtech-crm/api/signing/pageList', data, config)
}

/** 解除关联 */
export function wygtechcrmApiSigningRemove(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiSigningRemove> {
  return Http.post('/wygtech-crm/api/signing/remove', data, config)
}

/** 新增签约 */
export function wygtechcrmApiSigningSave(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiSigningSave> {
  return Http.post('/wygtech-crm/api/signing/save', data, config)
}

/** check */
export function wygtechcrmApiTestCheck(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiTestCheck> {
  return Http.get('/wygtech-crm/api/test/check', config)
}

/** login */
export function wygtechcrmApiTestLogin(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiTestLogin> {
  return Http.get('/wygtech-crm/api/test/login', config)
}

/** uuid */
export function wygtechcrmApiTestUuid(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfWygtechcrmApiTestUuid> {
  return Http.get('/wygtech-crm/api/test/uuid', config)
}
