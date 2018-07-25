<template>
	<div class='goods paddingTop45 bg good-d'>
		<good-header :datas="headerData"></good-header>
		<div style="position: fixed;z-index: 10000;">
			<com-tab :propObj="comTab" @onItemClickTab="onItemClickTab"></com-tab>
		</div>

		<div class="goods-item" v-show="tbindex==0" style="margin-top: 50px;">
			<div v-show="tab1">
				<div v-show="!isList1" class="defaultUiNo">
					<defaultUiNo :datas="defaultUi"></defaultUiNo>
				</div>
				<div class="goldExVoucher" v-for="item in recommendGoods1" v-show="isList1">
					<div @click="toOrderDetails(item.orderId)">
						<div class="goldExVoucher-box">
							<div class="goldExVoucher-box-top">
								<div class="goldExVoucher-box-top-left c-E13D30">
									换金券
								</div>
								<div class="goldExVoucher-box-top-right">
									<span class="div1">
								<div class="text1 c-E13D30">¥{{ item.ticketAmount }}元</div>
								<div class="text2 c-999999">
									<span>购买日期:</span>
									<span>{{ item.buyTime }}</span>
								</div>
								</span>
								<span class="div2"><x-icon type="ios-arrow-right" size="15" class="icon-class"></x-icon></span>
							</div>
							<div class="leftCircular">

							</div>
							<div class="rightCircular">

							</div>
						</div>
					</div>
					<div class="goldExVoucher">
						<div class="goldExVoucher-bg">
							<div>
								<span>兑换码: </span>
								<span>{{ item.redeemCode }}</span>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		<div v-show="tab2">
			<div v-show="!isList2" class="defaultUiNo">
				<defaultUiNo :datas="defaultUi"></defaultUiNo>
			</div>
			<div class="goldExVoucher" v-for="item in recommendGoods2" v-show="isList2">
				<div @click="toOrderDetails(item.orderId)">
					<div class="goldExVoucher-box">
						<div class="goldExVoucher-box-top">
							<div class="goldExVoucher-box-top-left goldExVouchers ">
								换金券
							</div>
							<div class="goldExVoucher-box-top-right">
								<span class="div1">
								<div class="text1 text3 ">¥{{ item.ticketAmount }}</div>
								<div class="text2 c-999999">
									<span>购买日期:</span>
								<span>{{ item.buyTime }}</span>
							</div>
							</span>
							<span class="div2">
								 <x-icon type="ios-arrow-right" size="15" class="icon-class"></x-icon>
							</span>
						</div>
						<div class="leftCircular">

						</div>
						<div class="rightCircular">

						</div>
					</div>
					<div>

					</div>

				</div>
				<div class="top_duihuang"><img src="../../../static/my/Group.png"></div>
				<div class="goldExVoucher">
					<div class="goldExVoucher-bg goldExVoucher-bg1">
						<div>
							<span>兑换码: </span>
							<span>{{ item.redeemCode }}</span>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>

	</div>
	</div>
</template>
<style lang='scss'>
	.orderLists-box {
		width: 100%;
		height: 100%;
		position: relative;
		margin-top: 66px;
	}
	
	.good-d .defaultUiNo {
		position: absolute;
		left: 0%;
		top: 0%;
		bottom: 0px;
		right: 0;
		height: 100%;
	}
	
	.top_duihuang {
		width: 44px;
		height: 28px;
		/*background:red;*/
		position: absolute;
		top: 6px;
		right: 10%;
	}
	
	.top_duihuang img {
		width: 44px;
		height: 24px;
	}
	
	.goldExVoucher {
		width: 100%;
		position: relative;
		.goldExVoucher {
			width: 90%;
			margin: 0 auto;
			padding: 0px 0%;
			.goldExVoucher-bg {
				text-align: center;
				line-height: 42px;
				color: #ffffff;
				width: 100%;
				height: 42px;
				padding-top: 2px;
				background: url(../../../static/common/red-goldExVoucher.png) no-repeat;
			}
			.goldExVoucher-bg1 {
				text-align: center;
				line-height: 42px;
				color: #ffffff;
				width: 100%;
				height: 42px;
				padding-top: 2px;
				background: url(../../../static/my/goldExVoucher1.png) no-repeat;
			}
		}
		.goldExVoucher-box {
			width: 80%;
			margin: 0 auto;
			padding: 12px 5%;
			border-radius: 0.6rem;
			background: #ffffff;
			.goldExVoucher-box-top {
				width: 100%;
				position: relative;
				display: table;
				padding-top:4px;
				.leftCircular {
					position: absolute;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					background: #f5f5f5;
					margin-left: -30px;
					margin-top: 32px;
				}
				.rightCircular {
					position: absolute;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					right: -27px;
					background: #f5f5f5;
					margin-top: 32px;
				}
				.goldExVoucher-box-top-left {
					width: 5px;
					float: left;
					font-size: 1.2em;
					margin-right: 50px;
					position: relative;
				}
				.goldExVoucher-box-top-left:after {
					position: absolute!important;
					top: 10px!important;
					height: calc(100% - 0.2em)!important;
					left: 35px;
					content: '';
					width: 30px!important;
					height: 60px!important;
					border-left: solid 1px #ebebeb!important;
					border-radius: 0!important;
				}
				.goldExVouchers {
					color: #999999;
				}
				.goldExVoucher-box-top-right {
					float: left;
					width: 80%;
					position: relative;
					.div1 {
						.text1 {
							margin-bottom: 10px;
							font-size: 1.5em;
						}
						.text3 {
							color: #999999;
						}
					}
					.div2 {
						position: absolute;
						top: 30px;
						right: 0;
						.icon-class {
							fill: #8A8A8A;
						}
					}
				}
			}
		}
	}
	
	.vux-tab .vux-tab-item.vux-tab-selected {
		color: #CDA254 !important;
		// border-bottom:2px solid  #CDA254 !important;
	}
	
	// .vux-tab-ink-bar,.vux-tab-bar-inner {
	//     background-color:#CDA254 !important;
	// }
	.vux-tab-bar-inner {
		background-color: #CDA254!important;
		width: 60px;
	}
	
	.goods-item {
		margin-top: 17px;
	}
</style>
<script>
	import Recommend from '../home/components/Recommend.vue'
	import ComTab from '@/components/tab/ComTab'
	import goodsListA from '@/components/goodsListA/index'
	import GoodHeader from '@/components/header/header2.vue'
	import defaultUiNo from '@/components/defaultUi/index'
	import http from '@/utils/http'
	import tool from '@/utils/tool'
	import { hotGoods2, hotBrands, hotBrands2, Goods2, recommendGoods } from './components/data.js'
	import _global_ from '@/utils/Global'
	export default {
		components: {
			Recommend,
			ComTab,
			goodsListA,
			GoodHeader,
			defaultUiNo
		},
		data() {
			return {
				isList2: false,
				isList1: false,
				defaultUi: {
					defaultUiImg: "static/common/noRecord.png",
					text: "暂无记录"
				},
				headerData: {
					rightjumpHref: "my",
					title: "我的换金券",
					icon: "static/common/my2.png",
					jumpHref: "my",
					classStyleIcon: "fill:#757575",
					classStyleFont: "color:#333333;font-size:16px"
				},
				tab1: true,
				tab2: false,
				tab3: false,
				recommendGoods: recommendGoods,
				recommendGoods1: recommendGoods,
				recommendGoods2: recommendGoods,
				loadingData: {
					v_width: "100%",
					height: "",
				},
				vueLoading1: true,
				goodsType: "",
				Goods2: Goods2,
				tbindex: '0',
				comTab: {
					list: [{
							name: "未兑换",
							smallRes: "",
						},
						{
							name: '已兑换',
							smallRes: ""
						}
					]
				}
			}
		},
		created() {
			var that = this;
			that.updateTitle('商品');
			var _setTabInfo = {
				tabState: 0,
				name: "未兑换"
			}
			tool.setTabInfo(_setTabInfo, 0)
			that.moreGoods(20);
			that.moreGoods(30);
		},
		mounted() {
			//对应还有个beforeMount
			this.$nextTick(function() {
				//this.initTab();
			})
		},
		methods: {
			toOrderDetails(data) {
				var that = this;
				if(data) {
					that.$router.push({
						name: 'orderDetails',
						params: {
							id: data,
						}
					})
				}

			},
			tabEvent: function(index) {
				this.tbindex = index;
			},
			onItemClickTab(data) {
				console.log(data);
				var that = this;
				if(data === 0) {
					that.tab3 = false;
					that.tab2 = false;
					that.tab1 = true;
				} else if(data === 1) {
					that.tab1 = false;
					that.tab3 = false;
					that.tab2 = true;
				} else if(data === 2) {
					that.tab1 = false;
					that.tab2 = false;
					that.tab3 = true;
				}
			},
			initTab: function() {
				this.tbindex = this.$route.params.type;
			},
			moreGoods: async function(data) {
				var that = this;
				let _url = _global_.api.my.queryGoldExVoucher;
				var _obj = {
					pageNo: 1,
					pageSize: 10,
					status: ""
				}
				_obj.status = data;
				let res = await http.post(_url, _obj);
				that.vueLoading1 = false;
				if(data === 20) {
					that.recommendGoods1 = res.result;
					if(that.recommendGoods1.length > 0) {
						that.isList1 = true;
					} else {
						that.isList1 = false;
					}
				} else if(data === 30) {
					that.recommendGoods2 = res.result;
					if(that.recommendGoods2.length > 0) {
						that.isList2 = true;
					} else {
						that.isList2 = false;
					}
				}

			}
		}
	}
</script>