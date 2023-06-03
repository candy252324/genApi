
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 进入群聊 */
export function groupf2fEnterGroup  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/groupf2f/enterGroup', data, config)
}

/** 获取列表 */
export function groupf2fList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/groupf2f/list', data, config)
}

/** 保存随机数 */
export function groupf2fSaveRandom  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/groupf2f/saveRandom', data, config)
}
