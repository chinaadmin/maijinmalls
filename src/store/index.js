import Vue from 'vue'
import Vuex from 'vuex'
import vux from './modules/vux'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import dialog from './modules/dialog'
import businessList from './modules/businessList'
import dictLib from './modules/dictLib'
import purchaseApply from './modules/purchaseApply'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    vux,
    errorLog,
    permission,
    tagsView,
    user,
    dialog,
    businessList,
    dictLib,
    purchaseApply
  },
  getters
})

export default store
