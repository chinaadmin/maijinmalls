<template>
	<div class="from-group-wrapper">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'fromGroupWrapper'
	}
</script>
<style>
	.from-group-wrapper {
		padding: 22px 16px;
		border: none;
		background-color: #ffffff;
		border-radius: 4px;
	}
</style>