<template>
	<div class="vScrollerBox">
		<div :class="datas.titleHead"  @click="routerJump">
			<div :class="datas.leftTextClass">
				<span v-show="datas.leftIcon">
					<img :src="datas.iconAddress" :style="datas.iconStyle">
				</span>
				<span :style="datas.leftTextMargin">
						{{propObj.leftTitle}}
				</span>
			</div>
			<div>
				<div :class="datas.arrowShow" :style="datas.rightTextMargin">

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
				let _routerHref = that.datas.routerHref;
				if(_routerHref){
					let _tabState = {
					tabState: that.datas.tabState,
					name: that.datas.tabTitle,
				}
				that.$store.dispatch('updateTabState', _tabState);
				if(_routerHref === "brand") {
					that.$store.state.vux.tabNum = 1;
				}
				that.$router.push({
					path: _routerHref,
					params: {
						id: data,
					}
				})
				}
				
				
			}

		}
	}
</script>
<style>
	.title-head {
		clear: both;
		color: #656565;
		width: 90%;
		margin: 0 auto;
		background-color: #fff;
		position: relative;
		}
	.arrowShow4 {
		position: absolute;
		right: 14%;
		top: -25px;
		color: #8A8A8A;
	}
	.arrowShow4:after {
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
</style>
<style lang="scss" scoped>
 
.vScrollerBox{
	/*padding: 4px 0px;
	margin-top: 8px;*/
	img{
	vertical-align: middle;width: 20px; height: 25px;margin-right: 6px;
}
}

	.title-head {
		clear: both;
		color: #656565;
		width: 90%;
		margin: 0 auto;
		height: 50px;
		background-color: #fff;
		position: relative;
		.leftText {
			
			padding-top: 15px;
		}
		.arrowShow3{
			position: absolute;
		right: 8.5%;
		top: 5%;
		color: #8A8A8A;
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
		right: 5%;
		top: 32%;
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
		right: 0%;
		top: 32%;
		color: #8A8A8A;
	}
	
	
	.title-head1 .arrowShow1 {
		position: absolute;
		top: 32%;
		color: #8A8A8A;
		right: 15%;
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
	 .arrowShow10:after {
		position: absolute;
		content: " ";
		display: inline-block;
		height: 0px!important;
		width: 0px!important;
		border-width: 0px 0px 0 0;
		display: none!important;
		border-color: #ffffff;
		border-style: solid;
		-webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
		transform: matrix(.71, .71, -.71, .71, 0, 0);
		top: 47%;
		margin-top: -4px;
		right: 0%;
	}
</style>