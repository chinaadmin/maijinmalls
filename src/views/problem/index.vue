<template>
	<div class="paddingTop45">
		<good-header :datas="headerData"></good-header>
		
		<div class="pinpai">
			<div class="pinpais">
				<div class="goumai">
					<div class="goumais">
					<img src="static/noviceMustRead/ico_problem@3x.png" alt="">&nbsp;常见问题
				    </div>
				    <p>FREQUENTLY ASKED QUESTIONS</p>
				</div>
			<p class="question">Q：我可以使用哪些支付方式?</p>
			<p class="answer">A：您可以使用您的支付宝进行支付，更多支付方式我们正在开通中，敬请期待。</p>
			<p class="question">Q：商城的黄金饰品从哪里来的?</p>
			<p class="answer">A：我们的黄金制品均来源于正规厂商，符合国家相应的质量标准，且附有证书。请放心购买。</p>
			<p class="question">Q：下订单后多久能收到?</p>
			<p class="answer">A：我们将在您的发票开具完成后打包快递，具体到货时间取决于快递公司的运转流程。请务必保持联系方式畅通。</p>
			<p class="question">Q：为什么需要本人签收?</p>
			<p class="answer">A：贵金属饰品非普通商品，一般具有规格小、价值高的特点。为确保您购买的商品可以安全抵达您手中，请务必由本人签收。</p>
			<p class="question">Q：为什么我买到的金子重量和页面上的不太一样?</p>
			<p class="answer">A：因生产工艺、测量环境等原因，会产生一定的误差。按我国国家工商行政管理总局2004年颁布的《零售商品称重计量监督管理办法》，允许有0.01克的误差。</p>
			<p class="question">Q：我不喜欢我买到的商品了，能否退货?</p>
			<p class="answer">A：很抱歉，由于黄金等贵金属饰品属于特殊商品，您签收后即视为确认收货成功，无法为您办理退换货手续。您在下单过程中可选择自提获取提货码，前往合作商户通过提货码兑换等价实物黄金。</p>
			<p class="question">Q：我可以使用哪些支付方式?</p>
			<p class="answer">A：您可以使用您的支付宝进行支付，更多支付方式我们正在开通中，敬请期待。</p>

            </div>
            <div class="kefu">
            	如有其它问题，可拨打客服电话<br>
 0755-32938689，我们将竭诚为您服务
            </div>
		</div>
		
		
	</div>
</template>

<script>
	import GoodHeader from '@/components/header/header3' 
	export default {
		components: {
			GoodHeader
		},
		data() {
			return {
				headerData:{
					title:"常见问题",
					icon:"static/my/my.png",
					jumpHref:"",
					classStyle:"hearderBgColor",
					classStyleIcon:"fill:#757575",
					classStyleFont:"color:#333333;font-size:16px;font-weight:bold;"
				},
			}
		}
	}
</script>

<style scoped>
	.paddingText{
		padding: 1rem 2.5rem;
		color:#656565;
		font-size: 14px;
	}
	.pinpai{
		padding-top: 1rem;
		background: #F5F5F5;
	}
	.pinpais{
		padding: 1rem 2.5rem;
		background: #fff;
		color:#656565;
		font-size: 14px;
	}
	.pinpais h2{
        width:11.2rem;
        height: 2rem;
        background: url("../../../static/noviceMustRead/titleline@3x.png") no-repeat center bottom;
        background-size: contain;
        margin:0 auto;
        text-align: center;
        color: #656565;
        font-size: 1.6rem;
        margin-bottom: 1rem;
	}
	.pinpais-ul li{
		-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items: center; justify-content: center;display:box;display: -webkit-box;display: -webkit-flex;display:-moz-box;display: -ms-flexbox;display:flex;margin-bottom: 1.5rem;
	}
	.pinpais-ul li img{
		width: 60px;height: 60px;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items: center;display:box;display: -webkit-box;display: -webkit-flex;display:-moz-box;display: -ms-flexbox;display:flex;vertical-align: middle;
	}
	.pinpais-ul li div{
		-prefix-box-flex: 1;-webkit-box-flex: 1;-webkit-flex: 1;-moz-box-flex: 1;-ms-flex: 1;flex:1;font-size: 14px;color: #656565;padding-left: 1rem;
	}
	.pinpais-ul li div p{
		font-size: 16px;
        color: #D78214;
	}
	.pinpais-innovate{
		text-align: center;
	}
	.pinpais-innovate img{
        width:100px;
        height: 100px;

	}
	.pinpais-innovate p{
		text-align: left;
	}
	.pinpais p{
		font-size: 15px;
        color: #656565;
	}
	.pinpais .question{
		font-size: 15px;
        color: #CDA254;
        line-height: 24px;
	}
	.pinpais .answer{
		font-size: 15px;
        color: #656565;
        line-height: 24px;
        padding-bottom: 30px;
	}
	.goumais{
		line-height: 18px;
		font-size: 18px;
        color: #333333;
        font-weight: bold;
	}
	.goumais img{
		width: 16px;
		height: 18px;
		float:left;
	}
	.goumai p{
		font-size: 12px;
        color: #B7B7B7;
        line-height: 36px;
	}
	.goumai{
		padding:5px 0px;
	}
	.kefu{
		text-align: center;
		padding:20px;
		font-size: 14px;
        color: #929292;
	}
</style>