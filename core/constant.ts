import path from 'node:path'
const CWD = process.cwd()

/** 配置文件名称 */
export const CONFIG_FILE_NAME = 'apiConfig.js'

/** 默认的配置文件路径 */
export const DEFAULT_CONFIG_PATH = path.join(CWD, CONFIG_FILE_NAME)

/** 解析后的数据本地存储路径 */
export const PARSERED_DATA_LOCAL_PATH = path.join(__dirname, '../temp/parseredData.json')

/** 用户配置的本地存储路径 */
export const USER_CONFIG_LOCAL_PATH = path.join(__dirname, '../temp/userConfig.json')

/** mock 服务默认端口号 */
export const MOCK_SERVER_PORT = 8090
