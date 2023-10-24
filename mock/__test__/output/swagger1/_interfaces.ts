export function AccInfoResp() {
  return {
    mobile: '@string(5,1000)',
    name: '@string(5,1000)',
  }
}
export function AddOrUpdateCredentialReq() {
  return {
    attachments: Attachment(),
    credentialNo: '@string(5,1000)',
    credentialType: '@string(5,1000)',
    credentialTypeCode: '@string(5,1000)',
    id: '@string(5,1000)',
    issuingDate: '@string(5,1000)',
    office: '@string(5,1000)',
    scope: '@string(5,1000)',
    scopeCode: '@string(5,1000)',
    source: '@string(5,1000)',
    validDate: '@string(5,1000)',
  }
}
export function AddOrUpdateInviteSetReq() {
  return {
    audit: '@boolean()',
    auditorIds: '@string(5,1000)',
    id: '@string(5,1000)',
    open: '@boolean()',
    shareType: '@string(5,1000)',
  }
}
export function AddOrUpdateJobReq() {
  return {
    id: '@string(5,1000)',
    name: '@string(5,1000)',
    orderNum: '@integer(3,1000)',
    parentId: '@string(5,1000)',
  }
}
export function AddVerificationImageReq() {
  return {
    name: '@string(5,1000)',
    resource: '@string(5,1000)',
    sourceEnum: '@string(5,1000)',
  }
}
export function AgentConfigResp() {
  return {
    agentId: '@string(5,1000)',
    corpId: '@string(5,1000)',
    nonceStr: '@string(5,1000)',
    signature: '@string(5,1000)',
    timestamp: '@string(5,1000)',
  }
}
export function AliMpLoginReq() {
  return {
    appid: '@string(5,1000)',
    clientType: '@string(5,1000)',
    clientVersion: '@string(5,1000)',
    deviceCode: '@string(5,1000)',
    deviceManufacturer: '@string(5,1000)',
    deviceModel: '@string(5,1000)',
    phoneData: '@string(5,1000)',
    sign: '@string(5,1000)',
  }
}
export function ApiResponse() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseAccInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: AccInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseAgentConfigResp() {
  return {
    code: '@integer(3,1000)',
    data: AgentConfigResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseChannelAppGratefulConfigResp() {
  return {
    code: '@integer(3,1000)',
    data: ChannelAppGratefulConfigResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseChannelKeyBorardResp() {
  return {
    code: '@integer(3,1000)',
    data: ChannelKeyBorardResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComLoginResp() {
  return {
    code: '@integer(3,1000)',
    data: ComLoginResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageDesktopAddRecordResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageDesktopAddRecordResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageDesktopComplexResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageDesktopComplexResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageDesktopResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageDesktopResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageDoorCredentialResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageDoorCredentialResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageDoorIdentificationResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageDoorIdentificationResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageEpDesktopResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageEpDesktopResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageInviteDesktopResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageInviteDesktopResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageLogLoginResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageLogLoginResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageZhiXieChangChuXing() {
  return {
    code: '@integer(3,1000)',
    data: ComPageZhiXieChangChuXing(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageGuanLianShenHeXinXi() {
  return {
    code: '@integer(3,1000)',
    data: ComPageGuanLianShenHeXinXi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageXiaoYuanZhuoGuanLi() {
  return {
    code: '@integer(3,1000)',
    data: ComPageXiaoYuanZhuoGuanLi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageBiXieDaoYongDao() {
  return {
    code: '@integer(3,1000)',
    data: ComPageBiXieDaoYongDao(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageTianJiaDouJiangJiBeiJing() {
  return {
    code: '@integer(3,1000)',
    data: ComPageTianJiaDouJiangJiBeiJing(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageFangDongShouHuoDiZhiTianJia() {
  return {
    code: '@integer(3,1000)',
    data: ComPageFangDongShouHuoDiZhiTianJia(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseCorpWehiallAuthUrlResp() {
  return {
    code: '@integer(3,1000)',
    data: CorpWehiallAuthUrlResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseCurrentAuthResp() {
  return {
    code: '@integer(3,1000)',
    data: CurrentAuthResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseWhiteDetailResp() {
  return {
    code: '@integer(3,1000)',
    data: WhiteDetailResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseWhiteLinkDoorResp() {
  return {
    code: '@integer(3,1000)',
    data: WhiteLinkDoorResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseDescribeFaceVerifyResponse() {
  return {
    code: '@integer(3,1000)',
    data: DescribeFaceVerifyResponse(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseDesktopAllInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: DesktopAllInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseDesktopNoActiveResp() {
  return {
    code: '@integer(3,1000)',
    data: DesktopNoActiveResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseDesktopResp() {
  return {
    code: '@integer(3,1000)',
    data: DesktopResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseEntReSetResp() {
  return {
    code: '@integer(3,1000)',
    data: EntReSetResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHeaderEmpowerSmsInfo() {
  return {
    code: '@integer(3,1000)',
    data: HeaderEmpowerSmsInfo(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseImportDesktopResp() {
  return {
    code: '@integer(3,1000)',
    data: ImportDesktopResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseInviteDoorReInfo() {
  return {
    code: '@integer(3,1000)',
    data: InviteDoorReInfo(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseInviteJoinEchoResp() {
  return {
    code: '@integer(3,1000)',
    data: InviteJoinEchoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseInviteLoginResp() {
  return {
    code: '@integer(3,1000)',
    data: InviteLoginResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseInviteSetResp() {
  return {
    code: '@integer(3,1000)',
    data: InviteSetResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseJSONArray() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseJudgeSwitchDoorLimitResp() {
  return {
    code: '@integer(3,1000)',
    data: JudgeSwitchDoorLimitResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListAuthDoorOrgInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: AuthDoorOrgInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListWhiteResp() {
  return {
    code: '@integer(3,1000)',
    data: WhiteResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListEmpowerWhiteResp() {
  return {
    code: '@integer(3,1000)',
    data: EmpowerWhiteResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListEpEntTreeResp() {
  return {
    code: '@integer(3,1000)',
    data: EpEntTreeResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListExtWhiteResp() {
  return {
    code: '@integer(3,1000)',
    data: ExtWhiteResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListImportDesktopResp() {
  return {
    code: '@integer(3,1000)',
    data: ImportDesktopResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListMenuResp() {
  return {
    code: '@integer(3,1000)',
    data: MenuResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListPostResp() {
  return {
    code: '@integer(3,1000)',
    data: PostResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListQueryCatPageHomeResp() {
  return {
    code: '@integer(3,1000)',
    data: QueryCatPageHomeResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListPinkInfo() {
  return {
    code: '@integer(3,1000)',
    data: PinkInfo(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListPinkResq() {
  return {
    code: '@integer(3,1000)',
    data: PinkResq(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListSelectorDesktopResp() {
  return {
    code: '@integer(3,1000)',
    data: SelectorDesktopResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListSuperManResp() {
  return {
    code: '@integer(3,1000)',
    data: SuperManResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    code: '@integer(3,1000)',
    data: SysDictDuiXiangnullZhiBuXuLieHua(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListTreelong() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListlong() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListstring() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListZhiXieChangChuXing() {
  return {
    code: '@integer(3,1000)',
    data: ZhiXieChangChuXing(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListZhiXieChangFangDongXinXi() {
  return {
    code: '@integer(3,1000)',
    data: ZhiXieChangFangDongXinXi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListWenJianShangChuanXiangYing() {
  return {
    code: '@integer(3,1000)',
    data: WenJianShangChuanXiangYing(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListShengChengYaoQing() {
  return {
    code: '@integer(3,1000)',
    data: ShengChengYaoQing0(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListFangDongXinXi() {
  return {
    code: '@integer(3,1000)',
    data: FangDongXinXi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListFangXingQuDaoZhuangTaiChuXing() {
  return {
    code: '@integer(3,1000)',
    data: FangXingQuDaoZhuangTaiChuXing(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseMapstringobject() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseMapstringstring() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseMenuCheckedResp() {
  return {
    code: '@integer(3,1000)',
    data: MenuCheckedResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseMenuResp() {
  return {
    code: '@integer(3,1000)',
    data: MenuResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseOcrHappyLicenseBO() {
  return {
    code: '@integer(3,1000)',
    data: OcrHappyLicenseBO(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseOcrIdCardBackResp() {
  return {
    code: '@integer(3,1000)',
    data: OcrIdCardBackResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseOcrIdCardFrontResp() {
  return {
    code: '@integer(3,1000)',
    data: OcrIdCardFrontResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    code: '@integer(3,1000)',
    data: PageSysDictDuiXiangnullZhiBuXuLieHua(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponsePageZhiXieChangBoJuZiXinXi() {
  return {
    code: '@integer(3,1000)',
    data: PageZhiXieChangBoJuZiXinXi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseQueryAccInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: QueryAccInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseQueryCertFormResp() {
  return {
    code: '@integer(3,1000)',
    data: QueryCertFormResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseQueryDoorPageHomeResp() {
  return {
    code: '@integer(3,1000)',
    data: QueryDoorPageHomeResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseQueryJudgeClaimResp() {
  return {
    code: '@integer(3,1000)',
    data: QueryJudgeClaimResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseQueryWalletBalanceResp() {
  return {
    code: '@integer(3,1000)',
    data: QueryWalletBalanceResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseOrangeerResultResp() {
  return {
    code: '@integer(3,1000)',
    data: OrangeerResultResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponsePinkInfoResq() {
  return {
    code: '@integer(3,1000)',
    data: PinkInfoResq(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseScanReQrResp() {
  return {
    code: '@integer(3,1000)',
    data: ScanReQrResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseSendActiveMessageResp() {
  return {
    code: '@integer(3,1000)',
    data: SendActiveMessageResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseShiftDesktopResp() {
  return {
    code: '@integer(3,1000)',
    data: ShiftDesktopResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseVerificationResp() {
  return {
    code: '@integer(3,1000)',
    data: VerificationResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseVoid() {
  return {
    code: '@integer(3,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseboolean() {
  return {
    code: '@integer(3,1000)',
    data: '@boolean()',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponselong() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponsestring() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseDouJiangJiFangDongXinXiXiangQingBiao() {
  return {
    code: '@integer(3,1000)',
    data: DouJiangJiFangDongXinXiXiangQingBiao(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseDouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu() {
  return {
    code: '@integer(3,1000)',
    data: DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseDouJiangJiFangXingXinXi() {
  return {
    code: '@integer(3,1000)',
    data: DouJiangJiFangXingXinXi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseZhiXieChangJianDanFangXing() {
  return {
    code: '@integer(3,1000)',
    data: ZhiXieChangJianDanFangXing0(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseZhiXieChangZhuTiXinXi() {
  return {
    code: '@integer(3,1000)',
    data: ZhiXieChangZhuTiXinXi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseZhiXieChangBoJuZiXinXi() {
  return {
    code: '@integer(3,1000)',
    data: ZhiXieChangBoJuZiXinXi0(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseZhiXieChangFangDongXinXiXiangQing() {
  return {
    code: '@integer(3,1000)',
    data: ZhiXieChangFangDongXinXiXiangQing0(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseGuanLianMaoZiYongDao() {
  return {
    code: '@integer(3,1000)',
    data: GuanLianMaoZiYongDao(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseGuanLianMaoZiXiangQing() {
  return {
    code: '@integer(3,1000)',
    data: GuanLianMaoZiXiangQing(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseShenHeTongJiHuanCunSanShiMiao() {
  return {
    code: '@integer(3,1000)',
    data: ShenHeTongJiHuanCunSanShiMiao(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseBiXieDao() {
  return {
    code: '@integer(3,1000)',
    data: BiXieDao0(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo() {
  return {
    code: '@integer(3,1000)',
    data: ShuJuYiZhiXingCaoZuoFanHuiJieGuo(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseJianChaYaoQingMa() {
  return {
    code: '@integer(3,1000)',
    data: JianChaYaoQingMa(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseFangDongXinXi() {
  return {
    code: '@integer(3,1000)',
    data: FangDongXinXi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseYaoQingZhuCe() {
  return {
    code: '@integer(3,1000)',
    data: YaoQingZhuCe(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function Attachment() {
  return {
    id: '@string(5,1000)',
    name: '@string(5,1000)',
    type: '@string(5,1000)',
    url: '@string(5,1000)',
  }
}
export function AuditRelationTotalReq() {
  return {
    endTime: '@string(5,1000)',
    startTime: '@string(5,1000)',
  }
}
export function AuditorInfo() {
  return {
    id: '@string(5,1000)',
    name: '@string(5,1000)',
  }
}
export function AuthDoorOrgInfoResp() {
  return {
    authCount: '@string(5,1000)',
    authStatus: '@string(5,1000)',
    authTypeMap: '@string(5,1000)',
    chiefly: '@boolean()',
    whiteChildrenDesktopCount: '@string(5,1000)',
    whiteLinkDoorResp: WhiteLinkDoorResp(),
    id: '@string(5,1000)',
    licenseUnifiedCode: '@string(5,1000)',
    name: '@string(5,1000)',
    serialNum: '@string(5,1000)',
  }
}
export function AuthOrgKeyBorardReq() {
  return {
    authFlag: '@boolean()',
    certType: '@string(5,1000)',
    whiteId: '@string(5,1000)',
    desktopIds: '@string(5,1000)',
    doorId: '@string(5,1000)',
  }
}
export function BasePageReq() {
  return {
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function ChannelAppGratefulConfigAddReq() {
  return {
    aesKey: '@string(5,1000)',
    aesToken: '@string(5,1000)',
    agentId: '@string(5,1000)',
    appKey: '@string(5,1000)',
    appSecret: '@string(5,1000)',
    channelType: '@string(5,1000)',
    corpId: '@string(5,1000)',
  }
}
export function ChannelAppGratefulConfigResp() {
  return {
    aesKey: '@string(5,1000)',
    aesToken: '@string(5,1000)',
    agentId: '@string(5,1000)',
    appKey: '@string(5,1000)',
    appSecret: '@string(5,1000)',
    appUrl: '@string(5,1000)',
    channelType: '@string(5,1000)',
    corpId: '@string(5,1000)',
    id: '@string(5,1000)',
    manUrl: '@string(5,1000)',
    outIp: '@string(5,1000)',
    pcUrl: '@string(5,1000)',
    recUrl: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function ChannelAppGratefulConfigUpReq() {
  return {
    aesKey: '@string(5,1000)',
    aesToken: '@string(5,1000)',
    agentId: '@string(5,1000)',
    appKey: '@string(5,1000)',
    appSecret: '@string(5,1000)',
    channelType: '@string(5,1000)',
    corpId: '@string(5,1000)',
    id: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function ChannelComLoginReq() {
  return {
    blue: '@string(5,1000)',
    certificate: '@string(5,1000)',
    channelCorpId: '@string(5,1000)',
    channelDesktopId: '@string(5,1000)',
    channelType: '@string(5,1000)',
    clientType: '@string(5,1000)',
    clientVersion: '@string(5,1000)',
    deviceCode: '@string(5,1000)',
    deviceManufacturer: '@string(5,1000)',
    deviceModel: '@string(5,1000)',
    loginModeEnum: '@string(5,1000)',
    uuid: '@string(5,1000)',
  }
}
export function ChannelKeyBorardResp() {
  return {
    channelCorpId: '@string(5,1000)',
    channelDesktopId: '@string(5,1000)',
    channelType: '@string(5,1000)',
  }
}
export function CharSequence() {}
export function ComLoginReq() {
  return {
    blue: '@string(5,1000)',
    certificate: '@string(5,1000)',
    clientType: '@string(5,1000)',
    clientVersion: '@string(5,1000)',
    deviceCode: '@string(5,1000)',
    deviceManufacturer: '@string(5,1000)',
    deviceModel: '@string(5,1000)',
    loginModeEnum: '@string(5,1000)',
    uuid: '@string(5,1000)',
  }
}
export function ComLoginResp() {
  return {
    code: '@integer(3,1000)',
    newKeyBorard: '@boolean()',
    setPassWord: '@boolean()',
    token: '@string(5,1000)',
    tokenTimeOut: '@string(5,1000)',
  }
}
export function ComPage() {
  return {
    current: '@string(5,1000)',
    records: '@string(5,1000)',
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageDesktopAddRecordResp() {
  return {
    current: '@string(5,1000)',
    records: DesktopAddRecordResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageDesktopComplexResp() {
  return {
    current: '@string(5,1000)',
    records: DesktopComplexResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageDesktopResp() {
  return {
    current: '@string(5,1000)',
    records: DesktopResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageDoorCredentialResp() {
  return {
    current: '@string(5,1000)',
    records: DoorCredentialResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageDoorIdentificationResp() {
  return {
    current: '@string(5,1000)',
    records: DoorIdentificationResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageEpDesktopResp() {
  return {
    current: '@string(5,1000)',
    records: EpDesktopResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageInviteDesktopResp() {
  return {
    current: '@string(5,1000)',
    records: InviteDesktopResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageLogLoginResp() {
  return {
    current: '@string(5,1000)',
    records: LogLoginResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageRelationDoorInfo() {
  return {
    current: '@string(5,1000)',
    records: RelationDoorInfo(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageZhiXieChangChuXing() {
  return {
    current: '@string(5,1000)',
    records: ZhiXieChangChuXing(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageGuanLianShenHeXinXi() {
  return {
    current: '@string(5,1000)',
    records: GuanLianShenHeXinXi(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageXiaoYuanZhuoGuanLi() {
  return {
    current: '@string(5,1000)',
    records: XiaoYuanZhuoGuanLi0(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageBiXieDao() {
  return {
    current: '@string(5,1000)',
    records: BiXieDao1(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageBiXieDaoYongDao() {
  return {
    current: '@string(5,1000)',
    records: BiXieDaoYongDao(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageTianJiaDouJiangJiBeiJing() {
  return {
    current: '@string(5,1000)',
    records: TianJiaDouJiangJiBeiJing(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageFangDongShouHuoDiZhiTianJia() {
  return {
    current: '@string(5,1000)',
    records: FangDongShouHuoDiZhiTianJia0(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function CompanyInfo() {
  return {
    belongOrg: '@string(5,1000)',
    bondType: '@string(5,1000)',
    happyScope: '@string(5,1000)',
    happyTerm: '@string(5,1000)',
    category: '@string(5,1000)',
    checkDate: '@string(5,1000)',
    city: '@string(5,1000)',
    companyId: '@string(5,1000)',
    companyName: '@string(5,1000)',
    companyScore: '@string(5,1000)',
    companyType: '@string(5,1000)',
    contributedCapital: '@string(5,1000)',
    createTime: '@string(5,1000)',
    creditCode: '@string(5,1000)',
    district: '@string(5,1000)',
    emails: '@string(5,1000)',
    estiblishTime: '@string(5,1000)',
    firstPosition: '@string(5,1000)',
    labelListV2: '@string(5,1000)',
    logo: '@string(5,1000)',
    nameen: '@string(5,1000)',
    newtestName: '@string(5,1000)',
    orgNumber: '@string(5,1000)',
    phoneNum: '@string(5,1000)',
    province: '@string(5,1000)',
    regCapital: '@string(5,1000)',
    regLocation: '@string(5,1000)',
    regNumber: '@string(5,1000)',
    regStatus: '@string(5,1000)',
    socialStaffNum: '@string(5,1000)',
    staffSize: '@string(5,1000)',
    taxCode: '@string(5,1000)',
    taxpayerQualification: '@string(5,1000)',
    updateTime: '@string(5,1000)',
    websites: '@string(5,1000)',
  }
}
export function Comparableobject() {}
export function CorpWehiallAuthUrlResp() {
  return {
    authUrl: '@string(5,1000)',
  }
}
export function CurrentAuthResp() {
  return {
    menuRoute: RouterResp(),
    permission: '@string(5,1000)',
  }
}
export function WhiteAddReq() {
  return {
    whiteName: '@string(5,1000)',
    leaderDesktopId: '@string(5,1000)',
    mark: '@string(5,1000)',
    orderNum: '@integer(3,1000)',
    parentId: '@string(5,1000)',
    profile: '@string(5,1000)',
    scaleType: '@string(5,1000)',
  }
}
export function WhiteDetailResp() {
  return {
    ancestors: '@string(5,1000)',
    channelWhiteName: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    whiteCode: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    email: '@string(5,1000)',
    id: '@string(5,1000)',
    leaderDesktopId: '@string(5,1000)',
    leaderDesktopInfo: DesktopComplexResp(),
    mark: '@string(5,1000)',
    markDesc: '@string(5,1000)',
    modified: '@string(5,1000)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,1000)',
    parentId: '@string(5,1000)',
    parentName: '@string(5,1000)',
    phone: '@string(5,1000)',
    profile: '@string(5,1000)',
    scaleType: '@string(5,1000)',
    scaleTypeDesc: '@string(5,1000)',
    status: '@string(5,1000)',
    statusDesc: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function WhiteLinkDoorReq() {
  return {
    whiteId: '@string(5,1000)',
    doorId: '@string(5,1000)',
    overFlag: '@boolean()',
  }
}
export function WhiteLinkDoorResp() {
  return {
    ancestors: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    whiteCode: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    email: '@string(5,1000)',
    doorId: '@string(5,1000)',
    id: '@string(5,1000)',
    leaderDesktopId: '@string(5,1000)',
    leaderKeyBorardId: '@string(5,1000)',
    linkStatus: '@boolean()',
    mark: '@string(5,1000)',
    markDesc: '@string(5,1000)',
    modified: '@string(5,1000)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,1000)',
    parentId: '@string(5,1000)',
    phone: '@string(5,1000)',
    profile: '@string(5,1000)',
    scaleType: '@string(5,1000)',
    scaleTypeDesc: '@string(5,1000)',
    status: '@string(5,1000)',
    statusDesc: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function WhiteResp() {
  return {
    ancestors: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    whiteCode: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    email: '@string(5,1000)',
    id: '@string(5,1000)',
    leaderDesktopId: '@string(5,1000)',
    leaderKeyBorardId: '@string(5,1000)',
    linkStatus: '@boolean()',
    mark: '@string(5,1000)',
    markDesc: '@string(5,1000)',
    modified: '@string(5,1000)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,1000)',
    parentId: '@string(5,1000)',
    phone: '@string(5,1000)',
    profile: '@string(5,1000)',
    scaleType: '@string(5,1000)',
    scaleTypeDesc: '@string(5,1000)',
    status: '@string(5,1000)',
    statusDesc: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function WhiteUpReq() {
  return {
    whiteName: '@string(5,1000)',
    id: '@string(5,1000)',
    leaderDesktopId: '@string(5,1000)',
    orderNum: '@integer(3,1000)',
    profile: '@string(5,1000)',
    scaleType: '@string(5,1000)',
  }
}
export function DescribeFaceVerifyResponse() {
  return {
    code: '@string(5,1000)',
    message: '@string(5,1000)',
    requestId: '@string(5,1000)',
    resultObject: DescribeFaceVerifyResponseResultObject(),
  }
}
export function DescribeFaceVerifyResponseResultObject() {
  return {
    deviceToken: '@string(5,1000)',
    identityInfo: '@string(5,1000)',
    materialInfo: '@string(5,1000)',
    passed: '@string(5,1000)',
    subCode: '@string(5,1000)',
  }
}
export function DesktopAddRecordResp() {
  return {
    addTime: '@string(5,1000)',
    adderName: '@string(5,1000)',
    adderPhone: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    email: '@string(5,1000)',
    desktopName: '@string(5,1000)',
    desktopPhone: '@string(5,1000)',
    desktopStatus: '@string(5,1000)',
    id: '@string(5,1000)',
    joinTime: '@string(5,1000)',
    refuse: '@string(5,1000)',
    pink: '@string(5,1000)',
  }
}
export function DesktopAddReq() {
  return {
    email: '@string(5,1000)',
    mainWhiteId: '@string(5,1000)',
    mobile: '@string(5,1000)',
    nickName: '@string(5,1000)',
    relation: '@string(5,1000)',
    pinkIds: '@string(5,1000)',
    sex: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function DesktopAllInfoResp() {
  return {
    whiteRespList: ExtWhiteResp(),
    desktopResp: DesktopResp(),
    jobRespList: JobResp(),
    postRespList: PostResp(),
    pinkRespList: PinkResq(),
  }
}
export function DesktopComplexResp() {
  return {
    authStatus: '@boolean()',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    whiteRespList: DesktopWhiteResp(),
    email: '@string(5,1000)',
    id: '@string(5,1000)',
    jobRespList: DesktopJobResp(),
    mobile: '@string(5,1000)',
    modified: '@string(5,1000)',
    nickName: '@string(5,1000)',
    postRespList: DesktopPostResp(),
    realAuth: '@boolean()',
    relation: '@string(5,1000)',
    sex: '@string(5,1000)',
    sexDesc: '@string(5,1000)',
    status: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function DesktopWhiteResp() {
  return {
    whiteCode: '@string(5,1000)',
    whiteId: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    desktopId: '@string(5,1000)',
    id: '@string(5,1000)',
    mainWhite: '@boolean()',
    gratefulId: '@string(5,1000)',
  }
}
export function DesktopJobResp() {
  return {
    desktopId: '@string(5,1000)',
    id: '@string(5,1000)',
    jobCode: '@string(5,1000)',
    jobId: '@string(5,1000)',
    jobName: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function DesktopNoActiveResp() {
  return {
    count: '@integer(3,1000)',
    desktopResp: DesktopRespRes(),
  }
}
export function DesktopPostResp() {
  return {
    desktopId: '@string(5,1000)',
    id: '@string(5,1000)',
    postCode: '@string(5,1000)',
    postId: '@string(5,1000)',
    postName: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function DesktopResp() {
  return {
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    email: '@string(5,1000)',
    id: '@string(5,1000)',
    mobile: '@string(5,1000)',
    modified: '@string(5,1000)',
    nickName: '@string(5,1000)',
    relation: '@string(5,1000)',
    sex: '@string(5,1000)',
    sexDesc: '@string(5,1000)',
    status: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function DesktopRespReq() {
  return {
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    email: '@string(5,1000)',
    id: '@string(5,1000)',
    mobile: '@string(5,1000)',
    modified: '@string(5,1000)',
    nickName: '@string(5,1000)',
    relation: '@string(5,1000)',
    sex: '@string(5,1000)',
    status: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function DesktopRespRes() {
  return {
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    email: '@string(5,1000)',
    id: '@string(5,1000)',
    mobile: '@string(5,1000)',
    modified: '@string(5,1000)',
    nickName: '@string(5,1000)',
    relation: '@string(5,1000)',
    sex: '@string(5,1000)',
    sexDesc: '@string(5,1000)',
    status: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function DesktopSelectorReq() {
  return {
    whiteId: '@string(5,1000)',
    jobId: '@string(5,1000)',
  }
}
export function DesktopSimpleListReq() {
  return {
    id: '@string(5,1000)',
    mobile: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    status: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function DesktopUpReq() {
  return {
    whiteIds: '@string(5,1000)',
    email: '@string(5,1000)',
    id: '@string(5,1000)',
    jodIds: '@string(5,1000)',
    mainWhiteId: '@string(5,1000)',
    nickName: '@string(5,1000)',
    postIds: '@string(5,1000)',
    sex: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function EmpowerWhiteResp() {
  return {
    children: EmpowerWhiteResp(),
    id: '@string(5,1000)',
    info: WhiteResp(),
    label: '@string(5,1000)',
    parentId: '@string(5,1000)',
    weight: '@string(5,1000)',
  }
}
export function EntInviteConfig() {
  return {
    auditState: '@boolean()',
    auditor: AuditorInfo(),
    doorId: '@string(5,1000)',
    id: '@string(5,1000)',
    inviteType: '@string(5,1000)',
    module: '@string(5,1000)',
    openState: '@boolean()',
  }
}
export function EntReSetReq() {
  return {
    emInviteConfig: EntInviteConfig(),
    reInviteConfig: EntInviteConfig(),
    pinkConfigInfo: PinkConfigInfo(),
  }
}
export function EntReSetResp() {
  return {
    emInviteConfig: EntInviteConfig(),
    reInviteConfig: EntInviteConfig(),
    pinkConfigInfo: PinkConfigInfo(),
  }
}
export function DoorAuditReq() {
  return {
    endTime: '@string(5,1000)',
    franchiseDoorName: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    startTime: '@string(5,1000)',
  }
}
export function DoorBeneficiaryReq() {
  return {
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    doorAcctId: '@string(5,1000)',
    doorBeneficiaryGreen: '@string(5,1000)',
    doorBeneficiaryConctactPhone: '@string(5,1000)',
    doorBeneficiaryIdCardBackId: '@string(5,1000)',
    doorBeneficiaryIdCardFileId: '@string(5,1000)',
    doorBeneficiaryIdCardFrontId: '@string(5,1000)',
    doorBeneficiaryIdCardNo: '@string(5,1000)',
    doorBeneficiaryIdCardType: '@string(5,1000)',
    doorBeneficiaryIdCardValidDate: '@string(5,1000)',
    doorBeneficiaryIdCardValidStartDate: '@string(5,1000)',
    doorBeneficiaryIncomeType: '@string(5,1000)',
    doorBeneficiaryName: '@string(5,1000)',
    doorBeneficiaryPost: '@string(5,1000)',
    doorBeneficiaryShareRatio: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    modified: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function DoorBeneficiaryResp() {
  return {
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    doorAcctId: '@string(5,1000)',
    doorBeneficiaryGreen: '@string(5,1000)',
    doorBeneficiaryConctactPhone: '@string(5,1000)',
    doorBeneficiaryIdCardBackId: '@string(5,1000)',
    doorBeneficiaryIdCardFileId: '@string(5,1000)',
    doorBeneficiaryIdCardFrontId: '@string(5,1000)',
    doorBeneficiaryIdCardNo: '@string(5,1000)',
    doorBeneficiaryIdCardType: '@string(5,1000)',
    doorBeneficiaryIdCardTypeDict: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorBeneficiaryIdCardValidDate: '@string(5,1000)',
    doorBeneficiaryIdCardValidStartDate: '@string(5,1000)',
    doorBeneficiaryIncomeType: '@string(5,1000)',
    doorBeneficiaryName: '@string(5,1000)',
    doorBeneficiaryPost: '@string(5,1000)',
    doorBeneficiaryShareRatio: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    modified: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function DoorCredentialResp() {
  return {
    attachments: Attachment(),
    credentialNo: '@string(5,1000)',
    credentialType: '@string(5,1000)',
    credentialTypeCode: '@string(5,1000)',
    doorId: '@string(5,1000)',
    id: '@string(5,1000)',
    issuingDate: '@string(5,1000)',
    office: '@string(5,1000)',
    scope: '@string(5,1000)',
    scopeCode: '@string(5,1000)',
    source: '@string(5,1000)',
    validDate: '@string(5,1000)',
  }
}
export function DoorIdentificationReq() {
  return {
    alTicket: '@string(5,1000)',
    allEInvoiceStatus: '@string(5,1000)',
    authStatus: '@string(5,1000)',
    commontStatus: '@string(5,1000)',
    esignALlStatus: '@string(5,1000)',
    esignOnlySignStatus: '@string(5,1000)',
    id: '@string(5,1000)',
    legalCat: '@string(5,1000)',
    licenseUnifiedCode: '@string(5,1000)',
    name: '@string(5,1000)',
    page: '@integer(3,1000)',
    serialNum: '@string(5,1000)',
    size: '@integer(3,1000)',
    walletStatus: '@string(5,1000)',
  }
}
export function DoorIdentificationResp() {
  return {
    authStatus: '@string(5,1000)',
    authTypeMap: '@string(5,1000)',
    bizAuthType: DoorIdentificationType(),
    chiefly: '@boolean()',
    whiteLinkDoorResp: WhiteLinkDoorResp(),
    id: '@string(5,1000)',
    licenseUnifiedCode: '@string(5,1000)',
    name: '@string(5,1000)',
    serialNum: '@string(5,1000)',
  }
}
export function DoorIdentificationType() {
  return {
    clazz: '@string(5,1000)',
    cost: '@string(5,1000)',
    function: '@string(5,1000)',
    institution: '@string(5,1000)',
    interests: '@string(5,1000)',
    name: '@string(5,1000)',
    status: '@string(5,1000)',
    type: '@string(5,1000)',
  }
}
export function DoorShareholderReq() {
  return {
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    doorAcctId: '@string(5,1000)',
    doorShareholderIdCardBackFileId: '@string(5,1000)',
    doorShareholderIdCardFileId: '@string(5,1000)',
    doorShareholderIdCardNo: '@string(5,1000)',
    doorShareholderIdCardType: '@string(5,1000)',
    doorShareholderIdCardValidDate: '@string(5,1000)',
    doorShareholderIdCardValidStartDate: '@string(5,1000)',
    doorShareholderName: '@string(5,1000)',
    doorShareholderShareRatio: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    modified: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function DoorShareholderResp() {
  return {
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    doorAcctId: '@string(5,1000)',
    doorShareholderIdCardBackFileId: '@string(5,1000)',
    doorShareholderIdCardFileId: '@string(5,1000)',
    doorShareholderIdCardNo: '@string(5,1000)',
    doorShareholderIdCardType: '@string(5,1000)',
    doorShareholderIdCardTypeSysDict: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorShareholderIdCardValidDate: '@string(5,1000)',
    doorShareholderIdCardValidStartDate: '@string(5,1000)',
    doorShareholderName: '@string(5,1000)',
    doorShareholderShareRatio: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    modified: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function EpDesktopResp() {
  return {
    authStatus: '@boolean()',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    whiteRespList: DesktopWhiteResp(),
    email: '@string(5,1000)',
    id: '@string(5,1000)',
    jmAuthStatus: '@string(5,1000)',
    jobRespList: DesktopJobResp(),
    mobile: '@string(5,1000)',
    modified: '@string(5,1000)',
    nickName: '@string(5,1000)',
    postRespList: DesktopPostResp(),
    realAuth: '@boolean()',
    refuseReason: '@string(5,1000)',
    relation: '@string(5,1000)',
    pinkName: '@string(5,1000)',
    sex: '@string(5,1000)',
    sexDesc: '@string(5,1000)',
    status: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function EpEntTreeResp() {
  return {
    entMetas: ReEntMeta(),
    id: '@string(5,1000)',
    name: '@string(5,1000)',
  }
}
export function ExtWhiteResp() {
  return {
    ancestors: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    whiteCode: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    email: '@string(5,1000)',
    desktopId: '@string(5,1000)',
    id: '@string(5,1000)',
    leaderDesktopId: '@string(5,1000)',
    leaderKeyBorardId: '@string(5,1000)',
    linkStatus: '@boolean()',
    mainWhite: '@boolean()',
    mark: '@string(5,1000)',
    markDesc: '@string(5,1000)',
    modified: '@string(5,1000)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,1000)',
    parentId: '@string(5,1000)',
    phone: '@string(5,1000)',
    profile: '@string(5,1000)',
    scaleType: '@string(5,1000)',
    scaleTypeDesc: '@string(5,1000)',
    status: '@string(5,1000)',
    statusDesc: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function FileSystemResource() {
  return {
    description: '@string(5,1000)',
    file: 'file',
    filename: '@string(5,1000)',
    inputStream: InputStream(),
    open: '@boolean()',
    outputStream: OutputStream(),
    path: '@string(5,1000)',
    readable: '@boolean()',
    uri: '@string(5,1000)',
    url: '@string(5,1000)',
    writable: '@boolean()',
  }
}
export function HeaderEmpowerSmsInfo() {
  return {
    doorId: '@string(5,1000)',
    phone: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function ImportDesktopErrorData() {
  return {
    error: '@string(5,1000)',
    id: '@string(5,1000)',
    mobile: '@string(5,1000)',
    name: '@string(5,1000)',
  }
}
export function ImportDesktopResp() {
  return {
    errorDataList: ImportDesktopErrorData(),
    errorNum: '@integer(3,1000)',
    errorUrl: '@string(5,1000)',
    importDate: '@string(5,1000)',
    succNum: '@integer(3,1000)',
  }
}
export function InitAgengConfigReq() {
  return {
    initPage: '@string(5,1000)',
  }
}
export function InputStream() {}
export function InviteDesktopResp() {
  return {
    applyReason: '@string(5,1000)',
    applyTime: '@string(5,1000)',
    whiteCode: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    desktopStatus: '@string(5,1000)',
    id: '@string(5,1000)',
    inviterName: '@string(5,1000)',
    inviterPhone: '@string(5,1000)',
    joinTime: '@string(5,1000)',
    proposerId: '@string(5,1000)',
    proposerName: '@string(5,1000)',
    proposerPhone: '@string(5,1000)',
    refuse: '@string(5,1000)',
    shareTime: '@string(5,1000)',
    shareType: '@string(5,1000)',
    status: '@string(5,1000)',
  }
}
export function InviteDoorReInfo() {
  return {
    entName: '@string(5,1000)',
    doorId: '@string(5,1000)',
    handleStatus: '@boolean()',
    headerName: '@string(5,1000)',
    headerPhone: '@string(5,1000)',
    inviteCode: '@string(5,1000)',
    isHandler: '@boolean()',
    reId: '@string(5,1000)',
    reGratefulId: '@string(5,1000)',
  }
}
export function InviteJoinEchoResp() {
  return {
    applyType: '@string(5,1000)',
    doorCertStatus: '@string(5,1000)',
    doorName: '@string(5,1000)',
    inviteName: '@string(5,1000)',
    joinName: '@string(5,1000)',
    key: '@string(5,1000)',
    mobile: '@string(5,1000)',
  }
}
export function InviteLoginReq() {
  return {
    applyType: '@string(5,1000)',
    certificate: '@string(5,1000)',
    clientType: '@string(5,1000)',
    clientVersion: '@string(5,1000)',
    deviceCode: '@string(5,1000)',
    deviceManufacturer: '@string(5,1000)',
    deviceModel: '@string(5,1000)',
    joinName: '@string(5,1000)',
    key: '@string(5,1000)',
    mobile: '@string(5,1000)',
    uuid: '@string(5,1000)',
  }
}
export function InviteLoginResp() {
  return {
    inviteStatus: '@integer(3,1000)',
    mobile: '@string(5,1000)',
    msg: '@string(5,1000)',
    newKeyBorard: '@boolean()',
    setPassWord: '@boolean()',
    gratefulId: '@string(5,1000)',
    token: '@string(5,1000)',
    tokenTimeOut: '@string(5,1000)',
  }
}
export function InviteRePlatFromOrgReq() {
  return {
    doorId: '@string(5,1000)',
    headerName: '@string(5,1000)',
    headerPhone: '@string(5,1000)',
    reGratefulId: '@string(5,1000)',
  }
}
export function InviteSetResp() {
  return {
    audit: '@boolean()',
    auditorList: AuditorInfo(),
    id: '@string(5,1000)',
    open: '@boolean()',
    shareType: '@string(5,1000)',
  }
}
export function JobAddDesktopReq() {
  return {
    desktopId: '@string(5,1000)',
    jobCode: '@string(5,1000)',
    jobId: '@string(5,1000)',
    jobName: '@string(5,1000)',
  }
}
export function JobResp() {
  return {
    ancestors: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    id: '@string(5,1000)',
    jobCode: '@string(5,1000)',
    modified: '@string(5,1000)',
    name: '@string(5,1000)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,1000)',
    parentId: '@string(5,1000)',
    status: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function JudgeSwitchDoorLimitResp() {
  return {
    judge: '@boolean()',
    msg: '@string(5,1000)',
  }
}
export function LogLoginResp() {
  return {
    browser: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    id: '@string(5,1000)',
    ipaddr: '@string(5,1000)',
    loginLocation: '@string(5,1000)',
    loginTime: '@string(5,1000)',
    mobile: '@string(5,1000)',
    modified: '@string(5,1000)',
    os: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function MenuCheckedResp() {
  return {
    checkedKeys: MenuDataScopeResp(),
    menueTree: '@string(5,1000)',
  }
}
export function MenuDataScopeReq() {
  return {
    dataScope: '@integer(3,1000)',
    whiteCodes: '@string(5,1000)',
    menuId: '@string(5,1000)',
  }
}
export function MenuDataScopeResp() {
  return {
    dataScope: '@integer(3,1000)',
    whiteCodes: '@string(5,1000)',
    menuId: '@string(5,1000)',
  }
}
export function MenuResp() {
  return {
    appName: '@string(5,1000)',
    codeCatalog: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    dataPermissions: '@boolean()',
    enable: '@boolean()',
    iconUrl: '@string(5,1000)',
    id: '@string(5,1000)',
    level: '@integer(3,1000)',
    loginRequired: '@boolean()',
    menuCode: '@string(5,1000)',
    menuLargeCategoryName: '@string(5,1000)',
    menuName: '@string(5,1000)',
    menuOutId: '@string(5,1000)',
    menuShow: '@boolean()',
    menuType: '@integer(3,1000)',
    modified: '@string(5,1000)',
    path: '@string(5,1000)',
    permIdent: '@string(5,1000)',
    pid: '@string(5,1000)',
    productCode: '@string(5,1000)',
    queryParam: '@string(5,1000)',
    remarks: '@string(5,1000)',
    sort: '@integer(3,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function OcrHappyLicenseBO() {
  return {
    green: '@string(5,1000)',
    happy: '@string(5,1000)',
    capital: '@string(5,1000)',
    establishDate: '@string(5,1000)',
    fake: '@boolean()',
    name: '@string(5,1000)',
    cat: '@string(5,1000)',
    regNum: '@string(5,1000)',
    requestId: '@string(5,1000)',
    success: '@boolean()',
    type: '@string(5,1000)',
    validPeriod: '@string(5,1000)',
  }
}
export function OcrIdCardBackResp() {
  return {
    endDate: '@string(5,1000)',
    fake: '@boolean()',
    issue: '@string(5,1000)',
    startDate: '@string(5,1000)',
    success: '@boolean()',
  }
}
export function OcrIdCardFrontResp() {
  return {
    green: '@string(5,1000)',
    birth: '@string(5,1000)',
    fake: '@boolean()',
    name: '@string(5,1000)',
    nationality: '@string(5,1000)',
    num: '@string(5,1000)',
    sex: '@string(5,1000)',
    success: '@boolean()',
  }
}
export function OcrImageReq() {
  return {
    image: '@string(5,1000)',
  }
}
export function OrderItem() {
  return {
    asc: '@boolean()',
    column: '@string(5,1000)',
  }
}
export function OutputStream() {}
export function PageDesktopAddRecordReq() {
  return {
    adderNameOrPhone: '@string(5,1000)',
    desktopNameOrPhone: '@string(5,1000)',
    desktopStatus: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function PageDoorCredentialReq() {
  return {
    credentialNo: '@string(5,1000)',
    credentialType: '@string(5,1000)',
    doorId: '@string(5,1000)',
    issuingDate: '@string(5,1000)',
    office: '@string(5,1000)',
    page: '@integer(3,1000)',
    scope: '@string(5,1000)',
    size: '@integer(3,1000)',
    validDate: '@string(5,1000)',
  }
}
export function PageInvoiceReq() {
  return {
    dutyNum: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    title: '@string(5,1000)',
  }
}
export function PageSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    countId: '@string(5,1000)',
    current: '@string(5,1000)',
    maxLimit: '@string(5,1000)',
    optimizeCountSql: '@boolean()',
    orders: OrderItem(),
    pages: '@string(5,1000)',
    records: SysDictDuiXiangnullZhiBuXuLieHua(),
    searchCount: '@boolean()',
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function PageZhiXieChangBoJuZiXinXi() {
  return {
    countId: '@string(5,1000)',
    current: '@string(5,1000)',
    maxLimit: '@string(5,1000)',
    optimizeCountSql: '@boolean()',
    orders: OrderItem(),
    pages: '@string(5,1000)',
    records: ZhiXieChangBoJuZiXinXi0(),
    searchCount: '@boolean()',
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function CatVerifyReq() {
  return {
    cardNo: '@string(5,1000)',
    cardValidData: '@string(5,1000)',
    idNo: '@string(5,1000)',
    metaInfo: '@string(5,1000)',
    name: '@string(5,1000)',
    ocrIdCardBack: '@string(5,1000)',
    ocrIdCardFront: '@string(5,1000)',
    openBank: '@string(5,1000)',
    profession: '@string(5,1000)',
    returnUrl: '@string(5,1000)',
    validStatus: '@boolean()',
  }
}
export function CatnelCertificate() {
  return {
    allTotalName: '@string(5,1000)',
    reSDate: '@string(5,1000)',
    regEDate: '@string(5,1000)',
    zczyName: '@string(5,1000)',
  }
}
export function StationDesktopAuthReq() {
  return {
    desktopIds: '@string(5,1000)',
    doorId: '@string(5,1000)',
    pinkIds: '@string(5,1000)',
  }
}
export function PostAddOrUpReq() {
  return {
    id: '@string(5,1000)',
    postName: '@string(5,1000)',
    postSort: '@integer(3,1000)',
    workflowKey: '@string(5,1000)',
  }
}
export function PostResp() {
  return {
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    id: '@string(5,1000)',
    modified: '@string(5,1000)',
    postCode: '@string(5,1000)',
    postName: '@string(5,1000)',
    postSort: '@integer(3,1000)',
    status: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function QueryAccInfoResp() {
  return {
    mobile: '@string(5,1000)',
    setPassWord: '@boolean()',
    status: '@string(5,1000)',
  }
}
export function QueryCertFormResp() {
  return {
    cardNo: '@string(5,1000)',
    cardValidData: '@string(5,1000)',
    idNo: '@string(5,1000)',
    name: '@string(5,1000)',
    ocrIdCardBack: '@string(5,1000)',
    ocrIdCardFront: '@string(5,1000)',
    openBank: '@string(5,1000)',
    profession: '@string(5,1000)',
    validStatus: '@boolean()',
  }
}
export function QueryDesktopByPhoneOrNameReq() {
  return {
    jobId: '@string(5,1000)',
    phoneOrName: '@string(5,1000)',
  }
}
export function QueryDoorPageHomeResp() {
  return {
    companyInfo: CompanyInfo(),
  }
}
export function QueryInviteDesktopReq() {
  return {
    applyTimeEnd: '@string(5,1000)',
    applyTimeStart: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    desktopStatus: '@string(5,1000)',
    inviterPhoneOrName: '@string(5,1000)',
    joinTimeEnd: '@string(5,1000)',
    joinTimeStart: '@string(5,1000)',
    page: '@integer(3,1000)',
    proposerPhone: '@string(5,1000)',
    proposerPhoneOrName: '@string(5,1000)',
    shareType: '@string(5,1000)',
    size: '@integer(3,1000)',
    status: '@string(5,1000)',
  }
}
export function QueryJobReq() {
  return {
    ancestors: '@string(5,1000)',
    jobCode: '@string(5,1000)',
    name: '@string(5,1000)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,1000)',
    parentId: '@string(5,1000)',
    status: '@string(5,1000)',
  }
}
export function QueryJudgeClaimResp() {
  return {
    operResult: '@string(5,1000)',
  }
}
export function QueryCatPageHomeResp() {
  return {
    cardNo: '@string(5,1000)',
    companyName: '@string(5,1000)',
    name: '@string(5,1000)',
    catRepetitionId: '@string(5,1000)',
    sex: '@string(5,1000)',
    vosList: OrangeerCertificateInfo(),
  }
}
export function QueryWalletBalanceResp() {
  return {
    blueId: '@string(5,1000)',
    blueNumber: '@string(5,1000)',
    availableAmount: '@string(5,1000)',
    bankName: '@string(5,1000)',
    bankcardNumber: '@string(5,1000)',
    companyName: '@string(5,1000)',
    frozenAmount: '@string(5,1000)',
  }
}
export function ReEntMeta() {
  return {
    whiteCode: '@string(5,1000)',
    reDoorId: '@string(5,1000)',
    reName: '@string(5,1000)',
  }
}
export function ReDoorInfo() {
  return {
    happyLicenseCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    headerName: '@string(5,1000)',
    headerPhone: '@string(5,1000)',
    isAuth: '@string(5,1000)',
    serialNo: '@string(5,1000)',
  }
}
export function RefuseJoinReq() {
  return {
    id: '@string(5,1000)',
    refuse: '@string(5,1000)',
  }
}
export function OrangeerCertificateInfo() {
  return {
    certificateNumber: '@string(5,1000)',
    regNo: '@string(5,1000)',
    regTypeName: '@string(5,1000)',
    orangeeredCertificateCompany: '@string(5,1000)',
    voList: CatnelCertificate(),
  }
}
export function OrangeerResultResp() {
  return {
    mark: '@string(5,1000)',
    mobile: '@string(5,1000)',
    token: '@string(5,1000)',
    tokenTimeOut: '@string(5,1000)',
  }
}
export function RelationHappyTypeInfo() {
  return {
    happyType: '@string(5,1000)',
    initTime: '@string(5,1000)',
    reSource: '@string(5,1000)',
  }
}
export function RelationDoorInfo() {
  return {
    auditStatus: '@string(5,1000)',
    authCount: '@integer(3,1000)',
    happyLicenseCode: '@string(5,1000)',
    created: '@string(5,1000)',
    id: '@string(5,1000)',
    name: '@string(5,1000)',
    preDoorName: '@string(5,1000)',
    relationStatus: '@string(5,1000)',
  }
}
export function RemoveDesktopReq() {
  return {
    desktopId: '@string(5,1000)',
    jobId: '@string(5,1000)',
  }
}
export function PinkAddReq() {
  return {
    allowAllot: '@boolean()',
    menuDataScopeReqList: MenuDataScopeReq(),
    parentId: '@string(5,1000)',
    remark: '@string(5,1000)',
    pinkName: '@string(5,1000)',
  }
}
export function PinkBaseUpReq() {
  return {
    id: '@string(5,1000)',
    remark: '@string(5,1000)',
    pinkName: '@string(5,1000)',
  }
}
export function PinkConfigInfo() {
  return {
    desktopPink: PinkInfo(),
    headerPink: PinkInfo(),
    id: '@string(5,1000)',
    pinkRange: '@string(5,1000)',
    syncWhiteId: '@string(5,1000)',
  }
}
export function PinkInfo() {
  return {
    id: '@string(5,1000)',
    name: '@string(5,1000)',
  }
}
export function PinkInfoResq() {
  return {
    allowAllot: '@boolean()',
    ancestors: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    whiteCheckStrictly: '@boolean()',
    id: '@string(5,1000)',
    level: '@integer(3,1000)',
    menuCheckStrictly: '@boolean()',
    menuNames: '@string(5,1000)',
    modified: '@string(5,1000)',
    parentCode: '@string(5,1000)',
    parentId: '@string(5,1000)',
    parentName: '@string(5,1000)',
    remark: '@string(5,1000)',
    pinkCode: '@string(5,1000)',
    pinkName: '@string(5,1000)',
    pinkSort: '@integer(3,1000)',
    status: '@string(5,1000)',
    statusDesc: '@string(5,1000)',
    type: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function PinkMenuUpReq() {
  return {
    menuDataScopeList: MenuDataScopeReq(),
    pinkId: '@string(5,1000)',
  }
}
export function PinkResq() {
  return {
    allowAllot: '@boolean()',
    ancestors: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    whiteCheckStrictly: '@boolean()',
    id: '@string(5,1000)',
    level: '@integer(3,1000)',
    menuCheckStrictly: '@boolean()',
    menuNames: '@string(5,1000)',
    modified: '@string(5,1000)',
    parentCode: '@string(5,1000)',
    parentId: '@string(5,1000)',
    remark: '@string(5,1000)',
    pinkCode: '@string(5,1000)',
    pinkKey: '@string(5,1000)',
    pinkName: '@string(5,1000)',
    pinkSort: '@integer(3,1000)',
    status: '@string(5,1000)',
    statusDesc: '@string(5,1000)',
    type: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function RouterMetaResp() {
  return {
    hideInMenu: '@boolean()',
    icon: '@string(5,1000)',
    locale: '@string(5,1000)',
    menuType: '@integer(3,1000)',
    order: '@integer(3,1000)',
    requiresAuth: '@boolean()',
  }
}
export function RouterResp() {
  return {
    children: RouterResp(),
    id: '@string(5,1000)',
    meta: RouterMetaResp(),
    name: '@string(5,1000)',
    path: '@string(5,1000)',
    query: '@string(5,1000)',
    redirect: '@string(5,1000)',
  }
}
export function ScanReQrResp() {
  return {
    auditId: '@string(5,1000)',
    entName: '@string(5,1000)',
    status: '@string(5,1000)',
  }
}
export function SelectorDesktopResp() {
  return {
    whiteName: '@string(5,1000)',
    desktopId: '@string(5,1000)',
    isJoin: '@boolean()',
    mobile: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function SendActiveMessageReq() {
  return {
    sendDesktopList: DesktopRespReq(),
  }
}
export function SendActiveMessageResp() {
  return {
    failedCount: '@string(5,1000)',
    successCount: '@string(5,1000)',
  }
}
export function SetPassWordReq() {
  return {
    checkPassWord: '@string(5,1000)',
    passWord: '@string(5,1000)',
  }
}
export function ShiftDesktopResp() {
  return {
    desktopId: '@string(5,1000)',
    desktopName: '@string(5,1000)',
    leaders: ShiftLeader(),
  }
}
export function ShiftLeader() {
  return {
    leaderDesktopId: '@string(5,1000)',
    leaderDesktopName: '@string(5,1000)',
  }
}
export function SuperCodeVerifyReq() {
  return {
    certificate: '@string(5,1000)',
    mobile: '@string(5,1000)',
    toMobile: '@string(5,1000)',
    uuid: '@string(5,1000)',
  }
}
export function SuperManResp() {
  return {
    authRange: '@string(5,1000)',
    whiteCode: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    desktopIsCreator: '@boolean()',
    id: '@string(5,1000)',
    mobile: '@string(5,1000)',
    name: '@string(5,1000)',
    superPink: '@string(5,1000)',
  }
}
export function SysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    allLevelKindName: '@string(5,1000)',
    childFlag: '@integer(3,1000)',
    childList: SysDictDuiXiangnullZhiBuXuLieHua(),
    deleted: '@boolean()',
    id: '@integer(3,1000)',
    introduce: '@string(5,1000)',
    kindCode: '@string(5,1000)',
    kindName: '@string(5,1000)',
    parentId: '@integer(3,1000)',
    sortNum: '@integer(3,1000)',
    type: '@integer(3,1000)',
  }
}
export function TreeNodeConfig() {
  return {
    childrenKey: '@string(5,1000)',
    deep: '@integer(3,1000)',
    idKey: '@string(5,1000)',
    nameKey: '@string(5,1000)',
    parentIdKey: '@string(5,1000)',
    weightKey: '@string(5,1000)',
  }
}
export function Type() {
  return {
    typeName: '@string(5,1000)',
  }
}
export function KeyBorardJoinDoorReq() {
  return {
    name: '@string(5,1000)',
    reason: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function VerificationResp() {
  return {
    bankCarkNo: '@string(5,1000)',
    cardNo: '@string(5,1000)',
    cardVaildDate: '@string(5,1000)',
    certifyId: '@string(5,1000)',
    certifyUrl: '@string(5,1000)',
    code: '@string(5,1000)',
    message: '@string(5,1000)',
    ocrIdCardBack: '@string(5,1000)',
    ocrIdCardFront: '@string(5,1000)',
    openBank: '@string(5,1000)',
    profession: '@string(5,1000)',
    requestId: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
    vaildStatus: '@boolean()',
  }
}
export function DouJiangJiFangDongXinXiXiangQingBiao() {
  return {
    area: '@string(5,1000)',
    authStatus: '@string(5,1000)',
    avatar: '@string(5,1000)',
    city: '@string(5,1000)',
    country: '@string(5,1000)',
    init: '@boolean()',
    location: '@string(5,1000)',
    maxNameUpdateNum: '@integer(3,1000)',
    mobile: '@string(5,1000)',
    nameUpdateNum: '@integer(3,1000)',
    nickname: '@string(5,1000)',
    province: '@string(5,1000)',
    sex: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    keyBorardname: '@string(5,1000)',
    xmail: '@string(5,1000)',
  }
}
export function DouJiangJiFangXingXinXi() {
  return {
    green: '@string(5,1000)',
    bankCardNo: '@string(5,1000)',
    cardNo: '@string(5,1000)',
    cardStartDate: '@string(5,1000)',
    cardValidDate: '@string(5,1000)',
    issue: '@string(5,1000)',
    nationality: '@string(5,1000)',
    ocridCardBack: '@string(5,1000)',
    ocridCardFront: '@string(5,1000)',
    openBank: '@string(5,1000)',
    profession: '@string(5,1000)',
    sex: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
    validStatus: '@boolean()',
  }
}
export function DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu() {
  return {
    green: '@string(5,1000)',
    birth: '@string(5,1000)',
    endDate: '@string(5,1000)',
    idCardNum: '@string(5,1000)',
    individualBankCardNo: '@string(5,1000)',
    individualCompany: '@string(5,1000)',
    individualMail: '@string(5,1000)',
    individualReservedPhoneNo: '@string(5,1000)',
    individualVocation: '@string(5,1000)',
    issue: '@string(5,1000)',
    name: '@string(5,1000)',
    nationality: '@string(5,1000)',
    posUrl: '@string(5,1000)',
    revUrl: '@string(5,1000)',
    sex: '@string(5,1000)',
    startDate: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
  }
}
export function DouJiangJiBeiJingZhuCeZhuanYe() {
  return {
    endDate: '@string(5,1000)',
    id: '@string(5,1000)',
    major: '@string(5,1000)',
    majorCode: '@string(5,1000)',
    startDate: '@string(5,1000)',
  }
}
export function ZhiXieChangZhiNenPiaoJiaFangXing() {
  return {
    clerkLoginPassword: '@string(5,1000)',
    clerkPhone: '@string(5,1000)',
    clerkPink: '@string(5,1000)',
    contactNumber: '@string(5,1000)',
    doorId: '@string(5,1000)',
    id: '@string(5,1000)',
    taxNum: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function ZhiXieChangJianDanFangXing() {
  return {
    adminCardNo: '@string(5,1000)',
    adminName: '@string(5,1000)',
    certificateAuth: '@string(5,1000)',
    certificateAuthStatus: '@string(5,1000)',
    doorId: '@string(5,1000)',
    id: '@string(5,1000)',
    institutionLegalCatCertificateUrl: '@string(5,1000)',
    legalBankNo: '@string(5,1000)',
    legalBankPhone: '@string(5,1000)',
    legalBankPhoneVerificationCode: '@string(5,1000)',
    legalCat: '@string(5,1000)',
    legalCatCardNo: '@string(5,1000)',
    licenseFileUrl: '@string(5,1000)',
    licenseUnifiedCode: '@string(5,1000)',
    name: '@string(5,1000)',
    orgType: '@string(5,1000)',
    unifiedSocialCreditCodeCertificateUrl: '@string(5,1000)',
  }
}
export function ZhiXieChangJianDanFangXing0() {
  return {
    adminCardNo: '@string(5,1000)',
    adminName: '@string(5,1000)',
    certificateAuth: '@string(5,1000)',
    certificateAuthStatus: '@string(5,1000)',
    doorId: '@string(5,1000)',
    id: '@string(5,1000)',
    institutionLegalCatCertificateUrl: '@string(5,1000)',
    legalBankNo: '@string(5,1000)',
    legalBankPhone: '@string(5,1000)',
    legalCat: '@string(5,1000)',
    legalCatCardNo: '@string(5,1000)',
    licenseFileUrl: '@string(5,1000)',
    licenseUnifiedCode: '@string(5,1000)',
    name: '@string(5,1000)',
    orgType: '@string(5,1000)',
    unifiedSocialCreditCodeCertificateUrl: '@string(5,1000)',
  }
}
export function ZhiXieChangZhuTiXinXi() {
  return {
    area: '@string(5,1000)',
    authStatus: '@string(5,1000)',
    avatar: '@string(5,1000)',
    chiefly: '@boolean()',
    city: '@string(5,1000)',
    claimId: '@string(5,1000)',
    contactNumber: '@string(5,1000)',
    country: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    firmSize: '@string(5,1000)',
    id: '@string(5,1000)',
    industryInvolved: '@string(5,1000)',
    introduction: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    legalIdCardBack: '@string(5,1000)',
    legalIdCardFront: '@string(5,1000)',
    legalIdCardNo: '@string(5,1000)',
    legalCat: '@string(5,1000)',
    licenseUnifiedCode: '@string(5,1000)',
    licenseUnifiedUrl: '@string(5,1000)',
    location: '@string(5,1000)',
    modified: '@string(5,1000)',
    name: '@string(5,1000)',
    province: '@string(5,1000)',
    serialNum: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
    xmail: '@string(5,1000)',
  }
}
export function ZhiXieChangBoJuZiXinXi() {
  return {
    green: '@string(5,1000)',
    authStatus: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    doorBankCardNo: '@string(5,1000)',
    doorBankCode: '@string(5,1000)',
    doorBankName: '@string(5,1000)',
    doorBasicBlueOpenVoucherId: '@string(5,1000)',
    doorBeneficiaryList: DoorBeneficiaryReq(),
    doorHappyScope: '@string(5,1000)',
    doorCaElectronicSignature: '@string(5,1000)',
    doorContactIdCardBackId: '@string(5,1000)',
    doorContactIdCardFrontId: '@string(5,1000)',
    doorContactName: '@string(5,1000)',
    doorContactPhone: '@string(5,1000)',
    doorId: '@string(5,1000)',
    doorJoinProtocolId: '@string(5,1000)',
    doorLegalIdCardBackId: '@string(5,1000)',
    doorLegalIdCardFrontId: '@string(5,1000)',
    doorLegalIdCardNo: '@string(5,1000)',
    doorLegalIdCardType: '@string(5,1000)',
    doorLegalIdCardValidDate: '@string(5,1000)',
    doorLegalIdCardValidStartDate: '@string(5,1000)',
    doorLegalName: '@string(5,1000)',
    doorLegalPhone: '@string(5,1000)',
    doorLicenseFileDuplicateId: '@string(5,1000)',
    doorLicenseFileId: '@string(5,1000)',
    doorLicenseName: '@string(5,1000)',
    doorLicenseValidDate: '@string(5,1000)',
    doorLicenseValidStartDate: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorOpenBluePermit: '@string(5,1000)',
    doorOpratorAttorneyLetter: '@string(5,1000)',
    doorOpratorIdCardNo: '@string(5,1000)',
    doorOpratorIdCardType: '@string(5,1000)',
    doorOpratorIdCardValidDate: '@string(5,1000)',
    doorOpratorIdCardValidStartDate: '@string(5,1000)',
    doorRealGreen: '@string(5,1000)',
    doorShareholderList: DoorShareholderReq(),
    doorStorePictureId: '@string(5,1000)',
    doorTrade: '@string(5,1000)',
    doorTradeName: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorUnifiedCode: '@string(5,1000)',
    doorUpDoorId: '@string(5,1000)',
    doorUpDoorName: '@string(5,1000)',
    doorUpLegalBasicBlueOpenVoucherId: '@string(5,1000)',
    doorUpLegalDoorUnifiedCode: '@string(5,1000)',
    doorUpLegalIdCardBackId: '@string(5,1000)',
    doorUpLegalIdCardFrontId: '@string(5,1000)',
    doorUpLegalIdCardNo: '@string(5,1000)',
    doorUpLegalIdCardType: '@string(5,1000)',
    doorUpLegalLicenseDuplicateFileId: '@string(5,1000)',
    doorUpLegalLicenseFileId: '@string(5,1000)',
    doorUpLegalLicenseName: '@string(5,1000)',
    doorUpLegalLicenseNo: '@string(5,1000)',
    doorUpLegalLicenseType: '@string(5,1000)',
    doorUpLegalName: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    modified: '@string(5,1000)',
    msg: '@string(5,1000)',
    stepNum: '@integer(3,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function ZhiXieChangBoJuZiXinXi0() {
  return {
    green: '@string(5,1000)',
    authStatus: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    doorBankCardNo: '@string(5,1000)',
    doorBankCode: '@string(5,1000)',
    doorBankName: '@string(5,1000)',
    doorBasicBlueOpenVoucherId: '@string(5,1000)',
    doorBeneficiaryList: DoorBeneficiaryResp(),
    doorHappyScope: '@string(5,1000)',
    doorCaElectronicSignature: '@string(5,1000)',
    doorContactIdCardBackId: '@string(5,1000)',
    doorContactIdCardFrontId: '@string(5,1000)',
    doorContactName: '@string(5,1000)',
    doorContactPhone: '@string(5,1000)',
    doorId: '@string(5,1000)',
    doorJoinProtocolId: '@string(5,1000)',
    doorLegalIdCardBackId: '@string(5,1000)',
    doorLegalIdCardFrontId: '@string(5,1000)',
    doorLegalIdCardNo: '@string(5,1000)',
    doorLegalIdCardType: '@string(5,1000)',
    doorLegalIdCardValidDate: '@string(5,1000)',
    doorLegalIdCardValidStartDate: '@string(5,1000)',
    doorLegalName: '@string(5,1000)',
    doorLegalPhone: '@string(5,1000)',
    doorLicenseFileDuplicateId: '@string(5,1000)',
    doorLicenseFileId: '@string(5,1000)',
    doorLicenseName: '@string(5,1000)',
    doorLicenseValidDate: '@string(5,1000)',
    doorLicenseValidStartDate: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorOpenBluePermit: '@string(5,1000)',
    doorOpratorAttorneyLetter: '@string(5,1000)',
    doorOpratorIdCardNo: '@string(5,1000)',
    doorOpratorIdCardType: '@string(5,1000)',
    doorOpratorIdCardValidDate: '@string(5,1000)',
    doorOpratorIdCardValidStartDate: '@string(5,1000)',
    doorRealGreen: '@string(5,1000)',
    doorShareholderList: DoorShareholderResp(),
    doorStorePictureId: '@string(5,1000)',
    doorTrade: '@string(5,1000)',
    doorTradeName: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorUnifiedCode: '@string(5,1000)',
    doorUpDoorId: '@string(5,1000)',
    doorUpDoorName: '@string(5,1000)',
    doorUpLegalBasicBlueOpenVoucherId: '@string(5,1000)',
    doorUpLegalDoorUnifiedCode: '@string(5,1000)',
    doorUpLegalIdCardBackId: '@string(5,1000)',
    doorUpLegalIdCardFrontId: '@string(5,1000)',
    doorUpLegalIdCardNo: '@string(5,1000)',
    doorUpLegalIdCardType: '@string(5,1000)',
    doorUpLegalLicenseDuplicateFileId: '@string(5,1000)',
    doorUpLegalLicenseFileId: '@string(5,1000)',
    doorUpLegalLicenseName: '@string(5,1000)',
    doorUpLegalLicenseNo: '@string(5,1000)',
    doorUpLegalLicenseType: '@string(5,1000)',
    doorUpLegalName: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    modified: '@string(5,1000)',
    msg: '@string(5,1000)',
    stepNum: '@integer(3,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function ZhiXieChangChuXing() {
  return {
    area: '@string(5,1000)',
    authStatus: '@string(5,1000)',
    avatar: '@string(5,1000)',
    city: '@string(5,1000)',
    contactNumber: '@string(5,1000)',
    country: '@string(5,1000)',
    created: '@boolean()',
    firmSize: '@string(5,1000)',
    industryInvolved: '@string(5,1000)',
    introduction: '@string(5,1000)',
    joinStatus: '@string(5,1000)',
    legalCat: '@string(5,1000)',
    location: '@string(5,1000)',
    name: '@string(5,1000)',
    province: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    xmail: '@string(5,1000)',
  }
}
export function ZhiXieChangChuXing0() {
  return {
    doorName: '@string(5,1000)',
    name: '@string(5,1000)',
  }
}
export function ZhiXieChangFangDongXinXi() {
  return {
    area: '@string(5,1000)',
    authStatus: '@string(5,1000)',
    avatar: '@string(5,1000)',
    chiefly: '@boolean()',
    city: '@string(5,1000)',
    contactNumber: '@string(5,1000)',
    country: '@string(5,1000)',
    firmSize: '@string(5,1000)',
    id: '@string(5,1000)',
    industryInvolved: '@string(5,1000)',
    introduction: '@string(5,1000)',
    legalCat: '@string(5,1000)',
    licenseUnifiedCode: '@string(5,1000)',
    licenseUnifiedUrl: '@string(5,1000)',
    location: '@string(5,1000)',
    name: '@string(5,1000)',
    province: '@string(5,1000)',
    serialNum: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    xmail: '@string(5,1000)',
  }
}
export function ZhiXieChangFangDongXinXiXiangQing() {
  return {
    area: '@string(5,1000)',
    avatar: '@string(5,1000)',
    city: '@string(5,1000)',
    contactNumber: '@string(5,1000)',
    country: '@string(5,1000)',
    firmSize: '@string(5,1000)',
    id: '@string(5,1000)',
    industryInvolved: '@string(5,1000)',
    introduction: '@string(5,1000)',
    legalCat: '@string(5,1000)',
    location: '@string(5,1000)',
    name: '@string(5,1000)',
    province: '@string(5,1000)',
    xmail: '@string(5,1000)',
  }
}
export function ZhiXieChangFangDongXinXiXiangQing0() {
  return {
    area: '@string(5,1000)',
    authStatus: '@string(5,1000)',
    avatar: '@string(5,1000)',
    city: '@string(5,1000)',
    contactNumber: '@string(5,1000)',
    country: '@string(5,1000)',
    firmSize: '@string(5,1000)',
    id: '@string(5,1000)',
    industryInvolved: '@string(5,1000)',
    init: '@boolean()',
    introduction: '@string(5,1000)',
    legalCat: '@string(5,1000)',
    location: '@string(5,1000)',
    maxNameUpdateNum: '@integer(3,1000)',
    name: '@string(5,1000)',
    nameUpdateNum: '@integer(3,1000)',
    province: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    xmail: '@string(5,1000)',
  }
}
export function XiuGaiDouJiangJiXinXi() {
  return {
    area: '@string(5,1000)',
    avatar: '@string(5,1000)',
    city: '@string(5,1000)',
    country: '@string(5,1000)',
    location: '@string(5,1000)',
    nickname: '@string(5,1000)',
    province: '@string(5,1000)',
    sex: '@string(5,1000)',
    keyBorardname: '@string(5,1000)',
    xmail: '@string(5,1000)',
  }
}
export function XiuGaiMiMa() {
  return {
    checkPassWord: '@string(5,1000)',
    mobile: '@string(5,1000)',
    oldPassword: '@string(5,1000)',
    passWord: '@string(5,1000)',
    uuid: '@string(5,1000)',
    verificationCode: '@string(5,1000)',
  }
}
export function MaoZiGuanLianFaQiGuanLianXinXi() {
  return {
    applyName: '@string(5,1000)',
    applyPhone: '@string(5,1000)',
    applyTime: '@string(5,1000)',
    headerName: '@string(5,1000)',
    headerPhone: '@string(5,1000)',
    initTime: '@string(5,1000)',
    inviteName: '@string(5,1000)',
    invitePhone: '@string(5,1000)',
    inviteSource: '@string(5,1000)',
    inviteTime: '@string(5,1000)',
    invitedName: '@string(5,1000)',
    invitedPhone: '@string(5,1000)',
    sourceEnum: '@string(5,1000)',
    triggerTime: '@string(5,1000)',
  }
}
export function MaoZiGuanLianYouGuanLianShenHeXinXi() {
  return {
    auditStatus: '@string(5,1000)',
    auditTime: '@string(5,1000)',
    name: '@string(5,1000)',
    reason: '@string(5,1000)',
  }
}
export function GuanLianMaoZiYongDao() {
  return {
    inRelateCount: '@integer(3,1000)',
    invalidRelateCount: '@integer(3,1000)',
    list: ComPageRelationDoorInfo(),
    totalCount: '@integer(3,1000)',
    unRelateCount: '@integer(3,1000)',
  }
}
export function GuanLianMaoZiXiangQing() {
  return {
    auditStatus: '@string(5,1000)',
    authCount: '@integer(3,1000)',
    created: '@string(5,1000)',
    whiteCount: '@integer(3,1000)',
    id: '@string(5,1000)',
    preReDoorInfo: ReDoorInfo(),
    reDoorInfo: ReDoorInfo(),
    reDoorSource: '@string(5,1000)',
    relationAuditInfo: MaoZiGuanLianYouGuanLianShenHeXinXi(),
    relationInfo: MaoZiGuanLianFaQiGuanLianXinXi(),
    relationStatus: '@string(5,1000)',
    relationTypeList: RelationHappyTypeInfo(),
    syncTime: '@string(5,1000)',
  }
}
export function GuanLianShenHeXinXi() {
  return {
    auditClassificationEnum: '@string(5,1000)',
    auditStatus: '@string(5,1000)',
    branchName: '@string(5,1000)',
    happyLicenseUrl: '@string(5,1000)',
    created: '@string(5,1000)',
    franchiseDoorName: '@string(5,1000)',
    headerName: '@string(5,1000)',
    headerPhone: '@string(5,1000)',
    id: '@string(5,1000)',
    relationStatus: '@string(5,1000)',
    serialNo: '@string(5,1000)',
    source: '@string(5,1000)',
  }
}
export function FenYeChuXingDouJiangJiBeiJing() {
  return {
    credentialNo: '@string(5,1000)',
    credentialType: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function FenYeChuXingSuoYouZhiXieChang() {
  return {
    name: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function QieHuanMoRenDiZhi() {
  return {
    newGreenId: '@string(5,1000)',
  }
}
export function ChuangJianZhiXieChang() {
  return {
    area: '@string(5,1000)',
    city: '@string(5,1000)',
    country: '@string(5,1000)',
    location: '@string(5,1000)',
    name: '@string(5,1000)',
    province: '@string(5,1000)',
  }
}
export function XiaoYuanZhuoGuanLi() {
  return {
    bank: '@string(5,1000)',
    bankAccNo: '@string(5,1000)',
    dutyNum: '@string(5,1000)',
    doorGreen: '@string(5,1000)',
    doorMobile: '@string(5,1000)',
    id: '@string(5,1000)',
    title: '@string(5,1000)',
    type: '@string(5,1000)',
  }
}
export function XiaoYuanZhuoGuanLi0() {
  return {
    bank: '@string(5,1000)',
    bankAccNo: '@string(5,1000)',
    dutyNum: '@string(5,1000)',
    doorGreen: '@string(5,1000)',
    doorMobile: '@string(5,1000)',
    id: '@string(5,1000)',
    title: '@string(5,1000)',
    type: '@string(5,1000)',
  }
}
export function ShenHeTongJiHuanCunSanShiMiao() {
  return {
    reviewedNum: '@integer(3,1000)',
    unauditedNum: '@integer(3,1000)',
  }
}
export function ShenHeTongGuo() {
  return {
    whiteId: '@string(5,1000)',
    id: '@string(5,1000)',
    proposerId: '@string(5,1000)',
    proposerName: '@string(5,1000)',
    proposerPhone: '@string(5,1000)',
    pinkId: '@string(5,1000)',
  }
}
export function ZhaoHuiMiMa() {
  return {
    checkPassWord: '@string(5,1000)',
    mobile: '@string(5,1000)',
    passWord: '@string(5,1000)',
    uuid: '@string(5,1000)',
    verificationCode: '@string(5,1000)',
  }
}
export function BiXieDaoZhongXinChuXingGuoLvTiaoJian() {
  return {
    authFlag: '@boolean()',
    certType: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    desktopIds: '@string(5,1000)',
    desktopMobile: '@string(5,1000)',
    desktopName: '@string(5,1000)',
    doorId: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function BiXieDaoRuCan() {
  return {
    channelType: '@string(5,1000)',
    code: '@string(5,1000)',
    corpId: '@string(5,1000)',
    redirectUri: '@string(5,1000)',
    state: '@string(5,1000)',
  }
}
export function BiXieDao() {
  return {
    ids: '@string(5,1000)',
    reason: '@string(5,1000)',
  }
}
export function BiXieDao0() {
  return {
    list: ComPageBiXieDao(),
    reviewedNum: '@integer(3,1000)',
    unauditedNum: '@integer(3,1000)',
  }
}
export function BiXieDao1() {
  return {
    auditName: '@string(5,1000)',
    auditStatus: '@string(5,1000)',
    auditTime: '@string(5,1000)',
    authStatusEnum: '@string(5,1000)',
    belongDoor: '@string(5,1000)',
    id: '@string(5,1000)',
    initTime: '@string(5,1000)',
    mainDep: '@string(5,1000)',
    name: '@string(5,1000)',
    phone: '@string(5,1000)',
    refuseReason: '@string(5,1000)',
    source: '@string(5,1000)',
  }
}
export function BiXieDaoYongDao() {
  return {
    authCount: '@integer(3,1000)',
    branchName: '@string(5,1000)',
    branchSerialNo: '@string(5,1000)',
    doorName: '@string(5,1000)',
    headerName: '@string(5,1000)',
    headerPhone: '@string(5,1000)',
    id: '@string(5,1000)',
    relationStatus: '@string(5,1000)',
    serialNo: '@string(5,1000)',
    waitAuthCount: '@integer(3,1000)',
  }
}
export function ShuJuYiZhiXingErCiQueRenCanShu() {
  return {
    dataId: '@string(5,1000)',
    dataSyncSystemReqs: ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingMeiLiCaoZuo(),
    serialNumber: '@string(5,1000)',
  }
}
export function ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingMeiLiCaoZuo() {
  return {
    resultHandleTypeEnum: '@string(5,1000)',
    shiftDataId: '@string(5,1000)',
    systemName: '@string(5,1000)',
  }
}
export function ShuJuYiZhiXingCaoZuoFanHuiJieGuo() {
  return {
    result: XiaoYanJieGuo(),
    serialNumber: '@string(5,1000)',
  }
}
export function WenJianShangChuanXiangYing() {
  return {
    cdnDomain: '@string(5,1000)',
    errorMsg: '@string(5,1000)',
    id: '@string(5,1000)',
    name: '@string(5,1000)',
    objectKey: '@string(5,1000)',
    uploadResult: '@boolean()',
    url: '@string(5,1000)',
  }
}
export function XiaoYanJieGuo() {
  return {
    dataSyncHandleTypeEnum: '@string(5,1000)',
    failedMessage: '@string(5,1000)',
    resultFlag: '@boolean()',
    skipUrl: '@string(5,1000)',
    systemName: '@string(5,1000)',
    systemNameStr: '@string(5,1000)',
  }
}
export function JianChaYaoQingMa() {
  return {
    msg: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
  }
}
export function ZhuCeQingQiu() {
  return {
    checkPassWord: '@string(5,1000)',
    clientType: '@string(5,1000)',
    clientVersion: '@string(5,1000)',
    deviceCode: '@string(5,1000)',
    deviceManufacturer: '@string(5,1000)',
    deviceModel: '@string(5,1000)',
    mobile: '@string(5,1000)',
    passWord: '@string(5,1000)',
    uuid: '@string(5,1000)',
    verificationCode: '@string(5,1000)',
  }
}
export function TianJiaDouJiangJiBeiJing() {
  return {
    attachments: Attachment(),
    credentialNo: '@string(5,1000)',
    credentialType: '@string(5,1000)',
    id: '@string(5,1000)',
    industryType: '@string(5,1000)',
    issueDate: '@string(5,1000)',
    majors: DouJiangJiBeiJingZhuCeZhuanYe(),
    office: '@string(5,1000)',
    orangeerNo: '@string(5,1000)',
    scope: '@string(5,1000)',
    source: '@string(5,1000)',
  }
}
export function TianJiaDouJiangJiBeiJing0() {
  return {
    attachment: '@string(5,1000)',
    attachments: Attachment(),
    credentialNo: '@string(5,1000)',
    credentialType: '@string(5,1000)',
    industryType: '@string(5,1000)',
    issueDate: '@string(5,1000)',
    majors: DouJiangJiBeiJingZhuCeZhuanYe(),
    office: '@string(5,1000)',
    orangeerNo: '@string(5,1000)',
    scope: '@string(5,1000)',
    source: '@string(5,1000)',
  }
}
export function QuDaoZhiXieChangJieMengQingQiuRuCan() {
  return {
    channelCorpId: '@string(5,1000)',
    channelType: '@string(5,1000)',
    dingId: '@string(5,1000)',
    desktopId: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
  }
}
export function ShengChengYaoQing() {
  return {
    audit: '@boolean()',
    whiteId: '@string(5,1000)',
    inviteShareType: '@string(5,1000)',
  }
}
export function ShengChengYaoQing0() {
  return {
    batchId: '@string(5,1000)',
    whiteCode: '@string(5,1000)',
    inviterId: '@string(5,1000)',
    inviterName: '@string(5,1000)',
    shareMark: '@string(5,1000)',
    shareTime: '@string(5,1000)',
    shareType: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
  }
}
export function FangDongXinXi() {
  return {
    authStatus: '@string(5,1000)',
    channelBindStatus: '@string(5,1000)',
    channelCorpId: '@string(5,1000)',
    channelType: '@string(5,1000)',
    checked: '@boolean()',
    clientType: '@string(5,1000)',
    desktopStatus: '@string(5,1000)',
    init: '@boolean()',
    kind: '@string(5,1000)',
    relation: '@string(5,1000)',
    status: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
  }
}
export function FangDongShouHuoDiZhiTianJia() {
  return {
    area: '@string(5,1000)',
    checked: '@boolean()',
    city: '@string(5,1000)',
    country: '@string(5,1000)',
    location: '@string(5,1000)',
    mobile: '@string(5,1000)',
    name: '@string(5,1000)',
    province: '@string(5,1000)',
  }
}
export function FangDongShouHuoDiZhiTianJia0() {
  return {
    area: '@string(5,1000)',
    checked: '@boolean()',
    city: '@string(5,1000)',
    country: '@string(5,1000)',
    id: '@string(5,1000)',
    location: '@string(5,1000)',
    mobile: '@string(5,1000)',
    name: '@string(5,1000)',
    province: '@string(5,1000)',
  }
}
export function FangXingQuDaoZhuangTaiChuXing() {
  return {
    certifyId: '@string(5,1000)',
    clazz: '@string(5,1000)',
    cost: '@string(5,1000)',
    function: '@string(5,1000)',
    institution: '@string(5,1000)',
    interests: '@string(5,1000)',
    mark: '@string(5,1000)',
    name: '@string(5,1000)',
    status: '@string(5,1000)',
  }
}
export function YaoQingZhuCe() {
  return {
    inviteCode: '@string(5,1000)',
    inviteStatus: '@integer(3,1000)',
    mobile: '@string(5,1000)',
    msg: '@string(5,1000)',
  }
}
export function YaoQingZhuCe0() {
  return {
    inviteCode: '@string(5,1000)',
  }
}
