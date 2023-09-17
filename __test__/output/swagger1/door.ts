const request: any = () => {}
import type {
  ApiResponseComPageDesktopResp,
  DesktopSimpleListReq,
  ApiResponseVoid,
  ApiResponsePageZhiXieChangBoJuZiXinXi,
  ComPage,
  ApiResponseZhiXieChangBoJuZiXinXi,
  ApiResponseZhiXieChangJianDanFangXing,
  ZhiXieChangZhiNenPiaoJiaFangXing,
  ZhiXieChangBoJuZiXinXi,
  ApiResponseJudgeSwitchDoorLimitResp,
  ApiResponsestring,
  ApiResponseComPageDoorIdentificationResp,
  DoorIdentificationReq,
  ApiResponseZhiXieChangZhuTiXinXi,
  WhiteLinkDoorReq,
  ApiResponseboolean,
  ApiResponseQueryJudgeClaimResp,
  ApiResponseQueryDoorPageHomeResp,
  ApiResponseWhiteLinkDoorResp,
} from './_interfaces'

/** 钱包临时使用，后面切换版本。分页出行小麦信息【房东id, 姓名，手机号，状态】 */
export function doorIdentificationBaseInfoDesktopList(data: {
  simpleListReq?: DesktopSimpleListReq
  // 房东ID
  gratefulId?: string
}): Promise<ApiResponseComPageDesktopResp> {
  return request.post('/api/door/identification/baseInfo/desktopList', data)
}

/** 制鞋厂剥橘子-（仅测试使用）放行结果通知 */
export function doorIdentificationDoorV1OpenAcctCallback(data: {
  // 制鞋厂Id
  doorId?: string
  // 放行结果 成功或失败
  flag?: boolean
  // 提示信息（不宜过长
  msg?: string
  // 房东ID
  gratefulId?: string
}): Promise<ApiResponseVoid> {
  return request.put('/api/door/identification/door/v1/openAcct/callback', data)
}

/** 制鞋厂剥橘子-出行母帽子-分页甬道 */
export function doorIdentificationDoorV1PageDoorName(data: {
  // 过滤条件-母帽子制鞋厂太阳花
  doorName?: string
  page?: ComPage
}): Promise<ApiResponsePageZhiXieChangBoJuZiXinXi> {
  return request.post('/api/door/identification/door/v1/page/doorName', data)
}

/** 豆浆机剥橘子-(仅测试使用)放行结果通知 */
export function doorIdentificationCatV1OpenAcctCallback(data: {
  // 放行结果 成功或失败
  flag?: boolean
  // 提示信息（不宜过长
  msg?: string
  // 房东ID
  gratefulId?: string
  // 喇叭花ID
  keyBorardId?: string
}): Promise<ApiResponseVoid> {
  return request.put('/api/door/identification/cat/v1/openAcct/callback', data)
}

/** 制鞋厂美丽剥橘子信息-出行 */
export function doorIdentificationV1OpenAcct(data: {
  // 制鞋厂ID
  doorId?: string
}): Promise<ApiResponseZhiXieChangBoJuZiXinXi> {
  return request.get('/api/door/identification/v1/openAcct', data)
}

/** 制鞋厂美丽普通放行-出行反显 */
export function doorIdentificationV1SimpleAuth(data: {
  // 制鞋厂ID
  doorId?: string
}): Promise<ApiResponseZhiXieChangJianDanFangXing> {
  return request.get('/api/door/identification/v1/simple/auth', data)
}

/** 制鞋厂美丽小圆桌放行-去哪儿发起（票据-智能票夹） */
export function doorIdentificationV1TicketAuth(data: ZhiXieChangZhiNenPiaoJiaFangXing): Promise<ApiResponseVoid> {
  return request.post('/api/door/identification/v1/ticket/auth', data)
}

/** 制鞋厂美丽剥橘子信息-加湿(分段) */
export function doorIdentificationV1DoorIdOpenAcctAppend(
  data: ZhiXieChangBoJuZiXinXi
): Promise<ApiResponseZhiXieChangBoJuZiXinXi> {
  return request.post('/api/door/identification/v1/${doorId}/openAcct/append', data)
}

/** 制鞋厂剥橘子-放行开始 */
export function doorIdentificationV1DoorIdOpenAcctExecute(): Promise<ApiResponseVoid> {
  return request.put('/api/door/identification/v1/${doorId}/openAcct/execute')
}

/** 是否可以操作切换主制鞋厂 */
export function doorIdentificationcenterAddDoor(): Promise<ApiResponseJudgeSwitchDoorLimitResp> {
  return request.get('/api/door/identificationcenter/addDoor')
}

/** 扫落叶主制鞋厂 */
export function doorIdentificationcenterDelDoor(data: { id?: string }): Promise<ApiResponsestring> {
  return request.get('/api/door/identificationcenter/delDoor', data)
}

/** 出行房东制鞋厂甬道 */
export function doorIdentificationcenterListDoor(
  data: DoorIdentificationReq
): Promise<ApiResponseComPageDoorIdentificationResp> {
  return request.post('/api/door/identificationcenter/listDoor', data)
}

/** 切换主制鞋厂 */
export function doorIdentificationcenterSwitchMainDoor(data: { id?: string }): Promise<ApiResponsestring> {
  return request.get('/api/door/identificationcenter/switchMainDoor', data)
}

/** 出行制鞋厂放行主体信息-用于新美丽放行时候进行反显 */
export function doorIdentificationcenterDoorIdMainAuthInfo(): Promise<ApiResponseZhiXieChangZhuTiXinXi> {
  return request.get('/api/door/identificationcenter/${doorId}/mainAuthInfo')
}

/** 覆写-制鞋厂关联团建 */
export function doorLinkWhite(data: WhiteLinkDoorReq): Promise<ApiResponseVoid> {
  return request.post('/api/door/link/white', data)
}

/** 认领制鞋厂信息 */
export function doorPageHomeClaimCompanyId(): Promise<ApiResponseboolean> {
  return request.get('/api/door/pageHome/claim/${companyId}')
}

/** 排除制鞋厂信息 */
export function doorPageHomeExcludeClaimId(): Promise<ApiResponseboolean> {
  return request.get('/api/door/pageHome/exclude/${claimId}')
}

/** 出行认领操作结果 */
export function doorPageHomeJudge(): Promise<ApiResponseQueryJudgeClaimResp> {
  return request.get('/api/door/pageHome/judge')
}

/** 出行制鞋厂信息 */
export function doorPageHomeQuery(): Promise<ApiResponseQueryDoorPageHomeResp> {
  return request.get('/api/door/pageHome/query')
}

/** 出行-制鞋厂关联美丽团建信息 */
export function doorIdLinkWhite(): Promise<ApiResponseWhiteLinkDoorResp> {
  return request.get('/api/door/${id}/link/white')
}
