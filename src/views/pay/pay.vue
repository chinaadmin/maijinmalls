<template>
	<div class='pay bg paddingTop45'>
		<div class="pcEwm" v-if="pcEwm">
			<div class="wxEWm">
				<vue-q-art :config="QRconfig"></vue-q-art>
				<div>
					请使用手机微信进行扫码支付（盛世金选）
				</div>
			</div>
		</div>
		<pay-header :datas="headerData"></pay-header>
		<div :style="payHead" class="head">
			<h2><span>￥</span>{{ payInfo.money }}</h2>
			<p class="p1">支付金额</p>
			<p class="p2">
				<span>请在</span>
				<span class="c-E13D30">{{ zfDjs }}</span>
				<span><span>{{ hourTime }}</span>内完成支付</span>
			</p>
			<div class="zfb">
				<img :src="pay_img">
			</div>
		</div>
		<div>
			<p style="padding: 10px 10px;">选择支付方式</p>
			<!--<check-icon :value.sync="demo1"> 测试</check-icon>-->

			<div class="per-iconlist">
				<!--<li>
					<label for="">微信支付</label>
					<input class="wxico" type="radio" name="pay" v-model="chosepay" />
				</li>-->
				<div class="zfbList">
					<div class="zfbLeft">
						<div class="img">
							<img src="static/pay/wx.png">
						</div>
						<div class="text">微信支付</div>
					</div>
					<div class="zfbRight">
						<!--<input class="zfico" type="radio" name="pay" v-model="chosepay" />-->
						<!--<checklist @checklist-icon-active-color='#07A0F8'  :options="commonList" required   @on-change="checklistChange"></checklist>-->
						<!--<check-icon :value.sync="zfbCheck"></check-icon>-->
						<!--<icon type="success" @icon-success-color="colorChange1"></icon>-->
					</div>

				</div>

				<!--<li>
					<label for="">银行卡支付</label>
					<input class="yhico" type="radio" name="pay" v-model="chosepay" />
				</li>-->
			</div>
			<div class="per-iconlist" v-if="isShowZFB">
				<!--<li>
					<label for="">微信支付</label>
					<input class="wxico" type="radio" name="pay" v-model="chosepay" />
				</li>-->
				<div class="zfbList">
					<div class="zfbLeft">
						<div class="img">
							<img src="static/pay/pay_icon.png">
						</div>
						<div class="text">支付宝支付</div>
					</div>
					<div class="zfbRight checklistPosition">
						<!--<input class="zfico" type="radio" name="pay" v-model="chosepay" />-->
						<checklist :max=1 v-model="payMode" :options="commonList" required @on-change="checklistChange"></checklist>
						<!--<check-icon :value.sync="wxCheck"></check-icon>-->
						<!--<icon type="success" @icon-success-color="colorChange1"></icon>-->
					</div>

				</div>

				<!--<li>
					<label for="">银行卡支付</label>
					<input class="yhico" type="radio" name="pay" v-model="chosepay" />
				</li>-->
			</div>

		</div>
		<div class="pay-btn">
			<com-button @BtnEvent="alipayBtn" :propObj="btnPropObj">
			</com-button>
		</div>

	</div>
</template>
<style>
	.weui-cells_checkbox {
		background: none!important;
		border: none;
		color: #ffffff!important;
	}
	
	.weui-check_label:before,
	.weui-check_label:after {
		border: none!important;
	}
	
	.weui-cells:after,
	.weui-cells:before {
		border: none!important;
	}
	
	.weui-check_label {
		padding-top: 14px!important;
	}
</style>
<style lang='scss' scoped>
	body {
		background-color: #f5f5f5 !important;
	}
	
	.pcEwm {
		position: fixed;
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.5;
		z-index: 10;
		.wxEWm {
			width: 300px;
			margin: 0 auto;
			margin-top: 25%;
			text-align: center;
			color: #ffffff;
			background: #000000;
		}
	}
	
	.weui-cell {
		border: none!important;
	}
	
	.pay-btn {
		width: 100%;
		position: fixed;
		bottom: 30px;
	}
	
	.per-iconlist {
		background: #ffffff;
		width: 100%;
		height: 28px;
		border-top: 1px solid #F1F4F7;
		border-bottom: 1px solid #F1F4F7;
		padding: 10px 0px;
		.zfbList {
			margin: 0 auto;
			width: 86%;
			position: relative;
			.zfbLeft {
				float: left;
				width: 70%;
				.img {
					display: inline-block;
					vertical-align: middle;
					margin-right: 10px;
				}
				img {
					width: 30px;
					height: 30px;
				}
				.text {
					display: inline-block;
				}
			}
			.zfbRight {
				float: right;
			}
			.checklistPosition {
				position: absolute;
				right: -50px;
				top: -60px;
			}
		}
	}
	
	.head {
		position: relative;
	}
	
	.zfb {
		position: absolute;
		top: 20px;
		right: 0;
		img {
			width: 66px;
			height: 66px;
		}
	}
	
	input[type=radio] {
		font-size: 23px;
		visibility: hidden;
		position: relative;
		display: inline-block;
		width: 23px;
		height: 23px;
	}
	
	input[type=radio]:before {
		font-size: 23px;
		top: 12%;
		display: inline-block;
		position: absolute;
		content: ' ';
		visibility: visible;
		height: 23px;
		width: 23px;
		display: block;
		/*background: url("/static/common/no.png") no-repeat;*/
		background: url("../../../static/common/yes.png") no-repeat;
		background-size: 23px 23px;
	}
	
	input[type=radio]:checked:before {
		font-size: 23px;
		content: ' ';
		visibility: visible;
		height: 23px;
		width: 23px;
		background: url("/static/common/yes.png") no-repeat;
		background-size: 23px 23px;
	}
	
	input[type=radio].wxico:checked:before {
		background: url("/static/common/oryes.png") no-repeat;
		background-size: 23px 23px;
	}
	
	input[type=radio].zfico:checked:before {
		/*background: url("http://www.enjoyexchange.com/static/cssimg/check_on.png") no-repeat;*/
		background-size: 23px 23px;
	}
	
	.pay {
		.head {
			text-align: center;
			margin: 0 auto;
			background-color: #21D11D;
			color: #fff;
			padding-top: 12px;
			padding-bottom: 18px;
			h2 {
				font-size: 28px;
				line-height: 25px;
				padding: 10px 0 2px 0px;
				font-weight: normal;
				span {
					font-size: 12px;
				}
			}
			p {
				&.p1 {
					font-size: 12px;
					margin-bottom: 20px;
				}
				&.p2 {
					background-color: #fff;
					font-size: 12px;
					color: #656565;
					text-align: center;
					line-height: 26px;
					width: 70%;
					margin: 0 auto;
					border-radius: 3px;
					padding: 0px 6px;
				}
			}
		}
		.head1 {
			background-color: #0FA4FA;
		}
		.pay-type {
			p {
				font-size: 12px;
				color: #9EA0A5;
				padding: 12px 0 12px 14px;
			}
		}
	}
</style>
<script>
	import { CheckIcon, Checklist, Icon } from 'vux'
	import PayHeader from '@/components/header/header2'
	import ComButton from '@/components/button/ComButtom'
	import tool from '@/utils/tool'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'
	import VueQArt from 'vue-qart'
	export default {
		components: {
			CheckIcon,
			PayHeader,
			ComButton,
			Checklist,
			Icon,
			VueQArt
		},
		data() {
			return {
				isShowZFB: true,
				payZt: false,
				pcEwm: false,
				QRconfig: {
					value: '',
					imagePath: require('../../../static/common/ewm.png'),
					filter: 'color'
				},
				pay_img: "static/pay/pay.png",
				payHead: "",
				payMode: ['wx'],
				payModeInit: 0,
				hourTime: "小时",
				_payTime: "",
				zfDjs: "",
				payInfo: {
					money: "", //支付金额
				},
				colorChange1: "#07A0F8",
				zfbCheck: true,
				wxCheck: false,
				commonList: ['wx', 'zfb', ],
				PayWakeup: "",
				btnPropObj: {
					title: "立即支付 ",
					classType: "register-btn-style-4",
					classBtnWidth: "register-btn",
				},
				headerData: {
					title: "结算",
					icon: "static/common/my1.png",
					rightjumpHref: "my",
					fpzt: "", //发票状态
					fptt: "",
					bz: "",
					id: "",
					isBorder: "border-bottom:none",
					jumpHref: "sureOrders",
					classStyle: "headerStyle",
					classStyleIcon: "fill:#ffffff",
					classStyleFont: "color:#ffffff",
					isBorder: "background:#21D11D; border:none",
				},
				demo1: false,
				chosepay: false
			}
		},
		computed: {
			storePurchaseOrders() {
				var that = this;
				return that.$store.state.vux.purchaseOrders;
			}
		},
		watch: {
			zfbCheck(val, oldVal) {

			}

		},
		destroyed() {
			clearInterval(window.myTime);
			clearInterval(window.myTimeWxWap)
		},
		methods: {
			djs(data) {
				var that = this;
				var _zfDjs = tool.countdown(data, 0);
				that.zfDjs = _zfDjs;
			},
			colorChange() {
				return "#07A0F8"
			},
			checklistChange(data) {
				var that = this;
				console.log(data);
				that.payMode = data;
				if(data[0] === "wx") {

					that.pay_img = "static/pay/wx-bg.png";
					that.payHead = "background-color: #21D11D;";
					that.headerData.isBorder = "background:#21D11D; border:none";
				} else {
					that.pay_img = "static/pay/pay.png";
					that.payHead = "background-color: #0FA4FA;";
					that.headerData.isBorder = "background:#0FA4FA; border:none";
				}

			},
			orderDetails: async function(data) {
				var that = this;
				console.log(data);
				var _url = _global_.api.order.orderDetails;
				var _data = {
					orderId: data
				}
				let res = await http.post(_url, _data);
				console.log(res);
				var _res = res.result;
				that.payInfo.money = parseFloat(_res.price) * parseFloat(_res.itemNum);
				//that.btnPropObj.title = "立即支付 ￥" +"122";
				var _leftPayEndTime = _res.leftPayEndTime / 1000;
				that._payTime = _leftPayEndTime;
				console.log(that._payTime);
				var _zfDjs = tool.countdown(_leftPayEndTime, 0);
				that.zfDjs = _zfDjs;
				setInterval(function() {
					if(that._payTime <= 3600) {
						that.hourTime = "分钟"
					}
					if(that._payTime <= 60) {
						that.hourTime = "秒"
					}
					if(that._payTime > 0) {
						that._payTime--;
						that.djs(that._payTime)
					} else {

						window.clearInterval();
						that.zfDjs = "";
					}

				}, 1000)

				console.log(_zfDjs);

			},
			orderDetailsQuery: async function(data) {
				console.log("进来了");
				var that = this;
				var _url = _global_.api.order.orderDetails;
				var _orderId = that.$route.params.id;
				var _data = {
					orderId: _orderId, //订单id

				}
				let res = await http.post(_url, _data);
				console.log(res);
				var t1 = "";
				if(res) {
					console.log("进来了");
					if(res.result.orderStatus) {
						if(res.result.orderStatus === 20 | res.result.orderStatus === 50) {
							if(data == 100) {

							} else {
								that.payZt = true;
								clearInterval(window.myTime)
							}

							//window.clearInterval(t1); 
							that.$router.push({
								name: "paySuccess"
							})
						} else {

						}
					}
				}
			},
			obtainCode: async function(data) {
				var that = this;
				var _url = _global_.api.pay.wxPublic;
				let res = await http.post(_url);
				if(res){
//					alert(res.result);
					console.log(res);
					window.location.href = res.result;
					window.localStorage.setItem('payOrderId',that.$route.params.id)
				}
			},
			orderDetailsQueryWap: async function(data) {
				console.log("进来了1");
				var that = this;
				var _url = _global_.api.order.orderDetails;
				var _orderId = that.$route.params.id;
				var _data = {
					orderId: _orderId, //订单id

				}
				let res = await http.post(_url, _data);
				console.log(res);
				var t1 = "";
				if(res) {
					if(res.result.orderStatus) {
						if(res.result.orderStatus === 20 | res.result.orderStatus === 50) {

							clearInterval(window.myTimeWxWap)

							//window.clearInterval(t1); 
							that.$router.push({
								name: "paySuccess"
							})
						} else {

						}
					}
				}
			},
			alipay: async function(data) {
				var that = this;
				if(that.payMode.length > 0) {
					if(that.payMode[0] === "zfb") {
						var _url = _global_.api.order.alipay;
						var _orderId = that.$route.params.id;
						var _data = {
							orderId: _orderId, //订单id
							payMethod: 10, //支付方式 10-支付宝；20-微信；30-易宝
							tradeType: 10,
						}
						let res = await http.post(_url, _data);
						console.log(res);
						if(res) {
							const div = document.createElement('div') // 创建div
							div.innerHTML = res.result.form // 将返回的form 放入div
							document.body.appendChild(div)
							document.forms[0].submit()
							//		  	that.PayWakeup = res.result.form;
							//		  	document.getElementsByTagName("form").submit();
							//		  	that.$router.push({
							//					name: 'paySuccess',
							//				})
						}
					} else if(that.payMode[0] === "wx") {
						var _isPcWap = tool.isPcWap("isPcWap", 0);
						console.log(_isPcWap);
						if(_isPcWap === 0) {
							var _userAgentDecide = tool.userAgentDecide();
							console.log(_userAgentDecide);
//							alert(_userAgentDecide);
							if(_userAgentDecide == 1 | _userAgentDecide == 11) {
								
                                 that.obtainCode();
							}else{
								var _url = _global_.api.order.alipay;
								var _orderId = that.$route.params.id;
								var _data = {
									orderId: _orderId, //订单id
									payMethod: 20, //支付方式 10-支付宝；20-微信；30-易宝
									tradeType: 40, //10-支付宝H5支付 20-支付宝PC支付 30-支付宝APP支付   40-微信H5支付   50-微信扫码支付 60-微信App支付
								}
								let res = await http.post(_url, _data);
								console.log(res);
								if(res) {
									window.location.href = res.result.mwebUrl;
								} else {

								}
							}

						} else if(_isPcWap === 1) {
							var _url = _global_.api.order.alipay;
							var _orderId = that.$route.params.id;
							var _data = {
								orderId: _orderId, //订单id
								payMethod: 20, //支付方式 10-支付宝；20-微信；30-易宝
								tradeType: 50, //10-支付宝H5支付 20-支付宝PC支付 30-支付宝APP支付   40-微信H5支付   50-微信扫码支付 60-微信App支付
							}
							let res = await http.post(_url, _data);
							console.log(res);
							if(res) {
								that.QRconfig.value = res.result.codeUrl;
								that.pcEwm = true;
								if(that.pcEwm) {
									window.myTime = window.setInterval(that.orderDetailsQuery, 10000);
									if(that.payZt) {
										window.clearInterval(t1);
										that.$router.push({
											name: 'paySuccess',
											params: {
												fromUrl: "",
												id: that.$route.params.id
											}
										});
									} else {

									}

								}

							} else {

							}
						}

					}

				} else {
					alert("未选择支付方式！");
				}

			},
			alipayBtn() {
				var that = this;
				that.alipay();
			}
		},
		created() {
			var that = this;
			this.updateTitle('结算');
			window.myTimeWxWap = window.setInterval(that.orderDetailsQueryWap, 5000);
			var _userAgentDecide = tool.userAgentDecide();
			console.log(_userAgentDecide);
			if(_userAgentDecide == 1 | _userAgentDecide == 11) {
				that.pay_img = "static/pay/wx-bg.png";
				if(_userAgentDecide == 1) {
					//that.weiXinMaskSb.weixinA = true;
					that.isShowZFB = false;
				} else if(_userAgentDecide == 11) {
					//that.weiXinMaskSb.weixinA = false;
					that.isShowZFB = false;
				}
			}
			//订单详情
			var _routerData = that.$route.params;
			that.orderDetails(_routerData.id);
			that.headerData.fptt = that.$route.params.fpbz;
			that.headerData.fpzt = that.$route.params.fpzt;
			that.headerData.bz = that.$route.params.bz;
			console.log(that.$route.params.lastId);
			if(that.$route.params.lastId) {
				that.headerData.id = that.$route.params.lastId;
			} else {
				if(that.$route.params.urlFrom === "myOrder") {

				} else {
					that.$router.push({
						name: 'home'
					});
				}

			}

		},
		mounted() {
			this.$nextTick(function() {})
		}
	}
</script>