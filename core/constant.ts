import path from 'node:path'
const CWD = process.cwd()

/** 配置文件名称 */
export const CONFIG_FILE_NAME = 'apiConfig.js'

/** 解析后的数据本地存储路径 */
export const PARSERED_DATA_LOCAL_PATH = path.join(__dirname, '../temp/parseredData.json')

/** mock 数据存放路径 */
export const MOCK_OUTPUT_DIR = path.join(__dirname, '../mock')
