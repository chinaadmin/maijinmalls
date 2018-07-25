import { asyncRouterMap, constantRouterMap } from '@/router'
import http from '@/utils/http'
import { loginByUsername, logout, getUserInfo, querySystem, rPermissionsTable } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import menuDataFactory from '@/store/modules/menuDataFactory'
import Cookies from 'js-cookie'
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
	if(route.meta && route.meta.roles) {
		return roles.some(role => route.meta.roles.indexOf(role) >= 0)
	} else {
		return true
	}
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
	const accessedRouters = asyncRouterMap.filter(route => {
		if(hasPermission(roles, route)) {
			if(route.children && route.children.length) {
				route.children = filterAsyncRouter(route.children, roles)
			}
			return true
		}
		return false
	})
	return accessedRouters
}

const permission = {
	state: {
		//routers: constantRouterMap,
		routers: [],
		addRouters: [],
		myrouter:"",
	},
	mutations: {
		SET_TOKEN: (state, routersmy) => {
			state.routersmy = routersmy
		},
		SET_ROUTERS: (state, routers) => {
			state.routers = routers;

		},
		SET_MYROUTER: (state, myrouter) => {
			state.myrouter = myrouter;

		}
	},
	actions: {
		GenerateRoutes({
			commit
		}, data) {
			return new Promise(resolve => {
				const {
					roles
				} = data
				let accessedRouters
				if(roles.indexOf('admin') >= 0) {
					accessedRouters = asyncRouterMap
					console.log(accessedRouters);
				} else {
					accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
				}
				var userInfo="";
//				commit('SET_ROUTERS', constantRouterMap)
//				resolve()
				rPermissionsTable(userInfo).then(response1 => {
					if(response1) {
						var menuData = menuDataFactory.loginMenu(response1);
						console.log(menuData);
						window.sessionStorage.setItem('myRouters',JSON.stringify(menuData))
						//state.routers = menuData;
						//commit('SET_ROUTERS', menuData)
						commit('SET_ROUTERS', constantRouterMap)
						commit('SET_MYROUTER', menuData)
						
						//state.routers = constantRouterMap.concat(routers)
						resolve()
					}
				}).catch(error => {
					reject(error)
				})
				//commit('SET_ROUTERS', [])
				
			})
		}
	}
}

export default permission