import http from '@/utils/http'
import apiUrl from './apiUrl'
import request,{get,post}from '@/utils/request'
const {loginUrl,logoutUrl,getUserInfoUrl,verifycodeUrl} = apiUrl;

export async function list(data) {
	console.log(data)
  const res = await post(apiUrl.list,data);
  return res;
}

export async function loginByUsername(data) {
  let res = await http.post(apiUrl.erploginUrl,data,0);
  
  return res;
}
export async function rPermissionsTable(data) {
  const res = await http.post(apiUrl.rPermissionsTableUrl,data);
  return res;
}


export async function logout() {
  const res = await post(logoutUrl);
  return res;

}

export async function getUserInfos(data) {
  const res = await get(getUserInfoUrl,data);
  return res;
}

export async function getVerifyCode(){
  const res = await http.get(verifycodeUrl)
  return res;
}
// export function loginByUsername(data) {
//   // const data = {
//   //   username,
//   //   password
//   // }
//   return request({
//     url: apiUrl.erpLogin,
//     method: 'post',
//     data,
//     transformRequest: [function (data) {
//         let ret = ''
//         for (let it in data) {
//           ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//         }
//         return ret
//       }]
//   })
// }

// export async function logout() {
//   return request({
//     url: '/login/logout',
//     method: 'post'
//   })
// }

export function getUserInfo(token) {
	console.log(token);
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
