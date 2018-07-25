<template>
	<div class="bg" style="padding-top: 45px;">
		<set-header :datas="headerData"></set-header>
		<div class="separateBg">
		</div>
		<scrollersBoxb :datas="scrollersBoxData1"></scrollersBoxb>
		<div class="separateBg">
		</div>
		<!--<scrollersBox :datas="scrollersBoxData2"></scrollersBox>
		<div class="separateBg">
		</div>-->
		<scrollersBox :datas="scrollersBoxData3"></scrollersBox>
		<div class="separateBg">
		</div>
		<scrollersBox :datas="scrollersBoxData4"></scrollersBox>
		<div class="separateBg">
		</div>
		<scrollersBox :datas="scrollersBoxData5"></scrollersBox>
		<com-button :propObj="btnPropObj" @BtnEvent="BtnEvent">
		</com-button>
	</div>
</template>

<script>
	import ScrollersBox from '@/components/scrollerBox/ScrollerBox.vue'
	import ScrollersBoxb from '@/components/scrollerBox/ScrollerBoxb.vue'
	import ComButton from '@/components/button/ComButtom'
	import SetHeader from '@/components/header/header2'
	import http from '@/utils/http'
	import tool from '@/utils/tool'
	import _global_ from '@/utils/Global'
	export default {
		components: {
			ScrollersBox,
			ScrollersBoxb,
			ComButton,
			SetHeader
		},
		data() {
			return {
				headerData: {
					title: "设置",
					rightjumpHref:"my",
					jumpHref: "my",
					classStyle: "",
				    icon: "static/common/my2.png",
				    classStyleFont: "color:#333333;font-size:16px",
					classStyleIcon: "fill:#999999",
				},
				btnPropObj: {
					title: "安全退出",
					classType: "register-btn-style-2",
					classBtnWidth: "register-btn",
					routerHref: "home",
				},
				scrollersBoxData1: {
					leftTitle: "头像",
					rightTitle: "编辑资料",
					routerHref: "personalProfile",
					arrowShow: "arrowShow",
					leftTextClass: "leftText",
					titleHead: "title-head1",
				},
				scrollersBoxData2: {
					leftTitle: "我的银行卡",
					rightTitle: "去添加",
					arrowShow: "arrowShow",
					routerHref: "",
					iconStyle: "width:24px;height:20px",
					leftIcon: true,
					iconAddress: "static/common/bankCard.png",
					leftTextClass: "leftText",
					titleHead: "title-head1",
				},
				scrollersBoxData3: {
					leftTitle: "登录密码",
					rightTitle: "",
					iconStyle: "width: 26px;height: 26px;",
					arrowShow: "arrowShow",
					routerHref: "modifyLoginPassword",
					leftIcon: true,
					iconAddress: "static/common/password_icon.png",
					leftTextClass: "leftText",
					titleHead: "title-head2",
				},
				scrollersBoxData4: {
					leftTitle: "地址管理",
					rightTitle: "",
					iconStyle: "width:22px;height:22px",
					arrowShow: "arrowShow",
					routerHref: "newAddress",
					leftIcon: true,
					iconAddress: "static/common/addressMag1.png",
					leftTextClass: "leftText",
					titleHead: "title-head2",
				},
				scrollersBoxData5: {
					leftTitle: "客服电话",
					rightTitle: "0755-32938689",
					arrowShow: "arrowShow1",
					iconStyle: "width:22px;height:20px",
					routerHref: "",
					leftIcon: true,
					iconAddress: "static/common/customer1.png",
					leftTextClass: "leftText",
					titleHead: "title-head1",
				}
			}
		},
		methods: {
			BtnEvent() {
				var that = this;
				var _data = "";
				that.outLogin();

			},
			outLogin: async function(data) {
				var that = this;
				let _url = _global_.api.outLogin;
				var _obj = {

				}
				let res = await http.post(_url, _obj);
				if(res) {
					tool.scavengingCaching("loginState");
					tool.scavengingCaching("LoginUserInfo");
					var _setTabInfo = {
						tabState: 0,
						name: "密码登录"
					}
					tool.setTabInfo(_setTabInfo, 0)
					that.$router.push({
						name: 'login'
					})
				}
			}
		}
	}
</script>

<style scoped>

</style>