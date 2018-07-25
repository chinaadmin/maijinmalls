<template>
	<ul class="zlist-1-item">
		<li class="item" v-for="item in data" :key="item.id">
			<router-link 
				:to="{
					name: 'goodsDetail',
					params: {id: item.id}
				}">
				<img :src="item.img"/>
				<p class="title">{{item.title}}</p>
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
.zlist-1-item{
	width: 90%;
	overflow: hidden;
	display:flex;
	justify-content: space-between;
	margin:0 auto;
}
.zlist-1-item .item{
	list-style-type: none;
}
.zlist-1-item .item+.item{
	margin-left:10px;
}
.zlist-1-item .item a{
	display: block;
}
.zlist-1-item .item a > img{
	display: block;
	max-width: 100%;
	height:auto;
	border:1px solid #F5F5F5;
}
.zlist-1-item .item a > p{
	text-align:center;
	font-size:16px;
	padding:10px 0;
	font-size: 14px;
	color: #656565;
}
</style>