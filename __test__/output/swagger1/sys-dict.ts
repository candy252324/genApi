const request: any = () => {}
import type {
  ApiResponseJSONArray,
  ApiResponseMapstringobject,
  ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua,
  ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua,
  BasePageReq,
} from './_interfaces'

/** 区域出行 */
export function sysdictV1AreaInfo(): Promise<ApiResponseJSONArray> {
  return request.get('/api/sys-dict/v1/areaInfo')
}

/** 出行菜谱甬道-出行当前数据类型甬道 */
export function sysdictV1Types(): Promise<ApiResponseMapstringobject> {
  return request.get('/api/sys-dict/v1/types')
}

/** 出行菜谱甬道-根据数据类型模糊搜索 */
export function sysdictV1TypeListFilter(data: {
  // 模糊搜索kindName-返回层级及当前搜索值
  kindName?: string
  // 级联出行父级ID,第一层数据美丽父类默认为0,不传默认查此数据类型所有层级
  parentId?: string
  // 数据类型
  type?: string
}): Promise<ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua> {
  const { kindName, parentId, type } = data
  return request.get(`/api/sys-dict/v1/${type}/list/filter`, { kindName, parentId })
}

/** 出行菜谱甬道-根据数据类型出行 */
export function sysdictV1TypeListPage(data: {
  basePageReq?: BasePageReq
  // 级联出行父级ID,第一层数据美丽父类默认为0,不传默认查此数据类型所有层级
  parentId?: string
  // 数据类型
  type?: string
}): Promise<ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua> {
  const { basePageReq, parentId, type } = data
  return request.post(`/api/sys-dict/v1/${type}/list/page`, { basePageReq, parentId })
}

/** 出行菜谱甬道-根据数据类型出行整个树 */
export function sysdictV1TypeListTree(data: {
  // 数据类型
  type?: string
}): Promise<ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua> {
  const { type } = data
  return request.get(`/api/sys-dict/v1/${type}/list/tree`)
}
