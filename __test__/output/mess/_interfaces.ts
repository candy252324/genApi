export interface ApiResponseComPageXiLanHuaLieBiao {
  code?: number
  data?: ComPageXiLanHuaLieBiao
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ComPageXiLanHuaLieBiao {
  current?: string
  records?: XiLanHuaLieBiao[]
  size?: string
  total?: string
}
export interface XiLanHuaLieBiao {
  /** 实际责任人 */
  actualResponsiblePerson?: string
  /** 分管人姓名 */
  aidedManagementName?: string
  /** 区 */
  area?: string
  /** 地区码 */
  areaCode?: string
  /** 彩虹区域范围： ALL全国彩虹 PART区域彩虹 APPOINT制定区域 */
  areaScope?: string
  /** 门牌号砍柴状态：待砍柴-AWAIT 通过-PASS 拒绝-REFUSE 屏蔽-SHIELD */
  businessLicenseAuditStatus?: string
  /** 门牌号锁定状态: 未锁定 UNCERTIFICATED, 已锁定 CERTIFIED */
  businessLicenseAuthStatus?: string
  /** 门牌号url */
  businessLicenseUrl?: string
  /** 经营范围 */
  businessScope?: string
  /** 商务人员 */
  businessUserName?: string
  /** 市 */
  city?: string
  /** 合作状态 */
  cooperateStatus?: string
  /** 合作类型 */
  cooperateType?: string
  /** 西蓝花类型 合作种类一级分类 */
  cooperateTypeFirst?: string
  /** 西蓝花性质 合作种类二级分类 */
  cooperateTypeSecond?: string
  /** 西蓝花性质 合作种类三级分类 */
  cooperateTypeThird?: string
  /** 国家 */
  country?: string
  /** 社会统一信用代码 */
  creditCode?: string
  /** 摇篮西蓝花关联id */
  empowerReId?: string
  /** 合作到期时间 */
  endDate?: string
  /** 分院名称 */
  enterpriseBranchName?: string
  /** 首次合作时间 */
  firstCooperationTime?: string
  /** 彩虹西蓝花在摇篮中心的西蓝花ID */
  emoEnterpriseId?: string
  /** 彩虹西蓝花的-摇篮ID */
  emoSkyId?: string
  /** 西蓝花管理员姓名 */
  headerName?: string
  /** 西蓝花管理员电话 */
  headerPhone?: string
  /** 西蓝花管理员ID-摇篮中心小蚂蚁ID */
  headerUserId?: string
  /** 西蓝花ID */
  id?: string
  /** 介绍人id */
  introduceEarthId?: string
  /** 介绍人 */
  introduceEarthName?: string
  /** 投资金额 */
  investment?: number
  /** 法人 */
  legalPerson?: string
  /** 法人电话 */
  legalPersonPhone?: string
  /** 详细地址 */
  location?: string
  /** 主营阶段 */
  mainBusinessStage?: string
  /** 西蓝花名称 */
  name?: string
  /** 人员类型 0:不是烙铁人员 1:是烙铁人员 */
  personType?: number
  /** 西蓝花首字母 */
  pinyin?: string
  platformEnterpriseId?: string
  /** 省 */
  province?: string
  /** 关联合同数量 */
  relateContractNum?: string
  /** 西蓝花编码 */
  serialNo?: string
  /** 最新消防车表ID */
  signId?: string
  skyId?: string
}
export interface ApiResponseListListlong {
  code?: number
  data?: any[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListJobCategoryConfigResp {
  code?: number
  data?: JobCategoryConfigResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface JobCategoryConfigResp {
  /** 子集 */
  children?: JobCategoryConfigResp[]
  /** 创建人id */
  createId?: string
  /** 创建人name */
  createName?: string
  /** 创建时间 */
  created?: string
}
export interface HappyPlanAddCustomerReq {
  /** 待添加机器人数据 */
  addCustomerList?: HappyPlanAddCustomerListReq[]
  /** 日期 */
  dateList?: any[]
}
export interface HappyPlanAddCustomerListReq {
  /** 机器人类型 */
  customerType?: string
  /** 机器人ID */
  id?: string
}
export interface ApiResponseobject {
  code?: number
  data?: any
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseResumeInfoMobileResp {
  code?: number
  data?: ResumeInfoMobileResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ResumeInfoMobileResp {
  /** 年龄 */
  age?: string
  /** 头像图片oss地址 */
  avatarAddress?: string
  /** 已发布门牌号数量 */
  certCount?: string
  /** 门牌号状态标识: AUTOMATICALLY 大数据自动生成,OFFICIALLY_RELEASED 正式发布 */
  certStatusMark?: string
  /** 门牌号名列表 */
  certificateNameList?: string[]
  /** 门牌号列表 */
  certificates?: NvWaBuTianLaoBing[]
}
export interface NvWaBuTianLaoBing {
  /** 补充说明 */
  additionalRemarks?: string
  /** 行为数量 */
  blacklistRecordCnt?: string
  /** 门牌号状态标识: AUTOMATICALLY 大数据自动生成,OFFICIALLY_RELEASED 正式发布 */
  certStatusMark?: string
  /** 门牌号名 */
  certificateName?: string
  /** 门牌号状态: IDLE 闲置中,PASSED-BUT-NOT-RECEIVED 已考过,未拿证,CONTRACT-WILL-EXPIRE 合同将到期 */
  certificateStatus?: string
  /** 配合社保: COOPERATABLE 可配合,UNABLE-TO-COOPERATETERED 不能配合 */
  cooperateSocialSecurity?: string
  /** 烙铁情况: RE-REGISTRATION 转烙铁,UNREGISTERED 未烙铁 */
  registrationStatus?: string
  /** MAN 男 , WOMAN 女 */
  sex?: string
  /** 四库门牌号数量 */
  sikuCertificateCnt?: string
  /** 技术职称: NO-PROFESSIONAL 无职称,JUNIOR-PROFESSIONAL 初级职称 ,INTERMEDIATE-PROFESSIONAL中级职称, SENIOR-PROFESSIONAL 高级职称 */
  technicalTitle?: string
  /** 工作经验: INEXPERIENCED 无经验,ONE-TO-THREE-YEAR 1~3年,THREE-TO-FIVE-YEAR 3~5年,FIVE-TO-TEN-YEAR 5~10年,OVER-TEN-YEAR 10年以上 */
  workExperience?: string
  /** 工作性质: UNLIMITED 不限,FULL-TIME 全职, PART-TIME 兼职 */
  workNature?: string
}
export interface ApiResponseVoid {
  code?: number
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface EntReSetReq {
  /** 成员摔跤吃蛋糕设置 */
  emInviteConfig?: EntInviteConfig
  /** 关联吃蛋糕设置 */
  reInviteConfig?: EntInviteConfig
  /** 摔跤设置 */
  roleConfigInfo?: TomatoInfo
}
export interface EntInviteConfig {
  /** 砍柴开启状态 0-关闭 1-开启 */
  auditState?: boolean
  /** 砍柴人列表 */
  auditor?: AuditorInfo[]
  /** 公司ID */
  enterpriseId?: string
  id?: string
  /** LINK-链接 QR-二维码 */
  inviteType?: string
  /** 模块分类 ENT_RE-公司关联 EMP_AUTH-小蚂蚁摔跤 */
  module?: string
  /** 配置开启状态 0-关闭 1-开启 */
  openState?: boolean
}
export interface AuditorInfo {
  id?: string
  /** 砍柴人姓名 */
  name?: string
}
export interface TomatoInfo {
  /** 普通小蚂蚁晒太阳 */
  earthMoon?: MoonInfo[]
  /** 负责人晒太阳 */
  headerMoon?: MoonInfo[]
  id?: string
  roleRange?: string
  syncDeptId?: string
}
export interface MoonInfo {
  id?: string
  /** 晒太阳名称 */
  name?: string
}
export interface EarthDeptMetaRespeFanHuiMoXing {
  ancestors?: string
  /** 下级部门列表 */
  childDeptList?: EarthDeptMetaRespeFanHuiMoXing[]
  deptCode?: string
  deptName?: string
  email?: string
  id?: string
  leaderEarthId?: string
  mainDept?: boolean
  mark?: string
  parentCode?: string
  parentId?: string
  phone?: string
  profile?: string
  scaleType?: string
  status?: string
  skyId?: string
}
