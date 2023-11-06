import Mock from 'better-mock'
export function AddBirdResp() {
  return {
    directEntryBird: Mock.mock('@boolean'),
    imBirdId: Mock.mock('@guid'),
  }
}
export function GreenBookGratefulInfoResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    checked: Mock.mock('@boolean'),
    kind: Mock.mock('@string(5,100)'),
    showImBirdId: Mock.mock('@guid'),
    gratefulId: Mock.mock('@guid'),
    gratefulName: Mock.mock('@string(5,100)'),
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
export function ApiResponseAddBirdResp() {
  return {
    code: 200,
    data: Mock.mock('AddBirdResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageCommonSearchResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageCommonSearchResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageContactResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageContactResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageDoorMainInfoResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageDoorMainInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageFriendshipResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageFriendshipResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageSearchBeforeAddFriendResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageSearchBeforeAddFriendResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing() {
  return {
    code: 200,
    data: Mock.mock('ComPageXiaoDaoXiaoXiQiuQianXiangYing()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageXiaoXiDuiXiang() {
  return {
    code: 200,
    data: Mock.mock('ComPageXiaoXiDuiXiang()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageBuLuoDuiXiangBirdResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageBuLuoDuiXiangBirdResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp()'),
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
export function ApiResponseFriendshipDetailResp() {
  return {
    code: 200,
    data: Mock.mock('FriendshipDetailResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListGreenBookGratefulInfoResp() {
  return {
    code: 200,
    'data|1-20': [GreenBookGratefulInfoResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListWhiteNoteResp() {
  return {
    code: 200,
    'data|1-20': [WhiteNoteResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListForwardListResp() {
  return {
    code: 200,
    'data|1-20': [ForwardListResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListBirdF2fKeyBorardListResp() {
  return {
    code: 200,
    'data|1-20': [BirdF2fKeyBorardListResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListPhoneFriendshipResp() {
  return {
    code: 200,
    'data|1-20': [PhoneFriendshipResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListSwitchKeyBorardListResp() {
  return {
    code: 200,
    'data|1-20': [SwitchKeyBorardListResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListUnreadResp() {
  return {
    code: 200,
    'data|1-20': [UnreadResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListKeyBorardListAllGratefulResp() {
  return {
    code: 200,
    'data|1-20': [KeyBorardListAllGratefulResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListBanBen() {
  return {
    code: 200,
    'data|1-20': [BanBen()],
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
export function ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    'data|1-20': [BuLuoChengYuanXinXiDuiXiangBirdMemberResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListDaDuNanXinXiWhiteResp() {
  return {
    code: 200,
    'data|1-20': [DaDuNanXinXiWhiteResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseMapstringSearchMapResp() {
  return {
    code: 200,
    data: Mock.mock('SearchMapResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseMemberBirdStatusResp() {
  return {
    code: 200,
    data: Mock.mock('MemberBirdStatusResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponsePutFileResp() {
  return {
    code: 200,
    data: Mock.mock('PutFileResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseQueryLastMessageResp() {
  return {
    code: 200,
    data: Mock.mock('QueryLastMessageResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseKeyBorardBindResp() {
  return {
    code: 200,
    data: Mock.mock('KeyBorardBindResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseKeyBorardDetailResp() {
  return {
    code: 200,
    data: Mock.mock('KeyBorardDetailResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseKeyBorardRespDuiXiang() {
  return {
    code: 200,
    data: Mock.mock('KeyBorardRespDuiXiang()'),
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
export function ApiResponseobject() {
  return {
    code: 200,
    data: Mock.mock(''),
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
export function ApiResponseXiaoDaoXiaoXi() {
  return {
    code: 200,
    data: Mock.mock('XiaoDaoXiaoXi()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseXiaoXiDuiXiang() {
  return {
    code: 200,
    data: Mock.mock('XiaoXiDuiXiang()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseDengLuXiangYingShiTi() {
  return {
    code: 200,
    data: Mock.mock('DengLuXiangYingShiTi()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseBuLuoDuiXiangBirdDetailResp() {
  return {
    code: 200,
    data: Mock.mock('BuLuoDuiXiangBirdDetailResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseBuLuoDuiXiangBirdResp() {
  return {
    code: 200,
    data: Mock.mock('BuLuoDuiXiangBirdResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    code: 200,
    data: Mock.mock('BuLuoChengYuanXinXiDuiXiangBirdMemberResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseYaoQingRuBuLuoXiangYing() {
  return {
    code: 200,
    data: Mock.mock('YaoQingRuBuLuoXiangYing()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp() {
  return {
    code: 200,
    data: Mock.mock('YanChangChunHuaXiaoXiXiangQingRequestDetailResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function BasePageReq() {
  return {
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
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
export function ComPageCommonSearchResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [CommonSearchResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageContactResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [ContactResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageDoorMainInfoResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [DoorMainInfoResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageFriendshipResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [FriendshipResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageSearchBeforeAddFriendResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [SearchBeforeAddFriendResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageXiaoDaoXiaoXiQiuQianXiangYing() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [XiaoDaoXiaoXiQiuQianXiangYing()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageXiaoXiDuiXiang() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [XiaoXiDuiXiang()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageBuLuoDuiXiangBirdResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [BuLuoDuiXiangBirdResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [BuLuoChengYuanXinXiDuiXiangBirdMemberResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [YanChangChunHuaXiaoXiFenYeRequestPageListResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function CommonSearchReq() {
  return {
    imKeyBorardId: Mock.mock('@guid'),
    keywords: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@string(5,100)'),
  }
}
export function CommonSearchResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    hiallType: Mock.mock('@string(5,100)'),
    company: Mock.mock('@string(5,100)'),
    createType: Mock.mock('@string(5,100)'),
    birdAttr: Mock.mock('@string(5,100)'),
    birdAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    birdType: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isFriendship: Mock.mock('@boolean'),
    isNotice: Mock.mock('@boolean'),
    isSameGrateful: Mock.mock('@boolean'),
    isTop: Mock.mock('@boolean'),
    job: Mock.mock('@string(5,100)'),
    keywords: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    ownerId: Mock.mock('@guid'),
    post: Mock.mock('@string(5,100)'),
    total: Mock.mock('@integer(3,1000)'),
  }
}
export function ContactReq() {
  return {
    excludeMemberImBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    keywords: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function ContactResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    hiallAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    hiallStatus: Mock.mock('@string(5,100)'),
    hiallType: Mock.mock('@string(5,100)'),
    createType: Mock.mock('@string(5,100)'),
    birdAttr: Mock.mock('@string(5,100)'),
    birdType: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isFriendship: Mock.mock('@boolean'),
    isBirdMember: Mock.mock('@boolean'),
    isNotice: Mock.mock('@boolean'),
    isSameSubsidiary: Mock.mock('@boolean'),
    isSameGrateful: Mock.mock('@boolean'),
    isTop: Mock.mock('@boolean'),
    job: Mock.mock('@string(5,100)'),
    keywords: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    post: Mock.mock('@string(5,100)'),
    remark: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    gratefulName: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
    keyBorardStatus: Mock.mock('@string(5,100)'),
  }
}
export function WhiteNoteResp() {
  return {
    desktopCount: Mock.mock('@integer(3,1000)'),
    info: Mock.mock('WhiteResp()'),
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
export function DesktopAllInfoResp() {
  return {
    'whiteRespList|1-20': [ExtWhiteResp()],
    desktopResp: Mock.mock('DesktopResp()'),
    'jobRespList|1-20': [JobResp()],
    'postRespList|1-20': [PostResp()],
    'pinkRespList|1-20': [PinkResq()],
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
    status: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
    keyBorardId: Mock.mock('@guid'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function EnterBirdReq() {
  return {
    f2fBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function DoorMainInfoResp() {
  return {
    authStatus: Mock.mock('@string(5,100)'),
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    contactNumber: Mock.mock('@string(5,100)'),
    contactor: Mock.mock('@string(5,100)'),
    created: Mock.mock('@boolean'),
    doorId: Mock.mock('@guid'),
    legalCat: Mock.mock('@string(5,100)'),
    legalCatPhone: Mock.mock('@string(5,100)'),
    licenseUnifiedCode: Mock.mock('@string(5,100)'),
    location: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    keyBorardId: Mock.mock('@guid'),
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
    modified: Mock.mock('@string(5,100)'),
    orderNum: Mock.mock('@integer(3,1000)'),
    parentCode: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
    phone: Mock.mock('@string(5,100)'),
    profile: Mock.mock('@string(5,100)'),
    scaleType: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function ForwardListReq() {
  return {
    channel: Mock.mock('@string(5,100)'),
    imKeyBorardId: Mock.mock('@guid'),
    keyword: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@string(5,100)'),
  }
}
export function ForwardListResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    hiallType: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isFriendship: Mock.mock('@boolean'),
    name: Mock.mock('@string(5,100)'),
    gratefulName: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function FriendshipDetailReq() {
  return {
    channel: Mock.mock('@string(5,100)'),
    friendId: Mock.mock('@guid'),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function FriendshipDetailResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    childCompany: Mock.mock('@string(5,100)'),
    company: Mock.mock('@string(5,100)'),
    whiteId: Mock.mock('@guid'),
    whiteName: Mock.mock('@string(5,100)'),
    whitePath: Mock.mock('@string(5,100)'),
    email: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isFriendship: Mock.mock('@boolean'),
    isNotice: Mock.mock('@boolean'),
    isPayAttention: Mock.mock('@boolean'),
    isSameSubsidiary: Mock.mock('@boolean'),
    isSameGrateful: Mock.mock('@boolean'),
    job: Mock.mock('@string(5,100)'),
    nickName: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    pinyin: Mock.mock('@string(5,100)'),
    post: Mock.mock('@string(5,100)'),
    sex: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    statusDesc: Mock.mock('@string(5,100)'),
    title: Mock.mock('@ctitle(5,20)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function FriendshipResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    pinyin: Mock.mock('@string(5,100)'),
    gratefulName: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function GetUnreadPageReq() {
  return {
    imKeyBorardId: Mock.mock('@guid'),
    'requestIdList|1-20': [Mock.mock('@string(5,100)')],
  }
}
export function BirdF2fKeyBorardListResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    avatarUrl: Mock.mock('@url'),
    f2fBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function BirdTransferReq() {
  return {
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function InviteToBirdReq() {
  return {
    'applyIds|1-20': [Mock.mock('@string(5,100)')],
    desc: Mock.mock('@string(5,100)'),
    birdName: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    inviterId: Mock.mock('@guid'),
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
export function MemberBirdStatusResp() {
  return {
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    status: Mock.mock('@string(5,100)'),
    statusDesc: Mock.mock('@string(5,100)'),
  }
}
export function MessageSyncDTO() {
  return {
    applyType: Mock.mock('@string(5,100)'),
    'cardMessageIdList|1-20': [Mock.mock('@string(5,100)')],
    channel: Mock.mock('@string(5,100)'),
    clientMessageId: Mock.mock('@guid'),
    content: Mock.mock('@string(5,100)'),
    contentType: Mock.mock('@string(5,100)'),
    'excludeKeyBorardIds|1-20': [Mock.mock('@string(5,100)')],
    fileId: Mock.mock('@guid'),
    forwardMessageId: Mock.mock('@guid'),
    'birdIdList|1-20': [Mock.mock('@string(5,100)')],
    'receiverList|1-20': [Mock.mock('@string(5,100)')],
    sender: Mock.mock('@string(5,100)'),
  }
}
export function PhoneFriendshipResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isFriend: Mock.mock('@boolean'),
    phone: Mock.mock('@string(5,100)'),
    pinyin: Mock.mock('@string(5,100)'),
    gratefulName: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function PhoneListReq() {
  return {
    imKeyBorardId: Mock.mock('@guid'),
    'phoneList|1-20': [Mock.mock('@string(5,100)')],
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
export function PutFileResp() {
  return {
    happyId: Mock.mock('@guid'),
    fileId: Mock.mock('@guid'),
    originalFileName: Mock.mock('@string(5,100)'),
    url: Mock.mock('@url'),
  }
}
export function QueryLastMessageResp() {
  return {
    appType: Mock.mock('@integer(3,1000)'),
    isForceUpdate: Mock.mock('@boolean'),
    versionDesc: Mock.mock('@string(5,100)'),
    versionName: Mock.mock('@string(5,100)'),
    versionUrl: Mock.mock('@url'),
  }
}
export function RequestMsgReqDuiXiang() {
  return {
    content: Mock.mock('@string(5,100)'),
    receiverId: Mock.mock('@guid'),
    requestId: Mock.mock('@guid'),
    senderId: Mock.mock('@guid'),
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
    pinkName: Mock.mock('@string(5,100)'),
    pinkSort: Mock.mock('@integer(3,1000)'),
    status: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function SaveRandomReq() {
  return {
    imKeyBorardId: Mock.mock('@guid'),
    latitude: Mock.mock('@string(5,100)'),
    longitude: Mock.mock('@string(5,100)'),
    random: Mock.mock('@string(5,100)'),
  }
}
export function SearchBeforeAddFriendReq() {
  return {
    excludeMemberImBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isShowFullName: Mock.mock('@boolean'),
    isShowGratefulName: Mock.mock('@boolean'),
    keyword: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function SearchBeforeAddFriendResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    channel: Mock.mock('@string(5,100)'),
    imKeyBorardId: Mock.mock('@guid'),
    isFriend: Mock.mock('@boolean'),
    isBirdMember: Mock.mock('@boolean'),
    phone: Mock.mock('@string(5,100)'),
    pinyin: Mock.mock('@string(5,100)'),
    gratefulName: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function SearchMapResp() {
  return {
    hasMore: Mock.mock('@boolean'),
    'keyBorardList|1-20': [SearchResp()],
  }
}
export function SearchReq() {
  return {
    imKeyBorardId: Mock.mock('@guid'),
    keywords: Mock.mock('@string(5,100)'),
  }
}
export function SearchResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    hiallType: Mock.mock('@string(5,100)'),
    company: Mock.mock('@string(5,100)'),
    createType: Mock.mock('@string(5,100)'),
    birdAttr: Mock.mock('@string(5,100)'),
    birdType: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    job: Mock.mock('@string(5,100)'),
    keywords: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    ownerId: Mock.mock('@guid'),
    post: Mock.mock('@string(5,100)'),
    total: Mock.mock('@integer(3,1000)'),
  }
}
export function SwitchKeyBorardListResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    imKeyBorardId: Mock.mock('@guid'),
    phone: Mock.mock('@string(5,100)'),
    satoken: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function SwitchKeyBorardReq() {
  return {
    deviceId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function UnreadResp() {
  return {
    isRead: Mock.mock('@boolean'),
    requestId: Mock.mock('@guid'),
  }
}
export function KeyBorardBindReq() {
  return {
    channel: Mock.mock('@string(5,100)'),
    deviceId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function KeyBorardBindResp() {}
export function KeyBorardCancelReq() {
  return {
    imKeyBorardId: Mock.mock('@guid'),
    smsCode: Mock.mock('@string(5,100)'),
  }
}
export function KeyBorardDetailResp() {
  return {
    hasSameGrateful: Mock.mock('@boolean'),
    imBirdId: Mock.mock('@guid'),
    isAttention: Mock.mock('@boolean'),
    isFrinedship: Mock.mock('@boolean'),
    isNotice: Mock.mock('@boolean'),
    isPrivate: Mock.mock('@boolean'),
    isTop: Mock.mock('@boolean'),
    remark: Mock.mock('@string(5,100)'),
    showRemark: Mock.mock('@boolean'),
  }
}
export function KeyBorardListAllGratefulResp() {
  return {
    hasMore: Mock.mock('@boolean'),
    gratefulId: Mock.mock('@guid'),
    gratefulName: Mock.mock('@string(5,100)'),
    'keyBorardList|1-20': [DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp()],
  }
}
export function KeyBorardRespDuiXiang() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    whiteId: Mock.mock('@guid'),
    whiteName: Mock.mock('@string(5,100)'),
    email: Mock.mock('@string(5,100)'),
    birdMemberRemark: Mock.mock('@string(5,100)'),
    imKeyBorardId: Mock.mock('@guid'),
    isApprove: Mock.mock('@boolean'),
    isBirdApprove: Mock.mock('@boolean'),
    isNotice: Mock.mock('@boolean'),
    job: Mock.mock('@string(5,100)'),
    nickName: Mock.mock('@string(5,100)'),
    parentWhitePath: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    pinyin: Mock.mock('@string(5,100)'),
    post: Mock.mock('@string(5,100)'),
    requestChannel: Mock.mock('@string(5,100)'),
    sex: Mock.mock('@string(5,100)'),
    status: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    gratefulName: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function KeyBorardGratefulReq() {
  return {
    stationKeyBorardId: Mock.mock('@guid'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function ErWeiMa() {
  return {
    id: Mock.mock('@guid'),
    type: Mock.mock('@string(5,100)'),
  }
}
export function XiaoDaoXiaoXi() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    channel: Mock.mock('@string(5,100)'),
    hiallName: Mock.mock('@string(5,100)'),
    hiallType: Mock.mock('@string(5,100)'),
    birdAttr: Mock.mock('@string(5,100)'),
    'birdIdList|1-20': [Mock.mock('@string(5,100)')],
    birdStatus: Mock.mock('@boolean'),
    birdType: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isAllSilence: Mock.mock('@boolean'),
    isAtAll: Mock.mock('@boolean'),
    isFriendship: Mock.mock('@boolean'),
    isModifyName: Mock.mock('@boolean'),
    isNotice: Mock.mock('@boolean'),
    isOrdinaryInvent: Mock.mock('@boolean'),
    isPrivate: Mock.mock('@boolean'),
    isShow: Mock.mock('@boolean'),
    isTop: Mock.mock('@boolean'),
    job: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    nickName: Mock.mock('@string(5,100)'),
    post: Mock.mock('@string(5,100)'),
    receiver: Mock.mock('@string(5,100)'),
    total: Mock.mock('@integer(3,1000)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function XiaoDaoXiaoXiQiuQian() {
  return {
    channel: Mock.mock('@string(5,100)'),
    'birdIdList|1-20': [Mock.mock('@string(5,100)')],
    imKeyBorardId: Mock.mock('@guid'),
    limit: Mock.mock('@integer(3,1000)'),
    selectSum: Mock.mock('@boolean'),
    skipCount: Mock.mock('@integer(3,1000)'),
  }
}
export function XiaoDaoXiaoXiQiuQianXiangYing() {
  return {
    channel: Mock.mock('@string(5,100)'),
    hiallAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    hiallCompany: Mock.mock('@string(5,100)'),
    hiallJob: Mock.mock('@string(5,100)'),
    hiallName: Mock.mock('@string(5,100)'),
    hiallPost: Mock.mock('@string(5,100)'),
    hiallRemark: Mock.mock('@string(5,100)'),
    hiallType: Mock.mock('@string(5,100)'),
    birdAttr: Mock.mock('@string(5,100)'),
    birdId: Mock.mock('@guid'),
    birdType: Mock.mock('@string(5,100)'),
    isAttention: Mock.mock('@boolean'),
    isFriendship: Mock.mock('@boolean'),
    isNotice: Mock.mock('@boolean'),
    isSameSubsidiary: Mock.mock('@boolean'),
    isSameGrateful: Mock.mock('@boolean'),
    isTop: Mock.mock('@boolean'),
    modified: Mock.mock('@string(5,100)'),
    msgApplyType: Mock.mock('@string(5,100)'),
    msgContent: Mock.mock('@string(5,100)'),
    msgContentType: Mock.mock('@string(5,100)'),
    msgFileUrl: Mock.mock('@url'),
    msgId: Mock.mock('@guid'),
    msgSenderName: Mock.mock('@string(5,100)'),
    msgSequence: Mock.mock('@string(5,100)'),
    msgTime: Mock.mock('@datetime'),
    total: Mock.mock('@string(5,100)'),
    unreadCount: Mock.mock('@integer(3,1000)'),
    unreadSum: Mock.mock('@integer(3,1000)'),
    keyBorardid: Mock.mock('@guid'),
  }
}
export function XiuGaiBeiZhuModifyRemarkBirdReq() {
  return {
    birdRemark: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function XiuGaiBeiZhuModifyfriendRemarkReq() {
  return {
    friendRemark: Mock.mock('@string(5,100)'),
    imFriendId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function XiuGaiTongQianCaoTouXiang() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
  }
}
export function XiuGaiBuLuoShuiLianRuCanModifyBirdNameReq() {
  return {
    birdName: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function RuBuLuoQingQiuAddBirdReq() {
  return {
    applyId: Mock.mock('@guid'),
    imBirdId: Mock.mock('@guid'),
    inviterId: Mock.mock('@guid'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function ChuangJianXiaoDaoXiaoXi() {
  return {
    channel: Mock.mock('@string(5,100)'),
    checkCache: Mock.mock('@boolean'),
    'birdIdList|1-20': [Mock.mock('@string(5,100)')],
    'receiverIdList|1-20': [Mock.mock('@string(5,100)')],
    updateBirdHiall: Mock.mock('@boolean'),
  }
}
export function ChuangJianGengXinDuiXiangBirdSaveReq() {
  return {
    desc: Mock.mock('@string(5,100)'),
    'memberIdList|1-20': [Mock.mock('@string(5,100)')],
    name: Mock.mock('@string(5,100)'),
    ownerId: Mock.mock('@guid'),
  }
}
export function LiShiXiaoXiMessageHistoryReq() {
  return {
    imBirdId: Mock.mock('@guid'),
    orderType: Mock.mock('@integer(3,1000)'),
    page: Mock.mock('@integer(3,1000)'),
    sequence: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function HaoYouFriendshipReq() {
  return {
    imFriendId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isNotice: Mock.mock('@boolean'),
    isTop: Mock.mock('@boolean'),
  }
}
export function HaoYouQiuQianLvYouFriendshipQueryReq() {
  return {
    excludeMemberImBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    keyword: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function XiaoXiack() {
  return {
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function XiaoXiDaoLaJi() {
  return {
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    'messageIdList|1-20': [Mock.mock('@string(5,100)')],
  }
}
export function XiaoXiDuiXiang() {
  return {
    applyType: Mock.mock('@string(5,100)'),
    'cardMessageList|1-20': [ZhuanFaXiaoXiDuiXiang()],
    content: Mock.mock('@string(5,100)'),
    contentType: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    fileId: Mock.mock('@guid'),
    fileName: Mock.mock('@string(5,100)'),
    fileSize: Mock.mock('@string(5,100)'),
    fileText: Mock.mock('@string(5,100)'),
    fileTime: Mock.mock('@datetime'),
    fileType: Mock.mock('@string(5,100)'),
    fileUrl: Mock.mock('@url'),
    birdId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    nickName: Mock.mock('@string(5,100)'),
    senderAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    senderId: Mock.mock('@guid'),
    senderName: Mock.mock('@string(5,100)'),
    sequence: Mock.mock('@string(5,100)'),
  }
}
export function XiaoXiSouSuoShiTi() {
  return {
    birdId: Mock.mock('@guid'),
    keywords: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@string(5,100)'),
    keyBorardId: Mock.mock('@guid'),
  }
}
export function XiaoXiXiangQingMessageDetailReq() {
  return {
    messageId: Mock.mock('@guid'),
  }
}
export function TianJiaHaoYouAddFriendReq() {
  return {
    channel: Mock.mock('@string(5,100)'),
    content: Mock.mock('@string(5,100)'),
    friendRemark: Mock.mock('@string(5,100)'),
    imFriendId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isTop: Mock.mock('@boolean'),
    phone: Mock.mock('@string(5,100)'),
  }
}
export function TianJiaWoWeiHaoYouHaoKanFangShi() {
  return {
    imKeyBorardId: Mock.mock('@guid'),
    'requestChannels|1-20': [Mock.mock('@string(5,100)')],
  }
}
export function QingKongXiaoXiRuCan() {
  return {
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function QingKongXiaoXiJiLu() {
  return {
    channel: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function BanBen() {
  return {
    appType: Mock.mock('@string(5,100)'),
    isForceUpdate: Mock.mock('@boolean'),
    versionDesc: Mock.mock('@string(5,100)'),
    versionName: Mock.mock('@string(5,100)'),
    versionNum: Mock.mock('@string(5,100)'),
    versionUrl: Mock.mock('@url'),
  }
}
export function TongQianCaoSuoYouFangDongKeyBorardListAllGratefulReq() {
  return {
    excludeMemberImBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    keyword: Mock.mock('@string(5,100)'),
  }
}
export function DengLuXiangYingShiTi() {
  return {
    channel: Mock.mock('@string(5,100)'),
    code: 200,
    imKeyBorardId: Mock.mock('@guid'),
    newKeyBorard: Mock.mock('@boolean'),
    satoken: Mock.mock('@string(5,100)'),
    setPassWord: Mock.mock('@boolean'),
    token: Mock.mock('@string(5,100)'),
    tokenTimeOut: Mock.mock('@datetime'),
    keyBorardId: Mock.mock('@guid'),
  }
}
export function FangDongXinXi() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    channel: Mock.mock('@string(5,100)'),
    checked: Mock.mock('@boolean'),
    kind: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    post: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    gratefulName: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function BuLuoXinXiBirdDetailReq() {
  return {
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isNotice: Mock.mock('@boolean'),
    isTop: Mock.mock('@boolean'),
  }
}
export function BuLuoFenYeBirdPageListReq() {
  return {
    imKeyBorardId: Mock.mock('@guid'),
    keyword: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function BuLuoDuiXiangBirdDetailResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    createType: Mock.mock('@string(5,100)'),
    whiteId: Mock.mock('@guid'),
    whitePath: Mock.mock('@string(5,100)'),
    desc: Mock.mock('@string(5,100)'),
    birdAttr: Mock.mock('@string(5,100)'),
    birdBelong: Mock.mock('@string(5,100)'),
    birdType: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    isAdminConfirm: Mock.mock('@boolean'),
    isAllSilence: Mock.mock('@boolean'),
    isAtAll: Mock.mock('@boolean'),
    isModifyName: Mock.mock('@boolean'),
    isOrdinaryInvent: Mock.mock('@boolean'),
    isPrivate: Mock.mock('@boolean'),
    name: Mock.mock('@string(5,100)'),
    notice: Mock.mock('@string(5,100)'),
    ownerId: Mock.mock('@guid'),
    status: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    total: Mock.mock('@integer(3,1000)'),
  }
}
export function BuLuoDuiXiangBirdResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    hiallType: Mock.mock('@string(5,100)'),
    createType: Mock.mock('@string(5,100)'),
    birdAttr: Mock.mock('@string(5,100)'),
    birdType: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
    ownerId: Mock.mock('@guid'),
    total: Mock.mock('@integer(3,1000)'),
  }
}
export function BuLuoChengYuanXinXiDuiXiangBirdMemberResp() {
  return {
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isNotice: Mock.mock('@boolean'),
    isTop: Mock.mock('@boolean'),
    memberAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    memberName: Mock.mock('@string(5,100)'),
    memberPhone: Mock.mock('@string(5,100)'),
    memberRemark: Mock.mock('@string(5,100)'),
    memberGratefulName: Mock.mock('@string(5,100)'),
    memberType: Mock.mock('@string(5,100)'),
  }
}
export function BuLuoChengYuanFenYeBirdMemberPageReq() {
  return {
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isDeleteMember: Mock.mock('@boolean'),
    keyword: Mock.mock('@string(5,100)'),
    memberType: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function BuLuoChengYuanDaoLaJiBirdMemberDelReq() {
  return {
    imBirdId: Mock.mock('@guid'),
    'imMemberIdList|1-20': [Mock.mock('@string(5,100)')],
    imKeyBorardId: Mock.mock('@guid'),
  }
}
export function BuLuoChengYuanJiaShiBirdMemberSaveReq() {
  return {
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    'imKeyBorardIdList|1-20': [Mock.mock('@string(5,100)')],
  }
}
export function BuLuoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq() {
  return {
    imBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isAdminConfirm: Mock.mock('@boolean'),
    isAllSilence: Mock.mock('@boolean'),
    isAtAll: Mock.mock('@boolean'),
    isModifyName: Mock.mock('@boolean'),
    isOrdinaryInvent: Mock.mock('@boolean'),
    isPrivate: Mock.mock('@boolean'),
  }
}
export function SheZhiMoRenZhiYiChang() {
  return {
    kind: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    gratefulName: Mock.mock('@string(5,100)'),
  }
}
export function QingQiuHuiFuXiaoXiQiuQianReqMsgDetailResp() {
  return {
    content: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    isRead: Mock.mock('@boolean'),
    receiverId: Mock.mock('@guid'),
    receiverName: Mock.mock('@string(5,100)'),
    requestId: Mock.mock('@guid'),
    requestMsgId: Mock.mock('@guid'),
    senderId: Mock.mock('@guid'),
    senderName: Mock.mock('@string(5,100)'),
  }
}
export function QingQiuXiaoXiQiuQianRequestPageListReq() {
  return {
    imKeyBorardId: Mock.mock('@guid'),
    keyword: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq() {
  return {
    imKeyBorardId: Mock.mock('@guid'),
    requestId: Mock.mock('@guid'),
    'requestMsgIdList|1-20': [Mock.mock('@string(5,100)')],
  }
}
export function ZhuanFaXiaoXiDuiXiang() {
  return {
    applyType: Mock.mock('@string(5,100)'),
    content: Mock.mock('@string(5,100)'),
    contentType: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    fileId: Mock.mock('@guid'),
    fileName: Mock.mock('@string(5,100)'),
    fileSize: Mock.mock('@string(5,100)'),
    fileText: Mock.mock('@string(5,100)'),
    fileTime: Mock.mock('@datetime'),
    fileType: Mock.mock('@string(5,100)'),
    fileUrl: Mock.mock('@url'),
    birdId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    senderAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    senderId: Mock.mock('@guid'),
    senderName: Mock.mock('@string(5,100)'),
    sequence: Mock.mock('@string(5,100)'),
  }
}
export function TongGuoJuJueApproveReq() {
  return {
    imKeyBorardId: Mock.mock('@guid'),
    isNotice: Mock.mock('@boolean'),
    permitted: Mock.mock('@boolean'),
    remark: Mock.mock('@string(5,100)'),
    requestId: Mock.mock('@guid'),
  }
}
export function YaoQingRuBuLuoXiangYing() {
  return {
    'checkKeyBorardIds|1-20': [Mock.mock('@string(5,100)')],
    'checkKeyBorards|1-20': [KeyBorardRespDuiXiang()],
    inviteMsg: Mock.mock('@string(5,100)'),
  }
}
export function DaDuNanXinXiWhiteResp() {
  return {
    whiteId: Mock.mock('@guid'),
    whiteName: Mock.mock('@string(5,100)'),
    imBirdId: Mock.mock('@guid'),
  }
}
export function DaDuNanQiuQianWhiteListReq() {
  return {
    getImBirdId: Mock.mock('@guid'),
    parentId: Mock.mock('@guid'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function DaDuNanLvYouRuCan() {
  return {
    whiteId: Mock.mock('@guid'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function DaDuNanTongQianCaoFenYeKeyBorardPageReq() {
  return {
    whiteId: Mock.mock('@guid'),
    excludeMemberImBirdId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    keyword: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function DaDuNanTongQianCaoQiuQianWhiteListReq() {
  return {
    getImBirdId: Mock.mock('@guid'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp() {
  return {
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    avatarId: Mock.mock('@guid'),
    imKeyBorardId: Mock.mock('@guid'),
    isBirdMember: Mock.mock('@boolean'),
    gratefulId: Mock.mock('@guid'),
    gratefulName: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function YanChangChunHuaXiaoXiFenYeRequestPageListResp() {
  return {
    applyAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    applyAvatarUrl: Mock.mock('@url'),
    applyId: Mock.mock('@guid'),
    applyName: Mock.mock('@string(5,100)'),
    avatar: Mock.Random.image('200x100', Mock.Random.color()),
    content: Mock.mock('@string(5,100)'),
    inviterAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    inviterAvatarUrl: Mock.mock('@url'),
    inviterId: Mock.mock('@guid'),
    inviterName: Mock.mock('@string(5,100)'),
    receiverAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    receiverAvatarUrl: Mock.mock('@url'),
    receiverId: Mock.mock('@guid'),
    receiverName: Mock.mock('@string(5,100)'),
    requestId: Mock.mock('@guid'),
    status: Mock.mock('@integer(3,1000)'),
    gratefulName: Mock.mock('@string(5,100)'),
    type: Mock.mock('@integer(3,1000)'),
    keyBorardAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    keyBorardAvatarUrl: Mock.mock('@url'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function YanChangChunHuaXiaoXiXiangQingRequestDetailResp() {
  return {
    applyAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    applyId: Mock.mock('@guid'),
    applyName: Mock.mock('@string(5,100)'),
    applyGratefulName: Mock.mock('@string(5,100)'),
    channel: Mock.mock('@string(5,100)'),
    content: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    inviterAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    inviterId: Mock.mock('@guid'),
    inviterName: Mock.mock('@string(5,100)'),
    isFriendshipOrHasSameGrateful: Mock.mock('@boolean'),
    'msgList|1-20': [QingQiuHuiFuXiaoXiQiuQianReqMsgDetailResp()],
    receiverAvatar: Mock.Random.image('200x100', Mock.Random.color()),
    receiverId: Mock.mock('@guid'),
    receiverName: Mock.mock('@string(5,100)'),
    receiverGratefulName: Mock.mock('@string(5,100)'),
    remark: Mock.mock('@string(5,100)'),
    requestId: Mock.mock('@guid'),
    status: Mock.mock('@integer(3,1000)'),
    total: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
