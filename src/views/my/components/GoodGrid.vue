<template>
	<ul class="zlist-2-item">
		<li class="item" v-for="item in data" :key="item.id">
			<router-link 
				:to="{
					name: 'goodsDetail',
					params: {id: item.id}
				}">
				<img :src="item.img"/>
				<div class="info">
					<div class="title z-ellipsis-2">
						{{item.title}}
					</div>
					<div class="subtitle z-ellipsis-2">
						￥{{item.price}}
					</div>
				</div>
			</router-link>
		</li>
	</ul>
</template>
<script>
export default {
	props: ['data'],
	data() {
		return {}
	}
}
</script>
<style scoped>
.zlist-2-item{
	width: 90%;
	margin:0 auto;
	overflow: hidden;
}
.zlist-2-item .item{
	float: left;
	width: 49%;
	list-style-type: none;
}
.zlist-2-item .item a{
	display: block;
}
.zlist-2-item .item:nth-child(even){
	margin-left:1%;
}
.zlist-2-item .item:nth-child(odd){
	margin-right:1%;
}
.zlist-2-item .item a > img{
	display: block;
	width: 100%;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}
.zlist-2-item .item a .info{
	padding-top: 10px;
	padding-bottom:10px;
	margin-bottom: 7px;
	border: 1px solid #F8E3E5;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-top:0px;
}
.zlist-2-item .item a .info .title{
	font-size: 14px;
	line-height: 1.4;
	color: #656565;
	text-align: center;
}
.zlist-2-item .item a .info .subtitle{
	font-size: 14px;
	font-weight: 500;
	color:#E72D2F;
	text-align: center;
	padding-top: 14px;
	font-family: DINPro-Bold;
}
</style>