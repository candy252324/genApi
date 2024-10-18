import fs from 'node:fs'
import log from 'npmlog'
import { DEFAULT_CONFIG_PATH } from '../core/constant'
import { saveConfigPathToLocal } from '../core/parser/localData'
import { apiConfigTpl_ts, apiConfigTpl_js } from './template'
import { writeAndPrettify } from '../core/utils'

/**
 * 初始化配置文件
 * @param force 强制覆盖本地配置文件
 */
export function init(options) {
  const configFilePath = DEFAULT_CONFIG_PATH['ts'] // 默认生成 ts 配置文件
  const existConfPath = Object.values(DEFAULT_CONFIG_PATH).find((confPath) => fs.existsSync(confPath))

  // 强制初始化，覆盖本地 apiconfig
  if (options?.force) {
    writeConfigFile(existConfPath || configFilePath)
  } else {
    if (existConfPath) {
      log.warn('本地已经存在配置文件, 如需覆盖，请添加 --force 参数')
    } else {
      writeConfigFile(configFilePath)
    }
  }
}

/** 将 apiconfig 写入到本地 */
async function writeConfigFile(configFilePath) {
  try {
    const ext = configFilePath.split('.').pop() // 后缀 ts or js
    writeAndPrettify(configFilePath, ext === 'ts' ? apiConfigTpl_ts : apiConfigTpl_js)
    saveConfigPathToLocal(configFilePath)
    log.success('配置文件创建成功')
  } catch (error) {
    log.error('配置文件创建失败', error)
  }
}
