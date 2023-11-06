import Mock from 'better-mock'
export function AddHappyDoorReq() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyClassificationType: Mock.mock('@string(5,100)'),
    happySource: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    categoryName: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    corporateName: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    createSource: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    enableSaveOrUpdate: Mock.mock('@boolean'),
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    doorStatus: Mock.mock('@string(5,100)'),
    establishmentTime: Mock.mock('@datetime'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    lat: Mock.mock('@string(5,100)'),
    licenseId: Mock.mock('@guid'),
    lng: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    regCatCnt: Mock.mock('@string(5,100)'),
    orangeeredCapital: Mock.mock('@string(5,100)'),
    score: Mock.mock('@integer(3,1000)'),
    searchStationId: Mock.mock('@guid'),
    skAchievementCnt: Mock.mock('@string(5,100)'),
    skQualificationCnt: Mock.mock('@string(5,100)'),
    step: Mock.mock('@integer(3,1000)'),
    thirdId: Mock.mock('@guid'),
    type: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function AddHappyCatCertificateReq() {
  return {
    id: Mock.mock('@guid'),
    major: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    pictureUrl: Mock.mock('@url'),
  }
}
export function AddHappyCatReq() {
  return {
    achievementCnt: Mock.mock('@string(5,100)'),
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    badBehaviorCnt: Mock.mock('@string(5,100)'),
    blacklistRecordCnt: Mock.mock('@string(5,100)'),
    happyClassificationType: Mock.mock('@string(5,100)'),
    happySource: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    'certificateList|1-20': [AddHappyCatCertificateReq()],
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    createSource: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    education: Mock.mock('@string(5,100)'),
    enableSaveOrUpdate: Mock.mock('@boolean'),
    gender: Mock.mock('@string(5,100)'),
    goodBehaviorCnt: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    lat: Mock.mock('@string(5,100)'),
    licenseId: Mock.mock('@guid'),
    lng: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    catName: Mock.mock('@string(5,100)'),
    catnelRisk: Mock.mock('@integer(3,1000)'),
    phone: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    searchStationId: Mock.mock('@guid'),
    skCertificateCnt: Mock.mock('@string(5,100)'),
    step: Mock.mock('@integer(3,1000)'),
    thirdId: Mock.mock('@guid'),
    'titleList|1-20': [AddHappyCatTitleReq()],
    type: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function AddHappyCatTitleReq() {
  return {
    id: Mock.mock('@guid'),
    level: Mock.mock('@string(5,100)'),
    major: Mock.mock('@string(5,100)'),
    pictureUrl: Mock.mock('@url'),
  }
}
export function AddHappyGladReq() {
  return {
    agencies: Mock.mock('@string(5,100)'),
    agenciesAddr: Mock.mock('@string(5,100)'),
    agenciesAddrCoordinate: Mock.mock('@string(5,100)'),
    agenciesAddrLat: Mock.mock('@string(5,100)'),
    agenciesAddrLng: Mock.mock('@string(5,100)'),
    agenciesArea: Mock.mock('@string(5,100)'),
    agenciesCity: Mock.mock('@city'),
    agenciesCountry: Mock.mock('@string(5,100)'),
    agenciesPhone: Mock.mock('@string(5,100)'),
    agenciesProvince: Mock.mock('@province'),
    biddingCorpAddr: Mock.mock('@string(5,100)'),
    biddingCorpAddrCoordinate: Mock.mock('@string(5,100)'),
    biddingCorpAddrLat: Mock.mock('@string(5,100)'),
    biddingCorpAddrLng: Mock.mock('@string(5,100)'),
    biddingCorpArea: Mock.mock('@string(5,100)'),
    biddingCorpCity: Mock.mock('@city'),
    biddingCorpCountry: Mock.mock('@string(5,100)'),
    biddingCorpName: Mock.mock('@string(5,100)'),
    biddingCorpPhone: Mock.mock('@string(5,100)'),
    biddingCorpProvince: Mock.mock('@province'),
    biddingEndTime: Mock.mock('@datetime'),
    biddingOpeningTime: Mock.mock('@datetime'),
    biddingStartTime: Mock.mock('@datetime'),
    biddingType: Mock.mock('@string(5,100)'),
    happyClassificationType: Mock.mock('@string(5,100)'),
    happySource: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    createSource: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    enableSaveOrUpdate: Mock.mock('@boolean'),
    fileDownloadEndTime: Mock.mock('@datetime'),
    fileDownloadStartTime: Mock.mock('@datetime'),
    id: Mock.mock('@guid'),
    industryType: Mock.mock('@string(5,100)'),
    isDelete: Mock.mock('@string(5,100)'),
    lat: Mock.mock('@string(5,100)'),
    licenseId: Mock.mock('@guid'),
    lng: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    gladBudget: Mock.mock('@string(5,100)'),
    gladName: Mock.mock('@string(5,100)'),
    gladNum: Mock.mock('@string(5,100)'),
    gladType: Mock.mock('@string(5,100)'),
    searchStationId: Mock.mock('@guid'),
    step: Mock.mock('@integer(3,1000)'),
    thirdId: Mock.mock('@guid'),
    type: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
    webPageUrl: Mock.mock('@url'),
  }
}
export function AddHappyReq() {
  return {
    happyClassificationType: Mock.mock('@string(5,100)'),
    happySource: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    createSource: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    enableSaveOrUpdate: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    lat: Mock.mock('@string(5,100)'),
    licenseId: Mock.mock('@guid'),
    lng: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    searchStationId: Mock.mock('@guid'),
    step: Mock.mock('@integer(3,1000)'),
    thirdId: Mock.mock('@guid'),
    type: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function AddHappyResp() {
  return {
    failCnt: Mock.mock('@integer(3,1000)'),
    id: Mock.mock('@guid'),
    licenseId: Mock.mock('@guid'),
    'list|1-20': [Mock.mock('')],
    gladName: Mock.mock('@string(5,100)'),
    receiveName: Mock.mock('@string(5,100)'),
    successCnt: Mock.mock('@integer(3,1000)'),
  }
}
export function AddCustomerResp() {
  return {
    'list|1-20': [CustomerDoorInfoResp()],
    repeatType: Mock.mock('@string(5,100)'),
  }
}
export function AddCatCustomerResp() {
  return {
    'list|1-20': [CustomerCatInfoResp()],
    repeatType: Mock.mock('@string(5,100)'),
  }
}
export function AddSignHappyDoorReq() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyId: Mock.mock('@guid'),
    happySource: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    categoryName: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    corporateName: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    createSource: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    doorStatus: Mock.mock('@string(5,100)'),
    establishmentTime: Mock.mock('@datetime'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    lat: Mock.mock('@string(5,100)'),
    licenseId: Mock.mock('@guid'),
    lng: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    regCatCnt: Mock.mock('@string(5,100)'),
    orangeeredCapital: Mock.mock('@string(5,100)'),
    score: Mock.mock('@integer(3,1000)'),
    signType: Mock.mock('@string(5,100)'),
    skAchievementCnt: Mock.mock('@string(5,100)'),
    skQualificationCnt: Mock.mock('@string(5,100)'),
    step: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function AddSignHappyCatReq() {
  return {
    achievementCnt: Mock.mock('@string(5,100)'),
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyId: Mock.mock('@guid'),
    happySource: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    'certificateList|1-20': [AddHappyCatCertificateReq()],
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    createSource: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    education: Mock.mock('@string(5,100)'),
    gender: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    lat: Mock.mock('@string(5,100)'),
    lng: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    catName: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    signType: Mock.mock('@string(5,100)'),
    step: Mock.mock('@integer(3,1000)'),
    'titleList|1-20': [AddHappyCatTitleReq()],
    type: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function AddSignHappyGladReq() {
  return {
    agencies: Mock.mock('@string(5,100)'),
    agenciesAddr: Mock.mock('@string(5,100)'),
    agenciesAddrCoordinate: Mock.mock('@string(5,100)'),
    agenciesAddrLat: Mock.mock('@string(5,100)'),
    agenciesAddrLng: Mock.mock('@string(5,100)'),
    agenciesArea: Mock.mock('@string(5,100)'),
    agenciesCity: Mock.mock('@city'),
    agenciesCountry: Mock.mock('@string(5,100)'),
    agenciesPhone: Mock.mock('@string(5,100)'),
    agenciesProvince: Mock.mock('@province'),
    biddingCorpAddr: Mock.mock('@string(5,100)'),
    biddingCorpAddrCoordinate: Mock.mock('@string(5,100)'),
    biddingCorpAddrLat: Mock.mock('@string(5,100)'),
    biddingCorpAddrLng: Mock.mock('@string(5,100)'),
    biddingCorpArea: Mock.mock('@string(5,100)'),
    biddingCorpCity: Mock.mock('@city'),
    biddingCorpCountry: Mock.mock('@string(5,100)'),
    biddingCorpName: Mock.mock('@string(5,100)'),
    biddingCorpPhone: Mock.mock('@string(5,100)'),
    biddingCorpProvince: Mock.mock('@province'),
    biddingEndTime: Mock.mock('@datetime'),
    biddingOpeningTime: Mock.mock('@datetime'),
    biddingStartTime: Mock.mock('@datetime'),
    biddingType: Mock.mock('@string(5,100)'),
    happyId: Mock.mock('@guid'),
    happySource: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    createSource: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    fileDownloadEndTime: Mock.mock('@datetime'),
    fileDownloadStartTime: Mock.mock('@datetime'),
    id: Mock.mock('@guid'),
    industryType: Mock.mock('@string(5,100)'),
    isDelete: Mock.mock('@string(5,100)'),
    lat: Mock.mock('@string(5,100)'),
    lng: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    gladBudget: Mock.mock('@string(5,100)'),
    gladName: Mock.mock('@string(5,100)'),
    gladNum: Mock.mock('@string(5,100)'),
    gladType: Mock.mock('@string(5,100)'),
    signType: Mock.mock('@string(5,100)'),
    step: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@string(5,100)'),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
    webPageUrl: Mock.mock('@url'),
  }
}
export function AddSignHappyResp() {
  return {
    happyId: Mock.mock('@guid'),
    'list|1-20': [Mock.mock('')],
    mobile: Mock.mock('@string(5,100)'),
    signId: Mock.mock('@guid'),
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
export function ApiResponseAddHappyResp() {
  return {
    code: 200,
    data: Mock.mock('AddHappyResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseAddCustomerResp() {
  return {
    code: 200,
    data: Mock.mock('AddCustomerResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseAddCatCustomerResp() {
  return {
    code: 200,
    data: Mock.mock('AddCatCustomerResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseAddSignHappyResp() {
  return {
    code: 200,
    data: Mock.mock('AddSignHappyResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHappyClassificationResp() {
  return {
    code: 200,
    data: Mock.mock('HappyClassificationResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHappyDesktopRulePageResp() {
  return {
    code: 200,
    data: Mock.mock('HappyDesktopRulePageResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHappyDesktopRuleResp() {
  return {
    code: 200,
    data: Mock.mock('HappyDesktopRuleResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHappyDoorInfoResp() {
  return {
    code: 200,
    data: Mock.mock('HappyDoorInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHappyNumResp() {
  return {
    code: 200,
    data: Mock.mock('HappyNumResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHappyCatInfoResp() {
  return {
    code: 200,
    data: Mock.mock('HappyCatInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHappyPlanCountResp() {
  return {
    code: 200,
    data: Mock.mock('HappyPlanCountResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHappyGladInfoResp() {
  return {
    code: 200,
    data: Mock.mock('HappyGladInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHappyPushInfoResp() {
  return {
    code: 200,
    data: Mock.mock('HappyPushInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHappyReceiveResp() {
  return {
    code: 200,
    data: Mock.mock('HappyReceiveResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHappySubscribeInfoResp() {
  return {
    code: 200,
    data: Mock.mock('HappySubscribeInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageHappyPushDetail() {
  return {
    code: 200,
    data: Mock.mock('ComPageHappyPushDetail()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageCustomerDoorInfoResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageCustomerDoorInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageCustomerCatInfoResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageCustomerCatInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageDesktopListResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageDesktopListResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageLocationDateInfoResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageLocationDateInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageLocationInfoResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageLocationInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPagePageHappyResp() {
  return {
    code: 200,
    data: Mock.mock('ComPagePageHappyResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPagePageDoorHappyPoolResp() {
  return {
    code: 200,
    data: Mock.mock('ComPagePageDoorHappyPoolResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPagePageCatHappyPoolResp() {
  return {
    code: 200,
    data: Mock.mock('ComPagePageCatHappyPoolResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPagePageGladHappyPoolResp() {
  return {
    code: 200,
    data: Mock.mock('ComPagePageGladHappyPoolResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPagePunchPageResp() {
  return {
    code: 200,
    data: Mock.mock('ComPagePunchPageResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageTaskPageListResp() {
  return {
    code: 200,
    data: Mock.mock('ComPageTaskPageListResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageTreelong() {
  return {
    code: 200,
    data: Mock.mock('ComPageTreelong()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
  return {
    code: 200,
    data: Mock.mock('ComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageFenYeLvYouRenWu() {
  return {
    code: 200,
    data: Mock.mock('ComPageFenYeLvYouRenWu()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
  return {
    code: 200,
    data: Mock.mock('ComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
  return {
    code: 200,
    data: Mock.mock('ComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageHuaHuaTiQingQiu() {
  return {
    code: 200,
    data: Mock.mock('ComPageHuaHuaTiQingQiu()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageJiQiRenGenJinJiLuXiangYing() {
  return {
    code: 200,
    data: Mock.mock('ComPageJiQiRenGenJinJiLuXiangYing()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageDaoRuHuaHuaTiXiangYing() {
  return {
    code: 200,
    data: Mock.mock('ComPageDaoRuHuaHuaTiXiangYing()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageSouSuoRenCaiJiQiRenresponse() {
  return {
    code: 200,
    data: Mock.mock('ComPageSouSuoRenCaiJiQiRenresponse()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageSouSuoZhiXieChangJiQiRenresponse() {
  return {
    code: 200,
    data: Mock.mock('ComPageSouSuoZhiXieChangJiQiRenresponse()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageCaoZuoRiZhiFenYeresponse() {
  return {
    code: 200,
    data: Mock.mock('ComPageCaoZuoRiZhiFenYeresponse()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageHongLingJinJiLuFenYeresponse() {
  return {
    code: 200,
    data: Mock.mock('ComPageHongLingJinJiLuFenYeresponse()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageLianXiRenHuaHuaTi() {
  return {
    code: 200,
    data: Mock.mock('ComPageLianXiRenHuaHuaTi()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseComPageXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    code: 200,
    data: Mock.mock('ComPageXiangMuFaCaiMengXiangQingrpcresponse()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseCountCustomerHappyNumResp() {
  return {
    code: 200,
    data: Mock.mock('CountCustomerHappyNumResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseCustomerDoorAddResp() {
  return {
    code: 200,
    data: Mock.mock('CustomerDoorAddResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseCustomerDoorDetailResp() {
  return {
    code: 200,
    data: Mock.mock('CustomerDoorDetailResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseCustomerDoorNumResp() {
  return {
    code: 200,
    data: Mock.mock('CustomerDoorNumResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseCustomerCatAddResp() {
  return {
    code: 200,
    data: Mock.mock('CustomerCatAddResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseCustomerCatDetailResp() {
  return {
    code: 200,
    data: Mock.mock('CustomerCatDetailResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseDesktopResp() {
  return {
    code: 200,
    data: Mock.mock('DesktopResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListHappyPlanCoordinateResp() {
  return {
    code: 200,
    'data|1-20': [HappyPlanCoordinateResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListCustomerDoorFromDataResp() {
  return {
    code: 200,
    'data|1-20': [CustomerDoorFromDataResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListDayCityResp() {
  return {
    code: 200,
    'data|1-20': [DayCityResp()],
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
export function ApiResponseListWhiteResp() {
  return {
    code: 200,
    'data|1-20': [WhiteResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListDocument() {
  return {
    code: 200,
    'data|1-20': [Document()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListDesktopResp() {
  return {
    code: 200,
    'data|1-20': [DesktopResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListLocationInfoResp() {
  return {
    code: 200,
    'data|1-20': [LocationInfoResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListPagePlanResp() {
  return {
    code: 200,
    'data|1-20': [PagePlanResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListTaskProgressDetailResp() {
  return {
    code: 200,
    'data|1-20': [TaskProgressDetailResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListTaskProgressCatResp() {
  return {
    code: 200,
    'data|1-20': [TaskProgressCatResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListTreelong() {
  return {
    code: 200,
    'data|1-20': [Mock.mock('')],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListTreestring() {
  return {
    code: 200,
    'data|1-20': [Mock.mock('')],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListobject() {
  return {
    code: 200,
    'data|1-20': [Mock.mock('')],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListstring() {
  return {
    code: 200,
    'data|1-20': [Mock.mock('@string(5,100)')],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseListTongJiShuJuHistogramResp() {
  return {
    code: 200,
    'data|1-20': [TongJiShuJuHistogramResp()],
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseMaplongCustomerDoorDetailResp() {
  return {
    code: 200,
    data: Mock.mock('CustomerDoorDetailResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseGladSignInfoResp() {
  return {
    code: 200,
    data: Mock.mock('GladSignInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseRankResp() {
  return {
    code: 200,
    data: Mock.mock('RankResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseTaskInfoResp() {
  return {
    code: 200,
    data: Mock.mock('TaskInfoResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseTravelLoginResp() {
  return {
    code: 200,
    data: Mock.mock('TravelLoginResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseVoid() {
  return {
    code: 200,
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
export function ApiResponseShangChuanWenJianFanHui() {
  return {
    code: 200,
    data: Mock.mock('ShangChuanWenJianFanHui()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseZhiXieChangFaCaiMengXiangQingrpcresponse() {
  return {
    code: 200,
    data: Mock.mock('ZhiXieChangFaCaiMengXiangQingrpcresponse()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseGuanLianFaCaiMengResponse() {
  return {
    code: 200,
    data: Mock.mock('GuanLianFaCaiMengResponse()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHuaHuaTiQingQiu() {
  return {
    code: 200,
    data: Mock.mock('HuaHuaTiQingQiu()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseHongLingJinJieGuoresponse() {
  return {
    code: 200,
    data: Mock.mock('HongLingJinJieGuoresponse()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseTongJiShuJuPieDataResp() {
  return {
    code: 200,
    data: Mock.mock('TongJiShuJuPieDataResp()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseLianXiRenHuaHuaTi() {
  return {
    code: 200,
    data: Mock.mock('LianXiRenHuaHuaTi()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseDuRuWenJianXiangYing() {
  return {
    code: 200,
    data: Mock.mock('DuRuWenJianXiangYing()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function ApiResponseXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    code: 200,
    data: Mock.mock('XiangMuFaCaiMengXiangQingrpcresponse()'),
    msg: Mock.mock('@string(5,100)'),
    success: Mock.mock('@boolean'),
    timestamp: Mock.mock('@datetime'),
    traceId: Mock.mock('@guid'),
  }
}
export function AssignHappyReq() {
  return {
    'happyList|1-20': [AddHappyReq()],
    happyReceiveSource: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    date: Mock.mock('@datetime'),
    receiverId: Mock.mock('@guid'),
    receiverName: Mock.mock('@string(5,100)'),
  }
}
export function HappyClassificationResp() {
  return {
    'happyClassificationList|1-20': [HappyCntResp()],
  }
}
export function HappyCntResp() {
  return {
    count: Mock.mock('@string(5,100)'),
    label: Mock.mock('@string(5,100)'),
    value: Mock.mock('@string(5,100)'),
  }
}
export function HappyDesktopDetailRulePageResp() {
  return {
    happyNumEveryday: Mock.mock('@integer(3,1000)'),
    desktopId: Mock.mock('@guid'),
    desktopName: Mock.mock('@string(5,100)'),
    doorLimit: Mock.mock('@integer(3,1000)'),
    catLimit: Mock.mock('@integer(3,1000)'),
    gladLimit: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyDesktopDetailRuleReq() {
  return {
    happyNumEveryday: Mock.mock('@integer(3,1000)'),
    desktopId: Mock.mock('@guid'),
    desktopName: Mock.mock('@string(5,100)'),
    doorLimit: Mock.mock('@integer(3,1000)'),
    catLimit: Mock.mock('@integer(3,1000)'),
    gladLimit: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyDesktopRulePageReq() {
  return {
    'desktopIdList|1-20': [Mock.mock('@string(5,100)')],
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyDesktopRulePageResp() {
  return {
    happyNumEveryday: Mock.mock('@integer(3,1000)'),
    desktopDetailRulePage: Mock.mock('ComPageHappyDesktopDetailRulePageResp()'),
    doorLimit: Mock.mock('@integer(3,1000)'),
    isDoorNoLimit: Mock.mock('@integer(3,1000)'),
    isCatNoLimit: Mock.mock('@integer(3,1000)'),
    isGladNoLimit: Mock.mock('@integer(3,1000)'),
    catLimit: Mock.mock('@integer(3,1000)'),
    gladLimit: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyDesktopRuleReq() {
  return {
    happyNumEveryday: Mock.mock('@integer(3,1000)'),
    'detailRuleList|1-20': [HappyDesktopDetailRuleReq()],
    doorLimit: Mock.mock('@integer(3,1000)'),
    isDoorNoLimit: Mock.mock('@integer(3,1000)'),
    isCatNoLimit: Mock.mock('@integer(3,1000)'),
    isGladNoLimit: Mock.mock('@integer(3,1000)'),
    catLimit: Mock.mock('@integer(3,1000)'),
    gladLimit: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyDesktopRuleResp() {
  return {
    doorNoFollowTime: Mock.mock('@integer(3,1000)'),
    doorTimeType: Mock.mock('@datetime'),
    isDoorNeedBackOpenSea: Mock.mock('@integer(3,1000)'),
    isCatNeedBackOpenSea: Mock.mock('@integer(3,1000)'),
    isGladNeedBackOpenSea: Mock.mock('@integer(3,1000)'),
    catNoFollowTime: Mock.mock('@integer(3,1000)'),
    catTimeType: Mock.mock('@datetime'),
    gladNoFollowTime: Mock.mock('@integer(3,1000)'),
    gladTimeType: Mock.mock('@datetime'),
  }
}
export function HappyDoorInfoResp() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    categoryName: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    corpCertArray: Mock.mock('@string(5,100)'),
    corporateName: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    doorStatus: Mock.mock('@string(5,100)'),
    doorType: Mock.mock('@string(5,100)'),
    establishmentTime: Mock.mock('@datetime'),
    filialeCompanyNameArray: Mock.mock('@string(5,100)'),
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    hasCustomer: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    isRead: Mock.mock('@string(5,100)'),
    lastFetchTime: Mock.mock('@datetime'),
    lastFollowTime: Mock.mock('@datetime'),
    lat: Mock.mock('@string(5,100)'),
    licenseId: Mock.mock('@guid'),
    lng: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    planId: Mock.mock('@guid'),
    planScore: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    qualicaficationArray: Mock.mock('@string(5,100)'),
    recommendedReason: Mock.mock('@string(5,100)'),
    regCatCnt: Mock.mock('@string(5,100)'),
    orangeeredCapital: Mock.mock('@string(5,100)'),
    score: Mock.mock('@integer(3,1000)'),
    signId: Mock.mock('@guid'),
    skAchievementCnt: Mock.mock('@string(5,100)'),
    skQualificationCnt: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    thirdId: Mock.mock('@guid'),
  }
}
export function HappyFollowReq() {
  return {
    addr: Mock.mock('@string(5,100)'),
    happyId: Mock.mock('@guid'),
    happyType: Mock.mock('@string(5,100)'),
    contactCatId: Mock.mock('@guid'),
    contactCatName: Mock.mock('@string(5,100)'),
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    date: Mock.mock('@datetime'),
    'dateList|1-20': [Mock.mock('@datetime')],
    'fileIdList|1-20': [Mock.mock('@string(5,100)')],
    followResult: Mock.mock('@string(5,100)'),
    followType: Mock.mock('@string(5,100)'),
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    setPlanType: Mock.mock('@integer(3,1000)'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function HappyFollowRuleReq() {
  return {
    doorNoFollowTime: Mock.mock('@integer(3,1000)'),
    doorTimeType: Mock.mock('@datetime'),
    isDoorNeedBackOpenSea: Mock.mock('@integer(3,1000)'),
    isCatNeedBackOpenSea: Mock.mock('@integer(3,1000)'),
    isGladNeedBackOpenSea: Mock.mock('@integer(3,1000)'),
    catNoFollowTime: Mock.mock('@integer(3,1000)'),
    catTimeType: Mock.mock('@datetime'),
    gladNoFollowTime: Mock.mock('@integer(3,1000)'),
    gladTimeType: Mock.mock('@datetime'),
  }
}
export function HappyNumReq() {
  return {
    happyType: Mock.mock('@string(5,100)'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyNumResp() {
  return {
    followNum: Mock.mock('@integer(3,1000)'),
    highIntentionNum: Mock.mock('@integer(3,1000)'),
    invalidNum: Mock.mock('@integer(3,1000)'),
    longTimeNoSignNum: Mock.mock('@integer(3,1000)'),
    newNum: Mock.mock('@integer(3,1000)'),
    oldNum: Mock.mock('@integer(3,1000)'),
    signNum: Mock.mock('@integer(3,1000)'),
    totalNum: Mock.mock('@integer(3,1000)'),
    unreadNewNum: Mock.mock('@integer(3,1000)'),
    unreadTotalNum: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyCatCertificateResp() {
  return {
    certificateNum: Mock.mock('@string(5,100)'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    major: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    pictureUrl: Mock.mock('@url'),
    orangeered: Mock.mock('@string(5,100)'),
  }
}
export function HappyCatInfoResp() {
  return {
    achievementCnt: Mock.mock('@string(5,100)'),
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    badBehaviorCnt: Mock.mock('@string(5,100)'),
    blacklistRecordCnt: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    'certificateList|1-20': [HappyCatCertificateResp()],
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerMobile: Mock.mock('@string(5,100)'),
    customerName: Mock.mock('@string(5,100)'),
    customerType: Mock.mock('@string(5,100)'),
    education: Mock.mock('@string(5,100)'),
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    gender: Mock.mock('@string(5,100)'),
    goodBehaviorCnt: Mock.mock('@string(5,100)'),
    hasCustomer: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    isRead: Mock.mock('@string(5,100)'),
    lastFetchTime: Mock.mock('@datetime'),
    lastFollowTime: Mock.mock('@datetime'),
    lat: Mock.mock('@string(5,100)'),
    licenseId: Mock.mock('@guid'),
    lng: Mock.mock('@string(5,100)'),
    catName: Mock.mock('@string(5,100)'),
    catnelRisk: Mock.mock('@integer(3,1000)'),
    phone: Mock.mock('@string(5,100)'),
    planId: Mock.mock('@guid'),
    planScore: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    recommendedReason: Mock.mock('@string(5,100)'),
    signId: Mock.mock('@guid'),
    skCertificateCnt: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    thirdId: Mock.mock('@guid'),
    'titleList|1-20': [HappyCatTitleResp()],
  }
}
export function HappyCatTitleResp() {
  return {
    id: Mock.mock('@guid'),
    level: Mock.mock('@string(5,100)'),
    major: Mock.mock('@string(5,100)'),
    pictureUrl: Mock.mock('@url'),
  }
}
export function HappyPlanAddHappyListReq() {
  return {
    happyType: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
  }
}
export function HappyPlanAddHappyReq() {
  return {
    'addHappyList|1-20': [HappyPlanAddHappyListReq()],
    date: Mock.mock('@datetime'),
  }
}
export function HappyPlanAddCustomerListReq() {
  return {
    customerType: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
  }
}
export function HappyPlanAddCustomerReq() {
  return {
    'addCustomerList|1-20': [HappyPlanAddCustomerListReq()],
    'dateList|1-20': [ErrorModelNamenamespacejavatimenameLocalDateTime()],
  }
}
export function HappyPlanCoordinateResp() {
  return {
    coordinate: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    planId: Mock.mock('@guid'),
  }
}
export function HappyPlanCountReq() {
  return {
    date: Mock.mock('@datetime'),
  }
}
export function HappyPlanCountResp() {
  return {
    taskCount: Mock.mock('@integer(3,1000)'),
    todayCount: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyPlanDateListByTypeReq() {
  return {
    id: Mock.mock('@guid'),
    taskType: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@string(5,100)'),
  }
}
export function HappyPlanDateListReq() {
  return {
    endDate: Mock.mock('@datetime'),
    'handlerIdList|1-20': [Mock.mock('@string(5,100)')],
    startDate: Mock.mock('@datetime'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyPlanDeleteReq() {
  return {
    planId: Mock.mock('@guid'),
  }
}
export function HappyPlanPageReq() {
  return {
    date: Mock.mock('@datetime'),
    'handlerIdList|1-20': [Mock.mock('@string(5,100)')],
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyPlanPunchReq() {
  return {
    date: Mock.mock('@datetime'),
  }
}
export function HappyPlanRecommendedReq() {
  return {
    happyType: Mock.mock('@string(5,100)'),
    date: Mock.mock('@datetime'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyPlanScoreListReq() {
  return {
    planId: Mock.mock('@guid'),
    score: Mock.mock('@string(5,100)'),
  }
}
export function HappyGladInfoResp() {
  return {
    agencies: Mock.mock('@string(5,100)'),
    agenciesAddr: Mock.mock('@string(5,100)'),
    agenciesAddrLat: Mock.mock('@string(5,100)'),
    agenciesAddrLng: Mock.mock('@string(5,100)'),
    agenciesArea: Mock.mock('@string(5,100)'),
    agenciesCity: Mock.mock('@city'),
    agenciesCountry: Mock.mock('@string(5,100)'),
    agenciesPhone: Mock.mock('@string(5,100)'),
    agenciesProvince: Mock.mock('@province'),
    area: Mock.mock('@string(5,100)'),
    biddingCorpAddr: Mock.mock('@string(5,100)'),
    biddingCorpAddrLat: Mock.mock('@string(5,100)'),
    biddingCorpAddrLng: Mock.mock('@string(5,100)'),
    biddingCorpArea: Mock.mock('@string(5,100)'),
    biddingCorpCity: Mock.mock('@city'),
    biddingCorpCountry: Mock.mock('@string(5,100)'),
    biddingCorpName: Mock.mock('@string(5,100)'),
    biddingCorpPhone: Mock.mock('@string(5,100)'),
    biddingCorpProvince: Mock.mock('@province'),
    biddingEndTime: Mock.mock('@datetime'),
    biddingOpeningTime: Mock.mock('@datetime'),
    biddingStartTime: Mock.mock('@datetime'),
    biddingTime: Mock.mock('@datetime'),
    biddingType: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    fileDownloadEndTime: Mock.mock('@datetime'),
    fileDownloadStartTime: Mock.mock('@datetime'),
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    hasCustomer: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    industryType: Mock.mock('@string(5,100)'),
    isRead: Mock.mock('@string(5,100)'),
    lastFetchTime: Mock.mock('@datetime'),
    lastFollowTime: Mock.mock('@datetime'),
    lat: Mock.mock('@string(5,100)'),
    licenseId: Mock.mock('@guid'),
    lng: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    planId: Mock.mock('@guid'),
    planScore: Mock.mock('@string(5,100)'),
    gladBudget: Mock.mock('@string(5,100)'),
    gladName: Mock.mock('@string(5,100)'),
    gladNum: Mock.mock('@string(5,100)'),
    gladType: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    publishTime: Mock.mock('@datetime'),
    quoteBeginTime: Mock.mock('@datetime'),
    quoteEndTime: Mock.mock('@datetime'),
    recommendedReason: Mock.mock('@string(5,100)'),
    signId: Mock.mock('@guid'),
    signUpBeginTime: Mock.mock('@datetime'),
    signUpEndTime: Mock.mock('@datetime'),
    source: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    thirdId: Mock.mock('@guid'),
    valid: Mock.mock('@guid'),
    webPageUrl: Mock.mock('@url'),
  }
}
export function HappyPushDetail() {
  return {
    happyType: Mock.mock('@string(5,100)'),
    enable: Mock.mock('@integer(3,1000)'),
    id: Mock.mock('@guid'),
    json: Mock.mock(''),
    planPushNum: Mock.mock('@integer(3,1000)'),
    pushedNum: Mock.mock('@integer(3,1000)'),
    remark: Mock.mock('@string(5,100)'),
    ruleSettingTime: Mock.mock('@datetime'),
  }
}
export function HappyPushInfoResp() {
  return {
    'areaList|1-20': [DiZhi()],
    happyType: Mock.mock('@string(5,100)'),
    json: Mock.mock(''),
    'catList|1-20': [HappyPushCatInfoResp()],
    pushDays: Mock.mock('@integer(3,1000)'),
    pushNum: Mock.mock('@integer(3,1000)'),
    pushRule: Mock.mock('@integer(3,1000)'),
    pushType: Mock.mock('@integer(3,1000)'),
    remark: Mock.mock('@string(5,100)'),
  }
}
export function HappyPushCatInfoResp() {
  return {
    'areaList|1-20': [DiZhi()],
    'catList|1-20': [HappyPushCatResp()],
    pushNum: Mock.mock('@integer(3,1000)'),
  }
}
export function HappyPushCatResp() {
  return {
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
  }
}
export function HappyReceiveResp() {
  return {
    failCnt: Mock.mock('@integer(3,1000)'),
    id: Mock.mock('@guid'),
    licenseId: Mock.mock('@guid'),
    gladName: Mock.mock('@string(5,100)'),
    receiveName: Mock.mock('@string(5,100)'),
    successCnt: Mock.mock('@integer(3,1000)'),
  }
}
export function HappySetVisitPlanReq() {
  return {
    happyId: Mock.mock('@guid'),
    happyType: Mock.mock('@string(5,100)'),
    expectedDate: Mock.mock('@datetime'),
    interfaceType: Mock.mock('@string(5,100)'),
  }
}
export function HappySubscribeInfoReq() {
  return {
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    doorEnable: Mock.mock('@integer(3,1000)'),
    doorJson: Mock.mock(''),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@string(5,100)'),
    modified: Mock.mock('@string(5,100)'),
    catEnable: Mock.mock('@integer(3,1000)'),
    catJson: Mock.mock(''),
    gladEnable: Mock.mock('@integer(3,1000)'),
    gladJson: Mock.mock(''),
    updateId: Mock.mock('@datetime'),
    updateName: Mock.mock('@datetime'),
  }
}
export function HappySubscribeInfoResp() {
  return {
    doorEnable: Mock.mock('@integer(3,1000)'),
    doorJson: Mock.mock('@string(5,100)'),
    catEnable: Mock.mock('@integer(3,1000)'),
    catJson: Mock.mock('@string(5,100)'),
    gladEnable: Mock.mock('@integer(3,1000)'),
    gladJson: Mock.mock('@string(5,100)'),
  }
}
export function CharSequence() {}
export function ComPageHappyDesktopDetailRulePageResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [HappyDesktopDetailRulePageResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageHappyPushDetail() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [HappyPushDetail()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageCustomerDoorInfoResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [CustomerDoorInfoResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageCustomerCatInfoResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [CustomerCatInfoResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageDesktopListResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [DesktopListResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageLocationDateInfoResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [LocationDateInfoResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageLocationInfoResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [LocationInfoResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPagePageHappyResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [PageHappyResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPagePageDoorHappyPoolResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [PageDoorHappyPoolResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPagePageCatHappyPoolResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [PageCatHappyPoolResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPagePageGladHappyPoolResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [PageGladHappyPoolResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPagePunchPageResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [PunchPageResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageTaskPageListResp() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [TaskPageListResp()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageTreelong() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [Mock.mock('')],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageFenYeLvYouRenWu() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [FenYeLvYouRenWu()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageHuaHuaTiQingQiu() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [HuaHuaTiQingQiu()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageJiQiRenGenJinJiLuXiangYing() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [JiQiRenGenJinJiLuXiangYing()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageDaoRuHuaHuaTiXiangYing() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [DaoRuHuaHuaTiXiangYing()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageSouSuoRenCaiJiQiRenresponse() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [SouSuoRenCaiJiQiRenresponse()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageSouSuoZhiXieChangJiQiRenresponse() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [SouSuoZhiXieChangJiQiRenresponse()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageCaoZuoRiZhiFenYeresponse() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [CaoZuoRiZhiFenYeresponse()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageHongLingJinJiLuFenYeresponse() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [HongLingJinJiLuFenYeresponse()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageLianXiRenHuaHuaTi() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [LianXiRenHuaHuaTi()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function ComPageXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    current: Mock.mock('@string(5,100)'),
    'records|1-20': [XiangMuFaCaiMengXiangQingrpcresponse()],
    size: Mock.mock('@string(5,100)'),
    total: Mock.mock('@string(5,100)'),
  }
}
export function Comparableobject() {}
export function ContactAddReq() {
  return {
    whiteName: Mock.mock('@string(5,100)'),
    duty: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isDelete: Mock.mock('@integer(3,1000)'),
    isPrincipal: Mock.mock('@integer(3,1000)'),
    name: Mock.mock('@string(5,100)'),
    post: Mock.mock('@string(5,100)'),
    remark: Mock.mock('@string(5,100)'),
    sort: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@integer(3,1000)'),
    value: Mock.mock('@string(5,100)'),
  }
}
export function ContactDetailResp() {
  return {
    whiteName: Mock.mock('@string(5,100)'),
    duty: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isPrincipal: Mock.mock('@integer(3,1000)'),
    name: Mock.mock('@string(5,100)'),
    post: Mock.mock('@string(5,100)'),
    remark: Mock.mock('@string(5,100)'),
    sort: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@integer(3,1000)'),
    value: Mock.mock('@string(5,100)'),
  }
}
export function CountCustomerHappyNumReq() {
  return {
    id: Mock.mock('@guid'),
  }
}
export function CountCustomerHappyNumResp() {
  return {
    totalNum: Mock.mock('@integer(3,1000)'),
    'typeNum|1-20': [CountCustomerHappyNumTypeResp()],
  }
}
export function CountCustomerHappyNumTypeResp() {
  return {
    signNum: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@string(5,100)'),
    unsignedNum: Mock.mock('@integer(3,1000)'),
  }
}
export function CustomerDoorAddReq() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyPrincipal: Mock.mock('@string(5,100)'),
    categoryName: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    'contactList|1-20': [ContactAddReq()],
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    corporateName: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    customerSource: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    whitePrincipal: Mock.mock('@string(5,100)'),
    doorAttr: Mock.mock('@string(5,100)'),
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    doorStatus: Mock.mock('@string(5,100)'),
    establishmentTime: Mock.mock('@datetime'),
    'fileUrlList|1-20': [Mock.mock('@url')],
    higherDoor: Mock.mock('@string(5,100)'),
    'invoiceList|1-20': [CustomerInvoiceAddReq()],
    isImportant: Mock.mock('@integer(3,1000)'),
    'labels|1-20': [Mock.mock('@string(5,100)')],
    location: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    regCatCnt: Mock.mock('@string(5,100)'),
    orangeeredCapital: Mock.mock('@integer(3,1000)'),
    skAchievementCnt: Mock.mock('@string(5,100)'),
    skQualificationCnt: Mock.mock('@string(5,100)'),
    step: Mock.mock('@integer(3,1000)'),
  }
}
export function CustomerDoorAddResp() {
  return {
    id: Mock.mock('@guid'),
    'list|1-20': [CustomerDoorInfoResp()],
    repeatType: Mock.mock('@string(5,100)'),
  }
}
export function CustomerDoorDetailResp() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyPrincipal: Mock.mock('@string(5,100)'),
    categoryName: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    'contactList|1-20': [ContactDetailResp()],
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    corporateName: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerCode: Mock.mock('@string(5,100)'),
    customerSource: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    whitePrincipal: Mock.mock('@string(5,100)'),
    doorAttr: Mock.mock('@string(5,100)'),
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    doorStatus: Mock.mock('@string(5,100)'),
    establishmentTime: Mock.mock('@datetime'),
    'fileUrlList|1-20': [Mock.mock('@url')],
    higherDoor: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    'invoiceList|1-20': [CustomerInvoiceDetailResp()],
    isImportant: Mock.mock('@integer(3,1000)'),
    'labels|1-20': [CustomerLabelResp()],
    licenseId: Mock.mock('@guid'),
    location: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    regCatCnt: Mock.mock('@string(5,100)'),
    orangeeredCapital: Mock.mock('@integer(3,1000)'),
    skAchievementCnt: Mock.mock('@string(5,100)'),
    skQualificationCnt: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function CustomerDoorFromDataReq() {
  return {
    companyName: Mock.mock('@string(5,100)'),
    companyNum: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function CustomerDoorFromDataResp() {
  return {
    companyEstablishDate: Mock.mock('@datetime'),
    companyIprovinceName: Mock.mock('@province'),
    companyKey: Mock.mock('@integer(3,1000)'),
    companyLegalRepresentative: Mock.mock('@string(5,100)'),
    companyLegalRepresentativePhone: Mock.mock('@string(5,100)'),
    companyName: Mock.mock('@string(5,100)'),
    companyNum: Mock.mock('@string(5,100)'),
    companyGladCnt: Mock.mock('@string(5,100)'),
    companyPunishmentCnt: Mock.mock('@string(5,100)'),
    companyQualificationCnt: Mock.mock('@string(5,100)'),
    companyOrangeGreen: Mock.mock('@string(5,100)'),
    companyOrangeAmt: Mock.mock('@string(5,100)'),
    companyOrangeState: Mock.mock('@string(5,100)'),
    companyOrangerarCnt: Mock.mock('@string(5,100)'),
    companyRewardsCnt: Mock.mock('@string(5,100)'),
    companyScore: Mock.mock('@integer(3,1000)'),
    tycCompanyId: Mock.mock('@guid'),
  }
}
export function CustomerDoorInfoResp() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyPrincipal: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    customerCode: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    whitePrincipal: Mock.mock('@string(5,100)'),
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    doorStatus: Mock.mock('@string(5,100)'),
    establishmentTime: Mock.mock('@datetime'),
    'fileUrlList|1-20': [Mock.mock('@url')],
    id: Mock.mock('@guid'),
    isCooperation: Mock.mock('@integer(3,1000)'),
    isImportant: Mock.mock('@integer(3,1000)'),
    label: Mock.mock('@string(5,100)'),
    location: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    regCatCnt: Mock.mock('@string(5,100)'),
    orangeeredCapital: Mock.mock('@integer(3,1000)'),
    score: Mock.mock('@integer(3,1000)'),
    signId: Mock.mock('@guid'),
    signState: Mock.mock('@string(5,100)'),
    signTime: Mock.mock('@datetime'),
    skAchievementCnt: Mock.mock('@string(5,100)'),
    skQualificationCnt: Mock.mock('@string(5,100)'),
  }
}
export function CustomerDoorNumReq() {
  return {
    createEndTime: Mock.mock('@datetime'),
    createStartTime: Mock.mock('@datetime'),
    own: Mock.mock('@boolean'),
  }
}
export function CustomerDoorNumResp() {
  return {
    attrCountryNum: Mock.mock('@integer(3,1000)'),
    attrGovernmentNUm: Mock.mock('@integer(3,1000)'),
    attrPrivateNum: Mock.mock('@integer(3,1000)'),
    attrPublicNum: Mock.mock('@integer(3,1000)'),
    otherNum: Mock.mock('@integer(3,1000)'),
    todayNum: Mock.mock('@integer(3,1000)'),
  }
}
export function CustomerDoorUpReq() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyPrincipal: Mock.mock('@string(5,100)'),
    categoryName: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    'contactList|1-20': [ContactAddReq()],
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    corporateName: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    customerSource: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    whitePrincipal: Mock.mock('@string(5,100)'),
    doorAttr: Mock.mock('@string(5,100)'),
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    doorStatus: Mock.mock('@string(5,100)'),
    establishmentTime: Mock.mock('@datetime'),
    'fileUrlList|1-20': [Mock.mock('@url')],
    higherDoor: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    'invoiceList|1-20': [CustomerInvoiceAddReq()],
    isImportant: Mock.mock('@integer(3,1000)'),
    'labels|1-20': [CustomerLabelReq()],
    location: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    regCatCnt: Mock.mock('@string(5,100)'),
    orangeeredCapital: Mock.mock('@integer(3,1000)'),
    skAchievementCnt: Mock.mock('@string(5,100)'),
    skQualificationCnt: Mock.mock('@string(5,100)'),
    step: Mock.mock('@integer(3,1000)'),
  }
}
export function CustomerFollowReq() {
  return {
    addr: Mock.mock('@string(5,100)'),
    contactCatId: Mock.mock('@guid'),
    contactCatName: Mock.mock('@string(5,100)'),
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    date: Mock.mock('@datetime'),
    'fileIdList|1-20': [Mock.mock('@string(5,100)')],
    followType: Mock.mock('@string(5,100)'),
  }
}
export function CustomerInvoiceAddReq() {
  return {
    blueAddr: Mock.mock('@string(5,100)'),
    blueBank: Mock.mock('@string(5,100)'),
    bankNo: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isDefault: Mock.mock('@integer(3,1000)'),
    isDelete: Mock.mock('@integer(3,1000)'),
    phone: Mock.mock('@string(5,100)'),
    sort: Mock.mock('@integer(3,1000)'),
    tin: Mock.mock('@string(5,100)'),
  }
}
export function CustomerInvoiceDetailResp() {
  return {
    blueAddr: Mock.mock('@string(5,100)'),
    blueBank: Mock.mock('@string(5,100)'),
    bankNo: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isDefault: Mock.mock('@integer(3,1000)'),
    isDelete: Mock.mock('@integer(3,1000)'),
    phone: Mock.mock('@string(5,100)'),
    sort: Mock.mock('@integer(3,1000)'),
    tin: Mock.mock('@string(5,100)'),
  }
}
export function CustomerLabelReq() {
  return {
    id: Mock.mock('@guid'),
    labelName: Mock.mock('@string(5,100)'),
  }
}
export function CustomerLabelResp() {
  return {
    id: Mock.mock('@guid'),
    labelName: Mock.mock('@string(5,100)'),
  }
}
export function CustomerCatAddReq() {
  return {
    achievementCnt: Mock.mock('@string(5,100)'),
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyPrincipal: Mock.mock('@string(5,100)'),
    'certificateList|1-20': [CustomerCatCertificateReq()],
    city: Mock.mock('@city'),
    'contactList|1-20': [ContactAddReq()],
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    customerSource: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    whitePrincipal: Mock.mock('@string(5,100)'),
    education: Mock.mock('@string(5,100)'),
    doorAddr: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    'fileUrlList|1-20': [Mock.mock('@url')],
    gender: Mock.mock('@string(5,100)'),
    'invoiceList|1-20': [CustomerInvoiceAddReq()],
    isImportant: Mock.mock('@integer(3,1000)'),
    'labels|1-20': [Mock.mock('@string(5,100)')],
    location: Mock.mock('@string(5,100)'),
    catName: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    post: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    step: Mock.mock('@integer(3,1000)'),
    'titleList|1-20': [CustomerCatTitleReq()],
  }
}
export function CustomerCatAddResp() {
  return {
    id: Mock.mock('@guid'),
    'list|1-20': [CustomerCatInfoResp()],
  }
}
export function CustomerCatCertificateInfoResp() {
  return {
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    major: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
    pictureUrl: Mock.mock('@url'),
    orangeered: Mock.mock('@string(5,100)'),
  }
}
export function CustomerCatCertificateReq() {
  return {
    customerId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    major: Mock.mock('@string(5,100)'),
    name: Mock.mock('@string(5,100)'),
  }
}
export function CustomerCatDetailResp() {
  return {
    achievementCnt: Mock.mock('@string(5,100)'),
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyPrincipal: Mock.mock('@string(5,100)'),
    'certificateList|1-20': [CustomerCatCertificateInfoResp()],
    city: Mock.mock('@city'),
    'contactList|1-20': [ContactDetailResp()],
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerCode: Mock.mock('@string(5,100)'),
    customerSource: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    whitePrincipal: Mock.mock('@string(5,100)'),
    education: Mock.mock('@string(5,100)'),
    doorAddr: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    'fileUrlList|1-20': [Mock.mock('@url')],
    gender: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    'invoiceList|1-20': [CustomerInvoiceDetailResp()],
    isImportant: Mock.mock('@integer(3,1000)'),
    'labels|1-20': [CustomerLabelResp()],
    location: Mock.mock('@string(5,100)'),
    catName: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    post: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    talentId: Mock.mock('@guid'),
    'titleList|1-20': [CustomerCatTitleInfoResp()],
  }
}
export function CustomerCatInfoResp() {
  return {
    achievementCnt: Mock.mock('@string(5,100)'),
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    badBehaviorCnt: Mock.mock('@string(5,100)'),
    blacklistRecordCnt: Mock.mock('@string(5,100)'),
    happyPrincipal: Mock.mock('@string(5,100)'),
    certificate: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    customerCode: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    whitePrincipal: Mock.mock('@string(5,100)'),
    education: Mock.mock('@string(5,100)'),
    gender: Mock.mock('@string(5,100)'),
    goodBehaviorCnt: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isCooperation: Mock.mock('@integer(3,1000)'),
    isImportant: Mock.mock('@integer(3,1000)'),
    label: Mock.mock('@string(5,100)'),
    catName: Mock.mock('@string(5,100)'),
    catnelRisk: Mock.mock('@integer(3,1000)'),
    phone: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    signId: Mock.mock('@guid'),
    signState: Mock.mock('@string(5,100)'),
    signTime: Mock.mock('@datetime'),
    skCertificateCnt: Mock.mock('@string(5,100)'),
    title: Mock.mock('@ctitle(5,20)'),
  }
}
export function CustomerCatTitleInfoResp() {
  return {
    customerId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    level: Mock.mock('@string(5,100)'),
    major: Mock.mock('@string(5,100)'),
    pictureUrl: Mock.mock('@url'),
  }
}
export function CustomerCatTitleReq() {
  return {
    customerId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    level: Mock.mock('@string(5,100)'),
    major: Mock.mock('@string(5,100)'),
  }
}
export function CustomerCatUpReq() {
  return {
    achievementCnt: Mock.mock('@string(5,100)'),
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyPrincipal: Mock.mock('@string(5,100)'),
    'certificateList|1-20': [CustomerCatCertificateReq()],
    city: Mock.mock('@city'),
    'contactList|1-20': [ContactAddReq()],
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    customerSource: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    whitePrincipal: Mock.mock('@string(5,100)'),
    education: Mock.mock('@string(5,100)'),
    doorAddr: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    'fileUrlList|1-20': [Mock.mock('@url')],
    gender: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    'invoiceList|1-20': [CustomerInvoiceAddReq()],
    isImportant: Mock.mock('@integer(3,1000)'),
    'labels|1-20': [CustomerLabelReq()],
    location: Mock.mock('@string(5,100)'),
    catName: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    post: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    'titleList|1-20': [CustomerCatTitleReq()],
  }
}
export function DayCityReq() {
  return {
    endTime: Mock.mock('@datetime'),
    startTime: Mock.mock('@datetime'),
  }
}
export function DayCityResp() {
  return {
    'cityList|1-20': [Mock.mock('@city')],
    dayTime: Mock.mock('@datetime'),
  }
}
export function DelReq() {
  return {
    id: Mock.mock('@guid'),
  }
}
export function DeleteReq() {
  return {
    id: Mock.mock('@guid'),
  }
}
export function WhiteListReq() {
  return {
    parentId: Mock.mock('@guid'),
    scaleType: Mock.mock('@string(5,100)'),
  }
}
export function WhiteNoteResp() {
  return {
    desktopCount: Mock.mock('@integer(3,1000)'),
    info: Mock.mock('WhiteResp()'),
  }
}
export function WhiteReq() {
  return {
    whiteName: Mock.mock('@string(5,100)'),
    parentId: Mock.mock('@guid'),
  }
}
export function WhiteResp() {
  return {
    ancestors: Mock.mock('@string(5,100)'),
    authStatus: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    createName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    whiteCode: Mock.mock('@string(5,100)'),
    whiteName: Mock.mock('@string(5,100)'),
    email: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    isShow: Mock.mock('@boolean'),
    leaderDesktopId: Mock.mock('@guid'),
    leaderDesktopName: Mock.mock('@string(5,100)'),
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
export function Document() {
  return {
    content: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    location: Mock.mock('@string(5,100)'),
    title: Mock.mock('@ctitle(5,20)'),
  }
}
export function DesktopListResp() {
  return {
    id: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
  }
}
export function DesktopResp() {
  return {
    id: Mock.mock('@guid'),
    mobile: Mock.mock('@string(5,100)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function FailData() {
  return {
    excelNum: Mock.mock('@integer(3,1000)'),
    firstName: Mock.mock('@string(5,100)'),
    reason: Mock.mock('@string(5,100)'),
  }
}
export function FollowAgainReq() {
  return {
    happyId: Mock.mock('@guid'),
    happyType: Mock.mock('@string(5,100)'),
  }
}
export function FollowListReq() {
  return {
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    taskId: Mock.mock('@guid'),
  }
}
export function ImportExcelByUrlReq() {
  return {
    fileName: Mock.mock('@string(5,100)'),
    fileUrl: Mock.mock('@url'),
    taskType: Mock.mock('@integer(3,1000)'),
  }
}
export function ImportListReq() {
  return {
    endTime: Mock.mock('@datetime'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    startTime: Mock.mock('@datetime'),
    taskType: Mock.mock('@integer(3,1000)'),
  }
}
export function InnerRpcCustomerDoorAddReq() {
  return {
    req: Mock.mock('CustomerDoorAddReq()'),
  }
}
export function InnerRpcCustomerDoorFromDataReq() {
  return {
    req: Mock.mock('CustomerDoorFromDataReq()'),
  }
}
export function InnerRpcCustomerDoorNumReq() {
  return {
    req: Mock.mock('CustomerDoorNumReq()'),
  }
}
export function InnerRpcCustomerDoorUpReq() {
  return {
    req: Mock.mock('CustomerDoorUpReq()'),
  }
}
export function InnerRpcCustomerCatAddReq() {
  return {
    req: Mock.mock('CustomerCatAddReq()'),
  }
}
export function InnerRpcCustomerCatUpReq() {
  return {
    req: Mock.mock('CustomerCatUpReq()'),
  }
}
export function InnerRpcImportExcelByUrlReq() {
  return {
    req: Mock.mock('ImportExcelByUrlReq()'),
  }
}
export function InnerRpcImportListReq() {
  return {
    req: Mock.mock('ImportListReq()'),
  }
}
export function InnerRpcPageContactReq() {
  return {
    req: Mock.mock('PageContactReq()'),
  }
}
export function InnerRpcPageCustomerDoorReq() {
  return {
    req: Mock.mock('PageCustomerDoorReq()'),
  }
}
export function InnerRpcPageCustomerCatReq() {
  return {
    req: Mock.mock('PageCustomerCatReq()'),
  }
}
export function InnerRpcSelectCustomerDoorReq() {
  return {
    req: Mock.mock('SelectCustomerDoorReq()'),
  }
}
export function InnerRpclong() {
  return {
    req: Mock.mock('@string(5,100)'),
  }
}
export function InnerRpcGuanShuiXiangMuFaCaiMengrpcChongDong() {
  return {
    req: Mock.mock('GuanShuiXiangMuFaCaiMengrpcChongDong()'),
  }
}
export function ListDesktopReq() {
  return {
    whiteId: Mock.mock('@guid'),
    keyword: Mock.mock('@string(5,100)'),
  }
}
export function ListLocationReq() {
  return {
    date: Mock.mock('@datetime'),
    followerId: Mock.mock('@guid'),
  }
}
export function LocationAddReq() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    location: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
  }
}
export function LocationDateInfoResp() {
  return {
    'addrList|1-20': [Mock.mock('@string(5,100)')],
    addrNum: Mock.mock('@integer(3,1000)'),
    addrStr: Mock.mock('@string(5,100)'),
    happyNum: Mock.mock('@integer(3,1000)'),
    desktopId: Mock.mock('@guid'),
    desktopName: Mock.mock('@string(5,100)'),
    monthDay: Mock.mock('@string(5,100)'),
    provinceCity: Mock.mock('@province'),
    'provinceCityList|1-20': [Mock.mock('@province')],
  }
}
export function LocationInfoResp() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    desktopId: Mock.mock('@guid'),
    desktopName: Mock.mock('@string(5,100)'),
    fileId: Mock.mock('@guid'),
    location: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
  }
}
export function PageHappyMixReq() {
  return {
    coordinate: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    orderColumn: Mock.mock('@string(5,100)'),
    orderType: Mock.mock('@integer(3,1000)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function PageHappyResp() {
  return {
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    dataLocation: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    hasCustomer: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    isMyself: Mock.mock('@integer(3,1000)'),
    isRead: Mock.mock('@integer(3,1000)'),
    lastFetchTime: Mock.mock('@datetime'),
    lastFollowTime: Mock.mock('@datetime'),
    planId: Mock.mock('@guid'),
    planScore: Mock.mock('@string(5,100)'),
    recommendedReason: Mock.mock('@string(5,100)'),
    signId: Mock.mock('@guid'),
    source: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    thirdId: Mock.mock('@guid'),
  }
}
export function PageContactReq() {
  return {
    doorId: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function PageCustomerDoorReq() {
  return {
    addr: Mock.mock('@string(5,100)'),
    createEndTime: Mock.mock('@datetime'),
    createStartTime: Mock.mock('@datetime'),
    customerCode: Mock.mock('@string(5,100)'),
    door: Mock.mock('@string(5,100)'),
    doorAttr: Mock.mock('@string(5,100)'),
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    doorStatus: Mock.mock('@string(5,100)'),
    establishmentTimeEnd: Mock.mock('@datetime'),
    establishmentTimeStart: Mock.mock('@datetime'),
    'labelList|1-20': [Mock.mock('@string(5,100)')],
    orderColumn: Mock.mock('@string(5,100)'),
    orderType: Mock.mock('@integer(3,1000)'),
    own: Mock.mock('@boolean'),
    page: Mock.mock('@integer(3,1000)'),
    province: Mock.mock('@province'),
    regCatCntMax: Mock.mock('@string(5,100)'),
    regCatCntMin: Mock.mock('@string(5,100)'),
    orangeeredCapitalMax: Mock.mock('@integer(3,1000)'),
    orangeeredCapitalMin: Mock.mock('@integer(3,1000)'),
    scoreMax: Mock.mock('@integer(3,1000)'),
    scoreMin: Mock.mock('@integer(3,1000)'),
    sign: Mock.mock('@string(5,100)'),
    signDateMax: Mock.mock('@datetime'),
    signDateMin: Mock.mock('@datetime'),
    signState: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
    skAchievementCntMax: Mock.mock('@string(5,100)'),
    skAchievementCntMin: Mock.mock('@string(5,100)'),
    skQualificationCntMax: Mock.mock('@string(5,100)'),
    skQualificationCntMin: Mock.mock('@string(5,100)'),
  }
}
export function PageCustomerCatReq() {
  return {
    achievementCntMax: Mock.mock('@string(5,100)'),
    achievementCntMin: Mock.mock('@string(5,100)'),
    addr: Mock.mock('@string(5,100)'),
    certificateMajor: Mock.mock('@string(5,100)'),
    certificateName: Mock.mock('@string(5,100)'),
    'certificateNameList|1-20': [Mock.mock('@string(5,100)')],
    customerCode: Mock.mock('@string(5,100)'),
    'labelList|1-20': [Mock.mock('@string(5,100)')],
    level: Mock.mock('@string(5,100)'),
    'levelList|1-20': [Mock.mock('@string(5,100)')],
    major: Mock.mock('@string(5,100)'),
    'majorList|1-20': [Mock.mock('@string(5,100)')],
    orderColumn: Mock.mock('@string(5,100)'),
    orderType: Mock.mock('@integer(3,1000)'),
    own: Mock.mock('@boolean'),
    page: Mock.mock('@integer(3,1000)'),
    cat: Mock.mock('@string(5,100)'),
    catName: Mock.mock('@string(5,100)'),
    catnelRisk: Mock.mock('@boolean'),
    phone: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    sign: Mock.mock('@string(5,100)'),
    signDateMax: Mock.mock('@datetime'),
    signDateMin: Mock.mock('@datetime'),
    signState: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
    skCertificateCntMax: Mock.mock('@string(5,100)'),
    skCertificateCntMin: Mock.mock('@string(5,100)'),
  }
}
export function PageDoorHappyPoolResp() {
  return {
    addr: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: Mock.mock('@string(5,100)'),
    corpCertArray: Mock.mock('@string(5,100)'),
    corpCertCnt: Mock.mock('@integer(3,1000)'),
    corporateName: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    dataLocation: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    doorStatus: Mock.mock('@string(5,100)'),
    doorType: Mock.mock('@string(5,100)'),
    establishmentTime: Mock.mock('@datetime'),
    filialeCompanyCnt: Mock.mock('@integer(3,1000)'),
    filialeCompanyNameArray: Mock.mock('@string(5,100)'),
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    hasCustomer: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    industryType: Mock.mock('@string(5,100)'),
    isMyself: Mock.mock('@integer(3,1000)'),
    isRead: Mock.mock('@integer(3,1000)'),
    lastFetchTime: Mock.mock('@datetime'),
    lastFollowTime: Mock.mock('@datetime'),
    phone: Mock.mock('@string(5,100)'),
    planId: Mock.mock('@guid'),
    planScore: Mock.mock('@string(5,100)'),
    qualicaficationArray: Mock.mock('@string(5,100)'),
    qualicaficationCnt: Mock.mock('@integer(3,1000)'),
    recommendedReason: Mock.mock('@string(5,100)'),
    regCatCnt: Mock.mock('@string(5,100)'),
    orangeeredCapital: Mock.mock('@string(5,100)'),
    score: Mock.mock('@integer(3,1000)'),
    signId: Mock.mock('@guid'),
    skAchievementCnt: Mock.mock('@string(5,100)'),
    skQualificationCnt: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    thirdId: Mock.mock('@guid'),
  }
}
export function PageLocationByTaskReq() {
  return {
    desktopName: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    taskId: Mock.mock('@guid'),
  }
}
export function PageLocationReq() {
  return {
    area: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    desktopName: Mock.mock('@string(5,100)'),
    endTime: Mock.mock('@datetime'),
    'followerIdList|1-20': [Mock.mock('@string(5,100)')],
    page: Mock.mock('@integer(3,1000)'),
    province: Mock.mock('@province'),
    size: Mock.mock('@integer(3,1000)'),
    startTime: Mock.mock('@datetime'),
  }
}
export function PageCatHappyPoolResp() {
  return {
    achievementCnt: Mock.mock('@string(5,100)'),
    addr: Mock.mock('@string(5,100)'),
    age: Mock.mock('@integer(3,1000)'),
    area: Mock.mock('@string(5,100)'),
    badBehaviorCnt: Mock.mock('@string(5,100)'),
    blacklistRecordCnt: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    certificateName: Mock.mock('@string(5,100)'),
    certificateNum: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerMobile: Mock.mock('@string(5,100)'),
    customerName: Mock.mock('@string(5,100)'),
    customerType: Mock.mock('@string(5,100)'),
    dataLocation: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    education: Mock.mock('@string(5,100)'),
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    gender: Mock.mock('@string(5,100)'),
    goodBehaviorCnt: Mock.mock('@string(5,100)'),
    hasCustomer: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    isMyself: Mock.mock('@integer(3,1000)'),
    isRead: Mock.mock('@integer(3,1000)'),
    isRetire: Mock.mock('@integer(3,1000)'),
    lastFetchTime: Mock.mock('@datetime'),
    lastFollowTime: Mock.mock('@datetime'),
    licenseId: Mock.mock('@guid'),
    catName: Mock.mock('@string(5,100)'),
    catnelRisk: Mock.mock('@integer(3,1000)'),
    phone: Mock.mock('@string(5,100)'),
    planId: Mock.mock('@guid'),
    planScore: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    recommendedReason: Mock.mock('@string(5,100)'),
    signId: Mock.mock('@guid'),
    skCertificateCnt: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    thirdId: Mock.mock('@guid'),
    title: Mock.mock('@ctitle(5,20)'),
    workYear: Mock.mock('@integer(3,1000)'),
  }
}
export function PagePlanResp() {
  return {
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    isMyself: Mock.mock('@integer(3,1000)'),
    isRead: Mock.mock('@integer(3,1000)'),
    lastFetchTime: Mock.mock('@datetime'),
    lastFollowTime: Mock.mock('@datetime'),
    planId: Mock.mock('@guid'),
    planScore: Mock.mock('@string(5,100)'),
    planSource: Mock.mock('@string(5,100)'),
    planStatus: Mock.mock('@string(5,100)'),
    poolType: Mock.mock('@string(5,100)'),
    recommendedReason: Mock.mock('@string(5,100)'),
    relStatus: Mock.mock('@string(5,100)'),
    relType: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
  }
}
export function PageGladHappyPoolResp() {
  return {
    agencies: Mock.mock('@string(5,100)'),
    agenciesAddr: Mock.mock('@string(5,100)'),
    agenciesAddrCoordinate: Mock.mock('@string(5,100)'),
    agenciesAddrLat: Mock.mock('@string(5,100)'),
    agenciesAddrLng: Mock.mock('@string(5,100)'),
    agenciesArea: Mock.mock('@string(5,100)'),
    agenciesCity: Mock.mock('@city'),
    agenciesCountry: Mock.mock('@string(5,100)'),
    agenciesPhone: Mock.mock('@string(5,100)'),
    agenciesProvince: Mock.mock('@province'),
    biddingCorpAddr: Mock.mock('@string(5,100)'),
    biddingCorpAddrLat: Mock.mock('@string(5,100)'),
    biddingCorpAddrLng: Mock.mock('@string(5,100)'),
    biddingCorpArea: Mock.mock('@string(5,100)'),
    biddingCorpCity: Mock.mock('@city'),
    biddingCorpName: Mock.mock('@string(5,100)'),
    biddingCorpPhone: Mock.mock('@string(5,100)'),
    biddingCorpProvince: Mock.mock('@province'),
    biddingEndTime: Mock.mock('@datetime'),
    biddingOpeningTime: Mock.mock('@datetime'),
    biddingStartTime: Mock.mock('@datetime'),
    biddingType: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    dataLocation: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    fileDownloadEndTime: Mock.mock('@datetime'),
    fileDownloadStartTime: Mock.mock('@datetime'),
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    hasCustomer: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    industryType: Mock.mock('@string(5,100)'),
    isMyself: Mock.mock('@integer(3,1000)'),
    isRead: Mock.mock('@integer(3,1000)'),
    lastFetchTime: Mock.mock('@datetime'),
    lastFollowTime: Mock.mock('@datetime'),
    phone: Mock.mock('@string(5,100)'),
    planId: Mock.mock('@guid'),
    planScore: Mock.mock('@string(5,100)'),
    gladBudget: Mock.mock('@string(5,100)'),
    gladName: Mock.mock('@string(5,100)'),
    gladType: Mock.mock('@string(5,100)'),
    publishTime: Mock.mock('@datetime'),
    quoteBeginTime: Mock.mock('@datetime'),
    quoteEndTime: Mock.mock('@datetime'),
    recommendedReason: Mock.mock('@string(5,100)'),
    signId: Mock.mock('@guid'),
    signUpBeginTime: Mock.mock('@datetime'),
    signUpEndTime: Mock.mock('@datetime'),
    source: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    thirdId: Mock.mock('@guid'),
    valid: Mock.mock('@guid'),
  }
}
export function GladSignInfoResp() {
  return {
    applyKeyBorardId: Mock.mock('@guid'),
    applyKeyBorardName: Mock.mock('@string(5,100)'),
    belongCompany: Mock.mock('@string(5,100)'),
    belongCompanyId: Mock.mock('@guid'),
    bidEndDate: Mock.mock('@datetime'),
    bidOpenDate: Mock.mock('@datetime'),
    bidStartDate: Mock.mock('@datetime'),
    biddingAgencyId: Mock.mock('@guid'),
    biddingAgencyName: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    cainfoId: Mock.mock('@guid'),
    cainfoName: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    county: Mock.mock('@county'),
    customerId: Mock.mock('@guid'),
    customerName: Mock.mock('@string(5,100)'),
    isBid: Mock.mock('@guid'),
    isPreApproval: Mock.mock('@boolean'),
    paramsOneId: Mock.mock('@guid'),
    paramsOneName: Mock.mock('@string(5,100)'),
    gladName: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    street: Mock.mock('@string(5,100)'),
    templateId: Mock.mock('@guid'),
    templateName: Mock.mock('@string(5,100)'),
    township: Mock.mock('@string(5,100)'),
  }
}
export function PunchPageReq() {
  return {
    happyId: Mock.mock('@guid'),
    happyType: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function PunchPageResp() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyId: Mock.mock('@guid'),
    happyType: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    createName: Mock.mock('@string(5,100)'),
    'imageUrlList|1-20': [Mock.mock('@url')],
    location: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    punchTime: Mock.mock('@datetime'),
  }
}
export function PunchReq() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    happyId: Mock.mock('@guid'),
    happyType: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    date: Mock.mock('@datetime'),
    'fileIdList|1-20': [Mock.mock('@string(5,100)')],
    followResult: Mock.mock('@string(5,100)'),
    location: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
  }
}
export function RankResp() {
  return {
    'list|1-20': [PaiMingShuJuRankDataResp()],
    rank: Mock.mock('WoCongMingPaiMingMyRankResp()'),
  }
}
export function ReceiveHappyReq() {
  return {
    'happyList|1-20': [Mock.mock('')],
    happyReceiveSource: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
  }
}
export function Recommended2PlanReq() {
  return {
    date: Mock.mock('@datetime'),
  }
}
export function SelectCustomerDoorReq() {
  return {
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
  }
}
export function SelectCustomerDoorGratefulReq() {
  return {
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    'gratefulIdList|1-20': [Mock.mock('@string(5,100)')],
  }
}
export function TaskAddrResp() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    date: Mock.mock('@datetime'),
    location: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
  }
}
export function TaskChangeStatusReq() {
  return {
    id: Mock.mock('@guid'),
    taskStatus: Mock.mock('@string(5,100)'),
  }
}
export function TaskCreateAddrReq() {
  return {
    addr: Mock.mock('@string(5,100)'),
    area: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    country: Mock.mock('@string(5,100)'),
    location: Mock.mock('@string(5,100)'),
    province: Mock.mock('@province'),
    sort: Mock.mock('@integer(3,1000)'),
  }
}
export function TaskCreateWhiteReq() {
  return {
    whiteId: Mock.mock('@guid'),
    whiteName: Mock.mock('@string(5,100)'),
  }
}
export function TaskCreateCatReq() {
  return {
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
  }
}
export function TaskCreateReq() {
  return {
    'addrList|1-20': [TaskCreateAddrReq()],
    dayHappyNum: Mock.mock('@integer(3,1000)'),
    dayHappyOpen: Mock.mock('@boolean'),
    'whiteList|1-20': [TaskCreateWhiteReq()],
    endTime: Mock.mock('@datetime'),
    name: Mock.mock('@string(5,100)'),
    'catList|1-20': [TaskCreateCatReq()],
    startTime: Mock.mock('@datetime'),
    taskType: Mock.mock('@string(5,100)'),
  }
}
export function TaskWhiteResp() {
  return {
    whiteId: Mock.mock('@guid'),
    whiteName: Mock.mock('@string(5,100)'),
  }
}
export function TaskInfoResp() {
  return {
    'addrList|1-20': [TaskAddrResp()],
    allDays: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    created: Mock.mock('@string(5,100)'),
    dayHappyNum: Mock.mock('@integer(3,1000)'),
    dayHappyOpen: Mock.mock('@boolean'),
    days: Mock.mock('@string(5,100)'),
    'whiteList|1-20': [TaskWhiteResp()],
    endTime: Mock.mock('@datetime'),
    id: Mock.mock('@guid'),
    isMyCreated: Mock.mock('@boolean'),
    name: Mock.mock('@string(5,100)'),
    'catList|1-20': [TaskCatResp()],
    startTime: Mock.mock('@datetime'),
    taskStatus: Mock.mock('@string(5,100)'),
    taskType: Mock.mock('@string(5,100)'),
  }
}
export function TaskModifyReq() {
  return {
    'addrList|1-20': [TaskCreateAddrReq()],
    dayHappyNum: Mock.mock('@integer(3,1000)'),
    dayHappyOpen: Mock.mock('@boolean'),
    'whiteList|1-20': [TaskCreateWhiteReq()],
    endTime: Mock.mock('@datetime'),
    id: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
    'catList|1-20': [TaskCreateCatReq()],
    startTime: Mock.mock('@datetime'),
    taskType: Mock.mock('@string(5,100)'),
  }
}
export function TaskPageListReq() {
  return {
    createEndTime: Mock.mock('@datetime'),
    createStartTime: Mock.mock('@datetime'),
    endTime: Mock.mock('@datetime'),
    name: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    startTime: Mock.mock('@datetime'),
    taskStatus: Mock.mock('@string(5,100)'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function TaskPageListResp() {
  return {
    'addrList|1-20': [TaskAddrResp()],
    allDays: Mock.mock('@string(5,100)'),
    createId: Mock.mock('@guid'),
    created: Mock.mock('@string(5,100)'),
    dayHappyNum: Mock.mock('@integer(3,1000)'),
    dayHappyOpen: Mock.mock('@boolean'),
    days: Mock.mock('@string(5,100)'),
    'whiteList|1-20': [TaskWhiteResp()],
    endTime: Mock.mock('@datetime'),
    id: Mock.mock('@guid'),
    isMyCreated: Mock.mock('@boolean'),
    name: Mock.mock('@string(5,100)'),
    'catList|1-20': [TaskCatResp()],
    progress: Mock.mock('TaskProgressResp()'),
    startTime: Mock.mock('@datetime'),
    taskStatus: Mock.mock('@string(5,100)'),
    taskType: Mock.mock('@string(5,100)'),
  }
}
export function TaskCatResp() {
  return {
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
  }
}
export function TaskProgressDetailReq() {
  return {
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
  }
}
export function TaskProgressDetailResp() {
  return {
    dayHappyNum: Mock.mock('@integer(3,1000)'),
    dayHappyOpen: Mock.mock('@boolean'),
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    lastLocation: Mock.mock('@string(5,100)'),
    'locationDataList|1-20': [TaskAddrResp()],
    phone: Mock.mock('@string(5,100)'),
    progress: Mock.mock('TaskProgressResp()'),
    taskStatus: Mock.mock('@string(5,100)'),
  }
}
export function TaskProgressCatResp() {
  return {
    allDays: Mock.mock('@string(5,100)'),
    allTasks: Mock.mock('@string(5,100)'),
    dayHappyNum: Mock.mock('@integer(3,1000)'),
    dayHappyOpen: Mock.mock('@boolean'),
    days: Mock.mock('@string(5,100)'),
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    taskFollow: Mock.mock('@string(5,100)'),
    taskStatus: Mock.mock('@string(5,100)'),
    todayAllTask: Mock.mock('@string(5,100)'),
    todayFollow: Mock.mock('@string(5,100)'),
    yesterdayAllTask: Mock.mock('@string(5,100)'),
    yesterdayFollow: Mock.mock('@string(5,100)'),
  }
}
export function TaskProgressResp() {
  return {
    allDays: Mock.mock('@string(5,100)'),
    allTasks: Mock.mock('@string(5,100)'),
    days: Mock.mock('@string(5,100)'),
    taskFollow: Mock.mock('@string(5,100)'),
    todayAllTask: Mock.mock('@string(5,100)'),
    todayFollow: Mock.mock('@string(5,100)'),
    yesterdayAllTask: Mock.mock('@string(5,100)'),
    yesterdayFollow: Mock.mock('@string(5,100)'),
  }
}
export function TravelLoginReq() {
  return {
    entrance: Mock.mock('@integer(3,1000)'),
    plat: Mock.mock('@integer(3,1000)'),
  }
}
export function TravelLoginResp() {
  return {
    redirectUrl: Mock.mock('@url'),
  }
}
export function TreeNodeConfig() {
  return {
    childrenKey: Mock.mock('@string(5,100)'),
    deep: Mock.mock('@integer(3,1000)'),
    idKey: Mock.mock('@string(5,100)'),
    nameKey: Mock.mock('@string(5,100)'),
    parentIdKey: Mock.mock('@string(5,100)'),
    weightKey: Mock.mock('@string(5,100)'),
  }
}
export function VerifyRepeatHappyReq() {
  return {
    happyType: Mock.mock('@string(5,100)'),
    code: 200,
    name: Mock.mock('@string(5,100)'),
  }
}
export function VerifyRepeatCustomerReq() {
  return {
    doorCode: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
  }
}
export function VerifyRepeatCatCustomerReq() {
  return {
    id: Mock.mock('@guid'),
    catName: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
  }
}
export function ShangChuanWenJianFanHui() {
  return {
    fileUrl: Mock.mock('@url'),
    id: Mock.mock('@guid'),
  }
}
export function BuZaiGenJin() {
  return {
    happyId: Mock.mock('@guid'),
    happyType: Mock.mock('@string(5,100)'),
    flowType: Mock.mock('@string(5,100)'),
    noFollowReason: Mock.mock('@string(5,100)'),
  }
}
export function ZhiXieChangFaCaiMengXiangQingrpcresponse() {
  return {
    addr: Mock.mock('@string(5,100)'),
    categoryName: Mock.mock('@string(5,100)'),
    contactMobile: Mock.mock('@string(5,100)'),
    contactName: Mock.mock('@string(5,100)'),
    corporateName: Mock.mock('@string(5,100)'),
    doorCode: Mock.mock('@string(5,100)'),
    doorId: Mock.mock('@guid'),
    doorName: Mock.mock('@string(5,100)'),
    doorStatus: Mock.mock('@string(5,100)'),
    establishmentTime: Mock.mock('@datetime'),
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    regCatCnt: Mock.mock('@string(5,100)'),
    orangeeredCapital: Mock.mock('@string(5,100)'),
    score: Mock.mock('@integer(3,1000)'),
    skAchievementCnt: Mock.mock('@string(5,100)'),
    skQualificationCnt: Mock.mock('@string(5,100)'),
  }
}
export function GuanLianFaCaiMengRequest() {
  return {
    happyId: Mock.mock('@guid'),
    happyType: Mock.mock('@string(5,100)'),
    thirdId: Mock.mock('@guid'),
  }
}
export function GuanLianFaCaiMengResponse() {}
export function FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
  return {
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    dataLocation: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    hasCustomer: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    isMyself: Mock.mock('@integer(3,1000)'),
    isRead: Mock.mock('@integer(3,1000)'),
    lastFetchTime: Mock.mock('@datetime'),
    lastFollowTime: Mock.mock('@datetime'),
    catName: Mock.mock('@string(5,100)'),
    planId: Mock.mock('@guid'),
    planScore: Mock.mock('@string(5,100)'),
    recommendedReason: Mock.mock('@string(5,100)'),
    signId: Mock.mock('@guid'),
    source: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    thirdId: Mock.mock('@guid'),
  }
}
export function FenYeLvYouRenCaiFaCaiMengJianDanShuJu() {
  return {
    addr: Mock.mock('@string(5,100)'),
    'addrList|1-20': [DiZhi()],
    area: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    createEndTime: Mock.mock('@datetime'),
    createStartTime: Mock.mock('@datetime'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    followResult: Mock.mock('@string(5,100)'),
    followType: Mock.mock('@string(5,100)'),
    'followTypeList|1-20': [Mock.mock('@string(5,100)')],
    followerId: Mock.mock('@guid'),
    isRead: Mock.mock('@integer(3,1000)'),
    name: Mock.mock('@string(5,100)'),
    orderColumn: Mock.mock('@string(5,100)'),
    orderType: Mock.mock('@integer(3,1000)'),
    page: Mock.mock('@integer(3,1000)'),
    province: Mock.mock('@province'),
    receiveType: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
    source: Mock.mock('@string(5,100)'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function FenYeLvYouRenCaiFaCaiMengGongHai() {
  return {
    achievementCntMax: Mock.mock('@string(5,100)'),
    achievementCntMin: Mock.mock('@string(5,100)'),
    addr: Mock.mock('@string(5,100)'),
    'addrList|1-20': [DiZhi()],
    area: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    'certificateList|1-20': [Mock.mock('@string(5,100)')],
    certificateMajor: Mock.mock('@string(5,100)'),
    certificateName: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    createEndTime: Mock.mock('@datetime'),
    createStartTime: Mock.mock('@datetime'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    followResult: Mock.mock('@string(5,100)'),
    followType: Mock.mock('@string(5,100)'),
    'followTypeList|1-20': [Mock.mock('@string(5,100)')],
    followerId: Mock.mock('@guid'),
    isRead: Mock.mock('@integer(3,1000)'),
    level: Mock.mock('@string(5,100)'),
    'levelList|1-20': [Mock.mock('@string(5,100)')],
    major: Mock.mock('@string(5,100)'),
    'majorList|1-20': [Mock.mock('@string(5,100)')],
    name: Mock.mock('@string(5,100)'),
    orderColumn: Mock.mock('@string(5,100)'),
    orderType: Mock.mock('@integer(3,1000)'),
    page: Mock.mock('@integer(3,1000)'),
    province: Mock.mock('@province'),
    receiveType: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
    skCertificateCntMax: Mock.mock('@string(5,100)'),
    skCertificateCntMin: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
    taskId: Mock.mock('@guid'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function FenYeLvYouRenCaiFaCaiMengTuiJian() {
  return {
    achievementCntMax: Mock.mock('@string(5,100)'),
    achievementCntMin: Mock.mock('@string(5,100)'),
    addr: Mock.mock('@string(5,100)'),
    'addrList|1-20': [DiZhi()],
    area: Mock.mock('@string(5,100)'),
    certificateMajor: Mock.mock('@string(5,100)'),
    certificateName: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    createEndTime: Mock.mock('@datetime'),
    createStartTime: Mock.mock('@datetime'),
    distance: Mock.mock('@string(5,100)'),
    followResult: Mock.mock('@string(5,100)'),
    followType: Mock.mock('@string(5,100)'),
    'followTypeList|1-20': [Mock.mock('@string(5,100)')],
    level: Mock.mock('@string(5,100)'),
    'levelList|1-20': [Mock.mock('@string(5,100)')],
    major: Mock.mock('@string(5,100)'),
    'majorList|1-20': [Mock.mock('@string(5,100)')],
    name: Mock.mock('@string(5,100)'),
    orderColumn: Mock.mock('@string(5,100)'),
    orderType: Mock.mock('@integer(3,1000)'),
    page: Mock.mock('@integer(3,1000)'),
    catnelRisk: Mock.mock('@boolean'),
    province: Mock.mock('@province'),
    size: Mock.mock('@integer(3,1000)'),
    skCertificateCntMax: Mock.mock('@string(5,100)'),
    skCertificateCntMin: Mock.mock('@string(5,100)'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function FenYeLvYouRenWu() {
  return {
    cnt: Mock.mock('@string(5,100)'),
    handlerId: Mock.mock('@guid'),
    handlerName: Mock.mock('@string(5,100)'),
    lastPunchAddr: Mock.mock('@string(5,100)'),
    'planHappyList|1-20': [PagePlanResp()],
    planCount: Mock.mock('@integer(3,1000)'),
    planKeyBorardId: Mock.mock('@guid'),
    'signHappyList|1-20': [PagePlanResp()],
    signCount: Mock.mock('@integer(3,1000)'),
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
  return {
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    dataLocation: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    doorName: Mock.mock('@string(5,100)'),
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    hasCustomer: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    isMyself: Mock.mock('@integer(3,1000)'),
    isRead: Mock.mock('@integer(3,1000)'),
    lastFetchTime: Mock.mock('@datetime'),
    lastFollowTime: Mock.mock('@datetime'),
    planId: Mock.mock('@guid'),
    planScore: Mock.mock('@string(5,100)'),
    recommendedReason: Mock.mock('@string(5,100)'),
    signId: Mock.mock('@guid'),
    source: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    thirdId: Mock.mock('@guid'),
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengJianDanShuJu() {
  return {
    name: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengGongHai() {
  return {
    addr: Mock.mock('@string(5,100)'),
    'addrList|1-20': [DiZhi()],
    area: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    'corpCertList|1-20': [Mock.mock('@string(5,100)')],
    corpCertMax: Mock.mock('@string(5,100)'),
    corpCertMin: Mock.mock('@string(5,100)'),
    createEndTime: Mock.mock('@datetime'),
    createStartTime: Mock.mock('@datetime'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    endTime: Mock.mock('@datetime'),
    doorStatus: Mock.mock('@string(5,100)'),
    'doorType|1-20': [Mock.mock('@string(5,100)')],
    'doorTypeList|1-20': [Mock.mock('@string(5,100)')],
    filialeCompanyMax: Mock.mock('@string(5,100)'),
    filialeCompanyMin: Mock.mock('@string(5,100)'),
    followResult: Mock.mock('@string(5,100)'),
    followType: Mock.mock('@string(5,100)'),
    'followTypeList|1-20': [Mock.mock('@string(5,100)')],
    followerId: Mock.mock('@guid'),
    'industryType|1-20': [Mock.mock('@string(5,100)')],
    isRead: Mock.mock('@integer(3,1000)'),
    'lackCorpCertList|1-20': [Mock.mock('@string(5,100)')],
    'lackQualicaficationList|1-20': [Mock.mock('@string(5,100)')],
    name: Mock.mock('@string(5,100)'),
    orderColumn: Mock.mock('@string(5,100)'),
    orderType: Mock.mock('@integer(3,1000)'),
    page: Mock.mock('@integer(3,1000)'),
    province: Mock.mock('@province'),
    'qualicaficationList|1-20': [Mock.mock('@string(5,100)')],
    qualicaficationMax: Mock.mock('@string(5,100)'),
    qualicaficationMin: Mock.mock('@string(5,100)'),
    receiveType: Mock.mock('@string(5,100)'),
    regCatCntMax: Mock.mock('@string(5,100)'),
    regCatCntMin: Mock.mock('@string(5,100)'),
    orangeeredCapitalMax: Mock.mock('@string(5,100)'),
    orangeeredCapitalMin: Mock.mock('@string(5,100)'),
    scoreMax: Mock.mock('@integer(3,1000)'),
    scoreMin: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    skAchievementCntMax: Mock.mock('@string(5,100)'),
    skAchievementCntMin: Mock.mock('@string(5,100)'),
    skQualificationCntMax: Mock.mock('@string(5,100)'),
    skQualificationCntMin: Mock.mock('@string(5,100)'),
    source: Mock.mock('@string(5,100)'),
    startTime: Mock.mock('@datetime'),
    taskId: Mock.mock('@guid'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengTuiJian() {
  return {
    addr: Mock.mock('@string(5,100)'),
    'addrList|1-20': [DiZhi()],
    area: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    'corpCertList|1-20': [Mock.mock('@string(5,100)')],
    corpCertMax: Mock.mock('@string(5,100)'),
    corpCertMin: Mock.mock('@string(5,100)'),
    createEndTime: Mock.mock('@datetime'),
    createStartTime: Mock.mock('@datetime'),
    distance: Mock.mock('@string(5,100)'),
    endTime: Mock.mock('@datetime'),
    doorStatus: Mock.mock('@string(5,100)'),
    'filialeCompanyList|1-20': [Mock.mock('@string(5,100)')],
    filialeCompanyMax: Mock.mock('@string(5,100)'),
    filialeCompanyMin: Mock.mock('@string(5,100)'),
    followResult: Mock.mock('@string(5,100)'),
    followType: Mock.mock('@string(5,100)'),
    'followTypeList|1-20': [Mock.mock('@string(5,100)')],
    name: Mock.mock('@string(5,100)'),
    orderColumn: Mock.mock('@string(5,100)'),
    orderType: Mock.mock('@integer(3,1000)'),
    page: Mock.mock('@integer(3,1000)'),
    province: Mock.mock('@province'),
    'qualicaficationList|1-20': [Mock.mock('@string(5,100)')],
    qualicaficationMax: Mock.mock('@string(5,100)'),
    qualicaficationMin: Mock.mock('@string(5,100)'),
    regCatCntMax: Mock.mock('@string(5,100)'),
    regCatCntMin: Mock.mock('@string(5,100)'),
    orangeeredCapitalMax: Mock.mock('@string(5,100)'),
    orangeeredCapitalMin: Mock.mock('@string(5,100)'),
    scoreMax: Mock.mock('@integer(3,1000)'),
    scoreMin: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    skAchievementCntMax: Mock.mock('@string(5,100)'),
    skAchievementCntMin: Mock.mock('@string(5,100)'),
    skQualificationCntMax: Mock.mock('@string(5,100)'),
    skQualificationCntMin: Mock.mock('@string(5,100)'),
    startTime: Mock.mock('@datetime'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
  return {
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    dataLocation: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    hasCustomer: Mock.mock('@boolean'),
    id: Mock.mock('@guid'),
    isMyself: Mock.mock('@integer(3,1000)'),
    isRead: Mock.mock('@integer(3,1000)'),
    lastFetchTime: Mock.mock('@datetime'),
    lastFollowTime: Mock.mock('@datetime'),
    planId: Mock.mock('@guid'),
    planScore: Mock.mock('@string(5,100)'),
    gladName: Mock.mock('@string(5,100)'),
    recommendedReason: Mock.mock('@string(5,100)'),
    signId: Mock.mock('@guid'),
    source: Mock.mock('@string(5,100)'),
    gratefulId: Mock.mock('@guid'),
    thirdId: Mock.mock('@guid'),
  }
}
export function FenYeLvYouXiangMuFaCaiMengJianDanShuJu() {
  return {
    addr: Mock.mock('@string(5,100)'),
    'addrList|1-20': [DiZhi()],
    area: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    createEndTime: Mock.mock('@datetime'),
    createStartTime: Mock.mock('@datetime'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    followResult: Mock.mock('@string(5,100)'),
    followType: Mock.mock('@string(5,100)'),
    'followTypeList|1-20': [Mock.mock('@string(5,100)')],
    followerId: Mock.mock('@guid'),
    isRead: Mock.mock('@integer(3,1000)'),
    name: Mock.mock('@string(5,100)'),
    orderColumn: Mock.mock('@string(5,100)'),
    orderType: Mock.mock('@integer(3,1000)'),
    page: Mock.mock('@integer(3,1000)'),
    province: Mock.mock('@province'),
    receiveType: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
    source: Mock.mock('@string(5,100)'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function FenYeLvYouXiangMuFaCaiMengTuiJian() {
  return {
    addr: Mock.mock('@string(5,100)'),
    'addrList|1-20': [DiZhi()],
    area: Mock.mock('@string(5,100)'),
    biddingType: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    createEndTime: Mock.mock('@datetime'),
    createStartTime: Mock.mock('@datetime'),
    distance: Mock.mock('@string(5,100)'),
    followResult: Mock.mock('@string(5,100)'),
    followType: Mock.mock('@string(5,100)'),
    'followTypeList|1-20': [Mock.mock('@string(5,100)')],
    'industryTypeList|1-20': [Mock.mock('@string(5,100)')],
    name: Mock.mock('@string(5,100)'),
    orderColumn: Mock.mock('@string(5,100)'),
    orderType: Mock.mock('@integer(3,1000)'),
    page: Mock.mock('@integer(3,1000)'),
    gladBudgetMax: Mock.mock('@string(5,100)'),
    gladBudgetMin: Mock.mock('@string(5,100)'),
    'gladTypeList|1-20': [Mock.mock('@string(5,100)')],
    province: Mock.mock('@province'),
    publishEndTime: Mock.mock('@datetime'),
    publishStartTime: Mock.mock('@datetime'),
    signUpBeginTime: Mock.mock('@datetime'),
    signUpEndTime: Mock.mock('@datetime'),
    size: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@integer(3,1000)'),
    valid: Mock.mock('@guid'),
  }
}
export function HuaHuaTiQingQiu() {
  return {
    addr: Mock.mock('@string(5,100)'),
    happyId: Mock.mock('@guid'),
    happyName: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    contactCatId: Mock.mock('@guid'),
    contactCatName: Mock.mock('@string(5,100)'),
    contactCatNum: Mock.mock('@string(5,100)'),
    contactCatType: Mock.mock('@integer(3,1000)'),
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    followResult: Mock.mock('@string(5,100)'),
    followTime: Mock.mock('@datetime'),
    followType: Mock.mock('@string(5,100)'),
    follower: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    'imageUrlList|1-20': [Mock.mock('@url')],
  }
}
export function YuMiHuaHuaTiQingQiu() {
  return {
    mobile: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    keyBorardName: Mock.mock('@string(5,100)'),
  }
}
export function FaCaiMengGenJinJiLuQingQiu() {
  return {
    happyId: Mock.mock('@guid'),
    happyType: Mock.mock('@string(5,100)'),
    'flowType|1-20': [Mock.mock('@string(5,100)')],
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function DiZhi() {
  return {
    area: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    province: Mock.mock('@province'),
  }
}
export function JiQiRenGenJinJiLuXiangYing() {
  return {
    addr: Mock.mock('@string(5,100)'),
    contactCatId: Mock.mock('@guid'),
    contactCatName: Mock.mock('@string(5,100)'),
    contactCatNum: Mock.mock('@string(5,100)'),
    contactCatType: Mock.mock('@integer(3,1000)'),
    content: Mock.mock('@string(5,100)'),
    coordinate: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerName: Mock.mock('@string(5,100)'),
    customerType: Mock.mock('@string(5,100)'),
    followResult: Mock.mock('@string(5,100)'),
    followTime: Mock.mock('@datetime'),
    followType: Mock.mock('@string(5,100)'),
    follower: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    'imageUrlList|1-20': [Mock.mock('@url')],
  }
}
export function JiQiRenGenJinJiLuQingQiu() {
  return {
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function DaoRuHuaHuaTiXiangYing() {
  return {
    'failData|1-20': [FailData()],
    failNum: Mock.mock('@integer(3,1000)'),
    fileName: Mock.mock('@string(5,100)'),
    fileUrl: Mock.mock('@url'),
    importTime: Mock.mock('@datetime'),
    operator: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    status: Mock.mock('@integer(3,1000)'),
    successNum: Mock.mock('@integer(3,1000)'),
  }
}
export function DaoRuHuaHuaTiQingQiu() {
  return {
    endTime: Mock.mock('@datetime'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    startTime: Mock.mock('@datetime'),
    taskType: Mock.mock('@integer(3,1000)'),
  }
}
export function WoCongMingFaCaiMengQuanJuFenLei() {
  return {
    happyType: Mock.mock('@string(5,100)'),
  }
}
export function WoCongMingPaiMingMyRankResp() {
  return {
    dealData: Mock.mock('@integer(3,1000)'),
    dealDataRank: Mock.mock('@string(5,100)'),
    followData: Mock.mock('@integer(3,1000)'),
    followDataRank: Mock.mock('@string(5,100)'),
    newData: Mock.mock('@integer(3,1000)'),
    newDataRank: Mock.mock('@string(5,100)'),
  }
}
export function PaiMingShuJuRankDataResp() {
  return {
    dealData: Mock.mock('@integer(3,1000)'),
    followData: Mock.mock('@integer(3,1000)'),
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
    newData: Mock.mock('@integer(3,1000)'),
  }
}
export function PaiMingTongJiPieDataReq() {
  return {
    beginTime: Mock.mock('@datetime'),
    endTime: Mock.mock('@datetime'),
  }
}
export function PaiMingTongJiRankDataReq() {
  return {
    orderColum: Mock.mock('@string(5,100)'),
  }
}
export function SouSuoRenCaiJiQiRenrequest() {
  return {
    page: Mock.mock('@integer(3,1000)'),
    catName: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function SouSuoRenCaiJiQiRenresponse() {
  return {
    id: Mock.mock('@guid'),
    catName: Mock.mock('@string(5,100)'),
  }
}
export function SouSuoZhiXieChangJiQiRenrequest() {
  return {
    doorName: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function SouSuoZhiXieChangJiQiRenresponse() {
  return {
    doorName: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
  }
}
export function CaoZuoRiZhiFenYerequest() {
  return {
    bizId: Mock.mock('@guid'),
    bizType: Mock.mock('@string(5,100)'),
    operatorId: Mock.mock('@guid'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function CaoZuoRiZhiFenYeresponse() {
  return {
    content: Mock.mock('@string(5,100)'),
    logId: Mock.mock('@guid'),
    operateTime: Mock.mock('@datetime'),
    operateType: Mock.mock('@string(5,100)'),
    operator: Mock.mock('@string(5,100)'),
  }
}
export function GuanShuiXiangMuFaCaiMengrpcChongDong() {
  return {
    agencies: Mock.mock('@string(5,100)'),
    agenciesAddr: Mock.mock('@string(5,100)'),
    agenciesAddrCoordinate: Mock.mock('@string(5,100)'),
    agenciesAddrLat: Mock.mock('@string(5,100)'),
    agenciesAddrLng: Mock.mock('@string(5,100)'),
    agenciesArea: Mock.mock('@string(5,100)'),
    agenciesCity: Mock.mock('@city'),
    agenciesCountry: Mock.mock('@string(5,100)'),
    agenciesPhone: Mock.mock('@string(5,100)'),
    agenciesProvince: Mock.mock('@province'),
    biddingCorpAddr: Mock.mock('@string(5,100)'),
    biddingCorpAddrCoordinate: Mock.mock('@string(5,100)'),
    biddingCorpAddrLat: Mock.mock('@string(5,100)'),
    biddingCorpAddrLng: Mock.mock('@string(5,100)'),
    biddingCorpArea: Mock.mock('@string(5,100)'),
    biddingCorpCity: Mock.mock('@city'),
    biddingCorpCountry: Mock.mock('@string(5,100)'),
    biddingCorpName: Mock.mock('@string(5,100)'),
    biddingCorpPhone: Mock.mock('@string(5,100)'),
    biddingCorpProvince: Mock.mock('@province'),
    biddingEndTime: Mock.mock('@datetime'),
    biddingOpeningTime: Mock.mock('@datetime'),
    biddingStartTime: Mock.mock('@datetime'),
    biddingType: Mock.mock('@string(5,100)'),
    fileDownloadEndTime: Mock.mock('@datetime'),
    fileDownloadStartTime: Mock.mock('@datetime'),
    industryType: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    gladBudget: Mock.mock('@string(5,100)'),
    gladName: Mock.mock('@string(5,100)'),
    gladNum: Mock.mock('@string(5,100)'),
    gladType: Mock.mock('@string(5,100)'),
  }
}
export function GengGaiPaiXuDuiXiang() {
  return {
    'list|1-20': [HappyPlanScoreListReq()],
  }
}
export function ZhuZhuangTuTongJiHistogramDataReq() {
  return {
    happyType: Mock.mock('@string(5,100)'),
    dateType: Mock.mock('@datetime'),
  }
}
export function TianJiaLianXiRenQingQiu() {
  return {
    name: Mock.mock('@string(5,100)'),
    relId: Mock.mock('@guid'),
    relType: Mock.mock('@integer(3,1000)'),
    remark: Mock.mock('@string(5,100)'),
    type: Mock.mock('@integer(3,1000)'),
    value: Mock.mock('@string(5,100)'),
  }
}
export function HongLingJinRequest() {
  return {
    happyId: Mock.mock('@guid'),
    happySource: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    radarHappyId: Mock.mock('@guid'),
    signType: Mock.mock('@string(5,100)'),
  }
}
export function HongLingJinJieGuoresponse() {
  return {
    happyId: Mock.mock('@guid'),
    mobile: Mock.mock('@string(5,100)'),
    signId: Mock.mock('@guid'),
  }
}
export function HongLingJinJiLuFenYerequest() {
  return {
    happyId: Mock.mock('@guid'),
    happyType: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function HongLingJinJiLuFenYeresponse() {
  return {
    happyId: Mock.mock('@guid'),
    happyName: Mock.mock('@string(5,100)'),
    happyType: Mock.mock('@string(5,100)'),
    content: Mock.mock('@string(5,100)'),
    created: Mock.mock('@string(5,100)'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    dealTime: Mock.mock('@datetime'),
    dealType: Mock.mock('@string(5,100)'),
    handler: Mock.mock('@string(5,100)'),
    handlerId: Mock.mock('@guid'),
    id: Mock.mock('@guid'),
    schedule: Mock.mock('@string(5,100)'),
    signingType: Mock.mock('@string(5,100)'),
    thirdId: Mock.mock('@guid'),
  }
}
export function TongJiShuJuHistogramDataResp() {
  return {
    dealData: Mock.mock('@integer(3,1000)'),
    followData: Mock.mock('@integer(3,1000)'),
    invalidData: Mock.mock('@integer(3,1000)'),
    newData: Mock.mock('@integer(3,1000)'),
  }
}
export function TongJiShuJuHistogramResp() {
  return {
    data: Mock.mock('TongJiShuJuHistogramDataResp()'),
    label: Mock.mock('@string(5,100)'),
  }
}
export function TongJiShuJuPieDataResp() {
  return {
    beforeTotal: Mock.mock('@integer(3,1000)'),
    compareBefore: Mock.mock('@string(5,100)'),
    dealData: Mock.mock('@integer(3,1000)'),
    doorData: Mock.mock('@integer(3,1000)'),
    followData: Mock.mock('@integer(3,1000)'),
    newData: Mock.mock('@integer(3,1000)'),
    catData: Mock.mock('@integer(3,1000)'),
    gladData: Mock.mock('@integer(3,1000)'),
    total: Mock.mock('@integer(3,1000)'),
  }
}
export function LianXiRenHuaHuaTi() {
  return {
    addDate: Mock.mock('@datetime'),
    addName: Mock.mock('@string(5,100)'),
    id: Mock.mock('@guid'),
    name: Mock.mock('@string(5,100)'),
    remark: Mock.mock('@string(5,100)'),
    type: Mock.mock('@integer(3,1000)'),
    value: Mock.mock('@string(5,100)'),
  }
}
export function LianXiRenHuaHuaTiQingQiu() {
  return {
    name: Mock.mock('@string(5,100)'),
    page: Mock.mock('@integer(3,1000)'),
    relId: Mock.mock('@guid'),
    relType: Mock.mock('@integer(3,1000)'),
    size: Mock.mock('@integer(3,1000)'),
    type: Mock.mock('@integer(3,1000)'),
  }
}
export function JieChuHongLingJinrequest() {
  return {
    happyId: Mock.mock('@guid'),
    happyType: Mock.mock('@string(5,100)'),
  }
}
export function DuRuWenJianXiangYing() {
  return {
    id: Mock.mock('@guid'),
  }
}
export function ZhuanRangQingQiu() {
  return {
    'happyId|1-20': [Mock.mock('@guid')],
    happyType: Mock.mock('@string(5,100)'),
    followerId: Mock.mock('@guid'),
    followerName: Mock.mock('@string(5,100)'),
  }
}
export function XiangMuFaCaiMengXiuGairpcrequest() {
  return {
    agencies: Mock.mock('@string(5,100)'),
    agenciesAddr: Mock.mock('@string(5,100)'),
    agenciesAddrCoordinate: Mock.mock('@string(5,100)'),
    agenciesAddrLat: Mock.mock('@string(5,100)'),
    agenciesAddrLng: Mock.mock('@string(5,100)'),
    agenciesArea: Mock.mock('@string(5,100)'),
    agenciesCity: Mock.mock('@city'),
    agenciesCountry: Mock.mock('@string(5,100)'),
    agenciesPhone: Mock.mock('@string(5,100)'),
    agenciesProvince: Mock.mock('@province'),
    biddingCorpAddr: Mock.mock('@string(5,100)'),
    biddingCorpAddrCoordinate: Mock.mock('@string(5,100)'),
    biddingCorpAddrLat: Mock.mock('@string(5,100)'),
    biddingCorpAddrLng: Mock.mock('@string(5,100)'),
    biddingCorpArea: Mock.mock('@string(5,100)'),
    biddingCorpCity: Mock.mock('@city'),
    biddingCorpCountry: Mock.mock('@string(5,100)'),
    biddingCorpName: Mock.mock('@string(5,100)'),
    biddingCorpPhone: Mock.mock('@string(5,100)'),
    biddingCorpProvince: Mock.mock('@province'),
    biddingEndTime: Mock.mock('@datetime'),
    biddingOpeningTime: Mock.mock('@datetime'),
    biddingStartTime: Mock.mock('@datetime'),
    biddingType: Mock.mock('@string(5,100)'),
    fileDownloadEndTime: Mock.mock('@datetime'),
    fileDownloadStartTime: Mock.mock('@datetime'),
    industryType: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    gladBudget: Mock.mock('@string(5,100)'),
    gladId: Mock.mock('@guid'),
    gladName: Mock.mock('@string(5,100)'),
    gladNum: Mock.mock('@string(5,100)'),
    gladType: Mock.mock('@string(5,100)'),
  }
}
export function XiangMuFaCaiMengGongHaiLvYou() {
  return {
    addr: Mock.mock('@string(5,100)'),
    'addrList|1-20': [DiZhi()],
    area: Mock.mock('@string(5,100)'),
    biddingType: Mock.mock('@string(5,100)'),
    happyStatus: Mock.mock('@string(5,100)'),
    city: Mock.mock('@city'),
    coordinate: Mock.mock('@string(5,100)'),
    createEndTime: Mock.mock('@datetime'),
    createStartTime: Mock.mock('@datetime'),
    customerId: Mock.mock('@guid'),
    customerType: Mock.mock('@string(5,100)'),
    distance: Mock.mock('@string(5,100)'),
    followResult: Mock.mock('@string(5,100)'),
    followType: Mock.mock('@string(5,100)'),
    'followTypeList|1-20': [Mock.mock('@string(5,100)')],
    followerId: Mock.mock('@guid'),
    'industryTypeList|1-20': [Mock.mock('@string(5,100)')],
    isRead: Mock.mock('@integer(3,1000)'),
    name: Mock.mock('@string(5,100)'),
    orderColumn: Mock.mock('@string(5,100)'),
    orderType: Mock.mock('@integer(3,1000)'),
    page: Mock.mock('@integer(3,1000)'),
    gladBudgetMax: Mock.mock('@string(5,100)'),
    gladBudgetMin: Mock.mock('@string(5,100)'),
    'gladTypeList|1-20': [Mock.mock('@string(5,100)')],
    province: Mock.mock('@province'),
    publishEndTime: Mock.mock('@datetime'),
    publishStartTime: Mock.mock('@datetime'),
    receiveType: Mock.mock('@string(5,100)'),
    signUpBeginTime: Mock.mock('@datetime'),
    signUpEndTime: Mock.mock('@datetime'),
    size: Mock.mock('@integer(3,1000)'),
    source: Mock.mock('@string(5,100)'),
    taskId: Mock.mock('@guid'),
    type: Mock.mock('@integer(3,1000)'),
    valid: Mock.mock('@guid'),
  }
}
export function XiangMuFaCaiMengFenYeLvYourpcrequest() {
  return {
    page: Mock.mock('@integer(3,1000)'),
    gladName: Mock.mock('@string(5,100)'),
    size: Mock.mock('@integer(3,1000)'),
  }
}
export function XiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    agencies: Mock.mock('@string(5,100)'),
    agenciesAddr: Mock.mock('@string(5,100)'),
    agenciesPhone: Mock.mock('@string(5,100)'),
    biddingCorpAddr: Mock.mock('@string(5,100)'),
    biddingCorpName: Mock.mock('@string(5,100)'),
    biddingCorpPhone: Mock.mock('@string(5,100)'),
    biddingTime: Mock.mock('@datetime'),
    biddingType: Mock.mock('@string(5,100)'),
    industryType: Mock.mock('@string(5,100)'),
    phone: Mock.mock('@string(5,100)'),
    gladBudget: Mock.mock('@string(5,100)'),
    gladId: Mock.mock('@guid'),
    gladName: Mock.mock('@string(5,100)'),
    gladNum: Mock.mock('@string(5,100)'),
    gladType: Mock.mock('@string(5,100)'),
  }
}
