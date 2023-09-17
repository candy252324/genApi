module.exports = {
  apiConfig: `module.exports = {
  apiList: [
    {
      swaggerUrl: '', // swagger json 的 url 或 本地swagger.json相对根目录的路径
      outputDir: '/src/api', // 输出到哪个目录中
      tag: true, // 是否生成
      ignore: '', // 无需生成的接口，如配置成 ignore: /\\/abcDef\\/|\\/test\\// ， 则路径中带 /abcDef/ 和 /test/ 的接口将不会生成
    },
  ],
  httpTpl: "import request from './request/index'", // 文件头部引入内容
  /**
   * @param url 接口路径
   * @param method 请求方法，小写的，如：get, post
   * @param summary 后端写的注释
   * @param name 接口名称，由接口路径处理得到， 如：/api/user/create 处理成 userCreate
   * @param parameters 接口入参,格式： [{in:"body",type:"IUserModel"},{in:"query",type:string}]
   * @param outputInterface 出参interface
   * @param pstr1 由 parameters 处理得到的
   * @param pstr2 由 parameters 处理得到的
   */
  apiBody: ({ url, method, summary, name, parameters, outputInterface, pstr1, pstr2 }) => {
    return \`
    /** \${summary || '无注释'} */
    export function \${name}  (\${pstr1}) :Promise<\${outputInterface || undefined}>{
      return request.\${method}('\${url}', \${pstr2})
    }\`
  },
}
`,
}
