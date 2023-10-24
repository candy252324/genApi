import Mock from "mockjs"
export function AddBirdResp() {
return {
directEntryBird: Mock.mock("@boolean()"),
imBirdId: Mock.mock("@string(5,100)"),

}
}
export function GreenBookGratefulInfoResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
checked: Mock.mock("@boolean()"),
kind: Mock.mock("@string(5,100)"),
showImBirdId: Mock.mock("@boolean()"),
gratefulId: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),

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
export function ApiResponseAddBirdResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: AddBirdResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseAtListAndAckSequenceResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: AtListAndAckSequenceResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageCommonSearchResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageCommonSearchResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageContactResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageContactResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageFriendshipResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageFriendshipResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageSearchBeforeAddFriendResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageSearchBeforeAddFriendResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageKeyBorardBlackResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageKeyBorardBlackResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageWaiBuZhiXieChangChuCan() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageWaiBuZhiXieChangChuCan(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageWaiBuShuiDaoXiangYing() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageWaiBuShuiDaoXiangYing(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageXiaoXiNaBuXiangYingShiTi() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageXiaoXiNaBuXiangYingShiTi(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageXiaoXiDuiXiang() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageXiaoXiDuiXiang(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageNiaoWoDuiXiangBirdResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageNiaoWoDuiXiangBirdResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseFriendshipDetailResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: FriendshipDetailResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseFriendshipKeyBorardDetailResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: FriendshipKeyBorardDetailResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing() {
return {
code: Mock.mock("@integer(200,200)"),
data: InviteToBirdRespYaoQingRuNiaoWoXiangYing(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListGreenBookGratefulInfoResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [GreenBookGratefulInfoResp(),GreenBookGratefulInfoResp(),GreenBookGratefulInfoResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListForwardListResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [ForwardListResp(),ForwardListResp(),ForwardListResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListFriendshipResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [FriendshipResp(),FriendshipResp(),FriendshipResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListBirdF2fKeyBorardListResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [BirdF2fKeyBorardListResp(),BirdF2fKeyBorardListResp(),BirdF2fKeyBorardListResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListPhoneFriendshipResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [PhoneFriendshipResp(),PhoneFriendshipResp(),PhoneFriendshipResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListSwitchKeyBorardListResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [SwitchKeyBorardListResp(),SwitchKeyBorardListResp(),SwitchKeyBorardListResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListGratefulInfoRespLvKeXinXi() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [GratefulInfoRespLvKeXinXi(),GratefulInfoRespLvKeXinXi(),GratefulInfoRespLvKeXinXi()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListUnreadResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [UnreadResp(),UnreadResp(),UnreadResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListKeyBorardListAllGratefulResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [KeyBorardListAllGratefulResp(),KeyBorardListAllGratefulResp(),KeyBorardListAllGratefulResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListXiaoXiDuiXiang() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [XiaoXiDuiXiang(),XiaoXiDuiXiang(),XiaoXiDuiXiang()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListBanBen() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [BanBen(),BanBen(),BanBen()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [NiaoWoChengYuanXinXiDuiXiangBirdMemberResp(),NiaoWoChengYuanXinXiDuiXiangBirdMemberResp(),NiaoWoChengYuanXinXiDuiXiangBirdMemberResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseListDaDuNanXinXiWhiteResp() {
return {
code: Mock.mock("@integer(200,200)"),
"data": [DaDuNanXinXiWhiteResp(),DaDuNanXinXiWhiteResp(),DaDuNanXinXiWhiteResp()],
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseMaplongLvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi() {
return {
code: Mock.mock("@integer(200,200)"),
data: LvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseMapstringSearchMapResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: SearchMapResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseMemberBirdStatusResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: MemberBirdStatusResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponsePutFileResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: PutFileResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseQueryLastMessageResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: QueryLastMessageResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing() {
return {
code: Mock.mock("@integer(200,200)"),
data: UnReadComPageXiaoDaoXiaoXiYongDaoXiangYing(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseKeyBorardBindResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: KeyBorardBindResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseKeyBorardRespDuiXiang() {
return {
code: Mock.mock("@integer(200,200)"),
data: KeyBorardRespDuiXiang(),
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
export function ApiResponseWaterFallPageKeyBorardBlackResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: WaterFallPageKeyBorardBlackResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponsealiyunSTSJianQuanFanHuiZhi() {
return {
code: Mock.mock("@integer(200,200)"),
data: aliyunSTSJianQuanFanHuiZhi(),
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
export function ApiResponseShangChuanALiYunQianMingXiangYing() {
return {
code: Mock.mock("@integer(200,200)"),
data: ShangChuanALiYunQianMingXiangYing(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseXiaoDaoXiaoXi() {
return {
code: Mock.mock("@integer(200,200)"),
data: XiaoDaoXiaoXi(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan() {
return {
code: Mock.mock("@integer(200,200)"),
data: NaBuMaiShaoBingNiaoWoBaoCunChuCan(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseWenJianPiLiangBaoCunXiangYingShiTi() {
return {
code: Mock.mock("@integer(200,200)"),
data: WenJianPiLiangBaoCunXiangYingShiTi(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseXiaoXiDuiXiang() {
return {
code: Mock.mock("@integer(200,200)"),
data: XiaoXiDuiXiang(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseBanBen() {
return {
code: Mock.mock("@integer(200,200)"),
data: BanBen(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseDengLuXiangYingShiTi() {
return {
code: Mock.mock("@integer(200,200)"),
data: DengLuXiangYingShiTi(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseQianMingWenJianXiangYing() {
return {
code: Mock.mock("@integer(200,200)"),
data: QianMingWenJianXiangYing(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseNiaoWoDuiXiangBirdDetailResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: NiaoWoDuiXiangBirdDetailResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseNiaoWoDuiXiangBirdResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: NiaoWoDuiXiangBirdResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: NiaoWoChengYuanXinXiDuiXiangBirdMemberResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi() {
return {
code: Mock.mock("@integer(200,200)"),
data: NiaoWoWenJianShangChuanXiangYingShiTi(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseYuYinShiBieFanHui() {
return {
code: Mock.mock("@integer(200,200)"),
data: YuYinShiBieFanHui(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp() {
return {
code: Mock.mock("@integer(200,200)"),
data: YanChangChunHuaXiaoXiXiangQingRequestDetailResp(),
msg: Mock.mock("@string(5,100)"),
success: Mock.mock("@boolean()"),
timestamp: Mock.mock("@datetime()"),
traceId: Mock.mock("@string(5,100)"),

}
}
export function AtListAndAckSequenceResp() {
return {
lastAckSequence: Mock.mock("@string(5,100)"),
"msgAtList": [MessageAtResp(),MessageAtResp(),MessageAtResp()],
unreadCount: Mock.mock("@integer(3,1000)"),

}
}
export function BasePageReq() {
return {
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function ComLoginReq() {
return {
blue: Mock.mock("@string(5,100)"),
certificate: Mock.mock("@string(5,100)"),
clientType: Mock.mock("@string(5,100)"),
clientVersion: Mock.mock("@string(5,100)"),
code: Mock.mock("@integer(200,200)"),
deviceCode: Mock.mock("@string(5,100)"),
deviceManufacturer: Mock.mock("@string(5,100)"),
deviceModel: Mock.mock("@string(5,100)"),
loginModeEnum: Mock.mock("@string(5,100)"),
openId: Mock.mock("@string(5,100)"),
uuid: Mock.mock("@string(5,100)"),

}
}
export function ComPageCommonSearchResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [CommonSearchResp(),CommonSearchResp(),CommonSearchResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageContactResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [ContactResp(),ContactResp(),ContactResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageFriendshipResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [FriendshipResp(),FriendshipResp(),FriendshipResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageSearchBeforeAddFriendResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [SearchBeforeAddFriendResp(),SearchBeforeAddFriendResp(),SearchBeforeAddFriendResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageKeyBorardBlackResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [KeyBorardBlackResp(),KeyBorardBlackResp(),KeyBorardBlackResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageWaiBuZhiXieChangChuCan() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [WaiBuZhiXieChangChuCan(),WaiBuZhiXieChangChuCan(),WaiBuZhiXieChangChuCan()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageWaiBuShuiDaoXiangYing() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [WaiBuShuiDaoXiangYing(),WaiBuShuiDaoXiangYing(),WaiBuShuiDaoXiangYing()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageXiaoXiNaBuXiangYingShiTi() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [XiaoXiNaBuXiangYingShiTi(),XiaoXiNaBuXiangYingShiTi(),XiaoXiNaBuXiangYingShiTi()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageXiaoXiDuiXiang() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [XiaoXiDuiXiang(),XiaoXiDuiXiang(),XiaoXiDuiXiang()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageNiaoWoDuiXiangBirdResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [NiaoWoDuiXiangBirdResp(),NiaoWoDuiXiangBirdResp(),NiaoWoDuiXiangBirdResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [NiaoWoChengYuanXinXiDuiXiangBirdMemberResp(),NiaoWoChengYuanXinXiDuiXiangBirdMemberResp(),NiaoWoChengYuanXinXiDuiXiangBirdMemberResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp(),DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp(),DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [YanChangChunHuaXiaoXiFenYeRequestPageListResp(),YanChangChunHuaXiaoXiFenYeRequestPageListResp(),YanChangChunHuaXiaoXiFenYeRequestPageListResp()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function CommonSearchReq() {
return {
imKeyBorardId: Mock.mock("@string(5,100)"),
isForward: Mock.mock("@boolean()"),
keywords: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
type: Mock.mock("@string(5,100)"),

}
}
export function CommonSearchResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
hiallType: Mock.mock("@string(5,100)"),
company: Mock.mock("@string(5,100)"),
createType: Mock.mock("@string(5,100)"),
birdAttr: Mock.mock("@string(5,100)"),
birdAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
birdType: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isFriendship: Mock.mock("@boolean()"),
isNotice: Mock.mock("@boolean()"),
isSameGrateful: Mock.mock("@boolean()"),
isTop: Mock.mock("@boolean()"),
job: Mock.mock("@string(5,100)"),
keywords: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
ownerId: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function ContactReq() {
return {
hiallEnum: Mock.mock("@string(5,100)"),
excludeMemberImBirdId: Mock.mock("@string(5,100)"),
birdTypeE: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
keywords: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function ContactResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
hiallAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
hiallStatus: Mock.mock("@string(5,100)"),
hiallType: Mock.mock("@string(5,100)"),
createType: Mock.mock("@string(5,100)"),
birdAttr: Mock.mock("@string(5,100)"),
birdType: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isFriendship: Mock.mock("@boolean()"),
isBirdMember: Mock.mock("@boolean()"),
isNotice: Mock.mock("@boolean()"),
isSameSubsidiary: Mock.mock("@boolean()"),
isSameGrateful: Mock.mock("@boolean()"),
isTop: Mock.mock("@boolean()"),
job: Mock.mock("@string(5,100)"),
keywords: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
privateImBirdId: Mock.mock("@string(5,100)"),
remark: Mock.mock("@string(5,100)"),
status: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
total: Mock.mock("@integer(11,52)"),
keyBorardStatus: Mock.mock("@string(5,100)"),

}
}
export function EnterBirdReq() {
return {
f2fBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function FileDTO() {
return {
fileName: Mock.mock("@string(5,100)"),
ossUrl: Mock.mock("@string(5,100)"),

}
}
export function FileResp() {
return {
fileId: Mock.mock("@string(5,100)"),
fileName: Mock.mock("@string(5,100)"),
fileSize: Mock.mock("@string(5,100)"),
fileText: Mock.mock("@string(5,100)"),
fileTime: Mock.mock("@datetime()"),
fileType: Mock.mock("@string(5,100)"),
fileUrl: Mock.mock("@string(5,100)"),
height: Mock.mock("@integer(3,1000)"),
width: Mock.mock("@integer(3,1000)"),

}
}
export function FooterDetailDTO() {
return {
content: Mock.mock("@string(5,100)"),
footerTypeE: Mock.mock("@string(5,100)"),
methodType: Mock.mock("@string(5,100)"),
param: Mock.mock("@string(5,100)"),
url: Mock.mock("@string(5,100)"),

}
}
export function FooterWrapper() {
return {
cardTypeE: Mock.mock("@string(5,100)"),
"details": [FooterDetailDTO(),FooterDetailDTO(),FooterDetailDTO()],

}
}
export function ForwardListReq() {
return {
channel: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
keyword: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
type: Mock.mock("@string(5,100)"),

}
}
export function ForwardListResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
hiallType: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isFriendship: Mock.mock("@boolean()"),
name: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function FriendshipDetailReq() {
return {
channel: Mock.mock("@string(5,100)"),
friendId: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isPhoneSearch: Mock.mock("@boolean()"),
needHiallMsg: Mock.mock("@boolean()"),

}
}
export function FriendshipDetailResp() {
return {
addFriend: Mock.mock("@boolean()"),
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
hiallType: Mock.mock("@string(5,100)"),
childCompany: Mock.mock("@string(5,100)"),
company: Mock.mock("@string(5,100)"),
whiteId: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
whitePath: Mock.mock("@string(5,100)"),
email: Mock.mock("@string(5,100)"),
enableInput: Mock.mock("@boolean()"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isAt: Mock.mock("@boolean()"),
isAttention: Mock.mock("@boolean()"),
isFriendship: Mock.mock("@boolean()"),
isMutual: Mock.mock("@boolean()"),
isNotice: Mock.mock("@boolean()"),
isPayAttention: Mock.mock("@boolean()"),
isSameSubsidiary: Mock.mock("@boolean()"),
isSameGrateful: Mock.mock("@boolean()"),
isSenderSystem: Mock.mock("@boolean()"),
isTop: Mock.mock("@boolean()"),
job: Mock.mock("@string(5,100)"),
lastAckSequence: Mock.mock("@string(5,100)"),
msgApplyType: Mock.mock("@string(5,100)"),
msgContent: Mock.mock("@string(5,100)"),
msgContentType: Mock.mock("@string(5,100)"),
msgFileUrl: Mock.mock("@string(5,100)"),
msgId: Mock.mock("@string(5,100)"),
msgSenderName: Mock.mock("@string(5,100)"),
msgSequence: Mock.mock("@string(5,100)"),
msgTime: Mock.mock("@datetime()"),
nickName: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
pinyin: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
sex: Mock.mock("@string(5,100)"),
status: Mock.mock("@string(5,100)"),
statusDesc: Mock.mock("@string(5,100)"),
title: Mock.mock("@string(5,100)"),
unreadCount: Mock.mock("@integer(3,1000)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function FriendshipResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
pinyin: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function FriendshipKeyBorardDetailResp() {
return {
enableSendMsg: Mock.mock("@boolean()"),
hasSameGrateful: Mock.mock("@boolean()"),
imBirdId: Mock.mock("@string(5,100)"),
isAttention: Mock.mock("@boolean()"),
isBlack: Mock.mock("@boolean()"),
isFrinedship: Mock.mock("@boolean()"),
isNotice: Mock.mock("@boolean()"),
isPrivate: Mock.mock("@boolean()"),
isRcvMsgAttr: Mock.mock("@boolean()"),
isShowPhone: Mock.mock("@boolean()"),
isShowPhoneAttr: Mock.mock("@boolean()"),
isTop: Mock.mock("@boolean()"),
privateImBirdId: Mock.mock("@string(5,100)"),
remark: Mock.mock("@string(5,100)"),
showRemark: Mock.mock("@boolean()"),

}
}
export function GetUnreadPageReq() {
return {
imKeyBorardId: Mock.mock("@string(5,100)"),
"requestIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],

}
}
export function BirdF2fKeyBorardListResp() {
return {
avatarUrl: Mock.mock("https://www.uviewui.com/common/logo.png"),
f2fBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function BirdFileUploadReq() {
return {
bizId: Mock.mock("@string(5,100)"),
bizSource: Mock.mock("@string(5,100)"),
bpSenderId: Mock.mock("@string(5,100)"),
"fileList": [FileDTO(),FileDTO(),FileDTO()],

}
}
export function BirdSetNoticeAndTopReq() {
return {
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isNotice: Mock.mock("@boolean()"),
isTop: Mock.mock("@boolean()"),
needHiallMsg: Mock.mock("@boolean()"),

}
}
export function BirdTransferReq() {
return {
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function InnerBirdDissolveReq() {
return {
bizId: Mock.mock("@string(5,100)"),
bizSource: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
ownerBpKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function InnerBirdMemberBirdListReq() {
return {
bpKeyBorardId: Mock.mock("@string(5,100)"),
keyword: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function InviteToBirdReq() {
return {
"applyIds": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
desc: Mock.mock("@string(5,100)"),
birdName: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
inviterId: Mock.mock("@string(5,100)"),

}
}
export function InviteToBirdRespYaoQingRuNiaoWoXiangYing() {
return {
"checkKeyBorardIds": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
"checkKeyBorards": [KeyBorardRespDuiXiang(),KeyBorardRespDuiXiang(),KeyBorardRespDuiXiang()],
birdResp: NiaoWoDuiXiangBirdResp(),
inviteMsg: Mock.mock("@string(5,100)"),

}
}
export function ListFriendshipQueryReq() {
return {
excludeMemberImBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isForward: Mock.mock("@boolean()"),
keyword: Mock.mock("@string(5,100)"),

}
}
export function MemberBirdStatusResp() {
return {
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
status: Mock.mock("@string(5,100)"),
statusDesc: Mock.mock("@string(5,100)"),

}
}
export function MessageAtResp() {
return {
messageId: Mock.mock("@string(5,100)"),
senderId: Mock.mock("@string(5,100)"),
sequence: Mock.mock("@string(5,100)"),

}
}
export function MessagePositionReqq() {
return {
imBirdId: Mock.mock("@string(5,100)"),
isAt: Mock.mock("@boolean()"),
limit: Mock.mock("@integer(3,1000)"),
startSequence: Mock.mock("@string(5,100)"),

}
}
export function MessageProcessReq() {
return {
footer: FooterDetailDTO(),
msgId: Mock.mock("@string(5,100)"),

}
}
export function MsgSearchReq() {
return {
friendId: Mock.mock("@string(5,100)"),
birdId: Mock.mock("@string(5,100)"),
keywords: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
type: Mock.mock("@string(5,100)"),
keyBorardId: Mock.mock("@string(5,100)"),

}
}
export function PhoneFriendshipResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isFriend: Mock.mock("@boolean()"),
phone: Mock.mock("@string(5,100)"),
pinyin: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function PhoneListReq() {
return {
imKeyBorardId: Mock.mock("@string(5,100)"),
"phoneList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],

}
}
export function PutFileResp() {
return {
happyId: Mock.mock("@string(5,100)"),
fileId: Mock.mock("@string(5,100)"),
originalFileName: Mock.mock("@string(5,100)"),
signUrl: Mock.mock("@string(5,100)"),
url: Mock.mock("@string(5,100)"),

}
}
export function QueryLastMessageResp() {
return {
appType: Mock.mock("@integer(3,1000)"),
isForceUpdate: Mock.mock("@datetime()"),
versionDesc: Mock.mock("@string(5,100)"),
versionName: Mock.mock("@string(5,100)"),
versionUrl: Mock.mock("@string(5,100)"),

}
}
export function RemoteAutoBirdReq() {
return {
cityId: Mock.mock("@string(5,100)"),
endTime: Mock.mock("@datetime()"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
startTime: Mock.mock("@datetime()"),

}
}
export function RequestMsgReqDuiXiang() {
return {
content: Mock.mock("@string(5,100)"),
receiverId: Mock.mock("@string(5,100)"),
requestId: Mock.mock("@string(5,100)"),
senderId: Mock.mock("@string(5,100)"),

}
}
export function SaveRandomReq() {
return {
imKeyBorardId: Mock.mock("@string(5,100)"),
latitude: Mock.mock("@string(5,100)"),
longitude: Mock.mock("@string(5,100)"),
random: Mock.mock("@string(5,100)"),

}
}
export function SearchBeforeAddFriendReq() {
return {
excludeMemberImBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isShowFullName: Mock.mock("@boolean()"),
isShowGratefulName: Mock.mock("@boolean()"),
keyword: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function SearchBeforeAddFriendResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
channel: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isFriend: Mock.mock("@boolean()"),
isBirdMember: Mock.mock("@boolean()"),
permitChannel: Mock.mock("@boolean()"),
phone: Mock.mock("@string(5,100)"),
pinyin: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function SearchMapResp() {
return {
hasMore: Mock.mock("@boolean()"),
"keyBorardList": [SearchResp(),SearchResp(),SearchResp()],

}
}
export function SearchReq() {
return {
imKeyBorardId: Mock.mock("@string(5,100)"),
isForward: Mock.mock("@boolean()"),
keywords: Mock.mock("@string(5,100)"),

}
}
export function SearchResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
hiallType: Mock.mock("@string(5,100)"),
company: Mock.mock("@string(5,100)"),
createType: Mock.mock("@string(5,100)"),
birdAttr: Mock.mock("@string(5,100)"),
birdType: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
job: Mock.mock("@string(5,100)"),
keywords: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
ownerId: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function SetRcvMsgReq() {
return {
imFriendId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isRcvMsg: Mock.mock("@boolean()"),

}
}
export function SetShowPhoneReq() {
return {
imFriendId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isShowPhone: Mock.mock("@boolean()"),

}
}
export function SwitchKeyBorardListResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
imKeyBorardId: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
satoken: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function SwitchKeyBorardReq() {
return {
deviceId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function GratefulInfoRespLvKeXinXi() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
channel: Mock.mock("@string(5,100)"),
checked: Mock.mock("@boolean()"),
kind: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function UnReadComPageXiaoDaoXiaoXiYongDaoXiangYing() {
return {
current: Mock.mock("@integer(1,1)"),
"records": [XiaoDaoXiaoXiYongDaoXiangYing(),XiaoDaoXiaoXiYongDaoXiangYing(),XiaoDaoXiaoXiYongDaoXiangYing()],
size: Mock.mock("@integer(20,50)"),
total: Mock.mock("@integer(11,52)"),
unreadSum: Mock.mock("@integer(3,1000)"),

}
}
export function UnreadResp() {
return {
isRead: Mock.mock("@boolean()"),
requestId: Mock.mock("@string(5,100)"),

}
}
export function UploadFileReq() {
return {
happyId: Mock.mock("@string(5,100)"),
fileTime: Mock.mock("@datetime()"),
height: Mock.mock("@integer(3,1000)"),
isVoice: Mock.mock("@boolean()"),
originalFileName: Mock.mock("@string(5,100)"),
realFileSize: Mock.mock("@string(5,100)"),
type: Mock.mock("@string(5,100)"),
width: Mock.mock("@integer(3,1000)"),

}
}
export function KeyBorardBindReq() {
return {
channel: Mock.mock("@string(5,100)"),
deviceId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function KeyBorardBindResp() {
}
export function KeyBorardBlackResp() {
return {
avatarUrl: Mock.mock("https://www.uviewui.com/common/logo.png"),
id: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function KeyBorardCancelReq() {
return {
imKeyBorardId: Mock.mock("@string(5,100)"),
smsCode: Mock.mock("@string(5,100)"),

}
}
export function KeyBorardInformSaveReq() {
return {
content: Mock.mock("@string(5,100)"),
peerId: Mock.mock("@string(5,100)"),
type: Mock.mock("@string(5,100)"),

}
}
export function KeyBorardListAllGratefulResp() {
return {
hasMore: Mock.mock("@boolean()"),
gratefulId: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
"keyBorardList": [DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp(),DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp(),DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp()],

}
}
export function KeyBorardRespDuiXiang() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
whiteId: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
email: Mock.mock("@string(5,100)"),
birdMemberRemark: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isApprove: Mock.mock("@boolean()"),
isBirdApprove: Mock.mock("@boolean()"),
isNamePhoneSearch: Mock.mock("@boolean()"),
isNoticed: Mock.mock("@boolean()"),
isRcvStrangerMsg: Mock.mock("@boolean()"),
job: Mock.mock("@string(5,100)"),
nickName: Mock.mock("@string(5,100)"),
parentWhitePath: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
pinyin: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
requestChannel: Mock.mock("@string(5,100)"),
sex: Mock.mock("@string(5,100)"),
status: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function WaterFallPageKeyBorardBlackResp() {
return {
"list": [KeyBorardBlackResp(),KeyBorardBlackResp(),KeyBorardBlackResp()],
nextOffset: Mock.mock("@string(5,100)"),
requestTime: Mock.mock("@datetime()"),

}
}
export function aliyunSTSJianQuanFanHuiZhi() {
return {
accessKeyIdSts: Mock.mock("@string(5,100)"),
secretKeyIdSts: Mock.mock("@string(5,100)"),
securityToken: Mock.mock("@string(5,100)"),

}
}
export function mockJiaRenRuNiaoWoRuCan() {
return {
bizId: Mock.mock("@string(5,100)"),
bizSourceE: Mock.mock("@string(5,100)"),
cityId: Mock.mock("@string(5,100)"),
"imKeyBorardIds": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
schoolName: Mock.mock("@string(5,100)"),

}
}
export function ShangChuanALiYunQianMingXiangYing() {
return {
accessKey: Mock.mock("@string(5,100)"),
bucketName: Mock.mock("@string(5,100)"),
dir: Mock.mock("@string(5,100)"),
endpoint: Mock.mock("@string(5,100)"),
sign: Mock.mock("@string(5,100)"),

}
}
export function MaiShaoBingXiaoXiTuiSongimXiaoXi() {
return {
atBpKeyBorardIds: Mock.mock("@string(5,100)"),
"bizIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
bizSource: Mock.mock("@string(5,100)"),
bpSenderId: Mock.mock("@string(5,100)"),
content: Mock.mock("@string(5,100)"),
contentType: Mock.mock("@string(5,100)"),
footer: FooterWrapper(),
"imBirdIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
"receiverBpKeyBorardIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
title: Mock.mock("@string(5,100)"),
type: Mock.mock("@string(5,100)"),

}
}
export function ErWeiMa() {
return {
id: Mock.mock("@string(5,100)"),
type: Mock.mock("@string(5,100)"),

}
}
export function XiaoDaoXiaoXi() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
channel: Mock.mock("@string(5,100)"),
hiallName: Mock.mock("@string(5,100)"),
hiallType: Mock.mock("@string(5,100)"),
birdAttr: Mock.mock("@string(5,100)"),
"birdIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
birdStatus: Mock.mock("@boolean()"),
birdType: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isAllSilence: Mock.mock("@boolean()"),
isAtAll: Mock.mock("@boolean()"),
isFriendship: Mock.mock("@boolean()"),
isModifyName: Mock.mock("@boolean()"),
isNotice: Mock.mock("@boolean()"),
isOrdinaryInvent: Mock.mock("@boolean()"),
isPrivate: Mock.mock("@boolean()"),
isShow: Mock.mock("@boolean()"),
isTop: Mock.mock("@boolean()"),
job: Mock.mock("@string(5,100)"),
modified: Mock.mock("@string(5,100)"),
nickName: Mock.mock("@string(5,100)"),
post: Mock.mock("@string(5,100)"),
privateImBirdId: Mock.mock("@string(5,100)"),
receiver: Mock.mock("@string(5,100)"),
total: Mock.mock("@integer(11,52)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function XiaoDaoXiaoXiYongDao() {
return {
channel: Mock.mock("@string(5,100)"),
"birdIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
imKeyBorardId: Mock.mock("@string(5,100)"),
limit: Mock.mock("@integer(3,1000)"),
selectSum: Mock.mock("@boolean()"),
skipCount: Mock.mock("@integer(3,1000)"),

}
}
export function XiaoDaoXiaoXiYongDaoXiangYing() {
return {
bizSource: Mock.mock("@string(5,100)"),
channel: Mock.mock("@string(5,100)"),
hiallAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
hiallCompany: Mock.mock("@string(5,100)"),
hiallJob: Mock.mock("@string(5,100)"),
hiallName: Mock.mock("@string(5,100)"),
hiallPost: Mock.mock("@string(5,100)"),
hiallRemark: Mock.mock("@string(5,100)"),
hiallType: Mock.mock("@string(5,100)"),
birdAttr: Mock.mock("@string(5,100)"),
birdId: Mock.mock("@string(5,100)"),
birdType: Mock.mock("@string(5,100)"),
isAt: Mock.mock("@boolean()"),
isAttention: Mock.mock("@boolean()"),
isFriendship: Mock.mock("@boolean()"),
isNotice: Mock.mock("@boolean()"),
isSameSubsidiary: Mock.mock("@boolean()"),
isSameGrateful: Mock.mock("@boolean()"),
isSenderSystem: Mock.mock("@boolean()"),
isTop: Mock.mock("@boolean()"),
lastAckSequence: Mock.mock("@string(5,100)"),
modified: Mock.mock("@string(5,100)"),
msgApplyType: Mock.mock("@string(5,100)"),
msgContent: Mock.mock("@string(5,100)"),
msgContentType: Mock.mock("@string(5,100)"),
msgFileUrl: Mock.mock("@string(5,100)"),
msgId: Mock.mock("@string(5,100)"),
msgSenderName: Mock.mock("@string(5,100)"),
msgSequence: Mock.mock("@string(5,100)"),
msgTime: Mock.mock("@datetime()"),
privateBirdId: Mock.mock("@string(5,100)"),
total: Mock.mock("@integer(11,52)"),
unreadCount: Mock.mock("@integer(3,1000)"),
unreadSum: Mock.mock("@integer(3,1000)"),
keyBorardid: Mock.mock("@string(5,100)"),

}
}
export function XiuGaiBeiZhuModifyRemarkBirdReq() {
return {
birdRemark: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function XiuGaiBeiZhuModifyfriendRemarkReq() {
return {
friendRemark: Mock.mock("@string(5,100)"),
imFriendId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function XiuGaiTongQianCaoTouXiang() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),

}
}
export function XiuGaiNiaoWoTaiYangHuaRuCanModifyBirdNameReq() {
return {
birdName: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function RuNiaoWoQingQiuAddBirdReq() {
return {
applyId: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
inviterId: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function NaBuMaiShaoBingNiaoWoBaoCunChuCan() {
return {
"errorKeyBorardIds": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
birdId: Mock.mock("@string(5,100)"),
ownerBpKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function NaBuXiaoXiSouSuoQingQiu() {
return {
bpKeyBorardId: Mock.mock("@string(5,100)"),
birdId: Mock.mock("@string(5,100)"),
keywords: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
type: Mock.mock("@string(5,100)"),

}
}
export function NaBuNiaoWoBaoCunRuCan() {
return {
avatarUrl: Mock.mock("https://www.uviewui.com/common/logo.png"),
bizId: Mock.mock("@string(5,100)"),
bizSource: Mock.mock("@string(5,100)"),
desc: Mock.mock("@string(5,100)"),
"memberBpKeyBorardIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
name: Mock.mock("@string(5,100)"),
ownerBpKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function NaBuNiaoWoBaoCunNiaoWoChengYuanRuCan() {
return {
bizId: Mock.mock("@string(5,100)"),
bizSource: Mock.mock("@string(5,100)"),
"memberBpKeyBorardIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
ownerBpKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function ChuangJianXiaoDaoXiaoXi() {
return {
channel: Mock.mock("@string(5,100)"),
checkCache: Mock.mock("@boolean()"),
"birdIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
privateBirdId: Mock.mock("@string(5,100)"),
"receiverIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
updateBirdHiall: Mock.mock("@datetime()"),

}
}
export function LiShiXiaoXiMessageHistoryReq() {
return {
imBirdId: Mock.mock("@string(5,100)"),
orderType: Mock.mock("@integer(3,1000)"),
page: Mock.mock("@integer(3,1000)"),
sequence: Mock.mock("@string(5,100)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function WaiBuZhiXieChangChuCan() {
return {
area: Mock.mock("@string(5,100)"),
authStatus: Mock.mock("@string(5,100)"),
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
chiefly: Mock.mock("@boolean()"),
city: Mock.mock("@string(5,100)"),
contactNumber: Mock.mock("@string(5,100)"),
country: Mock.mock("@string(5,100)"),
whiteId: Mock.mock("@string(5,100)"),
empNum: Mock.mock("@integer(3,1000)"),
doorRealGreen: Mock.mock("@string(5,100)"),
firmSize: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
industryInvolved: Mock.mock("@string(5,100)"),
introduction: Mock.mock("@string(5,100)"),
legalIdCardNo: Mock.mock("@string(5,100)"),
legalCat: Mock.mock("@string(5,100)"),
licenseUnifiedCode: Mock.mock("@string(5,100)"),
licenseUnifiedUrl: Mock.mock("@string(5,100)"),
location: Mock.mock("@string(5,100)"),
mark: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
province: Mock.mock("@string(5,100)"),
serialNum: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
xmail: Mock.mock("@string(5,100)"),

}
}
export function WaiBuZhiXieChangSouSuoRuCan() {
return {
doorName: Mock.mock("@string(5,100)"),
flag: Mock.mock("@boolean()"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function WaiBuShuiDaoXiangYing() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
bpKeyBorardId: Mock.mock("@string(5,100)"),
channel: Mock.mock("@string(5,100)"),
desktopNickName: Mock.mock("@string(5,100)"),
desktopKeyBorardName: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isFriend: Mock.mock("@boolean()"),
isBirdMember: Mock.mock("@boolean()"),
isNormal: Mock.mock("@boolean()"),
permitChannel: Mock.mock("@boolean()"),
phone: Mock.mock("@string(5,100)"),
pinyin: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function WaiBuShuiDaoSouSuoRuCan() {
return {
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
gratefulId: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function HaoYouFriendshipReq() {
return {
imFriendId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isNotice: Mock.mock("@boolean()"),
isTop: Mock.mock("@boolean()"),

}
}
export function HaoYouYongDaoChuXingFriendshipQueryReq() {
return {
excludeMemberImBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isForward: Mock.mock("@boolean()"),
keyword: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function WenJianPiLiangBaoCunXiangYingShiTi() {
return {
"resps": [FileResp(),FileResp(),FileResp()],

}
}
export function XiaoXiack() {
return {
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function XiaoXiNaBuXiangYingShiTi() {
return {
applyType: Mock.mock("@string(5,100)"),
atKeyBorardIds: Mock.mock("@string(5,100)"),
atKeyBorardNames: Mock.mock("@string(5,100)"),
bpKeyBorardId: Mock.mock("@string(5,100)"),
"cardMessageList": [ZhuanFaXiaoXiDuiXiang(),ZhuanFaXiaoXiDuiXiang(),ZhuanFaXiaoXiDuiXiang()],
channelFile: FileResp(),
content: Mock.mock("@string(5,100)"),
contentType: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
fileId: Mock.mock("@string(5,100)"),
fileName: Mock.mock("@string(5,100)"),
fileSize: Mock.mock("@string(5,100)"),
fileText: Mock.mock("@string(5,100)"),
fileTime: Mock.mock("@datetime()"),
fileType: Mock.mock("@string(5,100)"),
fileUrl: Mock.mock("@string(5,100)"),
footer: FooterWrapper(),
birdId: Mock.mock("@string(5,100)"),
height: Mock.mock("@integer(3,1000)"),
id: Mock.mock("@string(5,100)"),
isAlarm: Mock.mock("@boolean()"),
isSystem: Mock.mock("@boolean()"),
nickName: Mock.mock("@string(5,100)"),
senderAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
senderId: Mock.mock("@string(5,100)"),
senderName: Mock.mock("@string(5,100)"),
sequence: Mock.mock("@string(5,100)"),
title: Mock.mock("@string(5,100)"),
width: Mock.mock("@integer(3,1000)"),

}
}
export function XiaoXiSaoXue() {
return {
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
"messageIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],

}
}
export function XiaoXiDuiXiang() {
return {
applyType: Mock.mock("@string(5,100)"),
atKeyBorardIds: Mock.mock("@string(5,100)"),
atKeyBorardNames: Mock.mock("@string(5,100)"),
"cardMessageList": [ZhuanFaXiaoXiDuiXiang(),ZhuanFaXiaoXiDuiXiang(),ZhuanFaXiaoXiDuiXiang()],
channelFile: FileResp(),
content: Mock.mock("@string(5,100)"),
contentType: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
fileId: Mock.mock("@string(5,100)"),
fileName: Mock.mock("@string(5,100)"),
fileSize: Mock.mock("@string(5,100)"),
fileText: Mock.mock("@string(5,100)"),
fileTime: Mock.mock("@datetime()"),
fileType: Mock.mock("@string(5,100)"),
fileUrl: Mock.mock("@string(5,100)"),
footer: FooterWrapper(),
birdId: Mock.mock("@string(5,100)"),
height: Mock.mock("@integer(3,1000)"),
id: Mock.mock("@string(5,100)"),
isAlarm: Mock.mock("@boolean()"),
isSystem: Mock.mock("@boolean()"),
nickName: Mock.mock("@string(5,100)"),
senderAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
senderId: Mock.mock("@string(5,100)"),
senderName: Mock.mock("@string(5,100)"),
sequence: Mock.mock("@string(5,100)"),
title: Mock.mock("@string(5,100)"),
width: Mock.mock("@integer(3,1000)"),

}
}
export function XiaoXiGunDongQingQiuTi() {
return {
chooseCurrentMessage: Mock.mock("@boolean()"),
downSize: Mock.mock("@integer(3,1000)"),
birdId: Mock.mock("@string(5,100)"),
messageId: Mock.mock("@string(5,100)"),
type: Mock.mock("@string(5,100)"),
upSize: Mock.mock("@integer(3,1000)"),

}
}
export function XiaoXiXiangQingMessageDetailReq() {
return {
messageId: Mock.mock("@string(5,100)"),

}
}
export function TianJiaHaoYouAddFriendReq() {
return {
channel: Mock.mock("@string(5,100)"),
content: Mock.mock("@string(5,100)"),
friendRemark: Mock.mock("@string(5,100)"),
imFriendId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isTop: Mock.mock("@boolean()"),
phone: Mock.mock("@string(5,100)"),

}
}
export function TianJiaWoWeiHaoYouCongMingFangShi() {
return {
imKeyBorardId: Mock.mock("@string(5,100)"),
"requestChannels": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],

}
}
export function QingKongXiaoXiRuCan() {
return {
imFriendId: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function QingKongXiaoXiJiLu() {
return {
channel: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function BanBen() {
return {
appType: Mock.mock("@string(5,100)"),
fileSize: Mock.mock("@string(5,100)"),
isForceUpdate: Mock.mock("@datetime()"),
versionDesc: Mock.mock("@string(5,100)"),
versionName: Mock.mock("@string(5,100)"),
versionNum: Mock.mock("@string(5,100)"),
versionUrl: Mock.mock("@string(5,100)"),

}
}
export function BanBen0() {
return {
appType: Mock.mock("@string(5,100)"),
fileSize: Mock.mock("@string(5,100)"),
isForceUpdate: Mock.mock("@datetime()"),
versionDesc: Mock.mock("@string(5,100)"),
versionName: Mock.mock("@string(5,100)"),
versionNum: Mock.mock("@string(5,100)"),
versionUrl: Mock.mock("@string(5,100)"),

}
}
export function ShengChengWenJianfileId() {
return {
bucketName: Mock.mock("@string(5,100)"),
dir: Mock.mock("@string(5,100)"),
fileSize: Mock.mock("@string(5,100)"),
fileTime: Mock.mock("@datetime()"),
height: Mock.mock("@integer(3,1000)"),
originalFileName: Mock.mock("@string(5,100)"),
ossFileName: Mock.mock("@string(5,100)"),
type: Mock.mock("@string(5,100)"),
width: Mock.mock("@integer(3,1000)"),

}
}
export function TongQianCaoSuoYouLvKeKeyBorardListAllGratefulReq() {
return {
excludeMemberImBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isForward: Mock.mock("@boolean()"),
keyword: Mock.mock("@string(5,100)"),

}
}
export function DengLuXiangYingShiTi() {
return {
channel: Mock.mock("@string(5,100)"),
code: Mock.mock("@integer(200,200)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
newKeyBorard: Mock.mock("@boolean()"),
openId: Mock.mock("@string(5,100)"),
satoken: Mock.mock("@string(5,100)"),
setPassWord: Mock.mock("@boolean()"),
token: Mock.mock("@string(5,100)"),
tokenTimeOut: Mock.mock("@datetime()"),
keyBorardId: Mock.mock("@string(5,100)"),

}
}
export function LvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
avatarId: Mock.mock("https://www.uviewui.com/common/logo.png"),
bpKeyBorardId: Mock.mock("@string(5,100)"),
email: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
nickName: Mock.mock("@string(5,100)"),
phone: Mock.mock("@string(5,100)"),
"relationE": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
sex: Mock.mock("@string(5,100)"),
status: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function QianMingWenJianShangChuanQingQiuRuCanShiTi() {
return {
"reqs": [ShengChengWenJianfileId(),ShengChengWenJianfileId(),ShengChengWenJianfileId()],

}
}
export function QianMingWenJianXiangYing() {
return {
accessId: Mock.mock("@string(5,100)"),
bucketName: Mock.mock("@string(5,100)"),
callback: Mock.mock("@string(5,100)"),
dir: Mock.mock("@string(5,100)"),
endpoint: Mock.mock("@string(5,100)"),
expire: Mock.mock("@string(5,100)"),
host: Mock.mock("@string(5,100)"),
policy: Mock.mock("@string(5,100)"),
signature: Mock.mock("@string(5,100)"),

}
}
export function NiaoWoBaoCunRuCan() {
return {
desc: Mock.mock("@string(5,100)"),
"memberIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
name: Mock.mock("@string(5,100)"),
ownerId: Mock.mock("@string(5,100)"),

}
}
export function NiaoWoXinXiBirdDetailReq() {
return {
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
needHiallMsg: Mock.mock("@boolean()"),

}
}
export function NiaoWoFenYeBirdPageListReq() {
return {
birdAttrE: Mock.mock("@string(5,100)"),
birdTypeE: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
keyword: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),

}
}
export function NiaoWoDuiXiangBirdDetailResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
createType: Mock.mock("@string(5,100)"),
whiteId: Mock.mock("@string(5,100)"),
whitePath: Mock.mock("@string(5,100)"),
desc: Mock.mock("@string(5,100)"),
birdAttr: Mock.mock("@string(5,100)"),
birdBelong: Mock.mock("@string(5,100)"),
birdType: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
isAdminConfirm: Mock.mock("@boolean()"),
isAllSilence: Mock.mock("@boolean()"),
isAt: Mock.mock("@boolean()"),
isAtAll: Mock.mock("@boolean()"),
isAttention: Mock.mock("@boolean()"),
isModifyName: Mock.mock("@boolean()"),
isNotice: Mock.mock("@boolean()"),
isOrdinaryInvent: Mock.mock("@boolean()"),
isPrivate: Mock.mock("@boolean()"),
isTop: Mock.mock("@boolean()"),
lastAckSequence: Mock.mock("@string(5,100)"),
msgApplyType: Mock.mock("@string(5,100)"),
msgContent: Mock.mock("@string(5,100)"),
msgContentType: Mock.mock("@string(5,100)"),
msgFileUrl: Mock.mock("@string(5,100)"),
msgId: Mock.mock("@string(5,100)"),
msgSenderName: Mock.mock("@string(5,100)"),
msgSequence: Mock.mock("@string(5,100)"),
msgTime: Mock.mock("@datetime()"),
name: Mock.mock("@string(5,100)"),
notice: Mock.mock("@string(5,100)"),
ownerId: Mock.mock("@string(5,100)"),
status: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
total: Mock.mock("@integer(11,52)"),
unreadCount: Mock.mock("@integer(3,1000)"),

}
}
export function NiaoWoDuiXiangBirdResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
bizId: Mock.mock("@string(5,100)"),
bizSource: Mock.mock("@string(5,100)"),
hiallType: Mock.mock("@string(5,100)"),
createType: Mock.mock("@string(5,100)"),
birdAttr: Mock.mock("@string(5,100)"),
birdType: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),
name: Mock.mock("@string(5,100)"),
ownerId: Mock.mock("@string(5,100)"),
total: Mock.mock("@integer(11,52)"),

}
}
export function NiaoWoChengYuanXinXiDuiXiangBirdMemberResp() {
return {
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isFriendship: Mock.mock("@boolean()"),
isNotice: Mock.mock("@boolean()"),
isTop: Mock.mock("@boolean()"),
memberAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
memberAvatarId: Mock.mock("https://www.uviewui.com/common/logo.png"),
memberName: Mock.mock("@string(5,100)"),
memberPhone: Mock.mock("@string(5,100)"),
memberRemark: Mock.mock("@string(5,100)"),
memberGratefulName: Mock.mock("@string(5,100)"),
memberType: Mock.mock("@string(5,100)"),

}
}
export function NiaoWoChengYuanFenYeBirdMemberPageReq() {
return {
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isDeleteMember: Mock.mock("@boolean()"),
isFilterCurrentKeyBorard: Mock.mock("@boolean()"),
keyword: Mock.mock("@string(5,100)"),
memberType: Mock.mock("@string(5,100)"),
needFriendRelation: Mock.mock("@boolean()"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
sortE: Mock.mock("@string(5,100)"),

}
}
export function NiaoWoChengYuanYongDaoChuXingRuCan() {
return {
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isDeleteMember: Mock.mock("@boolean()"),
keyword: Mock.mock("@string(5,100)"),
memberType: Mock.mock("@string(5,100)"),
sortE: Mock.mock("@string(5,100)"),

}
}
export function NiaoWoChengYuanSaoXueBirdMemberDelReq() {
return {
imBirdId: Mock.mock("@string(5,100)"),
"imMemberIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
imKeyBorardId: Mock.mock("@string(5,100)"),

}
}
export function NiaoWoChengYuanJiaShiBirdMemberSaveReq() {
return {
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
"imKeyBorardIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],

}
}
export function NiaoWoWenJianShangChuanXiangYingShiTi() {
return {
"files": [FileDTO(),FileDTO(),FileDTO()],
imBirdId: Mock.mock("@string(5,100)"),

}
}
export function NiaoWoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq() {
return {
imBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isAdminConfirm: Mock.mock("@boolean()"),
isAllSilence: Mock.mock("@boolean()"),
isAtAll: Mock.mock("@boolean()"),
isModifyName: Mock.mock("@boolean()"),
isOrdinaryInvent: Mock.mock("@boolean()"),
isPrivate: Mock.mock("@boolean()"),

}
}
export function HuoQubucket() {
return {
fileTypeE: Mock.mock("@string(5,100)"),
sceneE: Mock.mock("@string(5,100)"),

}
}
export function HuoQuLvKeTongQianCaoDuiYingimTongQianCaoXinXiRuCan() {
return {
"bpKeyBorardIds": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],
channel: Mock.mock("@string(5,100)"),
currentBpKeyBorardId: Mock.mock("@string(5,100)"),
needRelation: Mock.mock("@boolean()"),
needGrateful: Mock.mock("@boolean()"),

}
}
export function HuoQuALiYunQianMingRuCan() {
return {
fileTypeE: Mock.mock("@string(5,100)"),
signContent: Mock.mock("@string(5,100)"),

}
}
export function SheZhiMoRenZhiXieChang() {
return {
kind: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),

}
}
export function YuYinShiBieFanHui() {
return {
content: Mock.mock("@string(5,100)"),
fileId: Mock.mock("@string(5,100)"),
fileResp: FileResp(),
messageId: Mock.mock("@string(5,100)"),

}
}
export function QingQiuHuiFuXiaoXiYongDaoReqMsgDetailResp() {
return {
content: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
isRead: Mock.mock("@boolean()"),
receiverId: Mock.mock("@string(5,100)"),
receiverName: Mock.mock("@string(5,100)"),
requestId: Mock.mock("@string(5,100)"),
requestMsgId: Mock.mock("@string(5,100)"),
senderId: Mock.mock("@string(5,100)"),
senderName: Mock.mock("@string(5,100)"),

}
}
export function QingQiuXiaoXiYongDaoRequestPageListReq() {
return {
imKeyBorardId: Mock.mock("@string(5,100)"),
keyword: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
type: Mock.mock("@integer(3,1000)"),

}
}
export function QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq() {
return {
imKeyBorardId: Mock.mock("@string(5,100)"),
requestId: Mock.mock("@string(5,100)"),
"requestMsgIdList": [Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)"),Mock.mock("@string(5,100)")],

}
}
export function ZhuanFaXiaoXiDuiXiang() {
return {
applyType: Mock.mock("@string(5,100)"),
channelFile: FileResp(),
content: Mock.mock("@string(5,100)"),
contentType: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
fileId: Mock.mock("@string(5,100)"),
fileName: Mock.mock("@string(5,100)"),
fileSize: Mock.mock("@string(5,100)"),
fileText: Mock.mock("@string(5,100)"),
fileTime: Mock.mock("@datetime()"),
fileType: Mock.mock("@string(5,100)"),
fileUrl: Mock.mock("@string(5,100)"),
forwardMessageFooter: FooterWrapper(),
forwardMessageIsAlarm: Mock.mock("@boolean()"),
forwardMessageTitle: Mock.mock("@string(5,100)"),
birdId: Mock.mock("@string(5,100)"),
id: Mock.mock("@string(5,100)"),
senderAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
senderId: Mock.mock("@string(5,100)"),
senderName: Mock.mock("@string(5,100)"),
sequence: Mock.mock("@string(5,100)"),

}
}
export function TongGuoJuJueApproveReq() {
return {
imKeyBorardId: Mock.mock("@string(5,100)"),
isNotice: Mock.mock("@boolean()"),
permitted: Mock.mock("@boolean()"),
remark: Mock.mock("@string(5,100)"),
requestId: Mock.mock("@string(5,100)"),

}
}
export function DaDuNanXinXiWhiteResp() {
return {
whiteId: Mock.mock("@string(5,100)"),
whiteName: Mock.mock("@string(5,100)"),
imBirdId: Mock.mock("@string(5,100)"),

}
}
export function DaDuNanYongDaoWhiteListReq() {
return {
getImBirdId: Mock.mock("@boolean()"),
parentId: Mock.mock("@string(5,100)"),
gratefulId: Mock.mock("@string(5,100)"),

}
}
export function DaDuNanTongQianCaoFenYeKeyBorardPageReq() {
return {
whiteId: Mock.mock("@string(5,100)"),
excludeMemberImBirdId: Mock.mock("@string(5,100)"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isForward: Mock.mock("@boolean()"),
keyword: Mock.mock("@string(5,100)"),
page: Mock.mock("@integer(3,1000)"),
size: Mock.mock("@integer(20,50)"),
gratefulId: Mock.mock("@string(5,100)"),

}
}
export function DaDuNanTongQianCaoYongDaoWhiteListReq() {
return {
getImBirdId: Mock.mock("@boolean()"),
gratefulId: Mock.mock("@string(5,100)"),

}
}
export function DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp() {
return {
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
avatarId: Mock.mock("https://www.uviewui.com/common/logo.png"),
imKeyBorardId: Mock.mock("@string(5,100)"),
isForward: Mock.mock("@boolean()"),
isBirdMember: Mock.mock("@boolean()"),
gratefulId: Mock.mock("@string(5,100)"),
gratefulName: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function YanChangChunHuaXiaoXiFenYeRequestPageListResp() {
return {
applyAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
applyAvatarUrl: Mock.mock("https://www.uviewui.com/common/logo.png"),
applyId: Mock.mock("@string(5,100)"),
applyName: Mock.mock("@string(5,100)"),
avatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
content: Mock.mock("@string(5,100)"),
inviterAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
inviterAvatarUrl: Mock.mock("https://www.uviewui.com/common/logo.png"),
inviterId: Mock.mock("@string(5,100)"),
inviterName: Mock.mock("@string(5,100)"),
receiverAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
receiverAvatarUrl: Mock.mock("https://www.uviewui.com/common/logo.png"),
receiverId: Mock.mock("@string(5,100)"),
receiverName: Mock.mock("@string(5,100)"),
requestId: Mock.mock("@string(5,100)"),
status: Mock.mock("@integer(3,1000)"),
gratefulName: Mock.mock("@string(5,100)"),
type: Mock.mock("@integer(3,1000)"),
keyBorardAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
keyBorardAvatarUrl: Mock.mock("https://www.uviewui.com/common/logo.png"),
keyBorardId: Mock.mock("@string(5,100)"),
keyBorardName: Mock.mock("@string(5,100)"),

}
}
export function YanChangChunHuaXiaoXiXiangQingRequestDetailResp() {
return {
applyAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
applyId: Mock.mock("@string(5,100)"),
applyName: Mock.mock("@string(5,100)"),
applyGratefulName: Mock.mock("@string(5,100)"),
channel: Mock.mock("@string(5,100)"),
content: Mock.mock("@string(5,100)"),
created: Mock.mock("@string(5,100)"),
inviterAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
inviterId: Mock.mock("@string(5,100)"),
inviterName: Mock.mock("@string(5,100)"),
inviterGratefulName: Mock.mock("@string(5,100)"),
isFriendshipOrHasSameGrateful: Mock.mock("@boolean()"),
"msgList": [QingQiuHuiFuXiaoXiYongDaoReqMsgDetailResp(),QingQiuHuiFuXiaoXiYongDaoReqMsgDetailResp(),QingQiuHuiFuXiaoXiYongDaoReqMsgDetailResp()],
receiverAvatar: Mock.mock("https://www.uviewui.com/common/logo.png"),
receiverId: Mock.mock("@string(5,100)"),
receiverName: Mock.mock("@string(5,100)"),
receiverGratefulName: Mock.mock("@string(5,100)"),
remark: Mock.mock("@string(5,100)"),
requestId: Mock.mock("@string(5,100)"),
status: Mock.mock("@integer(3,1000)"),
total: Mock.mock("@integer(11,52)"),
type: Mock.mock("@integer(3,1000)"),

}
}
