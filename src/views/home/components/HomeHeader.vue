<template>
	<div class="home-header red-hearder-bg" style="width: 100%;position: fixed;left: 0px;top: 0px;z-index: 101;">
		<div class="home-header-box ">
			<div class="left">
               <div class="logo">
               	  <img src="static/home/logo1.png" alt="">
               </div>
               <div class="search" @click="search">
               	<!-- <icon type="search" class="search-icon"></icon>-->
               	<span class="search-icon" >
               		<img src="static/common/search.png" width="20px" height="20px">
               	</span>
               	 <div>
               	 	<input v-show="loginState" class="input" type="search" placeholder="搜索商品" />	
               	 	<input v-show="!loginState" class="input1" type="search" placeholder="搜索商品" />
               	 </div>
               </div>
			</div>
			<div class="right">
                <div v-show="loginState">
                  <span @click="JumpRegister">注册</span>
                  <span> | </span>
                  <span @click="JumpLogin">登录</span>
                </div>
               <div class="alreadyLogged" v-show="!loginState" @click="JumpMy">
                	<img src="static/common/my1.png" alt="">      
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
		background-image: -webkit-linear-gradient(0deg, #CDA254, #FFD487);
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
					width: 35%;
					margin-right: 3%;
					float: left;
					img{
						height: 26px;
						margin-top: -2px;
					}
				}
				.search{
					width: 57%;
					float: left;
					position: relative;
					padding-left: 5%;
					border-radius: 14px;
					.search-icon{
						position: absolute;
						left:23px;
						top:3px
					}
					.input{
						width: 100%;
						padding: 6px;
						padding-left: 34px;
						font-size: 0.7em;
						border-radius: 1rem;
						border: 0;
						background: #ffffff!important;
					}
					.input1{
						width: 126%;
						padding: 6px 2px;
						padding-left: 34px;
						font-size: 1em;
						padding-top: 5px;
						border-radius: 1rem;
						border: 0;
						background: #ffffff;
					}
					
				}
			}
			.right{
				float: right;
				text-align: right;
				padding-top: 3px;
				width: 25%;
				span{
					color: #ffffff;
				}
				.alreadyLogged{
					img{
						width: 28px;
						height: 28px;
						margin-top: -4px;
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
	import tool from '@/utils/tool'
	export default {
		components: {
			ViewBox,
			Icon 
		},
		data() {
			return {
				loginState:true,
				value: '',
				searchQuery: '',
				resultData: [],
			}
		},
		//组件实例创建完成，属性已绑定，Dom还未生成。el属性还不存在
		created() {
			//对应还有个beforeCreate
			var that = this;
			var _loginState = window.localStorage.getItem('loginState') || '';
			console.log(_loginState);
			
				if(_loginState === 1 | _loginState === "1" ){
					that.loginState = false
				}else if(_loginState === 0  | _loginState === "0" ){
					that.loginState = true
				}
			
		},
		//模板编译/挂载之后
		mounted() {
			//对应还有个beforeMount
			this.$nextTick(function() {})
		},
		methods: {
			JumpMy(){
				var that = this;
				that.$router.push({name: 'my'});
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
				var _obj ={
					num:0,
					name:"密码登录"
				}
				tool.setTabInfo(_obj,0)
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