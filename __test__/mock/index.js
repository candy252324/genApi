import Mock from 'better-mock'

Mock.setup({
  timeout: '200-500',
})

import * as station0blue from './station0/blue.js'
import * as station0active from './station0/active.js'
import * as station0audit from './station0/audit.js'
import * as station0auth from './station0/auth.js'
import * as station0channel from './station0/channel.js'
import * as station0client from './station0/client.js'
import * as station0corpWehiall from './station0/corpWehiall.js'
import * as station0dataSync from './station0/dataSync.js'
import * as station0deliverGreen from './station0/deliverGreen.js'
import * as station0white from './station0/white.js'
import * as station0dict from './station0/dict.js'
import * as station0desktop from './station0/desktop.js'
import * as station0desktopAddRecord from './station0/desktopAddRecord.js'
import * as station0empower from './station0/empower.js'
import * as station0enterCredential from './station0/enterCredential.js'
import * as station0door from './station0/door.js'
import * as station0excel from './station0/excel.js'
import * as station0file from './station0/file.js'
import * as station0index from './station0/index.js'
import * as station0invite from './station0/invite.js'
import * as station0invoice from './station0/invoice.js'
import * as station0job from './station0/job.js'
import * as station0log from './station0/log.js'
import * as station0loginOrangeer from './station0/loginOrangeer.js'
import * as station0menu from './station0/menu.js'
import * as station0pageHome from './station0/pageHome.js'
import * as station0catCertification from './station0/catCertification.js'
import * as station0catCredential from './station0/catCredential.js'
import * as station0post from './station0/post.js'
import * as station0pink from './station0/pink.js'
import * as station0slider from './station0/slider.js'
import * as station0super from './station0/super.js'
import * as station0sysdict from './station0/sys-dict.js'
import * as station0grateful from './station0/grateful.js'
import * as station0gratefulDoor from './station0/gratefulDoor.js'
import * as station0gratefulCat from './station0/gratefulCat.js'
import * as station0v1 from './station0/v1.js'
import * as station0wallet from './station0/wallet.js'
import * as station1greenBook from './station1/greenBook.js'
import * as station1admin from './station1/admin.js'
import * as station1appVersion from './station1/appVersion.js'
import * as station1hiall from './station1/hiall.js'
import * as station1common from './station1/common.js'
import * as station1white from './station1/white.js'
import * as station1file from './station1/file.js'
import * as station1forward from './station1/forward.js'
import * as station1friendship from './station1/friendship.js'
import * as station1bird from './station1/bird.js'
import * as station1birdFile from './station1/birdFile.js'
import * as station1birdMember from './station1/birdMember.js'
import * as station1birdf2f from './station1/birdf2f.js'
import * as station1login from './station1/login.js'
import * as station1message from './station1/message.js'
import * as station1phone from './station1/phone.js'
import * as station1qrcode from './station1/qrcode.js'
import * as station1remote from './station1/remote.js'
import * as station1request from './station1/request.js'
import * as station1requestMsg from './station1/requestMsg.js'
import * as station1token from './station1/token.js'
import * as station1keyBorard from './station1/keyBorard.js'
import * as station1keyBorardAttention from './station1/keyBorardAttention.js'
import * as station1keyBorardBlack from './station1/keyBorardBlack.js'
import * as station1keyBorardInform from './station1/keyBorardInform.js'
import * as station1inner from './station1/inner.js'
import * as station2greenBook from './station2/greenBook.js'
import * as station2admin from './station2/admin.js'
import * as station2appVersion from './station2/appVersion.js'
import * as station2hiall from './station2/hiall.js'
import * as station2common from './station2/common.js'
import * as station2white from './station2/white.js'
import * as station2file from './station2/file.js'
import * as station2forward from './station2/forward.js'
import * as station2friendship from './station2/friendship.js'
import * as station2bird from './station2/bird.js'
import * as station2birdMember from './station2/birdMember.js'
import * as station2birdf2f from './station2/birdf2f.js'
import * as station2login from './station2/login.js'
import * as station2message from './station2/message.js'
import * as station2phone from './station2/phone.js'
import * as station2qrcode from './station2/qrcode.js'
import * as station2request from './station2/request.js'
import * as station2requestMsg from './station2/requestMsg.js'
import * as station2keyBorard from './station2/keyBorard.js'
import * as station2keyBorardAttention from './station2/keyBorardAttention.js'
import * as station2baseStation from './station2/baseStation.js'
import * as station2delete from './station2/delete.js'
import * as station2deleteAdmin from './station2/deleteAdmin.js'
import * as station2detail from './station2/detail.js'
import * as station2existInBird from './station2/existInBird.js'
import * as station2birdStatus from './station2/birdStatus.js'
import * as station2leaveBird from './station2/leaveBird.js'
import * as station2listAdmin from './station2/listAdmin.js'
import * as station2modifyRemark from './station2/modifyRemark.js'
import * as station2pageList from './station2/pageList.js'
import * as station2save from './station2/save.js'
import * as station2saveAdmin from './station2/saveAdmin.js'
import * as station2token from './station2/token.js'
import * as station3thk from './station3/thk.js'
import * as station4swagger4Apijs from './station4/swagger4Api-js.js'
import * as station5emocenter from './station5/emo-center.js'
import * as station5happyPlan from './station5/happyPlan.js'
Mock.mock(/\/api\/blue\/acc\/queryAcc/, 'post', station0blue.blueAccQueryAcc)
Mock.mock(/\/api\/blue\/door\/addDoor/, 'post', station0blue.blueDoorAddDoor)
Mock.mock(/\/api\/blue\/door\/createDoor/, 'post', station0blue.blueDoorCreateDoor)
Mock.mock(/\/api\/blue\/door\/listKeyBorardDoor/, 'get', station0blue.blueDoorListKeyBorardDoorGet)
Mock.mock(/\/api\/blue\/door\/listKeyBorardDoor/, 'post', station0blue.blueDoorListKeyBorardDoorPost)
Mock.mock(/\/api\/blue\/door\/pageAllDoor/, 'post', station0blue.blueDoorPageAllDoor)
Mock.mock(/\/api\/active\/noActiveList/, 'get', station0active.activeNoActiveList)
Mock.mock(/\/api\/active\/sendActiveMessage/, 'post', station0active.activeSendActiveMessage)
Mock.mock(/\/api\/audit\/auth\/execute/, 'put', station0audit.auditAuthExecute)
Mock.mock(/\/api\/audit\/auth\/infoList/, 'get', station0audit.auditAuthInfoList)
Mock.mock(/\/api\/audit\/auth\/list/, 'get', station0audit.auditAuthList)
Mock.mock(/\/api\/auth\/door\/auth\/org\/infos/, 'post', station0auth.authDoorAuthOrgInfos)
Mock.mock(/\/api\/auth\/door\/auth\/keyBorards/, 'post', station0auth.authDoorAuthKeyBorards)
Mock.mock(/\/api\/auth\/door\/auth\/keyBorards\/auth-status/, 'post', station0auth.authDoorAuthKeyBorardsAuthstatus)
Mock.mock(/\/api\/channel\/desktop\/comLoginAndBind/, 'post', station0channel.channelDesktopComLoginAndBind)
Mock.mock(/\/api\/channel\/gratefulConfig\/add/, 'post', station0channel.channelGratefulConfigAdd)
Mock.mock(/\/api\/channel\/gratefulConfig\/detail/, 'get', station0channel.channelGratefulConfigDetail)
Mock.mock(/\/api\/channel\/gratefulConfig\/update/, 'post', station0channel.channelGratefulConfigUpdate)
Mock.mock(/\/api\/client\/corpWehiall\/authKeyBorard/, 'post', station0client.clientCorpWehiallAuthKeyBorard)
Mock.mock(/\/api\/client\/corpWehiall\/oauth2/, 'post', station0client.clientCorpWehiallOauth2)
Mock.mock(/\/api\/corpWehiall\/appAuthLink/, 'get', station0corpWehiall.corpWehiallAppAuthLink)
Mock.mock(/\/api\/corpWehiall\/authKeyBorard/, 'post', station0corpWehiall.corpWehiallAuthKeyBorard)
Mock.mock(/\/api\/corpWehiall\/initAgent/, 'post', station0corpWehiall.corpWehiallInitAgent)
Mock.mock(/\/api\/corpWehiall\/oauth2/, 'post', station0corpWehiall.corpWehiallOauth2)
Mock.mock(/\/api\/corpWehiall\/syncDoc/, 'get', station0corpWehiall.corpWehiallSyncDoc)
Mock.mock(/\/api\/dataSync\/checkResult/, 'get', station0dataSync.dataSyncCheckResult)
Mock.mock(/\/api\/deliverGreen\/addGreen/, 'post', station0deliverGreen.deliverGreenAddGreen)
Mock.mock(/\/api\/deliverGreen\/checkDefaultGreen/, 'post', station0deliverGreen.deliverGreenCheckDefaultGreen)
Mock.mock(/\/api\/deliverGreen\/deleteGreen\/.*/, 'get', station0deliverGreen.deliverGreenDeleteGreenId)
Mock.mock(/\/api\/deliverGreen\/pageGreen/, 'post', station0deliverGreen.deliverGreenPageGreen)
Mock.mock(/\/api\/deliverGreen\/updateGreen/, 'post', station0deliverGreen.deliverGreenUpdateGreen)
Mock.mock(/\/api\/white\/addWhite/, 'post', station0white.whiteAddWhite)
Mock.mock(/\/api\/white\/delWhite\/confirm/, 'post', station0white.whiteDelWhiteConfirm)
Mock.mock(/\/api\/white\/delWhite\/.*/, 'get', station0white.whiteDelWhiteWhiteId)
Mock.mock(/\/api\/white\/whiteTree/, 'get', station0white.whiteWhiteTree)
Mock.mock(/\/api\/white\/whiteTreeComplex/, 'get', station0white.whiteWhiteTreeComplex)
Mock.mock(/\/api\/white\/whiteTreeInfo/, 'get', station0white.whiteWhiteTreeInfo)
Mock.mock(/\/api\/white\/editWhite/, 'post', station0white.whiteEditWhite)
Mock.mock(/\/api\/white\/get\/.*/, 'get', station0white.whiteGetWhiteId)
Mock.mock(/\/api\/white\/list/, 'get', station0white.whiteList)
Mock.mock(/\/api\/white\/list\/excludeChild\/.*/, 'get', station0white.whiteListExcludeChildWhiteId)
Mock.mock(/\/api\/white\/queryDesktopByWhiteId/, 'get', station0white.whiteQueryDesktopByWhiteId)
Mock.mock(/\/api\/white\/queryDesktopByPhoneOrName/, 'get', station0white.whiteQueryDesktopByPhoneOrName)
Mock.mock(/\/api\/white\/start\/delWhite\/.*/, 'get', station0white.whiteStartDelWhiteWhiteId)
Mock.mock(/\/api\/white\/upWhiteStatus/, 'get', station0white.whiteUpWhiteStatus)
Mock.mock(/\/api\/dict\/query\/.*/, 'get', station0dict.dictQueryType)
Mock.mock(/\/api\/desktop\/add/, 'post', station0desktop.desktopAdd)
Mock.mock(/\/api\/desktop\/changeStatus/, 'get', station0desktop.desktopChangeStatus)
Mock.mock(/\/api\/desktop\/del\/confirm/, 'post', station0desktop.desktopDelConfirm)
Mock.mock(/\/api\/desktop\/del\/.*/, 'get', station0desktop.desktopDelDesktopIds)
Mock.mock(/\/api\/desktop\/whiteTreeCount/, 'get', station0desktop.desktopWhiteTreeCount)
Mock.mock(/\/api\/desktop\/edit/, 'post', station0desktop.desktopEdit)
Mock.mock(/\/api\/desktop\/desktopWhite/, 'get', station0desktop.desktopDesktopWhite)
Mock.mock(/\/api\/desktop\/getDesktopByDesktopId/, 'get', station0desktop.desktopGetDesktopByDesktopId)
Mock.mock(/\/api\/desktop\/myWhiteTreeCount/, 'get', station0desktop.desktopMyWhiteTreeCount)
Mock.mock(/\/api\/desktop\/pageList/, 'get', station0desktop.desktopPageList)
Mock.mock(/\/api\/desktop\/pageSelectList/, 'get', station0desktop.desktopPageSelectList)
Mock.mock(/\/api\/desktop\/shift\/.*/, 'get', station0desktop.desktopShiftDesktopId)
Mock.mock(/\/api\/desktop\/start\/del\/.*/, 'get', station0desktop.desktopStartDelDesktopId)
Mock.mock(/\/api\/desktop\/stop\/start\/.*/, 'get', station0desktop.desktopStopStartDesktopId)
Mock.mock(/\/api\/desktop\/stopDesktop\/confirm/, 'post', station0desktop.desktopStopDesktopConfirm)
Mock.mock(/\/api\/desktopAddRecord\/export/, 'post', station0desktopAddRecord.desktopAddRecordExport)
Mock.mock(/\/api\/desktopAddRecord\/pageRecord/, 'get', station0desktopAddRecord.desktopAddRecordPageRecord)
Mock.mock(/\/api\/empower\/doorRe\/alertAudit/, 'get', station0empower.empowerDoorReAlertAudit)
Mock.mock(/\/api\/empower\/doorRe\/applyScanAgreeRe/, 'get', station0empower.empowerDoorReApplyScanAgreeRe)
Mock.mock(/\/api\/empower\/doorRe\/bathAuth/, 'post', station0empower.empowerDoorReBathAuth)
Mock.mock(/\/api\/empower\/doorRe\/bathCancelAuth/, 'post', station0empower.empowerDoorReBathCancelAuth)
Mock.mock(/\/api\/empower\/doorRe\/whiteTree/, 'get', station0empower.empowerDoorReWhiteTree)
Mock.mock(/\/api\/empower\/doorRe\/detail/, 'get', station0empower.empowerDoorReDetail)
Mock.mock(/\/api\/empower\/doorRe\/detail\/genReLinkOrQr/, 'get', station0empower.empowerDoorReDetailGenReLinkOrQr)
Mock.mock(
  /\/api\/empower\/doorRe\/detail\/getDoorListByPhone/,
  'get',
  station0empower.empowerDoorReDetailGetDoorListByPhone
)
Mock.mock(/\/api\/empower\/doorRe\/detail\/listDoor/, 'get', station0empower.empowerDoorReDetailListDoor)
Mock.mock(/\/api\/empower\/doorRe\/desktopOper\/em\/.*/, 'get', station0empower.empowerDoorReDesktopOperEmType)
Mock.mock(/\/api\/empower\/doorRe\/entReSet\/listPink/, 'get', station0empower.empowerDoorReEntReSetListPink)
Mock.mock(/\/api\/empower\/doorRe\/franchiseOper\/.*/, 'get', station0empower.empowerDoorReFranchiseOperOper)
Mock.mock(/\/api\/empower\/doorRe\/getAccByMobile/, 'get', station0empower.empowerDoorReGetAccByMobile)
Mock.mock(/\/api\/empower\/doorRe\/getEmDesktopInfo\/.*/, 'get', station0empower.empowerDoorReGetEmDesktopInfoLinkCode)
Mock.mock(/\/api\/empower\/doorRe\/getEmpowerInfo/, 'get', station0empower.empowerDoorReGetEmpowerInfo)
Mock.mock(/\/api\/empower\/doorRe\/getEntReSet/, 'get', station0empower.empowerDoorReGetEntReSet)
Mock.mock(/\/api\/empower\/doorRe\/getInviteReInfo\/.*/, 'get', station0empower.empowerDoorReGetInviteReInfoLinkCode)
Mock.mock(/\/api\/empower\/doorRe\/inviteRePlateFromOrg/, 'post', station0empower.empowerDoorReInviteRePlateFromOrg)
Mock.mock(/\/api\/empower\/doorRe\/list/, 'get', station0empower.empowerDoorReList)
Mock.mock(/\/api\/empower\/doorRe\/listPinkList/, 'get', station0empower.empowerDoorReListPinkList)
Mock.mock(/\/api\/empower\/doorRe\/pageDesktopList/, 'get', station0empower.empowerDoorRePageDesktopList)
Mock.mock(/\/api\/empower\/doorRe\/re\/reEntTree/, 'get', station0empower.empowerDoorReReReEntTree)
Mock.mock(/\/api\/empower\/doorRe\/reEntTree/, 'get', station0empower.empowerDoorReReEntTree)
Mock.mock(/\/api\/empower\/doorRe\/refreshApplyRe/, 'get', station0empower.empowerDoorReRefreshApplyRe)
Mock.mock(/\/api\/empower\/doorRe\/relation\/cancel/, 'get', station0empower.empowerDoorReRelationCancel)
Mock.mock(/\/api\/empower\/doorRe\/relation\/refresh/, 'get', station0empower.empowerDoorReRelationRefresh)
Mock.mock(/\/api\/empower\/doorRe\/scan\/getOrgInfo/, 'get', station0empower.empowerDoorReScanGetOrgInfo)
Mock.mock(/\/api\/empower\/doorRe\/sendEmpowerSms/, 'post', station0empower.empowerDoorReSendEmpowerSms)
Mock.mock(/\/api\/empower\/doorRe\/upEntReSet\/.*/, 'post', station0empower.empowerDoorReUpEntReSetDoorId)
Mock.mock(/\/api\/enterCredential\/add/, 'post', station0enterCredential.enterCredentialAdd)
Mock.mock(/\/api\/enterCredential\/del/, 'get', station0enterCredential.enterCredentialDel)
Mock.mock(/\/api\/enterCredential\/getCodeList/, 'get', station0enterCredential.enterCredentialGetCodeList)
Mock.mock(/\/api\/enterCredential\/page/, 'post', station0enterCredential.enterCredentialPage)
Mock.mock(/\/api\/enterCredential\/update/, 'post', station0enterCredential.enterCredentialUpdate)
Mock.mock(
  /\/api\/enterCredential\/v1\/ocr\/happyLicense/,
  'post',
  station0enterCredential.enterCredentialV1OcrHappyLicense
)
Mock.mock(
  /\/api\/door\/identification\/baseInfo\/desktopList/,
  'post',
  station0door.doorIdentificationBaseInfoDesktopList
)
Mock.mock(
  /\/api\/door\/identification\/door\/v1\/openAcct\/callback/,
  'put',
  station0door.doorIdentificationDoorV1OpenAcctCallback
)
Mock.mock(
  /\/api\/door\/identification\/door\/v1\/page\/doorName/,
  'post',
  station0door.doorIdentificationDoorV1PageDoorName
)
Mock.mock(
  /\/api\/door\/identification\/cat\/v1\/openAcct\/callback/,
  'put',
  station0door.doorIdentificationCatV1OpenAcctCallback
)
Mock.mock(/\/api\/door\/identification\/v1\/openAcct/, 'get', station0door.doorIdentificationV1OpenAcctGet)
Mock.mock(/\/api\/door\/identification\/v1\/openAcct/, 'delete', station0door.doorIdentificationV1OpenAcctDelete)
Mock.mock(/\/api\/door\/identification\/v1\/simple\/auth/, 'get', station0door.doorIdentificationV1SimpleAuthGet)
Mock.mock(/\/api\/door\/identification\/v1\/simple\/auth/, 'post', station0door.doorIdentificationV1SimpleAuthPost)
Mock.mock(/\/api\/door\/identification\/v1\/ticket\/auth/, 'post', station0door.doorIdentificationV1TicketAuth)
Mock.mock(
  /\/api\/door\/identification\/v1\/.*\/openAcct\/append/,
  'post',
  station0door.doorIdentificationV1DoorIdOpenAcctAppend
)
Mock.mock(
  /\/api\/door\/identification\/v1\/.*\/openAcct\/execute/,
  'put',
  station0door.doorIdentificationV1DoorIdOpenAcctExecute
)
Mock.mock(/\/api\/door\/identificationcenter\/addDoor/, 'get', station0door.doorIdentificationcenterAddDoorGet)
Mock.mock(/\/api\/door\/identificationcenter\/addDoor/, 'post', station0door.doorIdentificationcenterAddDoorPost)
Mock.mock(/\/api\/door\/identificationcenter\/delDoor/, 'get', station0door.doorIdentificationcenterDelDoor)
Mock.mock(/\/api\/door\/identificationcenter\/listDoor/, 'post', station0door.doorIdentificationcenterListDoor)
Mock.mock(
  /\/api\/door\/identificationcenter\/switchMainDoor/,
  'get',
  station0door.doorIdentificationcenterSwitchMainDoor
)
Mock.mock(
  /\/api\/door\/identificationcenter\/.*\/mainAuthInfo/,
  'get',
  station0door.doorIdentificationcenterDoorIdMainAuthInfo
)
Mock.mock(/\/api\/door\/link\/white/, 'post', station0door.doorLinkWhite)
Mock.mock(/\/api\/door\/pageHome\/claim\/.*/, 'get', station0door.doorPageHomeClaimCompanyId)
Mock.mock(/\/api\/door\/pageHome\/exclude\/.*/, 'get', station0door.doorPageHomeExcludeClaimId)
Mock.mock(/\/api\/door\/pageHome\/judge/, 'get', station0door.doorPageHomeJudge)
Mock.mock(/\/api\/door\/pageHome\/query/, 'get', station0door.doorPageHomeQuery)
Mock.mock(/\/api\/door\/.*\/link\/white/, 'get', station0door.doorIdLinkWhite)
Mock.mock(/\/api\/excel\/export/, 'post', station0excel.excelExport)
Mock.mock(/\/api\/excel\/history/, 'get', station0excel.excelHistory)
Mock.mock(/\/api\/excel\/import/, 'post', station0excel.excelImport)
Mock.mock(/\/api\/excel\/template/, 'get', station0excel.excelTemplate)
Mock.mock(/\/api\/file\/upload/, 'post', station0file.fileUpload)
Mock.mock(/\/api\/index\/getCurrentAuth/, 'get', station0index.indexGetCurrentAuth)
Mock.mock(/\/api\/index\/getCurrentDesktop/, 'get', station0index.indexGetCurrentDesktop)
Mock.mock(/\/api\/index\/getCurrentDesktopAll/, 'get', station0index.indexGetCurrentDesktopAll)
Mock.mock(/\/api\/invite\/audit\/cancelShield\/.*/, 'get', station0invite.inviteAuditCancelShieldId)
Mock.mock(/\/api\/invite\/audit\/pass/, 'post', station0invite.inviteAuditPass)
Mock.mock(/\/api\/invite\/audit\/refuse/, 'post', station0invite.inviteAuditRefuse)
Mock.mock(/\/api\/invite\/audit\/shield\/.*/, 'get', station0invite.inviteAuditShieldId)
Mock.mock(/\/api\/invite\/checkInviteCode/, 'get', station0invite.inviteCheckInviteCode)
Mock.mock(/\/api\/invite\/export/, 'post', station0invite.inviteExport)
Mock.mock(/\/api\/invite\/generateInviteShare/, 'post', station0invite.inviteGenerateInviteShare)
Mock.mock(/\/api\/invite\/inviteJoinEchoData/, 'get', station0invite.inviteInviteJoinEchoData)
Mock.mock(/\/api\/invite\/inviteLogin/, 'post', station0invite.inviteInviteLogin)
Mock.mock(/\/api\/invite\/inviteOrangeer/, 'post', station0invite.inviteInviteOrangeer)
Mock.mock(/\/api\/invite\/page\/.*/, 'post', station0invite.invitePageApplyType)
Mock.mock(/\/api\/invite\/querySetting/, 'get', station0invite.inviteQuerySetting)
Mock.mock(/\/api\/invite\/updatesetting/, 'post', station0invite.inviteUpdatesetting)
Mock.mock(/\/api\/invoice\/add/, 'post', station0invoice.invoiceAdd)
Mock.mock(/\/api\/invoice\/companyTaxList/, 'get', station0invoice.invoiceCompanyTaxList)
Mock.mock(/\/api\/invoice\/del/, 'get', station0invoice.invoiceDel)
Mock.mock(/\/api\/invoice\/page/, 'post', station0invoice.invoicePage)
Mock.mock(/\/api\/invoice\/update/, 'post', station0invoice.invoiceUpdate)
Mock.mock(/\/api\/job\/addDesktop/, 'post', station0job.jobAddDesktop)
Mock.mock(/\/api\/job\/addJob/, 'post', station0job.jobAddJob)
Mock.mock(/\/api\/job\/delJob/, 'get', station0job.jobDelJob)
Mock.mock(/\/api\/job\/desktopSelector/, 'post', station0job.jobDesktopSelector)
Mock.mock(/\/api\/job\/queryDesktopByPhoneOrName/, 'post', station0job.jobQueryDesktopByPhoneOrName)
Mock.mock(/\/api\/job\/queryTree/, 'post', station0job.jobQueryTree)
Mock.mock(/\/api\/job\/removeDesktop/, 'post', station0job.jobRemoveDesktop)
Mock.mock(/\/api\/job\/updateJob/, 'post', station0job.jobUpdateJob)
Mock.mock(/\/api\/log\/list/, 'get', station0log.logList)
Mock.mock(/\/api\/loginOrangeer\/JudgePassWordIsSet/, 'get', station0loginOrangeer.loginOrangeerJudgePassWordIsSet)
Mock.mock(/\/api\/loginOrangeer\/aliMpAutoLogin/, 'post', station0loginOrangeer.loginOrangeerAliMpAutoLogin)
Mock.mock(/\/api\/loginOrangeer\/clearCode\/.*/, 'get', station0loginOrangeer.loginOrangeerClearCodeVerificationEnum)
Mock.mock(
  /\/api\/loginOrangeer\/clearTimeLimit\/.*/,
  'get',
  station0loginOrangeer.loginOrangeerClearTimeLimitVerificationEnum
)
Mock.mock(/\/api\/loginOrangeer\/comLogin/, 'post', station0loginOrangeer.loginOrangeerComLogin)
Mock.mock(/\/api\/loginOrangeer\/loginout/, 'get', station0loginOrangeer.loginOrangeerLoginout)
Mock.mock(/\/api\/loginOrangeer\/passwordCry/, 'get', station0loginOrangeer.loginOrangeerPasswordCry)
Mock.mock(/\/api\/loginOrangeer\/orangeer/, 'post', station0loginOrangeer.loginOrangeerOrangeer)
Mock.mock(/\/api\/loginOrangeer\/retrievePassword/, 'post', station0loginOrangeer.loginOrangeerRetrievePassword)
Mock.mock(
  /\/api\/loginOrangeer\/sendPhoneValidateCode\/.*/,
  'get',
  station0loginOrangeer.loginOrangeerSendPhoneValidateCodeVerificationEnum
)
Mock.mock(/\/api\/loginOrangeer\/setPassWord/, 'post', station0loginOrangeer.loginOrangeerSetPassWord)
Mock.mock(/\/api\/menu\/desktopMenuList/, 'get', station0menu.menuDesktopMenuList)
Mock.mock(/\/api\/menu\/getMenu\/.*/, 'get', station0menu.menuGetMenuMenuId)
Mock.mock(/\/api\/menu\/treeSelect/, 'get', station0menu.menuTreeSelect)
Mock.mock(/\/api\/pageHome\/claim\/.*/, 'get', station0pageHome.pageHomeClaimClaimId)
Mock.mock(/\/api\/pageHome\/exclude\/.*/, 'get', station0pageHome.pageHomeExcludeClaimId)
Mock.mock(/\/api\/pageHome\/judge/, 'get', station0pageHome.pageHomeJudge)
Mock.mock(/\/api\/pageHome\/query/, 'get', station0pageHome.pageHomeQuery)
Mock.mock(
  /\/api\/catCertification\/describeFaceVerify/,
  'get',
  station0catCertification.catCertificationDescribeFaceVerify
)
Mock.mock(/\/api\/catCertification\/idCardBack/, 'post', station0catCertification.catCertificationIdCardBack)
Mock.mock(/\/api\/catCertification\/idCardFront/, 'post', station0catCertification.catCertificationIdCardFront)
Mock.mock(
  /\/api\/catCertification\/initFaceVerifyWithCertifyId\/.*/,
  'post',
  station0catCertification.catCertificationInitFaceVerifyWithCertifyIdType
)
Mock.mock(/\/api\/catCertification\/cat\/auth\/info/, 'post', station0catCertification.catCertificationCatAuthInfo)
Mock.mock(/\/api\/catCertification\/cat\/list/, 'post', station0catCertification.catCertificationCatList)
Mock.mock(
  /\/api\/catCertification\/cat\/v1\/.*\/openAcct\/execute/,
  'post',
  station0catCertification.catCertificationCatV1KeyBorardIdOpenAcctExecute
)
Mock.mock(/\/api\/catCertification\/queryCertInfo/, 'get', station0catCertification.catCertificationQueryCertInfo)
Mock.mock(
  /\/api\/catCertification\/queryCommonCertifyId/,
  'get',
  station0catCertification.catCertificationQueryCommonCertifyId
)
Mock.mock(/\/api\/catCertification\/wallet\/info/, 'post', station0catCertification.catCertificationWalletInfo)
Mock.mock(/\/api\/catCertification\/wallet\/queryInfo/, 'get', station0catCertification.catCertificationWalletQueryInfo)
Mock.mock(/\/api\/catCredential\/PageCatCredential/, 'post', station0catCredential.catCredentialPageCatCredential)
Mock.mock(/\/api\/catCredential\/addCatCredential/, 'post', station0catCredential.catCredentialAddCatCredential)
Mock.mock(/\/api\/catCredential\/delete\/.*/, 'get', station0catCredential.catCredentialDeleteId)
Mock.mock(/\/api\/catCredential\/deleteMajor\/.*/, 'get', station0catCredential.catCredentialDeleteMajorId)
Mock.mock(/\/api\/catCredential\/getMajorCodeTree/, 'get', station0catCredential.catCredentialGetMajorCodeTree)
Mock.mock(/\/api\/catCredential\/updateCatCredential/, 'post', station0catCredential.catCredentialUpdateCatCredential)
Mock.mock(/\/api\/post\/addDesktop/, 'get', station0post.postAddDesktop)
Mock.mock(/\/api\/post\/addPost/, 'post', station0post.postAddPost)
Mock.mock(/\/api\/post\/delDesktop/, 'get', station0post.postDelDesktop)
Mock.mock(/\/api\/post\/delPost\/.*/, 'get', station0post.postDelPostPostId)
Mock.mock(/\/api\/post\/editPost/, 'post', station0post.postEditPost)
Mock.mock(/\/api\/post\/list/, 'get', station0post.postList)
Mock.mock(/\/api\/post\/queryDesktopByWhiteId/, 'get', station0post.postQueryDesktopByWhiteId)
Mock.mock(/\/api\/post\/queryDesktopByPhoneOrName/, 'get', station0post.postQueryDesktopByPhoneOrName)
Mock.mock(/\/api\/pink\/addPink/, 'post', station0pink.pinkAddPink)
Mock.mock(/\/api\/pink\/authDesktop\/cancelAll/, 'get', station0pink.pinkAuthDesktopCancelAll)
Mock.mock(/\/api\/pink\/authDesktop\/selectAll/, 'get', station0pink.pinkAuthDesktopSelectAll)
Mock.mock(/\/api\/pink\/changeStatus/, 'get', station0pink.pinkChangeStatus)
Mock.mock(/\/api\/pink\/curCanAllotDesktopPinkList/, 'get', station0pink.pinkCurCanAllotDesktopPinkList)
Mock.mock(/\/api\/pink\/curCanAllotPinkList/, 'get', station0pink.pinkCurCanAllotPinkList)
Mock.mock(/\/api\/pink\/curDesktopPinkList/, 'get', station0pink.pinkCurDesktopPinkList)
Mock.mock(/\/api\/pink\/editPinkBase/, 'post', station0pink.pinkEditPinkBase)
Mock.mock(/\/api\/pink\/editPinkMenu/, 'post', station0pink.pinkEditPinkMenu)
Mock.mock(/\/api\/pink\/getCanAllotPinkList\/.*/, 'get', station0pink.pinkGetCanAllotPinkListDesktopId)
Mock.mock(/\/api\/pink\/pagePinkDesktop\/.*/, 'get', station0pink.pinkPagePinkDesktopPinkId)
Mock.mock(/\/api\/pink\/queryDesktopByWhiteId/, 'get', station0pink.pinkQueryDesktopByWhiteId)
Mock.mock(/\/api\/pink\/queryDesktopByPhoneOrName/, 'get', station0pink.pinkQueryDesktopByPhoneOrName)
Mock.mock(/\/api\/pink\/removePink\/.*/, 'get', station0pink.pinkRemovePinkPinkIds)
Mock.mock(/\/api\/pink\/pinkInfo\/.*/, 'get', station0pink.pinkPinkInfoPinkId)
Mock.mock(/\/api\/pink\/pinkList/, 'get', station0pink.pinkPinkList)
Mock.mock(/\/api\/pink\/pinkMenuTree\/.*/, 'get', station0pink.pinkPinkMenuTreePinkId)
Mock.mock(/\/api\/pink\/pinkMenuTreeChecked\/.*/, 'get', station0pink.pinkPinkMenuTreeCheckedPinkId)
Mock.mock(/\/api\/pink\/pinkTree/, 'get', station0pink.pinkPinkTree)
Mock.mock(/\/api\/slider\/addImage/, 'post', station0slider.sliderAddImage)
Mock.mock(/\/api\/slider\/create\/.*/, 'get', station0slider.sliderCreateVerificationEnum)
Mock.mock(/\/api\/slider\/preCheck\/.*/, 'get', station0slider.sliderPreCheckVerificationEnum)
Mock.mock(/\/api\/super\/list/, 'get', station0super.superList)
Mock.mock(/\/api\/super\/transfer/, 'get', station0super.superTransfer)
Mock.mock(/\/api\/super\/verify\/.*/, 'post', station0super.superVerifyVerifyType)
Mock.mock(/\/api\/sys-dict\/v1\/areaInfo/, 'get', station0sysdict.sysdictV1AreaInfo)
Mock.mock(/\/api\/sys-dict\/v1\/types/, 'get', station0sysdict.sysdictV1Types)
Mock.mock(/\/api\/sys-dict\/v1\/.*\/list\/filter/, 'get', station0sysdict.sysdictV1TypeListFilter)
Mock.mock(/\/api\/sys-dict\/v1\/.*\/list\/page/, 'post', station0sysdict.sysdictV1TypeListPage)
Mock.mock(/\/api\/sys-dict\/v1\/.*\/list\/tree/, 'get', station0sysdict.sysdictV1TypeListTree)
Mock.mock(/\/api\/grateful\/acquirePresentGratefulInfo/, 'get', station0grateful.gratefulAcquirePresentGratefulInfo)
Mock.mock(/\/api\/grateful\/acquireGratefulList/, 'get', station0grateful.gratefulAcquireGratefulList)
Mock.mock(/\/api\/grateful\/channel\/unbind/, 'post', station0grateful.gratefulChannelUnbind)
Mock.mock(/\/api\/grateful\/switchGrateful/, 'get', station0grateful.gratefulSwitchGrateful)
Mock.mock(/\/api\/grateful\/unbound\/list/, 'get', station0grateful.gratefulUnboundList)
Mock.mock(/\/api\/gratefulDoor\/acquireInfo/, 'get', station0gratefulDoor.gratefulDoorAcquireInfo)
Mock.mock(/\/api\/gratefulDoor\/updateInfo/, 'post', station0gratefulDoor.gratefulDoorUpdateInfo)
Mock.mock(/\/api\/gratefulCat\/acquireInfo/, 'get', station0gratefulCat.gratefulCatAcquireInfo)
Mock.mock(/\/api\/gratefulCat\/updateAccPassword/, 'post', station0gratefulCat.gratefulCatUpdateAccPassword)
Mock.mock(/\/api\/gratefulCat\/updateInfo/, 'post', station0gratefulCat.gratefulCatUpdateInfo)
Mock.mock(/\/api\/v1\/audit\/relation/, 'put', station0v1.v1AuditRelation)
Mock.mock(/\/api\/v1\/audit\/relation\/page/, 'post', station0v1.v1AuditRelationPage)
Mock.mock(/\/api\/v1\/audit\/relation\/total/, 'post', station0v1.v1AuditRelationTotal)
Mock.mock(/\/api\/wallet\/balance/, 'get', station0wallet.walletBalance)
Mock.mock(/\/api\/wallet\/judgeStatus/, 'get', station0wallet.walletJudgeStatus)
Mock.mock(/\/api\/greenBook\/listGratefulInfo/, 'get', station1greenBook.greenBookListGratefulInfo)
Mock.mock(/\/api\/greenBook\/outer\/outerDesktopList/, 'post', station1greenBook.greenBookOuterOuterDesktopList)
Mock.mock(/\/api\/greenBook\/outer\/outerDoorList/, 'post', station1greenBook.greenBookOuterOuterDoorList)
Mock.mock(/\/api\/admin\/addFellowBirdMember/, 'post', station1admin.adminAddFellowBirdMember)
Mock.mock(/\/api\/admin\/addBirdMember/, 'get', station1admin.adminAddBirdMember)
Mock.mock(/\/api\/admin\/addKeyBorard/, 'get', station1admin.adminAddKeyBorard)
Mock.mock(/\/api\/admin\/addKeyBorardAndMemberAndFellow/, 'get', station1admin.adminAddKeyBorardAndMemberAndFellow)
Mock.mock(/\/api\/admin\/getAvatar/, 'get', station1admin.adminGetAvatar)
Mock.mock(/\/api\/admin\/putAppVersionFile/, 'post', station1admin.adminPutAppVersionFile)
Mock.mock(/\/api\/admin\/putAppVersionFileUrl/, 'post', station1admin.adminPutAppVersionFileUrl)
Mock.mock(/\/api\/admin\/updateInnerBirdOwner/, 'get', station1admin.adminUpdateInnerBirdOwner)
Mock.mock(/\/api\/appVersion\/list/, 'get', station1appVersion.appVersionList)
Mock.mock(/\/api\/appVersion\/new/, 'get', station1appVersion.appVersionNew)
Mock.mock(/\/api\/hiall\/clearHiall/, 'post', station1hiall.hiallClearHiall)
Mock.mock(/\/api\/hiall\/create/, 'post', station1hiall.hiallCreate)
Mock.mock(/\/api\/hiall\/oftenContact/, 'post', station1hiall.hiallOftenContact)
Mock.mock(/\/api\/hiall\/pageList/, 'post', station1hiall.hiallPageList)
Mock.mock(/\/api\/hiall\/recentContact/, 'post', station1hiall.hiallRecentContact)
Mock.mock(/\/api\/hiall\/unreadList/, 'post', station1hiall.hiallUnreadList)
Mock.mock(/\/api\/common\/bind/, 'post', station1common.commonBind)
Mock.mock(/\/api\/common\/search/, 'post', station1common.commonSearch)
Mock.mock(/\/api\/common\/search\/type/, 'post', station1common.commonSearchType)
Mock.mock(/\/api\/common\/searchBeforeAddFriend/, 'post', station1common.commonSearchBeforeAddFriend)
Mock.mock(/\/api\/common\/switchChannel/, 'post', station1common.commonSwitchChannel)
Mock.mock(/\/api\/common\/switchKeyBorardList/, 'post', station1common.commonSwitchKeyBorardList)
Mock.mock(/\/api\/white\/list/, 'post', station1white.whiteList)
Mock.mock(/\/api\/white\/keyBorardWhiteList/, 'post', station1white.whiteKeyBorardWhiteList)
Mock.mock(/\/api\/white\/keyBorardListAllGrateful/, 'post', station1white.whiteKeyBorardListAllGrateful)
Mock.mock(/\/api\/white\/keyBorardPage/, 'post', station1white.whiteKeyBorardPage)
Mock.mock(/\/api\/file\/getAliyunStsSign/, 'get', station1file.fileGetAliyunStsSign)
Mock.mock(/\/api\/file\/getOssConfig/, 'post', station1file.fileGetOssConfig)
Mock.mock(/\/api\/file\/parseVoice/, 'get', station1file.fileParseVoice)
Mock.mock(/\/api\/file\/putOssFile/, 'post', station1file.filePutOssFile)
Mock.mock(/\/api\/file\/saveFiles/, 'post', station1file.fileSaveFiles)
Mock.mock(/\/api\/file\/signedFileUrl/, 'post', station1file.fileSignedFileUrl)
Mock.mock(/\/api\/file\/signedFileUrlV2/, 'post', station1file.fileSignedFileUrlV2)
Mock.mock(/\/api\/file\/uploadFile/, 'post', station1file.fileUploadFile)
Mock.mock(/\/api\/forward\/checkAndCreate/, 'post', station1forward.forwardCheckAndCreate)
Mock.mock(/\/api\/forward\/list/, 'post', station1forward.forwardList)
Mock.mock(/\/api\/forward\/search/, 'post', station1forward.forwardSearch)
Mock.mock(/\/api\/friendship\/delete/, 'post', station1friendship.friendshipDelete)
Mock.mock(/\/api\/friendship\/detail/, 'post', station1friendship.friendshipDetail)
Mock.mock(/\/api\/friendship\/getIsFriend/, 'post', station1friendship.friendshipGetIsFriend)
Mock.mock(/\/api\/friendship\/getKeyBorardDetail/, 'post', station1friendship.friendshipGetKeyBorardDetail)
Mock.mock(/\/api\/friendship\/list/, 'post', station1friendship.friendshipList)
Mock.mock(/\/api\/friendship\/modifyRemark/, 'post', station1friendship.friendshipModifyRemark)
Mock.mock(/\/api\/friendship\/pageList/, 'post', station1friendship.friendshipPageList)
Mock.mock(/\/api\/friendship\/setNoticeAndTop/, 'post', station1friendship.friendshipSetNoticeAndTop)
Mock.mock(/\/api\/friendship\/setRcvMsg/, 'post', station1friendship.friendshipSetRcvMsg)
Mock.mock(/\/api\/friendship\/setShowPhone/, 'post', station1friendship.friendshipSetShowPhone)
Mock.mock(/\/api\/bird\/detail/, 'post', station1bird.birdDetail)
Mock.mock(/\/api\/bird\/dissolve/, 'post', station1bird.birdDissolve)
Mock.mock(/\/api\/bird\/birdSetting/, 'post', station1bird.birdBirdSetting)
Mock.mock(/\/api\/bird\/modifyBirdName/, 'post', station1bird.birdModifyBirdName)
Mock.mock(/\/api\/bird\/pageList/, 'post', station1bird.birdPageList)
Mock.mock(/\/api\/bird\/save/, 'post', station1bird.birdSave)
Mock.mock(/\/api\/bird\/transfer/, 'post', station1bird.birdTransfer)
Mock.mock(/\/api\/birdFile\/save/, 'post', station1birdFile.birdFileSave)
Mock.mock(/\/api\/birdMember\/delete/, 'post', station1birdMember.birdMemberDelete)
Mock.mock(/\/api\/birdMember\/deleteAdmin/, 'post', station1birdMember.birdMemberDeleteAdmin)
Mock.mock(/\/api\/birdMember\/detail/, 'post', station1birdMember.birdMemberDetail)
Mock.mock(/\/api\/birdMember\/existInBird/, 'post', station1birdMember.birdMemberExistInBird)
Mock.mock(/\/api\/birdMember\/birdStatus/, 'post', station1birdMember.birdMemberBirdStatus)
Mock.mock(/\/api\/birdMember\/leaveBird/, 'post', station1birdMember.birdMemberLeaveBird)
Mock.mock(/\/api\/birdMember\/list/, 'post', station1birdMember.birdMemberList)
Mock.mock(/\/api\/birdMember\/listAdmin/, 'get', station1birdMember.birdMemberListAdmin)
Mock.mock(/\/api\/birdMember\/modifyRemark/, 'post', station1birdMember.birdMemberModifyRemark)
Mock.mock(/\/api\/birdMember\/pageList/, 'post', station1birdMember.birdMemberPageList)
Mock.mock(/\/api\/birdMember\/save/, 'post', station1birdMember.birdMemberSave)
Mock.mock(/\/api\/birdMember\/saveAdmin/, 'post', station1birdMember.birdMemberSaveAdmin)
Mock.mock(/\/api\/birdMember\/setNoticeAndTop/, 'post', station1birdMember.birdMemberSetNoticeAndTop)
Mock.mock(/\/api\/birdf2f\/api\/birdf2f\/enterBird/, 'post', station1birdf2f.birdf2fApiBirdf2fEnterBird)
Mock.mock(/\/api\/birdf2f\/api\/birdf2f\/list/, 'post', station1birdf2f.birdf2fApiBirdf2fList)
Mock.mock(/\/api\/birdf2f\/api\/birdf2f\/saveRandom/, 'post', station1birdf2f.birdf2fApiBirdf2fSaveRandom)
Mock.mock(/\/api\/login\/doLogin/, 'post', station1login.loginDoLogin)
Mock.mock(/\/api\/login\/doLogout/, 'get', station1login.loginDoLogout)
Mock.mock(/\/api\/login\/sendPhoneValidateCode/, 'get', station1login.loginSendPhoneValidateCode)
Mock.mock(/\/api\/message\/ack/, 'post', station1message.messageAck)
Mock.mock(/\/api\/message\/atListAndAckSequence/, 'get', station1message.messageAtListAndAckSequence)
Mock.mock(/\/api\/message\/clear/, 'post', station1message.messageClear)
Mock.mock(/\/api\/message\/delete/, 'post', station1message.messageDelete)
Mock.mock(/\/api\/message\/detail/, 'post', station1message.messageDetail)
Mock.mock(/\/api\/message\/history\/pageList/, 'post', station1message.messageHistoryPageList)
Mock.mock(/\/api\/message\/position/, 'post', station1message.messagePosition)
Mock.mock(/\/api\/message\/scrollMessage/, 'post', station1message.messageScrollMessage)
Mock.mock(/\/api\/message\/search\/pageList/, 'post', station1message.messageSearchPageList)
Mock.mock(/\/api\/phone\/list/, 'post', station1phone.phoneList)
Mock.mock(/\/api\/qrcode\/getImg/, 'post', station1qrcode.qrcodeGetImg)
Mock.mock(/\/api\/remote\/bigdata\/autoBird/, 'post', station1remote.remoteBigdataAutoBird)
Mock.mock(/\/api\/remote\/bigdata\/mockAutoBird/, 'post', station1remote.remoteBigdataMockAutoBird)
Mock.mock(/\/remote\/message\/process/, 'post', station1remote.remoteMessageProcess)
Mock.mock(/\/api\/request\/addFriend/, 'post', station1request.requestAddFriend)
Mock.mock(/\/api\/request\/addBird/, 'post', station1request.requestAddBird)
Mock.mock(/\/api\/request\/approve/, 'post', station1request.requestApprove)
Mock.mock(/\/api\/request\/detail/, 'get', station1request.requestDetail)
Mock.mock(/\/api\/request\/getUnreadAttr/, 'post', station1request.requestGetUnreadAttr)
Mock.mock(/\/api\/request\/getUnreadCount/, 'get', station1request.requestGetUnreadCount)
Mock.mock(/\/api\/request\/invite/, 'post', station1request.requestInvite)
Mock.mock(/\/api\/request\/pageList/, 'post', station1request.requestPageList)
Mock.mock(/\/api\/request\/read/, 'post', station1request.requestRead)
Mock.mock(/\/api\/request\/tryInvite/, 'post', station1request.requestTryInvite)
Mock.mock(/\/api\/requestMsg\/save/, 'post', station1requestMsg.requestMsgSave)
Mock.mock(/\/api\/token\/addTokenToShangyunCache/, 'post', station1token.tokenAddTokenToShangyunCache)
Mock.mock(/\/api\/token\/checkToken/, 'post', station1token.tokenCheckToken)
Mock.mock(/\/api\/token\/removeSessionInShangyun/, 'post', station1token.tokenRemoveSessionInShangyun)
Mock.mock(/\/api\/keyBorard\/cancel/, 'post', station1keyBorard.keyBorardCancel)
Mock.mock(/\/api\/keyBorard\/getCancelSmsCode/, 'get', station1keyBorard.keyBorardGetCancelSmsCode)
Mock.mock(/\/api\/keyBorard\/getImKeyBorardId/, 'get', station1keyBorard.keyBorardGetImKeyBorardId)
Mock.mock(/\/api\/keyBorard\/getIsNoticed/, 'get', station1keyBorard.keyBorardGetIsNoticed)
Mock.mock(/\/api\/keyBorard\/hasSelectGrateful/, 'get', station1keyBorard.keyBorardHasSelectGrateful)
Mock.mock(/\/api\/keyBorard\/listGratefulInfo/, 'get', station1keyBorard.keyBorardListGratefulInfo)
Mock.mock(/\/api\/keyBorard\/modifyAvatar/, 'post', station1keyBorard.keyBorardModifyAvatar)
Mock.mock(/\/api\/keyBorard\/modifyEmail/, 'post', station1keyBorard.keyBorardModifyEmail)
Mock.mock(/\/api\/keyBorard\/catInfo/, 'get', station1keyBorard.keyBorardCatInfo)
Mock.mock(/\/api\/keyBorard\/queryAppVersion/, 'get', station1keyBorard.keyBorardQueryAppVersion)
Mock.mock(/\/api\/keyBorard\/setDefaultDoor/, 'post', station1keyBorard.keyBorardSetDefaultDoor)
Mock.mock(/\/api\/keyBorard\/setIsApprove/, 'get', station1keyBorard.keyBorardSetIsApprove)
Mock.mock(/\/api\/keyBorard\/setIsBirdApprove/, 'get', station1keyBorard.keyBorardSetIsBirdApprove)
Mock.mock(/\/api\/keyBorard\/setIsNamePhoneSearch/, 'get', station1keyBorard.keyBorardSetIsNamePhoneSearch)
Mock.mock(/\/api\/keyBorard\/setIsNotice/, 'get', station1keyBorard.keyBorardSetIsNotice)
Mock.mock(/\/api\/keyBorard\/setIsRcvStrangerMsg/, 'get', station1keyBorard.keyBorardSetIsRcvStrangerMsg)
Mock.mock(/\/api\/keyBorard\/setRequestChannel/, 'post', station1keyBorard.keyBorardSetRequestChannel)
Mock.mock(/\/api\/keyBorardAttention\/remove/, 'get', station1keyBorardAttention.keyBorardAttentionRemove)
Mock.mock(/\/api\/keyBorardAttention\/save/, 'get', station1keyBorardAttention.keyBorardAttentionSave)
Mock.mock(/\/api\/keyBorardBlack\/pageList/, 'post', station1keyBorardBlack.keyBorardBlackPageList)
Mock.mock(/\/api\/keyBorardBlack\/remove/, 'get', station1keyBorardBlack.keyBorardBlackRemove)
Mock.mock(/\/api\/keyBorardBlack\/save/, 'get', station1keyBorardBlack.keyBorardBlackSave)
Mock.mock(/\/api\/keyBorardBlack\/scollList/, 'get', station1keyBorardBlack.keyBorardBlackScollList)
Mock.mock(/\/api\/keyBorardInform\/save/, 'post', station1keyBorardInform.keyBorardInformSave)
Mock.mock(/\/inner\/file\/getUploadUrl/, 'post', station1inner.innerFileGetUploadUrl)
Mock.mock(/\/inner\/file\/birdFile\/save/, 'post', station1inner.innerFileBirdFileSave)
Mock.mock(/\/inner\/bird\/dissolve/, 'post', station1inner.innerBirdDissolve)
Mock.mock(/\/inner\/bird\/save/, 'post', station1inner.innerBirdSave)
Mock.mock(/\/inner\/bird\/saveSchoolMateBird/, 'post', station1inner.innerBirdSaveSchoolMateBird)
Mock.mock(/\/inner\/birdMember\/birdPageList/, 'post', station1inner.innerBirdMemberBirdPageList)
Mock.mock(/\/inner\/birdMember\/remove/, 'post', station1inner.innerBirdMemberRemove)
Mock.mock(/\/inner\/birdMember\/save/, 'post', station1inner.innerBirdMemberSave)
Mock.mock(/\/inner\/mock\/mockSaveMember/, 'post', station1inner.innerMockMockSaveMember)
Mock.mock(/\/inner\/msg\/search/, 'post', station1inner.innerMsgSearch)
Mock.mock(/\/inner\/msg\/send/, 'post', station1inner.innerMsgSend)
Mock.mock(/\/greenBook\/listGratefulInfo/, 'post', station2greenBook.greenBookListGratefulInfo)
Mock.mock(/\/api\/greenBook\/listGratefulInfo/, 'get', station2greenBook.greenBookListGratefulInfo)
Mock.mock(/\/api\/admin\/getAvatar/, 'get', station2admin.adminGetAvatar)
Mock.mock(/\/api\/admin\/putAppVersionFile/, 'post', station2admin.adminPutAppVersionFile)
Mock.mock(/\/api\/appVersion\/list/, 'get', station2appVersion.appVersionList)
Mock.mock(/\/api\/hiall\/clearHiall/, 'post', station2hiall.hiallClearHiall)
Mock.mock(/\/api\/hiall\/create/, 'post', station2hiall.hiallCreate)
Mock.mock(/\/api\/hiall\/oftenContact/, 'post', station2hiall.hiallOftenContact)
Mock.mock(/\/api\/hiall\/pageList/, 'post', station2hiall.hiallPageList)
Mock.mock(/\/api\/hiall\/recentContact/, 'post', station2hiall.hiallRecentContact)
Mock.mock(/\/api\/hiall\/unreadList/, 'post', station2hiall.hiallUnreadList)
Mock.mock(/\/hiall\/clearHiall/, 'post', station2hiall.hiallClearHiall)
Mock.mock(/\/hiall\/create/, 'post', station2hiall.hiallCreate)
Mock.mock(/\/hiall\/oftenContact/, 'post', station2hiall.hiallOftenContact)
Mock.mock(/\/hiall\/pageList/, 'post', station2hiall.hiallPageList)
Mock.mock(/\/hiall\/recentContact/, 'post', station2hiall.hiallRecentContact)
Mock.mock(/\/api\/common\/bind/, 'post', station2common.commonBind)
Mock.mock(/\/api\/common\/search/, 'post', station2common.commonSearch)
Mock.mock(/\/api\/common\/search\/type/, 'post', station2common.commonSearchType)
Mock.mock(/\/api\/common\/searchBeforeAddFriend/, 'post', station2common.commonSearchBeforeAddFriend)
Mock.mock(/\/api\/common\/switchChannel/, 'post', station2common.commonSwitchChannel)
Mock.mock(/\/api\/common\/switchKeyBorardList/, 'post', station2common.commonSwitchKeyBorardList)
Mock.mock(/\/common\/bind/, 'post', station2common.commonBind)
Mock.mock(/\/common\/search/, 'post', station2common.commonSearch)
Mock.mock(/\/common\/search\/type/, 'post', station2common.commonSearchType)
Mock.mock(/\/common\/searchBeforeAddFriend/, 'post', station2common.commonSearchBeforeAddFriend)
Mock.mock(/\/common\/switchChannel/, 'post', station2common.commonSwitchChannel)
Mock.mock(/\/common\/switchKeyBorardList/, 'post', station2common.commonSwitchKeyBorardList)
Mock.mock(/\/api\/white\/list/, 'post', station2white.whiteList)
Mock.mock(/\/api\/white\/keyBorardWhiteList/, 'post', station2white.whiteKeyBorardWhiteList)
Mock.mock(/\/api\/white\/keyBorardListAllGrateful/, 'post', station2white.whiteKeyBorardListAllGrateful)
Mock.mock(/\/api\/white\/keyBorardPage/, 'post', station2white.whiteKeyBorardPage)
Mock.mock(/\/white\/list/, 'post', station2white.whiteList)
Mock.mock(/\/white\/keyBorardWhiteList/, 'post', station2white.whiteKeyBorardWhiteList)
Mock.mock(/\/white\/keyBorardListAllGrateful/, 'post', station2white.whiteKeyBorardListAllGrateful)
Mock.mock(/\/white\/keyBorardPage/, 'post', station2white.whiteKeyBorardPage)
Mock.mock(/\/api\/file\/putOssFile/, 'post', station2file.filePutOssFile)
Mock.mock(/\/api\/forward\/checkAndCreate/, 'post', station2forward.forwardCheckAndCreate)
Mock.mock(/\/api\/forward\/list/, 'post', station2forward.forwardList)
Mock.mock(/\/api\/forward\/search/, 'post', station2forward.forwardSearch)
Mock.mock(/\/forward\/list/, 'post', station2forward.forwardList)
Mock.mock(/\/forward\/search/, 'post', station2forward.forwardSearch)
Mock.mock(/\/api\/friendship\/delete/, 'post', station2friendship.friendshipDelete)
Mock.mock(/\/api\/friendship\/detail/, 'post', station2friendship.friendshipDetail)
Mock.mock(/\/api\/friendship\/getIsFriend/, 'post', station2friendship.friendshipGetIsFriend)
Mock.mock(/\/api\/friendship\/getKeyBorardDetail/, 'post', station2friendship.friendshipGetKeyBorardDetail)
Mock.mock(/\/api\/friendship\/modifyRemark/, 'post', station2friendship.friendshipModifyRemark)
Mock.mock(/\/api\/friendship\/pageList/, 'post', station2friendship.friendshipPageList)
Mock.mock(/\/api\/friendship\/setNoticeAndTop/, 'post', station2friendship.friendshipSetNoticeAndTop)
Mock.mock(/\/friendship\/delete/, 'post', station2friendship.friendshipDelete)
Mock.mock(/\/friendship\/detail/, 'post', station2friendship.friendshipDetail)
Mock.mock(/\/friendship\/getIsFriend/, 'post', station2friendship.friendshipGetIsFriend)
Mock.mock(/\/friendship\/getKeyBorardDetail/, 'post', station2friendship.friendshipGetKeyBorardDetail)
Mock.mock(/\/friendship\/modifyRemark/, 'post', station2friendship.friendshipModifyRemark)
Mock.mock(/\/friendship\/pageList/, 'post', station2friendship.friendshipPageList)
Mock.mock(/\/api\/bird\/detail/, 'post', station2bird.birdDetail)
Mock.mock(/\/api\/bird\/dissolve/, 'post', station2bird.birdDissolve)
Mock.mock(/\/api\/bird\/birdSetting/, 'post', station2bird.birdBirdSetting)
Mock.mock(/\/api\/bird\/modifyBirdName/, 'post', station2bird.birdModifyBirdName)
Mock.mock(/\/api\/bird\/pageList/, 'post', station2bird.birdPageList)
Mock.mock(/\/api\/bird\/save/, 'post', station2bird.birdSave)
Mock.mock(/\/api\/bird\/transfer/, 'post', station2bird.birdTransfer)
Mock.mock(/\/bird\/detail/, 'post', station2bird.birdDetail)
Mock.mock(/\/bird\/birdSetting/, 'post', station2bird.birdBirdSetting)
Mock.mock(/\/bird\/modifyBirdName/, 'post', station2bird.birdModifyBirdName)
Mock.mock(/\/bird\/pageList/, 'post', station2bird.birdPageList)
Mock.mock(/\/bird\/save/, 'post', station2bird.birdSave)
Mock.mock(/\/api\/birdMember\/delete/, 'post', station2birdMember.birdMemberDelete)
Mock.mock(/\/api\/birdMember\/deleteAdmin/, 'post', station2birdMember.birdMemberDeleteAdmin)
Mock.mock(/\/api\/birdMember\/detail/, 'post', station2birdMember.birdMemberDetail)
Mock.mock(/\/api\/birdMember\/existInBird/, 'post', station2birdMember.birdMemberExistInBird)
Mock.mock(/\/api\/birdMember\/birdStatus/, 'post', station2birdMember.birdMemberBirdStatus)
Mock.mock(/\/api\/birdMember\/leaveBird/, 'post', station2birdMember.birdMemberLeaveBird)
Mock.mock(/\/api\/birdMember\/listAdmin/, 'get', station2birdMember.birdMemberListAdmin)
Mock.mock(/\/api\/birdMember\/modifyRemark/, 'post', station2birdMember.birdMemberModifyRemark)
Mock.mock(/\/api\/birdMember\/pageList/, 'post', station2birdMember.birdMemberPageList)
Mock.mock(/\/api\/birdMember\/save/, 'post', station2birdMember.birdMemberSave)
Mock.mock(/\/api\/birdMember\/saveAdmin/, 'post', station2birdMember.birdMemberSaveAdmin)
Mock.mock(/\/api\/birdMember\/setNoticeAndTop/, 'post', station2birdMember.birdMemberSetNoticeAndTop)
Mock.mock(/\/api\/birdf2f\/enterBird/, 'post', station2birdf2f.birdf2fEnterBird)
Mock.mock(/\/api\/birdf2f\/list/, 'post', station2birdf2f.birdf2fList)
Mock.mock(/\/api\/birdf2f\/saveRandom/, 'post', station2birdf2f.birdf2fSaveRandom)
Mock.mock(/\/api\/login\/doLogin/, 'post', station2login.loginDoLogin)
Mock.mock(/\/api\/login\/doLogout/, 'get', station2login.loginDoLogout)
Mock.mock(/\/api\/login\/sendPhoneValidateCode/, 'get', station2login.loginSendPhoneValidateCode)
Mock.mock(/\/login\/doLogin/, 'post', station2login.loginDoLogin)
Mock.mock(/\/login\/doLogout/, 'get', station2login.loginDoLogout)
Mock.mock(/\/login\/sendPhoneValidateCode/, 'get', station2login.loginSendPhoneValidateCode)
Mock.mock(/\/api\/message\/ack/, 'post', station2message.messageAck)
Mock.mock(/\/api\/message\/clear/, 'post', station2message.messageClear)
Mock.mock(/\/api\/message\/delete/, 'post', station2message.messageDelete)
Mock.mock(/\/api\/message\/detail/, 'post', station2message.messageDetail)
Mock.mock(/\/api\/message\/history\/pageList/, 'post', station2message.messageHistoryPageList)
Mock.mock(/\/api\/message\/search\/pageList/, 'post', station2message.messageSearchPageList)
Mock.mock(/\/api\/message\/testSendMQ/, 'post', station2message.messageTestSendMQ)
Mock.mock(/\/api\/phone\/list/, 'post', station2phone.phoneList)
Mock.mock(/\/api\/qrcode\/getImg/, 'post', station2qrcode.qrcodeGetImg)
Mock.mock(/\/api\/request\/addFriend/, 'post', station2request.requestAddFriend)
Mock.mock(/\/api\/request\/addBird/, 'post', station2request.requestAddBird)
Mock.mock(/\/api\/request\/approve/, 'post', station2request.requestApprove)
Mock.mock(/\/api\/request\/detail/, 'get', station2request.requestDetail)
Mock.mock(/\/api\/request\/getUnreadAttr/, 'post', station2request.requestGetUnreadAttr)
Mock.mock(/\/api\/request\/getUnreadCount/, 'get', station2request.requestGetUnreadCount)
Mock.mock(/\/api\/request\/invite/, 'post', station2request.requestInvite)
Mock.mock(/\/api\/request\/pageList/, 'post', station2request.requestPageList)
Mock.mock(/\/api\/request\/read/, 'post', station2request.requestRead)
Mock.mock(/\/api\/request\/tryInvite/, 'post', station2request.requestTryInvite)
Mock.mock(/\/api\/requestMsg\/save/, 'post', station2requestMsg.requestMsgSave)
Mock.mock(/\/api\/keyBorard\/cancel/, 'post', station2keyBorard.keyBorardCancel)
Mock.mock(/\/api\/keyBorard\/getCancelSmsCode/, 'get', station2keyBorard.keyBorardGetCancelSmsCode)
Mock.mock(/\/api\/keyBorard\/hasSelectGrateful/, 'get', station2keyBorard.keyBorardHasSelectGrateful)
Mock.mock(/\/api\/keyBorard\/listGratefulInfo/, 'get', station2keyBorard.keyBorardListGratefulInfo)
Mock.mock(/\/api\/keyBorard\/modifyAvatar/, 'post', station2keyBorard.keyBorardModifyAvatar)
Mock.mock(/\/api\/keyBorard\/modifyEmail/, 'post', station2keyBorard.keyBorardModifyEmail)
Mock.mock(/\/api\/keyBorard\/catInfo/, 'get', station2keyBorard.keyBorardCatInfo)
Mock.mock(/\/api\/keyBorard\/queryAppVersion/, 'get', station2keyBorard.keyBorardQueryAppVersion)
Mock.mock(/\/api\/keyBorard\/setDefaultDoor/, 'post', station2keyBorard.keyBorardSetDefaultDoor)
Mock.mock(/\/api\/keyBorard\/setIsApprove/, 'get', station2keyBorard.keyBorardSetIsApprove)
Mock.mock(/\/api\/keyBorard\/setIsBirdApprove/, 'get', station2keyBorard.keyBorardSetIsBirdApprove)
Mock.mock(/\/api\/keyBorard\/setIsNotice/, 'get', station2keyBorard.keyBorardSetIsNotice)
Mock.mock(/\/api\/keyBorard\/setRequestChannel/, 'post', station2keyBorard.keyBorardSetRequestChannel)
Mock.mock(/\/api\/keyBorardAttention\/remove/, 'get', station2keyBorardAttention.keyBorardAttentionRemove)
Mock.mock(/\/api\/keyBorardAttention\/save/, 'get', station2keyBorardAttention.keyBorardAttentionSave)
Mock.mock(
  /\/baseStation\/getDesktopAllByKeyBorardAndGrateful/,
  'post',
  station2baseStation.baseStationGetDesktopAllByKeyBorardAndGrateful
)
Mock.mock(/\/baseStation\/listWhiteByParent/, 'post', station2baseStation.baseStationListWhiteByParent)
Mock.mock(/\/baseStation\/listGratefulInfo/, 'post', station2baseStation.baseStationListGratefulInfo)
Mock.mock(/\/baseStation\/queryDoorAll/, 'post', station2baseStation.baseStationQueryDoorAll)
Mock.mock(/\/delete/, 'post', station2delete.deleteFn)
Mock.mock(/\/deleteAdmin/, 'post', station2deleteAdmin.deleteAdmin)
Mock.mock(/\/detail/, 'post', station2detail.detail)
Mock.mock(/\/existInBird/, 'post', station2existInBird.existInBird)
Mock.mock(/\/birdStatus/, 'post', station2birdStatus.birdStatus)
Mock.mock(/\/leaveBird/, 'post', station2leaveBird.leaveBird)
Mock.mock(/\/listAdmin/, 'get', station2listAdmin.listAdmin)
Mock.mock(/\/modifyRemark/, 'post', station2modifyRemark.modifyRemark)
Mock.mock(/\/pageList/, 'post', station2pageList.pageList)
Mock.mock(/\/save/, 'post', station2save.save)
Mock.mock(/\/saveAdmin/, 'post', station2saveAdmin.saveAdmin)
Mock.mock(/\/token\/addTokenToShangyunCache/, 'post', station2token.tokenAddTokenToShangyunCache)
Mock.mock(/\/token\/checkToken/, 'post', station2token.tokenCheckToken)
Mock.mock(/\/token\/removeSessionInShangyun/, 'post', station2token.tokenRemoveSessionInShangyun)
Mock.mock(/\/thk\/api\/common\/v1\/enum-info/, 'get', station3thk.thkApiCommonV1Enuminfo)
Mock.mock(/\/thk\/api\/common\/v1\/enum\/all/, 'get', station3thk.thkApiCommonV1EnumAll)
Mock.mock(/\/thk\/api\/sys-dict\/api\/common\/v1\/areaInfo/, 'get', station3thk.thkApiSysdictApiCommonV1AreaInfo)
Mock.mock(
  /\/thk\/api\/sys-dict\/api\/common\/v1\/certificationCertList/,
  'get',
  station3thk.thkApiSysdictApiCommonV1CertificationCertList
)
Mock.mock(
  /\/thk\/api\/sys-dict\/api\/common\/v1\/humanStatusList/,
  'get',
  station3thk.thkApiSysdictApiCommonV1HumanStatusList
)
Mock.mock(
  /\/thk\/api\/sys-dict\/api\/common\/v1\/siteManagementTasty/,
  'get',
  station3thk.thkApiSysdictApiCommonV1SiteManagementTasty
)
Mock.mock(
  /\/thk\/api\/sys-dict\/api\/common\/v1\/skilledWorkList/,
  'get',
  station3thk.thkApiSysdictApiCommonV1SkilledWorkList
)
Mock.mock(
  /\/thk\/api\/sys-dict\/api\/common\/v1\/specialWorkList/,
  'get',
  station3thk.thkApiSysdictApiCommonV1SpecialWorkList
)
Mock.mock(
  /\/thk\/api\/sys-dict\/api\/common\/v1\/thirdCertificationList/,
  'get',
  station3thk.thkApiSysdictApiCommonV1ThirdCertificationList
)
Mock.mock(
  /\/thk\/api\/sys-dict\/api\/common\/v1\/titleLevelList/,
  'get',
  station3thk.thkApiSysdictApiCommonV1TitleLevelList
)
Mock.mock(
  /\/thk\/api\/sys-dict\/v1\/getCertificateOfRegistration/,
  'get',
  station3thk.thkApiSysdictV1GetCertificateOfRegistration
)
Mock.mock(
  /\/thk\/api\/sys-dict\/v1\/getCertificateOfRegistrationLabelValue/,
  'get',
  station3thk.thkApiSysdictV1GetCertificateOfRegistrationLabelValue
)
Mock.mock(/\/thk\/api\/sys-dict\/v1\/getFridayQualification/, 'get', station3thk.thkApiSysdictV1GetFridayQualification)
Mock.mock(
  /\/thk\/api\/sys-dict\/v1\/getFridayQualificationWithCancel/,
  'get',
  station3thk.thkApiSysdictV1GetFridayQualificationWithCancel
)
Mock.mock(/\/thk\/api\/v1\/config\/continue-education/, 'post', station3thk.thkApiV1ConfigContinueeducationPost)
Mock.mock(/\/thk\/api\/v1\/config\/continue-education/, 'put', station3thk.thkApiV1ConfigContinueeducationPut)
Mock.mock(/\/thk\/api\/v1\/config\/continue-education\/page/, 'get', station3thk.thkApiV1ConfigContinueeducationPage)
Mock.mock(/\/thk\/api\/v1\/config\/continue-education\/.*/, 'delete', station3thk.thkApiV1ConfigContinueeducationId)
Mock.mock(/\/thk\/api\/v1\/config\/cred-alert\/need-alert/, 'get', station3thk.thkApiV1ConfigCredalertNeedalert)
Mock.mock(/\/thk\/api\/v1\/config\/cred-alert\/update/, 'put', station3thk.thkApiV1ConfigCredalertUpdate)
Mock.mock(/\/thk\/api\/v1\/config\/credential-standard/, 'post', station3thk.thkApiV1ConfigCredentialstandardPost)
Mock.mock(/\/thk\/api\/v1\/config\/credential-standard/, 'put', station3thk.thkApiV1ConfigCredentialstandardPut)
Mock.mock(
  /\/thk\/api\/v1\/config\/credential-standard\/export/,
  'get',
  station3thk.thkApiV1ConfigCredentialstandardExport
)
Mock.mock(
  /\/thk\/api\/v1\/config\/credential-standard\/export\/model/,
  'get',
  station3thk.thkApiV1ConfigCredentialstandardExportModel
)
Mock.mock(
  /\/thk\/api\/v1\/config\/credential-standard\/getDetail/,
  'get',
  station3thk.thkApiV1ConfigCredentialstandardGetDetail
)
Mock.mock(
  /\/thk\/api\/v1\/config\/credential-standard\/getQueryChain/,
  'post',
  station3thk.thkApiV1ConfigCredentialstandardGetQueryChain
)
Mock.mock(
  /\/thk\/api\/v1\/config\/credential-standard\/getRelativeList/,
  'post',
  station3thk.thkApiV1ConfigCredentialstandardGetRelativeList
)
Mock.mock(/\/thk\/api\/v1\/config\/credential-standard\/page/, 'get', station3thk.thkApiV1ConfigCredentialstandardPage)
Mock.mock(/\/thk\/api\/v1\/config\/credential-standard\/unit/, 'get', station3thk.thkApiV1ConfigCredentialstandardUnit)
Mock.mock(
  /\/thk\/api\/v1\/config\/credential-standard\/upload/,
  'post',
  station3thk.thkApiV1ConfigCredentialstandardUpload
)
Mock.mock(/\/thk\/api\/v1\/config\/credential-warning/, 'get', station3thk.thkApiV1ConfigCredentialwarningGet)
Mock.mock(/\/thk\/api\/v1\/config\/credential-warning/, 'post', station3thk.thkApiV1ConfigCredentialwarningPost)
Mock.mock(/\/thk\/api\/v1\/config\/credential-warning/, 'put', station3thk.thkApiV1ConfigCredentialwarningPut)
Mock.mock(/\/thk\/api\/v1\/data\/board\/fridayCredential/, 'get', station3thk.thkApiV1DataBoardFridayCredential)
Mock.mock(/\/thk\/api\/v1\/data\/board\/get\/date/, 'get', station3thk.thkApiV1DataBoardGetDate)
Mock.mock(/\/thk\/api\/v1\/data\/board\/get\/escalation/, 'get', station3thk.thkApiV1DataBoardGetEscalation)
Mock.mock(
  /\/thk\/api\/v1\/data\/board\/listQualificationCate/,
  'get',
  station3thk.thkApiV1DataBoardListQualificationCate
)
Mock.mock(/\/thk\/api\/v1\/friday\/bad\/behavior\/list/, 'get', station3thk.thkApiV1FridayBadBehaviorList)
Mock.mock(/\/thk\/api\/v1\/friday\/bad\/behavior\/page/, 'get', station3thk.thkApiV1FridayBadBehaviorPage)
Mock.mock(/\/thk\/api\/v1\/friday\/black\/list/, 'get', station3thk.thkApiV1FridayBlackList)
Mock.mock(/\/thk\/api\/v1\/friday\/black\/page/, 'get', station3thk.thkApiV1FridayBlackPage)
Mock.mock(
  /\/thk\/api\/v1\/friday\/branch\/export\/create-account-template/,
  'post',
  station3thk.thkApiV1FridayBranchExportCreateaccounttemplate
)
Mock.mock(/\/thk\/api\/v1\/friday\/branch\/page/, 'get', station3thk.thkApiV1FridayBranchPage)
Mock.mock(/\/thk\/api\/v1\/friday\/branch\/raw-branch/, 'get', station3thk.thkApiV1FridayBranchRawbranch)
Mock.mock(/\/thk\/api\/v1\/friday\/branch\/statusCount/, 'get', station3thk.thkApiV1FridayBranchStatusCount)
Mock.mock(
  /\/thk\/api\/v1\/friday\/branch\/update\/nameOrPhone/,
  'post',
  station3thk.thkApiV1FridayBranchUpdateNameOrPhone
)
Mock.mock(/\/thk\/api\/v1\/friday\/cred-plan\/all-cred/, 'get', station3thk.thkApiV1FridayCredplanAllcred)
Mock.mock(
  /\/thk\/api\/v1\/friday\/cred-plan\/available-apply-cred/,
  'get',
  station3thk.thkApiV1FridayCredplanAvailableapplycred
)
Mock.mock(/\/thk\/api\/v1\/friday\/cred-plan\/filtered-cred/, 'get', station3thk.thkApiV1FridayCredplanFilteredcred)
Mock.mock(/\/thk\/api\/v1\/friday\/cred-plan\/list/, 'get', station3thk.thkApiV1FridayCredplanList)
Mock.mock(/\/thk\/api\/v1\/friday\/cred-plan\/plan-detail/, 'get', station3thk.thkApiV1FridayCredplanPlandetail)
Mock.mock(/\/thk\/api\/v1\/friday\/cred-plan\/pre-level/, 'get', station3thk.thkApiV1FridayCredplanPrelevel)
Mock.mock(/\/thk\/api\/v1\/friday\/cred-plan\/save-plan/, 'post', station3thk.thkApiV1FridayCredplanSaveplan)
Mock.mock(/\/thk\/api\/v1\/friday\/cred-plan\/single-cred/, 'get', station3thk.thkApiV1FridayCredplanSinglecred)
Mock.mock(/\/thk\/api\/v1\/friday\/cred-plan\/start-plan/, 'post', station3thk.thkApiV1FridayCredplanStartplan)
Mock.mock(
  /\/thk\/api\/v1\/friday\/cred-plan\/validate-credit/,
  'post',
  station3thk.thkApiV1FridayCredplanValidatecredit
)
Mock.mock(/\/thk\/api\/v1\/friday\/cred-plan\/validate-tasty/, 'post', station3thk.thkApiV1FridayCredplanValidatetasty)
Mock.mock(
  /\/thk\/api\/v1\/friday\/cred-plan\/validate-project/,
  'post',
  station3thk.thkApiV1FridayCredplanValidateproject
)
Mock.mock(/\/thk\/api\/v1\/friday\/credential\/add/, 'post', station3thk.thkApiV1FridayCredentialAdd)
Mock.mock(/\/thk\/api\/v1\/friday\/credential\/cred-overview/, 'get', station3thk.thkApiV1FridayCredentialCredoverview)
Mock.mock(
  /\/thk\/api\/v1\/friday\/credential\/credential-nature/,
  'get',
  station3thk.thkApiV1FridayCredentialCredentialnature
)
Mock.mock(/\/thk\/api\/v1\/friday\/credential\/delete/, 'get', station3thk.thkApiV1FridayCredentialDelete)
Mock.mock(/\/thk\/api\/v1\/friday\/credential\/expire-alert/, 'get', station3thk.thkApiV1FridayCredentialExpirealert)
Mock.mock(
  /\/thk\/api\/v1\/friday\/credential\/get\/escalation/,
  'get',
  station3thk.thkApiV1FridayCredentialGetEscalation
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/credential\/get\/escalation\/tastyDetail/,
  'get',
  station3thk.thkApiV1FridayCredentialGetEscalationTastyDetail
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/credential\/get\/escalation2/,
  'get',
  station3thk.thkApiV1FridayCredentialGetEscalation2
)
Mock.mock(/\/thk\/api\/v1\/friday\/credential\/list/, 'get', station3thk.thkApiV1FridayCredentialList)
Mock.mock(/\/thk\/api\/v1\/friday\/credential\/list-name/, 'post', station3thk.thkApiV1FridayCredentialListname)
Mock.mock(/\/thk\/api\/v1\/friday\/credential\/page/, 'get', station3thk.thkApiV1FridayCredentialPage)
Mock.mock(/\/thk\/api\/v1\/friday\/credential\/update/, 'post', station3thk.thkApiV1FridayCredentialUpdate)
Mock.mock(/\/thk\/api\/v1\/friday\/credential\/update-batch/, 'post', station3thk.thkApiV1FridayCredentialUpdatebatch)
Mock.mock(
  /\/thk\/api\/v1\/friday\/dishonesty\/punishment\/list/,
  'get',
  station3thk.thkApiV1FridayDishonestyPunishmentList
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/dishonesty\/punishment\/page/,
  'get',
  station3thk.thkApiV1FridayDishonestyPunishmentPage
)
Mock.mock(/\/thk\/api\/v1\/friday\/good\/behavior\/list/, 'get', station3thk.thkApiV1FridayGoodBehaviorList)
Mock.mock(/\/thk\/api\/v1\/friday\/good\/behavior\/page/, 'get', station3thk.thkApiV1FridayGoodBehaviorPage)
Mock.mock(/\/thk\/api\/v1\/friday\/main\/all-count/, 'get', station3thk.thkApiV1FridayMainAllcount)
Mock.mock(
  /\/thk\/api\/v1\/friday\/main\/appPreviewFridayInfo/,
  'get',
  station3thk.thkApiV1FridayMainAppPreviewFridayInfo
)
Mock.mock(/\/thk\/api\/v1\/friday\/main\/appSaveFridayInfo/, 'get', station3thk.thkApiV1FridayMainAppSaveFridayInfo)
Mock.mock(/\/thk\/api\/v1\/friday\/main\/appSyncFriday/, 'get', station3thk.thkApiV1FridayMainAppSyncFriday)
Mock.mock(/\/thk\/api\/v1\/friday\/main\/get/, 'get', station3thk.thkApiV1FridayMainGet)
Mock.mock(
  /\/thk\/api\/v1\/friday\/main\/getInnerByTenantIdTest/,
  'get',
  station3thk.thkApiV1FridayMainGetInnerByTenantIdTest
)
Mock.mock(/\/thk\/api\/v1\/friday\/main\/ignore\/tenant\/get/, 'get', station3thk.thkApiV1FridayMainIgnoreTenantGet)
Mock.mock(/\/thk\/api\/v1\/friday\/main\/ignore\/tenant\/list/, 'get', station3thk.thkApiV1FridayMainIgnoreTenantList)
Mock.mock(/\/thk\/api\/v1\/friday\/main\/list/, 'get', station3thk.thkApiV1FridayMainList)
Mock.mock(
  /\/thk\/api\/v1\/friday\/main\/mulclaim\/human\/detail/,
  'get',
  station3thk.thkApiV1FridayMainMulclaimHumanDetail
)
Mock.mock(/\/thk\/api\/v1\/friday\/main\/page/, 'get', station3thk.thkApiV1FridayMainPage)
Mock.mock(/\/thk\/api\/v1\/friday\/main\/update/, 'put', station3thk.thkApiV1FridayMainUpdate)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/boss\/export/,
  'get',
  station3thk.thkApiV1FridayTastyCredentialBossExport
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/boss\/export\/attachment/,
  'get',
  station3thk.thkApiV1FridayTastyCredentialBossExportAttachment
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/boss\/page/,
  'get',
  station3thk.thkApiV1FridayTastyCredentialBossPage
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/curriculum\/vitae/,
  'get',
  station3thk.thkApiV1FridayTastyCredentialCurriculumVitae
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/curriculum\/vitae\/export/,
  'post',
  station3thk.thkApiV1FridayTastyCredentialCurriculumVitaeExport
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/curriculum\/vitae\/list/,
  'get',
  station3thk.thkApiV1FridayTastyCredentialCurriculumVitaeList
)
Mock.mock(/\/thk\/api\/v1\/friday\/tasty\/credential\/export/, 'get', station3thk.thkApiV1FridayTastyCredentialExport)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/export\/attachment/,
  'get',
  station3thk.thkApiV1FridayTastyCredentialExportAttachment
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/list\/human/,
  'get',
  station3thk.thkApiV1FridayTastyCredentialListHuman
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/list\/registerHuman/,
  'get',
  station3thk.thkApiV1FridayTastyCredentialListRegisterHuman
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/list\/safetyProduction/,
  'get',
  station3thk.thkApiV1FridayTastyCredentialListSafetyProduction
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/list\/unit/,
  'get',
  station3thk.thkApiV1FridayTastyCredentialListUnit
)
Mock.mock(/\/thk\/api\/v1\/friday\/tasty\/credential\/page/, 'get', station3thk.thkApiV1FridayTastyCredentialPage)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/pageFriday/,
  'post',
  station3thk.thkApiV1FridayTastyCredentialPageFriday
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/summary/,
  'post',
  station3thk.thkApiV1FridayTastyCredentialSummary
)
Mock.mock(
  /\/thk\/api\/v1\/friday\/tasty\/credential\/update\/mark/,
  'post',
  station3thk.thkApiV1FridayTastyCredentialUpdateMark
)
Mock.mock(/\/thk\/api\/v1\/friday\/tasty\/list/, 'get', station3thk.thkApiV1FridayTastyList)
Mock.mock(/\/thk\/api\/v1\/friday\/tasty\/page/, 'get', station3thk.thkApiV1FridayTastyPage)
Mock.mock(/\/thk\/api\/v1\/friday\/project\/get\/projectTypes/, 'get', station3thk.thkApiV1FridayProjectGetProjectTypes)
Mock.mock(/\/thk\/api\/v1\/friday\/project\/industry-major/, 'get', station3thk.thkApiV1FridayProjectIndustrymajor)
Mock.mock(/\/thk\/api\/v1\/friday\/project\/list/, 'get', station3thk.thkApiV1FridayProjectList)
Mock.mock(/\/thk\/api\/v1\/friday\/project\/page/, 'get', station3thk.thkApiV1FridayProjectPage)
Mock.mock(/\/thk\/api\/v1\/friday\/project\/project-stage/, 'get', station3thk.thkApiV1FridayProjectProjectstage)
Mock.mock(/\/thk\/api\/v1\/file\/ocrFromBigData/, 'post', station3thk.thkApiV1FileOcrFromBigData)
Mock.mock(/\/thk\/api\/v1\/file\/signedUrl/, 'post', station3thk.thkApiV1FileSignedUrl)
Mock.mock(/\/thk\/api\/v1\/tasty/, 'get', station3thk.thkApiV1TastyGet)
Mock.mock(/\/thk\/api\/v1\/tasty/, 'post', station3thk.thkApiV1TastyPost)
Mock.mock(/\/thk\/api\/v1\/tasty/, 'put', station3thk.thkApiV1TastyPut)
Mock.mock(/\/thk\/api\/v1\/tasty\/all/, 'get', station3thk.thkApiV1TastyAll)
Mock.mock(/\/thk\/api\/v1\/tasty\/all-count/, 'get', station3thk.thkApiV1TastyAllcount)
Mock.mock(/\/thk\/api\/v1\/tasty\/bank-record/, 'get', station3thk.thkApiV1TastyBankrecordGet)
Mock.mock(/\/thk\/api\/v1\/tasty\/bank-record/, 'post', station3thk.thkApiV1TastyBankrecordPost)
Mock.mock(/\/thk\/api\/v1\/tasty\/bank-record/, 'put', station3thk.thkApiV1TastyBankrecordPut)
Mock.mock(/\/thk\/api\/v1\/tasty\/bank-record\/.*/, 'delete', station3thk.thkApiV1TastyBankrecordId)
Mock.mock(
  /\/thk\/api\/v1\/tasty\/cred-upgrade\/condition-overview/,
  'get',
  station3thk.thkApiV1TastyCredupgradeConditionoverview
)
Mock.mock(
  /\/thk\/api\/v1\/tasty\/cred-upgrade\/exam-policy-notice/,
  'post',
  station3thk.thkApiV1TastyCredupgradeExampolicynotice
)
Mock.mock(
  /\/thk\/api\/v1\/tasty\/cred-upgrade\/exam-result-show/,
  'get',
  station3thk.thkApiV1TastyCredupgradeExamresultshow
)
Mock.mock(/\/thk\/api\/v1\/tasty\/cred-upgrade\/exam-time/, 'post', station3thk.thkApiV1TastyCredupgradeExamtime)
Mock.mock(/\/thk\/api\/v1\/tasty\/cred-upgrade\/up-recommend/, 'get', station3thk.thkApiV1TastyCredupgradeUprecommend)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential/, 'get', station3thk.thkApiV1TastyCredentialGet)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential/, 'post', station3thk.thkApiV1TastyCredentialPost)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential/, 'put', station3thk.thkApiV1TastyCredentialPut)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential-claim-log/, 'post', station3thk.thkApiV1TastyCredentialclaimlogPost)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential-claim-log/, 'put', station3thk.thkApiV1TastyCredentialclaimlogPut)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential-claim-log\/page/, 'get', station3thk.thkApiV1TastyCredentialclaimlogPage)
Mock.mock(
  /\/thk\/api\/v1\/tasty\/credential-claim-log\/validate/,
  'get',
  station3thk.thkApiV1TastyCredentialclaimlogValidate
)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential-claim-log\/.*/, 'delete', station3thk.thkApiV1TastyCredentialclaimlogId)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential-project/, 'get', station3thk.thkApiV1TastyCredentialproject)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential-project\/save/, 'post', station3thk.thkApiV1TastyCredentialprojectSave)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential\/batch/, 'post', station3thk.thkApiV1TastyCredentialBatch)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential\/cancel/, 'post', station3thk.thkApiV1TastyCredentialCancel)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential\/claim/, 'post', station3thk.thkApiV1TastyCredentialClaim)
Mock.mock(
  /\/thk\/api\/v1\/tasty\/credential\/continue-education/,
  'get',
  station3thk.thkApiV1TastyCredentialContinueeducation
)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential\/count/, 'get', station3thk.thkApiV1TastyCredentialCount)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential\/count-info/, 'get', station3thk.thkApiV1TastyCredentialCountinfo)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential\/credentials/, 'get', station3thk.thkApiV1TastyCredentialCredentials)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential\/page/, 'get', station3thk.thkApiV1TastyCredentialPage)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential\/register/, 'get', station3thk.thkApiV1TastyCredentialRegister)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential\/register-info/, 'get', station3thk.thkApiV1TastyCredentialRegisterinfo)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential\/request/, 'get', station3thk.thkApiV1TastyCredentialRequest)
Mock.mock(
  /\/thk\/api\/v1\/tasty\/credential\/uploadCertificateBatch/,
  'get',
  station3thk.thkApiV1TastyCredentialUploadCertificateBatch
)
Mock.mock(/\/thk\/api\/v1\/tasty\/credential\/.*/, 'delete', station3thk.thkApiV1TastyCredentialId)
Mock.mock(/\/thk\/api\/v1\/tasty\/education/, 'get', station3thk.thkApiV1TastyEducationGet)
Mock.mock(/\/thk\/api\/v1\/tasty\/education/, 'post', station3thk.thkApiV1TastyEducationPost)
Mock.mock(/\/thk\/api\/v1\/tasty\/education/, 'put', station3thk.thkApiV1TastyEducationPut)
Mock.mock(/\/thk\/api\/v1\/tasty\/education\/batch/, 'post', station3thk.thkApiV1TastyEducationBatch)
Mock.mock(/\/thk\/api\/v1\/tasty\/education\/school/, 'get', station3thk.thkApiV1TastyEducationSchool)
Mock.mock(/\/thk\/api\/v1\/tasty\/education\/.*/, 'delete', station3thk.thkApiV1TastyEducationId)
Mock.mock(/\/thk\/api\/v1\/tasty\/family/, 'get', station3thk.thkApiV1TastyFamilyGet)
Mock.mock(/\/thk\/api\/v1\/tasty\/family/, 'post', station3thk.thkApiV1TastyFamilyPost)
Mock.mock(/\/thk\/api\/v1\/tasty\/introduction/, 'get', station3thk.thkApiV1TastyIntroduction)
Mock.mock(/\/thk\/api\/v1\/tasty\/project/, 'post', station3thk.thkApiV1TastyProjectPost)
Mock.mock(/\/thk\/api\/v1\/tasty\/project/, 'put', station3thk.thkApiV1TastyProjectPut)
Mock.mock(/\/thk\/api\/v1\/tasty\/project-claim-log\/page/, 'get', station3thk.thkApiV1TastyProjectclaimlogPage)
Mock.mock(/\/thk\/api\/v1\/tasty\/project\/batch/, 'post', station3thk.thkApiV1TastyProjectBatch)
Mock.mock(/\/thk\/api\/v1\/tasty\/project\/cancel/, 'post', station3thk.thkApiV1TastyProjectCancel)
Mock.mock(/\/thk\/api\/v1\/tasty\/project\/claim/, 'post', station3thk.thkApiV1TastyProjectClaim)
Mock.mock(/\/thk\/api\/v1\/tasty\/project\/page/, 'get', station3thk.thkApiV1TastyProjectPage)
Mock.mock(/\/thk\/api\/v1\/tasty\/project\/professional/, 'get', station3thk.thkApiV1TastyProjectProfessional)
Mock.mock(/\/thk\/api\/v1\/tasty\/project\/projects/, 'get', station3thk.thkApiV1TastyProjectProjects)
Mock.mock(
  /\/thk\/api\/v1\/tasty\/project\/queryProjectByIdAbdName/,
  'get',
  station3thk.thkApiV1TastyProjectQueryProjectByIdAbdName
)
Mock.mock(/\/thk\/api\/v1\/tasty\/project\/.*/, 'delete', station3thk.thkApiV1TastyProjectId)
Mock.mock(/\/thk\/api\/v1\/tasty\/tool\/majorInEducation/, 'get', station3thk.thkApiV1TastyToolMajorInEducation)
Mock.mock(/\/thk\/api\/v1\/tasty\/work-history/, 'get', station3thk.thkApiV1TastyWorkhistoryGet)
Mock.mock(/\/thk\/api\/v1\/tasty\/work-history/, 'post', station3thk.thkApiV1TastyWorkhistoryPost)
Mock.mock(/\/thk\/api\/v1\/tasty\/work-history/, 'put', station3thk.thkApiV1TastyWorkhistoryPut)
Mock.mock(/\/thk\/api\/v1\/tasty\/work-history\/batch/, 'post', station3thk.thkApiV1TastyWorkhistoryBatch)
Mock.mock(/\/thk\/api\/v1\/tasty\/work-history\/.*/, 'delete', station3thk.thkApiV1TastyWorkhistoryId)
Mock.mock(/\/thk\/api\/v1\/tasty\/.*/, 'delete', station3thk.thkApiV1TastyId)
Mock.mock(/\/thk\/api\/v1\/store\/social-insurance/, 'get', station3thk.thkApiV1StoreSocialinsuranceGet)
Mock.mock(/\/thk\/api\/v1\/store\/social-insurance/, 'post', station3thk.thkApiV1StoreSocialinsurancePost)
Mock.mock(/\/thk\/api\/v1\/store\/social-insurance/, 'put', station3thk.thkApiV1StoreSocialinsurancePut)
Mock.mock(/\/thk\/api\/v1\/store\/social-insurance\/.*/, 'delete', station3thk.thkApiV1StoreSocialinsuranceId)
Mock.mock(/\/thk\/api\/v1\/store\/student-info/, 'get', station3thk.thkApiV1StoreStudentinfoGet)
Mock.mock(/\/thk\/api\/v1\/store\/student-info/, 'post', station3thk.thkApiV1StoreStudentinfoPost)
Mock.mock(/\/thk\/api\/v1\/store\/student-info/, 'put', station3thk.thkApiV1StoreStudentinfoPut)
Mock.mock(/\/thk\/api\/v1\/store\/student-info\/.*/, 'delete', station3thk.thkApiV1StoreStudentinfoId)
Mock.mock(/\/thk\/test\/export-branch/, 'get', station3thk.thkTestExportbranch)
Mock.mock(/\/thk\/test\/export-excel/, 'get', station3thk.thkTestExportexcel)
Mock.mock(/\/thk\/test\/merge/, 'post', station3thk.thkTestMerge)
Mock.mock(/\/thk\/test\/test1/, 'get', station3thk.thkTestTest1)
Mock.mock(/\/thk\/test\/test2/, 'get', station3thk.thkTestTest2)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/api\/common\/v1\/areaInfo/,
  'get',
  station4swagger4Apijs.sysdictApiCommonV1AreaInfo
)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/api\/common\/v1\/certificationCertList/,
  'get',
  station4swagger4Apijs.sysdictApiCommonV1CertificationCertList
)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/api\/common\/v1\/humanStatusList/,
  'get',
  station4swagger4Apijs.sysdictApiCommonV1HumanStatusList
)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/api\/common\/v1\/siteManagementTasty/,
  'get',
  station4swagger4Apijs.sysdictApiCommonV1SiteManagementTasty
)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/api\/common\/v1\/skilledWorkList/,
  'get',
  station4swagger4Apijs.sysdictApiCommonV1SkilledWorkList
)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/api\/common\/v1\/specialWorkList/,
  'get',
  station4swagger4Apijs.sysdictApiCommonV1SpecialWorkList
)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/api\/common\/v1\/thirdCertificationList/,
  'get',
  station4swagger4Apijs.sysdictApiCommonV1ThirdCertificationList
)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/api\/common\/v1\/titleLevelList/,
  'get',
  station4swagger4Apijs.sysdictApiCommonV1TitleLevelList
)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/v1\/getCertificateOfRegistration/,
  'get',
  station4swagger4Apijs.sysdictV1GetCertificateOfRegistration
)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/v1\/getCertificateOfRegistrationLabelValue/,
  'get',
  station4swagger4Apijs.sysdictV1GetCertificateOfRegistrationLabelValue
)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/v1\/getFridayQualification/,
  'get',
  station4swagger4Apijs.sysdictV1GetFridayQualification
)
Mock.mock(
  /\/prefix\/thk\/api\/sys-dict\/v1\/getFridayQualificationWithCancel/,
  'get',
  station4swagger4Apijs.sysdictV1GetFridayQualificationWithCancel
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/continue-education/,
  'post',
  station4swagger4Apijs.v1ConfigContinueeducationPost
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/continue-education/,
  'put',
  station4swagger4Apijs.v1ConfigContinueeducationPut
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/continue-education\/page/,
  'get',
  station4swagger4Apijs.v1ConfigContinueeducationPage
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/continue-education\/.*/,
  'delete',
  station4swagger4Apijs.v1ConfigContinueeducationId
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/cred-alert\/need-alert/,
  'get',
  station4swagger4Apijs.v1ConfigCredalertNeedalert
)
Mock.mock(/\/prefix\/thk\/api\/v1\/config\/cred-alert\/update/, 'put', station4swagger4Apijs.v1ConfigCredalertUpdate)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-standard/,
  'post',
  station4swagger4Apijs.v1ConfigCredentialstandardPost
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-standard/,
  'put',
  station4swagger4Apijs.v1ConfigCredentialstandardPut
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-standard\/export/,
  'get',
  station4swagger4Apijs.v1ConfigCredentialstandardExport
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-standard\/export\/model/,
  'get',
  station4swagger4Apijs.v1ConfigCredentialstandardExportModel
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-standard\/getQueryChain/,
  'post',
  station4swagger4Apijs.v1ConfigCredentialstandardGetQueryChain
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-standard\/getRelativeList/,
  'post',
  station4swagger4Apijs.v1ConfigCredentialstandardGetRelativeList
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-standard\/page/,
  'get',
  station4swagger4Apijs.v1ConfigCredentialstandardPage
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-standard\/unit/,
  'get',
  station4swagger4Apijs.v1ConfigCredentialstandardUnit
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-standard\/upload/,
  'post',
  station4swagger4Apijs.v1ConfigCredentialstandardUpload
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-warning/,
  'get',
  station4swagger4Apijs.v1ConfigCredentialwarningGet
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-warning/,
  'post',
  station4swagger4Apijs.v1ConfigCredentialwarningPost
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/config\/credential-warning/,
  'put',
  station4swagger4Apijs.v1ConfigCredentialwarningPut
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/data\/board\/fridayCredential/,
  'get',
  station4swagger4Apijs.v1DataBoardFridayCredential
)
Mock.mock(/\/prefix\/thk\/api\/v1\/data\/board\/get\/date/, 'get', station4swagger4Apijs.v1DataBoardGetDate)
Mock.mock(/\/prefix\/thk\/api\/v1\/data\/board\/get\/escalation/, 'get', station4swagger4Apijs.v1DataBoardGetEscalation)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/data\/board\/listQualificationCate/,
  'get',
  station4swagger4Apijs.v1DataBoardListQualificationCate
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/bad\/behavior\/list/, 'get', station4swagger4Apijs.v1FridayBadBehaviorList)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/bad\/behavior\/page/, 'get', station4swagger4Apijs.v1FridayBadBehaviorPage)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/black\/list/, 'get', station4swagger4Apijs.v1FridayBlackList)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/black\/page/, 'get', station4swagger4Apijs.v1FridayBlackPage)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/branch\/export\/create-account-template/,
  'post',
  station4swagger4Apijs.v1FridayBranchExportCreateaccounttemplate
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/branch\/page/, 'get', station4swagger4Apijs.v1FridayBranchPage)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/branch\/raw-branch/, 'get', station4swagger4Apijs.v1FridayBranchRawbranch)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/branch\/statusCount/, 'get', station4swagger4Apijs.v1FridayBranchStatusCount)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/branch\/update\/nameOrPhone/,
  'post',
  station4swagger4Apijs.v1FridayBranchUpdateNameOrPhone
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/cred-plan\/all-cred/, 'get', station4swagger4Apijs.v1FridayCredplanAllcred)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/cred-plan\/available-apply-cred/,
  'get',
  station4swagger4Apijs.v1FridayCredplanAvailableapplycred
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/cred-plan\/filtered-cred/,
  'get',
  station4swagger4Apijs.v1FridayCredplanFilteredcred
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/cred-plan\/list/, 'get', station4swagger4Apijs.v1FridayCredplanList)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/cred-plan\/plan-detail/,
  'get',
  station4swagger4Apijs.v1FridayCredplanPlandetail
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/cred-plan\/pre-level/, 'get', station4swagger4Apijs.v1FridayCredplanPrelevel)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/cred-plan\/save-plan/,
  'post',
  station4swagger4Apijs.v1FridayCredplanSaveplan
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/cred-plan\/single-cred/,
  'get',
  station4swagger4Apijs.v1FridayCredplanSinglecred
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/cred-plan\/start-plan/,
  'post',
  station4swagger4Apijs.v1FridayCredplanStartplan
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/cred-plan\/validate-credit/,
  'post',
  station4swagger4Apijs.v1FridayCredplanValidatecredit
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/cred-plan\/validate-tasty/,
  'post',
  station4swagger4Apijs.v1FridayCredplanValidatetasty
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/cred-plan\/validate-project/,
  'post',
  station4swagger4Apijs.v1FridayCredplanValidateproject
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/credential\/add/, 'post', station4swagger4Apijs.v1FridayCredentialAdd)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/credential\/cred-overview/,
  'get',
  station4swagger4Apijs.v1FridayCredentialCredoverview
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/credential\/credential-nature/,
  'get',
  station4swagger4Apijs.v1FridayCredentialCredentialnature
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/credential\/delete/, 'get', station4swagger4Apijs.v1FridayCredentialDelete)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/credential\/expire-alert/,
  'get',
  station4swagger4Apijs.v1FridayCredentialExpirealert
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/credential\/get\/escalation/,
  'get',
  station4swagger4Apijs.v1FridayCredentialGetEscalation
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/credential\/get\/escalation\/tastyDetail/,
  'get',
  station4swagger4Apijs.v1FridayCredentialGetEscalationTastyDetail
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/credential\/get\/escalation2/,
  'get',
  station4swagger4Apijs.v1FridayCredentialGetEscalation2
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/credential\/list/, 'get', station4swagger4Apijs.v1FridayCredentialList)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/credential\/list-name/,
  'post',
  station4swagger4Apijs.v1FridayCredentialListname
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/credential\/page/, 'get', station4swagger4Apijs.v1FridayCredentialPage)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/credential\/update/, 'post', station4swagger4Apijs.v1FridayCredentialUpdate)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/credential\/update-batch/,
  'post',
  station4swagger4Apijs.v1FridayCredentialUpdatebatch
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/dishonesty\/punishment\/list/,
  'get',
  station4swagger4Apijs.v1FridayDishonestyPunishmentList
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/dishonesty\/punishment\/page/,
  'get',
  station4swagger4Apijs.v1FridayDishonestyPunishmentPage
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/good\/behavior\/list/, 'get', station4swagger4Apijs.v1FridayGoodBehaviorList)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/good\/behavior\/page/, 'get', station4swagger4Apijs.v1FridayGoodBehaviorPage)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/main\/all-count/, 'get', station4swagger4Apijs.v1FridayMainAllcount)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/main\/appPreviewFridayInfo/,
  'get',
  station4swagger4Apijs.v1FridayMainAppPreviewFridayInfo
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/main\/appSaveFridayInfo/,
  'get',
  station4swagger4Apijs.v1FridayMainAppSaveFridayInfo
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/main\/appSyncFriday/, 'get', station4swagger4Apijs.v1FridayMainAppSyncFriday)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/main\/get/, 'get', station4swagger4Apijs.v1FridayMainGet)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/main\/getInnerByTenantIdTest/,
  'get',
  station4swagger4Apijs.v1FridayMainGetInnerByTenantIdTest
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/main\/ignore\/tenant\/get/,
  'get',
  station4swagger4Apijs.v1FridayMainIgnoreTenantGet
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/main\/ignore\/tenant\/list/,
  'get',
  station4swagger4Apijs.v1FridayMainIgnoreTenantList
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/main\/list/, 'get', station4swagger4Apijs.v1FridayMainList)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/main\/mulclaim\/human\/detail/,
  'get',
  station4swagger4Apijs.v1FridayMainMulclaimHumanDetail
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/main\/page/, 'get', station4swagger4Apijs.v1FridayMainPage)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/main\/update/, 'put', station4swagger4Apijs.v1FridayMainUpdate)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/boss\/export/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialBossExport
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/boss\/export\/attachment/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialBossExportAttachment
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/boss\/page/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialBossPage
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/curriculum\/vitae/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialCurriculumVitae
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/curriculum\/vitae\/export/,
  'post',
  station4swagger4Apijs.v1FridayTastyCredentialCurriculumVitaeExport
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/curriculum\/vitae\/list/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialCurriculumVitaeList
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/export/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialExport
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/export\/attachment/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialExportAttachment
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/list\/human/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialListHuman
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/list\/registerHuman/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialListRegisterHuman
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/list\/safetyProduction/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialListSafetyProduction
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/list\/unit/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialListUnit
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/page/,
  'get',
  station4swagger4Apijs.v1FridayTastyCredentialPage
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/pageFriday/,
  'post',
  station4swagger4Apijs.v1FridayTastyCredentialPageFriday
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/summary/,
  'post',
  station4swagger4Apijs.v1FridayTastyCredentialSummary
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/tasty\/credential\/update\/mark/,
  'post',
  station4swagger4Apijs.v1FridayTastyCredentialUpdateMark
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/tasty\/list/, 'get', station4swagger4Apijs.v1FridayTastyList)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/tasty\/page/, 'get', station4swagger4Apijs.v1FridayTastyPage)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/project\/get\/projectTypes/,
  'get',
  station4swagger4Apijs.v1FridayProjectGetProjectTypes
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/project\/industry-major/,
  'get',
  station4swagger4Apijs.v1FridayProjectIndustrymajor
)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/project\/list/, 'get', station4swagger4Apijs.v1FridayProjectList)
Mock.mock(/\/prefix\/thk\/api\/v1\/friday\/project\/page/, 'get', station4swagger4Apijs.v1FridayProjectPage)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/friday\/project\/project-stage/,
  'get',
  station4swagger4Apijs.v1FridayProjectProjectstage
)
Mock.mock(/\/prefix\/thk\/api\/v1\/file\/ocrFromBigData/, 'post', station4swagger4Apijs.v1FileOcrFromBigData)
Mock.mock(/\/prefix\/thk\/api\/v1\/file\/signedUrl/, 'post', station4swagger4Apijs.v1FileSignedUrl)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty/, 'get', station4swagger4Apijs.v1TastyGet)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty/, 'post', station4swagger4Apijs.v1TastyPost)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty/, 'put', station4swagger4Apijs.v1TastyPut)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/all/, 'get', station4swagger4Apijs.v1TastyAll)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/all-count/, 'get', station4swagger4Apijs.v1TastyAllcount)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/bank-record/, 'get', station4swagger4Apijs.v1TastyBankrecordGet)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/bank-record/, 'post', station4swagger4Apijs.v1TastyBankrecordPost)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/bank-record/, 'put', station4swagger4Apijs.v1TastyBankrecordPut)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/bank-record\/.*/, 'delete', station4swagger4Apijs.v1TastyBankrecordId)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/cred-upgrade\/condition-overview/,
  'get',
  station4swagger4Apijs.v1TastyCredupgradeConditionoverview
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/cred-upgrade\/exam-policy-notice/,
  'post',
  station4swagger4Apijs.v1TastyCredupgradeExampolicynotice
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/cred-upgrade\/exam-result-show/,
  'get',
  station4swagger4Apijs.v1TastyCredupgradeExamresultshow
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/cred-upgrade\/exam-time/,
  'post',
  station4swagger4Apijs.v1TastyCredupgradeExamtime
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/cred-upgrade\/up-recommend/,
  'get',
  station4swagger4Apijs.v1TastyCredupgradeUprecommend
)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential/, 'get', station4swagger4Apijs.v1TastyCredentialGet)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential/, 'post', station4swagger4Apijs.v1TastyCredentialPost)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential/, 'put', station4swagger4Apijs.v1TastyCredentialPut)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/credential-claim-log/,
  'post',
  station4swagger4Apijs.v1TastyCredentialclaimlogPost
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/credential-claim-log/,
  'put',
  station4swagger4Apijs.v1TastyCredentialclaimlogPut
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/credential-claim-log\/page/,
  'get',
  station4swagger4Apijs.v1TastyCredentialclaimlogPage
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/credential-claim-log\/validate/,
  'get',
  station4swagger4Apijs.v1TastyCredentialclaimlogValidate
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/credential-claim-log\/.*/,
  'delete',
  station4swagger4Apijs.v1TastyCredentialclaimlogId
)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential-project/, 'get', station4swagger4Apijs.v1TastyCredentialproject)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/credential-project\/save/,
  'post',
  station4swagger4Apijs.v1TastyCredentialprojectSave
)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential\/batch/, 'post', station4swagger4Apijs.v1TastyCredentialBatch)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential\/cancel/, 'post', station4swagger4Apijs.v1TastyCredentialCancel)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential\/claim/, 'post', station4swagger4Apijs.v1TastyCredentialClaim)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/credential\/continue-education/,
  'get',
  station4swagger4Apijs.v1TastyCredentialContinueeducation
)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential\/count/, 'get', station4swagger4Apijs.v1TastyCredentialCount)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/credential\/count-info/,
  'get',
  station4swagger4Apijs.v1TastyCredentialCountinfo
)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/credential\/credentials/,
  'get',
  station4swagger4Apijs.v1TastyCredentialCredentials
)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential\/page/, 'get', station4swagger4Apijs.v1TastyCredentialPage)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential\/register/, 'get', station4swagger4Apijs.v1TastyCredentialRegister)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/credential\/register-info/,
  'get',
  station4swagger4Apijs.v1TastyCredentialRegisterinfo
)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential\/request/, 'get', station4swagger4Apijs.v1TastyCredentialRequest)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/credential\/uploadCertificateBatch/,
  'get',
  station4swagger4Apijs.v1TastyCredentialUploadCertificateBatch
)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/credential\/.*/, 'delete', station4swagger4Apijs.v1TastyCredentialId)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/education/, 'get', station4swagger4Apijs.v1TastyEducationGet)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/education/, 'post', station4swagger4Apijs.v1TastyEducationPost)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/education/, 'put', station4swagger4Apijs.v1TastyEducationPut)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/education\/batch/, 'post', station4swagger4Apijs.v1TastyEducationBatch)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/education\/school/, 'get', station4swagger4Apijs.v1TastyEducationSchool)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/education\/.*/, 'delete', station4swagger4Apijs.v1TastyEducationId)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/family/, 'get', station4swagger4Apijs.v1TastyFamilyGet)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/family/, 'post', station4swagger4Apijs.v1TastyFamilyPost)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/introduction/, 'get', station4swagger4Apijs.v1TastyIntroduction)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/project/, 'post', station4swagger4Apijs.v1TastyProjectPost)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/project/, 'put', station4swagger4Apijs.v1TastyProjectPut)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/project-claim-log\/page/,
  'get',
  station4swagger4Apijs.v1TastyProjectclaimlogPage
)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/project\/batch/, 'post', station4swagger4Apijs.v1TastyProjectBatch)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/project\/cancel/, 'post', station4swagger4Apijs.v1TastyProjectCancel)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/project\/claim/, 'post', station4swagger4Apijs.v1TastyProjectClaim)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/project\/page/, 'get', station4swagger4Apijs.v1TastyProjectPage)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/project\/professional/,
  'get',
  station4swagger4Apijs.v1TastyProjectProfessional
)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/project\/projects/, 'get', station4swagger4Apijs.v1TastyProjectProjects)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/project\/queryProjectByIdAbdName/,
  'get',
  station4swagger4Apijs.v1TastyProjectQueryProjectByIdAbdName
)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/project\/.*/, 'delete', station4swagger4Apijs.v1TastyProjectId)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/tasty\/tool\/majorInEducation/,
  'get',
  station4swagger4Apijs.v1TastyToolMajorInEducation
)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/work-history/, 'get', station4swagger4Apijs.v1TastyWorkhistoryGet)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/work-history/, 'post', station4swagger4Apijs.v1TastyWorkhistoryPost)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/work-history/, 'put', station4swagger4Apijs.v1TastyWorkhistoryPut)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/work-history\/batch/, 'post', station4swagger4Apijs.v1TastyWorkhistoryBatch)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/work-history\/.*/, 'delete', station4swagger4Apijs.v1TastyWorkhistoryId)
Mock.mock(/\/prefix\/thk\/api\/v1\/tasty\/.*/, 'delete', station4swagger4Apijs.v1TastyId)
Mock.mock(/\/prefix\/thk\/api\/v1\/store\/social-insurance/, 'get', station4swagger4Apijs.v1StoreSocialinsuranceGet)
Mock.mock(/\/prefix\/thk\/api\/v1\/store\/social-insurance/, 'post', station4swagger4Apijs.v1StoreSocialinsurancePost)
Mock.mock(/\/prefix\/thk\/api\/v1\/store\/social-insurance/, 'put', station4swagger4Apijs.v1StoreSocialinsurancePut)
Mock.mock(
  /\/prefix\/thk\/api\/v1\/store\/social-insurance\/.*/,
  'delete',
  station4swagger4Apijs.v1StoreSocialinsuranceId
)
Mock.mock(/\/prefix\/thk\/api\/v1\/store\/student-info/, 'get', station4swagger4Apijs.v1StoreStudentinfoGet)
Mock.mock(/\/prefix\/thk\/api\/v1\/store\/student-info/, 'post', station4swagger4Apijs.v1StoreStudentinfoPost)
Mock.mock(/\/prefix\/thk\/api\/v1\/store\/student-info/, 'put', station4swagger4Apijs.v1StoreStudentinfoPut)
Mock.mock(/\/prefix\/thk\/api\/v1\/store\/student-info\/.*/, 'delete', station4swagger4Apijs.v1StoreStudentinfoId)
Mock.mock(/\/prefix\/thk\/test\/export-branch/, 'get', station4swagger4Apijs.thkTestExportbranch)
Mock.mock(/\/prefix\/thk\/test\/export-excel/, 'get', station4swagger4Apijs.thkTestExportexcel)
Mock.mock(/\/prefix\/thk\/test\/merge/, 'post', station4swagger4Apijs.thkTestMerge)
Mock.mock(/\/prefix\/thk\/test\/test1/, 'get', station4swagger4Apijs.thkTestTest1)
Mock.mock(/\/prefix\/thk\/test\/test2/, 'get', station4swagger4Apijs.thkTestTest2)
Mock.mock(/\/emo-center\/api\/enterprise\/list/, 'get', station5emocenter.emocenterApiEnterpriseList)
Mock.mock(
  /\/emo-center\/api\/feeRule\/getCooperateTypeIdsByFeeId/,
  'get',
  station5emocenter.emocenterApiFeeRuleGetCooperateTypeIdsByFeeId
)
Mock.mock(
  /\/emo-center\/api\/admin\/jobCategory\/byParentIds/,
  'get',
  station5emocenter.emocenterApiAdminJobCategoryByParentIds
)
Mock.mock(/\/api\/happyPlan\/addCustomer/, 'get', station5happyPlan.happyPlanAddCustomer)
