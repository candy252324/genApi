const fs = require('fs')
const path = require('path')

const { CONFIG_FILE_NAME } = require('../constant')
const apiConfigTpl = require('./template').apiConfig
const CWD = process.cwd()
const log = console.log

/**
 * 初始化配置文件
 * @param force 强制覆盖本地配置文件
 */
function init(options) {
  const configFilePath = path.join(CWD, CONFIG_FILE_NAME)
  // 强制初始化，覆盖本地 apiconfig
  if (options.force) {
    writeConfigFile(configFilePath)
  } else {
    if (fs.existsSync(configFilePath)) {
      log('本地已经存在配置文件, 如需覆盖，请执行 genapi --force')
    } else {
      writeConfigFile(configFilePath)
    }
  }
}

/** 将 apiconfig 写入到本地 */
function writeConfigFile(configFilePath) {
  fs.writeFile(configFilePath, apiConfigTpl, (err) => {
    if (err) {
      log('配置文件创建失败', err)
    } else {
      log('配置文件创建成功')
    }
  })
}

module.exports = {
  init,
}
