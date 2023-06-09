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
      excludeBigModel: '', // 不需要生成的 interface ，这个类型最终不会生成在_interface中，如 ApiResponse
      // ignore: /\/basePlatform\/|\/test\//, // 路径中带 /basePlatform/ 和 /test/ 的接口不用生成
    },
    // {
    //   swaggerUrl: './testData/swagger2.json',
    //   outputDir: '/outputTs/swagger2',
    //   tag: true,
    //   prefix: '',
    //   excludeBigModel: '',
    // },
    {
      swaggerUrl: './testData/swagger3.json',
      outputDir: '/outputTs/swagger3',
      tag: true,
      prefix: '',
      excludeBigModel: '',
    },
    {
      swaggerUrl: './testData/swagger4.json',
      outputDir: '/outputTs/swagger4',
      tag: true,
      prefix: '',
      excludeBigModel: '',
    },




    
    // 不生成 bigmodel 的
    {
      swaggerUrl: './testData/swagger1.json',
      outputDir: '/outputTs/swagger1_without_bigmodel', // 输出到哪个目录中
      tag: true, // 是否生成
      prefix: '', // 前缀, 如 /abc, 则生成的接口将是  Http.post('/abc/xxx/xxx')
      excludeBigModel: 'ApiResponse', // 不需要生成的 interface ，这个类型最终不会生成在_interface中，如 ApiResponse
      // ignore: /\/basePlatform\/|\/test\//, // 路径中带 /basePlatform/ 和 /test/ 的接口不用生成
    },
    // {
    //   swaggerUrl: './testData/swagger2.json',
    //   outputDir: '/outputTs/swagger2',
    //   tag: true,
    //   prefix: '',
    //   excludeBigModel: 'ApiResponse',
    // },
    {
      swaggerUrl: './testData/swagger3.json',
      outputDir: '/outputTs/swagger3_without_bigmodel',
      tag: true,
      prefix: '',
      excludeBigModel: 'ApiResponse',
    },
    {
      swaggerUrl: './testData/swagger4.json',
      outputDir: '/outputTs/swagger4_without_bigmodel',
      tag: true,
      prefix: '',
      excludeBigModel: 'ApiResponse',
    },
  ],
}
