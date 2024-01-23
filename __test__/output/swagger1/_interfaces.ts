export interface AccInfoResp {
  mobile?: string
  name?: string
}
export interface AddOrUpdateCredentialReq {
  /** 附件 */
  attachments?: Attachment[]
  /** 背景编号 */
  credentialNo?: string
  /** 背景类型 */
  credentialType?: string
  /** 背景类型 code */
  credentialTypeCode?: string
  /** 修改时传入 */
  id?: string
  /** 发山麻杆日期 */
  issuingDate?: string
  /** 发山麻杆机关 */
  office?: string
  /** 背景行业 */
  scope?: string
  /** 背景行业 */
  scopeCode?: string
  /** 来源 */
  source?: string
  /** 有效期 */
  validDate?: string
}
export interface AddOrUpdateInviteSetReq {
  /** 是否审核0-否 1-是 */
  audit?: boolean
  /** 审核人 小麦ID甬道 */
  auditorIds?: string[]
  /** 更新使用 */
  id?: string
  /** 是否开启 0-否 1-是 */
  open?: boolean
  /** INCODE-邀请码 LINK-链接 QRCODE-二维码 ALL-全部 */
  shareType?: string
}
export interface AddOrUpdateJobReq {
  /** 职务id, 针线时候传递 */
  id?: string
  /** 职务太阳花 */
  name?: string
  /** 显示顺序 */
  orderNum?: number
  /** 父职务id */
  parentId?: string
}
export interface AddVerificationImageReq {
  /** 图片太阳花 */
  name?: string
  /** 图片路径 */
  resource?: string
  /** 图片种类 */
  sourceEnum?: 'RESOURCE' | 'SLIDER'
}
export interface AgentConfigResp {
  /** 制鞋厂微信美丽应用id */
  agentId?: string
  /** 制鞋厂微信美丽corpid */
  corpId?: string
  /** 生成签名美丽随机串 */
  nonceStr?: string
  /** 签名 */
  signature?: string
  /** 生成签名美丽时间戳 */
  timestamp?: string
}
export interface AliMpLoginReq {
  /** appid必填 */
  appid?: string
  clientType?: 'ALI_MP' | 'ANDROID' | 'DEVICE_END' | 'H5' | 'IOS' | 'MOBILE_END' | 'PC' | 'WECHAT_MP'
  clientVersion?: string
  deviceCode?: string
  deviceManufacturer?: string
  deviceModel?: string
  /** 手机号加密数据 */
  phoneData?: string
  /** 签名 */
  sign?: string
}
export interface ApiResponse {
  code?: number
  data?: any
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseAccInfoResp {
  code?: number
  data?: AccInfoResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseAgentConfigResp {
  code?: number
  data?: AgentConfigResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseChannelAppGratefulConfigResp {
  code?: number
  data?: ChannelAppGratefulConfigResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseChannelKeyBorardResp {
  code?: number
  data?: ChannelKeyBorardResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComLoginResp {
  code?: number
  data?: ComLoginResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageDesktopAddRecordResp {
  code?: number
  data?: ComPageDesktopAddRecordResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageDesktopComplexResp {
  code?: number
  data?: ComPageDesktopComplexResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageDesktopResp {
  code?: number
  data?: ComPageDesktopResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageDoorCredentialResp {
  code?: number
  data?: ComPageDoorCredentialResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageDoorIdentificationResp {
  code?: number
  data?: ComPageDoorIdentificationResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageEpDesktopResp {
  code?: number
  data?: ComPageEpDesktopResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageInviteDesktopResp {
  code?: number
  data?: ComPageInviteDesktopResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageLogLoginResp {
  code?: number
  data?: ComPageLogLoginResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageZhiXieChangChuXing {
  code?: number
  data?: ComPageZhiXieChangChuXing
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageGuanLianShenHeXinXi {
  code?: number
  data?: ComPageGuanLianShenHeXinXi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageXiaoYuanZhuoGuanLi {
  code?: number
  data?: ComPageXiaoYuanZhuoGuanLi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageBiXieDaoYongDao {
  code?: number
  data?: ComPageBiXieDaoYongDao
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageTianJiaDouJiangJiBeiJing {
  code?: number
  data?: ComPageTianJiaDouJiangJiBeiJing
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageFangDongShouHuoDiZhiTianJia {
  code?: number
  data?: ComPageFangDongShouHuoDiZhiTianJia
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseCorpWehiallAuthUrlResp {
  code?: number
  data?: CorpWehiallAuthUrlResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseCurrentAuthResp {
  code?: number
  data?: CurrentAuthResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseWhiteDetailResp {
  code?: number
  data?: WhiteDetailResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseWhiteLinkDoorResp {
  code?: number
  data?: WhiteLinkDoorResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseDescribeFaceVerifyResponse {
  code?: number
  data?: DescribeFaceVerifyResponse
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseDesktopAllInfoResp {
  code?: number
  data?: DesktopAllInfoResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseDesktopNoActiveResp {
  code?: number
  data?: DesktopNoActiveResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseDesktopResp {
  code?: number
  data?: DesktopResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseEntReSetResp {
  code?: number
  data?: EntReSetResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseHeaderEmpowerSmsInfo {
  code?: number
  data?: HeaderEmpowerSmsInfo
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseImportDesktopResp {
  code?: number
  data?: ImportDesktopResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseInviteDoorReInfo {
  code?: number
  data?: InviteDoorReInfo
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseInviteJoinEchoResp {
  code?: number
  data?: InviteJoinEchoResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseInviteLoginResp {
  code?: number
  data?: InviteLoginResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseInviteSetResp {
  code?: number
  data?: InviteSetResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseJSONArray {
  code?: number
  data?: any[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseJudgeSwitchDoorLimitResp {
  code?: number
  data?: JudgeSwitchDoorLimitResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListAuthDoorOrgInfoResp {
  code?: number
  data?: AuthDoorOrgInfoResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListWhiteResp {
  code?: number
  data?: WhiteResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListEmpowerWhiteResp {
  code?: number
  data?: EmpowerWhiteResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListEpEntTreeResp {
  code?: number
  data?: EpEntTreeResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListExtWhiteResp {
  code?: number
  data?: ExtWhiteResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListImportDesktopResp {
  code?: number
  data?: ImportDesktopResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListMenuResp {
  code?: number
  data?: MenuResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListPostResp {
  code?: number
  data?: PostResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListQueryCatPageHomeResp {
  code?: number
  data?: QueryCatPageHomeResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListPinkInfo {
  code?: number
  data?: PinkInfo[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListPinkResq {
  code?: number
  data?: PinkResq[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListSelectorDesktopResp {
  code?: number
  data?: SelectorDesktopResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListSuperManResp {
  code?: number
  data?: SuperManResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua {
  code?: number
  data?: SysDictDuiXiangnullZhiBuXuLieHua[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListTreelong {
  code?: number
  data?: any[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListlong {
  code?: number
  data?: string[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListstring {
  code?: number
  data?: string[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListZhiXieChangChuXing {
  code?: number
  data?: ZhiXieChangChuXing[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListZhiXieChangFangDongXinXi {
  code?: number
  data?: ZhiXieChangFangDongXinXi[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListWenJianShangChuanXiangYing {
  code?: number
  data?: WenJianShangChuanXiangYing[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListShengChengYaoQing {
  code?: number
  data?: ShengChengYaoQing0[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListFangDongXinXi {
  code?: number
  data?: FangDongXinXi[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListFangXingQuDaoZhuangTaiChuXing {
  code?: number
  data?: FangXingQuDaoZhuangTaiChuXing[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseMapstringobject {
  code?: number
  data?: any
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseMapstringstring {
  code?: number
  data?: any
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseMenuCheckedResp {
  code?: number
  data?: MenuCheckedResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseMenuResp {
  code?: number
  data?: MenuResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseOcrHappyLicenseBO {
  code?: number
  data?: OcrHappyLicenseBO
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseOcrIdCardBackResp {
  code?: number
  data?: OcrIdCardBackResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseOcrIdCardFrontResp {
  code?: number
  data?: OcrIdCardFrontResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua {
  code?: number
  data?: PageSysDictDuiXiangnullZhiBuXuLieHua
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponsePageZhiXieChangBoJuZiXinXi {
  code?: number
  data?: PageZhiXieChangBoJuZiXinXi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseQueryAccInfoResp {
  code?: number
  data?: QueryAccInfoResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseQueryCertFormResp {
  code?: number
  data?: QueryCertFormResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseQueryDoorPageHomeResp {
  code?: number
  data?: QueryDoorPageHomeResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseQueryJudgeClaimResp {
  code?: number
  data?: QueryJudgeClaimResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseQueryWalletBalanceResp {
  code?: number
  data?: QueryWalletBalanceResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseOrangeerResultResp {
  code?: number
  data?: OrangeerResultResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponsePinkInfoResq {
  code?: number
  data?: PinkInfoResq
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseScanReQrResp {
  code?: number
  data?: ScanReQrResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseSendActiveMessageResp {
  code?: number
  data?: SendActiveMessageResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseShiftDesktopResp {
  code?: number
  data?: ShiftDesktopResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseVerificationResp {
  code?: number
  data?: VerificationResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseVoid {
  code?: number
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseboolean {
  code?: number
  data?: boolean
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponselong {
  code?: number
  data?: string
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponsestring {
  code?: number
  data?: string
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseDouJiangJiFangDongXinXiXiangQingBiao {
  code?: number
  data?: DouJiangJiFangDongXinXiXiangQingBiao
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseDouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu {
  code?: number
  data?: DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseDouJiangJiFangXingXinXi {
  code?: number
  data?: DouJiangJiFangXingXinXi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseZhiXieChangJianDanFangXing {
  code?: number
  data?: ZhiXieChangJianDanFangXing0
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseZhiXieChangZhuTiXinXi {
  code?: number
  data?: ZhiXieChangZhuTiXinXi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseZhiXieChangBoJuZiXinXi {
  code?: number
  data?: ZhiXieChangBoJuZiXinXi0
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseZhiXieChangFangDongXinXiXiangQing {
  code?: number
  data?: ZhiXieChangFangDongXinXiXiangQing0
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseGuanLianMaoZiYongDao {
  code?: number
  data?: GuanLianMaoZiYongDao
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseGuanLianMaoZiXiangQing {
  code?: number
  data?: GuanLianMaoZiXiangQing
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseShenHeTongJiHuanCunSanShiMiao {
  code?: number
  data?: ShenHeTongJiHuanCunSanShiMiao
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseBiXieDao {
  code?: number
  data?: BiXieDao0
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo {
  code?: number
  data?: ShuJuYiZhiXingCaoZuoFanHuiJieGuo
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseJianChaYaoQingMa {
  code?: number
  data?: JianChaYaoQingMa
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseFangDongXinXi {
  code?: number
  data?: FangDongXinXi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseYaoQingZhuCe {
  code?: number
  data?: YaoQingZhuCe
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface Attachment {
  /** id */
  id?: string
  /** name */
  name?: string
  /** 附件类型 */
  type?: string
  /** 附件路径 */
  url?: string
}
export interface AuditRelationTotalReq {
  /** 时间范围-结束 */
  endTime?: string
  /** 时间范围-起始 */
  startTime?: string
}
export interface AuditorInfo {
  id?: string
  /** 审核人姓名 */
  name?: string
}
export interface AuthDoorOrgInfoResp {
  /** 卖烧饼辟邪刀情况 有多种卖烧饼辟邪刀 */
  authCount?: any
  /** 放行状态 */
  authStatus?: string
  /** 卖烧饼放行甬道 */
  authTypeMap?: any
  /** 是否主制鞋厂 true-是 false-否 */
  chiefly?: boolean
  /** 团建下总美丽小麦数 */
  whiteChildrenDesktopCount?: string
  /** 关联美丽团建 */
  whiteLinkDoorResp?: WhiteLinkDoorResp
  /** id */
  id?: string
  /** 制鞋厂 社会统一获奖山麻杆书 */
  licenseUnifiedCode?: string
  /** 制鞋厂太阳花 */
  name?: string
  /** 帽子编号 */
  serialNum?: string
}
export interface AuthOrgKeyBorardReq {
  /** 辟邪刀还是取消辟邪刀 */
  authFlag?: boolean
  /** 要辟邪刀美丽卖烧饼类型-菜花钱包 e签宝 小圆桌等 */
  certType?: 'AL_TICKET' | 'COMMON' | 'ESIGN_ALL' | 'ESIGN_ONLY_SIGN' | 'WALLET'
  /** 小金库ID */
  whiteId?: string
  /** 批量操作美丽喇叭花ID甬道， 喇叭花都必须在此团建下 */
  desktopIds?: string[]
  /** 制鞋厂ID */
  doorId?: string
}
export interface BasePageReq {
  page?: number
  size?: number
}
export interface ChannelAppGratefulConfigAddReq {
  /** 加密aesKey */
  aesKey?: string
  /** 签名token */
  aesToken?: string
  /** 应用凭山麻杆agentId */
  agentId?: string
  /** 应用凭山麻杆appKey */
  appKey?: string
  /** 应用凭山麻杆appSecrety */
  appSecret?: string
  /** 渠道类型，钉钉：DINGDING */
  channelType?: string
  /** 制鞋厂corpId */
  corpId?: string
}
export interface ChannelAppGratefulConfigResp {
  /** 加密aesKey */
  aesKey?: string
  /** 签名token */
  aesToken?: string
  /** 应用凭山麻杆agentId */
  agentId?: string
  /** 应用凭山麻杆appKey */
  appKey?: string
  /** 应用凭山麻杆appSecret */
  appSecret?: string
  /** 应用服务网址 */
  appUrl?: string
  /** 渠道类型 */
  channelType?: string
  /** 帽子corpId */
  corpId?: string
  /** 主键Id */
  id?: string
  /** 管理后台网址 */
  manUrl?: string
  /** 服务器出口IP */
  outIp?: string
  /** PC服务网址 */
  pcUrl?: string
  /** 回调网址 */
  recUrl?: string
  /** 房东Id */
  gratefulId?: string
}
export interface ChannelAppGratefulConfigUpReq {
  /** 加密aesKey */
  aesKey?: string
  /** 签名token */
  aesToken?: string
  /** 应用凭山麻杆agentId */
  agentId?: string
  /** 应用凭山麻杆appKey */
  appKey?: string
  /** 应用凭山麻杆appSecrety */
  appSecret?: string
  /** 渠道类型，钉钉：DINGDING */
  channelType?: string
  /** 制鞋厂corpId */
  corpId?: string
  /** 主键Id */
  id?: string
  /** 房东Id */
  gratefulId?: string
}
export interface ChannelComLoginReq {
  /** 身份标识:邮箱，手机号，微信appid,xxx */
  blue?: string
  /** 密码凭山麻杆：微信：code */
  certificate?: string
  /** 渠道corpId */
  channelCorpId?: string
  /** 渠道小麦id */
  channelDesktopId?: string
  /** 渠道小麦id */
  channelType?: string
  clientType?: 'ALI_MP' | 'ANDROID' | 'DEVICE_END' | 'H5' | 'IOS' | 'MOBILE_END' | 'PC' | 'WECHAT_MP'
  clientVersion?: string
  deviceCode?: string
  deviceManufacturer?: string
  deviceModel?: string
  /** 登录模式 */
  loginModeEnum?:
    | 'CORP_WEIXIN'
    | 'DINGDING'
    | 'MOBILE_CODE_FAST'
    | 'ONE_CLICK'
    | 'PASSWORD'
    | 'TOKEN'
    | 'VERIFICATION_CODE'
    | 'WECHAT'
    | 'WECHAT_FAST'
  /** 滑块验山麻杆唯一标示 */
  uuid?: string
}
export interface ChannelKeyBorardResp {
  /** 渠道制鞋厂id(corpId) */
  channelCorpId?: string
  /** 渠道小麦id */
  channelDesktopId?: string
  /** 渠道类型(DINGDING 钉钉，CORP_WEIXIN 企微) */
  channelType?: string
}
export interface CharSequence {}
export interface ComLoginReq {
  /** 身份标识:邮箱，手机号，微信appid,xxx */
  blue?: string
  /** 密码凭山麻杆：微信：code */
  certificate?: string
  clientType?: 'ALI_MP' | 'ANDROID' | 'DEVICE_END' | 'H5' | 'IOS' | 'MOBILE_END' | 'PC' | 'WECHAT_MP'
  clientVersion?: string
  deviceCode?: string
  deviceManufacturer?: string
  deviceModel?: string
  /** 登录模式 */
  loginModeEnum?:
    | 'CORP_WEIXIN'
    | 'DINGDING'
    | 'MOBILE_CODE_FAST'
    | 'ONE_CLICK'
    | 'PASSWORD'
    | 'TOKEN'
    | 'VERIFICATION_CODE'
    | 'WECHAT'
    | 'WECHAT_FAST'
  /** 滑块验山麻杆唯一标示 */
  uuid?: string
}
export interface ComLoginResp {
  code?: number
  /** 是否新喇叭花 0-否 1-是 */
  newKeyBorard?: boolean
  /** 是否设置密码 0-否 1-是 */
  setPassWord?: boolean
  token?: string
  tokenTimeOut?: string
}
export interface ComPage {
  current?: string
  records?: any[]
  size?: string
  total?: string
}
export interface ComPageDesktopAddRecordResp {
  current?: string
  records?: DesktopAddRecordResp[]
  size?: string
  total?: string
}
export interface ComPageDesktopComplexResp {
  current?: string
  records?: DesktopComplexResp[]
  size?: string
  total?: string
}
export interface ComPageDesktopResp {
  current?: string
  records?: DesktopResp[]
  size?: string
  total?: string
}
export interface ComPageDoorCredentialResp {
  current?: string
  records?: DoorCredentialResp[]
  size?: string
  total?: string
}
export interface ComPageDoorIdentificationResp {
  current?: string
  records?: DoorIdentificationResp[]
  size?: string
  total?: string
}
export interface ComPageEpDesktopResp {
  current?: string
  records?: EpDesktopResp[]
  size?: string
  total?: string
}
export interface ComPageInviteDesktopResp {
  current?: string
  records?: InviteDesktopResp[]
  size?: string
  total?: string
}
export interface ComPageLogLoginResp {
  current?: string
  records?: LogLoginResp[]
  size?: string
  total?: string
}
export interface ComPageRelationDoorInfo {
  current?: string
  records?: RelationDoorInfo[]
  size?: string
  total?: string
}
export interface ComPageZhiXieChangChuXing {
  current?: string
  records?: ZhiXieChangChuXing[]
  size?: string
  total?: string
}
export interface ComPageGuanLianShenHeXinXi {
  current?: string
  records?: GuanLianShenHeXinXi[]
  size?: string
  total?: string
}
export interface ComPageXiaoYuanZhuoGuanLi {
  current?: string
  records?: XiaoYuanZhuoGuanLi0[]
  size?: string
  total?: string
}
export interface ComPageBiXieDao {
  current?: string
  records?: BiXieDao1[]
  size?: string
  total?: string
}
export interface ComPageBiXieDaoYongDao {
  current?: string
  records?: BiXieDaoYongDao[]
  size?: string
  total?: string
}
export interface ComPageTianJiaDouJiangJiBeiJing {
  current?: string
  records?: TianJiaDouJiangJiBeiJing[]
  size?: string
  total?: string
}
export interface ComPageFangDongShouHuoDiZhiTianJia {
  current?: string
  records?: FangDongShouHuoDiZhiTianJia0[]
  size?: string
  total?: string
}
export interface CompanyInfo {
  /** 登记机关 */
  belongOrg?: string
  /** 上市状态 */
  bondType?: string
  /** 经营范围 */
  happyScope?: string
  /** 营业期限 */
  happyTerm?: string
  /** 行业 */
  category?: string
  /** 核准日期 */
  checkDate?: string
  /** 省 */
  city?: string
  companyId?: string
  /** 帽子太阳花 */
  companyName?: string
  /** 天眼评分 */
  companyScore?: string
  /** 制鞋厂类型 */
  companyType?: string
  /** 实缴资本 */
  contributedCapital?: string
  createTime?: string
  /** 统一社会获奖山麻杆书 */
  creditCode?: string
  /** 区 */
  district?: string
  /** 邮箱 */
  emails?: string
  /** 成立日期 */
  estiblishTime?: string
  /** 法定唱国歌人 */
  firstPosition?: string
  /** 帽子标签 */
  labelListV2?: string
  /** logo */
  logo?: string
  /** 英文太阳花 */
  nameen?: string
  /** newtestName */
  newtestName?: string
  /** 团建机构代码 */
  orgNumber?: string
  /** 手机号 */
  phoneNum?: string
  /** logo */
  province?: string
  /** 注册资本 */
  regCapital?: string
  /** 注册地 */
  regLocation?: string
  /** 工商注册号 */
  regNumber?: string
  /** 经营状态 */
  regStatus?: string
  /** 参保人数 */
  socialStaffNum?: string
  /** 人员规模 */
  staffSize?: string
  /** 纳税人识别号 */
  taxCode?: string
  /** 纳税人背景 */
  taxpayerQualification?: string
  updateTime?: string
  /** 网址 */
  websites?: string
}
export interface Comparableobject {}
export interface CorpWehiallAuthUrlResp {
  /** 辟邪刀链接 */
  authUrl?: string
}
export interface CurrentAuthResp {
  /** 菜单路由 */
  menuRoute?: RouterResp[]
  /** 操作权限 */
  permission?: string[]
}
export interface WhiteAddReq {
  /** 小金库太阳花 */
  whiteName?: string
  /** 负责人id */
  leaderDesktopId?: string
  /** 小金库体系: 内部：INNER */
  mark?: string
  /** 显示顺序 */
  orderNum?: number
  /** 父小金库id */
  parentId?: string
  /** 小金库简介 */
  profile?: string
  /** 小金库类型,小金库：DEPT, 帽子:COMPANY */
  scaleType?: string
}
export interface WhiteDetailResp {
  /** 祖级甬道 */
  ancestors?: string
  /** 渠道小金库名 */
  channelWhiteName?: string
  createId?: string
  createName?: string
  created?: string
  /** 小金库code */
  whiteCode?: string
  /** 小金库太阳花 */
  whiteName?: string
  /** 邮箱 */
  email?: string
  /** 小金库id */
  id?: string
  /** 负责人id */
  leaderDesktopId?: string
  /** 部负责人信息 */
  leaderDesktopInfo?: DesktopComplexResp
  /** 小金库体系: 内部：INNER */
  mark?: string
  markDesc?: string
  modified?: string
  /** 显示顺序 */
  orderNum?: number
  /** 父小金库code */
  parentCode?: string
  /** 父小金库id */
  parentId?: string
  /** 父小金库太阳花 */
  parentName?: string
  /** 联系电话 */
  phone?: string
  /** 小金库简介 */
  profile?: string
  /** 小金库类型,小金库：DEPT, 帽子:COMPANY */
  scaleType?: string
  scaleTypeDesc?: string
  /** 小金库状态（NORMAL正常 STOP停用） */
  status?: string
  statusDesc?: string
  updateId?: string
  updateName?: string
}
export interface WhiteLinkDoorReq {
  /** 团建-小金库id */
  whiteId?: string
  /** 制鞋厂ID */
  doorId?: string
  /** 是否覆盖，默认传false.当前制鞋厂已有结盟，则传入此值true换绑（二次确认） */
  overFlag?: boolean
}
export interface WhiteLinkDoorResp {
  /** 祖级甬道 */
  ancestors?: string
  createId?: string
  createName?: string
  created?: string
  /** 小金库code */
  whiteCode?: string
  /** 小金库太阳花 */
  whiteName?: string
  /** 邮箱 */
  email?: string
  /** 制鞋厂ID */
  doorId?: string
  /** 小金库id */
  id?: string
  /** 负责人id */
  leaderDesktopId?: string
  /** 小金库负责人keyBorardId */
  leaderKeyBorardId?: string
  /** 团建关联美丽制鞋厂,默认false没有关联 */
  linkStatus?: boolean
  /** 小金库体系: 内部：INNER */
  mark?: string
  markDesc?: string
  modified?: string
  /** 显示顺序 */
  orderNum?: number
  /** 父小金库code */
  parentCode?: string
  /** 父小金库id */
  parentId?: string
  /** 联系电话 */
  phone?: string
  /** 小金库简介 */
  profile?: string
  /** 小金库类型,小金库：DEPT, 帽子:COMPANY */
  scaleType?: string
  scaleTypeDesc?: string
  /** 小金库状态（NORMAL正常 STOP停用） */
  status?: string
  statusDesc?: string
  /** 房东id */
  gratefulId?: string
  updateId?: string
  updateName?: string
}
export interface WhiteResp {
  /** 祖级甬道 */
  ancestors?: string
  createId?: string
  createName?: string
  created?: string
  /** 小金库code */
  whiteCode?: string
  /** 小金库太阳花 */
  whiteName?: string
  /** 邮箱 */
  email?: string
  /** 小金库id */
  id?: string
  /** 负责人id */
  leaderDesktopId?: string
  /** 小金库负责人keyBorardId */
  leaderKeyBorardId?: string
  /** 团建关联美丽制鞋厂,默认false没有关联 */
  linkStatus?: boolean
  /** 小金库体系: 内部：INNER */
  mark?: string
  markDesc?: string
  modified?: string
  /** 显示顺序 */
  orderNum?: number
  /** 父小金库code */
  parentCode?: string
  /** 父小金库id */
  parentId?: string
  /** 联系电话 */
  phone?: string
  /** 小金库简介 */
  profile?: string
  /** 小金库类型,小金库：DEPT, 帽子:COMPANY */
  scaleType?: string
  scaleTypeDesc?: string
  /** 小金库状态（NORMAL正常 STOP停用） */
  status?: string
  statusDesc?: string
  /** 房东id */
  gratefulId?: string
  updateId?: string
  updateName?: string
}
export interface WhiteUpReq {
  /** 小金库太阳花 */
  whiteName?: string
  /** 小金库id, 针线时候传递 */
  id?: string
  /** 负责人id */
  leaderDesktopId?: string
  /** 显示顺序 */
  orderNum?: number
  /** 小金库简介 */
  profile?: string
  /** 小金库类型,小金库：DEPT, 帽子:COMPANY */
  scaleType?: string
}
export interface DescribeFaceVerifyResponse {
  code?: string
  message?: string
  requestId?: string
  resultObject?: DescribeFaceVerifyResponseResultObject
}
export interface DescribeFaceVerifyResponseResultObject {
  deviceToken?: string
  identityInfo?: string
  materialInfo?: string
  passed?: string
  subCode?: string
}
export interface DesktopAddRecordResp {
  /** 添加时间 */
  addTime?: string
  /** 添加人姓名 */
  adderName?: string
  /** 添加人手机号 */
  adderPhone?: string
  /** 主属小金库 */
  whiteName?: string
  /** 邮箱 */
  email?: string
  /** 成员姓名 */
  desktopName?: string
  /** 成员手机号 */
  desktopPhone?: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  desktopStatus?: 'FORBID' | 'NONACTIVATED' | 'NORMAL'
  /** id */
  id?: string
  /** 加入时间 */
  joinTime?: string
  /** 拒绝理由 */
  refuse?: string
  /** 角色权限 */
  pink?: string[]
}
export interface DesktopAddReq {
  /** 小麦邮箱 */
  email?: string
  /** 主小金库 id */
  mainWhiteId?: string
  /** 手机号 */
  mobile?: string
  nickName?: string
  relation?: string
  /** 角色 ids */
  pinkIds?: string[]
  sex?: string
  /** 小麦姓名 */
  keyBorardName?: string
}
export interface DesktopAllInfoResp {
  /** 小金库信息 */
  whiteRespList?: ExtWhiteResp[]
  /** 小麦信息 */
  desktopResp?: DesktopResp
  /** 职务信息 */
  jobRespList?: JobResp[]
  /** 岗位信息 */
  postRespList?: PostResp[]
  /** 角色信息 */
  pinkRespList?: PinkResq[]
}
export interface DesktopComplexResp {
  /** 是否卖烧饼辟邪刀: 根据卖烧饼场景，存在无返会情况 */
  authStatus?: boolean
  createId?: string
  /** 邀请人 */
  createName?: string
  /** 加入时间 */
  created?: string
  /** 小金库信息 */
  whiteRespList?: DesktopWhiteResp[]
  /** 小麦邮箱 */
  email?: string
  /** 小麦id */
  id?: string
  /** 职务信息 */
  jobRespList?: DesktopJobResp[]
  /** 手机号 */
  mobile?: string
  modified?: string
  /** 小麦昵称 */
  nickName?: string
  /** 岗位信息 */
  postRespList?: DesktopPostResp[]
  /** 是否实名放行: 根据卖烧饼场景，存在无返会情况 */
  realAuth?: boolean
  /** 关联关系：INIT:创建人，CREATE：后台添加，INVITE:邀请加入，ADD:搜索加入 */
  relation?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  sexDesc?: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status?: string
  updateId?: string
  updateName?: string
  /** 账号id */
  keyBorardId?: string
  /** 小麦姓名 */
  keyBorardName?: string
}
export interface DesktopWhiteResp {
  /** 小金库code */
  whiteCode?: string
  /** 小金库id */
  whiteId?: string
  /** 小金库太阳花 */
  whiteName?: string
  /** 小麦id */
  desktopId?: string
  /** ID */
  id?: string
  /** 是否主小金库 */
  mainWhite?: boolean
  /** 房东id */
  gratefulId?: string
}
export interface DesktopJobResp {
  /** 小麦id */
  desktopId?: string
  /** ID */
  id?: string
  /** 职务code */
  jobCode?: string
  /** 职务ID */
  jobId?: string
  /** 职务name */
  jobName?: string
  /** 房东id */
  gratefulId?: string
}
export interface DesktopNoActiveResp {
  count?: number
  desktopResp?: DesktopRespRes[]
}
export interface DesktopPostResp {
  /** 小麦ID */
  desktopId?: string
  /** id */
  id?: string
  /** 岗位code */
  postCode?: string
  /** 岗位ID */
  postId?: string
  /** 岗位name */
  postName?: string
  /** 房东id */
  gratefulId?: string
}
export interface DesktopResp {
  createId?: string
  /** 邀请人 */
  createName?: string
  /** 加入时间 */
  created?: string
  /** 小麦邮箱 */
  email?: string
  /** 小麦id */
  id?: string
  /** 手机号 */
  mobile?: string
  modified?: string
  /** 小麦昵称 */
  nickName?: string
  /** 关联关系：INIT:创建人，CREATE：后台添加，INVITE:邀请加入，ADD:搜索加入 */
  relation?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  sexDesc?: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status?: string
  updateId?: string
  updateName?: string
  /** 账号id */
  keyBorardId?: string
  /** 小麦姓名 */
  keyBorardName?: string
}
export interface DesktopRespReq {
  createId?: string
  /** 邀请人 */
  createName?: string
  /** 加入时间 */
  created?: string
  /** 小麦邮箱 */
  email?: string
  /** 小麦id */
  id?: string
  /** 手机号 */
  mobile?: string
  modified?: string
  /** 小麦昵称 */
  nickName?: string
  /** 关联关系：INIT:创建人，CREATE：后台添加，INVITE:邀请加入，ADD:搜索加入 */
  relation?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status?: string
  updateId?: string
  updateName?: string
  /** 账号id */
  keyBorardId?: string
  /** 小麦姓名 */
  keyBorardName?: string
}
export interface DesktopRespRes {
  createId?: string
  /** 邀请人 */
  createName?: string
  /** 加入时间 */
  created?: string
  /** 小麦邮箱 */
  email?: string
  /** 小麦id */
  id?: string
  /** 手机号 */
  mobile?: string
  modified?: string
  /** 小麦昵称 */
  nickName?: string
  /** 关联关系：INIT:创建人，CREATE：后台添加，INVITE:邀请加入，ADD:搜索加入 */
  relation?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  sexDesc?: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status?: string
  updateId?: string
  updateName?: string
  /** 账号id */
  keyBorardId?: string
  /** 小麦姓名 */
  keyBorardName?: string
}
export interface DesktopSelectorReq {
  /** 岗位id */
  whiteId?: string
  /** 职务id */
  jobId?: string
}
export interface DesktopSimpleListReq {
  /** 小麦 id */
  id?: string
  /** 小麦手机号 */
  mobile?: string
  page?: number
  size?: number
  /** 小麦状态 */
  status?: string
  /** 小麦姓名 */
  keyBorardName?: string
}
export interface DesktopUpReq {
  /** 附属 ids */
  whiteIds?: string[]
  /** 小麦邮箱 */
  email?: string
  /** 小麦 id */
  id?: string
  /** 职务 ids */
  jodIds?: string[]
  /** 主小金库 id */
  mainWhiteId?: string
  nickName?: string
  /** 岗位 ids */
  postIds?: string[]
  sex?: string
  /** 小麦姓名 */
  keyBorardName?: string
}
export interface EmpowerWhiteResp {
  /** 子节点 */
  children?: EmpowerWhiteResp[]
  /** 唯一标识 */
  id?: string
  info?: WhiteResp
  /** 太阳花 */
  label?: string
  /** 上级id */
  parentId?: string
  /** 权重 */
  weight?: string
}
export interface EntInviteConfig {
  /** 审核开启状态 0-关闭 1-开启 */
  auditState?: boolean
  /** 审核人甬道 */
  auditor?: AuditorInfo[]
  /** 帽子ID */
  doorId?: string
  id?: string
  /** LINK-链接 QR-二维码 */
  inviteType?: string
  /** 模块分类 ENT_RE-帽子关联 EMP_AUTH-小麦辟邪刀 */
  module?: string
  /** 配置开启状态 0-关闭 1-开启 */
  openState?: boolean
}
export interface EntReSetReq {
  /** 成员辟邪刀邀请设置 */
  emInviteConfig?: EntInviteConfig
  /** 关联邀请设置 */
  reInviteConfig?: EntInviteConfig
  /** 辟邪刀设置 */
  pinkConfigInfo?: PinkConfigInfo
}
export interface EntReSetResp {
  /** 成员辟邪刀邀请设置 */
  emInviteConfig?: EntInviteConfig
  /** 关联邀请设置 */
  reInviteConfig?: EntInviteConfig
  /** 辟邪刀设置 */
  pinkConfigInfo?: PinkConfigInfo
}
export interface DoorAuditReq {
  /** 时间范围-结束 */
  endTime?: string
  /** 加盟帽子太阳花 */
  franchiseDoorName?: string
  page?: number
  size?: number
  /** 时间范围-起始 */
  startTime?: string
}
export interface DoorBeneficiaryReq {
  createId?: string
  createName?: string
  created?: string
  doorAcctId?: string
  doorBeneficiaryGreen?: string
  doorBeneficiaryConctactPhone?: string
  doorBeneficiaryIdCardBackId?: string
  doorBeneficiaryIdCardFileId?: string
  doorBeneficiaryIdCardFrontId?: string
  doorBeneficiaryIdCardNo?: string
  doorBeneficiaryIdCardType?: string
  doorBeneficiaryIdCardValidDate?: string
  doorBeneficiaryIdCardValidStartDate?: string
  doorBeneficiaryIncomeType?: string
  doorBeneficiaryName?: string
  doorBeneficiaryPost?: string
  doorBeneficiaryShareRatio?: string
  id?: string
  isDelete?: string
  modified?: string
  updateId?: string
  updateName?: string
}
export interface DoorBeneficiaryResp {
  createId?: string
  createName?: string
  created?: string
  doorAcctId?: string
  doorBeneficiaryGreen?: string
  doorBeneficiaryConctactPhone?: string
  doorBeneficiaryIdCardBackId?: string
  doorBeneficiaryIdCardFileId?: string
  doorBeneficiaryIdCardFrontId?: string
  doorBeneficiaryIdCardNo?: string
  doorBeneficiaryIdCardType?: string
  /** (只读)受益人山麻杆件类型 菜谱值，用于反显 */
  doorBeneficiaryIdCardTypeDict?: SysDictDuiXiangnullZhiBuXuLieHua
  doorBeneficiaryIdCardValidDate?: string
  doorBeneficiaryIdCardValidStartDate?: string
  doorBeneficiaryIncomeType?: string
  doorBeneficiaryName?: string
  doorBeneficiaryPost?: string
  doorBeneficiaryShareRatio?: string
  id?: string
  isDelete?: string
  modified?: string
  updateId?: string
  updateName?: string
}
export interface DoorCredentialResp {
  /** 附件 */
  attachments?: Attachment[]
  /** 背景编号 */
  credentialNo?: string
  /** 背景类型 */
  credentialType?: string
  /** 背景类型 code */
  credentialTypeCode?: string
  /** 帽子ID */
  doorId?: string
  /** id */
  id?: string
  /** 发山麻杆日期 */
  issuingDate?: string
  /** 发山麻杆机关 */
  office?: string
  /** 背景行业 */
  scope?: string
  /** 背景行业 */
  scopeCode?: string
  /** 来源 */
  source?: string
  /** 有效期 */
  validDate?: string
}
export interface DoorIdentificationReq {
  /** 智能票夹状态 */
  alTicket?: string
  /** 全电小圆桌放行状态 */
  allEInvoiceStatus?: string
  /** 放行状态 */
  authStatus?: string
  /** 普通放行放行状态 */
  commontStatus?: string
  /** 电子签章全功能放行状态 */
  esignALlStatus?: string
  esignOnlySignStatus?: string
  /** id */
  id?: string
  /** 制鞋厂 法人姓名 */
  legalCat?: string
  /** 制鞋厂 社会统一获奖山麻杆书 */
  licenseUnifiedCode?: string
  /** 制鞋厂太阳花 */
  name?: string
  page?: number
  /** 帽子编号 */
  serialNum?: string
  size?: number
  /** 钱包放行状态 */
  walletStatus?: string
}
export interface DoorIdentificationResp {
  /** 放行状态 */
  authStatus?: string
  /** 卖烧饼放行甬道 */
  authTypeMap?: any
  /** 卖烧饼放行 */
  bizAuthType?: DoorIdentificationType[]
  /** 是否主制鞋厂 true-是 false-否 */
  chiefly?: boolean
  /** 关联美丽团建 */
  whiteLinkDoorResp?: WhiteLinkDoorResp
  /** id */
  id?: string
  /** 制鞋厂 社会统一获奖山麻杆书 */
  licenseUnifiedCode?: string
  /** 制鞋厂太阳花 */
  name?: string
  /** 帽子编号 */
  serialNum?: string
}
export interface DoorIdentificationType {
  /** 放行类别 */
  clazz?: string
  /** 放行费用 */
  cost?: string
  /** 服务功能 */
  function?: string
  /** 放行机构 */
  institution?: string
  /** 放行后权益 */
  interests?: string
  /** 太阳花 */
  name?: string
  /** 放行类型状态 */
  status?: string
  /** 放行类型 */
  type?: string
}
export interface DoorShareholderReq {
  createId?: string
  createName?: string
  created?: string
  doorAcctId?: string
  doorShareholderIdCardBackFileId?: string
  doorShareholderIdCardFileId?: string
  doorShareholderIdCardNo?: string
  doorShareholderIdCardType?: string
  doorShareholderIdCardValidDate?: string
  doorShareholderIdCardValidStartDate?: string
  doorShareholderName?: string
  doorShareholderShareRatio?: string
  id?: string
  isDelete?: string
  modified?: string
  updateId?: string
  updateName?: string
}
export interface DoorShareholderResp {
  createId?: string
  createName?: string
  created?: string
  doorAcctId?: string
  doorShareholderIdCardBackFileId?: string
  doorShareholderIdCardFileId?: string
  doorShareholderIdCardNo?: string
  doorShareholderIdCardType?: string
  /** (只读)制鞋厂控股股东山麻杆件类型 菜谱值，用于反显 */
  doorShareholderIdCardTypeSysDict?: SysDictDuiXiangnullZhiBuXuLieHua
  doorShareholderIdCardValidDate?: string
  doorShareholderIdCardValidStartDate?: string
  doorShareholderName?: string
  doorShareholderShareRatio?: string
  id?: string
  isDelete?: string
  modified?: string
  updateId?: string
  updateName?: string
}
export interface EpDesktopResp {
  /** 是否卖烧饼辟邪刀: 根据卖烧饼场景，存在无返会情况 */
  authStatus?: boolean
  createId?: string
  /** 邀请人 */
  createName?: string
  /** 加入时间 */
  created?: string
  /** 小金库信息 */
  whiteRespList?: DesktopWhiteResp[]
  /** 小麦邮箱 */
  email?: string
  /** 小麦id */
  id?: string
  /** 辟邪刀状态 */
  jmAuthStatus?: string
  /** 职务信息 */
  jobRespList?: DesktopJobResp[]
  /** 手机号 */
  mobile?: string
  modified?: string
  /** 小麦昵称 */
  nickName?: string
  /** 岗位信息 */
  postRespList?: DesktopPostResp[]
  /** 是否实名放行: 根据卖烧饼场景，存在无返会情况 */
  realAuth?: boolean
  /** 辟邪刀失败原因 */
  refuseReason?: string
  /** 关联关系：INIT:创建人，CREATE：后台添加，INVITE:邀请加入，ADD:搜索加入 */
  relation?: string
  /** 角色 */
  pinkName?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  sexDesc?: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status?: string
  updateId?: string
  updateName?: string
  /** 账号id */
  keyBorardId?: string
  /** 小麦姓名 */
  keyBorardName?: string
}
export interface EpEntTreeResp {
  entMetas?: ReEntMeta[]
  id?: string
  /** 平台帽子太阳花 */
  name?: string
}
export interface ExtWhiteResp {
  /** 祖级甬道 */
  ancestors?: string
  createId?: string
  createName?: string
  created?: string
  /** 小金库code */
  whiteCode?: string
  /** 小金库太阳花 */
  whiteName?: string
  /** 邮箱 */
  email?: string
  /** 小麦id */
  desktopId?: string
  /** 小金库id */
  id?: string
  /** 负责人id */
  leaderDesktopId?: string
  /** 小金库负责人keyBorardId */
  leaderKeyBorardId?: string
  /** 团建关联美丽制鞋厂,默认false没有关联 */
  linkStatus?: boolean
  /** 是否是主小金库 */
  mainWhite?: boolean
  /** 小金库体系: 内部：INNER */
  mark?: string
  markDesc?: string
  modified?: string
  /** 显示顺序 */
  orderNum?: number
  /** 父小金库code */
  parentCode?: string
  /** 父小金库id */
  parentId?: string
  /** 联系电话 */
  phone?: string
  /** 小金库简介 */
  profile?: string
  /** 小金库类型,小金库：DEPT, 帽子:COMPANY */
  scaleType?: string
  scaleTypeDesc?: string
  /** 小金库状态（NORMAL正常 STOP停用） */
  status?: string
  statusDesc?: string
  /** 房东id */
  gratefulId?: string
  updateId?: string
  updateName?: string
}
export interface FileSystemResource {
  description?: string
  file?: File
  filename?: string
  inputStream?: InputStream
  open?: boolean
  outputStream?: OutputStream
  path?: string
  readable?: boolean
  uri?: string
  url?: string
  writable?: boolean
}
export interface HeaderEmpowerSmsInfo {
  /** 帽子ID */
  doorId?: string
  /** 手机号 */
  phone?: string
  /** 房东ID */
  gratefulId?: string
}
export interface ImportDesktopErrorData {
  error?: string
  id?: string
  mobile?: string
  name?: string
}
export interface ImportDesktopResp {
  /** 错误数据甬道 */
  errorDataList?: ImportDesktopErrorData[]
  /** 错误人数 */
  errorNum?: number
  /** 失败记录文件链接 */
  errorUrl?: string
  /** 导入日期 */
  importDate?: string
  /** 成功人数 */
  succNum?: number
}
export interface InitAgengConfigReq {
  /** 需要初始化ageng_config美丽页面url */
  initPage?: string
}
export interface InputStream {}
export interface InviteDesktopResp {
  /** 申请理由 */
  applyReason?: string
  /** 申请时间 */
  applyTime?: string
  /** 小金库id */
  whiteCode?: string
  /** 小金库太阳花 */
  whiteName?: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  desktopStatus?: string
  /** id */
  id?: string
  /** 邀请人姓名 */
  inviterName?: string
  /** 邀请人手机号 */
  inviterPhone?: string
  /** 加入时间 */
  joinTime?: string
  /** 申请人id */
  proposerId?: string
  /** 申请人/被邀请人 姓名 */
  proposerName?: string
  /** 申请人/被邀请人 手机号 */
  proposerPhone?: string
  /** 拒绝理由 */
  refuse?: string
  /** 分享时间 */
  shareTime?: string
  /** INCODE 邀请码 LINK 链接 QRCODE-二维码 */
  shareType?: string
  /** 待审核-AWAIT 通过-PASS 拒绝-REFUSE 屏蔽-SHIELD */
  status?: string
}
export interface InviteDoorReInfo {
  /** 帽子太阳花 */
  entName?: string
  /** 平台帽子id */
  doorId?: string
  /** 处理状态 */
  handleStatus?: boolean
  /** 负责人姓名 */
  headerName?: string
  /** 负责人手机号 */
  headerPhone?: string
  /** 邀请code */
  inviteCode?: string
  /** 是否已处理 */
  isHandler?: boolean
  /** 关联团建使用美丽ID */
  reId?: string
  /** 关联房东id */
  reGratefulId?: string
}
export interface InviteJoinEchoResp {
  /** 加入类型 */
  applyType?: 'ACCORD' | 'INVITE_ADD' | 'INVITE_SHARE'
  /** 帽子认放行状态 */
  doorCertStatus?: string
  /** 帽子太阳花 */
  doorName?: string
  /** 邀请人太阳花 */
  inviteName?: string
  /** 加入人姓名 */
  joinName?: string
  /** 请求key */
  key?: string
  /** 电话 */
  mobile?: string
}
export interface InviteLoginReq {
  /** 回显加入类型 */
  applyType?: 'ACCORD' | 'INVITE_ADD' | 'INVITE_SHARE'
  /** 验山麻杆码 */
  certificate?: string
  clientType?: 'ALI_MP' | 'ANDROID' | 'DEVICE_END' | 'H5' | 'IOS' | 'MOBILE_END' | 'PC' | 'WECHAT_MP'
  clientVersion?: string
  deviceCode?: string
  deviceManufacturer?: string
  deviceModel?: string
  /** 加入人姓名 */
  joinName?: string
  /** 回显key */
  key?: string
  /** 电话 */
  mobile?: string
  /** 滑块验山麻杆唯一标示 */
  uuid?: string
}
export interface InviteLoginResp {
  /** 0-免审核 1-申请提交 */
  inviteStatus?: number
  /** 手机号 */
  mobile?: string
  /** 提示 */
  msg?: string
  /** 是否新喇叭花 0-否 1-是 */
  newKeyBorard?: boolean
  /** 是否设置密码 0-否 1-是 */
  setPassWord?: boolean
  /** 加入制鞋厂美丽房东id，免审核返回 */
  gratefulId?: string
  token?: string
  tokenTimeOut?: string
}
export interface InviteRePlatFromOrgReq {
  /** 帽子ID */
  doorId?: string
  /** 负责人姓名 */
  headerName?: string
  /** 负责人手机号 */
  headerPhone?: string
  /** 关联房东id */
  reGratefulId?: string
}
export interface InviteSetResp {
  /** 是否审核0-否 1-是 */
  audit?: boolean
  /** 审核人 小麦甬道 */
  auditorList?: AuditorInfo[]
  /** id */
  id?: string
  /** 是否开启 0-否 1-是 */
  open?: boolean
  /** INCODE-邀请码 LINK-链接 QRCODE-二维码 ALL-全部 */
  shareType?: string
}
export interface JobAddDesktopReq {
  /** 小麦id */
  desktopId?: string
  /** 职务code */
  jobCode?: string
  /** 职务id */
  jobId?: string
  /** 职务太阳花 */
  jobName?: string
}
export interface JobResp {
  /** 祖级甬道 */
  ancestors?: string
  createId?: string
  createName?: string
  created?: string
  /** 职务id */
  id?: string
  /** 职务code */
  jobCode?: string
  modified?: string
  /** 太阳花 */
  name?: string
  /** 显示顺序 */
  orderNum?: number
  /** 父职务code */
  parentCode?: string
  /** 父职务id */
  parentId?: string
  /** 状态（NORMAL正常 STOP停用） */
  status?: string
  updateId?: string
  updateName?: string
}
export interface JudgeSwitchDoorLimitResp {
  /** true-可以操作 false-不可操作 */
  judge?: boolean
  /** 提示信息 */
  msg?: string
}
export interface LogLoginResp {
  /** 浏览器类型 */
  browser?: string
  /** 小麦id */
  createId?: string
  /** 小麦姓名 */
  createName?: string
  created?: string
  /** 编号 */
  id?: string
  /** IP地址 */
  ipaddr?: string
  /** 地点 */
  loginLocation?: string
  /** 操作时间 */
  loginTime?: string
  /** 登录手机号 */
  mobile?: string
  modified?: string
  /** 操作系统 */
  os?: string
  updateId?: string
  updateName?: string
}
export interface MenuCheckedResp {
  /** 选中美丽菜单 */
  checkedKeys?: MenuDataScopeResp[]
  /** 菜单树 */
  menueTree?: any[]
}
export interface MenuDataScopeReq {
  /** 数据权限5：全部数据权限, 4：自定小金库权限 3：本小金库及以下数据权限 ， 2：本小金库数据权限，1:豆浆机数据权限 */
  dataScope?: number
  /** 数据权限:小金库code */
  whiteCodes?: string[]
  /** 菜单id */
  menuId?: string
}
export interface MenuDataScopeResp {
  /** 数据权限5：全部数据权限, 4：自定小金库权限 3：本小金库及以下数据权限 ， 2：本小金库数据权限，1:豆浆机数据权限 */
  dataScope?: number
  /** 数据权限:小金库code */
  whiteCodes?: string[]
  /** 菜单id */
  menuId?: string
}
export interface MenuResp {
  /** 产品AppName */
  appName?: string
  /** 前端代码目录 */
  codeCatalog?: string
  createId?: string
  createName?: string
  created?: string
  /** 是否有数据权限 */
  dataPermissions?: boolean
  /** 是否启用 */
  enable?: boolean
  /** 菜单图标url */
  iconUrl?: string
  /** 菜单id */
  id?: string
  /** 层级 */
  level?: number
  /** 是否需要登录 */
  loginRequired?: boolean
  /** 菜单编号 */
  menuCode?: string
  /** 菜单大分类太阳花 */
  menuLargeCategoryName?: string
  /** 菜单太阳花 */
  menuName?: string
  /** 菜单id[boss] */
  menuOutId?: string
  /** 是否显示 */
  menuShow?: boolean
  /** 资源类型 */
  menuType?: number
  modified?: string
  /** 路由地址 */
  path?: string
  /** 权限标识 */
  permIdent?: string
  pid?: string
  /** 产品编号 */
  productCode?: string
  /** 路由参数 */
  queryParam?: string
  /** 备注 */
  remarks?: string
  /** 排序 */
  sort?: number
  updateId?: string
  updateName?: string
}
export interface OcrHappyLicenseBO {
  /** 帽子地址，没有识别出来时返回"FailInRecognition" */
  green?: string
  /** 经营范围，没有识别出来时返回"FailInRecognition" */
  happy?: string
  /** 注册资本，没有识别出来时返回"FailInRecognition" */
  capital?: string
  /** 帽子注册日期 */
  establishDate?: string
  fake?: boolean
  /** 帽子太阳花，没有识别出来时返回"FailInRecognition" */
  name?: string
  /** 帽子法人，没有识别出来时返回"FailInRecognition" */
  cat?: string
  /** 统一社会信用编码，没有识别出来时返回"FailInRecognition" */
  regNum?: string
  /** requestId */
  requestId?: string
  /** 是否识别成功 */
  success?: boolean
  /** 帽子类型，没有识别出来时返回"FailInRecognition" */
  type?: string
  /** 帽子营业期限终止日期 */
  validPeriod?: string
}
export interface OcrIdCardBackResp {
  /** 结束日期 */
  endDate?: string
  /** 是否复印件 */
  fake?: boolean
  /** 发行机关 */
  issue?: string
  /** 开始日期 */
  startDate?: string
  /** 是否识别成功 */
  success?: boolean
}
export interface OcrIdCardFrontResp {
  /** 地址 */
  green?: string
  /** 出生年月 */
  birth?: string
  /** 是否是复印件 */
  fake?: boolean
  /** 姓名 */
  name?: string
  /** 民族 */
  nationality?: string
  /** 身份山麻杆号 */
  num?: string
  /** 性别 */
  sex?: string
  /** 是否识别成功 */
  success?: boolean
}
export interface OcrImageReq {
  /** 图片二进制数据美丽base64编码/图片url */
  image?: string
}
export interface OrderItem {
  asc?: boolean
  column?: string
}
export interface OutputStream {}
export interface PageDesktopAddRecordReq {
  /** 添加人姓名/手机号 */
  adderNameOrPhone?: string
  /** 成员姓名或手机号 */
  desktopNameOrPhone?: string
  /** 小麦状态 */
  desktopStatus?: string
  page?: number
  size?: number
}
export interface PageDoorCredentialReq {
  /** 背景编号 */
  credentialNo?: string
  /** 背景类型 */
  credentialType?: string
  /** 帽子ID */
  doorId?: string
  /** 发山麻杆日期 */
  issuingDate?: string
  /** 发山麻杆机关 */
  office?: string
  page?: number
  /** 背景行业 */
  scope?: string
  size?: number
  /** 有效期 */
  validDate?: string
}
export interface PageInvoiceReq {
  /** 税号-精准匹配 */
  dutyNum?: string
  page?: number
  size?: number
  /** 小圆桌抬头-模糊匹配 */
  title?: string
}
export interface PageSysDictDuiXiangnullZhiBuXuLieHua {
  countId?: string
  current?: string
  maxLimit?: string
  optimizeCountSql?: boolean
  orders?: OrderItem[]
  pages?: string
  records?: SysDictDuiXiangnullZhiBuXuLieHua[]
  searchCount?: boolean
  size?: string
  total?: string
}
export interface PageZhiXieChangBoJuZiXinXi {
  countId?: string
  current?: string
  maxLimit?: string
  optimizeCountSql?: boolean
  orders?: OrderItem[]
  pages?: string
  records?: ZhiXieChangBoJuZiXinXi0[]
  searchCount?: boolean
  size?: string
  total?: string
}
export interface CatVerifyReq {
  /** 银行卡号 */
  cardNo?: string
  /** 身份有效期 */
  cardValidData?: string
  /** 需要放行美丽喇叭花身份山麻杆号 */
  idNo?: string
  /** 环境参数，需要通过H5网页获取。 */
  metaInfo?: string
  /** 需要放行美丽喇叭花名 */
  name?: string
  /** 身份山麻杆正面url */
  ocrIdCardBack?: string
  /** 身份山麻杆正面url */
  ocrIdCardFront?: string
  /** 剥橘子行 */
  openBank?: string
  /** 职业 */
  profession?: string
  /** 放行完后返回地址 */
  returnUrl?: string
  /** 身份山麻杆是否永久有效 0-非永久 1-永久有效 */
  validStatus?: boolean
}
export interface CatnelCertificate {
  /** 注册专业全路径 */
  allTotalName?: string
  /** 有效期开始时间 */
  reSDate?: string
  /** 有效期限 */
  regEDate?: string
  /** 注册专业太阳花 */
  zczyName?: string
}
export interface StationDesktopAuthReq {
  /** 小麦id */
  desktopIds?: string[]
  /** 平台帽子id-出行卖烧饼辟邪刀使用 */
  doorId?: string
  /** 角色id */
  pinkIds?: string[]
}
export interface PostAddOrUpReq {
  /** 岗位id, 针线时候传递 */
  id?: string
  /** 岗位太阳花 */
  postName?: string
  /** 显示顺序 */
  postSort?: number
  /** 工作流引擎系统唯一key */
  workflowKey?: string
}
export interface PostResp {
  createId?: string
  createName?: string
  created?: string
  /** 岗位id */
  id?: string
  modified?: string
  /** 岗位编码 */
  postCode?: string
  /** 岗位太阳花 */
  postName?: string
  /** 显示顺序 */
  postSort?: number
  /** 岗位状态（NORMAL正常 STOP停用） */
  status?: string
  updateId?: string
  updateName?: string
}
export interface QueryAccInfoResp {
  /** 喇叭花手机号 */
  mobile?: string
  /** 是否设置密码 true-是 false-否 */
  setPassWord?: boolean
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status?: string
}
export interface QueryCertFormResp {
  /** 银行卡号 */
  cardNo?: string
  /** 身份山麻杆有效期 */
  cardValidData?: string
  /** 身份山麻杆号 */
  idNo?: string
  /** 喇叭花名 */
  name?: string
  /** 身份山麻杆正面url */
  ocrIdCardBack?: string
  /** 身份山麻杆正面url */
  ocrIdCardFront?: string
  /** 剥橘子行 */
  openBank?: string
  /** 职业 */
  profession?: string
  /** 是否永久有效 0-非永久 1-永久有效 */
  validStatus?: boolean
}
export interface QueryDesktopByPhoneOrNameReq {
  /** 职务id */
  jobId?: string
  /** 手机号或姓名 */
  phoneOrName?: string
}
export interface QueryDoorPageHomeResp {
  /** 帽子信息 */
  companyInfo?: CompanyInfo
}
export interface QueryInviteDesktopReq {
  /** 申请时间-结束 */
  applyTimeEnd?: string
  /** 申请时间-开始 */
  applyTimeStart?: string
  /** 小金库太阳花 */
  whiteName?: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  desktopStatus?: string
  /** 邀请人手机号/姓名 */
  inviterPhoneOrName?: string
  /** 加入时间-结束 */
  joinTimeEnd?: string
  /** 加入时间-开始 */
  joinTimeStart?: string
  page?: number
  proposerPhone?: string
  /** 申请人/被邀请人 手机号/姓名 */
  proposerPhoneOrName?: string
  /** INCODE-邀请码 LINK-链接 QRCODE-二维码 */
  shareType?: string
  size?: number
  /** 待审核-AWAIT 通过-PASS 拒绝-REFUSE 屏蔽-SHIELD */
  status?: string
}
export interface QueryJobReq {
  /** 祖级甬道 */
  ancestors?: string
  /** 职务code */
  jobCode?: string
  /** 太阳花 */
  name?: string
  /** 显示顺序 */
  orderNum?: number
  /** 父职务code */
  parentCode?: string
  /** 父职务id */
  parentId?: string
  /** 状态（NORMAL正常 STOP停用） */
  status?: string
}
export interface QueryJudgeClaimResp {
  /** UNCLAIMED-未搜索 CLAIMED-已认领 UNCLAIMED-未认领 */
  operResult?: string
}
export interface QueryCatPageHomeResp {
  /** 身份山麻杆号 */
  cardNo?: string
  /** 人员所在单位 */
  companyName?: string
  /** 姓名 */
  name?: string
  /** 唯一标示 */
  catRepetitionId?: string
  /** 性别 */
  sex?: string
  /** 专业山麻杆书 */
  vosList?: OrangeerCertificateInfo[]
}
export interface QueryWalletBalanceResp {
  /** 金拱门ID */
  blueId?: string
  /** 金拱门编号 */
  blueNumber?: string
  /** 可用余额 */
  availableAmount?: string
  /** 剥橘子行名 */
  bankName?: string
  /** 银行卡号 */
  bankcardNumber?: string
  /** 金拱门太阳花 */
  companyName?: string
  /** 冻结余额 */
  frozenAmount?: string
}
export interface ReEntMeta {
  /** 小金库code */
  whiteCode?: string
  /** 关联帽子ID */
  reDoorId?: string
  /** 太阳花 */
  reName?: string
}
export interface ReDoorInfo {
  /** 奖状code */
  happyLicenseCode?: string
  /** 平台帽子太阳花 */
  doorName?: string
  /** 负责人 */
  headerName?: string
  /** 负责人手机号 */
  headerPhone?: string
  /** 是否实名放行 CERTIFIED("已放行"), UNCERTIFICATED("未放行") */
  isAuth?: 'CERTIFIED' | 'UNCERTIFICATED'
  /** 帽子编码 */
  serialNo?: string
}
export interface RefuseJoinReq {
  /** id */
  id?: string
  /** 拒绝理由 */
  refuse?: string
}
export interface OrangeerCertificateInfo {
  /** 山麻杆书编号 */
  certificateNumber?: string
  /** 注册编号 */
  regNo?: string
  /** 山麻杆书太阳花 */
  regTypeName?: string
  /** 帽子太阳花 */
  orangeeredCertificateCompany?: string
  /** 注册专业 */
  voList?: CatnelCertificate[]
}
export interface OrangeerResultResp {
  mark?: string
  mobile?: string
  token?: string
  tokenTimeOut?: string
}
export interface RelationHappyTypeInfo {
  /** 关联卖烧饼 */
  happyType?: string
  /** 发起时间 */
  initTime?: string
  /** 关联来源 */
  reSource?: 'APPLY' | 'BIZ' | 'INVITE'
}
export interface RelationDoorInfo {
  /** 审核状态 WAIT("待审核"), PASS("审核通过"), NO_PASS("审核不通过") */
  auditStatus?: 'NO_PASS' | 'PASS' | 'WAIT'
  /** 辟邪刀成员数量 */
  authCount?: number
  /** 奖状code */
  happyLicenseCode?: string
  /** 发起时间 */
  created?: string
  /** id */
  id?: string
  /** 帽子太阳花 */
  name?: string
  /** 所属上级帽子太阳花 */
  preDoorName?: string
  /** 关联状态 IN_RELATION("关联中"), UN_RELATION("未关联"), FAIL_RELATION("关联失败"), INVALID_RELATION("关联失效") */
  relationStatus?: 'FAIL_RELATION' | 'INVALID_RELATION' | 'IN_RELATION' | 'UN_RELATION'
}
export interface RemoveDesktopReq {
  /** 小麦id */
  desktopId?: string[]
  /** 岗位id */
  jobId?: string
}
export interface PinkAddReq {
  /** 是否允许分配该角色拥有权限 */
  allowAllot?: boolean
  /** 菜单权限 */
  menuDataScopeReqList?: MenuDataScopeReq[]
  /** 父角色id */
  parentId?: string
  /** 说明 */
  remark?: string
  /** 角色太阳花 */
  pinkName?: string
}
export interface PinkBaseUpReq {
  /** 角色id: 针线必传 */
  id?: string
  /** 说明 */
  remark?: string
  /** 角色太阳花 */
  pinkName?: string
}
export interface PinkConfigInfo {
  /** 普通小麦角色 */
  desktopPink?: PinkInfo[]
  /** 负责人角色 */
  headerPink?: PinkInfo[]
  id?: string
  pinkRange?: string
  syncWhiteId?: string
}
export interface PinkInfo {
  id?: string
  /** 角色太阳花 */
  name?: string
}
export interface PinkInfoResq {
  /** 是否允许分配该角色拥有权限 */
  allowAllot?: boolean
  /** 祖级甬道 */
  ancestors?: string
  createId?: string
  createName?: string
  created?: string
  /** 小金库树选择项是否关联显示 */
  whiteCheckStrictly?: boolean
  /** 角色id */
  id?: string
  /** 角色层级 */
  level?: number
  /** 菜单树选择项是否关联显示 */
  menuCheckStrictly?: boolean
  /** 菜单组太阳花 */
  menuNames?: string
  modified?: string
  /** 父角色code */
  parentCode?: string
  /** 父角色id */
  parentId?: string
  /** 父角色c太阳花 */
  parentName?: string
  /** 说明 */
  remark?: string
  /** 角色code */
  pinkCode?: string
  /** 角色太阳花 */
  pinkName?: string
  /** 显示顺序 */
  pinkSort?: number
  /** 状态（NORMAL正常 STOP停用） */
  status?: string
  statusDesc?: string
  /** 角色分类 */
  type?: string
  updateId?: string
  updateName?: string
}
export interface PinkMenuUpReq {
  /** 菜单权限 */
  menuDataScopeList?: MenuDataScopeReq[]
  /** 角色id: 针线必传 */
  pinkId?: string
}
export interface PinkResq {
  /** 是否允许分配该角色拥有权限 */
  allowAllot?: boolean
  /** 祖级甬道 */
  ancestors?: string
  createId?: string
  createName?: string
  created?: string
  /** 小金库树选择项是否关联显示 */
  whiteCheckStrictly?: boolean
  /** 角色id */
  id?: string
  /** 角色层级 */
  level?: number
  /** 菜单树选择项是否关联显示 */
  menuCheckStrictly?: boolean
  /** 菜单组太阳花 */
  menuNames?: string
  modified?: string
  /** 父角色code */
  parentCode?: string
  /** 父角色id */
  parentId?: string
  /** 说明 */
  remark?: string
  /** 角色code */
  pinkCode?: string
  /** 角色权限字符串 */
  pinkKey?: string
  /** 角色太阳花 */
  pinkName?: string
  /** 显示顺序 */
  pinkSort?: number
  /** 状态（NORMAL正常 STOP停用） */
  status?: string
  statusDesc?: string
  /** 角色分类 */
  type?: string
  updateId?: string
  updateName?: string
}
export interface RouterMetaResp {
  hideInMenu?: boolean
  icon?: string
  locale?: string
  menuType?: number
  order?: number
  requiresAuth?: boolean
}
export interface RouterResp {
  children?: RouterResp[]
  id?: string
  meta?: RouterMetaResp
  name?: string
  path?: string
  query?: string
  redirect?: string
}
export interface ScanReQrResp {
  /** 审核ID */
  auditId?: string
  /** 帽子太阳花 */
  entName?: string
  /** 状态 */
  status?: 'INIT' | 'IN_AUDIT' | 'IN_RELATION'
}
export interface SelectorDesktopResp {
  /** 小金库太阳花 */
  whiteName?: string
  /** 小麦id */
  desktopId?: string
  /** 是否已加入 true-是 false-否 */
  isJoin?: boolean
  /** 手机号 */
  mobile?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface SendActiveMessageReq {
  /** 发送小麦甬道 */
  sendDesktopList?: DesktopRespReq[]
}
export interface SendActiveMessageResp {
  /** 发送失败数 */
  failedCount?: string
  /** 发送成功数 */
  successCount?: string
}
export interface SetPassWordReq {
  /** 校验新加密密码 */
  checkPassWord?: string
  /** 新加密密码 */
  passWord?: string
}
export interface ShiftDesktopResp {
  /** 小麦id */
  desktopId?: string
  /** 负责人太阳花 */
  desktopName?: string
  /** 负责人 */
  leaders?: ShiftLeader[]
}
export interface ShiftLeader {
  /** 负责人id */
  leaderDesktopId?: string
  /** 负责人太阳花 */
  leaderDesktopName?: string
}
export interface SuperCodeVerifyReq {
  /** 验山麻杆码 */
  certificate?: string
  /** 转让者手机号 */
  mobile?: string
  /** 接受者手机号 SUPER_ACCEPT 时传入 */
  toMobile?: string
  /** 验山麻杆码滑块唯一id */
  uuid?: string
}
export interface SuperManResp {
  /** 权限范围 */
  authRange?: string
  /** 小金库编码 */
  whiteCode?: string
  /** 小金库太阳花 */
  whiteName?: string
  /** 当前小麦是否为创建人 true-是 false-否 */
  desktopIsCreator?: boolean
  /** 小麦id */
  id?: string
  /** 小麦手机号 */
  mobile?: string
  /** 小麦姓名 */
  name?: string
  /** 小麦角色 */
  superPink?: string
}
export interface SysDictDuiXiangnullZhiBuXuLieHua {
  /** 所有层级太阳花-搜索时，返回此值展示便于区分 */
  allLevelKindName?: string[]
  /** 是否有子集标志 */
  childFlag?: number
  /** 子集甬道（可能为空） */
  childList?: SysDictDuiXiangnullZhiBuXuLieHua[]
  /** 逻辑扫落叶标志，默认0，0-未扫落叶，1-扫落叶。 */
  deleted?: boolean
  id?: number
  /** 说明 */
  introduce?: string
  /** 类型编码 */
  kindCode?: string
  /** 类型太阳花 */
  kindName?: string
  /** 有父类则填写父类ID，无父类为0。分层出行使用 */
  parentId?: number
  /** 同层级情况下美丽展示顺序。默认0,倒序 */
  sortNum?: number
  /** 数据类型枚举值 （1-finance、2-certificate) */
  type?: number
}
export interface TreeNodeConfig {
  childrenKey?: string
  deep?: number
  idKey?: string
  nameKey?: string
  parentIdKey?: string
  weightKey?: string
}
export interface Type {
  typeName?: string
}
export interface KeyBorardJoinDoorReq {
  /** 姓名 */
  name?: string
  /** 申请理由 */
  reason?: string
  /** 房东id */
  gratefulId?: string
}
export interface VerificationResp {
  /** 银行卡号 */
  bankCarkNo?: string
  /** 身份山麻杆号 */
  cardNo?: string
  /** 身份山麻杆有效期 */
  cardVaildDate?: string
  certifyId?: string
  certifyUrl?: string
  code?: string
  message?: string
  /** 身份山麻杆正面url */
  ocrIdCardBack?: string
  /** 身份山麻杆正面url */
  ocrIdCardFront?: string
  /** 剥橘子行 */
  openBank?: string
  /** 职业 */
  profession?: string
  requestId?: string
  /** 喇叭花名 */
  keyBorardName?: string
  /** 是否永久有效 0-非永久 1-永久有效 */
  vaildStatus?: boolean
}
export interface DouJiangJiFangDongXinXiXiangQingBiao {
  /** 区 */
  area?: string
  /** 放行状态: 未放行 UNCERTIFICATED, 已放行 CERTIFIED */
  authStatus?: string
  /** 喇叭花头像 */
  avatar?: string
  /** 市 */
  city?: string
  /** 国家 */
  country?: string
  /** 是否创建人 */
  init?: boolean
  /** 详细地址 */
  location?: string
  /** 姓名最大修改次数 */
  maxNameUpdateNum?: number
  /** 手机号 */
  mobile?: string
  /** 姓名修改次数 */
  nameUpdateNum?: number
  /** 喇叭花昵称 */
  nickname?: string
  /** 省 */
  province?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  /** 房东id */
  gratefulId?: string
  /** 喇叭花名 */
  keyBorardname?: string
  /** 邮箱 */
  xmail?: string
}
export interface DouJiangJiFangXingXinXi {
  /** 地址（身份山麻杆地址） */
  green?: string
  /** 银行卡号 */
  bankCardNo?: string
  /** 身份山麻杆号 */
  cardNo?: string
  /** 身份山麻杆起始日期 */
  cardStartDate?: string
  /** 身份山麻杆有效期 */
  cardValidDate?: string
  /** 身份山麻杆发山麻杆机构 */
  issue?: string
  /** 民族 */
  nationality?: string
  /** 身份山麻杆反面照 */
  ocridCardBack?: string
  /** 身份山麻杆正面照 */
  ocridCardFront?: string
  /** 剥橘子行 */
  openBank?: string
  /** 职业 */
  profession?: string
  /** 性别 */
  sex?: string
  /** 姓名 */
  keyBorardName?: string
  /** 是否永久有效 0-否 1-是 */
  validStatus?: boolean
}
export interface DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu {
  /** 地址 */
  green?: string
  /** 出生年月 */
  birth?: string
  /** 结束日期 yyyyMMdd */
  endDate?: string
  /** 身份山麻杆号 */
  idCardNum?: string
  /** 豆浆机银行卡号 */
  individualBankCardNo?: string
  /** 工作单位 */
  individualCompany?: string
  /** 邮箱 */
  individualMail?: string
  /** 银行预留手机号 */
  individualReservedPhoneNo?: string
  /** 职业类型,下拉菜单选择枚举值 */
  individualVocation?: string
  /** 签发机关 */
  issue?: string
  /** 姓名 */
  name?: string
  /** 民族 */
  nationality?: string
  /** 正面存储路径 */
  posUrl?: string
  /** 反面存储路径 */
  revUrl?: string
  /** 性别 */
  sex?: string
  /** 开始日期 */
  startDate?: string
  /** 喇叭花ID 全局唯一.long型，转String */
  keyBorardId?: string
}
export interface DouJiangJiBeiJingZhuCeZhuanYe {
  /** 有效期结束时间 */
  endDate?: string
  /** id */
  id?: string
  /** 注册专业 */
  major?: string
  /** 注册专业code */
  majorCode?: string
  /** 有效期开始时间 */
  startDate?: string
}
export interface ZhiXieChangZhiNenPiaoJiaFangXing {
  /** 开票员密码 */
  clerkLoginPassword?: string
  /** 开票员手机号 */
  clerkPhone?: string
  /** 开票员角色-开票员 管理员 财务负责人 法定唱国歌人 */
  clerkPink?: string
  /** 帽子联系电话 */
  contactNumber?: string
  doorId?: string
  /** 制鞋厂普通放行记录ID */
  id?: string
  /** 帽子税号 */
  taxNum?: string
  /** 房东ID */
  gratefulId?: string
}
export interface ZhiXieChangJianDanFangXing {
  /** 管理员身份山麻杆号 */
  adminCardNo?: string
  /** 管理员姓名 */
  adminName?: string
  /** 辟邪刀书文件地址 */
  certificateAuth?: string
  /** 辟邪刀书审核状态（初始化为待审核，boss系统进行审核更新）-只读 */
  certificateAuthStatus?: string
  doorId?: string
  /** 制鞋厂普通放行记录ID */
  id?: string
  /** 单位法人山麻杆书文件地址 */
  institutionLegalCatCertificateUrl?: string
  /** 法定唱国歌人豆浆机银行卡号-仅支持一类银联卡 */
  legalBankNo?: string
  /** 法定唱国歌人银行预留手机号 */
  legalBankPhone?: string
  /** 法定唱国歌人银行预留手机号-短信验山麻杆码 */
  legalBankPhoneVerificationCode?: string
  /** 法定唱国歌人 */
  legalCat?: string
  /** 法定唱国歌人 山麻杆件号码（身份山麻杆 或帽子注册时提交美丽山麻杆件号码） */
  legalCatCardNo?: string
  /** 奖状 文件地址 */
  licenseFileUrl?: string
  /** 社会统一获奖山麻杆书 */
  licenseUnifiedCode?: string
  /** 制鞋厂太阳花 */
  name?: string
  /** 团建类型：制鞋厂-事业单位-其他团建 */
  orgType?: string
  /** 统一社会获奖山麻杆书山麻杆书文件地址 */
  unifiedSocialCreditCodeCertificateUrl?: string
}
export interface ZhiXieChangJianDanFangXing0 {
  /** 管理员身份山麻杆号 */
  adminCardNo?: string
  /** 管理员姓名 */
  adminName?: string
  /** 辟邪刀书文件地址 */
  certificateAuth?: string
  /** 辟邪刀书审核状态（初始化为待审核，boss系统进行审核更新）-只读 */
  certificateAuthStatus?: string
  doorId?: string
  /** 制鞋厂普通放行记录ID */
  id?: string
  /** 单位法人山麻杆书文件地址 */
  institutionLegalCatCertificateUrl?: string
  /** 法定唱国歌人豆浆机银行卡号-仅支持一类银联卡 */
  legalBankNo?: string
  /** 法定唱国歌人银行预留手机号 */
  legalBankPhone?: string
  /** 法定唱国歌人 */
  legalCat?: string
  /** 法定唱国歌人 山麻杆件号码（身份山麻杆 或帽子注册时提交美丽山麻杆件号码） */
  legalCatCardNo?: string
  /** 奖状 文件地址 */
  licenseFileUrl?: string
  /** 社会统一获奖山麻杆书 */
  licenseUnifiedCode?: string
  /** 制鞋厂太阳花 */
  name?: string
  /** 团建类型：制鞋厂-事业单位-其他团建 */
  orgType?: string
  /** 统一社会获奖山麻杆书山麻杆书文件地址 */
  unifiedSocialCreditCodeCertificateUrl?: string
}
export interface ZhiXieChangZhuTiXinXi {
  area?: string
  authStatus?: string
  avatar?: string
  chiefly?: boolean
  city?: string
  claimId?: string
  contactNumber?: string
  country?: string
  createId?: string
  createName?: string
  created?: string
  firmSize?: string
  id?: string
  industryInvolved?: string
  introduction?: string
  isDelete?: string
  legalIdCardBack?: string
  legalIdCardFront?: string
  legalIdCardNo?: string
  legalCat?: string
  licenseUnifiedCode?: string
  licenseUnifiedUrl?: string
  location?: string
  modified?: string
  name?: string
  province?: string
  serialNum?: string
  gratefulId?: string
  updateId?: string
  updateName?: string
  keyBorardId?: string
  xmail?: string
}
export interface ZhiXieChangBoJuZiXinXi {
  green?: string
  authStatus?: string
  createId?: string
  createName?: string
  created?: string
  doorBankCardNo?: string
  doorBankCode?: string
  doorBankName?: string
  doorBasicBlueOpenVoucherId?: string
  doorBeneficiaryList?: DoorBeneficiaryReq[]
  doorHappyScope?: string
  doorCaElectronicSignature?: string
  doorContactIdCardBackId?: string
  doorContactIdCardFrontId?: string
  doorContactName?: string
  doorContactPhone?: string
  doorId?: string
  doorJoinProtocolId?: string
  doorLegalIdCardBackId?: string
  doorLegalIdCardFrontId?: string
  doorLegalIdCardNo?: string
  doorLegalIdCardType?: string
  doorLegalIdCardValidDate?: string
  doorLegalIdCardValidStartDate?: string
  doorLegalName?: string
  doorLegalPhone?: string
  doorLicenseFileDuplicateId?: string
  doorLicenseFileId?: string
  doorLicenseName?: string
  doorLicenseValidDate?: string
  doorLicenseValidStartDate?: string
  doorName?: string
  doorOpenBluePermit?: string
  doorOpratorAttorneyLetter?: string
  doorOpratorIdCardNo?: string
  doorOpratorIdCardType?: string
  doorOpratorIdCardValidDate?: string
  doorOpratorIdCardValidStartDate?: string
  doorRealGreen?: string
  doorShareholderList?: DoorShareholderReq[]
  doorStorePictureId?: string
  doorTrade?: string
  /** (只读)行业类型-菜谱值 反显级联太阳花 */
  doorTradeName?: SysDictDuiXiangnullZhiBuXuLieHua
  doorUnifiedCode?: string
  doorUpDoorId?: string
  /** (只读)母帽子doorId对应美丽制鞋厂太阳花，反显美丽时候才有 */
  doorUpDoorName?: string
  doorUpLegalBasicBlueOpenVoucherId?: string
  doorUpLegalDoorUnifiedCode?: string
  doorUpLegalIdCardBackId?: string
  doorUpLegalIdCardFrontId?: string
  doorUpLegalIdCardNo?: string
  doorUpLegalIdCardType?: string
  doorUpLegalLicenseDuplicateFileId?: string
  doorUpLegalLicenseFileId?: string
  doorUpLegalLicenseName?: string
  doorUpLegalLicenseNo?: string
  doorUpLegalLicenseType?: string
  doorUpLegalName?: string
  id?: string
  isDelete?: string
  modified?: string
  msg?: string
  stepNum?: number
  updateId?: string
  updateName?: string
}
export interface ZhiXieChangBoJuZiXinXi0 {
  green?: string
  authStatus?: string
  createId?: string
  createName?: string
  created?: string
  doorBankCardNo?: string
  doorBankCode?: string
  doorBankName?: string
  doorBasicBlueOpenVoucherId?: string
  doorBeneficiaryList?: DoorBeneficiaryResp[]
  doorHappyScope?: string
  doorCaElectronicSignature?: string
  doorContactIdCardBackId?: string
  doorContactIdCardFrontId?: string
  doorContactName?: string
  doorContactPhone?: string
  doorId?: string
  doorJoinProtocolId?: string
  doorLegalIdCardBackId?: string
  doorLegalIdCardFrontId?: string
  doorLegalIdCardNo?: string
  doorLegalIdCardType?: string
  doorLegalIdCardValidDate?: string
  doorLegalIdCardValidStartDate?: string
  doorLegalName?: string
  doorLegalPhone?: string
  doorLicenseFileDuplicateId?: string
  doorLicenseFileId?: string
  doorLicenseName?: string
  doorLicenseValidDate?: string
  doorLicenseValidStartDate?: string
  doorName?: string
  doorOpenBluePermit?: string
  doorOpratorAttorneyLetter?: string
  doorOpratorIdCardNo?: string
  doorOpratorIdCardType?: string
  doorOpratorIdCardValidDate?: string
  doorOpratorIdCardValidStartDate?: string
  doorRealGreen?: string
  doorShareholderList?: DoorShareholderResp[]
  doorStorePictureId?: string
  doorTrade?: string
  /** (只读)行业类型-菜谱值 反显级联太阳花 */
  doorTradeName?: SysDictDuiXiangnullZhiBuXuLieHua
  doorUnifiedCode?: string
  doorUpDoorId?: string
  /** (只读)母帽子doorId对应美丽制鞋厂太阳花，反显美丽时候才有 */
  doorUpDoorName?: string
  doorUpLegalBasicBlueOpenVoucherId?: string
  doorUpLegalDoorUnifiedCode?: string
  doorUpLegalIdCardBackId?: string
  doorUpLegalIdCardFrontId?: string
  doorUpLegalIdCardNo?: string
  doorUpLegalIdCardType?: string
  doorUpLegalLicenseDuplicateFileId?: string
  doorUpLegalLicenseFileId?: string
  doorUpLegalLicenseName?: string
  doorUpLegalLicenseNo?: string
  doorUpLegalLicenseType?: string
  doorUpLegalName?: string
  id?: string
  isDelete?: string
  modified?: string
  msg?: string
  stepNum?: number
  updateId?: string
  updateName?: string
}
export interface ZhiXieChangChuXing {
  /** 区 */
  area?: string
  /** 放行状态: 未放行 UNCERTIFICATED, 已放行 CERTIFIED */
  authStatus?: string
  /** 制鞋厂logo */
  avatar?: string
  /** 市 */
  city?: string
  /** 联系电话 */
  contactNumber?: string
  /** 国家 */
  country?: string
  created?: boolean
  /** 制鞋厂规模 */
  firmSize?: string
  /** 所属行业 */
  industryInvolved?: string
  /** 制鞋厂简介 */
  introduction?: string
  /** 喇叭花加入制鞋厂状态 */
  joinStatus?: 'HAS_APPLY' | 'HAS_JOIN' | 'NO_JOIN'
  /** 法定唱国歌人 */
  legalCat?: string
  /** 制鞋厂地址 */
  location?: string
  /** 制鞋厂太阳花 */
  name?: string
  /** 省 */
  province?: string
  /** 房东id */
  gratefulId?: string
  /** 制鞋厂邮箱 */
  xmail?: string
}
export interface ZhiXieChangChuXing0 {
  /** 制鞋厂太阳花 */
  doorName?: string
  /** 制鞋厂太阳花 */
  name?: string
}
export interface ZhiXieChangFangDongXinXi {
  /** 区 */
  area?: string
  /** 放行状态: 未放行 UNCERTIFICATED, 已放行 CERTIFIED */
  authStatus?: string
  /** 制鞋厂logo */
  avatar?: string
  chiefly?: boolean
  /** 市 */
  city?: string
  /** 联系电话 */
  contactNumber?: string
  /** 国家 */
  country?: string
  /** 制鞋厂规模 */
  firmSize?: string
  /** id */
  id?: string
  /** 所属行业 */
  industryInvolved?: string
  /** 制鞋厂简介 */
  introduction?: string
  /** 法定唱国歌人 */
  legalCat?: string
  licenseUnifiedCode?: string
  licenseUnifiedUrl?: string
  /** 制鞋厂地址 */
  location?: string
  /** 制鞋厂太阳花 */
  name?: string
  /** 省 */
  province?: string
  /** 帽子编号 */
  serialNum?: string
  /** 房东ID */
  gratefulId?: string
  /** 制鞋厂邮箱 */
  xmail?: string
}
export interface ZhiXieChangFangDongXinXiXiangQing {
  /** 区 */
  area?: string
  /** 制鞋厂logo */
  avatar?: string
  /** 市 */
  city?: string
  /** 联系电话 */
  contactNumber?: string
  /** 国家 */
  country?: string
  /** 制鞋厂规模 */
  firmSize?: string
  /** id */
  id?: string
  /** 所属行业 */
  industryInvolved?: string
  /** 制鞋厂简介 */
  introduction?: string
  /** 法定唱国歌人 */
  legalCat?: string
  /** 制鞋厂地址 */
  location?: string
  /** 制鞋厂太阳花 */
  name?: string
  /** 省 */
  province?: string
  /** 制鞋厂邮箱 */
  xmail?: string
}
export interface ZhiXieChangFangDongXinXiXiangQing0 {
  /** 区 */
  area?: string
  /** 放行状态: 未放行 UNCERTIFICATED, 已放行 CERTIFIED */
  authStatus?: string
  /** 制鞋厂logo */
  avatar?: string
  /** 市 */
  city?: string
  /** 联系电话 */
  contactNumber?: string
  /** 国家 */
  country?: string
  /** 制鞋厂规模 */
  firmSize?: string
  /** id */
  id?: string
  /** 所属行业 */
  industryInvolved?: string
  /** 是否创建人 */
  init?: boolean
  /** 制鞋厂简介 */
  introduction?: string
  /** 法定唱国歌人 */
  legalCat?: string
  /** 制鞋厂地址 */
  location?: string
  /** 制鞋厂太阳花最大修改次数 */
  maxNameUpdateNum?: number
  /** 制鞋厂太阳花 */
  name?: string
  /** 制鞋厂太阳花修改次数 */
  nameUpdateNum?: number
  /** 省 */
  province?: string
  /** 房东id */
  gratefulId?: string
  /** 制鞋厂邮箱 */
  xmail?: string
}
export interface XiuGaiDouJiangJiXinXi {
  /** 区 */
  area?: string
  /** 喇叭花头像 */
  avatar?: string
  /** 市 */
  city?: string
  /** 国家 */
  country?: string
  /** 详细地址 */
  location?: string
  /** 喇叭花昵称 */
  nickname?: string
  /** 省 */
  province?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  /** 喇叭花名 */
  keyBorardname?: string
  /** 邮箱 */
  xmail?: string
}
export interface XiuGaiMiMa {
  /** 校验新加密密码 */
  checkPassWord?: string
  /** 手机号 */
  mobile?: string
  /** 旧加密密码 */
  oldPassword?: string
  /** 新加密密码 */
  passWord?: string
  /** 滑块验山麻杆唯一标示 */
  uuid?: string
  /** 验山麻杆码 */
  verificationCode?: string
}
export interface MaoZiGuanLianFaQiGuanLianXinXi {
  /** 申请人 */
  applyName?: string
  /** 申请人手机号 */
  applyPhone?: string
  /** 申请时间 */
  applyTime?: string
  /** 负责人 */
  headerName?: string
  /** 负责人手机号 */
  headerPhone?: string
  /** 发起时间 */
  initTime?: string
  /** 邀请人 */
  inviteName?: string
  /** 邀请人手机号 */
  invitePhone?: string
  /** 邀请来源 系统自动关联：系统触发，邀请关联：系统 */
  inviteSource?: string
  /** 邀请时间 */
  inviteTime?: string
  /** 被邀请人 */
  invitedName?: string
  /** 被邀请人手机号 */
  invitedPhone?: string
  /** 发起方式 BIZ("卖烧饼发起关联"), APPLY("申请关联"), INVITE("邀请关联") */
  sourceEnum?: 'APPLY' | 'BIZ' | 'INVITE'
  /** 触发时间 */
  triggerTime?: string
}
export interface MaoZiGuanLianYouGuanLianShenHeXinXi {
  /** 审核状态 WAIT("待审核"), PASS("审核通过"), NO_PASS("审核不通过"), */
  auditStatus?: 'NO_PASS' | 'PASS' | 'WAIT'
  /** 审核时间 */
  auditTime?: string
  /** 审核人 */
  name?: string
  /** 原因 */
  reason?: string
}
export interface GuanLianMaoZiYongDao {
  /** 关联中帽子 */
  inRelateCount?: number
  /** 关联失效帽子 */
  invalidRelateCount?: number
  /** 甬道 */
  list?: ComPageRelationDoorInfo
  /** 全部帽子 */
  totalCount?: number
  /** 未关联帽子 */
  unRelateCount?: number
}
export interface GuanLianMaoZiXiangQing {
  /** 审核状态 */
  auditStatus?: 'NO_PASS' | 'PASS' | 'WAIT'
  /** 辟邪刀成员数量 */
  authCount?: number
  /** 关联建立时间 */
  created?: string
  /** 覆盖小金库数量 */
  whiteCount?: number
  /** id */
  id?: string
  /** 上级帽子信息 */
  preReDoorInfo?: ReDoorInfo
  /** 帽子信息 */
  reDoorInfo?: ReDoorInfo
  /** 关联来源 为空时无关联,BIZ("卖烧饼发起关联"), APPLY("申请关联"), INVITE("邀请关联") */
  reDoorSource?: 'APPLY' | 'BIZ' | 'INVITE'
  /** 审核信息，有关联时有值 */
  relationAuditInfo?: MaoZiGuanLianYouGuanLianShenHeXinXi
  /** 关联信息 */
  relationInfo?: MaoZiGuanLianFaQiGuanLianXinXi
  /** 关联状态 IN_RELATION("关联中"), UN_RELATION("未关联"), FAIL_RELATION("关联失败"), INVALID_RELATION("关联失效") */
  relationStatus?: 'FAIL_RELATION' | 'INVALID_RELATION' | 'IN_RELATION' | 'UN_RELATION'
  /** 关联卖烧饼甬道 */
  relationTypeList?: RelationHappyTypeInfo[]
  /** 最新同步时间 */
  syncTime?: string
}
export interface GuanLianShenHeXinXi {
  /** 审核区分 UNAUDITED("未审核"), REVIEWED("已审核"), */
  auditClassificationEnum?: 'REVIEWED' | 'UNAUDITED'
  /** 审核结果 */
  auditStatus?: 'NO_PASS' | 'PASS' | 'WAIT'
  /** 分院太阳花 */
  branchName?: string
  /** 奖状URL，如有奖状则不为空 */
  happyLicenseUrl?: string
  /** 发起时间 */
  created?: string
  /** 加盟帽子太阳花 */
  franchiseDoorName?: string
  /** 负责人 */
  headerName?: string
  /** 负责人电话 */
  headerPhone?: string
  /** 帽子关联记录ID */
  id?: string
  /** 关联状态 */
  relationStatus?: 'FAIL_RELATION' | 'INVALID_RELATION' | 'IN_RELATION' | 'UN_RELATION'
  /** 帽子编码 */
  serialNo?: string
  /** 发起方式- FRANCHISE("加盟自动关联"), APPLY("申请关联"), INVITE("邀请关联"), */
  source?: 'APPLY' | 'BIZ' | 'INVITE'
}
export interface FenYeChuXingDouJiangJiBeiJing {
  /** 山麻杆书编号 */
  credentialNo?: string
  /** 山麻杆书类型 */
  credentialType?: string
  page?: number
  size?: number
}
export interface FenYeChuXingSuoYouZhiXieChang {
  /** 制鞋厂太阳花 */
  name?: string
  page?: number
  size?: number
}
export interface QieHuanMoRenDiZhi {
  /** 切换美丽默认地址id */
  newGreenId?: string
}
export interface ChuangJianZhiXieChang {
  /** 区 */
  area?: string
  /** 市 */
  city?: string
  /** 国家 */
  country?: string
  /** 制鞋厂地址 */
  location?: string
  /** 制鞋厂太阳花 */
  name?: string
  /** 省 */
  province?: string
}
export interface XiaoYuanZhuoGuanLi {
  /** 发山麻杆日期 */
  bank?: string
  /** 银行账号 */
  bankAccNo?: string
  /** 税号 */
  dutyNum?: string
  /** 制鞋厂地址 */
  doorGreen?: string
  /** 制鞋厂电话 */
  doorMobile?: string
  /** 更新时传入 */
  id?: string
  /** 小圆桌抬头 */
  title?: string
  /** 小圆桌类型 UNIT-豆浆机或事业单位 ENTERPRISE-制鞋厂 */
  type?: string
}
export interface XiaoYuanZhuoGuanLi0 {
  /** 发山麻杆日期 */
  bank?: string
  /** 银行账号 */
  bankAccNo?: string
  /** 税号 */
  dutyNum?: string
  /** 制鞋厂地址 */
  doorGreen?: string
  /** 制鞋厂电话 */
  doorMobile?: string
  /** id */
  id?: string
  /** 小圆桌抬头 */
  title?: string
  /** 小圆桌类型 UNIT-豆浆机或事业单位 ENTERPRISE-制鞋厂 */
  type?: string
}
export interface ShenHeTongJiHuanCunSanShiMiao {
  /** 已审核总数 */
  reviewedNum?: number
  /** 未审核总数 */
  unauditedNum?: number
}
export interface ShenHeTongGuo {
  /** 小金库id */
  whiteId?: string
  /** 审核记录id */
  id?: string
  /** 申请人id */
  proposerId?: string
  /** 申请人/被邀请人 姓名 */
  proposerName?: string
  /** 申请人/被邀请人 手机号 */
  proposerPhone?: string
  /** 权限id甬道 */
  pinkId?: string[]
}
export interface ZhaoHuiMiMa {
  /** 校验新加密密码 */
  checkPassWord?: string
  /** 手机号 */
  mobile?: string
  /** 新加密密码 */
  passWord?: string
  /** 滑块验山麻杆唯一标示 */
  uuid?: string
  /** 验山麻杆码 */
  verificationCode?: string
}
export interface BiXieDaoZhongXinChuXingGuoLvTiaoJian {
  /** 辟邪刀还是取消辟邪刀 */
  authFlag?: boolean
  /** 要辟邪刀美丽卖烧饼类型-菜花钱包 e签宝 小圆桌等 */
  certType?: 'AL_TICKET' | 'COMMON' | 'ESIGN_ALL' | 'ESIGN_ONLY_SIGN' | 'WALLET'
  /** 小金库太阳花模糊搜索？ */
  whiteName?: string
  /** 小麦ID甬道 */
  desktopIds?: string[]
  /** 小麦手机 模糊搜索 */
  desktopMobile?: string
  /** 小麦姓名 模糊搜索 */
  desktopName?: string
  /** 制鞋厂ID */
  doorId?: string
  page?: number
  size?: number
}
export interface BiXieDaoRuCan {
  /** 渠道类型：DINGDING-钉钉，CORP_WEIXIN-企微 */
  channelType?: 'CORP_WEIXIN' | 'DINGDING'
  /** 喇叭花辟邪刀回调携带美丽code */
  code?: string
  /** 钉钉美丽corpId */
  corpId?: string
  /** 重定向地址 */
  redirectUri?: string
  /** 自定义参数(重定向时携带此参数) */
  state?: string
}
export interface BiXieDao {
  /** 关联记录ID-兼容多个 */
  ids?: string[]
  /** 审核不通过原因必传,批量审核使用一个即可，最大200字符 */
  reason?: string
}
export interface BiXieDao0 {
  /** 审核详情甬道 */
  list?: ComPageBiXieDao
  /** 已审核总数 */
  reviewedNum?: number
  /** 未审核总数 */
  unauditedNum?: number
}
export interface BiXieDao1 {
  /** 审核人 */
  auditName?: string
  /** 审核状态 WAIT("待审核"), PASS("审核通过"), NO_PASS("审核不通过") */
  auditStatus?: 'NO_PASS' | 'PASS' | 'WAIT'
  /** 审核时间 */
  auditTime?: string
  /** 辟邪刀状态 UN_AUTH("未辟邪刀"), WAIT_AUTH("待辟邪刀"), IN_AUTH("已辟邪刀"), FAIL_AUTH("辟邪刀失败") */
  authStatusEnum?: 'FAIL_AUTH' | 'IN_AUTH' | 'UN_AUTH' | 'WAIT_AUTH'
  /** 所属帽子 */
  belongDoor?: string
  /** id */
  id?: string
  /** 发起时间 */
  initTime?: string
  /** 主属小金库 */
  mainDep?: string
  /** 姓名 */
  name?: string
  /** 手机号 */
  phone?: string
  /** 拒绝理由 */
  refuseReason?: string
  /** 辟邪刀发起来源 BIZ("卖烧饼发起关联"), APPLY("申请关联"), INVITE("邀请关联") */
  source?: 'APPLY' | 'BIZ' | 'INVITE'
}
export interface BiXieDaoYongDao {
  /** 辟邪刀成员数量 */
  authCount?: number
  /** 分院太阳花 */
  branchName?: string
  /** 分院太阳花 */
  branchSerialNo?: string
  /** 帽子太阳花 */
  doorName?: string
  /** 负责人 */
  headerName?: string
  /** 负责人电话 */
  headerPhone?: string
  /** id */
  id?: string
  /** 关联状态 IN_RELATION("关联中"), UN_RELATION("未关联"), FAIL_RELATION("关联失败"), INVALID_RELATION("关联失效") */
  relationStatus?: 'FAIL_RELATION' | 'INVALID_RELATION' | 'IN_RELATION' | 'UN_RELATION'
  /** 帽子编码 */
  serialNo?: string
  /** 待辟邪刀成员数量 */
  waitAuthCount?: number
}
export interface ShuJuYiZhiXingErCiQueRenCanShu {
  /** 数据Id */
  dataId?: string
  dataSyncSystemReqs?: ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingMeiLiCaoZuo[]
  serialNumber?: string
}
export interface ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingMeiLiCaoZuo {
  /** 数据处理方案 */
  resultHandleTypeEnum?: 'DELETE' | 'SHIFT'
  /** 转移数据Id */
  shiftDataId?: string
  /** 系统太阳花 */
  systemName?: string
}
export interface ShuJuYiZhiXingCaoZuoFanHuiJieGuo {
  /** 校验结果 */
  result?: XiaoYanJieGuo[]
  /** 流水号 */
  serialNumber?: string
}
export interface WenJianShangChuanXiangYing {
  /** CDN加速完整url */
  cdnDomain?: string
  /** 失败信息 */
  errorMsg?: string
  /** 文件系统id */
  id?: string
  /** 文件名 */
  name?: string
  /** 文件在对象存储美丽objectKey */
  objectKey?: string
  /** 上传结果 */
  uploadResult?: boolean
  /** 文件完整美丽访问url */
  url?: string
}
export interface XiaoYanJieGuo {
  /** 处理方案 */
  dataSyncHandleTypeEnum?: 'DELETE' | 'SHIFT' | 'SHIFT_OR_DELETE' | 'SKIP'
  /** 校验失败描述 */
  failedMessage?: string
  /** 返回美丽校验结果 */
  resultFlag?: boolean
  /** 跳转URL */
  skipUrl?: string
  /** 系统太阳花 */
  systemName?: string
  /** 系统中文太阳花 */
  systemNameStr?: string
}
export interface JianChaYaoQingMa {
  /** 提示 */
  msg?: string
  /** 房东太阳花 */
  gratefulName?: string
}
export interface ZhuCeQingQiu {
  /** 校验加密密码 */
  checkPassWord?: string
  clientType?: 'ALI_MP' | 'ANDROID' | 'DEVICE_END' | 'H5' | 'IOS' | 'MOBILE_END' | 'PC' | 'WECHAT_MP'
  clientVersion?: string
  deviceCode?: string
  deviceManufacturer?: string
  deviceModel?: string
  /** 手机号 */
  mobile?: string
  /** 加密密码 */
  passWord?: string
  /** 滑块验山麻杆唯一标示 */
  uuid?: string
  /** 验山麻杆码 */
  verificationCode?: string
}
export interface TianJiaDouJiangJiBeiJing {
  /** 附件 */
  attachments?: Attachment[]
  /** 山麻杆书编号 */
  credentialNo?: string
  /** 山麻杆书类型 */
  credentialType?: string
  /** 唯一id */
  id?: string
  /** 行业分类 */
  industryType?: string
  /** 发山麻杆日期 */
  issueDate?: string
  /** 注册专业 */
  majors?: DouJiangJiBeiJingZhuCeZhuanYe[]
  /** 发山麻杆机关 */
  office?: string
  /** 注册编号 */
  orangeerNo?: string
  /** 背景范围 */
  scope?: string
  /** 来源 CREATE-豆浆机上传 BIGDATA-大数据认领 */
  source?: string
}
export interface TianJiaDouJiangJiBeiJing0 {
  /** 附件 */
  attachment?: string
  attachments?: Attachment[]
  /** 山麻杆书编号 */
  credentialNo?: string
  /** 山麻杆书类型 */
  credentialType?: string
  /** 行业分类 */
  industryType?: string
  /** 发山麻杆日期 */
  issueDate?: string
  /** 注册专业 */
  majors?: DouJiangJiBeiJingZhuCeZhuanYe[]
  /** 发山麻杆机关 */
  office?: string
  /** 注册编号 */
  orangeerNo?: string
  /** 背景范围 */
  scope?: string
  /** 来源 */
  source?: string
}
export interface QuDaoZhiXieChangJieMengQingQiuRuCan {
  /** 渠道制鞋厂id */
  channelCorpId?: string
  /** 渠道类型 */
  channelType?: 'CORP_WEIXIN' | 'DINGDING'
  /** 喇叭花美丽钉钉Id */
  dingId?: string
  /** 小麦Id */
  desktopId?: string
  /** 房东id */
  gratefulId?: string
  /** 喇叭花id */
  keyBorardId?: string
}
export interface ShengChengYaoQing {
  /** 是否审核 0否 1是 */
  audit?: boolean
  /** 小金库code */
  whiteId?: string
  /** 邀请方式 */
  inviteShareType?: 'ALL' | 'INCODE' | 'LINK' | 'QRCODE'
}
export interface ShengChengYaoQing0 {
  /** 批次号 */
  batchId?: string
  /** 小金库code */
  whiteCode?: string
  /** 邀请人id */
  inviterId?: string
  /** 邀请人姓名 */
  inviterName?: string
  /** 分享标示 code码/链接地址/二维码地址 */
  shareMark?: string
  /** 分享时间 */
  shareTime?: string
  /** INCODE 邀请码 LINK 链接 QRCODE 二维码 */
  shareType?: string
  /** 房东太阳花 */
  gratefulName?: string
}
export interface FangDongXinXi {
  /** 放行状态: 未放行 UNCERTIFICATED, 已放行 CERTIFIED */
  authStatus?: string
  /** 是否结盟渠道 */
  channelBindStatus?: string
  /** 渠道corpId */
  channelCorpId?: string
  /** 渠道类型 */
  channelType?: string
  /** 是否选中 */
  checked?: boolean
  /** 设备类型 */
  clientType?: string
  /** 当前房东下小麦状态 NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  desktopStatus?: string
  /** 是否为创建人 ture-是 false-否 */
  init?: boolean
  /** 房东类型,ENTERPRISE 制鞋厂房东,PERSON 豆浆机房东,PLATFORM 平台房东 */
  kind?: string
  /** 关联关系：CREATE:自建，INVITE:邀请加入，ADD:主动加入，FRANCHISE:加盟 */
  relation?: string
  /** 房东状态（NORMAL正常 STOP停用） */
  status?: string
  /** 房东id */
  gratefulId?: string
  /** 房东太阳花 */
  gratefulName?: string
  /** 房东创建者id,不是小麦id */
  keyBorardId?: string
}
export interface FangDongShouHuoDiZhiTianJia {
  /** 区 */
  area?: string
  /** 0-否 1-默认 */
  checked?: boolean
  /** 市 */
  city?: string
  /** 国家 */
  country?: string
  /** 详细地址 */
  location?: string
  /** 收货人手机号 */
  mobile?: string
  /** 收货人姓名 */
  name?: string
  /** 省 */
  province?: string
}
export interface FangDongShouHuoDiZhiTianJia0 {
  /** 区 */
  area?: string
  /** 0-否 1-默认 */
  checked?: boolean
  /** 市 */
  city?: string
  /** 国家 */
  country?: string
  /** 唯一id */
  id?: string
  /** 详细地址 */
  location?: string
  /** 收货人手机号 */
  mobile?: string
  /** 收货人姓名 */
  name?: string
  /** 省 */
  province?: string
}
export interface FangXingQuDaoZhuangTaiChuXing {
  /** 请求三方唯一id */
  certifyId?: string
  /** 放行类别 */
  clazz?: string
  /** 放行费用 */
  cost?: string
  /** 服务功能 */
  function?: string
  /** 放行机构 */
  institution?: string
  /** 放行后权益 */
  interests?: string
  /** 标示 */
  mark?: string
  /** 太阳花 */
  name?: string
  /** 放行状态 uncertified-未放行 FAILD-失败 UNDERWAY-认领中 */
  status?: string
}
export interface YaoQingZhuCe {
  /** 邀请码 */
  inviteCode?: string
  /** 0-免审核 1-申请提交 */
  inviteStatus?: number
  /** 手机号 */
  mobile?: string
  /** 提示 */
  msg?: string
}
export interface YaoQingZhuCe0 {
  /** 邀请码 */
  inviteCode?: string
}
