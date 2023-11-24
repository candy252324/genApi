import fs from 'node:fs'
import path from 'node:path'
import { CONFIG_FILE_NAME } from '../constant'
import { apiConfigTpl } from './template'

const CWD = process.cwd()

/**
 * 初始化配置文件
 * @param force 强制覆盖本地配置文件
 */
export function init(options) {
  const configFilePath = path.join(CWD, CONFIG_FILE_NAME)
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
