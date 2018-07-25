<template>
  <div>
    <tabbar class="com-bottom-fixed">
      <tabbar-item :selected=tabNumbera  link="/init/home">
      	<!--<img slot="icon" src="static/bottom/home.png">
        <img slot="icon-active" src="static/bottom/home_active.png">-->
        <img slot="icon" src="static/bottom/home1.png">
        <img slot="icon-active" src="static/bottom/home1_active.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <!-- <tabbar-item show-dot link="/init/brand" :selected=tabNumberb>-->
      <tabbar-item  link="/init/brand" :selected=tabNumberb>
        <!--<img slot="icon" src="static/bottom/brand.png">
        <img slot="icon-active" src="static/bottom/brand_active.png">-->
        <img slot="icon" src="static/bottom/brand1.png">
        <img slot="icon-active" src="static/bottom/brand1_active.png">
        <span slot="label">品牌</span>
      </tabbar-item>
      <tabbar-item badge="" link="/init/my" :selected=tabNumberc>
        <!--<img slot="icon" src="static/bottom/my.png">
        <img slot="icon-active" src="static/bottom/my_active.png">-->
        <img slot="icon" src="static/bottom/my1.png">
        <img slot="icon-active" src="static/bottom/my1_active.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  import { mapState } from 'vuex'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
    computed: {
    	...mapState([
				'vux'
			]),
			tabNumbera(){
				if(this.vux.tabNum === 0){
					return true
				}else{
						return false
				}
				
			},
			tabNumberb(){
					if(this.vux.tabNum === 1){
					return true
				}else{
						return false
				}
			},
			tabNumberc(){
					if(this.vux.tabNum === 2){
					return true
				}else{
						return false
				}
			}
		},
   created() {
   	var that = this;
   },
   }
</script>
<style>
.com-bottom-fixed{
	position: fixed!important;
	overflow: hidden!important;
}
</style>
