<template>
	<div class="paddingTop45">
		<good-header :datas="headerData"></good-header>
		<div class="orderDetails">
			<div class="top0">
				<div class="box">
					<div class="left">
						{{ v_details.orderState }}
					</div>
					<div class="right" v-show="v_details.orderState==='待付款'">
						剩余： {{ v_details.leftPayEndTime }}
						{{v_details.orderState}}
					</div>
					<div class="right" v-show="v_details.orderState==='支付中'">
						支付剩余： {{ v_details.leftPayEndTime }}
						
					</div>
				</div>
			</div>
			<div class="myInfo" v-show="v_details.pickMethodNum === 10">
				<div class="box">
					<div class="top1">
						<div class="left">
							<img src="static/common/position.png">
						</div>
						<div class="left">
							<span class="text1">{{ v_details.expressName }}</span>
							<span class="text2">{{ v_details.expressPhone }}</span>
						</div>
					</div>
					<div class="top2 c-666666" v-show="v_expressAddr">
						<span>地址：</span>
						<span>{{ v_details.expressAddr }}</span>
					</div>
				</div>
			</div>
			<div class="orderDetails1">
				<div class="orderListBox">
					<div class="orderListTop">
						<div class="left">
							{{ v_details.brandName }}
						</div>
						<div class="right">
							<span class="c-E72D2F">
							
							</span>
						</div>
					</div>
					<div class="center">
						<div class="left">
							<img :src="v_details.smallIcon" width="90px" height="90px">
						</div>
						<div class="right">
							<div class="title">
								<div class="left1">
									<div class="left1Name c-333333">
										{{ v_details.productName }}
									</div>
									<div class="kz">
										<div class="left2 c-999999">
											<span>克重：</span>
											<span>{{ v_details.specifications }}</span>
										</div>
										<div class="right2 c-999999">
											x {{ v_details.itemNum }}
										</div>
									</div>
								</div>
								<div class="right1">
									<div>
										{{ v_details.price }}
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="separateBg">
			</div>
			<div class="orderInfo c-999999">
				<div class="infoList">
					<div class="infoLeft">商品单价</div>
					<div class="infoRight">{{ v_details.price }}</div>
				</div>
				<div class="infoList">
					<div class="infoLeft">商品金额</div>
					<div class="infoRight">{{ v_details.orderAmount }}</div>
				</div>
				<div class="infoList">
					<div class="infoLeft">运费(快递)</div>
					<div class="infoRight">￥0.00</div>
				</div>
				<div class="infoList">
					<div class="infoLeft">加工费</div>
					<div class="infoRight">￥0.00</div>
				</div>
			</div>
			<div class="orderAll">
				<div class="orderAllLeft">
					订单总额：
				</div>
				<div class="orderAllRight c-E13D30">
					{{ v_details.orderAmount }}
				</div>
			</div>
			<div class="separateBg">
			</div>
			<div class="orderInfo c-999999">
				<div class="infoList">
					<div class="infoLeft">取货方式</div>
					<div class="infoRight">{{ v_details.pickMethod }}</div>
				</div>
				<div class="infoList" v-show="v_details.redeemCode!='' && v_details.redeemCode!=null">
					<div class="infoLeft">兑换码</div>
					<div class="infoRight c-E2AF4E">{{v_details.redeemCode}}</div>
				</div>
				<div class="infoList">
					<div class="infoLeft">发票信息</div>
					<div class="infoRight">{{ v_details.invoiceHead }}</div>
				</div>
				<div class="infoList">
					<div class="infoLeft">备注信息</div>
					<div class="infoRight">{{ v_details.customerNote }}</div>
				</div>
				<div class="infoList">
					<div class="infoLeft">支付方式</div>
					<div class="infoRight">{{ v_details.payMethod }}</div>
				</div>
			</div>
			<div class="separateBg">
			</div>
			<div class="orderInfo c-999999">
				<div class="infoList">
					<div class="infoLeft">交易单号： </div>
					<div class="infoLeft">{{ v_details.orderId }}</div>
				</div>
				<div class="infoList">
					<div class="infoLeft">下单时间： </div>
					<div class="infoLeft">{{ v_details.orderTime }}</div>
				</div>
				<div class="infoList">
					<div class="infoLeft">支付时间： </div>
					<div class="infoLeft">{{ v_details.payTime }}</div>
				</div>
			</div>
			<div class="separateBg" style="height: 80px;">
			</div>
			<div class="bottomBtn" v-show="v_details.orderState === '待付款'">
				<div class="btnBox">
					<div class="btn">
						<div class="btn1" @click.stop="cancelOrder()">取消订单</div>
						<div class="btn2" @click.stop="pay()">立即支付</div>
					</div>
				</div>
			</div>
			<!--<div class="bottomBtn" v-show="v_details.orderState === '支付中'">
				<div class="btnBox">
					<div class="btn">
						<div class="btn2" @click.stop="pay()">立即支付</div>
					</div>
				</div>
			</div>-->
		</div>
	</div>
</template>

<script>
	import GoodHeader from '@/components/header/header2.vue'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'
	import tool from '@/utils/tool'
	export default {
		components: {
			GoodHeader
		},
		data() {
			return {
				v_shZt:true,
				v_expressAddr: false,
				_payTime: "",
				v_details: {
					orderId: "", //交易订单号
					orderState: "", //订单状态名
					expressName: "", //收货人
					expressPhone: "", //收货电话
					expressAddr: "", //收货地址
					brandName: "", //品牌名称
					smallIcon: "", //商品图标
					productName: "", //商品名称
					orderAmount: "", //订单金额
					price: "", //商品价格
					specifications: "", //克重
					itemNum: "", //商品数量
					pickMethod: "", //取货方式
					pickMethodNum:"", //取货方式取值
					invoiceHead: "", //发票抬头
					customerNote: "", //备注信息
					orderTime: "", //下单时间
					payTime: "", //支付时间
					payMethod: "", //支付方式
					leftPayEndTime: "", //剩余支付时间
					redeemCode:"" , //兑换码
					  redeemCode:"" //兑换码
				},
				_routerData: "",
				headerData: {
					title: "订单详情",
					icon: "static/common/my2.png",
					jumpHref: "",
					rightjumpHref:"my",
					classStyleIcon: "fill:#757575",
					classStyleFont: "color:#333333;font-size:16px"
				},
			}
		},
		created() {
			var that = this;
			that._routerData = that.$route.params;
			if(that._routerData.id) {
				that.v_orderDetails(that._routerData.id);
			}
		},
		methods: {
			djs(data) {
				var that = this;
				var zfDjs = tool.countdown(data, 0);
				that.v_details.leftPayEndTime = zfDjs;
			},
			v_orderDetails: async function(data) {
				var that = this;
				let _url = _global_.api.order.orderDetails;
				var _obj = {
					orderId: data
				}
				let res = await http.post(_url, _obj);
				var _res = res.result;
				var _leftPayEndTime = res.result.leftPayEndTime / 1000;
				that._payTime = _leftPayEndTime;
				var _zfDjs = tool.countdown(_leftPayEndTime, 0);
                that.v_details.payMethod = res.result.payMethod;
                console.log(that.v_details.payMethod);
				that.v_details.leftPayEndTime = _zfDjs;
				setInterval(function() {
					if(that._payTime > 0) {
						that._payTime--;
						that.djs(that._payTime)
					} else {
						window.clearInterval();
						that.v_details.leftPayEndTime = "";
					}
				}, 1000)
				var _orderState = tool.orderState(_res.orderStatus, 0);
				that.v_details.orderState = _orderState;
				that.v_details.expressName = _res.expressName;
				that.v_details.expressPhone = _res.expressPhone;
				that.v_details.expressAddr = _res.expressAddr;
				that.v_details.brandName = _res.brandName;
				that.v_details.smallIcon = _res.smallIcon;
				that.v_details.productName = _res.productName;
				that.v_details.price = "￥" + _res.price;
				that.v_details.specifications = _res.specifications;
				that.v_details.itemNum = _res.itemNum;
				that.v_details.orderAmount = "￥"+_res.orderAmount;
				that.v_details.redeemCode=_res.redeemCode;
				if(_res.pickMethod === 10){
					that.v_details.pickMethod = "顺丰快递";
					that.v_details.pickMethodNum = 10;
					that.v_expressAddr = true;
				} else if(_res.pickMethod === 20) {
					that.v_details.pickMethod = "自提";
					that.v_details.pickMethodNum = 20;
					that.v_expressAddr = false;
				}
				that.v_details.invoiceHead = _res.invoiceHead;
				that.v_details.customerNote = _res.customerNote;
				that.v_details.orderTime = _res.orderTime;
				that.v_details.payTime = _res.payTime;
				that.v_details.orderId = _res.orderId;
				var _payMethod = tool.payMethod(_res.payMethod, 0);
				that.v_details.payMethod = _payMethod;
				that.v_details.redeemCode = _res.redeemCode;
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
					that.$router.push({
						name: 'myOrder'
					})
				}
			},
			cancelOrder() {
				var that = this;
				that.v_cancelOrder(that._routerData.id);
			},
			pay(id) {
				var that = this;
				console.log(id);
				that.$router.push({
					name: 'pay',
					params: {
						orderId: that._routerData.orderId,
						urlFrom:"myOrder"
					}
				})
			},
		}
	}
</script>

<style lang='scss' scoped>
	.bottomBtn {
		width: 100%;
		padding: 10px 0px;
		position: fixed;
		bottom: 0;
		background: #ffffff;
		border-top: #efefef 1px solid;
		.btnBox {
			.btn {
				float: right;
				.btn1 {
					float: left;
					margin-right: 14px;
					padding: 2px 6px;
					color: #999999;
					border: #999999 1px solid;
					border-radius: 1rem;
				}
				.btn2 {
					float: left;
					padding: 3px 7px;
					background: #CDA254;
					margin-right: 14px;
					color: #ffffff;
					border-radius: 1rem;
				}
			}
		}
	}
	
	.orderInfo {
		width: 90%;
		margin: 0 auto;
		padding-bottom: 10px;
		display: table;
		.infoList {
			padding: 10px 0px;
			clear: both;
			width: 100%;
			.infoLeft {
				float: left;
			}
			.infoLeft:nth-child(2) {
				margin-left: 4px;
			}
			.infoRight {
				float: right;
			}
		}
	}
	
	.orderAll {
		width: 90%;
		clear: both;
		border-top: #efefef 1px solid;
		padding: 0% 5%;
		display: table;
		.orderAllLeft {
			float: left;
			padding: 10px 0px;
		}
		.orderAllRight {
			float: right;
			padding: 10px 0px;
		}
	}
	
	.orderDetails1 {
		width: 100%;
		height: 100%;
		margin-bottom: 16px;
		.orderListBox {
			width: 90%;
			margin: 0 auto;
			.orderListTop {
				padding: 5px 0px;
				.left {
					float: left;
				}
				.right {
					float: right;
				}
			}
			.center {
				clear: both;
				width: 100%;
				padding: 10px 0px;
				min-height: 80px;
				.left {
					float: left;
					width: 32%;
				}
				.right {
					width: 68%;
					float: left;
					text-align: left;
					.title {
						.left1 {
							width: 75%;
							float: left;
							.left1Name {
								font-size: 0.8em;
								overflow: hidden;
								text-overflow: ellipsis;
								display: -webkit-box;
								-webkit-line-clamp: 3;
								-webkit-box-orient: vertical;
							}
							.kz {
								width: 132%;
								margin-top: 6px;
								.left2 {
									float: left;
								}
								.right2 {
									float: right;
								}
							}
						}
						.right1 {
							width: 25%;
							text-align: right;
							float: right;
						}
					}
					.specifica {
						.specificaLeft {
							float: left;
							width: 50%;
							margin-top: 10px;
						}
						.specificaright {
							width: 50%;
							margin-top: 10px;
							text-align: right;
							float: right;
						}
					}
				}
			}
			.orderListBottom {
				width: 100%;
				text-align: right;
			}
		}
	}
	
	.orderDetails {
		width: 100%;
		.top0 {
			width: 100%;
			height: 100px;
			background-image: -webkit-linear-gradient(0deg, #D83120, #F14335);
			.box {
				width: 84%;
				margin: 0 auto;
				padding-top: 20px;
				color: #ffffff;
				.left {
					float: left;
					font-size: 1.2em;
				}
				.right {
					float: right;
				}
			}
		}
	}
	
	.myInfo {
		width: 100%;
		margin-top: -40px;
		margin-bottom: 6px;
		.box {
			width: 80%;
			margin: 0 auto;
			padding: 6%;
			border-radius: 0.6rem;
			box-shadow: 0 0 8px #EAC98D;
			background: #ffffff;
			.top1 {
				width: 100%;
				.left {
					float: left;
					.text1 {
						margin-right: 18px;
					}
					img{
						margin-top: 3px;
					}
				}
				.left:nth-child(1) {
					margin-right: 6px;
				}
				.left:nth-child(2) {}
			}
			.top2 {
				padding-top: 2px;
				clear: both;
				margin-left: 21px;
			}
		}
	}
</style>