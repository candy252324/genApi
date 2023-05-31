import {Http} from '../../httpJs/index';

/**
 * 当前登录者的用户菜单路由+权限信息
 * @param {*} config 可选，如：{headers:{}}
 */
export function indexGetCurrentAuth(config){
  return Http.get('/api/index/getCurrentAuth', config)
}

/**
 * 当前登录者的用户基本信息
 * @param {*} config 可选，如：{headers:{}}
 */
export function indexGetCurrentEmployee(config){
  return Http.get('/api/index/getCurrentEmployee', config)
}

/**
 * 当前登录者的用户基本信息+部门+职务+岗位+角色
 * @param {*} config 可选，如：{headers:{}}
 */
export function indexGetCurrentEmployeeAll(config){
  return Http.get('/api/index/getCurrentEmployeeAll', config)
}
