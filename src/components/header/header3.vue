<template id="pay">
	<div>
		<div class="home-header" :class="datas.classStyle"  style="width: 100%;position: fixed;left: 0px;top: 0px;z-index: 101;" :style="datas.isBorder">
			<div class="home-header-box">
				<div class="left">
					<div class="logo" @click="goBack">
						<x-icon type="ios-arrow-left" size="30" :style="datas.classStyleIcon"></x-icon>
					</div>
					<div class="search">
						<div style="font-size:1.2em!important;">
							<span :style="datas.classStyleFont">
							{{ datas.title }}
						</span>
						</div>
					</div>
				</div>
				
			</div>

			
		</div>
	</div>

</template>
<style>
	.weui-icon-search{
		font-size: 16px!important;
	}
</style>
<style lang='scss' scoped>
	.home-header {
		width: 100%;
		background: #ffffff;
		box-sizing: border-box;
		height: 46px;
		padding-top: 10px;
		z-index: 1;
		border-top:#FAFAFA 1px solid;
		border-bottom:#efefef 1px solid;
		display: flex;
		.home-header-box {
			width: 90%;
			margin: 0 auto;
			height: 46px;
			.left {
				float: left;
				width: 75%;
				height: 46px;
				.logo {
					width: 25%;
					float: left;
					img {
						height: 26px;
						margin-top: -2px;
					}
				}
				.search {
					width: 70%;
					float: left;
					position: relative;
					padding-left: 5%;
					text-align: center;
					color: #ffffff;
					.search-icon {
						position: absolute;
						left: 20px;
						top: 6px
					}
					.input {
						width: 100%;
						padding: 6px;
						padding-left: 34px;
						font-size: 0.7em;
						border-radius: 1rem;
						border: 0;
						background: #ffffff;
					}
					.input1 {
						width: 126%;
						padding: 6px;
						padding-left: 34px;
						font-size: 0.8em;
						border-radius: 1rem;
						border: 0;
						background: #ffffff;
					}
				}
			}
			.right {
				float: right;
				text-align: right;
				width: 25%;
				span {
					color: #ffffff;
				}
				.alreadyLogged {
					img {
						width: 28px;
						height: 28px;
					}
				}
			}
		}
		.logo {
			img {}
		}
		.status {
			margin-left: 10px;
			a {
				display: inline-block;
				overflow: hidden;
				img {
					width: 26px;
					height: 26px;
				}
			}
		}
	}
	.hearderBgColor{
		/*background-image: -webkit-linear-gradient(0deg, #CDA254, #FFD487);*/
		color: #ffffff;
	}
	.headerStyle {
		color: #ffffff;
		background: #07A0F8;
	}
</style>
<script>
	import { ViewBox, Icon } from 'vux'
	export default {
		components: {
			ViewBox,
			Icon
		},
		props: ['datas'],
		data() {
			return {
				headerStyle: '',
				value: '',
				searchQuery: '',
				resultData: [],
			}
		},
		//组件实例创建完成，属性已绑定，Dom还未生成。el属性还不存在
		created() {
			//对应还有个beforeCreate
		},
		//模板编译/挂载之后
		mounted() {
			//对应还有个beforeMount
			this.$nextTick(function() {})
		},
		methods: {
			jumpHref() {
				var that = this;
				var _href = that.datas.rightjumpHref;
				that.$router.push({
					name: _href
				});
			},
			goBack() {
				var that = this;
				//that.$router.push({name: 'home'});
				if(that.datas.jumpLeftHref) {
					var _fptt = "";
					var _fpzt = "";
					var _bz = "";
					if(that.datas.fptt){
						_fptt = that.datas.fptt;
					}
					if(that.datas.fpzt){
						_fpzt = that.datas.fpzt;
					}
					if(that.datas.bz){
						_bz = that.datas.bz;
					}
					that.$router.push({
						name: that.datas.jumpLeftHref,
						params: {
							fptt:_fptt,
							fpzt:_fpzt,
							bz:_bz
						}
					});
				} else {
					
					var _href = that.datas.jumpHref;
					var _id = "";
					if(_href){
						that.$router.push({
					      name: _href,
					      params: {
							id:that.datas.id,
						}
				         });
					}else{
						that.$router.back(-1);
					}
					
				}

			},
			resultClick(item) {
				this.searchQuery = item.title
				this.resultData = searchResult
			},
			JumpRegister() {
				var that = this;
				that.$router.push({
					name: 'register'
				});
			},
			JumpLogin() {
				var that = this;
				that.$router.push({
					name: 'login'
				});
			},
			search() {
				var that = this;
				that.$router.push({
					name: 'search'
				});
			}
		},
		//组件更新后
		updated() {
			//对应还有个beforeUpdate
		},
		destory() {}
	}
</script>