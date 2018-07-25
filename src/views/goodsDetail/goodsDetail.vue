<template>
	<div class='goodsDetail'>
		<confirm v-model="show" title="提示" @on-cancel="onCancel" @on-confirm="onConfirm(0)">
			<p style="text-align:center;" >{{ confirmTitle }}</p>
		</confirm>
		<detail-header :datas="headerData"></detail-header>
		<div style="width: 100%; position: relative;margin-top: 46px;background: #f5f5f5!important;">
			<vueLoading v-show="vueLoading1" :datas="loadingData"></vueLoading>
			<swiper height="300px" loop auto :show-desc-mask="false" :list="banner_list" :index="banner_index" @on-index-change="banner_onIndexChange">
			</swiper>
		</div>

		<div class="detail-title">
			<h2>{{ productDetailName }}</h2>
			<p>{{ productDetailMoney2 }}</p>
		</div>
		<ul class="quality-tip">
			<li><img src="static/goodsDetail/quality1.png" alt="">正品保证</li>
			<li><img src="static/goodsDetail/noreturn1.png" alt="">顺丰包邮</li>
			<li><img src="static/goodsDetail/sfpost1.png" alt="">不可7天退货</li>
		</ul>
		<div class="detail-content">
			<!-- <div class="tab">
                <span :class="{'active':tabState}" @click="tabEvent(1)">商品详情</span> 
                <span :class="{'active':!tabState}" @click="tabEvent(0)">购买须知</span>
            </div>  -->
			<com-tab @onItemClickTab="onItemClickTab" :propObj="comTab"></com-tab>
			<div class="com-position" v-show="tab1">
				<vueLoading v-show="vueLoading2" :datas="loadingData"></vueLoading>
				<div v-html="productDetail" class="v-html-productDetail">
					{{ productDetail }}
				</div>
			</div>
			<div v-show="tab2">
				<div v-html="productDetail1" class="v-html-productDetail">
					{{ productDetail1 }}
				</div>
			</div>
			<!--<div class="detail1" v-show="tbindex==0">
				<img src="/static/goodsDetail/test1.png" alt="">
				<img src="/static/goodsDetail/test2.png" alt="">
			</div>-->
			<!--<div class="detail2" v-show="tbindex==1">
				<p>购买须知内容</p>
			</div>-->
		</div>
		<a class="f-button red-hearder-bg" @click="gobuy">立即购买</a>
		<div class="buy-option">
			<div class="person-mask" :class="{'show':buyalert}"></div>
			<div class="person-actionsheet" :class="{'person-actionsheet_toggle':buyalert}">
				<div class="goods-menu">
					<span class="close-bg" @click="buyalert=false"><img src="static/common/close.png" alt=""></span>
					<section class="goods-info">
						<img :src="smallPay" alt="">
						<div>
							<h2>{{ productDetailName }}</h2>
							<p>
								<span><em>￥{{ productDetailMoney3 * numberValue | myFilterToFixed1 }}</em></span>
								<span>库存:{{ stock }}</span>
							</p>
						</div>
					</section>
					<section class="norms">
						<p>规格</p>
						<tab>
							<tab-item  class="use" :selected="item.selected" @on-item-click="speStateSelect(item,index)" v-for="(item,index) in goldSpecifications" :key="item.skuId">{{ item.specifications }}</tab-item>
						</tab>
					</section>
					<section class="number">
						<span>数量</span>
						<div class="num-option">
							<!--<span class="subtract">-</span>
							<span class="shownum">10</span>
							<span class="add">+</span>-->

							<x-number :min=1 title="" v-model="numberValue"></x-number>

						</div>
					</section>
					<div class="f-button red-hearder-bg" @click="confirmationOrder">
						确认
					</div>
				</div>
			</div>
		</div>
		<weiXinMask v-if="weiXinMask" :datas="weiXinMaskSb"></weiXinMask>
	</div>
</template>
<script>
	import { Swiper, SwiperItem, Popup, ViewBox, Tab, TabItem, XNumber, Group, Confirm } from 'vux'
	import DetailHeader from '@/components/header/header1.vue'
	import ComTab from '@/components/tab/ComTab'
	import weiXinMask from '@/components/weixin/mask'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'
	import { baseList } from './data.js'
	import tool from '@/utils/tool'
	import { mapState } from 'vuex'
	const urlList = baseList.map((item, index) => ({
		url: 'http://m.baidu.com',
		img: item.img,
		// title: `(可点击)${item.title}`
	}))
	export default {
		components: {
			Swiper,
			ComTab,
			Tab,
			TabItem,
			XNumber,
			Group,
			DetailHeader,
			Confirm,
			weiXinMask
		},
		data() {
			return {
				weiXinMaskSb:{
					weixinA:true,
				},
				weiXinMask:false,
				v_gram:1,
				isSelfLifting:20,
				isRealName:10,
				confirmTitle:"",
				show: false,
				loginState: 0,
				tab1: true,
				tab2: false,
				headerData: {
					title: "商品详情",
					jumpHref:"",
					rightjumpHref:"my"
				},
				goodsId: "",
				specificationsId: "",
				numberValue: 1,
				productMoney: "",
				stock: "",
				goldSpeStateTab: 0,
				goldSpeState: "user",
				smallPay: "static/home/partner1.png",
				goldSpecifications: [],
				productDetaila: null,
				productDetail: null,
				productDetail1: null,
				productDetailName: "",
				productDetailMoney: "",
				productDetailMoney2:"",
				productDetailMoney3:"",
				vueLoading1: true,
				vueLoading2: true,
				loadingData: {
					v_width: "100%",
					height: "",
				},
				banner_list: urlList,
				banner_index: 0,
				swiperItemIndex: 1,
				tbindex: '0',
				buyalert: false,
				comTab: {
					list: [{
							name: "商品详情",
							smallRes: "",
						},
						{
							name: '购买须知',
							smallRes: ""
						}
					]
				}
			}
		},
		computed: {
			...mapState([
				'vux'
			])
		},
		created() {
			var that = this;
			that.updateTitle('商品详情');
			var _setTabInfo = {
				tabState:0,
				name:"商品详情"
			}
			tool.setTabInfo(_setTabInfo,0)
			var _id = that.$route.params.id;
			that.goodsId = _id;
			if(tool.judgingLogonStatus()) {
				that.loginState = 1;
			} else {
				that.loginState = 0;
			}
			that.commodityDetails(_id);
		},
		methods: {
			onCancel() {
				console.log('on cancel')
			},
			onConfirm(id) {
				var that = this;
				if(that.loginState === 0) {
					that.$router.push({
						name: 'login',
						params: {
							fromUrl: "goodsDetail",
							id:that.$route.params.id
						}
					});
					let _tabState = {
					tabState: 0,
					name: "密码登录",
				}
				that.$store.dispatch('updateTabState', _tabState);
				}else if(that.isRealName === 10){
					that.$router.push({
						name: 'realNameAuthent',
						params: {
							fromUrl: "goodsDetail",
							id:that.$route.params.id
						}
					});
				}
				
			},
			onItemClickTab(data) {
				console.log(data);
				var that = this;
				if(data === 0) {
					that.tab1 = true;
					that.tab2 = false;
				} else if(data === 1) {
					that.tab1 = false;
					that.tab2 = true;
				}
			},
			confirmationOrder(data) {
				var that = this;
				var _userAgentDecide = tool.userAgentDecide();
//				if(_userAgentDecide == 1 | _userAgentDecide == 11){
//					if(_userAgentDecide === 1){
//						that.weiXinMaskSb.weixinA = true;
//					}else if(_userAgentDecide === 11){
//						that.weiXinMaskSb.weixinA = false;
//					}
//					that.weiXinMask = true;
//				}else{
					var _data = {
					isSelfLifting:"", //是否自提
					goodsName: "", //商品名称
					specificationsId: "", //商品规格
					numberValue: "", //购买数量
					productDetailMoney: "", //单价金额
					numberValue: "", //购买数量
					smallPay: "", //小图
				}
				_data.isSelfLifting = that.isSelfLifting;
				_data.specificationsId = that.specificationsId;
				_data.numberValue = that.numberValue;
				_data.goodsName = that.productDetailName;
				_data.productDetailMoney = that.productDetailMoney;
				_data.numberValue = that.numberValue;
				_data.smallPay = that.smallPay;
                
				if(that.loginState === 1) {
					var _storage = JSON.parse(window.localStorage.getItem('LoginUserInfo') || '');
					if(_storage.realnameStatus === 20) {
						that.isRealName = 20;
						if(that.stock > 0) {
							if(that.numberValue > that.stock) {
								alert("购买数量不能大于库存数！");

							} else {
                                console.log("开始发送store");
                                that.$store.dispatch('updatePurchaseOrders', _data);
								that.$router.push({
									name: "sureOrders",
									params: {
										id: that.goodsId,
										data: _data
									}
								})
							}

						} else {
							alert("库存为0");
						}
					} else {
					   that.isRealName = 10;
                       that.confirmTitle = "您还未实名，点击确定，进行实名认证！";
					   that.show = true;
					}

				} else {
					that.confirmTitle = "您还未登录，请先登录！";
					that.show = true;
				}
				
				//}

			},
			speStateSelect(data, id) {
				this.$nextTick(function() {
					console.log("进来了");
					console.log(data.price);
					var that = this;
					console.log(data);
					console.log(id);
					console.log(data.smallIcon);
					if(data.gram){
						that.v_gram =data.gram;
					}
					
					that.smallPay = data.smallIcon;
					that.stock = data.remainNum;
					that.specificationsId = data.skuId;
					that.productDetailMoney3 = parseFloat(data.price).toFixed(2) ;
					that.productDetailMoney = data.price;
					//that.productMoney = 
					//					data.goldSpecState = "cur";
					//					console.log(that.goldSpecifications);
				})

			},
			commodityDetails: async function(data) {
				var that = this;
				that.vueLoading1 = false;
				var _obj = {
					id: "", //商品id
				}
				_obj.id = data;
				let _url = _global_.api.commodityDetails;
				let res = await http.post(_url, _obj);
				var _res = res.result;
				var _imgPath = [];
				if(_res.imgPath.length > 0){
					for(var i =0 ; i <_res.imgPath.length; i++){
						var _obj = {
							url: '',
		                     img: _res.imgPath[i],
						}
						_imgPath.push(_obj);
					}
				}
				that.banner_list = _imgPath;
				that.isSelfLifting = _res.pickupType;
				that.vueLoading2 = false;
				that.productDetailName = _res.productName;
				if(_res.priceMethod==10){
					that.productDetailMoney2 = "￥"+_res.showPrice;
				}else if(_res.priceMethod==20){
					that.productDetailMoney2 = _res.showPrice + "元/克";
				}
				that.productDetailMoney =that.productDetailMoney;

				that.productDetail = tool.htmlUnescape(_res.productDetail);
                that.productDetail1 = tool.htmlUnescape(_res.purchaseNote);
				var _array = _res.productSkuVos;
				for(var i = 0; i < _array.length; i++) {
					_array[i].goldSpecState = "use";
					_array[i].selected = false;
				}
				_array[0].selected = true;
				that.goldSpecifications = _array;
				console.log(_array[0].price);
				that.stock = _array[0].remainNum;
				that.specificationsId = _array[0].skuId;
				that.smallPay = _array[0].smallIcon;
				var _imgArray = [];
				for(var i = 0; i < _res.imgPath.length; i++) {
					var _obj = {
						url: '',
						img: '',
					}
					_obj.img = _res.imgPath[i];
					_imgArray.push(_obj);
				}
				that.banner_list = _imgArray;
				//that.smallPay = 
				that.productDetailMoney3 =parseFloat(that.goldSpecifications[0].price).toFixed(2);
				that.productDetailMoney = that.goldSpecifications[0].price;
			},
			banner_onIndexChange(index) {
				this.banner_index = index
			},
			tabEvent(flag) {
				if(flag) {
					this.tabState = true;
				} else {
					this.tabState = false;
				}
			},
			gobuy() {
				this.buyalert = true;
			},
			onItemClick(data) {
				this.tbindex = data.id;
			}
		},

	}
</script>
<style>
	.goodsDetail .use{
		background: none!important;
	}
	.goodsDetail .vux-tab .vux-tab-item.vux-tab-selected{
		color: #ffffff!important;
	}
	.tab-component .vux-tab .vux-tab-item.vux-tab-selected{
		color: #3B424C!important;
	}
	.goodsDetail .vux-slider > .vux-swiper{
		height:75vw!important;
	}
	.v-html-productDetail img {
		width: 100%;
	}
	
	.num-option .vux-number-selector svg {
		fill: #E13D30!important;
	}
	
	.norms .vux-tab-ink-bar {
		display: none!important;
	}
	
	.norms .vux-tab-selected {
		background: none!important;
		background-image: linear-gradient(90deg, #CDA254 0%, #FFD487  100%)!important;
		color: #FFFFFF!important;
		border: 0px!important;
	}
	.tab-component .vux-tab .vux-tab-item.vux-tab-selected{
	//color: #ffffff !important;
}
</style>
<style lang='scss'>

	
	.use {
		border: 1px solid #CBCBCC!important;
		height: auto!important;
		line-height: 20px!important;
		border-radius: 2px;
		text-align: center;
		padding: 5px 0px!important;
		-webkit-flex: 0!important;
		flex: 0!important;
		background-color: #fff;
		margin-right: 12px;
		margin-bottom: 12px;
		min-width: 95px;
		display: inline-block;
	}
	
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
	}
	
	.vux-slider>.vux-indicator>a>.vux-icon-dot,
	.vux-slider .vux-indicator-right>a>.vux-icon-dot {
		opacity: 0.5;
		background: #FFFFFF !important;
	}
	
	
	
	.show {
		display: block !important;
	}
	
	.person-mask {
		position: fixed;
		z-index: 0;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .6);
		display: none;
	}
	
	.f-button {
		position: fixed;
		bottom: 0;
		left: 0;
		display: block;
		color: #fff;
		width: 100%;
		height: 42px;
		line-height: 42px;
		font-size: 18px;
		text-align: center;
		background-image: -webkit-linear-gradient(0deg, #CDA254, #FFD487);
	}
	
	.goodsDetail {
		.detail-title {
			width: 90%;
			padding: 10px 5% 0 5%;
			h2,
			p {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			h2 {
				font-size: 18px;
				color: #656565;
				line-height: 25px;
				font-weight: normal;
			}
			p {
				font-size: 20px;
				color: #E72D2F;
				font-weight: bold;
				padding: 10px 0 25px 0;
			}
		}
		ul.quality-tip {
			display: flex;
			justify-content: space-around;
			border-top: 1px solid #F5F5F5;
			border-bottom: 5px solid #F5F5F5;
			li {
				color: #5B6067;
				font-size: 12px;
				vertical-align: middle;
				display: flex;
				align-content: center;
				padding: 10px 0;
				img {
					width: 20px;
					height: 20px;
					margin-right: 7px;
				}
			}
		}
		.detail-content {
			padding-bottom: 42px;
			.tab {
				box-sizing: border-box;
				margin-bottom: 10px;
				span {
					font-size: 17px;
					display: inline-block;
					width: 49%;
					text-align: center;
					color: #9EA0A5;
					&.active {
						color: #3B424C;
						position: relative;
						&:after {
							content: '';
							width: 24px;
							height: 3px;
							background-color: #CDA254;
							position: absolute;
							bottom: -10px;
							left: calc(50% - 10px);
						}
					}
				}
			}
			.detail1 {
				img {
					width: 100%;
					margin: 0 auto;
					height: auto;
				}
			}
		}
	}
	
	.buy-option {
		.person-actionsheet {
			position: fixed;
			left: 0;
			bottom: 0;
			-webkit-transform: translateY(105%);
			transform: translateY(105%);
			-webkit-backface-visibility: hidden;
			backface-visibility: hidden;
			z-index: 1;
			width: 100%;
			background-color: #efeff4;
			-webkit-transition: -webkit-transform .3s;
			transition: -webkit-transform .3s;
			transition: transform .3s;
			transition: transform .3s, -webkit-transform .3s;
		}
		.person-actionsheet_toggle {
			-webkit-transform: translate(0);
			transform: translate(0);
		}
		.goods-menu {
			background-color: #fff;
			position: relative;
			padding-bottom: 42px;
			>.close-bg {
				position: absolute;
				top: -13px;
				right: 3%;
				display: inline-block;
				background-color: #fff;
				padding: 5px 5px 0 5px;
				border-radius: 50%;
				img {
					width: 20px;
					height: 20px;
				}
			}
			.goods-info,
			.norms,
			.number {
				width: 94%;
				margin: 0 auto;
			}
			.goods-info {
				display: flex;
				padding: 15px 0 0px 0;
				border-bottom: 1px solid #F3F3F3;
				img {
					width: 100px;
					height: 100px;
					margin-right: 13px;
					border: 1px solid #f5f5f5;
					margin-top: -30px;
    				margin-bottom: 15px;
    				background: #ffffff;
				}
				>div {
					width:80%;
					h2 {
						font-weight: normal;
					}
					p {
						color: #9EA0A5;
						display: flex;
						justify-content: space-between;
						padding-top: 10px;
						span {
							font-size: 12px;
						}
						em {
							font-style: normal;
							color: #E72D2F;
							font-size: 12px;
						}
					}
				}
			}
			.norms {
				border-bottom: 1px solid #F3F3F3;
				p {
					font-size: 14px;
					color: #3B424C;
					padding: 10px 0;
				}
				ul {
					li {
						border: 1px solid #CBCBCC;
						border-radius: 2px;
						text-align: center;
						padding: 5px 0;
						background-color: #fff;
						margin-right: 12px;
						margin-bottom: 12px;
						min-width: 75px;
						display: inline-block;
						&.cur {
							background-image: linear-gradient(90deg, #FFD487 0%, #CDA254 100%);
							color: #FFFFFF;
							border: 0px;
						}
						&.use {
							color: #9EA0A5;
						}
						&.nouse {
							color: #EBECED;
							border-color: #E5E5E6;
						}
					}
				}
			}
			.number {
				padding: 18px 0;
				display: flex;
				justify-content: space-between;
				>span {
					font-size: 14px;
					color: #3B424C;
					line-height: 36px;
					display: inline-block;
				}
				.num-option {
					span {
						display: inline-block;
						text-align: center;
						float: left;
						&.subtract,
						&.add {
							padding: 6px 8px;
							min-width: 12px;
							border: 1px solid #EBECED;
							border-radius: 2px;
						}
						&.subtract {
							color: #E72D2F;
							border-right: 0px;
						}
						&.shownum {
							border: 1px solid #EBECED;
							width: 70px;
							padding: 6px 0;
						}
						&.add {
							color: #3B424C;
							border-left: 0px;
						}
					}
				}
			}
		}
	}
</style>