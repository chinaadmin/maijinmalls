<template>
	<div class="home-header" style="width: 100%;position: fixed;left: 0px;top: 0px;z-index: 101;">
		<div class="home-header-box">
			<div class="left">
               <div class="logo" @click="goBack">
               	 <x-icon type="ios-arrow-left" size="30" style="fill:#CDA254"></x-icon>
               </div>
               <div class="search">
               	 <div style="font-size:1.1em!important;" class="c-CDA254">
               	 	我的
               	 </div>
               </div>
			</div>
			<div class="right">
                <!--<div>
                  <span @click="JumpRegister">注册</span>
                  <span> | </span>
                  <span @click="JumpLogin">登录</span>
                </div>-->
                <div class="alreadyLogged">
                	<img src="static/my/my_set.png" alt="">      
                </div>
			</div>
		</div>

		<!--<div class="logo">
            <img src="../../../../static/home/logo.png" alt="">
        </div> 
       <div class="searchbar">
            <i class="searchico"></i> 
            <input type="search" placeholder="搜索商品、品牌" class="searchbar-core">
        </div>
        <search 	v-model="value" 
                    position="absolute" 
                    auto-scroll-to-top
                    placeholder="搜索商品、品牌"
                    @result-click="resultClick" 
                    >
        </search>
        <div class="status">
            <img src="../../../../static/home/user.png" alt="">         
        </div>-->
	</div>
</template>
<style lang='scss' scoped>
	.home-header {
		width: 100%;
		background:#ffffff ;
		box-sizing: border-box;
		height: 46px;
		padding-top: 10px;
		z-index: 1;
		display: flex;
		
		.home-header-box{
			width: 90%;
			margin: 0 auto;
			.left{
				float: left;
				width: 75%;
				.logo{
					width: 25%;
					float: left;
					img{
						height: 26px;
						margin-top: -2px;
					}
				}
				.search{
					width: 70%;
					float: left;
					position: relative;
					padding-left: 5%;
					text-align: center;
					color: #ffffff;
					
					.search-icon{
						position: absolute;
						left:20px;
						top:6px
					}
					.input{
						width: 100%;
						padding: 6px;
						padding-left: 34px;
						font-size: 0.7em;
						border-radius: 1rem;
						border: 0;
						background: #ffffff;
					}
					.input1{
						width: 126%;
						padding: 6px;
						padding-left: 34px;
						font-size: 0.7em;
						border-radius: 1rem;
						border: 0;
						background: #ffffff;
					}
					
				}
			}
			.right{
				float: right;
				text-align: right;
				width: 25%;
				span{
					color: #ffffff;
				}
				.alreadyLogged{
					img{
						width: 28px;
						height: 28px;
					}
				}
			}
		}
		.logo {
			img {
				
			}
		}
		.status {
			margin-left: 10px;
			a {
				display: inline-block;
				overflow: hidden;
				img {
					width: 26px;
					height: 26px;
				}
			}
		}
	}
</style>
<script>
	import { ViewBox , Icon } from 'vux'
	export default {
		components: {
			ViewBox,
			Icon 
		},
		data() {
			return {
				value: '',
				searchQuery: '',
				resultData: [],
			}
		},
		//组件实例创建完成，属性已绑定，Dom还未生成。el属性还不存在
		created() {
			//对应还有个beforeCreate
		},
		//模板编译/挂载之后
		mounted() {
			//对应还有个beforeMount
			this.$nextTick(function() {})
		},
		methods: {
			goBack(){
				var that = this;
				that.$router.push({name: 'home'});
			},
			resultClick(item) {
				this.searchQuery = item.title
				this.resultData = searchResult
			},
			JumpRegister(){
				var that = this;
				that.$router.push({name: 'register'});
			},
			JumpLogin(){
				var that = this;
				that.$router.push({name: 'login'});
			},
			search(){
				var that = this;
				that.$router.push({name: 'search'});
			}
		},
		//组件更新后
		updated() {
			//对应还有个beforeUpdate
		},
		destory() {}
	}
</script>