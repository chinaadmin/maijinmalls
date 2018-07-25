<template>
	<div>
		<div v-if="type === 'goodstemp1'" class="rwrap">
			<div  v-show="recommendTitle!=''"  class="index-goodRecommend-head">
				{{recommendTitle}}
				<router-link 
				:to="{
					name: 'goods',
					params: {type: tgtype}
				}">
				更多商品
				</router-link>
			</div>
			<good-grid :data="recommendData"></good-grid>
		</div>
		<div v-if="type === 'goodstemp2'" class="rwrap">
			<div  v-show="recommendTitle!=''" class="index-goodRecommend-head">
				{{recommendTitle}}
				<router-link 
				:to="{
					name: 'brand',
					params: {id: '1'}
				}">
				更多品牌
				</router-link>
			</div>
			<good-list :data="recommendData"></good-list>
		</div>
	</div>
</template>
<script>
import GoodGrid from '../components/GoodGrid.vue'
import GoodList from '../components/GoodList.vue'
export default {
	props: ['type','recommendTitle', 'recommendData','tgtype'],
	components: {
		GoodGrid,
		GoodList
	},
}	
</script>
<style>
.rwrap{
	background-color:#fff;
}
.grid-recommend-head,
.article-recommend-head,
.article-good-recommend-head{
	font-size: 14px;
	color: #868683;
	text-align: center;
	padding: 30px 0;
}
.index-goodRecommend-head{
	font-size: 16px;
	color: #656565;
	padding:10px 5% 0px 5%;
	background-color: #fff;
	border-top: 10px solid #F5F5F5;
	position:relative;
}
.index-goodRecommend-head a{
	position:absolute;
	right:calc(5% + 15px);
	top:32%;
	color: #8A8A8A;
}
.index-goodRecommend-head a:after{
	position:absolute;
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 1px 1px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
    transform: matrix(.71,.71,-.71,.71,0,0);
    top: 50%;
    margin-top: -4px;
    right: -15px;	
}
.article-good-recommend-wrap{
	margin-left: 8px;
	margin-right: 8px;
	background-color: #fff;
}
.article-good-recommend-foot{
	display: block;
	height: 30px;
	margin-left: 8px;
	margin-right: 8px;
	background-color: #fff;
	text-align: center;
	line-height: 30px;
	font-size: 12px;
	color: #404040;
	border-top: 1px solid #f8f8f8;
}
.grid-recommend-wrap{
	padding-left: 8px;
	padding-right: 8px;
}
</style>