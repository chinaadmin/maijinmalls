<template>
	<div>
		<div :class="datas.classType">
		<div>
			<span></span>
			<span>{{datas.title}}</span>
			<span></span>
		</div>
	</div>
	</div>
</template>
<script>
	export default {
		name: "CenterTitle",
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
		created() {
			var that = this;

		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
	 .centerTitle{
  	width: 100%;
  	text-align: center;
  	padding: 0.8rem 0rem;
  }
  .centerTitle span:nth-child(1){
  	display: inline-block;
  	width: 10px;
  	height: 10px;
  	background: #efefef;
  	border-radius: 50%;
  }
  .centerTitle span:nth-child(2){
  	display: inline-block;
    font-size: 1.2em;
    color: #666666;
    padding: 0px 7px;
  }
   .centerTitle span:nth-child(3){
  	display: inline-block;
  	width: 10px;
  	height: 10px;
  	background: #efefef;
  	border-radius: 50%;
  }
</style>