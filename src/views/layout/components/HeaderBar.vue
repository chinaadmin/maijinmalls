<template>
	<div class="common-bar-line" :class="{iconbar:!sidebar.opened}">
		<div class="top-bar-area">
			<div class="left-menu">
				<div class="logocover" :logoisActive="sidebar.opened">
					<img :src="erplogo" alt="logo" class="page-logo">
				</div>
				<hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
				<div class="block">
					<span class="demonstration"></span>
					<el-form :inline="true" class="demo-form-inline">
						<el-select v-model="selectedOptions" placeholder="活动区域" size="small">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
						<el-cascader :options="options" change-on-select :placeholder="placeholderCompany" @change="handleChange"  size="small">
						</el-cascader>
					</el-form>
				</div>
			</div>
			<div class="right-menu">
				<div class="items">
					<router-link to="/dashboard">首页</router-link>
				</div>
				<div class="items">
					<router-link to="/dashboard">消息<span class="dotted"></span></router-link>
				</div>
				<div class="items">
					<el-dropdown class="avatar-container right-menu-item" trigger="click">
						<div class="avatar-wrapper">
							{{name}}	
							<span class="selecticon"></span>
							<!--<i class="el-icon-caret-bottom"></i>-->
						</div>
						<el-dropdown-menu slot="dropdown">
							<router-link to="/">
								<el-dropdown-item>
									{{$t('navbar.dashboard')}}
								</el-dropdown-item>
							</router-link>
							<el-dropdown-item divided>
								<span @click="logout" style="display:block;">{{$t('navbar.logOut')}}</span>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import erplogo from '@/assets/erplogos/erplogo.png'
	import { mapGetters } from 'vuex'
	import Hamburger from '@/components/Hamburger'
//	import Screenfull from '@/components/Screenfull'
//	import LangSelect from '@/components/LangSelect'
//	import ThemePicker from '@/components/ThemePicker'
	export default {
		name: 'headerbar',
		data() {
			return {
				togglestatus: true,
				erplogo,
				selectedOptions: [],
				placeholderCompany: "请选择公司",
				options: [{
					value: 'zhinan',
					label: '指南',
					children: [{
						value: 'shejiyuanze',
						label: '设计原则',
						children: [{
							value: 'yizhi',
							label: '一致'
						}, {
							value: 'fankui',
							label: '反馈'
						}, {
							value: 'xiaolv',
							label: '效率'
						}, {
							value: 'kekong',
							label: '可控'
						}]
					}, {
						value: 'daohang',
						label: '导航',
						children: [{
							value: 'cexiangdaohang',
							label: '侧向导航'
						}, {
							value: 'dingbudaohang',
							label: '顶部导航'
						}]
					}]
				}, {
					value: 'zujian',
					label: '组件',
					children: [{
						value: 'basic',
						label: 'Basic',
						children: [{
							value: 'layout',
							label: 'Layout 布局'
						}, {
							value: 'color',
							label: 'Color 色彩'
						}, {
							value: 'typography',
							label: 'Typography 字体'
						}, {
							value: 'icon',
							label: 'Icon 图标'
						}, {
							value: 'button',
							label: 'Button 按钮'
						}]
					}, {
						value: 'form',
						label: 'Form',
						children: [{
							value: 'radio',
							label: 'Radio 单选框'
						}, {
							value: 'checkbox',
							label: 'Checkbox 多选框'
						}, {
							value: 'input',
							label: 'Input 输入框'
						}, {
							value: 'input-number',
							label: 'InputNumber 计数器'
						}, {
							value: 'select',
							label: 'Select 选择器'
						}, {
							value: 'cascader',
							label: 'Cascader 级联选择器'
						}, {
							value: 'switch',
							label: 'Switch 开关'
						}, {
							value: 'slider',
							label: 'Slider 滑块'
						}, {
							value: 'time-picker',
							label: 'TimePicker 时间选择器'
						}, {
							value: 'date-picker',
							label: 'DatePicker 日期选择器'
						}, {
							value: 'datetime-picker',
							label: 'DateTimePicker 日期时间选择器'
						}, {
							value: 'upload',
							label: 'Upload 上传'
						}, {
							value: 'rate',
							label: 'Rate 评分'
						}, {
							value: 'form',
							label: 'Form 表单'
						}]
					}, {
						value: 'data',
						label: 'Data',
						children: [{
							value: 'table',
							label: 'Table 表格'
						}, {
							value: 'tag',
							label: 'Tag 标签'
						}, {
							value: 'progress',
							label: 'Progress 进度条'
						}, {
							value: 'tree',
							label: 'Tree 树形控件'
						}, {
							value: 'pagination',
							label: 'Pagination 分页'
						}, {
							value: 'badge',
							label: 'Badge 标记'
						}]
					}, {
						value: 'notice',
						label: 'Notice',
						children: [{
							value: 'alert',
							label: 'Alert 警告'
						}, {
							value: 'loading',
							label: 'Loading 加载'
						}, {
							value: 'message',
							label: 'Message 消息提示'
						}, {
							value: 'message-box',
							label: 'MessageBox 弹框'
						}, {
							value: 'notification',
							label: 'Notification 通知'
						}]
					}, {
						value: 'navigation',
						label: 'Navigation',
						children: [{
							value: 'menu',
							label: 'NavMenu 导航菜单'
						}, {
							value: 'tabs',
							label: 'Tabs 标签页'
						}, {
							value: 'breadcrumb',
							label: 'Breadcrumb 面包屑'
						}, {
							value: 'dropdown',
							label: 'Dropdown 下拉菜单'
						}, {
							value: 'steps',
							label: 'Steps 步骤条'
						}]
					}, {
						value: 'others',
						label: 'Others',
						children: [{
							value: 'dialog',
							label: 'Dialog 对话框'
						}, {
							value: 'tooltip',
							label: 'Tooltip 文字提示'
						}, {
							value: 'popover',
							label: 'Popover 弹出框'
						}, {
							value: 'card',
							label: 'Card 卡片'
						}, {
							value: 'carousel',
							label: 'Carousel 走马灯'
						}, {
							value: 'collapse',
							label: 'Collapse 折叠面板'
						}]
					}]
				}, {
					value: 'ziyuan',
					label: '资源',
					children: [{
						value: 'axure',
						label: 'Axure Components'
					}, {
						value: 'sketch',
						label: 'Sketch Templates'
					}, {
						value: 'jiaohu',
						label: '组件交互文档'
					}]
				}],
			}
		},
		components: {
			Hamburger,
//			Screenfull,
//			LangSelect,
//			ThemePicker
		},
		created(){
			const sidebarStore = this.$store.getters.sidebar.opened;
//			if(sidebarStore){
//	      		this.erplogo = 'static/img/erplogo.png'
//	      	}else{
//	      		this.erplogo = 'static/img/logo.png'
//	      	}
		},
		computed: {
			...mapGetters([
				'name',
				'avatar',
				'sidebar',
			])
		},
		methods: {
			logout() {
				this.$store.dispatch('LogOut').then(() => {
					location.reload() // In order to re-instantiate the vue-router object to avoid bugs
				})
			},
			handleChange(val) {
				console.log(val)
			},
			toggleSideBar() {
		      	this.$store.dispatch('toggleSideBar')
				const sidebarStore = this.$store.getters.sidebar.opened;
//		      	if(sidebarStore){
//		      		this.erplogo = 'static/img/erplogo.png'
//		      	}else{
//		      		this.erplogo = 'static/img/logo.png'
//		      	}
		   	},
		},

	}
</script>
<style lang="scss">
	@import "src/styles/mixin.scss";
	.common-bar-line {
		position: fixed;
		top: 0;
		z-index: 9999;
		width: 100%;
		background: #4c84ff;
		// border-bottom: 2px solid #
		height: 60px;
		line-height: 60px;
		.top-bar-area {
			height: 100%;
			@include clearfix;
			.left-menu {
				float: left;
				display: inline-block;
				height:60px;
				.page-logo {
					width: 130px;
					height: 32px;
					margin-top: 13px;
					margin-left:18px;
					transition: width 0.2s;
				}
				.block {
					display: inline-block;
					position: absolute;
					margin-left: 220px;
					top: 0px;
				}
			}
			.right-menu {
				height: 60px;
				line-height: 60px;
				float: right;
				.items{
					display: inline-block;
					padding: 0 15px;
					color: #fff;
				}
				.dotted{
					width: 5px;
					height: 5px;
					background: red;
					border-radius: 50%;
					display: inline-block;
					position: relative;
    				top: -10px;
				}
				&:focus {
					outline: none;
				}
				.right-menu-item {
					display: inline-block;
					margin: 0 8px;
				}
				.screenfull {
					vertical-align: -5px;
					height: 20px;
				}
				.international {
					vertical-align: top;
				}
				.theme-switch {
					vertical-align: 15px;
				}
				.avatar-container {
					height: 50px;
					margin-right: 30px;
					.avatar-wrapper {
						cursor: pointer;
						margin-top: 5px;
						position: relative;
						color: #fff;
						.user-avatar {
							width: 40px;
							height: 40px;
							border-radius: 10px;
						}
						.el-icon-caret-bottom {
							position: absolute;
							right: -20px;
							top: 25px;
							font-size: 12px;
						}
					}
				}
			}
		}
		.hamburger-container{
			position: relative;
		    left: 184px;
		    top: -65px;
		    width: 20px;
		}
	}
	.iconbar{
		.top-bar-area{
			.left-menu{
				.page-logo{
					/*margin-left: 8px;
					width: 36px;
					height: 36px;*/
				}
				.block{
					margin-left: 100px;
				}
			}
		}
		.hamburger-container{
			left:60px
		}
		.logocover{
			width: 60px;
			overflow: hidden;
		}
	}
	.selecticon{
	    width: 16px;
	    height: 16px;
	    position: relative;
	    top: 3px;
	    display: inline-block;
		background: url(../../../../static/img/select.png) no-repeat;
	    background-size: 100%;
	}
</style>