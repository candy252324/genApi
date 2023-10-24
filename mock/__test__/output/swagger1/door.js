import {
  ApiResponseComPageDesktopResp,
  ApiResponseVoid,
  ApiResponsePageZhiXieChangBoJuZiXinXi,
  ApiResponseZhiXieChangBoJuZiXinXi,
  ApiResponseZhiXieChangJianDanFangXing,
  ApiResponseJudgeSwitchDoorLimitResp,
  ApiResponsestring,
  ApiResponseComPageDoorIdentificationResp,
  ApiResponseZhiXieChangZhuTiXinXi,
  ApiResponseboolean,
  ApiResponseQueryJudgeClaimResp,
  ApiResponseQueryDoorPageHomeResp,
  ApiResponseWhiteLinkDoorResp,
} from './_interfaces'
import Mock from 'mockjs'

/** 钱包临时使用，后面切换版本。分页出行小麦信息【房东id, 姓名，手机号，状态】 */
export const doorIdentificationBaseInfoDesktopList = () => ApiResponseComPageDesktopResp()

/** 制鞋厂剥橘子-（仅测试使用）放行结果通知 */
export const doorIdentificationDoorV1OpenAcctCallback = () => ApiResponseVoid()

/** 制鞋厂剥橘子-出行母帽子-分页甬道 */
export const doorIdentificationDoorV1PageDoorName = () => ApiResponsePageZhiXieChangBoJuZiXinXi()

/** 豆浆机剥橘子-(仅测试使用)放行结果通知 */
export const doorIdentificationCatV1OpenAcctCallback = () => ApiResponseVoid()

/** 制鞋厂美丽剥橘子信息-出行 */
export const doorIdentificationV1OpenAcctGet = () => ApiResponseZhiXieChangBoJuZiXinXi()

/** 制鞋厂美丽剥橘子信息-扫落叶 逻辑扫落叶 */
export const doorIdentificationV1OpenAcctDelete = () => ApiResponseVoid()

/** 制鞋厂美丽普通放行-出行反显 */
export const doorIdentificationV1SimpleAuthGet = () => ApiResponseZhiXieChangJianDanFangXing()

/** 制鞋厂美丽普通放行-覆盖写入 */
export const doorIdentificationV1SimpleAuthPost = () => ApiResponseVoid()

/** 制鞋厂美丽小圆桌放行-去哪儿发起（票据-智能票夹） */
export const doorIdentificationV1TicketAuth = () => ApiResponseVoid()

/** 制鞋厂美丽剥橘子信息-加湿(分段) */
export const doorIdentificationV1DoorIdOpenAcctAppend = () => ApiResponseZhiXieChangBoJuZiXinXi()

/** 制鞋厂剥橘子-放行开始 */
export const doorIdentificationV1DoorIdOpenAcctExecute = () => ApiResponseVoid()

/** 是否可以操作切换主制鞋厂 */
export const doorIdentificationcenterAddDoorGet = () => ApiResponseJudgeSwitchDoorLimitResp()

/** 加湿帽子 */
export const doorIdentificationcenterAddDoorPost = () => ApiResponsestring()

/** 扫落叶主制鞋厂 */
export const doorIdentificationcenterDelDoor = () => ApiResponsestring()

/** 出行房东制鞋厂甬道 */
export const doorIdentificationcenterListDoor = () => ApiResponseComPageDoorIdentificationResp()

/** 切换主制鞋厂 */
export const doorIdentificationcenterSwitchMainDoor = () => ApiResponsestring()

/** 出行制鞋厂放行主体信息-用于新美丽放行时候进行反显 */
export const doorIdentificationcenterDoorIdMainAuthInfo = () => ApiResponseZhiXieChangZhuTiXinXi()

/** 覆写-制鞋厂关联团建 */
export const doorLinkWhite = () => ApiResponseVoid()

/** 认领制鞋厂信息 */
export const doorPageHomeClaimCompanyId = () => ApiResponseboolean()

/** 排除制鞋厂信息 */
export const doorPageHomeExcludeClaimId = () => ApiResponseboolean()

/** 出行认领操作结果 */
export const doorPageHomeJudge = () => ApiResponseQueryJudgeClaimResp()

/** 出行制鞋厂信息 */
export const doorPageHomeQuery = () => ApiResponseQueryDoorPageHomeResp()

/** 出行-制鞋厂关联美丽团建信息 */
export const doorIdLinkWhite = () => ApiResponseWhiteLinkDoorResp()
