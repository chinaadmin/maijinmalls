<template>
	<div>
		<div class="input-cell">
			<div class="left">
				<img src="static/common/phone.png" style="width: 26px;height: 26px;">
			</div>
			<div class="right">
				<x-input  keyboard="number" autocomplete="off" :max="11" placeholder="请输入手机号" class="input-cell-padding" v-model="formDataObj.v_phone" required>
				</x-input>
			</div>
		</div>
		<div class="input-cell" v-show="propObj.v_password_h">
			<div class="left" style="padding-top: 13px;">
				<img src="static/common/password_icon.png" style="width: 26px;height: 26px;">
			</div>
			<!--<div class="right">
				<x-input type="password" autocomplete="new-password" placeholder="请输入登录密码" class="input-cell-padding" @on-blur="test1" @on-focus="test2" v-model="formDataObj.v_password" required>
				   <img slot="right" class="imgCode" v-bind:src="imgCode" width="60%" @click="imgCodeRefresh" />
				</x-input>
			</div>-->
			<div class="right" style="position: relative;">
					<!--<x-input placeholder="请设置8-20位登录密码" v-model="formDataObj.v_password" class="input-cell-padding">
					</x-input>-->
					<input autocomplete="new-password" :type="eyeType" maxlength="20" minlength="8" placeholder="请设置8-20位登录密码" v-model="formDataObj.v_password" class="input-cell-padding input">
					<img slot="right" :class="eyeClass" :src="eyeImg" @click="eyeImgChange">
				</div>
		</div>
		<div class="input-cell" v-if="imgVerificaCode">
			<div class="left">
				<img src="static/register/code_icon.png" style="width: 22px;height: 22px;">
			</div>
			<div class="right input-right-ident">
				<x-input placeholder="请输入验证码" class="right-line" v-model="formDataObj.v_code" required>
					<img slot="right" class="imgCode" v-bind:src="propObj.imgCode" width="60%" @click="imgCodeRefresh" />
				</x-input>
			</div>
		</div>
		<div class="input-cell" v-show="!propObj.v_password_h">
			<div class="left">
				<img src="static/register/message_icon.png"  style="width: 20px;height: 21px;">
			</div>
			<div class="right input-right-ident">
				<x-input placeholder="请输入短信验证码" class="input-cell-padding" v-model="formDataObj.v_messageCode">
					<x-button v-model="propObj.sendCodeTitle" slot="right" class="weui-btn-style" :disabled="propObj.judgement" @click.native="sendCode" :type="propObj.sendType">{{propObj.sendCodeTitle}}</x-button>
				</x-input>
			</div>
		</div>
		<div class="forgetPassword" @click="forgetPassword">
			<span class="c-999999" v-show="v_context && propObj.loginBtnshow">忘记密码？</span>
		</div>
		<com-button @BtnEvent="login(1)" v-show="propObj.loginBtnshow" :propObj="propObjBtn_a">
		</com-button>
		<com-button @BtnEvent="login(2)" v-show="!propObj.loginBtnshow" :propObj="propObjBtn_a">
		</com-button>
		<com-button @BtnEvent="v_register" :propObj="propObjBtn_b">
		</com-button>
	</div>

</template>
<script>
	import ComButton from '@/components/button/ComButtom'
	import { XInput, XButton } from 'vux'
	export default {
		name: "ComButtom",
		components: {
			XInput,
			XButton,
			ComButton

		},
		data() {
			return {
				eyeClass: "resEyeClass",
				eyeImg: "static/my/eyes_hide.png",
				eyeType: "password",
				imgVerificaCode: false,
				v_context: true,
				v_formDataObj: {
					v_code: "", //图片验证码
					v_phone: "", //手机号
					v_password: "", //登录密码
					v_messageCode: "", //短信验证码
				},
			}
		},
		props: {
			djsBtn:{
				type: String,
				required: true,
			},
			tabState: {
				type: Number,
				required: true,
			},
			formInit: {
				type: Object,
				required: false,
			},
			propObjaa: {
				type: Object,
				required: true,
			},
			propObjBtn_a: {
				type: Object,
				required: true,
			},
			propObjBtn_b: {
				type: Object,
				required: true,
			}
		},
		created() {
			var that = this;  
			console.log(that.tabState);
		},
		computed: {
			
			v_djsBtn(){
				var that = this;
				return that.djsBtn;
			},
			formDataObj() {
				var that = this;
				var arr = Object.keys(that.formInit);
				var v_formDataObjs = {
					v_code: "", //图片验证码
					v_phone: "", //手机号
					v_password: "", //登录密码
					v_messageCode: "", //短信验证码
				}
				that.v_formDataObj = v_formDataObjs;
				if(arr.length != 0) {
					return that.formInit;
					//return that.v_formDataObj;
				} else {
					return that.v_formDataObj;
				}
			},
			propObj() {
				console.log(this.propObjaa);
				var that = this;
				that.imgVerificaCode = that.propObjaa.v_imgVerificaCode;
				return that.propObjaa
			}

		},
		watch: {
			'tabState': function() {
				var that = this;
				if(that.tabState != -1) {
					that.v_formDataObj = {
						v_code: "", //图片验证码
						v_phone: "", //手机号
						v_password: "", //登录密码
						v_messageCode: "", //短信验证码
					};
				}
			}
		},
		methods: {
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
			forgetPassword() {
				var that = this;
				that.$emit("v_forgetPassword");
			},
			v_register() {
				var that = this;
				that.$emit("v_register");
			},
			login(id) {
				console.log(id);
				var that = this;
				var _data = {
					id: "",
					formInit: ""
				}
				_data.id = id;
				_data.formInit = that.formDataObj;
				that.$emit("login", _data);
			},
			imgCodeRefresh() {
				var that = this;
				that.$emit("imgCodeRefresh");
			},
			test1() {
				console.log('wierej');
			},
			test2() {
				console.log('wierej2');
			},
			sendCode() {
				var that = this;
				var _data = that.formDataObj;
				that.$emit("sendCode", _data);
			},
			BtnEvent() {
				var that = this;
				var _data = "";
				//        	that.$emit("BtnEvent",_data);
			}
		}
	}
</script>
<style>
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
	.weui-icon-clear,
	.vux-input-icon.weui-icon-warn:before,
	.vux-input-icon.weui-icon-success:before {
		font-size: 16px!important;
		position: absolute!important;
		top: 16px!important;
		right: 5px!important;
	}
	
	.input-right-ident:nth-child(2) .weui-icon {
		display: none!important;
	}
	
	.input-right-ident {
		z-index: 10;
		background: #ffffff;
	}
	
	.imgCode {
		background: #ffffff!important;
		padding-top: 4.5px;
		position: relative;
		margin-left: -4px;
	}
	
	.right-line {
		position: relative;
		padding: 7px 0px !important;
	}
	
	.right-line:after {
		position: absolute!important;
		top: 17px!important;
		right: 60px!important;
		content: '';
		width: 30px!important;
		height: 23px!important;
		border-left: solid 1px #f2f2f2!important;
		border-radius: 0!important;
	}
	
	.input-cell-padding {
		padding-top: 10px!important;
		padding-bottom: 15px!important;
		position: relative;
	}
	
	.input-cell {
		clear: both;
	}
	
	.input-cell .left {
		float: left;
		width: 15%;
		padding-top: 16px;
		
	}
	.input-cell .left img{
		width: 20px;
		height: 25px;
	}
	.input-cell .right {
		width: 85%;
		float: right;
		border-bottom: 1px solid #efefef;
	}
	
	.input-cell:last-child .right {
		margin-bottom: 2rem;
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
	.weui-cell{
		padding: 10px 0px!important;
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
		height: 56px!important;
		border-left: solid 1px #f2f2f2!important;
		border-radius: 0!important;
	}
	
	.forgetPassword {
		width: 100%;
		text-align: right;
		clear: both;
		padding-top: 0.8rem;
		padding-bottom: 1rem;
	}
	
	.zcXy {
		margin-top: 0.6rem;
		text-align: left;
		font-size: 0.8em;
	}
</style>