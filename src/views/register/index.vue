<template>
	<div id="Login" class="paddingTop45">
		<register-header :datas="headerData"></register-header>
		<div class="mainBox">
			<div class="input-cell">
				<div class="left">
					<img src="static/common/phone.png" style="width: 26px;height: 26px;">
				</div>
				<div class="right">
					<input @blur="delInput(formDataObj.v_phone,0)" @focus="delInput(formDataObj.v_phone)" maxlength=11 style="ime-mode:Disabled" type="tel" placeholder="请输入手机号" v-model="formDataObj.v_phone" class="input-cell-padding input">
				    <img class="img" @click="delText(`v_phone`,0)" v-if="isPhone"  slot="right" src="static/common/del.png"  />
				</div>
			</div>
			<div class="input-cell">
				<div class="left">
					<img src="static/common/password_icon.png" style="width: 26px;height: 26px;">
				</div>
				<div class="right" style="position: relative;">
					<!--<x-input placeholder="请设置8-20位登录密码" v-model="formDataObj.v_password" class="input-cell-padding">
					</x-input>-->
					<input autocomplete="new-password" :type="eyeType" maxlength="20" minlength="8" placeholder="请设置8-20位登录密码" v-model="formDataObj.v_password" class="input-cell-padding input">
					<img slot="right" :class="eyeClass" :src="eyeImg" @click="eyeImgChange">
				</div>
			</div>
			<div class="input-cell">
				<div class="left">
					<img src="static/register/code_icon.png" style="height: 22px; width: 22px;">
				</div>
				<div class="right">
					<x-input placeholder="请输入验证码" v-model="formDataObj.v_code" class="right-line">
						<img slot="right" class="imgCode" v-bind:src="imgCode" width="60%" @click="imgCodeRefresh" />
					</x-input>
				</div>
			</div>
			<div class="input-cell">
				<div class="left">
					<img src="static/register/message_icon.png" style="height: 22px; padding-top: 5px;">
				</div>
				<div class="right">
					<x-input placeholder="请输入短信验证码" v-model="formDataObj.v_messageCode" class="input-cell-padding">
						<x-button  slot="right" class="weui-btn-style" :disabled="judgement" @click.native="sendCode1" :type="sendType">{{sendCodeTitle}}</x-button>
					</x-input>
				</div>
			</div>
		</div>
		<div class="register-btn">
			<x-button type="primary" class="register-btn-style" action-type="button" @click.native="v_register">立即注册</x-button>
			<div class="zcXy" style="margin-left: 2px; padding-top: 2px;">
				<span class="c-999999">用户注册代表同意</span>
				<span class="c-FFBF62" @click="agreement">
					《黄金商城服务协议》
				</span>
			</div>
		</div>

	</div>
</template>

<script>
	import { XInput, XButton, Group, Cell, Flexbox, FlexboxItem, Alert, AlertPlugin } from 'vux'
	import { severRequest, loginApi } from '@/utils/api'
	import RegisterHeader from '@/components/header/header2'
	import tool from '@/utils/tool'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'
	import md5 from 'js-md5';
	export default {
		components: {
			Group,
			Cell,
			XInput,
			XButton,
			RegisterHeader
		},
		data() {
			return {
				isPhone:false,
				eyeClass: "resEyeClass",
				eyeImg: "static/my/eyes_hide.png",
				eyeType: "password",
				headerData: {
					title: "注册",
					icon: "",
					jumpHref: "",
					classStyle: "",
					classStyleIcon:"fill:#757575",
					classStyleFont:"color:#333333;font-size:16px;",
				},
				imgCode: "",
				routerMsg: "",
				formDataObj: {
					v_code: "", //图片验证码
					v_phone: "", //手机号
					v_password: "", //登录密码
					v_messageCode: "", //短信验证码
				},
				pwdType: 'password',
				sendType: false,
				account: "",
				verificationCode: "",
				sendbtn: "sendCode",
				sendCodeTitle: "获取验证码",
				judgement: false,
				apiErrorContext: "",
				loginBtnDis: false,
				isSend: false,
				userName: '',
				userPass: ''
			}
		},
		created() {
			let that = this;
			that.updateTitle('注册');
			that.imgCode = _global_.api.imgCode;
			that.getParams()
		},
		watch: {
			// 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可  
			'$route': 'getParams'
		},
		methods: {
			delInput(data,type){
				var that = this;
				if(type === 0){
					if(data){
						that.isPhone = true;
					}else{
						that.isPhone = false;
					}
				}
			},
			delText(data,type){
				var that = this;
				console.log(data);
				if(data){
					that.formDataObj[data] = "";
				}
			},
			agreement(){
				var that = this;
				that.$router.push({
					name: 'agreement',
				})
			},
			eyeImgChange() {
				var that = this;
				var _eyeType = that.eyeType;
				if(_eyeType === "password") {
					that.eyeType = "text";
					that.eyeImg = "static/my/eyes_show.png";
					that.eyeClass = "resEyeClass1";
				} else {
					that.eyeType = "password";
					that.eyeImg = "static/my/eyes_hide.png";
					that.eyeClass = "resEyeClass";
				}
			},
			getParams() {
				// 取到路由带过来的参数   
				console.log(this.$route.params.dataObj);

			},
			imgCodeRefreshGet: async function(data) {
				var that = this;
				let res = await http.get("api/kaptcha/createImage.do", data)
				console.log(res);
				that.imgCode = res;
			},
			//图片验证码刷新
			imgCodeRefresh() {
				console.log("点击了");
				var that = this;
				that.imgCode = "api/kaptcha/createImage.do?d=" + Math.random();
			},
			//注册
			userRegister: async function(data) {
				console.log(data);
				var that = this;
				var _data = {
					loginPassword: "", //登陆密码
					mobilePhone: "", //手机号码
					smsCode: "", //短信验证码
				}
				_data.loginPassword = md5(that.formDataObj.v_password + "www.maijinbei.com");
				console.log(_data.loginPassword)
				_data.mobilePhone = that.formDataObj.v_phone;
				_data.smsCode = that.formDataObj.v_messageCode;
				var res = await http.post(_global_.api.userRegister, _data)
				if(res) {
//					let _tabState = {
//						tabState: 0,
//						name: "登录",
//					}
//					that.$store.dispatch('updateTabState', _tabState);
                    console.log(res);
                    if(res){
                    	var login_data={
                    		loginPassword: "", //登陆密码
					        mobilePhone: "", //手机号码
                    	}
                    	login_data.mobilePhone=_data.mobilePhone;
                    	login_data.loginPassword=_data.loginPassword;
                    	var res_data = await http.post(_global_.api.userLogin, login_data, 101);
                    	if(res_data){
                    		var that = this;
				            let res = await http.post(_global_.api.obtainingUserInfor, data);
				            if(res){
				            that.$store.dispatch('updateLoginState', 1);
				            that.$store.dispatch('updateLoginUser', res.result);
				            window.localStorage.setItem('LoginUserInfo', JSON.stringify(res.result))
				            var _jumpUrl = 'registerSuccess';
				            if(that.$route.params.fromUrl){
					            _jumpUrl = that.$route.params.fromUrl;
				             }
				            that.$router.push({
					        name:_jumpUrl
				             })
				          }
                    	}
                    }
					// that.$router.push({
					// 	name: 'registerSuccess'
					// })
				}else{
					that.imgCodeRefresh()
				}

			},
			//判断是是否注册
			register: async function(data) {
				var that = this;
				var res = await http.post(_global_.api.isRegister, data)
				if(res) {
					if(res) {
						that.userRegister(data);
					}
				}
			},
			v_register() {
				var that = this;
				var _data = {
					mobilePhone: "", //手机号
				}
				var _formDataObj = that.formDataObj;
				_data.mobilePhone = that.formDataObj.v_phone;
				if(tool.formValidation(_formDataObj.v_phone, 1, "手机号不能为空！")) {
					if(tool.formValidation(_formDataObj.v_password, 22, "登录密码不能为空！")) {
						if(tool.formValidation(_formDataObj.v_code, 0, "图片验证码不能为空！")) {
							if(tool.formValidation(_formDataObj.v_messageCode, 0, "短信验证码不能为空！")) {
								that.register(_data);
							}
						}

					}
				}

			},
			shortMssage() {
				var that = this;
				that.fetchData();
			},
			timeDown() {
				var that = this;
				var countDown = 60;
				that.judgement = true;
				that.sendCodeTitle = countDown + "s" + " " + "重新发送";
				
				var _setInterval = setInterval(down, 1000);
            
				function down() {
					console.log(countDown);
					if(countDown <= 0 || countDown === 0 || countDown === 1) {
						
						that.judgement = false;
						that.sendCodeTitle = "获取验证码";
						that.sendbtn = "sendCode";
					    clearInterval(_setInterval)
					} else {
						countDown--;
						that.sendCodeTitle = countDown + "s" + " " + "重新发送";
					}
				

				}
				down();
			},
			setTimeoutDown() {

			},
			sendAuthencode: async function(data) {
				var that = this;
				var _data = await http.post(_global_.api.registerSendCode, data)
				console.log(_data);
				if(_data) {
					that.isSend = true;
					that.sendbtn = "sendbtnClick";
					that.sendCodeTitle = "发送中"
					//发送验证码成功 开始进入倒计时
					that.judgement = true;
					that.sendCodeTitle = "60s" + " " + "重新发送";
					that.timeDown();
				} else {
                  that.imgCode = "api/kaptcha/createImage.do?d=" + Math.random();
				}

			},
			changeType() {
				this.pwdType = this.pwdType === 'password' ? 'text' : 'password'
			},
			sendCode1() {
				var that = this;
				this.sendType = this.sendType === false ? true : false;
				var accountNumber = that.formDataObj.v_phone;
				if(accountNumber) {
					if(!(/^1[34578]\d{9}$/.test(accountNumber))) {
						alert("手机号码有误，请重填");
						return false;
					} else {
						let _imgCode = that.formDataObj.v_code;
						if(_imgCode) {
							var _that = {
								code: _imgCode,
								mobilePhone: accountNumber,
							}
							this.sendAuthencode(_that);
						} else {
							this.apiErrorContext = "请先填写图片验证码！";
							this.showModule();
							this.showModuleAuto()
						}
					}
				} else {
					this.apiErrorContext = "请输入手机号！";
					this.showModule();
					this.showModuleAuto()
				}
			},
			showModule() {
				this.$vux.alert.show({
					title: "提示",
					content: this.apiErrorContext,
					onShow() {
						console.log('Plugin: I\'m showing')
					},
					onHide() {
						console.log('Plugin: I\'m hiding')
					}
				})
			},
			showModuleAuto() {
				setTimeout(() => {
					this.$vux.alert.hide()
				}, 1000)
			},
			loginFun() {
				var that = this;
				var mobile = that.account;
				var _verificationCode = that.verificationCode;
				console.log(mobile);
				if(mobile) {
					if(_verificationCode) {

					} else {
						that.apiErrorContext = "请输入验证码！";
						that.showModule();
						that.showModuleAuto()
					}
				} else {
					that.apiErrorContext = "请输入手机号！";
					that.showModule();
					that.showModuleAuto()
				}
			}
		}
	}
</script>

<style lang='scss'>
	.resEyeClass {
		position: absolute;
		right: 4%;
		top: 20px;
		width: 22px;
		height: 12px;
	}
	
	.resEyeClass1 {
		position: absolute;
		right: 4%;
		top: 18px;
		width: 22px;
		height: 22px;
	}
	
	.input {
		border: 0;
		outline: none;
		height: 28px;
		padding-left: 0px;
		width: 100%;
	}
	
	.input:focus {
		border: 0;
	}
	
	.zcXy {
		margin-top: 0.6rem;
		text-align: left;
		font-size: 0.8em;
	}
	
	.register-btn {
		width: 92%;
		margin: 0 auto;
		text-align: center;
		margin-top: 1rem;
		padding-top: 1rem!important;
	}
	
	.register-btn-style {
		background-image: -webkit-linear-gradient(0deg, #BF2717, #E13D30);
		margin-top: 1rem!important;
		border-radius:50px!important;
	}
	
	.imgCode {
		background: #ffffff!important;
		padding-top: 4.5px;
		position: relative;
		margin-left: -4px;
	}
	
	.weui-btn {
		padding-left: 0!important;
		padding-right: 0!important;
	}
	
	.weui-btn-style {
		background: none!important;
		color: #CDA254!important;
		font-size: 1em!important;
		padding-left: 12px!important;
		padding-right: 8px!important;
	}
	
	.weui-btn:after {
		border: none!important;
	}
	
	.weui-btn-style:after {
		position: absolute!important;
		top: 5px!important;
		left: 0px!important;
		content: '';
		width: 30px!important;
		height: 48px!important;
		border-left: solid 1px #dfdfdf!important;
		border-radius: 0!important;
	}
	
	.mainBox {
		width: 90%;
		margin: 0 auto;
		padding-top: 0.5rem;
	}
	
	.weui-cells {
		border: none!important;
	}
	
	.weui-cell {
		padding: 15px 0px!important;
	}
	
	.right-line {
		position: relative;
		padding: 7px 0px !important;
	}
	
	.right-line:after {
		position: absolute!important;
		top: 13px!important;
		right: 60px!important;
		content: '';
		width: 30px!important;
		height: 20px!important;
		border-left: solid 1px #f2f2f2!important;
		border-radius: 0!important;
	}
	
	.input-cell-padding {
		padding-top: 10px!important;
		padding-bottom: 15px!important;
		position: relative;
	}
	
	.weui-icon-clear {
		position: absolute!important;
		display: none!important;
	}
	
	.input-cell {
		clear: both;
	}
	
	.input-cell .left {
		float: left;
		width: 15%;
		padding-top: 13px;
	}
	
	.input-cell .left img {
		width: 20px;
		height: 25px;
	}
	
	.input-cell .right {
		width: 85%;
		float: right;
		border-bottom: 1px solid #efefef;
		position: relative;
	}
	.input-cell .right .img{
			position: absolute;
			right: 0;
			top:15px;
			width: 25px;
			height:25px;
		}
	
	.input-cell:last-child .right {
		margin-bottom: 2rem;
	}
	
	.vux-demo {
		text-align: center;
	}
	
	.logo {
		width: 100px;
		height: 100px
	}
	
	.userBox {
		width: 100%;
		height: 105px;
		padding-top: 30px;
		background: #687D92;
		text-align: center;
		vertical-align: middle;
		color: #ffffff;
	}
	
	.weui-icon-clear {
		margin-top: -10px;
	}
	
	.chk_1 {
		width: 20px;
		height: 20px;
		margin-top: 5px;
		opacity: 0;
	}
	
	[class^="weui-icon-"]:before,
	[class*=" weui-icon-"]:before {
		margin-top: -10px;
	}
	
	.chk_1+label {
		background-color: #FFF;
		border: 1px solid #C1CACA;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
		padding: 8px;
		border-radius: 5px;
		display: inline-block;
		position: absolute;
		right: 16px;
		margin-top: 5px;
	}
	
	.chk_1+label:active {
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
	}
	
	.chk_1:checked+label {
		background-color: #ECF2F7;
		border: 1px solid #92A1AC;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);
		color: #243441;
	}
	
	.chk_1:checked+label:after {
		content: '\2714';
		position: absolute;
		top: -1px;
		left: 3px;
		color: #758794;
		width: 50%;
		text-align: center;
		font-size: 12px;
		padding: 1px 0 0 0;
		vertical-align: text-top;
	}
	
	.img_1 {
		width: 100%;
	}
	
	.weui-cell {
		padding: 0px 0px;
	}
	
	.vux-cell-primary {
		padding-top: 14px;
		margin-left: 20px;
	}
	
	.weui-cell__hd .weui-label {
		width: 6.5em!important;
	}
	
	.sendCode {
		width: 105px!important;
		background: #687D92!important;
		color: #ffffff!important;
		font-size: 15px!important;
		position: absolute!important;
		top: 5.5px!important;
		right: 10px!important;
	}
	
	.sendbtnClick {
		width: 120px!important;
		color: #000000!important;
		font-size: 15px!important;
		position: absolute!important;
		top: 5.5px!important;
		right: 10px!important;
		right: 10px!important;
		background: #ffffff!important;
		border: 1px solid#687D92!important;
	}
	
	.loginBtn {
		margin: 20px 0px;
	}
</style>