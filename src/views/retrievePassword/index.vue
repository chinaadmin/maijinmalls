<template>
	<div id="Login" class="paddingTop45">
	    <password-header :datas="headerData"></password-header>
		<formInit></formInit>
	</div>
</template>

<script>
	import formInit from './components/formInit'
	import PasswordHeader from '@/components/header/header2'
	
	export default {
		components: {
			formInit,
			PasswordHeader
		},
		data() {
			return {
                headerData: {
					title: "找回密码",
					icon: "",
					jumpHref: "",
					classStyle: "",
					classStyleIcon:"fill:#757575",
					classStyleFont:"color:#333333;font-size:16px;",
				},
			}
		},
		created() {
			let that = this;
			that.updateTitle('找回密码');
		},
		methods: {

		}
	}
</script>

<style>

</style>