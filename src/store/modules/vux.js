import Cookies from 'js-cookie'

const app = {
		state: {
			loading: false,
			showBack: true,
			loginState: 0,     //登录状态 0 未登录   1  登录
			comTabState: -1,
			title: '',
			number: '',
			auth: "zxb",
			loginUser:"", //用户信息
			tabNum:0 ,   //底部tab切换
			goodsTabState:{
				tabState:0,
           	    name:"黄金饰品",
			},  //商品tab切换状态
			brandList:[], //品牌列表
			purchaseOrders:"", //立即购买 订单
		},
		mutations: {
			updateLoading(state, loading) {
				state.loading = loading
			},
			SET_BRANDLIST(state, data) {
				state.brandList = data
			},
			SET_TABSTATE(state, data) {
				state.goodsTabState = data
			},
			SET_LOGINSTATE(state, data) {
				state.loginState = data
			},
			SET_LOGINUSER(state, data) {
				state.loginUser = data
			},
			SET_COMTABSTATE(state, data) {
				state.comTabState = data
			},
			SET_PURCHASEORDERS(state, data) {
				state.purchaseOrders = data
			},
			updateLoading(state, loading) {
				state.loading = loading
			},
			updateTitle(state, title) {
				state.title = title
			},
			updateNumber(state, number) {
				let num = ''
				if(number <= 0) {
					state.number = num
				} else {
					num = number.toString()
					state.number = num
				}

			}
		},
		actions: {
			updateBrandList({
				commit
			}, data) {
				console.log(data);
				if(data){
				}
				commit('SET_BRANDLIST', data);
			},
			updatePurchaseOrders({
				commit
			}, data) {
				commit('SET_PURCHASEORDERS', data);
			},
			updateTabState({
				commit
			}, data) {
				commit('SET_TABSTATE', data);
			},
			updateLoginState({
				commit
			}, data) {
				commit('SET_LOGINSTATE', data);
			},
			updateLoginUser({
				commit
			}, data) {
				commit('SET_LOGINUSER', data);
			},
			updateComTabState({
				commit
			}, data) {
				commit('SET_COMTABSTATE',data);
				}
			}
		}

		export default app