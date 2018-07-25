<template>
	<div>
	demo
	</div>
</template>

<script>
	import http from '@/utils/http'
	
	export default {
		name: 'demo',
		components: {
			
		},
		data() {
			return {
			}
		},
		created() {
			var _data = {
        username: 'admin',
        password: '1111111'
      }
			this.fetchData(_data)
		},
		computed: {
			
		},
		methods: {
			fetchData: async function(data) {
				
				var that  = this;
				const res = await http.post("/demo1/index", data)
				if(res) {
					console.log(res);
					debugger
						
				}
			}
			
		}
	}
</script>

<style>
	
</style>