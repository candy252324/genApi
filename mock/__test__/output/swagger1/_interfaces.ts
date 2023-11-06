import Mock from 'better-mock'
export function AccInfoResp() {
  return {
    mobile: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
  }
}
export function AddOrUpdateCredentialReq() {
  return {
    'attachments|1-20': [Attachment()],
    credentialNo: Mock.mock('@string(5,100)'),
    credentialType: Mock.mock('@string(5,100)'),
    credentialTypeCode: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    issuingDate: Mock.mock('@datetime'),
    office: Mock.mock('@string(5,100)'),
    scope: Mock.mock('@string(5,100)'),
    scopeCode: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
    validDate: Mock.mock('@datetime'),
  }
}
export function AddOrUpdateInviteSetReq() {
  return {
    audit: Mock.mock('@boolean'),
    'auditorIds|1-20': [Mock.mock('@string(5,100)')],
    id: Mock.mock('@guid'),
    open: Mock.mock('@boolean'),
    shareType: Mock.mock('@string(5,100)'),
  }
}
export function AddOrUpdateJobReq() {
  return {
    id: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
    orderNum: Mock.mock('@integer(3,1000)'),
    parentId: Mock.mock('@guid'),
  }
}
export function AddVerificationImageReq() {
  return {
    name: Mock.mock('@string(5,100)'),
    resource: Mock.mock('@string(5,100)'),
    sourceEnum: Mock.mock('@string(5,100)'),
  }
}
export function AgentConfigResp() {
  return {
    agentId: Mock.mock('@guid'),
    corpId: Mock.mock('@guid'),
    nonceStr: Mock.mock('@string(5,100)'),
    signature: Mock.mock('@string(5,100)'),
    timestamp: Mock.mock('@datetime'),
  }
}
export function AliMpLoginReq() {
  return {
    appid: Mock.mock('@guid'),
    clientType: Mock.mock('@string(5,100)'),
    clientVersion: Mock.mock('@string(5,100)'),
    deviceCode: Mock.mock('@string(5,100)'),
    deviceManufacturer: Mock.mock('@string(5,100)'),
    deviceModel: Mock.mock('@string(5,100)'),
    phoneData: Mock.mock('@string(5,100)'),
    sign: Mock.mock('@string(5,100)'),
  }
}
export function ApiResponse() {
  return {
    code: 200,
    data: Mock.mock(''),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseAccInfoResp() {
  return {
    code: 200,
    data: Mock.mock('AccInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseAgentConfigResp() {
  return {
    code: 200,
    data: Mock.mock('AgentConfigResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseChannelAppGratefulConfigResp() {
  return {
    code: 200,
    data: Mock.mock('ChannelAppGratefulConfigResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseChannelKeyBorardResp() {
  return {
    code: 200,
    data: Mock.mock('ChannelKeyBorardResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComLoginResp() {
  return {
    code: 200,
    data: Mock.mock('ComLoginResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageDesktopAddRecordResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageDesktopAddRecordResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageDesktopComplexResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageDesktopComplexResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageDesktopResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageDesktopResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageDoorCredentialResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageDoorCredentialResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageDoorIdentificationResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageDoorIdentificationResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageEpDesktopResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageEpDesktopResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageInviteDesktopResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageInviteDesktopResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageLogLoginResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageLogLoginResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageZhiXieChangChuXing() {
  return {
    code: 200,
    data: Mock.mock('ComPageZhiXieChangChuXing()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageGuanLianShenHeXinXi() {
  return {
    code: 200,
    data: Mock.mock('ComPageGuanLianShenHeXinXi()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageXiaoYuanZhuoGuanLi() {
  return {
    code: 200,
    data: Mock.mock('ComPageXiaoYuanZhuoGuanLi()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageBiXieDaoYongDao() {
  return {
    code: 200,
    data: Mock.mock('ComPageBiXieDaoYongDao()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageTianJiaDouJiangJiBeiJing() {
  return {
    code: 200,
    data: Mock.mock('ComPageTianJiaDouJiangJiBeiJing()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageFangDongShouHuoDiZhiTianJia() {
  return {
    code: 200,
    data: Mock.mock('ComPageFangDongShouHuoDiZhiTianJia()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseCorpWehiallAuthUrlResp() {
  return {
    code: 200,
    data: Mock.mock('CorpWehiallAuthUrlResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseCurrentAuthResp() {
  return {
    code: 200,
    data: Mock.mock('CurrentAuthResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseWhiteDetailResp() {
  return {
    code: 200,
    data: Mock.mock('WhiteDetailResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseWhiteLinkDoorResp() {
  return {
    code: 200,
    data: Mock.mock('WhiteLinkDoorResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseDescribeFaceVerifyResponse() {
  return {
    code: 200,
    data: Mock.mock('DescribeFaceVerifyResponse()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseDesktopAllInfoResp() {
  return {
    code: 200,
    data: Mock.mock('DesktopAllInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseDesktopNoActiveResp() {
  return {
    code: 200,
    data: Mock.mock('DesktopNoActiveResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseDesktopResp() {
  return {
    code: 200,
    data: Mock.mock('DesktopResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseEntReSetResp() {
  return {
    code: 200,
    data: Mock.mock('EntReSetResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHeaderEmpowerSmsInfo() {
  return {
    code: 200,
    data: Mock.mock('HeaderEmpowerSmsInfo()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseImportDesktopResp() {
  return {
    code: 200,
    data: Mock.mock('ImportDesktopResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseInviteDoorReInfo() {
  return {
    code: 200,
    data: Mock.mock('InviteDoorReInfo()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseInviteJoinEchoResp() {
  return {
    code: 200,
    data: Mock.mock('InviteJoinEchoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseInviteLoginResp() {
  return {
    code: 200,
    data: Mock.mock('InviteLoginResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseInviteSetResp() {
  return {
    code: 200,
    data: Mock.mock('InviteSetResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseJSONArray() {
  return {
    code: 200,
    'data|1-20': [Mock.mock('')],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseJudgeSwitchDoorLimitResp() {
  return {
    code: 200,
    data: Mock.mock('JudgeSwitchDoorLimitResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListAuthDoorOrgInfoResp() {
  return {
    code: 200,
    'data|1-20': [AuthDoorOrgInfoResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListWhiteResp() {
  return {
    code: 200,
    'data|1-20': [WhiteResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListEmpowerWhiteResp() {
  return {
    code: 200,
    'data|1-20': [EmpowerWhiteResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListEpEntTreeResp() {
  return {
    code: 200,
    'data|1-20': [EpEntTreeResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListExtWhiteResp() {
  return {
    code: 200,
    'data|1-20': [ExtWhiteResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListImportDesktopResp() {
  return {
    code: 200,
    'data|1-20': [ImportDesktopResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListMenuResp() {
  return {
    code: 200,
    'data|1-20': [MenuResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListPostResp() {
  return {
    code: 200,
    'data|1-20': [PostResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListQueryCatPageHomeResp() {
  return {
    code: 200,
    'data|1-20': [QueryCatPageHomeResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListPinkInfo() {
  return {
    code: 200,
    'data|1-20': [PinkInfo()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListPinkResq() {
  return {
    code: 200,
    'data|1-20': [PinkResq()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListSelectorDesktopResp() {
  return {
    code: 200,
    'data|1-20': [SelectorDesktopResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListSuperManResp() {
  return {
    code: 200,
    'data|1-20': [SuperManResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    code: 200,
    'data|1-20': [SysDictDuiXiangnullZhiBuXuLieHua()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListTreelong() {
  return {
    code: 200,
    'data|1-20': [Mock.mock('')],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListlong() {
  return {
    code: 200,
    'data|1-20': [Mock.mock('@string(5,100)')],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListstring() {
  return {
    code: 200,
    'data|1-20': [Mock.mock('@string(5,100)')],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListZhiXieChangChuXing() {
  return {
    code: 200,
    'data|1-20': [ZhiXieChangChuXing()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListZhiXieChangFangDongXinXi() {
  return {
    code: 200,
    'data|1-20': [ZhiXieChangFangDongXinXi()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListWenJianShangChuanXiangYing() {
  return {
    code: 200,
    'data|1-20': [WenJianShangChuanXiangYing()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListShengChengYaoQing() {
  return {
    code: 200,
    'data|1-20': [ShengChengYaoQing0()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListFangDongXinXi() {
  return {
    code: 200,
    'data|1-20': [FangDongXinXi()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListFangXingQuDaoZhuangTaiChuXing() {
  return {
    code: 200,
    'data|1-20': [FangXingQuDaoZhuangTaiChuXing()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseMapstringobject() {
  return {
    code: 200,
    data: Mock.mock(''),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseMapstringstring() {
  return {
    code: 200,
    data: Mock.mock(''),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseMenuCheckedResp() {
  return {
    code: 200,
    data: Mock.mock('MenuCheckedResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseMenuResp() {
  return {
    code: 200,
    data: Mock.mock('MenuResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseOcrHappyLicenseBO() {
  return {
    code: 200,
    data: Mock.mock('OcrHappyLicenseBO()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseOcrIdCardBackResp() {
  return {
    code: 200,
    data: Mock.mock('OcrIdCardBackResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseOcrIdCardFrontResp() {
  return {
    code: 200,
    data: Mock.mock('OcrIdCardFrontResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    code: 200,
    data: Mock.mock('PageSysDictDuiXiangnullZhiBuXuLieHua()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponsePageZhiXieChangBoJuZiXinXi() {
  return {
    code: 200,
    data: Mock.mock('PageZhiXieChangBoJuZiXinXi()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseQueryAccInfoResp() {
  return {
    code: 200,
    data: Mock.mock('QueryAccInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseQueryCertFormResp() {
  return {
    code: 200,
    data: Mock.mock('QueryCertFormResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseQueryDoorPageHomeResp() {
  return {
    code: 200,
    data: Mock.mock('QueryDoorPageHomeResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseQueryJudgeClaimResp() {
  return {
    code: 200,
    data: Mock.mock('QueryJudgeClaimResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseQueryWalletBalanceResp() {
  return {
    code: 200,
    data: Mock.mock('QueryWalletBalanceResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseOrangeerResultResp() {
  return {
    code: 200,
    data: Mock.mock('OrangeerResultResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponsePinkInfoResq() {
  return {
    code: 200,
    data: Mock.mock('PinkInfoResq()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseScanReQrResp() {
  return {
    code: 200,
    data: Mock.mock('ScanReQrResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseSendActiveMessageResp() {
  return {
    code: 200,
    data: Mock.mock('SendActiveMessageResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseShiftDesktopResp() {
  return {
    code: 200,
    data: Mock.mock('ShiftDesktopResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseVerificationResp() {
  return {
    code: 200,
    data: Mock.mock('VerificationResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseVoid() {
  return {
    code: 200,
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseboolean() {
  return {
    code: 200,
    data: Mock.mock('@boolean'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponselong() {
  return {
    code: 200,
    data: Mock.mock('@string(5,100)'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponsestring() {
  return {
    code: 200,
    data: Mock.mock('@string(5,100)'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseDouJiangJiFangDongXinXiXiangQingBiao() {
  return {
    code: 200,
    data: Mock.mock('DouJiangJiFangDongXinXiXiangQingBiao()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseDouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu() {
  return {
    code: 200,
    data: Mock.mock(
      'DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu()'
    ),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseDouJiangJiFangXingXinXi() {
  return {
    code: 200,
    data: Mock.mock('DouJiangJiFangXingXinXi()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseZhiXieChangJianDanFangXing() {
  return {
    code: 200,
    data: Mock.mock('ZhiXieChangJianDanFangXing0()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseZhiXieChangZhuTiXinXi() {
  return {
    code: 200,
    data: Mock.mock('ZhiXieChangZhuTiXinXi()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseZhiXieChangBoJuZiXinXi() {
  return {
    code: 200,
    data: Mock.mock('ZhiXieChangBoJuZiXinXi0()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseZhiXieChangFangDongXinXiXiangQing() {
  return {
    code: 200,
    data: Mock.mock('ZhiXieChangFangDongXinXiXiangQing0()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseGuanLianMaoZiYongDao() {
  return {
    code: 200,
    data: Mock.mock('GuanLianMaoZiYongDao()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseGuanLianMaoZiXiangQing() {
  return {
    code: 200,
    data: Mock.mock('GuanLianMaoZiXiangQing()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseShenHeTongJiHuanCunSanShiMiao() {
  return {
    code: 200,
    data: Mock.mock('ShenHeTongJiHuanCunSanShiMiao()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseBiXieDao() {
  return {
    code: 200,
    data: Mock.mock('BiXieDao0()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo() {
  return {
    code: 200,
    data: Mock.mock('ShuJuYiZhiXingCaoZuoFanHuiJieGuo()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseJianChaYaoQingMa() {
  return {
    code: 200,
    data: Mock.mock('JianChaYaoQingMa()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseFangDongXinXi() {
  return {
    code: 200,
    data: Mock.mock('FangDongXinXi()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseYaoQingZhuCe() {
  return {
    code: 200,
    data: Mock.mock('YaoQingZhuCe()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function Attachment() {
  return {
    id: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
    type: Mock.mock('@string(5,100)'),
    url: Mock.mock('@url'),
  }
}
export function AuditRelationTotalReq() {
  return {
    endTime: Mock.mock('@datetime'),
    startTime: Mock.mock('@datetime'),
  }
}
export function AuditorInfo() {
  return {
    id: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
  }
}
export function AuthDoorOrgInfoResp() {
  return {
    authCount: Mock.mock(''),
    authStatus: Mock.mock('@string(5,100)'),
    authTypeMap: Mock.mock(''),
    chiefly: Mock.mock('@boolean'),
    whiteChildrenDesktopCount: Mock.mock('@string(5,100)'),
    whiteLinkDoorResp: Mock.mock('WhiteLinkDoorResp()'),
    id: Mock.mock('@guid'),
    licenseUnifiedCode: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    serialNum: Mock.mock('@string(5,100)'),
  }
}
export function AuthOrgKeyBorardReq() {
  return {
    authFlag: Mock.mock('@boolean'),
    certType: Mock.mock('@string(5,100)'),
    whiteId: Mock.mock('@guid'),
    'desktopIds|1-20': [Mock.mock('@string(5,100)')],
    doorId: Mock.mock('@guid'),
  }
}
export function BasePageReq() {
  return {
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function ChannelAppGratefulConfigAddReq() {
  return {
    aesKey: Mock.mock('@string(5,100)'),
    aesToken: Mock.mock('@string(5,100)'),
    agentId: Mock.mock('@guid'),
    appKey: Mock.mock('@string(5,100)'),
    appSecret: Mock.mock('@string(5,100)'),
    channelType: Mock.mock('@string(5,100)'),
    corpId: Mock.mock('@guid'),
  }
}
export function ChannelAppGratefulConfigResp() {
  return {
    aesKey: Mock.mock('@string(5,100)'),
    aesToken: Mock.mock('@string(5,100)'),
    agentId: Mock.mock('@guid'),
    appKey: Mock.mock('@string(5,100)'),
    appSecret: Mock.mock('@string(5,100)'),
    appUrl: Mock.mock('@url'),
    channelType: Mock.mock('@string(5,100)'),
    corpId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    manUrl: Mock.mock('@url'),
    outIp: Mock.mock('@string(5,100)'),
    pcUrl: Mock.mock('@url'),
    recUrl: Mock.mock('@url'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function ChannelAppGratefulConfigUpReq() {
  return {
    aesKey: Mock.mock('@string(5,100)'),
    aesToken: Mock.mock('@string(5,100)'),
    agentId: Mock.mock('@guid'),
    appKey: Mock.mock('@string(5,100)'),
    appSecret: Mock.mock('@string(5,100)'),
    channelType: Mock.mock('@string(5,100)'),
    corpId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function ChannelComLoginReq() {
  return {
    blue: Mock.mock('@string(5,100)'),
    certificate: Mock.mock('@string(5,100)'),
    channelCorpId: Mock.mock('@guid'),
    channelDesktopId: Mock.mock('@guid'),
    channelType: Mock.mock('@string(5,100)'),
    clientType: Mock.mock('@string(5,100)'),
    clientVersion: Mock.mock('@string(5,100)'),
    deviceCode: Mock.mock('@string(5,100)'),
    deviceManufacturer: Mock.mock('@string(5,100)'),
    deviceModel: Mock.mock('@string(5,100)'),
    loginModeEnum: Mock.mock('@string(5,100)'),
    uuid: Mock.mock('@guid'),
  }
}
export function ChannelKeyBorardResp() {
  return {
    channelCorpId: Mock.mock('@guid'),
    channelDesktopId: Mock.mock('@guid'),
    channelType: Mock.mock('@string(5,100)'),
  }
}
export function CharSequence() {}
export function ComLoginReq() {
  return {
    blue: Mock.mock('@string(5,100)'),
    certificate: Mock.mock('@string(5,100)'),
    clientType: Mock.mock('@string(5,100)'),
    clientVersion: Mock.mock('@string(5,100)'),
    deviceCode: Mock.mock('@string(5,100)'),
    deviceManufacturer: Mock.mock('@string(5,100)'),
    deviceModel: Mock.mock('@string(5,100)'),
    loginModeEnum: Mock.mock('@string(5,100)'),
    uuid: Mock.mock('@guid'),
  }
}
export function ComLoginResp() {
  return {
    code: 200,
    newKeyBorard: Mock.mock('@boolean'),
    setPassWord: Mock.mock('@boolean'),
    token: Mock.mock('@string(5,100)'),
    tokenTimeOut: Mock.mock('@datetime'),
  }
}
export function ComPage() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [Mock.mock('')],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageDesktopAddRecordResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [DesktopAddRecordResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageDesktopComplexResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [DesktopComplexResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageDesktopResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [DesktopResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageDoorCredentialResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [DoorCredentialResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageDoorIdentificationResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [DoorIdentificationResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageEpDesktopResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [EpDesktopResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageInviteDesktopResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [InviteDesktopResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageLogLoginResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [LogLoginResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageRelationDoorInfo() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [RelationDoorInfo()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageZhiXieChangChuXing() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [ZhiXieChangChuXing()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageGuanLianShenHeXinXi() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [GuanLianShenHeXinXi()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageXiaoYuanZhuoGuanLi() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [XiaoYuanZhuoGuanLi0()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageBiXieDao() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [BiXieDao1()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageBiXieDaoYongDao() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [BiXieDaoYongDao()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageTianJiaDouJiangJiBeiJing() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [TianJiaDouJiangJiBeiJing()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageFangDongShouHuoDiZhiTianJia() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [FangDongShouHuoDiZhiTianJia0()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function CompanyInfo() {
  return {
    belongOrg: Mock.mock('@string(5,100)'),
    bondType: Mock.mock('@string(5,100)'),
    happyScope: Mock.mock('@string(5,100)'),
    happyTerm: Mock.mock('@string(5,100)'),
    category: Mock.mock('@string(5,100)'),
    checkDate: Mock.mock('@datetime'),
    city: Mock.mock('@city'),
    companyId: Mock.mock('@guid'),
    companyName: Mock.mock('@string(5,100)'),
    companyScore: Mock.mock('@string(5,100)'),
    companyType: Mock.mock('@string(5,100)'),
    contributedCapital: Mock.mock('@string(5,100)'),
    createTime: Mock.mock('@datetime'),
    creditCode: Mock.mock('@string(5,100)'),
    district: Mock.mock('@string(5,100)'),
    emails: Mock.mock('@string(5,100)'),
    estiblishTime: Mock.mock('@datetime'),
    firstPosition: Mock.mock('@string(5,100)'),
    labelListV2: Mock.mock('@string(5,100)'),
    logo: Mock.mock('@string(5,100)'),
    nameen: Mock.mock('@string(5,100)'),
    newtestName: Mock.mock('@string(5,100)'),
    orgNumber: Mock.mock('@string(5,100)'),
    phoneNum: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    regCapital: Mock.mock('@string(5,100)'),
    regLocation: Mock.mock('@string(5,100)'),
    regNumber: Mock.mock('@string(5,100)'),
    regStatus: Mock.mock('@string(5,100)'),
    socialStaffNum: Mock.mock('@string(5,100)'),
    staffSize: Mock.mock('@string(5,100)'),
    taxCode: Mock.mock('@string(5,100)'),
    taxpayerQualification: Mock.mock('@string(5,100)'),
    updateTime: Mock.mock('@datetime'),
    websites: Mock.mock('@string(5,100)'),
  }
}
export function Comparableobject() {}
export function CorpWehiallAuthUrlResp() {
  return {
    authUrl: Mock.mock('@url'),
  }
}
export function CurrentAuthResp() {
  return {
    'menuRoute|1-20': [RouterResp()],
    'permission|1-20': [Mock.mock('@string(5,100)')],
  }
}
export function WhiteAddReq() {
  return {
    whiteName: Mock.mock('@string(5,100)'),
    leaderDesktopId: Mock.mock('@guid'),
    mark: Mock.mock('@string(5,100)'),
    orderNum: Mock.mock('@integer(3,1000)'),
    parentId: Mock.mock('@guid'),
    profile: Mock.mock('@string(5,100)'),
    scaleType: Mock.mock('@string(5,100)'),
  }
}
export function WhiteDetailResp() {
  return {
    ancestors: Mock.mock('@string(5,100)'),
    channelWhiteName: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    whiteCode: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    email: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    leaderDesktopId: Mock.mock('@guid'),
    leaderDesktopInfo: Mock.mock('DesktopComplexResp()'),
    mark: Mock.mock('@string(5,100)'),
    markDesc: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    orderNum: Mock.mock('@integer(3,1000)'),
    parentCode: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
    parentName: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    profile: Mock.mock('@string(5,100)'),
    scaleType: Mock.mock('@string(5,100)'),
    scaleTypeDesc: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    statusDesc: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function WhiteLinkDoorReq() {
  return {
    whiteId: Mock.mock('@guid'),
    doorId: Mock.mock('@guid'),
    overFlag: Mock.mock('@boolean'),
  }
}
export function WhiteLinkDoorResp() {
  return {
    ancestors: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    whiteCode: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    email: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    leaderDesktopId: Mock.mock('@guid'),
    leaderKeyBorardId: Mock.mock('@guid'),
    linkStatus: Mock.mock('@boolean'),
    mark: Mock.mock('@string(5,100)'),
    markDesc: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    orderNum: Mock.mock('@integer(3,1000)'),
    parentCode: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
    phone: Mock.mock('@string(5,100)'),
    profile: Mock.mock('@string(5,100)'),
    scaleType: Mock.mock('@string(5,100)'),
    scaleTypeDesc: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    statusDesc: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function WhiteResp() {
  return {
    ancestors: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    whiteCode: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    email: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    leaderDesktopId: Mock.mock('@guid'),
    leaderKeyBorardId: Mock.mock('@guid'),
    linkStatus: Mock.mock('@boolean'),
    mark: Mock.mock('@string(5,100)'),
    markDesc: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    orderNum: Mock.mock('@integer(3,1000)'),
    parentCode: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
    phone: Mock.mock('@string(5,100)'),
    profile: Mock.mock('@string(5,100)'),
    scaleType: Mock.mock('@string(5,100)'),
    scaleTypeDesc: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    statusDesc: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function WhiteUpReq() {
  return {
    whiteName: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    leaderDesktopId: Mock.mock('@guid'),
    orderNum: Mock.mock('@integer(3,1000)'),
    profile: Mock.mock('@string(5,100)'),
    scaleType: Mock.mock('@string(5,100)'),
  }
}
export function DescribeFaceVerifyResponse() {
  return {
    code: 200,
    message: Mock.mock('@string(5,100)'),
    requestId: Mock.mock('@guid'),
    resultObject: Mock.mock('DescribeFaceVerifyResponseResultObject()'),
  }
}
export function DescribeFaceVerifyResponseResultObject() {
  return {
    deviceToken: Mock.mock('@string(5,100)'),
    identityInfo: Mock.mock('@string(5,100)'),
    materialInfo: Mock.mock('@string(5,100)'),
    passed: Mock.mock('@string(5,100)'),
    subCode: Mock.mock('@string(5,100)'),
  }
}
export function DesktopAddRecordResp() {
  return {
    addTime: Mock.mock('@datetime'),
    adderName: Mock.mock('@string(5,100)'),
    adderPhone: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    email: Mock.mock('@string(5,100)'),
    desktopName: Mock.mock('@string(5,100)'),
    desktopPhone: Mock.mock('@string(5,100)'),
    desktopStatus: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    joinTime: Mock.mock('@datetime'),
    refuse: Mock.mock('@string(5,100)'),
    'pink|1-20': [Mock.mock('@string(5,100)')],
  }
}
export function DesktopAddReq() {
  return {
    email: Mock.mock('@string(5,100)'),
    mainWhiteId: Mock.mock('@guid'),
    mobile: Mock.mock('@string(5,100)'),
    nickName: Mock.mock('@string(5,100)'),
    relation: Mock.mock('@string(5,100)'),
    'pinkIds|1-20': [Mock.mock('@string(5,100)')],
    sex: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function DesktopAllInfoResp() {
  return {
    'whiteRespList|1-20': [ExtWhiteResp()],
    desktopResp: Mock.mock('DesktopResp()'),
    'jobRespList|1-20': [JobResp()],
    'postRespList|1-20': [PostResp()],
    'pinkRespList|1-20': [PinkResq()],
  }
}
export function DesktopComplexResp() {
  return {
    authStatus: Mock.mock('@boolean'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    'whiteRespList|1-20': [DesktopWhiteResp()],
    email: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    'jobRespList|1-20': [DesktopJobResp()],
    mobile: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    nickName: Mock.mock('@string(5,100)'),
    'postRespList|1-20': [DesktopPostResp()],
    realAuth: Mock.mock('@boolean'),
    relation: Mock.mock('@string(5,100)'),
    sex: Mock.mock('@string(5,100)'),
    sexDesc: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
    keyBorardId: Mock.mock('@guid'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function DesktopWhiteResp() {
  return {
    whiteCode: Mock.mock('@string(5,100)'),
    whiteId: Mock.mock('@guid'),
    whiteName: Mock.mock('@string(5,100)'),
    desktopId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    mainWhite: Mock.mock('@boolean'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function DesktopJobResp() {
  return {
    desktopId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    jobCode: Mock.mock('@string(5,100)'),
    jobId: Mock.mock('@guid'),
    jobName: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function DesktopNoActiveResp() {
  return {
    count: Mock.mock('@integer(3,1000)'),
    'desktopResp|1-20': [DesktopRespRes()],
  }
}
export function DesktopPostResp() {
  return {
    desktopId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    postCode: Mock.mock('@string(5,100)'),
    postId: Mock.mock('@guid'),
    postName: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function DesktopResp() {
  return {
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    email: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    mobile: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    nickName: Mock.mock('@string(5,100)'),
    relation: Mock.mock('@string(5,100)'),
    sex: Mock.mock('@string(5,100)'),
    sexDesc: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
    keyBorardId: Mock.mock('@guid'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function DesktopRespReq() {
  return {
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    email: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    mobile: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    nickName: Mock.mock('@string(5,100)'),
    relation: Mock.mock('@string(5,100)'),
    sex: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
    keyBorardId: Mock.mock('@guid'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function DesktopRespRes() {
  return {
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    email: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    mobile: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    nickName: Mock.mock('@string(5,100)'),
    relation: Mock.mock('@string(5,100)'),
    sex: Mock.mock('@string(5,100)'),
    sexDesc: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
    keyBorardId: Mock.mock('@guid'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function DesktopSelectorReq() {
  return {
    whiteId: Mock.mock('@guid'),
    jobId: Mock.mock('@guid'),
  }
}
export function DesktopSimpleListReq() {
  return {
    id: Mock.mock('@guid'),
    mobile: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    status: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function DesktopUpReq() {
  return {
    'whiteIds|1-20': [Mock.mock('@string(5,100)')],
    email: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    'jodIds|1-20': [Mock.mock('@string(5,100)')],
    mainWhiteId: Mock.mock('@guid'),
    nickName: Mock.mock('@string(5,100)'),
    'postIds|1-20': [Mock.mock('@string(5,100)')],
    sex: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function EmpowerWhiteResp() {
  return {
    'children|1-20': [EmpowerWhiteResp()],
    id: Mock.mock('@guid'),
    info: Mock.mock('WhiteResp()'),
    label: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
    weight: Mock.mock('@string(5,100)'),
  }
}
export function EntInviteConfig() {
  return {
    auditState: Mock.mock('@boolean'),
    'auditor|1-20': [AuditorInfo()],
    doorId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    inviteType: Mock.mock('@string(5,100)'),
    module: Mock.mock('@string(5,100)'),
    openState: Mock.mock('@boolean'),
  }
}
export function EntReSetReq() {
  return {
    emInviteConfig: Mock.mock('EntInviteConfig()'),
    reInviteConfig: Mock.mock('EntInviteConfig()'),
    pinkConfigInfo: Mock.mock('PinkConfigInfo()'),
  }
}
export function EntReSetResp() {
  return {
    emInviteConfig: Mock.mock('EntInviteConfig()'),
    reInviteConfig: Mock.mock('EntInviteConfig()'),
    pinkConfigInfo: Mock.mock('PinkConfigInfo()'),
  }
}
export function DoorAuditReq() {
  return {
    endTime: Mock.mock('@datetime'),
    franchiseDoorName: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    startTime: Mock.mock('@datetime'),
  }
}
export function DoorBeneficiaryReq() {
  return {
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    doorAcctId: Mock.mock('@guid'),
    doorBeneficiaryGreen: Mock.mock('@string(5,100)'),
    doorBeneficiaryConctactPhone: Mock.mock('@string(5,100)'),
    doorBeneficiaryIdCardBackId: Mock.mock('@guid'),
    doorBeneficiaryIdCardFileId: Mock.mock('@guid'),
    doorBeneficiaryIdCardFrontId: Mock.mock('@guid'),
    doorBeneficiaryIdCardNo: Mock.mock('@string(5,100)'),
    doorBeneficiaryIdCardType: Mock.mock('@string(5,100)'),
    doorBeneficiaryIdCardValidDate: Mock.mock('@datetime'),
    doorBeneficiaryIdCardValidStartDate: Mock.mock('@datetime'),
    doorBeneficiaryIncomeType: Mock.mock('@string(5,100)'),
    doorBeneficiaryName: Mock.mock('@string(5,100)'),
    doorBeneficiaryPost: Mock.mock('@string(5,100)'),
    doorBeneficiaryShareRatio: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function DoorBeneficiaryResp() {
  return {
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    doorAcctId: Mock.mock('@guid'),
    doorBeneficiaryGreen: Mock.mock('@string(5,100)'),
    doorBeneficiaryConctactPhone: Mock.mock('@string(5,100)'),
    doorBeneficiaryIdCardBackId: Mock.mock('@guid'),
    doorBeneficiaryIdCardFileId: Mock.mock('@guid'),
    doorBeneficiaryIdCardFrontId: Mock.mock('@guid'),
    doorBeneficiaryIdCardNo: Mock.mock('@string(5,100)'),
    doorBeneficiaryIdCardType: Mock.mock('@string(5,100)'),
    doorBeneficiaryIdCardTypeDict: Mock.mock('SysDictDuiXiangnullZhiBuXuLieHua()'),
    doorBeneficiaryIdCardValidDate: Mock.mock('@datetime'),
    doorBeneficiaryIdCardValidStartDate: Mock.mock('@datetime'),
    doorBeneficiaryIncomeType: Mock.mock('@string(5,100)'),
    doorBeneficiaryName: Mock.mock('@string(5,100)'),
    doorBeneficiaryPost: Mock.mock('@string(5,100)'),
    doorBeneficiaryShareRatio: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function DoorCredentialResp() {
  return {
    'attachments|1-20': [Attachment()],
    credentialNo: Mock.mock('@string(5,100)'),
    credentialType: Mock.mock('@string(5,100)'),
    credentialTypeCode: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    issuingDate: Mock.mock('@datetime'),
    office: Mock.mock('@string(5,100)'),
    scope: Mock.mock('@string(5,100)'),
    scopeCode: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
    validDate: Mock.mock('@datetime'),
  }
}
export function DoorIdentificationReq() {
  return {
    alTicket: Mock.mock('@string(5,100)'),
    allEInvoiceStatus: Mock.mock('@string(5,100)'),
    authStatus: Mock.mock('@string(5,100)'),
    commontStatus: Mock.mock('@string(5,100)'),
    esignALlStatus: Mock.mock('@string(5,100)'),
    esignOnlySignStatus: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    legalCat: Mock.mock('@string(5,100)'),
    licenseUnifiedCode: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    serialNum: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
    walletStatus: Mock.mock('@string(5,100)'),
  }
}
export function DoorIdentificationResp() {
  return {
    authStatus: Mock.mock('@string(5,100)'),
    authTypeMap: Mock.mock(''),
    'bizAuthType|1-20': [DoorIdentificationType()],
    chiefly: Mock.mock('@boolean'),
    whiteLinkDoorResp: Mock.mock('WhiteLinkDoorResp()'),
    id: Mock.mock('@guid'),
    licenseUnifiedCode: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    serialNum: Mock.mock('@string(5,100)'),
  }
}
export function DoorIdentificationType() {
  return {
    clazz: Mock.mock('@string(5,100)'),
    cost: Mock.mock('@string(5,100)'),
    function: Mock.mock('@string(5,100)'),
    institution: Mock.mock('@string(5,100)'),
    interests: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    type: Mock.mock('@string(5,100)'),
  }
}
export function DoorShareholderReq() {
  return {
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    doorAcctId: Mock.mock('@guid'),
    doorShareholderIdCardBackFileId: Mock.mock('@guid'),
    doorShareholderIdCardFileId: Mock.mock('@guid'),
    doorShareholderIdCardNo: Mock.mock('@string(5,100)'),
    doorShareholderIdCardType: Mock.mock('@string(5,100)'),
    doorShareholderIdCardValidDate: Mock.mock('@datetime'),
    doorShareholderIdCardValidStartDate: Mock.mock('@datetime'),
    doorShareholderName: Mock.mock('@string(5,100)'),
    doorShareholderShareRatio: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function DoorShareholderResp() {
  return {
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    doorAcctId: Mock.mock('@guid'),
    doorShareholderIdCardBackFileId: Mock.mock('@guid'),
    doorShareholderIdCardFileId: Mock.mock('@guid'),
    doorShareholderIdCardNo: Mock.mock('@string(5,100)'),
    doorShareholderIdCardType: Mock.mock('@string(5,100)'),
    doorShareholderIdCardTypeSysDict: Mock.mock('SysDictDuiXiangnullZhiBuXuLieHua()'),
    doorShareholderIdCardValidDate: Mock.mock('@datetime'),
    doorShareholderIdCardValidStartDate: Mock.mock('@datetime'),
    doorShareholderName: Mock.mock('@string(5,100)'),
    doorShareholderShareRatio: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function EpDesktopResp() {
  return {
    authStatus: Mock.mock('@boolean'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    'whiteRespList|1-20': [DesktopWhiteResp()],
    email: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    jmAuthStatus: Mock.mock('@string(5,100)'),
    'jobRespList|1-20': [DesktopJobResp()],
    mobile: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    nickName: Mock.mock('@string(5,100)'),
    'postRespList|1-20': [DesktopPostResp()],
    realAuth: Mock.mock('@boolean'),
    refuseReason: Mock.mock('@string(5,100)'),
    relation: Mock.mock('@string(5,100)'),
    pinkName: Mock.mock('@string(5,100)'),
    sex: Mock.mock('@string(5,100)'),
    sexDesc: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
    keyBorardId: Mock.mock('@guid'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function EpEntTreeResp() {
  return {
    'entMetas|1-20': [ReEntMeta()],
    id: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
  }
}
export function ExtWhiteResp() {
  return {
    ancestors: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    whiteCode: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    email: Mock.mock('@string(5,100)'),
    desktopId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    leaderDesktopId: Mock.mock('@guid'),
    leaderKeyBorardId: Mock.mock('@guid'),
    linkStatus: Mock.mock('@boolean'),
    mainWhite: Mock.mock('@boolean'),
    mark: Mock.mock('@string(5,100)'),
    markDesc: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    orderNum: Mock.mock('@integer(3,1000)'),
    parentCode: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
    phone: Mock.mock('@string(5,100)'),
    profile: Mock.mock('@string(5,100)'),
    scaleType: Mock.mock('@string(5,100)'),
    scaleTypeDesc: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    statusDesc: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function FileSystemResource() {
  return {
    description: Mock.mock('@string(5,100)'),
    file: Mock.mock(''),
    filename: Mock.mock('@string(5,100)'),
    inputStream: Mock.mock('InputStream()'),
    open: Mock.mock('@boolean'),
    outputStream: Mock.mock('OutputStream()'),
    path: Mock.mock('@string(5,100)'),
    readable: Mock.mock('@boolean'),
    uri: Mock.mock('@string(5,100)'),
    url: Mock.mock('@url'),
    writable: Mock.mock('@boolean'),
  }
}
export function HeaderEmpowerSmsInfo() {
  return {
    doorId: Mock.mock('@guid'),
    phone: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function ImportDesktopErrorData() {
  return {
    error: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    mobile: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
  }
}
export function ImportDesktopResp() {
  return {
    'errorDataList|1-20': [ImportDesktopErrorData()],
    errorNum: Mock.mock('@integer(3,1000)'),
    errorUrl: Mock.mock('@url'),
    importDate: Mock.mock('@datetime'),
    succNum: Mock.mock('@integer(3,1000)'),
  }
}
export function InitAgengConfigReq() {
  return {
    initPage: Mock.mock('@string(5,100)'),
  }
}
export function InputStream() {}
export function InviteDesktopResp() {
  return {
    applyReason: Mock.mock('@string(5,100)'),
    applyTime: Mock.mock('@datetime'),
    whiteCode: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    desktopStatus: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    inviterName: Mock.mock('@string(5,100)'),
    inviterPhone: Mock.mock('@string(5,100)'),
    joinTime: Mock.mock('@datetime'),
    proposerId: Mock.mock('@guid'),
    proposerName: Mock.mock('@string(5,100)'),
    proposerPhone: Mock.mock('@string(5,100)'),
    refuse: Mock.mock('@string(5,100)'),
    shareTime: Mock.mock('@datetime'),
    shareType: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
  }
}
export function InviteDoorReInfo() {
  return {
    entName: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    handleStatus: Mock.mock('@boolean'),
    headerName: Mock.mock('@string(5,100)'),
    headerPhone: Mock.mock('@string(5,100)'),
    inviteCode: Mock.mock('@string(5,100)'),
    isHandler: Mock.mock('@boolean'),
    reId: Mock.mock('@guid'),
    reGratefulId: Mock.mock('@guid'),
  }
}
export function InviteJoinEchoResp() {
  return {
    applyType: Mock.mock('@string(5,100)'),
    doorCertStatus: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    inviteName: Mock.mock('@string(5,100)'),
    joinName: Mock.mock('@string(5,100)'),
    key: Mock.mock('@string(5,100)'),
    mobile: Mock.mock('@string(5,100)'),
  }
}
export function InviteLoginReq() {
  return {
    applyType: Mock.mock('@string(5,100)'),
    certificate: Mock.mock('@string(5,100)'),
    clientType: Mock.mock('@string(5,100)'),
    clientVersion: Mock.mock('@string(5,100)'),
    deviceCode: Mock.mock('@string(5,100)'),
    deviceManufacturer: Mock.mock('@string(5,100)'),
    deviceModel: Mock.mock('@string(5,100)'),
    joinName: Mock.mock('@string(5,100)'),
    key: Mock.mock('@string(5,100)'),
    mobile: Mock.mock('@string(5,100)'),
    uuid: Mock.mock('@guid'),
  }
}
export function InviteLoginResp() {
  return {
    inviteStatus: Mock.mock('@integer(3,1000)'),
    mobile: Mock.mock('@string(5,100)'),
    msg: Mock.mock('@string(5,100)'),
    newKeyBorard: Mock.mock('@boolean'),
    setPassWord: Mock.mock('@boolean'),
    gratefulId: Mock.mock('@guid'),
    token: Mock.mock('@string(5,100)'),
    tokenTimeOut: Mock.mock('@datetime'),
  }
}
export function InviteRePlatFromOrgReq() {
  return {
    doorId: Mock.mock('@guid'),
    headerName: Mock.mock('@string(5,100)'),
    headerPhone: Mock.mock('@string(5,100)'),
    reGratefulId: Mock.mock('@guid'),
  }
}
export function InviteSetResp() {
  return {
    audit: Mock.mock('@boolean'),
    'auditorList|1-20': [AuditorInfo()],
    id: Mock.mock('@guid'),
    open: Mock.mock('@boolean'),
    shareType: Mock.mock('@string(5,100)'),
  }
}
export function JobAddDesktopReq() {
  return {
    desktopId: Mock.mock('@guid'),
    jobCode: Mock.mock('@string(5,100)'),
    jobId: Mock.mock('@guid'),
    jobName: Mock.mock('@string(5,100)'),
  }
}
export function JobResp() {
  return {
    ancestors: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    jobCode: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    orderNum: Mock.mock('@integer(3,1000)'),
    parentCode: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
    status: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function JudgeSwitchDoorLimitResp() {
  return {
    judge: Mock.mock('@boolean'),
    msg: Mock.mock('@string(5,100)'),
  }
}
export function LogLoginResp() {
  return {
    browser: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    ipaddr: Mock.mock('@string(5,100)'),
    loginLocation: Mock.mock('@string(5,100)'),
    loginTime: Mock.mock('@datetime'),
    mobile: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    os: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function MenuCheckedResp() {
  return {
    'checkedKeys|1-20': [MenuDataScopeResp()],
    'menueTree|1-20': [Mock.mock('')],
  }
}
export function MenuDataScopeReq() {
  return {
    dataScope: Mock.mock('@integer(3,1000)'),
    'whiteCodes|1-20': [Mock.mock('@string(5,100)')],
    menuId: Mock.mock('@guid'),
  }
}
export function MenuDataScopeResp() {
  return {
    dataScope: Mock.mock('@integer(3,1000)'),
    'whiteCodes|1-20': [Mock.mock('@string(5,100)')],
    menuId: Mock.mock('@guid'),
  }
}
export function MenuResp() {
  return {
    appName: Mock.mock('@string(5,100)'),
    codeCatalog: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    dataPermissions: Mock.mock('@boolean'),
    enable: Mock.mock('@boolean'),
    iconUrl: Mock.mock('@url'),
    id: Mock.mock('@guid'),
    level: Mock.mock('@integer(3,1000)'),
    loginRequired: Mock.mock('@boolean'),
    menuCode: Mock.mock('@string(5,100)'),
    menuLargeCategoryName: Mock.mock('@string(5,100)'),
    menuName: Mock.mock('@string(5,100)'),
    menuOutId: Mock.mock('@guid'),
    menuShow: Mock.mock('@boolean'),
    menuType: Mock.mock('@integer(3,1000)'),
    modified: Mock.mock('@string(5,100)'),
    path: Mock.mock('@string(5,100)'),
    permIdent: Mock.mock('@string(5,100)'),
    pid: Mock.mock('@guid'),
    productCode: Mock.mock('@string(5,100)'),
    queryParam: Mock.mock('@string(5,100)'),
    remarks: Mock.mock('@string(5,100)'),
    sort: Mock.mock('@integer(3,1000)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function OcrHappyLicenseBO() {
  return {
    green: Mock.mock('@string(5,100)'),
    happy: Mock.mock('@string(5,100)'),
    capital: Mock.mock('@string(5,100)'),
    establishDate: Mock.mock('@datetime'),
    fake: Mock.mock('@boolean'),
    name: Mock.mock('@string(5,100)'),
    cat: Mock.mock('@string(5,100)'),
    regNum: Mock.mock('@string(5,100)'),
    requestId: Mock.mock('@guid'),
    success: Mock.mock('@boolean'),
    type: Mock.mock('@string(5,100)'),
    validPeriod: Mock.mock('@string(5,100)'),
  }
}
export function OcrIdCardBackResp() {
  return {
    endDate: Mock.mock('@datetime'),
    fake: Mock.mock('@boolean'),
    issue: Mock.mock('@string(5,100)'),
    startDate: Mock.mock('@datetime'),
    success: Mock.mock('@boolean'),
  }
}
export function OcrIdCardFrontResp() {
  return {
    green: Mock.mock('@string(5,100)'),
    birth: Mock.mock('@string(5,100)'),
    fake: Mock.mock('@boolean'),
    name: Mock.mock('@string(5,100)'),
    nationality: Mock.mock('@string(5,100)'),
    num: Mock.mock('@string(5,100)'),
    sex: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
  }
}
export function OcrImageReq() {
  return {
    image: Mock.mock('@string(5,100)'),
  }
}
export function OrderItem() {
  return {
    asc: Mock.mock('@boolean'),
    column: Mock.mock('@string(5,100)'),
  }
}
export function OutputStream() {}
export function PageDesktopAddRecordReq() {
  return {
    adderNameOrPhone: Mock.mock('@string(5,100)'),
    desktopNameOrPhone: Mock.mock('@string(5,100)'),
    desktopStatus: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function PageDoorCredentialReq() {
  return {
    credentialNo: Mock.mock('@string(5,100)'),
    credentialType: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    issuingDate: Mock.mock('@datetime'),
    office: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    scope: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
    validDate: Mock.mock('@datetime'),
  }
}
export function PageInvoiceReq() {
  return {
    dutyNum: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    title: Mock.mock('@ctitle(5,20)'),
  }
}
export function PageSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    countId: Mock.mock('@guid'),
    current: Mock.mock('@string(5,100)'),
    maxLimit: Mock.mock('@string(5,100)'),
    optimizeCountSql: Mock.mock('@boolean'),
    'orders|1-20': [OrderItem()],
    pages: Mock.mock('@string(5,100)'),
    'records|1-20': [SysDictDuiXiangnullZhiBuXuLieHua()],
    searchCount: Mock.mock('@boolean'),
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function PageZhiXieChangBoJuZiXinXi() {
  return {
    countId: Mock.mock('@guid'),
    current: Mock.mock('@string(5,100)'),
    maxLimit: Mock.mock('@string(5,100)'),
    optimizeCountSql: Mock.mock('@boolean'),
    'orders|1-20': [OrderItem()],
    pages: Mock.mock('@string(5,100)'),
    'records|1-20': [ZhiXieChangBoJuZiXinXi0()],
    searchCount: Mock.mock('@boolean'),
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function CatVerifyReq() {
  return {
    cardNo: Mock.mock('@string(5,100)'),
    cardValidData: Mock.mock('@string(5,100)'),
    idNo: Mock.mock('@string(5,100)'),
    metaInfo: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    ocrIdCardBack: Mock.mock('@string(5,100)'),
    ocrIdCardFront: Mock.mock('@string(5,100)'),
    openBank: Mock.mock('@string(5,100)'),
    profession: Mock.mock('@string(5,100)'),
    returnUrl: Mock.mock('@url'),
    validStatus: Mock.mock('@boolean'),
  }
}
export function CatnelCertificate() {
  return {
    allTotalName: Mock.mock('@string(5,100)'),
    reSDate: Mock.mock('@datetime'),
    regEDate: Mock.mock('@datetime'),
    zczyName: Mock.mock('@string(5,100)'),
  }
}
export function StationDesktopAuthReq() {
  return {
    'desktopIds|1-20': [Mock.mock('@string(5,100)')],
    doorId: Mock.mock('@guid'),
    'pinkIds|1-20': [Mock.mock('@string(5,100)')],
  }
}
export function PostAddOrUpReq() {
  return {
    id: Mock.mock('@guid'),
    postName: Mock.mock('@string(5,100)'),
    postSort: Mock.mock('@integer(3,1000)'),
    workflowKey: Mock.mock('@string(5,100)'),
  }
}
export function PostResp() {
  return {
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    modified: Mock.mock('@string(5,100)'),
    postCode: Mock.mock('@string(5,100)'),
    postName: Mock.mock('@string(5,100)'),
    postSort: Mock.mock('@integer(3,1000)'),
    status: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function QueryAccInfoResp() {
  return {
    mobile: Mock.mock('@string(5,100)'),
    setPassWord: Mock.mock('@boolean'),
    status: Mock.mock('@string(5,100)'),
  }
}
export function QueryCertFormResp() {
  return {
    cardNo: Mock.mock('@string(5,100)'),
    cardValidData: Mock.mock('@string(5,100)'),
    idNo: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    ocrIdCardBack: Mock.mock('@string(5,100)'),
    ocrIdCardFront: Mock.mock('@string(5,100)'),
    openBank: Mock.mock('@string(5,100)'),
    profession: Mock.mock('@string(5,100)'),
    validStatus: Mock.mock('@boolean'),
  }
}
export function QueryDesktopByPhoneOrNameReq() {
  return {
    jobId: Mock.mock('@guid'),
    phoneOrName: Mock.mock('@string(5,100)'),
  }
}
export function QueryDoorPageHomeResp() {
  return {
    companyInfo: Mock.mock('CompanyInfo()'),
  }
}
export function QueryInviteDesktopReq() {
  return {
    applyTimeEnd: Mock.mock('@datetime'),
    applyTimeStart: Mock.mock('@datetime'),
    whiteName: Mock.mock('@string(5,100)'),
    desktopStatus: Mock.mock('@string(5,100)'),
    inviterPhoneOrName: Mock.mock('@string(5,100)'),
    joinTimeEnd: Mock.mock('@datetime'),
    joinTimeStart: Mock.mock('@datetime'),
    page: Mock.mock('@integer(3,1000)'),
    proposerPhone: Mock.mock('@string(5,100)'),
    proposerPhoneOrName: Mock.mock('@string(5,100)'),
    shareType: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
    status: Mock.mock('@string(5,100)'),
  }
}
export function QueryJobReq() {
  return {
    ancestors: Mock.mock('@string(5,100)'),
    jobCode: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    orderNum: Mock.mock('@integer(3,1000)'),
    parentCode: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
    status: Mock.mock('@string(5,100)'),
  }
}
export function QueryJudgeClaimResp() {
  return {
    operResult: Mock.mock('@string(5,100)'),
  }
}
export function QueryCatPageHomeResp() {
  return {
    cardNo: Mock.mock('@string(5,100)'),
    companyName: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    catRepetitionId: Mock.mock('@guid'),
    sex: Mock.mock('@string(5,100)'),
    'vosList|1-20': [OrangeerCertificateInfo()],
  }
}
export function QueryWalletBalanceResp() {
  return {
    blueId: Mock.mock('@guid'),
    blueNumber: Mock.mock('@string(5,100)'),
    availableAmount: Mock.mock('@string(5,100)'),
    bankName: Mock.mock('@string(5,100)'),
    bankcardNumber: Mock.mock('@string(5,100)'),
    companyName: Mock.mock('@string(5,100)'),
    frozenAmount: Mock.mock('@string(5,100)'),
  }
}
export function ReEntMeta() {
  return {
    whiteCode: Mock.mock('@string(5,100)'),
    reDoorId: Mock.mock('@guid'),
    reName: Mock.mock('@string(5,100)'),
  }
}
export function ReDoorInfo() {
  return {
    happyLicenseCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    headerName: Mock.mock('@string(5,100)'),
    headerPhone: Mock.mock('@string(5,100)'),
    isAuth: Mock.mock('@string(5,100)'),
    serialNo: Mock.mock('@string(5,100)'),
  }
}
export function RefuseJoinReq() {
  return {
    id: Mock.mock('@guid'),
    refuse: Mock.mock('@string(5,100)'),
  }
}
export function OrangeerCertificateInfo() {
  return {
    certificateNumber: Mock.mock('@string(5,100)'),
    regNo: Mock.mock('@string(5,100)'),
    regTypeName: Mock.mock('@string(5,100)'),
    orangeeredCertificateCompany: Mock.mock('@string(5,100)'),
    'voList|1-20': [CatnelCertificate()],
  }
}
export function OrangeerResultResp() {
  return {
    mark: Mock.mock('@string(5,100)'),
    mobile: Mock.mock('@string(5,100)'),
    token: Mock.mock('@string(5,100)'),
    tokenTimeOut: Mock.mock('@datetime'),
  }
}
export function RelationHappyTypeInfo() {
  return {
    happyType: Mock.mock('@string(5,100)'),
    initTime: Mock.mock('@datetime'),
    reSource: Mock.mock('@string(5,100)'),
  }
}
export function RelationDoorInfo() {
  return {
    auditStatus: Mock.mock('@string(5,100)'),
    authCount: Mock.mock('@integer(3,1000)'),
    happyLicenseCode: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
    preDoorName: Mock.mock('@string(5,100)'),
    relationStatus: Mock.mock('@string(5,100)'),
  }
}
export function RemoveDesktopReq() {
  return {
    'desktopId|1-20': [Mock.mock('@guid')],
    jobId: Mock.mock('@guid'),
  }
}
export function PinkAddReq() {
  return {
    allowAllot: Mock.mock('@boolean'),
    'menuDataScopeReqList|1-20': [MenuDataScopeReq()],
    parentId: Mock.mock('@guid'),
    remark: Mock.mock('@string(5,100)'),
    pinkName: Mock.mock('@string(5,100)'),
  }
}
export function PinkBaseUpReq() {
  return {
    id: Mock.mock('@guid'),
    remark: Mock.mock('@string(5,100)'),
    pinkName: Mock.mock('@string(5,100)'),
  }
}
export function PinkConfigInfo() {
  return {
    'desktopPink|1-20': [PinkInfo()],
    'headerPink|1-20': [PinkInfo()],
    id: Mock.mock('@guid'),
    pinkRange: Mock.mock('@string(5,100)'),
    syncWhiteId: Mock.mock('@guid'),
  }
}
export function PinkInfo() {
  return {
    id: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
  }
}
export function PinkInfoResq() {
  return {
    allowAllot: Mock.mock('@boolean'),
    ancestors: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    whiteCheckStrictly: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    level: Mock.mock('@integer(3,1000)'),
    menuCheckStrictly: Mock.mock('@boolean'),
    menuNames: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    parentCode: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
    parentName: Mock.mock('@string(5,100)'),
    remark: Mock.mock('@string(5,100)'),
    pinkCode: Mock.mock('@string(5,100)'),
    pinkName: Mock.mock('@string(5,100)'),
    pinkSort: Mock.mock('@integer(3,1000)'),
    status: Mock.mock('@string(5,100)'),
    statusDesc: Mock.mock('@string(5,100)'),
    type: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function PinkMenuUpReq() {
  return {
    'menuDataScopeList|1-20': [MenuDataScopeReq()],
    pinkId: Mock.mock('@guid'),
  }
}
export function PinkResq() {
  return {
    allowAllot: Mock.mock('@boolean'),
    ancestors: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    whiteCheckStrictly: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    level: Mock.mock('@integer(3,1000)'),
    menuCheckStrictly: Mock.mock('@boolean'),
    menuNames: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    parentCode: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
    remark: Mock.mock('@string(5,100)'),
    pinkCode: Mock.mock('@string(5,100)'),
    pinkKey: Mock.mock('@string(5,100)'),
    pinkName: Mock.mock('@string(5,100)'),
    pinkSort: Mock.mock('@integer(3,1000)'),
    status: Mock.mock('@string(5,100)'),
    statusDesc: Mock.mock('@string(5,100)'),
    type: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function RouterMetaResp() {
  return {
    hideInMenu: Mock.mock('@boolean'),
    icon: Mock.mock('@string(5,100)'),
    locale: Mock.mock('@string(5,100)'),
    menuType: Mock.mock('@integer(3,1000)'),
    order: Mock.mock('@integer(3,1000)'),
    requiresAuth: Mock.mock('@boolean'),
  }
}
export function RouterResp() {
  return {
    'children|1-20': [RouterResp()],
    id: Mock.mock('@guid'),
    meta: Mock.mock('RouterMetaResp()'),
    name: Mock.mock('@string(5,100)'),
    path: Mock.mock('@string(5,100)'),
    query: Mock.mock('@string(5,100)'),
    redirect: Mock.mock('@string(5,100)'),
  }
}
export function ScanReQrResp() {
  return {
    auditId: Mock.mock('@guid'),
    entName: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
  }
}
export function SelectorDesktopResp() {
  return {
    whiteName: Mock.mock('@string(5,100)'),
    desktopId: Mock.mock('@guid'),
    isJoin: Mock.mock('@boolean'),
    mobile: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function SendActiveMessageReq() {
  return {
    'sendDesktopList|1-20': [DesktopRespReq()],
  }
}
export function SendActiveMessageResp() {
  return {
    failedCount: Mock.mock('@string(5,100)'),
    successCount: Mock.mock('@string(5,100)'),
  }
}
export function SetPassWordReq() {
  return {
    checkPassWord: Mock.mock('@string(5,100)'),
    passWord: Mock.mock('@string(5,100)'),
  }
}
export function ShiftDesktopResp() {
  return {
    desktopId: Mock.mock('@guid'),
    desktopName: Mock.mock('@string(5,100)'),
    'leaders|1-20': [ShiftLeader()],
  }
}
export function ShiftLeader() {
  return {
    leaderDesktopId: Mock.mock('@guid'),
    leaderDesktopName: Mock.mock('@string(5,100)'),
  }
}
export function SuperCodeVerifyReq() {
  return {
    certificate: Mock.mock('@string(5,100)'),
    mobile: Mock.mock('@string(5,100)'),
    toMobile: Mock.mock('@string(5,100)'),
    uuid: Mock.mock('@guid'),
  }
}
export function SuperManResp() {
  return {
    authRange: Mock.mock('@string(5,100)'),
    whiteCode: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    desktopIsCreator: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    mobile: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    superPink: Mock.mock('@string(5,100)'),
  }
}
export function SysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    'allLevelKindName|1-20': [Mock.mock('@string(5,100)')],
    childFlag: Mock.mock('@integer(3,1000)'),
    'childList|1-20': [SysDictDuiXiangnullZhiBuXuLieHua()],
    deleted: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    introduce: Mock.mock('@string(5,100)'),
    kindCode: Mock.mock('@string(5,100)'),
    kindName: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
    sortNum: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function TreeNodeConfig() {
  return {
    childrenKey: Mock.mock('@string(5,100)'),
    deep: Mock.mock('@integer(3,1000)'),
    idKey: Mock.mock('@string(5,100)'),
    nameKey: Mock.mock('@string(5,100)'),
    parentIdKey: Mock.mock('@string(5,100)'),
    weightKey: Mock.mock('@string(5,100)'),
  }
}
export function Type() {
  return {
    typeName: Mock.mock('@string(5,100)'),
  }
}
export function KeyBorardJoinDoorReq() {
  return {
    name: Mock.mock('@string(5,100)'),
    reason: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function VerificationResp() {
  return {
    bankCarkNo: Mock.mock('@string(5,100)'),
    cardNo: Mock.mock('@string(5,100)'),
    cardVaildDate: Mock.mock('@datetime'),
    certifyId: Mock.mock('@guid'),
    certifyUrl: Mock.mock('@url'),
    code: 200,
    message: Mock.mock('@string(5,100)'),
    ocrIdCardBack: Mock.mock('@string(5,100)'),
    ocrIdCardFront: Mock.mock('@string(5,100)'),
    openBank: Mock.mock('@string(5,100)'),
    profession: Mock.mock('@string(5,100)'),
    requestId: Mock.mock('@guid'),
    keyBorardName: Mock.mock('@string(5,100)'),
    vaildStatus: Mock.mock('@boolean'),
  }
}
export function DouJiangJiFangDongXinXiXiangQingBiao() {
  return {
    area: Mock.mock('@string(5,100)'),
    authStatus: Mock.mock('@string(5,100)'),
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    city: Mock.mock('@city'),
    country: Mock.mock('@string(5,100)'),
    init: Mock.mock('@boolean'),
    location: Mock.mock('@string(5,100)'),
    maxNameUpdateNum: Mock.mock('@integer(3,1000)'),
    mobile: Mock.mock('@string(5,100)'),
    nameUpdateNum: Mock.mock('@integer(3,1000)'),
    nickname: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    sex: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    keyBorardname: Mock.mock('@string(5,100)'),
    xmail: Mock.mock('@string(5,100)'),
  }
}
export function DouJiangJiFangXingXinXi() {
  return {
    green: Mock.mock('@string(5,100)'),
    bankCardNo: Mock.mock('@string(5,100)'),
    cardNo: Mock.mock('@string(5,100)'),
    cardStartDate: Mock.mock('@datetime'),
    cardValidDate: Mock.mock('@datetime'),
    issue: Mock.mock('@string(5,100)'),
    nationality: Mock.mock('@string(5,100)'),
    ocridCardBack: Mock.mock('@string(5,100)'),
    ocridCardFront: Mock.mock('@string(5,100)'),
    openBank: Mock.mock('@string(5,100)'),
    profession: Mock.mock('@string(5,100)'),
    sex: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
    validStatus: Mock.mock('@boolean'),
  }
}
export function DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu() {
  return {
    green: Mock.mock('@string(5,100)'),
    birth: Mock.mock('@string(5,100)'),
    endDate: Mock.mock('@datetime'),
    idCardNum: Mock.mock('@string(5,100)'),
    individualBankCardNo: Mock.mock('@string(5,100)'),
    individualCompany: Mock.mock('@string(5,100)'),
    individualMail: Mock.mock('@string(5,100)'),
    individualReservedPhoneNo: Mock.mock('@string(5,100)'),
    individualVocation: Mock.mock('@string(5,100)'),
    issue: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    nationality: Mock.mock('@string(5,100)'),
    posUrl: Mock.mock('@url'),
    revUrl: Mock.mock('@url'),
    sex: Mock.mock('@string(5,100)'),
    startDate: Mock.mock('@datetime'),
    keyBorardId: Mock.mock('@guid'),
  }
}
export function DouJiangJiBeiJingZhuCeZhuanYe() {
  return {
    endDate: Mock.mock('@datetime'),
    id: Mock.mock('@guid'),
    major: Mock.mock('@string(5,100)'),
    majorCode: Mock.mock('@string(5,100)'),
    startDate: Mock.mock('@datetime'),
  }
}
export function ZhiXieChangZhiNenPiaoJiaFangXing() {
  return {
    clerkLoginPassword: Mock.mock('@string(5,100)'),
    clerkPhone: Mock.mock('@string(5,100)'),
    clerkPink: Mock.mock('@string(5,100)'),
    contactNumber: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    taxNum: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function ZhiXieChangJianDanFangXing() {
  return {
    adminCardNo: Mock.mock('@string(5,100)'),
    adminName: Mock.mock('@string(5,100)'),
    certificateAuth: Mock.mock('@string(5,100)'),
    certificateAuthStatus: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    institutionLegalCatCertificateUrl: Mock.mock('@url'),
    legalBankNo: Mock.mock('@string(5,100)'),
    legalBankPhone: Mock.mock('@string(5,100)'),
    legalBankPhoneVerificationCode: Mock.mock('@string(5,100)'),
    legalCat: Mock.mock('@string(5,100)'),
    legalCatCardNo: Mock.mock('@string(5,100)'),
    licenseFileUrl: Mock.mock('@url'),
    licenseUnifiedCode: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    orgType: Mock.mock('@string(5,100)'),
    unifiedSocialCreditCodeCertificateUrl: Mock.mock('@url'),
  }
}
export function ZhiXieChangJianDanFangXing0() {
  return {
    adminCardNo: Mock.mock('@string(5,100)'),
    adminName: Mock.mock('@string(5,100)'),
    certificateAuth: Mock.mock('@string(5,100)'),
    certificateAuthStatus: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    institutionLegalCatCertificateUrl: Mock.mock('@url'),
    legalBankNo: Mock.mock('@string(5,100)'),
    legalBankPhone: Mock.mock('@string(5,100)'),
    legalCat: Mock.mock('@string(5,100)'),
    legalCatCardNo: Mock.mock('@string(5,100)'),
    licenseFileUrl: Mock.mock('@url'),
    licenseUnifiedCode: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    orgType: Mock.mock('@string(5,100)'),
    unifiedSocialCreditCodeCertificateUrl: Mock.mock('@url'),
  }
}
export function ZhiXieChangZhuTiXinXi() {
  return {
    area: Mock.mock('@string(5,100)'),
    authStatus: Mock.mock('@string(5,100)'),
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    chiefly: Mock.mock('@boolean'),
    city: Mock.mock('@city'),
    claimId: Mock.mock('@guid'),
    contactNumber: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    firmSize: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    industryInvolved: Mock.mock('@string(5,100)'),
    introduction: Mock.mock('@string(5,100)'),
    isDelete: Mock.mock('@string(5,100)'),
    legalIdCardBack: Mock.mock('@string(5,100)'),
    legalIdCardFront: Mock.mock('@string(5,100)'),
    legalIdCardNo: Mock.mock('@string(5,100)'),
    legalCat: Mock.mock('@string(5,100)'),
    licenseUnifiedCode: Mock.mock('@string(5,100)'),
    licenseUnifiedUrl: Mock.mock('@url'),
    location: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    serialNum: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
    keyBorardId: Mock.mock('@guid'),
    xmail: Mock.mock('@string(5,100)'),
  }
}
export function ZhiXieChangBoJuZiXinXi() {
  return {
    green: Mock.mock('@string(5,100)'),
    authStatus: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    doorBankCardNo: Mock.mock('@string(5,100)'),
    doorBankCode: Mock.mock('@string(5,100)'),
    doorBankName: Mock.mock('@string(5,100)'),
    doorBasicBlueOpenVoucherId: Mock.mock('@guid'),
    'doorBeneficiaryList|1-20': [DoorBeneficiaryReq()],
    doorHappyScope: Mock.mock('@string(5,100)'),
    doorCaElectronicSignature: Mock.mock('@string(5,100)'),
    doorContactIdCardBackId: Mock.mock('@guid'),
    doorContactIdCardFrontId: Mock.mock('@guid'),
    doorContactName: Mock.mock('@string(5,100)'),
    doorContactPhone: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    doorJoinProtocolId: Mock.mock('@guid'),
    doorLegalIdCardBackId: Mock.mock('@guid'),
    doorLegalIdCardFrontId: Mock.mock('@guid'),
    doorLegalIdCardNo: Mock.mock('@string(5,100)'),
    doorLegalIdCardType: Mock.mock('@string(5,100)'),
    doorLegalIdCardValidDate: Mock.mock('@datetime'),
    doorLegalIdCardValidStartDate: Mock.mock('@datetime'),
    doorLegalName: Mock.mock('@string(5,100)'),
    doorLegalPhone: Mock.mock('@string(5,100)'),
    doorLicenseFileDuplicateId: Mock.mock('@guid'),
    doorLicenseFileId: Mock.mock('@guid'),
    doorLicenseName: Mock.mock('@string(5,100)'),
    doorLicenseValidDate: Mock.mock('@datetime'),
    doorLicenseValidStartDate: Mock.mock('@datetime'),
    doorName: Mock.mock('@string(5,100)'),
    doorOpenBluePermit: Mock.mock('@string(5,100)'),
    doorOpratorAttorneyLetter: Mock.mock('@string(5,100)'),
    doorOpratorIdCardNo: Mock.mock('@string(5,100)'),
    doorOpratorIdCardType: Mock.mock('@string(5,100)'),
    doorOpratorIdCardValidDate: Mock.mock('@datetime'),
    doorOpratorIdCardValidStartDate: Mock.mock('@datetime'),
    doorRealGreen: Mock.mock('@string(5,100)'),
    'doorShareholderList|1-20': [DoorShareholderReq()],
    doorStorePictureId: Mock.mock('@guid'),
    doorTrade: Mock.mock('@string(5,100)'),
    doorTradeName: Mock.mock('SysDictDuiXiangnullZhiBuXuLieHua()'),
    doorUnifiedCode: Mock.mock('@string(5,100)'),
    doorUpDoorId: Mock.mock('@guid'),
    doorUpDoorName: Mock.mock('@string(5,100)'),
    doorUpLegalBasicBlueOpenVoucherId: Mock.mock('@guid'),
    doorUpLegalDoorUnifiedCode: Mock.mock('@string(5,100)'),
    doorUpLegalIdCardBackId: Mock.mock('@guid'),
    doorUpLegalIdCardFrontId: Mock.mock('@guid'),
    doorUpLegalIdCardNo: Mock.mock('@string(5,100)'),
    doorUpLegalIdCardType: Mock.mock('@string(5,100)'),
    doorUpLegalLicenseDuplicateFileId: Mock.mock('@guid'),
    doorUpLegalLicenseFileId: Mock.mock('@guid'),
    doorUpLegalLicenseName: Mock.mock('@string(5,100)'),
    doorUpLegalLicenseNo: Mock.mock('@string(5,100)'),
    doorUpLegalLicenseType: Mock.mock('@string(5,100)'),
    doorUpLegalName: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    msg: Mock.mock('@string(5,100)'),
    stepNum: Mock.mock('@integer(3,1000)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function ZhiXieChangBoJuZiXinXi0() {
  return {
    green: Mock.mock('@string(5,100)'),
    authStatus: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    doorBankCardNo: Mock.mock('@string(5,100)'),
    doorBankCode: Mock.mock('@string(5,100)'),
    doorBankName: Mock.mock('@string(5,100)'),
    doorBasicBlueOpenVoucherId: Mock.mock('@guid'),
    'doorBeneficiaryList|1-20': [DoorBeneficiaryResp()],
    doorHappyScope: Mock.mock('@string(5,100)'),
    doorCaElectronicSignature: Mock.mock('@string(5,100)'),
    doorContactIdCardBackId: Mock.mock('@guid'),
    doorContactIdCardFrontId: Mock.mock('@guid'),
    doorContactName: Mock.mock('@string(5,100)'),
    doorContactPhone: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    doorJoinProtocolId: Mock.mock('@guid'),
    doorLegalIdCardBackId: Mock.mock('@guid'),
    doorLegalIdCardFrontId: Mock.mock('@guid'),
    doorLegalIdCardNo: Mock.mock('@string(5,100)'),
    doorLegalIdCardType: Mock.mock('@string(5,100)'),
    doorLegalIdCardValidDate: Mock.mock('@datetime'),
    doorLegalIdCardValidStartDate: Mock.mock('@datetime'),
    doorLegalName: Mock.mock('@string(5,100)'),
    doorLegalPhone: Mock.mock('@string(5,100)'),
    doorLicenseFileDuplicateId: Mock.mock('@guid'),
    doorLicenseFileId: Mock.mock('@guid'),
    doorLicenseName: Mock.mock('@string(5,100)'),
    doorLicenseValidDate: Mock.mock('@datetime'),
    doorLicenseValidStartDate: Mock.mock('@datetime'),
    doorName: Mock.mock('@string(5,100)'),
    doorOpenBluePermit: Mock.mock('@string(5,100)'),
    doorOpratorAttorneyLetter: Mock.mock('@string(5,100)'),
    doorOpratorIdCardNo: Mock.mock('@string(5,100)'),
    doorOpratorIdCardType: Mock.mock('@string(5,100)'),
    doorOpratorIdCardValidDate: Mock.mock('@datetime'),
    doorOpratorIdCardValidStartDate: Mock.mock('@datetime'),
    doorRealGreen: Mock.mock('@string(5,100)'),
    'doorShareholderList|1-20': [DoorShareholderResp()],
    doorStorePictureId: Mock.mock('@guid'),
    doorTrade: Mock.mock('@string(5,100)'),
    doorTradeName: Mock.mock('SysDictDuiXiangnullZhiBuXuLieHua()'),
    doorUnifiedCode: Mock.mock('@string(5,100)'),
    doorUpDoorId: Mock.mock('@guid'),
    doorUpDoorName: Mock.mock('@string(5,100)'),
    doorUpLegalBasicBlueOpenVoucherId: Mock.mock('@guid'),
    doorUpLegalDoorUnifiedCode: Mock.mock('@string(5,100)'),
    doorUpLegalIdCardBackId: Mock.mock('@guid'),
    doorUpLegalIdCardFrontId: Mock.mock('@guid'),
    doorUpLegalIdCardNo: Mock.mock('@string(5,100)'),
    doorUpLegalIdCardType: Mock.mock('@string(5,100)'),
    doorUpLegalLicenseDuplicateFileId: Mock.mock('@guid'),
    doorUpLegalLicenseFileId: Mock.mock('@guid'),
    doorUpLegalLicenseName: Mock.mock('@string(5,100)'),
    doorUpLegalLicenseNo: Mock.mock('@string(5,100)'),
    doorUpLegalLicenseType: Mock.mock('@string(5,100)'),
    doorUpLegalName: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    msg: Mock.mock('@string(5,100)'),
    stepNum: Mock.mock('@integer(3,1000)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function ZhiXieChangChuXing() {
  return {
    area: Mock.mock('@string(5,100)'),
    authStatus: Mock.mock('@string(5,100)'),
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    city: Mock.mock('@city'),
    contactNumber: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    created: Mock.mock('@boolean'),
    firmSize: Mock.mock('@string(5,100)'),
    industryInvolved: Mock.mock('@string(5,100)'),
    introduction: Mock.mock('@string(5,100)'),
    joinStatus: Mock.mock('@string(5,100)'),
    legalCat: Mock.mock('@string(5,100)'),
    location: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    gratefulId: Mock.mock('@guid'),
    xmail: Mock.mock('@string(5,100)'),
  }
}
export function ZhiXieChangChuXing0() {
  return {
    doorName: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
  }
}
export function ZhiXieChangFangDongXinXi() {
  return {
    area: Mock.mock('@string(5,100)'),
    authStatus: Mock.mock('@string(5,100)'),
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    chiefly: Mock.mock('@boolean'),
    city: Mock.mock('@city'),
    contactNumber: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    firmSize: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    industryInvolved: Mock.mock('@string(5,100)'),
    introduction: Mock.mock('@string(5,100)'),
    legalCat: Mock.mock('@string(5,100)'),
    licenseUnifiedCode: Mock.mock('@string(5,100)'),
    licenseUnifiedUrl: Mock.mock('@url'),
    location: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    serialNum: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    xmail: Mock.mock('@string(5,100)'),
  }
}
export function ZhiXieChangFangDongXinXiXiangQing() {
  return {
    area: Mock.mock('@string(5,100)'),
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    city: Mock.mock('@city'),
    contactNumber: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    firmSize: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    industryInvolved: Mock.mock('@string(5,100)'),
    introduction: Mock.mock('@string(5,100)'),
    legalCat: Mock.mock('@string(5,100)'),
    location: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    xmail: Mock.mock('@string(5,100)'),
  }
}
export function ZhiXieChangFangDongXinXiXiangQing0() {
  return {
    area: Mock.mock('@string(5,100)'),
    authStatus: Mock.mock('@string(5,100)'),
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    city: Mock.mock('@city'),
    contactNumber: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    firmSize: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    industryInvolved: Mock.mock('@string(5,100)'),
    init: Mock.mock('@boolean'),
    introduction: Mock.mock('@string(5,100)'),
    legalCat: Mock.mock('@string(5,100)'),
    location: Mock.mock('@string(5,100)'),
    maxNameUpdateNum: Mock.mock('@integer(3,1000)'),
    name: Mock.mock('@string(5,100)'),
    nameUpdateNum: Mock.mock('@integer(3,1000)'),
    province: Mock.mock('@province'),
    gratefulId: Mock.mock('@guid'),
    xmail: Mock.mock('@string(5,100)'),
  }
}
export function XiuGaiDouJiangJiXinXi() {
  return {
    area: Mock.mock('@string(5,100)'),
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    city: Mock.mock('@city'),
    country: Mock.mock('@string(5,100)'),
    location: Mock.mock('@string(5,100)'),
    nickname: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    sex: Mock.mock('@string(5,100)'),
    keyBorardname: Mock.mock('@string(5,100)'),
    xmail: Mock.mock('@string(5,100)'),
  }
}
export function XiuGaiMiMa() {
  return {
    checkPassWord: Mock.mock('@string(5,100)'),
    mobile: Mock.mock('@string(5,100)'),
    oldPassword: Mock.mock('@string(5,100)'),
    passWord: Mock.mock('@string(5,100)'),
    uuid: Mock.mock('@guid'),
    verificationCode: Mock.mock('@string(5,100)'),
  }
}
export function MaoZiGuanLianFaQiGuanLianXinXi() {
  return {
    applyName: Mock.mock('@string(5,100)'),
    applyPhone: Mock.mock('@string(5,100)'),
    applyTime: Mock.mock('@datetime'),
    headerName: Mock.mock('@string(5,100)'),
    headerPhone: Mock.mock('@string(5,100)'),
    initTime: Mock.mock('@datetime'),
    inviteName: Mock.mock('@string(5,100)'),
    invitePhone: Mock.mock('@string(5,100)'),
    inviteSource: Mock.mock('@string(5,100)'),
    inviteTime: Mock.mock('@datetime'),
    invitedName: Mock.mock('@string(5,100)'),
    invitedPhone: Mock.mock('@string(5,100)'),
    sourceEnum: Mock.mock('@string(5,100)'),
    triggerTime: Mock.mock('@datetime'),
  }
}
export function MaoZiGuanLianYouGuanLianShenHeXinXi() {
  return {
    auditStatus: Mock.mock('@string(5,100)'),
    auditTime: Mock.mock('@datetime'),
    name: Mock.mock('@string(5,100)'),
    reason: Mock.mock('@string(5,100)'),
  }
}
export function GuanLianMaoZiYongDao() {
  return {
    inRelateCount: Mock.mock('@integer(3,1000)'),
    invalidRelateCount: Mock.mock('@integer(3,1000)'),
    list: Mock.mock('ComPageRelationDoorInfo()'),
    totalCount: Mock.mock('@integer(3,1000)'),
    unRelateCount: Mock.mock('@integer(3,1000)'),
  }
}
export function GuanLianMaoZiXiangQing() {
  return {
    auditStatus: Mock.mock('@string(5,100)'),
    authCount: Mock.mock('@integer(3,1000)'),
    created: Mock.mock('@string(5,100)'),
    whiteCount: Mock.mock('@integer(3,1000)'),
    id: Mock.mock('@guid'),
    preReDoorInfo: Mock.mock('ReDoorInfo()'),
    reDoorInfo: Mock.mock('ReDoorInfo()'),
    reDoorSource: Mock.mock('@string(5,100)'),
    relationAuditInfo: Mock.mock('MaoZiGuanLianYouGuanLianShenHeXinXi()'),
    relationInfo: Mock.mock('MaoZiGuanLianFaQiGuanLianXinXi()'),
    relationStatus: Mock.mock('@string(5,100)'),
    'relationTypeList|1-20': [RelationHappyTypeInfo()],
    syncTime: Mock.mock('@datetime'),
  }
}
export function GuanLianShenHeXinXi() {
  return {
    auditClassificationEnum: Mock.mock('@string(5,100)'),
    auditStatus: Mock.mock('@string(5,100)'),
    branchName: Mock.mock('@string(5,100)'),
    happyLicenseUrl: Mock.mock('@url'),
    created: Mock.mock('@string(5,100)'),
    franchiseDoorName: Mock.mock('@string(5,100)'),
    headerName: Mock.mock('@string(5,100)'),
    headerPhone: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    relationStatus: Mock.mock('@string(5,100)'),
    serialNo: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
  }
}
export function FenYeChuXingDouJiangJiBeiJing() {
  return {
    credentialNo: Mock.mock('@string(5,100)'),
    credentialType: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function FenYeChuXingSuoYouZhiXieChang() {
  return {
    name: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function QieHuanMoRenDiZhi() {
  return {
    newGreenId: Mock.mock('@guid'),
  }
}
export function ChuangJianZhiXieChang() {
  return {
    area: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    country: Mock.mock('@string(5,100)'),
    location: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
  }
}
export function XiaoYuanZhuoGuanLi() {
  return {
    bank: Mock.mock('@string(5,100)'),
    bankAccNo: Mock.mock('@string(5,100)'),
    dutyNum: Mock.mock('@string(5,100)'),
    doorGreen: Mock.mock('@string(5,100)'),
    doorMobile: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    title: Mock.mock('@ctitle(5,20)'),
    type: Mock.mock('@string(5,100)'),
  }
}
export function XiaoYuanZhuoGuanLi0() {
  return {
    bank: Mock.mock('@string(5,100)'),
    bankAccNo: Mock.mock('@string(5,100)'),
    dutyNum: Mock.mock('@string(5,100)'),
    doorGreen: Mock.mock('@string(5,100)'),
    doorMobile: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    title: Mock.mock('@ctitle(5,20)'),
    type: Mock.mock('@string(5,100)'),
  }
}
export function ShenHeTongJiHuanCunSanShiMiao() {
  return {
    reviewedNum: Mock.mock('@integer(3,1000)'),
    unauditedNum: Mock.mock('@integer(3,1000)'),
  }
}
export function ShenHeTongGuo() {
  return {
    whiteId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    proposerId: Mock.mock('@guid'),
    proposerName: Mock.mock('@string(5,100)'),
    proposerPhone: Mock.mock('@string(5,100)'),
    'pinkId|1-20': [Mock.mock('@guid')],
  }
}
export function ZhaoHuiMiMa() {
  return {
    checkPassWord: Mock.mock('@string(5,100)'),
    mobile: Mock.mock('@string(5,100)'),
    passWord: Mock.mock('@string(5,100)'),
    uuid: Mock.mock('@guid'),
    verificationCode: Mock.mock('@string(5,100)'),
  }
}
export function BiXieDaoZhongXinChuXingGuoLvTiaoJian() {
  return {
    authFlag: Mock.mock('@boolean'),
    certType: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    'desktopIds|1-20': [Mock.mock('@string(5,100)')],
    desktopMobile: Mock.mock('@string(5,100)'),
    desktopName: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function BiXieDaoRuCan() {
  return {
    channelType: Mock.mock('@string(5,100)'),
    code: 200,
    corpId: Mock.mock('@guid'),
    redirectUri: Mock.mock('@string(5,100)'),
    state: Mock.mock('@string(5,100)'),
  }
}
export function BiXieDao() {
  return {
    'ids|1-20': [Mock.mock('@string(5,100)')],
    reason: Mock.mock('@string(5,100)'),
  }
}
export function BiXieDao0() {
  return {
    list: Mock.mock('ComPageBiXieDao()'),
    reviewedNum: Mock.mock('@integer(3,1000)'),
    unauditedNum: Mock.mock('@integer(3,1000)'),
  }
}
export function BiXieDao1() {
  return {
    auditName: Mock.mock('@string(5,100)'),
    auditStatus: Mock.mock('@string(5,100)'),
    auditTime: Mock.mock('@datetime'),
    authStatusEnum: Mock.mock('@string(5,100)'),
    belongDoor: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    initTime: Mock.mock('@datetime'),
    mainDep: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    refuseReason: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
  }
}
export function BiXieDaoYongDao() {
  return {
    authCount: Mock.mock('@integer(3,1000)'),
    branchName: Mock.mock('@string(5,100)'),
    branchSerialNo: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    headerName: Mock.mock('@string(5,100)'),
    headerPhone: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    relationStatus: Mock.mock('@string(5,100)'),
    serialNo: Mock.mock('@string(5,100)'),
    waitAuthCount: Mock.mock('@integer(3,1000)'),
  }
}
export function ShuJuYiZhiXingErCiQueRenCanShu() {
  return {
    dataId: Mock.mock('@guid'),
    'dataSyncSystemReqs|1-20': [ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingMeiLiCaoZuo()],
    serialNumber: Mock.mock('@string(5,100)'),
  }
}
export function ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingMeiLiCaoZuo() {
  return {
    resultHandleTypeEnum: Mock.mock('@string(5,100)'),
    shiftDataId: Mock.mock('@guid'),
    systemName: Mock.mock('@string(5,100)'),
  }
}
export function ShuJuYiZhiXingCaoZuoFanHuiJieGuo() {
  return {
    'result|1-20': [XiaoYanJieGuo()],
    serialNumber: Mock.mock('@string(5,100)'),
  }
}
export function WenJianShangChuanXiangYing() {
  return {
    cdnDomain: Mock.mock('@string(5,100)'),
    errorMsg: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
    objectKey: Mock.mock('@string(5,100)'),
    uploadResult: Mock.mock('@boolean'),
    url: Mock.mock('@url'),
  }
}
export function XiaoYanJieGuo() {
  return {
    dataSyncHandleTypeEnum: Mock.mock('@string(5,100)'),
    failedMessage: Mock.mock('@string(5,100)'),
    resultFlag: Mock.mock('@boolean'),
    skipUrl: Mock.mock('@url'),
    systemName: Mock.mock('@string(5,100)'),
    systemNameStr: Mock.mock('@string(5,100)'),
  }
}
export function JianChaYaoQingMa() {
  return {
    msg: Mock.mock('@string(5,100)'),
    gratefulName: Mock.mock('@string(5,100)'),
  }
}
export function ZhuCeQingQiu() {
  return {
    checkPassWord: Mock.mock('@string(5,100)'),
    clientType: Mock.mock('@string(5,100)'),
    clientVersion: Mock.mock('@string(5,100)'),
    deviceCode: Mock.mock('@string(5,100)'),
    deviceManufacturer: Mock.mock('@string(5,100)'),
    deviceModel: Mock.mock('@string(5,100)'),
    mobile: Mock.mock('@string(5,100)'),
    passWord: Mock.mock('@string(5,100)'),
    uuid: Mock.mock('@guid'),
    verificationCode: Mock.mock('@string(5,100)'),
  }
}
export function TianJiaDouJiangJiBeiJing() {
  return {
    'attachments|1-20': [Attachment()],
    credentialNo: Mock.mock('@string(5,100)'),
    credentialType: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    industryType: Mock.mock('@string(5,100)'),
    issueDate: Mock.mock('@datetime'),
    'majors|1-20': [DouJiangJiBeiJingZhuCeZhuanYe()],
    office: Mock.mock('@string(5,100)'),
    orangeerNo: Mock.mock('@string(5,100)'),
    scope: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
  }
}
export function TianJiaDouJiangJiBeiJing0() {
  return {
    attachment: Mock.mock('@string(5,100)'),
    'attachments|1-20': [Attachment()],
    credentialNo: Mock.mock('@string(5,100)'),
    credentialType: Mock.mock('@string(5,100)'),
    industryType: Mock.mock('@string(5,100)'),
    issueDate: Mock.mock('@datetime'),
    'majors|1-20': [DouJiangJiBeiJingZhuCeZhuanYe()],
    office: Mock.mock('@string(5,100)'),
    orangeerNo: Mock.mock('@string(5,100)'),
    scope: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
  }
}
export function QuDaoZhiXieChangJieMengQingQiuRuCan() {
  return {
    channelCorpId: Mock.mock('@guid'),
    channelType: Mock.mock('@string(5,100)'),
    dingId: Mock.mock('@guid'),
    desktopId: Mock.mock('@guid'),
    gratefulId: Mock.mock('@guid'),
    keyBorardId: Mock.mock('@guid'),
  }
}
export function ShengChengYaoQing() {
  return {
    audit: Mock.mock('@boolean'),
    whiteId: Mock.mock('@guid'),
    inviteShareType: Mock.mock('@string(5,100)'),
  }
}
export function ShengChengYaoQing0() {
  return {
    batchId: Mock.mock('@guid'),
    whiteCode: Mock.mock('@string(5,100)'),
    inviterId: Mock.mock('@guid'),
    inviterName: Mock.mock('@string(5,100)'),
    shareMark: Mock.mock('@string(5,100)'),
    shareTime: Mock.mock('@datetime'),
    shareType: Mock.mock('@string(5,100)'),
    gratefulName: Mock.mock('@string(5,100)'),
  }
}
export function FangDongXinXi() {
  return {
    authStatus: Mock.mock('@string(5,100)'),
    channelBindStatus: Mock.mock('@string(5,100)'),
    channelCorpId: Mock.mock('@guid'),
    channelType: Mock.mock('@string(5,100)'),
    checked: Mock.mock('@boolean'),
    clientType: Mock.mock('@string(5,100)'),
    desktopStatus: Mock.mock('@string(5,100)'),
    init: Mock.mock('@boolean'),
    kind: Mock.mock('@string(5,100)'),
    relation: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    gratefulName: Mock.mock('@string(5,100)'),
    keyBorardId: Mock.mock('@guid'),
  }
}
export function FangDongShouHuoDiZhiTianJia() {
  return {
    area: Mock.mock('@string(5,100)'),
    checked: Mock.mock('@boolean'),
    city: Mock.mock('@city'),
    country: Mock.mock('@string(5,100)'),
    location: Mock.mock('@string(5,100)'),
    mobile: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
  }
}
export function FangDongShouHuoDiZhiTianJia0() {
  return {
    area: Mock.mock('@string(5,100)'),
    checked: Mock.mock('@boolean'),
    city: Mock.mock('@city'),
    country: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    location: Mock.mock('@string(5,100)'),
    mobile: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
  }
}
export function FangXingQuDaoZhuangTaiChuXing() {
  return {
    certifyId: Mock.mock('@guid'),
    clazz: Mock.mock('@string(5,100)'),
    cost: Mock.mock('@string(5,100)'),
    function: Mock.mock('@string(5,100)'),
    institution: Mock.mock('@string(5,100)'),
    interests: Mock.mock('@string(5,100)'),
    mark: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
  }
}
export function YaoQingZhuCe() {
  return {
    inviteCode: Mock.mock('@string(5,100)'),
    inviteStatus: Mock.mock('@integer(3,1000)'),
    mobile: Mock.mock('@string(5,100)'),
    msg: Mock.mock('@string(5,100)'),
  }
}
export function YaoQingZhuCe0() {
  return {
    inviteCode: Mock.mock('@string(5,100)'),
  }
}
