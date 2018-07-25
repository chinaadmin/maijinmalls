<template>
	<div>
		<div class="mainBox">
			<div class="input-cell">
				<div class="left">
					<img src="static/common/phone.png" style="width: 26px;height: 26px;">
				</div>
				<div class="right">
					<x-input keyboard="number"  :max="11"  placeholder="请输入手机号" v-model="formDataObj.v_phone" class="input-cell-padding">
					</x-input>
				</div>
			</div>
			<div class="input-cell">
				<div class="left">
					<img src="static/register/message_icon.png"  style="margin-left:4px;width: 20px;height: 21px;">
				</div>
				<div class="right">
					<x-input placeholder="请输入短信验证码" v-model="formDataObj.v_messageCode" class="input-cell-padding">
						<x-button v-model="sendCodeTitle" slot="right" class="weui-btn-style" :disabled="judgement" @click.native="sendCode" :type="sendType">{{sendCodeTitle}}</x-button>
					</x-input>
				</div>
			</div>
			<div class="input-cell">
				<div class="left">
					<img src="static/common/password_icon.png" style="width: 26px;height: 26px;">
				</div>
				<!--<div class="right">
					<x-input placeholder="请设置8-20位登录密码" v-model="formDataObj.v_password" class="input-cell-padding">
					</x-input>
				</div>-->
				<div class="right" style="position: relative;">
					<!--<x-input placeholder="请设置8-20位登录密码" v-model="formDataObj.v_password" class="input-cell-padding">
					</x-input>-->
					<input autocomplete="new-password" :type="eyeType" maxlength="20" minlength="8" placeholder="请设置8-20位登录密码" v-model="formDataObj.v_password" class="input-cell-padding input">
					<img slot="right" :class="eyeClass" :src="eyeImg" @click="eyeImgChange">
				</div>
			</div>
		</div>
		<com-button :propObj="btnPropObj"  @BtnEvent="retrievePassword()">
		</com-button>
	</div>
</template>

<script>
	import { XInput , XButton } from 'vux'
	import ComButton from '@/components/button/ComButtom'
	import http from '@/utils/http'
	import tool from '@/utils/tool'
	import _global_ from '@/utils/Global'
	export default {
		components: {
			XInput,
			XButton,
			ComButton
		},
		data(){
			return {
				eyeClass: "resEyeClass",
				eyeImg: "static/my/eyes_hide.png",
				eyeType: "password",
				btnPropObj: {
					title: "确定",
					classType: "register-btn-style",
					classBtnWidth: "register-btn",
				},
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
				userPass: '',
				formDataObj: {
					v_phone: "", //手机号
					v_password: "", //登录密码
					v_messageCode: "", //短信验证码
				},
			}
		},
		methods:{
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
			retrievePassword(){
				var that = this;
				var _data = that.formDataObj;
				var accountNumber = _data.v_phone;
				
				var v_messageCode = _data.v_messageCode;
				if(tool.formValidation(accountNumber, 1)) {
					if(tool.formValidation(v_messageCode, 4)){
						if(tool.formValidation(_data.v_password, 22)){
							var _obj = {
								mobilePhone:"", //手机号
								newLoginPassword:"", //新密码
								smsCode:"", //验证码
							}
							var v_password = tool.md5salt(_data.v_password+"www.maijinbei.com");
							_obj.mobilePhone = accountNumber;
							_obj.newLoginPassword = v_password;
							_obj.smsCode = v_messageCode;
							that.v_retrievePassword(_obj);
						}
					}
				} else {
					
				}
			},
			sendCode(){
				var that = this;
				var _data  = that.formDataObj;
				that.sendType = that.sendType === false ? true : false;
				var accountNumber = _data.v_phone;
				if(!tool.formValidation(accountNumber, 1)) {
					return false;
				} else {
					var _that = {
						mobilePhone: accountNumber,
					}
					that.sendAuthencode(_that);
				}
			},
			v_retrievePassword: async function(data) {
				var that = this;
				var _data = await http.post(_global_.api.retrievePassword, data,100)
				if(_data) {
					let _tabState = {
					tabState: 0,
					name: "密码登录",
				}
				that.$store.dispatch('updateTabState', _tabState);
				window.localStorage.removeItem('LoginUserInfo') 
				window.localStorage.removeItem('loginState') ;
					that.$router.push({
						name: 'retrievePassSuccess'
					});
				} else {

				}

			},
			sendAuthencode: async function(data) {
				var that = this;
				var _data = await http.post(_global_.api.retrievePasswordCode, data)
				if(_data) {
					that.isSend = true;
					that.sendbtn = "sendbtnClick";
					that.sendCodeTitle = "发送中"
					//发送验证码成功 开始进入倒计时
					that.judgement = true;
					that.sendCodeTitle = "60s" + " " + "重新发送";
					that.timeDown();
				} else {

				}

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
		}
	}
</script>

<style scoped>
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
		padding-left: 14px;
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
		background-image: -webkit-linear-gradient(0deg, #CDA254, #FFD487);
		margin-top: 1rem!important;
		border-radius: 1.5rem!important;
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
		font-size: 0.8em!important;
		padding-left: 25px!important;
	}
	
	.weui-btn:after {
		border: none!important;
	}
	
	.weui-btn-style:after {
		position: absolute!important;
		top: 5px!important;
		height: calc(100% - 0.2em)!important;
		left: 0!important;
		content: '';
		width: 40px!important;
		height: 48px!important;
		border-left: solid 1px #cccccc!important;
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
		padding: 15px 15px!important;
	}
	
	.right-line {
		position: relative;
		padding: 7px 15px !important;
	}
	
	.right-line:after {
		position: absolute!important;
		top: 13px!important;
		height: calc(100% - 0.2em)!important;
		right: 70px!important;
		content: '';
		width: 30px!important;
		height: 20px!important;
		border-left: solid 1px #efefef!important;
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
		padding-top: 16px;
	}
	
	.input-cell .right {
		width: 85%;
		float: right;
		border-bottom: 1px solid #efefef;
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
		padding: 0px 15px;
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