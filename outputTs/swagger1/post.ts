import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseVoid,
  ApiResponse,
  PostAddOrUpReq,
  ApiResponseListPostResp,
  ApiResponseListSelectorEmployeeResp,
} from './_interfaces'

/** 添加成员 */
export function apiPostAddEmployee(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/post/addEmployee', data, config)
}

/** 新增岗位 */
export function apiPostAddPost(
  data: PostAddOrUpReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/post/addPost', data, config)
}

/** 移除成员 */
export function apiPostDelEmployee(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/post/delEmployee', data, config)
}

/** 删除岗位 */
export function apiPostDelPostPostId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/post/delPost/${postId}', data, config)
}

/** 修改岗位 */
export function apiPostEditPost(
  data: PostAddOrUpReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/post/editPost', data, config)
}

/** 获取岗位列表 */
export function apiPostList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListPostResp> {
  return Http.get('/api/post/list', data, config)
}

/** 根据部门id搜索员工 */
export function apiPostQueryEmployeeByDeptId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListSelectorEmployeeResp> {
  return Http.get('/api/post/queryEmployeeByDeptId', data, config)
}

/** 根据名称或手机号搜索员工 */
export function apiPostQueryEmployeeByPhoneOrName(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListSelectorEmployeeResp> {
  return Http.get('/api/post/queryEmployeeByPhoneOrName', data, config)
}
