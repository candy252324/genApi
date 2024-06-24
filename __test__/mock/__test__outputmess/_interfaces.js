import Mock from 'better-mock'
export function ApiResponseComPageXiLanHuaLieBiao() {
  return {
    code: 200,
    data: ComPageXiLanHuaLieBiao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ComPageXiLanHuaLieBiao() {
  return {
    current: '@string(5,50)',
    'records|1-20': [XiLanHuaLieBiao()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function XiLanHuaLieBiao() {
  return {
    actualResponsiblePerson: '@string(5,50)',
    aidedManagementName: '@ctitle(5,10)',
    area: '@string(5,50)',
    areaCode: '@string(5,50)',
    areaScope: '@string(5,50)',
    businessLicenseAuditStatus: '@string(5,50)',
    businessLicenseAuthStatus: '@string(5,50)',
    businessLicenseUrl: '@image(200x100, @color, @color)',
    businessScope: '@string(5,50)',
    businessUserName: '@cname',
    city: '@city',
    cooperateStatus: '@string(5,50)',
    cooperateType: '@string(5,50)',
    cooperateTypeFirst: '@string(5,50)',
    cooperateTypeSecond: '@string(5,50)',
    cooperateTypeThird: '@string(5,50)',
    country: '@string(5,50)',
    creditCode: '@string(5,50)',
    empowerReId: '@guid',
    endDate: '@datetime',
    enterpriseBranchName: '@ctitle(5,10)',
    firstCooperationTime: '@datetime',
    emoEnterpriseId: '@guid',
    emoSkyId: '@guid',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    headerUserId: '@guid',
    id: '@guid',
    introduceEarthId: '@guid',
    introduceEarthName: '@ctitle(5,10)',
    investment: '@integer(3,1000)',
    legalPerson: '@string(5,50)',
    legalPersonPhone: '@integer(13100000000,18999999999)',
    location: '@string(5,50)',
    mainBusinessStage: '@string(5,50)',
    name: '@ctitle(5,10)',
    personType: '@integer(3,1000)',
    pinyin: '@string(5,50)',
    platformEnterpriseId: '@guid',
    province: '@province',
    relateContractNum: '@string(5,50)',
    serialNo: '@string(5,50)',
    signId: '@guid',
    skyId: '@guid',
  }
}
export function ApiResponseListListlong() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListJobCategoryConfigResp() {
  return {
    code: 200,
    'data|1-20': [JobCategoryConfigResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function JobCategoryConfigResp(n = 2) {
  if (n <= 0) {
    return {
      createId: '@guid',
      createName: '@ctitle(5,10)',
      created: '@datetime',
    }
  }
  n = n - 1

  return {
    'children|1-20': [JobCategoryConfigResp(n)],
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
  }
}
export function HappyPlanAddCustomerReq() {
  return {
    'addCustomerList|1-20': [HappyPlanAddCustomerListReq()],
    'dateList|1-20': [''],
  }
}
export function HappyPlanAddCustomerListReq() {
  return {
    customerType: '@string(5,50)',
    id: '@guid',
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
export function ApiResponseResumeInfoMobileResp() {
  return {
    code: 200,
    data: ResumeInfoMobileResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ResumeInfoMobileResp() {
  return {
    age: '@string(5,50)',
    avatarAddress: '@image(200x100, @color, @color)',
    certCount: '@string(5,50)',
    certStatusMark: '@string(5,50)',
    'certificateNameList|1-20': ['@ctitle(5,10)'],
    'certificates|1-20': [NvWaBuTianLaoBing()],
  }
}
export function NvWaBuTianLaoBing() {
  return {
    additionalRemarks: '@string(5,50)',
    blacklistRecordCnt: '@string(5,50)',
    certStatusMark: '@string(5,50)',
    certificateName: '@ctitle(5,10)',
    certificateStatus: '@string(5,50)',
    cooperateSocialSecurity: '@string(5,50)',
    registrationStatus: '@string(5,50)',
    sex: '@string(5,50)',
    sikuCertificateCnt: '@string(5,50)',
    technicalTitle: '@ctitle(5,10)',
    workExperience: '@string(5,50)',
    workNature: '@string(5,50)',
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
export function EntReSetReq() {
  return {
    emInviteConfig: EntInviteConfig(),
    reInviteConfig: EntInviteConfig(),
    roleConfigInfo: TomatoInfo(),
  }
}
export function EntInviteConfig() {
  return {
    auditState: '@boolean',
    'auditor|1-20': [AuditorInfo()],
    enterpriseId: '@guid',
    id: '@guid',
    inviteType: '@string(5,50)',
    module: '@string(5,50)',
    openState: '@boolean',
  }
}
export function AuditorInfo() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
export function TomatoInfo() {
  return {
    'earthMoon|1-20': [MoonInfo()],
    'headerMoon|1-20': [MoonInfo()],
    id: '@guid',
    roleRange: '@string(5,50)',
    syncDeptId: '@guid',
  }
}
export function MoonInfo() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
export function EarthDeptMetaRespeFanHuiMoXing(n = 2) {
  if (n <= 0) {
    return {
      ancestors: '@string(5,50)',
      deptCode: '@string(5,50)',
      deptName: '@ctitle(5,10)',
      email: '@email',
      id: '@guid',
      leaderEarthId: '@guid',
      mainDept: '@boolean',
      mark: '@string(5,50)',
      parentCode: '@string(5,50)',
      parentId: '@guid',
      phone: '@integer(13100000000,18999999999)',
      profile: '@string(5,50)',
      scaleType: '@string(5,50)',
      status: '@string(5,50)',
      skyId: '@guid',
    }
  }
  n = n - 1

  return {
    ancestors: '@string(5,50)',
    'childDeptList|1-20': [EarthDeptMetaRespeFanHuiMoXing(n)],
    deptCode: '@string(5,50)',
    deptName: '@ctitle(5,10)',
    email: '@email',
    id: '@guid',
    leaderEarthId: '@guid',
    mainDept: '@boolean',
    mark: '@string(5,50)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    phone: '@integer(13100000000,18999999999)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    status: '@string(5,50)',
    skyId: '@guid',
  }
}
export function ApiResponseWhiteDetailResp() {
  return {
    code: 200,
    data: WhiteDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function WhiteDetailResp() {
  return {
    channelWhiteName: '@ctitle(5,10)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    email: '@email',
    id: '@guid',
    leaderDesktopId: '@guid',
    leaderDesktopInfo: DesktopComplexResp(),
    markDesc: '@string(5,50)',
    modified: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentId: '@guid',
    scaleTypeDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
  }
}
export function DesktopComplexResp() {
  return {
    authStatus: '@boolean',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    'whiteRespList|1-20': [DesktopWhiteResp()],
    email: '@email',
    id: '@guid',
    'jobRespList|1-20': [DesktopJobResp()],
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    'postRespList|1-20': [DesktopPostResp()],
    realAuth: '@boolean',
    relation: '@string(5,50)',
    sex: '@string(5,50)',
    sexDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function DesktopWhiteResp() {
  return {
    whiteCode: '@string(5,50)',
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
    desktopId: '@guid',
    id: '@guid',
    mainWhite: '@boolean',
    gratefulId: '@guid',
  }
}
export function DesktopJobResp() {
  return {
    desktopId: '@guid',
    id: '@guid',
    jobCode: '@string(5,50)',
    jobId: '@guid',
    jobName: '@ctitle(5,10)',
    gratefulId: '@guid',
  }
}
export function DesktopPostResp() {
  return {
    desktopId: '@guid',
    id: '@guid',
    postCode: '@string(5,50)',
    postId: '@guid',
    postName: '@ctitle(5,10)',
    gratefulId: '@guid',
  }
}
