import Router from "vue-router";
Vue.use(Router);
const Main = r => require(["@/view/Main"], r);
const Home = r => require(["@/view/home/Home"], r);
const userMain = r => require(["@/view/user/userMain"], r);
const User = r => require(["@/view/user/User"], r);
const Login = r => require(["@/view/user/Login"], r);
const checkLogin = r => require(["@/view/user/checkLogin"], r);
const Register = r => require(["@/view/user/Register"], r);
const Register_1 = r => require(["@/view/user/Register_1"], r);
const Register_2 = r => require(["@/view/user/Register_2"], r);
const Resetpassword = r => require(["@/view/user/Resetpassword"], r);
const News = r => require(["@/view/news/newsMain"], r);
const newsList = r => require(["@/view/news/newsList"], r);
const newsDetail = r => require(["@/view/news/newsDetail"], r);
const coinTrade = r => require(["@/view/trade/coinTrade"], r);
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: Home,
        name: "Home",
        meta: {
          title: "首页",
          removeHeader: true
        }
      }
    ]
  },
  {
    path: "/userentry",
    name: "userMain",
    component: userMain,
    redirect: "/userentry/login",
    children: [
      {
        path: "/userentry/login",
        component: Login,
        meta: {
          removeHeader: true
        }
      },
      {
        name: "checkLogin",
        path: "/userentry/check_login",
        component: checkLogin,
        meta: {
          auth: false
        }
      },
      {
        path: "/userentry/register",
        component: Register,
        children: [{
          name: "Register_1",
          path: "",
          component: Register_1,
        }, {
          name: "Register_2",
          path: '/userentry/register_2',
          component: Register_2,
        }]
      },
      {
        path: "/userentry/resetpassword",
        component: Resetpassword
      }
    ]
  },
  {
    path: "/news",
    component: News,
    children: [
      {
        path: "",
        component: newsList,
        meta: {
          title: "我的公告"
        }
      },
      {
        path: "/news/detail/:id",
        name: "newsDetail",
        component: newsDetail,
        meta: {
          title: "公告详情"
        }
      }
    ]
  },
  {
    path: "/trade/coin_trade",
    name: 'coinTrade',
    component: coinTrade
  }
];
export default new Router({ routes });