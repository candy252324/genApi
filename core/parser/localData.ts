import fs from 'node:fs'
import { saveDataToLocal, readDataFromLocal } from '../utils'
import { PARSERED_DATA_LOCAL_PATH, USER_CONFIG_LOCAL_PATH } from '../constant'
import { IParsered } from '../types'

/** 将解析后的数据保存到本地 */
export function saveParseredDataToLocal(data: any) {
  saveDataToLocal(PARSERED_DATA_LOCAL_PATH, data)
}
/** 从本地读取解析后的数据 */
export function getParseredDataFromLocal(): IParsered[] {
  try {
    const dataStr = readDataFromLocal(PARSERED_DATA_LOCAL_PATH)
    return JSON.parse(dataStr)
  } catch (error) {
    return []
  }
}

/** 将config配置文件路径存储到本地 */
export function saveConfigPathToLocal(configPath: string) {
  // 数据追加
  if (fs.existsSync(USER_CONFIG_LOCAL_PATH)) {
    const dataStr = readDataFromLocal(USER_CONFIG_LOCAL_PATH) // 本地所有用户配置
    const obj = dataStr ? JSON.parse(dataStr) : {}
    obj['configPath'] = configPath
    saveDataToLocal(USER_CONFIG_LOCAL_PATH, obj)
  }
  // 文件新增
  else {
    saveDataToLocal(USER_CONFIG_LOCAL_PATH, { configPath })
  }
}

/** 从本地读取config配置文件路径*/
export function getConfigPathFromLoal(): string {
  try {
    const dataStr = readDataFromLocal(USER_CONFIG_LOCAL_PATH)
    const obj = JSON.parse(dataStr)
    return obj['configPath']
  } catch (error) {
    return ''
  }
}
