<template>
	<div class='sure-orders bg sureOrders' style="padding-top: 24px;">
		<set-header :datas="headerData"></set-header>
		<div class="separateBg" style="height: 1.4rem;">
		</div>
		<confirm v-model="show" title="提示" @on-cancel="onCancel" @on-confirm="onConfirm(0)">
			<p style="text-align:center;">点击确定，前往添加收货地址？</p>
		</confirm>
		<group class="chose-menu" >
			<popup-picker v-show="isSelfLifting" :title="title1" :data="list1" v-model="value0" @on-show="onShow" @on-hide="onHide" @on-change="onChange">
				<template slot="title" slot-scope="props">
					<div class="pub-lisg" style="margin-left: 6px;">
						<img src="static/sureOrders/wayTakingGoods.png" width="22px" height="22px" alt="">
						<span style="vertical-align:middle;">选择取货方式</span>
					</div>
				</template>
			</popup-picker>
			<popup-picker v-show="v_zt" :title="title2" :data="list2" v-model="value00" @on-show="onShow" @on-hide="onHide" @on-change="onChange">
				<template slot="title" slot-scope="props">
					<div class="pub-lisg" style="margin-left: 6px;">
						<img src="static/sureOrders/selfLifting.png" alt=""  width="22px" height="22px">
						<span style="vertical-align:middle;">选择自提方式</span>
					</div>
				</template>
			</popup-picker>
			<div v-show="v_dz_ps">
				<!--<cell-box @click.native="address_jump" is-link>
        <div class="pub-lisg">
          <img src="static/common/position.png" alt="">
          <span>{{ orderFrom.v_shdd }}</span>
        </div>
      </cell-box>-->
      <div class="addd">
      	<scrollersBoxd :datas="scrollersBoxData1" @routerJump="routerJump"></scrollersBoxd>
      </div>
			<div>
				<scrollersBox :datas="scrollersBoxData"></scrollersBox>
			</div>	
				

			</div>
		</group>
		<!-- <div class="bdimg" >
      <img src="/static/goodsDetail/adborder1.png" alt="">  
    </div> -->
        <div class="separateBg" style="height: 0.4rem;">
		</div>
		<div class="goods-dec">
			<dl class="goods-dl">
				<dt>
                  <img :src="smallPay" alt="">
                </dt>
				<dd style="float: left;text-align: left;width: 80%;">
					<h2>{{ productDetailName }}</h2>
					<p class="price"><span>￥{{ productDetailMoney }}元</span><em>×{{ orderFrom.v_buyNum }}</em></p>
					<p class="tip"><img src="static/goodsDetail/sfpost1.png" alt="">不支持7天无理由退货</p>
				</dd>
			</dl>
			<p class="ew-price"><span>加工费</span><em>￥0.00</em></p>
			<!--<p class="total">小计: <span>￥{{ productDetailMoney * orderFrom.v_buyNum }}</span></p>-->
			<p class="total">小计: <span>￥{{ productDetailMoneyToFixed }}</span></p>
		</div>
		<group class="mark">
			<div v-show="v_dhpz">
				<cell-box>
					<x-switch @on-change="v_switch" :title="'开具发票'" v-model="orderFrom.v_isFp"></x-switch>
				</cell-box>
				<cell-box class="specell" v-show="orderFrom.v_isFp">
					<x-input :title="'发票抬头:'" placeholder="请输入发票抬头" v-model="orderFrom.v_fptt"></x-input>
				</cell-box>
			</div>
			<cell-box class="specell">
				<x-input :title="'备注:'" placeholder="选填、60字以内" v-model="orderFrom.v_bz"></x-input>
			</cell-box>
		</group>
		<div class="commit-menu">
			<span>合计：<em class="red-color">￥{{ productDetailMoneyToFixed }}</em></span>
			<!-- <a href="sure-btn">确认订单</a> -->
			<div class="sure-btn red-hearder-bg" @click="confirOfOrder()">
				确认订单
			</div>
		</div>
	</div>
</template>

<script>
	import { CellBox, Group, XSwitch, XInput, PopupPicker, Confirm } from 'vux'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'
	import SetHeader from '@/components/header/header2'
	import ScrollersBox from '@/components/scrollerBox/ScrollerBox'
	import ScrollersBoxd from '@/components/scrollerBox/ScrollerBoxd'
	export default {
		components: {
			CellBox,
			Group,
			XSwitch,
			XInput,
			PopupPicker,
			Confirm,
			SetHeader,
			ScrollersBox,
			ScrollersBoxd
		},
		data() {
			return {
				productDetailMoneyToFixed:"",
				v_takingGoods: 0, //取货方式   1 邮寄  2 自提
				v_fptt: false,
				v_zt: false,
				v_dz_ps: false,
				v_dhpz: true, //兑换凭证
				scrollersBoxData: {
					leftTitle: "配送方式",
					rightTitle: "顺丰  免邮",
					arrowShow: "arrowShow arrowShow10",
					routerHref: "",
					leftIcon: true,
					iconAddress: "static/sureOrders/distribution.png",
					leftTextClass: "leftText",
					titleHead: "title-head1",
					leftTextMargin:"margin-left:9px",
					rightTextMargin:"right:17%",
				},
				scrollersBoxData1: {
					leftTitle1: "收货地址",
					leftTitle2: "",
					imgClass: "img1",
					rightTitle: "前往填写",
					arrowShow: "arrowShow3",
					routerHref: "newAddress",
					leftIcon: true,
					iconAddress: "static/sureOrders/address.png",
					leftTextClass: "leftText",
					titleHead: "title-head2",
					data: "",
				},
				headerData: {
					title: "确认订单",
					jumpHref: "goodsDetail",
					rightjumpHref: "my",
					id: "",
					classStyle: "",
					icon: "static/common/my2.png",
					classStyleIcon: "fill:#757575",
					classStyleFont: "color:#333333;font-size:16px"
				},
				isSelfLifting: true,
				show: false,
				productDetailName: "",
				productDetailMoney: "",
				isAddress: false,
				orderFrom: {
					v_id: "", //商品id
					v_bz: "", //备注
					v_isFp: false, //是否要发票
					v_fptt: "", //发票抬头
					v_buyNum: "", //购买数量
					v_qhfs: 10, //取货方式 10顺丰 20自提
					v_shddId: "", //收货地址id
					v_shdd: "添加收货地址", //收货地址
				},
				smallPay: "/static/home/partner1.png",
				numberValue: "",
				value: '',
				value2: '',
				value3: '',
				value0: [],
				title1: '选择取货方式',
				list1: [
					['邮寄', '自提']
				],
				value00: [],
				title2: '兑换凭证',
				list2: [
					['兑换凭证']
				],
			}
		},
		computed: {
			storePurchaseOrders() {
				var that = this;
				return that.$store.state.vux.purchaseOrders;
			}
		},
		created() {
			var that = this;
			that.updateTitle('确认订单');
			//获取用户收货地址
			that.userReceivAddress();

			var _routerData = that.$route.params;
			that.headerData.id = that.$route.params.id;
			console.log(that.$route.params.id);
			that.orderFrom.v_fptt = that.$route.params.fptt;
			that.orderFrom.v_isFp = that.$route.params.fpzt;
			that.v_fptt = that.$route.params.fpzt;
			that.v_bz = that.$route.params.bz;
			if(that.$route.params.dataFp) {
                console.log(that.$route.params.dataFp);
				that.orderFrom.v_fptt = that.$route.params.dataFp.fptt;
				that.orderFrom.v_isFp = that.$route.params.dataFp.kjfp;
				that.orderFrom.v_bz = that.$route.params.dataFp.bz;
				if(that.$route.params.dataFp.qhfs == 1) {
					that.v_takingGoods = 1;
					that.value0 = ["邮寄"];
					that.v_dz_ps = true;
				} else if(that.$route.params.dataFp.qhfs == 2) {
					that.v_takingGoods = 2;
					that.value0 = ["自提"]
				}

			}
			if(that.storePurchaseOrders) {
				that.productDetailName = that.storePurchaseOrders.goodsName;
				that.productDetailMoney = that.storePurchaseOrders.productDetailMoney;
				
				that.numberValue = that.storePurchaseOrders.numberValue;
				
				that.orderFrom.v_buyNum = that.storePurchaseOrders.numberValue;
				that.productDetailMoneyToFixed = (parseFloat(that.productDetailMoney) * parseFloat(that.orderFrom.v_buyNum)).toFixed(2); 
				that.orderFrom.v_id = that.storePurchaseOrders.specificationsId;
				that.smallPay = that.storePurchaseOrders.smallPay;
				if(that.storePurchaseOrders.isSelfLifting === 20) {
					that.v_zt = false;
					that.isSelfLifting = false;
					that.scrollersBoxData1.arrowShow = "arrowShow4";
					that.scrollersBoxData.arrowShow = "arrowShow1"
					that.v_dz_ps = true;

				} else if(that.storePurchaseOrders.isSelfLifting === 10) {
					//that.v_zt = true;
					that.isSelfLifting = true;
				}
			} else {
that.$router.push({
					name: 'goodsDetail',
					params: {
						id: that.$route.params.id,
					}
				})
			}

		},
		methods: {
			routerJump(data) {
				var that = this;
				console.log(that.v_takingGoods);
				that.$router.push({
					name: 'newAddress',
					params: {
						fromUrl: 'sureOrders',
						id: that.$route.params.id,
						dataFp: {
							fptt: that.orderFrom.v_fptt, //发票抬头
							bz: that.orderFrom.v_bz, //备注
							kjfp: that.orderFrom.v_isFp, //开具发票
							qhfs: that.v_takingGoods, //取货方式

						}
					}
				})
			},
			v_switch(data) {
				var that = this;
				if(data) {
					that.v_fptt = true;
				} else {
					that.v_fptt = false;
				}
			},
			onCancel() {
				console.log('on cancel')
			},
			onConfirm(id) {
				var that = this;
				console.log(that.$route.params.id);
				that.$router.push({
					name: 'newAddress',
					params: {
						fromUrl: 'sureOrders',
						id: that.$route.params.id,
						dataFp: {
							fptt: that.orderFrom.v_fptt, //发票抬头
							bz: that.orderFrom.v_bz, //备注
							kjfp: that.orderFrom.v_isFp, //开具发票
							qhfs: that.v_takingGoods, //取货方式
						}
					}
				})
			},
			address_jump() {
				var that = this;
				console.log("点击了");
				if(that.isAddress) {

				} else {
					that.$router.push({
						name: 'newAddress'
					})
				}
			},
			userReceivAddress: async function(data) {
				var that = this;
				let _url = _global_.api.my.userReceivAddr;
				let res = await http.get(_url, "", 99);
				console.log(res);
				if(res) {
					var _res = res.result;
					if(_res.addressId) {
						that.isAddress = true;
						that.orderFrom.v_shddId = _res.addressId;
						that.orderFrom.v_shdd = _res.province + "-" + _res.city + "-" + _res.area;
						that.scrollersBoxData1.imgClass = "img2";
						//that.scrollersBoxData1.arrowShow = "arrowShow0"
						that.scrollersBoxData1.leftTitle1 = _res.expressName + "   " + "   " + _res.expressPhone;
						that.scrollersBoxData1.leftTitle2 = _res.province + _res.city + _res.area + _res.expressAddr;
						that.scrollersBoxData1.rightTitle = "";
						that.scrollersBoxData1.leftTitle = _res.province + "-" + _res.city + "-" + _res.area;
					}
				}

			},
			confirOfOrderAjax: async function(data) {
				var that = this;
				let _url = _global_.api.order.confirOfOrder;

				let res = await http.post(_url, data);
				console.log(res);
				if(res) {
					that.$router.push({
						name: 'pay',
						params: {
							id: res.result.orderId,
							lastId: that.$route.params.id,
							fpbz: that.orderFrom.v_fptt,
							fpzt: that.orderFrom.v_isFp,
							bz: that.orderFrom.v_bz
						}

					})
				}
			},
			confirOfOrder() {

				var that = this;
				//console.log(that.$store.state.vux.purchaseOrders);
				//var _routerData = that.$route.params;
				var _routerData = that.storePurchaseOrders;
				var _orderFrom = that.orderFrom;
				var _data = {
					addressId: "", //收货地址id
					customerNote: "", //备注信息
					invoiceFlag: "", //是否发票
					invoiceHead: "", //发票抬头
					itemNum: "", //购买数量
					pickMethod: 10, //取货方式
					skuId: "", //商品skuId
				}
				if(that.v_takingGoods === 1) {
					_data.addressId = _orderFrom.v_shddId;
					_data.pickMethod = 10;

				} else if(that.v_takingGoods === 2) {
					_data.pickMethod = 20;
				}

				_data.customerNote = that.orderFrom.v_bz;

				var _v_isFp = 20;
				if(that.orderFrom.v_isFp) {
					_v_isFp = 10;

				} else {

					_v_isFp = _v_isFp;
				}
				_data.invoiceFlag = _v_isFp;
				_data.invoiceHead = that.orderFrom.v_fptt;
				_data.itemNum = that.orderFrom.v_buyNum;

				_data.skuId = that.orderFrom.v_id;

				if(that.v_takingGoods === 1) {
					if(_orderFrom.v_shddId) {
						that.confirOfOrderAjax(_data);

					} else {

						that.show = true;
					}
				} else if(that.v_takingGoods === 2) {

					if(that.value00.length > 0) {
						that.confirOfOrderAjax(_data);
					} else {
						alert("请选择自提方式");
					}

				} else {
					if(that.v_dz_ps) {

						if(_orderFrom.v_shddId) {

							if(that.isSelfLifting) {

							} else {
								_data.addressId = _orderFrom.v_shddId;
								that.confirOfOrderAjax(_data);
							}
							//that.confirOfOrderAjax(_data);
						} else {
							that.show = true;
						}
					} else {
						if(that.v_takingGoods === 0) {
							alert("请选择取货方式");

						} else {
							that.confirOfOrderAjax(_data);

						}

					}

				}

			},
			onChange(val) {
				var that = this;
				console.log('val change', val)
				if(val[0] === "邮寄") {
					that.scrollersBoxData1.arrowShow = "arrowShow4"
					that.v_takingGoods = 1;
					that.v_zt = false;
					that.v_dz_ps = true;
				} else if(val[0] === "自提") {
					that.v_takingGoods = 2;
					that.v_dz_ps = false;
					that.v_zt = true;
				} else if(val[0] === "兑换凭证") {
					that.orderFrom.v_isFp = false;
					that.orderFrom.v_fptt = "";
					that.v_dhpz = false;
				}
			},
			onShow() {
				console.log('on show')
			},
			onHide(type) {
				console.log('on hide', type)
			}
		},
		//组件实例创建完成，属性已绑定，Dom还未生成。el属性还不存在

	}
</script>
<style>
	.sure-orders .vux-popup-picker-select{
		position: absolute;
		top:12px;
		right: 20px;
	}
	.sure-orders .vux-popup-picker-value{
		margin-right: 3%!important;
		padding-top: -10px;
	}
	.sure-orders .weui-cell_access .weui-cell__ft:after{
		width: 8px;
		height: 8px;
		border-width: 1px 1px 0 0;
	}
	.sure-orders .vux-cell-value{
		color: #8A8A8A!important;
		margin-left: 4px;
		padding-top: -5px;
		margin-top: -5px;
	}
	.weui-switch,
	.weui-switch-cp__box {
		height: 27px!important;
	}
	
	.weui-switch:after,
	.weui-switch-cp__box:after {
		width: 25px!important;
		height: 25px!important;
	}
	
	.weui-switch:before,
	.weui-switch-cp__box:before {
		height: 25px!important;
	}
	.vux-no-group-title{
		margin-top: 1rem!important;
	}
	.sureOrders .weui-cell{
		padding: 10px 15px!important;
		position: relative;
	}
	.sure-orders .weui-cells:before{
		border-top:none!important;
	}
	.chose-menu .vux-cell-box{
		border-bottom: none;
	}
	.chose-menu .addd{
		width: 100%;
		padding: 6px 0px;
		border-top: #f2f2f2 1px solid;
		border-bottom: #f2f2f2 1px solid;
		display: table;
		padding-top: 7px;
	}
	.vScrollerBox{
		border: none!important;
	}
	.sure-orders .weui-cells:after{
		border-bottom: none!important;
	}
</style>
<style lang='scss' scoped>
	body {
		background-color: #f5f5f5 !important;
	}
	
	.weui-cell {
		width: 90% !important;
		padding: 10px 5% !important;
		&::before {
			left: -5% !important;
		}
	}
	
	.weui-cells {
		margin-top: 0px!important;
		// &::after{
		//   border:0px !important;
		// }
	}
	
	.weui-cell_access.vux-cell-box:after {
		right: 5% !important;
	}
	
	.vux-x-switch.weui-cell_switch {
		padding: 0px !important;
		width: 100% !important;
	}
	
	.weui-switch:checked {
		border-color: #FFD487!important;
		background-image: linear-gradient(90deg, #FFD487 0%, #CDA254 100%) !important;
	}
	
	.specell .weui-cell {
		width: 100% !important;
		padding: 0px !important;
	}
	
	.vux-cell-box:not(:first-child):before {
		width: 105%!important;
		left: -5%!important;
	}
	
	.sure-orders {
		margin-top: 5px;
		color: #3B424C;
		.chose-menu {
			padding-bottom: 2px;
			border-bottom: 3px solid transparent;
			background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0 / 100px 100px;
			background-color: #ffffff;
			.pub-lisg {
				img {
					vertical-align: middle;
					margin-right: 10px;
				}
			}
		}
		.bdimg {
			background-color: #fff;
			height: 3px;
			>img {
				width: 100%;
				height: 3px;
			}
		}
		.goods-dec {
			width: 90%;
			padding: 0 5%;
			margin-top: 5px;
			margin-bottom: 5px;
			background-color: #fff;
			padding-bottom: 15px;
			font-size: 14px;
			.goods-dl {
				display: flex;
				justify-content: space-between;
				padding: 13px 0;
				dt {
					img {
						width: 90px;
						height: 90px;
					}
				}
				dd {
					margin-left: 13px;
					h2 {
						font-weight: normal;
						font-size: 14px;
						line-height: 18px;
					}
					p {
						&.price {
							font-size: 14px;
							display: flex;
							justify-content: space-between;
							padding: 8px 0;
							span {
								color: #E13D30;
							}
							em {
								font-style: normal;
								color: #9EA0A5;
							}
						}
						&.tip {
							font-size: 12px;
							color: #9A9793;
							display: flex;
							align-content: center;
							img {
								width: 18px;
								height: 18px;
								margin-right: 6px;
							}
						}
					}
				}
			}
			.ew-price {
				display: flex;
				justify-content: space-between;
				padding: 15px 0;
				font-size: 15px;
				color: #3B424C;
				position: relative;
				&::before,
				&::after {
					content: " ";
					position: absolute;
					left: -5%;
					right: -5%;
					height: 1px;
					border-top: 1px solid #D9D9D9;
					color: #D9D9D9;
					-webkit-transform-origin: 0 0;
					transform-origin: 0 0;
					-webkit-transform: scaleY(0.5);
					transform: scaleY(0.5);
				}
				&::before {
					top: 0;
				}
				&::after {
					bottom: 0;
				}
				em {
					font-style: normal;
					color: #9EA0A5;
				}
			}
			.total {
				padding: 14px 0px 0px 0px;
				text-align: right;
				font-size: 15px;
				color: #3B424C;
				span {
					color: #E13D30;
				}
			}
		}
		.mark {
			/*padding-bottom: 79px;*/
		}
		.commit-menu {
			background-color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			height: 59px;
			line-height: 59px;
			font-size: 0px;
			width: 100%;
			span {
				display: inline-block;
				width: 55%;
				font-size: 15px;
				color: #3B424C;
				padding-left: 5%;
				em {
					font-style: normal;
					color: #CDA254;
					font-weight: bold;
				}
			}
			.sure-btn {
				display: inline-block;
				width: 40%;
				font-size: 18px;
				text-align: center;
				background-image: -webkit-linear-gradient(0deg, #CDA254, #FFD487);
				color: #fff;
			}
			a {
				display: inline-block;
				width: 40%;
				font-size: 18px;
				text-align: center;
				background-image: -webkit-linear-gradient(0deg, #CDA254, #FFD487);
				color: #fff;
			}
		}
	}
</style>