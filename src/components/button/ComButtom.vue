<template>
	<div :class="btnWidth">
		<x-button type="primary" :class="btnClass" action-type="button" @click.native="BtnEvent">{{btnTitle}}</x-button>
	</div>
</template>
<script>
	import { XButton } from 'vux'
	export default {
		name: "ComButtom",
		components: {
			XButton

		},
		data() {
			return {
				btnTitle:"",
				btnClass:"",
				btnWidth:""
		}},
		props: {
			propObj: {
				type: Object,
				required: true,
			}
		},
		created() {
			var that = this;
			that.btnTitle = that.propObj.title;
			that.btnClass = that.propObj.classType
			that.btnWidth = that.propObj.classBtnWidth;
		},
		methods: {
          BtnEvent(){
          	var that = this;
          	var _data = "";
          	that.$emit("BtnEvent",_data);
          }
		}
	}
</script>
<style>
	.register-btn {
		width: 92%;
		margin: 0 auto;
		text-align: center;
	}
	.register-btn-1 {
		width: 40%;
		margin: 0 auto;
		text-align: center;
		float: left;
		margin-left: 5%;
	}
	.register-btn-style {
		//background-image: -webkit-linear-gradient(0deg, #CDA254, #FFD487);
		background-image: -webkit-linear-gradient(0deg, #BF2717, #E13D30);
		margin-top: 1rem!important;
		border-radius: 50px!important;
	}
	
	.register-btn-style-1 {
		background: #ffffff!important;
		margin-top: 1rem!important;
		//border: #E2AF4E 1px solid!important;
		border: #E13D30 1px solid!important;
		border-radius: 50px!important;
		//color: #E2AF4E!important;
		color: #E13D30!important;
	}
	.register-btn-style-2 {
		background: #ffffff!important;
		margin-top: 1rem!important;
		border: #F93737 1px solid!important;
		border-radius: 50px!important;
		color: #F93737!important;
	}
	.register-btn-style-3 {
		background-image: -webkit-linear-gradient(0deg, #CDA254, #FFD487);
		margin-top: 1rem!important;
		border-radius:50px!important;
		width: 40%;
	}
	.register-btn-style-4 {
		background-image: -webkit-linear-gradient(0deg, #CDA254, #FFD487);
		//background-image: -webkit-linear-gradient(0deg, #BF2717, #E13D30);
		margin-top: 1rem!important;
		border-radius: 50px!important;
	}
</style>