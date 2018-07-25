<template>
	<div class="common_popup">
		<div class="common_cover" @click="cancel">

		</div>
		<div class="popup_box">
			<div>
				<div class="popup_close_icon" @click="cancel">
					<div class="el-icon-close"></div>
				</div>
				<div class="popup_title">
					<div class="popup_title_box">
						<div class="icon"></div>
						<div class="title">{{alertTitle}}</div>
					</div>
				</div>
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			alertTitle: {
				type: String,
				required: true
			}
		},
		data() {
			return {

			}
		},
		computed: {},
		methods: {
			cancel() {
				console.log("点了取消");
				this.$emit("cancel")
			}
		}
	}
</script>
<style scoped>
	.common_popup {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 2000;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.common_cover {
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.5;
	}
	
	.common_popup .popup_box {
		position: absolute;
		border-radius: 5px;
		padding: 40px;
		flex: 1;
		background: #ffffff;
	}
	
	.popup_input {
		margin-bottom: 15px;
	}
	
	.popup_btn_box {
		text-align: center;
		margin-top: 20px;
	}
	
	.popup_btn {
		width: 90px;
		text-align: center;
	}
	
	.popup_title {
		width: 100%;
		margin-bottom: 30px;
	}
	
	.popup_title .popup_title_box {
		width: 100%;
	}
	
	.popup_title .popup_title_box .icon {
		display: inline-block;
		width: 4px;
		height: 13px;
		margin-bottom: -1px;
		background: #4c84ff;
		margin-right: 4px;
	}
	
	.popup_title .popup_title_box .title {
		display: inline-block;
		font-size: 16px;
	}
	
	.popup_close_icon {
		position: absolute;
		top: 10px;
		right: 10px;
	}
	
	.popup_close_icon:hover {
		cursor: pointer;
		color: #4c84ff;
	}
</style>