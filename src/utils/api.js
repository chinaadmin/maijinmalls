/**
 * Created by mwuyz on 2018/1/8.
 */
import "whatwg-fetch"

const host_addr = 'https://furong.roletask.com/H_roleplay-si/userInfo/currentUser'

//sever post/get

export let severRequest = async (data, URL, method, headers) => {

	let Res = {
		httpCode: "",
		data: ""
	}
	//https://furong.roletask.com
	let response = await fetch(URL, {
		method: method,
		mode: 'cors',
		headers: headers,
		body: JSON.stringify(data)

	}).catch((error) => {
		console.log(error)
	})
	console.log(response);
	if (response) {
		if (response.status != 200) {
			//网络不可用  504
			if (response.status != 504) {
				try {
					var apiResult = await response.json();
				} catch (e) {

				} finally {
					Res.data = apiResult;
					Res.httpCode = response.status;
					return Res;
				}

			} else {
				return 504;
				alert('网络不可用！');
			}
			
		} else {
			var apiResult = await response.json();
			Res.data = apiResult;
			Res.httpCode = response.status;
			return Res;

		}



	}

}


//发送验证码
// export let sendAuthencode = async(num,URL) => {
// 	let params = {
// 		"userCode": num
// 	}
// 	let Res = {
// 		httpCode: "",
// 		data: ""
// 	}
// 	//https://furong.roletask.com
// 	let response = await fetch(URL, {
// 		method: 'POST',
// 		mode: 'cors',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(params)

// 	}).catch((error) => {
// 		console.log(error)
// 	})
// 	console.log(response);
// 	if(response) {
// 		if(response.status != 504) {
// 			 var apiResult = await response.json(); 
// 			 Res.data = apiResult;
// 			 Res.httpCode = response.status;
// 			return Res;
// 		} else {
// 			return 504;
// 			alert('网络不可用！');
// 		}

// 	}

// }

//登录接口
export let loginApi = async (num, pass) => {
	let params = {
		"loginMode": 1,
		"userCode": num,
		"password": pass
	}
	let Res = {
		httpCode: "",
		data: ""
	}
	//https://furong.roletask.com
	let response = await fetch("/H_roleplay-si/login", {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)

	}).catch((error) => {
		console.log(error)
	})
	console.log(response);
	if (response) {
		if (response.status != 504) {
			var apiResult = await response.json();
			Res.data = apiResult;
			Res.httpCode = response.status;
			return Res;
		} else {
			return 504;
			alert('网络不可用！');
		}

	}

}

export let getList = async (page, tag) => {
	let params = {
		"userCode": "13713785881"
	}
	//https://furong.roletask.com
	let response = await fetch("/H_roleplay-si/sendVerification", {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)

	}).catch((error) => {
		console.log(error)
	})
	return await response.json().catch((error) => {
		console.log(error)
	})
}

/*
 *获取资讯详情
 */
export let getNewsDetail = async (id) => {
	let response = await fetch(host_addr + `news_detail?id=${id}`, {
		method: 'GET',
		mode: 'cors'
	}).catch((error) => {
		console.log(error)
	})
	return await response.json().catch((error) => {
		console.log(error)
	})
}

export let getBlogList = async (page, tag) => {
	let response = await fetch(host_addr + `blog_list?pageIndex=${page}&pageSize=20&catalog=${tag}`, {
		method: 'GET',
		mode: 'cors'
	}).catch((error) => {
		console.log(error)
	})
	return await response.json().catch((error) => {
		console.log(error)
	})
}

export let getEventList = async (page, tag) => {
	let response = await fetch(host_addr + `event_list?pageIndex=${page}&pageSize=20&catalog=${tag}`, {
		method: 'GET',
		mode: 'cors'
	}).catch((error) => {
		console.log(error)
	})
	return await response.json().catch((error) => {
		console.log(error)
	})
}

export let getQuestionList = async (page, tag) => {
	let response = await fetch(host_addr + `question_list?pageIndex=${page}&pageSize=20&catalog=${tag}`, {
		method: 'GET',
		mode: 'cors'
	}).catch((error) => {
		console.log(error)
	})
	return await response.json().catch((error) => {
		console.log(error)
	})
}