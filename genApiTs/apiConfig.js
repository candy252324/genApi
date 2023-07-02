module.exports = {
  httpFn: 'Http', // 封装的 axios 请求方法
  httpTpl: `
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'`, // 文件头部引入内容
  apiList: [
    {
      swaggerUrl: './testData/swagger1.json',
      outputDir: '/outputTs/swagger1', // 输出到哪个目录中
      tag: true, // 是否生成
      prefix: '', // 前缀, 如 /abc, 则生成的接口将是  Http.post('/abc/xxx/xxx')
      pageModelName: ['ComPage', 'Page'], // 后端封装的分页类名称
      // ignore: /\/basePlatform\/|\/test\//, // 路径中带 /basePlatform/ 和 /test/ 的接口不用生成
    },
    // {
    //   swaggerUrl: './testData/swagger2.json',
    //   outputDir: '/outputTs/swagger2',
    //   tag: true,
    //   prefix: '',
    //   pageModelName: ['ComPage', 'Page'],
    // },
    {
      swaggerUrl: './testData/swagger3.json',
      outputDir: '/outputTs/swagger3',
      tag: true,
      prefix: '',
      pageModelName: 'ComPage',
    },
    {
      swaggerUrl: './testData/swagger4.json',
      outputDir: '/outputTs/swagger4',
      tag: true,
      prefix: '',
      pageModelName: 'ComPage',
    },
  ],
}
