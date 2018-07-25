<template>
	<div class="order-list-box"  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
		<div v-for="item in myOrderListProps"  >
			<div class="orderLists" @click="orderDetails(item.v_id)">
				<div class="orderListBox">
					<div class="orderListTop">
						<div class="left">
							{{ item.goodType }}
						</div>
						<div class="right">
							<span class="c-E2AF4E">
								{{ item.orderState }}
							</span>
						</div>
					</div>
					<div class="center">
						<div class="left">
							<img :src="item.v_img " width="90px" height="90px">
						</div>
						<div class="right">
							<div class="title">
								<span class="c-3D3D3D">
						                    {{ item.v_title }}
					           </span>
							</div>
							<div class="specifica">
								<div class="specificaLeft c-999999">
									<span>克重：</span>
									<span>{{ item.v_kz }}</span>
								</div>
								<div class="specificaright c-999999 f-6r">
									X {{ item.v_num }}
								</div>

							</div>
						</div>
					</div>
					<div class="orderListBottom">
						<div>
							<div>
								<span>共<span>{{ item.v_spjs }}</span>件商品</span>
								<span>合计：</span>
								<span class="c-E13D30">¥{{ item.v_hjze }}</span>
							</div>
						</div>
					</div>
					<div class="rcode" v-show="item.redeemCode!='' && item.redeemCode!=null">
						兑换码：{{item.redeemCode}}
					</div>
				</div>
				<div class="orderListBtn" v-show="item.orderNum === 10">
					<div>
						<div class="btn1" @click.stop="cancelOrder(item.v_id)">
							取消订单
						</div>
						<div class="btn2" @click.stop="pay(item.v_id)">
							立即支付
						</div>
						
					</div>
				</div>
				<div class="orderListBtn" v-show="item.orderNum === 30">
					<div>
						<div class="btn1" @click.stop="confirmCaching(item.v_id)">
							确认收货
						</div>
					</div>
				</div>
				<div style="height: 1rem;" v-show="item.orderNum != 10">

					
				</div>
			</div>
			<div class="separateBg">
			</div>
		</div>
		<div class="pullMore">
			    <!--<span>
			    	<i class="weui-loading"></i>
			    </span>-->
			    <span>
			    	{{ more }}
			    </span>
			</div>
	</div>

</template>

<script>
	import { myOrderList } from './data.js'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'
	export default {
		props: ['datas','more'],
		components: {

		},
		data() {
			return {
				busy:false,
				myOrderList: myOrderList
			}
		},
		created() {
			var that = this;
			that.myOrderList = that.datas;
			
		},
		computed: {
						myOrderListProps(){
							var that = this;
							return that.datas;
						}
		},
		watch: {
			'datas': function() {
				var that = this;
				that.myOrderList = that.datas;
			}
		},
		methods: {
			v_confirmCaching: async function(data) {
				var that = this;
				let _url = _global_.api.order.confirmCaching;
				var _obj = {
					orderId: data
				}
				let res = await http.post(_url, _obj);
				if(res){
					
				}
			},
			loadMore: function() {
				console.log("滚动了");
				var that = this;
				that.busy = false;
				that.$emit("loadMore");
			},
			orderDetails(id){
				var that = this;
				console.log(id);
				that.$router.push({
					name: 'orderDetails',
					params: {
						id: id
					}
				})
			},
			pay(id) {
				var that = this;
				console.log(id);
				that.$router.push({
					name: 'pay',
					params: {
						id: id,
						urlFrom:"myOrder"
					}
				})
			},
			cancelOrder(id){
				var that = this;
				that.$emit("v_cancelOrder",id);
			},
			confirmCaching(id){
				var that = this;
				console.log(id);
				that.$emit("confirmCaching",id);
			}
			
		}
	}
</script>

<style lang='scss'>
	.rcode{
		font-size:12px;
		color: #999999;
		border-top:1px solid #eceaea;
		padding-top:.5rem;
		margin-top: .5rem;
	}
	.pullMore {
		width: 100%;
		text-align: center;
		padding-top: 30px;
		padding-bottom: 30px;
	}
	.order-list-box{
		width: 100%;
		/*padding-bottom: 1.6rem;*/
		height: 900px;
		overflow: auto;
	}
	.orderLists {
		width: 100%;
		height: 100%;
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
	
	.orderListBtn {
		width: 100%;
		border-top: #efefef 1px solid;
		text-align: right;
		padding-top: 10px;
		margin-top: 10px;
		padding-bottom: 10px;
		.btn1 {
			display: inline-block;
			width: 92px;
			text-align: center;
			border: #cbcbcb 1px solid;
			border-radius: 20px;
			padding: 2px 0px;
			margin-right: 10px;
		}
		.btn2 {
			display: inline-block;
			width: 92px;
			text-align: center;
			border: #E2AF4E 1px solid;
			border-radius: 20px;
			padding: 2px 0px;
			color: #E2AF4E;
			margin-right: 10px;
		}
	}
</style>