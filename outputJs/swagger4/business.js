import { Http } from '../../httpJs/index'

/**
 * 新增企业商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessAddBusinessEnterprise(data, config) {
  return Http.post('/api/business/addBusinessEnterprise', data, config)
}

/**
 * 新增人才商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessAddBusinessPerson(data, config) {
  return Http.post('/api/business/addBusinessPerson', data, config)
}

/**
 * 新增项目商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessAddBusinessProject(data, config) {
  return Http.post('/api/business/addBusinessProject', data, config)
}

/**
 * 新增企业商机(创建/领取/签约)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessAddSignBusinessEnterprise(data, config) {
  return Http.post('/api/business/addSignBusinessEnterprise', data, config)
}

/**
 * 新增人才商机(创建/领取/签约)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessAddSignBusinessPerson(data, config) {
  return Http.post('/api/business/addSignBusinessPerson', data, config)
}

/**
 * 新增项目商机(创建/领取/签约)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessAddSignBusinessProject(data, config) {
  return Http.post('/api/business/addSignBusinessProject', data, config)
}

/**
 * 分派商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessAssignBusiness(data, config) {
  return Http.post('/api/business/assignBusiness', data, config)
}

/**
 * 修改企业商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessEditBusinessEnterprise(data, config) {
  return Http.post('/api/business/editBusinessEnterprise', data, config)
}

/**
 * 修改人才商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessEditBusinessPerson(data, config) {
  return Http.post('/api/business/editBusinessPerson', data, config)
}

/**
 * 修改项目商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessEditBusinessProject(data, config) {
  return Http.post('/api/business/editBusinessProject', data, config)
}

/**
 * 企业商机详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessEnterpriseDetail(data, config) {
  return Http.post('/api/business/enterprise/detail', data, config)
}

/**
 * 企业商机详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessEnterpriseInfo(data, config) {
  return Http.get('/api/business/enterpriseInfo', data, config)
}

/**
 * 关联工商/人才库/项目库信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessLink(data, config) {
  return Http.post('/api/business/link', data, config)
}

/**
 * 企业商机列表(下拉框简单数据)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessPageEnterpriseSampleList(data, config) {
  return Http.post('/api/business/pageEnterprise/sampleList', data, config)
}

/**
 * 企业商机列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessPageEnterpriseBusinessPool(data, config) {
  return Http.post('/api/business/pageEnterpriseBusinessPool', data, config)
}

/**
 * 人才商机列表(下拉框简单数据)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessPagePersonSampleList(data, config) {
  return Http.post('/api/business/pagePerson/sampleList', data, config)
}

/**
 * 人才商机列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessPagePersonBusinessPool(data, config) {
  return Http.post('/api/business/pagePersonBusinessPool', data, config)
}

/**
 * 项目商机列表(下拉框简单数据)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessPageProjectSampleList(data, config) {
  return Http.post('/api/business/pageProject/sampleList', data, config)
}

/**
 * 项目商机列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessPageProjectBusinessPool(data, config) {
  return Http.post('/api/business/pageProjectBusinessPool', data, config)
}

/**
 * notifySign
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessPersonNotifySign(data, config) {
  return Http.get('/api/business/person/notifySign', data, config)
}

/**
 * 人才商机详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessPersonInfo(data, config) {
  return Http.get('/api/business/personInfo', data, config)
}

/**
 * 新增项目商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessProjectAdd(data, config) {
  return Http.post('/api/business/project/add', data, config)
}

/**
 * 项目商机详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessProjectGet(data, config) {
  return Http.get('/api/business/project/get', data, config)
}

/**
 * 修改项目商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessProjectModified(data, config) {
  return Http.post('/api/business/project/modified', data, config)
}

/**
 * 分页查询项目商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessProjectPageList(data, config) {
  return Http.post('/api/business/project/pageList', data, config)
}

/**
 * 项目商机详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessProjectInfo(data, config) {
  return Http.get('/api/business/projectInfo', data, config)
}

/**
 * 领取商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessReceiveBusiness(data, config) {
  return Http.post('/api/business/receiveBusiness', data, config)
}

/**
 * 校验重复商机
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessVerifyRepeatBusiness(data, config) {
  return Http.post('/api/business/verifyRepeatBusiness', data, config)
}
