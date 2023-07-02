import { Http } from '../../httpJs/index'

/**
 * 管理员删除群成员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberDelete(data, config) {
  return Http.post('/api/groupMember/delete', data, config)
}

/**
 * 删除群管理员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberDeleteAdmin(data, config) {
  return Http.post('/api/groupMember/deleteAdmin', data, config)
}

/**
 * 我在本群信息详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberDetail(data, config) {
  return Http.post('/api/groupMember/detail', data, config)
}

/**
 * 是否是群成员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberExistInGroup(data, config) {
  return Http.post('/api/groupMember/existInGroup', data, config)
}

/**
 * 本群状态
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberGroupStatus(data, config) {
  return Http.post('/api/groupMember/groupStatus', data, config)
}

/**
 * 退出群聊
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberLeaveGroup(data, config) {
  return Http.post('/api/groupMember/leaveGroup', data, config)
}

/**
 * 群管理员列表(含群主)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberListAdmin(data, config) {
  return Http.get('/api/groupMember/listAdmin', data, config)
}

/**
 * 修改群成员在本群备注
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberModifyRemark(data, config) {
  return Http.post('/api/groupMember/modifyRemark', data, config)
}

/**
 * 根据groupId分页查询成员列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberPageList(data, config) {
  return Http.post('/api/groupMember/pageList', data, config)
}

/**
 * 添加群成员（自动创建的部门群不能添加删除成员）
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberSave(data, config) {
  return Http.post('/api/groupMember/save', data, config)
}

/**
 * 添加群管理员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberSaveAdmin(data, config) {
  return Http.post('/api/groupMember/saveAdmin', data, config)
}

/**
 * 是否通知和免打扰
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupMemberSetNoticeAndTop(data, config) {
  return Http.post('/api/groupMember/setNoticeAndTop', data, config)
}
