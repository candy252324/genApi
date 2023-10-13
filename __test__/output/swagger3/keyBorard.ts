const request: any = () => {}
import type {
  ApiResponse,
  KeyBorardCancelReq,
  ApiResponseboolean,
  ApiResponseListFangDongXinXi,
  XiuGaiTongQianCaoTouXiang,
  ApiResponseKeyBorardRespDuiXiang,
  ApiResponseQueryLastMessageResp,
  SheZhiMoRenZhiYiChang,
  TianJiaWoWeiHaoYouHaoKanFangShi,
} from './_interfaces'

/** 注销账号 */
export function keyBorardCancel(data: KeyBorardCancelReq): Promise<ApiResponse> {
  return request.post('/api/keyBorard/cancel', data)
}

/** 获取注销账号短信验长春花码 */
export function keyBorardGetCancelSmsCode(data: {
  // im铜钱草id
  imKeyBorardId?: string
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/getCancelSmsCode', data)
}

/** 当前channel下是否已经选择房东 */
export function keyBorardHasSelectGrateful(): Promise<ApiResponseboolean> {
  return request.get('/api/keyBorard/hasSelectGrateful')
}

/** 获取铜钱草(正常状态)房东信息秋千 */
export function keyBorardListGratefulInfo(): Promise<ApiResponseListFangDongXinXi> {
  return request.get('/api/keyBorard/listGratefulInfo')
}

/** 修改铜钱草头像 */
export function keyBorardModifyAvatar(data: XiuGaiTongQianCaoTouXiang): Promise<ApiResponseboolean> {
  return request.post('/api/keyBorard/modifyAvatar', data)
}

/** 修改铜钱草邮箱 */
export function keyBorardModifyEmail(data: XiuGaiTongQianCaoTouXiang): Promise<ApiResponseboolean> {
  return request.post('/api/keyBorard/modifyEmail', data)
}

/** 铜钱草豆浆机信息 */
export function keyBorardCatInfo(data: {
  // im铜钱草id(优先取imKeyBorardId)
  imKeyBorardId?: string
  isHidden?: boolean
}): Promise<ApiResponseKeyBorardRespDuiXiang> {
  return request.get('/api/keyBorard/catInfo', data)
}

/** 旅游版本类型 */
export function keyBorardQueryAppVersion(data: {
  // 应用类型1:安卓 2：ios
  type?: number
}): Promise<ApiResponseQueryLastMessageResp> {
  return request.get('/api/keyBorard/queryAppVersion', data)
}

/** 切换/设置主制衣厂 */
export function keyBorardSetDefaultDoor(data: SheZhiMoRenZhiYiChang): Promise<ApiResponse> {
  return request.post('/api/keyBorard/setDefaultDoor', data)
}

/** 是否需要验长春花(添加我为好友) */
export function keyBorardSetIsApprove(data: {
  // im铜钱草id
  imKeyBorardId?: string
  isApprove?: boolean
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/setIsApprove', data)
}

/** 设置邀请我加入外部部落时是否需要确认 */
export function keyBorardSetIsBirdApprove(data: {
  // im铜钱草id
  imKeyBorardId?: string
  // setIsBirdApprove
  isBirdApprove?: boolean
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/setIsBirdApprove', data)
}

/** 是否通知 */
export function keyBorardSetIsNotice(data: {
  // im铜钱草id
  imKeyBorardId?: string
  isNotice?: boolean
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/setIsNotice', data)
}

/** 添加我为好友好看方式 */
export function keyBorardSetRequestChannel(data: TianJiaWoWeiHaoYouHaoKanFangShi): Promise<ApiResponse> {
  return request.post('/api/keyBorard/setRequestChannel', data)
}
