// interface UserInfo<U> {
//   /** 姓名 */
//   name: U
//   /** 年龄 */
//   age: number
// }
// interface Data<T, UserInfo> {
//   /** 时间 */
//   time: T
//   /** 用户信息 */
//   userInfo: UserInfo
// }

// let foo: Data<number, UserInfo<string>> = {
//   time: 23,
//   userInfo: {
//     name: 'abc',
//     age: 20,
//   },
// }

import { apiGroupMemberDeleteAdmin } from './outputTs/swagger3/groupMember'
import {wygtechcrmApiBusinessEditBusinessProject} from './outputTs/swagger4/wygtech-crm'

apiGroupMemberDeleteAdmin({
  pageSize: 1,
  pageIndex: 2,
  query: '',
}).then((res) => {
  console.log(res)
})

const res1 = await apiGroupMemberDeleteAdmin({
  pageSize: 1,
  pageIndex: 2,
  query: '',
})
console.log(res1.data.data)

const res2 = await wygtechcrmApiBusinessEditBusinessProject({})
console.log(res2.data.code)