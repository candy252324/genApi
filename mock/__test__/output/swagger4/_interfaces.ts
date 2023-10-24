import Mock from "mockjs"
export function AddHappyDoorReq() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyClassificationType: Mock.mock("@string(5,100)"),
happySource: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
categoryName: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
corporateName: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
createId: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
createSource: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
enableSaveOrUpdate: Mock.mock("@datetime()"),
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
doorStatus: Mock.mock("@string(5,100)"),
establishmentTime: Mock.mock("@datetime()"),
id: Mock.mock("@string(5,100)"),
isDelete: Mock.mock("@string(5,100)"),
lat: Mock.mock("@string(5,100)"),
licenseId: Mock.mock("@string(5,100)"),
lng: Mock.mock("@string(5,100)"),
modified: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
regCatCnt: Mock.mock("@string(5,100)"),
orangeeredCapital: Mock.mock("@string(5,100)"),
score: Mock.mock("@integer(3,1000)"),
searchStationId: Mock.mock("@string(5,100)"),
skAchievementCnt: Mock.mock("@string(5,100)"),
skQualificationCnt: Mock.mock("@string(5,100)"),
step: Mock.mock("@integer(3,1000)"),
thirdId: Mock.mock("@string(5,100)"),
type: Mock.mock("@string(5,100)"),
updateId: Mock.mock("@datetime()"),
updateName: Mock.mock("@datetime()"),

}
}
export function AddHappyCatCertificateReq() {
return {
id: Mock.mock("@string(5,100)"),
major: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
pictureUrl: Mock.mock("@string(5,100)"),

}
}
export function AddHappyCatReq() {
return {
achievementCnt: Mock.mock("@string(5,100)"),
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
badBehaviorCnt: Mock.mock("@string(5,100)"),
blacklistRecordCnt: Mock.mock("@string(5,100)"),
happyClassificationType: Mock.mock("@string(5,100)"),
happySource: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
"certificateList": [AddHappyCatCertificateReq(),AddHappyCatCertificateReq(),AddHappyCatCertificateReq()],
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
createId: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
createSource: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
education: Mock.mock("@string(5,100)"),
enableSaveOrUpdate: Mock.mock("@datetime()"),
gender: Mock.mock("@string(5,100)"),
goodBehaviorCnt: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
isDelete: Mock.mock("@string(5,100)"),
lat: Mock.mock("@string(5,100)"),
licenseId: Mock.mock("@string(5,100)"),
lng: Mock.mock("@string(5,100)"),
modified: Mock.mock("@string(5,100)"),
catName: Mock.mock("@string(5,100)"),
catnelRisk: Mock.mock("@integer(3,1000)"),
phone: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
searchStationId: Mock.mock("@string(5,100)"),
skCertificateCnt: Mock.mock("@string(5,100)"),
step: Mock.mock("@integer(3,1000)"),
thirdId: Mock.mock("@string(5,100)"),
"titleList": [AddHappyCatTitleReq(),AddHappyCatTitleReq(),AddHappyCatTitleReq()],
type: Mock.mock("@string(5,100)"),
updateId: Mock.mock("@datetime()"),
updateName: Mock.mock("@datetime()"),

}
}
export function AddHappyCatTitleReq() {
return {
id: Mock.mock("@string(5,100)"),
level: Mock.mock("@string(5,100)"),
major: Mock.mock("@string(5,100)"),
pictureUrl: Mock.mock("@string(5,100)"),

}
}
export function AddHappyGladReq() {
return {
agencies: Mock.mock("@string(5,100)"),
agenciesAddr: Mock.mock("@string(5,100)"),
agenciesAddrCoordinate: Mock.mock("@string(5,100)"),
agenciesAddrLat: Mock.mock("@string(5,100)"),
agenciesAddrLng: Mock.mock("@string(5,100)"),
agenciesArea: Mock.mock("@string(5,100)"),
agenciesCity: Mock.mock("@string(5,100)"),
agenciesCountry: Mock.mock("@string(5,100)"),
agenciesPhone: Mock.mock("@string(5,100)"),
agenciesProvince: Mock.mock("@string(5,100)"),
biddingCorpAddr: Mock.mock("@string(5,100)"),
biddingCorpAddrCoordinate: Mock.mock("@string(5,100)"),
biddingCorpAddrLat: Mock.mock("@string(5,100)"),
biddingCorpAddrLng: Mock.mock("@string(5,100)"),
biddingCorpArea: Mock.mock("@string(5,100)"),
biddingCorpCity: Mock.mock("@string(5,100)"),
biddingCorpCountry: Mock.mock("@string(5,100)"),
biddingCorpName: Mock.mock("@string(5,100)"),
biddingCorpPhone: Mock.mock("@string(5,100)"),
biddingCorpProvince: Mock.mock("@string(5,100)"),
biddingEndTime: Mock.mock("@datetime()"),
biddingOpeningTime: Mock.mock("@datetime()"),
biddingStartTime: Mock.mock("@datetime()"),
biddingType: Mock.mock("@string(5,100)"),
happyClassificationType: Mock.mock("@string(5,100)"),
happySource: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
createId: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
createSource: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
enableSaveOrUpdate: Mock.mock("@datetime()"),
fileDownloadEndTime: Mock.mock("@datetime()"),
fileDownloadStartTime: Mock.mock("@datetime()"),
id: Mock.mock("@string(5,100)"),
industryType: Mock.mock("@string(5,100)"),
isDelete: Mock.mock("@string(5,100)"),
lat: Mock.mock("@string(5,100)"),
licenseId: Mock.mock("@string(5,100)"),
lng: Mock.mock("@string(5,100)"),
modified: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
gladBudget: Mock.mock("@string(5,100)"),
gladName: Mock.mock("@string(5,100)"),
gladNum: Mock.mock("@string(5,100)"),
gladType: Mock.mock("@string(5,100)"),
searchStationId: Mock.mock("@string(5,100)"),
step: Mock.mock("@integer(3,1000)"),
thirdId: Mock.mock("@string(5,100)"),
type: Mock.mock("@string(5,100)"),
updateId: Mock.mock("@datetime()"),
updateName: Mock.mock("@datetime()"),
webPageUrl: Mock.mock("@string(5,100)"),

}
}
export function AddHappyReq() {
return {
happyClassificationType: Mock.mock("@string(5,100)"),
happySource: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
createId: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
createSource: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
enableSaveOrUpdate: Mock.mock("@datetime()"),
id: Mock.mock("@string(5,100)"),
isDelete: Mock.mock("@string(5,100)"),
lat: Mock.mock("@string(5,100)"),
licenseId: Mock.mock("@string(5,100)"),
lng: Mock.mock("@string(5,100)"),
modified: Mock.mock("@string(5,100)"),
searchStationId: Mock.mock("@string(5,100)"),
step: Mock.mock("@integer(3,1000)"),
thirdId: Mock.mock("@string(5,100)"),
type: Mock.mock("@string(5,100)"),
updateId: Mock.mock("@datetime()"),
updateName: Mock.mock("@datetime()"),

}
}
export function AddHappyResp() {
return {
failCnt: Mock.mock("@integer(3,1000)"),
id: Mock.mock("@string(5,100)"),
licenseId: Mock.mock("@string(5,100)"),
"list": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
gladName: Mock.mock("@string(5,100)"),
receiveName: Mock.mock("@string(5,100)"),
successCnt: Mock.mock("@integer(3,1000)"),

}
}
export function AddCustomerResp() {
return {
"list": [CustomerDoorInfoResp(),CustomerDoorInfoResp(),CustomerDoorInfoResp()],
repeatType: Mock.mock("@string(5,100)"),

}
}
export function AddCatCustomerResp() {
return {
"list": [CustomerCatInfoResp(),CustomerCatInfoResp(),CustomerCatInfoResp()],
repeatType: Mock.mock("@string(5,100)"),

}
}
export function AddSignHappyDoorReq() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyId: Mock.mock("@string(5,100)"),
happySource: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
categoryName: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
corporateName: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
createId: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
createSource: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
doorStatus: Mock.mock("@string(5,100)"),
establishmentTime: Mock.mock("@datetime()"),
id: Mock.mock("@string(5,100)"),
isDelete: Mock.mock("@string(5,100)"),
lat: Mock.mock("@string(5,100)"),
licenseId: Mock.mock("@string(5,100)"),
lng: Mock.mock("@string(5,100)"),
modified: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
regCatCnt: Mock.mock("@string(5,100)"),
orangeeredCapital: Mock.mock("@string(5,100)"),
score: Mock.mock("@integer(3,1000)"),
signType: Mock.mock("@string(5,100)"),
skAchievementCnt: Mock.mock("@string(5,100)"),
skQualificationCnt: Mock.mock("@string(5,100)"),
step: Mock.mock("@integer(3,1000)"),
type: Mock.mock("@string(5,100)"),
updateId: Mock.mock("@datetime()"),
updateName: Mock.mock("@datetime()"),

}
}
export function AddSignHappyCatReq() {
return {
achievementCnt: Mock.mock("@string(5,100)"),
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyId: Mock.mock("@string(5,100)"),
happySource: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
"certificateList": [AddHappyCatCertificateReq(),AddHappyCatCertificateReq(),AddHappyCatCertificateReq()],
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
createId: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
createSource: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
education: Mock.mock("@string(5,100)"),
gender: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
isDelete: Mock.mock("@string(5,100)"),
lat: Mock.mock("@string(5,100)"),
lng: Mock.mock("@string(5,100)"),
modified: Mock.mock("@string(5,100)"),
catName: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
signType: Mock.mock("@string(5,100)"),
step: Mock.mock("@integer(3,1000)"),
"titleList": [AddHappyCatTitleReq(),AddHappyCatTitleReq(),AddHappyCatTitleReq()],
type: Mock.mock("@string(5,100)"),
updateId: Mock.mock("@datetime()"),
updateName: Mock.mock("@datetime()"),

}
}
export function AddSignHappyGladReq() {
return {
agencies: Mock.mock("@string(5,100)"),
agenciesAddr: Mock.mock("@string(5,100)"),
agenciesAddrCoordinate: Mock.mock("@string(5,100)"),
agenciesAddrLat: Mock.mock("@string(5,100)"),
agenciesAddrLng: Mock.mock("@string(5,100)"),
agenciesArea: Mock.mock("@string(5,100)"),
agenciesCity: Mock.mock("@string(5,100)"),
agenciesCountry: Mock.mock("@string(5,100)"),
agenciesPhone: Mock.mock("@string(5,100)"),
agenciesProvince: Mock.mock("@string(5,100)"),
biddingCorpAddr: Mock.mock("@string(5,100)"),
biddingCorpAddrCoordinate: Mock.mock("@string(5,100)"),
biddingCorpAddrLat: Mock.mock("@string(5,100)"),
biddingCorpAddrLng: Mock.mock("@string(5,100)"),
biddingCorpArea: Mock.mock("@string(5,100)"),
biddingCorpCity: Mock.mock("@string(5,100)"),
biddingCorpCountry: Mock.mock("@string(5,100)"),
biddingCorpName: Mock.mock("@string(5,100)"),
biddingCorpPhone: Mock.mock("@string(5,100)"),
biddingCorpProvince: Mock.mock("@string(5,100)"),
biddingEndTime: Mock.mock("@datetime()"),
biddingOpeningTime: Mock.mock("@datetime()"),
biddingStartTime: Mock.mock("@datetime()"),
biddingType: Mock.mock("@string(5,100)"),
happyId: Mock.mock("@string(5,100)"),
happySource: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
createId: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
createSource: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
fileDownloadEndTime: Mock.mock("@datetime()"),
fileDownloadStartTime: Mock.mock("@datetime()"),
id: Mock.mock("@string(5,100)"),
industryType: Mock.mock("@string(5,100)"),
isDelete: Mock.mock("@string(5,100)"),
lat: Mock.mock("@string(5,100)"),
lng: Mock.mock("@string(5,100)"),
modified: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
gladBudget: Mock.mock("@string(5,100)"),
gladName: Mock.mock("@string(5,100)"),
gladNum: Mock.mock("@string(5,100)"),
gladType: Mock.mock("@string(5,100)"),
signType: Mock.mock("@string(5,100)"),
step: Mock.mock("@integer(3,1000)"),
type: Mock.mock("@string(5,100)"),
updateId: Mock.mock("@datetime()"),
updateName: Mock.mock("@datetime()"),
webPageUrl: Mock.mock("@string(5,100)"),

}
}
export function AddSignHappyResp() {
return {
happyId: Mock.mock("@string(5,100)"),
"list": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
mobile: Mock.mock("@string(5,100)"),
signId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponse() {
return {
code: Mock.mock("@integer(200,200)"),
data: Mock.mock("@string(5,100)"),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseAddHappyResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: AddHappyResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseAddCustomerResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: AddCustomerResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseAddCatCustomerResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: AddCatCustomerResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseAddSignHappyResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: AddSignHappyResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHappyClassificationResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: HappyClassificationResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHappyDesktopRulePageResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: HappyDesktopRulePageResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHappyDesktopRuleResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: HappyDesktopRuleResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHappyDoorInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: HappyDoorInfoResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHappyNumResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: HappyNumResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHappyCatInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: HappyCatInfoResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHappyPlanCountResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: HappyPlanCountResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHappyGladInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: HappyGladInfoResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHappyPushInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: HappyPushInfoResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHappyReceiveResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: HappyReceiveResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHappySubscribeInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: HappySubscribeInfoResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageHappyPushDetail() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageHappyPushDetail(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageCustomerDoorInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageCustomerDoorInfoResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageCustomerCatInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageCustomerCatInfoResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageDesktopListResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageDesktopListResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageLocationDateInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageLocationDateInfoResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageLocationInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageLocationInfoResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPagePageHappyResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPagePageHappyResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPagePageDoorHappyPoolResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPagePageDoorHappyPoolResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPagePageCatHappyPoolResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPagePageCatHappyPoolResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPagePageGladHappyPoolResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPagePageGladHappyPoolResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPagePunchPageResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPagePunchPageResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageTaskPageListResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageTaskPageListResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageTreelong() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageTreelong(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageFenYeLvYouRenWu() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageFenYeLvYouRenWu(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageHuaHuaTiQingQiu() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageHuaHuaTiQingQiu(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageJiQiRenGenJinJiLuXiangYing() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageJiQiRenGenJinJiLuXiangYing(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageDaoRuHuaHuaTiXiangYing() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageDaoRuHuaHuaTiXiangYing(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageSouSuoRenCaiJiQiRenresponse() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageSouSuoRenCaiJiQiRenresponse(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageSouSuoZhiXieChangJiQiRenresponse() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageSouSuoZhiXieChangJiQiRenresponse(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageCaoZuoRiZhiFenYeresponse() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageCaoZuoRiZhiFenYeresponse(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageHongLingJinJiLuFenYeresponse() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageHongLingJinJiLuFenYeresponse(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageLianXiRenHuaHuaTi() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageLianXiRenHuaHuaTi(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageXiangMuFaCaiMengXiangQingrpcresponse() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageXiangMuFaCaiMengXiangQingrpcresponse(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseCountCustomerHappyNumResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: CountCustomerHappyNumResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseCustomerDoorAddResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: CustomerDoorAddResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseCustomerDoorDetailResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: CustomerDoorDetailResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseCustomerDoorNumResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: CustomerDoorNumResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseCustomerCatAddResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: CustomerCatAddResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseCustomerCatDetailResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: CustomerCatDetailResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseDesktopResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: DesktopResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListHappyPlanCoordinateResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [HappyPlanCoordinateResp(),HappyPlanCoordinateResp(),HappyPlanCoordinateResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListCustomerDoorFromDataResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [CustomerDoorFromDataResp(),CustomerDoorFromDataResp(),CustomerDoorFromDataResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListDayCityResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [DayCityResp(),DayCityResp(),DayCityResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListWhiteNoteResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [WhiteNoteResp(),WhiteNoteResp(),WhiteNoteResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListWhiteResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [WhiteResp(),WhiteResp(),WhiteResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListDocument() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [Document(),Document(),Document()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListDesktopResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [DesktopResp(),DesktopResp(),DesktopResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListLocationInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [LocationInfoResp(),LocationInfoResp(),LocationInfoResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListPagePlanResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [PagePlanResp(),PagePlanResp(),PagePlanResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListTaskProgressDetailResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [TaskProgressDetailResp(),TaskProgressDetailResp(),TaskProgressDetailResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListTaskProgressCatResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [TaskProgressCatResp(),TaskProgressCatResp(),TaskProgressCatResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListTreelong() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListTreestring() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListobject() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListstring() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListTongJiShuJuHistogramResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [TongJiShuJuHistogramResp(),TongJiShuJuHistogramResp(),TongJiShuJuHistogramResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseMaplongCustomerDoorDetailResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: CustomerDoorDetailResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseGladSignInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: GladSignInfoResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseRankResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: RankResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseTaskInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: TaskInfoResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseTravelLoginResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: TravelLoginResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseVoid() {
return {
code: Mock.mock("@integer(200,200)"),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseboolean() {
return {
code: Mock.mock("@integer(200,200)"),
data: Mock.mock("@boolean()"),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponselong() {
return {
code: Mock.mock("@integer(200,200)"),
data: Mock.mock("@string(5,100)"),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseobject() {
return {
code: Mock.mock("@integer(200,200)"),
data: Mock.mock("@string(5,100)"),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponsestring() {
return {
code: Mock.mock("@integer(200,200)"),
data: Mock.mock("@string(5,100)"),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseShangChuanWenJianFanHui() {
return {
code: Mock.mock("@integer(200,200)"),
data: ShangChuanWenJianFanHui(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseZhiXieChangFaCaiMengXiangQingrpcresponse() {
return {
code: Mock.mock("@integer(200,200)"),
data: ZhiXieChangFaCaiMengXiangQingrpcresponse(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseGuanLianFaCaiMengResponse() {
return {
code: Mock.mock("@integer(200,200)"),
data: GuanLianFaCaiMengResponse(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHuaHuaTiQingQiu() {
return {
code: Mock.mock("@integer(200,200)"),
data: HuaHuaTiQingQiu(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseHongLingJinJieGuoresponse() {
return {
code: Mock.mock("@integer(200,200)"),
data: HongLingJinJieGuoresponse(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseTongJiShuJuPieDataResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: TongJiShuJuPieDataResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseLianXiRenHuaHuaTi() {
return {
code: Mock.mock("@integer(200,200)"),
data: LianXiRenHuaHuaTi(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseDuRuWenJianXiangYing() {
return {
code: Mock.mock("@integer(200,200)"),
data: DuRuWenJianXiangYing(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseXiangMuFaCaiMengXiangQingrpcresponse() {
return {
code: Mock.mock("@integer(200,200)"),
data: XiangMuFaCaiMengXiangQingrpcresponse(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function AssignHappyReq() {
return {
"happyList": [AddHappyReq(),AddHappyReq(),AddHappyReq()],
happyReceiveSource: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
date: Mock.mock("@datetime()"),
receiverId: Mock.mock("@string(5,100)"),
receiverName: Mock.mock("@string(5,100)"),

}
}
export function HappyClassificationResp() {
return {
"happyClassificationList": [HappyCntResp(),HappyCntResp(),HappyCntResp()],

}
}
export function HappyCntResp() {
return {
count: Mock.mock("@string(5,100)"),
label: Mock.mock("@string(5,100)"),
value: Mock.mock("@string(5,100)"),

}
}
export function HappyDesktopDetailRulePageResp() {
return {
happyNumEveryday: Mock.mock("@integer(3,1000)"),
desktopId: Mock.mock("@string(5,100)"),
desktopName: Mock.mock("@string(5,100)"),
doorLimit: Mock.mock("@integer(3,1000)"),
catLimit: Mock.mock("@integer(3,1000)"),
gladLimit: Mock.mock("@integer(3,1000)"),

}
}
export function HappyDesktopDetailRuleReq() {
return {
happyNumEveryday: Mock.mock("@integer(3,1000)"),
desktopId: Mock.mock("@string(5,100)"),
desktopName: Mock.mock("@string(5,100)"),
doorLimit: Mock.mock("@integer(3,1000)"),
catLimit: Mock.mock("@integer(3,1000)"),
gladLimit: Mock.mock("@integer(3,1000)"),

}
}
export function HappyDesktopRulePageReq() {
return {
"desktopIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function HappyDesktopRulePageResp() {
return {
happyNumEveryday: Mock.mock("@integer(3,1000)"),
desktopDetailRulePage: ComPageHappyDesktopDetailRulePageResp(),
doorLimit: Mock.mock("@integer(3,1000)"),
isDoorNoLimit: Mock.mock("@integer(3,1000)"),
isCatNoLimit: Mock.mock("@integer(3,1000)"),
isGladNoLimit: Mock.mock("@integer(3,1000)"),
catLimit: Mock.mock("@integer(3,1000)"),
gladLimit: Mock.mock("@integer(3,1000)"),

}
}
export function HappyDesktopRuleReq() {
return {
happyNumEveryday: Mock.mock("@integer(3,1000)"),
"detailRuleList": [HappyDesktopDetailRuleReq(),HappyDesktopDetailRuleReq(),HappyDesktopDetailRuleReq()],
doorLimit: Mock.mock("@integer(3,1000)"),
isDoorNoLimit: Mock.mock("@integer(3,1000)"),
isCatNoLimit: Mock.mock("@integer(3,1000)"),
isGladNoLimit: Mock.mock("@integer(3,1000)"),
catLimit: Mock.mock("@integer(3,1000)"),
gladLimit: Mock.mock("@integer(3,1000)"),

}
}
export function HappyDesktopRuleResp() {
return {
doorNoFollowTime: Mock.mock("@datetime()"),
doorTimeType: Mock.mock("@datetime()"),
isDoorNeedBackOpenSea: Mock.mock("@integer(3,1000)"),
isCatNeedBackOpenSea: Mock.mock("@integer(3,1000)"),
isGladNeedBackOpenSea: Mock.mock("@integer(3,1000)"),
catNoFollowTime: Mock.mock("@datetime()"),
catTimeType: Mock.mock("@datetime()"),
gladNoFollowTime: Mock.mock("@datetime()"),
gladTimeType: Mock.mock("@datetime()"),

}
}
export function HappyDoorInfoResp() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
categoryName: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
corpCertArray: Mock.mock("@string(5,100)"),
corporateName: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
doorStatus: Mock.mock("@string(5,100)"),
doorType: Mock.mock("@string(5,100)"),
establishmentTime: Mock.mock("@datetime()"),
filialeCompanyNameArray: Mock.mock("@string(5,100)"),
"followInfoList": [HuaHuaTiQingQiu(),HuaHuaTiQingQiu(),HuaHuaTiQingQiu()],
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
hasCustomer: Mock.mock("@boolean()"),
id: Mock.mock("@string(5,100)"),
isRead: Mock.mock("@string(5,100)"),
lastFetchTime: Mock.mock("@datetime()"),
lastFollowTime: Mock.mock("@datetime()"),
lat: Mock.mock("@string(5,100)"),
licenseId: Mock.mock("@string(5,100)"),
lng: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
planId: Mock.mock("@string(5,100)"),
planScore: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
qualicaficationArray: Mock.mock("@string(5,100)"),
recommendedReason: Mock.mock("@string(5,100)"),
regCatCnt: Mock.mock("@string(5,100)"),
orangeeredCapital: Mock.mock("@string(5,100)"),
score: Mock.mock("@integer(3,1000)"),
signId: Mock.mock("@string(5,100)"),
skAchievementCnt: Mock.mock("@string(5,100)"),
skQualificationCnt: Mock.mock("@string(5,100)"),
source: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),

}
}
export function HappyFollowReq() {
return {
addr: Mock.mock("@string(5,100)"),
happyId: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
contactCatId: Mock.mock("@string(5,100)"),
contactCatName: Mock.mock("@string(5,100)"),
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
date: Mock.mock("@datetime()"),
"dateList": [Mock.mock("@datetime()"),Mock.mock("@datetime()"),Mock.mock("@datetime()")],
"fileIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
followResult: Mock.mock("@string(5,100)"),
followType: Mock.mock("@string(5,100)"),
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
setPlanType: Mock.mock("@integer(3,1000)"),
gratefulId: Mock.mock("@string(5,100)"),

}
}
export function HappyFollowRuleReq() {
return {
doorNoFollowTime: Mock.mock("@datetime()"),
doorTimeType: Mock.mock("@datetime()"),
isDoorNeedBackOpenSea: Mock.mock("@integer(3,1000)"),
isCatNeedBackOpenSea: Mock.mock("@integer(3,1000)"),
isGladNeedBackOpenSea: Mock.mock("@integer(3,1000)"),
catNoFollowTime: Mock.mock("@datetime()"),
catTimeType: Mock.mock("@datetime()"),
gladNoFollowTime: Mock.mock("@datetime()"),
gladTimeType: Mock.mock("@datetime()"),

}
}
export function HappyNumReq() {
return {
happyType: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function HappyNumResp() {
return {
followNum: Mock.mock("@integer(3,1000)"),
highIntentionNum: Mock.mock("@integer(3,1000)"),
invalidNum: Mock.mock("@integer(3,1000)"),
longTimeNoSignNum: Mock.mock("@datetime()"),
newNum: Mock.mock("@integer(3,1000)"),
oldNum: Mock.mock("@integer(3,1000)"),
signNum: Mock.mock("@integer(3,1000)"),
totalNum: Mock.mock("@integer(3,1000)"),
unreadNewNum: Mock.mock("@integer(3,1000)"),
unreadTotalNum: Mock.mock("@integer(3,1000)"),

}
}
export function HappyCatCertificateResp() {
return {
certificateNum: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
major: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
pictureUrl: Mock.mock("@string(5,100)"),
orangeered: Mock.mock("@string(5,100)"),

}
}
export function HappyCatInfoResp() {
return {
achievementCnt: Mock.mock("@string(5,100)"),
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
badBehaviorCnt: Mock.mock("@string(5,100)"),
blacklistRecordCnt: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
"certificateList": [HappyCatCertificateResp(),HappyCatCertificateResp(),HappyCatCertificateResp()],
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerMobile: Mock.mock("@string(5,100)"),
customerName: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
education: Mock.mock("@string(5,100)"),
"followInfoList": [HuaHuaTiQingQiu(),HuaHuaTiQingQiu(),HuaHuaTiQingQiu()],
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
gender: Mock.mock("@string(5,100)"),
goodBehaviorCnt: Mock.mock("@string(5,100)"),
hasCustomer: Mock.mock("@boolean()"),
id: Mock.mock("@string(5,100)"),
isRead: Mock.mock("@string(5,100)"),
lastFetchTime: Mock.mock("@datetime()"),
lastFollowTime: Mock.mock("@datetime()"),
lat: Mock.mock("@string(5,100)"),
licenseId: Mock.mock("@string(5,100)"),
lng: Mock.mock("@string(5,100)"),
catName: Mock.mock("@string(5,100)"),
catnelRisk: Mock.mock("@integer(3,1000)"),
phone: Mock.mock("@string(5,100)"),
planId: Mock.mock("@string(5,100)"),
planScore: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
recommendedReason: Mock.mock("@string(5,100)"),
signId: Mock.mock("@string(5,100)"),
skCertificateCnt: Mock.mock("@string(5,100)"),
source: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),
"titleList": [HappyCatTitleResp(),HappyCatTitleResp(),HappyCatTitleResp()],

}
}
export function HappyCatTitleResp() {
return {
id: Mock.mock("@string(5,100)"),
level: Mock.mock("@string(5,100)"),
major: Mock.mock("@string(5,100)"),
pictureUrl: Mock.mock("@string(5,100)"),

}
}
export function HappyPlanAddHappyListReq() {
return {
happyType: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),

}
}
export function HappyPlanAddHappyReq() {
return {
"addHappyList": [HappyPlanAddHappyListReq(),HappyPlanAddHappyListReq(),HappyPlanAddHappyListReq()],
date: Mock.mock("@datetime()"),

}
}
export function HappyPlanAddCustomerListReq() {
return {
customerType: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),

}
}
export function HappyPlanAddCustomerReq() {
return {
"addCustomerList": [HappyPlanAddCustomerListReq(),HappyPlanAddCustomerListReq(),HappyPlanAddCustomerListReq()],
"dateList": [ErrorModelNamenamespacejavatimenameLocalDateTime(),ErrorModelNamenamespacejavatimenameLocalDateTime(),ErrorModelNamenamespacejavatimenameLocalDateTime()],

}
}
export function HappyPlanCoordinateResp() {
return {
coordinate: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
planId: Mock.mock("@string(5,100)"),

}
}
export function HappyPlanCountReq() {
return {
date: Mock.mock("@datetime()"),

}
}
export function HappyPlanCountResp() {
return {
taskCount: Mock.mock("@integer(3,1000)"),
todayCount: Mock.mock("@integer(3,1000)"),

}
}
export function HappyPlanDateListByTypeReq() {
return {
id: Mock.mock("@string(5,100)"),
taskType: Mock.mock("@integer(3,1000)"),
type: Mock.mock("@string(5,100)"),

}
}
export function HappyPlanDateListReq() {
return {
endDate: Mock.mock("@datetime()"),
"handlerIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
startDate: Mock.mock("@datetime()"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function HappyPlanDeleteReq() {
return {
planId: Mock.mock("@string(5,100)"),

}
}
export function HappyPlanPageReq() {
return {
date: Mock.mock("@datetime()"),
"handlerIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function HappyPlanPunchReq() {
return {
date: Mock.mock("@datetime()"),

}
}
export function HappyPlanRecommendedReq() {
return {
happyType: Mock.mock("@string(5,100)"),
date: Mock.mock("@datetime()"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function HappyPlanScoreListReq() {
return {
planId: Mock.mock("@string(5,100)"),
score: Mock.mock("@string(5,100)"),

}
}
export function HappyGladInfoResp() {
return {
agencies: Mock.mock("@string(5,100)"),
agenciesAddr: Mock.mock("@string(5,100)"),
agenciesAddrLat: Mock.mock("@string(5,100)"),
agenciesAddrLng: Mock.mock("@string(5,100)"),
agenciesArea: Mock.mock("@string(5,100)"),
agenciesCity: Mock.mock("@string(5,100)"),
agenciesCountry: Mock.mock("@string(5,100)"),
agenciesPhone: Mock.mock("@string(5,100)"),
agenciesProvince: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
biddingCorpAddr: Mock.mock("@string(5,100)"),
biddingCorpAddrLat: Mock.mock("@string(5,100)"),
biddingCorpAddrLng: Mock.mock("@string(5,100)"),
biddingCorpArea: Mock.mock("@string(5,100)"),
biddingCorpCity: Mock.mock("@string(5,100)"),
biddingCorpCountry: Mock.mock("@string(5,100)"),
biddingCorpName: Mock.mock("@string(5,100)"),
biddingCorpPhone: Mock.mock("@string(5,100)"),
biddingCorpProvince: Mock.mock("@string(5,100)"),
biddingEndTime: Mock.mock("@datetime()"),
biddingOpeningTime: Mock.mock("@datetime()"),
biddingStartTime: Mock.mock("@datetime()"),
biddingTime: Mock.mock("@datetime()"),
biddingType: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
fileDownloadEndTime: Mock.mock("@datetime()"),
fileDownloadStartTime: Mock.mock("@datetime()"),
"followInfoList": [HuaHuaTiQingQiu(),HuaHuaTiQingQiu(),HuaHuaTiQingQiu()],
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
hasCustomer: Mock.mock("@boolean()"),
id: Mock.mock("@string(5,100)"),
industryType: Mock.mock("@string(5,100)"),
isRead: Mock.mock("@string(5,100)"),
lastFetchTime: Mock.mock("@datetime()"),
lastFollowTime: Mock.mock("@datetime()"),
lat: Mock.mock("@string(5,100)"),
licenseId: Mock.mock("@string(5,100)"),
lng: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
planId: Mock.mock("@string(5,100)"),
planScore: Mock.mock("@string(5,100)"),
gladBudget: Mock.mock("@string(5,100)"),
gladName: Mock.mock("@string(5,100)"),
gladNum: Mock.mock("@string(5,100)"),
gladType: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
publishTime: Mock.mock("@datetime()"),
quoteBeginTime: Mock.mock("@datetime()"),
quoteEndTime: Mock.mock("@datetime()"),
recommendedReason: Mock.mock("@string(5,100)"),
signId: Mock.mock("@string(5,100)"),
signUpBeginTime: Mock.mock("@datetime()"),
signUpEndTime: Mock.mock("@datetime()"),
source: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),
valid: Mock.mock("@integer(3,1000)"),
webPageUrl: Mock.mock("@string(5,100)"),

}
}
export function HappyPushDetail() {
return {
happyType: Mock.mock("@string(5,100)"),
enable: Mock.mock("@integer(3,1000)"),
id: Mock.mock("@string(5,100)"),
json: Mock.mock("@string(5,100)"),
planPushNum: Mock.mock("@integer(3,1000)"),
pushedNum: Mock.mock("@integer(3,1000)"),
remark: Mock.mock("@string(5,100)"),
ruleSettingTime: Mock.mock("@datetime()"),

}
}
export function HappyPushInfoResp() {
return {
"areaList": [DiZhi(),DiZhi(),DiZhi()],
happyType: Mock.mock("@string(5,100)"),
json: Mock.mock("@string(5,100)"),
"catList": [HappyPushCatInfoResp(),HappyPushCatInfoResp(),HappyPushCatInfoResp()],
pushDays: Mock.mock("@integer(3,1000)"),
pushNum: Mock.mock("@integer(3,1000)"),
pushRule: Mock.mock("@integer(3,1000)"),
pushType: Mock.mock("@integer(3,1000)"),
remark: Mock.mock("@string(5,100)"),

}
}
export function HappyPushCatInfoResp() {
return {
"areaList": [DiZhi(),DiZhi(),DiZhi()],
"catList": [HappyPushCatResp(),HappyPushCatResp(),HappyPushCatResp()],
pushNum: Mock.mock("@integer(3,1000)"),

}
}
export function HappyPushCatResp() {
return {
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),

}
}
export function HappyReceiveResp() {
return {
failCnt: Mock.mock("@integer(3,1000)"),
id: Mock.mock("@string(5,100)"),
licenseId: Mock.mock("@string(5,100)"),
gladName: Mock.mock("@string(5,100)"),
receiveName: Mock.mock("@string(5,100)"),
successCnt: Mock.mock("@integer(3,1000)"),

}
}
export function HappySetVisitPlanReq() {
return {
happyId: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
expectedDate: Mock.mock("@datetime()"),
interfaceType: Mock.mock("@string(5,100)"),

}
}
export function HappySubscribeInfoReq() {
return {
createId: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
doorEnable: Mock.mock("@integer(3,1000)"),
doorJson: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
isDelete: Mock.mock("@string(5,100)"),
modified: Mock.mock("@string(5,100)"),
catEnable: Mock.mock("@integer(3,1000)"),
catJson: Mock.mock("@string(5,100)"),
gladEnable: Mock.mock("@integer(3,1000)"),
gladJson: Mock.mock("@string(5,100)"),
updateId: Mock.mock("@datetime()"),
updateName: Mock.mock("@datetime()"),

}
}
export function HappySubscribeInfoResp() {
return {
doorEnable: Mock.mock("@integer(3,1000)"),
doorJson: Mock.mock("@string(5,100)"),
catEnable: Mock.mock("@integer(3,1000)"),
catJson: Mock.mock("@string(5,100)"),
gladEnable: Mock.mock("@integer(3,1000)"),
gladJson: Mock.mock("@string(5,100)"),

}
}
export function CharSequence() {
}
export function ComPageHappyDesktopDetailRulePageResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [HappyDesktopDetailRulePageResp(),HappyDesktopDetailRulePageResp(),HappyDesktopDetailRulePageResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageHappyPushDetail() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [HappyPushDetail(),HappyPushDetail(),HappyPushDetail()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageCustomerDoorInfoResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [CustomerDoorInfoResp(),CustomerDoorInfoResp(),CustomerDoorInfoResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageCustomerCatInfoResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [CustomerCatInfoResp(),CustomerCatInfoResp(),CustomerCatInfoResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageDesktopListResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [DesktopListResp(),DesktopListResp(),DesktopListResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageLocationDateInfoResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [LocationDateInfoResp(),LocationDateInfoResp(),LocationDateInfoResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageLocationInfoResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [LocationInfoResp(),LocationInfoResp(),LocationInfoResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPagePageHappyResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [PageHappyResp(),PageHappyResp(),PageHappyResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPagePageDoorHappyPoolResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [PageDoorHappyPoolResp(),PageDoorHappyPoolResp(),PageDoorHappyPoolResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPagePageCatHappyPoolResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [PageCatHappyPoolResp(),PageCatHappyPoolResp(),PageCatHappyPoolResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPagePageGladHappyPoolResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [PageGladHappyPoolResp(),PageGladHappyPoolResp(),PageGladHappyPoolResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPagePunchPageResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [PunchPageResp(),PunchPageResp(),PunchPageResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageTaskPageListResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [TaskPageListResp(),TaskPageListResp(),TaskPageListResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageTreelong() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu(),FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu(),FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageFenYeLvYouRenWu() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [FenYeLvYouRenWu(),FenYeLvYouRenWu(),FenYeLvYouRenWu()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu(),FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu(),FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu(),FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu(),FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageHuaHuaTiQingQiu() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [HuaHuaTiQingQiu(),HuaHuaTiQingQiu(),HuaHuaTiQingQiu()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageJiQiRenGenJinJiLuXiangYing() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [JiQiRenGenJinJiLuXiangYing(),JiQiRenGenJinJiLuXiangYing(),JiQiRenGenJinJiLuXiangYing()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageDaoRuHuaHuaTiXiangYing() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [DaoRuHuaHuaTiXiangYing(),DaoRuHuaHuaTiXiangYing(),DaoRuHuaHuaTiXiangYing()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageSouSuoRenCaiJiQiRenresponse() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [SouSuoRenCaiJiQiRenresponse(),SouSuoRenCaiJiQiRenresponse(),SouSuoRenCaiJiQiRenresponse()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageSouSuoZhiXieChangJiQiRenresponse() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [SouSuoZhiXieChangJiQiRenresponse(),SouSuoZhiXieChangJiQiRenresponse(),SouSuoZhiXieChangJiQiRenresponse()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageCaoZuoRiZhiFenYeresponse() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [CaoZuoRiZhiFenYeresponse(),CaoZuoRiZhiFenYeresponse(),CaoZuoRiZhiFenYeresponse()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageHongLingJinJiLuFenYeresponse() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [HongLingJinJiLuFenYeresponse(),HongLingJinJiLuFenYeresponse(),HongLingJinJiLuFenYeresponse()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageLianXiRenHuaHuaTi() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageXiangMuFaCaiMengXiangQingrpcresponse() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [XiangMuFaCaiMengXiangQingrpcresponse(),XiangMuFaCaiMengXiangQingrpcresponse(),XiangMuFaCaiMengXiangQingrpcresponse()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function Comparableobject() {
}
export function ContactAddReq() {
return {
whiteName: Mock.mock("@string(5,100)"),
duty: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
isDelete: Mock.mock("@integer(3,1000)"),
isPrincipal: Mock.mock("@integer(3,1000)"),
name: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
remark: Mock.mock("@string(5,100)"),
sort: Mock.mock("@integer(3,1000)"),
type: Mock.mock("@integer(3,1000)"),
value: Mock.mock("@string(5,100)"),

}
}
export function ContactDetailResp() {
return {
whiteName: Mock.mock("@string(5,100)"),
duty: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
isPrincipal: Mock.mock("@integer(3,1000)"),
name: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
remark: Mock.mock("@string(5,100)"),
sort: Mock.mock("@integer(3,1000)"),
type: Mock.mock("@integer(3,1000)"),
value: Mock.mock("@string(5,100)"),

}
}
export function CountCustomerHappyNumReq() {
return {
id: Mock.mock("@string(5,100)"),

}
}
export function CountCustomerHappyNumResp() {
return {
totalNum: Mock.mock("@integer(3,1000)"),
"typeNum": [CountCustomerHappyNumTypeResp(),CountCustomerHappyNumTypeResp(),CountCustomerHappyNumTypeResp()],

}
}
export function CountCustomerHappyNumTypeResp() {
return {
signNum: Mock.mock("@integer(3,1000)"),
type: Mock.mock("@string(5,100)"),
unsignedNum: Mock.mock("@integer(3,1000)"),

}
}
export function CustomerDoorAddReq() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyPrincipal: Mock.mock("@string(5,100)"),
categoryName: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
"contactList": [ContactAddReq(),ContactAddReq(),ContactAddReq()],
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
corporateName: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
customerSource: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
whitePrincipal: Mock.mock("@string(5,100)"),
doorAttr: Mock.mock("@string(5,100)"),
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
doorStatus: Mock.mock("@string(5,100)"),
establishmentTime: Mock.mock("@datetime()"),
"fileUrlList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
higherDoor: Mock.mock("@string(5,100)"),
"invoiceList": [CustomerInvoiceAddReq(),CustomerInvoiceAddReq(),CustomerInvoiceAddReq()],
isImportant: Mock.mock("@integer(3,1000)"),
"labels": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
location: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
regCatCnt: Mock.mock("@string(5,100)"),
orangeeredCapital: Mock.mock("@integer(3,1000)"),
skAchievementCnt: Mock.mock("@string(5,100)"),
skQualificationCnt: Mock.mock("@string(5,100)"),
step: Mock.mock("@integer(3,1000)"),

}
}
export function CustomerDoorAddResp() {
return {
id: Mock.mock("@string(5,100)"),
"list": [CustomerDoorInfoResp(),CustomerDoorInfoResp(),CustomerDoorInfoResp()],
repeatType: Mock.mock("@string(5,100)"),

}
}
export function CustomerDoorDetailResp() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyPrincipal: Mock.mock("@string(5,100)"),
categoryName: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
"contactList": [ContactDetailResp(),ContactDetailResp(),ContactDetailResp()],
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
corporateName: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerCode: Mock.mock("@string(5,100)"),
customerSource: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
whitePrincipal: Mock.mock("@string(5,100)"),
doorAttr: Mock.mock("@string(5,100)"),
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
doorStatus: Mock.mock("@string(5,100)"),
establishmentTime: Mock.mock("@datetime()"),
"fileUrlList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
higherDoor: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
"invoiceList": [CustomerInvoiceDetailResp(),CustomerInvoiceDetailResp(),CustomerInvoiceDetailResp()],
isImportant: Mock.mock("@integer(3,1000)"),
"labels": [CustomerLabelResp(),CustomerLabelResp(),CustomerLabelResp()],
licenseId: Mock.mock("@string(5,100)"),
location: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
regCatCnt: Mock.mock("@string(5,100)"),
orangeeredCapital: Mock.mock("@integer(3,1000)"),
skAchievementCnt: Mock.mock("@string(5,100)"),
skQualificationCnt: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),

}
}
export function CustomerDoorFromDataReq() {
return {
companyName: Mock.mock("@string(5,100)"),
companyNum: Mock.mock("@string(5,100)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function CustomerDoorFromDataResp() {
return {
companyEstablishDate: Mock.mock("@datetime()"),
companyIprovinceName: Mock.mock("@string(5,100)"),
companyKey: Mock.mock("@integer(3,1000)"),
companyLegalRepresentative: Mock.mock("@string(5,100)"),
companyLegalRepresentativePhone: Mock.mock("@string(5,100)"),
companyName: Mock.mock("@string(5,100)"),
companyNum: Mock.mock("@string(5,100)"),
companyGladCnt: Mock.mock("@string(5,100)"),
companyPunishmentCnt: Mock.mock("@string(5,100)"),
companyQualificationCnt: Mock.mock("@string(5,100)"),
companyOrangeGreen: Mock.mock("@string(5,100)"),
companyOrangeAmt: Mock.mock("@string(5,100)"),
companyOrangeState: Mock.mock("@string(5,100)"),
companyOrangerarCnt: Mock.mock("@string(5,100)"),
companyRewardsCnt: Mock.mock("@string(5,100)"),
companyScore: Mock.mock("@integer(3,1000)"),
tycCompanyId: Mock.mock("@string(5,100)"),

}
}
export function CustomerDoorInfoResp() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyPrincipal: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
customerCode: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
whitePrincipal: Mock.mock("@string(5,100)"),
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
doorStatus: Mock.mock("@string(5,100)"),
establishmentTime: Mock.mock("@datetime()"),
"fileUrlList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
id: Mock.mock("@string(5,100)"),
isCooperation: Mock.mock("@integer(3,1000)"),
isImportant: Mock.mock("@integer(3,1000)"),
label: Mock.mock("@string(5,100)"),
location: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
regCatCnt: Mock.mock("@string(5,100)"),
orangeeredCapital: Mock.mock("@integer(3,1000)"),
score: Mock.mock("@integer(3,1000)"),
signId: Mock.mock("@string(5,100)"),
signState: Mock.mock("@string(5,100)"),
signTime: Mock.mock("@datetime()"),
skAchievementCnt: Mock.mock("@string(5,100)"),
skQualificationCnt: Mock.mock("@string(5,100)"),

}
}
export function CustomerDoorNumReq() {
return {
createEndTime: Mock.mock("@datetime()"),
createStartTime: Mock.mock("@datetime()"),
own: Mock.mock("@boolean()"),

}
}
export function CustomerDoorNumResp() {
return {
attrCountryNum: Mock.mock("@integer(3,1000)"),
attrGovernmentNUm: Mock.mock("@integer(3,1000)"),
attrPrivateNum: Mock.mock("@integer(3,1000)"),
attrPublicNum: Mock.mock("@integer(3,1000)"),
otherNum: Mock.mock("@integer(3,1000)"),
todayNum: Mock.mock("@integer(3,1000)"),

}
}
export function CustomerDoorUpReq() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyPrincipal: Mock.mock("@string(5,100)"),
categoryName: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
"contactList": [ContactAddReq(),ContactAddReq(),ContactAddReq()],
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
corporateName: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
customerSource: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
whitePrincipal: Mock.mock("@string(5,100)"),
doorAttr: Mock.mock("@string(5,100)"),
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
doorStatus: Mock.mock("@string(5,100)"),
establishmentTime: Mock.mock("@datetime()"),
"fileUrlList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
higherDoor: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
"invoiceList": [CustomerInvoiceAddReq(),CustomerInvoiceAddReq(),CustomerInvoiceAddReq()],
isImportant: Mock.mock("@integer(3,1000)"),
"labels": [CustomerLabelReq(),CustomerLabelReq(),CustomerLabelReq()],
location: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
regCatCnt: Mock.mock("@string(5,100)"),
orangeeredCapital: Mock.mock("@integer(3,1000)"),
skAchievementCnt: Mock.mock("@string(5,100)"),
skQualificationCnt: Mock.mock("@string(5,100)"),
step: Mock.mock("@integer(3,1000)"),

}
}
export function CustomerFollowReq() {
return {
addr: Mock.mock("@string(5,100)"),
contactCatId: Mock.mock("@string(5,100)"),
contactCatName: Mock.mock("@string(5,100)"),
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
date: Mock.mock("@datetime()"),
"fileIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
followType: Mock.mock("@string(5,100)"),

}
}
export function CustomerInvoiceAddReq() {
return {
blueAddr: Mock.mock("@string(5,100)"),
blueBank: Mock.mock("@string(5,100)"),
bankNo: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
isDefault: Mock.mock("@integer(3,1000)"),
isDelete: Mock.mock("@integer(3,1000)"),
phone: Mock.mock("@string(5,100)"),
sort: Mock.mock("@integer(3,1000)"),
tin: Mock.mock("@string(5,100)"),

}
}
export function CustomerInvoiceDetailResp() {
return {
blueAddr: Mock.mock("@string(5,100)"),
blueBank: Mock.mock("@string(5,100)"),
bankNo: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
isDefault: Mock.mock("@integer(3,1000)"),
isDelete: Mock.mock("@integer(3,1000)"),
phone: Mock.mock("@string(5,100)"),
sort: Mock.mock("@integer(3,1000)"),
tin: Mock.mock("@string(5,100)"),

}
}
export function CustomerLabelReq() {
return {
id: Mock.mock("@string(5,100)"),
labelName: Mock.mock("@string(5,100)"),

}
}
export function CustomerLabelResp() {
return {
id: Mock.mock("@string(5,100)"),
labelName: Mock.mock("@string(5,100)"),

}
}
export function CustomerCatAddReq() {
return {
achievementCnt: Mock.mock("@string(5,100)"),
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyPrincipal: Mock.mock("@string(5,100)"),
"certificateList": [CustomerCatCertificateReq(),CustomerCatCertificateReq(),CustomerCatCertificateReq()],
city: Mock.mock("@string(5,100)"),
"contactList": [ContactAddReq(),ContactAddReq(),ContactAddReq()],
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
customerSource: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
whitePrincipal: Mock.mock("@string(5,100)"),
education: Mock.mock("@string(5,100)"),
doorAddr: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
"fileUrlList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
gender: Mock.mock("@string(5,100)"),
"invoiceList": [CustomerInvoiceAddReq(),CustomerInvoiceAddReq(),CustomerInvoiceAddReq()],
isImportant: Mock.mock("@integer(3,1000)"),
"labels": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
location: Mock.mock("@string(5,100)"),
catName: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
step: Mock.mock("@integer(3,1000)"),
"titleList": [CustomerCatTitleReq(),CustomerCatTitleReq(),CustomerCatTitleReq()],

}
}
export function CustomerCatAddResp() {
return {
id: Mock.mock("@string(5,100)"),
"list": [CustomerCatInfoResp(),CustomerCatInfoResp(),CustomerCatInfoResp()],

}
}
export function CustomerCatCertificateInfoResp() {
return {
createName: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
major: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
pictureUrl: Mock.mock("@string(5,100)"),
orangeered: Mock.mock("@string(5,100)"),

}
}
export function CustomerCatCertificateReq() {
return {
customerId: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
major: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),

}
}
export function CustomerCatDetailResp() {
return {
achievementCnt: Mock.mock("@string(5,100)"),
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyPrincipal: Mock.mock("@string(5,100)"),
"certificateList": [CustomerCatCertificateInfoResp(),CustomerCatCertificateInfoResp(),CustomerCatCertificateInfoResp()],
city: Mock.mock("@string(5,100)"),
"contactList": [ContactDetailResp(),ContactDetailResp(),ContactDetailResp()],
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerCode: Mock.mock("@string(5,100)"),
customerSource: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
whitePrincipal: Mock.mock("@string(5,100)"),
education: Mock.mock("@string(5,100)"),
doorAddr: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
"fileUrlList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
gender: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
"invoiceList": [CustomerInvoiceDetailResp(),CustomerInvoiceDetailResp(),CustomerInvoiceDetailResp()],
isImportant: Mock.mock("@integer(3,1000)"),
"labels": [CustomerLabelResp(),CustomerLabelResp(),CustomerLabelResp()],
location: Mock.mock("@string(5,100)"),
catName: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
talentId: Mock.mock("@string(5,100)"),
"titleList": [CustomerCatTitleInfoResp(),CustomerCatTitleInfoResp(),CustomerCatTitleInfoResp()],

}
}
export function CustomerCatInfoResp() {
return {
achievementCnt: Mock.mock("@string(5,100)"),
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
badBehaviorCnt: Mock.mock("@string(5,100)"),
blacklistRecordCnt: Mock.mock("@string(5,100)"),
happyPrincipal: Mock.mock("@string(5,100)"),
certificate: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
customerCode: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
whitePrincipal: Mock.mock("@string(5,100)"),
education: Mock.mock("@string(5,100)"),
gender: Mock.mock("@string(5,100)"),
goodBehaviorCnt: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
isCooperation: Mock.mock("@integer(3,1000)"),
isImportant: Mock.mock("@integer(3,1000)"),
label: Mock.mock("@string(5,100)"),
catName: Mock.mock("@string(5,100)"),
catnelRisk: Mock.mock("@integer(3,1000)"),
phone: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
signId: Mock.mock("@string(5,100)"),
signState: Mock.mock("@string(5,100)"),
signTime: Mock.mock("@datetime()"),
skCertificateCnt: Mock.mock("@string(5,100)"),
title: Mock.mock("@string(5,100)"),

}
}
export function CustomerCatTitleInfoResp() {
return {
customerId: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
level: Mock.mock("@string(5,100)"),
major: Mock.mock("@string(5,100)"),
pictureUrl: Mock.mock("@string(5,100)"),

}
}
export function CustomerCatTitleReq() {
return {
customerId: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
level: Mock.mock("@string(5,100)"),
major: Mock.mock("@string(5,100)"),

}
}
export function CustomerCatUpReq() {
return {
achievementCnt: Mock.mock("@string(5,100)"),
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyPrincipal: Mock.mock("@string(5,100)"),
"certificateList": [CustomerCatCertificateReq(),CustomerCatCertificateReq(),CustomerCatCertificateReq()],
city: Mock.mock("@string(5,100)"),
"contactList": [ContactAddReq(),ContactAddReq(),ContactAddReq()],
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
customerSource: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
whitePrincipal: Mock.mock("@string(5,100)"),
education: Mock.mock("@string(5,100)"),
doorAddr: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
"fileUrlList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
gender: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
"invoiceList": [CustomerInvoiceAddReq(),CustomerInvoiceAddReq(),CustomerInvoiceAddReq()],
isImportant: Mock.mock("@integer(3,1000)"),
"labels": [CustomerLabelReq(),CustomerLabelReq(),CustomerLabelReq()],
location: Mock.mock("@string(5,100)"),
catName: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
"titleList": [CustomerCatTitleReq(),CustomerCatTitleReq(),CustomerCatTitleReq()],

}
}
export function DayCityReq() {
return {
endTime: Mock.mock("@datetime()"),
startTime: Mock.mock("@datetime()"),

}
}
export function DayCityResp() {
return {
"cityList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
dayTime: Mock.mock("@datetime()"),

}
}
export function DelReq() {
return {
id: Mock.mock("@string(5,100)"),

}
}
export function DeleteReq() {
return {
id: Mock.mock("@string(5,100)"),

}
}
export function WhiteListReq() {
return {
parentId: Mock.mock("@string(5,100)"),
scaleType: Mock.mock("@string(5,100)"),

}
}
export function WhiteNoteResp() {
return {
desktopCount: Mock.mock("@integer(3,1000)"),
info: WhiteResp(),

}
}
export function WhiteReq() {
return {
whiteName: Mock.mock("@string(5,100)"),
parentId: Mock.mock("@string(5,100)"),

}
}
export function WhiteResp() {
return {
ancestors: Mock.mock("@string(5,100)"),
authStatus: Mock.mock("@string(5,100)"),
createId: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
whiteCode: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
email: Mock.mock("@string(5,100)"),
doorId: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
isShow: Mock.mock("@boolean()"),
leaderDesktopId: Mock.mock("@string(5,100)"),
leaderDesktopName: Mock.mock("@string(5,100)"),
leaderKeyBorardId: Mock.mock("@string(5,100)"),
linkStatus: Mock.mock("@boolean()"),
mark: Mock.mock("@string(5,100)"),
markDesc: Mock.mock("@string(5,100)"),
modified: Mock.mock("@string(5,100)"),
orderNum: Mock.mock("@integer(3,1000)"),
parentCode: Mock.mock("@string(5,100)"),
parentId: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
profile: Mock.mock("@string(5,100)"),
scaleType: Mock.mock("@string(5,100)"),
scaleTypeDesc: Mock.mock("@string(5,100)"),
status: Mock.mock("@string(5,100)"),
statusDesc: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
updateId: Mock.mock("@datetime()"),
updateName: Mock.mock("@datetime()"),

}
}
export function Document() {
return {
content: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
location: Mock.mock("@string(5,100)"),
title: Mock.mock("@string(5,100)"),

}
}
export function DesktopListResp() {
return {
id: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),

}
}
export function DesktopResp() {
return {
id: Mock.mock("@string(5,100)"),
mobile: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function FailData() {
return {
excelNum: Mock.mock("@integer(3,1000)"),
firstName: Mock.mock("@string(5,100)"),
reason: Mock.mock("@string(5,100)"),

}
}
export function FollowAgainReq() {
return {
happyId: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),

}
}
export function FollowListReq() {
return {
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
taskId: Mock.mock("@string(5,100)"),

}
}
export function ImportExcelByUrlReq() {
return {
fileName: Mock.mock("@string(5,100)"),
fileUrl: Mock.mock("@string(5,100)"),
taskType: Mock.mock("@integer(3,1000)"),

}
}
export function ImportListReq() {
return {
endTime: Mock.mock("@datetime()"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
startTime: Mock.mock("@datetime()"),
taskType: Mock.mock("@integer(3,1000)"),

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
req: Mock.mock("@string(5,100)"),

}
}
export function InnerRpcGuanShuiXiangMuFaCaiMengrpcChongDong() {
return {
req: GuanShuiXiangMuFaCaiMengrpcChongDong(),

}
}
export function ListDesktopReq() {
return {
whiteId: Mock.mock("@string(5,100)"),
keyword: Mock.mock("@string(5,100)"),

}
}
export function ListLocationReq() {
return {
date: Mock.mock("@datetime()"),
followerId: Mock.mock("@string(5,100)"),

}
}
export function LocationAddReq() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
location: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),

}
}
export function LocationDateInfoResp() {
return {
"addrList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
addrNum: Mock.mock("@integer(3,1000)"),
addrStr: Mock.mock("@string(5,100)"),
happyNum: Mock.mock("@integer(3,1000)"),
desktopId: Mock.mock("@string(5,100)"),
desktopName: Mock.mock("@string(5,100)"),
monthDay: Mock.mock("@string(5,100)"),
provinceCity: Mock.mock("@string(5,100)"),
"provinceCityList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],

}
}
export function LocationInfoResp() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
desktopId: Mock.mock("@string(5,100)"),
desktopName: Mock.mock("@string(5,100)"),
fileId: Mock.mock("@string(5,100)"),
location: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),

}
}
export function PageHappyMixReq() {
return {
coordinate: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
orderColumn: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function PageHappyResp() {
return {
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
"contactPhoneList": [LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi()],
coordinate: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
dataLocation: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
"followInfoList": [HuaHuaTiQingQiu(),HuaHuaTiQingQiu(),HuaHuaTiQingQiu()],
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
hasCustomer: Mock.mock("@boolean()"),
id: Mock.mock("@string(5,100)"),
isMyself: Mock.mock("@integer(3,1000)"),
isRead: Mock.mock("@integer(3,1000)"),
lastFetchTime: Mock.mock("@datetime()"),
lastFollowTime: Mock.mock("@datetime()"),
planId: Mock.mock("@string(5,100)"),
planScore: Mock.mock("@string(5,100)"),
recommendedReason: Mock.mock("@string(5,100)"),
signId: Mock.mock("@string(5,100)"),
source: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),

}
}
export function PageContactReq() {
return {
doorId: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function PageCustomerDoorReq() {
return {
addr: Mock.mock("@string(5,100)"),
createEndTime: Mock.mock("@datetime()"),
createStartTime: Mock.mock("@datetime()"),
customerCode: Mock.mock("@string(5,100)"),
door: Mock.mock("@string(5,100)"),
doorAttr: Mock.mock("@string(5,100)"),
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
doorStatus: Mock.mock("@string(5,100)"),
establishmentTimeEnd: Mock.mock("@datetime()"),
establishmentTimeStart: Mock.mock("@datetime()"),
"labelList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
orderColumn: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
own: Mock.mock("@boolean()"),
page: Mock.mock("@integer(3,1000)"),
province: Mock.mock("@string(5,100)"),
regCatCntMax: Mock.mock("@string(5,100)"),
regCatCntMin: Mock.mock("@string(5,100)"),
orangeeredCapitalMax: Mock.mock("@integer(3,1000)"),
orangeeredCapitalMin: Mock.mock("@integer(3,1000)"),
scoreMax: Mock.mock("@integer(3,1000)"),
scoreMin: Mock.mock("@integer(3,1000)"),
sign: Mock.mock("@string(5,100)"),
signDateMax: Mock.mock("@datetime()"),
signDateMin: Mock.mock("@datetime()"),
signState: Mock.mock("@string(5,100)"),
size: Mock.mock("@integer(20,50)"),
skAchievementCntMax: Mock.mock("@string(5,100)"),
skAchievementCntMin: Mock.mock("@string(5,100)"),
skQualificationCntMax: Mock.mock("@string(5,100)"),
skQualificationCntMin: Mock.mock("@string(5,100)"),

}
}
export function PageCustomerCatReq() {
return {
achievementCntMax: Mock.mock("@string(5,100)"),
achievementCntMin: Mock.mock("@string(5,100)"),
addr: Mock.mock("@string(5,100)"),
certificateMajor: Mock.mock("@string(5,100)"),
certificateName: Mock.mock("@string(5,100)"),
"certificateNameList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
customerCode: Mock.mock("@string(5,100)"),
"labelList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
level: Mock.mock("@string(5,100)"),
"levelList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
major: Mock.mock("@string(5,100)"),
"majorList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
orderColumn: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
own: Mock.mock("@boolean()"),
page: Mock.mock("@integer(3,1000)"),
cat: Mock.mock("@string(5,100)"),
catName: Mock.mock("@string(5,100)"),
catnelRisk: Mock.mock("@boolean()"),
phone: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
sign: Mock.mock("@string(5,100)"),
signDateMax: Mock.mock("@datetime()"),
signDateMin: Mock.mock("@datetime()"),
signState: Mock.mock("@string(5,100)"),
size: Mock.mock("@integer(20,50)"),
skCertificateCntMax: Mock.mock("@string(5,100)"),
skCertificateCntMin: Mock.mock("@string(5,100)"),

}
}
export function PageDoorHappyPoolResp() {
return {
addr: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
"contactPhoneList": [LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi()],
coordinate: Mock.mock("@string(5,100)"),
corpCertArray: Mock.mock("@string(5,100)"),
corpCertCnt: Mock.mock("@integer(3,1000)"),
corporateName: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
dataLocation: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
doorStatus: Mock.mock("@string(5,100)"),
doorType: Mock.mock("@string(5,100)"),
establishmentTime: Mock.mock("@datetime()"),
filialeCompanyCnt: Mock.mock("@integer(3,1000)"),
filialeCompanyNameArray: Mock.mock("@string(5,100)"),
"followInfoList": [HuaHuaTiQingQiu(),HuaHuaTiQingQiu(),HuaHuaTiQingQiu()],
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
hasCustomer: Mock.mock("@boolean()"),
id: Mock.mock("@string(5,100)"),
industryType: Mock.mock("@string(5,100)"),
isMyself: Mock.mock("@integer(3,1000)"),
isRead: Mock.mock("@integer(3,1000)"),
lastFetchTime: Mock.mock("@datetime()"),
lastFollowTime: Mock.mock("@datetime()"),
phone: Mock.mock("@string(5,100)"),
planId: Mock.mock("@string(5,100)"),
planScore: Mock.mock("@string(5,100)"),
qualicaficationArray: Mock.mock("@string(5,100)"),
qualicaficationCnt: Mock.mock("@integer(3,1000)"),
recommendedReason: Mock.mock("@string(5,100)"),
regCatCnt: Mock.mock("@string(5,100)"),
orangeeredCapital: Mock.mock("@string(5,100)"),
score: Mock.mock("@integer(3,1000)"),
signId: Mock.mock("@string(5,100)"),
skAchievementCnt: Mock.mock("@string(5,100)"),
skQualificationCnt: Mock.mock("@string(5,100)"),
source: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),

}
}
export function PageLocationByTaskReq() {
return {
desktopName: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
taskId: Mock.mock("@string(5,100)"),

}
}
export function PageLocationReq() {
return {
area: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
desktopName: Mock.mock("@string(5,100)"),
endTime: Mock.mock("@datetime()"),
"followerIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
page: Mock.mock("@integer(3,1000)"),
province: Mock.mock("@string(5,100)"),
size: Mock.mock("@integer(20,50)"),
startTime: Mock.mock("@datetime()"),

}
}
export function PageCatHappyPoolResp() {
return {
achievementCnt: Mock.mock("@string(5,100)"),
addr: Mock.mock("@string(5,100)"),
age: Mock.mock("@integer(3,1000)"),
area: Mock.mock("@string(5,100)"),
badBehaviorCnt: Mock.mock("@string(5,100)"),
blacklistRecordCnt: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
certificateName: Mock.mock("@string(5,100)"),
certificateNum: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
"contactPhoneList": [LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi()],
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerMobile: Mock.mock("@string(5,100)"),
customerName: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
dataLocation: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
education: Mock.mock("@string(5,100)"),
"followInfoList": [HuaHuaTiQingQiu(),HuaHuaTiQingQiu(),HuaHuaTiQingQiu()],
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
gender: Mock.mock("@string(5,100)"),
goodBehaviorCnt: Mock.mock("@string(5,100)"),
hasCustomer: Mock.mock("@boolean()"),
id: Mock.mock("@string(5,100)"),
isMyself: Mock.mock("@integer(3,1000)"),
isRead: Mock.mock("@integer(3,1000)"),
isRetire: Mock.mock("@integer(3,1000)"),
lastFetchTime: Mock.mock("@datetime()"),
lastFollowTime: Mock.mock("@datetime()"),
licenseId: Mock.mock("@string(5,100)"),
catName: Mock.mock("@string(5,100)"),
catnelRisk: Mock.mock("@integer(3,1000)"),
phone: Mock.mock("@string(5,100)"),
planId: Mock.mock("@string(5,100)"),
planScore: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
recommendedReason: Mock.mock("@string(5,100)"),
signId: Mock.mock("@string(5,100)"),
skCertificateCnt: Mock.mock("@string(5,100)"),
source: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),
title: Mock.mock("@string(5,100)"),
workYear: Mock.mock("@integer(3,1000)"),

}
}
export function PagePlanResp() {
return {
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
isMyself: Mock.mock("@integer(3,1000)"),
isRead: Mock.mock("@integer(3,1000)"),
lastFetchTime: Mock.mock("@datetime()"),
lastFollowTime: Mock.mock("@datetime()"),
planId: Mock.mock("@string(5,100)"),
planScore: Mock.mock("@string(5,100)"),
planSource: Mock.mock("@string(5,100)"),
planStatus: Mock.mock("@string(5,100)"),
poolType: Mock.mock("@string(5,100)"),
recommendedReason: Mock.mock("@string(5,100)"),
relStatus: Mock.mock("@string(5,100)"),
relType: Mock.mock("@string(5,100)"),
source: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),

}
}
export function PageGladHappyPoolResp() {
return {
agencies: Mock.mock("@string(5,100)"),
agenciesAddr: Mock.mock("@string(5,100)"),
agenciesAddrCoordinate: Mock.mock("@string(5,100)"),
agenciesAddrLat: Mock.mock("@string(5,100)"),
agenciesAddrLng: Mock.mock("@string(5,100)"),
agenciesArea: Mock.mock("@string(5,100)"),
agenciesCity: Mock.mock("@string(5,100)"),
agenciesCountry: Mock.mock("@string(5,100)"),
agenciesPhone: Mock.mock("@string(5,100)"),
agenciesProvince: Mock.mock("@string(5,100)"),
biddingCorpAddr: Mock.mock("@string(5,100)"),
biddingCorpAddrLat: Mock.mock("@string(5,100)"),
biddingCorpAddrLng: Mock.mock("@string(5,100)"),
biddingCorpArea: Mock.mock("@string(5,100)"),
biddingCorpCity: Mock.mock("@string(5,100)"),
biddingCorpName: Mock.mock("@string(5,100)"),
biddingCorpPhone: Mock.mock("@string(5,100)"),
biddingCorpProvince: Mock.mock("@string(5,100)"),
biddingEndTime: Mock.mock("@datetime()"),
biddingOpeningTime: Mock.mock("@datetime()"),
biddingStartTime: Mock.mock("@datetime()"),
biddingType: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
"contactPhoneList": [LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi()],
coordinate: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
dataLocation: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
fileDownloadEndTime: Mock.mock("@datetime()"),
fileDownloadStartTime: Mock.mock("@datetime()"),
"followInfoList": [HuaHuaTiQingQiu(),HuaHuaTiQingQiu(),HuaHuaTiQingQiu()],
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
hasCustomer: Mock.mock("@boolean()"),
id: Mock.mock("@string(5,100)"),
industryType: Mock.mock("@string(5,100)"),
isMyself: Mock.mock("@integer(3,1000)"),
isRead: Mock.mock("@integer(3,1000)"),
lastFetchTime: Mock.mock("@datetime()"),
lastFollowTime: Mock.mock("@datetime()"),
phone: Mock.mock("@string(5,100)"),
planId: Mock.mock("@string(5,100)"),
planScore: Mock.mock("@string(5,100)"),
gladBudget: Mock.mock("@string(5,100)"),
gladName: Mock.mock("@string(5,100)"),
gladType: Mock.mock("@string(5,100)"),
publishTime: Mock.mock("@datetime()"),
quoteBeginTime: Mock.mock("@datetime()"),
quoteEndTime: Mock.mock("@datetime()"),
recommendedReason: Mock.mock("@string(5,100)"),
signId: Mock.mock("@string(5,100)"),
signUpBeginTime: Mock.mock("@datetime()"),
signUpEndTime: Mock.mock("@datetime()"),
source: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),
valid: Mock.mock("@integer(3,1000)"),

}
}
export function GladSignInfoResp() {
return {
applyKeyBorardId: Mock.mock("@string(5,100)"),
applyKeyBorardName: Mock.mock("@string(5,100)"),
belongCompany: Mock.mock("@string(5,100)"),
belongCompanyId: Mock.mock("@string(5,100)"),
bidEndDate: Mock.mock("@datetime()"),
bidOpenDate: Mock.mock("@datetime()"),
bidStartDate: Mock.mock("@datetime()"),
biddingAgencyId: Mock.mock("@string(5,100)"),
biddingAgencyName: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
cainfoId: Mock.mock("@string(5,100)"),
cainfoName: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
county: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerName: Mock.mock("@string(5,100)"),
isBid: Mock.mock("@boolean()"),
isPreApproval: Mock.mock("@boolean()"),
paramsOneId: Mock.mock("@string(5,100)"),
paramsOneName: Mock.mock("@string(5,100)"),
gladName: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
street: Mock.mock("@string(5,100)"),
templateId: Mock.mock("@string(5,100)"),
templateName: Mock.mock("@string(5,100)"),
township: Mock.mock("@string(5,100)"),

}
}
export function PunchPageReq() {
return {
happyId: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function PunchPageResp() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyId: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
createName: Mock.mock("@string(5,100)"),
"imageUrlList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
location: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
punchTime: Mock.mock("@datetime()"),

}
}
export function PunchReq() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
happyId: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
date: Mock.mock("@datetime()"),
"fileIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
followResult: Mock.mock("@string(5,100)"),
location: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),

}
}
export function RankResp() {
return {
"list": [PaiMingShuJuRankDataResp(),PaiMingShuJuRankDataResp(),PaiMingShuJuRankDataResp()],
rank: WoCongMingPaiMingMyRankResp(),

}
}
export function ReceiveHappyReq() {
return {
"happyList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
happyReceiveSource: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),

}
}
export function Recommended2PlanReq() {
return {
date: Mock.mock("@datetime()"),

}
}
export function SelectCustomerDoorReq() {
return {
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),

}
}
export function SelectCustomerDoorGratefulReq() {
return {
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
"gratefulIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],

}
}
export function TaskAddrResp() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
date: Mock.mock("@datetime()"),
location: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),

}
}
export function TaskChangeStatusReq() {
return {
id: Mock.mock("@string(5,100)"),
taskStatus: Mock.mock("@string(5,100)"),

}
}
export function TaskCreateAddrReq() {
return {
addr: Mock.mock("@string(5,100)"),
area: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
location: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
sort: Mock.mock("@integer(3,1000)"),

}
}
export function TaskCreateWhiteReq() {
return {
whiteId: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),

}
}
export function TaskCreateCatReq() {
return {
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),

}
}
export function TaskCreateReq() {
return {
"addrList": [TaskCreateAddrReq(),TaskCreateAddrReq(),TaskCreateAddrReq()],
dayHappyNum: Mock.mock("@integer(3,1000)"),
dayHappyOpen: Mock.mock("@boolean()"),
"whiteList": [TaskCreateWhiteReq(),TaskCreateWhiteReq(),TaskCreateWhiteReq()],
endTime: Mock.mock("@datetime()"),
name: Mock.mock("@string(5,100)"),
"catList": [TaskCreateCatReq(),TaskCreateCatReq(),TaskCreateCatReq()],
startTime: Mock.mock("@datetime()"),
taskType: Mock.mock("@string(5,100)"),

}
}
export function TaskWhiteResp() {
return {
whiteId: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),

}
}
export function TaskInfoResp() {
return {
"addrList": [TaskAddrResp(),TaskAddrResp(),TaskAddrResp()],
allDays: Mock.mock("@string(5,100)"),
createId: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
dayHappyNum: Mock.mock("@integer(3,1000)"),
dayHappyOpen: Mock.mock("@boolean()"),
days: Mock.mock("@string(5,100)"),
"whiteList": [TaskWhiteResp(),TaskWhiteResp(),TaskWhiteResp()],
endTime: Mock.mock("@datetime()"),
id: Mock.mock("@string(5,100)"),
isMyCreated: Mock.mock("@boolean()"),
name: Mock.mock("@string(5,100)"),
"catList": [TaskCatResp(),TaskCatResp(),TaskCatResp()],
startTime: Mock.mock("@datetime()"),
taskStatus: Mock.mock("@string(5,100)"),
taskType: Mock.mock("@string(5,100)"),

}
}
export function TaskModifyReq() {
return {
"addrList": [TaskCreateAddrReq(),TaskCreateAddrReq(),TaskCreateAddrReq()],
dayHappyNum: Mock.mock("@integer(3,1000)"),
dayHappyOpen: Mock.mock("@boolean()"),
"whiteList": [TaskCreateWhiteReq(),TaskCreateWhiteReq(),TaskCreateWhiteReq()],
endTime: Mock.mock("@datetime()"),
id: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
"catList": [TaskCreateCatReq(),TaskCreateCatReq(),TaskCreateCatReq()],
startTime: Mock.mock("@datetime()"),
taskType: Mock.mock("@string(5,100)"),

}
}
export function TaskPageListReq() {
return {
createEndTime: Mock.mock("@datetime()"),
createStartTime: Mock.mock("@datetime()"),
endTime: Mock.mock("@datetime()"),
name: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
startTime: Mock.mock("@datetime()"),
taskStatus: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function TaskPageListResp() {
return {
"addrList": [TaskAddrResp(),TaskAddrResp(),TaskAddrResp()],
allDays: Mock.mock("@string(5,100)"),
createId: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
dayHappyNum: Mock.mock("@integer(3,1000)"),
dayHappyOpen: Mock.mock("@boolean()"),
days: Mock.mock("@string(5,100)"),
"whiteList": [TaskWhiteResp(),TaskWhiteResp(),TaskWhiteResp()],
endTime: Mock.mock("@datetime()"),
id: Mock.mock("@string(5,100)"),
isMyCreated: Mock.mock("@boolean()"),
name: Mock.mock("@string(5,100)"),
"catList": [TaskCatResp(),TaskCatResp(),TaskCatResp()],
progress: TaskProgressResp(),
startTime: Mock.mock("@datetime()"),
taskStatus: Mock.mock("@string(5,100)"),
taskType: Mock.mock("@string(5,100)"),

}
}
export function TaskCatResp() {
return {
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),

}
}
export function TaskProgressDetailReq() {
return {
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),

}
}
export function TaskProgressDetailResp() {
return {
dayHappyNum: Mock.mock("@integer(3,1000)"),
dayHappyOpen: Mock.mock("@boolean()"),
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
lastLocation: Mock.mock("@string(5,100)"),
"locationDataList": [TaskAddrResp(),TaskAddrResp(),TaskAddrResp()],
phone: Mock.mock("@string(5,100)"),
progress: TaskProgressResp(),
taskStatus: Mock.mock("@string(5,100)"),

}
}
export function TaskProgressCatResp() {
return {
allDays: Mock.mock("@string(5,100)"),
allTasks: Mock.mock("@string(5,100)"),
dayHappyNum: Mock.mock("@integer(3,1000)"),
dayHappyOpen: Mock.mock("@boolean()"),
days: Mock.mock("@string(5,100)"),
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
taskFollow: Mock.mock("@string(5,100)"),
taskStatus: Mock.mock("@string(5,100)"),
todayAllTask: Mock.mock("@string(5,100)"),
todayFollow: Mock.mock("@string(5,100)"),
yesterdayAllTask: Mock.mock("@string(5,100)"),
yesterdayFollow: Mock.mock("@string(5,100)"),

}
}
export function TaskProgressResp() {
return {
allDays: Mock.mock("@string(5,100)"),
allTasks: Mock.mock("@string(5,100)"),
days: Mock.mock("@string(5,100)"),
taskFollow: Mock.mock("@string(5,100)"),
todayAllTask: Mock.mock("@string(5,100)"),
todayFollow: Mock.mock("@string(5,100)"),
yesterdayAllTask: Mock.mock("@string(5,100)"),
yesterdayFollow: Mock.mock("@string(5,100)"),

}
}
export function TravelLoginReq() {
return {
entrance: Mock.mock("@integer(3,1000)"),
plat: Mock.mock("@integer(3,1000)"),

}
}
export function TravelLoginResp() {
return {
redirectUrl: Mock.mock("@string(5,100)"),

}
}
export function TreeNodeConfig() {
return {
childrenKey: Mock.mock("@string(5,100)"),
deep: Mock.mock("@integer(3,1000)"),
idKey: Mock.mock("@string(5,100)"),
nameKey: Mock.mock("@string(5,100)"),
parentIdKey: Mock.mock("@string(5,100)"),
weightKey: Mock.mock("@string(5,100)"),

}
}
export function VerifyRepeatHappyReq() {
return {
happyType: Mock.mock("@string(5,100)"),
code: Mock.mock("@integer(200,200)"),
name: Mock.mock("@string(5,100)"),

}
}
export function VerifyRepeatCustomerReq() {
return {
doorCode: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),

}
}
export function VerifyRepeatCatCustomerReq() {
return {
id: Mock.mock("@string(5,100)"),
catName: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),

}
}
export function ShangChuanWenJianFanHui() {
return {
fileUrl: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),

}
}
export function BuZaiGenJin() {
return {
happyId: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
flowType: Mock.mock("@string(5,100)"),
noFollowReason: Mock.mock("@string(5,100)"),

}
}
export function ZhiXieChangFaCaiMengXiangQingrpcresponse() {
return {
addr: Mock.mock("@string(5,100)"),
categoryName: Mock.mock("@string(5,100)"),
contactMobile: Mock.mock("@string(5,100)"),
contactName: Mock.mock("@string(5,100)"),
corporateName: Mock.mock("@string(5,100)"),
doorCode: Mock.mock("@string(5,100)"),
doorId: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
doorStatus: Mock.mock("@string(5,100)"),
establishmentTime: Mock.mock("@datetime()"),
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
regCatCnt: Mock.mock("@string(5,100)"),
orangeeredCapital: Mock.mock("@string(5,100)"),
score: Mock.mock("@integer(3,1000)"),
skAchievementCnt: Mock.mock("@string(5,100)"),
skQualificationCnt: Mock.mock("@string(5,100)"),

}
}
export function GuanLianFaCaiMengRequest() {
return {
happyId: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),

}
}
export function GuanLianFaCaiMengResponse() {
}
export function FenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu() {
return {
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
"contactPhoneList": [LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi()],
coordinate: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
dataLocation: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
"followInfoList": [HuaHuaTiQingQiu(),HuaHuaTiQingQiu(),HuaHuaTiQingQiu()],
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
hasCustomer: Mock.mock("@boolean()"),
id: Mock.mock("@string(5,100)"),
isMyself: Mock.mock("@integer(3,1000)"),
isRead: Mock.mock("@integer(3,1000)"),
lastFetchTime: Mock.mock("@datetime()"),
lastFollowTime: Mock.mock("@datetime()"),
catName: Mock.mock("@string(5,100)"),
planId: Mock.mock("@string(5,100)"),
planScore: Mock.mock("@string(5,100)"),
recommendedReason: Mock.mock("@string(5,100)"),
signId: Mock.mock("@string(5,100)"),
source: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),

}
}
export function FenYeLvYouRenCaiFaCaiMengJianDanShuJu() {
return {
addr: Mock.mock("@string(5,100)"),
"addrList": [DiZhi(),DiZhi(),DiZhi()],
area: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
createEndTime: Mock.mock("@datetime()"),
createStartTime: Mock.mock("@datetime()"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
followResult: Mock.mock("@string(5,100)"),
followType: Mock.mock("@string(5,100)"),
"followTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
followerId: Mock.mock("@string(5,100)"),
isRead: Mock.mock("@integer(3,1000)"),
name: Mock.mock("@string(5,100)"),
orderColumn: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
page: Mock.mock("@integer(3,1000)"),
province: Mock.mock("@string(5,100)"),
receiveType: Mock.mock("@string(5,100)"),
size: Mock.mock("@integer(20,50)"),
source: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function FenYeLvYouRenCaiFaCaiMengGongHai() {
return {
achievementCntMax: Mock.mock("@string(5,100)"),
achievementCntMin: Mock.mock("@string(5,100)"),
addr: Mock.mock("@string(5,100)"),
"addrList": [DiZhi(),DiZhi(),DiZhi()],
area: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
"certificateList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
certificateMajor: Mock.mock("@string(5,100)"),
certificateName: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
createEndTime: Mock.mock("@datetime()"),
createStartTime: Mock.mock("@datetime()"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
followResult: Mock.mock("@string(5,100)"),
followType: Mock.mock("@string(5,100)"),
"followTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
followerId: Mock.mock("@string(5,100)"),
isRead: Mock.mock("@integer(3,1000)"),
level: Mock.mock("@string(5,100)"),
"levelList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
major: Mock.mock("@string(5,100)"),
"majorList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
name: Mock.mock("@string(5,100)"),
orderColumn: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
page: Mock.mock("@integer(3,1000)"),
province: Mock.mock("@string(5,100)"),
receiveType: Mock.mock("@string(5,100)"),
size: Mock.mock("@integer(20,50)"),
skCertificateCntMax: Mock.mock("@string(5,100)"),
skCertificateCntMin: Mock.mock("@string(5,100)"),
source: Mock.mock("@string(5,100)"),
taskId: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function FenYeLvYouRenCaiFaCaiMengTuiJian() {
return {
achievementCntMax: Mock.mock("@string(5,100)"),
achievementCntMin: Mock.mock("@string(5,100)"),
addr: Mock.mock("@string(5,100)"),
"addrList": [DiZhi(),DiZhi(),DiZhi()],
area: Mock.mock("@string(5,100)"),
certificateMajor: Mock.mock("@string(5,100)"),
certificateName: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
createEndTime: Mock.mock("@datetime()"),
createStartTime: Mock.mock("@datetime()"),
distance: Mock.mock("@string(5,100)"),
followResult: Mock.mock("@string(5,100)"),
followType: Mock.mock("@string(5,100)"),
"followTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
level: Mock.mock("@string(5,100)"),
"levelList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
major: Mock.mock("@string(5,100)"),
"majorList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
name: Mock.mock("@string(5,100)"),
orderColumn: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
page: Mock.mock("@integer(3,1000)"),
catnelRisk: Mock.mock("@boolean()"),
province: Mock.mock("@string(5,100)"),
size: Mock.mock("@integer(20,50)"),
skCertificateCntMax: Mock.mock("@string(5,100)"),
skCertificateCntMin: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function FenYeLvYouRenWu() {
return {
cnt: Mock.mock("@string(5,100)"),
handlerId: Mock.mock("@string(5,100)"),
handlerName: Mock.mock("@string(5,100)"),
lastPunchAddr: Mock.mock("@string(5,100)"),
"planHappyList": [PagePlanResp(),PagePlanResp(),PagePlanResp()],
planCount: Mock.mock("@integer(3,1000)"),
planKeyBorardId: Mock.mock("@string(5,100)"),
"signHappyList": [PagePlanResp(),PagePlanResp(),PagePlanResp()],
signCount: Mock.mock("@integer(3,1000)"),

}
}
export function FenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu() {
return {
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
"contactPhoneList": [LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi()],
coordinate: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
dataLocation: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
doorName: Mock.mock("@string(5,100)"),
"followInfoList": [HuaHuaTiQingQiu(),HuaHuaTiQingQiu(),HuaHuaTiQingQiu()],
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
hasCustomer: Mock.mock("@boolean()"),
id: Mock.mock("@string(5,100)"),
isMyself: Mock.mock("@integer(3,1000)"),
isRead: Mock.mock("@integer(3,1000)"),
lastFetchTime: Mock.mock("@datetime()"),
lastFollowTime: Mock.mock("@datetime()"),
planId: Mock.mock("@string(5,100)"),
planScore: Mock.mock("@string(5,100)"),
recommendedReason: Mock.mock("@string(5,100)"),
signId: Mock.mock("@string(5,100)"),
source: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),

}
}
export function FenYeLvYouZhiXieChangFaCaiMengJianDanShuJu() {
return {
name: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function FenYeLvYouZhiXieChangFaCaiMengGongHai() {
return {
addr: Mock.mock("@string(5,100)"),
"addrList": [DiZhi(),DiZhi(),DiZhi()],
area: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
"corpCertList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
corpCertMax: Mock.mock("@string(5,100)"),
corpCertMin: Mock.mock("@string(5,100)"),
createEndTime: Mock.mock("@datetime()"),
createStartTime: Mock.mock("@datetime()"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
endTime: Mock.mock("@datetime()"),
doorStatus: Mock.mock("@string(5,100)"),
"doorType": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
"doorTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
filialeCompanyMax: Mock.mock("@string(5,100)"),
filialeCompanyMin: Mock.mock("@string(5,100)"),
followResult: Mock.mock("@string(5,100)"),
followType: Mock.mock("@string(5,100)"),
"followTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
followerId: Mock.mock("@string(5,100)"),
"industryType": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
isRead: Mock.mock("@integer(3,1000)"),
"lackCorpCertList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
"lackQualicaficationList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
name: Mock.mock("@string(5,100)"),
orderColumn: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
page: Mock.mock("@integer(3,1000)"),
province: Mock.mock("@string(5,100)"),
"qualicaficationList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
qualicaficationMax: Mock.mock("@string(5,100)"),
qualicaficationMin: Mock.mock("@string(5,100)"),
receiveType: Mock.mock("@string(5,100)"),
regCatCntMax: Mock.mock("@string(5,100)"),
regCatCntMin: Mock.mock("@string(5,100)"),
orangeeredCapitalMax: Mock.mock("@string(5,100)"),
orangeeredCapitalMin: Mock.mock("@string(5,100)"),
scoreMax: Mock.mock("@integer(3,1000)"),
scoreMin: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
skAchievementCntMax: Mock.mock("@string(5,100)"),
skAchievementCntMin: Mock.mock("@string(5,100)"),
skQualificationCntMax: Mock.mock("@string(5,100)"),
skQualificationCntMin: Mock.mock("@string(5,100)"),
source: Mock.mock("@string(5,100)"),
startTime: Mock.mock("@datetime()"),
taskId: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function FenYeLvYouZhiXieChangFaCaiMengTuiJian() {
return {
addr: Mock.mock("@string(5,100)"),
"addrList": [DiZhi(),DiZhi(),DiZhi()],
area: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
"corpCertList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
corpCertMax: Mock.mock("@string(5,100)"),
corpCertMin: Mock.mock("@string(5,100)"),
createEndTime: Mock.mock("@datetime()"),
createStartTime: Mock.mock("@datetime()"),
distance: Mock.mock("@string(5,100)"),
endTime: Mock.mock("@datetime()"),
doorStatus: Mock.mock("@string(5,100)"),
"filialeCompanyList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
filialeCompanyMax: Mock.mock("@string(5,100)"),
filialeCompanyMin: Mock.mock("@string(5,100)"),
followResult: Mock.mock("@string(5,100)"),
followType: Mock.mock("@string(5,100)"),
"followTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
name: Mock.mock("@string(5,100)"),
orderColumn: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
page: Mock.mock("@integer(3,1000)"),
province: Mock.mock("@string(5,100)"),
"qualicaficationList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
qualicaficationMax: Mock.mock("@string(5,100)"),
qualicaficationMin: Mock.mock("@string(5,100)"),
regCatCntMax: Mock.mock("@string(5,100)"),
regCatCntMin: Mock.mock("@string(5,100)"),
orangeeredCapitalMax: Mock.mock("@string(5,100)"),
orangeeredCapitalMin: Mock.mock("@string(5,100)"),
scoreMax: Mock.mock("@integer(3,1000)"),
scoreMin: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
skAchievementCntMax: Mock.mock("@string(5,100)"),
skAchievementCntMin: Mock.mock("@string(5,100)"),
skQualificationCntMax: Mock.mock("@string(5,100)"),
skQualificationCntMin: Mock.mock("@string(5,100)"),
startTime: Mock.mock("@datetime()"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function FenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu() {
return {
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
"contactPhoneList": [LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi(),LianXiRenHuaHuaTi()],
coordinate: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
dataLocation: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
"followInfoList": [HuaHuaTiQingQiu(),HuaHuaTiQingQiu(),HuaHuaTiQingQiu()],
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
hasCustomer: Mock.mock("@boolean()"),
id: Mock.mock("@string(5,100)"),
isMyself: Mock.mock("@integer(3,1000)"),
isRead: Mock.mock("@integer(3,1000)"),
lastFetchTime: Mock.mock("@datetime()"),
lastFollowTime: Mock.mock("@datetime()"),
planId: Mock.mock("@string(5,100)"),
planScore: Mock.mock("@string(5,100)"),
gladName: Mock.mock("@string(5,100)"),
recommendedReason: Mock.mock("@string(5,100)"),
signId: Mock.mock("@string(5,100)"),
source: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),

}
}
export function FenYeLvYouXiangMuFaCaiMengJianDanShuJu() {
return {
addr: Mock.mock("@string(5,100)"),
"addrList": [DiZhi(),DiZhi(),DiZhi()],
area: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
createEndTime: Mock.mock("@datetime()"),
createStartTime: Mock.mock("@datetime()"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
followResult: Mock.mock("@string(5,100)"),
followType: Mock.mock("@string(5,100)"),
"followTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
followerId: Mock.mock("@string(5,100)"),
isRead: Mock.mock("@integer(3,1000)"),
name: Mock.mock("@string(5,100)"),
orderColumn: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
page: Mock.mock("@integer(3,1000)"),
province: Mock.mock("@string(5,100)"),
receiveType: Mock.mock("@string(5,100)"),
size: Mock.mock("@integer(20,50)"),
source: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function FenYeLvYouXiangMuFaCaiMengTuiJian() {
return {
addr: Mock.mock("@string(5,100)"),
"addrList": [DiZhi(),DiZhi(),DiZhi()],
area: Mock.mock("@string(5,100)"),
biddingType: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
createEndTime: Mock.mock("@datetime()"),
createStartTime: Mock.mock("@datetime()"),
distance: Mock.mock("@string(5,100)"),
followResult: Mock.mock("@string(5,100)"),
followType: Mock.mock("@string(5,100)"),
"followTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
"industryTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
name: Mock.mock("@string(5,100)"),
orderColumn: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
page: Mock.mock("@integer(3,1000)"),
gladBudgetMax: Mock.mock("@string(5,100)"),
gladBudgetMin: Mock.mock("@string(5,100)"),
"gladTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
province: Mock.mock("@string(5,100)"),
publishEndTime: Mock.mock("@datetime()"),
publishStartTime: Mock.mock("@datetime()"),
signUpBeginTime: Mock.mock("@datetime()"),
signUpEndTime: Mock.mock("@datetime()"),
size: Mock.mock("@integer(20,50)"),
type: Mock.mock("@integer(3,1000)"),
valid: Mock.mock("@integer(3,1000)"),

}
}
export function HuaHuaTiQingQiu() {
return {
addr: Mock.mock("@string(5,100)"),
happyId: Mock.mock("@string(5,100)"),
happyName: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
contactCatId: Mock.mock("@string(5,100)"),
contactCatName: Mock.mock("@string(5,100)"),
contactCatNum: Mock.mock("@string(5,100)"),
contactCatType: Mock.mock("@integer(3,1000)"),
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
followResult: Mock.mock("@string(5,100)"),
followTime: Mock.mock("@datetime()"),
followType: Mock.mock("@string(5,100)"),
follower: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
"imageUrlList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],

}
}
export function YuMiHuaHuaTiQingQiu() {
return {
mobile: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function FaCaiMengGenJinJiLuQingQiu() {
return {
happyId: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
"flowType": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function DiZhi() {
return {
area: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),

}
}
export function JiQiRenGenJinJiLuXiangYing() {
return {
addr: Mock.mock("@string(5,100)"),
contactCatId: Mock.mock("@string(5,100)"),
contactCatName: Mock.mock("@string(5,100)"),
contactCatNum: Mock.mock("@string(5,100)"),
contactCatType: Mock.mock("@integer(3,1000)"),
content: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerName: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
followResult: Mock.mock("@string(5,100)"),
followTime: Mock.mock("@datetime()"),
followType: Mock.mock("@string(5,100)"),
follower: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
"imageUrlList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],

}
}
export function JiQiRenGenJinJiLuQingQiu() {
return {
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function DaoRuHuaHuaTiXiangYing() {
return {
"failData": [FailData(),FailData(),FailData()],
failNum: Mock.mock("@integer(3,1000)"),
fileName: Mock.mock("@string(5,100)"),
fileUrl: Mock.mock("@string(5,100)"),
importTime: Mock.mock("@datetime()"),
operator: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
status: Mock.mock("@integer(3,1000)"),
successNum: Mock.mock("@integer(3,1000)"),

}
}
export function DaoRuHuaHuaTiQingQiu() {
return {
endTime: Mock.mock("@datetime()"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
startTime: Mock.mock("@datetime()"),
taskType: Mock.mock("@integer(3,1000)"),

}
}
export function WoCongMingFaCaiMengQuanJuFenLei() {
return {
happyType: Mock.mock("@string(5,100)"),

}
}
export function WoCongMingPaiMingMyRankResp() {
return {
dealData: Mock.mock("@integer(3,1000)"),
dealDataRank: Mock.mock("@string(5,100)"),
followData: Mock.mock("@integer(3,1000)"),
followDataRank: Mock.mock("@string(5,100)"),
newData: Mock.mock("@integer(3,1000)"),
newDataRank: Mock.mock("@string(5,100)"),

}
}
export function PaiMingShuJuRankDataResp() {
return {
dealData: Mock.mock("@integer(3,1000)"),
followData: Mock.mock("@integer(3,1000)"),
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),
newData: Mock.mock("@integer(3,1000)"),

}
}
export function PaiMingTongJiPieDataReq() {
return {
beginTime: Mock.mock("@datetime()"),
endTime: Mock.mock("@datetime()"),

}
}
export function PaiMingTongJiRankDataReq() {
return {
orderColum: Mock.mock("@string(5,100)"),

}
}
export function SouSuoRenCaiJiQiRenrequest() {
return {
page: Mock.mock("@integer(3,1000)"),
catName: Mock.mock("@string(5,100)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function SouSuoRenCaiJiQiRenresponse() {
return {
id: Mock.mock("@string(5,100)"),
catName: Mock.mock("@string(5,100)"),

}
}
export function SouSuoZhiXieChangJiQiRenrequest() {
return {
doorName: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function SouSuoZhiXieChangJiQiRenresponse() {
return {
doorName: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),

}
}
export function CaoZuoRiZhiFenYerequest() {
return {
bizId: Mock.mock("@string(5,100)"),
bizType: Mock.mock("@string(5,100)"),
operatorId: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function CaoZuoRiZhiFenYeresponse() {
return {
content: Mock.mock("@string(5,100)"),
logId: Mock.mock("@string(5,100)"),
operateTime: Mock.mock("@datetime()"),
operateType: Mock.mock("@string(5,100)"),
operator: Mock.mock("@string(5,100)"),

}
}
export function GuanShuiXiangMuFaCaiMengrpcChongDong() {
return {
agencies: Mock.mock("@string(5,100)"),
agenciesAddr: Mock.mock("@string(5,100)"),
agenciesAddrCoordinate: Mock.mock("@string(5,100)"),
agenciesAddrLat: Mock.mock("@string(5,100)"),
agenciesAddrLng: Mock.mock("@string(5,100)"),
agenciesArea: Mock.mock("@string(5,100)"),
agenciesCity: Mock.mock("@string(5,100)"),
agenciesCountry: Mock.mock("@string(5,100)"),
agenciesPhone: Mock.mock("@string(5,100)"),
agenciesProvince: Mock.mock("@string(5,100)"),
biddingCorpAddr: Mock.mock("@string(5,100)"),
biddingCorpAddrCoordinate: Mock.mock("@string(5,100)"),
biddingCorpAddrLat: Mock.mock("@string(5,100)"),
biddingCorpAddrLng: Mock.mock("@string(5,100)"),
biddingCorpArea: Mock.mock("@string(5,100)"),
biddingCorpCity: Mock.mock("@string(5,100)"),
biddingCorpCountry: Mock.mock("@string(5,100)"),
biddingCorpName: Mock.mock("@string(5,100)"),
biddingCorpPhone: Mock.mock("@string(5,100)"),
biddingCorpProvince: Mock.mock("@string(5,100)"),
biddingEndTime: Mock.mock("@datetime()"),
biddingOpeningTime: Mock.mock("@datetime()"),
biddingStartTime: Mock.mock("@datetime()"),
biddingType: Mock.mock("@string(5,100)"),
fileDownloadEndTime: Mock.mock("@datetime()"),
fileDownloadStartTime: Mock.mock("@datetime()"),
industryType: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
gladBudget: Mock.mock("@string(5,100)"),
gladName: Mock.mock("@string(5,100)"),
gladNum: Mock.mock("@string(5,100)"),
gladType: Mock.mock("@string(5,100)"),

}
}
export function GengGaiPaiXuDuiXiang() {
return {
"list": [HappyPlanScoreListReq(),HappyPlanScoreListReq(),HappyPlanScoreListReq()],

}
}
export function ZhuZhuangTuTongJiHistogramDataReq() {
return {
happyType: Mock.mock("@string(5,100)"),
dateType: Mock.mock("@datetime()"),

}
}
export function TianJiaLianXiRenQingQiu() {
return {
name: Mock.mock("@string(5,100)"),
relId: Mock.mock("@string(5,100)"),
relType: Mock.mock("@integer(3,1000)"),
remark: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),
value: Mock.mock("@string(5,100)"),

}
}
export function HongLingJinRequest() {
return {
happyId: Mock.mock("@string(5,100)"),
happySource: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
radarHappyId: Mock.mock("@string(5,100)"),
signType: Mock.mock("@string(5,100)"),

}
}
export function HongLingJinJieGuoresponse() {
return {
happyId: Mock.mock("@string(5,100)"),
mobile: Mock.mock("@string(5,100)"),
signId: Mock.mock("@string(5,100)"),

}
}
export function HongLingJinJiLuFenYerequest() {
return {
happyId: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function HongLingJinJiLuFenYeresponse() {
return {
happyId: Mock.mock("@string(5,100)"),
happyName: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),
content: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
dealTime: Mock.mock("@datetime()"),
dealType: Mock.mock("@string(5,100)"),
handler: Mock.mock("@string(5,100)"),
handlerId: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
schedule: Mock.mock("@string(5,100)"),
signingType: Mock.mock("@string(5,100)"),
thirdId: Mock.mock("@string(5,100)"),

}
}
export function TongJiShuJuHistogramDataResp() {
return {
dealData: Mock.mock("@integer(3,1000)"),
followData: Mock.mock("@integer(3,1000)"),
invalidData: Mock.mock("@integer(3,1000)"),
newData: Mock.mock("@integer(3,1000)"),

}
}
export function TongJiShuJuHistogramResp() {
return {
data: TongJiShuJuHistogramDataResp(),
label: Mock.mock("@string(5,100)"),

}
}
export function TongJiShuJuPieDataResp() {
return {
beforeTotal: Mock.mock("@integer(3,1000)"),
compareBefore: Mock.mock("@string(5,100)"),
dealData: Mock.mock("@integer(3,1000)"),
doorData: Mock.mock("@integer(3,1000)"),
followData: Mock.mock("@integer(3,1000)"),
newData: Mock.mock("@integer(3,1000)"),
catData: Mock.mock("@integer(3,1000)"),
gladData: Mock.mock("@integer(3,1000)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function LianXiRenHuaHuaTi() {
return {
addDate: Mock.mock("@datetime()"),
addName: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
remark: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),
value: Mock.mock("@string(5,100)"),

}
}
export function LianXiRenHuaHuaTiQingQiu() {
return {
name: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
relId: Mock.mock("@string(5,100)"),
relType: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function JieChuHongLingJinrequest() {
return {
happyId: Mock.mock("@string(5,100)"),
happyType: Mock.mock("@string(5,100)"),

}
}
export function DuRuWenJianXiangYing() {
return {
id: Mock.mock("@string(5,100)"),

}
}
export function ZhuanRangQingQiu() {
return {
"happyId": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
happyType: Mock.mock("@string(5,100)"),
followerId: Mock.mock("@string(5,100)"),
followerName: Mock.mock("@string(5,100)"),

}
}
export function XiangMuFaCaiMengXiuGairpcrequest() {
return {
agencies: Mock.mock("@string(5,100)"),
agenciesAddr: Mock.mock("@string(5,100)"),
agenciesAddrCoordinate: Mock.mock("@string(5,100)"),
agenciesAddrLat: Mock.mock("@string(5,100)"),
agenciesAddrLng: Mock.mock("@string(5,100)"),
agenciesArea: Mock.mock("@string(5,100)"),
agenciesCity: Mock.mock("@string(5,100)"),
agenciesCountry: Mock.mock("@string(5,100)"),
agenciesPhone: Mock.mock("@string(5,100)"),
agenciesProvince: Mock.mock("@string(5,100)"),
biddingCorpAddr: Mock.mock("@string(5,100)"),
biddingCorpAddrCoordinate: Mock.mock("@string(5,100)"),
biddingCorpAddrLat: Mock.mock("@string(5,100)"),
biddingCorpAddrLng: Mock.mock("@string(5,100)"),
biddingCorpArea: Mock.mock("@string(5,100)"),
biddingCorpCity: Mock.mock("@string(5,100)"),
biddingCorpCountry: Mock.mock("@string(5,100)"),
biddingCorpName: Mock.mock("@string(5,100)"),
biddingCorpPhone: Mock.mock("@string(5,100)"),
biddingCorpProvince: Mock.mock("@string(5,100)"),
biddingEndTime: Mock.mock("@datetime()"),
biddingOpeningTime: Mock.mock("@datetime()"),
biddingStartTime: Mock.mock("@datetime()"),
biddingType: Mock.mock("@string(5,100)"),
fileDownloadEndTime: Mock.mock("@datetime()"),
fileDownloadStartTime: Mock.mock("@datetime()"),
industryType: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
gladBudget: Mock.mock("@string(5,100)"),
gladId: Mock.mock("@string(5,100)"),
gladName: Mock.mock("@string(5,100)"),
gladNum: Mock.mock("@string(5,100)"),
gladType: Mock.mock("@string(5,100)"),

}
}
export function XiangMuFaCaiMengGongHaiLvYou() {
return {
addr: Mock.mock("@string(5,100)"),
"addrList": [DiZhi(),DiZhi(),DiZhi()],
area: Mock.mock("@string(5,100)"),
biddingType: Mock.mock("@string(5,100)"),
happyStatus: Mock.mock("@string(5,100)"),
city: Mock.mock("@string(5,100)"),
coordinate: Mock.mock("@string(5,100)"),
createEndTime: Mock.mock("@datetime()"),
createStartTime: Mock.mock("@datetime()"),
customerId: Mock.mock("@string(5,100)"),
customerType: Mock.mock("@string(5,100)"),
distance: Mock.mock("@string(5,100)"),
followResult: Mock.mock("@string(5,100)"),
followType: Mock.mock("@string(5,100)"),
"followTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
followerId: Mock.mock("@string(5,100)"),
"industryTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
isRead: Mock.mock("@integer(3,1000)"),
name: Mock.mock("@string(5,100)"),
orderColumn: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
page: Mock.mock("@integer(3,1000)"),
gladBudgetMax: Mock.mock("@string(5,100)"),
gladBudgetMin: Mock.mock("@string(5,100)"),
"gladTypeList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
province: Mock.mock("@string(5,100)"),
publishEndTime: Mock.mock("@datetime()"),
publishStartTime: Mock.mock("@datetime()"),
receiveType: Mock.mock("@string(5,100)"),
signUpBeginTime: Mock.mock("@datetime()"),
signUpEndTime: Mock.mock("@datetime()"),
size: Mock.mock("@integer(20,50)"),
source: Mock.mock("@string(5,100)"),
taskId: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),
valid: Mock.mock("@integer(3,1000)"),

}
}
export function XiangMuFaCaiMengFenYeLvYourpcrequest() {
return {
page: Mock.mock("@integer(3,1000)"),
gladName: Mock.mock("@string(5,100)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function XiangMuFaCaiMengXiangQingrpcresponse() {
return {
agencies: Mock.mock("@string(5,100)"),
agenciesAddr: Mock.mock("@string(5,100)"),
agenciesPhone: Mock.mock("@string(5,100)"),
biddingCorpAddr: Mock.mock("@string(5,100)"),
biddingCorpName: Mock.mock("@string(5,100)"),
biddingCorpPhone: Mock.mock("@string(5,100)"),
biddingTime: Mock.mock("@datetime()"),
biddingType: Mock.mock("@string(5,100)"),
industryType: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
gladBudget: Mock.mock("@string(5,100)"),
gladId: Mock.mock("@string(5,100)"),
gladName: Mock.mock("@string(5,100)"),
gladNum: Mock.mock("@string(5,100)"),
gladType: Mock.mock("@string(5,100)"),

}
}
