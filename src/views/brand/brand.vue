<template>
	<div class='brand'>

		<brand-header :datas="headerData"></brand-header>

		<div class="separateBg" style="height: 1.5rem;">
		</div>
		<brandList :data="hotBrands2"></brandList>
		<div class="separateBg">
		</div>
		<div class="com-position">
			<vueLoading v-show="vueLoading" :datas="loadingData"></vueLoading>

			<dl class="brand-list" v-for="(val, key) in brandListData" :key="key">
				<dt>
            <scroller-box2 :datas="titleobjFun(key,0)">
            </scroller-box2>
            <div class="brand-dec" :style="titleobjFun(key,1)">
                <p>
                    {{val.brandInfo}}
                </p>
            </div>
        </dt>
				<div style="height: 1rem;">

				</div>
				<dd>
					<goodsList :datas="val.productInfos"></goodsList>
				</dd>
				<div style="height: 1rem;">

				</div>
			</dl>
			<div style="height: 5rem;">

			</div>
			<!--<dl class="brand-list">
				<dt>
            <scroller-box2 :datas="titleobj">
            </scroller-box2>
            <div class="brand-dec">
                <p>
                    买金呗是一个为用户提供黄金购买及存管服务的互联网黄金平台，是国内为数不多的上海黄金交易所综合类会员。
                </p>
            </div>
        </dt>
				<dd>

					<goodsList :datas="hotGoods2"></goodsList>
					<div style="height: 4rem;">

					</div>
				</dd>
			</dl>-->
		</div>
	</div>
</template>
<style>
	.vux-header {
		background-image: -webkit-linear-gradient(0deg, #CDA254, #FFD487) !important;
	}
</style>
<style lang='scss' scoped>
	.brand {
		background-color: #F5F5F5;
		.brand-top {
			padding: 10px 0;
			.rwrap {
				padding-top: 4px;
			}
		}
		.brand-list {
			background-color: #fff;
			margin-bottom: 10px;
			dt {
				.brand-dec {
					background: url('../../../static/home/article-default.png') no-repeat 100% 100%;
					width: calc(90% - 30px);
					margin: 0 auto;
					border-radius: 6px;
					padding: 9px 15px;
					height: 180px;
					p {
						font-size: 12px;
						color: #656565;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}
				}
			}
		}
	}
</style>
<script>
	import { XHeader } from 'vux'
	import brandList from '@/components/brandList/brandList.vue'
	import goodsList from '@/components/goodsList/goodsList.vue'
	import ScrollerBox2 from '@/components/scrollerBox/ScrollerBox.vue'
	import BrandHeader from '@/components/header/header1.vue'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'
	// import { hotBrands2, hotGoods2 } from '../home/components/data.js'
	import tool from '@/utils/tool'
	import { s_brandList } from '@/server/index'
	import { mapState } from 'vuex'
	export default {
		components: {
			XHeader,
			ScrollerBox2,
			brandList,
			goodsList,
			BrandHeader
		},
		data() {
			return {
				headerData: {
					title: "品牌",
					jumpHref: "",
					rightjumpHref:"my"
				},
				titleArray: [],
				brandListData: [],
				vueLoading: true,
				loadingData: {
					v_width: "100%",
					height: "",
				},
				hotBrands2: "",
				hotGoods2: "",
				titleobj0: {
					routerHref: '',
					leftTitle: '盛世黄金',
					rightTitle: '查看全部',
					routerHref: "",
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "arrowShow",
				},
				titleobj1: {
					routerHref: '',
					leftTitle: '盛世黄金',
					rightTitle: '查看全部',
					routerHref: "",
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "arrowShow",
				},
				titleobj3: {
					routerHref: '',
					leftTitle: '盛世黄金',
					rightTitle: '查看全部',
					routerHref: "",
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "arrowShow",
				},
				titleobj4: {
					routerHref: '',
					leftTitle: '盛世黄金',
					rightTitle: '查看全部',
					routerHref: "",
					leftTextClass: "leftText",
					titleHead: "title-head",
					arrowShow: "arrowShow",
				}
			}
		},
		methods: {},
		computed: {
			...mapState([
				'vux'
			])
		},
		created() {
			var that = this;

			that.brandList();
			if(that.vux.brandList.length > 0 ) {
				that.hotBrands2 = that.vux.brandList;
			} else {
				var v_brandList = s_brandList();
				v_brandList.then(res => {
					if(res){
						that.hotBrands2 = res;
					}
				})
			}
			//更多品牌
			that.moreBrands();
		},
		mounted() {
			this.$nextTick(function() {})
		},
		methods: {
			brandList() {
				var that = this;
				var _brandList = that.vux.brandList;
				if(_brandList) {
					that.hotBrands2 = _brandList;
				}
			},
			titleobjFun(data, type) {
				var that = this;

				if(type === 0) {
					var _name = "titleobj" + data;
					var _obj = {
						leftTitle: '',
						rightTitle: '查看全部',
						routerHref: "",
						leftTextClass: "leftText",
						titleHead: "title-head",
						arrowShow: "arrowShow",
					}
					_obj.leftTitle = that.titleArray[data].name;
					_obj.routerHref = that.titleArray[data].jumpUrl;
					return _obj
				} else if(type === 1) {
					var _img = that.brandListData[data].adImgPath;
					return "background: url(" + _img + ") no-repeat;background-size: cover;"
					//return "background: url("+_img+") no-repeat 100% 100%;"
				}

			},
			moreBrands: async function() {
				var that = this;
				let _url = _global_.api.brand.moreBrands;
				let res = await http.post(_url, '');
				console.log(res);
				if(res) {
					that.vueLoading = false;
					var _titleArray = [];
					if(res.result) {
						var _brandListData = res.result
						_brandListData = tool.priceUnitTrans(res.result, 0);
						console.log(_brandListData)
						that.brandListData = _brandListData;
						var _result = res.result;
						for(var i = 0; i < _result.length; i++) {
							var _obj = {
								name: "", //卷轴的名字
								bigImg: "", //大图
								jumpUrl: "", //跳转链接
							}
							_obj.name = _result[i].brandName;
							_obj.bigImg = _result[i].logoIcon;
							_obj.jumpUrl = "../secondLevel/brandDetail/" + _result[i].brandId;
							_titleArray.push(_obj);
						}
						that.titleArray = _titleArray;
					}
				}
			}
		}
	}
</script>