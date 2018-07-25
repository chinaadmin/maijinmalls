import "whatwg-fetch"
export let dataFactoryJson = async (action, data) => {
	//发送验证码
	let Res = {
		httpCode: 200,
		apiStatus: true,
		message: ""
	}
	if (data.httpCode != 200) {
		alert(data.messag + "【" + data.httpCode + "】");
	} else {

		if (action = "sendCode") {
			Res.apiStatus = data.success;
			Res.message = data.message;
		}
		return Res;
	}
}
export default {
	install(Vue, options) {
		Vue.prototype.url = "http://www.baidu.com/" //可以自定义变量  
		Vue.prototype.factoryData = function (action, data) { //给自定义方法起个名  

			var message = "";
			if (data.data) {
				message = data.data.message;
			} else {
				message = data.message;
			}
			if (data.httpCode != 200) {
				document.getElementById('cover').style.display = "block";
				document.getElementById('widowsBox').style.display = "block";
				document.getElementById('mess').innerHTML = message + "【" + data.httpCode + "】";
				window.setTimeout(function(){
					document.getElementById('widowsBox').style.display = "none";
					document.getElementById('cover').style.display = "none";	
				},1000)
				return false;

			} else {
				let Res = {
					httpCode: 200,
					apiStatus: true,
					message: ""
				}
				//发送验证码
				if (action = "sendCode") {
					Res.httpCode = data.httpCode;
					Res.apiStatus = data.data.success;
					Res.message = data.data.message;
				}
				return Res;
			}
		}
	}
}