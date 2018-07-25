<template>
	<ul class="zlist-1-item">
		<li class="item" v-for="item in data" :key="item.brandId">
			<router-link 
				:to="{
					name: 'brandDetail',
					params: {id: item.brandId}
				}">
				<img :src="item.logoIcon"/>
				<p class="title">{{item.brandName}}</p>
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
	padding-top:10px;
}
.zlist-1-item .item{
	list-style-type: none;
	width:30%;
	overflow:hidden;
}
.zlist-1-item .item+.item{
	/* margin-left:10px; */
}
.zlist-1-item .item a{
	display: block;
}
.zlist-1-item .item a > img{
	display: block;
	width: calc(100% - 2px);
	height:100%;
	min-height:84px;
	border:1px solid #F5F5F5;
}
.zlist-1-item .item a > p{
	text-align:center;
	font-size:16px;
	padding:10px;
	font-size: 14px;
	color: #656565;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>