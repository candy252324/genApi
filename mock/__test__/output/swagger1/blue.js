import {
  ApiResponseQueryAccInfoResp,
  ApiResponsestring,
  ApiResponseboolean,
  ApiResponseListZhiXieChangChuXing,
  ApiResponseComPageZhiXieChangChuXing,
} from './_interfaces'
import Mock from 'better-mock'

/** 账号信息 */
export const blueAccQueryAcc = () => Mock.mock(ApiResponseQueryAccInfoResp())

/** 加入帽子 */
export const blueDoorAddDoor = () => Mock.mock(ApiResponsestring())

/** 创建制鞋厂 */
export const blueDoorCreateDoor = () => Mock.mock(ApiResponseboolean())

/** 喇叭花是否加入/拥有制鞋厂 */
export const blueDoorListKeyBorardDoorGet = () => Mock.mock(ApiResponseboolean())

/** 出行喇叭花制鞋厂甬道 */
export const blueDoorListKeyBorardDoorPost = () => Mock.mock(ApiResponseListZhiXieChangChuXing())

/** 分页出行全部制鞋厂甬道 */
export const blueDoorPageAllDoor = () => Mock.mock(ApiResponseComPageZhiXieChangChuXing())
