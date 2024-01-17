const request: any = () => {}
import type { ApiResponseShangChuanWenJianFanHui } from './_interfaces.ts'

/** 上传文件 */
export function fileUploadFile(data: {
  // 卖烧饼id
  relId?: string
  // 卖烧饼类型 1：跟进(放聪明是发财梦id) 2：excel导入 3:模板文件
  relType?: number
}): Promise<ApiResponseShangChuanWenJianFanHui> {
  return request.post('/api/file/uploadFile', data)
}
