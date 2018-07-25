<template>
	<div class="bg" style="padding-top: 45px;">
		<set-header :datas="headerData"></set-header>
		<div class="separateBg">
		</div>
		<div v-show="isRealName">
			<scrollersBox :datas="scrollersBoxData0"></scrollersBox>
			<div class="separateBg">
			</div>
			<scrollersBox :datas="scrollersBoxData00"></scrollersBox>
			<div class="separateBg">
			</div>
			<scrollersBox :datas="scrollersBoxData000"></scrollersBox>
			<div class="separateBg">
			</div>
			<scrollersBox :datas="scrollersBoxData0000"></scrollersBox>
			<div class="separateBg">
			</div>
			<scrollersBox :datas="scrollersBoxData5"></scrollersBox>
			<com-button  :propObj="btnPropObj" @BtnEvent="BtnEvent">
		    </com-button>
		</div>
		<div v-show="!isRealName">
			<scrollersBoxa :datas="scrollersBoxData1"></scrollersBoxa>
			<div class="separateBg">
			</div>
			<scrollersBox :datas="scrollersBoxData2"></scrollersBox>
			<div class="separateBg">
			</div>
			<scrollersBox :datas="scrollersBoxData3"></scrollersBox>
		</div>
	</div>
</template>

<script>
	import ScrollersBox from '@/components/scrollerBox/ScrollerBox.vue'
	import ScrollersBoxa from '@/components/scrollerBox/ScrollerBoxa.vue'
	import SetHeader from '@/components/header/header2'
	import ComButton from '@/components/button/ComButtom'
	import { severRequest, loginApi } from '@/utils/api'
	import tool from '@/utils/tool'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'

	export default {
		components: {
			ScrollersBox,
			ScrollersBoxa,
			SetHeader,
			ComButton
		},
		data() {
			return {
				btnPropObj: {
					title: "安全退出",
					classType: "register-btn-style-2",
					classBtnWidth: "register-btn",
					routerHref: "home",
				},
				isRealName: false,
				headerData: {
					title: "个人资料",
					icon: "static/common/my2.png",
					jumpHref: "",
					rightjumpHref:"my",
					classStyleIcon:"fill:#757575",
					classStyleFont:"color:#333333;font-size:16px;",
				},
				scrollersBoxData0: {
					leftTitle: "手机号",
					rightTitle: "15915470940",
					arrowShow: "arrowShow1",
					routerHref: "",
					leftIcon: true,
					iconAddress: "static/register/phone.png",
					leftTextClass: "leftText",
					titleHead: "title-head1",
				},
				scrollersBoxData00: {
					leftTitle: "我的银行卡",
					rightTitle: "去添加",
					arrowShow: "arrowShow",
					routerHref: "",
					leftIcon: true,
					iconAddress: "static/register/phone.png",
					leftTextClass: "leftText",
					titleHead: "title-head1",
				},
				scrollersBoxData000: {
					leftTitle: "实名认证",
					rightTitle: "林飞",
					arrowShow: "arrowShow1",
					routerHref: "",
					leftIcon: true,
					iconAddress: "static/register/phone.png",
					leftTextClass: "leftText",
					titleHead: "title-head1",
				},
				scrollersBoxData0000: {
					leftTitle: "交易密码",
					rightTitle: "请进入APP或官网修改",
					arrowShow: "arrowShow1",
					routerHref: "",
					leftIcon: true,
					iconAddress: "static/register/phone.png",
					leftTextClass: "leftText",
					titleHead: "title-head1",
				},
				scrollersBoxData5: {
					leftTitle: "客服电话",
					rightTitle: "400-058-088",
					arrowShow:"arrowShow1",
					routerHref: "",
					leftIcon:true,
					iconAddress:"static/register/phone.png",
					leftTextClass: "leftText",
					titleHead:"title-head1",
				},
				scrollersBoxData1: {
					leftTitle: "头像",
					rightTitle: "可兑2个",
					routerHref: "",
					arrowShow: "arrowShow",
					leftTextClass: "leftText",
					titleHead: "title-head2",

				},
				scrollersBoxData2: {
					leftTitle: "手机号",
					rightTitle: "",
					arrowShow: "arrowShow1",
					routerHref: "",
					leftTextClass: "leftText",
					titleHead: "title-head1",
				},
				scrollersBoxData3: {
					leftTitle: "姓名",
					rightTitle: "",
					arrowShow: "arrowShow1",
					routerHref: "",
					leftTextClass: "leftText",
					titleHead: "title-head1",
				}
			}
		},
		created() {
			var that = this;
			var _loginInfo = tool.getLoginInfo(1, 1);
			that.scrollersBoxData2.rightTitle = _loginInfo.mobilePhone;
			var _userInfo = JSON.parse(localStorage.getItem('LoginUserInfo'));
			if(_userInfo.realnameStatus === 10) {
				that.scrollersBoxData3.rightTitle = "去认证";
				that.scrollersBoxData3.routerHref = "realNameAuthent";
			} else if(_userInfo.realnameStatus === 20) {
		
				that.loadmessage();
				// that.scrollersBoxData3.rightTitle = "已实名"
				that.scrollersBoxData3.routerHref = "";
			}
		},
		methods:{
			BtnEvent(){
          	var that = this;
          	var _data = "";
          	tool.scavengingCaching("loginState");
          	tool.scavengingCaching("LoginUserInfo");
          	that.$router.push({
					name: 'home'
				})
          },
          loadmessage: async function(data){
          	 var that = this;
             let res = await http.post(_global_.api.obtainingUserInfor, data);
             // console.log(res);
             if(res.resultCode=="200"){
             that.scrollersBoxData3.rightTitle = res.result.realname.substring(0, 1)+"**";
            }
          }
		}
	}
</script>

<style scoped>

</style>