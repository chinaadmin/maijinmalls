<template>
	<div>
		<div :class="datas.titleHead">
				
			<div :class="datas.leftTextClass">
				{{datas.leftTitle}}
			</div>
			<div class="right">
			
					<div class="userImg">
						<img src="/static/my/my_init.png">
					</div>
				
			</div>
			
		</div>
	</div>
</template>
<script>
	export default {
		name: "ScrollerBoxa",
		components: {

		},
		props: {
			datas: {
				type: Object,
				required: true,
			}
		},
		data() {
			return {

			}
		},
		created() {
			var that = this;

		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>

.title-head1 {
		clear: both;
	color: #656565;
	width: 100%;
	height: 90px;
	padding:0% 5% ;
	background-color: #fff;
	position:relative;
		.right{
			width: 42%;
			display: inline-block;
			padding-top: 0px;
		}
		.leftText {
			color: #000000;
			font-size: 1.2em;
			padding-top: 32px;
			float: left;
			width: 40%;
		}
		.userImg {
			position: relative;
			text-align: right;
			margin-top: 10px;
			img{
				width: 60px;
				height:60px;
			}
		}
	}

.title-head2 {
		clear: both;
	color: #656565;
	width: 100%;
	height: 80px;
	padding:0% 5% ;
	background-color: #fff;
	position:relative;
		.right{
			width: 50%;
			display: inline-block;
			padding-top: 0px;
		}
		.leftText {
			color: #000000;
			font-size: 1.2em;
			padding-top: 27px;
			float: left;
			width: 40%;
		}
		.userImg {
			position: relative;
			text-align: right;
			margin-top: 10px;
			img{
				width: 60px;
				height:60px;
			}
		}
	}

	.title-head {
		width: 90%;
		clear: both;
		margin: 0 auto;
		color: #656565;
		height: 90px;
		background-color: #ffffff;
		position: relative;
		.right{
			width: 45%;
			display: inline-block;
			padding-top: 0px;
		}
		.leftText {
			color: #000000;
			font-size: 1.2em;
			padding-top: 32px;
			float: left;
			width: 49%;
		}
		.userImg {
			position: relative;
			text-align: right;
			margin-top: 10px;
			img{
				width: 60px;
				height:60px;
			}
		}
	}
	.title-head1 a{
		position: relative;
	}
		.title-head2 a{
		position: relative;
	}
	.title-head a {
		position: relative;
		/*
		right: 5%;
		top: 32%;
		color: #8A8A8A;*/
	}
	
	.title-head .userImg:after {
		position: absolute;
		content: " ";
		height: 10px;
		width: 10px;
		border-width: 1px 1px 0 0;
		border-color: #c8c8cd;
		border-style: solid;
		-webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
		transform: matrix(.71, .71, -.71, .71, 0, 0);
		top: 35px;
		margin-top: -4px;
		right: -14%;
	}
	.title-head1 .userImg:after {
		position: absolute;
		content: " ";
		height: 10px;
		width: 10px;
		border-width: 1px 1px 0 0;
		border-color: #c8c8cd;
		border-style: solid;
		-webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
		transform: matrix(.71, .71, -.71, .71, 0, 0);
		top: 35px;
		margin-top: -4px;
		right: -14%;
	}

		.title-head2 .userImg:after {
		position: absolute;
		content: " ";
		height: 10px;
		width: 10px;
		border-width: 1px 1px 0 0;
		border-color: #c8c8cd;
		border-style: solid;
		-webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
		transform: matrix(.71, .71, -.71, .71, 0, 0);
		top: 35px;
		margin-top: -4px;
		right: -14%;
	}
</style>