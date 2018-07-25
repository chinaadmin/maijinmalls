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
					rightjumpHref:"my",
					title:"实名认证",
					icon: "static/common/my2.png",
					jumpHref:"my",
					jumpLeftHref:"my",
					classStyle:"",
					classStyleIcon:"fill:#757575",
					classStyleFont:"color:#333333;font-size:16px;",
				},
				popupText:"恭喜您，实名认证成功",
				jumpRouter:"my"
				}
			}
		}
	}
</script>

<style>
</style>