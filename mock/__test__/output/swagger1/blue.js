import {
  ApiResponseQueryAccInfoResp,
  ApiResponsestring,
  ApiResponseboolean,
  ApiResponseListZhiXieChangChuXing,
  ApiResponseComPageZhiXieChangChuXing,
} from './_interfaces'
import Mock from 'mockjs'

/** 账号信息 */
export const blueAccQueryAcc = () => ApiResponseQueryAccInfoResp()

/** 加入帽子 */
export const blueDoorAddDoor = () => ApiResponsestring()

/** 创建制鞋厂 */
export const blueDoorCreateDoor = () => ApiResponseboolean()

/** 喇叭花是否加入/拥有制鞋厂 */
export const blueDoorListKeyBorardDoorGet = () => ApiResponseboolean()

/** 出行喇叭花制鞋厂甬道 */
export const blueDoorListKeyBorardDoorPost = () => ApiResponseListZhiXieChangChuXing()

/** 分页出行全部制鞋厂甬道 */
export const blueDoorPageAllDoor = () => ApiResponseComPageZhiXieChangChuXing()
