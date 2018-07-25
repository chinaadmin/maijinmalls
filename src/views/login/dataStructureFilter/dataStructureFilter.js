import tool from '@/utils/tool'

let dataStructureFilter = {
	vLogin: {
		//登录模块
		loginImgIsCodeFilter: "", //判断是否需要图片验证数据过滤
		loginFilter: "", //登录数据过滤

	}
}

/***************************************************** 登录   start ****************************************************/

dataStructureFilter.vLogin.loginImgIsCodeFilter = function(data, type) {
	var _data = "";
	if(data) {
		if(type === 1) {
			var _obj = {
				mobilePhone: "", //登录手机号
				loginPassword: "", //登录密码
				code: "", //图形验证码
			}
			_obj.mobilePhone = data.v_phone;
			if(data.v_password) {
				_obj.loginPassword = tool.md5salt(data.v_password + "www.maijinbei.com");
				_obj.code = data.v_code;
			}

			_data = _obj;
		} else if(type === 2) {
			var _obj = {
				mobilePhone: "", //登录手机号
				loginPassword: "", //登录密码
			}
			_obj.mobilePhone = data.v_phone;
			_obj.loginPassword = tool.md5salt(data.v_password + "www.maijinbei.com");
			_data = _obj;
		}

	}
	return _data;
}

dataStructureFilter.vLogin.loginFilter = function(data, type) {
	var _data = "";
	if(data) {
		if(type === 1) {
			var _obj = {
				mobilePhone: "", //登录手机号
				smsCode: "", //短信验证码
				code: "", //图形验证码
			}
			_obj.mobilePhone = data.v_phone;
			_obj.smsCode = data.v_messageCode;
			_obj.code = data.v_code;
			_data = _obj;
		}
	}
	return _data;
}

/***************************************************** 登录  end ****************************************************/

export default dataStructureFilter