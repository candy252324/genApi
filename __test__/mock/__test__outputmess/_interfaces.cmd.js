function ApiResponseComPageXiLanHuaLieBiao() {
  return {
    code: 200,
    data: ComPageXiLanHuaLieBiao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ComPageXiLanHuaLieBiao() {
  return {
    current: '@string(5,50)',
    'records|1-20': [XiLanHuaLieBiao()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function XiLanHuaLieBiao() {
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
    emoTenantId: '@guid',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    headerUserId: '@guid',
    id: '@guid',
    introduceEmployeeId: '@guid',
    introduceEmployeeName: '@ctitle(5,10)',
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
    tenantId: '@guid',
  }
}
function ApiResponseListListlong() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListJobCategoryConfigResp() {
  return {
    code: 200,
    'data|1-20': [JobCategoryConfigResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function JobCategoryConfigResp() {
  return {
    'children|1-20': [''],
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
  }
}
function HappyPlanAddCustomerReq() {
  return {
    'addCustomerList|1-20': [HappyPlanAddCustomerListReq()],
    'dateList|1-20': [''],
  }
}
function HappyPlanAddCustomerListReq() {
  return {
    customerType: '@string(5,50)',
    id: '@guid',
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
function ApiResponseResumeInfoMobileResp() {
  return {
    code: 200,
    data: ResumeInfoMobileResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ResumeInfoMobileResp() {
  return {
    age: '@string(5,50)',
    avatarAddress: '@image(200x100, @color, @color)',
    certCount: '@string(5,50)',
    certStatusMark: '@string(5,50)',
    'certificateNameList|1-20': ['@ctitle(5,10)'],
    'certificates|1-20': [NvWaBuTianLaoBing()],
  }
}
function NvWaBuTianLaoBing() {
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
module.exports = {
  ApiResponseComPageXiLanHuaLieBiao,
  ComPageXiLanHuaLieBiao,
  XiLanHuaLieBiao,
  ApiResponseListListlong,
  ApiResponseListJobCategoryConfigResp,
  JobCategoryConfigResp,
  HappyPlanAddCustomerReq,
  HappyPlanAddCustomerListReq,
  ApiResponseobject,
  ApiResponseResumeInfoMobileResp,
  ResumeInfoMobileResp,
  NvWaBuTianLaoBing,
}
