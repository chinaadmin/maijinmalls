<template>
	<div class='brand-detail paddingTop45'>
		<brand-header :datas="headerData"></brand-header>
		<div class="head">
			<img :src="brandDetailTitleImg" alt="" width="150px" height="150px">
			<p>
				{{brandDetailTitle}}
			</p>
			<div class="com-position">
				<vueLoading v-show="vueLoading" :datas="loadingData"></vueLoading>
				<goodsList :datas="hotGoods2"></goodsList>
			</div>
		</div>
		<div class="separateBg">
		</div>
		<scroller-box2 :datas="titleobj">
		</scroller-box2>
		<div class="com-position">
			<vueLoading v-show="vueLoading1" :datas="loadingData"></vueLoading>
			<goodsListA :datas="recommendGoods3" :more="moreData1"  @loadMore="loadMore(0)">
			</goodsListA>
		</div>
	</div>
</template>
<style lang='scss' scoped>
	.brand-detail {
		background-color: #ffffff;
		.head {
			background-color: #fff;
			margin-bottom: 10px;
			padding-top: 30px;
			img {
				display: block;
				margin: 0px auto 20px auto;
			}
			p {
				text-align: center;
				font-size: 12px;
				color: #8A8A8A;
				padding: 0 5% 15px 5%;
				text-indent: 8px;
			}
		}
	}
</style>
<script>
	import ScrollerBox from '../home/components/ScrollerBox.vue'
	// import { hotGoods2, Goods2 , recommendGoods } from '../home/components/data.js'
	import Recommend from '../home/components/Recommend.vue'
	import ScrollerBox2 from '@/components/scrollerBox/ScrollerBox.vue'
	import goodsList from '@/components/goodsList/goodsList.vue'
	import goodsListA from '@/components/goodsListA/index1'
	import BrandHeader from '@/components/header/header1.vue'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'
	import tool from '@/utils/tool'
	export default {
		components: {
			ScrollerBox,
			ScrollerBox2,
			Recommend,
			goodsList,
			goodsListA,
			BrandHeader
		},
		data() {
			return {
				moreData1:"上拉加载更多商品...",
				isMoreBrandsDetails: true,
				morePageNo:1,
				brandDetailTitleImg: "static/common/logo1.png",
				headerData: {
					title: "品牌",
					jumpHref: "",
					rightjumpHref: "my",
				},
				brandDetailTitle: "",
				vueLoading: true,
				vueLoading1: true,
				hotGoods2: "",
				Goods2: "",
				recommendGoods3: "",
				loadingData: {
					v_width: "100%",
					height: "",
				},
				titleobj: {
					routerHref: '../secondLevel/goods/2',
					leftTitle: '全部商品',
					rightTitle: '',
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "",
					tabState: 2
				},
			}
		},
		created() {
			var that = this;
			that.updateTitle('品牌');
			that.moreBrandsDetails(that.$route.params.id);
		},
		mounted() {
			this.$nextTick(function() {})
		},
		getParams() {
			// 取到路由带过来的参数 
			let routerParams = this.$route.params
			// 将数据放在当前组件的数据内
			console.log(routerParams);
		},
		watch: {
			// 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
			'$route': 'getParams'
		},
		methods: {
			loadMore(data) {
				var that = this;
				if(that.recommendGoods3.length > 0) {
					if(that.isMoreBrandsDetails) {
						var _data = {
							brandId: that.$route.params.id, //品牌id
							pageNo: 1, //页码
							pageSize: 10, //页大小
						}
						that.morePageNo ++ ;
						_data.pageNo = that.morePageNo;
						that.moreBrandsDetails1(_data);
					}
				}
			},
			moreBrandsDetails1: async function(data) {
				var that = this;
				let _url = _global_.api.brand.moreBrandsDetails;
				let res = await http.post(_url, data);
				if(res){
					if(res.result.allProducts.length > 0){
						
						var _arry = tool.priceUnitTrans(res.result.allProducts, 1);
						that.recommendGoods3 = that.recommendGoods3.concat(_arry);
					}else{
						
						that.isMoreBrandsDetails = false;
						that.moreData1 = "已无更多";
					}
				}
			},
			moreBrandsDetails: async function(data) {
				var that = this;
				let _url = _global_.api.brand.moreBrandsDetails;
				var _data = {
					brandId: "", //品牌id
					pageNo: 1, //页码
					pageSize: 10, //页大小
				}
				_data.brandId = data;
				let res = await http.post(_url, _data);
				console.log(res);
				that.brandDetailTitle = res.result.brandInfoVo.brandInfo;
				that.brandDetailTitleImg = res.result.brandInfoVo.logoIcon;
				if(res.result.recommendProducts) {
					//that.hotGoods2 = (res.result.recommendProducts).slice(0,3);
					//that.recommendGoods3 = res.result.allProducts;
					that.hotGoods2 = tool.priceUnitTrans((res.result.recommendProducts).slice(0, 3), 1);
					that.recommendGoods3 = tool.priceUnitTrans(res.result.allProducts, 1);
					if(that.recommendGoods3){
						that.moreData1 = "已无更多";
					}
					that.vueLoading = false;
					that.vueLoading1 = false;
				} else {
					that.hotGoods2 = [];
					that.recommendGoods3 = [];
					that.vueLoading = false;
					that.vueLoading1 = false;
				}
			},
		}
	}
</script>