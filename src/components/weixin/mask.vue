<template>
	<div>
		<div class="mask" :class={hide:!mask}></div>
		<div class="go_alert">
			<img v-show="propsData.weixinA" src="static/home/iosWeixin.png" />
			<img v-show="!propsData.weixinA" src="static/home/android.png" />
		</div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			datas: {
				type: Object,
				required: true,
			}
		},
		computed: {
			propsData(){
				return this.datas;
			}
		},
		data() {
			return {
				mask:true,
				simg:false,
				asimg:true,
			}
		}
	}
</script>

<style scoped>
	.hide{display:none;}
	.mask{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 1000;
	}
	.go_alert>img{
		width: 300px;
		right: 0;
		position: fixed;
		margin: 0 auto;
		left:calc(50% - 150px);
		top: 12%;
		z-index: 44444;
	}
</style>