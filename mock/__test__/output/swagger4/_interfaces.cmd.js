function AddHappyDoorReq() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyClassificationType: '@string(5,50)',
    happySource: '@string(5,50)',
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
    type: '@string(5,50)',
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
function AddHappyCatCertificateReq() {
  return {
    id: '@guid',
    major: '@string(5,50)',
    name: '@ctitle(5,10)',
    pictureUrl: '@image(200x100, @color)',
  }
}
function AddHappyCatReq() {
  return {
    achievementCnt: '@string(5,50)',
    addr: '@string(5,50)',
    area: '@string(5,50)',
    badBehaviorCnt: '@string(5,50)',
    blacklistRecordCnt: '@string(5,50)',
    happyClassificationType: '@string(5,50)',
    happySource: '@string(5,50)',
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
    type: '@string(5,50)',
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
function AddHappyCatTitleReq() {
  return {
    id: '@guid',
    level: '@string(5,50)',
    major: '@string(5,50)',
    pictureUrl: '@image(200x100, @color)',
  }
}
function AddHappyGladReq() {
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
    happySource: '@string(5,50)',
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
    type: '@string(5,50)',
    updateId: '@datetime',
    updateName: '@datetime',
    webPageUrl: '@image(200x100, @color)',
  }
}
function AddHappyReq() {
  return {
    happyClassificationType: '@string(5,50)',
    happySource: '@string(5,50)',
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
    type: '@string(5,50)',
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
function AddHappyResp() {
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
function AddCustomerResp() {
  return {
    'list|1-20': [CustomerDoorInfoResp()],
    repeatType: '@string(5,50)',
  }
}
function AddCatCustomerResp() {
  return {
    'list|1-20': [CustomerCatInfoResp()],
    repeatType: '@string(5,50)',
  }
}
function AddSignHappyDoorReq() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyId: '@guid',
    happySource: '@string(5,50)',
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
    type: '@string(5,50)',
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
function AddSignHappyCatReq() {
  return {
    achievementCnt: '@string(5,50)',
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyId: '@guid',
    happySource: '@string(5,50)',
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
    type: '@string(5,50)',
    updateId: '@datetime',
    updateName: '@datetime',
  }
}
function AddSignHappyGladReq() {
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
    happySource: '@string(5,50)',
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
    type: '@string(5,50)',
    updateId: '@datetime',
    updateName: '@datetime',
    webPageUrl: '@image(200x100, @color)',
  }
}
function AddSignHappyResp() {
  return {
    happyId: '@guid',
    'list|1-20': [''],
    mobile: '@string(5,50)',
    signId: '@guid',
  }
}
function ApiResponse() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseAddHappyResp() {
  return {
    code: 200,
    data: AddHappyResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseAddCustomerResp() {
  return {
    code: 200,
    data: AddCustomerResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseAddCatCustomerResp() {
  return {
    code: 200,
    data: AddCatCustomerResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseAddSignHappyResp() {
  return {
    code: 200,
    data: AddSignHappyResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHappyClassificationResp() {
  return {
    code: 200,
    data: HappyClassificationResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHappyDesktopRulePageResp() {
  return {
    code: 200,
    data: HappyDesktopRulePageResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHappyDesktopRuleResp() {
  return {
    code: 200,
    data: HappyDesktopRuleResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHappyDoorInfoResp() {
  return {
    code: 200,
    data: HappyDoorInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHappyNumResp() {
  return {
    code: 200,
    data: HappyNumResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHappyCatInfoResp() {
  return {
    code: 200,
    data: HappyCatInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHappyPlanCountResp() {
  return {
    code: 200,
    data: HappyPlanCountResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHappyGladInfoResp() {
  return {
    code: 200,
    data: HappyGladInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHappyPushInfoResp() {
  return {
    code: 200,
    data: HappyPushInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHappyReceiveResp() {
  return {
    code: 200,
    data: HappyReceiveResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHappySubscribeInfoResp() {
  return {
    code: 200,
    data: HappySubscribeInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageHappyPushDetail() {
  return {
    code: 200,
    data: ComPageHappyPushDetail(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageCustomerDoorInfoResp() {
  return {
    code: 200,
    data: ComPageCustomerDoorInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageCustomerCatInfoResp() {
  return {
    code: 200,
    data: ComPageCustomerCatInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageDesktopListResp() {
  return {
    code: 200,
    data: ComPageDesktopListResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageLocationDateInfoResp() {
  return {
    code: 200,
    data: ComPageLocationDateInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageLocationInfoResp() {
  return {
    code: 200,
    data: ComPageLocationInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPagePageHappyResp() {
  return {
    code: 200,
    data: ComPagePageHappyResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPagePageDoorHappyPoolResp() {
  return {
    code: 200,
    data: ComPagePageDoorHappyPoolResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPagePageCatHappyPoolResp() {
  return {
    code: 200,
    data: ComPagePageCatHappyPoolResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPagePageGladHappyPoolResp() {
  return {
    code: 200,
    data: ComPagePageGladHappyPoolResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPagePunchPageResp() {
  return {
    code: 200,
    data: ComPagePunchPageResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageTaskPageListResp() {
  return {
    code: 200,
    data: ComPageTaskPageListResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageTreelong() {
  return {
    code: 200,
    data: ComPageTreelong(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
  return {
    code: 200,
    data: ComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageFenYeLvYouRenWu() {
  return {
    code: 200,
    data: ComPageFenYeLvYouRenWu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
  return {
    code: 200,
    data: ComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
  return {
    code: 200,
    data: ComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageHuaHuaTiQingQiu() {
  return {
    code: 200,
    data: ComPageHuaHuaTiQingQiu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageJiQiRenGenJinJiLuXiangYing() {
  return {
    code: 200,
    data: ComPageJiQiRenGenJinJiLuXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageDaoRuHuaHuaTiXiangYing() {
  return {
    code: 200,
    data: ComPageDaoRuHuaHuaTiXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageSouSuoRenCaiJiQiRenresponse() {
  return {
    code: 200,
    data: ComPageSouSuoRenCaiJiQiRenresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageSouSuoZhiXieChangJiQiRenresponse() {
  return {
    code: 200,
    data: ComPageSouSuoZhiXieChangJiQiRenresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageCaoZuoRiZhiFenYeresponse() {
  return {
    code: 200,
    data: ComPageCaoZuoRiZhiFenYeresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageHongLingJinJiLuFenYeresponse() {
  return {
    code: 200,
    data: ComPageHongLingJinJiLuFenYeresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageLianXiRenHuaHuaTi() {
  return {
    code: 200,
    data: ComPageLianXiRenHuaHuaTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseComPageXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    code: 200,
    data: ComPageXiangMuFaCaiMengXiangQingrpcresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseCountCustomerHappyNumResp() {
  return {
    code: 200,
    data: CountCustomerHappyNumResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseCustomerDoorAddResp() {
  return {
    code: 200,
    data: CustomerDoorAddResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseCustomerDoorDetailResp() {
  return {
    code: 200,
    data: CustomerDoorDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseCustomerDoorNumResp() {
  return {
    code: 200,
    data: CustomerDoorNumResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseCustomerCatAddResp() {
  return {
    code: 200,
    data: CustomerCatAddResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseCustomerCatDetailResp() {
  return {
    code: 200,
    data: CustomerCatDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseDesktopResp() {
  return {
    code: 200,
    data: DesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListHappyPlanCoordinateResp() {
  return {
    code: 200,
    'data|1-20': [HappyPlanCoordinateResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListCustomerDoorFromDataResp() {
  return {
    code: 200,
    'data|1-20': [CustomerDoorFromDataResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListDayCityResp() {
  return {
    code: 200,
    'data|1-20': [DayCityResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListWhiteNoteResp() {
  return {
    code: 200,
    'data|1-20': [WhiteNoteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListWhiteResp() {
  return {
    code: 200,
    'data|1-20': [WhiteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListDocument() {
  return {
    code: 200,
    'data|1-20': [Document()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListDesktopResp() {
  return {
    code: 200,
    'data|1-20': [DesktopResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListLocationInfoResp() {
  return {
    code: 200,
    'data|1-20': [LocationInfoResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListPagePlanResp() {
  return {
    code: 200,
    'data|1-20': [PagePlanResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListTaskProgressDetailResp() {
  return {
    code: 200,
    'data|1-20': [TaskProgressDetailResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListTaskProgressCatResp() {
  return {
    code: 200,
    'data|1-20': [TaskProgressCatResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListTreelong() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListTreestring() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListobject() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListstring() {
  return {
    code: 200,
    'data|1-20': ['@string(5,50)'],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseListTongJiShuJuHistogramResp() {
  return {
    code: 200,
    'data|1-20': [TongJiShuJuHistogramResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseMaplongCustomerDoorDetailResp() {
  return {
    code: 200,
    data: CustomerDoorDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseGladSignInfoResp() {
  return {
    code: 200,
    data: GladSignInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseRankResp() {
  return {
    code: 200,
    data: RankResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseTaskInfoResp() {
  return {
    code: 200,
    data: TaskInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseTravelLoginResp() {
  return {
    code: 200,
    data: TravelLoginResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseVoid() {
  return {
    code: 200,
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseboolean() {
  return {
    code: 200,
    data: '@boolean',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponselong() {
  return {
    code: 200,
    data: '@string(5,50)',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
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
function ApiResponsestring() {
  return {
    code: 200,
    data: '@string(5,50)',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseShangChuanWenJianFanHui() {
  return {
    code: 200,
    data: ShangChuanWenJianFanHui(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseZhiXieChangFaCaiMengXiangQingrpcresponse() {
  return {
    code: 200,
    data: ZhiXieChangFaCaiMengXiangQingrpcresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseGuanLianFaCaiMengResponse() {
  return {
    code: 200,
    data: GuanLianFaCaiMengResponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHuaHuaTiQingQiu() {
  return {
    code: 200,
    data: HuaHuaTiQingQiu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseHongLingJinJieGuoresponse() {
  return {
    code: 200,
    data: HongLingJinJieGuoresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseTongJiShuJuPieDataResp() {
  return {
    code: 200,
    data: TongJiShuJuPieDataResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseLianXiRenHuaHuaTi() {
  return {
    code: 200,
    data: LianXiRenHuaHuaTi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseDuRuWenJianXiangYing() {
  return {
    code: 200,
    data: DuRuWenJianXiangYing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function ApiResponseXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    code: 200,
    data: XiangMuFaCaiMengXiangQingrpcresponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
function AssignHappyReq() {
  return {
    'happyList|1-20': [AddHappyReq()],
    happyReceiveSource: '@string(5,50)',
    happyType: '@string(5,50)',
    date: '@datetime',
    receiverId: '@guid',
    receiverName: '@ctitle(5,10)',
  }
}
function HappyClassificationResp() {
  return {
    'happyClassificationList|1-20': [HappyCntResp()],
  }
}
function HappyCntResp() {
  return {
    count: '@string(5,50)',
    label: '@string(5,50)',
    value: '@string(5,50)',
  }
}
function HappyDesktopDetailRulePageResp() {
  return {
    happyNumEveryday: '@integer(3,1000)',
    desktopId: '@guid',
    desktopName: '@ctitle(5,10)',
    doorLimit: '@integer(3,1000)',
    catLimit: '@integer(3,1000)',
    gladLimit: '@integer(3,1000)',
  }
}
function HappyDesktopDetailRuleReq() {
  return {
    happyNumEveryday: '@integer(3,1000)',
    desktopId: '@guid',
    desktopName: '@ctitle(5,10)',
    doorLimit: '@integer(3,1000)',
    catLimit: '@integer(3,1000)',
    gladLimit: '@integer(3,1000)',
  }
}
function HappyDesktopRulePageReq() {
  return {
    'desktopIdList|1-20': ['@string(5,50)'],
    page: '@integer(3,1000)',
    size: '20',
  }
}
function HappyDesktopRulePageResp() {
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
function HappyDesktopRuleReq() {
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
function HappyDesktopRuleResp() {
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
function HappyDoorInfoResp() {
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
function HappyFollowReq() {
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
function HappyFollowRuleReq() {
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
function HappyNumReq() {
  return {
    happyType: '@string(5,50)',
    type: '@integer(3,1000)',
  }
}
function HappyNumResp() {
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
function HappyCatCertificateResp() {
  return {
    certificateNum: '@string(5,50)',
    createName: '@ctitle(5,10)',
    created: '@datetime',
    id: '@guid',
    major: '@string(5,50)',
    name: '@ctitle(5,10)',
    pictureUrl: '@image(200x100, @color)',
    orangeered: '@string(5,50)',
  }
}
function HappyCatInfoResp() {
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
function HappyCatTitleResp() {
  return {
    id: '@guid',
    level: '@string(5,50)',
    major: '@string(5,50)',
    pictureUrl: '@image(200x100, @color)',
  }
}
function HappyPlanAddHappyListReq() {
  return {
    happyType: '@string(5,50)',
    id: '@guid',
  }
}
function HappyPlanAddHappyReq() {
  return {
    'addHappyList|1-20': [HappyPlanAddHappyListReq()],
    date: '@datetime',
  }
}
function HappyPlanAddCustomerListReq() {
  return {
    customerType: '@string(5,50)',
    id: '@guid',
  }
}
function HappyPlanAddCustomerReq() {
  return {
    'addCustomerList|1-20': [HappyPlanAddCustomerListReq()],
    'dateList|1-20': [ErrorModelNamenamespacejavatimenameLocalDateTime()],
  }
}
function HappyPlanCoordinateResp() {
  return {
    coordinate: '@string(5,50)',
    created: '@datetime',
    planId: '@guid',
  }
}
function HappyPlanCountReq() {
  return {
    date: '@datetime',
  }
}
function HappyPlanCountResp() {
  return {
    taskCount: '@integer(3,1000)',
    todayCount: '@integer(3,1000)',
  }
}
function HappyPlanDateListByTypeReq() {
  return {
    id: '@guid',
    taskType: '@integer(3,1000)',
    type: '@string(5,50)',
  }
}
function HappyPlanDateListReq() {
  return {
    endDate: '@datetime',
    'handlerIdList|1-20': ['@string(5,50)'],
    startDate: '@datetime',
    type: '@integer(3,1000)',
  }
}
function HappyPlanDeleteReq() {
  return {
    planId: '@guid',
  }
}
function HappyPlanPageReq() {
  return {
    date: '@datetime',
    'handlerIdList|1-20': ['@string(5,50)'],
    page: '@integer(3,1000)',
    size: '20',
  }
}
function HappyPlanPunchReq() {
  return {
    date: '@datetime',
  }
}
function HappyPlanRecommendedReq() {
  return {
    happyType: '@string(5,50)',
    date: '@datetime',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function HappyPlanScoreListReq() {
  return {
    planId: '@guid',
    score: '@string(5,50)',
  }
}
function HappyGladInfoResp() {
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
    webPageUrl: '@image(200x100, @color)',
  }
}
function HappyPushDetail() {
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
function HappyPushInfoResp() {
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
function HappyPushCatInfoResp() {
  return {
    'areaList|1-20': [DiZhi()],
    'catList|1-20': [HappyPushCatResp()],
    pushNum: '@integer(3,1000)',
  }
}
function HappyPushCatResp() {
  return {
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
  }
}
function HappyReceiveResp() {
  return {
    failCnt: '@integer(3,1000)',
    id: '@guid',
    licenseId: '@guid',
    gladName: '@ctitle(5,10)',
    receiveName: '@ctitle(5,10)',
    successCnt: '@integer(3,1000)',
  }
}
function HappySetVisitPlanReq() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    expectedDate: '@datetime',
    interfaceType: '@string(5,50)',
  }
}
function HappySubscribeInfoReq() {
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
function HappySubscribeInfoResp() {
  return {
    doorEnable: '@integer(3,1000)',
    doorJson: '@string(5,50)',
    catEnable: '@integer(3,1000)',
    catJson: '@string(5,50)',
    gladEnable: '@integer(3,1000)',
    gladJson: '@string(5,50)',
  }
}
function CharSequence() {}
function ComPageHappyDesktopDetailRulePageResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [HappyDesktopDetailRulePageResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageHappyPushDetail() {
  return {
    current: '@string(5,50)',
    'records|1-20': [HappyPushDetail()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageCustomerDoorInfoResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [CustomerDoorInfoResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageCustomerCatInfoResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [CustomerCatInfoResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageDesktopListResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DesktopListResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageLocationDateInfoResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [LocationDateInfoResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageLocationInfoResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [LocationInfoResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPagePageHappyResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [PageHappyResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPagePageDoorHappyPoolResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [PageDoorHappyPoolResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPagePageCatHappyPoolResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [PageCatHappyPoolResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPagePageGladHappyPoolResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [PageGladHappyPoolResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPagePunchPageResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [PunchPageResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageTaskPageListResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [TaskPageListResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageTreelong() {
  return {
    current: '@string(5,50)',
    'records|1-20': [''],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
  return {
    current: '@string(5,50)',
    'records|1-20': [FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageFenYeLvYouRenWu() {
  return {
    current: '@string(5,50)',
    'records|1-20': [FenYeLvYouRenWu()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
  return {
    current: '@string(5,50)',
    'records|1-20': [FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
  return {
    current: '@string(5,50)',
    'records|1-20': [FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageHuaHuaTiQingQiu() {
  return {
    current: '@string(5,50)',
    'records|1-20': [HuaHuaTiQingQiu()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageJiQiRenGenJinJiLuXiangYing() {
  return {
    current: '@string(5,50)',
    'records|1-20': [JiQiRenGenJinJiLuXiangYing()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageDaoRuHuaHuaTiXiangYing() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DaoRuHuaHuaTiXiangYing()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageSouSuoRenCaiJiQiRenresponse() {
  return {
    current: '@string(5,50)',
    'records|1-20': [SouSuoRenCaiJiQiRenresponse()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageSouSuoZhiXieChangJiQiRenresponse() {
  return {
    current: '@string(5,50)',
    'records|1-20': [SouSuoZhiXieChangJiQiRenresponse()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageCaoZuoRiZhiFenYeresponse() {
  return {
    current: '@string(5,50)',
    'records|1-20': [CaoZuoRiZhiFenYeresponse()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageHongLingJinJiLuFenYeresponse() {
  return {
    current: '@string(5,50)',
    'records|1-20': [HongLingJinJiLuFenYeresponse()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageLianXiRenHuaHuaTi() {
  return {
    current: '@string(5,50)',
    'records|1-20': [LianXiRenHuaHuaTi()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function ComPageXiangMuFaCaiMengXiangQingrpcresponse() {
  return {
    current: '@string(5,50)',
    'records|1-20': [XiangMuFaCaiMengXiangQingrpcresponse()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function Comparableobject() {}
function ContactAddReq() {
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
function ContactDetailResp() {
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
function CountCustomerHappyNumReq() {
  return {
    id: '@guid',
  }
}
function CountCustomerHappyNumResp() {
  return {
    totalNum: '@integer(3,1000)',
    'typeNum|1-20': [CountCustomerHappyNumTypeResp()],
  }
}
function CountCustomerHappyNumTypeResp() {
  return {
    signNum: '@integer(3,1000)',
    type: '@string(5,50)',
    unsignedNum: '@integer(3,1000)',
  }
}
function CustomerDoorAddReq() {
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
    'fileUrlList|1-20': ['@image(200x100, @color)'],
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
function CustomerDoorAddResp() {
  return {
    id: '@guid',
    'list|1-20': [CustomerDoorInfoResp()],
    repeatType: '@string(5,50)',
  }
}
function CustomerDoorDetailResp() {
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
    'fileUrlList|1-20': ['@image(200x100, @color)'],
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
function CustomerDoorFromDataReq() {
  return {
    companyName: '@ctitle(5,10)',
    companyNum: '@string(5,50)',
    size: '20',
  }
}
function CustomerDoorFromDataResp() {
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
function CustomerDoorInfoResp() {
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
    'fileUrlList|1-20': ['@image(200x100, @color)'],
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
function CustomerDoorNumReq() {
  return {
    createEndTime: '@datetime',
    createStartTime: '@datetime',
    own: '@boolean',
  }
}
function CustomerDoorNumResp() {
  return {
    attrCountryNum: '@integer(3,1000)',
    attrGovernmentNUm: '@integer(3,1000)',
    attrPrivateNum: '@integer(3,1000)',
    attrPublicNum: '@integer(3,1000)',
    otherNum: '@integer(3,1000)',
    todayNum: '@integer(3,1000)',
  }
}
function CustomerDoorUpReq() {
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
    'fileUrlList|1-20': ['@image(200x100, @color)'],
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
function CustomerFollowReq() {
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
function CustomerInvoiceAddReq() {
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
function CustomerInvoiceDetailResp() {
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
function CustomerLabelReq() {
  return {
    id: '@guid',
    labelName: '@ctitle(5,10)',
  }
}
function CustomerLabelResp() {
  return {
    id: '@guid',
    labelName: '@ctitle(5,10)',
  }
}
function CustomerCatAddReq() {
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
    'fileUrlList|1-20': ['@image(200x100, @color)'],
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
function CustomerCatAddResp() {
  return {
    id: '@guid',
    'list|1-20': [CustomerCatInfoResp()],
  }
}
function CustomerCatCertificateInfoResp() {
  return {
    createName: '@ctitle(5,10)',
    created: '@datetime',
    customerId: '@guid',
    id: '@guid',
    major: '@string(5,50)',
    name: '@ctitle(5,10)',
    pictureUrl: '@image(200x100, @color)',
    orangeered: '@string(5,50)',
  }
}
function CustomerCatCertificateReq() {
  return {
    customerId: '@guid',
    id: '@guid',
    major: '@string(5,50)',
    name: '@ctitle(5,10)',
  }
}
function CustomerCatDetailResp() {
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
    'fileUrlList|1-20': ['@image(200x100, @color)'],
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
function CustomerCatInfoResp() {
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
function CustomerCatTitleInfoResp() {
  return {
    customerId: '@guid',
    id: '@guid',
    level: '@string(5,50)',
    major: '@string(5,50)',
    pictureUrl: '@image(200x100, @color)',
  }
}
function CustomerCatTitleReq() {
  return {
    customerId: '@guid',
    id: '@guid',
    level: '@string(5,50)',
    major: '@string(5,50)',
  }
}
function CustomerCatUpReq() {
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
    'fileUrlList|1-20': ['@image(200x100, @color)'],
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
function DayCityReq() {
  return {
    endTime: '@datetime',
    startTime: '@datetime',
  }
}
function DayCityResp() {
  return {
    'cityList|1-20': ['@city'],
    dayTime: '@datetime',
  }
}
function DelReq() {
  return {
    id: '@guid',
  }
}
function DeleteReq() {
  return {
    id: '@guid',
  }
}
function WhiteListReq() {
  return {
    parentId: '@guid',
    scaleType: '@string(5,50)',
  }
}
function WhiteNoteResp() {
  return {
    desktopCount: '@integer(3,1000)',
    info: WhiteResp(),
  }
}
function WhiteReq() {
  return {
    whiteName: '@ctitle(5,10)',
    parentId: '@guid',
  }
}
function WhiteResp() {
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
function Document() {
  return {
    content: '@string(5,50)',
    id: '@guid',
    location: '@string(5,50)',
    title: '@ctitle(5,10)',
  }
}
function DesktopListResp() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
  }
}
function DesktopResp() {
  return {
    id: '@guid',
    mobile: '@string(5,50)',
    keyBorardName: '@ctitle(5,10)',
  }
}
function FailData() {
  return {
    excelNum: '@integer(3,1000)',
    firstName: '@ctitle(5,10)',
    reason: '@string(5,50)',
  }
}
function FollowAgainReq() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
  }
}
function FollowListReq() {
  return {
    page: '@integer(3,1000)',
    size: '20',
    taskId: '@guid',
  }
}
function ImportExcelByUrlReq() {
  return {
    fileName: '@ctitle(5,10)',
    fileUrl: '@image(200x100, @color)',
    taskType: '@integer(3,1000)',
  }
}
function ImportListReq() {
  return {
    endTime: '@datetime',
    page: '@integer(3,1000)',
    size: '20',
    startTime: '@datetime',
    taskType: '@integer(3,1000)',
  }
}
function InnerRpcCustomerDoorAddReq() {
  return {
    req: CustomerDoorAddReq(),
  }
}
function InnerRpcCustomerDoorFromDataReq() {
  return {
    req: CustomerDoorFromDataReq(),
  }
}
function InnerRpcCustomerDoorNumReq() {
  return {
    req: CustomerDoorNumReq(),
  }
}
function InnerRpcCustomerDoorUpReq() {
  return {
    req: CustomerDoorUpReq(),
  }
}
function InnerRpcCustomerCatAddReq() {
  return {
    req: CustomerCatAddReq(),
  }
}
function InnerRpcCustomerCatUpReq() {
  return {
    req: CustomerCatUpReq(),
  }
}
function InnerRpcImportExcelByUrlReq() {
  return {
    req: ImportExcelByUrlReq(),
  }
}
function InnerRpcImportListReq() {
  return {
    req: ImportListReq(),
  }
}
function InnerRpcPageContactReq() {
  return {
    req: PageContactReq(),
  }
}
function InnerRpcPageCustomerDoorReq() {
  return {
    req: PageCustomerDoorReq(),
  }
}
function InnerRpcPageCustomerCatReq() {
  return {
    req: PageCustomerCatReq(),
  }
}
function InnerRpcSelectCustomerDoorReq() {
  return {
    req: SelectCustomerDoorReq(),
  }
}
function InnerRpclong() {
  return {
    req: '@string(5,50)',
  }
}
function InnerRpcGuanShuiXiangMuFaCaiMengrpcChongDong() {
  return {
    req: GuanShuiXiangMuFaCaiMengrpcChongDong(),
  }
}
function ListDesktopReq() {
  return {
    whiteId: '@guid',
    keyword: '@string(5,50)',
  }
}
function ListLocationReq() {
  return {
    date: '@datetime',
    followerId: '@guid',
  }
}
function LocationAddReq() {
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
function LocationDateInfoResp() {
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
function LocationInfoResp() {
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
function PageHappyMixReq() {
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
function PageHappyResp() {
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
function PageContactReq() {
  return {
    doorId: '@guid',
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function PageCustomerDoorReq() {
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
function PageCustomerCatReq() {
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
function PageDoorHappyPoolResp() {
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
function PageLocationByTaskReq() {
  return {
    desktopName: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
    taskId: '@guid',
  }
}
function PageLocationReq() {
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
function PageCatHappyPoolResp() {
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
function PagePlanResp() {
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
function PageGladHappyPoolResp() {
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
function GladSignInfoResp() {
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
function PunchPageReq() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function PunchPageResp() {
  return {
    addr: '@string(5,50)',
    area: '@string(5,50)',
    happyId: '@guid',
    happyType: '@string(5,50)',
    city: '@city',
    coordinate: '@string(5,50)',
    country: '@string(5,50)',
    createName: '@ctitle(5,10)',
    'imageUrlList|1-20': ['@image(200x100, @color)'],
    location: '@string(5,50)',
    province: '@province',
    punchTime: '@datetime',
  }
}
function PunchReq() {
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
function RankResp() {
  return {
    'list|1-20': [PaiMingShuJuRankDataResp()],
    rank: WoCongMingPaiMingMyRankResp(),
  }
}
function ReceiveHappyReq() {
  return {
    'happyList|1-20': [''],
    happyReceiveSource: '@string(5,50)',
    happyType: '@string(5,50)',
  }
}
function Recommended2PlanReq() {
  return {
    date: '@datetime',
  }
}
function SelectCustomerDoorReq() {
  return {
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
  }
}
function SelectCustomerDoorGratefulReq() {
  return {
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    'gratefulIdList|1-20': ['@string(5,50)'],
  }
}
function TaskAddrResp() {
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
function TaskChangeStatusReq() {
  return {
    id: '@guid',
    taskStatus: '@string(5,50)',
  }
}
function TaskCreateAddrReq() {
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
function TaskCreateWhiteReq() {
  return {
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
  }
}
function TaskCreateCatReq() {
  return {
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
  }
}
function TaskCreateReq() {
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
function TaskWhiteResp() {
  return {
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
  }
}
function TaskInfoResp() {
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
function TaskModifyReq() {
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
function TaskPageListReq() {
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
function TaskPageListResp() {
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
function TaskCatResp() {
  return {
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
  }
}
function TaskProgressDetailReq() {
  return {
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    id: '@guid',
  }
}
function TaskProgressDetailResp() {
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
function TaskProgressCatResp() {
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
function TaskProgressResp() {
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
function TravelLoginReq() {
  return {
    entrance: '@integer(3,1000)',
    plat: '@integer(3,1000)',
  }
}
function TravelLoginResp() {
  return {
    redirectUrl: '@image(200x100, @color)',
  }
}
function TreeNodeConfig() {
  return {
    childrenKey: '@string(5,50)',
    deep: '@integer(3,1000)',
    idKey: '@string(5,50)',
    nameKey: '@ctitle(5,10)',
    parentIdKey: '@string(5,50)',
    weightKey: '@string(5,50)',
  }
}
function VerifyRepeatHappyReq() {
  return {
    happyType: '@string(5,50)',
    code: 200,
    name: '@ctitle(5,10)',
  }
}
function VerifyRepeatCustomerReq() {
  return {
    doorCode: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    id: '@guid',
  }
}
function VerifyRepeatCatCustomerReq() {
  return {
    id: '@guid',
    catName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
  }
}
function ShangChuanWenJianFanHui() {
  return {
    fileUrl: '@image(200x100, @color)',
    id: '@guid',
  }
}
function BuZaiGenJin() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    flowType: '@string(5,50)',
    noFollowReason: '@string(5,50)',
  }
}
function ZhiXieChangFaCaiMengXiangQingrpcresponse() {
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
function GuanLianFaCaiMengRequest() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    thirdId: '@guid',
  }
}
function GuanLianFaCaiMengResponse() {}
function FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
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
function FenYeLvYouRenCaiFaCaiMengJianDanShuJu() {
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
function FenYeLvYouRenCaiFaCaiMengGongHai() {
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
function FenYeLvYouRenCaiFaCaiMengTuiJian() {
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
function FenYeLvYouRenWu() {
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
function FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
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
function FenYeLvYouZhiXieChangFaCaiMengJianDanShuJu() {
  return {
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function FenYeLvYouZhiXieChangFaCaiMengGongHai() {
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
function FenYeLvYouZhiXieChangFaCaiMengTuiJian() {
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
function FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
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
function FenYeLvYouXiangMuFaCaiMengJianDanShuJu() {
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
function FenYeLvYouXiangMuFaCaiMengTuiJian() {
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
function HuaHuaTiQingQiu() {
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
    'imageUrlList|1-20': ['@image(200x100, @color)'],
  }
}
function YuMiHuaHuaTiQingQiu() {
  return {
    mobile: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    keyBorardName: '@ctitle(5,10)',
  }
}
function FaCaiMengGenJinJiLuQingQiu() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    'flowType|1-20': ['@string(5,50)'],
    page: '@integer(3,1000)',
    size: '20',
  }
}
function DiZhi() {
  return {
    area: '@string(5,50)',
    city: '@city',
    province: '@province',
  }
}
function JiQiRenGenJinJiLuXiangYing() {
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
    'imageUrlList|1-20': ['@image(200x100, @color)'],
  }
}
function JiQiRenGenJinJiLuQingQiu() {
  return {
    customerId: '@guid',
    customerType: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function DaoRuHuaHuaTiXiangYing() {
  return {
    'failData|1-20': [FailData()],
    failNum: '@integer(3,1000)',
    fileName: '@ctitle(5,10)',
    fileUrl: '@image(200x100, @color)',
    importTime: '@datetime',
    operator: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    status: '@integer(3,1000)',
    successNum: '@integer(3,1000)',
  }
}
function DaoRuHuaHuaTiQingQiu() {
  return {
    endTime: '@datetime',
    page: '@integer(3,1000)',
    size: '20',
    startTime: '@datetime',
    taskType: '@integer(3,1000)',
  }
}
function WoCongMingFaCaiMengQuanJuFenLei() {
  return {
    happyType: '@string(5,50)',
  }
}
function WoCongMingPaiMingMyRankResp() {
  return {
    dealData: '@integer(3,1000)',
    dealDataRank: '@string(5,50)',
    followData: '@integer(3,1000)',
    followDataRank: '@string(5,50)',
    newData: '@integer(3,1000)',
    newDataRank: '@string(5,50)',
  }
}
function PaiMingShuJuRankDataResp() {
  return {
    dealData: '@integer(3,1000)',
    followData: '@integer(3,1000)',
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
    newData: '@integer(3,1000)',
  }
}
function PaiMingTongJiPieDataReq() {
  return {
    beginTime: '@datetime',
    endTime: '@datetime',
  }
}
function PaiMingTongJiRankDataReq() {
  return {
    orderColum: '@string(5,50)',
  }
}
function SouSuoRenCaiJiQiRenrequest() {
  return {
    page: '@integer(3,1000)',
    catName: '@ctitle(5,10)',
    size: '20',
  }
}
function SouSuoRenCaiJiQiRenresponse() {
  return {
    id: '@guid',
    catName: '@ctitle(5,10)',
  }
}
function SouSuoZhiXieChangJiQiRenrequest() {
  return {
    doorName: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function SouSuoZhiXieChangJiQiRenresponse() {
  return {
    doorName: '@ctitle(5,10)',
    id: '@guid',
  }
}
function CaoZuoRiZhiFenYerequest() {
  return {
    bizId: '@guid',
    bizType: '@string(5,50)',
    operatorId: '@guid',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function CaoZuoRiZhiFenYeresponse() {
  return {
    content: '@string(5,50)',
    logId: '@guid',
    operateTime: '@datetime',
    operateType: '@string(5,50)',
    operator: '@string(5,50)',
  }
}
function GuanShuiXiangMuFaCaiMengrpcChongDong() {
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
function GengGaiPaiXuDuiXiang() {
  return {
    'list|1-20': [HappyPlanScoreListReq()],
  }
}
function ZhuZhuangTuTongJiHistogramDataReq() {
  return {
    happyType: '@string(5,50)',
    dateType: '@datetime',
  }
}
function TianJiaLianXiRenQingQiu() {
  return {
    name: '@ctitle(5,10)',
    relId: '@guid',
    relType: '@integer(3,1000)',
    remark: '@string(5,50)',
    type: '@integer(3,1000)',
    value: '@string(5,50)',
  }
}
function HongLingJinRequest() {
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
function HongLingJinJieGuoresponse() {
  return {
    happyId: '@guid',
    mobile: '@string(5,50)',
    signId: '@guid',
  }
}
function HongLingJinJiLuFenYerequest() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
    customerId: '@guid',
    customerType: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
function HongLingJinJiLuFenYeresponse() {
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
function TongJiShuJuHistogramDataResp() {
  return {
    dealData: '@integer(3,1000)',
    followData: '@integer(3,1000)',
    invalidData: '@integer(3,1000)',
    newData: '@integer(3,1000)',
  }
}
function TongJiShuJuHistogramResp() {
  return {
    data: TongJiShuJuHistogramDataResp(),
    label: '@string(5,50)',
  }
}
function TongJiShuJuPieDataResp() {
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
function LianXiRenHuaHuaTi() {
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
function LianXiRenHuaHuaTiQingQiu() {
  return {
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    relId: '@guid',
    relType: '@integer(3,1000)',
    size: '20',
    type: '@integer(3,1000)',
  }
}
function JieChuHongLingJinrequest() {
  return {
    happyId: '@guid',
    happyType: '@string(5,50)',
  }
}
function DuRuWenJianXiangYing() {
  return {
    id: '@guid',
  }
}
function ZhuanRangQingQiu() {
  return {
    'happyId|1-20': ['@guid'],
    happyType: '@string(5,50)',
    followerId: '@guid',
    followerName: '@ctitle(5,10)',
  }
}
function XiangMuFaCaiMengXiuGairpcrequest() {
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
function XiangMuFaCaiMengGongHaiLvYou() {
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
function XiangMuFaCaiMengFenYeLvYourpcrequest() {
  return {
    page: '@integer(3,1000)',
    gladName: '@ctitle(5,10)',
    size: '20',
  }
}
function XiangMuFaCaiMengXiangQingrpcresponse() {
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
module.exports = {
  AddHappyDoorReq,
  AddHappyCatCertificateReq,
  AddHappyCatReq,
  AddHappyCatTitleReq,
  AddHappyGladReq,
  AddHappyReq,
  AddHappyResp,
  AddCustomerResp,
  AddCatCustomerResp,
  AddSignHappyDoorReq,
  AddSignHappyCatReq,
  AddSignHappyGladReq,
  AddSignHappyResp,
  ApiResponse,
  ApiResponseAddHappyResp,
  ApiResponseAddCustomerResp,
  ApiResponseAddCatCustomerResp,
  ApiResponseAddSignHappyResp,
  ApiResponseHappyClassificationResp,
  ApiResponseHappyDesktopRulePageResp,
  ApiResponseHappyDesktopRuleResp,
  ApiResponseHappyDoorInfoResp,
  ApiResponseHappyNumResp,
  ApiResponseHappyCatInfoResp,
  ApiResponseHappyPlanCountResp,
  ApiResponseHappyGladInfoResp,
  ApiResponseHappyPushInfoResp,
  ApiResponseHappyReceiveResp,
  ApiResponseHappySubscribeInfoResp,
  ApiResponseComPageHappyPushDetail,
  ApiResponseComPageCustomerDoorInfoResp,
  ApiResponseComPageCustomerCatInfoResp,
  ApiResponseComPageDesktopListResp,
  ApiResponseComPageLocationDateInfoResp,
  ApiResponseComPageLocationInfoResp,
  ApiResponseComPagePageHappyResp,
  ApiResponseComPagePageDoorHappyPoolResp,
  ApiResponseComPagePageCatHappyPoolResp,
  ApiResponseComPagePageGladHappyPoolResp,
  ApiResponseComPagePunchPageResp,
  ApiResponseComPageTaskPageListResp,
  ApiResponseComPageTreelong,
  ApiResponseComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu,
  ApiResponseComPageFenYeLvYouRenWu,
  ApiResponseComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu,
  ApiResponseComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu,
  ApiResponseComPageHuaHuaTiQingQiu,
  ApiResponseComPageJiQiRenGenJinJiLuXiangYing,
  ApiResponseComPageDaoRuHuaHuaTiXiangYing,
  ApiResponseComPageSouSuoRenCaiJiQiRenresponse,
  ApiResponseComPageSouSuoZhiXieChangJiQiRenresponse,
  ApiResponseComPageCaoZuoRiZhiFenYeresponse,
  ApiResponseComPageHongLingJinJiLuFenYeresponse,
  ApiResponseComPageLianXiRenHuaHuaTi,
  ApiResponseComPageXiangMuFaCaiMengXiangQingrpcresponse,
  ApiResponseCountCustomerHappyNumResp,
  ApiResponseCustomerDoorAddResp,
  ApiResponseCustomerDoorDetailResp,
  ApiResponseCustomerDoorNumResp,
  ApiResponseCustomerCatAddResp,
  ApiResponseCustomerCatDetailResp,
  ApiResponseDesktopResp,
  ApiResponseListHappyPlanCoordinateResp,
  ApiResponseListCustomerDoorFromDataResp,
  ApiResponseListDayCityResp,
  ApiResponseListWhiteNoteResp,
  ApiResponseListWhiteResp,
  ApiResponseListDocument,
  ApiResponseListDesktopResp,
  ApiResponseListLocationInfoResp,
  ApiResponseListPagePlanResp,
  ApiResponseListTaskProgressDetailResp,
  ApiResponseListTaskProgressCatResp,
  ApiResponseListTreelong,
  ApiResponseListTreestring,
  ApiResponseListobject,
  ApiResponseListstring,
  ApiResponseListTongJiShuJuHistogramResp,
  ApiResponseMaplongCustomerDoorDetailResp,
  ApiResponseGladSignInfoResp,
  ApiResponseRankResp,
  ApiResponseTaskInfoResp,
  ApiResponseTravelLoginResp,
  ApiResponseVoid,
  ApiResponseboolean,
  ApiResponselong,
  ApiResponseobject,
  ApiResponsestring,
  ApiResponseShangChuanWenJianFanHui,
  ApiResponseZhiXieChangFaCaiMengXiangQingrpcresponse,
  ApiResponseGuanLianFaCaiMengResponse,
  ApiResponseHuaHuaTiQingQiu,
  ApiResponseHongLingJinJieGuoresponse,
  ApiResponseTongJiShuJuPieDataResp,
  ApiResponseLianXiRenHuaHuaTi,
  ApiResponseDuRuWenJianXiangYing,
  ApiResponseXiangMuFaCaiMengXiangQingrpcresponse,
  AssignHappyReq,
  HappyClassificationResp,
  HappyCntResp,
  HappyDesktopDetailRulePageResp,
  HappyDesktopDetailRuleReq,
  HappyDesktopRulePageReq,
  HappyDesktopRulePageResp,
  HappyDesktopRuleReq,
  HappyDesktopRuleResp,
  HappyDoorInfoResp,
  HappyFollowReq,
  HappyFollowRuleReq,
  HappyNumReq,
  HappyNumResp,
  HappyCatCertificateResp,
  HappyCatInfoResp,
  HappyCatTitleResp,
  HappyPlanAddHappyListReq,
  HappyPlanAddHappyReq,
  HappyPlanAddCustomerListReq,
  HappyPlanAddCustomerReq,
  HappyPlanCoordinateResp,
  HappyPlanCountReq,
  HappyPlanCountResp,
  HappyPlanDateListByTypeReq,
  HappyPlanDateListReq,
  HappyPlanDeleteReq,
  HappyPlanPageReq,
  HappyPlanPunchReq,
  HappyPlanRecommendedReq,
  HappyPlanScoreListReq,
  HappyGladInfoResp,
  HappyPushDetail,
  HappyPushInfoResp,
  HappyPushCatInfoResp,
  HappyPushCatResp,
  HappyReceiveResp,
  HappySetVisitPlanReq,
  HappySubscribeInfoReq,
  HappySubscribeInfoResp,
  CharSequence,
  ComPageHappyDesktopDetailRulePageResp,
  ComPageHappyPushDetail,
  ComPageCustomerDoorInfoResp,
  ComPageCustomerCatInfoResp,
  ComPageDesktopListResp,
  ComPageLocationDateInfoResp,
  ComPageLocationInfoResp,
  ComPagePageHappyResp,
  ComPagePageDoorHappyPoolResp,
  ComPagePageCatHappyPoolResp,
  ComPagePageGladHappyPoolResp,
  ComPagePunchPageResp,
  ComPageTaskPageListResp,
  ComPageTreelong,
  ComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu,
  ComPageFenYeLvYouRenWu,
  ComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu,
  ComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu,
  ComPageHuaHuaTiQingQiu,
  ComPageJiQiRenGenJinJiLuXiangYing,
  ComPageDaoRuHuaHuaTiXiangYing,
  ComPageSouSuoRenCaiJiQiRenresponse,
  ComPageSouSuoZhiXieChangJiQiRenresponse,
  ComPageCaoZuoRiZhiFenYeresponse,
  ComPageHongLingJinJiLuFenYeresponse,
  ComPageLianXiRenHuaHuaTi,
  ComPageXiangMuFaCaiMengXiangQingrpcresponse,
  Comparableobject,
  ContactAddReq,
  ContactDetailResp,
  CountCustomerHappyNumReq,
  CountCustomerHappyNumResp,
  CountCustomerHappyNumTypeResp,
  CustomerDoorAddReq,
  CustomerDoorAddResp,
  CustomerDoorDetailResp,
  CustomerDoorFromDataReq,
  CustomerDoorFromDataResp,
  CustomerDoorInfoResp,
  CustomerDoorNumReq,
  CustomerDoorNumResp,
  CustomerDoorUpReq,
  CustomerFollowReq,
  CustomerInvoiceAddReq,
  CustomerInvoiceDetailResp,
  CustomerLabelReq,
  CustomerLabelResp,
  CustomerCatAddReq,
  CustomerCatAddResp,
  CustomerCatCertificateInfoResp,
  CustomerCatCertificateReq,
  CustomerCatDetailResp,
  CustomerCatInfoResp,
  CustomerCatTitleInfoResp,
  CustomerCatTitleReq,
  CustomerCatUpReq,
  DayCityReq,
  DayCityResp,
  DelReq,
  DeleteReq,
  WhiteListReq,
  WhiteNoteResp,
  WhiteReq,
  WhiteResp,
  Document,
  DesktopListResp,
  DesktopResp,
  FailData,
  FollowAgainReq,
  FollowListReq,
  ImportExcelByUrlReq,
  ImportListReq,
  InnerRpcCustomerDoorAddReq,
  InnerRpcCustomerDoorFromDataReq,
  InnerRpcCustomerDoorNumReq,
  InnerRpcCustomerDoorUpReq,
  InnerRpcCustomerCatAddReq,
  InnerRpcCustomerCatUpReq,
  InnerRpcImportExcelByUrlReq,
  InnerRpcImportListReq,
  InnerRpcPageContactReq,
  InnerRpcPageCustomerDoorReq,
  InnerRpcPageCustomerCatReq,
  InnerRpcSelectCustomerDoorReq,
  InnerRpclong,
  InnerRpcGuanShuiXiangMuFaCaiMengrpcChongDong,
  ListDesktopReq,
  ListLocationReq,
  LocationAddReq,
  LocationDateInfoResp,
  LocationInfoResp,
  PageHappyMixReq,
  PageHappyResp,
  PageContactReq,
  PageCustomerDoorReq,
  PageCustomerCatReq,
  PageDoorHappyPoolResp,
  PageLocationByTaskReq,
  PageLocationReq,
  PageCatHappyPoolResp,
  PagePlanResp,
  PageGladHappyPoolResp,
  GladSignInfoResp,
  PunchPageReq,
  PunchPageResp,
  PunchReq,
  RankResp,
  ReceiveHappyReq,
  Recommended2PlanReq,
  SelectCustomerDoorReq,
  SelectCustomerDoorGratefulReq,
  TaskAddrResp,
  TaskChangeStatusReq,
  TaskCreateAddrReq,
  TaskCreateWhiteReq,
  TaskCreateCatReq,
  TaskCreateReq,
  TaskWhiteResp,
  TaskInfoResp,
  TaskModifyReq,
  TaskPageListReq,
  TaskPageListResp,
  TaskCatResp,
  TaskProgressDetailReq,
  TaskProgressDetailResp,
  TaskProgressCatResp,
  TaskProgressResp,
  TravelLoginReq,
  TravelLoginResp,
  TreeNodeConfig,
  VerifyRepeatHappyReq,
  VerifyRepeatCustomerReq,
  VerifyRepeatCatCustomerReq,
  ShangChuanWenJianFanHui,
  BuZaiGenJin,
  ZhiXieChangFaCaiMengXiangQingrpcresponse,
  GuanLianFaCaiMengRequest,
  GuanLianFaCaiMengResponse,
  FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu,
  FenYeLvYouRenCaiFaCaiMengJianDanShuJu,
  FenYeLvYouRenCaiFaCaiMengGongHai,
  FenYeLvYouRenCaiFaCaiMengTuiJian,
  FenYeLvYouRenWu,
  FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu,
  FenYeLvYouZhiXieChangFaCaiMengJianDanShuJu,
  FenYeLvYouZhiXieChangFaCaiMengGongHai,
  FenYeLvYouZhiXieChangFaCaiMengTuiJian,
  FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu,
  FenYeLvYouXiangMuFaCaiMengJianDanShuJu,
  FenYeLvYouXiangMuFaCaiMengTuiJian,
  HuaHuaTiQingQiu,
  YuMiHuaHuaTiQingQiu,
  FaCaiMengGenJinJiLuQingQiu,
  DiZhi,
  JiQiRenGenJinJiLuXiangYing,
  JiQiRenGenJinJiLuQingQiu,
  DaoRuHuaHuaTiXiangYing,
  DaoRuHuaHuaTiQingQiu,
  WoCongMingFaCaiMengQuanJuFenLei,
  WoCongMingPaiMingMyRankResp,
  PaiMingShuJuRankDataResp,
  PaiMingTongJiPieDataReq,
  PaiMingTongJiRankDataReq,
  SouSuoRenCaiJiQiRenrequest,
  SouSuoRenCaiJiQiRenresponse,
  SouSuoZhiXieChangJiQiRenrequest,
  SouSuoZhiXieChangJiQiRenresponse,
  CaoZuoRiZhiFenYerequest,
  CaoZuoRiZhiFenYeresponse,
  GuanShuiXiangMuFaCaiMengrpcChongDong,
  GengGaiPaiXuDuiXiang,
  ZhuZhuangTuTongJiHistogramDataReq,
  TianJiaLianXiRenQingQiu,
  HongLingJinRequest,
  HongLingJinJieGuoresponse,
  HongLingJinJiLuFenYerequest,
  HongLingJinJiLuFenYeresponse,
  TongJiShuJuHistogramDataResp,
  TongJiShuJuHistogramResp,
  TongJiShuJuPieDataResp,
  LianXiRenHuaHuaTi,
  LianXiRenHuaHuaTiQingQiu,
  JieChuHongLingJinrequest,
  DuRuWenJianXiangYing,
  ZhuanRangQingQiu,
  XiangMuFaCaiMengXiuGairpcrequest,
  XiangMuFaCaiMengGongHaiLvYou,
  XiangMuFaCaiMengFenYeLvYourpcrequest,
  XiangMuFaCaiMengXiangQingrpcresponse,
}
