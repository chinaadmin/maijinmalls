import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import { WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin } from 'vux'
import router from './router'
import App from './App'
import './mock' // simulation data
import dataFactory from './utils/dataFactory'
import store from './store'
import vueLoading from '@/components/loading/loading.vue'
import './permission'
import InfiniteScroll from 'vue-infinite-scroll'; // get vue-infinite-scroll
import * as filters from './utils/filters'
Vue.use(InfiniteScroll);
//vueLoading
/**
 * 加载插件
 */
Vue.use(Vuex)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(dataFactory)
Vue.component('vueLoading', vueLoading)
Vue.filter('phoneFilter', function(data) {
	var _data = "";
	if(data) {
		var _str1 = data.substring(0, 3);
		var _str2 = data.substring(7, 11);
		_data = _str1 + "****" + _str2;
	}
	return _data;
});
//Vue.filter('my-filter-toFixed', function(value) {
//	// 返回处理后的值
//	var _data = "";
//	if(value) {
//		_data = parseFloat(value).toFixed(2);
//	}
//	return _data;
//})
//var myFilterToFixed = Vue.filter('my-filter-toFixed')


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
/**
 * 设置vuex
 */
//const store = new Vuex.Store({})
//store.registerModule('vux', {
//state: {
//  loading: false,
//  showBack: true,
//  title: '',
//  number: '',
//  auth:"zxb"
//},
//mutations: {
//  updateLoading (state, loading) {
//    state.loading = loading
//  },
//  updateShowBack (state, showBack) {
//    state.showBack = showBack
//  },
//  updateTitle (state, title) {
//    state.title = title
//  },
//  updateNumber (state, number){
//    let num = ''
//    if(number <= 0){
//      state.number = num
//    }else {
//      num = number.toString()
//      state.number = num
//    }
//
//  }
//}
//})
/**
 * 公用组件
 */
Vue.prototype.updateTitle = function(value) {
	this.$store.commit('updateTitle', value)
}
Vue.prototype.updateLoginState = function(value) {
	this.$store.commit('updateLoginState', value)
}
/**
 *  日志输出开关
 */
Vue.config.productionTip = true
/**
 *  点击延迟
 */
FastClick.attach(document.body)
/**
 *  创建实例
 */

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app-box')