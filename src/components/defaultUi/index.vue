<template>
	<div class="defaultUi">
		<div class="com-position-no"  style="margin-top: -26px;">
			<div class="img">
				<img :src="datas.defaultUiImg">
			</div>
			<div class="com-position-no-text">{{ datas.text }}</div>
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
		data() {
			return {
				defaultUiImg:"static/common/search-no-icon.png",
				
			}
		},
		created() {
			
		}
	}
</script>

<style>
	.defaultUi{
		width: 100%;
		height: 100%;
	}
	.com-position-no{
		width: 100%;
		height: 100%;
		display: flex;
        justify-content:center;
        align-items:Center;
        position: relative;
	}
	.com-position-no img{
		width: 150px;
		height: 150px;
		display: block;
	}
	.com-position-no-text{
		position: absolute;
		clear: both;
		display:initial;
		margin-top:90px;
		color: #AFAFAF;
	}
</style>