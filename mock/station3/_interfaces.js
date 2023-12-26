import Mock from 'better-mock'
export function AddHappyDoorReq() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyClassificationType: '@string(5,50)',
    happySource: /ADVANCED_SEARCH|BIGDATA_SEARCH|CREATE|MINI_PROGRAM|OPEN_SEA|RADAR|SEARCH_PLATFORM/,
    happyType: '@string(5,50)',
    categoryName: '@ctitle(5,10)',
    city: '@city',
    coordinate: '@string(5,50)',
    corporateName: '@ctitle(5,10)',
    country: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    createSource: '@string(5,50)',
    created: '@datetime',
    enableSaveOrUpdate: '@boolean',
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    doorStatus: '@string(5,50)',
    establishmentTime: '@datetime',
    id: '@guid',
    isDelete: '@string(5,50)',
    lat: '@string(5,50)',
    licenseId: '@guid',
    lng: '@string(5,50)',
    modified: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    province: '@province',
    regCatCnt: '@string(5,50)',
    orangeeredCapital: '@string(5,50)',
    score: '@integer(3,1000)',
    searchStationId: '@guid',
    skAchievementCnt: '@string(5,50)',
    skQualificationCnt: '@string(5,50)',
    step: '@integer(3,1000)',
    thirdId: '@guid',
    type: /ENTERPRISE|PERSON|POOL|PROJECT/,
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
export function AddHappyCatCertificateReq() {
  return {
    id: '@guid',
    major: '@string(5,50)',
    name: '@ctitle(5,10)',
    pictureUrl: '@image(200x100, @color, @color)',
  }
}
export function AddHappyCatReq() {
  return {
    achievementCnt: '@string(5,50)',
    addr: '@string(5,50)',
    area: '@string(5,50)',
    badBehaviorCnt: '@string(5,50)',
    blacklistRecordCnt: '@string(5,50)',
    happyClassificationType: '@string(5,50)',
    happySource: /ADVANCED_SEARCH|BIGDATA_SEARCH|CREATE|MINI_PROGRAM|OPEN_SEA|RADAR|SEARCH_PLATFORM/,
    happyType: '@string(5,50)',
    'certificateList|1-20': [AddHappyCatCertificateReq()],
    city: '@city',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    createSource: '@string(5,50)',
    created: '@datetime',
    education: '@string(5,50)',
    enableSaveOrUpdate: '@boolean',
    gender: '@string(5,50)',
    goodBehaviorCnt: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    lat: '@string(5,50)',
    licenseId: '@guid',
    lng: '@string(5,50)',
    modified: '@string(5,50)',
    catName: '@ctitle(5,10)',
    catnelRisk: '@integer(3,1000)',
    phone: '@integer(13100000000,18999999999)',
    province: '@province',
    searchStationId: '@guid',
    skCertificateCnt: '@string(5,50)',
    step: '@integer(3,1000)',
    thirdId: '@guid',
    'titleList|1-20': [AddHappyCatTitleReq()],
    type: /ENTERPRISE|PERSON|POOL|PROJECT/,
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
export function AddHappyCatTitleReq() {
  return {
    id: '@guid',
    level: '@string(5,50)',
    major: '@string(5,50)',
    pictureUrl: '@image(200x100, @color, @color)',
  }
}
export function AddHappyGladReq() {
  return {
    agencies: '@string(5,50)',
    agenciesAddr: '@string(5,50)',
    agenciesAddrCoordinate: '@string(5,50)',
    agenciesAddrLat: '@string(5,50)',
    agenciesAddrLng: '@string(5,50)',
    agenciesArea: '@string(5,50)',
    agenciesCity: '@city',
    agenciesCountry: '@string(5,50)',
    agenciesPhone: '@integer(13100000000,18999999999)',
    agenciesProvince: '@province',
    biddingCorpAddr: '@string(5,50)',
    biddingCorpAddrCoordinate: '@string(5,50)',
    biddingCorpAddrLat: '@string(5,50)',
    biddingCorpAddrLng: '@string(5,50)',
    biddingCorpArea: '@string(5,50)',
    biddingCorpCity: '@city',
    biddingCorpCountry: '@string(5,50)',
    biddingCorpName: '@ctitle(5,10)',
    biddingCorpPhone: '@integer(13100000000,18999999999)',
    biddingCorpProvince: '@province',
    biddingEndTime: '@datetime',
    biddingOpeningTime: '@datetime',
    biddingStartTime: '@datetime',
    biddingType: '@string(5,50)',
    happyClassificationType: '@string(5,50)',
    happySource: /ADVANCED_SEARCH|BIGDATA_SEARCH|CREATE|MINI_PROGRAM|OPEN_SEA|RADAR|SEARCH_PLATFORM/,
    happyType: '@string(5,50)',
    coordinate: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    createSource: '@string(5,50)',
    created: '@datetime',
    enableSaveOrUpdate: '@boolean',
    fileDownloadEndTime: '@datetime',
    fileDownloadStartTime: '@datetime',
    id: '@guid',
    industryType: '@string(5,50)',
    isDelete: '@string(5,50)',
    lat: '@string(5,50)',
    licenseId: '@guid',
    lng: '@string(5,50)',
    modified: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    gladBudget: '@string(5,50)',
    gladName: '@ctitle(5,10)',
    gladNum: '@string(5,50)',
    gladType: '@string(5,50)',
    searchStationId: '@guid',
    step: '@integer(3,1000)',
    thirdId: '@guid',
    type: /ENTERPRISE|PERSON|POOL|PROJECT/,
    updateId: '@datetime',
    updateName: '@datetime',
    webPageUrl: '@image(200x100, @color, @color)',
  }
}
export function AddHappyReq() {
  return {
    happyClassificationType: '@string(5,50)',
    happySource: /ADVANCED_SEARCH|BIGDATA_SEARCH|CREATE|MINI_PROGRAM|OPEN_SEA|RADAR|SEARCH_PLATFORM/,
    happyType: '@string(5,50)',
    coordinate: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    createSource: '@string(5,50)',
    created: '@datetime',
    enableSaveOrUpdate: '@boolean',
    id: '@guid',
    isDelete: '@string(5,50)',
    lat: '@string(5,50)',
    licenseId: '@guid',
    lng: '@string(5,50)',
    modified: '@string(5,50)',
    searchStationId: '@guid',
    step: '@integer(3,1000)',
    thirdId: '@guid',
    type: /ENTERPRISE|PERSON|POOL|PROJECT/,
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
export function AddHappyResp() {
  return {
    failCnt: '@integer(3,1000)',
    id: '@guid',
    licenseId: '@guid',
    'list|1-20': [''],
    gladName: '@ctitle(5,10)',
    receiveName: '@ctitle(5,10)',
    successCnt: '@integer(3,1000)',
  }
}
export function AddCustomerResp() {
  return {
    'list|1-20': [CustomerDoorInfoResp()],
    repeatType: '@string(5,50)',
  }
}
export function AddCatCustomerResp() {
  return {
    'list|1-20': [CustomerCatInfoResp()],
    repeatType: '@string(5,50)',
  }
}
export function AddSignHappyDoorReq() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyId: '@guid',
    happySource: /ADVANCED_SEARCH|BIGDATA_SEARCH|CREATE|MINI_PROGRAM|OPEN_SEA|RADAR|SEARCH_PLATFORM/,
    happyType: '@string(5,50)',
    categoryName: '@ctitle(5,10)',
    city: '@city',
    coordinate: '@string(5,50)',
    corporateName: '@ctitle(5,10)',
    country: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    createSource: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    doorStatus: '@string(5,50)',
    establishmentTime: '@datetime',
    id: '@guid',
    isDelete: '@string(5,50)',
    lat: '@string(5,50)',
    licenseId: '@guid',
    lng: '@string(5,50)',
    modified: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    province: '@province',
    regCatCnt: '@string(5,50)',
    orangeeredCapital: '@string(5,50)',
    score: '@integer(3,1000)',
    signType: '@string(5,50)',
    skAchievementCnt: '@string(5,50)',
    skQualificationCnt: '@string(5,50)',
    step: '@integer(3,1000)',
    type: /ENTERPRISE|PERSON|POOL|PROJECT/,
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
export function AddSignHappyCatReq() {
  return {
    achievementCnt: '@string(5,50)',
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyId: '@guid',
    happySource: /ADVANCED_SEARCH|BIGDATA_SEARCH|CREATE|MINI_PROGRAM|OPEN_SEA|RADAR|SEARCH_PLATFORM/,
    happyType: '@string(5,50)',
    'certificateList|1-20': [AddHappyCatCertificateReq()],
    city: '@city',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    createSource: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    education: '@string(5,50)',
    gender: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    lat: '@string(5,50)',
    lng: '@string(5,50)',
    modified: '@string(5,50)',
    catName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    province: '@province',
    signType: '@string(5,50)',
    step: '@integer(3,1000)',
    'titleList|1-20': [AddHappyCatTitleReq()],
    type: /ENTERPRISE|PERSON|POOL|PROJECT/,
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
export function AddSignHappyGladReq() {
  return {
    agencies: '@string(5,50)',
    agenciesAddr: '@string(5,50)',
    agenciesAddrCoordinate: '@string(5,50)',
    agenciesAddrLat: '@string(5,50)',
    agenciesAddrLng: '@string(5,50)',
    agenciesArea: '@string(5,50)',
    agenciesCity: '@city',
    agenciesCountry: '@string(5,50)',
    agenciesPhone: '@integer(13100000000,18999999999)',
    agenciesProvince: '@province',
    biddingCorpAddr: '@string(5,50)',
    biddingCorpAddrCoordinate: '@string(5,50)',
    biddingCorpAddrLat: '@string(5,50)',
    biddingCorpAddrLng: '@string(5,50)',
    biddingCorpArea: '@string(5,50)',
    biddingCorpCity: '@city',
    biddingCorpCountry: '@string(5,50)',
    biddingCorpName: '@ctitle(5,10)',
    biddingCorpPhone: '@integer(13100000000,18999999999)',
    biddingCorpProvince: '@province',
    biddingEndTime: '@datetime',
    biddingOpeningTime: '@datetime',
    biddingStartTime: '@datetime',
    biddingType: '@string(5,50)',
    happyId: '@guid',
    happySource: /ADVANCED_SEARCH|BIGDATA_SEARCH|CREATE|MINI_PROGRAM|OPEN_SEA|RADAR|SEARCH_PLATFORM/,
    happyType: '@string(5,50)',
    coordinate: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    createSource: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    fileDownloadEndTime: '@datetime',
    fileDownloadStartTime: '@datetime',
    id: '@guid',
    industryType: '@string(5,50)',
    isDelete: '@string(5,50)',
    lat: '@string(5,50)',
    lng: '@string(5,50)',
    modified: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    gladBudget: '@string(5,50)',
    gladName: '@ctitle(5,10)',
    gladNum: '@string(5,50)',
    gladType: '@string(5,50)',
    signType: '@string(5,50)',
    step: '@integer(3,1000)',
    type: /ENTERPRISE|PERSON|POOL|PROJECT/,
    updateId: '@datetime',
    updateName: '@datetime',
    webPageUrl: '@image(200x100, @color, @color)',
  }
}
export function AddSignHappyResp() {
  return {
    happyId: '@guid',
    'list|1-20': [''],
    mobile: '@string(5,50)',
    signId: '@guid',
  }
}
export function ApiResponse() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseAddHappyResp() {
  return {
    code: 200,
    data: AddHappyResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseAddCustomerResp() {
  return {
    code: 200,
    data: AddCustomerResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseAddCatCustomerResp() {
  return {
    code: 200,
    data: AddCatCustomerResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseAddSignHappyResp() {
  return {
    code: 200,
    data: AddSignHappyResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHappyClassificationResp() {
  return {
    code: 200,
    data: HappyClassificationResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHappyDesktopRulePageResp() {
  return {
    code: 200,
    data: HappyDesktopRulePageResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHappyDesktopRuleResp() {
  return {
    code: 200,
    data: HappyDesktopRuleResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHappyDoorInfoResp() {
  return {
    code: 200,
    data: HappyDoorInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHappyNumResp() {
  return {
    code: 200,
    data: HappyNumResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHappyCatInfoResp() {
  return {
    code: 200,
    data: HappyCatInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHappyPlanCountResp() {
  return {
    code: 200,
    data: HappyPlanCountResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHappyGladInfoResp() {
  return {
    code: 200,
    data: HappyGladInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHappyPushInfoResp() {
  return {
    code: 200,
    data: HappyPushInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHappyReceiveResp() {
  return {
    code: 200,
    data: HappyReceiveResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHappySubscribeInfoResp() {
  return {
    code: 200,
    data: HappySubscribeInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageHappyPushDetail() {
  return {
    code: 200,
    data: ComPageHappyPushDetail(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageCustomerDoorInfoResp() {
  return {
    code: 200,
    data: ComPageCustomerDoorInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageCustomerCatInfoResp() {
  return {
    code: 200,
    data: ComPageCustomerCatInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageDesktopListResp() {
  return {
    code: 200,
    data: ComPageDesktopListResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageLocationDateInfoResp() {
  return {
    code: 200,
    data: ComPageLocationDateInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageLocationInfoResp() {
  return {
    code: 200,
    data: ComPageLocationInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPagePageHappyResp() {
  return {
    code: 200,
    data: ComPagePageHappyResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPagePageDoorHappyPoolResp() {
  return {
    code: 200,
    data: ComPagePageDoorHappyPoolResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPagePageCatHappyPoolResp() {
  return {
    code: 200,
    data: ComPagePageCatHappyPoolResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPagePageGladHappyPoolResp() {
  return {
    code: 200,
    data: ComPagePageGladHappyPoolResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPagePunchPageResp() {
  return {
    code: 200,
    data: ComPagePunchPageResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageTaskPageListResp() {
  return {
    code: 200,
    data: ComPageTaskPageListResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageTreelong() {
  return {
    code: 200,
    data: ComPageTreelong(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
  return {
    code: 200,
    data: ComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageFenYeLvYouRenWu() {
  return {
    code: 200,
    data: ComPageFenYeLvYouRenWu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
  return {
    code: 200,
    data: ComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
  return {
    code: 200,
    data: ComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageHuaHuaTiQingQiu() {
  return {
    code: 200,
    data: ComPageHuaHuaTiQingQiu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageJiQiRenGenJinJiLuXiangYing() {
  return {
    code: 200,
    data: ComPageJiQiRenGenJinJiLuXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageDaoRuHuaHuaTiXiangYing() {
  return {
    code: 200,
    data: ComPageDaoRuHuaHuaTiXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageSouSuoRenCaiJiQiRenresponse() {
  return {
    code: 200,
    data: ComPageSouSuoRenCaiJiQiRenresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageSouSuoZhiXieChangJiQiRenresponse() {
  return {
    code: 200,
    data: ComPageSouSuoZhiXieChangJiQiRenresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageCaoZuoRiZhiFenYeresponse() {
  return {
    code: 200,
    data: ComPageCaoZuoRiZhiFenYeresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageHongLingJinJiLuFenYeresponse() {
  return {
    code: 200,
    data: ComPageHongLingJinJiLuFenYeresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageLianXiRenHuaHuaTi() {
  return {
    code: 200,
    data: ComPageLianXiRenHuaHuaTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    code: 200,
    data: ComPageXiangMuFaCaiMengXiangQingrpcresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseCountCustomerHappyNumResp() {
  return {
    code: 200,
    data: CountCustomerHappyNumResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseCustomerDoorAddResp() {
  return {
    code: 200,
    data: CustomerDoorAddResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseCustomerDoorDetailResp() {
  return {
    code: 200,
    data: CustomerDoorDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseCustomerDoorNumResp() {
  return {
    code: 200,
    data: CustomerDoorNumResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseCustomerCatAddResp() {
  return {
    code: 200,
    data: CustomerCatAddResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseCustomerCatDetailResp() {
  return {
    code: 200,
    data: CustomerCatDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseDesktopResp() {
  return {
    code: 200,
    data: DesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListHappyPlanCoordinateResp() {
  return {
    code: 200,
    'data|1-20': [HappyPlanCoordinateResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListCustomerDoorFromDataResp() {
  return {
    code: 200,
    'data|1-20': [CustomerDoorFromDataResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListDayCityResp() {
  return {
    code: 200,
    'data|1-20': [DayCityResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListWhiteNoteResp() {
  return {
    code: 200,
    'data|1-20': [WhiteNoteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListWhiteResp() {
  return {
    code: 200,
    'data|1-20': [WhiteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListDocument() {
  return {
    code: 200,
    'data|1-20': [Document()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListDesktopResp() {
  return {
    code: 200,
    'data|1-20': [DesktopResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListLocationInfoResp() {
  return {
    code: 200,
    'data|1-20': [LocationInfoResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListPagePlanResp() {
  return {
    code: 200,
    'data|1-20': [PagePlanResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListTaskProgressDetailResp() {
  return {
    code: 200,
    'data|1-20': [TaskProgressDetailResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListTaskProgressCatResp() {
  return {
    code: 200,
    'data|1-20': [TaskProgressCatResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListTreelong() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListTreestring() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListobject() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListstring() {
  return {
    code: 200,
    'data|1-20': ['@string(5,50)'],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListTongJiShuJuHistogramResp() {
  return {
    code: 200,
    'data|1-20': [TongJiShuJuHistogramResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseMaplongCustomerDoorDetailResp() {
  return {
    code: 200,
    data: CustomerDoorDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseGladSignInfoResp() {
  return {
    code: 200,
    data: GladSignInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseRankResp() {
  return {
    code: 200,
    data: RankResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseTaskInfoResp() {
  return {
    code: 200,
    data: TaskInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseTravelLoginResp() {
  return {
    code: 200,
    data: TravelLoginResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
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
export function ApiResponseboolean() {
  return {
    code: 200,
    data: '@boolean',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponselong() {
  return {
    code: 200,
    data: '@string(5,50)',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
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
export function ApiResponsestring() {
  return {
    code: 200,
    data: '@string(5,50)',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseShangChuanWenJianFanHui() {
  return {
    code: 200,
    data: ShangChuanWenJianFanHui(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseZhiXieChangFaCaiMengXiangQingrpcresponse() {
  return {
    code: 200,
    data: ZhiXieChangFaCaiMengXiangQingrpcresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseGuanLianFaCaiMengResponse() {
  return {
    code: 200,
    data: GuanLianFaCaiMengResponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHuaHuaTiQingQiu() {
  return {
    code: 200,
    data: HuaHuaTiQingQiu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHongLingJinJieGuoresponse() {
  return {
    code: 200,
    data: HongLingJinJieGuoresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseTongJiShuJuPieDataResp() {
  return {
    code: 200,
    data: TongJiShuJuPieDataResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseLianXiRenHuaHuaTi() {
  return {
    code: 200,
    data: LianXiRenHuaHuaTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseDuRuWenJianXiangYing() {
  return {
    code: 200,
    data: DuRuWenJianXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    code: 200,
    data: XiangMuFaCaiMengXiangQingrpcresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function AssignHappyReq() {
  return {
    'happyList|1-20': [AddHappyReq()],
    happyReceiveSource: '@string(5,50)',
    happyType: '@string(5,50)',
    date: '@datetime',
    receiverId: '@guid',
    receiverName: '@ctitle(5,10)',
  }
}
export function HappyClassificationResp() {
  return {
    'happyClassificationList|1-20': [HappyCntResp()],
  }
}
export function HappyCntResp() {
  return {
    count: '@string(5,50)',
    label: '@string(5,50)',
    value: '@string(5,50)',
  }
}
export function HappyDesktopDetailRulePageResp() {
  return {
    happyNumEveryday: '@integer(3,1000)',
    desktopId: '@guid',
    desktopName: '@ctitle(5,10)',
    doorLimit: '@integer(3,1000)',
    catLimit: '@integer(3,1000)',
    gladLimit: '@integer(3,1000)',
  }
}
export function HappyDesktopDetailRuleReq() {
  return {
    happyNumEveryday: '@integer(3,1000)',
    desktopId: '@guid',
    desktopName: '@ctitle(5,10)',
    doorLimit: '@integer(3,1000)',
    catLimit: '@integer(3,1000)',
    gladLimit: '@integer(3,1000)',
  }
}
export function HappyDesktopRulePageReq() {
  return {
    'desktopIdList|1-20': ['@string(5,50)'],
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function HappyDesktopRulePageResp() {
  return {
    happyNumEveryday: '@integer(3,1000)',
    desktopDetailRulePage: ComPageHappyDesktopDetailRulePageResp(),
    doorLimit: '@integer(3,1000)',
    isDoorNoLimit: '@integer(3,1000)',
    isCatNoLimit: '@integer(3,1000)',
    isGladNoLimit: '@integer(3,1000)',
    catLimit: '@integer(3,1000)',
    gladLimit: '@integer(3,1000)',
  }
}
export function HappyDesktopRuleReq() {
  return {
    happyNumEveryday: '@integer(3,1000)',
    'detailRuleList|1-20': [HappyDesktopDetailRuleReq()],
    doorLimit: '@integer(3,1000)',
    isDoorNoLimit: '@integer(3,1000)',
    isCatNoLimit: '@integer(3,1000)',
    isGladNoLimit: '@integer(3,1000)',
    catLimit: '@integer(3,1000)',
    gladLimit: '@integer(3,1000)',
  }
}
export function HappyDesktopRuleResp() {
  return {
    doorNoFollowTime: '@integer(3,1000)',
    doorTimeType: '@datetime',
    isDoorNeedBackOpenSea: '@integer(3,1000)',
    isCatNeedBackOpenSea: '@integer(3,1000)',
    isGladNeedBackOpenSea: '@integer(3,1000)',
    catNoFollowTime: '@integer(3,1000)',
    catTimeType: '@datetime',
    gladNoFollowTime: '@integer(3,1000)',
    gladTimeType: '@datetime',
  }
}
export function HappyDoorInfoResp() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    categoryName: '@ctitle(5,10)',
    city: '@city',
    coordinate: '@string(5,50)',
    corpCertArray: '@string(5,50)',
    corporateName: '@ctitle(5,10)',
    country: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    doorStatus: '@string(5,50)',
    doorType: '@string(5,50)',
    establishmentTime: '@datetime',
    filialeCompanyNameArray: '@ctitle(5,10)',
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    hasCustomer: '@boolean',
    id: '@guid',
    isRead: '@string(5,50)',
    lastFetchTime: '@datetime',
    lastFollowTime: '@datetime',
    lat: '@string(5,50)',
    licenseId: '@guid',
    lng: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    planId: '@guid',
    planScore: '@string(5,50)',
    province: '@province',
    qualicaficationArray: '@string(5,50)',
    recommendedReason: '@string(5,50)',
    regCatCnt: '@string(5,50)',
    orangeeredCapital: '@string(5,50)',
    score: '@integer(3,1000)',
    signId: '@guid',
    skAchievementCnt: '@string(5,50)',
    skQualificationCnt: '@string(5,50)',
    source: '@string(5,50)',
    gratefulId: '@guid',
    thirdId: '@guid',
  }
}
export function HappyFollowReq() {
  return {
    addr: '@string(5,50)',
    happyId: '@guid',
    happyType: '@string(5,50)',
    contactCatId: '@guid',
    contactCatName: '@ctitle(5,10)',
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    date: '@datetime',
    'dateList|1-20': ['@datetime'],
    'fileIdList|1-20': ['@string(5,50)'],
    followResult: '@string(5,50)',
    followType: '@string(5,50)',
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    setPlanType: '@integer(3,1000)',
    gratefulId: '@guid',
  }
}
export function HappyFollowRuleReq() {
  return {
    doorNoFollowTime: '@integer(3,1000)',
    doorTimeType: '@datetime',
    isDoorNeedBackOpenSea: '@integer(3,1000)',
    isCatNeedBackOpenSea: '@integer(3,1000)',
    isGladNeedBackOpenSea: '@integer(3,1000)',
    catNoFollowTime: '@integer(3,1000)',
    catTimeType: '@datetime',
    gladNoFollowTime: '@integer(3,1000)',
    gladTimeType: '@datetime',
  }
}
export function HappyNumReq() {
  return {
    happyType: '@string(5,50)',
    type: '@integer(3,1000)',
  }
}
export function HappyNumResp() {
  return {
    followNum: '@integer(3,1000)',
    highIntentionNum: '@integer(3,1000)',
    invalidNum: '@integer(3,1000)',
    longTimeNoSignNum: '@integer(3,1000)',
    newNum: '@integer(3,1000)',
    oldNum: '@integer(3,1000)',
    signNum: '@integer(3,1000)',
    totalNum: '@integer(3,1000)',
    unreadNewNum: '@integer(3,1000)',
    unreadTotalNum: '@integer(3,1000)',
  }
}
export function HappyCatCertificateResp() {
  return {
    certificateNum: '@string(5,50)',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    id: '@guid',
    major: '@string(5,50)',
    name: '@ctitle(5,10)',
    pictureUrl: '@image(200x100, @color, @color)',
    orangeered: '@string(5,50)',
  }
}
export function HappyCatInfoResp() {
  return {
    achievementCnt: '@string(5,50)',
    addr: '@string(5,50)',
    area: '@string(5,50)',
    badBehaviorCnt: '@string(5,50)',
    blacklistRecordCnt: '@string(5,50)',
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    'certificateList|1-20': [HappyCatCertificateResp()],
    city: '@city',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerMobile: '@string(5,50)',
    customerName: '@ctitle(5,10)',
    customerType: '@string(5,50)',
    education: '@string(5,50)',
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    gender: '@string(5,50)',
    goodBehaviorCnt: '@string(5,50)',
    hasCustomer: '@boolean',
    id: '@guid',
    isRead: '@string(5,50)',
    lastFetchTime: '@datetime',
    lastFollowTime: '@datetime',
    lat: '@string(5,50)',
    licenseId: '@guid',
    lng: '@string(5,50)',
    catName: '@ctitle(5,10)',
    catnelRisk: '@integer(3,1000)',
    phone: '@integer(13100000000,18999999999)',
    planId: '@guid',
    planScore: '@string(5,50)',
    province: '@province',
    recommendedReason: '@string(5,50)',
    signId: '@guid',
    skCertificateCnt: '@string(5,50)',
    source: '@string(5,50)',
    gratefulId: '@guid',
    thirdId: '@guid',
    'titleList|1-20': [HappyCatTitleResp()],
  }
}
export function HappyCatTitleResp() {
  return {
    id: '@guid',
    level: '@string(5,50)',
    major: '@string(5,50)',
    pictureUrl: '@image(200x100, @color, @color)',
  }
}
export function HappyPlanAddHappyListReq() {
  return {
    happyType: '@string(5,50)',
    id: '@guid',
  }
}
export function HappyPlanAddHappyReq() {
  return {
    'addHappyList|1-20': [HappyPlanAddHappyListReq()],
    date: '@datetime',
  }
}
export function HappyPlanAddCustomerListReq() {
  return {
    customerType: '@string(5,50)',
    id: '@guid',
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
    coordinate: '@string(5,50)',
    created: '@datetime',
    planId: '@guid',
  }
}
export function HappyPlanCountReq() {
  return {
    date: '@datetime',
  }
}
export function HappyPlanCountResp() {
  return {
    taskCount: '@integer(3,1000)',
    todayCount: '@integer(3,1000)',
  }
}
export function HappyPlanDateListByTypeReq() {
  return {
    id: '@guid',
    taskType: '@integer(3,1000)',
    type: '@string(5,50)',
  }
}
export function HappyPlanDateListReq() {
  return {
    endDate: '@datetime',
    'handlerIdList|1-20': ['@string(5,50)'],
    startDate: '@datetime',
    type: '@integer(3,1000)',
  }
}
export function HappyPlanDeleteReq() {
  return {
    planId: '@guid',
  }
}
export function HappyPlanPageReq() {
  return {
    date: '@datetime',
    'handlerIdList|1-20': ['@string(5,50)'],
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function HappyPlanPunchReq() {
  return {
    date: '@datetime',
  }
}
export function HappyPlanRecommendedReq() {
  return {
    happyType: '@string(5,50)',
    date: '@datetime',
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function HappyPlanScoreListReq() {
  return {
    planId: '@guid',
    score: '@string(5,50)',
  }
}
export function HappyGladInfoResp() {
  return {
    agencies: '@string(5,50)',
    agenciesAddr: '@string(5,50)',
    agenciesAddrLat: '@string(5,50)',
    agenciesAddrLng: '@string(5,50)',
    agenciesArea: '@string(5,50)',
    agenciesCity: '@city',
    agenciesCountry: '@string(5,50)',
    agenciesPhone: '@integer(13100000000,18999999999)',
    agenciesProvince: '@province',
    area: '@string(5,50)',
    biddingCorpAddr: '@string(5,50)',
    biddingCorpAddrLat: '@string(5,50)',
    biddingCorpAddrLng: '@string(5,50)',
    biddingCorpArea: '@string(5,50)',
    biddingCorpCity: '@city',
    biddingCorpCountry: '@string(5,50)',
    biddingCorpName: '@ctitle(5,10)',
    biddingCorpPhone: '@integer(13100000000,18999999999)',
    biddingCorpProvince: '@province',
    biddingEndTime: '@datetime',
    biddingOpeningTime: '@datetime',
    biddingStartTime: '@datetime',
    biddingTime: '@datetime',
    biddingType: '@string(5,50)',
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    fileDownloadEndTime: '@datetime',
    fileDownloadStartTime: '@datetime',
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    hasCustomer: '@boolean',
    id: '@guid',
    industryType: '@string(5,50)',
    isRead: '@string(5,50)',
    lastFetchTime: '@datetime',
    lastFollowTime: '@datetime',
    lat: '@string(5,50)',
    licenseId: '@guid',
    lng: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    planId: '@guid',
    planScore: '@string(5,50)',
    gladBudget: '@string(5,50)',
    gladName: '@ctitle(5,10)',
    gladNum: '@string(5,50)',
    gladType: '@string(5,50)',
    province: '@province',
    publishTime: '@datetime',
    quoteBeginTime: '@datetime',
    quoteEndTime: '@datetime',
    recommendedReason: '@string(5,50)',
    signId: '@guid',
    signUpBeginTime: '@datetime',
    signUpEndTime: '@datetime',
    source: '@string(5,50)',
    gratefulId: '@guid',
    thirdId: '@guid',
    valid: '@guid',
    webPageUrl: '@image(200x100, @color, @color)',
  }
}
export function HappyPushDetail() {
  return {
    happyType: '@string(5,50)',
    enable: '@integer(3,1000)',
    id: '@guid',
    json: '',
    planPushNum: '@integer(3,1000)',
    pushedNum: '@integer(3,1000)',
    remark: '@string(5,50)',
    ruleSettingTime: '@datetime',
  }
}
export function HappyPushInfoResp() {
  return {
    'areaList|1-20': [DiZhi()],
    happyType: '@string(5,50)',
    json: '',
    'catList|1-20': [HappyPushCatInfoResp()],
    pushDays: '@integer(3,1000)',
    pushNum: '@integer(3,1000)',
    pushRule: '@integer(3,1000)',
    pushType: '@integer(3,1000)',
    remark: '@string(5,50)',
  }
}
export function HappyPushCatInfoResp() {
  return {
    'areaList|1-20': [DiZhi()],
    'catList|1-20': [HappyPushCatResp()],
    pushNum: '@integer(3,1000)',
  }
}
export function HappyPushCatResp() {
  return {
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
  }
}
export function HappyReceiveResp() {
  return {
    failCnt: '@integer(3,1000)',
    id: '@guid',
    licenseId: '@guid',
    gladName: '@ctitle(5,10)',
    receiveName: '@ctitle(5,10)',
    successCnt: '@integer(3,1000)',
  }
}
export function HappySetVisitPlanReq() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    expectedDate: '@datetime',
    interfaceType: '@string(5,50)',
  }
}
export function HappySubscribeInfoReq() {
  return {
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    doorEnable: '@integer(3,1000)',
    doorJson: '',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    catEnable: '@integer(3,1000)',
    catJson: '',
    gladEnable: '@integer(3,1000)',
    gladJson: '',
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
export function HappySubscribeInfoResp() {
  return {
    doorEnable: '@integer(3,1000)',
    doorJson: '@string(5,50)',
    catEnable: '@integer(3,1000)',
    catJson: '@string(5,50)',
    gladEnable: '@integer(3,1000)',
    gladJson: '@string(5,50)',
  }
}
export function CharSequence() {}
export function ComPageHappyDesktopDetailRulePageResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [HappyDesktopDetailRulePageResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageHappyPushDetail() {
  return {
    current: '@string(5,50)',
    'records|1-20': [HappyPushDetail()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageCustomerDoorInfoResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [CustomerDoorInfoResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageCustomerCatInfoResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [CustomerCatInfoResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageDesktopListResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DesktopListResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageLocationDateInfoResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [LocationDateInfoResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageLocationInfoResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [LocationInfoResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPagePageHappyResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [PageHappyResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPagePageDoorHappyPoolResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [PageDoorHappyPoolResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPagePageCatHappyPoolResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [PageCatHappyPoolResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPagePageGladHappyPoolResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [PageGladHappyPoolResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPagePunchPageResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [PunchPageResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageTaskPageListResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [TaskPageListResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageTreelong() {
  return {
    current: '@string(5,50)',
    'records|1-20': [''],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
  return {
    current: '@string(5,50)',
    'records|1-20': [FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageFenYeLvYouRenWu() {
  return {
    current: '@string(5,50)',
    'records|1-20': [FenYeLvYouRenWu()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
  return {
    current: '@string(5,50)',
    'records|1-20': [FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
  return {
    current: '@string(5,50)',
    'records|1-20': [FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageHuaHuaTiQingQiu() {
  return {
    current: '@string(5,50)',
    'records|1-20': [HuaHuaTiQingQiu()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageJiQiRenGenJinJiLuXiangYing() {
  return {
    current: '@string(5,50)',
    'records|1-20': [JiQiRenGenJinJiLuXiangYing()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageDaoRuHuaHuaTiXiangYing() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DaoRuHuaHuaTiXiangYing()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageSouSuoRenCaiJiQiRenresponse() {
  return {
    current: '@string(5,50)',
    'records|1-20': [SouSuoRenCaiJiQiRenresponse()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageSouSuoZhiXieChangJiQiRenresponse() {
  return {
    current: '@string(5,50)',
    'records|1-20': [SouSuoZhiXieChangJiQiRenresponse()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageCaoZuoRiZhiFenYeresponse() {
  return {
    current: '@string(5,50)',
    'records|1-20': [CaoZuoRiZhiFenYeresponse()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageHongLingJinJiLuFenYeresponse() {
  return {
    current: '@string(5,50)',
    'records|1-20': [HongLingJinJiLuFenYeresponse()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageLianXiRenHuaHuaTi() {
  return {
    current: '@string(5,50)',
    'records|1-20': [LianXiRenHuaHuaTi()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    current: '@string(5,50)',
    'records|1-20': [XiangMuFaCaiMengXiangQingrpcresponse()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function Comparableobject() {}
export function ContactAddReq() {
  return {
    whiteName: '@ctitle(5,10)',
    duty: '@string(5,50)',
    id: '@guid',
    isDelete: '@integer(3,1000)',
    isPrincipal: '@integer(3,1000)',
    name: '@ctitle(5,10)',
    post: '@string(5,50)',
    remark: '@string(5,50)',
    sort: '@integer(3,1000)',
    type: '@integer(3,1000)',
    value: '@string(5,50)',
  }
}
export function ContactDetailResp() {
  return {
    whiteName: '@ctitle(5,10)',
    duty: '@string(5,50)',
    id: '@guid',
    isPrincipal: '@integer(3,1000)',
    name: '@ctitle(5,10)',
    post: '@string(5,50)',
    remark: '@string(5,50)',
    sort: '@integer(3,1000)',
    type: '@integer(3,1000)',
    value: '@string(5,50)',
  }
}
export function CountCustomerHappyNumReq() {
  return {
    id: '@guid',
  }
}
export function CountCustomerHappyNumResp() {
  return {
    totalNum: '@integer(3,1000)',
    'typeNum|1-20': [CountCustomerHappyNumTypeResp()],
  }
}
export function CountCustomerHappyNumTypeResp() {
  return {
    signNum: '@integer(3,1000)',
    type: '@string(5,50)',
    unsignedNum: '@integer(3,1000)',
  }
}
export function CustomerDoorAddReq() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyPrincipal: '@string(5,50)',
    categoryName: '@ctitle(5,10)',
    city: '@city',
    'contactList|1-20': [ContactAddReq()],
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    corporateName: '@ctitle(5,10)',
    country: '@string(5,50)',
    customerSource: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    whitePrincipal: '@string(5,50)',
    doorAttr: '@string(5,50)',
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    doorStatus: '@string(5,50)',
    establishmentTime: '@datetime',
    'fileUrlList|1-20': ['@image(200x100, @color, @color)'],
    higherDoor: '@string(5,50)',
    'invoiceList|1-20': [CustomerInvoiceAddReq()],
    isImportant: '@integer(3,1000)',
    'labels|1-20': ['@string(5,50)'],
    location: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    province: '@province',
    regCatCnt: '@string(5,50)',
    orangeeredCapital: '@integer(3,1000)',
    skAchievementCnt: '@string(5,50)',
    skQualificationCnt: '@string(5,50)',
    step: '@integer(3,1000)',
  }
}
export function CustomerDoorAddResp() {
  return {
    id: '@guid',
    'list|1-20': [CustomerDoorInfoResp()],
    repeatType: '@string(5,50)',
  }
}
export function CustomerDoorDetailResp() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyPrincipal: '@string(5,50)',
    categoryName: '@ctitle(5,10)',
    city: '@city',
    'contactList|1-20': [ContactDetailResp()],
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    corporateName: '@ctitle(5,10)',
    country: '@string(5,50)',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    customerCode: '@string(5,50)',
    customerSource: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    whitePrincipal: '@string(5,50)',
    doorAttr: '@string(5,50)',
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    doorStatus: '@string(5,50)',
    establishmentTime: '@datetime',
    'fileUrlList|1-20': ['@image(200x100, @color, @color)'],
    higherDoor: '@string(5,50)',
    id: '@guid',
    'invoiceList|1-20': [CustomerInvoiceDetailResp()],
    isImportant: '@integer(3,1000)',
    'labels|1-20': [CustomerLabelResp()],
    licenseId: '@guid',
    location: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    province: '@province',
    regCatCnt: '@string(5,50)',
    orangeeredCapital: '@integer(3,1000)',
    skAchievementCnt: '@string(5,50)',
    skQualificationCnt: '@string(5,50)',
    gratefulId: '@guid',
  }
}
export function CustomerDoorFromDataReq() {
  return {
    companyName: '@ctitle(5,10)',
    companyNum: '@string(5,50)',
    size: '20',
  }
}
export function CustomerDoorFromDataResp() {
  return {
    companyEstablishDate: '@datetime',
    companyIprovinceName: '@province',
    companyKey: '@integer(3,1000)',
    companyLegalRepresentative: '@string(5,50)',
    companyLegalRepresentativePhone: '@integer(13100000000,18999999999)',
    companyName: '@ctitle(5,10)',
    companyNum: '@string(5,50)',
    companyGladCnt: '@string(5,50)',
    companyPunishmentCnt: '@string(5,50)',
    companyQualificationCnt: '@string(5,50)',
    companyOrangeGreen: '@string(5,50)',
    companyOrangeAmt: '@string(5,50)',
    companyOrangeState: '@string(5,50)',
    companyOrangerarCnt: '@string(5,50)',
    companyRewardsCnt: '@string(5,50)',
    companyScore: '@integer(3,1000)',
    tycCompanyId: '@guid',
  }
}
export function CustomerDoorInfoResp() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyPrincipal: '@string(5,50)',
    city: '@city',
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    customerCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    whitePrincipal: '@string(5,50)',
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    doorStatus: '@string(5,50)',
    establishmentTime: '@datetime',
    'fileUrlList|1-20': ['@image(200x100, @color, @color)'],
    id: '@guid',
    isCooperation: '@integer(3,1000)',
    isImportant: '@integer(3,1000)',
    label: '@string(5,50)',
    location: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    province: '@province',
    regCatCnt: '@string(5,50)',
    orangeeredCapital: '@integer(3,1000)',
    score: '@integer(3,1000)',
    signId: '@guid',
    signState: '@string(5,50)',
    signTime: '@datetime',
    skAchievementCnt: '@string(5,50)',
    skQualificationCnt: '@string(5,50)',
  }
}
export function CustomerDoorNumReq() {
  return {
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    own: '@boolean',
  }
}
export function CustomerDoorNumResp() {
  return {
    attrCountryNum: '@integer(3,1000)',
    attrGovernmentNUm: '@integer(3,1000)',
    attrPrivateNum: '@integer(3,1000)',
    attrPublicNum: '@integer(3,1000)',
    otherNum: '@integer(3,1000)',
    todayNum: '@integer(3,1000)',
  }
}
export function CustomerDoorUpReq() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyPrincipal: '@string(5,50)',
    categoryName: '@ctitle(5,10)',
    city: '@city',
    'contactList|1-20': [ContactAddReq()],
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    corporateName: '@ctitle(5,10)',
    country: '@string(5,50)',
    customerSource: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    whitePrincipal: '@string(5,50)',
    doorAttr: '@string(5,50)',
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    doorStatus: '@string(5,50)',
    establishmentTime: '@datetime',
    'fileUrlList|1-20': ['@image(200x100, @color, @color)'],
    higherDoor: '@string(5,50)',
    id: '@guid',
    'invoiceList|1-20': [CustomerInvoiceAddReq()],
    isImportant: '@integer(3,1000)',
    'labels|1-20': [CustomerLabelReq()],
    location: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    province: '@province',
    regCatCnt: '@string(5,50)',
    orangeeredCapital: '@integer(3,1000)',
    skAchievementCnt: '@string(5,50)',
    skQualificationCnt: '@string(5,50)',
    step: '@integer(3,1000)',
  }
}
export function CustomerFollowReq() {
  return {
    addr: '@string(5,50)',
    contactCatId: '@guid',
    contactCatName: '@ctitle(5,10)',
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    customerId: '@guid',
    customerType: '@string(5,50)',
    date: '@datetime',
    'fileIdList|1-20': ['@string(5,50)'],
    followType: '@string(5,50)',
  }
}
export function CustomerInvoiceAddReq() {
  return {
    blueAddr: '@string(5,50)',
    blueBank: '@string(5,50)',
    bankNo: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    id: '@guid',
    isDefault: '@integer(3,1000)',
    isDelete: '@integer(3,1000)',
    phone: '@integer(13100000000,18999999999)',
    sort: '@integer(3,1000)',
    tin: '@string(5,50)',
  }
}
export function CustomerInvoiceDetailResp() {
  return {
    blueAddr: '@string(5,50)',
    blueBank: '@string(5,50)',
    bankNo: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    id: '@guid',
    isDefault: '@integer(3,1000)',
    isDelete: '@integer(3,1000)',
    phone: '@integer(13100000000,18999999999)',
    sort: '@integer(3,1000)',
    tin: '@string(5,50)',
  }
}
export function CustomerLabelReq() {
  return {
    id: '@guid',
    labelName: '@ctitle(5,10)',
  }
}
export function CustomerLabelResp() {
  return {
    id: '@guid',
    labelName: '@ctitle(5,10)',
  }
}
export function CustomerCatAddReq() {
  return {
    achievementCnt: '@string(5,50)',
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyPrincipal: '@string(5,50)',
    'certificateList|1-20': [CustomerCatCertificateReq()],
    city: '@city',
    'contactList|1-20': [ContactAddReq()],
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    customerSource: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    whitePrincipal: '@string(5,50)',
    education: '@string(5,50)',
    doorAddr: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    'fileUrlList|1-20': ['@image(200x100, @color, @color)'],
    gender: '@string(5,50)',
    'invoiceList|1-20': [CustomerInvoiceAddReq()],
    isImportant: '@integer(3,1000)',
    'labels|1-20': ['@string(5,50)'],
    location: '@string(5,50)',
    catName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    post: '@string(5,50)',
    province: '@province',
    step: '@integer(3,1000)',
    'titleList|1-20': [CustomerCatTitleReq()],
  }
}
export function CustomerCatAddResp() {
  return {
    id: '@guid',
    'list|1-20': [CustomerCatInfoResp()],
  }
}
export function CustomerCatCertificateInfoResp() {
  return {
    createName: '@ctitle(5,10)',
    created: '@datetime',
    customerId: '@guid',
    id: '@guid',
    major: '@string(5,50)',
    name: '@ctitle(5,10)',
    pictureUrl: '@image(200x100, @color, @color)',
    orangeered: '@string(5,50)',
  }
}
export function CustomerCatCertificateReq() {
  return {
    customerId: '@guid',
    id: '@guid',
    major: '@string(5,50)',
    name: '@ctitle(5,10)',
  }
}
export function CustomerCatDetailResp() {
  return {
    achievementCnt: '@string(5,50)',
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyPrincipal: '@string(5,50)',
    'certificateList|1-20': [CustomerCatCertificateInfoResp()],
    city: '@city',
    'contactList|1-20': [ContactDetailResp()],
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    customerCode: '@string(5,50)',
    customerSource: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    whitePrincipal: '@string(5,50)',
    education: '@string(5,50)',
    doorAddr: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    'fileUrlList|1-20': ['@image(200x100, @color, @color)'],
    gender: '@string(5,50)',
    id: '@guid',
    'invoiceList|1-20': [CustomerInvoiceDetailResp()],
    isImportant: '@integer(3,1000)',
    'labels|1-20': [CustomerLabelResp()],
    location: '@string(5,50)',
    catName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    post: '@string(5,50)',
    province: '@province',
    talentId: '@guid',
    'titleList|1-20': [CustomerCatTitleInfoResp()],
  }
}
export function CustomerCatInfoResp() {
  return {
    achievementCnt: '@string(5,50)',
    addr: '@string(5,50)',
    area: '@string(5,50)',
    badBehaviorCnt: '@string(5,50)',
    blacklistRecordCnt: '@string(5,50)',
    happyPrincipal: '@string(5,50)',
    certificate: '@string(5,50)',
    city: '@city',
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    customerCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    whitePrincipal: '@string(5,50)',
    education: '@string(5,50)',
    gender: '@string(5,50)',
    goodBehaviorCnt: '@string(5,50)',
    id: '@guid',
    isCooperation: '@integer(3,1000)',
    isImportant: '@integer(3,1000)',
    label: '@string(5,50)',
    catName: '@ctitle(5,10)',
    catnelRisk: '@integer(3,1000)',
    phone: '@integer(13100000000,18999999999)',
    province: '@province',
    signId: '@guid',
    signState: '@string(5,50)',
    signTime: '@datetime',
    skCertificateCnt: '@string(5,50)',
    title: '@ctitle(5,10)',
  }
}
export function CustomerCatTitleInfoResp() {
  return {
    customerId: '@guid',
    id: '@guid',
    level: '@string(5,50)',
    major: '@string(5,50)',
    pictureUrl: '@image(200x100, @color, @color)',
  }
}
export function CustomerCatTitleReq() {
  return {
    customerId: '@guid',
    id: '@guid',
    level: '@string(5,50)',
    major: '@string(5,50)',
  }
}
export function CustomerCatUpReq() {
  return {
    achievementCnt: '@string(5,50)',
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyPrincipal: '@string(5,50)',
    'certificateList|1-20': [CustomerCatCertificateReq()],
    city: '@city',
    'contactList|1-20': [ContactAddReq()],
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    customerSource: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    whitePrincipal: '@string(5,50)',
    education: '@string(5,50)',
    doorAddr: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    'fileUrlList|1-20': ['@image(200x100, @color, @color)'],
    gender: '@string(5,50)',
    id: '@guid',
    'invoiceList|1-20': [CustomerInvoiceAddReq()],
    isImportant: '@integer(3,1000)',
    'labels|1-20': [CustomerLabelReq()],
    location: '@string(5,50)',
    catName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    post: '@string(5,50)',
    province: '@province',
    'titleList|1-20': [CustomerCatTitleReq()],
  }
}
export function DayCityReq() {
  return {
    endTime: '@datetime',
    startTime: '@datetime',
  }
}
export function DayCityResp() {
  return {
    'cityList|1-20': ['@city'],
    dayTime: '@datetime',
  }
}
export function DelReq() {
  return {
    id: '@guid',
  }
}
export function DeleteReq() {
  return {
    id: '@guid',
  }
}
export function WhiteListReq() {
  return {
    parentId: '@guid',
    scaleType: /COMPANY|DEPT/,
  }
}
export function WhiteNoteResp() {
  return {
    desktopCount: '@integer(3,1000)',
    info: WhiteResp(),
  }
}
export function WhiteReq() {
  return {
    whiteName: '@ctitle(5,10)',
    parentId: '@guid',
  }
}
export function WhiteResp() {
  return {
    ancestors: '@string(5,50)',
    authStatus: '@string(5,50)',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
    email: '@email',
    doorId: '@guid',
    id: '@guid',
    isShow: '@boolean',
    leaderDesktopId: '@guid',
    leaderDesktopName: '@ctitle(5,10)',
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
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
export function Document() {
  return {
    content: '@string(5,50)',
    id: '@guid',
    location: '@string(5,50)',
    title: '@ctitle(5,10)',
  }
}
export function DesktopListResp() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
  }
}
export function DesktopResp() {
  return {
    id: '@guid',
    mobile: '@string(5,50)',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function FailData() {
  return {
    excelNum: '@integer(3,1000)',
    firstName: '@ctitle(5,10)',
    reason: '@string(5,50)',
  }
}
export function FollowAgainReq() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
  }
}
export function FollowListReq() {
  return {
    page: '@integer(3,1000)',
    size: '20',
    taskId: '@guid',
  }
}
export function ImportExcelByUrlReq() {
  return {
    fileName: '@ctitle(5,10)',
    fileUrl: '@image(200x100, @color, @color)',
    taskType: '@integer(3,1000)',
  }
}
export function ImportListReq() {
  return {
    endTime: '@datetime',
    page: '@integer(3,1000)',
    size: '20',
    startTime: '@datetime',
    taskType: '@integer(3,1000)',
  }
}
export function InnerRpcCustomerDoorAddReq() {
  return {
    req: CustomerDoorAddReq(),
  }
}
export function InnerRpcCustomerDoorFromDataReq() {
  return {
    req: CustomerDoorFromDataReq(),
  }
}
export function InnerRpcCustomerDoorNumReq() {
  return {
    req: CustomerDoorNumReq(),
  }
}
export function InnerRpcCustomerDoorUpReq() {
  return {
    req: CustomerDoorUpReq(),
  }
}
export function InnerRpcCustomerCatAddReq() {
  return {
    req: CustomerCatAddReq(),
  }
}
export function InnerRpcCustomerCatUpReq() {
  return {
    req: CustomerCatUpReq(),
  }
}
export function InnerRpcImportExcelByUrlReq() {
  return {
    req: ImportExcelByUrlReq(),
  }
}
export function InnerRpcImportListReq() {
  return {
    req: ImportListReq(),
  }
}
export function InnerRpcPageContactReq() {
  return {
    req: PageContactReq(),
  }
}
export function InnerRpcPageCustomerDoorReq() {
  return {
    req: PageCustomerDoorReq(),
  }
}
export function InnerRpcPageCustomerCatReq() {
  return {
    req: PageCustomerCatReq(),
  }
}
export function InnerRpcSelectCustomerDoorReq() {
  return {
    req: SelectCustomerDoorReq(),
  }
}
export function InnerRpclong() {
  return {
    req: '@string(5,50)',
  }
}
export function InnerRpcGuanShuiXiangMuFaCaiMengrpcChongDong() {
  return {
    req: GuanShuiXiangMuFaCaiMengrpcChongDong(),
  }
}
export function ListDesktopReq() {
  return {
    whiteId: '@guid',
    keyword: '@string(5,50)',
  }
}
export function ListLocationReq() {
  return {
    date: '@datetime',
    followerId: '@guid',
  }
}
export function LocationAddReq() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    location: '@string(5,50)',
    province: '@province',
  }
}
export function LocationDateInfoResp() {
  return {
    'addrList|1-20': ['@string(5,50)'],
    addrNum: '@integer(3,1000)',
    addrStr: '@string(5,50)',
    happyNum: '@integer(3,1000)',
    desktopId: '@guid',
    desktopName: '@ctitle(5,10)',
    monthDay: '@string(5,50)',
    provinceCity: '@province',
    'provinceCityList|1-20': ['@province'],
  }
}
export function LocationInfoResp() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    created: '@datetime',
    desktopId: '@guid',
    desktopName: '@ctitle(5,10)',
    fileId: '@guid',
    location: '@string(5,50)',
    province: '@province',
  }
}
export function PageHappyMixReq() {
  return {
    coordinate: '@string(5,50)',
    distance: '@string(5,50)',
    orderColumn: '@string(5,50)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    size: '20',
    type: '@integer(3,1000)',
  }
}
export function PageHappyResp() {
  return {
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    dataLocation: '@string(5,50)',
    distance: '@string(5,50)',
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    hasCustomer: '@boolean',
    id: '@guid',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@datetime',
    lastFollowTime: '@datetime',
    planId: '@guid',
    planScore: '@string(5,50)',
    recommendedReason: '@string(5,50)',
    signId: '@guid',
    source: '@string(5,50)',
    gratefulId: '@guid',
    thirdId: '@guid',
  }
}
export function PageContactReq() {
  return {
    doorId: '@guid',
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function PageCustomerDoorReq() {
  return {
    addr: '@string(5,50)',
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    customerCode: '@string(5,50)',
    door: '@string(5,50)',
    doorAttr: '@string(5,50)',
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    doorStatus: '@string(5,50)',
    establishmentTimeEnd: '@datetime',
    establishmentTimeStart: '@datetime',
    'labelList|1-20': ['@string(5,50)'],
    orderColumn: '@string(5,50)',
    orderType: '@integer(3,1000)',
    own: '@boolean',
    page: '@integer(3,1000)',
    province: '@province',
    regCatCntMax: '@string(5,50)',
    regCatCntMin: '@string(5,50)',
    orangeeredCapitalMax: '@integer(3,1000)',
    orangeeredCapitalMin: '@integer(3,1000)',
    scoreMax: '@integer(3,1000)',
    scoreMin: '@integer(3,1000)',
    sign: '@string(5,50)',
    signDateMax: '@datetime',
    signDateMin: '@datetime',
    signState: '@string(5,50)',
    size: '20',
    skAchievementCntMax: '@string(5,50)',
    skAchievementCntMin: '@string(5,50)',
    skQualificationCntMax: '@string(5,50)',
    skQualificationCntMin: '@string(5,50)',
  }
}
export function PageCustomerCatReq() {
  return {
    achievementCntMax: '@string(5,50)',
    achievementCntMin: '@string(5,50)',
    addr: '@string(5,50)',
    certificateMajor: '@string(5,50)',
    certificateName: '@ctitle(5,10)',
    'certificateNameList|1-20': ['@ctitle(5,10)'],
    customerCode: '@string(5,50)',
    'labelList|1-20': ['@string(5,50)'],
    level: '@string(5,50)',
    'levelList|1-20': ['@string(5,50)'],
    major: '@string(5,50)',
    'majorList|1-20': ['@string(5,50)'],
    orderColumn: '@string(5,50)',
    orderType: '@integer(3,1000)',
    own: '@boolean',
    page: '@integer(3,1000)',
    cat: '@string(5,50)',
    catName: '@ctitle(5,10)',
    catnelRisk: '@boolean',
    phone: '@integer(13100000000,18999999999)',
    province: '@province',
    sign: '@string(5,50)',
    signDateMax: '@datetime',
    signDateMin: '@datetime',
    signState: '@string(5,50)',
    size: '20',
    skCertificateCntMax: '@string(5,50)',
    skCertificateCntMin: '@string(5,50)',
  }
}
export function PageDoorHappyPoolResp() {
  return {
    addr: '@string(5,50)',
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: '@string(5,50)',
    corpCertArray: '@string(5,50)',
    corpCertCnt: '@integer(3,1000)',
    corporateName: '@ctitle(5,10)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    dataLocation: '@string(5,50)',
    distance: '@string(5,50)',
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    doorStatus: '@string(5,50)',
    doorType: '@string(5,50)',
    establishmentTime: '@datetime',
    filialeCompanyCnt: '@integer(3,1000)',
    filialeCompanyNameArray: '@ctitle(5,10)',
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    hasCustomer: '@boolean',
    id: '@guid',
    industryType: '@string(5,50)',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@datetime',
    lastFollowTime: '@datetime',
    phone: '@integer(13100000000,18999999999)',
    planId: '@guid',
    planScore: '@string(5,50)',
    qualicaficationArray: '@string(5,50)',
    qualicaficationCnt: '@integer(3,1000)',
    recommendedReason: '@string(5,50)',
    regCatCnt: '@string(5,50)',
    orangeeredCapital: '@string(5,50)',
    score: '@integer(3,1000)',
    signId: '@guid',
    skAchievementCnt: '@string(5,50)',
    skQualificationCnt: '@string(5,50)',
    source: '@string(5,50)',
    gratefulId: '@guid',
    thirdId: '@guid',
  }
}
export function PageLocationByTaskReq() {
  return {
    desktopName: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
    taskId: '@guid',
  }
}
export function PageLocationReq() {
  return {
    area: '@string(5,50)',
    city: '@city',
    desktopName: '@ctitle(5,10)',
    endTime: '@datetime',
    'followerIdList|1-20': ['@string(5,50)'],
    page: '@integer(3,1000)',
    province: '@province',
    size: '20',
    startTime: '@datetime',
  }
}
export function PageCatHappyPoolResp() {
  return {
    achievementCnt: '@string(5,50)',
    addr: '@string(5,50)',
    age: '@integer(3,1000)',
    area: '@string(5,50)',
    badBehaviorCnt: '@string(5,50)',
    blacklistRecordCnt: '@string(5,50)',
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    certificateName: '@ctitle(5,10)',
    certificateNum: '@string(5,50)',
    city: '@city',
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerMobile: '@string(5,50)',
    customerName: '@ctitle(5,10)',
    customerType: '@string(5,50)',
    dataLocation: '@string(5,50)',
    distance: '@string(5,50)',
    education: '@string(5,50)',
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    gender: '@string(5,50)',
    goodBehaviorCnt: '@string(5,50)',
    hasCustomer: '@boolean',
    id: '@guid',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    isRetire: '@integer(3,1000)',
    lastFetchTime: '@datetime',
    lastFollowTime: '@datetime',
    licenseId: '@guid',
    catName: '@ctitle(5,10)',
    catnelRisk: '@integer(3,1000)',
    phone: '@integer(13100000000,18999999999)',
    planId: '@guid',
    planScore: '@string(5,50)',
    province: '@province',
    recommendedReason: '@string(5,50)',
    signId: '@guid',
    skCertificateCnt: '@string(5,50)',
    source: '@string(5,50)',
    gratefulId: '@guid',
    thirdId: '@guid',
    title: '@ctitle(5,10)',
    workYear: '@integer(3,1000)',
  }
}
export function PagePlanResp() {
  return {
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    coordinate: '@string(5,50)',
    created: '@datetime',
    distance: '@string(5,50)',
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    id: '@guid',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@datetime',
    lastFollowTime: '@datetime',
    planId: '@guid',
    planScore: '@string(5,50)',
    planSource: '@string(5,50)',
    planStatus: '@string(5,50)',
    poolType: '@string(5,50)',
    recommendedReason: '@string(5,50)',
    relStatus: '@string(5,50)',
    relType: '@string(5,50)',
    source: '@string(5,50)',
    gratefulId: '@guid',
  }
}
export function PageGladHappyPoolResp() {
  return {
    agencies: '@string(5,50)',
    agenciesAddr: '@string(5,50)',
    agenciesAddrCoordinate: '@string(5,50)',
    agenciesAddrLat: '@string(5,50)',
    agenciesAddrLng: '@string(5,50)',
    agenciesArea: '@string(5,50)',
    agenciesCity: '@city',
    agenciesCountry: '@string(5,50)',
    agenciesPhone: '@integer(13100000000,18999999999)',
    agenciesProvince: '@province',
    biddingCorpAddr: '@string(5,50)',
    biddingCorpAddrLat: '@string(5,50)',
    biddingCorpAddrLng: '@string(5,50)',
    biddingCorpArea: '@string(5,50)',
    biddingCorpCity: '@city',
    biddingCorpName: '@ctitle(5,10)',
    biddingCorpPhone: '@integer(13100000000,18999999999)',
    biddingCorpProvince: '@province',
    biddingEndTime: '@datetime',
    biddingOpeningTime: '@datetime',
    biddingStartTime: '@datetime',
    biddingType: '@string(5,50)',
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    dataLocation: '@string(5,50)',
    distance: '@string(5,50)',
    fileDownloadEndTime: '@datetime',
    fileDownloadStartTime: '@datetime',
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    hasCustomer: '@boolean',
    id: '@guid',
    industryType: '@string(5,50)',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@datetime',
    lastFollowTime: '@datetime',
    phone: '@integer(13100000000,18999999999)',
    planId: '@guid',
    planScore: '@string(5,50)',
    gladBudget: '@string(5,50)',
    gladName: '@ctitle(5,10)',
    gladType: '@string(5,50)',
    publishTime: '@datetime',
    quoteBeginTime: '@datetime',
    quoteEndTime: '@datetime',
    recommendedReason: '@string(5,50)',
    signId: '@guid',
    signUpBeginTime: '@datetime',
    signUpEndTime: '@datetime',
    source: '@string(5,50)',
    gratefulId: '@guid',
    thirdId: '@guid',
    valid: '@guid',
  }
}
export function GladSignInfoResp() {
  return {
    applyKeyBorardId: '@guid',
    applyKeyBorardName: '@ctitle(5,10)',
    belongCompany: '@string(5,50)',
    belongCompanyId: '@guid',
    bidEndDate: '@datetime',
    bidOpenDate: '@datetime',
    bidStartDate: '@datetime',
    biddingAgencyId: '@guid',
    biddingAgencyName: '@ctitle(5,10)',
    happyStatus: '@string(5,50)',
    cainfoId: '@guid',
    cainfoName: '@ctitle(5,10)',
    city: '@city',
    county: '@county',
    customerId: '@guid',
    customerName: '@ctitle(5,10)',
    isBid: '@guid',
    isPreApproval: '@boolean',
    paramsOneId: '@guid',
    paramsOneName: '@ctitle(5,10)',
    gladName: '@ctitle(5,10)',
    province: '@province',
    street: '@string(5,50)',
    templateId: '@guid',
    templateName: '@ctitle(5,10)',
    township: '@string(5,50)',
  }
}
export function PunchPageReq() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function PunchPageResp() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyId: '@guid',
    happyType: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    createName: '@ctitle(5,10)',
    'imageUrlList|1-20': ['@image(200x100, @color, @color)'],
    location: '@string(5,50)',
    province: '@province',
    punchTime: '@datetime',
  }
}
export function PunchReq() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyId: '@guid',
    happyType: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    date: '@datetime',
    'fileIdList|1-20': ['@string(5,50)'],
    followResult: '@string(5,50)',
    location: '@string(5,50)',
    province: '@province',
  }
}
export function RankResp() {
  return {
    'list|1-20': [PaiMingShuJuRankDataResp()],
    rank: WoCongMingPaiMingMyRankResp(),
  }
}
export function ReceiveHappyReq() {
  return {
    'happyList|1-20': [''],
    happyReceiveSource: '@string(5,50)',
    happyType: '@string(5,50)',
  }
}
export function Recommended2PlanReq() {
  return {
    date: '@datetime',
  }
}
export function SelectCustomerDoorReq() {
  return {
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
  }
}
export function SelectCustomerDoorGratefulReq() {
  return {
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    'gratefulIdList|1-20': ['@string(5,50)'],
  }
}
export function TaskAddrResp() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    date: '@datetime',
    location: '@string(5,50)',
    province: '@province',
  }
}
export function TaskChangeStatusReq() {
  return {
    id: '@guid',
    taskStatus: '@string(5,50)',
  }
}
export function TaskCreateAddrReq() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    location: '@string(5,50)',
    province: '@province',
    sort: '@integer(3,1000)',
  }
}
export function TaskCreateWhiteReq() {
  return {
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
  }
}
export function TaskCreateCatReq() {
  return {
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
  }
}
export function TaskCreateReq() {
  return {
    'addrList|1-20': [TaskCreateAddrReq()],
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean',
    'whiteList|1-20': [TaskCreateWhiteReq()],
    endTime: '@datetime',
    name: '@ctitle(5,10)',
    'catList|1-20': [TaskCreateCatReq()],
    startTime: '@datetime',
    taskType: '@string(5,50)',
  }
}
export function TaskWhiteResp() {
  return {
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
  }
}
export function TaskInfoResp() {
  return {
    'addrList|1-20': [TaskAddrResp()],
    allDays: '@string(5,50)',
    createId: '@guid',
    created: '@datetime',
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean',
    days: '@string(5,50)',
    'whiteList|1-20': [TaskWhiteResp()],
    endTime: '@datetime',
    id: '@guid',
    isMyCreated: '@boolean',
    name: '@ctitle(5,10)',
    'catList|1-20': [TaskCatResp()],
    startTime: '@datetime',
    taskStatus: '@string(5,50)',
    taskType: '@string(5,50)',
  }
}
export function TaskModifyReq() {
  return {
    'addrList|1-20': [TaskCreateAddrReq()],
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean',
    'whiteList|1-20': [TaskCreateWhiteReq()],
    endTime: '@datetime',
    id: '@guid',
    name: '@ctitle(5,10)',
    'catList|1-20': [TaskCreateCatReq()],
    startTime: '@datetime',
    taskType: '@string(5,50)',
  }
}
export function TaskPageListReq() {
  return {
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    endTime: '@datetime',
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
    startTime: '@datetime',
    taskStatus: '@string(5,50)',
    type: '@integer(3,1000)',
  }
}
export function TaskPageListResp() {
  return {
    'addrList|1-20': [TaskAddrResp()],
    allDays: '@string(5,50)',
    createId: '@guid',
    created: '@datetime',
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean',
    days: '@string(5,50)',
    'whiteList|1-20': [TaskWhiteResp()],
    endTime: '@datetime',
    id: '@guid',
    isMyCreated: '@boolean',
    name: '@ctitle(5,10)',
    'catList|1-20': [TaskCatResp()],
    progress: TaskProgressResp(),
    startTime: '@datetime',
    taskStatus: '@string(5,50)',
    taskType: '@string(5,50)',
  }
}
export function TaskCatResp() {
  return {
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
  }
}
export function TaskProgressDetailReq() {
  return {
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    id: '@guid',
  }
}
export function TaskProgressDetailResp() {
  return {
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean',
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    lastLocation: '@string(5,50)',
    'locationDataList|1-20': [TaskAddrResp()],
    phone: '@integer(13100000000,18999999999)',
    progress: TaskProgressResp(),
    taskStatus: '@string(5,50)',
  }
}
export function TaskProgressCatResp() {
  return {
    allDays: '@string(5,50)',
    allTasks: '@string(5,50)',
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean',
    days: '@string(5,50)',
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    taskFollow: '@string(5,50)',
    taskStatus: '@string(5,50)',
    todayAllTask: '@string(5,50)',
    todayFollow: '@string(5,50)',
    yesterdayAllTask: '@string(5,50)',
    yesterdayFollow: '@string(5,50)',
  }
}
export function TaskProgressResp() {
  return {
    allDays: '@string(5,50)',
    allTasks: '@string(5,50)',
    days: '@string(5,50)',
    taskFollow: '@string(5,50)',
    todayAllTask: '@string(5,50)',
    todayFollow: '@string(5,50)',
    yesterdayAllTask: '@string(5,50)',
    yesterdayFollow: '@string(5,50)',
  }
}
export function TravelLoginReq() {
  return {
    entrance: '@integer(3,1000)',
    plat: '@integer(3,1000)',
  }
}
export function TravelLoginResp() {
  return {
    redirectUrl: '@image(200x100, @color, @color)',
  }
}
export function TreeNodeConfig() {
  return {
    childrenKey: '@string(5,50)',
    deep: '@integer(3,1000)',
    idKey: '@string(5,50)',
    nameKey: '@ctitle(5,10)',
    parentIdKey: '@string(5,50)',
    weightKey: '@string(5,50)',
  }
}
export function VerifyRepeatHappyReq() {
  return {
    happyType: '@string(5,50)',
    code: 200,
    name: '@ctitle(5,10)',
  }
}
export function VerifyRepeatCustomerReq() {
  return {
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    id: '@guid',
  }
}
export function VerifyRepeatCatCustomerReq() {
  return {
    id: '@guid',
    catName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
  }
}
export function ShangChuanWenJianFanHui() {
  return {
    fileUrl: '@image(200x100, @color, @color)',
    id: '@guid',
  }
}
export function BuZaiGenJin() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    flowType: '@string(5,50)',
    noFollowReason: '@string(5,50)',
  }
}
export function ZhiXieChangFaCaiMengXiangQingrpcresponse() {
  return {
    addr: '@string(5,50)',
    categoryName: '@ctitle(5,10)',
    contactMobile: '@string(5,50)',
    contactName: '@ctitle(5,10)',
    corporateName: '@ctitle(5,10)',
    doorCode: '@string(5,50)',
    doorId: '@guid',
    doorName: '@ctitle(5,10)',
    doorStatus: '@string(5,50)',
    establishmentTime: '@datetime',
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    regCatCnt: '@string(5,50)',
    orangeeredCapital: '@string(5,50)',
    score: '@integer(3,1000)',
    skAchievementCnt: '@string(5,50)',
    skQualificationCnt: '@string(5,50)',
  }
}
export function GuanLianFaCaiMengRequest() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    thirdId: '@guid',
  }
}
export function GuanLianFaCaiMengResponse() {}
export function FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
  return {
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    dataLocation: '@string(5,50)',
    distance: '@string(5,50)',
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    hasCustomer: '@boolean',
    id: '@guid',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@datetime',
    lastFollowTime: '@datetime',
    catName: '@ctitle(5,10)',
    planId: '@guid',
    planScore: '@string(5,50)',
    recommendedReason: '@string(5,50)',
    signId: '@guid',
    source: '@string(5,50)',
    gratefulId: '@guid',
    thirdId: '@guid',
  }
}
export function FenYeLvYouRenCaiFaCaiMengJianDanShuJu() {
  return {
    addr: '@string(5,50)',
    'addrList|1-20': [DiZhi()],
    area: '@string(5,50)',
    happyStatus: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    distance: '@string(5,50)',
    followResult: '@string(5,50)',
    followType: '@string(5,50)',
    'followTypeList|1-20': ['@string(5,50)'],
    followerId: '@guid',
    isRead: '@integer(3,1000)',
    name: '@ctitle(5,10)',
    orderColumn: '@string(5,50)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    province: '@province',
    receiveType: '@string(5,50)',
    size: '20',
    source: '@string(5,50)',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouRenCaiFaCaiMengGongHai() {
  return {
    achievementCntMax: '@string(5,50)',
    achievementCntMin: '@string(5,50)',
    addr: '@string(5,50)',
    'addrList|1-20': [DiZhi()],
    area: '@string(5,50)',
    happyStatus: '@string(5,50)',
    'certificateList|1-20': ['@string(5,50)'],
    certificateMajor: '@string(5,50)',
    certificateName: '@ctitle(5,10)',
    city: '@city',
    coordinate: '@string(5,50)',
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    distance: '@string(5,50)',
    followResult: '@string(5,50)',
    followType: '@string(5,50)',
    'followTypeList|1-20': ['@string(5,50)'],
    followerId: '@guid',
    isRead: '@integer(3,1000)',
    level: '@string(5,50)',
    'levelList|1-20': ['@string(5,50)'],
    major: '@string(5,50)',
    'majorList|1-20': ['@string(5,50)'],
    name: '@ctitle(5,10)',
    orderColumn: '@string(5,50)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    province: '@province',
    receiveType: '@string(5,50)',
    size: '20',
    skCertificateCntMax: '@string(5,50)',
    skCertificateCntMin: '@string(5,50)',
    source: '@string(5,50)',
    taskId: '@guid',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouRenCaiFaCaiMengTuiJian() {
  return {
    achievementCntMax: '@string(5,50)',
    achievementCntMin: '@string(5,50)',
    addr: '@string(5,50)',
    'addrList|1-20': [DiZhi()],
    area: '@string(5,50)',
    certificateMajor: '@string(5,50)',
    certificateName: '@ctitle(5,10)',
    city: '@city',
    coordinate: '@string(5,50)',
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    distance: '@string(5,50)',
    followResult: '@string(5,50)',
    followType: '@string(5,50)',
    'followTypeList|1-20': ['@string(5,50)'],
    level: '@string(5,50)',
    'levelList|1-20': ['@string(5,50)'],
    major: '@string(5,50)',
    'majorList|1-20': ['@string(5,50)'],
    name: '@ctitle(5,10)',
    orderColumn: '@string(5,50)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    catnelRisk: '@boolean',
    province: '@province',
    size: '20',
    skCertificateCntMax: '@string(5,50)',
    skCertificateCntMin: '@string(5,50)',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouRenWu() {
  return {
    cnt: '@string(5,50)',
    handlerId: '@guid',
    handlerName: '@ctitle(5,10)',
    lastPunchAddr: '@string(5,50)',
    'planHappyList|1-20': [PagePlanResp()],
    planCount: '@integer(3,1000)',
    planKeyBorardId: '@guid',
    'signHappyList|1-20': [PagePlanResp()],
    signCount: '@integer(3,1000)',
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
  return {
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    dataLocation: '@string(5,50)',
    distance: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    hasCustomer: '@boolean',
    id: '@guid',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@datetime',
    lastFollowTime: '@datetime',
    planId: '@guid',
    planScore: '@string(5,50)',
    recommendedReason: '@string(5,50)',
    signId: '@guid',
    source: '@string(5,50)',
    gratefulId: '@guid',
    thirdId: '@guid',
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengJianDanShuJu() {
  return {
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengGongHai() {
  return {
    addr: '@string(5,50)',
    'addrList|1-20': [DiZhi()],
    area: '@string(5,50)',
    happyStatus: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    'corpCertList|1-20': ['@string(5,50)'],
    corpCertMax: '@string(5,50)',
    corpCertMin: '@string(5,50)',
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    distance: '@string(5,50)',
    endTime: '@datetime',
    doorStatus: '@string(5,50)',
    'doorType|1-20': ['@string(5,50)'],
    'doorTypeList|1-20': ['@string(5,50)'],
    filialeCompanyMax: '@string(5,50)',
    filialeCompanyMin: '@string(5,50)',
    followResult: '@string(5,50)',
    followType: '@string(5,50)',
    'followTypeList|1-20': ['@string(5,50)'],
    followerId: '@guid',
    'industryType|1-20': ['@string(5,50)'],
    isRead: '@integer(3,1000)',
    'lackCorpCertList|1-20': ['@string(5,50)'],
    'lackQualicaficationList|1-20': ['@string(5,50)'],
    name: '@ctitle(5,10)',
    orderColumn: '@string(5,50)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    province: '@province',
    'qualicaficationList|1-20': ['@string(5,50)'],
    qualicaficationMax: '@string(5,50)',
    qualicaficationMin: '@string(5,50)',
    receiveType: '@string(5,50)',
    regCatCntMax: '@string(5,50)',
    regCatCntMin: '@string(5,50)',
    orangeeredCapitalMax: '@string(5,50)',
    orangeeredCapitalMin: '@string(5,50)',
    scoreMax: '@integer(3,1000)',
    scoreMin: '@integer(3,1000)',
    size: '20',
    skAchievementCntMax: '@string(5,50)',
    skAchievementCntMin: '@string(5,50)',
    skQualificationCntMax: '@string(5,50)',
    skQualificationCntMin: '@string(5,50)',
    source: '@string(5,50)',
    startTime: '@datetime',
    taskId: '@guid',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengTuiJian() {
  return {
    addr: '@string(5,50)',
    'addrList|1-20': [DiZhi()],
    area: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    'corpCertList|1-20': ['@string(5,50)'],
    corpCertMax: '@string(5,50)',
    corpCertMin: '@string(5,50)',
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    distance: '@string(5,50)',
    endTime: '@datetime',
    doorStatus: '@string(5,50)',
    'filialeCompanyList|1-20': ['@string(5,50)'],
    filialeCompanyMax: '@string(5,50)',
    filialeCompanyMin: '@string(5,50)',
    followResult: '@string(5,50)',
    followType: '@string(5,50)',
    'followTypeList|1-20': ['@string(5,50)'],
    name: '@ctitle(5,10)',
    orderColumn: '@string(5,50)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    province: '@province',
    'qualicaficationList|1-20': ['@string(5,50)'],
    qualicaficationMax: '@string(5,50)',
    qualicaficationMin: '@string(5,50)',
    regCatCntMax: '@string(5,50)',
    regCatCntMin: '@string(5,50)',
    orangeeredCapitalMax: '@string(5,50)',
    orangeeredCapitalMin: '@string(5,50)',
    scoreMax: '@integer(3,1000)',
    scoreMin: '@integer(3,1000)',
    size: '20',
    skAchievementCntMax: '@string(5,50)',
    skAchievementCntMin: '@string(5,50)',
    skQualificationCntMax: '@string(5,50)',
    skQualificationCntMin: '@string(5,50)',
    startTime: '@datetime',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
  return {
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    'contactPhoneList|1-20': [LianXiRenHuaHuaTi()],
    coordinate: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    dataLocation: '@string(5,50)',
    distance: '@string(5,50)',
    'followInfoList|1-20': [HuaHuaTiQingQiu()],
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    hasCustomer: '@boolean',
    id: '@guid',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@datetime',
    lastFollowTime: '@datetime',
    planId: '@guid',
    planScore: '@string(5,50)',
    gladName: '@ctitle(5,10)',
    recommendedReason: '@string(5,50)',
    signId: '@guid',
    source: '@string(5,50)',
    gratefulId: '@guid',
    thirdId: '@guid',
  }
}
export function FenYeLvYouXiangMuFaCaiMengJianDanShuJu() {
  return {
    addr: '@string(5,50)',
    'addrList|1-20': [DiZhi()],
    area: '@string(5,50)',
    happyStatus: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    distance: '@string(5,50)',
    followResult: '@string(5,50)',
    followType: '@string(5,50)',
    'followTypeList|1-20': ['@string(5,50)'],
    followerId: '@guid',
    isRead: '@integer(3,1000)',
    name: '@ctitle(5,10)',
    orderColumn: '@string(5,50)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    province: '@province',
    receiveType: '@string(5,50)',
    size: '20',
    source: '@string(5,50)',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouXiangMuFaCaiMengTuiJian() {
  return {
    addr: '@string(5,50)',
    'addrList|1-20': [DiZhi()],
    area: '@string(5,50)',
    biddingType: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    distance: '@string(5,50)',
    followResult: '@string(5,50)',
    followType: '@string(5,50)',
    'followTypeList|1-20': ['@string(5,50)'],
    'industryTypeList|1-20': ['@string(5,50)'],
    name: '@ctitle(5,10)',
    orderColumn: '@string(5,50)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    gladBudgetMax: '@string(5,50)',
    gladBudgetMin: '@string(5,50)',
    'gladTypeList|1-20': ['@string(5,50)'],
    province: '@province',
    publishEndTime: '@datetime',
    publishStartTime: '@datetime',
    signUpBeginTime: '@datetime',
    signUpEndTime: '@datetime',
    size: '20',
    type: '@integer(3,1000)',
    valid: '@guid',
  }
}
export function HuaHuaTiQingQiu() {
  return {
    addr: '@string(5,50)',
    happyId: '@guid',
    happyName: '@ctitle(5,10)',
    happyStatus: '@string(5,50)',
    happyType: '@string(5,50)',
    contactCatId: '@guid',
    contactCatName: '@ctitle(5,10)',
    contactCatNum: '@string(5,50)',
    contactCatType: '@integer(3,1000)',
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    followResult: '@string(5,50)',
    followTime: '@datetime',
    followType: '@string(5,50)',
    follower: '@string(5,50)',
    id: '@guid',
    'imageUrlList|1-20': ['@image(200x100, @color, @color)'],
  }
}
export function YuMiHuaHuaTiQingQiu() {
  return {
    mobile: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    keyBorardName: '@ctitle(5,10)',
  }
}
export function FaCaiMengGenJinJiLuQingQiu() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    'flowType|1-20': ['@string(5,50)'],
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function DiZhi() {
  return {
    area: '@string(5,50)',
    city: '@city',
    province: '@province',
  }
}
export function JiQiRenGenJinJiLuXiangYing() {
  return {
    addr: '@string(5,50)',
    contactCatId: '@guid',
    contactCatName: '@ctitle(5,10)',
    contactCatNum: '@string(5,50)',
    contactCatType: '@integer(3,1000)',
    content: '@string(5,50)',
    coordinate: '@string(5,50)',
    customerId: '@guid',
    customerName: '@ctitle(5,10)',
    customerType: '@string(5,50)',
    followResult: '@string(5,50)',
    followTime: '@datetime',
    followType: '@string(5,50)',
    follower: '@string(5,50)',
    id: '@guid',
    'imageUrlList|1-20': ['@image(200x100, @color, @color)'],
  }
}
export function JiQiRenGenJinJiLuQingQiu() {
  return {
    customerId: '@guid',
    customerType: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function DaoRuHuaHuaTiXiangYing() {
  return {
    'failData|1-20': [FailData()],
    failNum: '@integer(3,1000)',
    fileName: '@ctitle(5,10)',
    fileUrl: '@image(200x100, @color, @color)',
    importTime: '@datetime',
    operator: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    status: '@integer(3,1000)',
    successNum: '@integer(3,1000)',
  }
}
export function DaoRuHuaHuaTiQingQiu() {
  return {
    endTime: '@datetime',
    page: '@integer(3,1000)',
    size: '20',
    startTime: '@datetime',
    taskType: '@integer(3,1000)',
  }
}
export function WoCongMingFaCaiMengQuanJuFenLei() {
  return {
    happyType: '@string(5,50)',
  }
}
export function WoCongMingPaiMingMyRankResp() {
  return {
    dealData: '@integer(3,1000)',
    dealDataRank: '@string(5,50)',
    followData: '@integer(3,1000)',
    followDataRank: '@string(5,50)',
    newData: '@integer(3,1000)',
    newDataRank: '@string(5,50)',
  }
}
export function PaiMingShuJuRankDataResp() {
  return {
    dealData: '@integer(3,1000)',
    followData: '@integer(3,1000)',
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    newData: '@integer(3,1000)',
  }
}
export function PaiMingTongJiPieDataReq() {
  return {
    beginTime: '@datetime',
    endTime: '@datetime',
  }
}
export function PaiMingTongJiRankDataReq() {
  return {
    orderColum: '@string(5,50)',
  }
}
export function SouSuoRenCaiJiQiRenrequest() {
  return {
    page: '@integer(3,1000)',
    catName: '@ctitle(5,10)',
    size: '20',
  }
}
export function SouSuoRenCaiJiQiRenresponse() {
  return {
    id: '@guid',
    catName: '@ctitle(5,10)',
  }
}
export function SouSuoZhiXieChangJiQiRenrequest() {
  return {
    doorName: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function SouSuoZhiXieChangJiQiRenresponse() {
  return {
    doorName: '@ctitle(5,10)',
    id: '@guid',
  }
}
export function CaoZuoRiZhiFenYerequest() {
  return {
    bizId: '@guid',
    bizType: '@string(5,50)',
    operatorId: '@guid',
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function CaoZuoRiZhiFenYeresponse() {
  return {
    content: '@string(5,50)',
    logId: '@guid',
    operateTime: '@datetime',
    operateType: '@string(5,50)',
    operator: '@string(5,50)',
  }
}
export function GuanShuiXiangMuFaCaiMengrpcChongDong() {
  return {
    agencies: '@string(5,50)',
    agenciesAddr: '@string(5,50)',
    agenciesAddrCoordinate: '@string(5,50)',
    agenciesAddrLat: '@string(5,50)',
    agenciesAddrLng: '@string(5,50)',
    agenciesArea: '@string(5,50)',
    agenciesCity: '@city',
    agenciesCountry: '@string(5,50)',
    agenciesPhone: '@integer(13100000000,18999999999)',
    agenciesProvince: '@province',
    biddingCorpAddr: '@string(5,50)',
    biddingCorpAddrCoordinate: '@string(5,50)',
    biddingCorpAddrLat: '@string(5,50)',
    biddingCorpAddrLng: '@string(5,50)',
    biddingCorpArea: '@string(5,50)',
    biddingCorpCity: '@city',
    biddingCorpCountry: '@string(5,50)',
    biddingCorpName: '@ctitle(5,10)',
    biddingCorpPhone: '@integer(13100000000,18999999999)',
    biddingCorpProvince: '@province',
    biddingEndTime: '@datetime',
    biddingOpeningTime: '@datetime',
    biddingStartTime: '@datetime',
    biddingType: '@string(5,50)',
    fileDownloadEndTime: '@datetime',
    fileDownloadStartTime: '@datetime',
    industryType: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    gladBudget: '@string(5,50)',
    gladName: '@ctitle(5,10)',
    gladNum: '@string(5,50)',
    gladType: '@string(5,50)',
  }
}
export function GengGaiPaiXuDuiXiang() {
  return {
    'list|1-20': [HappyPlanScoreListReq()],
  }
}
export function ZhuZhuangTuTongJiHistogramDataReq() {
  return {
    happyType: '@string(5,50)',
    dateType: '@datetime',
  }
}
export function TianJiaLianXiRenQingQiu() {
  return {
    name: '@ctitle(5,10)',
    relId: '@guid',
    relType: '@integer(3,1000)',
    remark: '@string(5,50)',
    type: '@integer(3,1000)',
    value: '@string(5,50)',
  }
}
export function HongLingJinRequest() {
  return {
    happyId: '@guid',
    happySource: '@string(5,50)',
    happyType: '@string(5,50)',
    customerId: '@guid',
    customerType: '@string(5,50)',
    radarHappyId: '@guid',
    signType: '@string(5,50)',
  }
}
export function HongLingJinJieGuoresponse() {
  return {
    happyId: '@guid',
    mobile: '@string(5,50)',
    signId: '@guid',
  }
}
export function HongLingJinJiLuFenYerequest() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    customerId: '@guid',
    customerType: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function HongLingJinJiLuFenYeresponse() {
  return {
    happyId: '@guid',
    happyName: '@ctitle(5,10)',
    happyType: '@string(5,50)',
    content: '@string(5,50)',
    created: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    dealTime: '@datetime',
    dealType: '@string(5,50)',
    handler: '@string(5,50)',
    handlerId: '@guid',
    id: '@guid',
    schedule: '@string(5,50)',
    signingType: '@string(5,50)',
    thirdId: '@guid',
  }
}
export function TongJiShuJuHistogramDataResp() {
  return {
    dealData: '@integer(3,1000)',
    followData: '@integer(3,1000)',
    invalidData: '@integer(3,1000)',
    newData: '@integer(3,1000)',
  }
}
export function TongJiShuJuHistogramResp() {
  return {
    data: TongJiShuJuHistogramDataResp(),
    label: '@string(5,50)',
  }
}
export function TongJiShuJuPieDataResp() {
  return {
    beforeTotal: '@integer(3,1000)',
    compareBefore: '@string(5,50)',
    dealData: '@integer(3,1000)',
    doorData: '@integer(3,1000)',
    followData: '@integer(3,1000)',
    newData: '@integer(3,1000)',
    catData: '@integer(3,1000)',
    gladData: '@integer(3,1000)',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function LianXiRenHuaHuaTi() {
  return {
    addDate: '@datetime',
    addName: '@ctitle(5,10)',
    id: '@guid',
    name: '@ctitle(5,10)',
    remark: '@string(5,50)',
    type: '@integer(3,1000)',
    value: '@string(5,50)',
  }
}
export function LianXiRenHuaHuaTiQingQiu() {
  return {
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    relId: '@guid',
    relType: '@integer(3,1000)',
    size: '20',
    type: '@integer(3,1000)',
  }
}
export function JieChuHongLingJinrequest() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
  }
}
export function DuRuWenJianXiangYing() {
  return {
    id: '@guid',
  }
}
export function ZhuanRangQingQiu() {
  return {
    'happyId|1-20': ['@guid'],
    happyType: '@string(5,50)',
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
  }
}
export function XiangMuFaCaiMengXiuGairpcrequest() {
  return {
    agencies: '@string(5,50)',
    agenciesAddr: '@string(5,50)',
    agenciesAddrCoordinate: '@string(5,50)',
    agenciesAddrLat: '@string(5,50)',
    agenciesAddrLng: '@string(5,50)',
    agenciesArea: '@string(5,50)',
    agenciesCity: '@city',
    agenciesCountry: '@string(5,50)',
    agenciesPhone: '@integer(13100000000,18999999999)',
    agenciesProvince: '@province',
    biddingCorpAddr: '@string(5,50)',
    biddingCorpAddrCoordinate: '@string(5,50)',
    biddingCorpAddrLat: '@string(5,50)',
    biddingCorpAddrLng: '@string(5,50)',
    biddingCorpArea: '@string(5,50)',
    biddingCorpCity: '@city',
    biddingCorpCountry: '@string(5,50)',
    biddingCorpName: '@ctitle(5,10)',
    biddingCorpPhone: '@integer(13100000000,18999999999)',
    biddingCorpProvince: '@province',
    biddingEndTime: '@datetime',
    biddingOpeningTime: '@datetime',
    biddingStartTime: '@datetime',
    biddingType: '@string(5,50)',
    fileDownloadEndTime: '@datetime',
    fileDownloadStartTime: '@datetime',
    industryType: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    gladBudget: '@string(5,50)',
    gladId: '@guid',
    gladName: '@ctitle(5,10)',
    gladNum: '@string(5,50)',
    gladType: '@string(5,50)',
  }
}
export function XiangMuFaCaiMengGongHaiLvYou() {
  return {
    addr: '@string(5,50)',
    'addrList|1-20': [DiZhi()],
    area: '@string(5,50)',
    biddingType: '@string(5,50)',
    happyStatus: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    customerId: '@guid',
    customerType: '@string(5,50)',
    distance: '@string(5,50)',
    followResult: '@string(5,50)',
    followType: '@string(5,50)',
    'followTypeList|1-20': ['@string(5,50)'],
    followerId: '@guid',
    'industryTypeList|1-20': ['@string(5,50)'],
    isRead: '@integer(3,1000)',
    name: '@ctitle(5,10)',
    orderColumn: '@string(5,50)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    gladBudgetMax: '@string(5,50)',
    gladBudgetMin: '@string(5,50)',
    'gladTypeList|1-20': ['@string(5,50)'],
    province: '@province',
    publishEndTime: '@datetime',
    publishStartTime: '@datetime',
    receiveType: '@string(5,50)',
    signUpBeginTime: '@datetime',
    signUpEndTime: '@datetime',
    size: '20',
    source: '@string(5,50)',
    taskId: '@guid',
    type: '@integer(3,1000)',
    valid: '@guid',
  }
}
export function XiangMuFaCaiMengFenYeLvYourpcrequest() {
  return {
    page: '@integer(3,1000)',
    gladName: '@ctitle(5,10)',
    size: '20',
  }
}
export function XiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    agencies: '@string(5,50)',
    agenciesAddr: '@string(5,50)',
    agenciesPhone: '@integer(13100000000,18999999999)',
    biddingCorpAddr: '@string(5,50)',
    biddingCorpName: '@ctitle(5,10)',
    biddingCorpPhone: '@integer(13100000000,18999999999)',
    biddingTime: '@datetime',
    biddingType: '@string(5,50)',
    industryType: '@string(5,50)',
    phone: '@integer(13100000000,18999999999)',
    gladBudget: '@string(5,50)',
    gladId: '@guid',
    gladName: '@ctitle(5,10)',
    gladNum: '@string(5,50)',
    gladType: '@string(5,50)',
  }
}
