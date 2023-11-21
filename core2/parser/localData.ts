import { saveDataToLocal, readDataFromLocal } from '../utils'
import { PARSERED_DATA_LOCAL_PATH } from '../constant'

/** 将解析后的数据保存到本地 */
export function saveParseredDataToLocal(data: any) {
  saveDataToLocal(PARSERED_DATA_LOCAL_PATH, data)
}
/** 从本地读取解析后的数据 */
export function getParseredDataFromLocal() {
  return readDataFromLocal(PARSERED_DATA_LOCAL_PATH)
}
