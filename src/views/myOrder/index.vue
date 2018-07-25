<template>
	<div class='goods paddingTop45'>
		<good-header :datas="headerData"></good-header>
		<div>
			<com-tab :propObj="comTab" @onItemClickTab="onItemClickTab"></com-tab>
		</div>
		<div class="goods-item" v-show="tbindex==0">
			<div class="com-position" style="width: 100%; height: 100%;">
				<vueLoading v-show="vueLoading" :datas="loadingData"></vueLoading>
				<div class="orderLists-box" v-show="isOrderList">
					<div v-show="!isList1" class="defaultUiNo">
						<defaultUiNo :datas="defaultUi"></defaultUiNo>
					</div>
					<orderLists @loadMore="loadMore(0)" :more="moreData1" :datas="myOrderListArray" @v_cancelOrder="v_cancelOrder" @confirmCaching="confirmCaching" ></orderLists>
				</div>
				<div  class="orderLists-box" v-show="isOrderList1">
					<div v-show="!isList2" class="defaultUiNo">
						<defaultUiNo :datas="defaultUi"></defaultUiNo>
					</div>
					<orderLists @loadMore="loadMore(1)" :more="moreData2" :datas="myOrderListArray1" @v_cancelOrder="v_cancelOrder" @confirmCaching="confirmCaching" ></orderLists>
				</div>
                <div  class="orderLists-box" v-show="isOrderList2">
					<div v-show="!isList3" class="defaultUiNo">
						<defaultUiNo :datas="defaultUi"></defaultUiNo>
					</div>
					<orderLists @loadMore="loadMore(2)" :more="moreData3" :datas="myOrderListArray2" @v_cancelOrder="v_cancelOrder" @confirmCaching="confirmCaching" ></orderLists>
				</div>
				 <div  class="orderLists-box" v-show="isOrderList3">
					<div v-show="!isList4" class="defaultUiNo">
						<defaultUiNo :datas="defaultUi"></defaultUiNo>
					</div>
					<orderLists @loadMore="loadMore(3)" :more="moreData4" :datas="myOrderListArray3" @v_cancelOrder="v_cancelOrder" @confirmCaching="confirmCaching" ></orderLists>
				</div>
				
			</div>
		</div>
	</div>
</template>
<style lang='scss'>
	.orderLists-box{
		 width: 100%; height: 100%;position:relative; margin-top: 66px;
	}
	.defaultUiNo{
		position:absolute;left:0%;top:-20%;bottom:0px;right:0;height:100%;
	}
	.vux-tab .vux-tab-item.vux-tab-selected {
		color: #E13D30 !important;
		// border-bottom:2px solid  #E13D30 !important;
	}
	
	// .vux-tab-ink-bar,.vux-tab-bar-inner {
	//     background-color:#E13D30 !important;
	// }
	.vux-tab-bar-inner {
		background-color: #E13D30!important;
		width: 60px;
	}
	
	.goods-item {
		margin-top: 0px;
	}
</style>
<script>
	import Recommend from '../home/components/Recommend.vue'
	import ComTab from '@/components/tab/ComTab1'
	import goodsListA from '@/components/goodsListA/index'
	import GoodHeader from '@/components/header/header2.vue'
	import orderLists from './components/orderLists.vue'
	import defaultUiNo from '@/components/defaultUi/index'
	import http from '@/utils/http'
	import tool from '@/utils/tool'
	import { hotGoods2, hotBrands, hotBrands2, Goods2, recommendGoods } from './components/data.js'
	import _global_ from '@/utils/Global'
	import dataStructureFilter from './dataStructureFilter/dataStructureFilter'
	export default {
		components: {
			Recommend,
			ComTab,
			goodsListA,
			GoodHeader,
			orderLists,
			defaultUiNo
		},
		data() {
			return {
				isList1: false,
				isList2: false,
				isList3: false,
				isList4: false,
				defaultUi: {
					defaultUiImg: "static/common/noRecord.png",
					text:"暂无记录"
				},
				isMoreScroll1: true,
				moreData1: "上拉加载更多商品...",
				moreData2: "上拉加载更多商品...",
				moreData3: "上拉加载更多商品...",
				moreData4: "上拉加载更多商品...",
				paging1: {
					pageNo: 1,
					pageSize: 10,
					moreOrderStatus: ""
				},
				paging2: {
					pageNo: 1,
					pageSize: 10,
					moreOrderStatus: ""
				},
				paging3: {
					pageNo: 1,
					pageSize: 10,
					moreOrderStatus: ""
				},
				paging4: {
					pageNo: 1,
					pageSize: 10,
					moreOrderStatus: ""
				},
				tabNum: 0,
				isOrderList: true,
				isOrderList1: false,
				isOrderList2: false,
				isOrderList3: false,
				myOrderListArray: [],
				myOrderListArray1: [],
				myOrderListArray2: [],
				myOrderListArray3: [],
				headerData: {
					rightjumpHref: "my",
					title: "我的订单",
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
				vueLoading: true,
				goodsType: "",
				Goods2: Goods2,
				tbindex: '0',
				comTab: {
					list: [{
							name: "全部",
							smallRes: "",
						},
						{
							name: '待付款',
							smallRes: ""
						},
						{
							name: '待收货',
							smallRes: ""
						},
						{
							name: '已完成',
							smallRes: ""
						}
					]
					//					list:[
					//					'全部','待付款','代收款','已完成'
					//					]
				}
			}
		},
		created() {
			var that = this;
			that.updateTitle('商品');
			console.log(that.$store.state.vux.goodsTabState.name)
			if(that.$store.state.vux.goodsTabState.name != "全部" && that.$store.state.vux.goodsTabState.name != "待付款" && that.$store.state.vux.goodsTabState.name != "待收货" && that.$store.state.vux.goodsTabState.name != "已完成") {
				var _setTabInfo = {
					tabState: 0,
					name: "全部"
				}
				tool.setTabInfo(_setTabInfo, 0)
			}

			var _obj = {
				pageNo: 1,
				pageSize: 10,
				moreOrderStatus: 0
			}
			var _obj1 = {
				pageNo: 1,
				pageSize: 10,
				moreOrderStatus: 10
			}
			var _obj2 = {
				pageNo: 1,
				pageSize: 10,
				moreOrderStatus: 20
			}
			var _obj3 = {
				pageNo: 1,
				pageSize: 10,
				moreOrderStatus: 30
			}
			that.myOrderList(_obj);
			that.myOrderList(_obj1);
			that.myOrderList(_obj2);
			that.myOrderList(_obj3);
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
				if(data === 0) {
					if(that.tabNum === 0) {
						var _obj = {
							pageNo: 1,
							pageSize: 10,
							moreOrderStatus: data
						}
						if(that.paging1.pageNo) {
							that.paging1.pageNo++;
							_obj.pageNo = that.paging1.pageNo;
							if(that.isMoreScroll1) {
								that.myOrderList(_obj);
							}

						}
					}

				} else if(data === 10) {
					if(that.tabNum === 1) {
						var _obj = {
							pageNo: 1,
							pageSize: 10,
							moreOrderStatus: data
						}
						if(that.paging2.pageNo) {
							that.paging2.pageNo++;
							_obj.pageNo = that.paging2.pageNo;
							that.myOrderList(_obj);
						}
					}
				} else if(data === 20) {
					if(that.tabNum === 2) {
						var _obj = {
							pageNo: 1,
							pageSize: 10,
							moreOrderStatus: data
						}
						if(that.paging3.pageNo) {
							that.paging3.pageNo++;
							_obj.pageNo = that.paging3.pageNo;
							that.myOrderList(_obj);
						}
					}
				} else if(data === 30) {
					if(that.tabNum === 3) {
						var _obj = {
							pageNo: 1,
							pageSize: 10,
							moreOrderStatus: data
						}
						if(that.paging4.pageNo) {
							that.paging4.pageNo++;
							_obj.pageNo = that.paging4.pageNo;
							that.myOrderList(_obj);
						}
					}
				}

				console.log("滚动了");
			},
			confirmCaching: async function(data) {
				var that = this;
				let _url = _global_.api.order.confirmCaching;
				var _obj = {
					orderId: data
				}
				let res = await http.post(_url, _obj);
				if(res) {
					var _obj = {
						pageNo: 1,
						pageSize: 10,
						moreOrderStatus: 0
					}
					var _obj1 = {
						pageNo: 1,
						pageSize: 10,
						moreOrderStatus: 10
					}
					var _obj2 = {
						pageNo: 1,
						pageSize: 10,
						moreOrderStatus: 20
					}
					var _obj3 = {
						pageNo: 1,
						pageSize: 10,
						moreOrderStatus: 30
					}
					that.myOrderList(_obj);
					that.myOrderList(_obj1);
					that.myOrderList(_obj2);
					that.myOrderList(_obj3);
				}
			},
			v_cancelOrder: async function(data) {
				var that = this;
				let _url = _global_.api.order.cancelOrder;
				var _obj = {
					orderId: data
				} 
				let res = await http.post(_url, _obj);
				console.log(res);
				if(res) {
					var _obj = {
						pageNo: 1,
						pageSize: 10,
						moreOrderStatus: 0
					}
					var _obj1 = {
						pageNo: 1,
						pageSize: 10,
						moreOrderStatus: 10
					}
					var _obj2 = {
						pageNo: 1,
						pageSize: 10,
						moreOrderStatus: 20
					}
					var _obj3 = {
						pageNo: 1,
						pageSize: 10,
						moreOrderStatus: 30
					}
					that.myOrderList(_obj, data);
					that.myOrderList(_obj1, data);
					that.myOrderList(_obj2);
					that.myOrderList(_obj3);
				}
			},
			tabEvent: function(index) {
				this.tbindex = index;
			},
			onItemClickTab(data) {
				console.log(data);
				var that = this;
				if(data === 0) {
					that.isOrderList1 = false;
					that.isOrderList2 = false;
					that.isOrderList3 = false;
					that.isOrderList = true;
				} else if(data === 1) {
					that.isOrderList = false;
					that.isOrderList2 = false;
					that.isOrderList3 = false;
					that.isOrderList1 = true;
				} else if(data === 2) {
					that.isOrderList = false;
					that.isOrderList1 = false;
					that.isOrderList3 = false;
					that.isOrderList2 = true;
				} else if(data === 3) {
					that.isOrderList = false;
					that.isOrderList1 = false;
					that.isOrderList2 = false;
					that.isOrderList3 = true;
				}
			},
			initTab: function() {
				this.tbindex = this.$route.params.type;
			},
			myOrderList: async function(data, id) {
				var that = this;
				let _url = _global_.api.my.myOrderList;
				var _obj = {
					pageNo: 1,
					pageSize: 10,
					moreOrderStatus: 0
				}
				_obj.moreOrderStatus = data.moreOrderStatus;
				let res = await http.post(_url, data);
				var _res = res.result;
				that.vueLoading = false;
				if(_res) {
					var _arry = dataStructureFilter.myOrderListfilter(_res);

					if(data.moreOrderStatus === 0) {
						//that.myOrderListArray = res.result;
						
						if(data.pageNo === 1) {
							that.recommendGoods = [];
							if(res.result.length > 0) {
								that.isList1 = true;
							}
							if(res.result.length === 0) {
								that.moreData1 = "";
								that.isList1 = false;
							} else {
								if(res.result.length <= 10) {
									that.moreData1 = "没有更多了";
									that.isList1 = true;
								}
							}
							that.myOrderListArray = _arry;
						} else {
							  that.isList1 = true;
							if(res.result.length <= 0) {
								that.moreData1 = "没有更多了"
								that.isMoreScroll1 = false;
								
							}else{
								
							}
							that.myOrderListArray = that.myOrderListArray.concat(_arry);
						}

					} else if(data.moreOrderStatus === 10) {
						
						if(data.pageNo === 1) {
							that.recommendGoods = [];

							if(res.result.length > 0) {
								that.isList2 = true;
							}
							if(res.result.length === 0) {
								that.moreData2 = "";
								that.isList2 = false;
							} else {
								if(res.result.length <= 10) {
									that.moreData2 = "没有更多了";
									that.isList2 = true;
								}
							}
							that.myOrderListArray1 = _arry;
						} else {
							 that.isList2 = true;
							if(res.result.length <= 0) {
								that.moreData2 = "";
								
							}
							that.myOrderListArray1 = that.myOrderListArray1.concat(_arry);
						}
					} else if(data.moreOrderStatus === 20) {
						
						if(data.pageNo === 1) {
							that.recommendGoods = [];
							if(res.result.length > 0) {
								that.isList3 = true;
							}
							if(res.result.length === 0) {
								that.moreData3 = "";
								that.isList3 = false;
							} else {
								if(res.result.length <= 10) {
									that.moreData3 = "没有更多了";
									that.isList3 = true;
								}
							}
							that.myOrderListArray2 = _arry;
						} else {
							that.isList3 = true;
							if(res.result.length <= 0) {
								that.moreData3 = ""
							}
							that.myOrderListArray2 = that.myOrderListArray2.concat(_arry);
						}
					} else if(data.moreOrderStatus === 30) {
						
						if(data.pageNo === 1) {
							that.recommendGoods = [];
							if(res.result.length > 0) {
								that.isList4 = true;
							}
							if(res.result.length === 0) {
								that.moreData4 = "";
								that.isList4 = false;
							} else {
								if(res.result.length <= 10) {
									that.moreData4 = "没有更多了";
									that.isList4 = true;
								}
							}
							that.myOrderListArray3 = _arry;
						} else {
							that.isList4 = true;
							if(res.result.length <= 0) {
								that.moreData4 = "没有更多了"
							}
							that.myOrderListArray3 = that.myOrderListArray3.concat(_arry);
						}

					}

				}

			}
		}
	}
</script>