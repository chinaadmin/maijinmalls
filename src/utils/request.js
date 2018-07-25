import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000, // request timeout
  headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json; charset=UTF-8'
          }
})

// request interceptor
//先注釋掉 請求帶token
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
// service.interceptors.response.use(
//   response => response,
// //   /**
// //   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
// //   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
// //   */
// //   // debugger;
// //   //  const res = response.data;
// //   //     if (res.code !== 20000) {
// //   //       Message({
// //   //         message: res.message,
// //   //         type: 'error',
// //   //         duration: 5 * 1000
// //   //       });
// //   //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
// //   //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
// //   //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
// //   //           confirmButtonText: '重新登录',
// //   //           cancelButtonText: '取消',
// //   //           type: 'warning'
// //   //         }).then(() => {
// //   //           store.dispatch('FedLogOut').then(() => {
// //   //             location.reload();// 为了重新实例化vue-router对象 避免bug
// //   //           });
// //   //         })
// //   //       }
// //   //       return Promise.reject('error');
// //   //     } else {
// //   //       return response.data;
// //   //     }
//   error => {
//     debugger
//     console.log('err' + error)// for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   })



//response拦截
service.interceptors.response.use(function (response) {
    // Do something with response data
//  console.log(response);
const typeCode = response.data.errorcode;
    if(response.data.msg === "请正确输入验证码") {
      Message({
        type: "error",
        message: response.data.msg,
        duration: 5 * 1000
      });
      return false;
    }else if(response){
      console.log(response);
      return response;
    }else {
      return response;
    }
  }, function (error) {
    // Do something with response error
    console.log('err' + error)// for debug
     if (error && error.response) {
          switch (error.response.status) {
            case 400:
              error.message = '错误请求'
              break;
            case 401:
              error.message = '未授权，请重新登录'
              break;
            case 403:
              error.message = '拒绝访问'
              break;
            case 404:
              error.message = '请求错误,未找到该资源'
              break;
            case 405:
              error.message = '请求方法未允许'
              break;
            case 408:
              error.message = '请求超时'
              break;
            case 500:
              error.message = '服务器端出错'
              break;
            case 501:
              error.message = '网络未实现'
              break;
            case 502:
              error.message = '网络错误'
              break;
            case 503:
              error.message = '服务不可用'
              break;
            case 504:
              error.message = '网络超时'
              break;
            case 505:
              error.message = 'http版本不支持该请求'
              break;
            default:
              error.message = `连接错误${error.response.status}`
          }
        } else {
          error.message = "连接到服务器失败"
      }
      Message({
        message: `${error.message}<${error.response.status}>`,
        type: 'error',
        duration: 5 * 1000
      })
    return Promise.reject(error)
  });


//request的params转换为formdata函数

export default service;

export const get = function(url,param="") {
      return new Promise((resolve,reject) => {
        service({
          method: 'get',
          url,
          params: param
        }).then(res => {
          resolve(res)
        }).then(err =>{
          reject(err);
        })
      })
    }
export const post = function(url,param="") {
	console.log(url);
	console.log(param);
      return new Promise((resolve,reject) => {
        service({
          method: 'post',
          url,
          params: param,
        }).then(res => {
          resolve(res)
        }).then(err =>{
          reject(err)
        })
      })
    }