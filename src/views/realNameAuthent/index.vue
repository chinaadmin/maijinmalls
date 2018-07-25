<template>
	<div class="bg paddingTop45 smrz">
		<set-header :datas="headerData"></set-header>
		<group label-margin-right="0em" label-align="left">
			<x-input title="真实姓名"  placeholder="请输入真实姓名" v-model="formDataObj.v_name" class="realNameAuthentInput">

			</x-input>
			<x-input title="身份证" v-model="formDataObj.v_num" placeholder="请输入身份证号码" class="realNameAuthentInput">

			</x-input>
		</group>
		<div class="height-3r">

		</div>
		<com-button :propObj="btnPropObj" @BtnEvent="realNameAuthent()">
		</com-button>
	</div>
</template>

<script>
	import { XInput, Group } from 'vux'
	import ComButton from '@/components/button/ComButtom'
	import http from '@/utils/http'
	import tool from '@/utils/tool'
	import _global_ from '@/utils/Global'
	import SetHeader from '@/components/header/header2'
	export default {
		components: {
			XInput,
			Group,
			ComButton,
			SetHeader
		},
		data() {
			return {
				headerData: {
					title: "实名认证",
					icon: "static/common/my2.png",
					jumpHref: "setUp",
					rightjumpHref:"my",
					classStyle: "",
					classStyleIcon:"fill:#757575",
					classStyleFont:"color:#333333;font-size:16px;",
				},
				formDataObj: {
					v_name: "", //姓名
					v_num: "", //身份证号
				},
				btnPropObj: {
					title: "确定",
					classType: "register-btn-style",
					classBtnWidth: "register-btn",
				},
				pwdType: 'password',
				sendType: false,
				account: "",
				verificationCode: "",
				sendbtn: "sendCode",
				sendCodeTitle: "发送验证码",
				judgement: false,
				apiErrorContext: "",
				loginBtnDis: false,
				isSend: false
			}
		},
		created() {
			let that = this;
			that.updateTitle('实名认证');
		},
		methods: {
			changeType() {
				this.pwdType = this.pwdType === 'password' ? 'text' : 'password'
			},
			v_realNameAuthent: async function(data) {
				var that = this;
				var _data = await http.post(_global_.api.realNameAuthent, data)
				if(_data) {
					var myInfo = JSON.parse(window.localStorage.getItem('LoginUserInfo'));
					myInfo.realnameStatus = 20;
					window.localStorage.setItem('LoginUserInfo', JSON.stringify(myInfo));
					var _jumpUrl = 'authenticationSuccess';
					var _id = '';
					if(that.$route.params.fromUrl) {
						_jumpUrl = that.$route.params.fromUrl;
					}
					if(that.$route.params.id) {
						_id = that.$route.params.id;
					}
					that.$router.push({
						name: _jumpUrl,
						id:_id
					});
				} else {

				}

			},
			realNameAuthent() {
				var that = this;
				console.log(that.formDataObj);
				var _obj = {
					idcardNo: "", //身份证号
					realname: "", //姓名
				}
				_obj.idcardNo = that.formDataObj.v_num;
				_obj.realname = that.formDataObj.v_name;
				if(tool.formValidation(_obj.realname, 0, "姓名未填写!")) {
					if(tool.formValidation(_obj.idcardNo, 5, "身份证号未填写!")) {
						that.v_realNameAuthent(_obj);
					}
				}
			}
		}
	}
</script>

<style>
 .smrz .weui-cell{
 	padding-left: 15px!important;
 	padding-right: 15px!important;
 }
</style>