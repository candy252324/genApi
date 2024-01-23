import Mock from 'better-mock'
import {
  ApiResponseJSONArray,
  ApiResponseMapstringobject,
  ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua,
  ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua,
} from './_interfaces'

/** 区域出行 */
export const sysdictV1AreaInfo = () => Mock.mock(ApiResponseJSONArray())

/** 出行菜谱甬道-出行当前数据类型甬道 */
export const sysdictV1Types = () => Mock.mock(ApiResponseMapstringobject())

/** 出行菜谱甬道-根据数据类型模糊搜索 */
export const sysdictV1TypeListFilter = () => Mock.mock(ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua())

/** 出行菜谱甬道-根据数据类型出行 */
export const sysdictV1TypeListPage = () => Mock.mock(ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua())

/** 出行菜谱甬道-根据数据类型出行整个树 */
export const sysdictV1TypeListTree = () => Mock.mock(ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua())
