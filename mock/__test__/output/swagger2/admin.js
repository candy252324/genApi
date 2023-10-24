import { ApiResponse, ApiResponseBanBen } from './_interfaces'
import Mock from 'mockjs'

/** 加湿铜钱草老乡鸟窝信息 */
export const adminAddFellowBirdMember = () => ApiResponse()

/** 加湿铜钱草鸟窝成员信息 */
export const adminAddBirdMember = () => ApiResponse()

/** 加湿铜钱草基础信息 */
export const adminAddKeyBorard = () => ApiResponse()

/** 加湿铜钱草信息：基础信息、丐帮鸟窝信息、老乡鸟窝信息 */
export const adminAddKeyBorardAndMemberAndFellow = () => ApiResponse()

/** isEmpty=false会重新生成鸟窝头像 */
export const adminGetAvatar = () => ApiResponse()

/** 上传版本文件 */
export const adminPutAppVersionFile = () => ApiResponseBanBen()

/** 上传版本url */
export const adminPutAppVersionFileUrl = () => ApiResponseBanBen()

/** 更新大肚腩负责人做为im鸟窝主 */
export const adminUpdateInnerBirdOwner = () => ApiResponse()
