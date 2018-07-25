<template>
	<div>
		<div class="goodsBox" style="height: 900px;" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
			<ul class="zlist-2-item">

				<li class="item" v-for="item in listData" :key="item.productId">
					<router-link :to="{
					name: 'goodsDetail',
					params: {id: item.productId}
				}">
						<img :src="item.imgPath" />
						<div class="info">
							<div class="title z-ellipsis-2">
								{{item.productName}}
							</div>
							<div class="subtitle z-ellipsis-2">
								<!--<span v-show="priceUnit.show">
									{{ priceUnit.unit }}
								</span>-->
								<span>
									{{item.showPrice}}
								</span>

							</div>
						</div>
					</router-link>
				</li>
			</ul>
			<div class="pullMore">
				{{ more }}
			</div>
		</div>

		<!--<div id="all_user">
			<vueWaterfallEasy :imgsArr="listData" @scrollLoadImg="fetchImgsData">
				<template slot-scope="props">
					<div class="player_info">
						<div class="title"><i class="tt tt-quanburen"></i>{{props.value.info}}</div>
						<p class="num">￥{{props.value.money}}</p>
					</div>
				</template>
			</vueWaterfallEasy>
			
		</div>-->

	</div>

</template>
<script>
	import vueWaterfallEasy from './vue-waterfall-easy.vue'
	export default {
		props: ['datas', 'more'],
		data() {
			return {
				busy: false
			}
		},
		components: {
			vueWaterfallEasy
		},
		computed: {
			listData() {
				return this.datas
			}
		},
		created() {
			this.imgsArr = this.initImgsArr(0, 5)
			this.fetchImgsArr = this.initImgsArr(5, 10) // 模拟每次请求的新的图片的数据数据
			console.log(this.listData);

		},
		methods: {
			loadMore: function() {
				console.log("滚动了");
				var that = this;
				that.busy = false;
				that.$emit("loadMore");
			},
			// 假数据
			initImgsArr(n, m) { //num 图片数量
				var arr = []
				for(var i = n; i < m; i++) {
					arr.push({
						id: i,
						src: 'http://192.168.131.249/gold/M00/00/38/wKiD-VsXqmWAL5_aAABHkmRK0ic525.jpg',
						link: 'https://www.baidu.com',
						info: '一些图片描述文字'
					})
				}

				var _arry = [];

				return _arry;
			},

			fetchImgsData() {
				this.imgsArr = [{
						id: 1,
						src: 'http://192.168.131.249/gold/M00/00/38/wKiD-VsXqmWAL5_aAABHkmRK0ic525.jpg',
						link: 'https://www.baidu.com',
						info: '一些图片描述文字55555555555555555'
					},
					{
						id: 2,
						src: 'http://192.168.131.249/gold/M00/00/38/wKiD-VsXpc2AK2VmAABO-8y2HQ8154.jpg',
						link: 'https://www.baidu.com',
						info: '一些图片描述文字'
					},
					{
						id: 3,
						src: 'http://192.168.131.249/gold/M00/00/38/wKiD-VsXp4qAHU9tAACv2o4v6gM720.jpg',
						link: 'https://www.baidu.com',
						info: '一些图片'
					}
				]
			},

			upLoadTicket(index) { //投票按钮
				console.log(index);
			}
		},
	}
</script>
<style>
	.pullMore {
		width: 100%;
		text-align: center;
		padding-top: 30px;
		padding-bottom: 30px;
	}
	
	#all_user {
		width: 100%;
		height: auto;
	}
	/*#all_user .vue-waterfall-easy .img-box{
		padding: 0% 2.5%!important;
		margin-bottom: 10px!important;
	}
	#all_user .vue-waterfall-easy .img-box:nth-child(odd){
		padding-left: 5%!important;
	}
	#all_user .vue-waterfall-easy .img-box:nth-child(even){
		padding-right: 5%!important;
	}*/
</style>
<style scoped>
	.goodsBox {
		width: 100%;
		/*padding-bottom: 1.6rem;*/
		height: 900px;
		height: auto;
		overflow: auto;
	}
	
	.zlist-2-item {
		width: 90%;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.zlist-2-item .item {
		float: left;
		width: 48%;
		list-style-type: none;
		margin-top: 0.6rem;
	}
	
	.zlist-2-item .item a {
		display: block;
		border: 1px solid #f5f5f5;
	}
	
	.zlist-2-item .item {
		margin-right: 2%;
	}
	
	.zlist-2-item .item:nth-child(odd) {}
	
	.zlist-2-item .item a>img {
		display: block;
		width: 100%;
		height: 160px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		background: #f5f5f5;
	}
	
	.zlist-2-item .item a .info {
		padding-top: 10px;
		padding-bottom: 10px;
		margin-bottom: 7px;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		border-top: 0px;
	}
	
	.zlist-2-item .item a .info .title {
		line-height: 1.4;
		height: 3.4rem;
		padding: 0px 4px;
		color: #656565;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.zlist-2-item .item a .info .brand {
		padding: 0.1rem 0rem 0rem 0rem;
		color: #656565;
		text-align: center;
	}
	
	.zlist-2-item .item a .info .subtitle {
		font-weight: bold;
		color: #E72D2F;
		text-align: center;
	}
</style>