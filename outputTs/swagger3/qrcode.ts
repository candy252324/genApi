
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 获取/更新用户或群二维码(返回图片base64string) */
export function qrcodeGetImg  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/qrcode/getImg', data, config)
}
