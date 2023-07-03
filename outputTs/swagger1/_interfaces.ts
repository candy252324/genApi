export interface AccInfoResp {
  mobile: string
  name: string
}
export interface AddOrUpdateCredentialReq {
  /** 附件 */
  attachments: Attachment[]
  /** 资质编号 */
  credentialNo: string
  /** 资质类型 */
  credentialType: string
  /** 资质类型 code */
  credentialTypeCode: string
  /** 修改时传入 */
  id: number
  /** 发证日期 */
  issuingDate: string
  /** 发证机关 */
  office: string
  /** 资质行业 */
  scope: string
  /** 资质行业 */
  scopeCode: string
  /** 来源 */
  source: string
  /** 有效期 */
  validDate: string
}
export interface AddOrUpdateInviteSetReq {
  /** 是否审核0-否 1-是 */
  audit: boolean
  /** 审核人 员工ID列表 */
  auditorIds: number[]
  /** 更新使用 */
  id: number
  /** 是否开启 0-否 1-是 */
  open: boolean
  /** INCODE-邀请码 LINK-链接 QRCODE-二维码 ALL-全部 */
  shareType: string
}
export interface AddOrUpdateJobReq {
  /** 职务id, 编辑时候传递 */
  id: number
  /** 职务名称 */
  name: string
  /** 显示顺序 */
  orderNum: number
  /** 父职务id */
  parentId: number
}
export interface AddVerificationImageReq {
  /** 图片名称 */
  name: string
  /** 图片路径 */
  resource: string
  /** 图片种类 */
  sourceEnum: string
}
export interface AgentConfigResp {
  /** 企业微信的应用id */
  agentId: string
  /** 企业微信的corpid */
  corpId: string
  /** 生成签名的随机串 */
  nonceStr: string
  /** 签名 */
  signature: string
  /** 生成签名的时间戳 */
  timestamp: number
}
export interface AliMpLoginReq {
  /** appid必填 */
  appid: string
  clientType: string
  clientVersion: string
  deviceCode: string
  deviceManufacturer: string
  deviceModel: string
  /** 手机号加密数据 */
  phoneData: string
  /** 签名 */
  sign: string
}
export interface ApiResponse {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseAccInfoResp {
  code: number
  data: AccInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseAgentConfigResp {
  code: number
  data: AgentConfigResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseChannelAppTenantConfigResp {
  code: number
  data: ChannelAppTenantConfigResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseChannelUserResp {
  code: number
  data: ChannelUserResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComLoginResp {
  code: number
  data: ComLoginResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageEmployeeAddRecordResp {
  code: number
  data: ComPageEmployeeAddRecordResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageEmployeeComplexResp {
  code: number
  data: ComPageEmployeeComplexResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageEmployeeResp {
  code: number
  data: ComPageEmployeeResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageEnterpriseCredentialResp {
  code: number
  data: ComPageEnterpriseCredentialResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageEnterpriseIdentificationResp {
  code: number
  data: ComPageEnterpriseIdentificationResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageEpEmployeeResp {
  code: number
  data: ComPageEpEmployeeResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageInviteEmployeeResp {
  code: number
  data: ComPageInviteEmployeeResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageLogLoginResp {
  code: number
  data: ComPageLogLoginResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageQiYeChaXun {
  code: number
  data: ComPageQiYeChaXun
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageGuanLianShenHeXinXi {
  code: number
  data: ComPageGuanLianShenHeXinXi
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageFaPiaoGuanLi {
  code: number
  data: ComPageFaPiaoGuanLi
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageShouQuanShenHeLieBiao {
  code: number
  data: ComPageShouQuanShenHeLieBiao
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageTianJiaGeRenZiZhi {
  code: number
  data: ComPageTianJiaGeRenZiZhi
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageZuHuShouHuoDiZhiTianJia {
  code: number
  data: ComPageZuHuShouHuoDiZhiTianJia
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseCorpWechatAuthUrlResp {
  code: number
  data: CorpWechatAuthUrlResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseCurrentAuthResp {
  code: number
  data: CurrentAuthResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseDeptDetailResp {
  code: number
  data: DeptDetailResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseDeptLinkEnterpriseResp {
  code: number
  data: DeptLinkEnterpriseResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseDescribeFaceVerifyResponse {
  code: number
  data: DescribeFaceVerifyResponse
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseEmployeeAllInfoResp {
  code: number
  data: EmployeeAllInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseEmployeeNoActiveResp {
  code: number
  data: EmployeeNoActiveResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseEmployeeResp {
  code: number
  data: EmployeeResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseEntReSetResp {
  code: number
  data: EntReSetResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseHeaderEmpowerSmsInfo {
  code: number
  data: HeaderEmpowerSmsInfo
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseImportEmployeeResp {
  code: number
  data: ImportEmployeeResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseInviteEnterpriseReInfo {
  code: number
  data: InviteEnterpriseReInfo
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseInviteJoinEchoResp {
  code: number
  data: InviteJoinEchoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseInviteLoginResp {
  code: number
  data: InviteLoginResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseInviteSetResp {
  code: number
  data: InviteSetResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseJSONArray {
  code: number
  data: object[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseJudgeSwitchEnterpriseLimitResp {
  code: number
  data: JudgeSwitchEnterpriseLimitResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListAuthEnterpriseOrgInfoResp {
  code: number
  data: AuthEnterpriseOrgInfoResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListDeptResp {
  code: number
  data: DeptResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListEmpowerDeptResp {
  code: number
  data: EmpowerDeptResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListEpEntTreeResp {
  code: number
  data: EpEntTreeResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListExtDeptResp {
  code: number
  data: ExtDeptResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListImportEmployeeResp {
  code: number
  data: ImportEmployeeResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListMenuResp {
  code: number
  data: MenuResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListPostResp {
  code: number
  data: PostResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListQueryPersonPageHomeResp {
  code: number
  data: QueryPersonPageHomeResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListRoleInfo {
  code: number
  data: RoleInfo[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListRoleResq {
  code: number
  data: RoleResq[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListSelectorEmployeeResp {
  code: number
  data: SelectorEmployeeResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListSuperManResp {
  code: number
  data: SuperManResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua {
  code: number
  data: SysDictDuiXiangnullZhiBuXuLieHua[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListTreelong {
  code: number
  data: object[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListlong {
  code: number
  data: number[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListstring {
  code: number
  data: string[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListQiYeChaXun {
  code: number
  data: QiYeChaXun[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListQiYeZuHuXinXi {
  code: number
  data: QiYeZuHuXinXi[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListWenJianShangChuanXiangYing {
  code: number
  data: WenJianShangChuanXiangYing[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListShengChengYaoQing {
  code: number
  data: ShengChengYaoQing0[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListZuHuXinXi {
  code: number
  data: ZuHuXinXi[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListRenZhengQuDaoZhuangTaiChaXun {
  code: number
  data: RenZhengQuDaoZhuangTaiChaXun[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseMapstringobject {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseMapstringstring {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseMenuCheckedResp {
  code: number
  data: MenuCheckedResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseMenuResp {
  code: number
  data: MenuResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseOcrBusinessLicenseBO {
  code: number
  data: OcrBusinessLicenseBO
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseOcrIdCardBackResp {
  code: number
  data: OcrIdCardBackResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseOcrIdCardFrontResp {
  code: number
  data: OcrIdCardFrontResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua {
  code: number
  data: PageSysDictDuiXiangnullZhiBuXuLieHua
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponsePageQiYeKaiHuXinXi {
  code: number
  data: PageQiYeKaiHuXinXi
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQueryAccInfoResp {
  code: number
  data: QueryAccInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQueryCertFormResp {
  code: number
  data: QueryCertFormResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQueryEnterprisePageHomeResp {
  code: number
  data: QueryEnterprisePageHomeResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQueryJudgeClaimResp {
  code: number
  data: QueryJudgeClaimResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQueryWalletBalanceResp {
  code: number
  data: QueryWalletBalanceResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseRegisterResultResp {
  code: number
  data: RegisterResultResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseRoleInfoResq {
  code: number
  data: RoleInfoResq
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseScanReQrResp {
  code: number
  data: ScanReQrResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseSendActiveMessageResp {
  code: number
  data: SendActiveMessageResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseShiftEmployeeResp {
  code: number
  data: ShiftEmployeeResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseVerificationResp {
  code: number
  data: VerificationResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseVoid {
  code: number
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseboolean {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponselong {
  code: number
  data: number
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponsestring {
  code: number
  data: string
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseGeRenZuHuXinXiXiangQingBiao {
  code: number
  data: GeRenZuHuXinXiXiangQingBiao
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseGeRenRenZhengXinXiKaiHuXinXiXinZengShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu {
  code: number
  data: GeRenRenZhengXinXiKaiHuXinXiXinZengShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseGeRenRenZhengXinXi {
  code: number
  data: GeRenRenZhengXinXi
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQiYeJianDanRenZheng {
  code: number
  data: QiYeJianDanRenZheng0
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQiYeZhuTiXinXi {
  code: number
  data: QiYeZhuTiXinXi
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQiYeKaiHuXinXi {
  code: number
  data: QiYeKaiHuXinXi0
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQiYeZuHuXinXiXiangQing {
  code: number
  data: QiYeZuHuXinXiXiangQing0
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseGuanLianGongSiLieBiao {
  code: number
  data: GuanLianGongSiLieBiao
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseGuanLianGongSiXiangQing {
  code: number
  data: GuanLianGongSiXiangQing
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseShenHeTongJiHuanCunSanShiMiao {
  code: number
  data: ShenHeTongJiHuanCunSanShiMiao
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseShouQuanShenHe {
  code: number
  data: ShouQuanShenHe0
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo {
  code: number
  data: ShuJuYiZhiXingCaoZuoFanHuiJieGuo
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseJianChaYaoQingMa {
  code: number
  data: JianChaYaoQingMa
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseZuHuXinXi {
  code: number
  data: ZuHuXinXi
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseYaoQingZhuCe {
  code: number
  data: YaoQingZhuCe
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface Attachment {
  /** id */
  id: string
  /** name */
  name: string
  /** 附件类型 */
  type: string
  /** 附件路径 */
  url: string
}
export interface AuditRelationTotalReq {
  /** 时间范围-结束 */
  endTime: string
  /** 时间范围-起始 */
  startTime: string
}
export interface AuditorInfo {
  id: number
  /** 审核人姓名 */
  name: string
}
export interface AuthEnterpriseOrgInfoResp {
  /** 业务授权情况 有多种业务授权 */
  authCount: object
  /** 认证状态 */
  authStatus: string
  /** 业务认证列表 */
  authTypeMap: object
  /** 是否主企业 true-是 false-否 */
  chiefly: boolean
  /** 组织下总的员工数 */
  deptChildrenEmployeeCount: number
  /** 关联的组织 */
  deptLinkEnterpriseResp: DeptLinkEnterpriseResp
  /** id */
  id: number
  /** 企业 社会统一信用代码 */
  licenseUnifiedCode: string
  /** 企业名称 */
  name: string
  /** 公司编号 */
  serialNum: string
}
export interface AuthOrgUserReq {
  /** 授权还是取消授权 */
  authFlag: boolean
  /** 要授权的业务类型-菜花钱包 e签宝  发票等 */
  certType: string
  /** 部门ID */
  deptId: number
  /** 批量操作的用户ID列表， 用户都必须在此组织下 */
  employeeIds: number[]
  /** 企业ID */
  enterpriseId: number
}
export interface BasePageReq {
  page: number
  size: number
}
export interface ChannelAppTenantConfigAddReq {
  /** 加密aesKey */
  aesKey: string
  /** 签名token */
  aesToken: string
  /** 应用凭证agentId */
  agentId: string
  /** 应用凭证appKey */
  appKey: string
  /** 应用凭证appSecrety */
  appSecret: string
  /** 渠道类型，钉钉：DINGDING */
  channelType: string
  /** 企业corpId */
  corpId: string
}
export interface ChannelAppTenantConfigResp {
  /** 加密aesKey */
  aesKey: string
  /** 签名token */
  aesToken: string
  /** 应用凭证agentId */
  agentId: string
  /** 应用凭证appKey */
  appKey: string
  /** 应用凭证appSecret */
  appSecret: string
  /** 应用服务网址 */
  appUrl: string
  /** 渠道类型 */
  channelType: string
  /** 公司corpId */
  corpId: string
  /** 主键Id */
  id: number
  /** 管理后台网址 */
  manUrl: string
  /** 服务器出口IP */
  outIp: string
  /** PC服务网址 */
  pcUrl: string
  /** 回调网址 */
  recUrl: string
  /** 租户Id */
  tenantId: number
}
export interface ChannelAppTenantConfigUpReq {
  /** 加密aesKey */
  aesKey: string
  /** 签名token */
  aesToken: string
  /** 应用凭证agentId */
  agentId: string
  /** 应用凭证appKey */
  appKey: string
  /** 应用凭证appSecrety */
  appSecret: string
  /** 渠道类型，钉钉：DINGDING */
  channelType: string
  /** 企业corpId */
  corpId: string
  /** 主键Id */
  id: number
  /** 租户Id */
  tenantId: number
}
export interface ChannelComLoginReq {
  /** 身份标识:邮箱，手机号，微信appid,xxx */
  account: string
  /** 密码凭证：微信：code */
  certificate: string
  /** 渠道corpId */
  channelCorpId: string
  /** 渠道员工id */
  channelEmployeeId: string
  /** 渠道员工id */
  channelType: string
  clientType: string
  clientVersion: string
  deviceCode: string
  deviceManufacturer: string
  deviceModel: string
  /** 登录模式 */
  loginModeEnum: string
  /** 滑块验证唯一标示 */
  uuid: string
}
export interface ChannelUserResp {
  /** 渠道企业id(corpId) */
  channelCorpId: string
  /** 渠道员工id */
  channelEmployeeId: string
  /** 渠道类型(DINGDING 钉钉，CORP_WEIXIN 企微) */
  channelType: string
}
export interface CharSequence {
}
export interface ComLoginReq {
  /** 身份标识:邮箱，手机号，微信appid,xxx */
  account: string
  /** 密码凭证：微信：code */
  certificate: string
  clientType: string
  clientVersion: string
  deviceCode: string
  deviceManufacturer: string
  deviceModel: string
  /** 登录模式 */
  loginModeEnum: string
  /** 滑块验证唯一标示 */
  uuid: string
}
export interface ComLoginResp {
  code: number
  /** 是否新用户 0-否 1-是 */
  newUser: boolean
  /** 是否设置密码 0-否 1-是 */
  setPassWord: boolean
  token: string
  tokenTimeOut: number
}
export interface ComPage {
  current: number
  records: object[]
  size: number
  total: number
}
export interface ComPageEmployeeAddRecordResp {
  current: number
  records: EmployeeAddRecordResp[]
  size: number
  total: number
}
export interface ComPageEmployeeComplexResp {
  current: number
  records: EmployeeComplexResp[]
  size: number
  total: number
}
export interface ComPageEmployeeResp {
  current: number
  records: EmployeeResp[]
  size: number
  total: number
}
export interface ComPageEnterpriseCredentialResp {
  current: number
  records: EnterpriseCredentialResp[]
  size: number
  total: number
}
export interface ComPageEnterpriseIdentificationResp {
  current: number
  records: EnterpriseIdentificationResp[]
  size: number
  total: number
}
export interface ComPageEpEmployeeResp {
  current: number
  records: EpEmployeeResp[]
  size: number
  total: number
}
export interface ComPageInviteEmployeeResp {
  current: number
  records: InviteEmployeeResp[]
  size: number
  total: number
}
export interface ComPageLogLoginResp {
  current: number
  records: LogLoginResp[]
  size: number
  total: number
}
export interface ComPageRelationEnterpriseInfo {
  current: number
  records: RelationEnterpriseInfo[]
  size: number
  total: number
}
export interface ComPageQiYeChaXun {
  current: number
  records: QiYeChaXun[]
  size: number
  total: number
}
export interface ComPageGuanLianShenHeXinXi {
  current: number
  records: GuanLianShenHeXinXi[]
  size: number
  total: number
}
export interface ComPageFaPiaoGuanLi {
  current: number
  records: FaPiaoGuanLi0[]
  size: number
  total: number
}
export interface ComPageShouQuanShenHe {
  current: number
  records: ShouQuanShenHe1[]
  size: number
  total: number
}
export interface ComPageShouQuanShenHeLieBiao {
  current: number
  records: ShouQuanShenHeLieBiao[]
  size: number
  total: number
}
export interface ComPageTianJiaGeRenZiZhi {
  current: number
  records: TianJiaGeRenZiZhi[]
  size: number
  total: number
}
export interface ComPageZuHuShouHuoDiZhiTianJia {
  current: number
  records: ZuHuShouHuoDiZhiTianJia0[]
  size: number
  total: number
}
export interface CompanyInfo {
  /** 登记机关  */
  belongOrg: string
  /** 上市状态 */
  bondType: string
  /** 经营范围 */
  businessScope: string
  /** 营业期限 */
  businessTerm: string
  /** 行业 */
  category: string
  /** 核准日期 */
  checkDate: string
  /** 省 */
  city: string
  companyId: string
  /** 公司名称 */
  companyName: string
  /** 天眼评分 */
  companyScore: string
  /** 企业类型 */
  companyType: string
  /** 实缴资本 */
  contributedCapital: string
  createTime: string
  /** 统一社会信用代码 */
  creditCode: string
  /** 区 */
  district: string
  /** 邮箱 */
  emails: string
  /** 成立日期 */
  estiblishTime: string
  /** 法定代表人 */
  firstPosition: string
  /** 公司标签 */
  labelListV2: string
  /** logo */
  logo: string
  /** 英文名称 */
  nameen: string
  /** newtestName */
  newtestName: string
  /** 组织机构代码 */
  orgNumber: string
  /** 手机号 */
  phoneNum: string
  /** logo */
  province: string
  /** 注册资本 */
  regCapital: string
  /** 注册地 */
  regLocation: string
  /** 工商注册号 */
  regNumber: string
  /** 经营状态 */
  regStatus: string
  /** 参保人数 */
  socialStaffNum: string
  /** 人员规模 */
  staffSize: string
  /** 纳税人识别号 */
  taxCode: string
  /** 纳税人资质 */
  taxpayerQualification: string
  updateTime: string
  /** 网址 */
  websites: string
}
export interface Comparableobject {
}
export interface CorpWechatAuthUrlResp {
  /** 授权链接 */
  authUrl: string
}
export interface CurrentAuthResp {
  /** 菜单路由 */
  menuRoute: RouterResp[]
  /** 操作权限 */
  permission: string[]
}
export interface DeptAddReq {
  /** 部门名称 */
  deptName: string
  /** 负责人id */
  leaderEmployeeId: number
  /** 部门体系: 内部：INNER */
  mark: string
  /** 显示顺序 */
  orderNum: number
  /** 父部门id */
  parentId: number
  /** 部门简介 */
  profile: string
  /** 部门类型,部门：DEPT, 公司:COMPANY */
  scaleType: string
}
export interface DeptDetailResp {
  /** 祖级列表 */
  ancestors: string
  /** 渠道部门名 */
  channelDeptName: string
  createId: number
  createName: string
  created: string
  /** 部门code */
  deptCode: string
  /** 部门名称 */
  deptName: string
  /** 邮箱 */
  email: string
  /** 部门id */
  id: number
  /** 负责人id */
  leaderEmployeeId: number
  /** 部负责人信息 */
  leaderEmployeeInfo: EmployeeComplexResp
  /** 部门体系: 内部：INNER */
  mark: string
  markDesc: string
  modified: string
  /** 显示顺序 */
  orderNum: number
  /** 父部门code */
  parentCode: string
  /** 父部门id */
  parentId: number
  /** 父部门名称 */
  parentName: string
  /** 联系电话 */
  phone: string
  /** 部门简介 */
  profile: string
  /** 部门类型,部门：DEPT, 公司:COMPANY */
  scaleType: string
  scaleTypeDesc: string
  /** 部门状态（NORMAL正常 STOP停用） */
  status: string
  statusDesc: string
  updateId: number
  updateName: string
}
export interface DeptLinkEnterpriseReq {
  /** 组织-部门id */
  deptId: number
  /** 企业ID */
  enterpriseId: number
  /** 是否覆盖，默认传false.当前企业已有绑定，则传入此值true换绑（二次确认） */
  overFlag: boolean
}
export interface DeptLinkEnterpriseResp {
  /** 祖级列表 */
  ancestors: string
  createId: number
  createName: string
  created: string
  /** 部门code */
  deptCode: string
  /** 部门名称 */
  deptName: string
  /** 邮箱 */
  email: string
  /** 企业ID */
  enterpriseId: number
  /** 部门id */
  id: number
  /** 负责人id */
  leaderEmployeeId: number
  /** 部门负责人userId */
  leaderUserId: number
  /** 组织关联的企业,默认false没有关联 */
  linkStatus: boolean
  /** 部门体系: 内部：INNER */
  mark: string
  markDesc: string
  modified: string
  /** 显示顺序 */
  orderNum: number
  /** 父部门code */
  parentCode: string
  /** 父部门id */
  parentId: number
  /** 联系电话 */
  phone: string
  /** 部门简介 */
  profile: string
  /** 部门类型,部门：DEPT, 公司:COMPANY */
  scaleType: string
  scaleTypeDesc: string
  /** 部门状态（NORMAL正常 STOP停用） */
  status: string
  statusDesc: string
  /** 租户id */
  tenantId: number
  updateId: number
  updateName: string
}
export interface DeptResp {
  /** 祖级列表 */
  ancestors: string
  createId: number
  createName: string
  created: string
  /** 部门code */
  deptCode: string
  /** 部门名称 */
  deptName: string
  /** 邮箱 */
  email: string
  /** 部门id */
  id: number
  /** 负责人id */
  leaderEmployeeId: number
  /** 部门负责人userId */
  leaderUserId: number
  /** 组织关联的企业,默认false没有关联 */
  linkStatus: boolean
  /** 部门体系: 内部：INNER */
  mark: string
  markDesc: string
  modified: string
  /** 显示顺序 */
  orderNum: number
  /** 父部门code */
  parentCode: string
  /** 父部门id */
  parentId: number
  /** 联系电话 */
  phone: string
  /** 部门简介 */
  profile: string
  /** 部门类型,部门：DEPT, 公司:COMPANY */
  scaleType: string
  scaleTypeDesc: string
  /** 部门状态（NORMAL正常 STOP停用） */
  status: string
  statusDesc: string
  /** 租户id */
  tenantId: number
  updateId: number
  updateName: string
}
export interface DeptUpReq {
  /** 部门名称 */
  deptName: string
  /** 部门id, 编辑时候传递 */
  id: number
  /** 负责人id */
  leaderEmployeeId: number
  /** 显示顺序 */
  orderNum: number
  /** 部门简介 */
  profile: string
  /** 部门类型,部门：DEPT, 公司:COMPANY */
  scaleType: string
}
export interface DescribeFaceVerifyResponse {
  code: string
  message: string
  requestId: string
  resultObject: DescribeFaceVerifyResponseResultObject
}
export interface DescribeFaceVerifyResponseResultObject {
  deviceToken: string
  identityInfo: string
  materialInfo: string
  passed: string
  subCode: string
}
export interface EmployeeAddRecordResp {
  /** 添加时间 */
  addTime: string
  /** 添加人姓名 */
  adderName: string
  /** 添加人手机号 */
  adderPhone: string
  /** 主属部门 */
  deptName: string
  /** 邮箱 */
  email: string
  /** 成员姓名 */
  employeeName: string
  /** 成员手机号 */
  employeePhone: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  employeeStatus: string
  /** id */
  id: number
  /** 加入时间 */
  joinTime: string
  /** 拒绝理由 */
  refuse: string
  /** 角色权限 */
  role: string[]
}
export interface EmployeeAddReq {
  /** 员工邮箱 */
  email: string
  /** 主部门 id */
  mainDeptId: number
  /** 手机号 */
  mobile: string
  nickName: string
  relation: string
  /** 角色 ids */
  roleIds: number[]
  sex: string
  /** 员工姓名 */
  userName: string
}
export interface EmployeeAllInfoResp {
  /** 部门信息 */
  deptRespList: ExtDeptResp[]
  /** 员工信息 */
  employeeResp: EmployeeResp
  /** 职务信息 */
  jobRespList: JobResp[]
  /** 岗位信息 */
  postRespList: PostResp[]
  /** 角色信息 */
  roleRespList: RoleResq[]
}
export interface EmployeeComplexResp {
  /** 是否业务授权: 根据业务场景，存在无返会情况 */
  authStatus: boolean
  createId: number
  /** 邀请人 */
  createName: string
  /** 加入时间 */
  created: string
  /** 部门信息 */
  deptRespList: EmployeeDeptResp[]
  /** 员工邮箱 */
  email: string
  /** 员工id */
  id: number
  /** 职务信息 */
  jobRespList: EmployeeJobResp[]
  /** 手机号 */
  mobile: string
  modified: string
  /** 员工昵称 */
  nickName: string
  /** 岗位信息 */
  postRespList: EmployeePostResp[]
  /** 是否实名认证: 根据业务场景，存在无返会情况 */
  realAuth: boolean
  /** 关联关系：INIT:创建人，CREATE：后台添加，INVITE:邀请加入，ADD:搜索加入 */
  relation: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex: string
  sexDesc: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status: string
  updateId: number
  updateName: string
  /** 账号id */
  userId: number
  /** 员工姓名 */
  userName: string
}
export interface EmployeeDeptResp {
  /** 部门code */
  deptCode: string
  /** 部门id */
  deptId: number
  /** 部门名称 */
  deptName: string
  /** 员工id */
  employeeId: number
  /** ID */
  id: number
  /** 是否主部门 */
  mainDept: boolean
  /** 租户id */
  tenantId: number
}
export interface EmployeeJobResp {
  /** 员工id */
  employeeId: number
  /** ID */
  id: number
  /** 职务code */
  jobCode: string
  /** 职务ID */
  jobId: number
  /** 职务name */
  jobName: string
  /** 租户id */
  tenantId: number
}
export interface EmployeeNoActiveResp {
  count: number
  employeeResp: EmployeeRespRes[]
}
export interface EmployeePostResp {
  /** 员工ID */
  employeeId: number
  /** id */
  id: number
  /** 岗位code */
  postCode: string
  /** 岗位ID */
  postId: number
  /** 岗位name */
  postName: string
  /** 租户id */
  tenantId: number
}
export interface EmployeeResp {
  createId: number
  /** 邀请人 */
  createName: string
  /** 加入时间 */
  created: string
  /** 员工邮箱 */
  email: string
  /** 员工id */
  id: number
  /** 手机号 */
  mobile: string
  modified: string
  /** 员工昵称 */
  nickName: string
  /** 关联关系：INIT:创建人，CREATE：后台添加，INVITE:邀请加入，ADD:搜索加入 */
  relation: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex: string
  sexDesc: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status: string
  updateId: number
  updateName: string
  /** 账号id */
  userId: number
  /** 员工姓名 */
  userName: string
}
export interface EmployeeRespReq {
  createId: number
  /** 邀请人 */
  createName: string
  /** 加入时间 */
  created: string
  /** 员工邮箱 */
  email: string
  /** 员工id */
  id: number
  /** 手机号 */
  mobile: string
  modified: string
  /** 员工昵称 */
  nickName: string
  /** 关联关系：INIT:创建人，CREATE：后台添加，INVITE:邀请加入，ADD:搜索加入 */
  relation: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status: string
  updateId: number
  updateName: string
  /** 账号id */
  userId: number
  /** 员工姓名 */
  userName: string
}
export interface EmployeeRespRes {
  createId: number
  /** 邀请人 */
  createName: string
  /** 加入时间 */
  created: string
  /** 员工邮箱 */
  email: string
  /** 员工id */
  id: number
  /** 手机号 */
  mobile: string
  modified: string
  /** 员工昵称 */
  nickName: string
  /** 关联关系：INIT:创建人，CREATE：后台添加，INVITE:邀请加入，ADD:搜索加入 */
  relation: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex: string
  sexDesc: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status: string
  updateId: number
  updateName: string
  /** 账号id */
  userId: number
  /** 员工姓名 */
  userName: string
}
export interface EmployeeSelectorReq {
  /** 岗位id */
  deptId: number
  /** 职务id */
  jobId: number
}
export interface EmployeeSimpleListReq {
  /** 员工 id */
  id: number
  /** 员工手机号 */
  mobile: string
  page: number
  size: number
  /** 员工状态 */
  status: string
  /** 员工姓名 */
  userName: string
}
export interface EmployeeUpReq {
  /** 附属 ids */
  deptIds: number[]
  /** 员工邮箱 */
  email: string
  /** 员工 id */
  id: number
  /** 职务 ids */
  jodIds: number[]
  /** 主部门 id */
  mainDeptId: number
  nickName: string
  /** 岗位 ids */
  postIds: number[]
  sex: string
  /** 员工姓名 */
  userName: string
}
export interface EmpowerDeptResp {
  /** 子节点 */
  children: EmpowerDeptResp[]
  /** 唯一标识 */
  id: string
  info: DeptResp
  /** 名称 */
  label: string
  /** 上级id */
  parentId: string
  /** 权重 */
  weight: number
}
export interface EntInviteConfig {
  /** 审核开启状态 0-关闭 1-开启 */
  auditState: boolean
  /** 审核人列表 */
  auditor: AuditorInfo[]
  /** 公司ID */
  enterpriseId: number
  id: number
  /** LINK-链接 QR-二维码 */
  inviteType: string
  /** 模块分类 ENT_RE-公司关联   EMP_AUTH-员工授权 */
  module: string
  /** 配置开启状态 0-关闭 1-开启 */
  openState: boolean
}
export interface EntReSetReq {
  /** 成员授权邀请设置 */
  emInviteConfig: EntInviteConfig
  /** 关联邀请设置 */
  reInviteConfig: EntInviteConfig
  /** 授权设置 */
  roleConfigInfo: RoleConfigInfo
}
export interface EntReSetResp {
  /** 成员授权邀请设置 */
  emInviteConfig: EntInviteConfig
  /** 关联邀请设置 */
  reInviteConfig: EntInviteConfig
  /** 授权设置 */
  roleConfigInfo: RoleConfigInfo
}
export interface EnterpriseAuditReq {
  /** 时间范围-结束 */
  endTime: string
  /** 加盟公司名称 */
  franchiseEnterpriseName: string
  page: number
  size: number
  /** 时间范围-起始 */
  startTime: string
}
export interface EnterpriseBeneficiaryReq {
  createId: number
  createName: string
  created: string
  enterpriseAcctId: number
  enterpriseBeneficiaryAddress: string
  enterpriseBeneficiaryConctactPhone: string
  enterpriseBeneficiaryIdCardBackId: string
  enterpriseBeneficiaryIdCardFileId: string
  enterpriseBeneficiaryIdCardFrontId: string
  enterpriseBeneficiaryIdCardNo: string
  enterpriseBeneficiaryIdCardType: string
  enterpriseBeneficiaryIdCardValidDate: string
  enterpriseBeneficiaryIdCardValidStartDate: string
  enterpriseBeneficiaryIncomeType: string
  enterpriseBeneficiaryName: string
  enterpriseBeneficiaryPost: string
  enterpriseBeneficiaryShareRatio: string
  id: number
  isDelete: number
  modified: string
  updateId: number
  updateName: string
}
export interface EnterpriseBeneficiaryResp {
  createId: number
  createName: string
  created: string
  enterpriseAcctId: number
  enterpriseBeneficiaryAddress: string
  enterpriseBeneficiaryConctactPhone: string
  enterpriseBeneficiaryIdCardBackId: string
  enterpriseBeneficiaryIdCardFileId: string
  enterpriseBeneficiaryIdCardFrontId: string
  enterpriseBeneficiaryIdCardNo: string
  enterpriseBeneficiaryIdCardType: string
  /** (只读)受益人证件类型 字典值，用于反显 */
  enterpriseBeneficiaryIdCardTypeDict: SysDictDuiXiangnullZhiBuXuLieHua
  enterpriseBeneficiaryIdCardValidDate: string
  enterpriseBeneficiaryIdCardValidStartDate: string
  enterpriseBeneficiaryIncomeType: string
  enterpriseBeneficiaryName: string
  enterpriseBeneficiaryPost: string
  enterpriseBeneficiaryShareRatio: string
  id: number
  isDelete: number
  modified: string
  updateId: number
  updateName: string
}
export interface EnterpriseCredentialResp {
  /** 附件 */
  attachments: Attachment[]
  /** 资质编号 */
  credentialNo: string
  /** 资质类型 */
  credentialType: string
  /** 资质类型 code */
  credentialTypeCode: string
  /** 公司ID */
  enterpriseId: number
  /** id */
  id: number
  /** 发证日期 */
  issuingDate: string
  /** 发证机关 */
  office: string
  /** 资质行业 */
  scope: string
  /** 资质行业 */
  scopeCode: string
  /** 来源 */
  source: string
  /** 有效期 */
  validDate: string
}
export interface EnterpriseIdentificationReq {
  /** 智能票夹状态 */
  alTicket: string
  /** 全电发票认证状态 */
  allEInvoiceStatus: string
  /** 认证状态 */
  authStatus: string
  /** 普通认证认证状态 */
  commontStatus: string
  /** 电子签章全功能认证状态 */
  esignALlStatus: string
  esignOnlySignStatus: string
  /** id */
  id: number
  /** 企业 法人姓名 */
  legalPerson: string
  /** 企业 社会统一信用代码 */
  licenseUnifiedCode: string
  /** 企业名称 */
  name: string
  page: number
  /** 公司编号 */
  serialNum: string
  size: number
  /** 钱包认证状态 */
  walletStatus: string
}
export interface EnterpriseIdentificationResp {
  /** 认证状态 */
  authStatus: string
  /** 业务认证列表 */
  authTypeMap: object
  /** 业务认证 */
  bizAuthType: EnterpriseIdentificationType[]
  /** 是否主企业 true-是 false-否 */
  chiefly: boolean
  /** 关联的组织 */
  deptLinkEnterpriseResp: DeptLinkEnterpriseResp
  /** id */
  id: number
  /** 企业 社会统一信用代码 */
  licenseUnifiedCode: string
  /** 企业名称 */
  name: string
  /** 公司编号 */
  serialNum: string
}
export interface EnterpriseIdentificationType {
  /** 认证类别 */
  clazz: string
  /** 认证费用 */
  cost: string
  /** 服务功能 */
  function: string
  /** 认证机构 */
  institution: string
  /** 认证后权益 */
  interests: string
  /** 名称 */
  name: string
  /** 认证类型状态 */
  status: string
  /** 认证类型 */
  type: string
}
export interface EnterpriseShareholderReq {
  createId: number
  createName: string
  created: string
  enterpriseAcctId: number
  enterpriseShareholderIdCardBackFileId: string
  enterpriseShareholderIdCardFileId: string
  enterpriseShareholderIdCardNo: string
  enterpriseShareholderIdCardType: string
  enterpriseShareholderIdCardValidDate: string
  enterpriseShareholderIdCardValidStartDate: string
  enterpriseShareholderName: string
  enterpriseShareholderShareRatio: string
  id: number
  isDelete: number
  modified: string
  updateId: number
  updateName: string
}
export interface EnterpriseShareholderResp {
  createId: number
  createName: string
  created: string
  enterpriseAcctId: number
  enterpriseShareholderIdCardBackFileId: string
  enterpriseShareholderIdCardFileId: string
  enterpriseShareholderIdCardNo: string
  enterpriseShareholderIdCardType: string
  /** (只读)企业控股股东证件类型 字典值，用于反显 */
  enterpriseShareholderIdCardTypeSysDict: SysDictDuiXiangnullZhiBuXuLieHua
  enterpriseShareholderIdCardValidDate: string
  enterpriseShareholderIdCardValidStartDate: string
  enterpriseShareholderName: string
  enterpriseShareholderShareRatio: string
  id: number
  isDelete: number
  modified: string
  updateId: number
  updateName: string
}
export interface EpEmployeeResp {
  /** 是否业务授权: 根据业务场景，存在无返会情况 */
  authStatus: boolean
  createId: number
  /** 邀请人 */
  createName: string
  /** 加入时间 */
  created: string
  /** 部门信息 */
  deptRespList: EmployeeDeptResp[]
  /** 员工邮箱 */
  email: string
  /** 员工id */
  id: number
  /** 授权状态 */
  jmAuthStatus: string
  /** 职务信息 */
  jobRespList: EmployeeJobResp[]
  /** 手机号 */
  mobile: string
  modified: string
  /** 员工昵称 */
  nickName: string
  /** 岗位信息 */
  postRespList: EmployeePostResp[]
  /** 是否实名认证: 根据业务场景，存在无返会情况 */
  realAuth: boolean
  /** 授权失败原因 */
  refuseReason: string
  /** 关联关系：INIT:创建人，CREATE：后台添加，INVITE:邀请加入，ADD:搜索加入 */
  relation: string
  /** 角色 */
  roleName: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex: string
  sexDesc: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status: string
  updateId: number
  updateName: string
  /** 账号id */
  userId: number
  /** 员工姓名 */
  userName: string
}
export interface EpEntTreeResp {
  entMetas: ReEntMeta[]
  id: number
  /** 平台公司名称 */
  name: string
}
export interface ExtDeptResp {
  /** 祖级列表 */
  ancestors: string
  createId: number
  createName: string
  created: string
  /** 部门code */
  deptCode: string
  /** 部门名称 */
  deptName: string
  /** 邮箱 */
  email: string
  /** 员工id */
  employeeId: number
  /** 部门id */
  id: number
  /** 负责人id */
  leaderEmployeeId: number
  /** 部门负责人userId */
  leaderUserId: number
  /** 组织关联的企业,默认false没有关联 */
  linkStatus: boolean
  /** 是否是主部门 */
  mainDept: boolean
  /** 部门体系: 内部：INNER */
  mark: string
  markDesc: string
  modified: string
  /** 显示顺序 */
  orderNum: number
  /** 父部门code */
  parentCode: string
  /** 父部门id */
  parentId: number
  /** 联系电话 */
  phone: string
  /** 部门简介 */
  profile: string
  /** 部门类型,部门：DEPT, 公司:COMPANY */
  scaleType: string
  scaleTypeDesc: string
  /** 部门状态（NORMAL正常 STOP停用） */
  status: string
  statusDesc: string
  /** 租户id */
  tenantId: number
  updateId: number
  updateName: string
}
export interface FileSystemResource {
  description: string
  file: File
  filename: string
  inputStream: InputStream
  open: boolean
  outputStream: OutputStream
  path: string
  readable: boolean
  uri: string
  url: string
  writable: boolean
}
export interface HeaderEmpowerSmsInfo {
  /** 公司ID */
  enterpriseId: number
  /** 手机号 */
  phone: string
  /** 租户ID */
  tenantId: number
}
export interface ImportEmployeeErrorData {
  error: string
  id: number
  mobile: string
  name: string
}
export interface ImportEmployeeResp {
  /** 错误数据列表 */
  errorDataList: ImportEmployeeErrorData[]
  /** 错误人数 */
  errorNum: number
  /** 失败记录文件链接 */
  errorUrl: string
  /** 导入日期 */
  importDate: string
  /** 成功人数 */
  succNum: number
}
export interface InitAgengConfigReq {
  /** 需要初始化ageng_config的页面url */
  initPage: string
}
export interface InputStream {
}
export interface InviteEmployeeResp {
  /** 申请理由 */
  applyReason: string
  /** 申请时间 */
  applyTime: string
  /** 部门id */
  deptCode: number
  /** 部门名称 */
  deptName: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  employeeStatus: string
  /** id */
  id: number
  /** 邀请人姓名 */
  inviterName: string
  /** 邀请人手机号 */
  inviterPhone: string
  /** 加入时间 */
  joinTime: string
  /** 申请人id */
  proposerId: number
  /**  申请人/被邀请人 姓名 */
  proposerName: string
  /** 申请人/被邀请人 手机号 */
  proposerPhone: string
  /** 拒绝理由 */
  refuse: string
  /** 分享时间 */
  shareTime: string
  /** INCODE 邀请码 LINK 链接  QRCODE-二维码 */
  shareType: string
  /** 待审核-AWAIT 通过-PASS 拒绝-REFUSE 屏蔽-SHIELD */
  status: string
}
export interface InviteEnterpriseReInfo {
  /** 公司名称 */
  entName: string
  /** 平台公司id */
  enterpriseId: number
  /** 处理状态 */
  handleStatus: boolean
  /** 负责人姓名 */
  headerName: string
  /** 负责人手机号 */
  headerPhone: string
  /** 邀请code */
  inviteCode: string
  /** 是否已处理 */
  isHandler: boolean
  /** 关联组织使用的ID */
  reId: number
  /** 关联租户id */
  reTenantId: number
}
export interface InviteJoinEchoResp {
  /** 加入类型 */
  applyType: string
  /** 公司认认证状态 */
  enterpriseCertStatus: string
  /** 公司名称 */
  enterpriseName: string
  /** 邀请人名称 */
  inviteName: string
  /** 加入人姓名 */
  joinName: string
  /** 请求key */
  key: number
  /** 电话 */
  mobile: string
}
export interface InviteLoginReq {
  /** 回显加入类型 */
  applyType: string
  /** 验证码 */
  certificate: string
  clientType: string
  clientVersion: string
  deviceCode: string
  deviceManufacturer: string
  deviceModel: string
  /** 加入人姓名 */
  joinName: string
  /** 回显key */
  key: string
  /** 电话 */
  mobile: string
  /** 滑块验证唯一标示 */
  uuid: string
}
export interface InviteLoginResp {
  /** 0-免审核  1-申请提交 */
  inviteStatus: number
  /** 手机号 */
  mobile: string
  /** 提示 */
  msg: string
  /** 是否新用户 0-否 1-是 */
  newUser: boolean
  /** 是否设置密码 0-否 1-是 */
  setPassWord: boolean
  /** 加入企业的租户id，免审核返回 */
  tenantId: number
  token: string
  tokenTimeOut: number
}
export interface InviteRePlatFromOrgReq {
  /** 公司ID */
  enterpriseId: number
  /** 负责人姓名 */
  headerName: string
  /** 负责人手机号 */
  headerPhone: string
  /** 关联租户id */
  reTenantId: number
}
export interface InviteSetResp {
  /** 是否审核0-否 1-是 */
  audit: boolean
  /** 审核人 员工列表 */
  auditorList: AuditorInfo[]
  /** id */
  id: number
  /** 是否开启 0-否 1-是 */
  open: boolean
  /** INCODE-邀请码 LINK-链接 QRCODE-二维码 ALL-全部 */
  shareType: string
}
export interface JobAddEmployeeReq {
  /** 员工id */
  employeeId: number
  /** 职务code */
  jobCode: string
  /** 职务id */
  jobId: number
  /** 职务名称 */
  jobName: string
}
export interface JobResp {
  /** 祖级列表 */
  ancestors: string
  createId: number
  createName: string
  created: string
  /** 职务id */
  id: number
  /** 职务code */
  jobCode: string
  modified: string
  /** 名称 */
  name: string
  /** 显示顺序 */
  orderNum: number
  /** 父职务code */
  parentCode: string
  /** 父职务id */
  parentId: number
  /** 状态（NORMAL正常 STOP停用） */
  status: string
  updateId: number
  updateName: string
}
export interface JudgeSwitchEnterpriseLimitResp {
  /** true-可以操作 false-不可操作 */
  judge: boolean
  /** 提示信息 */
  msg: string
}
export interface LogLoginResp {
  /** 浏览器类型 */
  browser: string
  /** 员工id */
  createId: number
  /** 员工姓名 */
  createName: string
  created: string
  /** 编号 */
  id: number
  /** IP地址 */
  ipaddr: string
  /** 地点 */
  loginLocation: string
  /** 操作时间 */
  loginTime: string
  /** 登录手机号 */
  mobile: string
  modified: string
  /** 操作系统 */
  os: string
  updateId: number
  updateName: string
}
export interface MenuCheckedResp {
  /** 选中的菜单 */
  checkedKeys: MenuDataScopeResp[]
  /** 菜单树 */
  menueTree: object[]
}
export interface MenuDataScopeReq {
  /** 数据权限5：全部数据权限, 4：自定部门权限 3：本部门及以下数据权限 ， 2：本部门数据权限，1:个人数据权限 */
  dataScope: number
  /** 数据权限:部门code */
  deptCodes: string[]
  /** 菜单id */
  menuId: number
}
export interface MenuDataScopeResp {
  /** 数据权限5：全部数据权限, 4：自定部门权限 3：本部门及以下数据权限 ， 2：本部门数据权限，1:个人数据权限 */
  dataScope: number
  /** 数据权限:部门code */
  deptCodes: string[]
  /** 菜单id */
  menuId: number
}
export interface MenuResp {
  /** 产品AppName */
  appName: string
  /** 前端代码目录 */
  codeCatalog: string
  createId: number
  createName: string
  created: string
  /** 是否有数据权限 */
  dataPermissions: boolean
  /** 是否启用 */
  enable: boolean
  /** 菜单图标url */
  iconUrl: string
  /** 菜单id */
  id: number
  /** 层级 */
  level: number
  /** 是否需要登录 */
  loginRequired: boolean
  /** 菜单编号 */
  menuCode: string
  /** 菜单大分类名称 */
  menuLargeCategoryName: string
  /** 菜单名称 */
  menuName: string
  /** 菜单id[boss] */
  menuOutId: number
  /** 是否显示 */
  menuShow: boolean
  /** 资源类型 */
  menuType: number
  modified: string
  /** 路由地址 */
  path: string
  /** 权限标识 */
  permIdent: string
  pid: number
  /** 产品编号 */
  productCode: string
  /** 路由参数 */
  queryParam: string
  /** 备注 */
  remarks: string
  /** 排序 */
  sort: number
  updateId: number
  updateName: string
}
export interface OcrBusinessLicenseBO {
  /** 公司地址，没有识别出来时返回"FailInRecognition" */
  address: string
  /** 经营范围，没有识别出来时返回"FailInRecognition" */
  business: string
  /** 注册资本，没有识别出来时返回"FailInRecognition" */
  capital: string
  /** 公司注册日期 */
  establishDate: string
  fake: boolean
  /** 公司名称，没有识别出来时返回"FailInRecognition" */
  name: string
  /** 公司法人，没有识别出来时返回"FailInRecognition" */
  person: string
  /** 统一社会信用编码，没有识别出来时返回"FailInRecognition" */
  regNum: string
  /** requestId */
  requestId: string
  /** 是否识别成功 */
  success: boolean
  /** 公司类型，没有识别出来时返回"FailInRecognition" */
  type: string
  /** 公司营业期限终止日期 */
  validPeriod: string
}
export interface OcrIdCardBackResp {
  /** 结束日期 */
  endDate: string
  /** 是否复印件 */
  fake: boolean
  /** 发行机关 */
  issue: string
  /** 开始日期 */
  startDate: string
  /** 是否识别成功 */
  success: boolean
}
export interface OcrIdCardFrontResp {
  /** 地址 */
  address: string
  /** 出生年月 */
  birth: string
  /** 是否是复印件 */
  fake: boolean
  /** 姓名 */
  name: string
  /** 民族 */
  nationality: string
  /** 身份证号 */
  num: string
  /** 性别 */
  sex: string
  /** 是否识别成功 */
  success: boolean
}
export interface OcrImageReq {
  /** 图片二进制数据的base64编码/图片url */
  image: string
}
export interface OrderItem {
  asc: boolean
  column: string
}
export interface OutputStream {
}
export interface PageEmployeeAddRecordReq {
  /** 添加人姓名/手机号 */
  adderNameOrPhone: string
  /** 成员姓名或手机号 */
  employeeNameOrPhone: string
  /** 员工状态 */
  employeeStatus: string
  page: number
  size: number
}
export interface PageEnterpriseCredentialReq {
  /** 资质编号 */
  credentialNo: string
  /** 资质类型 */
  credentialType: string
  /** 公司ID */
  enterpriseId: number
  /** 发证日期 */
  issuingDate: string
  /** 发证机关 */
  office: string
  page: number
  /** 资质行业 */
  scope: string
  size: number
  /** 有效期 */
  validDate: string
}
export interface PageInvoiceReq {
  /** 税号-精准匹配 */
  dutyNum: string
  page: number
  size: number
  /** 发票抬头-模糊匹配 */
  title: string
}
export interface PageSysDictDuiXiangnullZhiBuXuLieHua {
  countId: string
  current: number
  maxLimit: number
  optimizeCountSql: boolean
  orders: OrderItem[]
  pages: number
  records: SysDictDuiXiangnullZhiBuXuLieHua[]
  searchCount: boolean
  size: number
  total: number
}
export interface PageQiYeKaiHuXinXi {
  countId: string
  current: number
  maxLimit: number
  optimizeCountSql: boolean
  orders: OrderItem[]
  pages: number
  records: QiYeKaiHuXinXi0[]
  searchCount: boolean
  size: number
  total: number
}
export interface PersonVerifyReq {
  /** 银行卡号 */
  cardNo: string
  /** 身份有效期 */
  cardValidData: string
  /** 需要认证的用户身份证号 */
  idNo: string
  /** 环境参数，需要通过H5网页获取。 */
  metaInfo: string
  /** 需要认证的用户名 */
  name: string
  /** 身份证正面url */
  ocrIdCardBack: string
  /** 身份证正面url */
  ocrIdCardFront: string
  /** 开户行 */
  openBank: string
  /** 职业 */
  profession: string
  /** 认证完后返回地址 */
  returnUrl: string
  /** 身份证是否永久有效 0-非永久 1-永久有效 */
  validStatus: boolean
}
export interface PersonnelCertificate {
  /** 注册专业全路径 */
  allTotalName: string
  /** 有效期开始时间 */
  reSDate: string
  /** 有效期限 */
  regEDate: string
  /** 注册专业名称 */
  zczyName: string
}
export interface PlatformEmployeeAuthReq {
  /** 员工id */
  employeeIds: number[]
  /** 平台公司id-查询业务授权使用 */
  enterpriseId: number
  /** 角色id */
  roleIds: number[]
}
export interface PostAddOrUpReq {
  /** 岗位id, 编辑时候传递 */
  id: number
  /** 岗位名称 */
  postName: string
  /** 显示顺序 */
  postSort: number
  /** 工作流引擎系统唯一key */
  workflowKey: string
}
export interface PostResp {
  createId: number
  createName: string
  created: string
  /** 岗位id */
  id: number
  modified: string
  /** 岗位编码 */
  postCode: string
  /** 岗位名称 */
  postName: string
  /** 显示顺序 */
  postSort: number
  /** 岗位状态（NORMAL正常 STOP停用） */
  status: string
  updateId: number
  updateName: string
}
export interface QueryAccInfoResp {
  /** 用户手机号 */
  mobile: string
  /** 是否设置密码 true-是 false-否 */
  setPassWord: boolean
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status: string
}
export interface QueryCertFormResp {
  /** 银行卡号 */
  cardNo: string
  /** 身份证有效期 */
  cardValidData: string
  /** 身份证号 */
  idNo: string
  /** 用户名 */
  name: string
  /** 身份证正面url */
  ocrIdCardBack: string
  /** 身份证正面url */
  ocrIdCardFront: string
  /** 开户行 */
  openBank: string
  /** 职业 */
  profession: string
  /** 是否永久有效 0-非永久 1-永久有效 */
  validStatus: boolean
}
export interface QueryEmployeeByPhoneOrNameReq {
  /** 职务id */
  jobId: number
  /** 手机号或姓名 */
  phoneOrName: string
}
export interface QueryEnterprisePageHomeResp {
  /** 公司信息 */
  companyInfo: CompanyInfo
}
export interface QueryInviteEmployeeReq {
  /** 申请时间-结束 */
  applyTimeEnd: string
  /** 申请时间-开始 */
  applyTimeStart: string
  /** 部门名称 */
  deptName: string
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  employeeStatus: string
  /** 邀请人手机号/姓名 */
  inviterPhoneOrName: string
  /** 加入时间-结束 */
  joinTimeEnd: string
  /** 加入时间-开始 */
  joinTimeStart: string
  page: number
  proposerPhone: string
  /** 申请人/被邀请人 手机号/姓名 */
  proposerPhoneOrName: string
  /** INCODE-邀请码  LINK-链接  QRCODE-二维码 */
  shareType: string
  size: number
  /** 待审核-AWAIT 通过-PASS 拒绝-REFUSE 屏蔽-SHIELD */
  status: string
}
export interface QueryJobReq {
  /** 祖级列表 */
  ancestors: string
  /** 职务code */
  jobCode: string
  /** 名称 */
  name: string
  /** 显示顺序 */
  orderNum: number
  /** 父职务code */
  parentCode: string
  /** 父职务id */
  parentId: number
  /** 状态（NORMAL正常 STOP停用） */
  status: string
}
export interface QueryJudgeClaimResp {
  /** UNCLAIMED-未搜索 CLAIMED-已认领 UNCLAIMED-未认领 */
  operResult: string
}
export interface QueryPersonPageHomeResp {
  /** 身份证号 */
  cardNo: string
  /** 人员所在单位 */
  companyName: string
  /** 姓名 */
  name: string
  /** 唯一标示 */
  personRepetitionId: string
  /** 性别 */
  sex: string
  /** 专业证书 */
  vosList: RegisterCertificateInfo[]
}
export interface QueryWalletBalanceResp {
  /** 账户ID */
  accountId: number
  /** 账户编号 */
  accountNumber: string
  /** 可用余额 */
  availableAmount: string
  /** 开户行名 */
  bankName: string
  /** 银行卡号 */
  bankcardNumber: string
  /** 账户名称 */
  companyName: string
  /** 冻结余额 */
  frozenAmount: string
}
export interface ReEntMeta {
  /** 部门code */
  deptCode: string
  /** 关联公司ID */
  reEnterpriseId: number
  /** 名称 */
  reName: string
}
export interface ReEnterpriseInfo {
  /** 营业执照code */
  businessLicenseCode: string
  /** 平台公司名称 */
  enterpriseName: string
  /** 负责人 */
  headerName: string
  /** 负责人手机号 */
  headerPhone: string
  /** 是否实名认证 CERTIFIED("已认证"), UNCERTIFICATED("未认证") */
  isAuth: string
  /** 公司编码 */
  serialNo: string
}
export interface RefuseJoinReq {
  /** id */
  id: number
  /** 拒绝理由 */
  refuse: string
}
export interface RegisterCertificateInfo {
  /** 证书编号 */
  certificateNumber: string
  /** 注册编号 */
  regNo: string
  /** 证书名称 */
  regTypeName: string
  /** 公司名称 */
  registeredCertificateCompany: string
  /** 注册专业 */
  voList: PersonnelCertificate[]
}
export interface RegisterResultResp {
  mark: string
  mobile: string
  token: string
  tokenTimeOut: number
}
export interface RelationBusinessTypeInfo {
  /** 关联业务 */
  businessType: string
  /** 发起时间 */
  initTime: string
  /** 关联来源 */
  reSource: string
}
export interface RelationEnterpriseInfo {
  /** 审核状态 WAIT("待审核"),    PASS("审核通过"),    NO_PASS("审核不通过") */
  auditStatus: string
  /** 授权成员数量 */
  authCount: number
  /** 营业执照code */
  businessLicenseCode: string
  /** 发起时间 */
  created: string
  /** id */
  id: number
  /** 公司名称 */
  name: string
  /** 所属上级公司名称 */
  preEnterpriseName: string
  /** 关联状态 IN_RELATION("关联中"),    UN_RELATION("未关联"),    FAIL_RELATION("关联失败"),    INVALID_RELATION("关联失效") */
  relationStatus: string
}
export interface RemoveEmployeeReq {
  /** 员工id */
  employeeId: number[]
  /** 岗位id */
  jobId: number
}
export interface RoleAddReq {
  /** 是否允许分配该角色拥有权限 */
  allowAllot: boolean
  /** 菜单权限 */
  menuDataScopeReqList: MenuDataScopeReq[]
  /** 父角色id */
  parentId: number
  /** 说明 */
  remark: string
  /** 角色名称 */
  roleName: string
}
export interface RoleBaseUpReq {
  /** 角色id: 编辑必传 */
  id: number
  /** 说明 */
  remark: string
  /** 角色名称 */
  roleName: string
}
export interface RoleConfigInfo {
  /** 普通员工角色 */
  employeeRole: RoleInfo[]
  /** 负责人角色 */
  headerRole: RoleInfo[]
  id: number
  roleRange: string
  syncDeptId: number
}
export interface RoleInfo {
  id: number
  /** 角色名称 */
  name: string
}
export interface RoleInfoResq {
  /** 是否允许分配该角色拥有权限 */
  allowAllot: boolean
  /** 祖级列表 */
  ancestors: string
  createId: number
  createName: string
  created: string
  /** 部门树选择项是否关联显示 */
  deptCheckStrictly: boolean
  /** 角色id */
  id: number
  /** 角色层级 */
  level: number
  /** 菜单树选择项是否关联显示 */
  menuCheckStrictly: boolean
  /** 菜单组名称 */
  menuNames: string
  modified: string
  /** 父角色code */
  parentCode: string
  /** 父角色id */
  parentId: number
  /** 父角色c名称 */
  parentName: string
  /** 说明 */
  remark: string
  /** 角色code */
  roleCode: string
  /** 角色名称 */
  roleName: string
  /** 显示顺序 */
  roleSort: number
  /** 状态（NORMAL正常 STOP停用） */
  status: string
  statusDesc: string
  /** 角色分类 */
  type: string
  updateId: number
  updateName: string
}
export interface RoleMenuUpReq {
  /** 菜单权限 */
  menuDataScopeList: MenuDataScopeReq[]
  /** 角色id: 编辑必传 */
  roleId: number
}
export interface RoleResq {
  /** 是否允许分配该角色拥有权限 */
  allowAllot: boolean
  /** 祖级列表 */
  ancestors: string
  createId: number
  createName: string
  created: string
  /** 部门树选择项是否关联显示 */
  deptCheckStrictly: boolean
  /** 角色id */
  id: number
  /** 角色层级 */
  level: number
  /** 菜单树选择项是否关联显示 */
  menuCheckStrictly: boolean
  /** 菜单组名称 */
  menuNames: string
  modified: string
  /** 父角色code */
  parentCode: string
  /** 父角色id */
  parentId: number
  /** 说明 */
  remark: string
  /** 角色code */
  roleCode: string
  /** 角色权限字符串 */
  roleKey: string
  /** 角色名称 */
  roleName: string
  /** 显示顺序 */
  roleSort: number
  /** 状态（NORMAL正常 STOP停用） */
  status: string
  statusDesc: string
  /** 角色分类 */
  type: string
  updateId: number
  updateName: string
}
export interface RouterMetaResp {
  hideInMenu: boolean
  icon: string
  locale: string
  menuType: number
  order: number
  requiresAuth: boolean
}
export interface RouterResp {
  children: RouterResp[]
  id: number
  meta: RouterMetaResp
  name: string
  path: string
  query: string
  redirect: string
}
export interface ScanReQrResp {
  /** 审核ID */
  auditId: number
  /** 公司名称 */
  entName: string
  /** 状态 */
  status: string
}
export interface SelectorEmployeeResp {
  /** 部门名称 */
  deptName: string
  /** 员工id */
  employeeId: number
  /** 是否已加入 true-是 false-否 */
  isJoin: boolean
  /** 手机号 */
  mobile: string
  /** 姓名 */
  userName: string
}
export interface SendActiveMessageReq {
  /** 发送员工列表 */
  sendEmployeeList: EmployeeRespReq[]
}
export interface SendActiveMessageResp {
  /** 发送失败数 */
  failedCount: number
  /** 发送成功数 */
  successCount: number
}
export interface SetPassWordReq {
  /** 校验新加密密码 */
  checkPassWord: string
  /** 新加密密码 */
  passWord: string
}
export interface ShiftEmployeeResp {
  /** 员工id */
  employeeId: number
  /** 负责人名称 */
  employeeName: string
  /** 负责人 */
  leaders: ShiftLeader[]
}
export interface ShiftLeader {
  /** 负责人id */
  leaderEmployeeId: number
  /** 负责人名称 */
  leaderEmployeeName: string
}
export interface SuperCodeVerifyReq {
  /** 验证码 */
  certificate: string
  /** 转让者手机号 */
  mobile: string
  /** 接受者手机号 SUPER_ACCEPT 时传入 */
  toMobile: string
  /** 验证码滑块唯一id */
  uuid: string
}
export interface SuperManResp {
  /** 权限范围 */
  authRange: string
  /** 部门编码 */
  deptCode: string
  /** 部门名称 */
  deptName: string
  /** 当前员工是否为创建人 true-是 false-否 */
  employeeIsCreator: boolean
  /** 员工id */
  id: number
  /** 员工手机号 */
  mobile: string
  /** 员工姓名 */
  name: string
  /** 员工角色 */
  superRole: string
}
export interface SysDictDuiXiangnullZhiBuXuLieHua {
  /** 所有层级名称-搜索时，返回此值展示便于区分 */
  allLevelKindName: string[]
  /** 是否有子集标志 */
  childFlag: number
  /** 子集列表（可能为空） */
  childList: SysDictDuiXiangnullZhiBuXuLieHua[]
  /** 逻辑删除标志，默认0，0-未删除，1-删除。 */
  deleted: boolean
  id: number
  /** 说明 */
  introduce: string
  /** 类型编码 */
  kindCode: string
  /** 类型名称 */
  kindName: string
  /** 有父类则填写父类ID，无父类为0。分层查询使用 */
  parentId: number
  /** 同层级情况下的展示顺序。默认0,倒序 */
  sortNum: number
  /** 数据类型枚举值 （1-finance、2-certificate) */
  type: number
}
export interface TreeNodeConfig {
  childrenKey: string
  deep: number
  idKey: string
  nameKey: string
  parentIdKey: string
  weightKey: string
}
export interface Type {
  typeName: string
}
export interface UserJoinEnterpriseReq {
  /** 姓名 */
  name: string
  /** 申请理由 */
  reason: string
  /** 租户id */
  tenantId: number
}
export interface VerificationResp {
  /** 银行卡号 */
  bankCarkNo: string
  /** 身份证号 */
  cardNo: string
  /** 身份证有效期 */
  cardVaildDate: string
  certifyId: string
  certifyUrl: string
  code: string
  message: string
  /** 身份证正面url */
  ocrIdCardBack: string
  /** 身份证正面url */
  ocrIdCardFront: string
  /** 开户行 */
  openBank: string
  /** 职业 */
  profession: string
  requestId: string
  /** 用户名 */
  userName: string
  /** 是否永久有效 0-非永久 1-永久有效 */
  vaildStatus: boolean
}
export interface GeRenZuHuXinXiXiangQingBiao {
  /** 区 */
  area: string
  /** 认证状态: 未认证 UNCERTIFICATED, 已认证 CERTIFIED */
  authStatus: string
  /** 用户头像 */
  avatar: string
  /** 市 */
  city: string
  /** 国家 */
  country: string
  /** 是否创建人 */
  init: boolean
  /** 详细地址 */
  location: string
  /** 姓名最大修改次数 */
  maxNameUpdateNum: number
  /** 手机号 */
  mobile: string
  /** 姓名修改次数 */
  nameUpdateNum: number
  /** 用户昵称 */
  nickname: string
  /** 省 */
  province: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex: string
  /** 租户id */
  tenantId: number
  /** 用户名 */
  username: string
  /** 邮箱 */
  xmail: string
}
export interface GeRenRenZhengXinXi {
  /** 地址（身份证地址） */
  address: string
  /** 银行卡号 */
  bankCardNo: string
  /** 身份证号 */
  cardNo: string
  /** 身份证起始日期 */
  cardStartDate: string
  /** 身份证有效期 */
  cardValidDate: string
  /** 身份证发证机构 */
  issue: string
  /** 民族 */
  nationality: string
  /** 身份证反面照 */
  ocridCardBack: string
  /** 身份证正面照 */
  ocridCardFront: string
  /** 开户行 */
  openBank: string
  /** 职业 */
  profession: string
  /** 性别 */
  sex: string
  /** 姓名 */
  userName: string
  /** 是否永久有效 0-否 1-是 */
  validStatus: boolean
}
export interface GeRenRenZhengXinXiKaiHuXinXiXinZengShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu {
  /** 地址 */
  address: string
  /** 出生年月 */
  birth: string
  /** 结束日期 yyyyMMdd */
  endDate: string
  /** 身份证号 */
  idCardNum: string
  /** 个人银行卡号 */
  individualBankCardNo: string
  /** 工作单位 */
  individualCompany: string
  /** 邮箱 */
  individualMail: string
  /** 银行预留手机号 */
  individualReservedPhoneNo: string
  /** 职业类型,下拉菜单选择枚举值 */
  individualVocation: string
  /** 签发机关 */
  issue: string
  /** 姓名 */
  name: string
  /** 民族 */
  nationality: string
  /** 正面存储路径 */
  posUrl: string
  /** 反面存储路径 */
  revUrl: string
  /** 性别 */
  sex: string
  /** 开始日期 */
  startDate: string
  /** 用户ID 全局唯一.long型，转String */
  userId: number
}
export interface GeRenZiZhiZhuCeZhuanYe {
  /** 有效期结束时间 */
  endDate: string
  /** id */
  id: number
  /** 注册专业 */
  major: string
  /** 注册专业code */
  majorCode: string
  /** 有效期开始时间 */
  startDate: string
}
export interface QiYeZhiNenPiaoJiaRenZheng {
  /** 开票员密码 */
  clerkLoginPassword: string
  /** 开票员手机号 */
  clerkPhone: string
  /** 开票员角色-开票员 管理员 财务负责人 法定代表人 */
  clerkRole: string
  /** 公司联系电话 */
  contactNumber: string
  enterpriseId: number
  /** 企业普通认证记录ID */
  id: number
  /** 公司税号 */
  taxNum: string
  /** 租户ID */
  tenantId: string
}
export interface QiYeJianDanRenZheng {
  /** 管理员身份证号 */
  adminCardNo: string
  /** 管理员姓名 */
  adminName: string
  /** 授权书文件地址 */
  certificateAuth: string
  /** 授权书审核状态（初始化为待审核，boss系统进行审核更新）-只读 */
  certificateAuthStatus: string
  enterpriseId: number
  /** 企业普通认证记录ID */
  id: number
  /** 单位法人证书文件地址 */
  institutionLegalPersonCertificateUrl: string
  /** 法定代表人个人银行卡号-仅支持一类银联卡 */
  legalBankNo: string
  /** 法定代表人银行预留手机号 */
  legalBankPhone: string
  /** 法定代表人银行预留手机号-短信验证码 */
  legalBankPhoneVerificationCode: string
  /** 法定代表人 */
  legalPerson: string
  /** 法定代表人 证件号码（身份证 或公司注册时提交的证件号码） */
  legalPersonCardNo: string
  /** 营业执照 文件地址 */
  licenseFileUrl: string
  /** 社会统一信用代码 */
  licenseUnifiedCode: string
  /** 企业名称 */
  name: string
  /** 组织类型：企业-事业单位-其他组织 */
  orgType: string
  /** 统一社会信用代码证书文件地址 */
  unifiedSocialCreditCodeCertificateUrl: string
}
export interface QiYeJianDanRenZheng0 {
  /** 管理员身份证号 */
  adminCardNo: string
  /** 管理员姓名 */
  adminName: string
  /** 授权书文件地址 */
  certificateAuth: string
  /** 授权书审核状态（初始化为待审核，boss系统进行审核更新）-只读 */
  certificateAuthStatus: string
  enterpriseId: number
  /** 企业普通认证记录ID */
  id: number
  /** 单位法人证书文件地址 */
  institutionLegalPersonCertificateUrl: string
  /** 法定代表人个人银行卡号-仅支持一类银联卡 */
  legalBankNo: string
  /** 法定代表人银行预留手机号 */
  legalBankPhone: string
  /** 法定代表人 */
  legalPerson: string
  /** 法定代表人 证件号码（身份证 或公司注册时提交的证件号码） */
  legalPersonCardNo: string
  /** 营业执照 文件地址 */
  licenseFileUrl: string
  /** 社会统一信用代码 */
  licenseUnifiedCode: string
  /** 企业名称 */
  name: string
  /** 组织类型：企业-事业单位-其他组织 */
  orgType: string
  /** 统一社会信用代码证书文件地址 */
  unifiedSocialCreditCodeCertificateUrl: string
}
export interface QiYeZhuTiXinXi {
  area: string
  authStatus: string
  avatar: string
  chiefly: boolean
  city: string
  claimId: string
  contactNumber: string
  country: string
  createId: number
  createName: string
  created: string
  firmSize: string
  id: number
  industryInvolved: string
  introduction: string
  isDelete: number
  legalIdCardBack: string
  legalIdCardFront: string
  legalIdCardNo: string
  legalPerson: string
  licenseUnifiedCode: string
  licenseUnifiedUrl: string
  location: string
  modified: string
  name: string
  province: string
  serialNum: string
  tenantId: number
  updateId: number
  updateName: string
  userId: number
  xmail: string
}
export interface QiYeKaiHuXinXi {
  address: string
  authStatus: string
  createId: number
  createName: string
  created: string
  enterpriseBankCardNo: string
  enterpriseBankCode: string
  enterpriseBankName: string
  enterpriseBasicAccountOpenVoucherId: string
  enterpriseBeneficiaryList: EnterpriseBeneficiaryReq[]
  enterpriseBusinessScope: string
  enterpriseCaElectronicSignature: string
  enterpriseContactIdCardBackId: string
  enterpriseContactIdCardFrontId: string
  enterpriseContactName: string
  enterpriseContactPhone: string
  enterpriseId: number
  enterpriseJoinProtocolId: string
  enterpriseLegalIdCardBackId: string
  enterpriseLegalIdCardFrontId: string
  enterpriseLegalIdCardNo: string
  enterpriseLegalIdCardType: string
  enterpriseLegalIdCardValidDate: string
  enterpriseLegalIdCardValidStartDate: string
  enterpriseLegalName: string
  enterpriseLegalPhone: string
  enterpriseLicenseFileDuplicateId: string
  enterpriseLicenseFileId: string
  enterpriseLicenseName: string
  enterpriseLicenseValidDate: string
  enterpriseLicenseValidStartDate: string
  enterpriseName: string
  enterpriseOpenAccountPermit: string
  enterpriseOpratorAttorneyLetter: string
  enterpriseOpratorIdCardNo: string
  enterpriseOpratorIdCardType: string
  enterpriseOpratorIdCardValidDate: string
  enterpriseOpratorIdCardValidStartDate: string
  enterpriseRealAddress: string
  enterpriseShareholderList: EnterpriseShareholderReq[]
  enterpriseStorePictureId: string
  enterpriseTrade: string
  /** (只读)行业类型-字典值 反显级联名称 */
  enterpriseTradeName: SysDictDuiXiangnullZhiBuXuLieHua
  enterpriseUnifiedCode: string
  enterpriseUpEnterpriseId: number
  /** (只读)母公司enterpriseId对应的企业名称，反显的时候才有 */
  enterpriseUpEnterpriseName: string
  enterpriseUpLegalBasicAccountOpenVoucherId: string
  enterpriseUpLegalEnterpriseUnifiedCode: string
  enterpriseUpLegalIdCardBackId: string
  enterpriseUpLegalIdCardFrontId: string
  enterpriseUpLegalIdCardNo: string
  enterpriseUpLegalIdCardType: string
  enterpriseUpLegalLicenseDuplicateFileId: string
  enterpriseUpLegalLicenseFileId: string
  enterpriseUpLegalLicenseName: string
  enterpriseUpLegalLicenseNo: string
  enterpriseUpLegalLicenseType: string
  enterpriseUpLegalName: string
  id: number
  isDelete: number
  modified: string
  msg: string
  stepNum: number
  updateId: number
  updateName: string
}
export interface QiYeKaiHuXinXi0 {
  address: string
  authStatus: string
  createId: number
  createName: string
  created: string
  enterpriseBankCardNo: string
  enterpriseBankCode: string
  enterpriseBankName: string
  enterpriseBasicAccountOpenVoucherId: string
  enterpriseBeneficiaryList: EnterpriseBeneficiaryResp[]
  enterpriseBusinessScope: string
  enterpriseCaElectronicSignature: string
  enterpriseContactIdCardBackId: string
  enterpriseContactIdCardFrontId: string
  enterpriseContactName: string
  enterpriseContactPhone: string
  enterpriseId: number
  enterpriseJoinProtocolId: string
  enterpriseLegalIdCardBackId: string
  enterpriseLegalIdCardFrontId: string
  enterpriseLegalIdCardNo: string
  enterpriseLegalIdCardType: string
  enterpriseLegalIdCardValidDate: string
  enterpriseLegalIdCardValidStartDate: string
  enterpriseLegalName: string
  enterpriseLegalPhone: string
  enterpriseLicenseFileDuplicateId: string
  enterpriseLicenseFileId: string
  enterpriseLicenseName: string
  enterpriseLicenseValidDate: string
  enterpriseLicenseValidStartDate: string
  enterpriseName: string
  enterpriseOpenAccountPermit: string
  enterpriseOpratorAttorneyLetter: string
  enterpriseOpratorIdCardNo: string
  enterpriseOpratorIdCardType: string
  enterpriseOpratorIdCardValidDate: string
  enterpriseOpratorIdCardValidStartDate: string
  enterpriseRealAddress: string
  enterpriseShareholderList: EnterpriseShareholderResp[]
  enterpriseStorePictureId: string
  enterpriseTrade: string
  /** (只读)行业类型-字典值 反显级联名称 */
  enterpriseTradeName: SysDictDuiXiangnullZhiBuXuLieHua
  enterpriseUnifiedCode: string
  enterpriseUpEnterpriseId: number
  /** (只读)母公司enterpriseId对应的企业名称，反显的时候才有 */
  enterpriseUpEnterpriseName: string
  enterpriseUpLegalBasicAccountOpenVoucherId: string
  enterpriseUpLegalEnterpriseUnifiedCode: string
  enterpriseUpLegalIdCardBackId: string
  enterpriseUpLegalIdCardFrontId: string
  enterpriseUpLegalIdCardNo: string
  enterpriseUpLegalIdCardType: string
  enterpriseUpLegalLicenseDuplicateFileId: string
  enterpriseUpLegalLicenseFileId: string
  enterpriseUpLegalLicenseName: string
  enterpriseUpLegalLicenseNo: string
  enterpriseUpLegalLicenseType: string
  enterpriseUpLegalName: string
  id: number
  isDelete: number
  modified: string
  msg: string
  stepNum: number
  updateId: number
  updateName: string
}
export interface QiYeChaXun {
  /** 区 */
  area: string
  /** 认证状态: 未认证 UNCERTIFICATED, 已认证 CERTIFIED */
  authStatus: string
  /** 企业logo */
  avatar: string
  /** 市 */
  city: string
  /** 联系电话 */
  contactNumber: string
  /** 国家 */
  country: string
  created: boolean
  /** 企业规模 */
  firmSize: string
  /** 所属行业 */
  industryInvolved: string
  /** 企业简介 */
  introduction: string
  /** 用户加入企业状态  */
  joinStatus: string
  /** 法定代表人 */
  legalPerson: string
  /** 企业地址 */
  location: string
  /** 企业名称 */
  name: string
  /** 省 */
  province: string
  /** 租户id */
  tenantId: number
  /** 企业邮箱 */
  xmail: string
}
export interface QiYeChaXun0 {
  /** 企业名称 */
  enterpriseName: string
  /** 企业名称 */
  name: string
}
export interface QiYeZuHuXinXi {
  /** 区 */
  area: string
  /** 认证状态: 未认证 UNCERTIFICATED, 已认证 CERTIFIED */
  authStatus: string
  /** 企业logo */
  avatar: string
  chiefly: boolean
  /** 市 */
  city: string
  /** 联系电话 */
  contactNumber: string
  /** 国家 */
  country: string
  /** 企业规模 */
  firmSize: string
  /** id */
  id: number
  /** 所属行业 */
  industryInvolved: string
  /** 企业简介 */
  introduction: string
  /** 法定代表人 */
  legalPerson: string
  licenseUnifiedCode: string
  licenseUnifiedUrl: string
  /** 企业地址 */
  location: string
  /** 企业名称 */
  name: string
  /** 省 */
  province: string
  /** 公司编号 */
  serialNum: string
  /** 租户ID */
  tenantId: number
  /** 企业邮箱 */
  xmail: string
}
export interface QiYeZuHuXinXiXiangQing {
  /** 区 */
  area: string
  /** 企业logo */
  avatar: string
  /** 市 */
  city: string
  /** 联系电话 */
  contactNumber: string
  /** 国家 */
  country: string
  /** 企业规模 */
  firmSize: string
  /** id */
  id: number
  /** 所属行业 */
  industryInvolved: string
  /** 企业简介 */
  introduction: string
  /** 法定代表人 */
  legalPerson: string
  /** 企业地址 */
  location: string
  /** 企业名称 */
  name: string
  /** 省 */
  province: string
  /** 企业邮箱 */
  xmail: string
}
export interface QiYeZuHuXinXiXiangQing0 {
  /** 区 */
  area: string
  /** 认证状态: 未认证 UNCERTIFICATED, 已认证 CERTIFIED */
  authStatus: string
  /** 企业logo */
  avatar: string
  /** 市 */
  city: string
  /** 联系电话 */
  contactNumber: string
  /** 国家 */
  country: string
  /** 企业规模 */
  firmSize: string
  /** id */
  id: number
  /** 所属行业 */
  industryInvolved: string
  /** 是否创建人 */
  init: boolean
  /** 企业简介 */
  introduction: string
  /** 法定代表人 */
  legalPerson: string
  /** 企业地址 */
  location: string
  /** 企业名称最大修改次数 */
  maxNameUpdateNum: number
  /** 企业名称 */
  name: string
  /** 企业名称修改次数 */
  nameUpdateNum: number
  /** 省 */
  province: string
  /** 租户id */
  tenantId: number
  /** 企业邮箱 */
  xmail: string
}
export interface XiuGaiGeRenXinXi {
  /** 区 */
  area: string
  /** 用户头像 */
  avatar: string
  /** 市 */
  city: string
  /** 国家 */
  country: string
  /** 详细地址 */
  location: string
  /** 用户昵称 */
  nickname: string
  /** 省 */
  province: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex: string
  /** 用户名 */
  username: string
  /** 邮箱 */
  xmail: string
}
export interface XiuGaiMiMa {
  /** 校验新加密密码 */
  checkPassWord: string
  /** 手机号 */
  mobile: string
  /** 旧加密密码 */
  oldPassword: string
  /** 新加密密码 */
  passWord: string
  /** 滑块验证唯一标示 */
  uuid: string
  /** 验证码 */
  verificationCode: string
}
export interface GongSiGuanLianFaQiGuanLianXinXi {
  /** 申请人 */
  applyName: string
  /** 申请人手机号 */
  applyPhone: string
  /** 申请时间 */
  applyTime: string
  /** 负责人 */
  headerName: string
  /** 负责人手机号 */
  headerPhone: string
  /** 发起时间 */
  initTime: string
  /** 邀请人 */
  inviteName: string
  /** 邀请人手机号 */
  invitePhone: string
  /** 邀请来源 系统自动关联：系统触发，邀请关联：系统 */
  inviteSource: string
  /** 邀请时间 */
  inviteTime: string
  /** 被邀请人 */
  invitedName: string
  /** 被邀请人手机号 */
  invitedPhone: string
  /** 发起方式 BIZ("业务发起关联"),    APPLY("申请关联"),    INVITE("邀请关联") */
  sourceEnum: string
  /** 触发时间 */
  triggerTime: string
}
export interface GongSiGuanLianYouGuanLianShenHeXinXi {
  /** 审核状态 WAIT("待审核"),    PASS("审核通过"),    NO_PASS("审核不通过"), */
  auditStatus: string
  /** 审核时间 */
  auditTime: string
  /** 审核人 */
  name: string
  /** 原因 */
  reason: string
}
export interface GuanLianGongSiLieBiao {
  /** 关联中公司 */
  inRelateCount: number
  /** 关联失效公司 */
  invalidRelateCount: number
  /** 列表 */
  list: ComPageRelationEnterpriseInfo
  /** 全部公司 */
  totalCount: number
  /** 未关联公司 */
  unRelateCount: number
}
export interface GuanLianGongSiXiangQing {
  /** 审核状态 */
  auditStatus: string
  /** 授权成员数量 */
  authCount: number
  /** 关联建立时间 */
  created: string
  /** 覆盖部门数量 */
  deptCount: number
  /** id */
  id: number
  /** 上级公司信息 */
  preReEnterpriseInfo: ReEnterpriseInfo
  /** 公司信息 */
  reEnterpriseInfo: ReEnterpriseInfo
  /** 关联来源 为空时无关联,BIZ("业务发起关联"),    APPLY("申请关联"),    INVITE("邀请关联") */
  reEnterpriseSource: string
  /** 审核信息，有关联时有值 */
  relationAuditInfo: GongSiGuanLianYouGuanLianShenHeXinXi
  /** 关联信息 */
  relationInfo: GongSiGuanLianFaQiGuanLianXinXi
  /** 关联状态  IN_RELATION("关联中"),    UN_RELATION("未关联"),    FAIL_RELATION("关联失败"),    INVALID_RELATION("关联失效") */
  relationStatus: string
  /** 关联业务列表 */
  relationTypeList: RelationBusinessTypeInfo[]
  /** 最新同步时间 */
  syncTime: string
}
export interface GuanLianShenHeXinXi {
  /** 审核区分     UNAUDITED("未审核"),
    REVIEWED("已审核"), */
  auditClassificationEnum: string
  /** 审核结果 */
  auditStatus: string
  /** 分院名称 */
  branchName: string
  /** 营业执照URL，如有营业执照则不为空 */
  businessLicenseUrl: string
  /** 发起时间 */
  created: string
  /** 加盟公司名称 */
  franchiseEnterpriseName: string
  /** 负责人 */
  headerName: string
  /** 负责人电话 */
  headerPhone: string
  /** 公司关联记录ID */
  id: number
  /** 关联状态 */
  relationStatus: string
  /** 公司编码 */
  serialNo: string
  /** 发起方式-    FRANCHISE("加盟自动关联"),
    APPLY("申请关联"),
    INVITE("邀请关联"), */
  source: string
}
export interface FenYeChaXunGeRenZiZhi {
  /** 证书编号 */
  credentialNo: string
  /** 证书类型 */
  credentialType: string
  page: number
  size: number
}
export interface FenYeChaXunSuoYouQiYe {
  /** 企业名称 */
  name: string
  page: number
  size: number
}
export interface QieHuanMoRenDiZhi {
  /** 切换的默认地址id */
  newAddressId: number
}
export interface ChuangJianQiYe {
  /** 区 */
  area: string
  /** 市 */
  city: string
  /** 国家 */
  country: string
  /** 企业地址 */
  location: string
  /** 企业名称 */
  name: string
  /** 省 */
  province: string
}
export interface FaPiaoGuanLi {
  /** 发证日期 */
  bank: string
  /** 银行账号 */
  bankAccNo: string
  /** 税号 */
  dutyNum: string
  /** 企业地址 */
  enterpriseAddress: string
  /** 企业电话 */
  enterpriseMobile: string
  /** 更新时传入 */
  id: number
  /** 发票抬头 */
  title: string
  /** 发票类型 UNIT-个人或事业单位 ENTERPRISE-企业 */
  type: string
}
export interface FaPiaoGuanLi0 {
  /** 发证日期 */
  bank: string
  /** 银行账号 */
  bankAccNo: string
  /** 税号 */
  dutyNum: string
  /** 企业地址 */
  enterpriseAddress: string
  /** 企业电话 */
  enterpriseMobile: string
  /** id */
  id: number
  /** 发票抬头 */
  title: string
  /** 发票类型 UNIT-个人或事业单位 ENTERPRISE-企业 */
  type: string
}
export interface ShenHeTongJiHuanCunSanShiMiao {
  /** 已审核总数 */
  reviewedNum: number
  /** 未审核总数 */
  unauditedNum: number
}
export interface ShenHeTongGuo {
  /** 部门id */
  deptId: number
  /** 审核记录id */
  id: number
  /** 申请人id */
  proposerId: number
  /**  申请人/被邀请人 姓名 */
  proposerName: string
  /** 申请人/被邀请人 手机号 */
  proposerPhone: string
  /** 权限id列表 */
  roleId: number[]
}
export interface ZhaoHuiMiMa {
  /** 校验新加密密码 */
  checkPassWord: string
  /** 手机号 */
  mobile: string
  /** 新加密密码 */
  passWord: string
  /** 滑块验证唯一标示 */
  uuid: string
  /** 验证码 */
  verificationCode: string
}
export interface ShouQuanZhongXinChaXunGuoLvTiaoJian {
  /** 授权还是取消授权 */
  authFlag: boolean
  /** 要授权的业务类型-菜花钱包 e签宝  发票等 */
  certType: string
  /** 部门名称模糊搜索？ */
  deptName: number
  /** 员工ID列表 */
  employeeIds: number[]
  /** 员工手机 模糊搜索 */
  employeeMobile: string
  /** 员工姓名 模糊搜索 */
  employeeName: string
  /** 企业ID */
  enterpriseId: number
  page: number
  size: number
}
export interface ShouQuanRuCan {
  /** 渠道类型：DINGDING-钉钉，CORP_WEIXIN-企微 */
  channelType: string
  /** 用户授权回调携带的code */
  code: string
  /** 钉钉的corpId */
  corpId: string
  /** 重定向地址 */
  redirectUri: string
  /** 自定义参数(重定向时携带此参数) */
  state: string
}
export interface ShouQuanShenHe {
  /** 关联记录ID-兼容多个 */
  ids: number[]
  /** 审核不通过原因必传,批量审核使用一个即可，最大200字符 */
  reason: string
}
export interface ShouQuanShenHe0 {
  /** 审核详情列表 */
  list: ComPageShouQuanShenHe
  /** 已审核总数 */
  reviewedNum: number
  /** 未审核总数 */
  unauditedNum: number
}
export interface ShouQuanShenHe1 {
  /** 审核人 */
  auditName: string
  /** 审核状态 WAIT("待审核"),    PASS("审核通过"),    NO_PASS("审核不通过") */
  auditStatus: string
  /** 审核时间 */
  auditTime: string
  /** 授权状态 UN_AUTH("未授权"),    WAIT_AUTH("待授权"),    IN_AUTH("已授权"),    FAIL_AUTH("授权失败") */
  authStatusEnum: string
  /** 所属公司 */
  belongEnterprise: string
  /** id */
  id: number
  /** 发起时间 */
  initTime: string
  /** 主属部门 */
  mainDep: string
  /** 姓名 */
  name: string
  /** 手机号 */
  phone: string
  /** 拒绝理由 */
  refuseReason: string
  /** 授权发起来源 BIZ("业务发起关联"),    APPLY("申请关联"),    INVITE("邀请关联") */
  source: string
}
export interface ShouQuanShenHeLieBiao {
  /** 授权成员数量 */
  authCount: number
  /** 分院名称 */
  branchName: string
  /** 分院名称 */
  branchSerialNo: string
  /** 公司名称 */
  enterpriseName: string
  /** 负责人 */
  headerName: string
  /** 负责人电话 */
  headerPhone: string
  /** id */
  id: number
  /** 关联状态 IN_RELATION("关联中"),    UN_RELATION("未关联"),    FAIL_RELATION("关联失败"),    INVALID_RELATION("关联失效") */
  relationStatus: string
  /** 公司编码 */
  serialNo: string
  /** 待授权成员数量 */
  waitAuthCount: number
}
export interface ShuJuYiZhiXingErCiQueRenCanShu {
  /** 数据Id */
  dataId: number
  dataSyncSystemReqs: ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingDeCaoZuo[]
  serialNumber: number
}
export interface ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingDeCaoZuo {
  /** 数据处理方案 */
  resultHandleTypeEnum: string
  /** 转移数据Id */
  shiftDataId: number
  /** 系统名称 */
  systemName: string
}
export interface ShuJuYiZhiXingCaoZuoFanHuiJieGuo {
  /** 校验结果 */
  result: XiaoYanJieGuo[]
  /** 流水号 */
  serialNumber: number
}
export interface WenJianShangChuanXiangYing {
  /** CDN加速完整url */
  cdnDomain: string
  /** 失败信息 */
  errorMsg: string
  /** 文件系统id */
  id: number
  /** 文件名 */
  name: string
  /** 文件在对象存储的objectKey */
  objectKey: string
  /** 上传结果 */
  uploadResult: boolean
  /** 文件完整的访问url */
  url: string
}
export interface XiaoYanJieGuo {
  /** 处理方案 */
  dataSyncHandleTypeEnum: string
  /** 校验失败描述 */
  failedMessage: string
  /** 返回的校验结果 */
  resultFlag: boolean
  /** 跳转URL */
  skipUrl: string
  /** 系统名称 */
  systemName: string
  /** 系统中文名称 */
  systemNameStr: string
}
export interface JianChaYaoQingMa {
  /** 提示 */
  msg: string
  /** 租户名称 */
  tenantName: string
}
export interface ZhuCeQingQiu {
  /** 校验加密密码 */
  checkPassWord: string
  clientType: string
  clientVersion: string
  deviceCode: string
  deviceManufacturer: string
  deviceModel: string
  /** 手机号 */
  mobile: string
  /** 加密密码 */
  passWord: string
  /** 滑块验证唯一标示 */
  uuid: string
  /** 验证码 */
  verificationCode: string
}
export interface TianJiaGeRenZiZhi {
  /** 附件 */
  attachments: Attachment[]
  /** 证书编号 */
  credentialNo: string
  /** 证书类型 */
  credentialType: string
  /** 唯一id */
  id: number
  /** 行业分类 */
  industryType: string
  /** 发证日期 */
  issueDate: string
  /** 注册专业 */
  majors: GeRenZiZhiZhuCeZhuanYe[]
  /** 发证机关 */
  office: string
  /** 注册编号 */
  registerNo: string
  /** 资质范围 */
  scope: string
  /** 来源 CREATE-个人上传 BIGDATA-大数据认领 */
  source: string
}
export interface TianJiaGeRenZiZhi0 {
  /** 附件 */
  attachment: string
  attachments: Attachment[]
  /** 证书编号 */
  credentialNo: string
  /** 证书类型 */
  credentialType: string
  /** 行业分类 */
  industryType: string
  /** 发证日期 */
  issueDate: string
  /** 注册专业 */
  majors: GeRenZiZhiZhuCeZhuanYe[]
  /** 发证机关 */
  office: string
  /** 注册编号 */
  registerNo: string
  /** 资质范围 */
  scope: string
  /** 来源 */
  source: string
}
export interface QuDaoQiYeBangDingQingQiuRuCan {
  /** 渠道企业id */
  channelCorpId: string
  /** 渠道类型 */
  channelType: string
  /** 用户的钉钉Id */
  dingId: string
  /** 员工Id */
  employeeId: number
  /** 租户id */
  tenantId: number
  /** 用户id */
  userId: number
}
export interface ShengChengYaoQing {
  /** 是否审核 0否 1是 */
  audit: boolean
  /** 部门code */
  deptId: number
  /** 邀请方式 */
  inviteShareType: string
}
export interface ShengChengYaoQing0 {
  /** 批次号 */
  batchId: string
  /** 部门code */
  deptCode: number
  /** 邀请人id */
  inviterId: number
  /** 邀请人姓名 */
  inviterName: string
  /** 分享标示 code码/链接地址/二维码地址 */
  shareMark: string
  /** 分享时间 */
  shareTime: string
  /** INCODE 邀请码 LINK 链接 QRCODE 二维码 */
  shareType: string
  /** 租户名称 */
  tenantName: string
}
export interface ZuHuXinXi {
  /** 认证状态: 未认证 UNCERTIFICATED, 已认证 CERTIFIED */
  authStatus: string
  /** 是否绑定渠道 */
  channelBindStatus: string
  /** 渠道corpId */
  channelCorpId: string
  /** 渠道类型 */
  channelType: string
  /** 是否选中 */
  checked: boolean
  /** 设备类型 */
  clientType: string
  /** 当前租户下员工状态  NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  employeeStatus: string
  /** 是否为创建人 ture-是 false-否 */
  init: boolean
  /** 租户类型,ENTERPRISE 企业租户,PERSON 个人租户,PLATFORM 平台租户 */
  kind: string
  /** 关联关系：CREATE:自建，INVITE:邀请加入，ADD:主动加入，FRANCHISE:加盟 */
  relation: string
  /** 租户状态（NORMAL正常 STOP停用） */
  status: string
  /** 租户id */
  tenantId: number
  /** 租户名称 */
  tenantName: string
  /** 租户创建者id,不是员工id */
  userId: number
}
export interface ZuHuShouHuoDiZhiTianJia {
  /** 区 */
  area: string
  /** 0-否 1-默认 */
  checked: boolean
  /** 市 */
  city: string
  /** 国家 */
  country: string
  /** 详细地址 */
  location: string
  /** 收货人手机号 */
  mobile: string
  /** 收货人姓名 */
  name: string
  /** 省 */
  province: string
}
export interface ZuHuShouHuoDiZhiTianJia0 {
  /** 区 */
  area: string
  /** 0-否 1-默认 */
  checked: boolean
  /** 市 */
  city: string
  /** 国家 */
  country: string
  /** 唯一id */
  id: number
  /** 详细地址 */
  location: string
  /** 收货人手机号 */
  mobile: string
  /** 收货人姓名 */
  name: string
  /** 省 */
  province: string
}
export interface RenZhengQuDaoZhuangTaiChaXun {
  /** 请求三方唯一id */
  certifyId: string
  /** 认证类别 */
  clazz: string
  /** 认证费用 */
  cost: string
  /** 服务功能 */
  function: string
  /** 认证机构 */
  institution: string
  /** 认证后权益 */
  interests: string
  /** 标示 */
  mark: string
  /** 名称 */
  name: string
  /** 认证状态 uncertified-未认证 FAILD-失败 UNDERWAY-认领中 */
  status: string
}
export interface YaoQingZhuCe {
  /** 邀请码 */
  inviteCode: string
  /** 0-免审核  1-申请提交 */
  inviteStatus: number
  /** 手机号 */
  mobile: string
  /** 提示 */
  msg: string
}
export interface YaoQingZhuCe0 {
  /** 邀请码 */
  inviteCode: string
}
