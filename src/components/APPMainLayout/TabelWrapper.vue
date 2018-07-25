<template>
	<div class="tabel-wrapper">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'tabelWrapper'
	}
</script>
<style>
	.tabel-wrapper {
		margin-top: 20px;
		padding: 10px;
		background-color: #ffffff;
		border-radius: 4px;
		min-height: 600px;
	}
</style>