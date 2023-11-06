import Mock from 'better-mock'
export function AddBirdResp() {
  return {
    directEntryBird: '@boolean',
    imBirdId: '@guid',
  }
}
export function GreenBookGratefulInfoResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    checked: '@boolean',
    kind: '@string(5,50)',
    showImBirdId: '@guid',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
  }
}
export function ApiResponse() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseAddBirdResp() {
  return {
    code: 200,
    data: AddBirdResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseAtListAndAckSequenceResp() {
  return {
    code: 200,
    data: AtListAndAckSequenceResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageCommonSearchResp() {
  return {
    code: 200,
    data: ComPageCommonSearchResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageContactResp() {
  return {
    code: 200,
    data: ComPageContactResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageFriendshipResp() {
  return {
    code: 200,
    data: ComPageFriendshipResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageSearchBeforeAddFriendResp() {
  return {
    code: 200,
    data: ComPageSearchBeforeAddFriendResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageKeyBorardBlackResp() {
  return {
    code: 200,
    data: ComPageKeyBorardBlackResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageWaiBuZhiXieChangChuCan() {
  return {
    code: 200,
    data: ComPageWaiBuZhiXieChangChuCan(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageWaiBuShuiDaoXiangYing() {
  return {
    code: 200,
    data: ComPageWaiBuShuiDaoXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageXiaoXiNaBuXiangYingShiTi() {
  return {
    code: 200,
    data: ComPageXiaoXiNaBuXiangYingShiTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageXiaoXiDuiXiang() {
  return {
    code: 200,
    data: ComPageXiaoXiDuiXiang(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageNiaoWoDuiXiangBirdResp() {
  return {
    code: 200,
    data: ComPageNiaoWoDuiXiangBirdResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    data: ComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp() {
  return {
    code: 200,
    data: ComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    code: 200,
    data: ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseFriendshipDetailResp() {
  return {
    code: 200,
    data: FriendshipDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseFriendshipKeyBorardDetailResp() {
  return {
    code: 200,
    data: FriendshipKeyBorardDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing() {
  return {
    code: 200,
    data: InviteToBirdRespYaoQingRuNiaoWoXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListGreenBookGratefulInfoResp() {
  return {
    code: 200,
    'data|1-20': [GreenBookGratefulInfoResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListForwardListResp() {
  return {
    code: 200,
    'data|1-20': [ForwardListResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListFriendshipResp() {
  return {
    code: 200,
    'data|1-20': [FriendshipResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListBirdF2fKeyBorardListResp() {
  return {
    code: 200,
    'data|1-20': [BirdF2fKeyBorardListResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListPhoneFriendshipResp() {
  return {
    code: 200,
    'data|1-20': [PhoneFriendshipResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListSwitchKeyBorardListResp() {
  return {
    code: 200,
    'data|1-20': [SwitchKeyBorardListResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListGratefulInfoRespLvKeXinXi() {
  return {
    code: 200,
    'data|1-20': [GratefulInfoRespLvKeXinXi()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListUnreadResp() {
  return {
    code: 200,
    'data|1-20': [UnreadResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListKeyBorardListAllGratefulResp() {
  return {
    code: 200,
    'data|1-20': [KeyBorardListAllGratefulResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListXiaoXiDuiXiang() {
  return {
    code: 200,
    'data|1-20': [XiaoXiDuiXiang()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListBanBen() {
  return {
    code: 200,
    'data|1-20': [BanBen()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    'data|1-20': [NiaoWoChengYuanXinXiDuiXiangBirdMemberResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListDaDuNanXinXiWhiteResp() {
  return {
    code: 200,
    'data|1-20': [DaDuNanXinXiWhiteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseMaplongLvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi() {
  return {
    code: 200,
    data: LvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseMapstringSearchMapResp() {
  return {
    code: 200,
    data: SearchMapResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseMemberBirdStatusResp() {
  return {
    code: 200,
    data: MemberBirdStatusResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponsePutFileResp() {
  return {
    code: 200,
    data: PutFileResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseQueryLastMessageResp() {
  return {
    code: 200,
    data: QueryLastMessageResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing() {
  return {
    code: 200,
    data: UnReadComPageXiaoDaoXiaoXiYongDaoXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseKeyBorardBindResp() {
  return {
    code: 200,
    data: KeyBorardBindResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseKeyBorardRespDuiXiang() {
  return {
    code: 200,
    data: KeyBorardRespDuiXiang(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseVoid() {
  return {
    code: 200,
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseWaterFallPageKeyBorardBlackResp() {
  return {
    code: 200,
    data: WaterFallPageKeyBorardBlackResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponsealiyunSTSJianQuanFanHuiZhi() {
  return {
    code: 200,
    data: aliyunSTSJianQuanFanHuiZhi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseboolean() {
  return {
    code: 200,
    data: '@boolean',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponselong() {
  return {
    code: 200,
    data: '@string(5,50)',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseobject() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponsestring() {
  return {
    code: 200,
    data: '@string(5,50)',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseShangChuanALiYunQianMingXiangYing() {
  return {
    code: 200,
    data: ShangChuanALiYunQianMingXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseXiaoDaoXiaoXi() {
  return {
    code: 200,
    data: XiaoDaoXiaoXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan() {
  return {
    code: 200,
    data: NaBuMaiShaoBingNiaoWoBaoCunChuCan(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseWenJianPiLiangBaoCunXiangYingShiTi() {
  return {
    code: 200,
    data: WenJianPiLiangBaoCunXiangYingShiTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseXiaoXiDuiXiang() {
  return {
    code: 200,
    data: XiaoXiDuiXiang(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseBanBen() {
  return {
    code: 200,
    data: BanBen(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseDengLuXiangYingShiTi() {
  return {
    code: 200,
    data: DengLuXiangYingShiTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseQianMingWenJianXiangYing() {
  return {
    code: 200,
    data: QianMingWenJianXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseNiaoWoDuiXiangBirdDetailResp() {
  return {
    code: 200,
    data: NiaoWoDuiXiangBirdDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseNiaoWoDuiXiangBirdResp() {
  return {
    code: 200,
    data: NiaoWoDuiXiangBirdResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    data: NiaoWoChengYuanXinXiDuiXiangBirdMemberResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi() {
  return {
    code: 200,
    data: NiaoWoWenJianShangChuanXiangYingShiTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseYuYinShiBieFanHui() {
  return {
    code: 200,
    data: YuYinShiBieFanHui(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp() {
  return {
    code: 200,
    data: YanChangChunHuaXiaoXiXiangQingRequestDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function AtListAndAckSequenceResp() {
  return {
    lastAckSequence: '@string(5,50)',
    'msgAtList|1-20': [MessageAtResp()],
    unreadCount: '@integer(3,1000)',
  }
}
export function BasePageReq() {
  return {
    page: '@integer(3,1000)',
    size: 20,
  }
}
export function ComLoginReq() {
  return {
    blue: '@string(5,50)',
    certificate: '@string(5,50)',
    clientType: '@string(5,50)',
    clientVersion: '@string(5,50)',
    code: 200,
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    loginModeEnum: '@string(5,50)',
    openId: '@guid',
    uuid: '@guid',
  }
}
export function ComPageCommonSearchResp() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [CommonSearchResp()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageContactResp() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [ContactResp()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageFriendshipResp() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [FriendshipResp()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageSearchBeforeAddFriendResp() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [SearchBeforeAddFriendResp()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageKeyBorardBlackResp() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [KeyBorardBlackResp()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageWaiBuZhiXieChangChuCan() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [WaiBuZhiXieChangChuCan()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageWaiBuShuiDaoXiangYing() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [WaiBuShuiDaoXiangYing()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageXiaoXiNaBuXiangYingShiTi() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [XiaoXiNaBuXiangYingShiTi()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageXiaoXiDuiXiang() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [XiaoXiDuiXiang()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageNiaoWoDuiXiangBirdResp() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [NiaoWoDuiXiangBirdResp()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [NiaoWoChengYuanXinXiDuiXiangBirdMemberResp()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [YanChangChunHuaXiaoXiFenYeRequestPageListResp()],
    size: 20,
    total: '@integer(5, 100)',
  }
}
export function CommonSearchReq() {
  return {
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keywords: '@string(5,50)',
    page: '@integer(3,1000)',
    size: 20,
    type: '@string(5,50)',
  }
}
export function CommonSearchResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    hiallType: '@string(5,50)',
    company: '@string(5,50)',
    createType: '@string(5,50)',
    birdAttr: '@string(5,50)',
    birdAvatar: '@image(200x100, @color, @color)',
    birdType: '@string(5,50)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isFriendship: '@boolean',
    isNotice: '@boolean',
    isSameGrateful: '@boolean',
    isTop: '@boolean',
    job: '@string(5,50)',
    keywords: '@string(5,50)',
    name: '@ctitle(5,10)',
    ownerId: '@guid',
    post: '@string(5,50)',
    total: '@integer(5, 100)',
  }
}
export function ContactReq() {
  return {
    hiallEnum: '@string(5,50)',
    excludeMemberImBirdId: '@guid',
    birdTypeE: '@string(5,50)',
    imKeyBorardId: '@guid',
    keywords: '@string(5,50)',
    page: '@integer(3,1000)',
    size: 20,
  }
}
export function ContactResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    hiallAvatar: '@image(200x100, @color, @color)',
    hiallStatus: '@string(5,50)',
    hiallType: '@string(5,50)',
    createType: '@string(5,50)',
    birdAttr: '@string(5,50)',
    birdType: '@string(5,50)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isFriendship: '@boolean',
    isBirdMember: '@boolean',
    isNotice: '@boolean',
    isSameSubsidiary: '@boolean',
    isSameGrateful: '@boolean',
    isTop: '@boolean',
    job: '@string(5,50)',
    keywords: '@string(5,50)',
    name: '@ctitle(5,10)',
    post: '@string(5,50)',
    privateImBirdId: '@guid',
    remark: '@string(5,50)',
    status: '@string(5,50)',
    gratefulName: '@ctitle(5,10)',
    total: '@integer(5, 100)',
    keyBorardStatus: '@string(5,50)',
  }
}
export function EnterBirdReq() {
  return {
    f2fBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
export function FileDTO() {
  return {
    fileName: '@ctitle(5,10)',
    ossUrl: '@url',
  }
}
export function FileResp() {
  return {
    fileId: '@guid',
    fileName: '@ctitle(5,10)',
    fileSize: '@string(5,50)',
    fileText: '@string(5,50)',
    fileTime: '@datetime',
    fileType: '@string(5,50)',
    fileUrl: '@url',
    height: '@integer(3,1000)',
    width: '@integer(3,1000)',
  }
}
export function FooterDetailDTO() {
  return {
    content: '@string(5,50)',
    footerTypeE: '@string(5,50)',
    methodType: '@string(5,50)',
    param: '',
    url: '@url',
  }
}
export function FooterWrapper() {
  return {
    cardTypeE: '@string(5,50)',
    'details|1-20': [FooterDetailDTO()],
  }
}
export function ForwardListReq() {
  return {
    channel: '@string(5,50)',
    imKeyBorardId: '@guid',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: 20,
    type: '@string(5,50)',
  }
}
export function ForwardListResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    hiallType: '@string(5,50)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isFriendship: '@boolean',
    name: '@ctitle(5,10)',
    gratefulName: '@ctitle(5,10)',
    total: '@integer(5, 100)',
  }
}
export function FriendshipDetailReq() {
  return {
    channel: '@string(5,50)',
    friendId: '@guid',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isPhoneSearch: '@boolean',
    needHiallMsg: '@boolean',
  }
}
export function FriendshipDetailResp() {
  return {
    addFriend: '@boolean',
    avatar: '@image(200x100, @color, @color)',
    hiallType: '@string(5,50)',
    childCompany: '@string(5,50)',
    company: '@string(5,50)',
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
    whitePath: '@string(5,50)',
    email: '@email',
    enableInput: '@boolean',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isAt: '@boolean',
    isAttention: '@boolean',
    isFriendship: '@boolean',
    isMutual: '@boolean',
    isNotice: '@boolean',
    isPayAttention: '@boolean',
    isSameSubsidiary: '@boolean',
    isSameGrateful: '@boolean',
    isSenderSystem: '@boolean',
    isTop: '@boolean',
    job: '@string(5,50)',
    lastAckSequence: '@string(5,50)',
    msgApplyType: Mock.mock({ 'example|1': ['FORWARD', 'REPLY', ''] }).example,
    msgContent: '@string(5,50)',
    msgContentType: '@string(5,50)',
    msgFileUrl: '@url',
    msgId: '@guid',
    msgSenderName: '@ctitle(5,10)',
    msgSequence: '@string(5,50)',
    msgTime: '@datetime',
    nickName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    pinyin: '@string(5,50)',
    post: '@string(5,50)',
    sex: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    title: '@ctitle(5,10)',
    unreadCount: '@integer(3,1000)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function FriendshipResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    pinyin: '@string(5,50)',
    gratefulName: '@ctitle(5,10)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function FriendshipKeyBorardDetailResp() {
  return {
    enableSendMsg: '@boolean',
    hasSameGrateful: '@boolean',
    imBirdId: '@guid',
    isAttention: '@boolean',
    isBlack: '@boolean',
    isFrinedship: '@boolean',
    isNotice: '@boolean',
    isPrivate: '@boolean',
    isRcvMsgAttr: '@boolean',
    isShowPhone: '@boolean',
    isShowPhoneAttr: '@boolean',
    isTop: '@boolean',
    privateImBirdId: '@guid',
    remark: '@string(5,50)',
    showRemark: '@boolean',
  }
}
export function GetUnreadPageReq() {
  return {
    imKeyBorardId: '@guid',
    'requestIdList|1-20': ['@string(5,50)'],
  }
}
export function BirdF2fKeyBorardListResp() {
  return {
    avatarUrl: '@url',
    f2fBirdId: '@guid',
    imKeyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function BirdFileUploadReq() {
  return {
    bizId: '@guid',
    bizSource: '@string(5,50)',
    bpSenderId: '@guid',
    'fileList|1-20': [FileDTO()],
  }
}
export function BirdSetNoticeAndTopReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isNotice: '@boolean',
    isTop: '@boolean',
    needHiallMsg: '@boolean',
  }
}
export function BirdTransferReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
export function InnerBirdDissolveReq() {
  return {
    bizId: '@guid',
    bizSource: '@string(5,50)',
    imBirdId: '@guid',
    ownerBpKeyBorardId: '@guid',
  }
}
export function InnerBirdMemberBirdListReq() {
  return {
    bpKeyBorardId: '@guid',
    keyword: '@string(5,50)',
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: 20,
  }
}
export function InviteToBirdReq() {
  return {
    'applyIds|1-20': ['@string(5,50)'],
    desc: '@string(5,50)',
    birdName: '@ctitle(5,10)',
    imBirdId: '@guid',
    inviterId: '@guid',
  }
}
export function InviteToBirdRespYaoQingRuNiaoWoXiangYing() {
  return {
    'checkKeyBorardIds|1-20': ['@string(5,50)'],
    'checkKeyBorards|1-20': [KeyBorardRespDuiXiang()],
    birdResp: NiaoWoDuiXiangBirdResp(),
    inviteMsg: '@string(5,50)',
  }
}
export function ListFriendshipQueryReq() {
  return {
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keyword: '@string(5,50)',
  }
}
export function MemberBirdStatusResp() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
  }
}
export function MessageAtResp() {
  return {
    messageId: '@guid',
    senderId: '@guid',
    sequence: '@string(5,50)',
  }
}
export function MessagePositionReqq() {
  return {
    imBirdId: '@guid',
    isAt: '@boolean',
    limit: '@integer(3,1000)',
    startSequence: '@string(5,50)',
  }
}
export function MessageProcessReq() {
  return {
    footer: FooterDetailDTO(),
    msgId: '@guid',
  }
}
export function MsgSearchReq() {
  return {
    friendId: '@guid',
    birdId: '@guid',
    keywords: '@string(5,50)',
    page: '@integer(3,1000)',
    size: 20,
    type: '@string(5,50)',
    keyBorardId: '@guid',
  }
}
export function PhoneFriendshipResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isFriend: '@boolean',
    phone: '@integer(13100000000,18999999999)',
    pinyin: '@string(5,50)',
    gratefulName: '@ctitle(5,10)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function PhoneListReq() {
  return {
    imKeyBorardId: '@guid',
    'phoneList|1-20': ['@integer(13100000000,18999999999)'],
  }
}
export function PutFileResp() {
  return {
    happyId: '@guid',
    fileId: '@guid',
    originalFileName: '@ctitle(5,10)',
    signUrl: '@url',
    url: '@url',
  }
}
export function QueryLastMessageResp() {
  return {
    appType: '@integer(3,1000)',
    isForceUpdate: '@boolean',
    versionDesc: '@string(5,50)',
    versionName: '@ctitle(5,10)',
    versionUrl: '@url',
  }
}
export function RemoteAutoBirdReq() {
  return {
    cityId: '@guid',
    endTime: '@datetime',
    page: '@integer(3,1000)',
    size: 20,
    startTime: '@datetime',
  }
}
export function RequestMsgReqDuiXiang() {
  return {
    content: '@string(5,50)',
    receiverId: '@guid',
    requestId: '@guid',
    senderId: '@guid',
  }
}
export function SaveRandomReq() {
  return {
    imKeyBorardId: '@guid',
    latitude: '@string(5,50)',
    longitude: '@string(5,50)',
    random: '@string(5,50)',
  }
}
export function SearchBeforeAddFriendReq() {
  return {
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    isShowFullName: '@boolean',
    isShowGratefulName: '@boolean',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: 20,
  }
}
export function SearchBeforeAddFriendResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    channel: '@string(5,50)',
    imKeyBorardId: '@guid',
    isFriend: '@boolean',
    isBirdMember: '@boolean',
    permitChannel: '@boolean',
    phone: '@integer(13100000000,18999999999)',
    pinyin: '@string(5,50)',
    gratefulName: '@ctitle(5,10)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function SearchMapResp() {
  return {
    hasMore: '@boolean',
    'keyBorardList|1-20': [SearchResp()],
  }
}
export function SearchReq() {
  return {
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keywords: '@string(5,50)',
  }
}
export function SearchResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    hiallType: '@string(5,50)',
    company: '@string(5,50)',
    createType: '@string(5,50)',
    birdAttr: '@string(5,50)',
    birdType: '@string(5,50)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    job: '@string(5,50)',
    keywords: '@string(5,50)',
    name: '@ctitle(5,10)',
    ownerId: '@guid',
    post: '@string(5,50)',
    total: '@integer(5, 100)',
  }
}
export function SetRcvMsgReq() {
  return {
    imFriendId: '@guid',
    imKeyBorardId: '@guid',
    isRcvMsg: '@boolean',
  }
}
export function SetShowPhoneReq() {
  return {
    imFriendId: '@guid',
    imKeyBorardId: '@guid',
    isShowPhone: '@boolean',
  }
}
export function SwitchKeyBorardListResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    imKeyBorardId: '@guid',
    phone: '@integer(13100000000,18999999999)',
    satoken: '@string(5,50)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function SwitchKeyBorardReq() {
  return {
    deviceId: '@guid',
    imKeyBorardId: '@guid',
  }
}
export function GratefulInfoRespLvKeXinXi() {
  return {
    avatar: '@image(200x100, @color, @color)',
    channel: '@string(5,50)',
    checked: '@boolean',
    kind: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    post: '@string(5,50)',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function UnReadComPageXiaoDaoXiaoXiYongDaoXiangYing() {
  return {
    current: '@integer(1, 5)',
    'records|1-20': [XiaoDaoXiaoXiYongDaoXiangYing()],
    size: 20,
    total: '@integer(5, 100)',
    unreadSum: '@integer(3,1000)',
  }
}
export function UnreadResp() {
  return {
    isRead: '@boolean',
    requestId: '@guid',
  }
}
export function UploadFileReq() {
  return {
    happyId: '@guid',
    fileTime: '@datetime',
    height: '@integer(3,1000)',
    isVoice: '@boolean',
    originalFileName: '@ctitle(5,10)',
    realFileSize: '@string(5,50)',
    type: '@string(5,50)',
    width: '@integer(3,1000)',
  }
}
export function KeyBorardBindReq() {
  return {
    channel: '@string(5,50)',
    deviceId: '@guid',
    imKeyBorardId: '@guid',
  }
}
export function KeyBorardBindResp() {}
export function KeyBorardBlackResp() {
  return {
    avatarUrl: '@url',
    id: '@guid',
    imKeyBorardId: '@guid',
    gratefulName: '@ctitle(5,10)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function KeyBorardCancelReq() {
  return {
    imKeyBorardId: '@guid',
    smsCode: '@string(5,50)',
  }
}
export function KeyBorardInformSaveReq() {
  return {
    content: '@string(5,50)',
    peerId: '@guid',
    type: '@string(5,50)',
  }
}
export function KeyBorardListAllGratefulResp() {
  return {
    hasMore: '@boolean',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
    'keyBorardList|1-20': [DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp()],
  }
}
export function KeyBorardRespDuiXiang() {
  return {
    avatar: '@image(200x100, @color, @color)',
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
    email: '@email',
    birdMemberRemark: '@string(5,50)',
    imKeyBorardId: '@guid',
    isApprove: '@boolean',
    isBirdApprove: '@boolean',
    isNamePhoneSearch: '@boolean',
    isNoticed: '@boolean',
    isRcvStrangerMsg: '@boolean',
    job: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    parentWhitePath: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    pinyin: '@string(5,50)',
    post: '@string(5,50)',
    requestChannel: '@string(5,50)',
    sex: '@string(5,50)',
    status: '@string(5,50)',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function WaterFallPageKeyBorardBlackResp() {
  return {
    'list|1-20': [KeyBorardBlackResp()],
    nextOffset: '@string(5,50)',
    requestTime: '@datetime',
  }
}
export function aliyunSTSJianQuanFanHuiZhi() {
  return {
    accessKeyIdSts: '@string(5,50)',
    secretKeyIdSts: '@string(5,50)',
    securityToken: '@string(5,50)',
  }
}
export function mockJiaRenRuNiaoWoRuCan() {
  return {
    bizId: '@guid',
    bizSourceE: '@string(5,50)',
    cityId: '@guid',
    'imKeyBorardIds|1-20': ['@string(5,50)'],
    schoolName: '@ctitle(5,10)',
  }
}
export function ShangChuanALiYunQianMingXiangYing() {
  return {
    accessKey: '@string(5,50)',
    bucketName: '@ctitle(5,10)',
    dir: '@string(5,50)',
    endpoint: '@string(5,50)',
    sign: '@string(5,50)',
  }
}
export function MaiShaoBingXiaoXiTuiSongimXiaoXi() {
  return {
    atBpKeyBorardIds: '@string(5,50)',
    'bizIdList|1-20': ['@string(5,50)'],
    bizSource: '@string(5,50)',
    bpSenderId: '@guid',
    content: '@string(5,50)',
    contentType: Mock.mock({
      'example|1': ['TEXT', 'LINK', 'IMG', 'VIDEO', 'AUDIO', 'VOICE', 'FILE', 'STRUCTUAL', 'PHONE'],
    }).example,
    footer: FooterWrapper(),
    'imBirdIdList|1-20': ['@string(5,50)'],
    'receiverBpKeyBorardIdList|1-20': ['@string(5,50)'],
    title: '@ctitle(5,10)',
    type: '@string(5,50)',
  }
}
export function ErWeiMa() {
  return {
    id: '@guid',
    type: '@string(5,50)',
  }
}
export function XiaoDaoXiaoXi() {
  return {
    avatar: '@image(200x100, @color, @color)',
    channel: '@string(5,50)',
    hiallName: '@ctitle(5,10)',
    hiallType: '@string(5,50)',
    birdAttr: '@string(5,50)',
    'birdIdList|1-20': ['@string(5,50)'],
    birdStatus: '@boolean',
    birdType: '@string(5,50)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isAllSilence: '@boolean',
    isAtAll: '@boolean',
    isFriendship: '@boolean',
    isModifyName: '@boolean',
    isNotice: '@boolean',
    isOrdinaryInvent: '@boolean',
    isPrivate: '@boolean',
    isShow: '@boolean',
    isTop: '@boolean',
    job: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    post: '@string(5,50)',
    privateImBirdId: '@guid',
    receiver: '@string(5,50)',
    total: '@integer(5, 100)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function XiaoDaoXiaoXiYongDao() {
  return {
    channel: '@string(5,50)',
    'birdIdList|1-20': ['@string(5,50)'],
    imKeyBorardId: '@guid',
    limit: '@integer(3,1000)',
    selectSum: '@boolean',
    skipCount: '@integer(3,1000)',
  }
}
export function XiaoDaoXiaoXiYongDaoXiangYing() {
  return {
    bizSource: '@string(5,50)',
    channel: '@string(5,50)',
    hiallAvatar: '@image(200x100, @color, @color)',
    hiallCompany: '@string(5,50)',
    hiallJob: '@string(5,50)',
    hiallName: '@ctitle(5,10)',
    hiallPost: '@string(5,50)',
    hiallRemark: '@string(5,50)',
    hiallType: '@string(5,50)',
    birdAttr: '@string(5,50)',
    birdId: '@guid',
    birdType: '@string(5,50)',
    isAt: '@boolean',
    isAttention: '@boolean',
    isFriendship: '@boolean',
    isNotice: '@boolean',
    isSameSubsidiary: '@boolean',
    isSameGrateful: '@boolean',
    isSenderSystem: '@boolean',
    isTop: '@boolean',
    lastAckSequence: '@string(5,50)',
    modified: '@string(5,50)',
    msgApplyType: Mock.mock({ 'example|1': ['FORWARD', 'REPLY', ''] }).example,
    msgContent: '@string(5,50)',
    msgContentType: '@string(5,50)',
    msgFileUrl: '@url',
    msgId: '@guid',
    msgSenderName: '@ctitle(5,10)',
    msgSequence: '@string(5,50)',
    msgTime: '@datetime',
    privateBirdId: '@guid',
    total: '@integer(5, 100)',
    unreadCount: '@integer(3,1000)',
    unreadSum: '@integer(3,1000)',
    keyBorardid: '@guid',
  }
}
export function XiuGaiBeiZhuModifyRemarkBirdReq() {
  return {
    birdRemark: '@string(5,50)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
export function XiuGaiBeiZhuModifyfriendRemarkReq() {
  return {
    friendRemark: '@string(5,50)',
    imFriendId: '@guid',
    imKeyBorardId: '@guid',
  }
}
export function XiuGaiTongQianCaoTouXiang() {
  return {
    avatar: '@image(200x100, @color, @color)',
  }
}
export function XiuGaiNiaoWoTaiYangHuaRuCanModifyBirdNameReq() {
  return {
    birdName: '@ctitle(5,10)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
export function RuNiaoWoQingQiuAddBirdReq() {
  return {
    applyId: '@guid',
    imBirdId: '@guid',
    inviterId: '@guid',
    type: '@integer(3,1000)',
  }
}
export function NaBuMaiShaoBingNiaoWoBaoCunChuCan() {
  return {
    'errorKeyBorardIds|1-20': ['@string(5,50)'],
    birdId: '@guid',
    ownerBpKeyBorardId: '@guid',
  }
}
export function NaBuXiaoXiSouSuoQingQiu() {
  return {
    bpKeyBorardId: '@guid',
    birdId: '@guid',
    keywords: '@string(5,50)',
    page: '@integer(3,1000)',
    size: 20,
    type: '@string(5,50)',
  }
}
export function NaBuNiaoWoBaoCunRuCan() {
  return {
    avatarUrl: '@url',
    bizId: '@guid',
    bizSource: '@string(5,50)',
    desc: '@string(5,50)',
    'memberBpKeyBorardIdList|1-20': ['@string(5,50)'],
    name: '@ctitle(5,10)',
    ownerBpKeyBorardId: '@guid',
  }
}
export function NaBuNiaoWoBaoCunNiaoWoChengYuanRuCan() {
  return {
    bizId: '@guid',
    bizSource: '@string(5,50)',
    'memberBpKeyBorardIdList|1-20': ['@string(5,50)'],
    ownerBpKeyBorardId: '@guid',
  }
}
export function ChuangJianXiaoDaoXiaoXi() {
  return {
    channel: '@string(5,50)',
    checkCache: '@boolean',
    'birdIdList|1-20': ['@string(5,50)'],
    privateBirdId: '@guid',
    'receiverIdList|1-20': ['@string(5,50)'],
    updateBirdHiall: '@boolean',
  }
}
export function LiShiXiaoXiMessageHistoryReq() {
  return {
    imBirdId: '@guid',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    sequence: '@string(5,50)',
    size: 20,
  }
}
export function WaiBuZhiXieChangChuCan() {
  return {
    area: '@string(5,50)',
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    chiefly: '@boolean',
    city: '@city',
    contactNumber: '@string(5,50)',
    country: '@string(5,50)',
    whiteId: '@guid',
    empNum: '@integer(3,1000)',
    doorRealGreen: '@string(5,50)',
    firmSize: '@string(5,50)',
    id: '@guid',
    imBirdId: '@guid',
    industryInvolved: '@string(5,50)',
    introduction: '@string(5,50)',
    legalIdCardNo: '@string(5,50)',
    legalCat: '@string(5,50)',
    licenseUnifiedCode: '@string(5,50)',
    licenseUnifiedUrl: '@url',
    location: '@string(5,50)',
    mark: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
    serialNum: '@string(5,50)',
    gratefulId: '@guid',
    xmail: '@string(5,50)',
  }
}
export function WaiBuZhiXieChangSouSuoRuCan() {
  return {
    doorName: '@ctitle(5,10)',
    flag: '@boolean',
    page: '@integer(3,1000)',
    size: 20,
  }
}
export function WaiBuShuiDaoXiangYing() {
  return {
    avatar: '@image(200x100, @color, @color)',
    bpKeyBorardId: '@guid',
    channel: '@string(5,50)',
    desktopNickName: '@ctitle(5,10)',
    desktopKeyBorardName: '@ctitle(5,10)',
    imKeyBorardId: '@guid',
    isFriend: '@boolean',
    isBirdMember: '@boolean',
    isNormal: '@boolean',
    permitChannel: '@boolean',
    phone: '@integer(13100000000,18999999999)',
    pinyin: '@string(5,50)',
    gratefulName: '@ctitle(5,10)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function WaiBuShuiDaoSouSuoRuCan() {
  return {
    page: '@integer(3,1000)',
    size: 20,
    gratefulId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function HaoYouFriendshipReq() {
  return {
    imFriendId: '@guid',
    imKeyBorardId: '@guid',
    isNotice: '@boolean',
    isTop: '@boolean',
  }
}
export function HaoYouYongDaoChuXingFriendshipQueryReq() {
  return {
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: 20,
  }
}
export function WenJianPiLiangBaoCunXiangYingShiTi() {
  return {
    'resps|1-20': [FileResp()],
  }
}
export function XiaoXiack() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
export function XiaoXiNaBuXiangYingShiTi() {
  return {
    applyType: Mock.mock({ 'example|1': ['FORWARD', 'REPLY', ''] }).example,
    atKeyBorardIds: '@string(5,50)',
    atKeyBorardNames: '@ctitle(5,10)',
    bpKeyBorardId: '@guid',
    'cardMessageList|1-20': [ZhuanFaXiaoXiDuiXiang()],
    channelFile: FileResp(),
    content: '@string(5,50)',
    contentType: Mock.mock({
      'example|1': ['TEXT', 'LINK', 'IMG', 'VIDEO', 'AUDIO', 'VOICE', 'FILE', 'STRUCTUAL', 'PHONE'],
    }).example,
    created: '@datetime',
    fileId: '@guid',
    fileName: '@ctitle(5,10)',
    fileSize: '@string(5,50)',
    fileText: '@string(5,50)',
    fileTime: '@datetime',
    fileType: '@string(5,50)',
    fileUrl: '@url',
    footer: FooterWrapper(),
    birdId: '@guid',
    height: '@integer(3,1000)',
    id: '@guid',
    isAlarm: '@boolean',
    isSystem: '@boolean',
    nickName: '@ctitle(5,10)',
    senderAvatar: '@image(200x100, @color, @color)',
    senderId: '@guid',
    senderName: '@ctitle(5,10)',
    sequence: '@string(5,50)',
    title: '@ctitle(5,10)',
    width: '@integer(3,1000)',
  }
}
export function XiaoXiSaoXue() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    'messageIdList|1-20': ['@string(5,50)'],
  }
}
export function XiaoXiDuiXiang() {
  return {
    applyType: Mock.mock({ 'example|1': ['FORWARD', 'REPLY', ''] }).example,
    atKeyBorardIds: '@string(5,50)',
    atKeyBorardNames: '@ctitle(5,10)',
    'cardMessageList|1-20': [ZhuanFaXiaoXiDuiXiang()],
    channelFile: FileResp(),
    content: '@string(5,50)',
    contentType: Mock.mock({
      'example|1': ['TEXT', 'LINK', 'IMG', 'VIDEO', 'AUDIO', 'VOICE', 'FILE', 'STRUCTUAL', 'PHONE'],
    }).example,
    created: '@datetime',
    fileId: '@guid',
    fileName: '@ctitle(5,10)',
    fileSize: '@string(5,50)',
    fileText: '@string(5,50)',
    fileTime: '@datetime',
    fileType: '@string(5,50)',
    fileUrl: '@url',
    footer: FooterWrapper(),
    birdId: '@guid',
    height: '@integer(3,1000)',
    id: '@guid',
    isAlarm: '@boolean',
    isSystem: '@boolean',
    nickName: '@ctitle(5,10)',
    senderAvatar: '@image(200x100, @color, @color)',
    senderId: '@guid',
    senderName: '@ctitle(5,10)',
    sequence: '@string(5,50)',
    title: '@ctitle(5,10)',
    width: '@integer(3,1000)',
  }
}
export function XiaoXiGunDongQingQiuTi() {
  return {
    chooseCurrentMessage: '@boolean',
    downSize: '@integer(3,1000)',
    birdId: '@guid',
    messageId: '@guid',
    type: '@string(5,50)',
    upSize: '@integer(3,1000)',
  }
}
export function XiaoXiXiangQingMessageDetailReq() {
  return {
    messageId: '@guid',
  }
}
export function TianJiaHaoYouAddFriendReq() {
  return {
    channel: '@string(5,50)',
    content: '@string(5,50)',
    friendRemark: '@string(5,50)',
    imFriendId: '@guid',
    imKeyBorardId: '@guid',
    isTop: '@boolean',
    phone: '@integer(13100000000,18999999999)',
  }
}
export function TianJiaWoWeiHaoYouCongMingFangShi() {
  return {
    imKeyBorardId: '@guid',
    'requestChannels|1-20': ['@string(5,50)'],
  }
}
export function QingKongXiaoXiRuCan() {
  return {
    imFriendId: '@guid',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
export function QingKongXiaoXiJiLu() {
  return {
    channel: '@string(5,50)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
export function BanBen() {
  return {
    appType: '@string(5,50)',
    fileSize: '@string(5,50)',
    isForceUpdate: '@boolean',
    versionDesc: '@string(5,50)',
    versionName: '@ctitle(5,10)',
    versionNum: '@string(5,50)',
    versionUrl: '@url',
  }
}
export function BanBen0() {
  return {
    appType: '@string(5,50)',
    fileSize: '@string(5,50)',
    isForceUpdate: '@boolean',
    versionDesc: '@string(5,50)',
    versionName: '@ctitle(5,10)',
    versionNum: '@string(5,50)',
    versionUrl: '@url',
  }
}
export function ShengChengWenJianfileId() {
  return {
    bucketName: '@ctitle(5,10)',
    dir: '@string(5,50)',
    fileSize: '@string(5,50)',
    fileTime: '@datetime',
    height: '@integer(3,1000)',
    originalFileName: '@ctitle(5,10)',
    ossFileName: '@ctitle(5,10)',
    type: '@string(5,50)',
    width: '@integer(3,1000)',
  }
}
export function TongQianCaoSuoYouLvKeKeyBorardListAllGratefulReq() {
  return {
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keyword: '@string(5,50)',
  }
}
export function DengLuXiangYingShiTi() {
  return {
    channel: '@string(5,50)',
    code: 200,
    imKeyBorardId: '@guid',
    newKeyBorard: '@boolean',
    openId: '@guid',
    satoken: '@string(5,50)',
    setPassWord: '@boolean',
    token: '@string(5,50)',
    tokenTimeOut: '@datetime',
    keyBorardId: '@guid',
  }
}
export function LvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi() {
  return {
    avatar: '@image(200x100, @color, @color)',
    avatarId: '@guid',
    bpKeyBorardId: '@guid',
    email: '@email',
    imKeyBorardId: '@guid',
    nickName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    'relationE|1-20': ['@string(5,50)'],
    sex: '@string(5,50)',
    status: '@string(5,50)',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function QianMingWenJianShangChuanQingQiuRuCanShiTi() {
  return {
    'reqs|1-20': [ShengChengWenJianfileId()],
  }
}
export function QianMingWenJianXiangYing() {
  return {
    accessId: '@guid',
    bucketName: '@ctitle(5,10)',
    callback: '@string(5,50)',
    dir: '@string(5,50)',
    endpoint: '@string(5,50)',
    expire: '@string(5,50)',
    host: '@string(5,50)',
    policy: '@string(5,50)',
    signature: '@string(5,50)',
  }
}
export function NiaoWoBaoCunRuCan() {
  return {
    desc: '@string(5,50)',
    'memberIdList|1-20': ['@string(5,50)'],
    name: '@ctitle(5,10)',
    ownerId: '@guid',
  }
}
export function NiaoWoXinXiBirdDetailReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    needHiallMsg: '@boolean',
  }
}
export function NiaoWoFenYeBirdPageListReq() {
  return {
    birdAttrE: '@string(5,50)',
    birdTypeE: '@string(5,50)',
    imKeyBorardId: '@guid',
    keyword: '@string(5,50)',
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: 20,
  }
}
export function NiaoWoDuiXiangBirdDetailResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    createType: '@string(5,50)',
    whiteId: '@guid',
    whitePath: '@string(5,50)',
    desc: '@string(5,50)',
    birdAttr: '@string(5,50)',
    birdBelong: '@string(5,50)',
    birdType: '@string(5,50)',
    imBirdId: '@guid',
    isAdminConfirm: '@boolean',
    isAllSilence: '@boolean',
    isAt: '@boolean',
    isAtAll: '@boolean',
    isAttention: '@boolean',
    isModifyName: '@boolean',
    isNotice: '@boolean',
    isOrdinaryInvent: '@boolean',
    isPrivate: '@boolean',
    isTop: '@boolean',
    lastAckSequence: '@string(5,50)',
    msgApplyType: Mock.mock({ 'example|1': ['FORWARD', 'REPLY', ''] }).example,
    msgContent: '@string(5,50)',
    msgContentType: '@string(5,50)',
    msgFileUrl: '@url',
    msgId: '@guid',
    msgSenderName: '@ctitle(5,10)',
    msgSequence: '@string(5,50)',
    msgTime: '@datetime',
    name: '@ctitle(5,10)',
    notice: '@string(5,50)',
    ownerId: '@guid',
    status: '@string(5,50)',
    gratefulId: '@guid',
    total: '@integer(5, 100)',
    unreadCount: '@integer(3,1000)',
  }
}
export function NiaoWoDuiXiangBirdResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    bizId: '@guid',
    bizSource: '@string(5,50)',
    hiallType: '@string(5,50)',
    createType: '@string(5,50)',
    birdAttr: '@string(5,50)',
    birdType: '@string(5,50)',
    imBirdId: '@guid',
    name: '@ctitle(5,10)',
    ownerId: '@guid',
    total: '@integer(5, 100)',
  }
}
export function NiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isFriendship: '@boolean',
    isNotice: '@boolean',
    isTop: '@boolean',
    memberAvatar: '@image(200x100, @color, @color)',
    memberAvatarId: '@guid',
    memberName: '@ctitle(5,10)',
    memberPhone: '@integer(13100000000,18999999999)',
    memberRemark: '@string(5,50)',
    memberGratefulName: '@ctitle(5,10)',
    memberType: '@string(5,50)',
  }
}
export function NiaoWoChengYuanFenYeBirdMemberPageReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isDeleteMember: '@boolean',
    isFilterCurrentKeyBorard: '@boolean',
    keyword: '@string(5,50)',
    memberType: '@string(5,50)',
    needFriendRelation: '@boolean',
    page: '@integer(3,1000)',
    size: 20,
    sortE: '@string(5,50)',
  }
}
export function NiaoWoChengYuanYongDaoChuXingRuCan() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isDeleteMember: '@boolean',
    keyword: '@string(5,50)',
    memberType: '@string(5,50)',
    sortE: '@string(5,50)',
  }
}
export function NiaoWoChengYuanSaoXueBirdMemberDelReq() {
  return {
    imBirdId: '@guid',
    'imMemberIdList|1-20': ['@string(5,50)'],
    imKeyBorardId: '@guid',
  }
}
export function NiaoWoChengYuanJiaShiBirdMemberSaveReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    'imKeyBorardIdList|1-20': ['@string(5,50)'],
  }
}
export function NiaoWoWenJianShangChuanXiangYingShiTi() {
  return {
    'files|1-20': [FileDTO()],
    imBirdId: '@guid',
  }
}
export function NiaoWoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isAdminConfirm: '@boolean',
    isAllSilence: '@boolean',
    isAtAll: '@boolean',
    isModifyName: '@boolean',
    isOrdinaryInvent: '@boolean',
    isPrivate: '@boolean',
  }
}
export function HuoQubucket() {
  return {
    fileTypeE: '@string(5,50)',
    sceneE: '@string(5,50)',
  }
}
export function HuoQuLvKeTongQianCaoDuiYingimTongQianCaoXinXiRuCan() {
  return {
    'bpKeyBorardIds|1-20': ['@string(5,50)'],
    channel: '@string(5,50)',
    currentBpKeyBorardId: '@guid',
    needRelation: '@boolean',
    needGrateful: '@boolean',
  }
}
export function HuoQuALiYunQianMingRuCan() {
  return {
    fileTypeE: '@string(5,50)',
    signContent: '@string(5,50)',
  }
}
export function SheZhiMoRenZhiXieChang() {
  return {
    kind: '@string(5,50)',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
  }
}
export function YuYinShiBieFanHui() {
  return {
    content: '@string(5,50)',
    fileId: '@guid',
    fileResp: FileResp(),
    messageId: '@guid',
  }
}
export function QingQiuHuiFuXiaoXiYongDaoReqMsgDetailResp() {
  return {
    content: '@string(5,50)',
    created: '@datetime',
    isRead: '@boolean',
    receiverId: '@guid',
    receiverName: '@ctitle(5,10)',
    requestId: '@guid',
    requestMsgId: '@guid',
    senderId: '@guid',
    senderName: '@ctitle(5,10)',
  }
}
export function QingQiuXiaoXiYongDaoRequestPageListReq() {
  return {
    imKeyBorardId: '@guid',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: 20,
    type: '@integer(3,1000)',
  }
}
export function QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq() {
  return {
    imKeyBorardId: '@guid',
    requestId: '@guid',
    'requestMsgIdList|1-20': ['@string(5,50)'],
  }
}
export function ZhuanFaXiaoXiDuiXiang() {
  return {
    applyType: Mock.mock({ 'example|1': ['FORWARD', 'REPLY', ''] }).example,
    channelFile: FileResp(),
    content: '@string(5,50)',
    contentType: Mock.mock({
      'example|1': ['TEXT', 'LINK', 'IMG', 'VIDEO', 'AUDIO', 'VOICE', 'FILE', 'STRUCTUAL', 'PHONE'],
    }).example,
    created: '@datetime',
    fileId: '@guid',
    fileName: '@ctitle(5,10)',
    fileSize: '@string(5,50)',
    fileText: '@string(5,50)',
    fileTime: '@datetime',
    fileType: '@string(5,50)',
    fileUrl: '@url',
    forwardMessageFooter: FooterWrapper(),
    forwardMessageIsAlarm: '@boolean',
    forwardMessageTitle: '@ctitle(5,10)',
    birdId: '@guid',
    id: '@guid',
    senderAvatar: '@image(200x100, @color, @color)',
    senderId: '@guid',
    senderName: '@ctitle(5,10)',
    sequence: '@string(5,50)',
  }
}
export function TongGuoJuJueApproveReq() {
  return {
    imKeyBorardId: '@guid',
    isNotice: '@boolean',
    permitted: '@boolean',
    remark: '@string(5,50)',
    requestId: '@guid',
  }
}
export function DaDuNanXinXiWhiteResp() {
  return {
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
    imBirdId: '@guid',
  }
}
export function DaDuNanYongDaoWhiteListReq() {
  return {
    getImBirdId: '@guid',
    parentId: '@guid',
    gratefulId: '@guid',
  }
}
export function DaDuNanTongQianCaoFenYeKeyBorardPageReq() {
  return {
    whiteId: '@guid',
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: 20,
    gratefulId: '@guid',
  }
}
export function DaDuNanTongQianCaoYongDaoWhiteListReq() {
  return {
    getImBirdId: '@guid',
    gratefulId: '@guid',
  }
}
export function DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    avatarId: '@guid',
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    isBirdMember: '@boolean',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function YanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    applyAvatar: '@image(200x100, @color, @color)',
    applyAvatarUrl: '@url',
    applyId: '@guid',
    applyName: '@ctitle(5,10)',
    avatar: '@image(200x100, @color, @color)',
    content: '@string(5,50)',
    inviterAvatar: '@image(200x100, @color, @color)',
    inviterAvatarUrl: '@url',
    inviterId: '@guid',
    inviterName: '@ctitle(5,10)',
    receiverAvatar: '@image(200x100, @color, @color)',
    receiverAvatarUrl: '@url',
    receiverId: '@guid',
    receiverName: '@ctitle(5,10)',
    requestId: '@guid',
    status: '@integer(3,1000)',
    gratefulName: '@ctitle(5,10)',
    type: '@integer(3,1000)',
    keyBorardAvatar: '@image(200x100, @color, @color)',
    keyBorardAvatarUrl: '@url',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function YanChangChunHuaXiaoXiXiangQingRequestDetailResp() {
  return {
    applyAvatar: '@image(200x100, @color, @color)',
    applyId: '@guid',
    applyName: '@ctitle(5,10)',
    applyGratefulName: '@ctitle(5,10)',
    channel: '@string(5,50)',
    content: '@string(5,50)',
    created: '@datetime',
    inviterAvatar: '@image(200x100, @color, @color)',
    inviterId: '@guid',
    inviterName: '@ctitle(5,10)',
    inviterGratefulName: '@ctitle(5,10)',
    isFriendshipOrHasSameGrateful: '@boolean',
    'msgList|1-20': [QingQiuHuiFuXiaoXiYongDaoReqMsgDetailResp()],
    receiverAvatar: '@image(200x100, @color, @color)',
    receiverId: '@guid',
    receiverName: '@ctitle(5,10)',
    receiverGratefulName: '@ctitle(5,10)',
    remark: '@string(5,50)',
    requestId: '@guid',
    status: '@integer(3,1000)',
    total: '@integer(5, 100)',
    type: '@integer(3,1000)',
  }
}
