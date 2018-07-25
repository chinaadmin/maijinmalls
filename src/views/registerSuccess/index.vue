<template>
	<div class="bg paddingTop45">
		<register-header :datas="headerData"></register-header>
		<div class="regSuccess">
			<div class="img">
				<img src="static/register/regSuccess.png">
				<div class="c-E2AF4E text">
					恭喜您，注册成功
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
					title: "注册成功",
					icon: "",
					jumpHref: "setUp",
					classStyle: "",
					classStyleIcon:"fill:#ffffff",
					classStyleFont:"color:#333333;font-size:16px;",
				},
				propObjBtn_a: {
					title: "继续实名认证",
					classType: "register-btn-style",
					classBtnWidth: "register-btn",
				},
				propObjBtn_b: {
					title: "跳过",
					classType: "register-btn-style-1",
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
				that.$router.push({
						name: 'realNameAuthent'
					})
			},
			skip(){
				var that = this;
				
				that.$router.push({
						name: 'my'
					})
		}	}
	}
</script>

<style lang='scss' scoped>
	.regSuccess {
		width: 100%;
		text-align: center;
		.img {
			width: 100%;
			background: #ffffff;
			padding: 8rem 0rem;
			margin: 0 auto;
			.text{
				padding: 0.5rem 0rem;
			}
			img {
				width: 130px;
				height: 130px;
			}
		}
	}
	
	.regSuccessBtn {
		padding-top: 3PX;
	}
</style>