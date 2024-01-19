const commonTpl = `
{
  apiList: [
    {
      swaggerUrl: '', // swagger json 的 url 或 本地swagger.json相对根目录的路径
      outputDir: '/src/api', // 输出到哪个目录中
      gen: true, // 是否生成
      exclude: '', 
    },
  ],
  httpTpl: "import request from './request/index'", // 文件头部引入内容
  apiBody: ({ url, method, summary, name, parameters, outputInterface, pstr1, pstr2, pstr3 }) => {
    const quotation = pstr3 ? '\`' : "'"; // 引号类型
    return \`
    /** \${summary || '无注释'} */
    export function \${name}  (\${pstr1}) :Promise<\${outputInterface || undefined}>{
      \${pstr3 ? pstr3 : ''}
      return Http.\${method}(\${quotation}\${url}\${quotation}, \${pstr2})
    }\`
  },
}
`

export const apiConfigTpl_ts = `
// ts ts
module.exports = ${commonTpl}
`

export const apiConfigTpl_js = `module.exports = ${commonTpl}`
