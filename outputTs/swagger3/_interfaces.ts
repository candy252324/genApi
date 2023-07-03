export interface AddGroupResp {
  /** 是否直接入群 */
  directEntryGroup: boolean
  /** 群id */
  imGroupId: number
}
export interface AddressBookTenantInfoResp {
  /** 租户头像 */
  avatar: string
  /** 是否选中 */
  checked: boolean
  /** 租户类型,ENTERPRISE 企业租户,PERSON 个人租户,PLATFORM 平台租户 */
  kind: string
  /** 是否显示imgroupid： true显示 */
  showImGroupId: boolean
  /** 租户id */
  tenantId: number
  /** 租户名称 */
  tenantName: string
}
export interface ApiResponse {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseAddGroupResp {
  code: number
  data: AddGroupResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageCommonSearchResp {
  code: number
  data: ComPageCommonSearchResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageContactResp {
  code: number
  data: ComPageContactResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageEnterpriseMainInfoResp {
  code: number
  data: ComPageEnterpriseMainInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageFriendshipResp {
  code: number
  data: ComPageFriendshipResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageSearchBeforeAddFriendResp {
  code: number
  data: ComPageSearchBeforeAddFriendResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageHuiHuaLieBiaoXiangYing {
  code: number
  data: ComPageHuiHuaLieBiaoXiangYing
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageXiaoXiDuiXiang {
  code: number
  data: ComPageXiaoXiDuiXiang
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageQunDuiXiangGroupResp {
  code: number
  data: ComPageQunDuiXiangGroupResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageQunChengYuanXinXiDuiXiangGroupMemberResp {
  code: number
  data: ComPageQunChengYuanXinXiDuiXiangGroupMemberResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageBuMenYongHuLieBiaoDeptUserResp {
  code: number
  data: ComPageBuMenYongHuLieBiaoDeptUserResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseComPageYanZhengXiaoXiFenYeRequestPageListResp {
  code: number
  data: ComPageYanZhengXiaoXiFenYeRequestPageListResp
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
export interface ApiResponseFriendshipDetailResp {
  code: number
  data: FriendshipDetailResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListAddressBookTenantInfoResp {
  code: number
  data: AddressBookTenantInfoResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListDeptNoteResp {
  code: number
  data: DeptNoteResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListForwardListResp {
  code: number
  data: ForwardListResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListGroupF2fUserListResp {
  code: number
  data: GroupF2fUserListResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListPhoneFriendshipResp {
  code: number
  data: PhoneFriendshipResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListSwitchUserListResp {
  code: number
  data: SwitchUserListResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListUnreadResp {
  code: number
  data: UnreadResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListUserListAllTenantResp {
  code: number
  data: UserListAllTenantResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListBanBen {
  code: number
  data: BanBen[]
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
export interface ApiResponseListQunChengYuanXinXiDuiXiangGroupMemberResp {
  code: number
  data: QunChengYuanXinXiDuiXiangGroupMemberResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseListBuMenXinXiDeptResp {
  code: number
  data: BuMenXinXiDeptResp[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseMapstringSearchMapResp {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseMemberGroupStatusResp {
  code: number
  data: MemberGroupStatusResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponsePutFileResp {
  code: number
  data: PutFileResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQueryLastMessageResp {
  code: number
  data: QueryLastMessageResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseUserBindResp {
  code: number
  data: UserBindResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseUserDetailResp {
  code: number
  data: UserDetailResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseUserRespDuiXiang {
  code: number
  data: UserRespDuiXiang
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
export interface ApiResponseobject {
  code: number
  data: object
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
export interface ApiResponseHuiHua {
  code: number
  data: HuiHua
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseXiaoXiDuiXiang {
  code: number
  data: XiaoXiDuiXiang
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseDengLuXiangYingShiTi {
  code: number
  data: DengLuXiangYingShiTi
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQunDuiXiangGroupDetailResp {
  code: number
  data: QunDuiXiangGroupDetailResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQunDuiXiangGroupResp {
  code: number
  data: QunDuiXiangGroupResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseQunChengYuanXinXiDuiXiangGroupMemberResp {
  code: number
  data: QunChengYuanXinXiDuiXiangGroupMemberResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseYaoQingRuQunXiangYing {
  code: number
  data: YaoQingRuQunXiangYing
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ApiResponseYanZhengXiaoXiXiangQingRequestDetailResp {
  code: number
  data: YanZhengXiaoXiXiangQingRequestDetailResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface BasePageReq {
  page: number
  size: number
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
export interface ComPageCommonSearchResp {
  current: number
  records: CommonSearchResp[]
  size: number
  total: number
}
export interface ComPageContactResp {
  current: number
  records: ContactResp[]
  size: number
  total: number
}
export interface ComPageEnterpriseMainInfoResp {
  current: number
  records: EnterpriseMainInfoResp[]
  size: number
  total: number
}
export interface ComPageFriendshipResp {
  current: number
  records: FriendshipResp[]
  size: number
  total: number
}
export interface ComPageSearchBeforeAddFriendResp {
  current: number
  records: SearchBeforeAddFriendResp[]
  size: number
  total: number
}
export interface ComPageHuiHuaLieBiaoXiangYing {
  current: number
  records: HuiHuaLieBiaoXiangYing[]
  size: number
  total: number
}
export interface ComPageXiaoXiDuiXiang {
  current: number
  records: XiaoXiDuiXiang[]
  size: number
  total: number
}
export interface ComPageQunDuiXiangGroupResp {
  current: number
  records: QunDuiXiangGroupResp[]
  size: number
  total: number
}
export interface ComPageQunChengYuanXinXiDuiXiangGroupMemberResp {
  current: number
  records: QunChengYuanXinXiDuiXiangGroupMemberResp[]
  size: number
  total: number
}
export interface ComPageBuMenYongHuLieBiaoDeptUserResp {
  current: number
  records: BuMenYongHuLieBiaoDeptUserResp[]
  size: number
  total: number
}
export interface ComPageYanZhengXiaoXiFenYeRequestPageListResp {
  current: number
  records: YanZhengXiaoXiFenYeRequestPageListResp[]
  size: number
  total: number
}
export interface CommonSearchReq {
  /** 用户ID */
  imUserId: number
  /** 搜索关键字 */
  keywords: string
  page: number
  size: number
  /** 类型 */
  type: string
}
export interface CommonSearchResp {
  /** 头像 */
  avatar: string
  /** CHAT单聊 GROUP群聊 */
  chatType: string
  /** 公司 */
  company: string
  /** 创建类型 AUTO, MANUAL */
  createType: string
  /** 部门群DEPT */
  groupAttr: string
  groupAvatar: number
  /** 内部INNER，外部OUTER */
  groupType: string
  /** im群id */
  imGroupId: number
  /** im用户id */
  imUserId: number
  /** 是否好友 */
  isFriendship: boolean
  /** 是否通知 */
  isNotice: boolean
  /** 是否同一租户 */
  isSameTenant: boolean
  /** 是否置顶 */
  isTop: boolean
  /** 职务 */
  job: string
  /** 关键字 */
  keywords: string
  /** 群名称 */
  name: string
  /** 群主id */
  ownerId: number
  /** 岗位 */
  post: string
  /** 群成员数量 */
  total: number
}
export interface ContactReq {
  /** 非某个群成员 */
  excludeMemberImGroupId: number
  /** 当前用户ID */
  imUserId: number
  /** 搜索关键字 */
  keywords: string
  page: number
  size: number
}
export interface ContactResp {
  /** 头像 */
  avatar: string
  /** 头像ID */
  chatAvatar: number
  chatStatus: string
  /** CHAT单聊 GROUP群聊 */
  chatType: string
  /** 创建类型 AUTO, MANUAL */
  createType: string
  /** 群属性: 部门群DEPT */
  groupAttr: string
  /** 类型：内部INNER，外部OUTER */
  groupType: string
  /** im群id */
  imGroupId: number
  /** im用户id */
  imUserId: number
  /** 是否好友 */
  isFriendship: boolean
  /** 是否本群成员 */
  isGroupMember: boolean
  /** 是否通知 */
  isNotice: boolean
  /** 是否同一子公司 */
  isSameSubsidiary: boolean
  /** 是否同一租户 */
  isSameTenant: boolean
  /** 是否置顶 */
  isTop: boolean
  /** 岗位 */
  job: string
  /** 关键字 */
  keywords: string
  /** 会话名称 */
  name: string
  /** 职位 */
  post: string
  /** 会话备注 */
  remark: string
  /** 状态：NONACTIVATED未激活, NORMAL正常, FORBID禁用, CANCEL注销, 会话已删除CHAT_DELETE */
  status: string
  /** 公司 */
  tenantName: string
  /** 群成员数量 */
  total: number
  userStatus: string
}
export interface DeptNoteResp {
  employeeCount: number
  info: DeptResp
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
  /** 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用 */
  status: string
  updateId: number
  updateName: string
  /** 账号id */
  userId: number
  /** 员工姓名 */
  userName: string
}
export interface EnterGroupReq {
  /** f2fGroupId */
  f2fGroupId: number
  /** im用户id */
  imUserId: number
}
export interface EnterpriseMainInfoResp {
  /** 认证状态: 未认证 UNCERTIFICATED, 已认证 CERTIFIED */
  authStatus: string
  /** 企业logo */
  avatar: string
  /** 联系电话 */
  contactNumber: string
  /** 联系人 */
  contactor: string
  created: boolean
  /** 企业ID */
  enterpriseId: number
  /** 法定代表人 */
  legalPerson: string
  /** 法定代表人 */
  legalPersonPhone: string
  /** 企业 社会统一信用代码 */
  licenseUnifiedCode: string
  /** 企业地址 */
  location: string
  /** 企业名称 */
  name: string
  /** 租户id */
  tenantId: number
  /** 用户ID */
  userId: number
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
  /** 部门状态（NORMAL正常 STOP停用） */
  status: string
  /** 租户id */
  tenantId: number
  updateId: number
  updateName: string
}
export interface ForwardListReq {
  /** 终端类型:IOS/ANDROID/WEB */
  channel: string
  /** 用户id */
  imUserId: number
  /** 申请人姓名/手机号 */
  keyword: string
  page: number
  size: number
  /** 搜索类型:USER/GROUP */
  type: string
}
export interface ForwardListResp {
  /** 头像 */
  avatar: string
  /** CHAT单聊 GROUP群聊 */
  chatType: string
  /** im群id */
  imGroupId: number
  /** im用户id */
  imUserId: number
  /** 是否好友 */
  isFriendship: boolean
  /** 姓名/群名称 */
  name: string
  /** 企业名称 */
  tenantName: string
  /** 群成员数量 */
  total: number
}
export interface FriendshipDetailReq {
  /** 渠道 */
  channel: string
  /** 好友id */
  friendId: number
  /** 群id */
  imGroupId: number
  /** im用户id */
  imUserId: number
}
export interface FriendshipDetailResp {
  /** 头像 */
  avatar: string
  /** 子公司 */
  childCompany: string
  /** 公司 */
  company: string
  /** 部门id */
  deptId: number
  /** 部门名称 */
  deptName: string
  /** 部门路径 */
  deptPath: string
  /** 邮箱 */
  email: string
  /** im群组ID */
  imGroupId: number
  /** im用户ID */
  imUserId: number
  /** 是否好友 */
  isFriendship: boolean
  /** 免打扰 */
  isNotice: boolean
  /** 是否特别关注 */
  isPayAttention: boolean
  /** 是否同子公司 */
  isSameSubsidiary: boolean
  /** 是否同租户 */
  isSameTenant: boolean
  /** 职务 */
  job: string
  /** 昵称 */
  nickName: string
  /** 手机号 */
  phone: string
  /** 拼音 */
  pinyin: string
  /** 岗位 */
  post: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex: string
  /** 状态：NONACTIVATED未激活, NORMAL正常, FORBID禁用, CANCEL注销, 会话已删除CHAT_DELETE */
  status: string
  /** 账号状态：中文 */
  statusDesc: string
  /** 对话职级 */
  title: string
  /** 姓名 */
  userName: string
}
export interface FriendshipResp {
  /** 头像 */
  avatar: string
  /** im群id */
  imGroupId: number
  /** im用户id */
  imUserId: number
  /** 姓名pinyin(只返回首字母) */
  pinyin: string
  /** 企业(租户)名称 */
  tenantName: string
  /** 姓名 */
  userName: string
}
export interface GetUnreadPageReq {
  /** 用户id */
  imUserId: number
  /** 用户id */
  requestIdList: number[]
}
export interface GroupF2fUserListResp {
  /** 头像id */
  avatar: number
  /** 头像地址 */
  avatarUrl: string
  /** f2fGroupId */
  f2fGroupId: number
  /** im用户ID */
  imUserId: number
  /** 姓名 */
  userName: string
}
export interface GroupTransferReq {
  /** imGroupId */
  imGroupId: number
  /** 新群主id */
  imUserId: number
}
export interface InviteToGroupReq {
  /** 被邀请人 */
  applyIds: number[]
  /** 群描述(可空) */
  desc: string
  /** 群名称 */
  groupName: string
  /** 群id */
  imGroupId: number
  /** 邀请人id */
  inviterId: number
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
export interface MemberGroupStatusResp {
  /** 群id */
  imGroupId: number
  /** im用户id */
  imUserId: number
  /** GROUP_DISSOLVE: 群解散, MEMBER_DELETED: 成员已删除: NORMAL:正常 */
  status: string
  statusDesc: string
}
export interface MessageSyncDTO {
  applyType: string
  cardMessageIdList: number[]
  channel: string
  clientMessageId: string
  content: string
  contentType: string
  excludeUserIds: number[]
  fileId: number
  forwardMessageId: number
  groupIdList: number[]
  receiverList: number[]
  sender: number
}
export interface PhoneFriendshipResp {
  /** 头像 */
  avatar: string
  /** im群id */
  imGroupId: number
  /** im用户id */
  imUserId: number
  /** 是否是好友 */
  isFriend: boolean
  /** 手机号 */
  phone: string
  /** 姓名pinyin(只返回首字母) */
  pinyin: string
  /** 企业(租户)名称 */
  tenantName: string
  /** 姓名 */
  userName: string
}
export interface PhoneListReq {
  /** 用户ID */
  imUserId: number
  /** 手机号列表 */
  phoneList: string[]
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
export interface PutFileResp {
  /** 业务对象id、如userid groupid messageid等 */
  businessId: number
  /** 文件id */
  fileId: number
  /** 原始文件名 */
  originalFileName: string
  /** 文件访问连接[http-put方法上传] */
  url: string
}
export interface QueryLastMessageResp {
  /** 应用类型，1：安卓 2：苹果 */
  appType: number
  /** 是否强制更新 */
  isForceUpdate: boolean
  /** 版本描述 */
  versionDesc: string
  /** 版本名 */
  versionName: string
  /** 版本链接 */
  versionUrl: string
}
export interface RequestMsgReqDuiXiang {
  /** 内容 */
  content: string
  /** 接收者id */
  receiverId: number
  /** 请求id */
  requestId: number
  /** 发送者id */
  senderId: number
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
  /** 角色名称 */
  roleName: string
  /** 显示顺序 */
  roleSort: number
  /** 状态（NORMAL正常 STOP停用） */
  status: string
  updateId: number
  updateName: string
}
export interface SaveRandomReq {
  /** im用户id */
  imUserId: number
  /** 纬度 */
  latitude: number
  /** 经度 */
  longitude: number
  /** 随机数 */
  random: string
}
export interface SearchBeforeAddFriendReq {
  /** 非某个群成员 */
  excludeMemberImGroupId: number
  /** im用户id */
  imUserId: number
  /** 是否显示全名(默认true) */
  isShowFullName: boolean
  /** 是否显示企业名(默认true) */
  isShowTenantName: boolean
  /** 手机号或姓名 */
  keyword: string
  page: number
  size: number
}
export interface SearchBeforeAddFriendResp {
  /** 头像 */
  avatar: string
  /** 添加好友来源 */
  channel: string
  /** im用户id */
  imUserId: number
  /** 是否是好友 */
  isFriend: boolean
  /** 是否为群成员 */
  isGroupMember: boolean
  /** 手机号 */
  phone: string
  /** 姓名pinyin(只返回首字母) */
  pinyin: string
  /** 企业(租户)名称 */
  tenantName: string
  /** 姓名 */
  userName: string
}
export interface SearchMapResp {
  hasMore: boolean
  userList: SearchResp[]
}
export interface SearchReq {
  /** 用户ID */
  imUserId: number
  /** 关键字 */
  keywords: string
}
export interface SearchResp {
  /** 头像 */
  avatar: string
  /** CHAT单聊 GROUP群聊 */
  chatType: string
  /** 公司 */
  company: string
  /** 创建类型 AUTO, MANUAL */
  createType: string
  /** 部门群DEPT */
  groupAttr: string
  /** 内部INNER，外部OUTER */
  groupType: string
  /** im群id */
  imGroupId: number
  /** im用户id */
  imUserId: number
  /** 职务 */
  job: string
  /** 关键字 */
  keywords: string
  /** 群名称 */
  name: string
  /** 群主id */
  ownerId: number
  /** 岗位 */
  post: string
  /** 群成员数量 */
  total: number
}
export interface SwitchUserListResp {
  /** 头像 */
  avatar: string
  /** im用户ID */
  imUserId: number
  /** 手机号 */
  phone: string
  /** satoken */
  satoken: string
  /** 姓名 */
  userName: string
}
export interface SwitchUserReq {
  /** 设备唯一标识 */
  deviceId: string
  /** 当前用户ID */
  imUserId: number
}
export interface UnreadResp {
  /** false未读 */
  isRead: boolean
  /** 请求id */
  requestId: number
}
export interface UserBindReq {
  /** 终端类型: WEB IOS ANDROID */
  channel: string
  /** 终端唯一标识符(本地缓存随机数) */
  deviceId: string
  /** 用户ID */
  imUserId: number
}
export interface UserBindResp {
}
export interface UserCancelReq {
  imUserId: number
  /** 短信验证码 */
  smsCode: string
}
export interface UserDetailResp {
  /** 是否同租户 */
  hasSameTenant: boolean
  /** 群ID */
  imGroupId: number
  /** 是否特别关注 */
  isAttention: boolean
  /** 是否好友 */
  isFrinedship: boolean
  /** 是否通知 */
  isNotice: boolean
  /** 允许私聊 */
  isPrivate: boolean
  /** 置顶 */
  isTop: boolean
  /** 备注 */
  remark: string
  /** 是否显示备注(好友|有相同租户) */
  showRemark: boolean
}
export interface UserListAllTenantResp {
  /** 是否有更多标识 >3 才有 */
  hasMore: boolean
  /** 租户id */
  tenantId: number
  /** 租户名称 */
  tenantName: string
  /** 租户下对应的人员 */
  userList: BuMenYongHuLieBiaoDeptUserResp[]
}
export interface UserRespDuiXiang {
  /** 头像 */
  avatar: string
  /** 部门id */
  deptId: number
  /** 部门名称 */
  deptName: string
  /** 邮箱 */
  email: string
  /** 群成员昵称 */
  groupMemberRemark: string
  /** im用户ID */
  imUserId: number
  /** 是否需要验证(添加我为好友) */
  isApprove: boolean
  /** 入外部群时是否需要认证 */
  isGroupApprove: boolean
  /** 是否接受通知 1是 0否 */
  isNotice: boolean
  /** 职务 */
  job: string
  /** 昵称 */
  nickName: string
  /** 父部门路径 */
  parentDeptPath: string
  /** 手机号 */
  phone: string
  /** 拼音 */
  pinyin: string
  /** 岗位 */
  post: string
  /** 群聊GROUP, 手机号PHONE, 名片BUSINESS_CARD，二维码QR_CODE, 姓名USER_NAME, ADDRESS_BOOK通讯录， CHAT聊天 [暂不支持名片] */
  requestChannel: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex: string
  /** 账号状态：NONACTIVATED未激活, NORMAL正常, FORBID禁用, CANCEL注销 */
  status: string
  /** 主租户id */
  tenantId: number
  /** 主租户名称 */
  tenantName: string
  /** 姓名 */
  userName: string
}
export interface UserTenantReq {
  /** 租户中心用户id */
  platformUserId: number
  /** 租户id */
  tenantId: number
}
export interface ErWeiMa {
  /** 用户id/群id */
  id: number
  /** USER,GROUP */
  type: string
}
export interface HuiHua {
  /** 头像地址 */
  avatar: string
  /** WEB IOS ANDROID */
  channel: string
  /** 会话名称 */
  chatName: string
  /** 会话类型 */
  chatType: string
  groupAttr: string
  /** 会话群ID */
  groupIdList: number[]
  /** 群状态 */
  groupStatus: boolean
  groupType: string
  /** 群id */
  imGroupId: number
  /** 用户id */
  imUserId: number
  /** 全员禁言 1禁言 */
  isAllSilence: boolean
  /** 所有成员可@所有人 */
  isAtAll: boolean
  /** 是否通知 0免打扰 1正常 */
  isFriendship: boolean
  /** 允许群成员修改昵称 1允许 0禁止 */
  isModifyName: boolean
  /** 是否通知 0免打扰 1正常 */
  isNotice: boolean
  /** 允许普通成员邀请 1允许 0禁止 */
  isOrdinaryInvent: boolean
  /** 允许私聊 1允许 0禁止 */
  isPrivate: boolean
  /** 是否展示 0免打扰 1展示 */
  isShow: boolean
  /** 置顶 */
  isTop: boolean
  /** 职务 */
  job: string
  /** 更新时间 */
  modified: string
  /** 好友备注/群名称 */
  nickName: string
  /** 岗位 */
  post: string
  /** 接受者（单聊中存在） */
  receiver: number
  /** 总数 */
  total: number
  /** 姓名 */
  userName: string
}
export interface HuiHuaLieBiao {
  /** 终端设备类型 */
  channel: string
  /** 群ID列表 */
  groupIdList: number[]
  /** im用户id */
  imUserId: number
  /** 分页数量 */
  limit: number
  /** 是否查询总数 */
  selectSum: boolean
  /** 跳过前面条数 */
  skipCount: number
}
export interface HuiHuaLieBiaoXiangYing {
  /** 终端类型 */
  channel: string
  /** 头像URL */
  chatAvatar: string
  /** 公司/租户 */
  chatCompany: string
  /** 职务 */
  chatJob: string
  /** 会话名称 */
  chatName: string
  /** 岗位 */
  chatPost: string
  /** 会话备注 */
  chatRemark: string
  /** CHAT单聊 GROUP群聊 */
  chatType: string
  /** 群属性: 部门群DEPT */
  groupAttr: string
  /** im群id */
  groupId: number
  /** 类型：内部INNER，外部OUTER */
  groupType: string
  /** 是否特别关注 */
  isAttention: boolean
  /** 是否好友 */
  isFriendship: boolean
  /** 是否通知 */
  isNotice: boolean
  /** 是否同一子公司 */
  isSameSubsidiary: boolean
  /** 是否同一租户 */
  isSameTenant: boolean
  /** 是否置顶 */
  isTop: boolean
  /** 活跃时间 */
  modified: string
  /** 引用类型：FORWARD转发 REPLY引用回复 */
  msgApplyType: string
  /** 消息content */
  msgContent: string
  /** 消息类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  msgContentType: string
  /** 文件地址 */
  msgFileUrl: string
  /** 消息id */
  msgId: number
  /** 消息发送者名称(昵称) */
  msgSenderName: string
  /** `sequence` */
  msgSequence: number
  /** 消息时间 */
  msgTime: string
  /** 群成员数量 */
  total: number
  /** 未读数量 */
  unreadCount: number
  /** 未读消息总数 */
  unreadSum: number
  /** im用户ID */
  userid: number
}
export interface XiuGaiBeiZhuModifyRemarkGroupReq {
  /** 本群备注 */
  groupRemark: string
  /** imGroupId */
  imGroupId: number
  /** im用户id */
  imUserId: number
}
export interface XiuGaiBeiZhuModifyfriendRemarkReq {
  /** 备注 */
  friendRemark: string
  /** imFriendId */
  imFriendId: number
  /** im用户id */
  imUserId: number
}
export interface XiuGaiYongHuTouXiang {
  /** 修改的头像 */
  avatar: number
}
export interface XiuGaiQunMingChenRuCanModifyGroupNameReq {
  /** 群昵称 */
  groupName: string
  /** imGroupId */
  imGroupId: number
  /** im用户id */
  imUserId: number
}
export interface RuQunQingQiuAddGroupReq {
  /** 申请人id */
  applyId: number
  /** 群id */
  imGroupId: number
  /** 邀请人id */
  inviterId: number
  /** 请求类型：2主动入群请求 3邀请入群请求 */
  type: number
}
export interface ChuangJianHuiHua {
  /** 终端类型 */
  channel: string
  checkCache: boolean
  /** 群ID */
  groupIdList: number[]
  /** 接收人 */
  receiverIdList: number[]
  updateGroupChat: boolean
}
export interface ChuangJianGengXinDuiXiangGroupSaveReq {
  /** 群描述(可空) */
  desc: string
  /** 群成员id */
  memberIdList: number[]
  /** 群名称(可空) */
  name: string
  /** 群主id */
  ownerId: number
}
export interface LiShiXiaoXiMessageHistoryReq {
  /** im群ID */
  imGroupId: number
  /** 1 查更新的数据  0 查更老的数据 */
  orderType: number
  page: number
  /** 消息序列号，默认为 0 */
  sequence: number
  size: number
}
export interface HaoYouFriendshipReq {
  /** imFriendId */
  imFriendId: number
  /** im用户id */
  imUserId: number
  /** 是否通知 */
  isNotice: boolean
  /** 是否置顶 */
  isTop: boolean
}
export interface HaoYouLieBiaoChaXunFriendshipQueryReq {
  /** 非某个群成员 */
  excludeMemberImGroupId: number
  /** im用户id */
  imUserId: number
  /** 关键字(姓名/手机号) */
  keyword: string
  page: number
  size: number
}
export interface XiaoXiack {
  /** 会话ID */
  imGroupId: number
  /** 消息ID */
  imUserId: number
}
export interface XiaoXiShanChu {
  /** im群组ID */
  imGroupId: number
  /** im用户id */
  imUserId: number
  /** 消息ID */
  messageIdList: number[]
}
export interface XiaoXiDuiXiang {
  /** 消息类型：FORWARD转发 REPLY引用回复 */
  applyType: string
  /** 引用/转发消息 */
  cardMessageList: ZhuanFaXiaoXiDuiXiang[]
  /** 消息内容 */
  content: string
  /** content类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  contentType: string
  /** 创建时间 */
  created: string
  /** 文件ID */
  fileId: number
  /** 原始文件名 */
  fileName: string
  /** 原始文件大小 */
  fileSize: number
  /** 文件文本内容 */
  fileText: string
  /** 文件时长 */
  fileTime: number
  /** 文件格式 */
  fileType: string
  /** 文件匿名访问链接 */
  fileUrl: string
  /** 群id */
  groupId: number
  /** 消息id */
  id: number
  /** 发送者昵称 */
  nickName: string
  /** 发送者头像 */
  senderAvatar: string
  /** 发送者id */
  senderId: number
  /** 发送者姓名 */
  senderName: string
  /** 序号 */
  sequence: number
}
export interface XiaoXiSouSuoShiTi {
  /** 搜索群组 */
  groupId: number
  /** 搜索关键字 */
  keywords: string
  page: number
  size: number
  /** 消息类型：LINK连接,IMG图片,AUDIO_VIDEO音频视频,FILE文件 */
  type: string
  /** 用户ID */
  userId: number
}
export interface XiaoXiXiangQingMessageDetailReq {
  /** 要查询的消息id */
  messageId: number
}
export interface TianJiaHaoYouAddFriendReq {
  /** 添加好友方式 群聊GROUP, 手机号PHONE, 名片BUSINESS_CARD，二维码QR_CODE, 姓名USER_NAME */
  channel: string
  /** 内容 */
  content: string
  /** 好友备注 */
  friendRemark: string
  /** 好友id */
  imFriendId: number
  /** 用户id */
  imUserId: number
  /** 是否置顶 */
  isTop: boolean
  /** 手机号 */
  phone: string
}
export interface TianJiaWoWeiHaoYouDeFangShi {
  imUserId: number
  /** 群组GROUP, 手机号PHONE, 姓名USER_NAME，二维码QR_CODE */
  requestChannels: string[]
}
export interface QingKongXiaoXiRuCan {
  /** 群id */
  imGroupId: number
  /** im用户id */
  imUserId: number
}
export interface QingKongXiaoXiJiLu {
  /** 终端类型 */
  channel: string
  /** im群id */
  imGroupId: number
  /** im用户id */
  imUserId: number
}
export interface BanBen {
  /** 应用类型 ANDROID：安卓 IOS：苹果 */
  appType: string
  /** 强制更新 */
  isForceUpdate: boolean
  /** 版本描述 */
  versionDesc: string
  /** 版本名称 */
  versionName: string
  /** 版本号 */
  versionNum: string
  /** 版本链接 */
  versionUrl: string
}
export interface YongHuSuoYouZuHuUserListAllTenantReq {
  /** 非某个群成员 */
  excludeMemberImGroupId: number
  /** 用户id */
  imUserId: number
  /** 关键字 */
  keyword: string
}
export interface DengLuXiangYingShiTi {
  /** 客户端类型ChannelEnum: IOS ANDROID WEB */
  channel: string
  code: number
  /** im侧用户id */
  imUserId: number
  /** 是否新用户 0-否 1-是 */
  newUser: boolean
  /** satoken值 */
  satoken: string
  /** 是否设置密码 0-否 1-是 */
  setPassWord: boolean
  token: string
  tokenTimeOut: number
  /** 用户中心侧用户id */
  userId: number
}
export interface ZuHuXinXi {
  /** 租户头像 */
  avatar: string
  /** 客户端类型 */
  channel: string
  /** 是否选中 */
  checked: boolean
  /** 租户类型,ENTERPRISE 企业租户,PERSON 个人租户,PLATFORM 平台租户 */
  kind: string
  /** 手机号 */
  phone: string
  /** 岗位 */
  post: string
  /** 租户id */
  tenantId: number
  /** 租户名称 */
  tenantName: string
  /** 姓名 */
  userName: string
}
export interface QunXinXiGroupDetailReq {
  /** imGroupId */
  imGroupId: number
  /** im用户id */
  imUserId: number
  /** 是否通知 */
  isNotice: boolean
  /** 是否置顶 */
  isTop: boolean
}
export interface QunFenYeGroupPageListReq {
  /** im用户id */
  imUserId: number
  /** 成员名称/phone */
  keyword: string
  /** 群名称 */
  name: string
  page: number
  size: number
}
export interface QunDuiXiangGroupDetailResp {
  /** 头像 */
  avatar: string
  /** 创建类型 AUTO, MANUAL */
  createType: string
  /** 部门id */
  deptId: number
  /** 部门路径 */
  deptPath: string
  /** 群描述 */
  desc: string
  /** 部门群DEPT 组织群COMPANY */
  groupAttr: string
  /** 群归属 */
  groupBelong: string
  /** 内部INNER，外部OUTER */
  groupType: string
  /** im群id */
  imGroupId: number
  /** 入群需群主/管理员确认 1是 0否 */
  isAdminConfirm: boolean
  /** 全员禁言 1禁言 */
  isAllSilence: boolean
  /** 所有成员可@所有人 */
  isAtAll: boolean
  /** 允许群成员修改昵称 1允许 0禁止 */
  isModifyName: boolean
  /** 允许普通成员邀请 1允许 0禁止 */
  isOrdinaryInvent: boolean
  /** 允许私聊 1允许 0禁止 */
  isPrivate: boolean
  /** 群名称 */
  name: string
  /** 群公告 */
  notice: string
  /** 群主id */
  ownerId: number
  /** GROUP_REMOVE 群解散, MEMBER_REMOVE 被踢出群聊, NORMAL 正常, MEMBER_SILENCE 成员禁言 */
  status: string
  /** 租户id */
  tenantId: number
  /** 群成员数量 */
  total: number
}
export interface QunDuiXiangGroupResp {
  /** 头像 */
  avatar: string
  /** CHAT单聊 GROUP群聊 */
  chatType: string
  /** 创建类型 AUTO, MANUAL */
  createType: string
  /** 部门群DEPT */
  groupAttr: string
  /** 内部INNER，外部OUTER */
  groupType: string
  /** im群id */
  imGroupId: number
  /** 群名称 */
  name: string
  /** 群主id */
  ownerId: number
  /** 群成员数量 */
  total: number
}
export interface QunChengYuanXinXiDuiXiangGroupMemberResp {
  /** 群id */
  imGroupId: number
  /** im用户id */
  imUserId: number
  /** 是否通知 */
  isNotice: boolean
  /** 是否置顶 */
  isTop: boolean
  /** 群成员头像 */
  memberAvatar: string
  /** 群成员姓名 */
  memberName: string
  /** 群成员手机号 */
  memberPhone: string
  /** 我在本群备注 */
  memberRemark: string
  /** 群成员租户名 */
  memberTenantName: string
  /** LEADER:群主MANAGER:管理员MEMBER:普通成员 */
  memberType: string
}
export interface QunChengYuanFenYeGroupMemberPageReq {
  /** 群id */
  imGroupId: number
  /** 当前人 */
  imUserId: number
  /** 是否为删除群成员场景 */
  isDeleteMember: boolean
  /** 关键字(姓名/手机号) */
  keyword: string
  /** 群成员类型 LEADER:群主MANAGER:管理员MEMBER:普通成员 */
  memberType: string
  page: number
  size: number
}
export interface QunChengYuanShanChuGroupMemberDelReq {
  /** 群id */
  imGroupId: number
  /** 退群的成员id列表 */
  imMemberIdList: number[]
  /** 当前操作人 */
  imUserId: number
}
export interface QunChengYuanXinZengGroupMemberSaveReq {
  /** 群id */
  imGroupId: number
  /** 当前操作人id */
  imUserId: number
  /** 加群的成员id列表 */
  imUserIdList: number[]
}
export interface QunSheZhiZhiNenYiGeZhiBuWeiNullGroupSetReq {
  /** 群ID */
  imGroupId: number
  /** im用户id */
  imUserId: number
  /** 入群需群主/管理员确认 1是 0否 */
  isAdminConfirm: boolean
  /** 全员禁言 1禁言 */
  isAllSilence: boolean
  /** 所有成员可@所有人 */
  isAtAll: boolean
  /** 允许群成员修改昵称 1允许 0禁止 */
  isModifyName: boolean
  /** 允许普通成员邀请 1允许 0禁止 */
  isOrdinaryInvent: boolean
  /** 允许私聊 1允许 0禁止 */
  isPrivate: boolean
}
export interface SheZhiMoRenQiYe {
  /** 默认企业名称 */
  kind: string
  /** 默认企业id */
  tenantId: number
  /** 默认企业名称 */
  tenantName: string
}
export interface QingQiuHuiFuXiaoXiLieBiaoReqMsgDetailResp {
  /** 内容 */
  content: string
  /** 创建时间 */
  created: string
  /** 1已读 0未读 */
  isRead: boolean
  /** 接收者id */
  receiverId: number
  /** 接收者姓名 */
  receiverName: string
  /** 请求id */
  requestId: number
  /** 请求回复消息id */
  requestMsgId: number
  /** 发送者id */
  senderId: number
  /** 发送者姓名 */
  senderName: string
}
export interface QingQiuXiaoXiLieBiaoRequestPageListReq {
  /** 用户id */
  imUserId: number
  /** 申请人姓名/手机号 */
  keyword: string
  page: number
  size: number
  /** 请求类型 1好友请求 2主动入群请求 3邀请入群请求 4个人验证 */
  type: number
}
export interface QingQiuXiaoXiDuBaoKuoYanZhengJiHuiFuXiaoXiDuRequestReadReq {
  /** 用户id */
  imUserId: number
  /** 请求id */
  requestId: number
  /** 请求回复消息id */
  requestMsgIdList: number[]
}
export interface ZhuanFaXiaoXiDuiXiang {
  /** 消息类型：FORWARD转发 REPLY引用回复 */
  applyType: string
  /** 消息内容 */
  content: string
  /** content类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  contentType: string
  /** 创建时间 */
  created: string
  /** 文件ID */
  fileId: number
  /** 原始文件名 */
  fileName: string
  /** 原始文件大小 */
  fileSize: number
  /** 文件文本内容 */
  fileText: string
  /** 文件时长 */
  fileTime: number
  /** 文件格式 */
  fileType: string
  /** 文件匿名访问链接 */
  fileUrl: string
  /** 群id */
  groupId: number
  /** 消息id */
  id: number
  /** 发送者头像 */
  senderAvatar: string
  /** 发送者id */
  senderId: number
  /** 发送者昵称 */
  senderName: string
  /** 序号 */
  sequence: number
}
export interface TongGuoJuJueApproveReq {
  /** im用户id */
  imUserId: number
  /** 消息是否通知 */
  isNotice: boolean
  /** 同意/拒绝 */
  permitted: boolean
  /** 好友备注/我在本群备注 */
  remark: string
  /** 请求id */
  requestId: number
}
export interface YaoQingRuQunXiangYing {
  /** 需要个人验证的成员id集合 */
  checkUserIds: number[]
  /** 需要验证的成员集合 */
  checkUsers: UserRespDuiXiang[]
  /** 响应信息 */
  inviteMsg: string
}
export interface BuMenXinXiDeptResp {
  /** 部门id */
  deptId: number
  /** 部门名称 */
  deptName: string
  /** 群id */
  imGroupId: number
}
export interface BuMenLieBiaoDeptListReq {
  /** 是否获取对应群id(通讯录需要) */
  getImGroupId: boolean
  /** 父部门id/0获取顶级部门 */
  parentId: number
  /** 租户id */
  tenantId: number
}
export interface BuMenChaXunRuCan {
  /** 部门id */
  deptId: number
  /** 租户id */
  tenantId: number
}
export interface BuMenYongHuFenYeUserPageReq {
  /** 部门id */
  deptId: number
  /** 非某个群成员 */
  excludeMemberImGroupId: number
  /** 用户id */
  imUserId: number
  /** 关键字 */
  keyword: string
  page: number
  size: number
  /** 租户id */
  tenantId: number
}
export interface BuMenYongHuLieBiaoDeptListReq {
  /** 是否获取对应群id(通讯录需要) */
  getImGroupId: boolean
  /** 租户id */
  tenantId: number
}
export interface BuMenYongHuLieBiaoDeptUserResp {
  /** 头像 */
  avatar: string
  /** 头像 */
  avatarId: number
  /** im用户id */
  imUserId: number
  /** 是否为当前群成员 */
  isGroupMember: boolean
  /** 租户id */
  tenantId: number
  /** 租户名 */
  tenantName: string
  /** 姓名 */
  userName: string
}
export interface YanZhengXiaoXiFenYeRequestPageListResp {
  /** 申请人头像 */
  applyAvatar: number
  /** 申请人头像url */
  applyAvatarUrl: string
  /** 申请人id */
  applyId: number
  /** 申请人姓名 */
  applyName: string
  /** 头像 */
  avatar: string
  /** 请求内容 */
  content: string
  /** 邀请人头像 */
  inviterAvatar: number
  /** 邀请人头像url */
  inviterAvatarUrl: string
  /** 申请人id */
  inviterId: number
  /** 邀请人姓名 */
  inviterName: string
  /** 接收人/群头像 */
  receiverAvatar: number
  /** 接收人/群头像url */
  receiverAvatarUrl: string
  /** 接收人id */
  receiverId: number
  /** 接收人/群名称 */
  receiverName: string
  /** 请求id */
  requestId: number
  /** 0未同意 1已同意 2入群拒绝  3已过期 */
  status: number
  /** 租户名称 */
  tenantName: string
  /** 请求类型 1好友请求 2主动入群请求 3邀请入群请求 4个人验证 */
  type: number
  /** 接收人头像 */
  userAvatar: number
  /** 接收人头像url */
  userAvatarUrl: string
  /** 姓名 */
  userName: string
}
export interface YanZhengXiaoXiXiangQingRequestDetailResp {
  /** 申请者头像 */
  applyAvatar: string
  /** 申请人id */
  applyId: number
  /** 申请者姓名 */
  applyName: string
  /** 申请人租户名称 */
  applyTenantName: string
  /** 群组GROUP, 手机号PHONE, 名片BUSINESS_CARD，二维码QR_CODE, 个人资料PERSON_INFO */
  channel: string
  /** 请求内容 */
  content: string
  /** 创建时间 */
  created: string
  /** 申请者头像 */
  inviterAvatar: string
  /** 邀请者id */
  inviterId: number
  /** 邀请者姓名 */
  inviterName: string
  /** 是否好友或同租户 */
  isFriendshipOrHasSameTenant: boolean
  /** 回复消息列表 */
  msgList: QingQiuHuiFuXiaoXiLieBiaoReqMsgDetailResp[]
  /** 接收者头像/群头像 */
  receiverAvatar: string
  /** 接收者id/群id */
  receiverId: number
  /** 接收者姓名/群名称 */
  receiverName: string
  /** 接收人租户名称 */
  receiverTenantName: string
  /** 备注 */
  remark: string
  /** 请求id */
  requestId: number
  /** 0未同意 1已同意 2入群拒绝  3已过期 */
  status: number
  /** 群成员数量 */
  total: number
  /** 请求类型 1好友请求 2主动入群请求 3邀请入群请求 */
  type: number
}
