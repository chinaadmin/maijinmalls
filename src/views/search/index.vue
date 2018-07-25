<template>
	<div>
		<div class="hearder-search red-hearder-bg">
			<div class="let" @click="goBack">
				<x-icon type="ios-arrow-left" size="30" style="fill:#ffffff"></x-icon>
			</div>
			<div class="right">
				<search placeholder="搜索商品" @result-click="resultClick" @on-change="getResult" v-model="value" position="absolute" @on-focus="onFocus" @on-cancel="onCancel" ref="search"></search>
			</div>
		</div>
		<div class="separateBg">
		</div>
		<div :class="boxBg">
			<vueLoading v-show="vueLoading1" :datas="loadingData"></vueLoading>
			<div v-show="!isList" style="position: relative; width: 100%; height: 100%;">
				<defaultUiNo :datas="defaultUi"></defaultUiNo>
			</div>
			<div style="margin-top: 46px;">
				<goodsListA :datas="recommendGoods" v-show="isList">
				</goodsListA>
			</div>

		</div>
	</div>
</template>

<script>
	import { Search, Icon } from 'vux'
	import goodsListA from '@/components/goodsListA/index'
	import defaultUiNo from '@/components/defaultUi/index'
	import { recommendGoods } from './components/data.js'
	import http from '@/utils/http'
	import _global_ from '@/utils/Global'

	function getResult(val) {
		let rs = []
		for(let i = 0; i < 20; i++) {
			rs.push({
				title: `${val} result: ${i + 1} `,
				other: i
			})
		}
		return rs
	}
	export default {
		components: {
			goodsListA,
			Search,
			Icon,
			defaultUiNo
		},
		data() {
			return {
				isList: false,
				boxBg: "bg",
				vueLoading1: false,
				results: [],
				value: '',
				defaultUi: {
					defaultUiImg: "static/common/search-no-icon.png",
					text:"暂无搜索结果"
				},
				recommendGoods: [],
				loadingData: {
					v_width: "100%",
					height: "",
				},
			}
		},
		created() {
			let that = this;
			that.updateTitle('搜索');
			//关键字 搜索

		},
		methods: {
			keywordSearch: async function(data) {
				var that = this;
				that.vueLoading1 = true;
				let _url = _global_.api.goodQuery;
				let res = await http.post(_url, data);
				if(res) {
					that.vueLoading1 = false;
					var _res = res.result;
					that.recommendGoods = _res;
					if(that.recommendGoods.length > 0) {
						that.boxBg = "";
						that.isList = true;
					} else {
						that.boxBg = "bg";
						that.isList = false;
					}
				}

			},
			goBack() {
				var that = this;
				that.$router.push({
					name: 'home'
				});
			},
			setFocus() {
				this.$refs.search.setFocus()
			},
			resultClick(item) {
				window.alert('you click the result item: ' + JSON.stringify(item))
			},
			getResult(val) {
				var that = this;
				console.log(val)
				if(!val) {
					val = ""
				}
				var _obj = {
					keywords: val, //关键字
					pageNo: 1, //页码
					pageSize: 10, //页大小
				}
				that.keywordSearch(_obj);
				this.results = val ? getResult(this.value) : []
			},
			onSubmit() {
				this.$refs.search.setBlur()
				this.$vux.toast.show({
					type: 'text',
					position: 'top',
					text: 'on submit'
				})
			},
			onFocus() {
				console.log('on focus')
			},
			onCancel() {
				console.log('on cancel')
			}
		}
	}
</script>

<style>
	.hearder-search {
		background-image: -webkit-linear-gradient(0deg, #CDA254, #FFD487);
		position: fixed;
		z-index: 10;
		width: 100%;
		height: 46px;
	}
	
	.hearder-search .left {
		position: absolute;
		top: 10px
	}
	
	.hearder-search .let {
		padding-top: 7px;
	}
	
	.hearder-search .right {
		width: 86%;
		position: fixed;
		z-index: 10;
		top: 0;
		right: 4%;
	}
	
	.com-position-no {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: Center;
		position: relative;
	}
	
	.com-position-no .img {}
	
	.com-position-no img {
		width: 150px;
		height: 150px;
		display: block;
	}
	
	.com-position-no-text {
		position: absolute;
		clear: both;
		display: initial;
		margin-top: 90px;
		color: #AFAFAF;
	}
	
	.hearder-search .weui-search-bar__form {
		border-radius: 55px;
	}
	
	.hearder-search .weui-search-bar__label {
		border-radius: 55px !important;
	}
	
	.hearder-search .weui-search-bar__box .weui-icon-clear {
		top: 0px!important;
	}
	
	.weui-search-bar__form:after {
		border-radius: 55px !important;
	}
	
	.weui-search-bar__cancel-btn {
		color: #ffffff!important;
	}
	
	.hearder-search .vux-search-box {}
	
	.hearder-search .weui-search-bar {
		background-color: transparent!important;
		border: none;
	}
	
	.hearder-search .weui-search-bar:after {
		border: none!important;
	}
	
	.hearder-search .weui-search-bar_focusing {
		background-color: transparent!important;
	}
	
	.hearder-search .vux-search-fixed {
		background-color: transparent!important;
	}
</style>