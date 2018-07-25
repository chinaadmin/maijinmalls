<template>
	<div @click="routerJump">
		<div  class="scrollerBoxc">
			<div  class="scrollerBoxcL">
				<div v-show="datas.leftIcon" class="scrollerBoxcL1">
					<img :src="datas.iconAddress" :class="propObj.imgClass">
				</div>
				<div class="scrollerBoxcL2">
					<div class="div">
						{{propObj.leftTitle1}}
					</div>
					<div class="div">
						{{propObj.leftTitle2}}
					</div>
						
				</div>
			</div>
			<div class="scrollerBoxcR title-head">
				<div :class="propObj.arrowShow">
					<span >
						{{propObj.rightTitle}}
					</span>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		name: "ScrollerBox",
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
               leftIcon:false,
			}
		},
		computed: {
			propObj() {
				var that = this;
				//that.$store.dispatch('updateLoginState', 1);
				return that.datas
			}
		},
		created() {
			var that = this;

		},
		methods: {
			routerJump(data) {
				var that = this;
				var _data = "";
				that.$emit("routerJump",_data);
			}

		}
	}
</script>
<style lang="scss" scoped>
.scrollerBoxc{
	width: 90%;
	margin: 0 auto;
	.scrollerBoxcL{
	  float: left;
	  .scrollerBoxcL1{
	  	display: inline-block;
	  	img{
	  		margin-right: 10px;
	  	}
	  	.img1{
	  		vertical-align: middle;width: 25px; height: 25px;margin-right: 10px;
	  	}
	  	.img2{
	  		width: 22px; height: 22px;margin-right: 10px;
	  	}
	  }
	  .scrollerBoxcL2{
	  	display: inline-block;
	  	.div{
	  		padding: 3px 0px;
	  	}
	  }
    }
    .scrollerBoxcR{
	  float: right;
	  width: 25%;
    }
}
   
	
	
	.title-head1 {
		clear: both;
		color: #656565;
		width: 100%;
		height: 50px;
		padding: 0% 5%;
		background-color: #fff;
		position: relative;
		.leftText {
			color: #000000;
			padding-top: 15px;
		}
	}
	.title-head2 {
		clear: both;
		color: #656565;
		width: 100%;
		height: 50px;
		padding: 0% 5%;
		background-color: #fff;
		position: relative;
		.leftText {
			color: #000000;
			padding-top: 15px;
		}
	}
	.title-head .arrowShow {
		position: absolute;
		right: 8%;
		top: 40%;
		color: #8A8A8A;
	}
	.title-head .arrowShow0 {
		position: absolute;
		right: 8.5%;
		top: 50%;
		color: #8A8A8A;
	}
	.title-head1 .arrowShow {
		position: absolute;
		top: 32%;
		color: #8A8A8A;
		right: 19%;
	}
	
	
	
	.title-head .arrowShow1 {
		position: absolute;
		top: 25%;
		color: #8A8A8A;
		right: 8.5%;
	}
	.title-head2 .arrowShow {
		position: absolute;
		top: 52%;
		color: #8A8A8A;
		right: 16%;
	}
	.title-head2 .arrowShow2 {
		position: absolute;
		top: 52%;
		color: #8A8A8A;
		right: 16%;
	}
	.title-head .arrowShow:after {
		position: absolute;
		content: " ";
		display: inline-block;
		height: 8px;
		width: 8px;
		border-width: 1px 1px 0 0;
		border-color: #c8c8cd;
		border-style: solid;
		-webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
		transform: matrix(.71, .71, -.71, .71, 0, 0);
		top: 50%;
		margin-top: -4px;
		right: -15px;
	}
	.title-head .arrowShow0:after {
		position: absolute;
		content: " ";
		display: inline-block;
		height: 8px;
		width: 8px;
		border-width: 1px 1px 0 0;
		border-color: #c8c8cd;
		border-style: solid;
		-webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
		transform: matrix(.71, .71, -.71, .71, 0, 0);
		top: 50%;
		margin-top: -4px;
		right: -15px;
	}
	.title-head .arrowShow1:after {
	position: absolute;
		content: " ";
		display: inline-block;
		height: 8px;
		width: 8px;
		border-width: 1px 1px 0 0;
		border-color: #c8c8cd;
		border-style: solid;
		-webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
		transform: matrix(.71, .71, -.71, .71, 0, 0);
		top: 50%;
		margin-top: -4px;
		right: -15px;
	}
	.title-head .arrowShow2:after {
		position: absolute;
		content: " ";
		display: inline-block;
		height: 8px;
		width: 8px;
		border-width: 1px 1px 0 0;
		border-color: #c8c8cd;
		border-style: solid;
		-webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
		transform: matrix(.71, .71, -.71, .71, 0, 0);
		top: 47%;
		margin-top: -4px;
		right: 0%;
	}
	.title-head1 .arrowShow:after {
		position: absolute;
		content: " ";
		display: inline-block;
		height: 8px;
		width: 8px;
		border-width: 1px 1px 0 0;
		border-color: #c8c8cd;
		border-style: solid;
		-webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
		transform: matrix(.71, .71, -.71, .71, 0, 0);
		top: 47%;
		margin-top: -4px;
		right: -38%;
	}
	.title-head2 .arrowShow:after {
		position: absolute;
		content: " ";
		display: inline-block;
		height: 8px;
		width: 8px;
		border-width: 1px 1px 0 0;
		border-color: #c8c8cd;
		border-style: solid;
		-webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
		transform: matrix(.71, .71, -.71, .71, 0, 0);
		top: 47%;
		margin-top: -4px;
		right: -38%;
	}
</style>