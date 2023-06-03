import {ResResultApiResponse,} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 管理员删除群成员 */
export function groupMemberDelete  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/groupMember/delete', data, config)
}

/** 删除群管理员 */
export function groupMemberDeleteAdmin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/groupMember/deleteAdmin', data, config)
}

/** 我在本群信息详情 */
export function groupMemberDetail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/groupMember/detail', data, config)
}

/** 是否是群成员 */
export function groupMemberExistInGroup  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/groupMember/existInGroup', data, config)
}

/** 本群状态 */
export function groupMemberGroupStatus  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/groupMember/groupStatus', data, config)
}

/** 退出群聊 */
export function groupMemberLeaveGroup  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/groupMember/leaveGroup', data, config)
}

/** 群管理员列表(含群主) */
export function groupMemberListAdmin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.get('/api/groupMember/listAdmin', data, config)
}

/** 修改群成员在本群备注 */
export function groupMemberModifyRemark  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/groupMember/modifyRemark', data, config)
}

/** 根据groupId分页查询成员列表 */
export function groupMemberPageList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/groupMember/pageList', data, config)
}

/** 添加群成员（自动创建的部门群不能添加删除成员） */
export function groupMemberSave  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/groupMember/save', data, config)
}

/** 添加群管理员 */
export function groupMemberSaveAdmin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/groupMember/saveAdmin', data, config)
}

/** 是否通知和免打扰 */
export function groupMemberSetNoticeAndTop  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/groupMember/setNoticeAndTop', data, config)
}
