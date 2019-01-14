import Vuex from "vuex";
import { stat } from "fs";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isLogin: false,
    isCheckLogin: false,
    showFooter: true,
    headerTitle: "",
    footerItemIndex: 0,
    showHeaderBack: false,
    showMainHeader: true,
    newsList: [{
      id: '1',
      title: "新闻标题",
      content: "呢日用就购I爱干净偶尔加盖",
      date: '2018/8/8'
    }, {
      id: '2',
      title: "新闻标题",
      content: "呢日用就购I爱干净偶尔加盖",
      date: '2018/8/8'
    }]
  },
  mutations: {
    loginState(state) {
      state.isLogin = !state.isLogin;
    },
    checkLoginState(state) {
      state.isCheckLogin = !state.isCheckLogin
    },
    footerShow(state, newVal) {
      state.showFooter = newVal;
    },
    setFooterItem(state, newVal) {
      state.footerItemIndex = newVal;
    },
    setHeaderTitle(state, newVal) {
      state.headerTitle = newVal;
    },
    setShowHeaderBack(state, newVal) {
      if (state.showHeaderBack == newVal) return
      state.showHeaderBack = newVal;
    },
    setMainHeaderShow(state, val) {
      state.showMainHeader = val;
    },
    updateNewsList(state, arr) {
      state.newsList = arr;
    }
  },
  actions: {
    changeLoginState(ctx) {
      ctx.commit("loginState");
    },
    changeCheckLoginState(ctx) {
      ctx.commit('checkLoginState')
    },
    getNewsList(ctx, data) {
      ctx.commit('updateNewsList', data)
    }
  }
});