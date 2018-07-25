import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 *  加载模块
 */
Vue.use(VueRouter)
/**
 *  路由配置
 */
const goodsDetail = resolve => require(['@/views/goodsDetail/goodsDetail.vue'], resolve)
const sureOrders = resolve => require(['@/views/sureOrders/sureOrders.vue'], resolve)
const goods = resolve => require(['@/views/goods/goods.vue'], resolve)
let registerSuccess = resolve => require(['@/views/registerSuccess/index.vue'], resolve)  //注册成功
let retrievePassSuccess = resolve => require(['@/views/retrievePassSuccess/index.vue'], resolve)  //找回密码成功
let authenticationSuccess = resolve => require(['@/views/vuePopup/authenticationSuccess.vue'], resolve) //实名认证成功
let revisePasswordSuccess = resolve => require(['@/views/vuePopup/revisePasswordSuccess.vue'], resolve) //修改密码成功
let personalProfile = resolve => require(['@/views/personalProfile/index.vue'], resolve)  //个人资料
let realNameAuthent = resolve => require(['@/views/realNameAuthent/index.vue'], resolve)  //实名认证
let retrievePassword = resolve => require(['@/views/retrievePassword/index.vue'], resolve)  //找回密码
let modifyLoginPassword = resolve => require(['@/views/modifyLoginPassword/index.vue'], resolve)  //修改登录密码
let setUp = resolve => require(['@/views/setUp/index.vue'], resolve) //设置
let newAddress =  resolve => require(['@/views/newAddress/index.vue'], resolve) //新增地址
let myOrder =  resolve => require(['@/views/myOrder/index.vue'], resolve) //我的订单
let exchangeVoucher =  resolve => require(['@/views/exchangeVoucher/index.vue'], resolve) //我的换金券
let orderDetails =  resolve => require(['@/views/orderDetails/index.vue'], resolve) //订单详情
let goldExVoucher =  resolve => require(['@/views/goldExVoucher/index.vue'], resolve) //我的换金券
let noviceMustRead = resolve => require(['@/views/noviceMustRead/index.vue'], resolve)  //新手必读
let goumai = resolve => require(['@/views/goumai/index.vue'], resolve)  //购买需知
let problem = resolve => require(['@/views/problem/index.vue'], resolve)  //常见问题
let understandUs = resolve => require(['@/views/understandUs/index.vue'], resolve)  //了解我们
let search = resolve => require(['@/views/search/index.vue'], resolve)  //品牌 商品 搜索
let agreement = resolve => require(['@/views/agreement/index.vue'], resolve)  //注册协议
const brand = resolve => require(['@/views/brand/brand.vue'], resolve) //品牌
const brandDetail = resolve => require(['@/views/brand/brandDetail.vue'], resolve)//品牌详情
const pay = resolve => require(['@/views/pay/pay.vue'], resolve)//支付
const InPayment = resolve => require(['@/views/pay/InPayment.vue'], resolve)//支付

let paySuccess = resolve => require(['@/views/paymentSuccess/index.vue'], resolve)//支付成功

const router = new VueRouter({
	base: __dirname,
	likActiveClass: 'link-active',
	routes: [{
			path: '',
			name: '首页',
			redirect: '/init/home',
			meta: {
				title: '首页'
			}
		},
		{
			path: '/demo',
			name: 'demo',
			component: resolve => require(['@/views/demo/index'], resolve),
			meta: {
				title: 'demo'
			}
		},
		{
			path: '/secondLevel',
			name: 'secondLevel',
			component: resolve => require(['@/components/secondLevel.vue'], resolve),
			children: [{
					path: 'agreement',
					name: 'agreement',
					component: agreement,
					meta: {
						title: '注册协议'
					}
				},{
					path: 'registerSuccess',
					name: 'registerSuccess',
					component: registerSuccess,
					meta: {
						title: '注册成功'
					}
				},
				{
					path: 'retrievePassSuccess',
					name: 'retrievePassSuccess',
					component: retrievePassSuccess,
					meta: {
						title: '找回密码成功'
					}
				},
				{
					path: 'authenticationSuccess',
					name: 'authenticationSuccess',
					component: authenticationSuccess,
					meta: {
						title: '实名认证成功'
					}
				},
				{
					path: 'revisePasswordSuccess',
					name: 'revisePasswordSuccess',
					component: revisePasswordSuccess,
					meta: {
						title: '修改密码成功'
					}
				},
				{
					path: 'personalProfile',
					name: 'personalProfile',
					component: personalProfile,
					meta: {
						title: '个人资料'
					}
				}, {
					path: 'myOrder',
					name: 'myOrder',
					component: myOrder,
					meta: {
						title: '我的订单'
					}
				},{
					path: 'orderDetails/:id',
					name: 'orderDetails',
					component: orderDetails,
					meta: {
						title: '订单详情'
					}
				},{
					path: 'login',
					name: 'login',
					component: resolve => require(['@/views/login/index'], resolve),
					meta: {
						title: '登录'
					}
				}, {
					path: 'register',
					name: 'register',
					component: resolve => require(['@/views/register/index'], resolve),
					meta: {
						title: '注册'
					}
				},
				{
					path: 'realNameAuthent',
					name: 'realNameAuthent',
					component: realNameAuthent,
					meta: {
						title: '实名认证'
					}
				},
				{
					path: 'retrievePassword',
					name: 'retrievePassword',
					component: retrievePassword,
					meta: {
						title: '找回密码'
					}
				},
				{
					path: 'modifyLoginPassword',
					name: 'modifyLoginPassword',
					component: modifyLoginPassword,
					meta: {
						title: '修改密码'
					}
				},
				{
					path: 'setUp',
					name: 'setUp',
					component: setUp,
					meta: {
						title: '设置'
					}
				},
				{
					path: 'goldExVoucher',
					name: 'goldExVoucher',
					component: goldExVoucher,
					meta: {
						title: '换金券'
					}
				},
				{
					path: 'newAddress',
					name: 'newAddress',
					component: newAddress,
					meta: {
						title: '新增地址'
					}
				},
				{
					path: 'noviceMustRead',
					name: 'noviceMustRead',
					component: noviceMustRead,
					meta: {
						title: '新手必读'
					}
				},
				{
					path: 'understandUs',
					name: 'understandUs',
					component: understandUs,
					meta: {
						title: '了解我们'
					}
				},
				{
					path: 'goumai',
					name: 'goumai',
					component: goumai,
					meta: {
						title: '购买需知'
					}
				},
				{
					path: 'problem',
					name: 'problem',
					component: problem,
					meta: {
						title: '常见问题'
					}
				},
				{
					path: 'search',
					name: 'search',
					component: search,
					meta: {
						title: '搜索'
					}
				},
				{
					path: 'goodsDetail/:id',
					name: 'goodsDetail',
					component: goodsDetail,
					meta: {
						title: '商品详情'
					}
				},
				{
					path: 'sureOrders/:id',
					name: 'sureOrders',
					component: sureOrders,
					meta: {
						title: '确认订单'
					}
				},
				{
					path: 'goods/:type',
					name: 'goods',
					component: goods,
					meta: {
						title: '商品'
					}
				},
				{
					path: 'brandDetail/:id',
					name: 'brandDetail',
					component: brandDetail,
					meta: {
						title: '品牌详情'
					}
				},
				{
					path: 'pay/:id',
					name: 'pay',
					component: pay,
					meta: {
						title: '支付'
					}
				},
				{
					path: 'InPayment',
					name: 'InPayment',
					component: InPayment,
					meta: {
						title: '支付中'
					}
				},
				{
					path: 'paySuccess',
					name: 'paySuccess',
					component: paySuccess,
					meta: {
						title: '支付成功'
					}
				}
			]
		},
		{
			path: '/init',
			name: 'init',
			component: resolve => require(['../components/init.vue'], resolve),
			children: [{
					path: 'personal/userInfo',
					name: 'userInfo',
					component: resolve => require(['../components/personal/userInfo.vue'], resolve),
					meta: {
						title: '主页'
					}
				},
				{
					path: 'home',
					name: 'home',
					component: resolve => require(['@/views/home/home'], resolve),
					meta: {
						title: '主页'
					}
				},
				{
					path: 'brand',
					name: 'brand',
					component: brand,
					meta: {
						title: '主页'
					}
				},
				{
					path: 'my',
					name: 'my',
					component: resolve => require(['@/views/my/index'], resolve),
					meta: {
						title: '主页'
					}
				},
			]
		},
		{
			path: '/login',
			name: 'login',
			component: resolve => require(['../components/login.vue'], resolve),
			meta: {
				title: '登录'
			}
		}
	]
})

/**
 *  路由出口
 */
export default router