<template>
	<div>
		<div :class="datas.titleHead" @click="routerJump">
			<div :class="datas.leftTextClass">
				<div class="setUp">
					<img src="static/my/my_init.png">
				</div>
			</div>
			<div>
				<div :class="datas.arrowShow" >
					<span>
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
</script>
<style lang="scss" scoped>
	.title-head {
		clear: both;
		color: #656565;
		width: 90%;
		margin: 0 auto;
		height: 50px;
		background-color: #fff;
		position: relative;
		.leftText {
			color: #000000;
			padding-top: 10px;
		}
		
	}
	.setUp{
			img{
				width: 50px;
				height: 50px;
			}
		}
	.title-head1 {
		clear: both;
		color: #656565;
		width: 100%;
		height: 70px;
		padding: 0% 5%;
		background-color: #fff;
		position: relative;
		
		.leftText {
			color: #000000;
			padding-top: 10px;
		}
	}
	
	.title-head .arrowShow {
		position: absolute;
		right: 5%;
		top: 34%;
		color: #8A8A8A;
	}
	
	.title-head1 .arrowShow {
		position: absolute;
		top: 36%;
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
	
	.title-head .arrowShow1:after {}
</style>