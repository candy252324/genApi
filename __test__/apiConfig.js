module.exports = {
  apiList: [
    {
      swaggerUrl: './__test__/json/swagger1.json',
      outputDir: './__test__/output/swagger1',
      tag: false,
    },
    {
      swaggerUrl: './__test__/json/swagger2.json',
      outputDir: './__test__/output/swagger2',
      tag: false,
      ignore: '',
    },
    {
      swaggerUrl: './__test__/json/swagger3.json',
      outputDir: './__test__/output/swagger3',
      tag: false,
      apiBody: ({ url, method, summary, name, parameters, outputInterface, pstr1, pstr2 }) => {
        const _name = url.startsWith('/api') ? `api${name}` : name
        return `
          /** ${summary || '无注释'} */
          export function ${_name}  (${pstr1}) :Promise<${outputInterface || undefined}>{
            return request.${method}('${url}', ${pstr2})
          }`
      },
    },
    {
      swaggerUrl: './__test__/json/swagger4.json',
      outputDir: './__test__/output/swagger4',
      tag: false,
      ignore: /\/abc\/|\/test\//, // 路径带 /abc/ 和 /test/ 的接口不生成
    },
    {
      swaggerUrl: './__test__/json/swagger5.json',
      outputDir: './__test__/output/swagger5',
      tag: true,
      ignore: /\/test\//, // 路径带 /abc/ 和 /test/ 的接口不生成
      // 配置接口所属文件名称
      fileName: ({ url }) => {
        return 'swagger5Api' // 所有的api都放在这个文件里
      },
      apiBody: ({ url, method, summary, name, parameters, outputInterface, pstr1, pstr2 }) => {
        return `
        /** ${summary || '无注释'} */
        export function ${name}${upperCaseFirseLetter(method)}  (${pstr1}) :Promise<${outputInterface || undefined}>{
          return request.${method}('${url}', ${pstr2})
        }`
      },
    },
  ],
  httpTpl: 'const request:any=()=>{}', // 文件头部引入内容
  /**
   * @param url 接口路径
   * @param method 请求方法，小写的，如：get, post
   * @param summary 后端写的注释
   * @param name 接口名称，由接口路径处理得到， 如：/api/variable/create 处理成 variableCreate
   * @param parameters 接口入参,格式： [{in:"body",type:"IUserModel"},{in:"query",type:string}]
   * @param outputInterface 出参interface
   * @param pstr1 由 parameters 处理得到的
   * @param pstr2 由 parameters 处理得到的
   */
  apiBody: ({ url, method, summary, name, parameters, outputInterface, pstr1, pstr2 }) => {
    return `
      /** ${summary || '无注释'} */
      export function ${name}  (${pstr1}) :Promise<${outputInterface || undefined}>{
        return request.${method}('${url}', ${pstr2})
      }`
  },
}
/** 首字母大写 */
function upperCaseFirseLetter(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}
