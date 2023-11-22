// const { genApi } = require('../core/genApi/index')
// const { genMock } = require('../core/genMock/index')

// const apiConfig = require('./apiConfig')
// // genApi(apiConfig) // 生成api
// genMock(apiConfig) // 生成mock

const apiConfig = require('./apiConfig')
const { parser, genApi } = require('../dist/index')
parser(apiConfig).then((parseredData) => {
  genApi(parseredData)
})
