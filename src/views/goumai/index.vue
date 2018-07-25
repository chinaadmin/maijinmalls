<template>
	<div class="paddingTop45">
		<good-header :datas="headerData"></good-header>
		
		<div class="pinpai">
			<div class="pinpais">
				<div class="goumai">
					<div class="goumais">
					<img src="static/noviceMustRead/ico_goumai@3x.png" alt="">&nbsp;购买须知
				    </div>
				    <p>SHOPPING INFORMATION</p>
				</div>
			<p>所售商品均符合国家相关质量标准，并附有检测证书，请放心购买。</p><p>
商品照片均为实拍，尺寸为手工测量，实际尺寸请以实物为准。</p><p>
商品发货使用顺丰快递并为每份订单均购买全程运输保险。</p><p>
收货时请务必在快递员在场的情况下开箱确认签收。</p><p>
在快递单上签字确认将视为您认为货物数量准确、货物外观无损，家人、门卫、公司前台等签收将视为本人签收。</p><p>
发票将备注用户姓名，随商品一并寄出。如有其它疑问请致电客服:  0755-32938689。</p>

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
					title:"购买需知",
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
</style>