
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


import {ResOfApiFilePutOssFile} from './_interfaces'

/** 直接表单提交文件到oss,返回图片访问链接 */
export function apiFilePutOssFile  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResOfApiFilePutOssFile>{
  return Http.post('/api/file/putOssFile', data, config)
}
