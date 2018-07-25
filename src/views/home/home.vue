<template>
	<div id="Home" class="home">
		<home-header></home-header>
		<div style="width: 100%; position: relative;">
			<vueLoading v-show="vueLoading1" :datas="loadingData"></vueLoading>
			<swiper loop auto :show-desc-mask="false" :list="banner_list" :index="banner_index" @on-index-change="banner_onIndexChange">
			</swiper>
		</div>
		<div class="wrap">
			<section class="showModule">
				<ul class="clearfix">
					<li @click="noviceMustRead">
						<img src="/static/home/newread.png" alt="">
						<span>新手必读</span>
					</li>
					<li @click="understandUs">
						<img src="/static/home/aboutus.png" alt="">
						<span>了解我们</span>
					</li>
				</ul>
			</section>
			<scroller-box2 :datas="titleobj">
			</scroller-box2>
			<div class="com-position">
				<vueLoading v-show="vueLoading2" :datas="loadingData"></vueLoading>
				<goodsList :datas="hotGoods2"></goodsList>
			</div>
			<div class="separateBg">
			</div>
			<scroller-box2 :datas="titleobj1">
			</scroller-box2>
			<div class="com-position">
				<vueLoading v-show="vueLoading3" :datas="loadingData"></vueLoading>
				<brandList :data="hotBrands"></brandList>
			</div>
			<div class="separateBg">
			</div>
			<div v-show="goodShow1">
				<scroller-box2 :datas="titleobj2">
				</scroller-box2>
				<div class="com-position">
					<vueLoading v-show="vueLoading4" :datas="loadingData"></vueLoading>
					<goodsListA :datas="recommendGoods1">
					</goodsListA>
				</div>
			</div>
			<div class="separateBg">
			</div>
			<!--<div style="clear: both;">
				2223
			</div>-->
			<div v-show="goodShow2">
				<scroller-box2 :datas="titleobj3">
				</scroller-box2>
				<div class="com-position">
					<vueLoading v-show="vueLoading5" :datas="loadingData"></vueLoading>
					<goodsListA :datas="recommendGoods2">
					</goodsListA>
				</div>
			</div>
			<div class="separateBg">
			</div>
			<div v-show="goodShow3">
				<scroller-box2 :datas="titleobj4">
				</scroller-box2>
				<div class="com-position">
					<vueLoading v-show="vueLoading6" :datas="loadingData"></vueLoading>
					<goodsListA :datas="recommendGoods3">
					</goodsListA>
				</div>
			</div>
			<div class="separateBg" style="height: 0.45rem;">
			</div>
			<footer class="footer">
				<p class="phone">
					<span style="position: absolute; top:-7px">
						<img src="static/home/phone.png" width="20px" height="20px" >
					</span>
					<span style="padding-left: 32px;">0755-32938689</span>
				</p>
				<p class="work_time">工作日 9:00-21:00 非工作日 9:00-18:00</p>
				<p class="copyright">
					copyright©深圳市盛世金选电子商务有限公司<br>maijinmall.com 粤ICP备18074149号-1
				</p>
			</footer>
		</div>

	</div>
</template>

<script>
	import { Swiper, SwiperItem, Popup, ViewBox, Loading } from 'vux'
	import HomeHeader from './components/HomeHeader.vue'
	import ScrollerBox from './components/ScrollerBox.vue'
	import Recommend from './components/Recommend.vue'
	import ScrollerBox2 from '@/components/scrollerBox/ScrollerBox.vue'
	import goodsList from '@/components/goodsList/goodsList.vue'
	import goodsListA from '@/components/goodsListA/index3'
	import { hotGoods2, hotBrands, hotBrands2, Goods2, recommendGoods } from './components/data.js'
	import http from '@/utils/http'
	import brandList from '@/components/brandList/brandList.vue'
	import _global_ from '@/utils/Global'
	import tool from '@/utils/tool'
	import { s_brandList } from '@/server/index'
	import { mapState } from 'vuex'
	export default {
		components: {
			Loading,
			HomeHeader,
			Swiper,
			SwiperItem,
			ScrollerBox,
			Loading,
			Recommend,
			ScrollerBox2,
			goodsList,
			brandList,
			goodsListA
		},
		data() {
			return {
				mask: true,
				simg: false,
				asimg: true,
				v_priceUnit: {
					show: true,
					unit: "￥"
				},
				v_priceUnit1: {
					show: false,
					unit: ""
				},
				goodShow1: true,
				goodShow2: false,
				goodShow3: false,
				loginState: 0,
				recommendGoods: recommendGoods,
				recommendGoods1: [],
				recommendGoods2: recommendGoods,
				recommendGoods3: recommendGoods,
				hotBrands2: hotBrands2,
				hotGoods2: hotGoods2,
				titleobj: {
					routerHref: '../secondLevel/goods/0',
					leftTitle: '热销商品',
					tabTitle: '黄金饰品',
					rightTitle: '更多商品',
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "arrowShow",
					tabState: 0
				},
				titleobj1: {
					routerHref: 'brand',
					leftTitle: '热门品牌',
					rightTitle: '更多品牌',
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "arrowShow",
				},
				titleobj2: {
					routerHref: '../secondLevel/goods/0',
					leftTitle: '黄金饰品',
					tabTitle: '黄金饰品',
					rightTitle: '更多商品',
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "arrowShow",
					tabState: 0
				},
				titleobj3: {
					routerHref: '../secondLevel/goods/1',
					leftTitle: '千足金条',
					tabTitle: '千足金条',
					rightTitle: '更多商品',
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "arrowShow",
					tabState: 1
				},
				titleobj4: {
					routerHref: '../secondLevel/goods/2',
					leftTitle: '金币银币',
					tabTitle: '金币银币',
					rightTitle: '更多商品',
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "arrowShow",
					tabState: 2
				},
				loadingData: {
					v_width: "100%",
					height: "",
				},
				vueLoading: true,
				vueLoading1: true,
				vueLoading2: true,
				vueLoading3: true,
				vueLoading4: true,
				vueLoading5: true,
				vueLoading6: true,
				banner_list: [],
				banner_index: 0,
				swiperItemIndex: 1,
				hotGoods: '',
				hotBrands: hotBrands,
				Goods: '',
				//以下是假数据
				hotGoods2: hotGoods2,
				hotBrands2: hotBrands2,
				Goods2: Goods2,
			}
		},
		computed: {
			...mapState([
				'vux'
			])
		},
		created() {
			var that = this;
			if(tool.judgingLogonStatus()) {
				that.loginState = 1;
			} else {
				that.loginState = 0;
			}

		},
		mounted() {
			var that = this;
			this.$nextTick(function() {
				this.initBanner();
				this.initHotGoods();
				this.initHotBrand();
				this.goldJewelry();
			})
		},
		methods: {
			understandUs() {
				var that = this;
				that.$router.push({
					name: 'understandUs'
				});
			},
			noviceMustRead() {
				var that = this;
				that.$router.push({
					name: 'noviceMustRead'
				});
			},
			onItemClick() {
				console.log('on item click')
			},
			banner_onIndexChange(index) {
				this.banner_index = index
			},
			//轮播图  
			initBanner: async function() {
				var that = this;
				let _url = _global_.api.home.broadcast;
				let res = await http.post(_url, '');
				if(res) {
					window.setTimeout(function() {
						that.vueLoading1 = false
					}, 200);
					var _banner_list = [];
					for(var i = 0; i < res.result.length; i++) {
						var obj = {
							url: "", //链接地址
							img: "", //图片地址
							title: "" //标题
						}
						console.log(res.result[i].url);
						var _url_ = res.result[i].url;
						if(_url_) {
							console.log(_url_.search(/http/));
							if(_url_.search(/http/) != 0) {
								obj.url = "http://" + _url_;
							} else {
								obj.url = _url_;

							}
						}
						obj.img = res.result[i].imgPath;
						_banner_list.push(obj);
					}
					console.log(_banner_list);
					that.banner_list = _banner_list.map((item, index) => ({
						url: item.url,
						img: item.img,
					}))
				}
			},
			//热销商品
			initHotGoods: async function() {
				var that = this;
				let _url = _global_.api.home.hotSellingGoods;
				let res = await http.post(_url, '');
				if(res) {
					that.vueLoading2 = false;
					var _brandListData = tool.priceUnitTrans(res.result, 1);
					that.hotGoods2 = _brandListData;
				}
			},
			//热门品牌
			initHotBrand: async function() {
				var that = this;
				if(that.vux.brandList.length > 0) {
					that.vueLoading3 = false;
					that.hotBrands = that.vux.brandList;
				} else {
					var v_brandList = s_brandList();
					v_brandList.then(res => {
						if(res) {
							that.vueLoading3 = false;
							that.hotBrands = res;
						}
					})
				}
				//				let _url = _global_.api.home.popularBrand;
				//				let res = await http.post(_url, '');
				//				if(res) {
				//					that.vueLoading3 = false;
				//					that.hotBrands = res.result;
				//					that.$store.dispatch('updateBrandList', res.result);
				//				}
			},
			//商品信息
			goldJewelry: async function() {
				var that = this;
				let _url = _global_.api.home.commodityInfor;
				let res = await http.post(_url, '');
				console.log(res);
				if(res) {
					that.vueLoading4 = false;
					that.vueLoading5 = false;
					that.vueLoading6 = false;
					if(res.result) {
						var _goldJewelry = []; //黄金饰品
						var _thousandFeetGold = []; //千足金
						var _goldCoinsSilver = []; //金币银币
						for(var i = 0; i < res.result.length; i++) {
							var _brandListData = tool.priceUnitTrans(res.result[i].products, 1);
							if(res.result[i].productType === 10) {
								_goldJewelry = _brandListData;
								//that.titleobj.routerHref = "../secondLevel/goods/"+res.result[i].productType
							} else if(res.result[i].productType === 20) {
								if(that.loginState === 1) {

									_thousandFeetGold = _brandListData;
								} else {

								}
							} else if(res.result[i].productType === 30) {
								if(that.loginState === 1) {
									_goldCoinsSilver = _brandListData;
								} else {

								}
							}
						}
						that.recommendGoods1 = _goldJewelry;
						that.recommendGoods2 = _thousandFeetGold;
						that.recommendGoods3 = _goldCoinsSilver;
						if(that.recommendGoods1.length > 0) {
							that.goodShow1 = true;
						} else {
							that.goodShow1 = false;
						}
						if(that.recommendGoods2.length > 0) {
							that.goodShow2 = true;
						} else {
							that.goodShow2 = false;
						}
						if(that.recommendGoods3.length > 0) {
							that.goodShow3 = true;
						} else {
							that.goodShow3 = false;
						}

					}
					//that.recommendGoods1 = 

				}
			}
		}
	}
</script>
<style>
	.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-img {
		background-size: contain!important;
	}
	.home .vux-slider{
		background: #f5f5f5;
		padding-top: 0px;
	}
	.home .vux-slider > .vux-swiper{
		height:48.5vw!important;
	}
</style>
<style lang="scss">
	
	.vux-slider>.vux-indicator,
	.vux-slider .vux-indicator-right {
		right: 50% !important;
		-webkit-transform: translateX(50%) !important;
		transform: translateX(50%) !important;
	}
	
	ux-slider>.vux-indicator>a>.vux-icon-dot.active,
	.vux-slider .vux-indicator-right>a>.vux-icon-dot.active {
		opacity: 1;
		background-color: #FFFFFF !important;
		width: 15px;
	}
	
	.vux-slider>.vux-indicator>a>.vux-icon-dot,
	.vux-slider .vux-indicator-right>a>.vux-icon-dot {
		opacity: 0.5;
		background: #FFFFFF !important;
	}
	
	
	
	.clearfix:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden
	}
	
	.go_alert>img {
		width: 300px;
		right: 0;
		position: fixed;
		margin: 0 auto;
		left: calc(50% - 150px);
		top: 12%;
		z-index: 44444;
	}
	
	.wrap {
		padding-bottom: 57px;
		.showModule {
			border-top: 6px solid #F5F5F5;
			border-bottom: 10px solid #F5F5F5;
			ul {
				display: flex;
				padding: 15px;
				li {
					flex: 1;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					width: 50%;
					text-align: center;
					justify-content:center;
					img {
						width: 40px;
						height: 40px;
						margin-right: 15px;
					}
					span {
						font-size: 18px;
						color: #000000;
					}
				}
			}
		}
		.footer {
			padding: 30px 0 30px 0;
			border-top: 1px solid #efeff4;
			.phone {
				height: 30px;
				line-height: 30px;
				position: relative;
				margin: 0 auto;
				
				span {
					position: relative;
					top: -10px;
					padding-left: 5px;
					font-size: 1.5em;
					color: #CDA254;
				}
			}
			p {
				text-align: center;
			}
			.work_time {
				font-size: 14px;
				color: #5B6067;
				margin-top: 0px;
				margin-bottom: 20px;
			}
			.copyright {
				font-size: 12px;
				color: #9EA0A5;
				line-height: 18px;
				margin-top: 10px;
				margin-bottom: 10px;
			}
		}
	}
</style>