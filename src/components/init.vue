<template>
	<div id="Init">
		<top class="top"></top>
		<!--<transition :name="transitionName">-->
			<router-view class="Router"></router-view>
		<!--</transition>-->
		<bottom class="com-bottom"></bottom>
	</div>
</template>

<script>
	import Top from './layouts/topN.vue'
	import Bottom from './layouts/bottom.vue'
	export default {
		name: 'Init',  
		components: {
			Top,
			Bottom
		},
		data() {　　　　
			return {　　　　　　
				transitionName: 'slide-right' // 默认动态路由变化为slide-right
				　　　　
			}　　
		},
		watch: {
			'$route': function(to, from) {
				let isBack = this.$router.isBack //  监听路由变化时的状态为前进还是后退
				console.log(isBack);　　　　　
				if(isBack) {　　　　　　　　
					this.transitionName = 'slide-right'　　　　　　
				} else {　　　　　　
					this.transitionName = 'slide-left'　　　　　
				}　　
				this.$router.isBack = false
			}
		}
	
	}
</script>

<style>
	html,
	body {
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}
	.Router {
     position: absolute;
     width: 100%;
     transition: all .2s ease;
     top: 0px;
     left: 0;
     overflow-x: hidden;
     padding-top: 40px;
}

	#Init .top {
		margin-bottom: 46px;
	}
	


.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}

</style>