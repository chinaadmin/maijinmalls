<template>
  <div class='wrap'>
  </div>
</template>
<style lang='scss' scoped>
</style>
<script>
  export default {
	components: {
	},
	data(){
	  return{
	  }
	},
	methods:{
	},
	//组件实例创建完成，属性已绑定，Dom还未生成。el属性还不存在
	created(){
	//对应还有个beforeCreate
	},
	//模板编译/挂载之后
	mounted(){
	   //对应还有个beforeMount
	   this.$nextTick(function () {
	   })
	},
	//组件更新后
	updated(){
	//对应还有个beforeUpdate
	},
	destory(){
	}
  }
</script>