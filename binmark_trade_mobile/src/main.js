/**
 * 引入全局样式
 */
import "@/assets/css/common.css";
import 'swiper/dist/css/swiper.css'
/**
 * 引入第三方库
 */
import Store from "@/vuexStore/store";
import router from "@/router/index";
import VueClipboard from 'vue-clipboard2';
VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);
import {
  Tabbar,
  TabbarItem,
  NavBar,
  NoticeBar,
  Cell,
  CellGroup,
  Field,
  Row,
  Col,
  Icon,
  Tag,
  Tab,
  Tabs,
  Toast,
  Actionsheet,
  Uploader ,
} from "vant";
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Field)
  .use(CellGroup)
  .use(Cell)
  .use(Row)
  .use(Col)
  .use(Icon)
  .use(Tag)
  .use(Tab)
  .use(Tabs)
  .use(NoticeBar)
  .use(Actionsheet)
  .use(Toast)
  .use(Uploader );

/**
 * 引入全局组件
 */
import App from "@/App";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import tabBar from "@/components/other/tabBar";
import NoRecord from './components/other/NoRecord.vue';
Vue.component(Footer.name, Footer);
Vue.component(Header.name, Header);
Vue.component(tabBar.name, tabBar);
Vue.component(NoRecord.name, NoRecord);
/**
 * 引入自定义相关js
 */
import Util from "@/assets/js/utils";
import Request from "@/assets/js/request";
import myStorage from "@/assets/js/myStorage";
import apiCfg from "@/config/apiConfig";
import assetConfig from "@/config/assetConfig";
import filter from './assets/js/filter';
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
});
Vue.config.productionTip = false;

/**
 * 拓展Vue实例
 */
Object.assign(Vue.prototype, {
  request: Request,
  Util: Util,
  storage: myStorage,
  Store: Store,
  api: apiCfg,
  assetConfig: assetConfig,
  redirectTo(pathName, params) {
    let data = {
      path: pathName,
      query: params
    };
    if (!params) delete data.params;
    router.replace(data);
  },
  navigateTo(pathName, params) {
    let data = {
      path: pathName,
      query: params
    };
    if (!params) delete data.params;
    router.push(data);
  }
});
/**全局路由守卫 */
router.beforeEach((to, from, next) => {
  // 如果未匹配到正确的路由直接跳转首页
  if (to.matched.length == 0) {
    next({ path: "/home" });
  }
  // 判断是否有上一页
  from.path && Store.commit("setShowHeaderBack", true);
  to.meta.title && (document.title = to.meta.title);
  // 设置是否加载通用的header
  Store.commit('setMainHeaderShow', !to.meta.removeHeader)
  Store.commit("setHeaderTitle", to.meta.title);
  if (myStorage.get('isLogin')) {
    Store.commit('loginState', true);
  };
  if (to.meta.auth) {
    if (myStorage.get("token")) {
      Store.commit('loginState', true);
      next();
    } else {
      myStorage.set("isLogin", false);
      Store.commit('loginState', false);
      next({ path: "/userentry/login" });
    }
  } else {
    if (to.name == "Login" || to.name == 'Register_1') {
      myStorage.remove("token");
      Store.commit('loginState', false);
    }
    next();
  }
});
/* eslint-disable  */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
