<template>
	<div id="app">
		<loading v-model="isLoading"></loading>
		<!--<transition :name="transitionName">-->
			<router-view></router-view>
		<!--</transition>-->
	</div>
</template>

<script>
	import { Loading } from 'vux'
	import { mapState } from 'vuex'

	export default {
		name: 'app',
		data() {
			return {
				transitionName: 'slide-right'
			}
		},
		components: {
			Loading
		},
		computed: {
			...mapState({
				isLoading: state => state.vux.isLoading
			})
		},
		
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	@import './assets/style.css';
	@import './assets/color/red.css';
	#id{
		background: #ffffff;
	}
</style>