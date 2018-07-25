<template>
	<div class="bg paddingTop45">
		<register-header :datas="headerData"></register-header>
		<div class="paySuccess">
			<div class="img">
				<img src="static/pay/paySuccess.png">
				<div class="c-E2AF4E text">
					恭喜您，购买成功，请在订单详情或换金券查看兑换码
				</div>
			</div>

		</div>
		<div class="regSuccessBtn">
			<com-button :propObj="propObjBtn_a" @BtnEvent="realNameAuthent()">
			</com-button>
			<com-button :propObj="propObjBtn_b" @BtnEvent="skip()">
			</com-button>
			
			
		</div>

	</div>
</template>

<script>
	import RegisterHeader from '@/components/header/header2'
	import ComButton from '@/components/button/ComButtom'
	import tool from '@/utils/tool'
	export default {
		components: {
			RegisterHeader,
			ComButton
		},
		data() {
			return {
				headerData: {
					title:"支付成功",
					icon:"static/my/my.png",
					jumpHref:"my",
					rightjumpHref:"my",
					classStyle:"",
					classStyleIcon:"fill:#CDA254",
					classStyleFont:"color:#CDA254"
				},
				propObjBtn_a: {
					title: "查看订单",
					classType: "register-btn-style-1",
					classBtnWidth: "register-btn-1",
				},
				propObjBtn_b: {
					title: "继续购买",
					classType: "register-btn-style",
					classBtnWidth: "register-btn-1",
				},
			}
		},
		created() {
			var that = this;  
		},
		methods: {
			realNameAuthent() {
				var that = this;
				var that = this;
				var _data = {
					num:0,
					name:"全部"
				}
				tool.setTabInfo(_data,0);
				that.$router.push({
						name: 'myOrder'
					})
			},
			skip(){
				var that = this;
				var _data = {
					num:0,
					name:"黄金饰品"
				}
				tool.setTabInfo(_data,0);
				that.$router.push({
						name: 'goods'
					})
		}	}
	}
</script>

<style lang='scss' scoped>
	.paySuccess {
		width: 100%;
		text-align: center;
		.img {
			width: 100%;
			background: #ffffff;
			padding: 5rem 0rem;
			margin: 0 auto;
			margin-bottom:2rem;
			.text{
				padding: 0.5rem 0rem;
			}
			img {
				width: 60px;
				height: 60px;
				margin-bottom: 20px;
			}
		}
	}
	
	.regSuccessBtn {
		padding-top: 3PX;
	}
</style>