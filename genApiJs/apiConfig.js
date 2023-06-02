module.exports = {
  httpFn: 'Http', // 封装的 axios 请求方法
  httpTpl: "import {Http} from '../../httpJs/index';", // 文件头部引入内容
  apiList: [
    {
      swaggerUrl: './testData/swagger1.json', // 相对根目录的路径
      outputDir: '/outputJs/swagger1.js', // 输出到哪个目录中
      tag: true, // 是否生成
      prefix: '', // 前缀, 如 /abc, 则生成的接口将是  Http.post('/abc/xxx/xxx')
      ignore: /\/basePlatform\/|\/test\//, // 路径中带 /basePlatform/ 和 /test/ 的接口不用生成
    },
  ],
}
