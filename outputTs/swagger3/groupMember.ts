import {ApiResponse,QunChengYuanXinXiDuiXiangGroupMemberResp,boolean,MemberGroupStatusResp,List,ComPage} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 管理员删除群成员 */
export function apiGroupMemberDelete  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/api/groupMember/delete', data, config)
}

/** 删除群管理员 */
export function apiGroupMemberDeleteAdmin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/api/groupMember/deleteAdmin', data, config)
}

/** 我在本群信息详情 */
export function apiGroupMemberDetail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<QunChengYuanXinXiDuiXiangGroupMemberResp>>{
  return Http.post('/api/groupMember/detail', data, config)
}

/** 是否是群成员 */
export function apiGroupMemberExistInGroup  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<boolean>>{
  return Http.post('/api/groupMember/existInGroup', data, config)
}

/** 本群状态 */
export function apiGroupMemberGroupStatus  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<MemberGroupStatusResp>>{
  return Http.post('/api/groupMember/groupStatus', data, config)
}

/** 退出群聊 */
export function apiGroupMemberLeaveGroup  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/api/groupMember/leaveGroup', data, config)
}

/** 群管理员列表(含群主) */
export function apiGroupMemberListAdmin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<List<QunChengYuanXinXiDuiXiangGroupMemberResp>>>{
  return Http.get('/api/groupMember/listAdmin', data, config)
}

/** 修改群成员在本群备注 */
export function apiGroupMemberModifyRemark  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/api/groupMember/modifyRemark', data, config)
}

/** 根据groupId分页查询成员列表 */
export function apiGroupMemberPageList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<ComPage<QunChengYuanXinXiDuiXiangGroupMemberResp>>>{
  return Http.post('/api/groupMember/pageList', data, config)
}

/** 添加群成员（自动创建的部门群不能添加删除成员） */
export function apiGroupMemberSave  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/api/groupMember/save', data, config)
}

/** 添加群管理员 */
export function apiGroupMemberSaveAdmin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/api/groupMember/saveAdmin', data, config)
}

/** 是否通知和免打扰 */
export function apiGroupMemberSetNoticeAndTop  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/api/groupMember/setNoticeAndTop', data, config)
}
