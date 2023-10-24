export function AddHappyDoorReq() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyClassificationType: '@string(5,1000)',
    happySource: '@string(5,1000)',
    happyType: '@string(5,1000)',
    categoryName: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    corporateName: '@string(5,1000)',
    country: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    createSource: '@string(5,1000)',
    created: '@string(5,1000)',
    enableSaveOrUpdate: '@boolean()',
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    establishmentTime: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    lat: '@string(5,1000)',
    licenseId: '@string(5,1000)',
    lng: '@string(5,1000)',
    modified: '@string(5,1000)',
    phone: '@string(5,1000)',
    province: '@string(5,1000)',
    regCatCnt: '@string(5,1000)',
    orangeeredCapital: '@string(5,1000)',
    score: '@integer(3,1000)',
    searchStationId: '@string(5,1000)',
    skAchievementCnt: '@string(5,1000)',
    skQualificationCnt: '@string(5,1000)',
    step: '@integer(3,1000)',
    thirdId: '@string(5,1000)',
    type: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function AddHappyCatCertificateReq() {
  return {
    id: '@string(5,1000)',
    major: '@string(5,1000)',
    name: '@string(5,1000)',
    pictureUrl: '@string(5,1000)',
  }
}
export function AddHappyCatReq() {
  return {
    achievementCnt: '@string(5,1000)',
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    badBehaviorCnt: '@string(5,1000)',
    blacklistRecordCnt: '@string(5,1000)',
    happyClassificationType: '@string(5,1000)',
    happySource: '@string(5,1000)',
    happyType: '@string(5,1000)',
    certificateList: AddHappyCatCertificateReq(),
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    createSource: '@string(5,1000)',
    created: '@string(5,1000)',
    education: '@string(5,1000)',
    enableSaveOrUpdate: '@boolean()',
    gender: '@string(5,1000)',
    goodBehaviorCnt: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    lat: '@string(5,1000)',
    licenseId: '@string(5,1000)',
    lng: '@string(5,1000)',
    modified: '@string(5,1000)',
    catName: '@string(5,1000)',
    catnelRisk: '@integer(3,1000)',
    phone: '@string(5,1000)',
    province: '@string(5,1000)',
    searchStationId: '@string(5,1000)',
    skCertificateCnt: '@string(5,1000)',
    step: '@integer(3,1000)',
    thirdId: '@string(5,1000)',
    titleList: AddHappyCatTitleReq(),
    type: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function AddHappyCatTitleReq() {
  return {
    id: '@string(5,1000)',
    level: '@string(5,1000)',
    major: '@string(5,1000)',
    pictureUrl: '@string(5,1000)',
  }
}
export function AddHappyGladReq() {
  return {
    agencies: '@string(5,1000)',
    agenciesAddr: '@string(5,1000)',
    agenciesAddrCoordinate: '@string(5,1000)',
    agenciesAddrLat: '@string(5,1000)',
    agenciesAddrLng: '@string(5,1000)',
    agenciesArea: '@string(5,1000)',
    agenciesCity: '@string(5,1000)',
    agenciesCountry: '@string(5,1000)',
    agenciesPhone: '@string(5,1000)',
    agenciesProvince: '@string(5,1000)',
    biddingCorpAddr: '@string(5,1000)',
    biddingCorpAddrCoordinate: '@string(5,1000)',
    biddingCorpAddrLat: '@string(5,1000)',
    biddingCorpAddrLng: '@string(5,1000)',
    biddingCorpArea: '@string(5,1000)',
    biddingCorpCity: '@string(5,1000)',
    biddingCorpCountry: '@string(5,1000)',
    biddingCorpName: '@string(5,1000)',
    biddingCorpPhone: '@string(5,1000)',
    biddingCorpProvince: '@string(5,1000)',
    biddingEndTime: '@string(5,1000)',
    biddingOpeningTime: '@string(5,1000)',
    biddingStartTime: '@string(5,1000)',
    biddingType: '@string(5,1000)',
    happyClassificationType: '@string(5,1000)',
    happySource: '@string(5,1000)',
    happyType: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    createSource: '@string(5,1000)',
    created: '@string(5,1000)',
    enableSaveOrUpdate: '@boolean()',
    fileDownloadEndTime: '@string(5,1000)',
    fileDownloadStartTime: '@string(5,1000)',
    id: '@string(5,1000)',
    industryType: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    lat: '@string(5,1000)',
    licenseId: '@string(5,1000)',
    lng: '@string(5,1000)',
    modified: '@string(5,1000)',
    phone: '@string(5,1000)',
    gladBudget: '@string(5,1000)',
    gladName: '@string(5,1000)',
    gladNum: '@string(5,1000)',
    gladType: '@string(5,1000)',
    searchStationId: '@string(5,1000)',
    step: '@integer(3,1000)',
    thirdId: '@string(5,1000)',
    type: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
    webPageUrl: '@string(5,1000)',
  }
}
export function AddHappyReq() {
  return {
    happyClassificationType: '@string(5,1000)',
    happySource: '@string(5,1000)',
    happyType: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    createSource: '@string(5,1000)',
    created: '@string(5,1000)',
    enableSaveOrUpdate: '@boolean()',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    lat: '@string(5,1000)',
    licenseId: '@string(5,1000)',
    lng: '@string(5,1000)',
    modified: '@string(5,1000)',
    searchStationId: '@string(5,1000)',
    step: '@integer(3,1000)',
    thirdId: '@string(5,1000)',
    type: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function AddHappyResp() {
  return {
    failCnt: '@integer(3,1000)',
    id: '@string(5,1000)',
    licenseId: '@string(5,1000)',
    list: '@string(5,1000)',
    gladName: '@string(5,1000)',
    receiveName: '@string(5,1000)',
    successCnt: '@integer(3,1000)',
  }
}
export function AddCustomerResp() {
  return {
    list: CustomerDoorInfoResp(),
    repeatType: '@string(5,1000)',
  }
}
export function AddCatCustomerResp() {
  return {
    list: CustomerCatInfoResp(),
    repeatType: '@string(5,1000)',
  }
}
export function AddSignHappyDoorReq() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyId: '@string(5,1000)',
    happySource: '@string(5,1000)',
    happyType: '@string(5,1000)',
    categoryName: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    corporateName: '@string(5,1000)',
    country: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    createSource: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    establishmentTime: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    lat: '@string(5,1000)',
    licenseId: '@string(5,1000)',
    lng: '@string(5,1000)',
    modified: '@string(5,1000)',
    phone: '@string(5,1000)',
    province: '@string(5,1000)',
    regCatCnt: '@string(5,1000)',
    orangeeredCapital: '@string(5,1000)',
    score: '@integer(3,1000)',
    signType: '@string(5,1000)',
    skAchievementCnt: '@string(5,1000)',
    skQualificationCnt: '@string(5,1000)',
    step: '@integer(3,1000)',
    type: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function AddSignHappyCatReq() {
  return {
    achievementCnt: '@string(5,1000)',
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyId: '@string(5,1000)',
    happySource: '@string(5,1000)',
    happyType: '@string(5,1000)',
    certificateList: AddHappyCatCertificateReq(),
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    createSource: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    education: '@string(5,1000)',
    gender: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    lat: '@string(5,1000)',
    lng: '@string(5,1000)',
    modified: '@string(5,1000)',
    catName: '@string(5,1000)',
    phone: '@string(5,1000)',
    province: '@string(5,1000)',
    signType: '@string(5,1000)',
    step: '@integer(3,1000)',
    titleList: AddHappyCatTitleReq(),
    type: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function AddSignHappyGladReq() {
  return {
    agencies: '@string(5,1000)',
    agenciesAddr: '@string(5,1000)',
    agenciesAddrCoordinate: '@string(5,1000)',
    agenciesAddrLat: '@string(5,1000)',
    agenciesAddrLng: '@string(5,1000)',
    agenciesArea: '@string(5,1000)',
    agenciesCity: '@string(5,1000)',
    agenciesCountry: '@string(5,1000)',
    agenciesPhone: '@string(5,1000)',
    agenciesProvince: '@string(5,1000)',
    biddingCorpAddr: '@string(5,1000)',
    biddingCorpAddrCoordinate: '@string(5,1000)',
    biddingCorpAddrLat: '@string(5,1000)',
    biddingCorpAddrLng: '@string(5,1000)',
    biddingCorpArea: '@string(5,1000)',
    biddingCorpCity: '@string(5,1000)',
    biddingCorpCountry: '@string(5,1000)',
    biddingCorpName: '@string(5,1000)',
    biddingCorpPhone: '@string(5,1000)',
    biddingCorpProvince: '@string(5,1000)',
    biddingEndTime: '@string(5,1000)',
    biddingOpeningTime: '@string(5,1000)',
    biddingStartTime: '@string(5,1000)',
    biddingType: '@string(5,1000)',
    happyId: '@string(5,1000)',
    happySource: '@string(5,1000)',
    happyType: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    createSource: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    fileDownloadEndTime: '@string(5,1000)',
    fileDownloadStartTime: '@string(5,1000)',
    id: '@string(5,1000)',
    industryType: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    lat: '@string(5,1000)',
    lng: '@string(5,1000)',
    modified: '@string(5,1000)',
    phone: '@string(5,1000)',
    gladBudget: '@string(5,1000)',
    gladName: '@string(5,1000)',
    gladNum: '@string(5,1000)',
    gladType: '@string(5,1000)',
    signType: '@string(5,1000)',
    step: '@integer(3,1000)',
    type: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
    webPageUrl: '@string(5,1000)',
  }
}
export function AddSignHappyResp() {
  return {
    happyId: '@string(5,1000)',
    list: '@string(5,1000)',
    mobile: '@string(5,1000)',
    signId: '@string(5,1000)',
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
export function ApiResponseAddHappyResp() {
  return {
    code: '@integer(3,1000)',
    data: AddHappyResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseAddCustomerResp() {
  return {
    code: '@integer(3,1000)',
    data: AddCustomerResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseAddCatCustomerResp() {
  return {
    code: '@integer(3,1000)',
    data: AddCatCustomerResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseAddSignHappyResp() {
  return {
    code: '@integer(3,1000)',
    data: AddSignHappyResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHappyClassificationResp() {
  return {
    code: '@integer(3,1000)',
    data: HappyClassificationResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHappyDesktopRulePageResp() {
  return {
    code: '@integer(3,1000)',
    data: HappyDesktopRulePageResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHappyDesktopRuleResp() {
  return {
    code: '@integer(3,1000)',
    data: HappyDesktopRuleResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHappyDoorInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: HappyDoorInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHappyNumResp() {
  return {
    code: '@integer(3,1000)',
    data: HappyNumResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHappyCatInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: HappyCatInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHappyPlanCountResp() {
  return {
    code: '@integer(3,1000)',
    data: HappyPlanCountResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHappyGladInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: HappyGladInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHappyPushInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: HappyPushInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHappyReceiveResp() {
  return {
    code: '@integer(3,1000)',
    data: HappyReceiveResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHappySubscribeInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: HappySubscribeInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageHappyPushDetail() {
  return {
    code: '@integer(3,1000)',
    data: ComPageHappyPushDetail(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageCustomerDoorInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageCustomerDoorInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageCustomerCatInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageCustomerCatInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageDesktopListResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageDesktopListResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageLocationDateInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageLocationDateInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageLocationInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageLocationInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPagePageHappyResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPagePageHappyResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPagePageDoorHappyPoolResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPagePageDoorHappyPoolResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPagePageCatHappyPoolResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPagePageCatHappyPoolResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPagePageGladHappyPoolResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPagePageGladHappyPoolResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPagePunchPageResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPagePunchPageResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageTaskPageListResp() {
  return {
    code: '@integer(3,1000)',
    data: ComPageTaskPageListResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageTreelong() {
  return {
    code: '@integer(3,1000)',
    data: ComPageTreelong(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
  return {
    code: '@integer(3,1000)',
    data: ComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageFenYeLvYouRenWu() {
  return {
    code: '@integer(3,1000)',
    data: ComPageFenYeLvYouRenWu(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
  return {
    code: '@integer(3,1000)',
    data: ComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
  return {
    code: '@integer(3,1000)',
    data: ComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageHuaHuaTiQingQiu() {
  return {
    code: '@integer(3,1000)',
    data: ComPageHuaHuaTiQingQiu(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageJiQiRenGenJinJiLuXiangYing() {
  return {
    code: '@integer(3,1000)',
    data: ComPageJiQiRenGenJinJiLuXiangYing(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageDaoRuHuaHuaTiXiangYing() {
  return {
    code: '@integer(3,1000)',
    data: ComPageDaoRuHuaHuaTiXiangYing(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageSouSuoRenCaiJiQiRenresponse() {
  return {
    code: '@integer(3,1000)',
    data: ComPageSouSuoRenCaiJiQiRenresponse(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageSouSuoZhiXieChangJiQiRenresponse() {
  return {
    code: '@integer(3,1000)',
    data: ComPageSouSuoZhiXieChangJiQiRenresponse(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageCaoZuoRiZhiFenYeresponse() {
  return {
    code: '@integer(3,1000)',
    data: ComPageCaoZuoRiZhiFenYeresponse(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageHongLingJinJiLuFenYeresponse() {
  return {
    code: '@integer(3,1000)',
    data: ComPageHongLingJinJiLuFenYeresponse(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageLianXiRenHuaHuaTi() {
  return {
    code: '@integer(3,1000)',
    data: ComPageLianXiRenHuaHuaTi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseComPageXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    code: '@integer(3,1000)',
    data: ComPageXiangMuFaCaiMengXiangQingrpcresponse(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseCountCustomerHappyNumResp() {
  return {
    code: '@integer(3,1000)',
    data: CountCustomerHappyNumResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseCustomerDoorAddResp() {
  return {
    code: '@integer(3,1000)',
    data: CustomerDoorAddResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseCustomerDoorDetailResp() {
  return {
    code: '@integer(3,1000)',
    data: CustomerDoorDetailResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseCustomerDoorNumResp() {
  return {
    code: '@integer(3,1000)',
    data: CustomerDoorNumResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseCustomerCatAddResp() {
  return {
    code: '@integer(3,1000)',
    data: CustomerCatAddResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseCustomerCatDetailResp() {
  return {
    code: '@integer(3,1000)',
    data: CustomerCatDetailResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseDesktopResp() {
  return {
    code: '@integer(3,1000)',
    data: DesktopResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListHappyPlanCoordinateResp() {
  return {
    code: '@integer(3,1000)',
    data: HappyPlanCoordinateResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListCustomerDoorFromDataResp() {
  return {
    code: '@integer(3,1000)',
    data: CustomerDoorFromDataResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListDayCityResp() {
  return {
    code: '@integer(3,1000)',
    data: DayCityResp(),
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
export function ApiResponseListWhiteResp() {
  return {
    code: '@integer(3,1000)',
    data: WhiteResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListDocument() {
  return {
    code: '@integer(3,1000)',
    data: Document(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListDesktopResp() {
  return {
    code: '@integer(3,1000)',
    data: DesktopResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListLocationInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: LocationInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListPagePlanResp() {
  return {
    code: '@integer(3,1000)',
    data: PagePlanResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListTaskProgressDetailResp() {
  return {
    code: '@integer(3,1000)',
    data: TaskProgressDetailResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListTaskProgressCatResp() {
  return {
    code: '@integer(3,1000)',
    data: TaskProgressCatResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListTreelong() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListTreestring() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListobject() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListstring() {
  return {
    code: '@integer(3,1000)',
    data: '@string(5,1000)',
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseListTongJiShuJuHistogramResp() {
  return {
    code: '@integer(3,1000)',
    data: TongJiShuJuHistogramResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseMaplongCustomerDoorDetailResp() {
  return {
    code: '@integer(3,1000)',
    data: CustomerDoorDetailResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseGladSignInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: GladSignInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseRankResp() {
  return {
    code: '@integer(3,1000)',
    data: RankResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseTaskInfoResp() {
  return {
    code: '@integer(3,1000)',
    data: TaskInfoResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseTravelLoginResp() {
  return {
    code: '@integer(3,1000)',
    data: TravelLoginResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseVoid() {
  return {
    code: '@integer(3,1000)',
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
export function ApiResponseShangChuanWenJianFanHui() {
  return {
    code: '@integer(3,1000)',
    data: ShangChuanWenJianFanHui(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseZhiXieChangFaCaiMengXiangQingrpcresponse() {
  return {
    code: '@integer(3,1000)',
    data: ZhiXieChangFaCaiMengXiangQingrpcresponse(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseGuanLianFaCaiMengResponse() {
  return {
    code: '@integer(3,1000)',
    data: GuanLianFaCaiMengResponse(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHuaHuaTiQingQiu() {
  return {
    code: '@integer(3,1000)',
    data: HuaHuaTiQingQiu(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseHongLingJinJieGuoresponse() {
  return {
    code: '@integer(3,1000)',
    data: HongLingJinJieGuoresponse(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseTongJiShuJuPieDataResp() {
  return {
    code: '@integer(3,1000)',
    data: TongJiShuJuPieDataResp(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseLianXiRenHuaHuaTi() {
  return {
    code: '@integer(3,1000)',
    data: LianXiRenHuaHuaTi(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseDuRuWenJianXiangYing() {
  return {
    code: '@integer(3,1000)',
    data: DuRuWenJianXiangYing(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function ApiResponseXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    code: '@integer(3,1000)',
    data: XiangMuFaCaiMengXiangQingrpcresponse(),
    msg: '@string(5,1000)',
    success: '@boolean()',
    timestamp: '@string(5,1000)',
    traceId: '@string(5,1000)',
  }
}
export function AssignHappyReq() {
  return {
    happyList: AddHappyReq(),
    happyReceiveSource: '@string(5,1000)',
    happyType: '@string(5,1000)',
    date: '@string(5,1000)',
    receiverId: '@string(5,1000)',
    receiverName: '@string(5,1000)',
  }
}
export function HappyClassificationResp() {
  return {
    happyClassificationList: HappyCntResp(),
  }
}
export function HappyCntResp() {
  return {
    count: '@string(5,1000)',
    label: '@string(5,1000)',
    value: '@string(5,1000)',
  }
}
export function HappyDesktopDetailRulePageResp() {
  return {
    happyNumEveryday: '@integer(3,1000)',
    desktopId: '@string(5,1000)',
    desktopName: '@string(5,1000)',
    doorLimit: '@integer(3,1000)',
    catLimit: '@integer(3,1000)',
    gladLimit: '@integer(3,1000)',
  }
}
export function HappyDesktopDetailRuleReq() {
  return {
    happyNumEveryday: '@integer(3,1000)',
    desktopId: '@string(5,1000)',
    desktopName: '@string(5,1000)',
    doorLimit: '@integer(3,1000)',
    catLimit: '@integer(3,1000)',
    gladLimit: '@integer(3,1000)',
  }
}
export function HappyDesktopRulePageReq() {
  return {
    desktopIdList: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
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
    detailRuleList: HappyDesktopDetailRuleReq(),
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
    doorTimeType: '@string(5,1000)',
    isDoorNeedBackOpenSea: '@integer(3,1000)',
    isCatNeedBackOpenSea: '@integer(3,1000)',
    isGladNeedBackOpenSea: '@integer(3,1000)',
    catNoFollowTime: '@integer(3,1000)',
    catTimeType: '@string(5,1000)',
    gladNoFollowTime: '@integer(3,1000)',
    gladTimeType: '@string(5,1000)',
  }
}
export function HappyDoorInfoResp() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    categoryName: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    corpCertArray: '@string(5,1000)',
    corporateName: '@string(5,1000)',
    country: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    doorType: '@string(5,1000)',
    establishmentTime: '@string(5,1000)',
    filialeCompanyNameArray: '@string(5,1000)',
    followInfoList: HuaHuaTiQingQiu(),
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    hasCustomer: '@boolean()',
    id: '@string(5,1000)',
    isRead: '@string(5,1000)',
    lastFetchTime: '@string(5,1000)',
    lastFollowTime: '@string(5,1000)',
    lat: '@string(5,1000)',
    licenseId: '@string(5,1000)',
    lng: '@string(5,1000)',
    phone: '@string(5,1000)',
    planId: '@string(5,1000)',
    planScore: '@string(5,1000)',
    province: '@string(5,1000)',
    qualicaficationArray: '@string(5,1000)',
    recommendedReason: '@string(5,1000)',
    regCatCnt: '@string(5,1000)',
    orangeeredCapital: '@string(5,1000)',
    score: '@integer(3,1000)',
    signId: '@string(5,1000)',
    skAchievementCnt: '@string(5,1000)',
    skQualificationCnt: '@string(5,1000)',
    source: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    thirdId: '@string(5,1000)',
  }
}
export function HappyFollowReq() {
  return {
    addr: '@string(5,1000)',
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
    contactCatId: '@string(5,1000)',
    contactCatName: '@string(5,1000)',
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    date: '@string(5,1000)',
    dateList: '@string(5,1000)',
    fileIdList: '@string(5,1000)',
    followResult: '@string(5,1000)',
    followType: '@string(5,1000)',
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    setPlanType: '@integer(3,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function HappyFollowRuleReq() {
  return {
    doorNoFollowTime: '@integer(3,1000)',
    doorTimeType: '@string(5,1000)',
    isDoorNeedBackOpenSea: '@integer(3,1000)',
    isCatNeedBackOpenSea: '@integer(3,1000)',
    isGladNeedBackOpenSea: '@integer(3,1000)',
    catNoFollowTime: '@integer(3,1000)',
    catTimeType: '@string(5,1000)',
    gladNoFollowTime: '@integer(3,1000)',
    gladTimeType: '@string(5,1000)',
  }
}
export function HappyNumReq() {
  return {
    happyType: '@string(5,1000)',
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
    certificateNum: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    id: '@string(5,1000)',
    major: '@string(5,1000)',
    name: '@string(5,1000)',
    pictureUrl: '@string(5,1000)',
    orangeered: '@string(5,1000)',
  }
}
export function HappyCatInfoResp() {
  return {
    achievementCnt: '@string(5,1000)',
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    badBehaviorCnt: '@string(5,1000)',
    blacklistRecordCnt: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    certificateList: HappyCatCertificateResp(),
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerMobile: '@string(5,1000)',
    customerName: '@string(5,1000)',
    customerType: '@string(5,1000)',
    education: '@string(5,1000)',
    followInfoList: HuaHuaTiQingQiu(),
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    gender: '@string(5,1000)',
    goodBehaviorCnt: '@string(5,1000)',
    hasCustomer: '@boolean()',
    id: '@string(5,1000)',
    isRead: '@string(5,1000)',
    lastFetchTime: '@string(5,1000)',
    lastFollowTime: '@string(5,1000)',
    lat: '@string(5,1000)',
    licenseId: '@string(5,1000)',
    lng: '@string(5,1000)',
    catName: '@string(5,1000)',
    catnelRisk: '@integer(3,1000)',
    phone: '@string(5,1000)',
    planId: '@string(5,1000)',
    planScore: '@string(5,1000)',
    province: '@string(5,1000)',
    recommendedReason: '@string(5,1000)',
    signId: '@string(5,1000)',
    skCertificateCnt: '@string(5,1000)',
    source: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    thirdId: '@string(5,1000)',
    titleList: HappyCatTitleResp(),
  }
}
export function HappyCatTitleResp() {
  return {
    id: '@string(5,1000)',
    level: '@string(5,1000)',
    major: '@string(5,1000)',
    pictureUrl: '@string(5,1000)',
  }
}
export function HappyPlanAddHappyListReq() {
  return {
    happyType: '@string(5,1000)',
    id: '@string(5,1000)',
  }
}
export function HappyPlanAddHappyReq() {
  return {
    addHappyList: HappyPlanAddHappyListReq(),
    date: '@string(5,1000)',
  }
}
export function HappyPlanAddCustomerListReq() {
  return {
    customerType: '@string(5,1000)',
    id: '@string(5,1000)',
  }
}
export function HappyPlanAddCustomerReq() {
  return {
    addCustomerList: HappyPlanAddCustomerListReq(),
    dateList: ErrorModelNamenamespacejavatimenameLocalDateTime(),
  }
}
export function HappyPlanCoordinateResp() {
  return {
    coordinate: '@string(5,1000)',
    created: '@string(5,1000)',
    planId: '@string(5,1000)',
  }
}
export function HappyPlanCountReq() {
  return {
    date: '@string(5,1000)',
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
    id: '@string(5,1000)',
    taskType: '@integer(3,1000)',
    type: '@string(5,1000)',
  }
}
export function HappyPlanDateListReq() {
  return {
    endDate: '@string(5,1000)',
    handlerIdList: '@string(5,1000)',
    startDate: '@string(5,1000)',
    type: '@integer(3,1000)',
  }
}
export function HappyPlanDeleteReq() {
  return {
    planId: '@string(5,1000)',
  }
}
export function HappyPlanPageReq() {
  return {
    date: '@string(5,1000)',
    handlerIdList: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function HappyPlanPunchReq() {
  return {
    date: '@string(5,1000)',
  }
}
export function HappyPlanRecommendedReq() {
  return {
    happyType: '@string(5,1000)',
    date: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function HappyPlanScoreListReq() {
  return {
    planId: '@string(5,1000)',
    score: '@string(5,1000)',
  }
}
export function HappyGladInfoResp() {
  return {
    agencies: '@string(5,1000)',
    agenciesAddr: '@string(5,1000)',
    agenciesAddrLat: '@string(5,1000)',
    agenciesAddrLng: '@string(5,1000)',
    agenciesArea: '@string(5,1000)',
    agenciesCity: '@string(5,1000)',
    agenciesCountry: '@string(5,1000)',
    agenciesPhone: '@string(5,1000)',
    agenciesProvince: '@string(5,1000)',
    area: '@string(5,1000)',
    biddingCorpAddr: '@string(5,1000)',
    biddingCorpAddrLat: '@string(5,1000)',
    biddingCorpAddrLng: '@string(5,1000)',
    biddingCorpArea: '@string(5,1000)',
    biddingCorpCity: '@string(5,1000)',
    biddingCorpCountry: '@string(5,1000)',
    biddingCorpName: '@string(5,1000)',
    biddingCorpPhone: '@string(5,1000)',
    biddingCorpProvince: '@string(5,1000)',
    biddingEndTime: '@string(5,1000)',
    biddingOpeningTime: '@string(5,1000)',
    biddingStartTime: '@string(5,1000)',
    biddingTime: '@string(5,1000)',
    biddingType: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    fileDownloadEndTime: '@string(5,1000)',
    fileDownloadStartTime: '@string(5,1000)',
    followInfoList: HuaHuaTiQingQiu(),
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    hasCustomer: '@boolean()',
    id: '@string(5,1000)',
    industryType: '@string(5,1000)',
    isRead: '@string(5,1000)',
    lastFetchTime: '@string(5,1000)',
    lastFollowTime: '@string(5,1000)',
    lat: '@string(5,1000)',
    licenseId: '@string(5,1000)',
    lng: '@string(5,1000)',
    phone: '@string(5,1000)',
    planId: '@string(5,1000)',
    planScore: '@string(5,1000)',
    gladBudget: '@string(5,1000)',
    gladName: '@string(5,1000)',
    gladNum: '@string(5,1000)',
    gladType: '@string(5,1000)',
    province: '@string(5,1000)',
    publishTime: '@string(5,1000)',
    quoteBeginTime: '@string(5,1000)',
    quoteEndTime: '@string(5,1000)',
    recommendedReason: '@string(5,1000)',
    signId: '@string(5,1000)',
    signUpBeginTime: '@string(5,1000)',
    signUpEndTime: '@string(5,1000)',
    source: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    thirdId: '@string(5,1000)',
    valid: '@integer(3,1000)',
    webPageUrl: '@string(5,1000)',
  }
}
export function HappyPushDetail() {
  return {
    happyType: '@string(5,1000)',
    enable: '@integer(3,1000)',
    id: '@string(5,1000)',
    json: '@string(5,1000)',
    planPushNum: '@integer(3,1000)',
    pushedNum: '@integer(3,1000)',
    remark: '@string(5,1000)',
    ruleSettingTime: '@string(5,1000)',
  }
}
export function HappyPushInfoResp() {
  return {
    areaList: DiZhi(),
    happyType: '@string(5,1000)',
    json: '@string(5,1000)',
    catList: HappyPushCatInfoResp(),
    pushDays: '@integer(3,1000)',
    pushNum: '@integer(3,1000)',
    pushRule: '@integer(3,1000)',
    pushType: '@integer(3,1000)',
    remark: '@string(5,1000)',
  }
}
export function HappyPushCatInfoResp() {
  return {
    areaList: DiZhi(),
    catList: HappyPushCatResp(),
    pushNum: '@integer(3,1000)',
  }
}
export function HappyPushCatResp() {
  return {
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
  }
}
export function HappyReceiveResp() {
  return {
    failCnt: '@integer(3,1000)',
    id: '@string(5,1000)',
    licenseId: '@string(5,1000)',
    gladName: '@string(5,1000)',
    receiveName: '@string(5,1000)',
    successCnt: '@integer(3,1000)',
  }
}
export function HappySetVisitPlanReq() {
  return {
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
    expectedDate: '@string(5,1000)',
    interfaceType: '@string(5,1000)',
  }
}
export function HappySubscribeInfoReq() {
  return {
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    doorEnable: '@integer(3,1000)',
    doorJson: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@string(5,1000)',
    modified: '@string(5,1000)',
    catEnable: '@integer(3,1000)',
    catJson: '@string(5,1000)',
    gladEnable: '@integer(3,1000)',
    gladJson: '@string(5,1000)',
    updateId: '@string(5,1000)',
    updateName: '@string(5,1000)',
  }
}
export function HappySubscribeInfoResp() {
  return {
    doorEnable: '@integer(3,1000)',
    doorJson: '@string(5,1000)',
    catEnable: '@integer(3,1000)',
    catJson: '@string(5,1000)',
    gladEnable: '@integer(3,1000)',
    gladJson: '@string(5,1000)',
  }
}
export function CharSequence() {}
export function ComPageHappyDesktopDetailRulePageResp() {
  return {
    current: '@string(5,1000)',
    records: HappyDesktopDetailRulePageResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageHappyPushDetail() {
  return {
    current: '@string(5,1000)',
    records: HappyPushDetail(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageCustomerDoorInfoResp() {
  return {
    current: '@string(5,1000)',
    records: CustomerDoorInfoResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageCustomerCatInfoResp() {
  return {
    current: '@string(5,1000)',
    records: CustomerCatInfoResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageDesktopListResp() {
  return {
    current: '@string(5,1000)',
    records: DesktopListResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageLocationDateInfoResp() {
  return {
    current: '@string(5,1000)',
    records: LocationDateInfoResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageLocationInfoResp() {
  return {
    current: '@string(5,1000)',
    records: LocationInfoResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPagePageHappyResp() {
  return {
    current: '@string(5,1000)',
    records: PageHappyResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPagePageDoorHappyPoolResp() {
  return {
    current: '@string(5,1000)',
    records: PageDoorHappyPoolResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPagePageCatHappyPoolResp() {
  return {
    current: '@string(5,1000)',
    records: PageCatHappyPoolResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPagePageGladHappyPoolResp() {
  return {
    current: '@string(5,1000)',
    records: PageGladHappyPoolResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPagePunchPageResp() {
  return {
    current: '@string(5,1000)',
    records: PunchPageResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageTaskPageListResp() {
  return {
    current: '@string(5,1000)',
    records: TaskPageListResp(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageTreelong() {
  return {
    current: '@string(5,1000)',
    records: '@string(5,1000)',
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
  return {
    current: '@string(5,1000)',
    records: FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageFenYeLvYouRenWu() {
  return {
    current: '@string(5,1000)',
    records: FenYeLvYouRenWu(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
  return {
    current: '@string(5,1000)',
    records: FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
  return {
    current: '@string(5,1000)',
    records: FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageHuaHuaTiQingQiu() {
  return {
    current: '@string(5,1000)',
    records: HuaHuaTiQingQiu(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageJiQiRenGenJinJiLuXiangYing() {
  return {
    current: '@string(5,1000)',
    records: JiQiRenGenJinJiLuXiangYing(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageDaoRuHuaHuaTiXiangYing() {
  return {
    current: '@string(5,1000)',
    records: DaoRuHuaHuaTiXiangYing(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageSouSuoRenCaiJiQiRenresponse() {
  return {
    current: '@string(5,1000)',
    records: SouSuoRenCaiJiQiRenresponse(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageSouSuoZhiXieChangJiQiRenresponse() {
  return {
    current: '@string(5,1000)',
    records: SouSuoZhiXieChangJiQiRenresponse(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageCaoZuoRiZhiFenYeresponse() {
  return {
    current: '@string(5,1000)',
    records: CaoZuoRiZhiFenYeresponse(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageHongLingJinJiLuFenYeresponse() {
  return {
    current: '@string(5,1000)',
    records: HongLingJinJiLuFenYeresponse(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageLianXiRenHuaHuaTi() {
  return {
    current: '@string(5,1000)',
    records: LianXiRenHuaHuaTi(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function ComPageXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    current: '@string(5,1000)',
    records: XiangMuFaCaiMengXiangQingrpcresponse(),
    size: '@string(5,1000)',
    total: '@string(5,1000)',
  }
}
export function Comparableobject() {}
export function ContactAddReq() {
  return {
    whiteName: '@string(5,1000)',
    duty: '@string(5,1000)',
    id: '@string(5,1000)',
    isDelete: '@integer(3,1000)',
    isPrincipal: '@integer(3,1000)',
    name: '@string(5,1000)',
    post: '@string(5,1000)',
    remark: '@string(5,1000)',
    sort: '@integer(3,1000)',
    type: '@integer(3,1000)',
    value: '@string(5,1000)',
  }
}
export function ContactDetailResp() {
  return {
    whiteName: '@string(5,1000)',
    duty: '@string(5,1000)',
    id: '@string(5,1000)',
    isPrincipal: '@integer(3,1000)',
    name: '@string(5,1000)',
    post: '@string(5,1000)',
    remark: '@string(5,1000)',
    sort: '@integer(3,1000)',
    type: '@integer(3,1000)',
    value: '@string(5,1000)',
  }
}
export function CountCustomerHappyNumReq() {
  return {
    id: '@string(5,1000)',
  }
}
export function CountCustomerHappyNumResp() {
  return {
    totalNum: '@integer(3,1000)',
    typeNum: CountCustomerHappyNumTypeResp(),
  }
}
export function CountCustomerHappyNumTypeResp() {
  return {
    signNum: '@integer(3,1000)',
    type: '@string(5,1000)',
    unsignedNum: '@integer(3,1000)',
  }
}
export function CustomerDoorAddReq() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyPrincipal: '@string(5,1000)',
    categoryName: '@string(5,1000)',
    city: '@string(5,1000)',
    contactList: ContactAddReq(),
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    corporateName: '@string(5,1000)',
    country: '@string(5,1000)',
    customerSource: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    whitePrincipal: '@string(5,1000)',
    doorAttr: '@string(5,1000)',
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    establishmentTime: '@string(5,1000)',
    fileUrlList: '@string(5,1000)',
    higherDoor: '@string(5,1000)',
    invoiceList: CustomerInvoiceAddReq(),
    isImportant: '@integer(3,1000)',
    labels: '@string(5,1000)',
    location: '@string(5,1000)',
    phone: '@string(5,1000)',
    province: '@string(5,1000)',
    regCatCnt: '@string(5,1000)',
    orangeeredCapital: '@integer(3,1000)',
    skAchievementCnt: '@string(5,1000)',
    skQualificationCnt: '@string(5,1000)',
    step: '@integer(3,1000)',
  }
}
export function CustomerDoorAddResp() {
  return {
    id: '@string(5,1000)',
    list: CustomerDoorInfoResp(),
    repeatType: '@string(5,1000)',
  }
}
export function CustomerDoorDetailResp() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyPrincipal: '@string(5,1000)',
    categoryName: '@string(5,1000)',
    city: '@string(5,1000)',
    contactList: ContactDetailResp(),
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    corporateName: '@string(5,1000)',
    country: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    customerCode: '@string(5,1000)',
    customerSource: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    whitePrincipal: '@string(5,1000)',
    doorAttr: '@string(5,1000)',
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    establishmentTime: '@string(5,1000)',
    fileUrlList: '@string(5,1000)',
    higherDoor: '@string(5,1000)',
    id: '@string(5,1000)',
    invoiceList: CustomerInvoiceDetailResp(),
    isImportant: '@integer(3,1000)',
    labels: CustomerLabelResp(),
    licenseId: '@string(5,1000)',
    location: '@string(5,1000)',
    phone: '@string(5,1000)',
    province: '@string(5,1000)',
    regCatCnt: '@string(5,1000)',
    orangeeredCapital: '@integer(3,1000)',
    skAchievementCnt: '@string(5,1000)',
    skQualificationCnt: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function CustomerDoorFromDataReq() {
  return {
    companyName: '@string(5,1000)',
    companyNum: '@string(5,1000)',
    size: '@integer(3,1000)',
  }
}
export function CustomerDoorFromDataResp() {
  return {
    companyEstablishDate: '@string(5,1000)',
    companyIprovinceName: '@string(5,1000)',
    companyKey: '@integer(3,1000)',
    companyLegalRepresentative: '@string(5,1000)',
    companyLegalRepresentativePhone: '@string(5,1000)',
    companyName: '@string(5,1000)',
    companyNum: '@string(5,1000)',
    companyGladCnt: '@string(5,1000)',
    companyPunishmentCnt: '@string(5,1000)',
    companyQualificationCnt: '@string(5,1000)',
    companyOrangeGreen: '@string(5,1000)',
    companyOrangeAmt: '@string(5,1000)',
    companyOrangeState: '@string(5,1000)',
    companyOrangerarCnt: '@string(5,1000)',
    companyRewardsCnt: '@string(5,1000)',
    companyScore: '@integer(3,1000)',
    tycCompanyId: '@string(5,1000)',
  }
}
export function CustomerDoorInfoResp() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyPrincipal: '@string(5,1000)',
    city: '@string(5,1000)',
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    customerCode: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    whitePrincipal: '@string(5,1000)',
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    establishmentTime: '@string(5,1000)',
    fileUrlList: '@string(5,1000)',
    id: '@string(5,1000)',
    isCooperation: '@integer(3,1000)',
    isImportant: '@integer(3,1000)',
    label: '@string(5,1000)',
    location: '@string(5,1000)',
    phone: '@string(5,1000)',
    province: '@string(5,1000)',
    regCatCnt: '@string(5,1000)',
    orangeeredCapital: '@integer(3,1000)',
    score: '@integer(3,1000)',
    signId: '@string(5,1000)',
    signState: '@string(5,1000)',
    signTime: '@string(5,1000)',
    skAchievementCnt: '@string(5,1000)',
    skQualificationCnt: '@string(5,1000)',
  }
}
export function CustomerDoorNumReq() {
  return {
    createEndTime: '@string(5,1000)',
    createStartTime: '@string(5,1000)',
    own: '@boolean()',
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
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyPrincipal: '@string(5,1000)',
    categoryName: '@string(5,1000)',
    city: '@string(5,1000)',
    contactList: ContactAddReq(),
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    corporateName: '@string(5,1000)',
    country: '@string(5,1000)',
    customerSource: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    whitePrincipal: '@string(5,1000)',
    doorAttr: '@string(5,1000)',
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    establishmentTime: '@string(5,1000)',
    fileUrlList: '@string(5,1000)',
    higherDoor: '@string(5,1000)',
    id: '@string(5,1000)',
    invoiceList: CustomerInvoiceAddReq(),
    isImportant: '@integer(3,1000)',
    labels: CustomerLabelReq(),
    location: '@string(5,1000)',
    phone: '@string(5,1000)',
    province: '@string(5,1000)',
    regCatCnt: '@string(5,1000)',
    orangeeredCapital: '@integer(3,1000)',
    skAchievementCnt: '@string(5,1000)',
    skQualificationCnt: '@string(5,1000)',
    step: '@integer(3,1000)',
  }
}
export function CustomerFollowReq() {
  return {
    addr: '@string(5,1000)',
    contactCatId: '@string(5,1000)',
    contactCatName: '@string(5,1000)',
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    date: '@string(5,1000)',
    fileIdList: '@string(5,1000)',
    followType: '@string(5,1000)',
  }
}
export function CustomerInvoiceAddReq() {
  return {
    blueAddr: '@string(5,1000)',
    blueBank: '@string(5,1000)',
    bankNo: '@string(5,1000)',
    doorName: '@string(5,1000)',
    id: '@string(5,1000)',
    isDefault: '@integer(3,1000)',
    isDelete: '@integer(3,1000)',
    phone: '@string(5,1000)',
    sort: '@integer(3,1000)',
    tin: '@string(5,1000)',
  }
}
export function CustomerInvoiceDetailResp() {
  return {
    blueAddr: '@string(5,1000)',
    blueBank: '@string(5,1000)',
    bankNo: '@string(5,1000)',
    doorName: '@string(5,1000)',
    id: '@string(5,1000)',
    isDefault: '@integer(3,1000)',
    isDelete: '@integer(3,1000)',
    phone: '@string(5,1000)',
    sort: '@integer(3,1000)',
    tin: '@string(5,1000)',
  }
}
export function CustomerLabelReq() {
  return {
    id: '@string(5,1000)',
    labelName: '@string(5,1000)',
  }
}
export function CustomerLabelResp() {
  return {
    id: '@string(5,1000)',
    labelName: '@string(5,1000)',
  }
}
export function CustomerCatAddReq() {
  return {
    achievementCnt: '@string(5,1000)',
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyPrincipal: '@string(5,1000)',
    certificateList: CustomerCatCertificateReq(),
    city: '@string(5,1000)',
    contactList: ContactAddReq(),
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    customerSource: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    whitePrincipal: '@string(5,1000)',
    education: '@string(5,1000)',
    doorAddr: '@string(5,1000)',
    doorName: '@string(5,1000)',
    fileUrlList: '@string(5,1000)',
    gender: '@string(5,1000)',
    invoiceList: CustomerInvoiceAddReq(),
    isImportant: '@integer(3,1000)',
    labels: '@string(5,1000)',
    location: '@string(5,1000)',
    catName: '@string(5,1000)',
    phone: '@string(5,1000)',
    post: '@string(5,1000)',
    province: '@string(5,1000)',
    step: '@integer(3,1000)',
    titleList: CustomerCatTitleReq(),
  }
}
export function CustomerCatAddResp() {
  return {
    id: '@string(5,1000)',
    list: CustomerCatInfoResp(),
  }
}
export function CustomerCatCertificateInfoResp() {
  return {
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    id: '@string(5,1000)',
    major: '@string(5,1000)',
    name: '@string(5,1000)',
    pictureUrl: '@string(5,1000)',
    orangeered: '@string(5,1000)',
  }
}
export function CustomerCatCertificateReq() {
  return {
    customerId: '@string(5,1000)',
    id: '@string(5,1000)',
    major: '@string(5,1000)',
    name: '@string(5,1000)',
  }
}
export function CustomerCatDetailResp() {
  return {
    achievementCnt: '@string(5,1000)',
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyPrincipal: '@string(5,1000)',
    certificateList: CustomerCatCertificateInfoResp(),
    city: '@string(5,1000)',
    contactList: ContactDetailResp(),
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    customerCode: '@string(5,1000)',
    customerSource: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    whitePrincipal: '@string(5,1000)',
    education: '@string(5,1000)',
    doorAddr: '@string(5,1000)',
    doorName: '@string(5,1000)',
    fileUrlList: '@string(5,1000)',
    gender: '@string(5,1000)',
    id: '@string(5,1000)',
    invoiceList: CustomerInvoiceDetailResp(),
    isImportant: '@integer(3,1000)',
    labels: CustomerLabelResp(),
    location: '@string(5,1000)',
    catName: '@string(5,1000)',
    phone: '@string(5,1000)',
    post: '@string(5,1000)',
    province: '@string(5,1000)',
    talentId: '@string(5,1000)',
    titleList: CustomerCatTitleInfoResp(),
  }
}
export function CustomerCatInfoResp() {
  return {
    achievementCnt: '@string(5,1000)',
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    badBehaviorCnt: '@string(5,1000)',
    blacklistRecordCnt: '@string(5,1000)',
    happyPrincipal: '@string(5,1000)',
    certificate: '@string(5,1000)',
    city: '@string(5,1000)',
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    customerCode: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    whitePrincipal: '@string(5,1000)',
    education: '@string(5,1000)',
    gender: '@string(5,1000)',
    goodBehaviorCnt: '@string(5,1000)',
    id: '@string(5,1000)',
    isCooperation: '@integer(3,1000)',
    isImportant: '@integer(3,1000)',
    label: '@string(5,1000)',
    catName: '@string(5,1000)',
    catnelRisk: '@integer(3,1000)',
    phone: '@string(5,1000)',
    province: '@string(5,1000)',
    signId: '@string(5,1000)',
    signState: '@string(5,1000)',
    signTime: '@string(5,1000)',
    skCertificateCnt: '@string(5,1000)',
    title: '@string(5,1000)',
  }
}
export function CustomerCatTitleInfoResp() {
  return {
    customerId: '@string(5,1000)',
    id: '@string(5,1000)',
    level: '@string(5,1000)',
    major: '@string(5,1000)',
    pictureUrl: '@string(5,1000)',
  }
}
export function CustomerCatTitleReq() {
  return {
    customerId: '@string(5,1000)',
    id: '@string(5,1000)',
    level: '@string(5,1000)',
    major: '@string(5,1000)',
  }
}
export function CustomerCatUpReq() {
  return {
    achievementCnt: '@string(5,1000)',
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyPrincipal: '@string(5,1000)',
    certificateList: CustomerCatCertificateReq(),
    city: '@string(5,1000)',
    contactList: ContactAddReq(),
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    customerSource: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    whitePrincipal: '@string(5,1000)',
    education: '@string(5,1000)',
    doorAddr: '@string(5,1000)',
    doorName: '@string(5,1000)',
    fileUrlList: '@string(5,1000)',
    gender: '@string(5,1000)',
    id: '@string(5,1000)',
    invoiceList: CustomerInvoiceAddReq(),
    isImportant: '@integer(3,1000)',
    labels: CustomerLabelReq(),
    location: '@string(5,1000)',
    catName: '@string(5,1000)',
    phone: '@string(5,1000)',
    post: '@string(5,1000)',
    province: '@string(5,1000)',
    titleList: CustomerCatTitleReq(),
  }
}
export function DayCityReq() {
  return {
    endTime: '@string(5,1000)',
    startTime: '@string(5,1000)',
  }
}
export function DayCityResp() {
  return {
    cityList: '@string(5,1000)',
    dayTime: '@string(5,1000)',
  }
}
export function DelReq() {
  return {
    id: '@string(5,1000)',
  }
}
export function DeleteReq() {
  return {
    id: '@string(5,1000)',
  }
}
export function WhiteListReq() {
  return {
    parentId: '@string(5,1000)',
    scaleType: '@string(5,1000)',
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
    whiteName: '@string(5,1000)',
    parentId: '@string(5,1000)',
  }
}
export function WhiteResp() {
  return {
    ancestors: '@string(5,1000)',
    authStatus: '@string(5,1000)',
    createId: '@string(5,1000)',
    createName: '@string(5,1000)',
    created: '@string(5,1000)',
    whiteCode: '@string(5,1000)',
    whiteName: '@string(5,1000)',
    email: '@string(5,1000)',
    doorId: '@string(5,1000)',
    id: '@string(5,1000)',
    isShow: '@boolean()',
    leaderDesktopId: '@string(5,1000)',
    leaderDesktopName: '@string(5,1000)',
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
export function Document() {
  return {
    content: '@string(5,1000)',
    id: '@string(5,1000)',
    location: '@string(5,1000)',
    title: '@string(5,1000)',
  }
}
export function DesktopListResp() {
  return {
    id: '@string(5,1000)',
    name: '@string(5,1000)',
    phone: '@string(5,1000)',
  }
}
export function DesktopResp() {
  return {
    id: '@string(5,1000)',
    mobile: '@string(5,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function FailData() {
  return {
    excelNum: '@integer(3,1000)',
    firstName: '@string(5,1000)',
    reason: '@string(5,1000)',
  }
}
export function FollowAgainReq() {
  return {
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
  }
}
export function FollowListReq() {
  return {
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    taskId: '@string(5,1000)',
  }
}
export function ImportExcelByUrlReq() {
  return {
    fileName: '@string(5,1000)',
    fileUrl: '@string(5,1000)',
    taskType: '@integer(3,1000)',
  }
}
export function ImportListReq() {
  return {
    endTime: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    startTime: '@string(5,1000)',
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
    req: '@string(5,1000)',
  }
}
export function InnerRpcGuanShuiXiangMuFaCaiMengrpcChongDong() {
  return {
    req: GuanShuiXiangMuFaCaiMengrpcChongDong(),
  }
}
export function ListDesktopReq() {
  return {
    whiteId: '@string(5,1000)',
    keyword: '@string(5,1000)',
  }
}
export function ListLocationReq() {
  return {
    date: '@string(5,1000)',
    followerId: '@string(5,1000)',
  }
}
export function LocationAddReq() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    location: '@string(5,1000)',
    province: '@string(5,1000)',
  }
}
export function LocationDateInfoResp() {
  return {
    addrList: '@string(5,1000)',
    addrNum: '@integer(3,1000)',
    addrStr: '@string(5,1000)',
    happyNum: '@integer(3,1000)',
    desktopId: '@string(5,1000)',
    desktopName: '@string(5,1000)',
    monthDay: '@string(5,1000)',
    provinceCity: '@string(5,1000)',
    provinceCityList: '@string(5,1000)',
  }
}
export function LocationInfoResp() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    created: '@string(5,1000)',
    desktopId: '@string(5,1000)',
    desktopName: '@string(5,1000)',
    fileId: '@string(5,1000)',
    location: '@string(5,1000)',
    province: '@string(5,1000)',
  }
}
export function PageHappyMixReq() {
  return {
    coordinate: '@string(5,1000)',
    distance: '@string(5,1000)',
    orderColumn: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    type: '@integer(3,1000)',
  }
}
export function PageHappyResp() {
  return {
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    contactPhoneList: LianXiRenHuaHuaTi(),
    coordinate: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    dataLocation: '@string(5,1000)',
    distance: '@string(5,1000)',
    followInfoList: HuaHuaTiQingQiu(),
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    hasCustomer: '@boolean()',
    id: '@string(5,1000)',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@string(5,1000)',
    lastFollowTime: '@string(5,1000)',
    planId: '@string(5,1000)',
    planScore: '@string(5,1000)',
    recommendedReason: '@string(5,1000)',
    signId: '@string(5,1000)',
    source: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    thirdId: '@string(5,1000)',
  }
}
export function PageContactReq() {
  return {
    doorId: '@string(5,1000)',
    name: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function PageCustomerDoorReq() {
  return {
    addr: '@string(5,1000)',
    createEndTime: '@string(5,1000)',
    createStartTime: '@string(5,1000)',
    customerCode: '@string(5,1000)',
    door: '@string(5,1000)',
    doorAttr: '@string(5,1000)',
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    establishmentTimeEnd: '@string(5,1000)',
    establishmentTimeStart: '@string(5,1000)',
    labelList: '@string(5,1000)',
    orderColumn: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    own: '@boolean()',
    page: '@integer(3,1000)',
    province: '@string(5,1000)',
    regCatCntMax: '@string(5,1000)',
    regCatCntMin: '@string(5,1000)',
    orangeeredCapitalMax: '@integer(3,1000)',
    orangeeredCapitalMin: '@integer(3,1000)',
    scoreMax: '@integer(3,1000)',
    scoreMin: '@integer(3,1000)',
    sign: '@string(5,1000)',
    signDateMax: '@string(5,1000)',
    signDateMin: '@string(5,1000)',
    signState: '@string(5,1000)',
    size: '@integer(3,1000)',
    skAchievementCntMax: '@string(5,1000)',
    skAchievementCntMin: '@string(5,1000)',
    skQualificationCntMax: '@string(5,1000)',
    skQualificationCntMin: '@string(5,1000)',
  }
}
export function PageCustomerCatReq() {
  return {
    achievementCntMax: '@string(5,1000)',
    achievementCntMin: '@string(5,1000)',
    addr: '@string(5,1000)',
    certificateMajor: '@string(5,1000)',
    certificateName: '@string(5,1000)',
    certificateNameList: '@string(5,1000)',
    customerCode: '@string(5,1000)',
    labelList: '@string(5,1000)',
    level: '@string(5,1000)',
    levelList: '@string(5,1000)',
    major: '@string(5,1000)',
    majorList: '@string(5,1000)',
    orderColumn: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    own: '@boolean()',
    page: '@integer(3,1000)',
    cat: '@string(5,1000)',
    catName: '@string(5,1000)',
    catnelRisk: '@boolean()',
    phone: '@string(5,1000)',
    province: '@string(5,1000)',
    sign: '@string(5,1000)',
    signDateMax: '@string(5,1000)',
    signDateMin: '@string(5,1000)',
    signState: '@string(5,1000)',
    size: '@integer(3,1000)',
    skCertificateCntMax: '@string(5,1000)',
    skCertificateCntMin: '@string(5,1000)',
  }
}
export function PageDoorHappyPoolResp() {
  return {
    addr: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    contactPhoneList: LianXiRenHuaHuaTi(),
    coordinate: '@string(5,1000)',
    corpCertArray: '@string(5,1000)',
    corpCertCnt: '@integer(3,1000)',
    corporateName: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    dataLocation: '@string(5,1000)',
    distance: '@string(5,1000)',
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    doorType: '@string(5,1000)',
    establishmentTime: '@string(5,1000)',
    filialeCompanyCnt: '@integer(3,1000)',
    filialeCompanyNameArray: '@string(5,1000)',
    followInfoList: HuaHuaTiQingQiu(),
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    hasCustomer: '@boolean()',
    id: '@string(5,1000)',
    industryType: '@string(5,1000)',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@string(5,1000)',
    lastFollowTime: '@string(5,1000)',
    phone: '@string(5,1000)',
    planId: '@string(5,1000)',
    planScore: '@string(5,1000)',
    qualicaficationArray: '@string(5,1000)',
    qualicaficationCnt: '@integer(3,1000)',
    recommendedReason: '@string(5,1000)',
    regCatCnt: '@string(5,1000)',
    orangeeredCapital: '@string(5,1000)',
    score: '@integer(3,1000)',
    signId: '@string(5,1000)',
    skAchievementCnt: '@string(5,1000)',
    skQualificationCnt: '@string(5,1000)',
    source: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    thirdId: '@string(5,1000)',
  }
}
export function PageLocationByTaskReq() {
  return {
    desktopName: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    taskId: '@string(5,1000)',
  }
}
export function PageLocationReq() {
  return {
    area: '@string(5,1000)',
    city: '@string(5,1000)',
    desktopName: '@string(5,1000)',
    endTime: '@string(5,1000)',
    followerIdList: '@string(5,1000)',
    page: '@integer(3,1000)',
    province: '@string(5,1000)',
    size: '@integer(3,1000)',
    startTime: '@string(5,1000)',
  }
}
export function PageCatHappyPoolResp() {
  return {
    achievementCnt: '@string(5,1000)',
    addr: '@string(5,1000)',
    age: '@integer(3,1000)',
    area: '@string(5,1000)',
    badBehaviorCnt: '@string(5,1000)',
    blacklistRecordCnt: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    certificateName: '@string(5,1000)',
    certificateNum: '@string(5,1000)',
    city: '@string(5,1000)',
    contactPhoneList: LianXiRenHuaHuaTi(),
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerMobile: '@string(5,1000)',
    customerName: '@string(5,1000)',
    customerType: '@string(5,1000)',
    dataLocation: '@string(5,1000)',
    distance: '@string(5,1000)',
    education: '@string(5,1000)',
    followInfoList: HuaHuaTiQingQiu(),
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    gender: '@string(5,1000)',
    goodBehaviorCnt: '@string(5,1000)',
    hasCustomer: '@boolean()',
    id: '@string(5,1000)',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    isRetire: '@integer(3,1000)',
    lastFetchTime: '@string(5,1000)',
    lastFollowTime: '@string(5,1000)',
    licenseId: '@string(5,1000)',
    catName: '@string(5,1000)',
    catnelRisk: '@integer(3,1000)',
    phone: '@string(5,1000)',
    planId: '@string(5,1000)',
    planScore: '@string(5,1000)',
    province: '@string(5,1000)',
    recommendedReason: '@string(5,1000)',
    signId: '@string(5,1000)',
    skCertificateCnt: '@string(5,1000)',
    source: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    thirdId: '@string(5,1000)',
    title: '@string(5,1000)',
    workYear: '@integer(3,1000)',
  }
}
export function PagePlanResp() {
  return {
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    created: '@string(5,1000)',
    distance: '@string(5,1000)',
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    id: '@string(5,1000)',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@string(5,1000)',
    lastFollowTime: '@string(5,1000)',
    planId: '@string(5,1000)',
    planScore: '@string(5,1000)',
    planSource: '@string(5,1000)',
    planStatus: '@string(5,1000)',
    poolType: '@string(5,1000)',
    recommendedReason: '@string(5,1000)',
    relStatus: '@string(5,1000)',
    relType: '@string(5,1000)',
    source: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
  }
}
export function PageGladHappyPoolResp() {
  return {
    agencies: '@string(5,1000)',
    agenciesAddr: '@string(5,1000)',
    agenciesAddrCoordinate: '@string(5,1000)',
    agenciesAddrLat: '@string(5,1000)',
    agenciesAddrLng: '@string(5,1000)',
    agenciesArea: '@string(5,1000)',
    agenciesCity: '@string(5,1000)',
    agenciesCountry: '@string(5,1000)',
    agenciesPhone: '@string(5,1000)',
    agenciesProvince: '@string(5,1000)',
    biddingCorpAddr: '@string(5,1000)',
    biddingCorpAddrLat: '@string(5,1000)',
    biddingCorpAddrLng: '@string(5,1000)',
    biddingCorpArea: '@string(5,1000)',
    biddingCorpCity: '@string(5,1000)',
    biddingCorpName: '@string(5,1000)',
    biddingCorpPhone: '@string(5,1000)',
    biddingCorpProvince: '@string(5,1000)',
    biddingEndTime: '@string(5,1000)',
    biddingOpeningTime: '@string(5,1000)',
    biddingStartTime: '@string(5,1000)',
    biddingType: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    contactPhoneList: LianXiRenHuaHuaTi(),
    coordinate: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    dataLocation: '@string(5,1000)',
    distance: '@string(5,1000)',
    fileDownloadEndTime: '@string(5,1000)',
    fileDownloadStartTime: '@string(5,1000)',
    followInfoList: HuaHuaTiQingQiu(),
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    hasCustomer: '@boolean()',
    id: '@string(5,1000)',
    industryType: '@string(5,1000)',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@string(5,1000)',
    lastFollowTime: '@string(5,1000)',
    phone: '@string(5,1000)',
    planId: '@string(5,1000)',
    planScore: '@string(5,1000)',
    gladBudget: '@string(5,1000)',
    gladName: '@string(5,1000)',
    gladType: '@string(5,1000)',
    publishTime: '@string(5,1000)',
    quoteBeginTime: '@string(5,1000)',
    quoteEndTime: '@string(5,1000)',
    recommendedReason: '@string(5,1000)',
    signId: '@string(5,1000)',
    signUpBeginTime: '@string(5,1000)',
    signUpEndTime: '@string(5,1000)',
    source: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    thirdId: '@string(5,1000)',
    valid: '@integer(3,1000)',
  }
}
export function GladSignInfoResp() {
  return {
    applyKeyBorardId: '@string(5,1000)',
    applyKeyBorardName: '@string(5,1000)',
    belongCompany: '@string(5,1000)',
    belongCompanyId: '@string(5,1000)',
    bidEndDate: '@string(5,1000)',
    bidOpenDate: '@string(5,1000)',
    bidStartDate: '@string(5,1000)',
    biddingAgencyId: '@string(5,1000)',
    biddingAgencyName: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    cainfoId: '@string(5,1000)',
    cainfoName: '@string(5,1000)',
    city: '@string(5,1000)',
    county: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerName: '@string(5,1000)',
    isBid: '@boolean()',
    isPreApproval: '@boolean()',
    paramsOneId: '@string(5,1000)',
    paramsOneName: '@string(5,1000)',
    gladName: '@string(5,1000)',
    province: '@string(5,1000)',
    street: '@string(5,1000)',
    templateId: '@string(5,1000)',
    templateName: '@string(5,1000)',
    township: '@string(5,1000)',
  }
}
export function PunchPageReq() {
  return {
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function PunchPageResp() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    createName: '@string(5,1000)',
    imageUrlList: '@string(5,1000)',
    location: '@string(5,1000)',
    province: '@string(5,1000)',
    punchTime: '@string(5,1000)',
  }
}
export function PunchReq() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    date: '@string(5,1000)',
    fileIdList: '@string(5,1000)',
    followResult: '@string(5,1000)',
    location: '@string(5,1000)',
    province: '@string(5,1000)',
  }
}
export function RankResp() {
  return {
    list: PaiMingShuJuRankDataResp(),
    rank: WoCongMingPaiMingMyRankResp(),
  }
}
export function ReceiveHappyReq() {
  return {
    happyList: '@string(5,1000)',
    happyReceiveSource: '@string(5,1000)',
    happyType: '@string(5,1000)',
  }
}
export function Recommended2PlanReq() {
  return {
    date: '@string(5,1000)',
  }
}
export function SelectCustomerDoorReq() {
  return {
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
  }
}
export function SelectCustomerDoorGratefulReq() {
  return {
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    gratefulIdList: '@string(5,1000)',
  }
}
export function TaskAddrResp() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    date: '@string(5,1000)',
    location: '@string(5,1000)',
    province: '@string(5,1000)',
  }
}
export function TaskChangeStatusReq() {
  return {
    id: '@string(5,1000)',
    taskStatus: '@string(5,1000)',
  }
}
export function TaskCreateAddrReq() {
  return {
    addr: '@string(5,1000)',
    area: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    country: '@string(5,1000)',
    location: '@string(5,1000)',
    province: '@string(5,1000)',
    sort: '@integer(3,1000)',
  }
}
export function TaskCreateWhiteReq() {
  return {
    whiteId: '@string(5,1000)',
    whiteName: '@string(5,1000)',
  }
}
export function TaskCreateCatReq() {
  return {
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    phone: '@string(5,1000)',
  }
}
export function TaskCreateReq() {
  return {
    addrList: TaskCreateAddrReq(),
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean()',
    whiteList: TaskCreateWhiteReq(),
    endTime: '@string(5,1000)',
    name: '@string(5,1000)',
    catList: TaskCreateCatReq(),
    startTime: '@string(5,1000)',
    taskType: '@string(5,1000)',
  }
}
export function TaskWhiteResp() {
  return {
    whiteId: '@string(5,1000)',
    whiteName: '@string(5,1000)',
  }
}
export function TaskInfoResp() {
  return {
    addrList: TaskAddrResp(),
    allDays: '@string(5,1000)',
    createId: '@string(5,1000)',
    created: '@string(5,1000)',
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean()',
    days: '@string(5,1000)',
    whiteList: TaskWhiteResp(),
    endTime: '@string(5,1000)',
    id: '@string(5,1000)',
    isMyCreated: '@boolean()',
    name: '@string(5,1000)',
    catList: TaskCatResp(),
    startTime: '@string(5,1000)',
    taskStatus: '@string(5,1000)',
    taskType: '@string(5,1000)',
  }
}
export function TaskModifyReq() {
  return {
    addrList: TaskCreateAddrReq(),
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean()',
    whiteList: TaskCreateWhiteReq(),
    endTime: '@string(5,1000)',
    id: '@string(5,1000)',
    name: '@string(5,1000)',
    catList: TaskCreateCatReq(),
    startTime: '@string(5,1000)',
    taskType: '@string(5,1000)',
  }
}
export function TaskPageListReq() {
  return {
    createEndTime: '@string(5,1000)',
    createStartTime: '@string(5,1000)',
    endTime: '@string(5,1000)',
    name: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    startTime: '@string(5,1000)',
    taskStatus: '@string(5,1000)',
    type: '@integer(3,1000)',
  }
}
export function TaskPageListResp() {
  return {
    addrList: TaskAddrResp(),
    allDays: '@string(5,1000)',
    createId: '@string(5,1000)',
    created: '@string(5,1000)',
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean()',
    days: '@string(5,1000)',
    whiteList: TaskWhiteResp(),
    endTime: '@string(5,1000)',
    id: '@string(5,1000)',
    isMyCreated: '@boolean()',
    name: '@string(5,1000)',
    catList: TaskCatResp(),
    progress: TaskProgressResp(),
    startTime: '@string(5,1000)',
    taskStatus: '@string(5,1000)',
    taskType: '@string(5,1000)',
  }
}
export function TaskCatResp() {
  return {
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    phone: '@string(5,1000)',
  }
}
export function TaskProgressDetailReq() {
  return {
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    id: '@string(5,1000)',
  }
}
export function TaskProgressDetailResp() {
  return {
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean()',
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    lastLocation: '@string(5,1000)',
    locationDataList: TaskAddrResp(),
    phone: '@string(5,1000)',
    progress: TaskProgressResp(),
    taskStatus: '@string(5,1000)',
  }
}
export function TaskProgressCatResp() {
  return {
    allDays: '@string(5,1000)',
    allTasks: '@string(5,1000)',
    dayHappyNum: '@integer(3,1000)',
    dayHappyOpen: '@boolean()',
    days: '@string(5,1000)',
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    taskFollow: '@string(5,1000)',
    taskStatus: '@string(5,1000)',
    todayAllTask: '@string(5,1000)',
    todayFollow: '@string(5,1000)',
    yesterdayAllTask: '@string(5,1000)',
    yesterdayFollow: '@string(5,1000)',
  }
}
export function TaskProgressResp() {
  return {
    allDays: '@string(5,1000)',
    allTasks: '@string(5,1000)',
    days: '@string(5,1000)',
    taskFollow: '@string(5,1000)',
    todayAllTask: '@string(5,1000)',
    todayFollow: '@string(5,1000)',
    yesterdayAllTask: '@string(5,1000)',
    yesterdayFollow: '@string(5,1000)',
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
    redirectUrl: '@string(5,1000)',
  }
}
export function TreeNodeConfig() {
  return {
    childrenKey: '@string(5,1000)',
    deep: '@integer(3,1000)',
    idKey: '@string(5,1000)',
    nameKey: '@string(5,1000)',
    parentIdKey: '@string(5,1000)',
    weightKey: '@string(5,1000)',
  }
}
export function VerifyRepeatHappyReq() {
  return {
    happyType: '@string(5,1000)',
    code: '@string(5,1000)',
    name: '@string(5,1000)',
  }
}
export function VerifyRepeatCustomerReq() {
  return {
    doorCode: '@string(5,1000)',
    doorName: '@string(5,1000)',
    id: '@string(5,1000)',
  }
}
export function VerifyRepeatCatCustomerReq() {
  return {
    id: '@string(5,1000)',
    catName: '@string(5,1000)',
    phone: '@string(5,1000)',
  }
}
export function ShangChuanWenJianFanHui() {
  return {
    fileUrl: '@string(5,1000)',
    id: '@string(5,1000)',
  }
}
export function BuZaiGenJin() {
  return {
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
    flowType: '@string(5,1000)',
    noFollowReason: '@string(5,1000)',
  }
}
export function ZhiXieChangFaCaiMengXiangQingrpcresponse() {
  return {
    addr: '@string(5,1000)',
    categoryName: '@string(5,1000)',
    contactMobile: '@string(5,1000)',
    contactName: '@string(5,1000)',
    corporateName: '@string(5,1000)',
    doorCode: '@string(5,1000)',
    doorId: '@string(5,1000)',
    doorName: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    establishmentTime: '@string(5,1000)',
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    phone: '@string(5,1000)',
    regCatCnt: '@string(5,1000)',
    orangeeredCapital: '@string(5,1000)',
    score: '@integer(3,1000)',
    skAchievementCnt: '@string(5,1000)',
    skQualificationCnt: '@string(5,1000)',
  }
}
export function GuanLianFaCaiMengRequest() {
  return {
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
    thirdId: '@string(5,1000)',
  }
}
export function GuanLianFaCaiMengResponse() {}
export function FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
  return {
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    contactPhoneList: LianXiRenHuaHuaTi(),
    coordinate: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    dataLocation: '@string(5,1000)',
    distance: '@string(5,1000)',
    followInfoList: HuaHuaTiQingQiu(),
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    hasCustomer: '@boolean()',
    id: '@string(5,1000)',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@string(5,1000)',
    lastFollowTime: '@string(5,1000)',
    catName: '@string(5,1000)',
    planId: '@string(5,1000)',
    planScore: '@string(5,1000)',
    recommendedReason: '@string(5,1000)',
    signId: '@string(5,1000)',
    source: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    thirdId: '@string(5,1000)',
  }
}
export function FenYeLvYouRenCaiFaCaiMengJianDanShuJu() {
  return {
    addr: '@string(5,1000)',
    addrList: DiZhi(),
    area: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    createEndTime: '@string(5,1000)',
    createStartTime: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    distance: '@string(5,1000)',
    followResult: '@string(5,1000)',
    followType: '@string(5,1000)',
    followTypeList: '@string(5,1000)',
    followerId: '@string(5,1000)',
    isRead: '@integer(3,1000)',
    name: '@string(5,1000)',
    orderColumn: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    province: '@string(5,1000)',
    receiveType: '@string(5,1000)',
    size: '@integer(3,1000)',
    source: '@string(5,1000)',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouRenCaiFaCaiMengGongHai() {
  return {
    achievementCntMax: '@string(5,1000)',
    achievementCntMin: '@string(5,1000)',
    addr: '@string(5,1000)',
    addrList: DiZhi(),
    area: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    certificateList: '@string(5,1000)',
    certificateMajor: '@string(5,1000)',
    certificateName: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    createEndTime: '@string(5,1000)',
    createStartTime: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    distance: '@string(5,1000)',
    followResult: '@string(5,1000)',
    followType: '@string(5,1000)',
    followTypeList: '@string(5,1000)',
    followerId: '@string(5,1000)',
    isRead: '@integer(3,1000)',
    level: '@string(5,1000)',
    levelList: '@string(5,1000)',
    major: '@string(5,1000)',
    majorList: '@string(5,1000)',
    name: '@string(5,1000)',
    orderColumn: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    province: '@string(5,1000)',
    receiveType: '@string(5,1000)',
    size: '@integer(3,1000)',
    skCertificateCntMax: '@string(5,1000)',
    skCertificateCntMin: '@string(5,1000)',
    source: '@string(5,1000)',
    taskId: '@string(5,1000)',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouRenCaiFaCaiMengTuiJian() {
  return {
    achievementCntMax: '@string(5,1000)',
    achievementCntMin: '@string(5,1000)',
    addr: '@string(5,1000)',
    addrList: DiZhi(),
    area: '@string(5,1000)',
    certificateMajor: '@string(5,1000)',
    certificateName: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    createEndTime: '@string(5,1000)',
    createStartTime: '@string(5,1000)',
    distance: '@string(5,1000)',
    followResult: '@string(5,1000)',
    followType: '@string(5,1000)',
    followTypeList: '@string(5,1000)',
    level: '@string(5,1000)',
    levelList: '@string(5,1000)',
    major: '@string(5,1000)',
    majorList: '@string(5,1000)',
    name: '@string(5,1000)',
    orderColumn: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    catnelRisk: '@boolean()',
    province: '@string(5,1000)',
    size: '@integer(3,1000)',
    skCertificateCntMax: '@string(5,1000)',
    skCertificateCntMin: '@string(5,1000)',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouRenWu() {
  return {
    cnt: '@string(5,1000)',
    handlerId: '@string(5,1000)',
    handlerName: '@string(5,1000)',
    lastPunchAddr: '@string(5,1000)',
    planHappyList: PagePlanResp(),
    planCount: '@integer(3,1000)',
    planKeyBorardId: '@string(5,1000)',
    signHappyList: PagePlanResp(),
    signCount: '@integer(3,1000)',
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
  return {
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    contactPhoneList: LianXiRenHuaHuaTi(),
    coordinate: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    dataLocation: '@string(5,1000)',
    distance: '@string(5,1000)',
    doorName: '@string(5,1000)',
    followInfoList: HuaHuaTiQingQiu(),
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    hasCustomer: '@boolean()',
    id: '@string(5,1000)',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@string(5,1000)',
    lastFollowTime: '@string(5,1000)',
    planId: '@string(5,1000)',
    planScore: '@string(5,1000)',
    recommendedReason: '@string(5,1000)',
    signId: '@string(5,1000)',
    source: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    thirdId: '@string(5,1000)',
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengJianDanShuJu() {
  return {
    name: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengGongHai() {
  return {
    addr: '@string(5,1000)',
    addrList: DiZhi(),
    area: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    corpCertList: '@string(5,1000)',
    corpCertMax: '@string(5,1000)',
    corpCertMin: '@string(5,1000)',
    createEndTime: '@string(5,1000)',
    createStartTime: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    distance: '@string(5,1000)',
    endTime: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    doorType: '@string(5,1000)',
    doorTypeList: '@string(5,1000)',
    filialeCompanyMax: '@string(5,1000)',
    filialeCompanyMin: '@string(5,1000)',
    followResult: '@string(5,1000)',
    followType: '@string(5,1000)',
    followTypeList: '@string(5,1000)',
    followerId: '@string(5,1000)',
    industryType: '@string(5,1000)',
    isRead: '@integer(3,1000)',
    lackCorpCertList: '@string(5,1000)',
    lackQualicaficationList: '@string(5,1000)',
    name: '@string(5,1000)',
    orderColumn: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    province: '@string(5,1000)',
    qualicaficationList: '@string(5,1000)',
    qualicaficationMax: '@string(5,1000)',
    qualicaficationMin: '@string(5,1000)',
    receiveType: '@string(5,1000)',
    regCatCntMax: '@string(5,1000)',
    regCatCntMin: '@string(5,1000)',
    orangeeredCapitalMax: '@string(5,1000)',
    orangeeredCapitalMin: '@string(5,1000)',
    scoreMax: '@integer(3,1000)',
    scoreMin: '@integer(3,1000)',
    size: '@integer(3,1000)',
    skAchievementCntMax: '@string(5,1000)',
    skAchievementCntMin: '@string(5,1000)',
    skQualificationCntMax: '@string(5,1000)',
    skQualificationCntMin: '@string(5,1000)',
    source: '@string(5,1000)',
    startTime: '@string(5,1000)',
    taskId: '@string(5,1000)',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouZhiXieChangFaCaiMengTuiJian() {
  return {
    addr: '@string(5,1000)',
    addrList: DiZhi(),
    area: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    corpCertList: '@string(5,1000)',
    corpCertMax: '@string(5,1000)',
    corpCertMin: '@string(5,1000)',
    createEndTime: '@string(5,1000)',
    createStartTime: '@string(5,1000)',
    distance: '@string(5,1000)',
    endTime: '@string(5,1000)',
    doorStatus: '@string(5,1000)',
    filialeCompanyList: '@string(5,1000)',
    filialeCompanyMax: '@string(5,1000)',
    filialeCompanyMin: '@string(5,1000)',
    followResult: '@string(5,1000)',
    followType: '@string(5,1000)',
    followTypeList: '@string(5,1000)',
    name: '@string(5,1000)',
    orderColumn: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    province: '@string(5,1000)',
    qualicaficationList: '@string(5,1000)',
    qualicaficationMax: '@string(5,1000)',
    qualicaficationMin: '@string(5,1000)',
    regCatCntMax: '@string(5,1000)',
    regCatCntMin: '@string(5,1000)',
    orangeeredCapitalMax: '@string(5,1000)',
    orangeeredCapitalMin: '@string(5,1000)',
    scoreMax: '@integer(3,1000)',
    scoreMin: '@integer(3,1000)',
    size: '@integer(3,1000)',
    skAchievementCntMax: '@string(5,1000)',
    skAchievementCntMin: '@string(5,1000)',
    skQualificationCntMax: '@string(5,1000)',
    skQualificationCntMin: '@string(5,1000)',
    startTime: '@string(5,1000)',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
  return {
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    contactPhoneList: LianXiRenHuaHuaTi(),
    coordinate: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    dataLocation: '@string(5,1000)',
    distance: '@string(5,1000)',
    followInfoList: HuaHuaTiQingQiu(),
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    hasCustomer: '@boolean()',
    id: '@string(5,1000)',
    isMyself: '@integer(3,1000)',
    isRead: '@integer(3,1000)',
    lastFetchTime: '@string(5,1000)',
    lastFollowTime: '@string(5,1000)',
    planId: '@string(5,1000)',
    planScore: '@string(5,1000)',
    gladName: '@string(5,1000)',
    recommendedReason: '@string(5,1000)',
    signId: '@string(5,1000)',
    source: '@string(5,1000)',
    gratefulId: '@string(5,1000)',
    thirdId: '@string(5,1000)',
  }
}
export function FenYeLvYouXiangMuFaCaiMengJianDanShuJu() {
  return {
    addr: '@string(5,1000)',
    addrList: DiZhi(),
    area: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    createEndTime: '@string(5,1000)',
    createStartTime: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    distance: '@string(5,1000)',
    followResult: '@string(5,1000)',
    followType: '@string(5,1000)',
    followTypeList: '@string(5,1000)',
    followerId: '@string(5,1000)',
    isRead: '@integer(3,1000)',
    name: '@string(5,1000)',
    orderColumn: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    province: '@string(5,1000)',
    receiveType: '@string(5,1000)',
    size: '@integer(3,1000)',
    source: '@string(5,1000)',
    type: '@integer(3,1000)',
  }
}
export function FenYeLvYouXiangMuFaCaiMengTuiJian() {
  return {
    addr: '@string(5,1000)',
    addrList: DiZhi(),
    area: '@string(5,1000)',
    biddingType: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    createEndTime: '@string(5,1000)',
    createStartTime: '@string(5,1000)',
    distance: '@string(5,1000)',
    followResult: '@string(5,1000)',
    followType: '@string(5,1000)',
    followTypeList: '@string(5,1000)',
    industryTypeList: '@string(5,1000)',
    name: '@string(5,1000)',
    orderColumn: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    gladBudgetMax: '@string(5,1000)',
    gladBudgetMin: '@string(5,1000)',
    gladTypeList: '@string(5,1000)',
    province: '@string(5,1000)',
    publishEndTime: '@string(5,1000)',
    publishStartTime: '@string(5,1000)',
    signUpBeginTime: '@string(5,1000)',
    signUpEndTime: '@string(5,1000)',
    size: '@integer(3,1000)',
    type: '@integer(3,1000)',
    valid: '@integer(3,1000)',
  }
}
export function HuaHuaTiQingQiu() {
  return {
    addr: '@string(5,1000)',
    happyId: '@string(5,1000)',
    happyName: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    happyType: '@string(5,1000)',
    contactCatId: '@string(5,1000)',
    contactCatName: '@string(5,1000)',
    contactCatNum: '@string(5,1000)',
    contactCatType: '@integer(3,1000)',
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    followResult: '@string(5,1000)',
    followTime: '@string(5,1000)',
    followType: '@string(5,1000)',
    follower: '@string(5,1000)',
    id: '@string(5,1000)',
    imageUrlList: '@string(5,1000)',
  }
}
export function YuMiHuaHuaTiQingQiu() {
  return {
    mobile: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    keyBorardName: '@string(5,1000)',
  }
}
export function FaCaiMengGenJinJiLuQingQiu() {
  return {
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
    flowType: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function DiZhi() {
  return {
    area: '@string(5,1000)',
    city: '@string(5,1000)',
    province: '@string(5,1000)',
  }
}
export function JiQiRenGenJinJiLuXiangYing() {
  return {
    addr: '@string(5,1000)',
    contactCatId: '@string(5,1000)',
    contactCatName: '@string(5,1000)',
    contactCatNum: '@string(5,1000)',
    contactCatType: '@integer(3,1000)',
    content: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerName: '@string(5,1000)',
    customerType: '@string(5,1000)',
    followResult: '@string(5,1000)',
    followTime: '@string(5,1000)',
    followType: '@string(5,1000)',
    follower: '@string(5,1000)',
    id: '@string(5,1000)',
    imageUrlList: '@string(5,1000)',
  }
}
export function JiQiRenGenJinJiLuQingQiu() {
  return {
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function DaoRuHuaHuaTiXiangYing() {
  return {
    failData: FailData(),
    failNum: '@integer(3,1000)',
    fileName: '@string(5,1000)',
    fileUrl: '@string(5,1000)',
    importTime: '@string(5,1000)',
    operator: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    status: '@integer(3,1000)',
    successNum: '@integer(3,1000)',
  }
}
export function DaoRuHuaHuaTiQingQiu() {
  return {
    endTime: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
    startTime: '@string(5,1000)',
    taskType: '@integer(3,1000)',
  }
}
export function WoCongMingFaCaiMengQuanJuFenLei() {
  return {
    happyType: '@string(5,1000)',
  }
}
export function WoCongMingPaiMingMyRankResp() {
  return {
    dealData: '@integer(3,1000)',
    dealDataRank: '@string(5,1000)',
    followData: '@integer(3,1000)',
    followDataRank: '@string(5,1000)',
    newData: '@integer(3,1000)',
    newDataRank: '@string(5,1000)',
  }
}
export function PaiMingShuJuRankDataResp() {
  return {
    dealData: '@integer(3,1000)',
    followData: '@integer(3,1000)',
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
    newData: '@integer(3,1000)',
  }
}
export function PaiMingTongJiPieDataReq() {
  return {
    beginTime: '@string(5,1000)',
    endTime: '@string(5,1000)',
  }
}
export function PaiMingTongJiRankDataReq() {
  return {
    orderColum: '@string(5,1000)',
  }
}
export function SouSuoRenCaiJiQiRenrequest() {
  return {
    page: '@integer(3,1000)',
    catName: '@string(5,1000)',
    size: '@integer(3,1000)',
  }
}
export function SouSuoRenCaiJiQiRenresponse() {
  return {
    id: '@string(5,1000)',
    catName: '@string(5,1000)',
  }
}
export function SouSuoZhiXieChangJiQiRenrequest() {
  return {
    doorName: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function SouSuoZhiXieChangJiQiRenresponse() {
  return {
    doorName: '@string(5,1000)',
    id: '@string(5,1000)',
  }
}
export function CaoZuoRiZhiFenYerequest() {
  return {
    bizId: '@string(5,1000)',
    bizType: '@string(5,1000)',
    operatorId: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function CaoZuoRiZhiFenYeresponse() {
  return {
    content: '@string(5,1000)',
    logId: '@string(5,1000)',
    operateTime: '@string(5,1000)',
    operateType: '@string(5,1000)',
    operator: '@string(5,1000)',
  }
}
export function GuanShuiXiangMuFaCaiMengrpcChongDong() {
  return {
    agencies: '@string(5,1000)',
    agenciesAddr: '@string(5,1000)',
    agenciesAddrCoordinate: '@string(5,1000)',
    agenciesAddrLat: '@string(5,1000)',
    agenciesAddrLng: '@string(5,1000)',
    agenciesArea: '@string(5,1000)',
    agenciesCity: '@string(5,1000)',
    agenciesCountry: '@string(5,1000)',
    agenciesPhone: '@string(5,1000)',
    agenciesProvince: '@string(5,1000)',
    biddingCorpAddr: '@string(5,1000)',
    biddingCorpAddrCoordinate: '@string(5,1000)',
    biddingCorpAddrLat: '@string(5,1000)',
    biddingCorpAddrLng: '@string(5,1000)',
    biddingCorpArea: '@string(5,1000)',
    biddingCorpCity: '@string(5,1000)',
    biddingCorpCountry: '@string(5,1000)',
    biddingCorpName: '@string(5,1000)',
    biddingCorpPhone: '@string(5,1000)',
    biddingCorpProvince: '@string(5,1000)',
    biddingEndTime: '@string(5,1000)',
    biddingOpeningTime: '@string(5,1000)',
    biddingStartTime: '@string(5,1000)',
    biddingType: '@string(5,1000)',
    fileDownloadEndTime: '@string(5,1000)',
    fileDownloadStartTime: '@string(5,1000)',
    industryType: '@string(5,1000)',
    phone: '@string(5,1000)',
    gladBudget: '@string(5,1000)',
    gladName: '@string(5,1000)',
    gladNum: '@string(5,1000)',
    gladType: '@string(5,1000)',
  }
}
export function GengGaiPaiXuDuiXiang() {
  return {
    list: HappyPlanScoreListReq(),
  }
}
export function ZhuZhuangTuTongJiHistogramDataReq() {
  return {
    happyType: '@string(5,1000)',
    dateType: '@string(5,1000)',
  }
}
export function TianJiaLianXiRenQingQiu() {
  return {
    name: '@string(5,1000)',
    relId: '@string(5,1000)',
    relType: '@integer(3,1000)',
    remark: '@string(5,1000)',
    type: '@integer(3,1000)',
    value: '@string(5,1000)',
  }
}
export function HongLingJinRequest() {
  return {
    happyId: '@string(5,1000)',
    happySource: '@string(5,1000)',
    happyType: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    radarHappyId: '@string(5,1000)',
    signType: '@string(5,1000)',
  }
}
export function HongLingJinJieGuoresponse() {
  return {
    happyId: '@string(5,1000)',
    mobile: '@string(5,1000)',
    signId: '@string(5,1000)',
  }
}
export function HongLingJinJiLuFenYerequest() {
  return {
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    page: '@integer(3,1000)',
    size: '@integer(3,1000)',
  }
}
export function HongLingJinJiLuFenYeresponse() {
  return {
    happyId: '@string(5,1000)',
    happyName: '@string(5,1000)',
    happyType: '@string(5,1000)',
    content: '@string(5,1000)',
    created: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    dealTime: '@string(5,1000)',
    dealType: '@string(5,1000)',
    handler: '@string(5,1000)',
    handlerId: '@string(5,1000)',
    id: '@string(5,1000)',
    schedule: '@string(5,1000)',
    signingType: '@string(5,1000)',
    thirdId: '@string(5,1000)',
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
    label: '@string(5,1000)',
  }
}
export function TongJiShuJuPieDataResp() {
  return {
    beforeTotal: '@integer(3,1000)',
    compareBefore: '@string(5,1000)',
    dealData: '@integer(3,1000)',
    doorData: '@integer(3,1000)',
    followData: '@integer(3,1000)',
    newData: '@integer(3,1000)',
    catData: '@integer(3,1000)',
    gladData: '@integer(3,1000)',
    total: '@integer(3,1000)',
  }
}
export function LianXiRenHuaHuaTi() {
  return {
    addDate: '@string(5,1000)',
    addName: '@string(5,1000)',
    id: '@string(5,1000)',
    name: '@string(5,1000)',
    remark: '@string(5,1000)',
    type: '@integer(3,1000)',
    value: '@string(5,1000)',
  }
}
export function LianXiRenHuaHuaTiQingQiu() {
  return {
    name: '@string(5,1000)',
    page: '@integer(3,1000)',
    relId: '@string(5,1000)',
    relType: '@integer(3,1000)',
    size: '@integer(3,1000)',
    type: '@integer(3,1000)',
  }
}
export function JieChuHongLingJinrequest() {
  return {
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
  }
}
export function DuRuWenJianXiangYing() {
  return {
    id: '@string(5,1000)',
  }
}
export function ZhuanRangQingQiu() {
  return {
    happyId: '@string(5,1000)',
    happyType: '@string(5,1000)',
    followerId: '@string(5,1000)',
    followerName: '@string(5,1000)',
  }
}
export function XiangMuFaCaiMengXiuGairpcrequest() {
  return {
    agencies: '@string(5,1000)',
    agenciesAddr: '@string(5,1000)',
    agenciesAddrCoordinate: '@string(5,1000)',
    agenciesAddrLat: '@string(5,1000)',
    agenciesAddrLng: '@string(5,1000)',
    agenciesArea: '@string(5,1000)',
    agenciesCity: '@string(5,1000)',
    agenciesCountry: '@string(5,1000)',
    agenciesPhone: '@string(5,1000)',
    agenciesProvince: '@string(5,1000)',
    biddingCorpAddr: '@string(5,1000)',
    biddingCorpAddrCoordinate: '@string(5,1000)',
    biddingCorpAddrLat: '@string(5,1000)',
    biddingCorpAddrLng: '@string(5,1000)',
    biddingCorpArea: '@string(5,1000)',
    biddingCorpCity: '@string(5,1000)',
    biddingCorpCountry: '@string(5,1000)',
    biddingCorpName: '@string(5,1000)',
    biddingCorpPhone: '@string(5,1000)',
    biddingCorpProvince: '@string(5,1000)',
    biddingEndTime: '@string(5,1000)',
    biddingOpeningTime: '@string(5,1000)',
    biddingStartTime: '@string(5,1000)',
    biddingType: '@string(5,1000)',
    fileDownloadEndTime: '@string(5,1000)',
    fileDownloadStartTime: '@string(5,1000)',
    industryType: '@string(5,1000)',
    phone: '@string(5,1000)',
    gladBudget: '@string(5,1000)',
    gladId: '@string(5,1000)',
    gladName: '@string(5,1000)',
    gladNum: '@string(5,1000)',
    gladType: '@string(5,1000)',
  }
}
export function XiangMuFaCaiMengGongHaiLvYou() {
  return {
    addr: '@string(5,1000)',
    addrList: DiZhi(),
    area: '@string(5,1000)',
    biddingType: '@string(5,1000)',
    happyStatus: '@string(5,1000)',
    city: '@string(5,1000)',
    coordinate: '@string(5,1000)',
    createEndTime: '@string(5,1000)',
    createStartTime: '@string(5,1000)',
    customerId: '@string(5,1000)',
    customerType: '@string(5,1000)',
    distance: '@string(5,1000)',
    followResult: '@string(5,1000)',
    followType: '@string(5,1000)',
    followTypeList: '@string(5,1000)',
    followerId: '@string(5,1000)',
    industryTypeList: '@string(5,1000)',
    isRead: '@integer(3,1000)',
    name: '@string(5,1000)',
    orderColumn: '@string(5,1000)',
    orderType: '@integer(3,1000)',
    page: '@integer(3,1000)',
    gladBudgetMax: '@string(5,1000)',
    gladBudgetMin: '@string(5,1000)',
    gladTypeList: '@string(5,1000)',
    province: '@string(5,1000)',
    publishEndTime: '@string(5,1000)',
    publishStartTime: '@string(5,1000)',
    receiveType: '@string(5,1000)',
    signUpBeginTime: '@string(5,1000)',
    signUpEndTime: '@string(5,1000)',
    size: '@integer(3,1000)',
    source: '@string(5,1000)',
    taskId: '@string(5,1000)',
    type: '@integer(3,1000)',
    valid: '@integer(3,1000)',
  }
}
export function XiangMuFaCaiMengFenYeLvYourpcrequest() {
  return {
    page: '@integer(3,1000)',
    gladName: '@string(5,1000)',
    size: '@integer(3,1000)',
  }
}
export function XiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    agencies: '@string(5,1000)',
    agenciesAddr: '@string(5,1000)',
    agenciesPhone: '@string(5,1000)',
    biddingCorpAddr: '@string(5,1000)',
    biddingCorpName: '@string(5,1000)',
    biddingCorpPhone: '@string(5,1000)',
    biddingTime: '@string(5,1000)',
    biddingType: '@string(5,1000)',
    industryType: '@string(5,1000)',
    phone: '@string(5,1000)',
    gladBudget: '@string(5,1000)',
    gladId: '@string(5,1000)',
    gladName: '@string(5,1000)',
    gladNum: '@string(5,1000)',
    gladType: '@string(5,1000)',
  }
}
