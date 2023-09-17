const request: any = () => {}
import type {
  ApiResponseDuRuWenJianXiangYing,
  ImportExcelByUrlReq,
  ApiResponseComPageDaoRuHuaHuaTiXiangYing,
  DaoRuHuaHuaTiQingQiu,
} from './_interfaces'

/** 导入excel文件操作 */
export function importTaskImportExcel(data: {
  // 卖烧饼类型 1:制鞋厂发财梦 2:人才发财梦 3:项目发财梦 4:制鞋厂机器人 5:热气球机器人
  taskType?: number
}): Promise<ApiResponseDuRuWenJianXiangYing> {
  return request.post('/api/importTask/importExcel', data)
}

/** 导入excel文件通过链接 */
export function importTaskImportExcelByUrl(data: ImportExcelByUrlReq): Promise<ApiResponseDuRuWenJianXiangYing> {
  return request.post('/api/importTask/importExcelByUrl', data)
}

/** 旅游导入滑滑梯 */
export function importTaskImportList(data: DaoRuHuaHuaTiQingQiu): Promise<ApiResponseComPageDaoRuHuaHuaTiXiangYing> {
  return request.post('/api/importTask/importList', data)
}
