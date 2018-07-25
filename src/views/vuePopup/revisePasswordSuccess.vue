<template>
<div>
<vuePopup :vueDatas="vuePopupData" ></vuePopup>
</div>
</template>

<script>
	import vuePopup from '@/components/vuePopup/index'
	export default {
		components: {
			vuePopup
		},
		data() {
			return {
				vuePopupData: {
					headerData: {
					rightjumpHref:"login",
					title:"修改登录密码",
					icon: "static/common/my2.png",
					jumpHref:"",
					jumpLeftHref:"",
					classStyle:"",
					classStyleIcon:"fill:#757575",
					classStyleFont:"color:#333333;font-size:16px;",
				},
				popupText:"修改成功！",
				jumpRouter:"login"
				}
			}
		}
	}
</script>

<style>
</style>