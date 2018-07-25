<template>
	<div class="bg paddingTop45">
		<register-header :datas="vueDatas.headerData"></register-header>
		<div class="paySuccess">
			<div class="img">
				<img src="static/pay/paySuccess.png">
				<div class="c-E2AF4E text">
					{{ vueDatas.popupText }}
				</div>
			</div>

		</div>
		
			<com-button :propObj="propObjBtn_b" @BtnEvent="skip(vueDatas.jumpRouter)">
			</com-button>
			

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
		props: {
			vueDatas: {
				type: Object,
				required: true,
			}
		},
		data() {
			return {
				headerData: {
					title:"找回密码",
					jumpHref:"my",
					jumpLeftHref:"my",
					classStyle:"",
					classStyleIcon:"fill:#757575",
					classStyleFont:"color:#333333;font-size:16px;",
				},
				propObjBtn_a: {
					title: "查看订单",
					classType: "register-btn-style-1",
					classBtnWidth: "register-btn-1",
				},
				propObjBtn_b: {
					title: "完成",
					classType: "register-btn-style",
					classBtnWidth: "register-btn",
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
			skip(data){
				var that = this;
				that.$router.push({
						name: data
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