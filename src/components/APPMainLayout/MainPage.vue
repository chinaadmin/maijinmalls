<template>
	<div class="com-main">
		<div class="com-mainBox">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: "mainPageLayout",
	}
</script>
<style>
   .com-main{
   	width: 100%;
   	height: 100%;
   	background-color: #ffffff;
   }
	.com-mainBox {
		width: 90%;
		margin: 0 auto;
		padding-top: 0.5rem;
	}
</style>