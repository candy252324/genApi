import fs from 'node:fs'
import { DEFAULT_CONFIG_PATH } from '../core/constant'
import { apiConfigTpl } from './template'

/**
 * 初始化配置文件
 * @param force 强制覆盖本地配置文件
 */
export function init(options) {
  const configFilePath = DEFAULT_CONFIG_PATH
  // 强制初始化，覆盖本地 apiconfig
  if (options?.force) {
    writeConfigFile(configFilePath)
  } else {
    if (fs.existsSync(configFilePath)) {
      console.log('本地已经存在配置文件, 如需覆盖，请执行 genapi --force')
    } else {
      writeConfigFile(configFilePath)
    }
  }
}

/** 将 apiconfig 写入到本地 */
function writeConfigFile(configFilePath) {
  fs.writeFile(configFilePath, apiConfigTpl, (err) => {
    if (err) {
      console.log('配置文件创建失败', err)
    } else {
      console.log('配置文件创建成功')
    }
  })
}
