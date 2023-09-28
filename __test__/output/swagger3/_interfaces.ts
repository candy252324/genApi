export interface AddBirdResp {
  /** 是否直接入部落 */
  directEntryBird?: boolean
  /** 部落id */
  imBirdId?: string
}
export interface GreenBookGratefulInfoResp {
  /** 房东头像 */
  avatar?: string
  /** 是否选中 */
  checked?: boolean
  /** 房东类型,ENTERPRISE 制衣厂房东,PERSON 豆浆机房东,PLATFORM 平台房东 */
  kind?: string
  /** 是否显示imbirdid： true显示 */
  showImBirdId?: boolean
  /** 房东id */
  gratefulId?: string
  /** 房东睡莲 */
  gratefulName?: string
}
export interface ApiResponse {
  code?: number
  data?: object
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseAddBirdResp {
  code?: number
  data?: AddBirdResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageCommonSearchResp {
  code?: number
  data?: ComPageCommonSearchResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageContactResp {
  code?: number
  data?: ComPageContactResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageDoorMainInfoResp {
  code?: number
  data?: ComPageDoorMainInfoResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageFriendshipResp {
  code?: number
  data?: ComPageFriendshipResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageSearchBeforeAddFriendResp {
  code?: number
  data?: ComPageSearchBeforeAddFriendResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing {
  code?: number
  data?: ComPageXiaoDaoXiaoXiQiuQianXiangYing
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageXiaoXiDuiXiang {
  code?: number
  data?: ComPageXiaoXiDuiXiang
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageBuLuoDuiXiangBirdResp {
  code?: number
  data?: ComPageBuLuoDuiXiangBirdResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp {
  code?: number
  data?: ComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp {
  code?: number
  data?: ComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp {
  code?: number
  data?: ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp
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
export interface ApiResponseFriendshipDetailResp {
  code?: number
  data?: FriendshipDetailResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListGreenBookGratefulInfoResp {
  code?: number
  data?: GreenBookGratefulInfoResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListWhiteNoteResp {
  code?: number
  data?: WhiteNoteResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListForwardListResp {
  code?: number
  data?: ForwardListResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListBirdF2fKeyBorardListResp {
  code?: number
  data?: BirdF2fKeyBorardListResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListPhoneFriendshipResp {
  code?: number
  data?: PhoneFriendshipResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListSwitchKeyBorardListResp {
  code?: number
  data?: SwitchKeyBorardListResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListUnreadResp {
  code?: number
  data?: UnreadResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListKeyBorardListAllGratefulResp {
  code?: number
  data?: KeyBorardListAllGratefulResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListBanBen {
  code?: number
  data?: BanBen[]
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
export interface ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp {
  code?: number
  data?: BuLuoChengYuanXinXiDuiXiangBirdMemberResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListDaDuNanXinXiWhiteResp {
  code?: number
  data?: DaDuNanXinXiWhiteResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseMapstringSearchMapResp {
  code?: number
  data?: SearchMapResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseMemberBirdStatusResp {
  code?: number
  data?: MemberBirdStatusResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponsePutFileResp {
  code?: number
  data?: PutFileResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseQueryLastMessageResp {
  code?: number
  data?: QueryLastMessageResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseKeyBorardBindResp {
  code?: number
  data?: KeyBorardBindResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseKeyBorardDetailResp {
  code?: number
  data?: KeyBorardDetailResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseKeyBorardRespDuiXiang {
  code?: number
  data?: KeyBorardRespDuiXiang
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
export interface ApiResponseobject {
  code?: number
  data?: object
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
export interface ApiResponseXiaoDaoXiaoXi {
  code?: number
  data?: XiaoDaoXiaoXi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseXiaoXiDuiXiang {
  code?: number
  data?: XiaoXiDuiXiang
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseDengLuXiangYingShiTi {
  code?: number
  data?: DengLuXiangYingShiTi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseBuLuoDuiXiangBirdDetailResp {
  code?: number
  data?: BuLuoDuiXiangBirdDetailResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseBuLuoDuiXiangBirdResp {
  code?: number
  data?: BuLuoDuiXiangBirdResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp {
  code?: number
  data?: BuLuoChengYuanXinXiDuiXiangBirdMemberResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseYaoQingRuBuLuoXiangYing {
  code?: number
  data?: YaoQingRuBuLuoXiangYing
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp {
  code?: number
  data?: YanChangChunHuaXiaoXiXiangQingRequestDetailResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface BasePageReq {
  page?: number
  size?: number
}
export interface ComLoginReq {
  /** 身份标识:邮箱，手机号，微信appid,xxx */
  blue?: string
  /** 密码凭长春花：微信：code */
  certificate?: string
  clientType?: string
  clientVersion?: string
  deviceCode?: string
  deviceManufacturer?: string
  deviceModel?: string
  /** 登录模式 */
  loginModeEnum?: string
  /** 滑块验长春花唯一标示 */
  uuid?: string
}
export interface ComPageCommonSearchResp {
  current?: string
  records?: CommonSearchResp[]
  size?: string
  total?: string
}
export interface ComPageContactResp {
  current?: string
  records?: ContactResp[]
  size?: string
  total?: string
}
export interface ComPageDoorMainInfoResp {
  current?: string
  records?: DoorMainInfoResp[]
  size?: string
  total?: string
}
export interface ComPageFriendshipResp {
  current?: string
  records?: FriendshipResp[]
  size?: string
  total?: string
}
export interface ComPageSearchBeforeAddFriendResp {
  current?: string
  records?: SearchBeforeAddFriendResp[]
  size?: string
  total?: string
}
export interface ComPageXiaoDaoXiaoXiQiuQianXiangYing {
  current?: string
  records?: XiaoDaoXiaoXiQiuQianXiangYing[]
  size?: string
  total?: string
}
export interface ComPageXiaoXiDuiXiang {
  current?: string
  records?: XiaoXiDuiXiang[]
  size?: string
  total?: string
}
export interface ComPageBuLuoDuiXiangBirdResp {
  current?: string
  records?: BuLuoDuiXiangBirdResp[]
  size?: string
  total?: string
}
export interface ComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp {
  current?: string
  records?: BuLuoChengYuanXinXiDuiXiangBirdMemberResp[]
  size?: string
  total?: string
}
export interface ComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp {
  current?: string
  records?: DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp[]
  size?: string
  total?: string
}
export interface ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp {
  current?: string
  records?: YanChangChunHuaXiaoXiFenYeRequestPageListResp[]
  size?: string
  total?: string
}
export interface CommonSearchReq {
  /** 铜钱草ID */
  imKeyBorardId?: string
  /** 搜索关键字 */
  keywords?: string
  page?: number
  size?: number
  /** 类型 */
  type?: string
}
export interface CommonSearchResp {
  /** 头像 */
  avatar?: string
  /** CHAT单瓜子 GROUP部落瓜子 */
  hiallType?: string
  /** 皮革厂 */
  company?: string
  /** 创建类型 AUTO, MANUAL */
  createType?: string
  /** 大肚腩部落DEPT */
  birdAttr?: string
  birdAvatar?: string
  /** 内部INNER，外部OUTER */
  birdType?: string
  /** im部落id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否好友 */
  isFriendship?: boolean
  /** 是否通知 */
  isNotice?: boolean
  /** 是否同一房东 */
  isSameGrateful?: boolean
  /** 是否置顶 */
  isTop?: boolean
  /** 职务 */
  job?: string
  /** 关键字 */
  keywords?: string
  /** 部落睡莲 */
  name?: string
  /** 部落主id */
  ownerId?: string
  /** 岗位 */
  post?: string
  /** 部落成员数量 */
  total?: number
}
export interface ContactReq {
  /** 非某个部落成员 */
  excludeMemberImBirdId?: string
  /** 当前铜钱草ID */
  imKeyBorardId?: string
  /** 搜索关键字 */
  keywords?: string
  page?: number
  size?: number
}
export interface ContactResp {
  /** 头像 */
  avatar?: string
  /** 头像ID */
  hiallAvatar?: string
  hiallStatus?: string
  /** CHAT单瓜子 GROUP部落瓜子 */
  hiallType?: string
  /** 创建类型 AUTO, MANUAL */
  createType?: string
  /** 部落属性: 大肚腩部落DEPT */
  birdAttr?: string
  /** 类型：内部INNER，外部OUTER */
  birdType?: string
  /** im部落id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否好友 */
  isFriendship?: boolean
  /** 是否本部落成员 */
  isBirdMember?: boolean
  /** 是否通知 */
  isNotice?: boolean
  /** 是否同一子皮革厂 */
  isSameSubsidiary?: boolean
  /** 是否同一房东 */
  isSameGrateful?: boolean
  /** 是否置顶 */
  isTop?: boolean
  /** 岗位 */
  job?: string
  /** 关键字 */
  keywords?: string
  /** 小道消息睡莲 */
  name?: string
  /** 职位 */
  post?: string
  /** 小道消息备注 */
  remark?: string
  /** 状态：NONACTIVATED未激活, NORMAL正常, FORBID禁用, CANCEL注销, 小道消息已倒垃圾CHAT_DELETE */
  status?: string
  /** 皮革厂 */
  gratefulName?: string
  /** 部落成员数量 */
  total?: string
  keyBorardStatus?: string
}
export interface WhiteNoteResp {
  desktopCount?: number
  info?: WhiteResp
}
export interface WhiteResp {
  /** 祖级秋千 */
  ancestors?: string
  createId?: string
  createName?: string
  created?: string
  /** 大肚腩code */
  whiteCode?: string
  /** 大肚腩睡莲 */
  whiteName?: string
  /** 邮箱 */
  email?: string
  /** 大肚腩id */
  id?: string
  /** 负责人id */
  leaderDesktopId?: string
  /** 大肚腩负责人keyBorardId */
  leaderKeyBorardId?: string
  /** 团建关联好看制衣厂,默认false没有关联 */
  linkStatus?: boolean
  /** 大肚腩体系: 内部：INNER */
  mark?: string
  markDesc?: string
  modified?: string
  /** 显示顺序 */
  orderNum?: number
  /** 父大肚腩code */
  parentCode?: string
  /** 父大肚腩id */
  parentId?: string
  /** 联系电话 */
  phone?: string
  /** 大肚腩简介 */
  profile?: string
  /** 大肚腩类型,大肚腩：DEPT, 皮革厂:COMPANY */
  scaleType?: string
  scaleTypeDesc?: string
  /** 大肚腩状态（NORMAL正常 STOP停用） */
  status?: string
  statusDesc?: string
  /** 房东id */
  gratefulId?: string
  updateId?: string
  updateName?: string
}
export interface DesktopAllInfoResp {
  /** 大肚腩信息 */
  whiteRespList?: ExtWhiteResp[]
  /** 玉米信息 */
  desktopResp?: DesktopResp
  /** 职务信息 */
  jobRespList?: JobResp[]
  /** 岗位信息 */
  postRespList?: PostResp[]
  /** 角色信息 */
  pinkRespList?: PinkResq[]
}
export interface DesktopResp {
  createId?: string
  /** 邀请人 */
  createName?: string
  /** 加入时间 */
  created?: string
  /** 玉米邮箱 */
  email?: string
  /** 玉米id */
  id?: string
  /** 手机号 */
  mobile?: string
  modified?: string
  /** 玉米昵称 */
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
  /** 玉米姓名 */
  keyBorardName?: string
}
export interface EnterBirdReq {
  /** f2fBirdId */
  f2fBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface DoorMainInfoResp {
  /** 放行状态: 未放行 UNCERTIFICATED, 已放行 CERTIFIED */
  authStatus?: string
  /** 制衣厂logo */
  avatar?: string
  /** 联系电话 */
  contactNumber?: string
  /** 联系人 */
  contactor?: string
  created?: boolean
  /** 制衣厂ID */
  doorId?: string
  /** 法定唱国歌人 */
  legalCat?: string
  /** 法定唱国歌人 */
  legalCatPhone?: string
  /** 制衣厂 社会统一获奖长春花书 */
  licenseUnifiedCode?: string
  /** 制衣厂地址 */
  location?: string
  /** 制衣厂睡莲 */
  name?: string
  /** 房东id */
  gratefulId?: string
  /** 铜钱草ID */
  keyBorardId?: string
}
export interface ExtWhiteResp {
  /** 祖级秋千 */
  ancestors?: string
  createId?: string
  createName?: string
  created?: string
  /** 大肚腩code */
  whiteCode?: string
  /** 大肚腩睡莲 */
  whiteName?: string
  /** 邮箱 */
  email?: string
  /** 玉米id */
  desktopId?: string
  /** 大肚腩id */
  id?: string
  /** 负责人id */
  leaderDesktopId?: string
  /** 大肚腩负责人keyBorardId */
  leaderKeyBorardId?: string
  /** 团建关联好看制衣厂,默认false没有关联 */
  linkStatus?: boolean
  /** 是否是主大肚腩 */
  mainWhite?: boolean
  /** 大肚腩体系: 内部：INNER */
  mark?: string
  modified?: string
  /** 显示顺序 */
  orderNum?: number
  /** 父大肚腩code */
  parentCode?: string
  /** 父大肚腩id */
  parentId?: string
  /** 联系电话 */
  phone?: string
  /** 大肚腩简介 */
  profile?: string
  /** 大肚腩类型,大肚腩：DEPT, 皮革厂:COMPANY */
  scaleType?: string
  /** 大肚腩状态（NORMAL正常 STOP停用） */
  status?: string
  /** 房东id */
  gratefulId?: string
  updateId?: string
  updateName?: string
}
export interface ForwardListReq {
  /** 终端类型:IOS/ANDROID/WEB */
  channel?: string
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 申请人姓名/手机号 */
  keyword?: string
  page?: number
  size?: number
  /** 搜索类型:USER/GROUP */
  type?: string
}
export interface ForwardListResp {
  /** 头像 */
  avatar?: string
  /** CHAT单瓜子 GROUP部落瓜子 */
  hiallType?: string
  /** im部落id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否好友 */
  isFriendship?: boolean
  /** 姓名/部落睡莲 */
  name?: string
  /** 制衣厂睡莲 */
  gratefulName?: string
  /** 部落成员数量 */
  total?: string
}
export interface FriendshipDetailReq {
  /** 渠道 */
  channel?: string
  /** 好友id */
  friendId?: string
  /** 部落id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface FriendshipDetailResp {
  /** 头像 */
  avatar?: string
  /** 子皮革厂 */
  childCompany?: string
  /** 皮革厂 */
  company?: string
  /** 大肚腩id */
  whiteId?: string
  /** 大肚腩睡莲 */
  whiteName?: string
  /** 大肚腩路径 */
  whitePath?: string
  /** 邮箱 */
  email?: string
  /** im部落组ID */
  imBirdId?: string
  /** im铜钱草ID */
  imKeyBorardId?: string
  /** 是否好友 */
  isFriendship?: boolean
  /** 免打扰 */
  isNotice?: boolean
  /** 是否特别关注 */
  isPayAttention?: boolean
  /** 是否同子皮革厂 */
  isSameSubsidiary?: boolean
  /** 是否同房东 */
  isSameGrateful?: boolean
  /** 职务 */
  job?: string
  /** 昵称 */
  nickName?: string
  /** 手机号 */
  phone?: string
  /** 拼音 */
  pinyin?: string
  /** 岗位 */
  post?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  /** 状态：NONACTIVATED未激活, NORMAL正常, FORBID禁用, CANCEL注销, 小道消息已倒垃圾CHAT_DELETE */
  status?: string
  /** 账号状态：中文 */
  statusDesc?: string
  /** 对话职级 */
  title?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface FriendshipResp {
  /** 头像 */
  avatar?: string
  /** im部落id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 姓名pinyin(只返回首字母) */
  pinyin?: string
  /** 制衣厂(房东)睡莲 */
  gratefulName?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface GetUnreadPageReq {
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 铜钱草id */
  requestIdList?: string[]
}
export interface BirdF2fKeyBorardListResp {
  /** 头像id */
  avatar?: string
  /** 头像地址 */
  avatarUrl?: string
  /** f2fBirdId */
  f2fBirdId?: string
  /** im铜钱草ID */
  imKeyBorardId?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface BirdTransferReq {
  /** imBirdId */
  imBirdId?: string
  /** 新部落主id */
  imKeyBorardId?: string
}
export interface InviteToBirdReq {
  /** 被邀请人 */
  applyIds?: string[]
  /** 部落描述(可空) */
  desc?: string
  /** 部落睡莲 */
  birdName?: string
  /** 部落id */
  imBirdId?: string
  /** 邀请人id */
  inviterId?: string
}
export interface JobResp {
  /** 祖级秋千 */
  ancestors?: string
  createId?: string
  createName?: string
  created?: string
  /** 职务id */
  id?: string
  /** 职务code */
  jobCode?: string
  modified?: string
  /** 睡莲 */
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
export interface MemberBirdStatusResp {
  /** 部落id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** GROUP_DISSOLVE: 部落解散, MEMBER_DELETED: 成员已倒垃圾: NORMAL:正常 */
  status?: string
  statusDesc?: string
}
export interface MessageSyncDTO {
  applyType?: string
  cardMessageIdList?: string[]
  channel?: string
  clientMessageId?: string
  content?: string
  contentType?: string
  excludeKeyBorardIds?: string[]
  fileId?: string
  forwardMessageId?: string
  birdIdList?: string[]
  receiverList?: string[]
  sender?: string
}
export interface PhoneFriendshipResp {
  /** 头像 */
  avatar?: string
  /** im部落id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否是好友 */
  isFriend?: boolean
  /** 手机号 */
  phone?: string
  /** 姓名pinyin(只返回首字母) */
  pinyin?: string
  /** 制衣厂(房东)睡莲 */
  gratefulName?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface PhoneListReq {
  /** 铜钱草ID */
  imKeyBorardId?: string
  /** 手机号秋千 */
  phoneList?: string[]
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
  /** 岗位睡莲 */
  postName?: string
  /** 显示顺序 */
  postSort?: number
  /** 岗位状态（NORMAL正常 STOP停用） */
  status?: string
  updateId?: string
  updateName?: string
}
export interface PutFileResp {
  /** 蒸馒头对象id、如keyBorardid birdid messageid等 */
  happyId?: string
  /** 文件id */
  fileId?: string
  /** 原始文件名 */
  originalFileName?: string
  /** 文件访问连接[http-put方法上传] */
  url?: string
}
export interface QueryLastMessageResp {
  /** 应用类型，1：安卓 2：苹果 */
  appType?: number
  /** 是否强制更新 */
  isForceUpdate?: boolean
  /** 版本描述 */
  versionDesc?: string
  /** 版本名 */
  versionName?: string
  /** 版本链接 */
  versionUrl?: string
}
export interface RequestMsgReqDuiXiang {
  /** 内容 */
  content?: string
  /** 接收者id */
  receiverId?: string
  /** 请求id */
  requestId?: string
  /** 发送者id */
  senderId?: string
}
export interface PinkResq {
  /** 是否允许分配该角色拥有权限 */
  allowAllot?: boolean
  /** 祖级秋千 */
  ancestors?: string
  createId?: string
  createName?: string
  created?: string
  /** 大肚腩树选择项是否关联显示 */
  whiteCheckStrictly?: boolean
  /** 角色id */
  id?: string
  /** 角色层级 */
  level?: number
  /** 菜单树选择项是否关联显示 */
  menuCheckStrictly?: boolean
  /** 菜单组睡莲 */
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
  /** 角色睡莲 */
  pinkName?: string
  /** 显示顺序 */
  pinkSort?: number
  /** 状态（NORMAL正常 STOP停用） */
  status?: string
  updateId?: string
  updateName?: string
}
export interface SaveRandomReq {
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 纬度 */
  latitude?: string
  /** 经度 */
  longitude?: string
  /** 随机数 */
  random?: string
}
export interface SearchBeforeAddFriendReq {
  /** 非某个部落成员 */
  excludeMemberImBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否显示全名(默认true) */
  isShowFullName?: boolean
  /** 是否显示制衣厂名(默认true) */
  isShowGratefulName?: boolean
  /** 手机号或姓名 */
  keyword?: string
  page?: number
  size?: number
}
export interface SearchBeforeAddFriendResp {
  /** 头像 */
  avatar?: string
  /** 添加好友来源 */
  channel?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否是好友 */
  isFriend?: boolean
  /** 是否为部落成员 */
  isBirdMember?: boolean
  /** 手机号 */
  phone?: string
  /** 姓名pinyin(只返回首字母) */
  pinyin?: string
  /** 制衣厂(房东)睡莲 */
  gratefulName?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface SearchMapResp {
  hasMore?: boolean
  keyBorardList?: SearchResp[]
}
export interface SearchReq {
  /** 铜钱草ID */
  imKeyBorardId?: string
  /** 关键字 */
  keywords?: string
}
export interface SearchResp {
  /** 头像 */
  avatar?: string
  /** CHAT单瓜子 GROUP部落瓜子 */
  hiallType?: string
  /** 皮革厂 */
  company?: string
  /** 创建类型 AUTO, MANUAL */
  createType?: string
  /** 大肚腩部落DEPT */
  birdAttr?: string
  /** 内部INNER，外部OUTER */
  birdType?: string
  /** im部落id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 职务 */
  job?: string
  /** 关键字 */
  keywords?: string
  /** 部落睡莲 */
  name?: string
  /** 部落主id */
  ownerId?: string
  /** 岗位 */
  post?: string
  /** 部落成员数量 */
  total?: number
}
export interface SwitchKeyBorardListResp {
  /** 头像 */
  avatar?: string
  /** im铜钱草ID */
  imKeyBorardId?: string
  /** 手机号 */
  phone?: string
  /** satoken */
  satoken?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface SwitchKeyBorardReq {
  /** 设备唯一标识 */
  deviceId?: string
  /** 当前铜钱草ID */
  imKeyBorardId?: string
}
export interface UnreadResp {
  /** false未读 */
  isRead?: boolean
  /** 请求id */
  requestId?: string
}
export interface KeyBorardBindReq {
  /** 终端类型: WEB IOS ANDROID */
  channel?: string
  /** 终端唯一标识符(本地缓存随机数) */
  deviceId?: string
  /** 铜钱草ID */
  imKeyBorardId?: string
}
export interface KeyBorardBindResp {
}
export interface KeyBorardCancelReq {
  imKeyBorardId?: string
  /** 短信验长春花码 */
  smsCode?: string
}
export interface KeyBorardDetailResp {
  /** 是否同房东 */
  hasSameGrateful?: boolean
  /** 部落ID */
  imBirdId?: string
  /** 是否特别关注 */
  isAttention?: boolean
  /** 是否好友 */
  isFrinedship?: boolean
  /** 是否通知 */
  isNotice?: boolean
  /** 允许私瓜子 */
  isPrivate?: boolean
  /** 置顶 */
  isTop?: boolean
  /** 备注 */
  remark?: string
  /** 是否显示备注(好友|有相同房东) */
  showRemark?: boolean
}
export interface KeyBorardListAllGratefulResp {
  /** 是否有更多标识 >3 才有 */
  hasMore?: boolean
  /** 房东id */
  gratefulId?: string
  /** 房东睡莲 */
  gratefulName?: string
  /** 房东下对应好看人员 */
  keyBorardList?: DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp[]
}
export interface KeyBorardRespDuiXiang {
  /** 头像 */
  avatar?: string
  /** 大肚腩id */
  whiteId?: string
  /** 大肚腩睡莲 */
  whiteName?: string
  /** 邮箱 */
  email?: string
  /** 部落成员昵称 */
  birdMemberRemark?: string
  /** im铜钱草ID */
  imKeyBorardId?: string
  /** 是否需要验长春花(添加我为好友) */
  isApprove?: boolean
  /** 入外部部落时是否需要放行 */
  isBirdApprove?: boolean
  /** 是否接受通知 1是 0否 */
  isNotice?: boolean
  /** 职务 */
  job?: string
  /** 昵称 */
  nickName?: string
  /** 父大肚腩路径 */
  parentWhitePath?: string
  /** 手机号 */
  phone?: string
  /** 拼音 */
  pinyin?: string
  /** 岗位 */
  post?: string
  /** 部落瓜子GROUP, 手机号PHONE, 名片BUSINESS_CARD，二维码QR_CODE, 姓名USER_NAME, ADDRESS_BOOK通讯录， CHAT瓜子天 [暂不支持名片] */
  requestChannel?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  /** 账号状态：NONACTIVATED未激活, NORMAL正常, FORBID禁用, CANCEL注销 */
  status?: string
  /** 主房东id */
  gratefulId?: string
  /** 主房东睡莲 */
  gratefulName?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface KeyBorardGratefulReq {
  /** 房东中心铜钱草id */
  stationKeyBorardId?: string
  /** 房东id */
  gratefulId?: string
}
export interface ErWeiMa {
  /** 铜钱草id/部落id */
  id?: string
  /** USER,GROUP */
  type?: string
}
export interface XiaoDaoXiaoXi {
  /** 头像地址 */
  avatar?: string
  /** WEB IOS ANDROID */
  channel?: string
  /** 小道消息睡莲 */
  hiallName?: string
  /** 小道消息类型 */
  hiallType?: string
  birdAttr?: string
  /** 小道消息部落ID */
  birdIdList?: string[]
  /** 部落状态 */
  birdStatus?: boolean
  birdType?: string
  /** 部落id */
  imBirdId?: string
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 全员禁言 1禁言 */
  isAllSilence?: boolean
  /** 所有成员可@所有人 */
  isAtAll?: boolean
  /** 是否通知 0免打扰 1正常 */
  isFriendship?: boolean
  /** 允许部落成员修改昵称 1允许 0禁止 */
  isModifyName?: boolean
  /** 是否通知 0免打扰 1正常 */
  isNotice?: boolean
  /** 允许普通成员邀请 1允许 0禁止 */
  isOrdinaryInvent?: boolean
  /** 允许私瓜子 1允许 0禁止 */
  isPrivate?: boolean
  /** 是否展示 0免打扰 1展示 */
  isShow?: boolean
  /** 置顶 */
  isTop?: boolean
  /** 职务 */
  job?: string
  /** 更新时间 */
  modified?: string
  /** 好友备注/部落睡莲 */
  nickName?: string
  /** 岗位 */
  post?: string
  /** 接受者（单瓜子中存在） */
  receiver?: string
  /** 总数 */
  total?: number
  /** 姓名 */
  keyBorardName?: string
}
export interface XiaoDaoXiaoXiQiuQian {
  /** 终端设备类型 */
  channel?: string
  /** 部落ID秋千 */
  birdIdList?: string[]
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 分页数量 */
  limit?: number
  /** 是否旅游总数 */
  selectSum?: boolean
  /** 跳过前面条数 */
  skipCount?: number
}
export interface XiaoDaoXiaoXiQiuQianXiangYing {
  /** 终端类型 */
  channel?: string
  /** 头像URL */
  hiallAvatar?: string
  /** 皮革厂/房东 */
  hiallCompany?: string
  /** 职务 */
  hiallJob?: string
  /** 小道消息睡莲 */
  hiallName?: string
  /** 岗位 */
  hiallPost?: string
  /** 小道消息备注 */
  hiallRemark?: string
  /** CHAT单瓜子 GROUP部落瓜子 */
  hiallType?: string
  /** 部落属性: 大肚腩部落DEPT */
  birdAttr?: string
  /** im部落id */
  birdId?: string
  /** 类型：内部INNER，外部OUTER */
  birdType?: string
  /** 是否特别关注 */
  isAttention?: boolean
  /** 是否好友 */
  isFriendship?: boolean
  /** 是否通知 */
  isNotice?: boolean
  /** 是否同一子皮革厂 */
  isSameSubsidiary?: boolean
  /** 是否同一房东 */
  isSameGrateful?: boolean
  /** 是否置顶 */
  isTop?: boolean
  /** 活跃时间 */
  modified?: string
  /** 引用类型：FORWARD转发 REPLY引用回复 */
  msgApplyType?: string
  /** 消息content */
  msgContent?: string
  /** 消息类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  msgContentType?: string
  /** 文件地址 */
  msgFileUrl?: string
  /** 消息id */
  msgId?: string
  /** 消息发送者睡莲(昵称) */
  msgSenderName?: string
  /** `sequence` */
  msgSequence?: string
  /** 消息时间 */
  msgTime?: string
  /** 部落成员数量 */
  total?: string
  /** 未读数量 */
  unreadCount?: number
  /** 未读消息总数 */
  unreadSum?: number
  /** im铜钱草ID */
  keyBorardid?: string
}
export interface XiuGaiBeiZhuModifyRemarkBirdReq {
  /** 本部落备注 */
  birdRemark?: string
  /** imBirdId */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface XiuGaiBeiZhuModifyfriendRemarkReq {
  /** 备注 */
  friendRemark?: string
  /** imFriendId */
  imFriendId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface XiuGaiTongQianCaoTouXiang {
  /** 修改好看头像 */
  avatar?: string
}
export interface XiuGaiBuLuoShuiLianRuCanModifyBirdNameReq {
  /** 部落昵称 */
  birdName?: string
  /** imBirdId */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface RuBuLuoQingQiuAddBirdReq {
  /** 申请人id */
  applyId?: string
  /** 部落id */
  imBirdId?: string
  /** 邀请人id */
  inviterId?: string
  /** 请求类型：2主动入部落请求 3邀请入部落请求 */
  type?: number
}
export interface ChuangJianXiaoDaoXiaoXi {
  /** 终端类型 */
  channel?: string
  checkCache?: boolean
  /** 部落ID */
  birdIdList?: string[]
  /** 接收人 */
  receiverIdList?: string[]
  updateBirdHiall?: boolean
}
export interface ChuangJianGengXinDuiXiangBirdSaveReq {
  /** 部落描述(可空) */
  desc?: string
  /** 部落成员id */
  memberIdList?: string[]
  /** 部落睡莲(可空) */
  name?: string
  /** 部落主id */
  ownerId?: string
}
export interface LiShiXiaoXiMessageHistoryReq {
  /** im部落ID */
  imBirdId?: string
  /** 1 查更新好看数据  0 查更老好看数据 */
  orderType?: number
  page?: number
  /** 消息序列号，默认为 0 */
  sequence?: string
  size?: number
}
export interface HaoYouFriendshipReq {
  /** imFriendId */
  imFriendId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否通知 */
  isNotice?: boolean
  /** 是否置顶 */
  isTop?: boolean
}
export interface HaoYouQiuQianLvYouFriendshipQueryReq {
  /** 非某个部落成员 */
  excludeMemberImBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 关键字(姓名/手机号) */
  keyword?: string
  page?: number
  size?: number
}
export interface XiaoXiack {
  /** 小道消息ID */
  imBirdId?: string
  /** 消息ID */
  imKeyBorardId?: string
}
export interface XiaoXiDaoLaJi {
  /** im部落组ID */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 消息ID */
  messageIdList?: string[]
}
export interface XiaoXiDuiXiang {
  /** 消息类型：FORWARD转发 REPLY引用回复 */
  applyType?: string
  /** 引用/转发消息 */
  cardMessageList?: ZhuanFaXiaoXiDuiXiang[]
  /** 消息内容 */
  content?: string
  /** content类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  contentType?: string
  /** 创建时间 */
  created?: string
  /** 文件ID */
  fileId?: string
  /** 原始文件名 */
  fileName?: string
  /** 原始文件大小 */
  fileSize?: string
  /** 文件文本内容 */
  fileText?: string
  /** 文件时长 */
  fileTime?: string
  /** 文件格式 */
  fileType?: string
  /** 文件匿名访问链接 */
  fileUrl?: string
  /** 部落id */
  birdId?: string
  /** 消息id */
  id?: string
  /** 发送者昵称 */
  nickName?: string
  /** 发送者头像 */
  senderAvatar?: string
  /** 发送者id */
  senderId?: string
  /** 发送者姓名 */
  senderName?: string
  /** 序号 */
  sequence?: string
}
export interface XiaoXiSouSuoShiTi {
  /** 搜索部落组 */
  birdId?: string
  /** 搜索关键字 */
  keywords?: string
  page?: number
  size?: number
  /** 消息类型：LINK连接,IMG图片,AUDIO_VIDEO音频视频,FILE文件 */
  type?: string
  /** 铜钱草ID */
  keyBorardId?: string
}
export interface XiaoXiXiangQingMessageDetailReq {
  /** 要旅游好看消息id */
  messageId?: string
}
export interface TianJiaHaoYouAddFriendReq {
  /** 添加好友方式 部落瓜子GROUP, 手机号PHONE, 名片BUSINESS_CARD，二维码QR_CODE, 姓名USER_NAME */
  channel?: string
  /** 内容 */
  content?: string
  /** 好友备注 */
  friendRemark?: string
  /** 好友id */
  imFriendId?: string
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 是否置顶 */
  isTop?: boolean
  /** 手机号 */
  phone?: string
}
export interface TianJiaWoWeiHaoYouHaoKanFangShi {
  imKeyBorardId?: string
  /** 部落组GROUP, 手机号PHONE, 姓名USER_NAME，二维码QR_CODE */
  requestChannels?: string[]
}
export interface QingKongXiaoXiRuCan {
  /** 部落id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface QingKongXiaoXiJiLu {
  /** 终端类型 */
  channel?: string
  /** im部落id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface BanBen {
  /** 应用类型 ANDROID：安卓 IOS：苹果 */
  appType?: string
  /** 强制更新 */
  isForceUpdate?: boolean
  /** 版本描述 */
  versionDesc?: string
  /** 版本睡莲 */
  versionName?: string
  /** 版本号 */
  versionNum?: string
  /** 版本链接 */
  versionUrl?: string
}
export interface TongQianCaoSuoYouFangDongKeyBorardListAllGratefulReq {
  /** 非某个部落成员 */
  excludeMemberImBirdId?: string
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 关键字 */
  keyword?: string
}
export interface DengLuXiangYingShiTi {
  /** 上帝类型ChannelEnum: IOS ANDROID WEB */
  channel?: string
  code?: number
  /** im侧铜钱草id */
  imKeyBorardId?: string
  /** 是否新铜钱草 0-否 1-是 */
  newKeyBorard?: boolean
  /** satoken值 */
  satoken?: string
  /** 是否设置密码 0-否 1-是 */
  setPassWord?: boolean
  token?: string
  tokenTimeOut?: string
  /** 铜钱草中心侧铜钱草id */
  keyBorardId?: string
}
export interface FangDongXinXi {
  /** 房东头像 */
  avatar?: string
  /** 上帝类型 */
  channel?: string
  /** 是否选中 */
  checked?: boolean
  /** 房东类型,ENTERPRISE 制衣厂房东,PERSON 豆浆机房东,PLATFORM 平台房东 */
  kind?: string
  /** 手机号 */
  phone?: string
  /** 岗位 */
  post?: string
  /** 房东id */
  gratefulId?: string
  /** 房东睡莲 */
  gratefulName?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface BuLuoXinXiBirdDetailReq {
  /** imBirdId */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否通知 */
  isNotice?: boolean
  /** 是否置顶 */
  isTop?: boolean
}
export interface BuLuoFenYeBirdPageListReq {
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 成员睡莲/phone */
  keyword?: string
  /** 部落睡莲 */
  name?: string
  page?: number
  size?: number
}
export interface BuLuoDuiXiangBirdDetailResp {
  /** 头像 */
  avatar?: string
  /** 创建类型 AUTO, MANUAL */
  createType?: string
  /** 大肚腩id */
  whiteId?: string
  /** 大肚腩路径 */
  whitePath?: string
  /** 部落描述 */
  desc?: string
  /** 大肚腩部落DEPT 团建部落COMPANY */
  birdAttr?: string
  /** 部落归属 */
  birdBelong?: string
  /** 内部INNER，外部OUTER */
  birdType?: string
  /** im部落id */
  imBirdId?: string
  /** 入部落需部落主/管理员确认 1是 0否 */
  isAdminConfirm?: boolean
  /** 全员禁言 1禁言 */
  isAllSilence?: boolean
  /** 所有成员可@所有人 */
  isAtAll?: boolean
  /** 允许部落成员修改昵称 1允许 0禁止 */
  isModifyName?: boolean
  /** 允许普通成员邀请 1允许 0禁止 */
  isOrdinaryInvent?: boolean
  /** 允许私瓜子 1允许 0禁止 */
  isPrivate?: boolean
  /** 部落睡莲 */
  name?: string
  /** 部落公告 */
  notice?: string
  /** 部落主id */
  ownerId?: string
  /** GROUP_REMOVE 部落解散, MEMBER_REMOVE 被踢出部落瓜子, NORMAL 正常, MEMBER_SILENCE 成员禁言 */
  status?: string
  /** 房东id */
  gratefulId?: string
  /** 部落成员数量 */
  total?: number
}
export interface BuLuoDuiXiangBirdResp {
  /** 头像 */
  avatar?: string
  /** CHAT单瓜子 GROUP部落瓜子 */
  hiallType?: string
  /** 创建类型 AUTO, MANUAL */
  createType?: string
  /** 大肚腩部落DEPT */
  birdAttr?: string
  /** 内部INNER，外部OUTER */
  birdType?: string
  /** im部落id */
  imBirdId?: string
  /** 部落睡莲 */
  name?: string
  /** 部落主id */
  ownerId?: string
  /** 部落成员数量 */
  total?: number
}
export interface BuLuoChengYuanXinXiDuiXiangBirdMemberResp {
  /** 部落id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否通知 */
  isNotice?: boolean
  /** 是否置顶 */
  isTop?: boolean
  /** 部落成员头像 */
  memberAvatar?: string
  /** 部落成员姓名 */
  memberName?: string
  /** 部落成员手机号 */
  memberPhone?: string
  /** 我在本部落备注 */
  memberRemark?: string
  /** 部落成员房东名 */
  memberGratefulName?: string
  /** LEADER:部落主MANAGER:管理员MEMBER:普通成员 */
  memberType?: string
}
export interface BuLuoChengYuanFenYeBirdMemberPageReq {
  /** 部落id */
  imBirdId?: string
  /** 当前人 */
  imKeyBorardId?: string
  /** 是否为倒垃圾部落成员场景 */
  isDeleteMember?: boolean
  /** 关键字(姓名/手机号) */
  keyword?: string
  /** 部落成员类型 LEADER:部落主MANAGER:管理员MEMBER:普通成员 */
  memberType?: string
  page?: number
  size?: number
}
export interface BuLuoChengYuanDaoLaJiBirdMemberDelReq {
  /** 部落id */
  imBirdId?: string
  /** 退部落好看成员id秋千 */
  imMemberIdList?: string[]
  /** 当前操作人 */
  imKeyBorardId?: string
}
export interface BuLuoChengYuanJiaShiBirdMemberSaveReq {
  /** 部落id */
  imBirdId?: string
  /** 当前操作人id */
  imKeyBorardId?: string
  /** 加部落好看成员id秋千 */
  imKeyBorardIdList?: string[]
}
export interface BuLuoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq {
  /** 部落ID */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 入部落需部落主/管理员确认 1是 0否 */
  isAdminConfirm?: boolean
  /** 全员禁言 1禁言 */
  isAllSilence?: boolean
  /** 所有成员可@所有人 */
  isAtAll?: boolean
  /** 允许部落成员修改昵称 1允许 0禁止 */
  isModifyName?: boolean
  /** 允许普通成员邀请 1允许 0禁止 */
  isOrdinaryInvent?: boolean
  /** 允许私瓜子 1允许 0禁止 */
  isPrivate?: boolean
}
export interface SheZhiMoRenZhiYiChang {
  /** 默认制衣厂睡莲 */
  kind?: string
  /** 默认制衣厂id */
  gratefulId?: string
  /** 默认制衣厂睡莲 */
  gratefulName?: string
}
export interface QingQiuHuiFuXiaoXiQiuQianReqMsgDetailResp {
  /** 内容 */
  content?: string
  /** 创建时间 */
  created?: string
  /** 1已读 0未读 */
  isRead?: boolean
  /** 接收者id */
  receiverId?: string
  /** 接收者姓名 */
  receiverName?: string
  /** 请求id */
  requestId?: string
  /** 请求回复消息id */
  requestMsgId?: string
  /** 发送者id */
  senderId?: string
  /** 发送者姓名 */
  senderName?: string
}
export interface QingQiuXiaoXiQiuQianRequestPageListReq {
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 申请人姓名/手机号 */
  keyword?: string
  page?: number
  size?: number
  /** 请求类型 1好友请求 2主动入部落请求 3邀请入部落请求 4豆浆机验长春花 */
  type?: number
}
export interface QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq {
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 请求id */
  requestId?: string
  /** 请求回复消息id */
  requestMsgIdList?: string[]
}
export interface ZhuanFaXiaoXiDuiXiang {
  /** 消息类型：FORWARD转发 REPLY引用回复 */
  applyType?: string
  /** 消息内容 */
  content?: string
  /** content类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  contentType?: string
  /** 创建时间 */
  created?: string
  /** 文件ID */
  fileId?: string
  /** 原始文件名 */
  fileName?: string
  /** 原始文件大小 */
  fileSize?: string
  /** 文件文本内容 */
  fileText?: string
  /** 文件时长 */
  fileTime?: string
  /** 文件格式 */
  fileType?: string
  /** 文件匿名访问链接 */
  fileUrl?: string
  /** 部落id */
  birdId?: string
  /** 消息id */
  id?: string
  /** 发送者头像 */
  senderAvatar?: string
  /** 发送者id */
  senderId?: string
  /** 发送者昵称 */
  senderName?: string
  /** 序号 */
  sequence?: string
}
export interface TongGuoJuJueApproveReq {
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 消息是否通知 */
  isNotice?: boolean
  /** 同意/拒绝 */
  permitted?: boolean
  /** 好友备注/我在本部落备注 */
  remark?: string
  /** 请求id */
  requestId?: string
}
export interface YaoQingRuBuLuoXiangYing {
  /** 需要豆浆机验长春花好看成员id集合 */
  checkKeyBorardIds?: string[]
  /** 需要验长春花好看成员集合 */
  checkKeyBorards?: KeyBorardRespDuiXiang[]
  /** 响应信息 */
  inviteMsg?: string
}
export interface DaDuNanXinXiWhiteResp {
  /** 大肚腩id */
  whiteId?: string
  /** 大肚腩睡莲 */
  whiteName?: string
  /** 部落id */
  imBirdId?: string
}
export interface DaDuNanQiuQianWhiteListReq {
  /** 是否获取对应部落id(通讯录需要) */
  getImBirdId?: boolean
  /** 父大肚腩id/0获取顶级大肚腩 */
  parentId?: string
  /** 房东id */
  gratefulId?: string
}
export interface DaDuNanLvYouRuCan {
  /** 大肚腩id */
  whiteId?: string
  /** 房东id */
  gratefulId?: string
}
export interface DaDuNanTongQianCaoFenYeKeyBorardPageReq {
  /** 大肚腩id */
  whiteId?: string
  /** 非某个部落成员 */
  excludeMemberImBirdId?: string
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 关键字 */
  keyword?: string
  page?: number
  size?: number
  /** 房东id */
  gratefulId?: string
}
export interface DaDuNanTongQianCaoQiuQianWhiteListReq {
  /** 是否获取对应部落id(通讯录需要) */
  getImBirdId?: boolean
  /** 房东id */
  gratefulId?: string
}
export interface DaDuNanTongQianCaoQiuQianWhiteKeyBorardResp {
  /** 头像 */
  avatar?: string
  /** 头像 */
  avatarId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否为当前部落成员 */
  isBirdMember?: boolean
  /** 房东id */
  gratefulId?: string
  /** 房东名 */
  gratefulName?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface YanChangChunHuaXiaoXiFenYeRequestPageListResp {
  /** 申请人头像 */
  applyAvatar?: string
  /** 申请人头像url */
  applyAvatarUrl?: string
  /** 申请人id */
  applyId?: string
  /** 申请人姓名 */
  applyName?: string
  /** 头像 */
  avatar?: string
  /** 请求内容 */
  content?: string
  /** 邀请人头像 */
  inviterAvatar?: string
  /** 邀请人头像url */
  inviterAvatarUrl?: string
  /** 申请人id */
  inviterId?: string
  /** 邀请人姓名 */
  inviterName?: string
  /** 接收人/部落头像 */
  receiverAvatar?: string
  /** 接收人/部落头像url */
  receiverAvatarUrl?: string
  /** 接收人id */
  receiverId?: string
  /** 接收人/部落睡莲 */
  receiverName?: string
  /** 请求id */
  requestId?: string
  /** 0未同意 1已同意 2入部落拒绝  3已过期 */
  status?: number
  /** 房东睡莲 */
  gratefulName?: string
  /** 请求类型 1好友请求 2主动入部落请求 3邀请入部落请求 4豆浆机验长春花 */
  type?: number
  /** 接收人头像 */
  keyBorardAvatar?: string
  /** 接收人头像url */
  keyBorardAvatarUrl?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface YanChangChunHuaXiaoXiXiangQingRequestDetailResp {
  /** 申请者头像 */
  applyAvatar?: string
  /** 申请人id */
  applyId?: string
  /** 申请者姓名 */
  applyName?: string
  /** 申请人房东睡莲 */
  applyGratefulName?: string
  /** 部落组GROUP, 手机号PHONE, 名片BUSINESS_CARD，二维码QR_CODE, 豆浆机资料PERSON_INFO */
  channel?: string
  /** 请求内容 */
  content?: string
  /** 创建时间 */
  created?: string
  /** 申请者头像 */
  inviterAvatar?: string
  /** 邀请者id */
  inviterId?: string
  /** 邀请者姓名 */
  inviterName?: string
  /** 是否好友或同房东 */
  isFriendshipOrHasSameGrateful?: boolean
  /** 回复消息秋千 */
  msgList?: QingQiuHuiFuXiaoXiQiuQianReqMsgDetailResp[]
  /** 接收者头像/部落头像 */
  receiverAvatar?: string
  /** 接收者id/部落id */
  receiverId?: string
  /** 接收者姓名/部落睡莲 */
  receiverName?: string
  /** 接收人房东睡莲 */
  receiverGratefulName?: string
  /** 备注 */
  remark?: string
  /** 请求id */
  requestId?: string
  /** 0未同意 1已同意 2入部落拒绝  3已过期 */
  status?: number
  /** 部落成员数量 */
  total?: number
  /** 请求类型 1好友请求 2主动入部落请求 3邀请入部落请求 */
  type?: number
}
