import { type UserConfig } from '../core/types'

const config: UserConfig = {
  apiList: [
    {
      swaggerUrl: './__test__/json/swagger1.json',
      outputDir: './__test__/output/swagger1',
    },
    {
      swaggerUrl: './__test__/json/swagger2.json',
      outputDir: './__test__/output/swagger2',
      exclude: '',
    },
    {
      swaggerUrl: './__test__/json/swagger3.json',
      outputDir: './__test__/output/swagger3',
    },
    {
      swaggerUrl: './__test__/json/swagger4.json',
      outputDir: './__test__/output/swagger4',
      exclude: /\/abc\/|\/test\//, // 路径带 /abc/ 和 /test/ 的接口不生成
    },
    {
      swaggerUrl: './__test__/json/swagger5.json',
      outputDir: './__test__/output/swagger5',
    },
    {
      swaggerUrl: './__test__/json/swagger5.json',
      outputDir: './__test__/output/swagger5-js',
      httpTpl: 'const myRequest=()=>{}',
      exclude: [/thk\/api\/common\/v1\/enum/, '/thk/api/v1/config/credential-standard/getDetail'],
      // exclude: [/credential-standard/],
      fileExt: 'js', // 生成 js 文件
      fileName: () => {
        return 'swagger5Api-js'
      },
      // 添加前缀
      pathRewrite: ({ url }) => {
        return `/prefix${url}`
      },
      // 自定义接口名称生成规则
      apiName: ({ url, method, defaultApiName }) => {
        // thkApiSysdictApiCommonV1AreaInfo => sysdictApiCommonV1AreaInfo
        return defaultApiName.replace('thkApi', '').replace(/^\S/, (s) => s.toLowerCase())
      },

      apiBody: ({ url, method, summary, name, parameters, pstr3 }) => {
        const quotationMark = pstr3 ? '`' : "'"
        const data = !!parameters.length ? 'data' : ''
        return `
        /** ${summary || '后端没写注释'} */
        export function ${name}  (${data}){
          ${pstr3 ? pstr3 : ''}
          return myRequest.${method}(${quotationMark}${url}${quotationMark}, ${data})
        }`
      },
    },
    {
      swaggerUrl: './__test__/json/mess.json',
      outputDir: './__test__/output/mess',
    },
  ],
  httpTpl: 'const request:any=()=>{}', // 文件头部引入内容
  apiBody: ({ url, method, summary, name, parameters, outputInterface, pstr1, pstr2, pstr3 }) => {
    const quotationMark = pstr3 ? '`' : "'"
    return `
        /** ${summary || '无注释'} */
        export function ${name}  (${pstr1}) :Promise<${outputInterface || undefined}>{
          ${pstr3 ? pstr3 : ''}
          return request.${method}(${quotationMark}${url}${quotationMark}, ${pstr2})
        }`
  },
  // 是否生成 mock 数据
  // mock: false,
  mock: {
    port: 8088,
    // rewrite: (path) => `/event-center${path}`,
    /** 自定义 mock 生成规则 */
    fieldRules: {
      // 完全匹配，值为数字
      code: 200,
      // 完全匹配，值为字符串
      size: '20',
      // 完全匹配，值为mock字符串
      created: '@datetime',
      // 完全匹配，值为函数
      total: () => {
        return +this.size * 10 || 100
      },
      // 正则匹配，值为mock字符串
      '/url/': '@url',
      // 正则匹配，值为正则, 若不期望生成空字符串，去除末尾的竖线即可
      '/ApplyType|applyType/': /FORWARD|REPLY|/,
    },
  },
}

export default config
