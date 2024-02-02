function AccInfoResp() {
  return {
    mobile: '@string(5,50)',
    name: '@ctitle(5,10)',
  }
}
function AddOrUpdateCredentialReq() {
  return {
    'attachments|1-20': [Attachment()],
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    credentialTypeCode: '@string(5,50)',
    id: '@guid',
    issuingDate: '@datetime',
    office: '@string(5,50)',
    scope: '@string(5,50)',
    scopeCode: '@string(5,50)',
    source: '@string(5,50)',
    validDate: '@datetime',
  }
}
function AddOrUpdateInviteSetReq() {
  return {
    audit: '@boolean',
    'auditorIds|1-20': ['@string(5,50)'],
    id: '@guid',
    open: '@boolean',
    shareType: '@string(5,50)',
  }
}
function AddOrUpdateJobReq() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
    orderNum: '@integer(3,1000)',
    parentId: '@guid',
  }
}
function AddVerificationImageReq() {
  return {
    name: '@ctitle(5,10)',
    resource: '@string(5,50)',
    sourceEnum: /RESOURCE|SLIDER/,
  }
}
function AgentConfigResp() {
  return {
    agentId: '@guid',
    corpId: '@guid',
    nonceStr: '@string(5,50)',
    signature: '@string(5,50)',
    timestamp: '@datetime',
  }
}
function AliMpLoginReq() {
  return {
    appid: '@guid',
    clientType: /ALI_MP|ANDROID|DEVICE_END|H5|IOS|MOBILE_END|PC|WECHAT_MP/,
    clientVersion: '@string(5,50)',
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    phoneData: '@integer(13100000000,18999999999)',
    sign: '@string(5,50)',
  }
}
function ApiResponse() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseAccInfoResp() {
  return {
    code: 200,
    data: AccInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseAgentConfigResp() {
  return {
    code: 200,
    data: AgentConfigResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseChannelAppGratefulConfigResp() {
  return {
    code: 200,
    data: ChannelAppGratefulConfigResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseChannelKeyBorardResp() {
  return {
    code: 200,
    data: ChannelKeyBorardResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComLoginResp() {
  return {
    code: 200,
    data: ComLoginResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageDesktopAddRecordResp() {
  return {
    code: 200,
    data: ComPageDesktopAddRecordResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageDesktopComplexResp() {
  return {
    code: 200,
    data: ComPageDesktopComplexResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageDesktopResp() {
  return {
    code: 200,
    data: ComPageDesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageDoorCredentialResp() {
  return {
    code: 200,
    data: ComPageDoorCredentialResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageDoorIdentificationResp() {
  return {
    code: 200,
    data: ComPageDoorIdentificationResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageEpDesktopResp() {
  return {
    code: 200,
    data: ComPageEpDesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageInviteDesktopResp() {
  return {
    code: 200,
    data: ComPageInviteDesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageLogLoginResp() {
  return {
    code: 200,
    data: ComPageLogLoginResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageZhiXieChangChuXing() {
  return {
    code: 200,
    data: ComPageZhiXieChangChuXing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageGuanLianShenHeXinXi() {
  return {
    code: 200,
    data: ComPageGuanLianShenHeXinXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageXiaoYuanZhuoGuanLi() {
  return {
    code: 200,
    data: ComPageXiaoYuanZhuoGuanLi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageBiXieDaoYongDao() {
  return {
    code: 200,
    data: ComPageBiXieDaoYongDao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageTianJiaDouJiangJiBeiJing() {
  return {
    code: 200,
    data: ComPageTianJiaDouJiangJiBeiJing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageFangDongShouHuoDiZhiTianJia() {
  return {
    code: 200,
    data: ComPageFangDongShouHuoDiZhiTianJia(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseCorpWehiallAuthUrlResp() {
  return {
    code: 200,
    data: CorpWehiallAuthUrlResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseCurrentAuthResp() {
  return {
    code: 200,
    data: CurrentAuthResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseWhiteDetailResp() {
  return {
    code: 200,
    data: WhiteDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseWhiteLinkDoorResp() {
  return {
    code: 200,
    data: WhiteLinkDoorResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseDescribeFaceVerifyResponse() {
  return {
    code: 200,
    data: DescribeFaceVerifyResponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseDesktopAllInfoResp() {
  return {
    code: 200,
    data: DesktopAllInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseDesktopNoActiveResp() {
  return {
    code: 200,
    data: DesktopNoActiveResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseDesktopResp() {
  return {
    code: 200,
    data: DesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseEntReSetResp() {
  return {
    code: 200,
    data: EntReSetResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHeaderEmpowerSmsInfo() {
  return {
    code: 200,
    data: HeaderEmpowerSmsInfo(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseImportDesktopResp() {
  return {
    code: 200,
    data: ImportDesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseInviteDoorReInfo() {
  return {
    code: 200,
    data: InviteDoorReInfo(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseInviteJoinEchoResp() {
  return {
    code: 200,
    data: InviteJoinEchoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseInviteLoginResp() {
  return {
    code: 200,
    data: InviteLoginResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseInviteSetResp() {
  return {
    code: 200,
    data: InviteSetResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseJSONArray() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseJudgeSwitchDoorLimitResp() {
  return {
    code: 200,
    data: JudgeSwitchDoorLimitResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListAuthDoorOrgInfoResp() {
  return {
    code: 200,
    'data|1-20': [AuthDoorOrgInfoResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListWhiteResp() {
  return {
    code: 200,
    'data|1-20': [WhiteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListEmpowerWhiteResp() {
  return {
    code: 200,
    'data|1-20': [EmpowerWhiteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListEpEntTreeResp() {
  return {
    code: 200,
    'data|1-20': [EpEntTreeResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListExtWhiteResp() {
  return {
    code: 200,
    'data|1-20': [ExtWhiteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListImportDesktopResp() {
  return {
    code: 200,
    'data|1-20': [ImportDesktopResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListMenuResp() {
  return {
    code: 200,
    'data|1-20': [MenuResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListPostResp() {
  return {
    code: 200,
    'data|1-20': [PostResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListQueryCatPageHomeResp() {
  return {
    code: 200,
    'data|1-20': [QueryCatPageHomeResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListPinkInfo() {
  return {
    code: 200,
    'data|1-20': [PinkInfo()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListPinkResq() {
  return {
    code: 200,
    'data|1-20': [PinkResq()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListSelectorDesktopResp() {
  return {
    code: 200,
    'data|1-20': [SelectorDesktopResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListSuperManResp() {
  return {
    code: 200,
    'data|1-20': [SuperManResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    code: 200,
    'data|1-20': [SysDictDuiXiangnullZhiBuXuLieHua()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListTreelong() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListlong() {
  return {
    code: 200,
    'data|1-20': ['@string(5,50)'],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListstring() {
  return {
    code: 200,
    'data|1-20': ['@string(5,50)'],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListZhiXieChangChuXing() {
  return {
    code: 200,
    'data|1-20': [ZhiXieChangChuXing()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListZhiXieChangFangDongXinXi() {
  return {
    code: 200,
    'data|1-20': [ZhiXieChangFangDongXinXi()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListWenJianShangChuanXiangYing() {
  return {
    code: 200,
    'data|1-20': [WenJianShangChuanXiangYing()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListShengChengYaoQing() {
  return {
    code: 200,
    'data|1-20': [ShengChengYaoQing0()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListFangDongXinXi() {
  return {
    code: 200,
    'data|1-20': [FangDongXinXi()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListFangXingQuDaoZhuangTaiChuXing() {
  return {
    code: 200,
    'data|1-20': [FangXingQuDaoZhuangTaiChuXing()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseMapstringobject() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseMapstringstring() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseMenuCheckedResp() {
  return {
    code: 200,
    data: MenuCheckedResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseMenuResp() {
  return {
    code: 200,
    data: MenuResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseOcrHappyLicenseBO() {
  return {
    code: 200,
    data: OcrHappyLicenseBO(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseOcrIdCardBackResp() {
  return {
    code: 200,
    data: OcrIdCardBackResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseOcrIdCardFrontResp() {
  return {
    code: 200,
    data: OcrIdCardFrontResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    code: 200,
    data: PageSysDictDuiXiangnullZhiBuXuLieHua(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponsePageZhiXieChangBoJuZiXinXi() {
  return {
    code: 200,
    data: PageZhiXieChangBoJuZiXinXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseQueryAccInfoResp() {
  return {
    code: 200,
    data: QueryAccInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseQueryCertFormResp() {
  return {
    code: 200,
    data: QueryCertFormResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseQueryDoorPageHomeResp() {
  return {
    code: 200,
    data: QueryDoorPageHomeResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseQueryJudgeClaimResp() {
  return {
    code: 200,
    data: QueryJudgeClaimResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseQueryWalletBalanceResp() {
  return {
    code: 200,
    data: QueryWalletBalanceResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseOrangeerResultResp() {
  return {
    code: 200,
    data: OrangeerResultResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponsePinkInfoResq() {
  return {
    code: 200,
    data: PinkInfoResq(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseScanReQrResp() {
  return {
    code: 200,
    data: ScanReQrResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseSendActiveMessageResp() {
  return {
    code: 200,
    data: SendActiveMessageResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseShiftDesktopResp() {
  return {
    code: 200,
    data: ShiftDesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseVerificationResp() {
  return {
    code: 200,
    data: VerificationResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseVoid() {
  return {
    code: 200,
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseboolean() {
  return {
    code: 200,
    data: '@boolean',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponselong() {
  return {
    code: 200,
    data: '@string(5,50)',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponsestring() {
  return {
    code: 200,
    data: '@string(5,50)',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseDouJiangJiFangDongXinXiXiangQingBiao() {
  return {
    code: 200,
    data: DouJiangJiFangDongXinXiXiangQingBiao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseDouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu() {
  return {
    code: 200,
    data: DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseDouJiangJiFangXingXinXi() {
  return {
    code: 200,
    data: DouJiangJiFangXingXinXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseZhiXieChangJianDanFangXing() {
  return {
    code: 200,
    data: ZhiXieChangJianDanFangXing0(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseZhiXieChangZhuTiXinXi() {
  return {
    code: 200,
    data: ZhiXieChangZhuTiXinXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseZhiXieChangBoJuZiXinXi() {
  return {
    code: 200,
    data: ZhiXieChangBoJuZiXinXi0(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseZhiXieChangFangDongXinXiXiangQing() {
  return {
    code: 200,
    data: ZhiXieChangFangDongXinXiXiangQing0(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseGuanLianMaoZiYongDao() {
  return {
    code: 200,
    data: GuanLianMaoZiYongDao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseGuanLianMaoZiXiangQing() {
  return {
    code: 200,
    data: GuanLianMaoZiXiangQing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseShenHeTongJiHuanCunSanShiMiao() {
  return {
    code: 200,
    data: ShenHeTongJiHuanCunSanShiMiao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseBiXieDao() {
  return {
    code: 200,
    data: BiXieDao0(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo() {
  return {
    code: 200,
    data: ShuJuYiZhiXingCaoZuoFanHuiJieGuo(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseJianChaYaoQingMa() {
  return {
    code: 200,
    data: JianChaYaoQingMa(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseFangDongXinXi() {
  return {
    code: 200,
    data: FangDongXinXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseYaoQingZhuCe() {
  return {
    code: 200,
    data: YaoQingZhuCe(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function Attachment() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
    type: '@string(5,50)',
    url: '@url',
  }
}
function AuditRelationTotalReq() {
  return {
    endTime: '@datetime',
    startTime: '@datetime',
  }
}
function AuditorInfo() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
function AuthDoorOrgInfoResp() {
  return {
    authCount: '',
    authStatus: '@string(5,50)',
    authTypeMap: '',
    chiefly: '@boolean',
    whiteChildrenDesktopCount: '@string(5,50)',
    whiteLinkDoorResp: WhiteLinkDoorResp(),
    id: '@guid',
    licenseUnifiedCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    serialNum: '@string(5,50)',
  }
}
function AuthOrgKeyBorardReq() {
  return {
    authFlag: '@boolean',
    certType: /AL_TICKET|COMMON|ESIGN_ALL|ESIGN_ONLY_SIGN|WALLET/,
    whiteId: '@guid',
    'desktopIds|1-20': ['@string(5,50)'],
    doorId: '@guid',
  }
}
function BasePageReq() {
  return {
    page: '@integer(3,1000)',
    size: '20',
  }
}
function ChannelAppGratefulConfigAddReq() {
  return {
    aesKey: '@string(5,50)',
    aesToken: '@string(5,50)',
    agentId: '@guid',
    appKey: '@string(5,50)',
    appSecret: '@string(5,50)',
    channelType: '@string(5,50)',
    corpId: '@guid',
  }
}
function ChannelAppGratefulConfigResp() {
  return {
    aesKey: '@string(5,50)',
    aesToken: '@string(5,50)',
    agentId: '@guid',
    appKey: '@string(5,50)',
    appSecret: '@string(5,50)',
    appUrl: '@image(200x100, @color, @color)',
    channelType: '@string(5,50)',
    corpId: '@guid',
    id: '@guid',
    manUrl: '@image(200x100, @color, @color)',
    outIp: '@string(5,50)',
    pcUrl: '@image(200x100, @color, @color)',
    recUrl: '@image(200x100, @color, @color)',
    gratefulId: '@guid',
  }
}
function ChannelAppGratefulConfigUpReq() {
  return {
    aesKey: '@string(5,50)',
    aesToken: '@string(5,50)',
    agentId: '@guid',
    appKey: '@string(5,50)',
    appSecret: '@string(5,50)',
    channelType: '@string(5,50)',
    corpId: '@guid',
    id: '@guid',
    gratefulId: '@guid',
  }
}
function ChannelComLoginReq() {
  return {
    blue: '@string(5,50)',
    certificate: '@string(5,50)',
    channelCorpId: '@guid',
    channelDesktopId: '@guid',
    channelType: '@string(5,50)',
    clientType: /ALI_MP|ANDROID|DEVICE_END|H5|IOS|MOBILE_END|PC|WECHAT_MP/,
    clientVersion: '@string(5,50)',
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    loginModeEnum:
      /CORP_WEIXIN|DINGDING|MOBILE_CODE_FAST|ONE_CLICK|PASSWORD|TOKEN|VERIFICATION_CODE|WECHAT|WECHAT_FAST/,
    uuid: '@guid',
  }
}
function ChannelKeyBorardResp() {
  return {
    channelCorpId: '@guid',
    channelDesktopId: '@guid',
    channelType: '@string(5,50)',
  }
}
function CharSequence() {}
function ComLoginReq() {
  return {
    blue: '@string(5,50)',
    certificate: '@string(5,50)',
    clientType: /ALI_MP|ANDROID|DEVICE_END|H5|IOS|MOBILE_END|PC|WECHAT_MP/,
    clientVersion: '@string(5,50)',
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    loginModeEnum:
      /CORP_WEIXIN|DINGDING|MOBILE_CODE_FAST|ONE_CLICK|PASSWORD|TOKEN|VERIFICATION_CODE|WECHAT|WECHAT_FAST/,
    uuid: '@guid',
  }
}
function ComLoginResp() {
  return {
    code: 200,
    newKeyBorard: '@boolean',
    setPassWord: '@boolean',
    token: '@string(5,50)',
    tokenTimeOut: '@datetime',
  }
}
function ComPage() {
  return {
    current: '@string(5,50)',
    'records|1-20': [''],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageDesktopAddRecordResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DesktopAddRecordResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageDesktopComplexResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DesktopComplexResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageDesktopResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DesktopResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageDoorCredentialResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DoorCredentialResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageDoorIdentificationResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DoorIdentificationResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageEpDesktopResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [EpDesktopResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageInviteDesktopResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [InviteDesktopResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageLogLoginResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [LogLoginResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageRelationDoorInfo() {
  return {
    current: '@string(5,50)',
    'records|1-20': [RelationDoorInfo()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageZhiXieChangChuXing() {
  return {
    current: '@string(5,50)',
    'records|1-20': [ZhiXieChangChuXing()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageGuanLianShenHeXinXi() {
  return {
    current: '@string(5,50)',
    'records|1-20': [GuanLianShenHeXinXi()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageXiaoYuanZhuoGuanLi() {
  return {
    current: '@string(5,50)',
    'records|1-20': [XiaoYuanZhuoGuanLi0()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageBiXieDao() {
  return {
    current: '@string(5,50)',
    'records|1-20': [BiXieDao1()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageBiXieDaoYongDao() {
  return {
    current: '@string(5,50)',
    'records|1-20': [BiXieDaoYongDao()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageTianJiaDouJiangJiBeiJing() {
  return {
    current: '@string(5,50)',
    'records|1-20': [TianJiaDouJiangJiBeiJing()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageFangDongShouHuoDiZhiTianJia() {
  return {
    current: '@string(5,50)',
    'records|1-20': [FangDongShouHuoDiZhiTianJia0()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function CompanyInfo() {
  return {
    belongOrg: '@string(5,50)',
    bondType: '@string(5,50)',
    happyScope: '@string(5,50)',
    happyTerm: '@string(5,50)',
    category: '@string(5,50)',
    checkDate: '@datetime',
    city: '@city',
    companyId: '@guid',
    companyName: '@ctitle(5,10)',
    companyScore: '@string(5,50)',
    companyType: '@string(5,50)',
    contributedCapital: '@string(5,50)',
    createTime: '@datetime',
    creditCode: '@string(5,50)',
    district: '@string(5,50)',
    emails: '@email',
    estiblishTime: '@datetime',
    firstPosition: '@string(5,50)',
    labelListV2: '@string(5,50)',
    logo: '@string(5,50)',
    nameen: '@ctitle(5,10)',
    newtestName: '@ctitle(5,10)',
    orgNumber: '@string(5,50)',
    phoneNum: '@integer(13100000000,18999999999)',
    province: '@province',
    regCapital: '@string(5,50)',
    regLocation: '@string(5,50)',
    regNumber: '@string(5,50)',
    regStatus: '@string(5,50)',
    socialStaffNum: '@string(5,50)',
    staffSize: '@string(5,50)',
    taxCode: '@string(5,50)',
    taxpayerQualification: '@string(5,50)',
    updateTime: '@datetime',
    websites: '@string(5,50)',
  }
}
function Comparableobject() {}
function CorpWehiallAuthUrlResp() {
  return {
    authUrl: '@image(200x100, @color, @color)',
  }
}
function CurrentAuthResp() {
  return {
    'menuRoute|1-20': [RouterResp()],
    'permission|1-20': ['@string(5,50)'],
  }
}
function WhiteAddReq() {
  return {
    whiteName: '@ctitle(5,10)',
    leaderDesktopId: '@guid',
    mark: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentId: '@guid',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
  }
}
function WhiteDetailResp() {
  return {
    ancestors: '@string(5,50)',
    channelWhiteName: '@ctitle(5,10)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    email: '@email',
    id: '@guid',
    leaderDesktopId: '@guid',
    leaderDesktopInfo: DesktopComplexResp(),
    mark: '@string(5,50)',
    markDesc: '@string(5,50)',
    modified: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    parentName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    scaleTypeDesc: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function WhiteLinkDoorReq() {
  return {
    whiteId: '@guid',
    doorId: '@guid',
    overFlag: '@boolean',
  }
}
function WhiteLinkDoorResp() {
  return {
    ancestors: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    email: '@email',
    doorId: '@guid',
    id: '@guid',
    leaderDesktopId: '@guid',
    leaderKeyBorardId: '@guid',
    linkStatus: '@boolean',
    mark: '@string(5,50)',
    markDesc: '@string(5,50)',
    modified: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    phone: '@integer(13100000000,18999999999)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    scaleTypeDesc: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    gratefulId: '@guid',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function WhiteResp() {
  return {
    ancestors: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    email: '@email',
    id: '@guid',
    leaderDesktopId: '@guid',
    leaderKeyBorardId: '@guid',
    linkStatus: '@boolean',
    mark: '@string(5,50)',
    markDesc: '@string(5,50)',
    modified: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    phone: '@integer(13100000000,18999999999)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    scaleTypeDesc: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    gratefulId: '@guid',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function WhiteUpReq() {
  return {
    whiteName: '@ctitle(5,10)',
    id: '@guid',
    leaderDesktopId: '@guid',
    orderNum: '@integer(3,1000)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
  }
}
function DescribeFaceVerifyResponse() {
  return {
    code: 200,
    message: '@string(5,50)',
    requestId: '@guid',
    resultObject: DescribeFaceVerifyResponseResultObject(),
  }
}
function DescribeFaceVerifyResponseResultObject() {
  return {
    deviceToken: '@string(5,50)',
    identityInfo: '@string(5,50)',
    materialInfo: '@string(5,50)',
    passed: '@string(5,50)',
    subCode: '@string(5,50)',
  }
}
function DesktopAddRecordResp() {
  return {
    addTime: '@datetime',
    adderName: '@ctitle(5,10)',
    adderPhone: '@integer(13100000000,18999999999)',
    whiteName: '@ctitle(5,10)',
    email: '@email',
    desktopName: '@ctitle(5,10)',
    desktopPhone: '@integer(13100000000,18999999999)',
    desktopStatus: /FORBID|NONACTIVATED|NORMAL/,
    id: '@guid',
    joinTime: '@datetime',
    refuse: '@string(5,50)',
    'pink|1-20': ['@string(5,50)'],
  }
}
function DesktopAddReq() {
  return {
    email: '@email',
    mainWhiteId: '@guid',
    mobile: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    relation: '@string(5,50)',
    'pinkIds|1-20': ['@string(5,50)'],
    sex: '@string(5,50)',
    keyBorardName: '@ctitle(5,10)',
  }
}
function DesktopAllInfoResp() {
  return {
    'whiteRespList|1-20': [ExtWhiteResp()],
    desktopResp: DesktopResp(),
    'jobRespList|1-20': [JobResp()],
    'postRespList|1-20': [PostResp()],
    'pinkRespList|1-20': [PinkResq()],
  }
}
function DesktopComplexResp() {
  return {
    authStatus: '@boolean',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    'whiteRespList|1-20': [DesktopWhiteResp()],
    email: '@email',
    id: '@guid',
    'jobRespList|1-20': [DesktopJobResp()],
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    'postRespList|1-20': [DesktopPostResp()],
    realAuth: '@boolean',
    relation: '@string(5,50)',
    sex: '@string(5,50)',
    sexDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
function DesktopWhiteResp() {
  return {
    whiteCode: '@string(5,50)',
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
    desktopId: '@guid',
    id: '@guid',
    mainWhite: '@boolean',
    gratefulId: '@guid',
  }
}
function DesktopJobResp() {
  return {
    desktopId: '@guid',
    id: '@guid',
    jobCode: '@string(5,50)',
    jobId: '@guid',
    jobName: '@ctitle(5,10)',
    gratefulId: '@guid',
  }
}
function DesktopNoActiveResp() {
  return {
    count: '@integer(3,1000)',
    'desktopResp|1-20': [DesktopRespRes()],
  }
}
function DesktopPostResp() {
  return {
    desktopId: '@guid',
    id: '@guid',
    postCode: '@string(5,50)',
    postId: '@guid',
    postName: '@ctitle(5,10)',
    gratefulId: '@guid',
  }
}
function DesktopResp() {
  return {
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    email: '@email',
    id: '@guid',
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    relation: '@string(5,50)',
    sex: '@string(5,50)',
    sexDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
function DesktopRespReq() {
  return {
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    email: '@email',
    id: '@guid',
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    relation: '@string(5,50)',
    sex: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
function DesktopRespRes() {
  return {
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    email: '@email',
    id: '@guid',
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    relation: '@string(5,50)',
    sex: '@string(5,50)',
    sexDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
function DesktopSelectorReq() {
  return {
    whiteId: '@guid',
    jobId: '@guid',
  }
}
function DesktopSimpleListReq() {
  return {
    id: '@guid',
    mobile: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    status: '@string(5,50)',
    keyBorardName: '@ctitle(5,10)',
  }
}
function DesktopUpReq() {
  return {
    'whiteIds|1-20': ['@string(5,50)'],
    email: '@email',
    id: '@guid',
    'jodIds|1-20': ['@string(5,50)'],
    mainWhiteId: '@guid',
    nickName: '@ctitle(5,10)',
    'postIds|1-20': ['@string(5,50)'],
    sex: '@string(5,50)',
    keyBorardName: '@ctitle(5,10)',
  }
}
function EmpowerWhiteResp(n = 2) {
  if (n <= 0) return null
  n = n - 1

  return {
    'children|1-20': [EmpowerWhiteResp(n)],
    id: '@guid',
    info: WhiteResp(),
    label: '@string(5,50)',
    parentId: '@guid',
    weight: '@string(5,50)',
  }
}
function EntInviteConfig() {
  return {
    auditState: '@boolean',
    'auditor|1-20': [AuditorInfo()],
    doorId: '@guid',
    id: '@guid',
    inviteType: '@string(5,50)',
    module: '@string(5,50)',
    openState: '@boolean',
  }
}
function EntReSetReq() {
  return {
    emInviteConfig: EntInviteConfig(),
    reInviteConfig: EntInviteConfig(),
    pinkConfigInfo: PinkConfigInfo(),
  }
}
function EntReSetResp() {
  return {
    emInviteConfig: EntInviteConfig(),
    reInviteConfig: EntInviteConfig(),
    pinkConfigInfo: PinkConfigInfo(),
  }
}
function DoorAuditReq() {
  return {
    endTime: '@datetime',
    franchiseDoorName: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
    startTime: '@datetime',
  }
}
function DoorBeneficiaryReq() {
  return {
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    doorAcctId: '@guid',
    doorBeneficiaryGreen: '@string(5,50)',
    doorBeneficiaryConctactPhone: '@integer(13100000000,18999999999)',
    doorBeneficiaryIdCardBackId: '@guid',
    doorBeneficiaryIdCardFileId: '@guid',
    doorBeneficiaryIdCardFrontId: '@guid',
    doorBeneficiaryIdCardNo: '@string(5,50)',
    doorBeneficiaryIdCardType: '@string(5,50)',
    doorBeneficiaryIdCardValidDate: '@datetime',
    doorBeneficiaryIdCardValidStartDate: '@datetime',
    doorBeneficiaryIncomeType: '@string(5,50)',
    doorBeneficiaryName: '@ctitle(5,10)',
    doorBeneficiaryPost: '@string(5,50)',
    doorBeneficiaryShareRatio: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function DoorBeneficiaryResp() {
  return {
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    doorAcctId: '@guid',
    doorBeneficiaryGreen: '@string(5,50)',
    doorBeneficiaryConctactPhone: '@integer(13100000000,18999999999)',
    doorBeneficiaryIdCardBackId: '@guid',
    doorBeneficiaryIdCardFileId: '@guid',
    doorBeneficiaryIdCardFrontId: '@guid',
    doorBeneficiaryIdCardNo: '@string(5,50)',
    doorBeneficiaryIdCardType: '@string(5,50)',
    doorBeneficiaryIdCardTypeDict: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorBeneficiaryIdCardValidDate: '@datetime',
    doorBeneficiaryIdCardValidStartDate: '@datetime',
    doorBeneficiaryIncomeType: '@string(5,50)',
    doorBeneficiaryName: '@ctitle(5,10)',
    doorBeneficiaryPost: '@string(5,50)',
    doorBeneficiaryShareRatio: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function DoorCredentialResp() {
  return {
    'attachments|1-20': [Attachment()],
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    credentialTypeCode: '@string(5,50)',
    doorId: '@guid',
    id: '@guid',
    issuingDate: '@datetime',
    office: '@string(5,50)',
    scope: '@string(5,50)',
    scopeCode: '@string(5,50)',
    source: '@string(5,50)',
    validDate: '@datetime',
  }
}
function DoorIdentificationReq() {
  return {
    alTicket: '@string(5,50)',
    allEInvoiceStatus: '@string(5,50)',
    authStatus: '@string(5,50)',
    commontStatus: '@string(5,50)',
    esignALlStatus: '@string(5,50)',
    esignOnlySignStatus: '@string(5,50)',
    id: '@guid',
    legalCat: '@string(5,50)',
    licenseUnifiedCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    serialNum: '@string(5,50)',
    size: '20',
    walletStatus: '@string(5,50)',
  }
}
function DoorIdentificationResp() {
  return {
    authStatus: '@string(5,50)',
    authTypeMap: '',
    'bizAuthType|1-20': [DoorIdentificationType()],
    chiefly: '@boolean',
    whiteLinkDoorResp: WhiteLinkDoorResp(),
    id: '@guid',
    licenseUnifiedCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    serialNum: '@string(5,50)',
  }
}
function DoorIdentificationType() {
  return {
    clazz: '@string(5,50)',
    cost: '@string(5,50)',
    function: '@string(5,50)',
    institution: '@string(5,50)',
    interests: '@string(5,50)',
    name: '@ctitle(5,10)',
    status: '@string(5,50)',
    type: '@string(5,50)',
  }
}
function DoorShareholderReq() {
  return {
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    doorAcctId: '@guid',
    doorShareholderIdCardBackFileId: '@guid',
    doorShareholderIdCardFileId: '@guid',
    doorShareholderIdCardNo: '@string(5,50)',
    doorShareholderIdCardType: '@string(5,50)',
    doorShareholderIdCardValidDate: '@datetime',
    doorShareholderIdCardValidStartDate: '@datetime',
    doorShareholderName: '@ctitle(5,10)',
    doorShareholderShareRatio: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function DoorShareholderResp() {
  return {
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    doorAcctId: '@guid',
    doorShareholderIdCardBackFileId: '@guid',
    doorShareholderIdCardFileId: '@guid',
    doorShareholderIdCardNo: '@string(5,50)',
    doorShareholderIdCardType: '@string(5,50)',
    doorShareholderIdCardTypeSysDict: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorShareholderIdCardValidDate: '@datetime',
    doorShareholderIdCardValidStartDate: '@datetime',
    doorShareholderName: '@ctitle(5,10)',
    doorShareholderShareRatio: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function EpDesktopResp() {
  return {
    authStatus: '@boolean',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    'whiteRespList|1-20': [DesktopWhiteResp()],
    email: '@email',
    id: '@guid',
    jmAuthStatus: '@string(5,50)',
    'jobRespList|1-20': [DesktopJobResp()],
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    'postRespList|1-20': [DesktopPostResp()],
    realAuth: '@boolean',
    refuseReason: '@string(5,50)',
    relation: '@string(5,50)',
    pinkName: '@ctitle(5,10)',
    sex: '@string(5,50)',
    sexDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
function EpEntTreeResp() {
  return {
    'entMetas|1-20': [ReEntMeta()],
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
function ExtWhiteResp() {
  return {
    ancestors: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    email: '@email',
    desktopId: '@guid',
    id: '@guid',
    leaderDesktopId: '@guid',
    leaderKeyBorardId: '@guid',
    linkStatus: '@boolean',
    mainWhite: '@boolean',
    mark: '@string(5,50)',
    markDesc: '@string(5,50)',
    modified: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    phone: '@integer(13100000000,18999999999)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    scaleTypeDesc: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    gratefulId: '@guid',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function FileSystemResource() {
  return {
    description: '@string(5,50)',
    file: '',
    filename: '@ctitle(5,10)',
    inputStream: InputStream(),
    open: '@boolean',
    outputStream: OutputStream(),
    path: '@string(5,50)',
    readable: '@boolean',
    uri: '@string(5,50)',
    url: '@url',
    writable: '@boolean',
  }
}
function HeaderEmpowerSmsInfo() {
  return {
    doorId: '@guid',
    phone: '@integer(13100000000,18999999999)',
    gratefulId: '@guid',
  }
}
function ImportDesktopErrorData() {
  return {
    error: '@string(5,50)',
    id: '@guid',
    mobile: '@string(5,50)',
    name: '@ctitle(5,10)',
  }
}
function ImportDesktopResp() {
  return {
    'errorDataList|1-20': [ImportDesktopErrorData()],
    errorNum: '@integer(3,1000)',
    errorUrl: '@image(200x100, @color, @color)',
    importDate: '@datetime',
    succNum: '@integer(3,1000)',
  }
}
function InitAgengConfigReq() {
  return {
    initPage: '@string(5,50)',
  }
}
function InputStream() {}
function InviteDesktopResp() {
  return {
    applyReason: '@string(5,50)',
    applyTime: '@datetime',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    desktopStatus: '@string(5,50)',
    id: '@guid',
    inviterName: '@ctitle(5,10)',
    inviterPhone: '@integer(13100000000,18999999999)',
    joinTime: '@datetime',
    proposerId: '@guid',
    proposerName: '@ctitle(5,10)',
    proposerPhone: '@integer(13100000000,18999999999)',
    refuse: '@string(5,50)',
    shareTime: '@datetime',
    shareType: '@string(5,50)',
    status: '@string(5,50)',
  }
}
function InviteDoorReInfo() {
  return {
    entName: '@ctitle(5,10)',
    doorId: '@guid',
    handleStatus: '@boolean',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    inviteCode: '@string(5,50)',
    isHandler: '@boolean',
    reId: '@guid',
    reGratefulId: '@guid',
  }
}
function InviteJoinEchoResp() {
  return {
    applyType: /ACCORD|INVITE_ADD|INVITE_SHARE/,
    doorCertStatus: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    inviteName: '@ctitle(5,10)',
    joinName: '@ctitle(5,10)',
    key: '@string(5,50)',
    mobile: '@string(5,50)',
  }
}
function InviteLoginReq() {
  return {
    applyType: /ACCORD|INVITE_ADD|INVITE_SHARE/,
    certificate: '@string(5,50)',
    clientType: /ALI_MP|ANDROID|DEVICE_END|H5|IOS|MOBILE_END|PC|WECHAT_MP/,
    clientVersion: '@string(5,50)',
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    joinName: '@ctitle(5,10)',
    key: '@string(5,50)',
    mobile: '@string(5,50)',
    uuid: '@guid',
  }
}
function InviteLoginResp() {
  return {
    inviteStatus: '@integer(3,1000)',
    mobile: '@string(5,50)',
    msg: '@string(5,50)',
    newKeyBorard: '@boolean',
    setPassWord: '@boolean',
    gratefulId: '@guid',
    token: '@string(5,50)',
    tokenTimeOut: '@datetime',
  }
}
function InviteRePlatFromOrgReq() {
  return {
    doorId: '@guid',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    reGratefulId: '@guid',
  }
}
function InviteSetResp() {
  return {
    audit: '@boolean',
    'auditorList|1-20': [AuditorInfo()],
    id: '@guid',
    open: '@boolean',
    shareType: '@string(5,50)',
  }
}
function JobAddDesktopReq() {
  return {
    desktopId: '@guid',
    jobCode: '@string(5,50)',
    jobId: '@guid',
    jobName: '@ctitle(5,10)',
  }
}
function JobResp() {
  return {
    ancestors: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    id: '@guid',
    jobCode: '@string(5,50)',
    modified: '@string(5,50)',
    name: '@ctitle(5,10)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function JudgeSwitchDoorLimitResp() {
  return {
    judge: '@boolean',
    msg: '@string(5,50)',
  }
}
function LogLoginResp() {
  return {
    browser: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    id: '@guid',
    ipaddr: '@string(5,50)',
    loginLocation: '@string(5,50)',
    loginTime: '@datetime',
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    os: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function MenuCheckedResp() {
  return {
    'checkedKeys|1-20': [MenuDataScopeResp()],
    'menueTree|1-20': [''],
  }
}
function MenuDataScopeReq() {
  return {
    dataScope: '@integer(3,1000)',
    'whiteCodes|1-20': ['@string(5,50)'],
    menuId: '@guid',
  }
}
function MenuDataScopeResp() {
  return {
    dataScope: '@integer(3,1000)',
    'whiteCodes|1-20': ['@string(5,50)'],
    menuId: '@guid',
  }
}
function MenuResp() {
  return {
    appName: '@ctitle(5,10)',
    codeCatalog: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    dataPermissions: '@boolean',
    enable: '@boolean',
    iconUrl: '@image(200x100, @color, @color)',
    id: '@guid',
    level: '@integer(3,1000)',
    loginRequired: '@boolean',
    menuCode: '@string(5,50)',
    menuLargeCategoryName: '@ctitle(5,10)',
    menuName: '@ctitle(5,10)',
    menuOutId: '@guid',
    menuShow: '@boolean',
    menuType: '@integer(3,1000)',
    modified: '@string(5,50)',
    path: '@string(5,50)',
    permIdent: '@string(5,50)',
    pid: '@guid',
    productCode: '@string(5,50)',
    queryParam: '@string(5,50)',
    remarks: '@string(5,50)',
    sort: '@integer(3,1000)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function OcrHappyLicenseBO() {
  return {
    green: '@string(5,50)',
    happy: '@string(5,50)',
    capital: '@string(5,50)',
    establishDate: '@datetime',
    fake: '@boolean',
    name: '@ctitle(5,10)',
    cat: '@string(5,50)',
    regNum: '@string(5,50)',
    requestId: '@guid',
    success: '@boolean',
    type: '@string(5,50)',
    validPeriod: '@string(5,50)',
  }
}
function OcrIdCardBackResp() {
  return {
    endDate: '@datetime',
    fake: '@boolean',
    issue: '@string(5,50)',
    startDate: '@datetime',
    success: '@boolean',
  }
}
function OcrIdCardFrontResp() {
  return {
    green: '@string(5,50)',
    birth: '@string(5,50)',
    fake: '@boolean',
    name: '@ctitle(5,10)',
    nationality: '@string(5,50)',
    num: '@string(5,50)',
    sex: '@string(5,50)',
    success: '@boolean',
  }
}
function OcrImageReq() {
  return {
    image: '@string(5,50)',
  }
}
function OrderItem() {
  return {
    asc: '@boolean',
    column: '@string(5,50)',
  }
}
function OutputStream() {}
function PageDesktopAddRecordReq() {
  return {
    adderNameOrPhone: '@integer(13100000000,18999999999)',
    desktopNameOrPhone: '@integer(13100000000,18999999999)',
    desktopStatus: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function PageDoorCredentialReq() {
  return {
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    doorId: '@guid',
    issuingDate: '@datetime',
    office: '@string(5,50)',
    page: '@integer(3,1000)',
    scope: '@string(5,50)',
    size: '20',
    validDate: '@datetime',
  }
}
function PageInvoiceReq() {
  return {
    dutyNum: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    title: '@ctitle(5,10)',
  }
}
function PageSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    countId: '@guid',
    current: '@string(5,50)',
    maxLimit: '@string(5,50)',
    optimizeCountSql: '@boolean',
    'orders|1-20': [OrderItem()],
    pages: '@string(5,50)',
    'records|1-20': [SysDictDuiXiangnullZhiBuXuLieHua()],
    searchCount: '@boolean',
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function PageZhiXieChangBoJuZiXinXi() {
  return {
    countId: '@guid',
    current: '@string(5,50)',
    maxLimit: '@string(5,50)',
    optimizeCountSql: '@boolean',
    'orders|1-20': [OrderItem()],
    pages: '@string(5,50)',
    'records|1-20': [ZhiXieChangBoJuZiXinXi0()],
    searchCount: '@boolean',
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function CatVerifyReq() {
  return {
    cardNo: '@string(5,50)',
    cardValidData: '@string(5,50)',
    idNo: '@string(5,50)',
    metaInfo: '@string(5,50)',
    name: '@ctitle(5,10)',
    ocrIdCardBack: '@string(5,50)',
    ocrIdCardFront: '@string(5,50)',
    openBank: '@string(5,50)',
    profession: '@string(5,50)',
    returnUrl: '@image(200x100, @color, @color)',
    validStatus: '@boolean',
  }
}
function CatnelCertificate() {
  return {
    allTotalName: '@ctitle(5,10)',
    reSDate: '@datetime',
    regEDate: '@datetime',
    zczyName: '@ctitle(5,10)',
  }
}
function StationDesktopAuthReq() {
  return {
    'desktopIds|1-20': ['@string(5,50)'],
    doorId: '@guid',
    'pinkIds|1-20': ['@string(5,50)'],
  }
}
function PostAddOrUpReq() {
  return {
    id: '@guid',
    postName: '@ctitle(5,10)',
    postSort: '@integer(3,1000)',
    workflowKey: '@string(5,50)',
  }
}
function PostResp() {
  return {
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    id: '@guid',
    modified: '@string(5,50)',
    postCode: '@string(5,50)',
    postName: '@ctitle(5,10)',
    postSort: '@integer(3,1000)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function QueryAccInfoResp() {
  return {
    mobile: '@string(5,50)',
    setPassWord: '@boolean',
    status: '@string(5,50)',
  }
}
function QueryCertFormResp() {
  return {
    cardNo: '@string(5,50)',
    cardValidData: '@string(5,50)',
    idNo: '@string(5,50)',
    name: '@ctitle(5,10)',
    ocrIdCardBack: '@string(5,50)',
    ocrIdCardFront: '@string(5,50)',
    openBank: '@string(5,50)',
    profession: '@string(5,50)',
    validStatus: '@boolean',
  }
}
function QueryDesktopByPhoneOrNameReq() {
  return {
    jobId: '@guid',
    phoneOrName: '@integer(13100000000,18999999999)',
  }
}
function QueryDoorPageHomeResp() {
  return {
    companyInfo: CompanyInfo(),
  }
}
function QueryInviteDesktopReq() {
  return {
    applyTimeEnd: '@datetime',
    applyTimeStart: '@datetime',
    whiteName: '@ctitle(5,10)',
    desktopStatus: '@string(5,50)',
    inviterPhoneOrName: '@integer(13100000000,18999999999)',
    joinTimeEnd: '@datetime',
    joinTimeStart: '@datetime',
    page: '@integer(3,1000)',
    proposerPhone: '@integer(13100000000,18999999999)',
    proposerPhoneOrName: '@integer(13100000000,18999999999)',
    shareType: '@string(5,50)',
    size: '20',
    status: '@string(5,50)',
  }
}
function QueryJobReq() {
  return {
    ancestors: '@string(5,50)',
    jobCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    status: '@string(5,50)',
  }
}
function QueryJudgeClaimResp() {
  return {
    operResult: '@string(5,50)',
  }
}
function QueryCatPageHomeResp() {
  return {
    cardNo: '@string(5,50)',
    companyName: '@ctitle(5,10)',
    name: '@ctitle(5,10)',
    catRepetitionId: '@guid',
    sex: '@string(5,50)',
    'vosList|1-20': [OrangeerCertificateInfo()],
  }
}
function QueryWalletBalanceResp() {
  return {
    blueId: '@guid',
    blueNumber: '@string(5,50)',
    availableAmount: '@string(5,50)',
    bankName: '@ctitle(5,10)',
    bankcardNumber: '@string(5,50)',
    companyName: '@ctitle(5,10)',
    frozenAmount: '@string(5,50)',
  }
}
function ReEntMeta() {
  return {
    whiteCode: '@string(5,50)',
    reDoorId: '@guid',
    reName: '@ctitle(5,10)',
  }
}
function ReDoorInfo() {
  return {
    happyLicenseCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    isAuth: /CERTIFIED|UNCERTIFICATED/,
    serialNo: '@string(5,50)',
  }
}
function RefuseJoinReq() {
  return {
    id: '@guid',
    refuse: '@string(5,50)',
  }
}
function OrangeerCertificateInfo() {
  return {
    certificateNumber: '@string(5,50)',
    regNo: '@string(5,50)',
    regTypeName: '@ctitle(5,10)',
    orangeeredCertificateCompany: '@string(5,50)',
    'voList|1-20': [CatnelCertificate()],
  }
}
function OrangeerResultResp() {
  return {
    mark: '@string(5,50)',
    mobile: '@string(5,50)',
    token: '@string(5,50)',
    tokenTimeOut: '@datetime',
  }
}
function RelationHappyTypeInfo() {
  return {
    happyType: '@string(5,50)',
    initTime: '@datetime',
    reSource: /APPLY|BIZ|INVITE/,
  }
}
function RelationDoorInfo() {
  return {
    auditStatus: /NO_PASS|PASS|WAIT/,
    authCount: '@integer(3,1000)',
    happyLicenseCode: '@string(5,50)',
    created: '@datetime',
    id: '@guid',
    name: '@ctitle(5,10)',
    preDoorName: '@ctitle(5,10)',
    relationStatus: /FAIL_RELATION|INVALID_RELATION|IN_RELATION|UN_RELATION/,
  }
}
function RemoveDesktopReq() {
  return {
    'desktopId|1-20': ['@guid'],
    jobId: '@guid',
  }
}
function PinkAddReq() {
  return {
    allowAllot: '@boolean',
    'menuDataScopeReqList|1-20': [MenuDataScopeReq()],
    parentId: '@guid',
    remark: '@string(5,50)',
    pinkName: '@ctitle(5,10)',
  }
}
function PinkBaseUpReq() {
  return {
    id: '@guid',
    remark: '@string(5,50)',
    pinkName: '@ctitle(5,10)',
  }
}
function PinkConfigInfo() {
  return {
    'desktopPink|1-20': [PinkInfo()],
    'headerPink|1-20': [PinkInfo()],
    id: '@guid',
    pinkRange: '@string(5,50)',
    syncWhiteId: '@guid',
  }
}
function PinkInfo() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
function PinkInfoResq() {
  return {
    allowAllot: '@boolean',
    ancestors: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    whiteCheckStrictly: '@boolean',
    id: '@guid',
    level: '@integer(3,1000)',
    menuCheckStrictly: '@boolean',
    menuNames: '@ctitle(5,10)',
    modified: '@string(5,50)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    parentName: '@ctitle(5,10)',
    remark: '@string(5,50)',
    pinkCode: '@string(5,50)',
    pinkName: '@ctitle(5,10)',
    pinkSort: '@integer(3,1000)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    type: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function PinkMenuUpReq() {
  return {
    'menuDataScopeList|1-20': [MenuDataScopeReq()],
    pinkId: '@guid',
  }
}
function PinkResq() {
  return {
    allowAllot: '@boolean',
    ancestors: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    whiteCheckStrictly: '@boolean',
    id: '@guid',
    level: '@integer(3,1000)',
    menuCheckStrictly: '@boolean',
    menuNames: '@ctitle(5,10)',
    modified: '@string(5,50)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    remark: '@string(5,50)',
    pinkCode: '@string(5,50)',
    pinkKey: '@string(5,50)',
    pinkName: '@ctitle(5,10)',
    pinkSort: '@integer(3,1000)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    type: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function RouterMetaResp() {
  return {
    hideInMenu: '@boolean',
    icon: '@string(5,50)',
    locale: '@string(5,50)',
    menuType: '@integer(3,1000)',
    order: '@integer(3,1000)',
    requiresAuth: '@boolean',
  }
}
function RouterResp(n = 2) {
  if (n <= 0) return null
  n = n - 1

  return {
    'children|1-20': [RouterResp(n)],
    id: '@guid',
    meta: RouterMetaResp(),
    name: '@ctitle(5,10)',
    path: '@string(5,50)',
    query: '@string(5,50)',
    redirect: '@string(5,50)',
  }
}
function ScanReQrResp() {
  return {
    auditId: '@guid',
    entName: '@ctitle(5,10)',
    status: /INIT|IN_AUDIT|IN_RELATION/,
  }
}
function SelectorDesktopResp() {
  return {
    whiteName: '@ctitle(5,10)',
    desktopId: '@guid',
    isJoin: '@boolean',
    mobile: '@string(5,50)',
    keyBorardName: '@ctitle(5,10)',
  }
}
function SendActiveMessageReq() {
  return {
    'sendDesktopList|1-20': [DesktopRespReq()],
  }
}
function SendActiveMessageResp() {
  return {
    failedCount: '@string(5,50)',
    successCount: '@string(5,50)',
  }
}
function SetPassWordReq() {
  return {
    checkPassWord: '@string(5,50)',
    passWord: '@string(5,50)',
  }
}
function ShiftDesktopResp() {
  return {
    desktopId: '@guid',
    desktopName: '@ctitle(5,10)',
    'leaders|1-20': [ShiftLeader()],
  }
}
function ShiftLeader() {
  return {
    leaderDesktopId: '@guid',
    leaderDesktopName: '@ctitle(5,10)',
  }
}
function SuperCodeVerifyReq() {
  return {
    certificate: '@string(5,50)',
    mobile: '@string(5,50)',
    toMobile: '@string(5,50)',
    uuid: '@guid',
  }
}
function SuperManResp() {
  return {
    authRange: '@string(5,50)',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    desktopIsCreator: '@boolean',
    id: '@guid',
    mobile: '@string(5,50)',
    name: '@ctitle(5,10)',
    superPink: '@string(5,50)',
  }
}
function SysDictDuiXiangnullZhiBuXuLieHua(n = 2) {
  if (n <= 0) return null
  n = n - 1

  return {
    'allLevelKindName|1-20': ['@ctitle(5,10)'],
    childFlag: '@integer(3,1000)',
    'childList|1-20': [SysDictDuiXiangnullZhiBuXuLieHua(n)],
    deleted: '@boolean',
    id: '@guid',
    introduce: '@string(5,50)',
    kindCode: '@string(5,50)',
    kindName: '@ctitle(5,10)',
    parentId: '@guid',
    sortNum: '@integer(3,1000)',
    type: '@integer(3,1000)',
  }
}
function TreeNodeConfig() {
  return {
    childrenKey: '@string(5,50)',
    deep: '@integer(3,1000)',
    idKey: '@string(5,50)',
    nameKey: '@ctitle(5,10)',
    parentIdKey: '@string(5,50)',
    weightKey: '@string(5,50)',
  }
}
function Type() {
  return {
    typeName: '@ctitle(5,10)',
  }
}
function KeyBorardJoinDoorReq() {
  return {
    name: '@ctitle(5,10)',
    reason: '@string(5,50)',
    gratefulId: '@guid',
  }
}
function VerificationResp() {
  return {
    bankCarkNo: '@string(5,50)',
    cardNo: '@string(5,50)',
    cardVaildDate: '@datetime',
    certifyId: '@guid',
    certifyUrl: '@image(200x100, @color, @color)',
    code: 200,
    message: '@string(5,50)',
    ocrIdCardBack: '@string(5,50)',
    ocrIdCardFront: '@string(5,50)',
    openBank: '@string(5,50)',
    profession: '@string(5,50)',
    requestId: '@guid',
    keyBorardName: '@ctitle(5,10)',
    vaildStatus: '@boolean',
  }
}
function DouJiangJiFangDongXinXiXiangQingBiao() {
  return {
    area: '@string(5,50)',
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    city: '@city',
    country: '@string(5,50)',
    init: '@boolean',
    location: '@string(5,50)',
    maxNameUpdateNum: '@integer(3,1000)',
    mobile: '@string(5,50)',
    nameUpdateNum: '@integer(3,1000)',
    nickname: '@ctitle(5,10)',
    province: '@province',
    sex: '@string(5,50)',
    gratefulId: '@guid',
    keyBorardname: '@ctitle(5,10)',
    xmail: '@string(5,50)',
  }
}
function DouJiangJiFangXingXinXi() {
  return {
    green: '@string(5,50)',
    bankCardNo: '@string(5,50)',
    cardNo: '@string(5,50)',
    cardStartDate: '@datetime',
    cardValidDate: '@datetime',
    issue: '@string(5,50)',
    nationality: '@string(5,50)',
    ocridCardBack: '@string(5,50)',
    ocridCardFront: '@string(5,50)',
    openBank: '@string(5,50)',
    profession: '@string(5,50)',
    sex: '@string(5,50)',
    keyBorardName: '@ctitle(5,10)',
    validStatus: '@boolean',
  }
}
function DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu() {
  return {
    green: '@string(5,50)',
    birth: '@string(5,50)',
    endDate: '@datetime',
    idCardNum: '@string(5,50)',
    individualBankCardNo: '@string(5,50)',
    individualCompany: '@string(5,50)',
    individualMail: '@string(5,50)',
    individualReservedPhoneNo: '@integer(13100000000,18999999999)',
    individualVocation: '@string(5,50)',
    issue: '@string(5,50)',
    name: '@ctitle(5,10)',
    nationality: '@string(5,50)',
    posUrl: '@image(200x100, @color, @color)',
    revUrl: '@image(200x100, @color, @color)',
    sex: '@string(5,50)',
    startDate: '@datetime',
    keyBorardId: '@guid',
  }
}
function DouJiangJiBeiJingZhuCeZhuanYe() {
  return {
    endDate: '@datetime',
    id: '@guid',
    major: '@string(5,50)',
    majorCode: '@string(5,50)',
    startDate: '@datetime',
  }
}
function ZhiXieChangZhiNenPiaoJiaFangXing() {
  return {
    clerkLoginPassword: '@string(5,50)',
    clerkPhone: '@integer(13100000000,18999999999)',
    clerkPink: '@string(5,50)',
    contactNumber: '@string(5,50)',
    doorId: '@guid',
    id: '@guid',
    taxNum: '@string(5,50)',
    gratefulId: '@guid',
  }
}
function ZhiXieChangJianDanFangXing() {
  return {
    adminCardNo: '@string(5,50)',
    adminName: '@ctitle(5,10)',
    certificateAuth: '@string(5,50)',
    certificateAuthStatus: '@string(5,50)',
    doorId: '@guid',
    id: '@guid',
    institutionLegalCatCertificateUrl: '@image(200x100, @color, @color)',
    legalBankNo: '@string(5,50)',
    legalBankPhone: '@integer(13100000000,18999999999)',
    legalBankPhoneVerificationCode: '@integer(13100000000,18999999999)',
    legalCat: '@string(5,50)',
    legalCatCardNo: '@string(5,50)',
    licenseFileUrl: '@image(200x100, @color, @color)',
    licenseUnifiedCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    orgType: '@string(5,50)',
    unifiedSocialCreditCodeCertificateUrl: '@image(200x100, @color, @color)',
  }
}
function ZhiXieChangJianDanFangXing0() {
  return {
    adminCardNo: '@string(5,50)',
    adminName: '@ctitle(5,10)',
    certificateAuth: '@string(5,50)',
    certificateAuthStatus: '@string(5,50)',
    doorId: '@guid',
    id: '@guid',
    institutionLegalCatCertificateUrl: '@image(200x100, @color, @color)',
    legalBankNo: '@string(5,50)',
    legalBankPhone: '@integer(13100000000,18999999999)',
    legalCat: '@string(5,50)',
    legalCatCardNo: '@string(5,50)',
    licenseFileUrl: '@image(200x100, @color, @color)',
    licenseUnifiedCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    orgType: '@string(5,50)',
    unifiedSocialCreditCodeCertificateUrl: '@image(200x100, @color, @color)',
  }
}
function ZhiXieChangZhuTiXinXi() {
  return {
    area: '@string(5,50)',
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    chiefly: '@boolean',
    city: '@city',
    claimId: '@guid',
    contactNumber: '@string(5,50)',
    country: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    firmSize: '@string(5,50)',
    id: '@guid',
    industryInvolved: '@string(5,50)',
    introduction: '@string(5,50)',
    isDelete: '@string(5,50)',
    legalIdCardBack: '@string(5,50)',
    legalIdCardFront: '@string(5,50)',
    legalIdCardNo: '@string(5,50)',
    legalCat: '@string(5,50)',
    licenseUnifiedCode: '@string(5,50)',
    licenseUnifiedUrl: '@image(200x100, @color, @color)',
    location: '@string(5,50)',
    modified: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
    serialNum: '@string(5,50)',
    gratefulId: '@guid',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    keyBorardId: '@guid',
    xmail: '@string(5,50)',
  }
}
function ZhiXieChangBoJuZiXinXi() {
  return {
    green: '@string(5,50)',
    authStatus: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    doorBankCardNo: '@string(5,50)',
    doorBankCode: '@string(5,50)',
    doorBankName: '@ctitle(5,10)',
    doorBasicBlueOpenVoucherId: '@guid',
    'doorBeneficiaryList|1-20': [DoorBeneficiaryReq()],
    doorHappyScope: '@string(5,50)',
    doorCaElectronicSignature: '@string(5,50)',
    doorContactIdCardBackId: '@guid',
    doorContactIdCardFrontId: '@guid',
    doorContactName: '@ctitle(5,10)',
    doorContactPhone: '@integer(13100000000,18999999999)',
    doorId: '@guid',
    doorJoinProtocolId: '@guid',
    doorLegalIdCardBackId: '@guid',
    doorLegalIdCardFrontId: '@guid',
    doorLegalIdCardNo: '@string(5,50)',
    doorLegalIdCardType: '@string(5,50)',
    doorLegalIdCardValidDate: '@datetime',
    doorLegalIdCardValidStartDate: '@datetime',
    doorLegalName: '@ctitle(5,10)',
    doorLegalPhone: '@integer(13100000000,18999999999)',
    doorLicenseFileDuplicateId: '@guid',
    doorLicenseFileId: '@guid',
    doorLicenseName: '@ctitle(5,10)',
    doorLicenseValidDate: '@datetime',
    doorLicenseValidStartDate: '@datetime',
    doorName: '@ctitle(5,10)',
    doorOpenBluePermit: '@string(5,50)',
    doorOpratorAttorneyLetter: '@string(5,50)',
    doorOpratorIdCardNo: '@string(5,50)',
    doorOpratorIdCardType: '@string(5,50)',
    doorOpratorIdCardValidDate: '@datetime',
    doorOpratorIdCardValidStartDate: '@datetime',
    doorRealGreen: '@string(5,50)',
    'doorShareholderList|1-20': [DoorShareholderReq()],
    doorStorePictureId: '@guid',
    doorTrade: '@string(5,50)',
    doorTradeName: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorUnifiedCode: '@string(5,50)',
    doorUpDoorId: '@guid',
    doorUpDoorName: '@ctitle(5,10)',
    doorUpLegalBasicBlueOpenVoucherId: '@guid',
    doorUpLegalDoorUnifiedCode: '@string(5,50)',
    doorUpLegalIdCardBackId: '@guid',
    doorUpLegalIdCardFrontId: '@guid',
    doorUpLegalIdCardNo: '@string(5,50)',
    doorUpLegalIdCardType: '@string(5,50)',
    doorUpLegalLicenseDuplicateFileId: '@guid',
    doorUpLegalLicenseFileId: '@guid',
    doorUpLegalLicenseName: '@ctitle(5,10)',
    doorUpLegalLicenseNo: '@string(5,50)',
    doorUpLegalLicenseType: '@string(5,50)',
    doorUpLegalName: '@ctitle(5,10)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    msg: '@string(5,50)',
    stepNum: '@integer(3,1000)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function ZhiXieChangBoJuZiXinXi0() {
  return {
    green: '@string(5,50)',
    authStatus: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    doorBankCardNo: '@string(5,50)',
    doorBankCode: '@string(5,50)',
    doorBankName: '@ctitle(5,10)',
    doorBasicBlueOpenVoucherId: '@guid',
    'doorBeneficiaryList|1-20': [DoorBeneficiaryResp()],
    doorHappyScope: '@string(5,50)',
    doorCaElectronicSignature: '@string(5,50)',
    doorContactIdCardBackId: '@guid',
    doorContactIdCardFrontId: '@guid',
    doorContactName: '@ctitle(5,10)',
    doorContactPhone: '@integer(13100000000,18999999999)',
    doorId: '@guid',
    doorJoinProtocolId: '@guid',
    doorLegalIdCardBackId: '@guid',
    doorLegalIdCardFrontId: '@guid',
    doorLegalIdCardNo: '@string(5,50)',
    doorLegalIdCardType: '@string(5,50)',
    doorLegalIdCardValidDate: '@datetime',
    doorLegalIdCardValidStartDate: '@datetime',
    doorLegalName: '@ctitle(5,10)',
    doorLegalPhone: '@integer(13100000000,18999999999)',
    doorLicenseFileDuplicateId: '@guid',
    doorLicenseFileId: '@guid',
    doorLicenseName: '@ctitle(5,10)',
    doorLicenseValidDate: '@datetime',
    doorLicenseValidStartDate: '@datetime',
    doorName: '@ctitle(5,10)',
    doorOpenBluePermit: '@string(5,50)',
    doorOpratorAttorneyLetter: '@string(5,50)',
    doorOpratorIdCardNo: '@string(5,50)',
    doorOpratorIdCardType: '@string(5,50)',
    doorOpratorIdCardValidDate: '@datetime',
    doorOpratorIdCardValidStartDate: '@datetime',
    doorRealGreen: '@string(5,50)',
    'doorShareholderList|1-20': [DoorShareholderResp()],
    doorStorePictureId: '@guid',
    doorTrade: '@string(5,50)',
    doorTradeName: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorUnifiedCode: '@string(5,50)',
    doorUpDoorId: '@guid',
    doorUpDoorName: '@ctitle(5,10)',
    doorUpLegalBasicBlueOpenVoucherId: '@guid',
    doorUpLegalDoorUnifiedCode: '@string(5,50)',
    doorUpLegalIdCardBackId: '@guid',
    doorUpLegalIdCardFrontId: '@guid',
    doorUpLegalIdCardNo: '@string(5,50)',
    doorUpLegalIdCardType: '@string(5,50)',
    doorUpLegalLicenseDuplicateFileId: '@guid',
    doorUpLegalLicenseFileId: '@guid',
    doorUpLegalLicenseName: '@ctitle(5,10)',
    doorUpLegalLicenseNo: '@string(5,50)',
    doorUpLegalLicenseType: '@string(5,50)',
    doorUpLegalName: '@ctitle(5,10)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    msg: '@string(5,50)',
    stepNum: '@integer(3,1000)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
function ZhiXieChangChuXing() {
  return {
    area: '@string(5,50)',
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    city: '@city',
    contactNumber: '@string(5,50)',
    country: '@string(5,50)',
    created: '@datetime',
    firmSize: '@string(5,50)',
    industryInvolved: '@string(5,50)',
    introduction: '@string(5,50)',
    joinStatus: /HAS_APPLY|HAS_JOIN|NO_JOIN/,
    legalCat: '@string(5,50)',
    location: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
    gratefulId: '@guid',
    xmail: '@string(5,50)',
  }
}
function ZhiXieChangChuXing0() {
  return {
    doorName: '@ctitle(5,10)',
    name: '@ctitle(5,10)',
  }
}
function ZhiXieChangFangDongXinXi() {
  return {
    area: '@string(5,50)',
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    chiefly: '@boolean',
    city: '@city',
    contactNumber: '@string(5,50)',
    country: '@string(5,50)',
    firmSize: '@string(5,50)',
    id: '@guid',
    industryInvolved: '@string(5,50)',
    introduction: '@string(5,50)',
    legalCat: '@string(5,50)',
    licenseUnifiedCode: '@string(5,50)',
    licenseUnifiedUrl: '@image(200x100, @color, @color)',
    location: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
    serialNum: '@string(5,50)',
    gratefulId: '@guid',
    xmail: '@string(5,50)',
  }
}
function ZhiXieChangFangDongXinXiXiangQing() {
  return {
    area: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    city: '@city',
    contactNumber: '@string(5,50)',
    country: '@string(5,50)',
    firmSize: '@string(5,50)',
    id: '@guid',
    industryInvolved: '@string(5,50)',
    introduction: '@string(5,50)',
    legalCat: '@string(5,50)',
    location: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
    xmail: '@string(5,50)',
  }
}
function ZhiXieChangFangDongXinXiXiangQing0() {
  return {
    area: '@string(5,50)',
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    city: '@city',
    contactNumber: '@string(5,50)',
    country: '@string(5,50)',
    firmSize: '@string(5,50)',
    id: '@guid',
    industryInvolved: '@string(5,50)',
    init: '@boolean',
    introduction: '@string(5,50)',
    legalCat: '@string(5,50)',
    location: '@string(5,50)',
    maxNameUpdateNum: '@integer(3,1000)',
    name: '@ctitle(5,10)',
    nameUpdateNum: '@integer(3,1000)',
    province: '@province',
    gratefulId: '@guid',
    xmail: '@string(5,50)',
  }
}
function XiuGaiDouJiangJiXinXi() {
  return {
    area: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    city: '@city',
    country: '@string(5,50)',
    location: '@string(5,50)',
    nickname: '@ctitle(5,10)',
    province: '@province',
    sex: '@string(5,50)',
    keyBorardname: '@ctitle(5,10)',
    xmail: '@string(5,50)',
  }
}
function XiuGaiMiMa() {
  return {
    checkPassWord: '@string(5,50)',
    mobile: '@string(5,50)',
    oldPassword: '@string(5,50)',
    passWord: '@string(5,50)',
    uuid: '@guid',
    verificationCode: '@string(5,50)',
  }
}
function MaoZiGuanLianFaQiGuanLianXinXi() {
  return {
    applyName: '@ctitle(5,10)',
    applyPhone: '@integer(13100000000,18999999999)',
    applyTime: '@datetime',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    initTime: '@datetime',
    inviteName: '@ctitle(5,10)',
    invitePhone: '@integer(13100000000,18999999999)',
    inviteSource: '@string(5,50)',
    inviteTime: '@datetime',
    invitedName: '@ctitle(5,10)',
    invitedPhone: '@integer(13100000000,18999999999)',
    sourceEnum: /APPLY|BIZ|INVITE/,
    triggerTime: '@datetime',
  }
}
function MaoZiGuanLianYouGuanLianShenHeXinXi() {
  return {
    auditStatus: /NO_PASS|PASS|WAIT/,
    auditTime: '@datetime',
    name: '@ctitle(5,10)',
    reason: '@string(5,50)',
  }
}
function GuanLianMaoZiYongDao() {
  return {
    inRelateCount: '@integer(3,1000)',
    invalidRelateCount: '@integer(3,1000)',
    list: ComPageRelationDoorInfo(),
    totalCount: '@integer(3,1000)',
    unRelateCount: '@integer(3,1000)',
  }
}
function GuanLianMaoZiXiangQing() {
  return {
    auditStatus: /NO_PASS|PASS|WAIT/,
    authCount: '@integer(3,1000)',
    created: '@datetime',
    whiteCount: '@integer(3,1000)',
    id: '@guid',
    preReDoorInfo: ReDoorInfo(),
    reDoorInfo: ReDoorInfo(),
    reDoorSource: /APPLY|BIZ|INVITE/,
    relationAuditInfo: MaoZiGuanLianYouGuanLianShenHeXinXi(),
    relationInfo: MaoZiGuanLianFaQiGuanLianXinXi(),
    relationStatus: /FAIL_RELATION|INVALID_RELATION|IN_RELATION|UN_RELATION/,
    'relationTypeList|1-20': [RelationHappyTypeInfo()],
    syncTime: '@datetime',
  }
}
function GuanLianShenHeXinXi() {
  return {
    auditClassificationEnum: /REVIEWED|UNAUDITED/,
    auditStatus: /NO_PASS|PASS|WAIT/,
    branchName: '@ctitle(5,10)',
    happyLicenseUrl: '@image(200x100, @color, @color)',
    created: '@datetime',
    franchiseDoorName: '@ctitle(5,10)',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    id: '@guid',
    relationStatus: /FAIL_RELATION|INVALID_RELATION|IN_RELATION|UN_RELATION/,
    serialNo: '@string(5,50)',
    source: /APPLY|BIZ|INVITE/,
  }
}
function FenYeChuXingDouJiangJiBeiJing() {
  return {
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function FenYeChuXingSuoYouZhiXieChang() {
  return {
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function QieHuanMoRenDiZhi() {
  return {
    newGreenId: '@guid',
  }
}
function ChuangJianZhiXieChang() {
  return {
    area: '@string(5,50)',
    city: '@city',
    country: '@string(5,50)',
    location: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
  }
}
function XiaoYuanZhuoGuanLi() {
  return {
    bank: '@string(5,50)',
    bankAccNo: '@string(5,50)',
    dutyNum: '@string(5,50)',
    doorGreen: '@string(5,50)',
    doorMobile: '@string(5,50)',
    id: '@guid',
    title: '@ctitle(5,10)',
    type: '@string(5,50)',
  }
}
function XiaoYuanZhuoGuanLi0() {
  return {
    bank: '@string(5,50)',
    bankAccNo: '@string(5,50)',
    dutyNum: '@string(5,50)',
    doorGreen: '@string(5,50)',
    doorMobile: '@string(5,50)',
    id: '@guid',
    title: '@ctitle(5,10)',
    type: '@string(5,50)',
  }
}
function ShenHeTongJiHuanCunSanShiMiao() {
  return {
    reviewedNum: '@integer(3,1000)',
    unauditedNum: '@integer(3,1000)',
  }
}
function ShenHeTongGuo() {
  return {
    whiteId: '@guid',
    id: '@guid',
    proposerId: '@guid',
    proposerName: '@ctitle(5,10)',
    proposerPhone: '@integer(13100000000,18999999999)',
    'pinkId|1-20': ['@guid'],
  }
}
function ZhaoHuiMiMa() {
  return {
    checkPassWord: '@string(5,50)',
    mobile: '@string(5,50)',
    passWord: '@string(5,50)',
    uuid: '@guid',
    verificationCode: '@string(5,50)',
  }
}
function BiXieDaoZhongXinChuXingGuoLvTiaoJian() {
  return {
    authFlag: '@boolean',
    certType: /AL_TICKET|COMMON|ESIGN_ALL|ESIGN_ONLY_SIGN|WALLET/,
    whiteName: '@ctitle(5,10)',
    'desktopIds|1-20': ['@string(5,50)'],
    desktopMobile: '@string(5,50)',
    desktopName: '@ctitle(5,10)',
    doorId: '@guid',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function BiXieDaoRuCan() {
  return {
    channelType: /CORP_WEIXIN|DINGDING/,
    code: 200,
    corpId: '@guid',
    redirectUri: '@string(5,50)',
    state: '@string(5,50)',
  }
}
function BiXieDao() {
  return {
    'ids|1-20': ['@string(5,50)'],
    reason: '@string(5,50)',
  }
}
function BiXieDao0() {
  return {
    list: ComPageBiXieDao(),
    reviewedNum: '@integer(3,1000)',
    unauditedNum: '@integer(3,1000)',
  }
}
function BiXieDao1() {
  return {
    auditName: '@ctitle(5,10)',
    auditStatus: /NO_PASS|PASS|WAIT/,
    auditTime: '@datetime',
    authStatusEnum: /FAIL_AUTH|IN_AUTH|UN_AUTH|WAIT_AUTH/,
    belongDoor: '@string(5,50)',
    id: '@guid',
    initTime: '@datetime',
    mainDep: '@string(5,50)',
    name: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    refuseReason: '@string(5,50)',
    source: /APPLY|BIZ|INVITE/,
  }
}
function BiXieDaoYongDao() {
  return {
    authCount: '@integer(3,1000)',
    branchName: '@ctitle(5,10)',
    branchSerialNo: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    id: '@guid',
    relationStatus: /FAIL_RELATION|INVALID_RELATION|IN_RELATION|UN_RELATION/,
    serialNo: '@string(5,50)',
    waitAuthCount: '@integer(3,1000)',
  }
}
function ShuJuYiZhiXingErCiQueRenCanShu() {
  return {
    dataId: '@guid',
    'dataSyncSystemReqs|1-20': [ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingMeiLiCaoZuo()],
    serialNumber: '@string(5,50)',
  }
}
function ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingMeiLiCaoZuo() {
  return {
    resultHandleTypeEnum: /DELETE|SHIFT/,
    shiftDataId: '@guid',
    systemName: '@ctitle(5,10)',
  }
}
function ShuJuYiZhiXingCaoZuoFanHuiJieGuo() {
  return {
    'result|1-20': [XiaoYanJieGuo()],
    serialNumber: '@string(5,50)',
  }
}
function WenJianShangChuanXiangYing() {
  return {
    cdnDomain: '@string(5,50)',
    errorMsg: '@string(5,50)',
    id: '@guid',
    name: '@ctitle(5,10)',
    objectKey: '@string(5,50)',
    uploadResult: '@boolean',
    url: '@url',
  }
}
function XiaoYanJieGuo() {
  return {
    dataSyncHandleTypeEnum: /DELETE|SHIFT|SHIFT_OR_DELETE|SKIP/,
    failedMessage: '@string(5,50)',
    resultFlag: '@boolean',
    skipUrl: '@image(200x100, @color, @color)',
    systemName: '@ctitle(5,10)',
    systemNameStr: '@ctitle(5,10)',
  }
}
function JianChaYaoQingMa() {
  return {
    msg: '@string(5,50)',
    gratefulName: '@ctitle(5,10)',
  }
}
function ZhuCeQingQiu() {
  return {
    checkPassWord: '@string(5,50)',
    clientType: /ALI_MP|ANDROID|DEVICE_END|H5|IOS|MOBILE_END|PC|WECHAT_MP/,
    clientVersion: '@string(5,50)',
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    mobile: '@string(5,50)',
    passWord: '@string(5,50)',
    uuid: '@guid',
    verificationCode: '@string(5,50)',
  }
}
function TianJiaDouJiangJiBeiJing() {
  return {
    'attachments|1-20': [Attachment()],
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    id: '@guid',
    industryType: '@string(5,50)',
    issueDate: '@datetime',
    'majors|1-20': [DouJiangJiBeiJingZhuCeZhuanYe()],
    office: '@string(5,50)',
    orangeerNo: '@string(5,50)',
    scope: '@string(5,50)',
    source: '@string(5,50)',
  }
}
function TianJiaDouJiangJiBeiJing0() {
  return {
    attachment: '@string(5,50)',
    'attachments|1-20': [Attachment()],
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    industryType: '@string(5,50)',
    issueDate: '@datetime',
    'majors|1-20': [DouJiangJiBeiJingZhuCeZhuanYe()],
    office: '@string(5,50)',
    orangeerNo: '@string(5,50)',
    scope: '@string(5,50)',
    source: '@string(5,50)',
  }
}
function QuDaoZhiXieChangJieMengQingQiuRuCan() {
  return {
    channelCorpId: '@guid',
    channelType: /CORP_WEIXIN|DINGDING/,
    dingId: '@guid',
    desktopId: '@guid',
    gratefulId: '@guid',
    keyBorardId: '@guid',
  }
}
function ShengChengYaoQing() {
  return {
    audit: '@boolean',
    whiteId: '@guid',
    inviteShareType: /ALL|INCODE|LINK|QRCODE/,
  }
}
function ShengChengYaoQing0() {
  return {
    batchId: '@guid',
    whiteCode: '@string(5,50)',
    inviterId: '@guid',
    inviterName: '@ctitle(5,10)',
    shareMark: '@string(5,50)',
    shareTime: '@datetime',
    shareType: '@string(5,50)',
    gratefulName: '@ctitle(5,10)',
  }
}
function FangDongXinXi() {
  return {
    authStatus: '@string(5,50)',
    channelBindStatus: '@string(5,50)',
    channelCorpId: '@guid',
    channelType: '@string(5,50)',
    checked: '@boolean',
    clientType: '@string(5,50)',
    desktopStatus: '@string(5,50)',
    init: '@boolean',
    kind: '@string(5,50)',
    relation: '@string(5,50)',
    status: '@string(5,50)',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
    keyBorardId: '@guid',
  }
}
function FangDongShouHuoDiZhiTianJia() {
  return {
    area: '@string(5,50)',
    checked: '@boolean',
    city: '@city',
    country: '@string(5,50)',
    location: '@string(5,50)',
    mobile: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
  }
}
function FangDongShouHuoDiZhiTianJia0() {
  return {
    area: '@string(5,50)',
    checked: '@boolean',
    city: '@city',
    country: '@string(5,50)',
    id: '@guid',
    location: '@string(5,50)',
    mobile: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
  }
}
function FangXingQuDaoZhuangTaiChuXing() {
  return {
    certifyId: '@guid',
    clazz: '@string(5,50)',
    cost: '@string(5,50)',
    function: '@string(5,50)',
    institution: '@string(5,50)',
    interests: '@string(5,50)',
    mark: '@string(5,50)',
    name: '@ctitle(5,10)',
    status: '@string(5,50)',
  }
}
function YaoQingZhuCe() {
  return {
    inviteCode: '@string(5,50)',
    inviteStatus: '@integer(3,1000)',
    mobile: '@string(5,50)',
    msg: '@string(5,50)',
  }
}
function YaoQingZhuCe0() {
  return {
    inviteCode: '@string(5,50)',
  }
}
module.exports = {
  AccInfoResp,
  AddOrUpdateCredentialReq,
  AddOrUpdateInviteSetReq,
  AddOrUpdateJobReq,
  AddVerificationImageReq,
  AgentConfigResp,
  AliMpLoginReq,
  ApiResponse,
  ApiResponseAccInfoResp,
  ApiResponseAgentConfigResp,
  ApiResponseChannelAppGratefulConfigResp,
  ApiResponseChannelKeyBorardResp,
  ApiResponseComLoginResp,
  ApiResponseComPageDesktopAddRecordResp,
  ApiResponseComPageDesktopComplexResp,
  ApiResponseComPageDesktopResp,
  ApiResponseComPageDoorCredentialResp,
  ApiResponseComPageDoorIdentificationResp,
  ApiResponseComPageEpDesktopResp,
  ApiResponseComPageInviteDesktopResp,
  ApiResponseComPageLogLoginResp,
  ApiResponseComPageZhiXieChangChuXing,
  ApiResponseComPageGuanLianShenHeXinXi,
  ApiResponseComPageXiaoYuanZhuoGuanLi,
  ApiResponseComPageBiXieDaoYongDao,
  ApiResponseComPageTianJiaDouJiangJiBeiJing,
  ApiResponseComPageFangDongShouHuoDiZhiTianJia,
  ApiResponseCorpWehiallAuthUrlResp,
  ApiResponseCurrentAuthResp,
  ApiResponseWhiteDetailResp,
  ApiResponseWhiteLinkDoorResp,
  ApiResponseDescribeFaceVerifyResponse,
  ApiResponseDesktopAllInfoResp,
  ApiResponseDesktopNoActiveResp,
  ApiResponseDesktopResp,
  ApiResponseEntReSetResp,
  ApiResponseHeaderEmpowerSmsInfo,
  ApiResponseImportDesktopResp,
  ApiResponseInviteDoorReInfo,
  ApiResponseInviteJoinEchoResp,
  ApiResponseInviteLoginResp,
  ApiResponseInviteSetResp,
  ApiResponseJSONArray,
  ApiResponseJudgeSwitchDoorLimitResp,
  ApiResponseListAuthDoorOrgInfoResp,
  ApiResponseListWhiteResp,
  ApiResponseListEmpowerWhiteResp,
  ApiResponseListEpEntTreeResp,
  ApiResponseListExtWhiteResp,
  ApiResponseListImportDesktopResp,
  ApiResponseListMenuResp,
  ApiResponseListPostResp,
  ApiResponseListQueryCatPageHomeResp,
  ApiResponseListPinkInfo,
  ApiResponseListPinkResq,
  ApiResponseListSelectorDesktopResp,
  ApiResponseListSuperManResp,
  ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua,
  ApiResponseListTreelong,
  ApiResponseListlong,
  ApiResponseListstring,
  ApiResponseListZhiXieChangChuXing,
  ApiResponseListZhiXieChangFangDongXinXi,
  ApiResponseListWenJianShangChuanXiangYing,
  ApiResponseListShengChengYaoQing,
  ApiResponseListFangDongXinXi,
  ApiResponseListFangXingQuDaoZhuangTaiChuXing,
  ApiResponseMapstringobject,
  ApiResponseMapstringstring,
  ApiResponseMenuCheckedResp,
  ApiResponseMenuResp,
  ApiResponseOcrHappyLicenseBO,
  ApiResponseOcrIdCardBackResp,
  ApiResponseOcrIdCardFrontResp,
  ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua,
  ApiResponsePageZhiXieChangBoJuZiXinXi,
  ApiResponseQueryAccInfoResp,
  ApiResponseQueryCertFormResp,
  ApiResponseQueryDoorPageHomeResp,
  ApiResponseQueryJudgeClaimResp,
  ApiResponseQueryWalletBalanceResp,
  ApiResponseOrangeerResultResp,
  ApiResponsePinkInfoResq,
  ApiResponseScanReQrResp,
  ApiResponseSendActiveMessageResp,
  ApiResponseShiftDesktopResp,
  ApiResponseVerificationResp,
  ApiResponseVoid,
  ApiResponseboolean,
  ApiResponselong,
  ApiResponsestring,
  ApiResponseDouJiangJiFangDongXinXiXiangQingBiao,
  ApiResponseDouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu,
  ApiResponseDouJiangJiFangXingXinXi,
  ApiResponseZhiXieChangJianDanFangXing,
  ApiResponseZhiXieChangZhuTiXinXi,
  ApiResponseZhiXieChangBoJuZiXinXi,
  ApiResponseZhiXieChangFangDongXinXiXiangQing,
  ApiResponseGuanLianMaoZiYongDao,
  ApiResponseGuanLianMaoZiXiangQing,
  ApiResponseShenHeTongJiHuanCunSanShiMiao,
  ApiResponseBiXieDao,
  ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo,
  ApiResponseJianChaYaoQingMa,
  ApiResponseFangDongXinXi,
  ApiResponseYaoQingZhuCe,
  Attachment,
  AuditRelationTotalReq,
  AuditorInfo,
  AuthDoorOrgInfoResp,
  AuthOrgKeyBorardReq,
  BasePageReq,
  ChannelAppGratefulConfigAddReq,
  ChannelAppGratefulConfigResp,
  ChannelAppGratefulConfigUpReq,
  ChannelComLoginReq,
  ChannelKeyBorardResp,
  CharSequence,
  ComLoginReq,
  ComLoginResp,
  ComPage,
  ComPageDesktopAddRecordResp,
  ComPageDesktopComplexResp,
  ComPageDesktopResp,
  ComPageDoorCredentialResp,
  ComPageDoorIdentificationResp,
  ComPageEpDesktopResp,
  ComPageInviteDesktopResp,
  ComPageLogLoginResp,
  ComPageRelationDoorInfo,
  ComPageZhiXieChangChuXing,
  ComPageGuanLianShenHeXinXi,
  ComPageXiaoYuanZhuoGuanLi,
  ComPageBiXieDao,
  ComPageBiXieDaoYongDao,
  ComPageTianJiaDouJiangJiBeiJing,
  ComPageFangDongShouHuoDiZhiTianJia,
  CompanyInfo,
  Comparableobject,
  CorpWehiallAuthUrlResp,
  CurrentAuthResp,
  WhiteAddReq,
  WhiteDetailResp,
  WhiteLinkDoorReq,
  WhiteLinkDoorResp,
  WhiteResp,
  WhiteUpReq,
  DescribeFaceVerifyResponse,
  DescribeFaceVerifyResponseResultObject,
  DesktopAddRecordResp,
  DesktopAddReq,
  DesktopAllInfoResp,
  DesktopComplexResp,
  DesktopWhiteResp,
  DesktopJobResp,
  DesktopNoActiveResp,
  DesktopPostResp,
  DesktopResp,
  DesktopRespReq,
  DesktopRespRes,
  DesktopSelectorReq,
  DesktopSimpleListReq,
  DesktopUpReq,
  EmpowerWhiteResp,
  EntInviteConfig,
  EntReSetReq,
  EntReSetResp,
  DoorAuditReq,
  DoorBeneficiaryReq,
  DoorBeneficiaryResp,
  DoorCredentialResp,
  DoorIdentificationReq,
  DoorIdentificationResp,
  DoorIdentificationType,
  DoorShareholderReq,
  DoorShareholderResp,
  EpDesktopResp,
  EpEntTreeResp,
  ExtWhiteResp,
  FileSystemResource,
  HeaderEmpowerSmsInfo,
  ImportDesktopErrorData,
  ImportDesktopResp,
  InitAgengConfigReq,
  InputStream,
  InviteDesktopResp,
  InviteDoorReInfo,
  InviteJoinEchoResp,
  InviteLoginReq,
  InviteLoginResp,
  InviteRePlatFromOrgReq,
  InviteSetResp,
  JobAddDesktopReq,
  JobResp,
  JudgeSwitchDoorLimitResp,
  LogLoginResp,
  MenuCheckedResp,
  MenuDataScopeReq,
  MenuDataScopeResp,
  MenuResp,
  OcrHappyLicenseBO,
  OcrIdCardBackResp,
  OcrIdCardFrontResp,
  OcrImageReq,
  OrderItem,
  OutputStream,
  PageDesktopAddRecordReq,
  PageDoorCredentialReq,
  PageInvoiceReq,
  PageSysDictDuiXiangnullZhiBuXuLieHua,
  PageZhiXieChangBoJuZiXinXi,
  CatVerifyReq,
  CatnelCertificate,
  StationDesktopAuthReq,
  PostAddOrUpReq,
  PostResp,
  QueryAccInfoResp,
  QueryCertFormResp,
  QueryDesktopByPhoneOrNameReq,
  QueryDoorPageHomeResp,
  QueryInviteDesktopReq,
  QueryJobReq,
  QueryJudgeClaimResp,
  QueryCatPageHomeResp,
  QueryWalletBalanceResp,
  ReEntMeta,
  ReDoorInfo,
  RefuseJoinReq,
  OrangeerCertificateInfo,
  OrangeerResultResp,
  RelationHappyTypeInfo,
  RelationDoorInfo,
  RemoveDesktopReq,
  PinkAddReq,
  PinkBaseUpReq,
  PinkConfigInfo,
  PinkInfo,
  PinkInfoResq,
  PinkMenuUpReq,
  PinkResq,
  RouterMetaResp,
  RouterResp,
  ScanReQrResp,
  SelectorDesktopResp,
  SendActiveMessageReq,
  SendActiveMessageResp,
  SetPassWordReq,
  ShiftDesktopResp,
  ShiftLeader,
  SuperCodeVerifyReq,
  SuperManResp,
  SysDictDuiXiangnullZhiBuXuLieHua,
  TreeNodeConfig,
  Type,
  KeyBorardJoinDoorReq,
  VerificationResp,
  DouJiangJiFangDongXinXiXiangQingBiao,
  DouJiangJiFangXingXinXi,
  DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu,
  DouJiangJiBeiJingZhuCeZhuanYe,
  ZhiXieChangZhiNenPiaoJiaFangXing,
  ZhiXieChangJianDanFangXing,
  ZhiXieChangJianDanFangXing0,
  ZhiXieChangZhuTiXinXi,
  ZhiXieChangBoJuZiXinXi,
  ZhiXieChangBoJuZiXinXi0,
  ZhiXieChangChuXing,
  ZhiXieChangChuXing0,
  ZhiXieChangFangDongXinXi,
  ZhiXieChangFangDongXinXiXiangQing,
  ZhiXieChangFangDongXinXiXiangQing0,
  XiuGaiDouJiangJiXinXi,
  XiuGaiMiMa,
  MaoZiGuanLianFaQiGuanLianXinXi,
  MaoZiGuanLianYouGuanLianShenHeXinXi,
  GuanLianMaoZiYongDao,
  GuanLianMaoZiXiangQing,
  GuanLianShenHeXinXi,
  FenYeChuXingDouJiangJiBeiJing,
  FenYeChuXingSuoYouZhiXieChang,
  QieHuanMoRenDiZhi,
  ChuangJianZhiXieChang,
  XiaoYuanZhuoGuanLi,
  XiaoYuanZhuoGuanLi0,
  ShenHeTongJiHuanCunSanShiMiao,
  ShenHeTongGuo,
  ZhaoHuiMiMa,
  BiXieDaoZhongXinChuXingGuoLvTiaoJian,
  BiXieDaoRuCan,
  BiXieDao,
  BiXieDao0,
  BiXieDao1,
  BiXieDaoYongDao,
  ShuJuYiZhiXingErCiQueRenCanShu,
  ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingMeiLiCaoZuo,
  ShuJuYiZhiXingCaoZuoFanHuiJieGuo,
  WenJianShangChuanXiangYing,
  XiaoYanJieGuo,
  JianChaYaoQingMa,
  ZhuCeQingQiu,
  TianJiaDouJiangJiBeiJing,
  TianJiaDouJiangJiBeiJing0,
  QuDaoZhiXieChangJieMengQingQiuRuCan,
  ShengChengYaoQing,
  ShengChengYaoQing0,
  FangDongXinXi,
  FangDongShouHuoDiZhiTianJia,
  FangDongShouHuoDiZhiTianJia0,
  FangXingQuDaoZhuangTaiChuXing,
  YaoQingZhuCe,
  YaoQingZhuCe0,
}
