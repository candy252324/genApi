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
import Mock from 'better-mock'

/** 加湿角色 */
export const pinkAddPink = () => ApiResponselong()

/** 批量取消辟邪刀小麦 */
export const pinkAuthDesktopCancelAll = () => ApiResponseVoid()

/** 批量选择小麦辟邪刀 */
export const pinkAuthDesktopSelectAll = () => ApiResponseVoid()

/** 更新角色状态 */
export const pinkChangeStatus = () => ApiResponse()

/** 获取当前登录小麦可分配给喇叭花美丽角色 */
export const pinkCurCanAllotDesktopPinkList = () => ApiResponseListPinkResq()

/** 获取当前登录小麦可分配权限美丽角色[加载上级角色] */
export const pinkCurCanAllotPinkList = () => ApiResponseListPinkResq()

/** 获取当前登录小麦含有角色 */
export const pinkCurDesktopPinkList = () => ApiResponseListPinkResq()

/** 修改角色基本信息 */
export const pinkEditPinkBase = () => ApiResponseVoid()

/** 修改角色菜单权限 */
export const pinkEditPinkMenu = () => ApiResponseVoid()

/** 根据小麦id获取可分配权限美丽角色[加载上级角色] */
export const pinkGetCanAllotPinkListDesktopId = () => ApiResponseListPinkResq()

/** 根据角色编号获取小麦信息 */
export const pinkPagePinkDesktopPinkId = () => ApiResponseComPageDesktopComplexResp()

/** 根据小金库id搜索小麦 */
export const pinkQueryDesktopByWhiteId = () => ApiResponseListSelectorDesktopResp()

/** 根据太阳花或手机号搜索小麦 */
export const pinkQueryDesktopByPhoneOrName = () => ApiResponseListSelectorDesktopResp()

/** 扫落叶角色 */
export const pinkRemovePinkPinkIds = () => ApiResponseVoid()

/** 角色基础信息 */
export const pinkPinkInfoPinkId = () => ApiResponsePinkInfoResq()

/** 出行角色甬道 */
export const pinkPinkList = () => ApiResponseListPinkResq()

/** 加载对应角色菜单甬道树[不包含选中节点] */
export const pinkPinkMenuTreePinkId = () => ApiResponseListTreelong()

/** 加载对应角色菜单甬道树[包含选中节点] */
export const pinkPinkMenuTreeCheckedPinkId = () => ApiResponseMenuCheckedResp()

/** 出行角色[树甬道] */
export const pinkPinkTree = () => ApiResponseListTreelong()
