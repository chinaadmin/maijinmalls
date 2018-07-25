<template>
	<div class="paddingTop45">
		<good-header :datas="headerData"></good-header>
		<div>
			<img src="static/noviceMustRead/banner@3x.png" width="100%">
		</div>
		<div class="paddingText">
			物价在上涨，手头的存款却在慢慢贬值，如何让你的存款保值之余还能不断升值呢？<br>盛世金选为您解决后顾之忧——公开透明的黄金价格，丰富多样的金饰款式，低廉划算的工艺费用，更有顺丰保价全国包邮，让您的资产价值不断上涨之余，安心享受一站式购金服务。
		</div>
		<div class="pinpai">
			<div class="pinpais">
				<h2>金选由来</h2>
			盛世金选TM是盛世黄金旗下的全品类黄金垂直电商平台，产品涵盖时尚饰品、婚庆主题、寿诞馈赠及个性定制等高品质的黄金制品。<br>作为一家全品类黄金商城，盛世金选是盛世黄金融合了大量顶级资源打造的战略级平台，旨在为客户提供一站式的黄金珠宝消费解决方案，让客户以更公道的价格，享受更多样的消费体验。

            </div>
		</div>
		<div class="pinpai">
			<div class="pinpais pinpais-ul">
				<h2>盛世金选优势</h2>
                <ul>
                	<li>
                 <img src="static/noviceMustRead/ico_price@3x.png" alt="">
                 <div>
                 	<p>1.价格透明</p>
                 	所有黄金产品没有中间商费用，价格更具竞争力。
                 </div>
                	</li>
                    <li>
                 <img src="static/noviceMustRead/ico_product@3x.png" alt="">
                 <div>
                 	<p>2.品类齐全</p>
                 	未来逐步引入50家+国内外知名黄金珠宝品牌，一站式对比挑选，满足不同场景下的个性化需求。
                 </div>
                	</li>
                    <li>
                 <img src="static/noviceMustRead/ico_safe@3x.png" alt="">
                 <div>
                 	<p>3.品质保障</p>
                 	盛世金选的商品均经过质量检验机构检测，配备检验证书，网络可实时查询。
                 </div>
                	</li>
                    <li>
                 <img src="static/noviceMustRead/ico_car@3x.png" alt="">
                 <div>
                 	<p>4.配送无忧</p>
                 	选用顺丰珠宝物流作为商城商品的制定配送商，货品配送服务更专业，货品安全更有保障。
                 </div>
                	</li>
                </ul>

            </div>
		</div>
		<div class="pinpai">
			<div class="pinpais pinpais-innovate">
				<h2>创新之举</h2>
				<div><img src="static/noviceMustRead/img-tihuoma@3x.png" alt=""></div>
			<p>盛世金选首创提货码，用户下单时可选择实物发货或者选择自提生成提货码，前往线下合作商户兑换等价实物黄金。</p>
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
					title:"了解我们",
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
        width:9.33rem;
        height: 1.66rem;
        background: url("../../../static/noviceMustRead/titleline@3x.png") no-repeat center bottom;
        background-size: contain;
        margin:0 auto;
        text-align: center;
        color: #5D3A09;
        font-size: 1.5rem;
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
</style>