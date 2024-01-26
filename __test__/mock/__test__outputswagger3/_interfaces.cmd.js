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
function ApiResponseComPageDoorMainInfoResp() {
  return {
    code: 200,
    data: ComPageDoorMainInfoResp(),
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
function ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing() {
  return {
    code: 200,
    data: ComPageXiaoDaoXiaoXiQiuQianXiangYing(),
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
function ApiResponseComPageBuLuoDuiXiangBirdResp() {
  return {
    code: 200,
    data: ComPageBuLuoDuiXiangBirdResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    data: ComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp() {
  return {
    code: 200,
    data: ComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp(),
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
function ApiResponseListWhiteNoteResp() {
  return {
    code: 200,
    'data|1-20': [WhiteNoteResp()],
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
function ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    'data|1-20': [BuLuoChengYuanXinXiDuiXiangBirdMemberResp()],
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
function ApiResponseKeyBorardDetailResp() {
  return {
    code: 200,
    data: KeyBorardDetailResp(),
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
function ApiResponseBuLuoDuiXiangBirdDetailResp() {
  return {
    code: 200,
    data: BuLuoDuiXiangBirdDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseBuLuoDuiXiangBirdResp() {
  return {
    code: 200,
    data: BuLuoDuiXiangBirdResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    data: BuLuoChengYuanXinXiDuiXiangBirdMemberResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseYaoQingRuBuLuoXiangYing() {
  return {
    code: 200,
    data: YaoQingRuBuLuoXiangYing(),
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
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    loginModeEnum:
      /CORP_WEIXIN|DINGDING|MOBILE_CODE_FAST|ONE_CLICK|PASSWORD|TOKEN|VERIFICATION_CODE|WECHAT|WECHAT_FAST/,
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
function ComPageDoorMainInfoResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DoorMainInfoResp()],
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
function ComPageXiaoDaoXiaoXiQiuQianXiangYing() {
  return {
    current: '@string(5,50)',
    'records|1-20': [XiaoDaoXiaoXiQiuQianXiangYing()],
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
function ComPageBuLuoDuiXiangBirdResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [BuLuoDuiXiangBirdResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [BuLuoChengYuanXinXiDuiXiangBirdMemberResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp()],
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
    excludeMemberImBirdId: '@guid',
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
    remark: '@string(5,50)',
    status: '@string(5,50)',
    gratefulName: '@ctitle(5,10)',
    total: () => {
      return +this.size * 10 || 100
    },
    keyBorardStatus: '@string(5,50)',
  }
}
function WhiteNoteResp() {
  return {
    desktopCount: '@integer(3,1000)',
    info: WhiteResp(),
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
function DesktopAllInfoResp() {
  return {
    'whiteRespList|1-20': [ExtWhiteResp()],
    desktopResp: DesktopResp(),
    'jobRespList|1-20': [JobResp()],
    'postRespList|1-20': [PostResp()],
    'pinkRespList|1-20': [PinkResq()],
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
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
function EnterBirdReq() {
  return {
    f2fBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function DoorMainInfoResp() {
  return {
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    contactNumber: '@string(5,50)',
    contactor: '@string(5,50)',
    created: '@datetime',
    doorId: '@guid',
    legalCat: '@string(5,50)',
    legalCatPhone: '@integer(13100000000,18999999999)',
    licenseUnifiedCode: '@string(5,50)',
    location: '@string(5,50)',
    name: '@ctitle(5,10)',
    gratefulId: '@guid',
    keyBorardId: '@guid',
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
    modified: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    phone: '@integer(13100000000,18999999999)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    status: '@string(5,50)',
    gratefulId: '@guid',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
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
  }
}
function FriendshipDetailResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    childCompany: '@string(5,50)',
    company: '@string(5,50)',
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
    whitePath: '@string(5,50)',
    email: '@email',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isFriendship: '@boolean',
    isNotice: '@boolean',
    isPayAttention: '@boolean',
    isSameSubsidiary: '@boolean',
    isSameGrateful: '@boolean',
    job: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    pinyin: '@string(5,50)',
    post: '@string(5,50)',
    sex: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    title: '@ctitle(5,10)',
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
function GetUnreadPageReq() {
  return {
    imKeyBorardId: '@guid',
    'requestIdList|1-20': ['@string(5,50)'],
  }
}
function BirdF2fKeyBorardListResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    avatarUrl: '@image(200x100, @color, @color)',
    f2fBirdId: '@guid',
    imKeyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
function BirdTransferReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
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
function MemberBirdStatusResp() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
  }
}
function MessageSyncDTO() {
  return {
    applyType: /FORWARD|REPLY|/,
    'cardMessageIdList|1-20': ['@string(5,50)'],
    channel: '@string(5,50)',
    clientMessageId: '@guid',
    content: '@string(5,50)',
    contentType: '@string(5,50)',
    'excludeKeyBorardIds|1-20': ['@string(5,50)'],
    fileId: '@guid',
    forwardMessageId: '@guid',
    'birdIdList|1-20': ['@string(5,50)'],
    'receiverList|1-20': ['@string(5,50)'],
    sender: '@string(5,50)',
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
function PutFileResp() {
  return {
    happyId: '@guid',
    fileId: '@guid',
    originalFileName: '@ctitle(5,10)',
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
function RequestMsgReqDuiXiang() {
  return {
    content: '@string(5,50)',
    receiverId: '@guid',
    requestId: '@guid',
    senderId: '@guid',
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
    pinkName: '@ctitle(5,10)',
    pinkSort: '@integer(3,1000)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
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
function UnreadResp() {
  return {
    isRead: '@boolean',
    requestId: '@guid',
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
function KeyBorardCancelReq() {
  return {
    imKeyBorardId: '@guid',
    smsCode: '@string(5,50)',
  }
}
function KeyBorardDetailResp() {
  return {
    hasSameGrateful: '@boolean',
    imBirdId: '@guid',
    isAttention: '@boolean',
    isFrinedship: '@boolean',
    isNotice: '@boolean',
    isPrivate: '@boolean',
    isTop: '@boolean',
    remark: '@string(5,50)',
    showRemark: '@boolean',
  }
}
function KeyBorardListAllGratefulResp() {
  return {
    hasMore: '@boolean',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
    'keyBorardList|1-20': [DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp()],
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
    isNotice: '@boolean',
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
function KeyBorardGratefulReq() {
  return {
    stationKeyBorardId: '@guid',
    gratefulId: '@guid',
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
    receiver: '@string(5,50)',
    total: () => {
      return +this.size * 10 || 100
    },
    keyBorardName: '@ctitle(5,10)',
  }
}
function XiaoDaoXiaoXiQiuQian() {
  return {
    channel: '@string(5,50)',
    'birdIdList|1-20': ['@string(5,50)'],
    imKeyBorardId: '@guid',
    limit: '@integer(3,1000)',
    selectSum: '@boolean',
    skipCount: '@integer(3,1000)',
  }
}
function XiaoDaoXiaoXiQiuQianXiangYing() {
  return {
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
    isAttention: '@boolean',
    isFriendship: '@boolean',
    isNotice: '@boolean',
    isSameSubsidiary: '@boolean',
    isSameGrateful: '@boolean',
    isTop: '@boolean',
    modified: '@string(5,50)',
    msgApplyType: /FORWARD|REPLY|/,
    msgContent: '@string(5,50)',
    msgContentType: '@string(5,50)',
    msgFileUrl: '@image(200x100, @color, @color)',
    msgId: '@guid',
    msgSenderName: '@ctitle(5,10)',
    msgSequence: '@string(5,50)',
    msgTime: '@datetime',
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
function XiuGaiBuLuoShuiLianRuCanModifyBirdNameReq() {
  return {
    birdName: '@ctitle(5,10)',
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function RuBuLuoQingQiuAddBirdReq() {
  return {
    applyId: '@guid',
    imBirdId: '@guid',
    inviterId: '@guid',
    type: '@integer(3,1000)',
  }
}
function ChuangJianXiaoDaoXiaoXi() {
  return {
    channel: '@string(5,50)',
    checkCache: '@boolean',
    'birdIdList|1-20': ['@string(5,50)'],
    'receiverIdList|1-20': ['@string(5,50)'],
    updateBirdHiall: '@boolean',
  }
}
function ChuangJianGengXinDuiXiangBirdSaveReq() {
  return {
    desc: '@string(5,50)',
    'memberIdList|1-20': ['@string(5,50)'],
    name: '@ctitle(5,10)',
    ownerId: '@guid',
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
function HaoYouFriendshipReq() {
  return {
    imFriendId: '@guid',
    imKeyBorardId: '@guid',
    isNotice: '@boolean',
    isTop: '@boolean',
  }
}
function HaoYouQiuQianLvYouFriendshipQueryReq() {
  return {
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function XiaoXiack() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
  }
}
function XiaoXiDaoLaJi() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    'messageIdList|1-20': ['@string(5,50)'],
  }
}
function XiaoXiDuiXiang() {
  return {
    applyType: /FORWARD|REPLY|/,
    'cardMessageList|1-20': [ZhuanFaXiaoXiDuiXiang()],
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
    birdId: '@guid',
    id: '@guid',
    nickName: '@ctitle(5,10)',
    senderAvatar: '@image(200x100, @color, @color)',
    senderId: '@guid',
    senderName: '@ctitle(5,10)',
    sequence: '@string(5,50)',
  }
}
function XiaoXiSouSuoShiTi() {
  return {
    birdId: '@guid',
    keywords: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    type: '@string(5,50)',
    keyBorardId: '@guid',
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
function TianJiaWoWeiHaoYouHaoKanFangShi() {
  return {
    imKeyBorardId: '@guid',
    'requestChannels|1-20': ['@string(5,50)'],
  }
}
function QingKongXiaoXiRuCan() {
  return {
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
    isForceUpdate: '@boolean',
    versionDesc: '@string(5,50)',
    versionName: '@ctitle(5,10)',
    versionNum: '@string(5,50)',
    versionUrl: '@image(200x100, @color, @color)',
  }
}
function TongQianCaoSuoYouFangDongKeyBorardListAllGratefulReq() {
  return {
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    keyword: '@string(5,50)',
  }
}
function DengLuXiangYingShiTi() {
  return {
    channel: '@string(5,50)',
    code: 200,
    imKeyBorardId: '@guid',
    newKeyBorard: '@boolean',
    satoken: '@string(5,50)',
    setPassWord: '@boolean',
    token: '@string(5,50)',
    tokenTimeOut: '@datetime',
    keyBorardId: '@guid',
  }
}
function FangDongXinXi() {
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
function BuLuoXinXiBirdDetailReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isNotice: '@boolean',
    isTop: '@boolean',
  }
}
function BuLuoFenYeBirdPageListReq() {
  return {
    imKeyBorardId: '@guid',
    keyword: '@string(5,50)',
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function BuLuoDuiXiangBirdDetailResp() {
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
    isAtAll: '@boolean',
    isModifyName: '@boolean',
    isOrdinaryInvent: '@boolean',
    isPrivate: '@boolean',
    name: '@ctitle(5,10)',
    notice: '@string(5,50)',
    ownerId: '@guid',
    status: '@string(5,50)',
    gratefulId: '@guid',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function BuLuoDuiXiangBirdResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
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
function BuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isNotice: '@boolean',
    isTop: '@boolean',
    memberAvatar: '@image(200x100, @color, @color)',
    memberName: '@ctitle(5,10)',
    memberPhone: '@integer(13100000000,18999999999)',
    memberRemark: '@string(5,50)',
    memberGratefulName: '@ctitle(5,10)',
    memberType: '@string(5,50)',
  }
}
function BuLuoChengYuanFenYeBirdMemberPageReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    isDeleteMember: '@boolean',
    keyword: '@string(5,50)',
    memberType: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function BuLuoChengYuanDaoLaJiBirdMemberDelReq() {
  return {
    imBirdId: '@guid',
    'imMemberIdList|1-20': ['@string(5,50)'],
    imKeyBorardId: '@guid',
  }
}
function BuLuoChengYuanJiaShiBirdMemberSaveReq() {
  return {
    imBirdId: '@guid',
    imKeyBorardId: '@guid',
    'imKeyBorardIdList|1-20': ['@string(5,50)'],
  }
}
function BuLuoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq() {
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
function SheZhiMoRenZhiYiChang() {
  return {
    kind: '@string(5,50)',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
  }
}
function QingQiuHuiFuXiaoXiQiuQianReqMsgDetailResp() {
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
function QingQiuXiaoXiQiuQianRequestPageListReq() {
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
function YaoQingRuBuLuoXiangYing() {
  return {
    'checkKeyBorardIds|1-20': ['@string(5,50)'],
    'checkKeyBorards|1-20': [KeyBorardRespDuiXiang()],
    inviteMsg: '@string(5,50)',
  }
}
function DaDuNanXinXiWhiteResp() {
  return {
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
    imBirdId: '@guid',
  }
}
function DaDuNanQiuQianWhiteListReq() {
  return {
    getImBirdId: '@guid',
    parentId: '@guid',
    gratefulId: '@guid',
  }
}
function DaDuNanLvYouRuCan() {
  return {
    whiteId: '@guid',
    gratefulId: '@guid',
  }
}
function DaDuNanTongQianCaoFenYeKeyBorardPageReq() {
  return {
    whiteId: '@guid',
    excludeMemberImBirdId: '@guid',
    imKeyBorardId: '@guid',
    keyword: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    gratefulId: '@guid',
  }
}
function DaDuNanTongQianCaoQiuQianWhiteListReq() {
  return {
    getImBirdId: '@guid',
    gratefulId: '@guid',
  }
}
function DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp() {
  return {
    avatar: '@image(200x100, @color, @color)',
    avatarId: '@guid',
    imKeyBorardId: '@guid',
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
    isFriendshipOrHasSameGrateful: '@boolean',
    'msgList|1-20': [QingQiuHuiFuXiaoXiQiuQianReqMsgDetailResp()],
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
  ApiResponseComPageCommonSearchResp,
  ApiResponseComPageContactResp,
  ApiResponseComPageDoorMainInfoResp,
  ApiResponseComPageFriendshipResp,
  ApiResponseComPageSearchBeforeAddFriendResp,
  ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing,
  ApiResponseComPageXiaoXiDuiXiang,
  ApiResponseComPageBuLuoDuiXiangBirdResp,
  ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp,
  ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp,
  ApiResponseDesktopAllInfoResp,
  ApiResponseFriendshipDetailResp,
  ApiResponseListGreenBookGratefulInfoResp,
  ApiResponseListWhiteNoteResp,
  ApiResponseListForwardListResp,
  ApiResponseListBirdF2fKeyBorardListResp,
  ApiResponseListPhoneFriendshipResp,
  ApiResponseListSwitchKeyBorardListResp,
  ApiResponseListUnreadResp,
  ApiResponseListKeyBorardListAllGratefulResp,
  ApiResponseListBanBen,
  ApiResponseListFangDongXinXi,
  ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseListDaDuNanXinXiWhiteResp,
  ApiResponseMapstringSearchMapResp,
  ApiResponseMemberBirdStatusResp,
  ApiResponsePutFileResp,
  ApiResponseQueryLastMessageResp,
  ApiResponseKeyBorardBindResp,
  ApiResponseKeyBorardDetailResp,
  ApiResponseKeyBorardRespDuiXiang,
  ApiResponseboolean,
  ApiResponselong,
  ApiResponseobject,
  ApiResponsestring,
  ApiResponseXiaoDaoXiaoXi,
  ApiResponseXiaoXiDuiXiang,
  ApiResponseDengLuXiangYingShiTi,
  ApiResponseBuLuoDuiXiangBirdDetailResp,
  ApiResponseBuLuoDuiXiangBirdResp,
  ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseYaoQingRuBuLuoXiangYing,
  ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp,
  BasePageReq,
  ComLoginReq,
  ComPageCommonSearchResp,
  ComPageContactResp,
  ComPageDoorMainInfoResp,
  ComPageFriendshipResp,
  ComPageSearchBeforeAddFriendResp,
  ComPageXiaoDaoXiaoXiQiuQianXiangYing,
  ComPageXiaoXiDuiXiang,
  ComPageBuLuoDuiXiangBirdResp,
  ComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp,
  ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp,
  CommonSearchReq,
  CommonSearchResp,
  ContactReq,
  ContactResp,
  WhiteNoteResp,
  WhiteResp,
  DesktopAllInfoResp,
  DesktopResp,
  EnterBirdReq,
  DoorMainInfoResp,
  ExtWhiteResp,
  ForwardListReq,
  ForwardListResp,
  FriendshipDetailReq,
  FriendshipDetailResp,
  FriendshipResp,
  GetUnreadPageReq,
  BirdF2fKeyBorardListResp,
  BirdTransferReq,
  InviteToBirdReq,
  JobResp,
  MemberBirdStatusResp,
  MessageSyncDTO,
  PhoneFriendshipResp,
  PhoneListReq,
  PostResp,
  PutFileResp,
  QueryLastMessageResp,
  RequestMsgReqDuiXiang,
  PinkResq,
  SaveRandomReq,
  SearchBeforeAddFriendReq,
  SearchBeforeAddFriendResp,
  SearchMapResp,
  SearchReq,
  SearchResp,
  SwitchKeyBorardListResp,
  SwitchKeyBorardReq,
  UnreadResp,
  KeyBorardBindReq,
  KeyBorardBindResp,
  KeyBorardCancelReq,
  KeyBorardDetailResp,
  KeyBorardListAllGratefulResp,
  KeyBorardRespDuiXiang,
  KeyBorardGratefulReq,
  ErWeiMa,
  XiaoDaoXiaoXi,
  XiaoDaoXiaoXiQiuQian,
  XiaoDaoXiaoXiQiuQianXiangYing,
  XiuGaiBeiZhuModifyRemarkBirdReq,
  XiuGaiBeiZhuModifyfriendRemarkReq,
  XiuGaiTongQianCaoTouXiang,
  XiuGaiBuLuoShuiLianRuCanModifyBirdNameReq,
  RuBuLuoQingQiuAddBirdReq,
  ChuangJianXiaoDaoXiaoXi,
  ChuangJianGengXinDuiXiangBirdSaveReq,
  LiShiXiaoXiMessageHistoryReq,
  HaoYouFriendshipReq,
  HaoYouQiuQianLvYouFriendshipQueryReq,
  XiaoXiack,
  XiaoXiDaoLaJi,
  XiaoXiDuiXiang,
  XiaoXiSouSuoShiTi,
  XiaoXiXiangQingMessageDetailReq,
  TianJiaHaoYouAddFriendReq,
  TianJiaWoWeiHaoYouHaoKanFangShi,
  QingKongXiaoXiRuCan,
  QingKongXiaoXiJiLu,
  BanBen,
  TongQianCaoSuoYouFangDongKeyBorardListAllGratefulReq,
  DengLuXiangYingShiTi,
  FangDongXinXi,
  BuLuoXinXiBirdDetailReq,
  BuLuoFenYeBirdPageListReq,
  BuLuoDuiXiangBirdDetailResp,
  BuLuoDuiXiangBirdResp,
  BuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  BuLuoChengYuanFenYeBirdMemberPageReq,
  BuLuoChengYuanDaoLaJiBirdMemberDelReq,
  BuLuoChengYuanJiaShiBirdMemberSaveReq,
  BuLuoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq,
  SheZhiMoRenZhiYiChang,
  QingQiuHuiFuXiaoXiQiuQianReqMsgDetailResp,
  QingQiuXiaoXiQiuQianRequestPageListReq,
  QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq,
  ZhuanFaXiaoXiDuiXiang,
  TongGuoJuJueApproveReq,
  YaoQingRuBuLuoXiangYing,
  DaDuNanXinXiWhiteResp,
  DaDuNanQiuQianWhiteListReq,
  DaDuNanLvYouRuCan,
  DaDuNanTongQianCaoFenYeKeyBorardPageReq,
  DaDuNanTongQianCaoQiuQianWhiteListReq,
  DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp,
  YanChangChunHuaXiaoXiFenYeRequestPageListResp,
  YanChangChunHuaXiaoXiXiangQingRequestDetailResp,
}
