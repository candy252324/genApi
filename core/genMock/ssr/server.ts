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
            <script type="module" src="/static/client.js"></script>
            <body>
                本地mock服务已启动！
                <div id="app">${html}</div>
            </body>
        </html>
        `)
  })
}
