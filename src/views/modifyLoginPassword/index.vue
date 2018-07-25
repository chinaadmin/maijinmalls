<template>
	<div id="Login" class="paddingTop45">
		<set-header :datas="headerData"></set-header>
		<formInit></formInit>
	</div>
</template>

<script>
	import formInit from './components/formInit'
	import SetHeader from '@/components/header/header2'
	export default {
		components: {
			formInit,
			SetHeader
		},
		data() {
			return {
				headerData: {
					title: "修改登录密码",
					icon: "",
					jumpHref: "",
					jumpLeftHref: "",
					classStyle: "",
					classStyleIcon:"fill:#757575",
					classStyleFont:"color:#333333;font-size:16px;",
				},
			}
		},
		created() {
			let that = this;
			that.updateTitle('修改密码');
		},
		methods: {

		}
	}
</script>

<style>

</style>