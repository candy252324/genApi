const apiConfig = require('./apiConfig')
const { parser, genApi, genMock, init } = require('../dist/index')

parser(apiConfig).then((parseredData) => {
  genApi(parseredData)
  if (apiConfig.mock !== false) {
    genMock(parseredData, apiConfig.mock)
  }
})

// init()
