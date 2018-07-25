<template>
	<div class="v-loading">
		<div class="v-loading-box">
			<div> 
				<i class="weui-loading"></i>
			</div>
			<div class="text">
				玩命加载中...
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: "loading",
		components: {
			

		},
		props: {
			datas: {
				type: Object,
				required: true,
			}
		},
		data() {
			return {
				
			}
		},
	}
</script>

<style   lang="scss"  scoped>
	.v-loading{
	
		position: absolute;
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.65;
		color: #ffffff;
		text-align: center;
		align-items: center;
		justify-content:center;
		display: flex;
		z-index: 1;
		
		.v-loading-box{
			.text{
				margin-top: 0.5rem;
			}
		}
	}
	
</style>