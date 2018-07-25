<template>
	<div class="paddingTop45">
		<good-header :datas="headerData"></good-header>
		<div class="imgbg">
			<img src="static/noviceMustRead/newbanner@3x.png" width="100%">
		</div>
		<div class="contentbg">
			<div class="content">
			<div class="contents">
			 <div class="contents-title"></div>
			 <div class="contents-content">
			 	<div class="contents-content-right">
                 <div><img src="static/noviceMustRead/step1@3x.png" alt="">&nbsp;获得实名账号</div>
                 <p>一个手机号即可完成注册,2步即可实名</p>
			 	</div>
			 	<img src="static/noviceMustRead/img1@3x.png" alt="" class="contents-content-img">
			 </div>
			 <div class="contents-content">
			 	<img src="static/noviceMustRead/img2@3x.png" alt="" class="contents-content-img">
			 	<div class="contents-content-right">
                 <div><img src="static/noviceMustRead/step2@3x.png" alt="">&nbsp;挑选商品</div>
                 <p>搜索关键词，找到想要的商品</p>
			 	</div>
			 </div>
			 <div class="contents-content">
			 	<div class="contents-content-right">
                 <div><img src="static/noviceMustRead/step3@3x.png" alt="">&nbsp;拍下商品</div>
                 <p>点击<span>“立即购买”</span>进行结算，提交订单（提交订单前请确认取货方式及购物信息）
请放心，此时不会进行扣款
</p>
			 	</div>
			 	<img src="static/noviceMustRead/img3@3x.png" alt="" class="contents-content-img">
			 </div>
			 <div class="contents-content">
			 	<img src="static/noviceMustRead/img4@3x.png" alt="" class="contents-content-img">
			 	<div class="contents-content-right">
                 <div><img src="static/noviceMustRead/step4@3x.png" alt="">&nbsp;支付货款</div>
                 <p>目前仅支持支付宝支付，更多支付方式正在开通中
查看订单，可以了解您所购商品的物流动态</p>
			 	</div>
			 </div>
			 <div class="contents-content">
			 	<div class="contents-content-right">
                 <div><img src="static/noviceMustRead/step5@3x.png" alt="">&nbsp;确认收货</div>
                 <p>物流签收后，默认确认收货
如部分商品有问题，可申请退款。盛世金选提供多项买家保障服务，为您的网购保驾护航
</p>
			 	</div>
			 	<img src="static/noviceMustRead/img5@3x.png" alt="" class="contents-content-img">
			 </div>

            </div>
            <div class="paddingText">
			<a href="javascript:" class="abutton" @click="goto('goumai')">购买须知</a><a href="javascript:" class="abutton" @click="goto('problem')">常见问题</a>
		    </div>
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
					title:"新手必读",
					icon:"static/my/my.png",
					jumpHref:"",
					classStyle:"hearderBgColor",
					classStyleIcon:"fill:#757575",
					classStyleFont:"color:#333333;font-size:16px;font-weight:bold;"
				},
			}
		},
		methods: {
			goto(a) {
				var that = this;
				console.log(a);
				that.$router.push({
					name: a
				});
			},
		},
	}
</script>

<style scoped>
    .paddingTop45{
    	background: #F2F2F2; 
    }
    .imgbg{
    	background: #F2F2F2;
    }
    .contentbg{
    	height:auto;
    	position: relative;
    	padding:0px 10px;
    }
    .content{
    	width:100%;
    	height: auto;
    	position: relative;
    }
    .contents{
    	width: 100%;
    	height:auto;
    	background: #fff;
    	border-radius: 10px;
    	margin-top:-85px;
    	box-shadow: 0 2px 10px 0 rgba(0,0,0,0.08);
    	padding-bottom: 10px;
    	padding-top: 10px;
    }
    .contents-title{
    	width:25.4rem;
    	height: 2.33rem;
    	background: url("../../../static/noviceMustRead/title@3x.png") no-repeat center center;
        background-size: contain;
    	margin:0 auto;
    	margin-top:20px;
    }
    .contents-content{
    	padding:1rem;
    	-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items: center; justify-content: center;display:box;display: -webkit-box;display: -webkit-flex;display:-moz-box;display: -ms-flexbox;display:flex;
    }
    .contents-content .contents-content-img{
        width: 80px;height: 80px;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items: center;display:box;display: -webkit-box;display: -webkit-flex;display:-moz-box;display: -ms-flexbox;display:flex;vertical-align: middle;padding:10px;
    }
    .contents-content-right{
       -prefix-box-flex: 1;-webkit-box-flex: 1;-webkit-flex: 1;-moz-box-flex: 1;-ms-flex: 1;flex:1;padding:0 18px;
    }
    .contents-content-right div{
    	line-height: 20px;
    	font-size: 16px;
        color: #B68742;
    }
    .contents-content-right p{
    	margin-top:8px;
    	font-size: 14px;
        color: #958C7F;
    }
    .contents-content-right p span{
    	font-size: 14px;
        color: #EE970F;
    }
    .contents-content-right div img{
    	width:26px;
    	height: 20px;
    	float:left;
    }
	.paddingText{
		padding: 1.5rem 1rem;
		height: 50px;
	}
	.abutton{
		width:130px;
		height: 40px;
		border-radius: 40px;
		background: red;
		background-image: linear-gradient(-180deg, #EFC382 0%, #DDAB61 100%);
		line-height: 40px;
		text-align: center;
		display: block;
		float:left;
		color:#fff;
	}
	.abutton::active,.abutton::hover{
		background-image: linear-gradient(-180deg, #CE861C 3%, #E0A041 100%);
	}
	.paddingText a:first-child{
		margin-right: 1rem;
	}
	@media (min-width: 321px){
     .paddingText{
	}
	.paddingText a:first-child{
		margin-right: 1rem;
	}
	.abutton{
		width:150px;
	}
	.contentbg{
    	height:auto;
    }
    }
    @media (min-width: 361px){
     .paddingText{
	}
	.paddingText a:first-child{
		margin-right: 2rem;
	}
	.abutton{
		width:150px;
	}
	.contentbg{
    	height:auto;
    }
    }
</style>