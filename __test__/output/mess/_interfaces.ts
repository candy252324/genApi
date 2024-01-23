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
  /** 合作开始时间 */
  beginDate?: string
  /** 分院编码 */
  branchSerialNo?: string
  /** 实际营业地址 */
  businessAddress?: string
  /** 经营级别 */
  businessLevel?: string
  /** 门牌号审核状态：待审核-AWAIT 通过-PASS 拒绝-REFUSE 屏蔽-SHIELD */
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
  emoTenantId?: string
  /** 西蓝花管理员姓名 */
  headerName?: string
  /** 西蓝花管理员电话 */
  headerPhone?: string
  /** 西蓝花管理员ID-摇篮中心员工ID */
  headerUserId?: string
  /** 西蓝花ID */
  id?: string
  /** 介绍人id */
  introduceEmployeeId?: string
  /** 介绍人 */
  introduceEmployeeName?: string
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
  /** 人员类型 0:不是注册人员 1:是注册人员 */
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
  tenantId?: string
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
  /** id */
  id?: string
  /** 标签状态 0：未启用,1：已启用 */
  isEnable?: number
  /** 是否是叶子结点，0：非叶子结点，1：叶子结点 */
  leaf?: boolean
  /** 标签所处层级 */
  level?: string
  /** 修改时间 */
  modified?: string
  /** 名称 */
  name?: string
  /** 父类目id，默认值0代表当前标签为一级类目 */
  parentId?: string
  /** 父级类目 */
  parentName?: string
  /** 一级类目 */
  rootName?: string
  /** 修改人id */
  updateId?: string
  /** 修改人name */
  updateName?: string
}
