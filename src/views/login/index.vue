<template>
	<div class="paddingTop45">
		<set-header :datas="headerData"></set-header>
		<com-tab @onItemClickTab="onItemClick" :propObj="comTab"></com-tab>
		<main-page>
			<main-context-page :djsBtn="djsBtn" :formInit="formInit" :tabState="tabState" :propObjaa="main_context_page" :propObjBtn_a="btnPropObj" :propObjBtn_b="btnPropObj1" 
				@imgCodeRefresh="imgCodeRefresh" @sendCode="sendCode" @login="login" @v_register="v_register" @v_forgetPassword="v_forgetPassword">
			</main-context-page>
		</main-page>
	</div>
</template>

<script>
	import MainPage from '@/components/APPMainLayout/MainPage'
	import ComButton from '@/components/button/ComButtom'
	import ComTab from '@/components/tab/ComTab'
	import SetHeader from '@/components/header/header2'
	import MainContextPage from './components/mainContextPage'
	import dataStructureFilter from './dataStructureFilter/dataStructureFilter'
	import { severRequest, loginApi } from '@/utils/api'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'
	import tool from '@/utils/tool'
	import { mapState } from 'vuex'
	
	export default {
		components: {
			MainPage,
			ComButton,
			ComTab,
			MainContextPage,
			SetHeader
		},
		data() {
			return {
				djsBtn:"获取验证码",
				formInit: {},
				tabState: -1,
				headerData:{
					title:"登录",
					icon:"",
					jumpHref:"",
					jumpLeftHref:"",
					classStyle:"",
					classStyleIcon:"fill:#757575",
					classStyleFont:"color:#333333;font-size:16px;",
					isshow:1
				},
				main_context_page: {
					imgCode: "", //图片验证码
					judgement: false, //按钮置灰
					sendType: "", //发送按钮状态
					sendCodeTitle: "获取验证码", //按钮文案
					v_password_h: true, //登录框显示隐藏
					v_imgVerificaCode: false,
					loginBtnshow: true,
				},
				v_context: true,
				comTab: {
					list: [
					{
						name:"密码登录",
						smallRes:false
					},
					{
						name:"验证码登录",
						smallRes:false
					}
					],
					indexId: 0,
				},
				btnPropObj: {
					title: "登录",
					classType: "register-btn-style",
					classBtnWidth: "register-btn",
				},
				btnPropObj1: {
					title: "新人注册",
					classType: "register-btn-style-1",
					classBtnWidth: "register-btn",
				},
			}
		},
		computed: {
			...mapState([
				'vux'
			])
		},
		created() {
			let that = this;
			that.updateTitle('登录');
			var _setTabInfo = {
				tabState: 0,
				name: "密码登录"
			}
			tool.setTabInfo(_setTabInfo, 0)
			that.main_context_page.imgCode = _global_.api.imgCode;
			that.headerData.jumpLeftHref = that.$route.params.fromUrl;
		},
		methods: {
			v_forgetPassword(){
				var that = this;
				that.$router.push({
					name: 'retrievePassword',
				})
			},
			//tab切换
			onItemClick(data) {
				console.log(data);
				var that = this;
				that.tabState = parseInt(data);
				if(data === 1) {
					that.v_context = false
					that.main_context_page.v_password_h = false;
					that.main_context_page.v_imgVerificaCode = true;
					that.main_context_page.loginBtnshow = false;
				} else {
					that.v_context = true;
					that.main_context_page.v_imgVerificaCode = false;
					that.main_context_page.v_password_h = true;
					that.main_context_page.loginBtnshow = true;
				}
			},
			//获取用户信息
			obtainingUserInfor: async function(data) {
				
				var that = this;
				let res = await http.post(_global_.api.obtainingUserInfor, data);
				that.$store.dispatch('updateLoginState', 1);
				that.$store.dispatch('updateLoginUser', res.result);
				window.localStorage.setItem('LoginUserInfo', JSON.stringify(res.result))
				var _jumpUrl = 'home';
				var _id = '';
				if(that.$route.params.fromUrl){
					_jumpUrl = that.$route.params.fromUrl;
				}
				if(that.$route.params.id){
					_id = that.$route.params.id;
				}
				that.$router.push({
					name:_jumpUrl,
					params: {
							id:_id 
						}
				})
				that.formInit = {
					v_code: "", //图片验证码
					v_phone: "", //手机号
					v_password: "", //登录密码
					v_messageCode: "", //短信验证码
				}
			},
			//登录
			userLogin: async function(data, id) {
				var that = this;
				var _url = "";
				_url = _global_.api.userLogin;
				if(id === 1) {
					_url = _global_.api.userLogin;
				} else if(id === 2) {
					_url = _global_.api.messageUserLogin;
				}
				let res = await http.post(_url, data, 101);
				if(res) {
					that.obtainingUserInfor();
				}else{
					that.main_context_page.imgCode = "api/kaptcha/createImage.do?d=" + Math.random();
				}

			},
			//判断是否需要图片验证
			loginImgIsCode: async function(data, id, formInit) {
				var that = this;
				let res = await http.post(_global_.api.loginImgIsCode, data);
				if(res) {
					var _data_ = "";
					console.log(res.result);
					if(res.result) {
						//true 需要图片验证码
						that.main_context_page.v_imgVerificaCode = true;
						if(formInit.formInit.v_code) {
							if(tool.formValidation(formInit.formInit.v_password, 2)) {
								_data_ = dataStructureFilter.vLogin.loginImgIsCodeFilter(formInit.formInit, 1);
								that.userLogin(_data_);
							}
						} else {
							that.apiErrorContext = "请先填写图片验证码！";
							that.showModule();
							that.showModuleAuto();
						}

					} else {
						if(tool.formValidation(formInit.formInit.v_password, 2)) {
							_data_ = dataStructureFilter.vLogin.loginImgIsCodeFilter(formInit.formInit, 2);
							that.userLogin(_data_);
						}
					}

				}
			},
			login(data) {
				var that = this;
				var id = data.id;
				var _data = {
					mobilePhone: "", //手机号
				}
				_data.mobilePhone = data.formInit.v_phone;
				var _judge = tool.formValidation(_data.mobilePhone, 1);
				if(!_judge) {
					
				} else {
					if(id === 1) {
						that.loginImgIsCode(_data, id, data);
					} else if(id === 2) {
						if(data.formInit.v_phone) {
							if(tool.formValidation(data.formInit.v_code, 3)) {
								if(tool.formValidation(data.formInit.v_messageCode, 4)) {
									var _data = dataStructureFilter.vLogin.loginFilter(data.formInit, 1);
									that.userLogin(_data, id);
								}
							}

						}

					}
				}

			},
			//图片验证码刷新
			imgCodeRefresh() {
				var that = this;
				that.main_context_page.imgCode = "api/kaptcha/createImage.do?d=" + Math.random();
			},
			v_register() {
				var that = this;
				this.$router.push({
					name: 'register',
					params: {
						dataObj: ""
					}

				})
			},
			timeDown() {
				var that = this;
				var countDown = 60;
				that.main_context_page.judgement = true;
				that.main_context_page.sendCodeTitle = countDown + "s" + " " + "重新发送";
				
				var _setInterval = setInterval(down, 1000);
            
				function down() {
					console.log(countDown);
					if(countDown <= 0 || countDown === 0 || countDown === 1) {
						
						that.main_context_page.judgement = false;
						that.main_context_page.sendCodeTitle = "获取验证码";
						that.sendbtn = "sendCode";
					    clearInterval(_setInterval)
					} else {
						countDown--;
						that.main_context_page.sendCodeTitle = countDown + "s" + " " + "重新发送";
					}
				

				}
				down();
			},
			setTimeoutDown() {

			},
			sendAuthencode: async function(data) {
				var that = this;
				var _data = await http.post(_global_.api.sendCode, data)
				if(_data) {
					that.isSend = true;
					that.sendbtn = "sendbtnClick";
					that.main_context_page.sendCodeTitle = "发送中"
					//发送验证码成功 开始进入倒计时
					that.main_context_page.judgement = true;
					that.main_context_page.sendCodeTitle = "60s" + " " + "重新发送";
					that.timeDown();
				} else {
                   that.main_context_page.imgCode = "api/kaptcha/createImage.do?d=" + Math.random();
				}

			},
			changeType() {
				this.pwdType = this.pwdType === 'password' ? 'text' : 'password'
			},
			sendCode(data) {
				console.log(data);
				var that = this;
				that.main_context_page.sendType = that.main_context_page.sendType === false ? true : false;
				var accountNumber = data.v_phone;
				
					if(!tool.formValidation(accountNumber, 1)) {
						return false;
					} else {
						
						let _imgCode = data.v_code;
						if(tool.formValidation(_imgCode, 3)) {
							var _that = {
								code: _imgCode,
								mobilePhone: accountNumber,
							}
							this.sendAuthencode(_that);
						} else {
							//							this.apiErrorContext = "请先填写图片验证码！";
							//							this.showModule();
							//							this.showModuleAuto()
						}
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
			}
		}
	}
</script>

<style>

</style>