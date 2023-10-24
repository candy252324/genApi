export function AddBirdResp() {
  return {
    directEntryBird: '@boolean()',
    imBirdId: '@string(5,1000)',
  }
}
export function GreenBookGratefulInfoResp() {
  return {
    avatar: '@string(5,1000)',
    checked: '@boolean()',
    kind: '@string(5,1000)',
    showImBirdId: '@boolean()',
    gratefulId: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
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
export function ApiResponseAddBirdResp() {
  return {
    code: '@integer(3,1000)',
    data: AddBirdResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageCommonSearchResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageCommonSearchResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageContactResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageContactResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageDoorMainInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageDoorMainInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageFriendshipResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageFriendshipResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageSearchBeforeAddFriendResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageSearchBeforeAddFriendResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing() {
  return {
    code: '@integer(3,1000)',
    data: ComPageXiaoDaoXiaoXiQiuQianXiangYing(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageXiaoXiDuiXiang() {
  return {
    code: '@integer(3,1000)',
    data: ComPageXiaoXiDuiXiang(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageBuLuoDuiXiangBirdResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageBuLuoDuiXiangBirdResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp(),
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
export function ApiResponseFriendshipDetailResp() {
  return {
    code: '@integer(3,1000)',
    data: FriendshipDetailResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListGreenBookGratefulInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: GreenBookGratefulInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListWhiteNoteResp() {
  return {
    code: '@integer(3,1000)',
    data: WhiteNoteResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListForwardListResp() {
  return {
    code: '@integer(3,1000)',
    data: ForwardListResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListBirdF2fKeyBorardListResp() {
  return {
    code: '@integer(3,1000)',
    data: BirdF2fKeyBorardListResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListPhoneFriendshipResp() {
  return {
    code: '@integer(3,1000)',
    data: PhoneFriendshipResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListSwitchKeyBorardListResp() {
  return {
    code: '@integer(3,1000)',
    data: SwitchKeyBorardListResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListUnreadResp() {
  return {
    code: '@integer(3,1000)',
    data: UnreadResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListKeyBorardListAllGratefulResp() {
  return {
    code: '@integer(3,1000)',
    data: KeyBorardListAllGratefulResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListBanBen() {
  return {
    code: '@integer(3,1000)',
    data: BanBen(),
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
export function ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: '@integer(3,1000)',
    data: BuLuoChengYuanXinXiDuiXiangBirdMemberResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListDaDuNanXinXiWhiteResp() {
  return {
    code: '@integer(3,1000)',
    data: DaDuNanXinXiWhiteResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseMapstringSearchMapResp() {
  return {
    code: '@integer(3,1000)',
    data: SearchMapResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseMemberBirdStatusResp() {
  return {
    code: '@integer(3,1000)',
    data: MemberBirdStatusResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponsePutFileResp() {
  return {
    code: '@integer(3,1000)',
    data: PutFileResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseQueryLastMessageResp() {
  return {
    code: '@integer(3,1000)',
    data: QueryLastMessageResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseKeyBorardBindResp() {
  return {
    code: '@integer(3,1000)',
    data: KeyBorardBindResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseKeyBorardDetailResp() {
  return {
    code: '@integer(3,1000)',
    data: KeyBorardDetailResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseKeyBorardRespDuiXiang() {
  return {
    code: '@integer(3,1000)',
    data: KeyBorardRespDuiXiang(),
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
export function ApiResponseobject() {
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
export function ApiResponseXiaoDaoXiaoXi() {
  return {
    code: '@integer(3,1000)',
    data: XiaoDaoXiaoXi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseXiaoXiDuiXiang() {
  return {
    code: '@integer(3,1000)',
    data: XiaoXiDuiXiang(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseDengLuXiangYingShiTi() {
  return {
    code: '@integer(3,1000)',
    data: DengLuXiangYingShiTi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseBuLuoDuiXiangBirdDetailResp() {
  return {
    code: '@integer(3,1000)',
    data: BuLuoDuiXiangBirdDetailResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseBuLuoDuiXiangBirdResp() {
  return {
    code: '@integer(3,1000)',
    data: BuLuoDuiXiangBirdResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: '@integer(3,1000)',
    data: BuLuoChengYuanXinXiDuiXiangBirdMemberResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseYaoQingRuBuLuoXiangYing() {
  return {
    code: '@integer(3,1000)',
    data: YaoQingRuBuLuoXiangYing(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp() {
  return {
    code: '@integer(3,1000)',
    data: YanChangChunHuaXiaoXiXiangQingRequestDetailResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function BasePageReq() {
  return {
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
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
export function ComPageCommonSearchResp() {
  return {
    current: '@string(5,1000)',
    records: CommonSearchResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageContactResp() {
  return {
    current: '@string(5,1000)',
    records: ContactResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageDoorMainInfoResp() {
  return {
    current: '@string(5,1000)',
    records: DoorMainInfoResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageFriendshipResp() {
  return {
    current: '@string(5,1000)',
    records: FriendshipResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageSearchBeforeAddFriendResp() {
  return {
    current: '@string(5,1000)',
    records: SearchBeforeAddFriendResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageXiaoDaoXiaoXiQiuQianXiangYing() {
  return {
    current: '@string(5,1000)',
    records: XiaoDaoXiaoXiQiuQianXiangYing(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageXiaoXiDuiXiang() {
  return {
    current: '@string(5,1000)',
    records: XiaoXiDuiXiang(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageBuLuoDuiXiangBirdResp() {
  return {
    current: '@string(5,1000)',
    records: BuLuoDuiXiangBirdResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    current: '@string(5,1000)',
    records: BuLuoChengYuanXinXiDuiXiangBirdMemberResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp() {
  return {
    current: '@string(5,1000)',
    records: DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    current: '@string(5,1000)',
    records: YanChangChunHuaXiaoXiFenYeRequestPageListResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function CommonSearchReq() {
  return {
    imKeyBorardId: '@string(5,1000)',
    keywords: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    type: '@string(5,1000)',
  }
}
export function CommonSearchResp() {
  return {
    avatar: '@string(5,1000)',
    hiallType: '@string(5,1000)',
    company: '@string(5,1000)',
    createType: '@string(5,1000)',
    birdAttr: '@string(5,1000)',
    birdAvatar: '@string(5,1000)',
    birdType: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isFriendship: '@boolean()',
    isNotice: '@boolean()',
    isSameGrateful: '@boolean()',
    isTop: '@boolean()',
    job: '@string(5,1000)',
    keywords: '@string(5,1000)',
    name: '@string(5,1000)',
    ownerId: '@string(5,1000)',
    post: '@string(5,1000)',
    total: '@integer(3,1000)',
  }
}
export function ContactReq() {
  return {
    excludeMemberImBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    keywords: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function ContactResp() {
  return {
    avatar: '@string(5,1000)',
    hiallAvatar: '@string(5,1000)',
    hiallStatus: '@string(5,1000)',
    hiallType: '@string(5,1000)',
    createType: '@string(5,1000)',
    birdAttr: '@string(5,1000)',
    birdType: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isFriendship: '@boolean()',
    isBirdMember: '@boolean()',
    isNotice: '@boolean()',
    isSameSubsidiary: '@boolean()',
    isSameGrateful: '@boolean()',
    isTop: '@boolean()',
    job: '@string(5,1000)',
    keywords: '@string(5,1000)',
    name: '@string(5,1000)',
    post: '@string(5,1000)',
    remark: '@string(5,1000)',
    status: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
    total: '@string(5,1000)',
    keyBorardStatus: '@string(5,1000)',
  }
}
export function WhiteNoteResp() {
  return {
    desktopCount: '@integer(3,1000)',
    info: WhiteResp(),
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
export function DesktopAllInfoResp() {
  return {
    whiteRespList: ExtWhiteResp(),
    desktopResp: DesktopResp(),
    jobRespList: JobResp(),
    postRespList: PostResp(),
    pinkRespList: PinkResq(),
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
    status: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function EnterBirdReq() {
  return {
    f2fBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function DoorMainInfoResp() {
  return {
    authStatus: '@string(5,1000)',
    avatar: '@string(5,1000)',
    contactNumber: '@string(5,1000)',
    contactor: '@string(5,1000)',
    created: '@boolean()',
    doorId: '@string(5,1000)',
    legalCat: '@string(5,1000)',
    legalCatPhone: '@string(5,1000)',
    licenseUnifiedCode: '@string(5,1000)',
    location: '@string(5,1000)',
    name: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
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
    modified: '@string(5,1000)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,1000)',
    parentId: '@string(5,1000)',
    phone: '@string(5,1000)',
    profile: '@string(5,1000)',
    scaleType: '@string(5,1000)',
    status: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function ForwardListReq() {
  return {
    channel: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    keyword: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    type: '@string(5,1000)',
  }
}
export function ForwardListResp() {
  return {
    avatar: '@string(5,1000)',
    hiallType: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isFriendship: '@boolean()',
    name: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function FriendshipDetailReq() {
  return {
    channel: '@string(5,1000)',
    friendId: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function FriendshipDetailResp() {
  return {
    avatar: '@string(5,1000)',
    childCompany: '@string(5,1000)',
    company: '@string(5,1000)',
    whiteId: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    whitePath: '@string(5,1000)',
    email: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isFriendship: '@boolean()',
    isNotice: '@boolean()',
    isPayAttention: '@boolean()',
    isSameSubsidiary: '@boolean()',
    isSameGrateful: '@boolean()',
    job: '@string(5,1000)',
    nickName: '@string(5,1000)',
    phone: '@string(5,1000)',
    pinyin: '@string(5,1000)',
    post: '@string(5,1000)',
    sex: '@string(5,1000)',
    status: '@string(5,1000)',
    statusDesc: '@string(5,1000)',
    title: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function FriendshipResp() {
  return {
    avatar: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    pinyin: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function GetUnreadPageReq() {
  return {
    imKeyBorardId: '@string(5,1000)',
    requestIdList: '@string(5,1000)',
  }
}
export function BirdF2fKeyBorardListResp() {
  return {
    avatar: '@string(5,1000)',
    avatarUrl: '@string(5,1000)',
    f2fBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function BirdTransferReq() {
  return {
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function InviteToBirdReq() {
  return {
    applyIds: '@string(5,1000)',
    desc: '@string(5,1000)',
    birdName: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    inviterId: '@string(5,1000)',
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
export function MemberBirdStatusResp() {
  return {
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    status: '@string(5,1000)',
    statusDesc: '@string(5,1000)',
  }
}
export function MessageSyncDTO() {
  return {
    applyType: '@string(5,1000)',
    cardMessageIdList: '@string(5,1000)',
    channel: '@string(5,1000)',
    clientMessageId: '@string(5,1000)',
    content: '@string(5,1000)',
    contentType: '@string(5,1000)',
    excludeKeyBorardIds: '@string(5,1000)',
    fileId: '@string(5,1000)',
    forwardMessageId: '@string(5,1000)',
    birdIdList: '@string(5,1000)',
    receiverList: '@string(5,1000)',
    sender: '@string(5,1000)',
  }
}
export function PhoneFriendshipResp() {
  return {
    avatar: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isFriend: '@boolean()',
    phone: '@string(5,1000)',
    pinyin: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function PhoneListReq() {
  return {
    imKeyBorardId: '@string(5,1000)',
    phoneList: '@string(5,1000)',
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
export function PutFileResp() {
  return {
    happyId: '@string(5,1000)',
    fileId: '@string(5,1000)',
    originalFileName: '@string(5,1000)',
    url: '@string(5,1000)',
  }
}
export function QueryLastMessageResp() {
  return {
    appType: '@integer(3,1000)',
    isForceUpdate: '@boolean()',
    versionDesc: '@string(5,1000)',
    versionName: '@string(5,1000)',
    versionUrl: '@string(5,1000)',
  }
}
export function RequestMsgReqDuiXiang() {
  return {
    content: '@string(5,1000)',
    receiverId: '@string(5,1000)',
    requestId: '@string(5,1000)',
    senderId: '@string(5,1000)',
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
    pinkName: '@string(5,1000)',
    pinkSort: '@integer(3,1000)',
    status: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function SaveRandomReq() {
  return {
    imKeyBorardId: '@string(5,1000)',
    latitude: '@string(5,1000)',
    longitude: '@string(5,1000)',
    random: '@string(5,1000)',
  }
}
export function SearchBeforeAddFriendReq() {
  return {
    excludeMemberImBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isShowFullName: '@boolean()',
    isShowGratefulName: '@boolean()',
    keyword: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function SearchBeforeAddFriendResp() {
  return {
    avatar: '@string(5,1000)',
    channel: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isFriend: '@boolean()',
    isBirdMember: '@boolean()',
    phone: '@string(5,1000)',
    pinyin: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function SearchMapResp() {
  return {
    hasMore: '@boolean()',
    keyBorardList: SearchResp(),
  }
}
export function SearchReq() {
  return {
    imKeyBorardId: '@string(5,1000)',
    keywords: '@string(5,1000)',
  }
}
export function SearchResp() {
  return {
    avatar: '@string(5,1000)',
    hiallType: '@string(5,1000)',
    company: '@string(5,1000)',
    createType: '@string(5,1000)',
    birdAttr: '@string(5,1000)',
    birdType: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    job: '@string(5,1000)',
    keywords: '@string(5,1000)',
    name: '@string(5,1000)',
    ownerId: '@string(5,1000)',
    post: '@string(5,1000)',
    total: '@integer(3,1000)',
  }
}
export function SwitchKeyBorardListResp() {
  return {
    avatar: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    phone: '@string(5,1000)',
    satoken: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function SwitchKeyBorardReq() {
  return {
    deviceId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function UnreadResp() {
  return {
    isRead: '@boolean()',
    requestId: '@string(5,1000)',
  }
}
export function KeyBorardBindReq() {
  return {
    channel: '@string(5,1000)',
    deviceId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function KeyBorardBindResp() {}
export function KeyBorardCancelReq() {
  return {
    imKeyBorardId: '@string(5,1000)',
    smsCode: '@string(5,1000)',
  }
}
export function KeyBorardDetailResp() {
  return {
    hasSameGrateful: '@boolean()',
    imBirdId: '@string(5,1000)',
    isAttention: '@boolean()',
    isFrinedship: '@boolean()',
    isNotice: '@boolean()',
    isPrivate: '@boolean()',
    isTop: '@boolean()',
    remark: '@string(5,1000)',
    showRemark: '@boolean()',
  }
}
export function KeyBorardListAllGratefulResp() {
  return {
    hasMore: '@boolean()',
    gratefulId: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
    keyBorardList: DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp(),
  }
}
export function KeyBorardRespDuiXiang() {
  return {
    avatar: '@string(5,1000)',
    whiteId: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    email: '@string(5,1000)',
    birdMemberRemark: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isApprove: '@boolean()',
    isBirdApprove: '@boolean()',
    isNotice: '@boolean()',
    job: '@string(5,1000)',
    nickName: '@string(5,1000)',
    parentWhitePath: '@string(5,1000)',
    phone: '@string(5,1000)',
    pinyin: '@string(5,1000)',
    post: '@string(5,1000)',
    requestChannel: '@string(5,1000)',
    sex: '@string(5,1000)',
    status: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function KeyBorardGratefulReq() {
  return {
    stationKeyBorardId: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function ErWeiMa() {
  return {
    id: '@string(5,1000)',
    type: '@string(5,1000)',
  }
}
export function XiaoDaoXiaoXi() {
  return {
    avatar: '@string(5,1000)',
    channel: '@string(5,1000)',
    hiallName: '@string(5,1000)',
    hiallType: '@string(5,1000)',
    birdAttr: '@string(5,1000)',
    birdIdList: '@string(5,1000)',
    birdStatus: '@boolean()',
    birdType: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isAllSilence: '@boolean()',
    isAtAll: '@boolean()',
    isFriendship: '@boolean()',
    isModifyName: '@boolean()',
    isNotice: '@boolean()',
    isOrdinaryInvent: '@boolean()',
    isPrivate: '@boolean()',
    isShow: '@boolean()',
    isTop: '@boolean()',
    job: '@string(5,1000)',
    modified: '@string(5,1000)',
    nickName: '@string(5,1000)',
    post: '@string(5,1000)',
    receiver: '@string(5,1000)',
    total: '@integer(3,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function XiaoDaoXiaoXiQiuQian() {
  return {
    channel: '@string(5,1000)',
    birdIdList: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    limit: '@integer(3,1000)',
    selectSum: '@boolean()',
    skipCount: '@integer(3,1000)',
  }
}
export function XiaoDaoXiaoXiQiuQianXiangYing() {
  return {
    channel: '@string(5,1000)',
    hiallAvatar: '@string(5,1000)',
    hiallCompany: '@string(5,1000)',
    hiallJob: '@string(5,1000)',
    hiallName: '@string(5,1000)',
    hiallPost: '@string(5,1000)',
    hiallRemark: '@string(5,1000)',
    hiallType: '@string(5,1000)',
    birdAttr: '@string(5,1000)',
    birdId: '@string(5,1000)',
    birdType: '@string(5,1000)',
    isAttention: '@boolean()',
    isFriendship: '@boolean()',
    isNotice: '@boolean()',
    isSameSubsidiary: '@boolean()',
    isSameGrateful: '@boolean()',
    isTop: '@boolean()',
    modified: '@string(5,1000)',
    msgApplyType: '@string(5,1000)',
    msgContent: '@string(5,1000)',
    msgContentType: '@string(5,1000)',
    msgFileUrl: '@string(5,1000)',
    msgId: '@string(5,1000)',
    msgSenderName: '@string(5,1000)',
    msgSequence: '@string(5,1000)',
    msgTime: '@string(5,1000)',
    total: '@string(5,1000)',
    unreadCount: '@integer(3,1000)',
    unreadSum: '@integer(3,1000)',
    keyBorardid: '@string(5,1000)',
  }
}
export function XiuGaiBeiZhuModifyRemarkBirdReq() {
  return {
    birdRemark: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function XiuGaiBeiZhuModifyfriendRemarkReq() {
  return {
    friendRemark: '@string(5,1000)',
    imFriendId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function XiuGaiTongQianCaoTouXiang() {
  return {
    avatar: '@string(5,1000)',
  }
}
export function XiuGaiBuLuoShuiLianRuCanModifyBirdNameReq() {
  return {
    birdName: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function RuBuLuoQingQiuAddBirdReq() {
  return {
    applyId: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    inviterId: '@string(5,1000)',
    type: '@integer(3,1000)',
  }
}
export function ChuangJianXiaoDaoXiaoXi() {
  return {
    channel: '@string(5,1000)',
    checkCache: '@boolean()',
    birdIdList: '@string(5,1000)',
    receiverIdList: '@string(5,1000)',
    updateBirdHiall: '@boolean()',
  }
}
export function ChuangJianGengXinDuiXiangBirdSaveReq() {
  return {
    desc: '@string(5,1000)',
    memberIdList: '@string(5,1000)',
    name: '@string(5,1000)',
    ownerId: '@string(5,1000)',
  }
}
export function LiShiXiaoXiMessageHistoryReq() {
  return {
    imBirdId: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    sequence: '@string(5,1000)',
    size: '@integer(3,1000)',
  }
}
export function HaoYouFriendshipReq() {
  return {
    imFriendId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isNotice: '@boolean()',
    isTop: '@boolean()',
  }
}
export function HaoYouQiuQianLvYouFriendshipQueryReq() {
  return {
    excludeMemberImBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    keyword: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function XiaoXiack() {
  return {
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function XiaoXiDaoLaJi() {
  return {
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    messageIdList: '@string(5,1000)',
  }
}
export function XiaoXiDuiXiang() {
  return {
    applyType: '@string(5,1000)',
    cardMessageList: ZhuanFaXiaoXiDuiXiang(),
    content: '@string(5,1000)',
    contentType: '@string(5,1000)',
    created: '@string(5,1000)',
    fileId: '@string(5,1000)',
    fileName: '@string(5,1000)',
    fileSize: '@string(5,1000)',
    fileText: '@string(5,1000)',
    fileTime: '@string(5,1000)',
    fileType: '@string(5,1000)',
    fileUrl: '@string(5,1000)',
    birdId: '@string(5,1000)',
    id: '@string(5,1000)',
    nickName: '@string(5,1000)',
    senderAvatar: '@string(5,1000)',
    senderId: '@string(5,1000)',
    senderName: '@string(5,1000)',
    sequence: '@string(5,1000)',
  }
}
export function XiaoXiSouSuoShiTi() {
  return {
    birdId: '@string(5,1000)',
    keywords: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    type: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
  }
}
export function XiaoXiXiangQingMessageDetailReq() {
  return {
    messageId: '@string(5,1000)',
  }
}
export function TianJiaHaoYouAddFriendReq() {
  return {
    channel: '@string(5,1000)',
    content: '@string(5,1000)',
    friendRemark: '@string(5,1000)',
    imFriendId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isTop: '@boolean()',
    phone: '@string(5,1000)',
  }
}
export function TianJiaWoWeiHaoYouHaoKanFangShi() {
  return {
    imKeyBorardId: '@string(5,1000)',
    requestChannels: '@string(5,1000)',
  }
}
export function QingKongXiaoXiRuCan() {
  return {
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function QingKongXiaoXiJiLu() {
  return {
    channel: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function BanBen() {
  return {
    appType: '@string(5,1000)',
    isForceUpdate: '@boolean()',
    versionDesc: '@string(5,1000)',
    versionName: '@string(5,1000)',
    versionNum: '@string(5,1000)',
    versionUrl: '@string(5,1000)',
  }
}
export function TongQianCaoSuoYouFangDongKeyBorardListAllGratefulReq() {
  return {
    excludeMemberImBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    keyword: '@string(5,1000)',
  }
}
export function DengLuXiangYingShiTi() {
  return {
    channel: '@string(5,1000)',
    code: '@integer(3,1000)',
    imKeyBorardId: '@string(5,1000)',
    newKeyBorard: '@boolean()',
    satoken: '@string(5,1000)',
    setPassWord: '@boolean()',
    token: '@string(5,1000)',
    tokenTimeOut: '@string(5,1000)',
    keyBorardId: '@string(5,1000)',
  }
}
export function FangDongXinXi() {
  return {
    avatar: '@string(5,1000)',
    channel: '@string(5,1000)',
    checked: '@boolean()',
    kind: '@string(5,1000)',
    phone: '@string(5,1000)',
    post: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function BuLuoXinXiBirdDetailReq() {
  return {
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isNotice: '@boolean()',
    isTop: '@boolean()',
  }
}
export function BuLuoFenYeBirdPageListReq() {
  return {
    imKeyBorardId: '@string(5,1000)',
    keyword: '@string(5,1000)',
    name: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function BuLuoDuiXiangBirdDetailResp() {
  return {
    avatar: '@string(5,1000)',
    createType: '@string(5,1000)',
    whiteId: '@string(5,1000)',
    whitePath: '@string(5,1000)',
    desc: '@string(5,1000)',
    birdAttr: '@string(5,1000)',
    birdBelong: '@string(5,1000)',
    birdType: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    isAdminConfirm: '@boolean()',
    isAllSilence: '@boolean()',
    isAtAll: '@boolean()',
    isModifyName: '@boolean()',
    isOrdinaryInvent: '@boolean()',
    isPrivate: '@boolean()',
    name: '@string(5,1000)',
    notice: '@string(5,1000)',
    ownerId: '@string(5,1000)',
    status: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    total: '@integer(3,1000)',
  }
}
export function BuLuoDuiXiangBirdResp() {
  return {
    avatar: '@string(5,1000)',
    hiallType: '@string(5,1000)',
    createType: '@string(5,1000)',
    birdAttr: '@string(5,1000)',
    birdType: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
    name: '@string(5,1000)',
    ownerId: '@string(5,1000)',
    total: '@integer(3,1000)',
  }
}
export function BuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isNotice: '@boolean()',
    isTop: '@boolean()',
    memberAvatar: '@string(5,1000)',
    memberName: '@string(5,1000)',
    memberPhone: '@string(5,1000)',
    memberRemark: '@string(5,1000)',
    memberGratefulName: '@string(5,1000)',
    memberType: '@string(5,1000)',
  }
}
export function BuLuoChengYuanFenYeBirdMemberPageReq() {
  return {
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isDeleteMember: '@boolean()',
    keyword: '@string(5,1000)',
    memberType: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function BuLuoChengYuanDaoLaJiBirdMemberDelReq() {
  return {
    imBirdId: '@string(5,1000)',
    imMemberIdList: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
  }
}
export function BuLuoChengYuanJiaShiBirdMemberSaveReq() {
  return {
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    imKeyBorardIdList: '@string(5,1000)',
  }
}
export function BuLuoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq() {
  return {
    imBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isAdminConfirm: '@boolean()',
    isAllSilence: '@boolean()',
    isAtAll: '@boolean()',
    isModifyName: '@boolean()',
    isOrdinaryInvent: '@boolean()',
    isPrivate: '@boolean()',
  }
}
export function SheZhiMoRenZhiYiChang() {
  return {
    kind: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
  }
}
export function QingQiuHuiFuXiaoXiQiuQianReqMsgDetailResp() {
  return {
    content: '@string(5,1000)',
    created: '@string(5,1000)',
    isRead: '@boolean()',
    receiverId: '@string(5,1000)',
    receiverName: '@string(5,1000)',
    requestId: '@string(5,1000)',
    requestMsgId: '@string(5,1000)',
    senderId: '@string(5,1000)',
    senderName: '@string(5,1000)',
  }
}
export function QingQiuXiaoXiQiuQianRequestPageListReq() {
  return {
    imKeyBorardId: '@string(5,1000)',
    keyword: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    type: '@integer(3,1000)',
  }
}
export function QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq() {
  return {
    imKeyBorardId: '@string(5,1000)',
    requestId: '@string(5,1000)',
    requestMsgIdList: '@string(5,1000)',
  }
}
export function ZhuanFaXiaoXiDuiXiang() {
  return {
    applyType: '@string(5,1000)',
    content: '@string(5,1000)',
    contentType: '@string(5,1000)',
    created: '@string(5,1000)',
    fileId: '@string(5,1000)',
    fileName: '@string(5,1000)',
    fileSize: '@string(5,1000)',
    fileText: '@string(5,1000)',
    fileTime: '@string(5,1000)',
    fileType: '@string(5,1000)',
    fileUrl: '@string(5,1000)',
    birdId: '@string(5,1000)',
    id: '@string(5,1000)',
    senderAvatar: '@string(5,1000)',
    senderId: '@string(5,1000)',
    senderName: '@string(5,1000)',
    sequence: '@string(5,1000)',
  }
}
export function TongGuoJuJueApproveReq() {
  return {
    imKeyBorardId: '@string(5,1000)',
    isNotice: '@boolean()',
    permitted: '@boolean()',
    remark: '@string(5,1000)',
    requestId: '@string(5,1000)',
  }
}
export function YaoQingRuBuLuoXiangYing() {
  return {
    checkKeyBorardIds: '@string(5,1000)',
    checkKeyBorards: KeyBorardRespDuiXiang(),
    inviteMsg: '@string(5,1000)',
  }
}
export function DaDuNanXinXiWhiteResp() {
  return {
    whiteId: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    imBirdId: '@string(5,1000)',
  }
}
export function DaDuNanQiuQianWhiteListReq() {
  return {
    getImBirdId: '@boolean()',
    parentId: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function DaDuNanLvYouRuCan() {
  return {
    whiteId: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function DaDuNanTongQianCaoFenYeKeyBorardPageReq() {
  return {
    whiteId: '@string(5,1000)',
    excludeMemberImBirdId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    keyword: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function DaDuNanTongQianCaoQiuQianWhiteListReq() {
  return {
    getImBirdId: '@boolean()',
    gratefulId: '@string(5,1000)',
  }
}
export function DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp() {
  return {
    avatar: '@string(5,1000)',
    avatarId: '@string(5,1000)',
    imKeyBorardId: '@string(5,1000)',
    isBirdMember: '@boolean()',
    gratefulId: '@string(5,1000)',
    gratefulName: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function YanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    applyAvatar: '@string(5,1000)',
    applyAvatarUrl: '@string(5,1000)',
    applyId: '@string(5,1000)',
    applyName: '@string(5,1000)',
    avatar: '@string(5,1000)',
    content: '@string(5,1000)',
    inviterAvatar: '@string(5,1000)',
    inviterAvatarUrl: '@string(5,1000)',
    inviterId: '@string(5,1000)',
    inviterName: '@string(5,1000)',
    receiverAvatar: '@string(5,1000)',
    receiverAvatarUrl: '@string(5,1000)',
    receiverId: '@string(5,1000)',
    receiverName: '@string(5,1000)',
    requestId: '@string(5,1000)',
    status: '@integer(3,1000)',
    gratefulName: '@string(5,1000)',
    type: '@integer(3,1000)',
    keyBorardAvatar: '@string(5,1000)',
    keyBorardAvatarUrl: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function YanChangChunHuaXiaoXiXiangQingRequestDetailResp() {
  return {
    applyAvatar: '@string(5,1000)',
    applyId: '@string(5,1000)',
    applyName: '@string(5,1000)',
    applyGratefulName: '@string(5,1000)',
    channel: '@string(5,1000)',
    content: '@string(5,1000)',
    created: '@string(5,1000)',
    inviterAvatar: '@string(5,1000)',
    inviterId: '@string(5,1000)',
    inviterName: '@string(5,1000)',
    isFriendshipOrHasSameGrateful: '@boolean()',
    msgList: QingQiuHuiFuXiaoXiQiuQianReqMsgDetailResp(),
    receiverAvatar: '@string(5,1000)',
    receiverId: '@string(5,1000)',
    receiverName: '@string(5,1000)',
    receiverGratefulName: '@string(5,1000)',
    remark: '@string(5,1000)',
    requestId: '@string(5,1000)',
    status: '@integer(3,1000)',
    total: '@integer(3,1000)',
    type: '@integer(3,1000)',
  }
}
