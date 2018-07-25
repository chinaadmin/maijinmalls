<template>
	<div>
		<div class="mainBox">
			<div class="input-cell">
				<div>
					<x-input :type="eyeType0" keyboard="number" :max="20"  placeholder="请输入原登录密码" v-model="formDataObj.v_original_password" class="modify-login-input" required>
						<img slot="right" :class="eyeClass0" :src="eyeImg0" @click="eyeImgChange(0)">
					</x-input>
				</div>
			</div>
			<div class="input-cell">
				<div>
					<x-input :type="eyeType1" keyboard="number" :max="20"   placeholder="请输入8-20位新登录密码" v-model="formDataObj.v_new_password" class="modify-login-input" required>
						<img slot="right" :class="eyeClass1" :src="eyeImg1" @click="eyeImgChange(1)">
					</x-input>
				</div>
			</div>
			<div class="input-cell">
				<div>
					<x-input :type="eyeType2" keyboard="number" :max="20"   placeholder="请确认新登录密码" v-model="formDataObj.v_confirm_password" class="modify-login-input" required>
						<img slot="right" :class="eyeClass2" :src="eyeImg2" @click="eyeImgChange(2)">
					</x-input>
				</div>
			</div>
		</div>
		<com-button :propObj="btnPropObj" @BtnEvent="modifyLoginPassword()">
		</com-button>
	</div>
</template>

<script>
	import { XInput, XButton } from 'vux'
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
		data() {
			return {
				eyeImg0: "static/my/eyes_hide.png",
				eyeType0: "password",
				eyeClass0: "password-eye",
				eyeImg1: "static/my/eyes_hide.png",
				eyeType1: "password",
				eyeClass1: "password-eye",
				eyeImg2: "static/my/eyes_hide.png",
				eyeType2: "password",
				eyeClass2: "password-eye",
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
					v_original_password: "", //原登录密码
					v_new_password: "", //新密码
					v_confirm_password: "", //确认密码
				},
			}
		},
		methods: {
			eyeImgChange(type) {
				var that = this;
				if(type === 0){
					var _eyeType = that.eyeType0;
				if(_eyeType === "password") {
					that.eyeType0 = "text";
					that.eyeImg0 = "static/my/eyes_show.png";
					that.eyeClass0 = "password-eye1"
				} else {
					that.eyeType0 = "password";
					that.eyeImg0 = "static/my/eyes_hide.png";
					that.eyeClass0 = "password-eye"
				}
				}else if(type === 1){
					var _eyeType = that.eyeType1;
				if(_eyeType === "password") {
					that.eyeType1 = "text";
					that.eyeIm1 = "static/my/eyes_show.png";
					that.eyeClass1 = "password-eye1"
				} else {
					that.eyeType1 = "password";
					that.eyeImg1 = "static/my/eyes_hide.png";
					that.eyeClass1 = "password-eye"
				}
				}else if(type === 2){
					var _eyeType = that.eyeType2;
				if(_eyeType === "password") {
					that.eyeType2 = "text";
					that.eyeIm2 = "static/my/eyes_show.png";
					that.eyeClass2 = "password-eye1"
				} else {
					that.eyeType2 = "password";
					that.eyeImg2 = "static/my/eyes_hide.png";
					that.eyeClass2 = "password-eye"
				}
				}
				
			},
			v_modifyLoginPassword: async function(data) {
				var that = this;
				var _data = await http.post(_global_.api.modifyLoginPassword, data,100)
				if(_data) {
					let _tabState = {
					tabState: 0,
					name: "密码登录",
				 }
				that.$store.dispatch('updateTabState', _tabState);
					that.$router.push({
						name: 'my',
						params: {
							fromUrl: "modifyLoginPassword"
						}
					});
				} else {

				}

			},
			modifyLoginPassword() {
				var that = this;
				console.log(that.formDataObj);
				if(tool.formValidation(that.formDataObj.v_original_password, 22, "原登录密码未填写")) {
					if(tool.formValidation(that.formDataObj.v_new_password, 22, "新密码未填写")) {
						if(tool.formValidation(that.formDataObj.v_confirm_password, 22, "确认密码未填写")) {
							var _data = {
								newPassword:"",  //新密码
								confirmPassword:"", //确认密码
							}
							_data.newPassword = that.formDataObj.v_new_password;
							_data.confirmPassword = that.formDataObj.v_confirm_password;
							if(tool.formValidation(_data, -1, "新密码与确认密码输入不一致！")) {
								var _obj = {
									newLoginPassword: "", //新密码
									oldLoginPassword: "", //原始密码
								}
								_obj.newLoginPassword = tool.md5salt(that.formDataObj.v_new_password+"www.maijinbei.com");
								_obj.oldLoginPassword = tool.md5salt(that.formDataObj.v_original_password+"www.maijinbei.com");
								that.v_modifyLoginPassword(_obj);
								
							}

						}
					}
				}

			}
		}
		}
</script>
<style>
	.vux-x-input .weui-icon{
		position: relative!important;
		right: 0;
		top: -8px;
	}
</style>
<style lang="scss" scoped>
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
	
	.modify-login-input {
		border: 1px solid #efefef;
		position: relative;
		.password-eye {
			width: 22px;
			height: 12px;
			margin-top: 14px;
		}
		.password-eye1 {
			width: 22px;
			height: 22px;
			margin-top: 8px;
		}
	}
	
	.weui-cell {
		padding: 5px 10px!important;
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
	
	.input-cell:first-child {
		margin-top: 1rem;
	}
	
	.input-cell {
		clear: both;
		margin-bottom: 1rem;
	}
	
	.input-cell .left {
		float: left;
		width: 15%;
		padding-top: 13px;
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