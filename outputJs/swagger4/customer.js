import { Http } from '../../httpJs/index'

/**
 * 企业客户新增
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerEnterpriseAdd(data, config) {
  return Http.post('/api/customer/enterprise/add', data, config)
}

/**
 * 企业客户详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerEnterpriseDetail(data, config) {
  return Http.get('/api/customer/enterprise/detail', data, config)
}

/**
 * 企业客户分页列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerEnterprisePageList(data, config) {
  return Http.post('/api/customer/enterprise/pageList', data, config)
}

/**
 * 搜索企业客户(下拉框数据)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerEnterpriseSampleList(data, config) {
  return Http.post('/api/customer/enterprise/sampleList', data, config)
}

/**
 * 企业客户编辑
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerEnterpriseUpdate(data, config) {
  return Http.post('/api/customer/enterprise/update', data, config)
}

/**
 * 个人客户新增
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerPersonAdd(data, config) {
  return Http.post('/api/customer/person/add', data, config)
}

/**
 * 新增执业资格证
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerPersonAddCertificate(data, config) {
  return Http.post('/api/customer/person/addCertificate', data, config)
}

/**
 * 新增职称
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerPersonAddTitle(data, config) {
  return Http.post('/api/customer/person/addTitle', data, config)
}

/**
 * 删除执业资格证
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerPersonDeleteCertificate(data, config) {
  return Http.get('/api/customer/person/deleteCertificate', data, config)
}

/**
 * 删除职称
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerPersonDeleteTitle(data, config) {
  return Http.get('/api/customer/person/deleteTitle', data, config)
}

/**
 * 个人客户详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerPersonDetail(data, config) {
  return Http.get('/api/customer/person/detail', data, config)
}

/**
 * 个人客户分页列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerPersonPageList(data, config) {
  return Http.post('/api/customer/person/pageList', data, config)
}

/**
 * 搜索人才客户(下拉框数据)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerPersonSampleList(data, config) {
  return Http.post('/api/customer/person/sampleList', data, config)
}

/**
 * 编辑个人客户
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function customerPersonUpdate(data, config) {
  return Http.post('/api/customer/person/update', data, config)
}
