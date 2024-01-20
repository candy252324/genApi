// app.js (在服务器和客户端之间共享)
import { createSSRApp } from 'vue'
import { IParsered } from '../../types'

export function createApp(allApiData: IParsered[]) {
  return createSSRApp({
    data: () => ({ allApiData }),
    methods: {
      getColor(method: string) {
        switch (method) {
          case 'get':
            return '#50cc61' // 绿
          case 'post':
            return '#2196f3' // 蓝
          case 'delete':
            return '#da5656' // 红
          default:
            return '#9e9e9e' // 灰
        }
      },
    },
    template: `
      <div v-for="(item,index) in allApiData" :key="index">
        <h2>{{item.swaggerUrl}}</h2>
        <div v-for="(api,idx) in item.apis" :key="idx" style="
          display: flex;
          align-items: center;
          margin:4px;
          border-radius: 2px;
          color: #333;
          font-size: 14px;
        ">
          <span 
            style="
              margin-right:8px;
              padding: 4px 8px;             
              color: #fff;
              border-radius: 4px
            "
            :style="{'background-color':getColor(api.method)}"
          >{{api.method}}</span>
          <a v-if="api.method==='get'" :href="api.url">{{api.url}}</a>
          <span v-else>
            {{api.url}}
          </span>
        </div>
      </div>
    `,
  })
}
