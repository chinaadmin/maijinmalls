<template>
	<div id="Home" class="home">
		<my-header :datas="headerData"></my-header>
		<div class="my-top-img" @click="personalData">
			<div class="my-top-box">
				<div class="left">
					<img :src="userImg" class="img">
				</div>
				<div class="right">
					<div class="text">
						{{ userPhone }}
					</div>
					<div>
						<span>{{ loginStateName }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="wrap">
			<scrollersBox :datas="scrollersBoxData"></scrollersBox>
			<div class="orderIcon">
				<confirm v-model="show" title="提示" @on-cancel="onCancel" @on-confirm="onConfirm(0)">
					<p style="text-align:center;">点击确定，前往登录！</p>
				</confirm>
				<div class="left" @click="orderJump(0)">
					<div class="left_img_box">
						<img src="static/my/pendingPayment1.png" width="26px" height="26px">
						<span v-show="dfk >0" class="vux-badge vux-badge-single mesHints">{{ dfk }}</span>
					</div>
					<div>
						待付款
					</div>
				</div>
				<div class="center" @click="orderJump(1)">
					<div>
						<img src="static/my/goodsReceived1.png" width="28px" height="26px">
						<span v-show="dsh >0" class="vux-badge vux-badge-single mesHints">{{ dsh }}</span>
					</div>
					<div>
						待收货
					</div>
				</div>
				<div class="right" @click="orderJump(2)">
					<div>
						<img src="static/my/completed1.png" width="26px" height="26px">
						<span v-show="ywc >0" class="vux-badge vux-badge-single mesHints">{{ ywc }}</span>
					</div>
					<div>
						已完成
					</div>
				</div>
			</div>
			<div class="order-new" v-show="newOrder" @click="jumpOrderD">
				<div class="order-new-box">
					<div class="left">
						<div class="topTitle c-999999">
							最新订单
						</div>
						<div class="bottomTitle c-999999">
							{{ order_date }}
						</div>
					</div>
					<div class="right">
						<div class="topTitle c-666666">
							{{order_name}}
						</div>
						<div class="bottomTitle">
							<span class="c-999999">订单金额</span>
							<span class="c-E13D30">
								¥{{order_money}}
							</span>
						</div>
					</div>
					<div class="pendingPayment">
						<div class="text c-E2AF4E">
							<span>{{ v_orderState }} <b>{{order_time}}</b></span>
						</div>
					</div>
				</div>
			</div>
			<div class="separateBg">
			</div>
			<scrollersBox :datas="scrollersBoxData1"></scrollersBox>
			<div class="separateBg">
			</div>
			<div v-show="v_wntj">
				<CenterTitle :datas="CenterTitle"></CenterTitle>
				<div class="com-position">
					<vueLoading v-show="vueLoading" :datas="loadingData"></vueLoading>
					<goodsListA :datas="recommendGoods" :priceUnit="v_priceUnit">
					</goodsListA>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Popup, ViewBox, Alert, Confirm } from 'vux'
	import ScrollersBox from '@/components/scrollerBox/ScrollerBox'
	import CenterTitle from '@/components/centerTitle/CenterTitle'
	import goodsListA from '@/components/goodsListA/index3'
	import MyHeader from '@/components/header/header2'
	import http from '@/utils/http'
	import tool from '@/utils/tool'
	import _global_ from '@/utils/Global'
	import router from '@/router/index'
	import { floor1, recommendGoods, recommendGoods2, baseList } from './components/data.js'
	import { mapState } from 'vuex'
	const urlList = baseList.map((item, index) => ({
		url: 'http://m.baidu.com',
		img: item.img,
		// title: `(可点击)${item.title}`
	}))

	export default {
		components: {
			goodsListA,
			ScrollersBox,
			CenterTitle,
			MyHeader,
			Confirm
		},
		data() {
			return {
				jumpOrderDId: "",
				_payTime: "",
				v_priceUnit: {
					show: false,
					unit: ""
				},
				v_wntj: false,
				newOrder: false,
				dfk: 0,
				dsh: 0,
				ywc: 0,
				v_orderState: "",
				headerData: {
					title: "我的",
					icon: "static/common/set-h.png",
					jumpHref: "home",
					rightjumpHref: "setUp",
					classStyleFont: "color:#333333;font-size:16px;",
					classStyleIcon: "fill:#999999",
				},
				userImg: "static/my/my_init.png",
				loginState: 0,
				userPhone: "请先登录",
				loginStateName: "未登录",
				order_date: "",
				order_money: "",
				order_time: "",
				order_name: "",
				show: false,
				show2: false,
				show3: false,
				show4: false,
				show5: false,
				show6: false,
				vueLoading: true,
				loadingData: {
					v_width: "100%",
					height: "",
				},
				CenterTitle: {
					classType: "centerTitle",
					title: "为你推荐",
				},
				scrollersBoxData: {
					leftTitle: "我的订单",
					rightTitle: "查看全部",
					routerHref: "../secondLevel/myOrder",
					tabTitle: '全部',
					tabState: 0,
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "arrowShow",
				},
				scrollersBoxData1: {
					leftTitle: "我的换金券",
					rightTitle: "未登录",
					tabTitle: '未兑换',
					tabState: 0,
					routerHref: "../secondLevel/goldExVoucher",
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "arrowShow",
				},
				banner_list: urlList,
				banner_index: 0,
				swiperItemIndex: 1,
				floor1: floor1,
				recommendGoods: recommendGoods,
				recommendGoods2: recommendGoods2
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
				//为你推荐
				that.pickofWeek();
				//我的 基本信息
				that.myInfo();
			} else {
				var _obj = {
					num: 0,
					name: "密码登录"
				}
				tool.setTabInfo(_obj, 0)
				that.loginState = 0;
				setTimeout(function() {
					that.$router.push({
						name: 'login',
						params: {
							fromUrl: "home"
						}
					});
				}, 200)
			}
		},
		methods: {
			jumpOrderD() {
				var that = this;
				console.log(that.jumpOrderDId);
				if(that.jumpOrderDId) {
					that.$router.push({
						name: 'orderDetails',
						params: {
							id: that.jumpOrderDId
						}

					})
				}
			},
			djs(data) {
				var that = this;
				var zfDjs = tool.countdown(data, 0);
				that.order_time = zfDjs;
			},
			personalData() {
				var that = this;
				let _loginState = that.loginState;
				if(_loginState != 0) {
					that.$router.push({
						name: 'personalProfile'
					})
				} else {
					that.show = true;
				}
			},
			goldExVoucher() {
				var that = this;
				that.$router.push({
					name: 'goldExVoucher'
				})
			},
			onHide() {
				console.log('on hide')
			},
			onShow() {
				console.log('on show')
			},
			onCancel() {
				console.log('on cancel')
			},
			onConfirm(id) {
				var that = this;
				if(id === 0) {
					that.$router.push({
						name: 'login',
						params: {
							fromUrl: "my"
						}
					});
				}
				let _tabState = {
					tabState: 0,
					name: "密码登录",
				}
				that.$store.dispatch('updateTabState', _tabState);
			},
			onItemClick() {
				console.log('on item click')
			},
			banner_onIndexChange(index) {
				this.banner_index = index
			},
			pickofWeek: async function(data) {
				var that = this;

				let _url = _global_.api.my.pickofWeek;
				let res = await http.post(_url, "", 99);
				console.log(res);
				if(res) {
					if(res.result) {
						that.vueLoading = false;
						if(res.result.length > 0) {
							that.v_wntj = true;
							var _brandListData = tool.priceUnitTrans(res.result, 1);
							that.recommendGoods = _brandListData;
						}
					}

				}

			},
			myInfo: async function(data) {
				var that = this;
				let _url = _global_.api.my.myInfo;
				let res = await http.post(_url, "", 99);
				let _loginState = that.loginState;
				if(_loginState === 1) {
					that.scrollersBoxData1.arrowShow = "arrowShow2";
					that.dfk = res.result.unPaidCount;
					that.dsh = res.result.unReceivedCount;
					//that.ywc = res.result.unReceivedCount;
					var _userInfo = JSON.parse(localStorage.getItem('LoginUserInfo'));
					console.log(_userInfo);
					that.userPhone = _userInfo.mobilePhone;
					//_userInfo loginStateName headerIconUrl
					if(_userInfo.realnameStatus === 10) {
						that.loginStateName = "未实名"
					} else if(_userInfo.realnameStatus === 20) {
						that.loginStateName = "已实名"
					}
					if(_userInfo.headerIconUrl) {
						//that.userImg = _userInfo.headerIconUrl;
					}
					that.scrollersBoxData1.rightTitle = "";
					if(res.result.unExchangeVoucherCount) {

						if(res.result.unExchangeVoucherCount > 0) {
							that.scrollersBoxData1.arrowShow = "arrowShow";
							that.scrollersBoxData1.rightTitle = "可兑" + res.result.unExchangeVoucherCount + "个"; // 未兑换 换金券数量

						}

					}

					if(res.result.firstOrderDetailVo) {
						that.jumpOrderDId = res.result.firstOrderDetailVo.orderId;
						that.order_date = res.result.firstOrderDetailVo.orderTime;
						that.order_name = res.result.firstOrderDetailVo.productName;
						that.order_money = res.result.firstOrderDetailVo.orderAmount;
						var _leftPayEndTime = res.result.firstOrderDetailVo.leftPayEndTime / 1000;
						that._payTime = _leftPayEndTime;
						var _zfDjs = tool.countdown(_leftPayEndTime, 0);

						that.order_time = _zfDjs;
						setInterval(function() {
							if(that._payTime > 0) {
								that._payTime--;
								that.djs(that._payTime)
							} else {
								window.clearInterval();
								that.order_time = "";
							}
						}, 1000)
						that.v_orderState = tool.orderState(res.result.firstOrderDetailVo.orderStatus, 0);
						that.newOrder = true;

					} else {

					}
				}

			},
			orderJump(data) {
				var that = this;
				console.log(data);
				console.log(that.vux);
				let _loginState = that.loginState;
				if(_loginState != 0) {
					var _data = {};
					if(data === 0) {
						_data = {
							num: 1,
							name: "待付款"
						}

					} else if(data === 1) {
						_data = {
							num: 2,
							name: "待收货"
						}
					} else if(data === 2) {
						_data = {
							num: 3,
							name: "已完成"
						}
					}
					tool.setTabInfo(_data, 0);
					that.$router.push({
						name: 'myOrder',
						params: {
							fromUrl: "my",
						}
					});
				} else {
					that.show = true;
					//					that.$vux.alert.show({
					//						title: '请先登录',
					//						content: '点击确定，前往登录！',
					//						onShow() {
					//							console.log('Plugin: I\'m showing')
					//						},
					//						onHide() {
					//							router.replace({
					//								path: '/secondLevel/login',
					//								query: {
					//									redirect: router.currentRoute.fullPath
					//								}
					//							});
					//						}
					//					})
				}
			}
		}
	}
</script>
<style>

</style>
<style lang="scss" scoped>
	body {
		background-color: #ffffff!important;
	}
	
	.my-top-img {
		width: 100%;
		height: 130px;
		background-image: url(../../../static/my/my_bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		.my-top-box {
			width: 86%;
			margin: 0 auto;
			padding-top: 30px;
			.left {
				width: 25%;
				float: left;
				.img {
					width: 74%;
				}
			}
			.right {
				width: 40%;
				float: left;
				text-align: left;
				padding-top: 0.4rem;
				.text {
					color: #ffffff;
					margin-bottom: 0.4rem;
				}
				span {
					text-align: left;
					background: #4A4A4A;
					padding: 0.25rem 0.8rem 0.35rem 0.8rem;
					border-radius: 1rem;
					color: #ffffff;
					font-size: 0.8em;
				}
			}
		}
	}
	
	.orderIcon {
		width: 99%;
		margin: 0 auto;
		height: 70px;
		padding-top: 17px;
		border-top: #efefef 1px solid;
		border-bottom: #efefef 1px solid;
		.left {
			width: 33%;
			float: left;
			text-align: center;
			.left_img_box {
				position: relative;
				.mesHints {
					position: absolute;
					margin-left: -8px;
					top: -8px;
				}
			}
		}
		.center {
			width: 33%;
			float: left;
			text-align: center;
			position: relative;
			.mesHints {
				position: absolute;
				margin-left: -8px;
				top: -8px;
			}
		}
		.right {
			width: 33%;
			float: left;
			text-align: center;
			position: relative;
			.mesHints {
				position: absolute;
				margin-left: -8px;
				top: -8px;
			}
		}
	}
	
	.order-new {
		width: 100;
		padding: 1.5rem 0rem;
		height: auto;
		border: #fcfcfc 1px solid;
		.order-new-box {
			width: 88%;
			margin: 0 auto;
			position: relative;
			line-height: 28px;
		}
		.left {
			display: inline-block;
			padding: 0rem 3rem 0rem 0rem;
			text-align: center;
			position: relative;
		}
		.left:after {
			position: absolute;
			top: 0.2em;
			height: calc(100% - 0.2em);
			left: 74px;
			content: '';
			width: 0;
			border-left: solid #efefef 1px;
		}
		.right {
			display: inline-block;
			.topTitle {
				width: 120px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
		.pendingPayment {
			position: absolute;
			right: 0;
			top: 0;
		}
	}
	
	.vux-icon-dot.active {
		opacity: 1;
		background-color: #FFFFFF !important;
		width: 15px;
	}
	
	.vux-slider>.vux-indicator>a>.vux-icon-dot,
	.vux-slider .vux-indicator-right>a>.vux-icon-dot {
		opacity: 0.5;
		background: #FFFFFF !important;
	}
	
	.vux-slider>.vux-swiper {
		height: 50vw !important;
	}
	
	.clearfix:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden
	}
	
	.wrap {
		padding-bottom: 57px;
		.showModule {
			border-top: 10px solid #F5F5F5;
			border-bottom: 10px solid #F5F5F5;
			ul {
				display: flex;
				padding: 15px;
				li {
					flex: 1;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					img {
						width: 40px;
						height: 40px;
						margin-right: 15px;
					}
					span {
						font-size: 18px;
					}
				}
			}
		}
		.footer {
			padding: 30px 0 30px 0;
			border-top: 8px solid #efeff4;
			.phone {
				height: 30px;
				margin: 0 auto;
				span {
					position: relative;
					top: -10px;
					padding-left: 5px;
					font-family: 'DIN-Bold';
					font-size: 20px;
					color: #CDA254;
				}
			}
			p {
				text-align: center;
			}
			.work_time {
				font-size: 14px;
				color: #5B6067;
				margin-top: 10px;
			}
			.copyright {
				font-size: 12px;
				color: #9EA0A5;
				line-height: 18px;
				margin-top: 10px;
			}
		}
	}
</style>