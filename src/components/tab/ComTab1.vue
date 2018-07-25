<template>
	<div class="tab-component">
		<!--<divider>tab组件</divider>-->
		<div ref="tabBoxOuter" class="tabBox">
			<tab ref="tabBox" class="tabBoxMain" bar-active-color="#CDA254!" :line-width="4" :custom-bar-width="getBarWidth" :style="{width: tabWidth + 'px'}">
				
				<tab-item style="position: relative;" v-for="(item,index) in list" :key="index" @on-item-click="onItemClick(item, index)">
				<span id="vux-tab-item" >
					{{item.name}}
				</span>
				<span class="vux-badge vux-badge-single message" v-show="item.smallRes">{{item.smallRes}}</span>
				</tab-item>
			</tab>
		</div>
		<div style="height: 1rem;background: #f5f5f5;"></div>
	</div>
</template>
<script>
	import { Tab, TabItem } from 'vux'
	export default {
		name: "ComTab",
		components: {
			Tab,
			TabItem

		},
		props: {
			propObj: {
				type: Object,
				required: true,
			}
		},
		data() {
			return {
				tabWidth: document.body.clientWidth,
				v_context_: -1,
				formDataObj: {},
			}
		},
		computed: {
			list() {
				return this.propObj.list;
			}
		},
		created() {
			var that = this;
			let _formDataObj = {
				v_code: "", //图片验证码
				v_phone: "", //手机号
				v_password: "", //登录密码
				v_messageCode: "", //短信验证码
			}
			that.formDataObj = _formDataObj;
		},
		mounted() {
			this.setTabWidth()
			this.clickFirstItem()
		},
		methods: {
			// 函数控制tab-bar的宽度,如果tab标签页数量为1，则隐藏tab-bar
			getBarWidth() {
				if(this.list && this.list.length === 1) {
					return '0px'
				}
				return '20px'
			},
			setTabWidth() {
				// 页面完成刷新之后
				this.$nextTick(() => {
					let ofwidth = 0
					let efwidth = 0
					// efwidth为每一个tab-item的长度总和,因为tab-item的父级为flex布局,而tab-item的flex: none，所以初始化的时候，tab-item会根据自己的字体长度，自动扩张宽度。
					for(let i = 0; i < this.$refs.tabBox.$children.length;) {
						efwidth += this.$refs.tabBox.$children[i].$el.offsetWidth
						i += 1
					}
					// 同样是计算初始化的时候，每一个tab-item的总宽度，但当tab-item总长度大于tab的总长度时，立马退出程序
					for(let i = 0; i < this.$refs.tabBox.$children.length;) {
						ofwidth += this.$refs.tabBox.$children[i].$el.offsetWidth
						if(ofwidth > (document.body.clientWidth)) {
							break
						}
						i += 1
					}
					// 假如tab-item的总宽度小于显示tabwidth，则评分tab的剩余空间，加到每一个tab-item中
					if(ofwidth < (document.body.clientWidth)) {
						for(let i = 0; i < this.$refs.tabBox.$children.length;) {
							this.$refs.tabBox.$children[i].$el.style.width = (this.$refs.tabBox.$children[i].$el.clientWidth + (((document.body.clientWidth) - ofwidth) / this.$refs.tabBox.$children.length)) + 'px'
							console.log(((((document.body.clientWidth) - ofwidth) / this.$refs.tabBox.$children.length)) + 'px')
							i += 1
						}
						console.log(document.body.clientWidth);
						this.tabWidth = (document.body.clientWidth)
					} else {
						console.log(efwidth);
						this.tabWidth = efwidth
					}
				}, 1000)
			},
			clickFirstItem() {
				setTimeout(() => {
					this.$refs.tabBox.$children[0].onItemClick()
				}, 200)
			},
			clickTabItemById(index) {
				// 模拟点击事件
				this.$refs.tabBox.$children[index].onItemClick()
				// 滑动到对应的点击标签页
				// 这里值得注意的是，为什么tabBoxOut的宽度明明只有屏幕的宽度，而里面的tabBox是超过屏幕的宽度的，所有才
				// 可以滑动，滑动的是tabBox这个div，而真正滑动的事件却是绑定在tabBoxOut这个div当中。所以，当你使用scrollLeft
				// 这个属性的时候，是要用在tabBoxOut这个div上，而不是在tabBox这个div上。
				// ----------------------------------------------------------------
				// 接下来可以运用offsetLeft计算tab-item在父div tabBox横轴偏移量、scrollLeft滑动到对应的tab-item，然后运用数学公式来把激活的tab-item滚动到tabBoxOuter这个div
				// 的中心
				let tabConter = (document.body.clientWidth - this.$refs.tabBox.$children[index].$el.offsetWidth) / 2
				this.$refs.tabBoxOuter.scrollLeft = this.$refs.tabBox.$children[index].$el.offsetLeft - tabConter
			},
			onItemClick(keyword, index) {
				var that = this;
				var _index = index;
				var _goodsTabState = that.$store.state.vux.goodsTabState;
				console.log(_index);
				console.log(keyword);
				console.log(_goodsTabState);
				console.log(that.v_context_);
				
				if(that.v_context_ === -1) {
					that.$emit("onItemClickTab", _goodsTabState.tabState);
					let barLeft = 0
					document.getElementsByClassName('vux-tab-ink-bar')[0].style.right = '100%'
					console.log(this.list);
					for(let i = 0; i < this.list.length;) {
						console.log(document.getElementsByClassName('vux-tab-item')[i].innerText);
						console.log(keyword);
						if(document.getElementsByClassName('vux-tab-item')[i].children[0].innerText === _goodsTabState.name) {
							console.log('document.getElementsByClassName(\'vux-tab-item\')[' + index + '].offsetWidth = ' + document.getElementsByClassName('vux-tab-item')[i].offsetWidth)
							barLeft += document.getElementsByClassName('vux-tab-item')[i].offsetWidth / 2
							// barLeft -= 22.5
							barLeft -= 10
							break
						}
						barLeft += document.getElementsByClassName('vux-tab-item')[i].offsetWidth
						console.log(barLeft);
						i += 1
					}
					console.log(barLeft);
					document.getElementsByClassName('vux-tab-ink-bar')[0].style.left = (barLeft + 'px')

				} else {
					that.$emit("onItemClickTab", index);
					var _obj = {
						tabState: _index,
						name: keyword,
					}
					that.$store.dispatch('updateTabState', _obj);
					let _formDataObj = {
						v_code: "", //图片验证码
						v_phone: "", //手机号
						v_password: "", //登录密码
						v_messageCode: "", //短信验证码
					}
					that.formDataObj = _formDataObj;
					var _data = {
						formDataObj: that.formDataObj,
						id: _index
					};

					let barLeft = 0
					document.getElementsByClassName('vux-tab-ink-bar')[0].style.right = '100%'
					for(let i = 0; i < this.list.length;) {
						console.log(document.getElementsByClassName('vux-tab-item')[i].children[0].innerText);
						console.log(keyword);
						if(document.getElementsByClassName('vux-tab-item')[i].children[0].innerText === keyword.name) {
							console.log('document.getElementsByClassName(\'vux-tab-item\')[' + index + '].offsetWidth = ' + document.getElementsByClassName('vux-tab-item')[i].offsetWidth)
							barLeft += document.getElementsByClassName('vux-tab-item')[i].offsetWidth / 2
							// barLeft -= 22.5
							barLeft -= 10
							break
						}
						barLeft += document.getElementsByClassName('vux-tab-item')[i].offsetWidth
						console.log(barLeft);
						i += 1
					}
					console.log(barLeft);
					document.getElementsByClassName('vux-tab-ink-bar')[0].style.left = (barLeft + 'px')
				}

				if(index === 0) {
					that.v_context_ = 0;
				} else if(index === 1) {
					that.v_context_ = 1;
				}

			}
		}
	}
</script>
<style scoped>
	.tab-component{
		width: 100%;
		position: fixed;
		background: #ffffff;
		z-index: 1000;
	}
</style>
<style >
	
	.message{
		position: absolute;
		top:4px;
		margin-left: -4px;
		opacity: 0.8;
	}
	.tab-component .vux-tab .vux-tab-item.vux-tab-selected {
		font-size: 1em;
		color: #CDA254;
		border-bottom: 3px solid #CDA254;
		
	}
	
	.tab-component .vux-tab-bar-inner {
		border-radius: 10px !important;
		border-bottom: 2px solid #CDA254!important;
		background-color: #CDA254;
	}
	
	.tab-component .vux-tab .vux-tab-item {
		display: inline-block;
		width: auto;
		height: 100%;
		padding: 0 10px;
		flex: none;
		background-color: #ffffff;
	}
	
	.tabBox {
		width: 100%;
		overflow: scroll!important;
		-webkit-overflow-scrolling: touch;
	}
	
	.tabBoxMain {
		color: #CDA254!important;
		background-color: #f2f4f5;
		font-size: 14px
	}
</style>
<style scoped>
	/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸,在这里设置滚动条宽度为0px*/
	
	 ::-webkit-scrollbar {
		width: 0px;
		display: none;
		background-color: #fff;
	}
	/*定义滚动条轨道 内阴影+圆角*/
	
	 ::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
		background-color: #fff;
	}
	/*定义滑块 内阴影+圆角*/
	
	 ::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
		background-color: #fff;
	}
</style>