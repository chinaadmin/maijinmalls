<template>
<div>
		<div class="title-head">
			{{recommendTitle}}
			<a href="">{{more}}</a>
		</div>
		<div class="section1-list">
			<ul>
				<li  v-for="item in datas" :key="item.id">
					<router-link :to="{name:'goodsDetail',params: {id: item.id}}">
						<img :src="item.img"/>
					</router-link>
					<div class="info">
						<h2 class="section1-list-title ac">
							{{item.title}}
						</h2>
						<p class="section1-list-price">
							￥{{item.price}}
						</p>
					</div>
				</li>
			</ul>
		</div>
		</div>
</template>
<script>
export default {
	props: ['datas','recommendTitle','more'],
	data() {
		return {
			// scrollerItemStyle: {
			// 	width: 200,
			// 	marginLeft: 10
			// }
		}
	},
	computed: {
		
	}
}
</script>
<style lang="scss" scoped>
  .section1-list {
    overflow-x: auto;
    width: 100%;
    /*原生滑动*/
    -webkit-overflow-scrolling: touch;
    margin-bottom:10px;
    >ul {
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding: 10px 5%;
      li {
        margin-right: 10px;
        min-width:124px;
				list-style-type: none;
				// max-width:150px;
				&:last-child{
					margin-right:5%;
				}
        a,
        img {
          height: auto;
          max-width: 100%; 
          display: block;
					border-top-left-radius: 4px;
					border-top-right-radius: 4px;
        }
				.info{
					padding-top: 10px;
					padding-bottom: 10px;
					margin-bottom: 7px;
					border: 1px solid #F8E3E5;
					border-bottom-left-radius: 4px;
					border-bottom-right-radius: 4px;
					border-top: 0px;	
					h2 {
						font-size: 14px;
						line-height: 1.4;
						color: #656565;
						text-align: center;
						font-weight:normal;
					}				
					p{
						font-size: 14px;
						font-weight: 500;
						color: #E72D2F;
						text-align: center;
						padding-top: 14px;
						font-family: DINPro-Bold;						
					}					
				}

        p.section1-list-intro {
          padding-top: 2px;
          color: rgb(150, 150, 150);
        }

        p.section1-list-price {
          color: #b4282d;
        }
      }
    }
  }
	.title-head{
	font-size: 16px;
	color: #656565;
	padding:10px 15px 6px 15px;
	background-color: #fff;
	position:relative;
}
.title-head a{
	position:absolute;
	right:calc(5% + 15px);
	top:32%;
	color: #8A8A8A;
}
.title-head a:after{
	position:absolute;
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 1px 1px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
    transform: matrix(.71,.71,-.71,.71,0,0);
    top: 50%;
    margin-top: -4px;
    right: -15px;	
}
</style>