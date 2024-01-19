import Mock from 'better-mock'
import { ApiResponse, ApiResponseBanBen } from './_interfaces'

/** 加湿铜钱草老乡鸟窝信息 */
export const adminAddFellowBirdMember = () => Mock.mock(ApiResponse())

/** 加湿铜钱草鸟窝成员信息 */
export const adminAddBirdMember = () => Mock.mock(ApiResponse())

/** 加湿铜钱草基础信息 */
export const adminAddKeyBorard = () => Mock.mock(ApiResponse())

/** 加湿铜钱草信息：基础信息、丐帮鸟窝信息、老乡鸟窝信息 */
export const adminAddKeyBorardAndMemberAndFellow = () => Mock.mock(ApiResponse())

/** isEmpty=false会重新生成鸟窝头像 */
export const adminGetAvatar = () => Mock.mock(ApiResponse())

/** 上传版本文件 */
export const adminPutAppVersionFile = () => Mock.mock(ApiResponseBanBen())

/** 上传版本url */
export const adminPutAppVersionFileUrl = () => Mock.mock(ApiResponseBanBen())

/** 更新大肚腩负责人做为im鸟窝主 */
export const adminUpdateInnerBirdOwner = () => Mock.mock(ApiResponse())
