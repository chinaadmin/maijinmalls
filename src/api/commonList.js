import request,{get,post}from '@/utils/request'
import apiUrl from './apiUrl'


export async function selectCompanyList(data) {
  console.log(apiUrl.selectCompanyList);
  const res = await post(apiUrl.selectCompanyList,data);
  return res;
}
export async function commonList(data) {
  console.log(apiUrl.ceshi);
  const res = await post(apiUrl.ceshi,data);
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
  const res = await get(verifycodeUrl)
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
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

//财务管理
export async function getLoanPayList(data) {
  console.log(apiUrl.loanPayList);
  const res = await post(apiUrl.loanPayList,data);
  return res;
}
