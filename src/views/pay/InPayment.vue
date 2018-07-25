<template>
	<div class="inPt">
		<good-header :datas="headerData"></good-header>
		<div class="main">
			<div class="mianBox">
				<img src="static/common/payIn.png" width="150px" height="150px">
				<div>
					订单支付中...
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import GoodHeader from '@/components/header/header2.vue'
	import tool from '@/utils/tool'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'
	export function jsSDK(params) {
		if(typeof window.WeixinJSBridge === 'undefined') {
			if(document.addEventListener) {
				document.addEventListener('WeixinJSBridgeReady', function() {
					onBridgeReady(params)
				}, false)
			} else if(document.attachEvent) {
				document.attachEvent('WeixinJSBridgeReady', function() {
					onBridgeReady(params)
				})
				document.attachEvent('onWeixinJSBridgeReady', function() {
					onBridgeReady(params)
				})
			}
		} else {
			
		}
	}

	export default {
		components: {
			GoodHeader,
		},
		data() {
			return {
				headerData: {
					rightjumpHref: "my",
					title: "订单支付中",
					icon: "static/common/my2.png",
					jumpHref: "my",
					classStyleIcon: "fill:#757575",
					classStyleFont: "color:#333333;font-size:16px"
				},
			}
		},
		created() {
			var that = this;
			var _url_data = tool.getUrlStr("openId", 0);
			that.alipay(_url_data);
		},
		methods: {
			alipay: async function(data) {
				var that = this;
				var _data = {
					openId: "", //openid 
					orderId: "", //订单id
					payMethod: 20, //
					tradeType: 60
				}
				_data.openId = data;
				_data.orderId = window.localStorage.getItem('payOrderId');
				var _url = _global_.api.order.alipay;
				let res = await http.post(_url, _data);
				if(res) {
					console.log(res);
					var _json = res.result.weixinJSPayModel;
                    
				} else {

				}
			},

		}
	}
</script>

<style lang='scss' scoped>
	.inPt {
		width: 100%;
		height: 100%;
		.main {
			width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 50%;
				text-align: center;
			.mainBox {
				
				img {}
			}
		}
	}
</style>