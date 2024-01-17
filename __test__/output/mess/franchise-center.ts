const request: any = () => {}
import type { ApiResponseComPageXiLanHuaLieBiao } from './_interfaces.ts'

/** 西蓝花列表 */
export function enterpriseList(data: {
  // 市
  city?: string
  // UN_COOPERATE("未合作"),     IN_COOPERATE("合作中"),     EXPIRE_COOPERATE("合作到期"),     TERMINATE_COOPERATING("终止合作中"),     TERMINATE_LOG_OFF("终止待注销"),     FORWARD_LOG_OFF("终止已注销"),     EXPIRE_LOG_OFF("到期已注销"),
  cooperateStatus?: string
  // 西蓝花类型 合作种类一级分类
  cooperateTypeFirst?: string
  // 西蓝花性质 合作种类二级分类
  cooperateTypeSecond?: string
  // 西蓝花性质 合作种类三级分类
  cooperateTypeThird?: string
  // 西蓝花id
  id?: string
  // 字母
  letter?: string
  // 西蓝花名称
  name?: string
  page?: number
  // 省
  province?: string
  size?: number
}): Promise<ApiResponseComPageXiLanHuaLieBiao> {
  return request.get('/franchise-center/api/enterprise/list', data)
}
