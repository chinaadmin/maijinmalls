'use strict'
import Cookies from 'js-cookie'
import router from '@/router/index'
import axios from 'axios'
import { Message } from 'element-ui'
import { removeToken } from './auth' // getToken from cookie

//let _baseURL = "/mtc"   //秒台车后台

let _baseURL = "" //秒台车后台

//axios.interceptors.request.use(config => {
//	let myToken = Cookies.get('myToken');
// console.log(myToken);
//let myToken = Cookies.get('myToken');
//console.log(myToken);

axios.interceptors.request.use(config => {
	let myToken = Cookies.get('myToken');
	// loading
	if(myToken) {
		config.headers['token'] = myToken // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
	}
	return config
}, error => {
	return Promise.reject(error)
})
axios.interceptors.response.use(response => {

		return response

	},
	function(error) {
		// Do something with response error
		console.log('err' + error) // for debug
		if(error && error.response) {
			switch(error.response.status) {
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
	})

function checkStatus(response, alertType) {
	//alertType  等于100  成功提示弹窗

	let codeType = response.data.code;
	console.log(response);
	if(response.data) {
          if(alertType === 1000){
          	return response;
          }
		if(response.data.success) {

			//alertType  等于100  成功提示弹窗
			if(alertType) {
				if(alertType === 100) {
					Message({
						type: "success",
						message: response.data.message,
						duration: 1 * 1000
					});
				}
			}
			return response;
		} else {

			//token 错误
			if(codeType) {
				if(codeType === "9998" | codeType === 9998) {
					Message({
						type: "error",
						message: response.data.message,
						duration: 1 * 1000
					});
					 removeToken();
				     //登录失效跳到登录页，带上当前页的路径
				     router.replace({
				       path: '/login',
				       query: {redirect: router.currentRoute.fullPath}
				     });
					return false;
				} else {
					
				}
				
			} else {

			}
			
			Message({
						type: "error",
						message: response.data.message,
						duration: 3 * 1000
					});
			return false;
		}
	} else {
		return {};
	}

}

function checkCode(res) {
	// 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
	if(res.status === -404) {
		//alert(res.msg)
	}
	if(res.data && (!res.data.success)) {
		//alert(res.data.error_msg)
	}
	return res
}

export default {
	post(url, params, alertType, _headers = {
		'X-Requested-With': 'XMLHttpRequest',
		'Content-Type': 'application/json; charset=UTF-8'
	}) {
		return axios({
			method: 'post',
			baseURL: _baseURL,
			url,
			data: params,
			timeout: 10000,
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json; charset=UTF-8'
			}
		}).then(
			(response) => {
				return checkStatus(response, alertType)
			}
		).then(
			(res) => {
				return checkCode(res)
			}
		)
	},
	get(url, params, alertType, _headers = {
		'X-Requested-With': 'XMLHttpRequest',
		'Content-Type': 'application/json; charset=UTF-8'
	},responseType) {
		return axios({
			method: 'get',
			baseURL: _baseURL,
			url,
			params, // get 请求时带的参数
			timeout: 10000,
			headers: _headers,
			responseType:responseType
		}).then(
			(response) => {
				return checkStatus(response, alertType)
			}
		).catch(
			(res) => {
				return checkCode(res)
			}
		)
	}
}