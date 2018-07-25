<template>
	<div class='goods paddingTop45'>
		<good-header :datas="headerData"></good-header>
        <div class="goodFixed" v-if="loginState == 1">
        	<com-tab :propObj="comTab" @onItemClickTab="onItemClickTab"></com-tab>
        </div>
		<div class="goods-item" v-show="tbindex==0" :class="{ptop:loginState===1 && loginsm===1}">
			<div class="com-position" style="padding-top: 50px;">
				<vueLoading v-show="vueLoading1" :datas="loadingData"></vueLoading>
				<goodsListA @loadMore="loadMore(10)" :more="moreData1" :datas="recommendGoods" :priceUnit="v_priceUnit" v-show="tab1">
				</goodsListA>
				<div v-show="isLogin">
					<goodsListA @loadMore="loadMore(20)" :more="moreData2" :datas="recommendGoods1" :priceUnit="v_priceUnit" v-show="tab2">
					</goodsListA>
					<goodsListA @loadMore="loadMore(30)" :more="moreData3" :datas="recommendGoods2" :priceUnit="v_priceUnit" v-show="tab3">
					</goodsListA>
				</div>

			</div>
		</div>
	</div>
</template>
<style lang='scss'>
		/*.tab-component .vux-tab .vux-tab-item.vux-tab-selected{
		color: #E13D30!important;
	}*/
	.goodFixed{
		position: fixed;z-index: 10;
	}
	.vux-tab .vux-tab-item.vux-tab-selected {
		color: #E13D30 !important;
		 //border-bottom:2px solid  #CDA254 !important;
	}
	
	 .vux-tab-ink-bar,.vux-tab-bar-inner {
	     background-color:#E13D30 !important;
	 }
	.vux-tab-bar-inner {
		background-color: #E13D30!important;
		width: 60px;
	}
	
	.ptop {
		padding-top: 10px;
	}
</style>
<script>
	import Recommend from '../home/components/Recommend.vue'
	import ComTab from '@/components/tab/ComTab'
	import goodsListA from '@/components/goodsListA/index'
	import GoodHeader from '@/components/header/header1.vue'
	import http from '@/utils/http'
	import { hotGoods2, hotBrands, hotBrands2, Goods2, recommendGoods } from './components/data.js'
	import _global_ from '@/utils/Global'
	import tool from '@/utils/tool'
	export default {
		components: {
			Recommend,
			ComTab,
			goodsListA,
			GoodHeader
		},
		data() {
			return {
				isLogin: false,
				moreData1: "上拉加载更多商品...",
				moreData2: "上拉加载更多商品...",
				moreData3: "上拉加载更多商品...",
				moreData4: "上拉加载更多商品...",
				loginState: 0,
				loginsm: 0,
				tabNum: 0,
				paging1: {
					pageNo: 1,
					pageSize: 10,
					productType: ""
				},
				paging2: {
					pageNo: 1,
					pageSize: 10,
					productType: ""
				},
				paging3: {
					pageNo: 1,
					pageSize: 10,
					productType: ""
				},
				v_priceUnit: {
					show: true,
					unit: "￥"
				},
				headerData: {
					title: "商品",
					jumpHref: "",
					rightjumpHref:"my"
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
							name: "黄金饰品",
							smallRes: "",
						},
						{
							name: '千足金条',
							smallRes: ""
						},
						{
							name: '金币银币',
							smallRes: ""
						}
					]
				}
			}
		},
		created() {
			var that = this;
			that.updateTitle('商品');
			var _obj = {
				pageNo: 1,
				pageSize: 10,
				productType: 10
			}
			var _obj1 = {
				pageNo: 1,
				pageSize: 10,
				productType: 20
			}
			var _obj2 = {
				pageNo: 1,
				pageSize: 10,
				productType: 30
			}
			if(that.$store.state.vux.goodsTabState.name != "千足金条" && that.$store.state.vux.goodsTabState.name != "金币银币" ) {
				var _setTabInfo = {
					tabState: 0,
					name: "黄金饰品"
				}
				tool.setTabInfo(_setTabInfo, 0)
			}
			that.moreGoods(_obj);
			that.moreGoods(_obj1);
			that.moreGoods(_obj2);
			if(tool.judgingLogonStatus()) {
				that.loginState = 1;
				
			} else {
				that.loginState = 0;
				
			}
			var _userInfo = JSON.parse(localStorage.getItem('LoginUserInfo'));
			if(_userInfo) {
				if(_userInfo.realnameStatus === 10) {
					that.loginsm = 0;
				} else if(_userInfo.realnameStatus === 20) {
					that.loginsm = 1;
				}
			}
		},
		mounted() {
			//对应还有个beforeMount
			this.$nextTick(function() {
				//this.initTab();
			})
		},
		methods: {
			loadMore(data) {
				var that = this;
				console.log(data);
				if(data === 10) {
					if(that.tabNum === 0) {
						var _obj = {
							pageNo: 1,
							pageSize: 10,
							productType: data
						}
						if(that.paging1.pageNo) {
							that.paging1.pageNo++;
							_obj.pageNo = that.paging1.pageNo;
							that.moreGoods(_obj);
						}
					}

				} else if(data === 20) {
					if(that.tabNum === 1) {
						var _obj = {
							pageNo: 1,
							pageSize: 10,
							productType: data
						}
						if(that.paging2.pageNo) {
							that.paging2.pageNo++;
							_obj.pageNo = that.paging2.pageNo;
							that.moreGoods(_obj);
						}
					}
				} else if(data === 30) {
					if(that.tabNum === 2) {
						var _obj = {
							pageNo: 1,
							pageSize: 10,
							productType: data
						}
						if(that.paging3.pageNo) {
							that.paging3.pageNo++;
							_obj.pageNo = that.paging3.pageNo;
							that.moreGoods(_obj);
						}
					}
				}

				console.log("滚动了");
			},
			tabEvent: function(index) {
				this.tbindex = index;
			},
			onItemClickTab(data) {
				console.log(data);
				var that = this;
				that.tabNum = data;
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
				let _url = _global_.api.moreGoods;

				let res = await http.post(_url, data);
				that.vueLoading1 = false;
				var _brandListData = tool.priceUnitTrans(res.result, 1);
				if(data.productType === 10) {
					if(data.pageNo === 1) {
						that.recommendGoods = [];
						if(res.result && res.result.length <= 10) {
							that.moreData1 = "没有更多了"
						}
					}
					if(res.result && res.result.length <= 1) {
						that.moreData1 = "没有更多了"
					}
					that.recommendGoods = that.recommendGoods.concat(_brandListData);
				} else if(data.productType === 20) {
					if(data.pageNo === 1) {
						that.recommendGoods1 = [];
						if(res.result && res.result.length <= 10) {
							that.moreData2 = "没有更多了"
						}
					}
					if(res.result && res.result.length <= 0) {
						that.moreData2 = "没有更多了"
					}
					if(that.loginState === 1) {
						that.isLogin = true;
						if(res.result && res.result.length <= 0) {
							that.moreData2 = "没有更多了";
						}
					} else {
						that.isLogin = false;
					}
					that.recommendGoods1 = that.recommendGoods1.concat(_brandListData);
				} else if(data.productType === 30) {
					if(data.pageNo === 1) {
						if(res.result && res.result.length <= 10) {
							that.moreData3 = "没有更多了"
						}
						that.recommendGoods2 = [];
					}
					if(res.result && res.result.length <= 0) {
						that.moreData3 = "没有更多了"
					}
					if(that.loginState === 1) {
						that.isLogin = true;
						that.moreData3 = "没有更多了";
					} else {
						that.isLogin = false;
					}
					that.recommendGoods2 = that.recommendGoods2.concat(_brandListData);
				}

			}
		}
	}
</script>