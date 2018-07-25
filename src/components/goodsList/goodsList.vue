<template>
	<div>
		<div class="section1-list" :class={scroll:sflag}>
			<ul>
				<li v-for="item in datas" :key="item.id">
					<router-link :to="{name:'goodsDetail',params: {id: item.productId}}">
						<img :src="item.imgPath" />
					</router-link>
					
					<div class="info" @click="jump(item.productId)">
						<div class="title">
							{{item.productName}}
						</div>
						<div class="subtitle z-ellipsis-2">
							<b>
							{{item.showPrice}}
							</b>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	function getAngle(angx, angy) {  
        return Math.atan2(angy, angx) * 180 / Math.PI;  
    };  
   
    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动  
    function getDirection(startx, starty, endx, endy) {  
        var angx = endx - startx;  
        var angy = endy - starty;  
        var result = 0;  
   
        //如果滑动距离太短  
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {  
            return result;  
        }  
   
        var angle = getAngle(angx, angy);  
        if (angle >= -135 && angle <= -45) {  
            result = 1;  
        } else if (angle > 45 && angle < 135) {  
            result = 2;  
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {  
            result = 3;  
        } else if (angle >= -45 && angle <= 45) {  
            result = 4;  
        }  
   
        return result;  
    }  
	export default {
		props: ['datas'],
		data() {
			return {
				sflag:true
			}
		},
		mounted() {
			var that=this;
			this.$nextTick(function() {
				//上下滑的时候添加类,左右滑的时候删除类 粗暴的暂时顶着先。
			var startx, starty;  
			//获得角度  

			//手指接触屏幕  
			document.addEventListener("touchstart", function(e) {  
				startx = e.touches[0].pageX;  
				starty = e.touches[0].pageY;  
			}, false);  
			//手指离开屏幕  
			document.addEventListener("touchend", function(e) {  
				var endx, endy;  
				endx = e.changedTouches[0].pageX;  
				endy = e.changedTouches[0].pageY;  
				var direction = getDirection(startx, starty, endx, endy);  
				switch (direction) {  
					// case 0:  
					// 	alert("未滑动！");  
					// 	break;  
					case 1:  
					case 2:  
						that.sflag=false;
						return;
						break;  
					// case 3:  
					// 	// alert("向左！")  
					// 	break;  
					// case 4:  
					// 	// alert("向右！")  
					// 	break;  
					default: 
						that.sflag=true;
					break; 
				}  
			}, false);  
			})
		},
		computed: {
           propsDatas(){
           	var that = this;
           	
           }
		},
		created() {
			//对应还有个beforeCreate
			console.log(this.datas);
		},
		methods: {
			jump(data) {
				var that = this;
				that.$router.push({
					name:'goodsDetail',
					params: {
						id: data
					}
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.subtitle {
		color: #E72D2F;
	}
	
	.scroll{
		overflow-x: auto;
	}
	.section1-list {
		width: 100%;
		height:100%;
		/*原生滑动*/
		margin-bottom: 10px;
		>ul {
			display: -ms-flex;
			display: -webkit-box;
			display: -ms-flexbox;
			display: inline-flex;
			padding: 0px 5% 5px 5%;
			li {
				margin-right: 10px;
				width: 124px;
				border: 1px solid #f5f5f5;
				text-align: center;
				padding-bottom: 10px;
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
				list-style-type: none;
				&:last-child {
					
				}
			li:last-child{
				
			}
				img {
					width: 124px;
					height: 120px;
					display: block;
					border-top-left-radius: 4px;
					border-top-right-radius: 4px;
				}
				a {
					border-top-left-radius: 4px;
					border-top-right-radius: 4px;
					display: block;
					width: 124px;
					height: 120px;
					position: relative;
					overflow: hidden;
					border-bottom: none;
					background: #f5f5f5;
				}
				.info {
					padding-top: 4px;
					border-bottom-left-radius: 4px;
					border-bottom-right-radius: 4px;
					h2 {
						font-size: 14px;
						line-height: 1;
						color: #656565;
						text-align: center;
						font-weight: normal;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
					p {
						font-size: 14px;
						font-weight: 500;
						color: #E72D2F;
						text-align: center;
						padding-top: 14px;
						font-family: DINPro-Bold;
					}
					.title {
						color: #656565;
						height: 46px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.brand {
						color: #656565;
					}
				}
				p.section1-list-intro {
					padding-top: 2px;
					color: rgb(150, 150, 150);
				}
				p.section1-list-price {}
			}
		}
	}
</style>