import Mock from 'better-mock'
import {
  ApiResponselong,
  ApiResponseVoid,
  ApiResponse,
  ApiResponseListPinkResq,
  ApiResponseComPageDesktopComplexResp,
  ApiResponseListSelectorDesktopResp,
  ApiResponsePinkInfoResq,
  ApiResponseListTreelong,
  ApiResponseMenuCheckedResp,
} from './_interfaces'

/** 加湿角色 */
export const pinkAddPink = () => Mock.mock(ApiResponselong())

/** 批量取消辟邪刀小麦 */
export const pinkAuthDesktopCancelAll = () => Mock.mock(ApiResponseVoid())

/** 批量选择小麦辟邪刀 */
export const pinkAuthDesktopSelectAll = () => Mock.mock(ApiResponseVoid())

/** 更新角色状态 */
export const pinkChangeStatus = () => Mock.mock(ApiResponse())

/** 获取当前登录小麦可分配给喇叭花美丽角色 */
export const pinkCurCanAllotDesktopPinkList = () => Mock.mock(ApiResponseListPinkResq())

/** 获取当前登录小麦可分配权限美丽角色[加载上级角色] */
export const pinkCurCanAllotPinkList = () => Mock.mock(ApiResponseListPinkResq())

/** 获取当前登录小麦含有角色 */
export const pinkCurDesktopPinkList = () => Mock.mock(ApiResponseListPinkResq())

/** 修改角色基本信息 */
export const pinkEditPinkBase = () => Mock.mock(ApiResponseVoid())

/** 修改角色菜单权限 */
export const pinkEditPinkMenu = () => Mock.mock(ApiResponseVoid())

/** 根据小麦id获取可分配权限美丽角色[加载上级角色] */
export const pinkGetCanAllotPinkListDesktopId = () => Mock.mock(ApiResponseListPinkResq())

/** 根据角色编号获取小麦信息 */
export const pinkPagePinkDesktopPinkId = () => Mock.mock(ApiResponseComPageDesktopComplexResp())

/** 根据小金库id搜索小麦 */
export const pinkQueryDesktopByWhiteId = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 根据太阳花或手机号搜索小麦 */
export const pinkQueryDesktopByPhoneOrName = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 扫落叶角色 */
export const pinkRemovePinkPinkIds = () => Mock.mock(ApiResponseVoid())

/** 角色基础信息 */
export const pinkPinkInfoPinkId = () => Mock.mock(ApiResponsePinkInfoResq())

/** 出行角色甬道 */
export const pinkPinkList = () => Mock.mock(ApiResponseListPinkResq())

/** 加载对应角色菜单甬道树[不包含选中节点] */
export const pinkPinkMenuTreePinkId = () => Mock.mock(ApiResponseListTreelong())

/** 加载对应角色菜单甬道树[包含选中节点] */
export const pinkPinkMenuTreeCheckedPinkId = () => Mock.mock(ApiResponseMenuCheckedResp())

/** 出行角色[树甬道] */
export const pinkPinkTree = () => Mock.mock(ApiResponseListTreelong())
