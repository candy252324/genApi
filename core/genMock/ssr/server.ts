import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'
import { IParsered } from '../../types'

/** ssr 服务 */
export function ssrServer(allApiData: IParsered[], res) {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  })
  const app = createApp(allApiData)
  // app.mount('#app')
  renderToString(app).then((html) => {
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <link ref="icon' href="/static/favicon.ico">
          <title>mock</title>
        </head>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        <script type="module" src="/static/client.js"></script>
        <body>
          <div style="margin:20px">mock服务启动成功！🚀🚀🚀</div>
          <div id="app">${html}</div>
        </body>
      </html>
      `)
  })
}
