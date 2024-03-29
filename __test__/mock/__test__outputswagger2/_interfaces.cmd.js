function AddBirdResp() {
  return {
    directEntryBird: '@boolean',
    imBirdId: '@guid',
  }
}
function GreenBookGratefulInfoResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    checked: '@boolean',
    kind: '@string(5,50)',
    showImBirdId: '@guid',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
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
function ApiResponseAddBirdResp() {
  return {
    code: 200,
    data: AddBirdResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseAtListAndAckSequenceResp() {
  return {
    code: 200,
    data: AtListAndAckSequenceResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageCommonSearchResp() {
  return {
    code: 200,
    data: ComPageCommonSearchResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageContactResp() {
  return {
    code: 200,
    data: ComPageContactResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageFriendshipResp() {
  return {
    code: 200,
    data: ComPageFriendshipResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageSearchBeforeAddFriendResp() {
  return {
    code: 200,
    data: ComPageSearchBeforeAddFriendResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageKeyBorardBlackResp() {
  return {
    code: 200,
    data: ComPageKeyBorardBlackResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageWaiBuZhiXieChangChuCan() {
  return {
    code: 200,
    data: ComPageWaiBuZhiXieChangChuCan(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageWaiBuShuiDaoXiangYing() {
  return {
    code: 200,
    data: ComPageWaiBuShuiDaoXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageXiaoXiNaBuXiangYingShiTi() {
  return {
    code: 200,
    data: ComPageXiaoXiNaBuXiangYingShiTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageXiaoXiDuiXiang() {
  return {
    code: 200,
    data: ComPageXiaoXiDuiXiang(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageNiaoWoDuiXiangBirdResp() {
  return {
    code: 200,
    data: ComPageNiaoWoDuiXiangBirdResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    data: ComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp() {
  return {
    code: 200,
    data: ComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    code: 200,
    data: ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseFriendshipDetailResp() {
  return {
    code: 200,
    data: FriendshipDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseFriendshipKeyBorardDetailResp() {
  return {
    code: 200,
    data: FriendshipKeyBorardDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing() {
  return {
    code: 200,
    data: InviteToBirdRespYaoQingRuNiaoWoXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListGreenBookGratefulInfoResp() {
  return {
    code: 200,
    'data|1-20': [GreenBookGratefulInfoResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListForwardListResp() {
  return {
    code: 200,
    'data|1-20': [ForwardListResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListFriendshipResp() {
  return {
    code: 200,
    'data|1-20': [FriendshipResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListBirdF2fKeyBorardListResp() {
  return {
    code: 200,
    'data|1-20': [BirdF2fKeyBorardListResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListPhoneFriendshipResp() {
  return {
    code: 200,
    'data|1-20': [PhoneFriendshipResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListSwitchKeyBorardListResp() {
  return {
    code: 200,
    'data|1-20': [SwitchKeyBorardListResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListGratefulInfoRespLvKeXinXi() {
  return {
    code: 200,
    'data|1-20': [GratefulInfoRespLvKeXinXi()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListUnreadResp() {
  return {
    code: 200,
    'data|1-20': [UnreadResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListKeyBorardListAllGratefulResp() {
  return {
    code: 200,
    'data|1-20': [KeyBorardListAllGratefulResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListXiaoXiDuiXiang() {
  return {
    code: 200,
    'data|1-20': [XiaoXiDuiXiang()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListBanBen() {
  return {
    code: 200,
    'data|1-20': [BanBen()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    'data|1-20': [NiaoWoChengYuanXinXiDuiXiangBirdMemberResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListDaDuNanXinXiWhiteResp() {
  return {
    code: 200,
    'data|1-20': [DaDuNanXinXiWhiteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseMaplongLvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi() {
  return {
    code: 200,
    data: LvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseMapstringSearchMapResp() {
  return {
    code: 200,
    data: SearchMapResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseMemberBirdStatusResp() {
  return {
    code: 200,
    data: MemberBirdStatusResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponsePutFileResp() {
  return {
    code: 200,
    data: PutFileResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseQueryLastMessageResp() {
  return {
    code: 200,
    data: QueryLastMessageResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing() {
  return {
    code: 200,
    data: UnReadComPageXiaoDaoXiaoXiYongDaoXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseKeyBorardBindResp() {
  return {
    code: 200,
    data: KeyBorardBindResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseKeyBorardRespDuiXiang() {
  return {
    code: 200,
    data: KeyBorardRespDuiXiang(),
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
function ApiResponseWaterFallPageKeyBorardBlackResp() {
  return {
    code: 200,
    data: WaterFallPageKeyBorardBlackResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponsealiyunSTSJianQuanFanHuiZhi() {
  return {
    code: 200,
    data: aliyunSTSJianQuanFanHuiZhi(),
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
function ApiResponseobject() {
  return {
    code: 200,
    data: '',
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
function ApiResponseShangChuanALiYunQianMingXiangYing() {
  return {
    code: 200,
    data: ShangChuanALiYunQianMingXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseXiaoDaoXiaoXi() {
  return {
    code: 200,
    data: XiaoDaoXiaoXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan() {
  return {
    code: 200,
    data: NaBuMaiShaoBingNiaoWoBaoCunChuCan(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseWenJianPiLiangBaoCunXiangYingShiTi() {
  return {
    code: 200,
    data: WenJianPiLiangBaoCunXiangYingShiTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseXiaoXiDuiXiang() {
  return {
    code: 200,
    data: XiaoXiDuiXiang(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseBanBen() {
  return {
    code: 200,
    data: BanBen(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseDengLuXiangYingShiTi() {
  return {
    code: 200,
    data: DengLuXiangYingShiTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseQianMingWenJianXiangYing() {
  return {
    code: 200,
    data: QianMingWenJianXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseNiaoWoDuiXiangBirdDetailResp() {
  return {
    code: 200,
    data: NiaoWoDuiXiangBirdDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseNiaoWoDuiXiangBirdResp() {
  return {
    code: 200,
    data: NiaoWoDuiXiangBirdResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    data: NiaoWoChengYuanXinXiDuiXiangBirdMemberResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi() {
  return {
    code: 200,
    data: NiaoWoWenJianShangChuanXiangYingShiTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseYuYinShiBieFanHui() {
  return {
    code: 200,
    data: YuYinShiBieFanHui(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp() {
  return {
    code: 200,
    data: YanChangChunHuaXiaoXiXiangQingRequestDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function AtListAndAckSequenceResp() {
  return {
    lastAckSequence: '@string(5,50)',
    'msgAtList|1-20': [MessageAtResp()],
    unreadCount: '@integer(3,1000)',
  }
}
function BasePageReq() {
  return {
    page: '@integer(3,1000)',
    size: '20',
  }
}
function ComLoginReq() {
  return {
    blue: '@string(5,50)',
    certificate: '@string(5,50)',
    clientType: /ALI_MP|ANDROID|DEVICE_END|H5|IOS|MOBILE_END|PC|WECHAT_MP/,
    clientVersion: '@string(5,50)',
    code: 200,
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    loginModeEnum:
      /CORP_WEIXIN|DINGDING|MOBILE_CODE_FAST|ONE_CLICK|PASSWORD|TOKEN|VERIFICATION_CODE|WECHAT|WECHAT_FAST|WECHAT_WEB_FAST/,
    openId: '@guid',
    uuid: '@guid',
  }
}
function ComPageCommonSearchResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [CommonSearchResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageContactResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [ContactResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageFriendshipResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [FriendshipResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageSearchBeforeAddFriendResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [SearchBeforeAddFriendResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageKeyBorardBlackResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [KeyBorardBlackResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageWaiBuZhiXieChangChuCan() {
  return {
    current: '@string(5,50)',
    'records|1-20': [WaiBuZhiXieChangChuCan()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageWaiBuShuiDaoXiangYing() {
  return {
    current: '@string(5,50)',
    'records|1-20': [WaiBuShuiDaoXiangYing()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageXiaoXiNaBuXiangYingShiTi() {
  return {
    current: '@string(5,50)',
    'records|1-20': [XiaoXiNaBuXiangYingShiTi()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageXiaoXiDuiXiang() {
  return {
    current: '@string(5,50)',
    'records|1-20': [XiaoXiDuiXiang()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageNiaoWoDuiXiangBirdResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [NiaoWoDuiXiangBirdResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [NiaoWoChengYuanXinXiDuiXiangBirdMemberResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [YanChangChunHuaXiaoXiFenYeRequestPageListResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function CommonSearchReq() {
  return {
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keywords: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    type: '@string(5,50)',
  }
}
function CommonSearchResp() {
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
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ContactReq() {
  return {
    hiallEnum: /CHAT|GROUP/,
    excludeMemberImBirdId: '@guid',
    birdTypeE: /INNER|OUTER/,
    imKeyBorardId: '@guid',
    keywords: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function ContactResp() {
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
    total: () => {
      return +this.size * 10 || 100
    },
    keyBorardStatus: '@string(5,50)',
  }
}
function EnterBirdReq() {
  return {
    f2fBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function FileDTO() {
  return {
    fileName: '@ctitle(5,10)',
    ossUrl: '@image(200x100, @color, @color)',
  }
}
function FileResp() {
  return {
    fileId: '@guid',
    fileName: '@ctitle(5,10)',
    fileSize: '@string(5,50)',
    fileText: '@string(5,50)',
    fileTime: '@datetime',
    fileType: '@string(5,50)',
    fileUrl: '@image(200x100, @color, @color)',
    height: '@integer(3,1000)',
    width: '@integer(3,1000)',
  }
}
function FooterDetailDTO() {
  return {
    content: '@string(5,50)',
    footerTypeE: /BUTTON|LINK|TEXT/,
    methodType: /GET|POST/,
    param: '',
    url: '@url',
  }
}
function FooterWrapper() {
  return {
    cardTypeE: /CARD_BUTTON|CARD_LINK/,
    'details|1-20': [FooterDetailDTO()],
  }
}
function ForwardListReq() {
  return {
    channel: '@string(5,50)',
    imKeyBorardId: '@guid',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    type: '@string(5,50)',
  }
}
function ForwardListResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    hiallType: '@string(5,50)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isFriendship: '@boolean',
    name: '@ctitle(5,10)',
    gratefulName: '@ctitle(5,10)',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function FriendshipDetailReq() {
  return {
    channel: '@string(5,50)',
    friendId: '@guid',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isPhoneSearch: '@boolean',
    needHiallMsg: '@boolean',
  }
}
function FriendshipDetailResp() {
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
    msgApplyType: /FORWARD|REPLY|/,
    msgContent: '@string(5,50)',
    msgContentType: '@string(5,50)',
    msgFileUrl: '@image(200x100, @color, @color)',
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
function FriendshipResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    pinyin: '@string(5,50)',
    gratefulName: '@ctitle(5,10)',
    keyBorardName: '@ctitle(5,10)',
  }
}
function FriendshipKeyBorardDetailResp() {
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
function GetUnreadPageReq() {
  return {
    imKeyBorardId: '@guid',
    'requestIdList|1-20': ['@string(5,50)'],
  }
}
function BirdF2fKeyBorardListResp() {
  return {
    avatarUrl: '@image(200x100, @color, @color)',
    f2fBirdId: '@guid',
    imKeyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
function BirdFileUploadReq() {
  return {
    bizId: '@guid',
    bizSource: /BASE_PLATFORM_SENDER|BIGDATA|CRM|FLEX_WORK|HR_OA_SCHOOL|OA/,
    bpSenderId: '@guid',
    'fileList|1-20': [FileDTO()],
  }
}
function BirdSetNoticeAndTopReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isNotice: '@boolean',
    isTop: '@boolean',
    needHiallMsg: '@boolean',
  }
}
function BirdTransferReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function InnerBirdDissolveReq() {
  return {
    bizId: '@guid',
    bizSource: /BASE_PLATFORM_SENDER|BIGDATA|CRM|FLEX_WORK|HR_OA_SCHOOL|OA/,
    imBirdId: '@guid',
    ownerBpKeyBorardId: '@guid',
  }
}
function InnerBirdMemberBirdListReq() {
  return {
    bpKeyBorardId: '@guid',
    keyword: '@string(5,50)',
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function InviteToBirdReq() {
  return {
    'applyIds|1-20': ['@string(5,50)'],
    desc: '@string(5,50)',
    birdName: '@ctitle(5,10)',
    imBirdId: '@guid',
    inviterId: '@guid',
  }
}
function InviteToBirdRespYaoQingRuNiaoWoXiangYing() {
  return {
    'checkKeyBorardIds|1-20': ['@string(5,50)'],
    'checkKeyBorards|1-20': [KeyBorardRespDuiXiang()],
    birdResp: NiaoWoDuiXiangBirdResp(),
    inviteMsg: '@string(5,50)',
  }
}
function ListFriendshipQueryReq() {
  return {
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keyword: '@string(5,50)',
  }
}
function MemberBirdStatusResp() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
  }
}
function MessageAtResp() {
  return {
    messageId: '@guid',
    senderId: '@guid',
    sequence: '@string(5,50)',
  }
}
function MessagePositionReqq() {
  return {
    imBirdId: '@guid',
    isAt: '@boolean',
    limit: '@integer(3,1000)',
    startSequence: '@string(5,50)',
  }
}
function MessageProcessReq() {
  return {
    footer: FooterDetailDTO(),
    msgId: '@guid',
  }
}
function MsgSearchReq() {
  return {
    friendId: '@guid',
    birdId: '@guid',
    keywords: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    type: '@string(5,50)',
    keyBorardId: '@guid',
  }
}
function PhoneFriendshipResp() {
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
function PhoneListReq() {
  return {
    imKeyBorardId: '@guid',
    'phoneList|1-20': ['@integer(13100000000,18999999999)'],
  }
}
function PutFileResp() {
  return {
    happyId: '@guid',
    fileId: '@guid',
    originalFileName: '@ctitle(5,10)',
    signUrl: '@image(200x100, @color, @color)',
    url: '@url',
  }
}
function QueryLastMessageResp() {
  return {
    appType: '@integer(3,1000)',
    isForceUpdate: '@boolean',
    versionDesc: '@string(5,50)',
    versionName: '@ctitle(5,10)',
    versionUrl: '@image(200x100, @color, @color)',
  }
}
function RemoteAutoBirdReq() {
  return {
    cityId: '@guid',
    endTime: '@datetime',
    page: '@integer(3,1000)',
    size: '20',
    startTime: '@datetime',
  }
}
function RequestMsgReqDuiXiang() {
  return {
    content: '@string(5,50)',
    receiverId: '@guid',
    requestId: '@guid',
    senderId: '@guid',
  }
}
function SaveRandomReq() {
  return {
    imKeyBorardId: '@guid',
    latitude: '@string(5,50)',
    longitude: '@string(5,50)',
    random: '@string(5,50)',
  }
}
function SearchBeforeAddFriendReq() {
  return {
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    isShowFullName: '@boolean',
    isShowGratefulName: '@boolean',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function SearchBeforeAddFriendResp() {
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
function SearchMapResp() {
  return {
    hasMore: '@boolean',
    'keyBorardList|1-20': [SearchResp()],
  }
}
function SearchReq() {
  return {
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keywords: '@string(5,50)',
  }
}
function SearchResp() {
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
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function SetRcvMsgReq() {
  return {
    imFriendId: '@guid',
    imKeyBorardId: '@guid',
    isRcvMsg: '@boolean',
  }
}
function SetShowPhoneReq() {
  return {
    imFriendId: '@guid',
    imKeyBorardId: '@guid',
    isShowPhone: '@boolean',
  }
}
function SwitchKeyBorardListResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    imKeyBorardId: '@guid',
    phone: '@integer(13100000000,18999999999)',
    satoken: '@string(5,50)',
    keyBorardName: '@ctitle(5,10)',
  }
}
function SwitchKeyBorardReq() {
  return {
    deviceId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function GratefulInfoRespLvKeXinXi() {
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
function UnReadComPageXiaoDaoXiaoXiYongDaoXiangYing() {
  return {
    current: '@string(5,50)',
    'records|1-20': [XiaoDaoXiaoXiYongDaoXiangYing()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
    unreadSum: '@integer(3,1000)',
  }
}
function UnreadResp() {
  return {
    isRead: '@boolean',
    requestId: '@guid',
  }
}
function UploadFileReq() {
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
function KeyBorardBindReq() {
  return {
    channel: '@string(5,50)',
    deviceId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function KeyBorardBindResp() {}
function KeyBorardBlackResp() {
  return {
    avatarUrl: '@image(200x100, @color, @color)',
    id: '@guid',
    imKeyBorardId: '@guid',
    gratefulName: '@ctitle(5,10)',
    keyBorardName: '@ctitle(5,10)',
  }
}
function KeyBorardCancelReq() {
  return {
    imKeyBorardId: '@guid',
    smsCode: '@string(5,50)',
  }
}
function KeyBorardInformSaveReq() {
  return {
    content: '@string(5,50)',
    peerId: '@guid',
    type: '@string(5,50)',
  }
}
function KeyBorardListAllGratefulResp() {
  return {
    hasMore: '@boolean',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
    'keyBorardList|1-20': [DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp()],
  }
}
function KeyBorardRespDuiXiang() {
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
function WaterFallPageKeyBorardBlackResp() {
  return {
    'list|1-20': [KeyBorardBlackResp()],
    nextOffset: '@string(5,50)',
    requestTime: '@datetime',
  }
}
function aliyunSTSJianQuanFanHuiZhi() {
  return {
    accessKeyIdSts: '@string(5,50)',
    secretKeyIdSts: '@string(5,50)',
    securityToken: '@string(5,50)',
  }
}
function mockJiaRenRuNiaoWoRuCan() {
  return {
    bizId: '@guid',
    bizSourceE: /BASE_PLATFORM_SENDER|BIGDATA|CRM|FLEX_WORK|HR_OA_SCHOOL|OA/,
    cityId: '@guid',
    'imKeyBorardIds|1-20': ['@string(5,50)'],
    schoolName: '@ctitle(5,10)',
  }
}
function ShangChuanALiYunQianMingXiangYing() {
  return {
    accessKey: '@string(5,50)',
    bucketName: '@ctitle(5,10)',
    dir: '@string(5,50)',
    endpoint: '@string(5,50)',
    sign: '@string(5,50)',
  }
}
function MaiShaoBingXiaoXiTuiSongimXiaoXi() {
  return {
    atBpKeyBorardIds: '@string(5,50)',
    'bizIdList|1-20': ['@string(5,50)'],
    bizSource: /BASE_PLATFORM_SENDER|BIGDATA|CRM|FLEX_WORK|HR_OA_SCHOOL|OA/,
    bpSenderId: '@guid',
    content: '@string(5,50)',
    contentType:
      /AUDIO|FILE|IMG|LINK|STRUCTUAL|TEXT|TIP|TIP_DIFF_TENANT_FRIEND|TIP_FRIEND_BLACK|TIP_FRIEND_REJECT_MSG|TIP_KICKOUT_GROUP_PART|TIP_LAUNCH_GROUP_PART|TIP_MODIFY_GROUP_NAME_PART|TIP_NEW_ADD_SELF_GROUP_PART|TIP_OPERATE_CHAT_STRANGER_CNT|TIP_OPERATE_CHAT_STRANGER_MSG_CNT|TIP_USER_UNNORMAL|VIDEO|VOICE/,
    footer: FooterWrapper(),
    'imBirdIdList|1-20': ['@string(5,50)'],
    'receiverBpKeyBorardIdList|1-20': ['@string(5,50)'],
    title: '@ctitle(5,10)',
    type: '@string(5,50)',
  }
}
function ErWeiMa() {
  return {
    id: '@guid',
    type: '@string(5,50)',
  }
}
function XiaoDaoXiaoXi() {
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
    total: () => {
      return +this.size * 10 || 100
    },
    keyBorardName: '@ctitle(5,10)',
  }
}
function XiaoDaoXiaoXiYongDao() {
  return {
    channel: '@string(5,50)',
    'birdIdList|1-20': ['@string(5,50)'],
    imKeyBorardId: '@guid',
    limit: '@integer(3,1000)',
    selectSum: '@boolean',
    skipCount: '@integer(3,1000)',
  }
}
function XiaoDaoXiaoXiYongDaoXiangYing() {
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
    msgApplyType: /FORWARD|REPLY|/,
    msgContent: '@string(5,50)',
    msgContentType: '@string(5,50)',
    msgFileUrl: '@image(200x100, @color, @color)',
    msgId: '@guid',
    msgSenderName: '@ctitle(5,10)',
    msgSequence: '@string(5,50)',
    msgTime: '@datetime',
    privateBirdId: '@guid',
    total: () => {
      return +this.size * 10 || 100
    },
    unreadCount: '@integer(3,1000)',
    unreadSum: '@integer(3,1000)',
    keyBorardid: '@guid',
  }
}
function XiuGaiBeiZhuModifyRemarkBirdReq() {
  return {
    birdRemark: '@string(5,50)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function XiuGaiBeiZhuModifyfriendRemarkReq() {
  return {
    friendRemark: '@string(5,50)',
    imFriendId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function XiuGaiTongQianCaoTouXiang() {
  return {
    avatar: '@image(200x100, @color, @color)',
  }
}
function XiuGaiNiaoWoTaiYangHuaRuCanModifyBirdNameReq() {
  return {
    birdName: '@ctitle(5,10)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function RuNiaoWoQingQiuAddBirdReq() {
  return {
    applyId: '@guid',
    imBirdId: '@guid',
    inviterId: '@guid',
    type: '@integer(3,1000)',
  }
}
function NaBuMaiShaoBingNiaoWoBaoCunChuCan() {
  return {
    'errorKeyBorardIds|1-20': ['@string(5,50)'],
    birdId: '@guid',
    ownerBpKeyBorardId: '@guid',
  }
}
function NaBuXiaoXiSouSuoQingQiu() {
  return {
    bpKeyBorardId: '@guid',
    birdId: '@guid',
    keywords: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    type: '@string(5,50)',
  }
}
function NaBuNiaoWoBaoCunRuCan() {
  return {
    avatarUrl: '@image(200x100, @color, @color)',
    bizId: '@guid',
    bizSource: /BASE_PLATFORM_SENDER|BIGDATA|CRM|FLEX_WORK|HR_OA_SCHOOL|OA/,
    desc: '@string(5,50)',
    'memberBpKeyBorardIdList|1-20': ['@string(5,50)'],
    name: '@ctitle(5,10)',
    ownerBpKeyBorardId: '@guid',
  }
}
function NaBuNiaoWoBaoCunNiaoWoChengYuanRuCan() {
  return {
    bizId: '@guid',
    bizSource: /BASE_PLATFORM_SENDER|BIGDATA|CRM|FLEX_WORK|HR_OA_SCHOOL|OA/,
    'memberBpKeyBorardIdList|1-20': ['@string(5,50)'],
    ownerBpKeyBorardId: '@guid',
  }
}
function ChuangJianXiaoDaoXiaoXi() {
  return {
    channel: '@string(5,50)',
    checkCache: '@boolean',
    'birdIdList|1-20': ['@string(5,50)'],
    privateBirdId: '@guid',
    'receiverIdList|1-20': ['@string(5,50)'],
    updateBirdHiall: '@boolean',
  }
}
function LiShiXiaoXiMessageHistoryReq() {
  return {
    imBirdId: '@guid',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    sequence: '@string(5,50)',
    size: '20',
  }
}
function WaiBuZhiXieChangChuCan() {
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
    licenseUnifiedUrl: '@image(200x100, @color, @color)',
    location: '@string(5,50)',
    mark: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
    serialNum: '@string(5,50)',
    gratefulId: '@guid',
    xmail: '@string(5,50)',
  }
}
function WaiBuZhiXieChangSouSuoRuCan() {
  return {
    doorName: '@ctitle(5,10)',
    flag: '@boolean',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function WaiBuShuiDaoXiangYing() {
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
function WaiBuShuiDaoSouSuoRuCan() {
  return {
    page: '@integer(3,1000)',
    size: '20',
    gratefulId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
function HaoYouFriendshipReq() {
  return {
    imFriendId: '@guid',
    imKeyBorardId: '@guid',
    isNotice: '@boolean',
    isTop: '@boolean',
  }
}
function HaoYouYongDaoChuXingFriendshipQueryReq() {
  return {
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function WenJianPiLiangBaoCunXiangYingShiTi() {
  return {
    'resps|1-20': [FileResp()],
  }
}
function XiaoXiack() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function XiaoXiNaBuXiangYingShiTi() {
  return {
    applyType: /FORWARD|REPLY|/,
    atKeyBorardIds: '@string(5,50)',
    atKeyBorardNames: '@ctitle(5,10)',
    bpKeyBorardId: '@guid',
    'cardMessageList|1-20': [ZhuanFaXiaoXiDuiXiang()],
    channelFile: FileResp(),
    content: '@string(5,50)',
    contentType: '@string(5,50)',
    created: '@datetime',
    fileId: '@guid',
    fileName: '@ctitle(5,10)',
    fileSize: '@string(5,50)',
    fileText: '@string(5,50)',
    fileTime: '@datetime',
    fileType: '@string(5,50)',
    fileUrl: '@image(200x100, @color, @color)',
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
function XiaoXiSaoXue() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    'messageIdList|1-20': ['@string(5,50)'],
  }
}
function XiaoXiDuiXiang() {
  return {
    applyType: /FORWARD|REPLY|/,
    atKeyBorardIds: '@string(5,50)',
    atKeyBorardNames: '@ctitle(5,10)',
    'cardMessageList|1-20': [ZhuanFaXiaoXiDuiXiang()],
    channelFile: FileResp(),
    content: '@string(5,50)',
    contentType: '@string(5,50)',
    created: '@datetime',
    fileId: '@guid',
    fileName: '@ctitle(5,10)',
    fileSize: '@string(5,50)',
    fileText: '@string(5,50)',
    fileTime: '@datetime',
    fileType: '@string(5,50)',
    fileUrl: '@image(200x100, @color, @color)',
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
function XiaoXiGunDongQingQiuTi() {
  return {
    chooseCurrentMessage: '@boolean',
    downSize: '@integer(3,1000)',
    birdId: '@guid',
    messageId: '@guid',
    type: '@string(5,50)',
    upSize: '@integer(3,1000)',
  }
}
function XiaoXiXiangQingMessageDetailReq() {
  return {
    messageId: '@guid',
  }
}
function TianJiaHaoYouAddFriendReq() {
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
function TianJiaWoWeiHaoYouCongMingFangShi() {
  return {
    imKeyBorardId: '@guid',
    'requestChannels|1-20': ['@string(5,50)'],
  }
}
function QingKongXiaoXiRuCan() {
  return {
    imFriendId: '@guid',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function QingKongXiaoXiJiLu() {
  return {
    channel: '@string(5,50)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function BanBen() {
  return {
    appType: '@string(5,50)',
    fileSize: '@string(5,50)',
    isForceUpdate: '@boolean',
    versionDesc: '@string(5,50)',
    versionName: '@ctitle(5,10)',
    versionNum: '@string(5,50)',
    versionUrl: '@image(200x100, @color, @color)',
  }
}
function BanBen0() {
  return {
    appType: '@string(5,50)',
    fileSize: '@string(5,50)',
    isForceUpdate: '@boolean',
    versionDesc: '@string(5,50)',
    versionName: '@ctitle(5,10)',
    versionNum: '@string(5,50)',
    versionUrl: '@image(200x100, @color, @color)',
  }
}
function ShengChengWenJianfileId() {
  return {
    bucketName: '@ctitle(5,10)',
    dir: '@string(5,50)',
    fileSize: '@string(5,50)',
    fileTime: '@datetime',
    height: '@integer(3,1000)',
    originalFileName: '@ctitle(5,10)',
    ossFileName: '@ctitle(5,10)',
    type: /AUDIO|CARD_MSG|FILE|GROUP_AVATAR|IMG|MSG|TRANS_MSG|USER_AVATAR|VIDEO|VOICE/,
    width: '@integer(3,1000)',
  }
}
function TongQianCaoSuoYouLvKeKeyBorardListAllGratefulReq() {
  return {
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keyword: '@string(5,50)',
  }
}
function DengLuXiangYingShiTi() {
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
function LvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi() {
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
function QianMingWenJianShangChuanQingQiuRuCanShiTi() {
  return {
    'reqs|1-20': [ShengChengWenJianfileId()],
  }
}
function QianMingWenJianXiangYing() {
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
function NiaoWoBaoCunRuCan() {
  return {
    desc: '@string(5,50)',
    'memberIdList|1-20': ['@string(5,50)'],
    name: '@ctitle(5,10)',
    ownerId: '@guid',
  }
}
function NiaoWoXinXiBirdDetailReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    needHiallMsg: '@boolean',
  }
}
function NiaoWoFenYeBirdPageListReq() {
  return {
    birdAttrE: /CLASSMATE|COMPANY|DEPT|FELLOW|INDUSTRY|INTEREST|LEISURE|PROJECT|SCHOOLMATE/,
    birdTypeE: /INNER|OUTER/,
    imKeyBorardId: '@guid',
    keyword: '@string(5,50)',
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function NiaoWoDuiXiangBirdDetailResp() {
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
    msgApplyType: /FORWARD|REPLY|/,
    msgContent: '@string(5,50)',
    msgContentType: '@string(5,50)',
    msgFileUrl: '@image(200x100, @color, @color)',
    msgId: '@guid',
    msgSenderName: '@ctitle(5,10)',
    msgSequence: '@string(5,50)',
    msgTime: '@datetime',
    name: '@ctitle(5,10)',
    notice: '@string(5,50)',
    ownerId: '@guid',
    status: '@string(5,50)',
    gratefulId: '@guid',
    total: () => {
      return +this.size * 10 || 100
    },
    unreadCount: '@integer(3,1000)',
  }
}
function NiaoWoDuiXiangBirdResp() {
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
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function NiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
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
function NiaoWoChengYuanFenYeBirdMemberPageReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isDeleteMember: '@boolean',
    isFilterCurrentKeyBorard: '@boolean',
    keyword: '@string(5,50)',
    memberType: '@string(5,50)',
    needFriendRelation: '@boolean',
    page: '@integer(3,1000)',
    size: '20',
    sortE: /GBK_NAME_ASC|GBK_NAME_DESC|TYPE_CREATED_ASC/,
  }
}
function NiaoWoChengYuanYongDaoChuXingRuCan() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isDeleteMember: '@boolean',
    keyword: '@string(5,50)',
    memberType: '@string(5,50)',
    sortE: /GBK_NAME_ASC|GBK_NAME_DESC|TYPE_CREATED_ASC/,
  }
}
function NiaoWoChengYuanSaoXueBirdMemberDelReq() {
  return {
    imBirdId: '@guid',
    'imMemberIdList|1-20': ['@string(5,50)'],
    imKeyBorardId: '@guid',
  }
}
function NiaoWoChengYuanJiaShiBirdMemberSaveReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    'imKeyBorardIdList|1-20': ['@string(5,50)'],
  }
}
function NiaoWoWenJianShangChuanXiangYingShiTi() {
  return {
    'files|1-20': [FileDTO()],
    imBirdId: '@guid',
  }
}
function NiaoWoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq() {
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
function HuoQubucket() {
  return {
    fileTypeE: /AUDIO|CARD_MSG|FILE|GROUP_AVATAR|IMG|MSG|TRANS_MSG|USER_AVATAR|VIDEO|VOICE/,
    sceneE: /IM/,
  }
}
function HuoQuLvKeTongQianCaoDuiYingimTongQianCaoXinXiRuCan() {
  return {
    'bpKeyBorardIds|1-20': ['@string(5,50)'],
    channel: '@string(5,50)',
    currentBpKeyBorardId: '@guid',
    needRelation: '@boolean',
    needGrateful: '@boolean',
  }
}
function HuoQuALiYunQianMingRuCan() {
  return {
    fileTypeE: /AUDIO|CARD_MSG|FILE|GROUP_AVATAR|IMG|MSG|TRANS_MSG|USER_AVATAR|VIDEO|VOICE/,
    signContent: '@string(5,50)',
  }
}
function SheZhiMoRenZhiXieChang() {
  return {
    kind: '@string(5,50)',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
  }
}
function YuYinShiBieFanHui() {
  return {
    content: '@string(5,50)',
    fileId: '@guid',
    fileResp: FileResp(),
    messageId: '@guid',
  }
}
function QingQiuHuiFuXiaoXiYongDaoReqMsgDetailResp() {
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
function QingQiuXiaoXiYongDaoRequestPageListReq() {
  return {
    imKeyBorardId: '@guid',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    type: '@integer(3,1000)',
  }
}
function QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq() {
  return {
    imKeyBorardId: '@guid',
    requestId: '@guid',
    'requestMsgIdList|1-20': ['@string(5,50)'],
  }
}
function ZhuanFaXiaoXiDuiXiang() {
  return {
    applyType: /FORWARD|REPLY|/,
    channelFile: FileResp(),
    content: '@string(5,50)',
    contentType: '@string(5,50)',
    created: '@datetime',
    fileId: '@guid',
    fileName: '@ctitle(5,10)',
    fileSize: '@string(5,50)',
    fileText: '@string(5,50)',
    fileTime: '@datetime',
    fileType: '@string(5,50)',
    fileUrl: '@image(200x100, @color, @color)',
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
function TongGuoJuJueApproveReq() {
  return {
    imKeyBorardId: '@guid',
    isNotice: '@boolean',
    permitted: '@boolean',
    remark: '@string(5,50)',
    requestId: '@guid',
  }
}
function DaDuNanXinXiWhiteResp() {
  return {
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
    imBirdId: '@guid',
  }
}
function DaDuNanYongDaoWhiteListReq() {
  return {
    getImBirdId: '@guid',
    parentId: '@guid',
    gratefulId: '@guid',
  }
}
function DaDuNanTongQianCaoFenYeKeyBorardPageReq() {
  return {
    whiteId: '@guid',
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    isForward: '@boolean',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    gratefulId: '@guid',
  }
}
function DaDuNanTongQianCaoYongDaoWhiteListReq() {
  return {
    getImBirdId: '@guid',
    gratefulId: '@guid',
  }
}
function DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp() {
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
function YanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    applyAvatar: '@image(200x100, @color, @color)',
    applyAvatarUrl: '@image(200x100, @color, @color)',
    applyId: '@guid',
    applyName: '@ctitle(5,10)',
    avatar: '@image(200x100, @color, @color)',
    content: '@string(5,50)',
    inviterAvatar: '@image(200x100, @color, @color)',
    inviterAvatarUrl: '@image(200x100, @color, @color)',
    inviterId: '@guid',
    inviterName: '@ctitle(5,10)',
    receiverAvatar: '@image(200x100, @color, @color)',
    receiverAvatarUrl: '@image(200x100, @color, @color)',
    receiverId: '@guid',
    receiverName: '@ctitle(5,10)',
    requestId: '@guid',
    status: '@integer(3,1000)',
    gratefulName: '@ctitle(5,10)',
    type: '@integer(3,1000)',
    keyBorardAvatar: '@image(200x100, @color, @color)',
    keyBorardAvatarUrl: '@image(200x100, @color, @color)',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
function YanChangChunHuaXiaoXiXiangQingRequestDetailResp() {
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
    total: () => {
      return +this.size * 10 || 100
    },
    type: '@integer(3,1000)',
  }
}
module.exports = {
  AddBirdResp,
  GreenBookGratefulInfoResp,
  ApiResponse,
  ApiResponseAddBirdResp,
  ApiResponseAtListAndAckSequenceResp,
  ApiResponseComPageCommonSearchResp,
  ApiResponseComPageContactResp,
  ApiResponseComPageFriendshipResp,
  ApiResponseComPageSearchBeforeAddFriendResp,
  ApiResponseComPageKeyBorardBlackResp,
  ApiResponseComPageWaiBuZhiXieChangChuCan,
  ApiResponseComPageWaiBuShuiDaoXiangYing,
  ApiResponseComPageXiaoXiNaBuXiangYingShiTi,
  ApiResponseComPageXiaoXiDuiXiang,
  ApiResponseComPageNiaoWoDuiXiangBirdResp,
  ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp,
  ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp,
  ApiResponseFriendshipDetailResp,
  ApiResponseFriendshipKeyBorardDetailResp,
  ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing,
  ApiResponseListGreenBookGratefulInfoResp,
  ApiResponseListForwardListResp,
  ApiResponseListFriendshipResp,
  ApiResponseListBirdF2fKeyBorardListResp,
  ApiResponseListPhoneFriendshipResp,
  ApiResponseListSwitchKeyBorardListResp,
  ApiResponseListGratefulInfoRespLvKeXinXi,
  ApiResponseListUnreadResp,
  ApiResponseListKeyBorardListAllGratefulResp,
  ApiResponseListXiaoXiDuiXiang,
  ApiResponseListBanBen,
  ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseListDaDuNanXinXiWhiteResp,
  ApiResponseMaplongLvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi,
  ApiResponseMapstringSearchMapResp,
  ApiResponseMemberBirdStatusResp,
  ApiResponsePutFileResp,
  ApiResponseQueryLastMessageResp,
  ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing,
  ApiResponseKeyBorardBindResp,
  ApiResponseKeyBorardRespDuiXiang,
  ApiResponseVoid,
  ApiResponseWaterFallPageKeyBorardBlackResp,
  ApiResponsealiyunSTSJianQuanFanHuiZhi,
  ApiResponseboolean,
  ApiResponselong,
  ApiResponseobject,
  ApiResponsestring,
  ApiResponseShangChuanALiYunQianMingXiangYing,
  ApiResponseXiaoDaoXiaoXi,
  ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan,
  ApiResponseWenJianPiLiangBaoCunXiangYingShiTi,
  ApiResponseXiaoXiDuiXiang,
  ApiResponseBanBen,
  ApiResponseDengLuXiangYingShiTi,
  ApiResponseQianMingWenJianXiangYing,
  ApiResponseNiaoWoDuiXiangBirdDetailResp,
  ApiResponseNiaoWoDuiXiangBirdResp,
  ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi,
  ApiResponseYuYinShiBieFanHui,
  ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp,
  AtListAndAckSequenceResp,
  BasePageReq,
  ComLoginReq,
  ComPageCommonSearchResp,
  ComPageContactResp,
  ComPageFriendshipResp,
  ComPageSearchBeforeAddFriendResp,
  ComPageKeyBorardBlackResp,
  ComPageWaiBuZhiXieChangChuCan,
  ComPageWaiBuShuiDaoXiangYing,
  ComPageXiaoXiNaBuXiangYingShiTi,
  ComPageXiaoXiDuiXiang,
  ComPageNiaoWoDuiXiangBirdResp,
  ComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  ComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp,
  ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp,
  CommonSearchReq,
  CommonSearchResp,
  ContactReq,
  ContactResp,
  EnterBirdReq,
  FileDTO,
  FileResp,
  FooterDetailDTO,
  FooterWrapper,
  ForwardListReq,
  ForwardListResp,
  FriendshipDetailReq,
  FriendshipDetailResp,
  FriendshipResp,
  FriendshipKeyBorardDetailResp,
  GetUnreadPageReq,
  BirdF2fKeyBorardListResp,
  BirdFileUploadReq,
  BirdSetNoticeAndTopReq,
  BirdTransferReq,
  InnerBirdDissolveReq,
  InnerBirdMemberBirdListReq,
  InviteToBirdReq,
  InviteToBirdRespYaoQingRuNiaoWoXiangYing,
  ListFriendshipQueryReq,
  MemberBirdStatusResp,
  MessageAtResp,
  MessagePositionReqq,
  MessageProcessReq,
  MsgSearchReq,
  PhoneFriendshipResp,
  PhoneListReq,
  PutFileResp,
  QueryLastMessageResp,
  RemoteAutoBirdReq,
  RequestMsgReqDuiXiang,
  SaveRandomReq,
  SearchBeforeAddFriendReq,
  SearchBeforeAddFriendResp,
  SearchMapResp,
  SearchReq,
  SearchResp,
  SetRcvMsgReq,
  SetShowPhoneReq,
  SwitchKeyBorardListResp,
  SwitchKeyBorardReq,
  GratefulInfoRespLvKeXinXi,
  UnReadComPageXiaoDaoXiaoXiYongDaoXiangYing,
  UnreadResp,
  UploadFileReq,
  KeyBorardBindReq,
  KeyBorardBindResp,
  KeyBorardBlackResp,
  KeyBorardCancelReq,
  KeyBorardInformSaveReq,
  KeyBorardListAllGratefulResp,
  KeyBorardRespDuiXiang,
  WaterFallPageKeyBorardBlackResp,
  aliyunSTSJianQuanFanHuiZhi,
  mockJiaRenRuNiaoWoRuCan,
  ShangChuanALiYunQianMingXiangYing,
  MaiShaoBingXiaoXiTuiSongimXiaoXi,
  ErWeiMa,
  XiaoDaoXiaoXi,
  XiaoDaoXiaoXiYongDao,
  XiaoDaoXiaoXiYongDaoXiangYing,
  XiuGaiBeiZhuModifyRemarkBirdReq,
  XiuGaiBeiZhuModifyfriendRemarkReq,
  XiuGaiTongQianCaoTouXiang,
  XiuGaiNiaoWoTaiYangHuaRuCanModifyBirdNameReq,
  RuNiaoWoQingQiuAddBirdReq,
  NaBuMaiShaoBingNiaoWoBaoCunChuCan,
  NaBuXiaoXiSouSuoQingQiu,
  NaBuNiaoWoBaoCunRuCan,
  NaBuNiaoWoBaoCunNiaoWoChengYuanRuCan,
  ChuangJianXiaoDaoXiaoXi,
  LiShiXiaoXiMessageHistoryReq,
  WaiBuZhiXieChangChuCan,
  WaiBuZhiXieChangSouSuoRuCan,
  WaiBuShuiDaoXiangYing,
  WaiBuShuiDaoSouSuoRuCan,
  HaoYouFriendshipReq,
  HaoYouYongDaoChuXingFriendshipQueryReq,
  WenJianPiLiangBaoCunXiangYingShiTi,
  XiaoXiack,
  XiaoXiNaBuXiangYingShiTi,
  XiaoXiSaoXue,
  XiaoXiDuiXiang,
  XiaoXiGunDongQingQiuTi,
  XiaoXiXiangQingMessageDetailReq,
  TianJiaHaoYouAddFriendReq,
  TianJiaWoWeiHaoYouCongMingFangShi,
  QingKongXiaoXiRuCan,
  QingKongXiaoXiJiLu,
  BanBen,
  BanBen0,
  ShengChengWenJianfileId,
  TongQianCaoSuoYouLvKeKeyBorardListAllGratefulReq,
  DengLuXiangYingShiTi,
  LvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi,
  QianMingWenJianShangChuanQingQiuRuCanShiTi,
  QianMingWenJianXiangYing,
  NiaoWoBaoCunRuCan,
  NiaoWoXinXiBirdDetailReq,
  NiaoWoFenYeBirdPageListReq,
  NiaoWoDuiXiangBirdDetailResp,
  NiaoWoDuiXiangBirdResp,
  NiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  NiaoWoChengYuanFenYeBirdMemberPageReq,
  NiaoWoChengYuanYongDaoChuXingRuCan,
  NiaoWoChengYuanSaoXueBirdMemberDelReq,
  NiaoWoChengYuanJiaShiBirdMemberSaveReq,
  NiaoWoWenJianShangChuanXiangYingShiTi,
  NiaoWoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq,
  HuoQubucket,
  HuoQuLvKeTongQianCaoDuiYingimTongQianCaoXinXiRuCan,
  HuoQuALiYunQianMingRuCan,
  SheZhiMoRenZhiXieChang,
  YuYinShiBieFanHui,
  QingQiuHuiFuXiaoXiYongDaoReqMsgDetailResp,
  QingQiuXiaoXiYongDaoRequestPageListReq,
  QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq,
  ZhuanFaXiaoXiDuiXiang,
  TongGuoJuJueApproveReq,
  DaDuNanXinXiWhiteResp,
  DaDuNanYongDaoWhiteListReq,
  DaDuNanTongQianCaoFenYeKeyBorardPageReq,
  DaDuNanTongQianCaoYongDaoWhiteListReq,
  DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp,
  YanChangChunHuaXiaoXiFenYeRequestPageListResp,
  YanChangChunHuaXiaoXiXiangQingRequestDetailResp,
}
