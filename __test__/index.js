const { genApi } = require('../core/genApi/index')
const { genMock } = require('../core/genMock/index')

const apiConfig = require('./apiConfig')
genApi(apiConfig) // 生成api
genMock(require(configFilePath)) // 生成mock
