<template>
	<div class="bg paddingTop45 newAddress">
		<register-header :datas="headerData"></register-header>
		<group label-margin-right="0em" label-align="left">
			<x-input title="姓名" placeholder="请输入姓名" v-model="formDataObj.v_name" class="realNameAuthentInput">

			</x-input>
			<x-input v-show="!isAddressPhone" title="电话" v-model="formDataObj.v_phone" placeholder="请输入电话号码" class="realNameAuthentInput">

			</x-input>
			<x-input v-show="isAddressPhone" title="电话" v-model="formDataObj.v_phone_init" placeholder="请输入电话号码" class="realNameAuthentInput">

			</x-input>
			<!--<x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="formDataObj.v_address" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" inline-desc="" :show.sync="showAddress"></x-address>-->
			<x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="formDataObj.v_address" :list="china_address_v4Json" @on-shadow-change="onShadowChange" placeholder="请选择地址" inline-desc="" :show.sync="showAddress"></x-address>
			<x-input title="地址" v-model="formDataObj.v_addresss" placeholder="请输入详细地址" class="realNameAuthentInput">

			</x-input>
		</group>
		<div class="height-3r">

		</div>
		<com-button :propObj="btnPropObj" @BtnEvent="realNameAuthent()">
		</com-button>
	</div>
</template>

<script>
	import { XInput, Group, XAddress, PopupPicker, ChinaAddressV4Data } from 'vux'
	import china_address_v4 from '@/components/json/china_address_v4.json'
	import town from './town.json';
	import ComButton from '@/components/button/ComButtom'
	import RegisterHeader from '@/components/header/header2'
	import http from '@/utils/http'
	import tool from '@/utils/tool'
	import _global_ from '@/utils/Global'
	import dataStructureFilter from './dataStructureFilter/dataStructureFilter'
	export default {
		components: {
			XInput,
			Group,
			ComButton,
			XAddress,
			PopupPicker,
			ChinaAddressV4Data,
			RegisterHeader
		},
		data() {
			return {
				china_address_v4Json:[],
				isAddressPhone: false,
				headerData: {

					title: "新增地址",
					icon: "static/common/my2.png",
					jumpHref: "setUp",
					rightjumpHref: "my",
					classStyle: "",
					classStyleIcon: "fill:#757575",
					classStyleFont: "color:#333333;font-size:16px;",
					dataFp: "",
					id:"",
				},
				title: '地区',
				value_0_1: [],
				value: [],
				title2: '设置值',
				value2: ['天津市', '市辖区', '和平区'],
				value3: ['广东省', '中山市', '--'],
				addressData: ChinaAddressV4Data,
				value4: [],
				value5: ['广东省', '深圳 市', '南山区'],
				showAddress: false,
				town: town,
				formDataObj: {
					v_id: "", //地址id
					v_name: "", //姓名
					v_num: "", //身份证号
					v_phone: "", //电话号码
					v_phone_init: "", //电话号码
					v_address: [], //地区
					v_addressName: [], //地区名称
					v_addresss: "", //详细地址
				},
				btnPropObj: {
					title: "保存并使用",
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
			console.log(that.value3);
			that.china_address_v4Json = china_address_v4;
			//var _userInfo = JSON.parse(localStorage.getItem('LoginUserInfo'));

			//获取用户收货地址
			that.userReceivAddress();
			if(that.$route.params.dataFp) {
				that.headerData.dataFp = that.$route.params.dataFp;
			}
			if(that.$route.params.id) {
				that.headerData.id = that.$route.params.id;
			}
			if(that.$route.params.fromUrl) {
				that.headerData.jumpHref = that.$route.params.fromUrl;
			}
		},
		methods: {
			userReceivAddress: async function(data) {
				var that = this;
				let _url = _global_.api.my.userReceivAddr;
				var _data = {
					v_num: 110,
					fromUrl: "newAddress"
				}
				let res = await http.get(_url, "", 99);
				console.log(res);
				if(res) {
					var _res = res.result;
					if(_res.addressId) {
						that.isAddress = true;
						//that.formDataObj.v_address = _res.province + "-" + _res.city + "-" + _res.area;
						that.formDataObj.v_address = [_res.province, _res.city, _res.area];
						that.formDataObj.v_addresss = _res.expressAddr;
						that.formDataObj.v_id = _res.addressId;
						that.formDataObj.v_name = _res.expressName;
						if(_res.expressPhone) {
							that.isAddressPhone = true;
						} else {

						}
						that.formDataObj.v_phone_init = tool.phoneAsterisk(_res.expressPhone, 0);
						//that.formDataObj.v_phone = tool.phoneAsterisk(_res.expressPhone,0);
						that.formDataObj.v_phone = _res.expressPhone;
					}
				} else {}

			},
			doShowAddress() {
				this.showAddress = true
				setTimeout(() => {
					this.showAddress = false
				}, 2000)
			},
			onShadowChange(ids, names) {
				console.log(names);
				var that = this;
				that.formDataObj.v_address = ids;
				that.formDataObj.v_addressName = names;
			},
			changeData() {
				this.value2 = ['430000', '430400', '430407']
			},
			changeDataByLabels() {
				this.value2 = ['广东省', '广州市', '天河区']
			},
			changeDataByLabels2() {
				this.value2 = ['广东省', '中山市', '--']
			},
			getName(value) {
				return value2name(value, ChinaAddressV4Data)
			},
			logHide(str) {
				console.log('on-hide', str)
			},
			logShow(str) {
				console.log('on-show')
			},
			changeType() {
				this.pwdType = this.pwdType === 'password' ? 'text' : 'password'
			},
			v_realNameAuthent: async function(data) {
				var that = this;
				var _type = {
					v_num: 110,
					fromUrl: "newAddress"
				}
				var _data = await http.post(_global_.api.my.addReceivAddr, data, _type)
				if(_data) {
					var _jumpUrl = 'setUp';
					var _id = "";
					var _dataFp = "";
					if(that.$route.params.fromUrl) {
						_jumpUrl = that.$route.params.fromUrl;
					}
					if(that.$route.params.id) {
						_id = that.$route.params.id;
					}
					if(that.$route.params.dataFp) {
						_dataFp = that.$route.params.dataFp;
					}
					that.$router.push({
						name: _jumpUrl,
						params: {
							id: _id,
							dataFp: _dataFp
						}

					})

				} else {

				}

			},
			realNameAuthent() {
				var that = this;
				var _formDataObj = that.formDataObj;
				var _phone = "";
				//				if(_formDataObj.v_phone.length < 11){
				//					if(_formDataObj.v_phone_init.length > 0){
				//						_phone = _formDataObj.v_phone_init
				//					}else{
				//						_phone = _formDataObj.v_phone;
				//					}
				//					
				//				}
				if(that.isAddressPhone) {
				     var _v_phone_init =  _formDataObj.v_phone_init.substring(4, 5);
					if(_v_phone_init === "*"){
						_phone = _formDataObj.v_phone;
						
					}else{
						 _phone = _formDataObj.v_phone_init;
					}
                  
				}else{
					_phone = _formDataObj.v_phone;
				}
				console.log(_formDataObj);
				if(tool.formValidation(_formDataObj.v_name, 0, "姓名未填写!")) {
					if(tool.formValidation(_phone, 1)) {
						var _obj = dataStructureFilter.addAddrfilter(_formDataObj);
						console.log(_obj);
						that.v_realNameAuthent(_obj);
					}
				}
			}
		}
	}
</script>

<style>
	.newAddress .weui-cell {
		padding: 10px 15px !important;
	}
</style>