import md5 from 'js-md5';
import Cookies from 'js-cookie'
import http from '@/utils/http'
import _global_ from '@/utils/Global'
import store from '@/store'
async function loginState(data) {

	const res = await http.post(_global_.api.isLoginState);
	console.log(res)
	return res;
}
let tool = {
	isvalidUsername: "", //例子
	timeStamptoYMD: "", //时间戳转 y-m-d格式
	getNowFormatDate: "", //获取当前时间转时间格式 y-m-d
	md5salt: "", //md5加密
	formValidation: "", //表单验证
	judgingLogonStatus: "", //判断登录状态
	scavengingCaching: "", //清除缓存
	htmlUnescape: "", //html转义
	getLoginInfo: "", //获取登录信息
	setTabInfo: "", //设置tab状态
	priceUnitTrans: "", //加钱规格转换
	orderState: "", //订单状态过滤
	payMethod: "", //支付方式过滤
	countdown: "", //倒计时
	userAgentDecide: "", //判断设备
	phoneAsterisk: "", //号码打星号
	isPcWap: "", //判断pc或移动
	getUrlStr: "", //截取url后面的参数
	wxgzh:"",
}

tool.getUrlStr = function(name, type) {
	if(type == 0) {　
		 let reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)","i");
        if(reg.test(window.location.href)){
            return unescape(RegExp.$2.replace(/\+/g," "))
        }
        return undefined
		
	}
}
tool.isPcWap = function(data, type) {
	//0是移动    1是pc
	var _data = "";
	if(type === 0) {
		if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
			/*window.location.href="你的手机版地址";*/
			_data = 0;
		} else {
			/*window.location.href="你的电脑版地址";    */
			_data = 1;
		}
	}
	return _data;
}
tool.phoneAsterisk = function(data, type) {
	var _data = "";
	if(type === 0) {
		if(data) {
			var _str1 = data.substring(0, 3);
			var _str2 = data.substring(7, 11);
			_data = _str1 + "****" + _str2;
		}
	}
	return _data;
}
tool.userAgentDecide = function() {
	var userAgentType = ""; //0安卓 1安卓微信 2浏览器 3苹果 4qq   11苹果微信
	var u = navigator.userAgent;
	var ua = window.navigator.userAgent.toLowerCase();
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	//$this.prop('src',iOS)
	if(isAndroid) {
		userAgentType = "0";
		if(ua.match(/MicroMessenger/i) == 'micromessenger') {
			userAgentType = "1";
		} else if(ua.match(/QQ/i) == "qq") {
			userAgentType = "4";
		} else {
			//userAgentType = "2";
		}

	} else if(isiOS) {
		userAgentType = "3";
		if(ua.match(/MicroMessenger/i) == 'micromessenger') {
			userAgentType = "11";
		} else if(ua.match(/QQ/i) == "qq") {
			userAgentType = "4";
		} else {
			//userAgentType = "2";
		}
	} else {
		//		$(Android).show();
		//		$(IOS).hide();
		//		$('.forAndroid').attr("onclick", "return")
	}
	return userAgentType;
}

function timestampToTime(timestamp) {
	var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = date.getDate() + ' ';
	var h = date.getHours() + ':';
	var m = date.getMinutes() + ':';
	var s = date.getSeconds();
	return Y + M + D + h + m + s;
}

function formatSeconds(value) {
	var secondTime = parseInt(value); // 秒
	var minuteTime = 0; // 分
	var hourTime = 0; // 小时
	if(secondTime > 60) { //如果秒数大于60，将秒数转换成整数
		//获取分钟，除以60取整数，得到整数分钟
		minuteTime = parseInt(secondTime / 60);
		//获取秒数，秒数取佘，得到整数秒数
		secondTime = parseInt(secondTime % 60);
		//如果分钟大于60，将分钟转换成小时
		if(minuteTime > 60) {
			//获取小时，获取分钟除以60，得到整数小时
			hourTime = parseInt(minuteTime / 60);
			//获取小时后取佘的分，获取分钟除以60取佘的分
			minuteTime = parseInt(minuteTime % 60);
		}
	}
	if(secondTime < 10) {
		var result = "0" + parseInt(secondTime) + "";
	} else {
		var result = "" + parseInt(secondTime) + "";
	}

	if(minuteTime > 0) {
		if(minuteTime < 10) {
			result = "0" + parseInt(minuteTime) + ":" + result;
		} else {
			result = "" + parseInt(minuteTime) + ":" + result;
		}

	}
	if(hourTime > 0) {
		result = "" + parseInt(hourTime) + ":" + result;
	}
	return result;
}
tool.countdown = function(data, type) {
	// 目标日期时间戳
	var _date = formatSeconds(data)
	//setTimeout(function () {
	//	data --;
	//  tool.countdown(data, type)
	//}, 1000)

	return _date
}
tool.payMethod = function(data, type) {
	var _data = "";
	if(type === 0) {
		if(data) {
			if(data === 10) {
				_data = "支付宝";
			} else if(data === 20) {
				_data = "微信";
			} else if(data === 30) {
				_data = "易宝";
			}
		}
	}
	return _data;

}
tool.orderState = function(data, type) {

	var _data = "";
	if(type === 0) {
		if(data) {
			if(data === 10) {
				_data = "待付款";
			} else if(data === 15) {
				_data = "支付中";
			} else if(data === 20) {
				_data = "待发货";
			} else if(data === 21) {
				_data = "待自提";
			} else if(data === 30) {
				_data = "待收货";
			} else if(data === 40) {
				_data = "已收货";
			} else if(data === 41) {
				_data = "已自提";
			} else if(data === 50) {
				_data = "待兑换";
			} else if(data === 60) {
				_data = "已兑换";
			} else if(data === 70) {
				_data = "已完成";
			} else if(data === 80) {
				_data = "已取消";
			} else if(data === 90) {
				_data = "支付失败";
			} else if(data === 91) {
				_data = "支付超时";
			}

		}
	}
	return _data;
}

tool.priceUnitTrans = function(data, type) {
	var _data = "";
	if(data) {
		if(type === 0) {
			for(var j = 0; j < data.length; j++) {
				var _arry = data[j].productInfos;
				console.log(_arry);
				if(_arry) {
					for(var i = 0; i < _arry.length; i++) {
						if(_arry[i].priceMethod === 10) {
							_arry[i].showPrice = "￥" + _arry[i].showPrice;
						} else if(_arry[i].priceMethod === 20) {
							_arry[i].showPrice = _arry[i].showPrice + " " + "元/克"
						}
						data[j].productInfos = _arry;

					}
				} else {
					data[j].productInfos = [];
				}
			}
			_data = data;
		} else if(type === 1) {
			var _arry = data;
			for(var i = 0; i < _arry.length; i++) {
				if(_arry[i].priceMethod === 10) {
					_arry[i].showPrice = "￥" + _arry[i].showPrice;
				} else if(_arry[i].priceMethod === 20) {
					_arry[i].showPrice = _arry[i].showPrice + " " + "元/克"
				}
			}

			_data = _arry;
		}
	}
	return _data;
}
tool.setTabInfo = function(data, type) {
	if(data) {
		if(type === 0) {
			let _tabState = {
				tabState: data.num,
				name: data.name,
			}
			store.dispatch('updateTabState', _tabState);
		}
	}
}
tool.getLoginInfo = function(data, type) {
	//type =1 获取用户基本信息
	var _data = "";
	if(data) {
		if(type === 1) {
			var _dataJson = window.localStorage.getItem('LoginUserInfo') || '';
			if(_dataJson) {
				_data = JSON.parse(_dataJson);
			}
		}
	}
	return _data;
}
tool.scavengingCaching = function(data) {
	if(data) {
		window.localStorage.removeItem(data);
	}
}
tool.htmlUnescape = function(html) {
	return html
		.replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, "\"")
		.replace(/&#39;/g, "\'");
}
tool.judgingLogonStatus = function(data, type) {
	//
	let _LoginStatus = window.localStorage.getItem('loginState') || '';
	var _data = false;
	if(_LoginStatus) {
		if(_LoginStatus === 1 | _LoginStatus === "1") {
			var _data = loginState();
			_data.then(result => { // onFulfilled 不会被调用
				if(result) {
					_data = true;
				} else {
					window.localStorage.setItem('loginState', 0)
					window.localStorage.setItem('LoginUserInfo', "")
					_data = false;
				}
			}, reason => { // onRejected 
				console.log(rejected); // 'rejected'
			})
		}
		return _data;
	}
}
tool.formValidation = function(data, type, mes) {
	//type = -1 新密码和确认密码
	//type =0 通用 （只判空）
	//type =1 手机号验证    type =3 判断图片验证码  type =4 判断短信验证码
	//type =5 验证身份证号
	//type =2 判断密码  type =22 判断密码(必须是数字+字母) 
	var _data = true;
	if(type === -1) {
		if(data.newPassword === data.confirmPassword) {
			_data = true;
		} else {
			alert(mes);
			_data = false;
		}
	} else if(type === 0) {
		if(data) {
			_data = true;
		} else {
			alert(mes);
			_data = false;
		}
	} else if(type === 1) {
		if(data) {
			var _judge = (/^1[34578]\d{9}$/.test(data));
			if(_judge) {
				_data = true;
			} else {
				alert("手机号填写有误！");
				_data = false;
			}

		} else {
			alert("手机号未填写！");
			_data = false;

		}
	} else if(type === 2) {
		if(data) {
			_data = true;
		} else {
			alert("密码未填写！");
			_data = false;
		}
	} else if(type === 3) {
		if(data) {
			_data = true;
		} else {
			alert("图片验证码未填写！");
			_data = false;

		}
	} else if(type === 4) {
		if(data) {
			_data = true;
		} else {
			alert("短信验证码未填写！");
			_data = false;

		}
	} else if(type === 5) {
		if(data) {
			var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
			if(regIdNo.test(data)) {
				_data = true;
			} else {
				alert("身份证号输入错误！");
			}

		} else {
			alert(mes);
			_data = false;

		}
	} else if(type === 22) {
		if(data) {
			if(data.length < 8) {
				_data = false;
				alert("密码小于8位！");
			} else {
				var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
				if(reg.test(data)) {
					_data = true;
				} else {
					_data = false;
					alert("密码不合法！");
				}
			}

		} else {
			alert(mes);
			_data = false;
		}

	}
	return _data;
}
tool.md5salt = function(data, type) {
	//
	var _data = "";
	if(data) {
		_data = md5(data)
	}
	return _data;
}
tool.isvalidUsername = function(str) {
	const valid_map = ['admin', 'editor']
	// return valid_map.indexOf(str.trim()) >= 0
	return true
}
tool.timeStamptoYMD = function(date, type) {
	//type 为 0  返回年月日
	//type 为 1 返回年月日 时分秒
	if(date) {
		var date = parseInt(date);
		var date = new Date(date); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var Y = date.getFullYear() + '-';
		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
		var h = date.getHours() + ':';
		var m = date.getMinutes() + ':';
		var s = date.getSeconds();
		if(type === 0) {
			return(Y + M + D).replace(/\s+/g, "");
		} else if(type === 1) {
			return Y + M + D + h + m + s;
		} else {
			return(Y + M + D).replace(/\s+/g, "");
		}
	} else {
		return "";
	}

}
tool.getNowFormatDate = function(add = 0) {

	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	date.setDate(date.getDate() + add);
	var strDate = date.getDate();
	if(month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if(strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;

	return currentdate;
}
tool.getNowDay = function(add = 0) {
	var date = new Date();
	date.setDate(date.getDate() + add);
	var strDate = date.getDate();
	return strDate;
}

export default tool