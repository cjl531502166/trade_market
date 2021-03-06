import Router from "vue-router";
Vue.use(Router);
const Main = r => require(["@/view/Main"], r);
const Home = r => require(["@/view/home/Home"], r);
const userMain = r => require(["@/view/user/userMain"], r);
const Login = r => require(["@/view/user/Login"], r);
const checkLogin = r => require(["@/view/user/checkLogin"], r);
const Register = r => require(["@/view/user/Register"], r);
const Register_1 = r => require(["@/view/user/Register_1"], r);
const Register_2 = r => require(["@/view/user/Register_2"], r);
const VipLevel = r => require(["@/view/account/VipLevel"], r);
const Invitation = r => require(["@/view/user/Invitation"], r);
const Resetpassword = r => require(["@/view/user/Resetpassword"], r);
const News = r => require(["@/view/news/newsMain"], r);
const newsList = r => require(["@/view/news/newsList"], r);
const newsDetail = r => require(["@/view/news/newsDetail"], r);
const coinTrade = r => require(["@/view/trade/coinTrade"], r);
const entrustDetail = r => require(["@/view/trade/entrustDetail"], r);
const c2cTrade = r => require(["@/view/trade/c2cTrade"], r);
const c2cTradeConfirm = r => require(["@/view/trade/c2cTradeConfirm"], r);
const c2cMatch = r => require(["@/view/trade/c2cMatch"], r);
const orderDetail = r => require(["@/view/trade/orderDetail"], r);
const otcTrade = r => require(["@/view/trade/otcTrade"], r);
const tradeStatement = r => require(["@/view/trade/tradeStatement"], r);
const Property = r => require(["@/view/myproperty/Property"], r);
const propertyDetail = r => require(["@/view/myproperty/PropertyDetail"], r);
const Recharge = r => require(["@/view/myproperty/Recharge"], r);
const WithDraw = r => require(["@/view/myproperty/WithDraw"], r);
const PropertyRecord = r => require(["@/view/myproperty/PropertyRecord"], r);
const DetailRecord = r => require(["@/view/myproperty/DetailRecord"], r);
const AccountMain = r => require(["@/view/account/Main"], r);
const SecurityCenter = r => require(["@/view/account/SecurityCenter"], r);
const ChangePassword = r => require(["@/view/account/ChangePassword"], r);
const ChangeTradePassword = r => require(["@/view/account/ChangeTradePassword"], r);
const BindEmail = r => require(["@/view/account/BindEmail"], r);
const BindBank = r => require(["@/view/account/BindBank"], r);
const GoogleAuth = r => require(["@/view/account/GoogleAuth"], r);
const Identify = r => require(["@/view/account/Identify"], r);
const AccountCenter = r => require(["@/view/account/AccountCenter"], r);
const AddressList = r => require(["@/view/account/AddressList"], r);
const AddAddress = r => require(["@/view/account/AddAddress"], r);
const WorkOrder = r => require(["@/view/account/WorkOrder"], r);
// 日志记录
const AccountLogs = r => require(["@/view/account/AccountLogs"], r);
const LoginLogs = r => require(["@/view/account/LoginLogs"], r);
// 文章资料
const ArticleMain = r => require(["@/view/articles/ArticleMain"], r);
const AboutTrade = r => require(["@/view/articles/AboutTrade"], r);
const Fee = r => require(["@/view/articles/Fee"], r);
const CoinInfo = r => require(["@/view/articles/CoinInfo"], r);
const CoinInfoDetail = r => require(["@/view/articles/CoinInfoDetail"], r);
const About = r => require(["@/view/articles/About"], r);
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
          title: "首页"
        }
      },
      {
        path: "/trade/coin_trade",
        name: 'coinTrade',
        component: coinTrade,
        meta: {
          title: "交易"
        }
      },
      {
        path: "/trade/c2c_trade",
        name: 'c2cTrade',
        component: c2cTrade,
        meta: {
          title: "c2c交易",
          auth: true
        }
      },
      {
        path: "/trade/otc_trade",
        name: 'otcTrade',
        component: otcTrade,
        meta: {
          title: "OTC交易",
          auth: true
        }
      },
      {
        path: "/property",
        name: 'Property',
        component: Property,
        meta: {
          title: "我的资产",
          auth: true
        }
      },
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
        name: "Login",
        component: Login,
        meta: {
          removeHeader: true,
          title: "登录",
          auth: false,
        }
      },
      {
        name: "checkLogin",
        path: "/userentry/check_login",
        component: checkLogin,
        meta: {
          title: "登录验证",
          auth: false,
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
        component: Resetpassword,
        meta: {
          title: "重置密码"
        }
      }
    ]
  },
  {
    path: "/invitation",
    name: "Invitation",
    component: Invitation,
    meta: {
      title: "邀请好友",
      auth: true
    }
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
    path: "/trade/entrust_detail",
    name: "entrustDetail",
    component: entrustDetail,
    meta: {
      title: "委托详情"
    }
  },
  {
    path: "/trade/trade_confirm",
    name: "c2cTradeConfirm",
    component: c2cTradeConfirm,
    meta: {
      title: "订单确认"
    }
  },
  {
    path: "/trade/c2c_match",
    name: "c2cMatch",
    component: c2cMatch,
    meta: {
      title: "最近匹配订单"
    }
  },
  {
    path: "/trade/order_detail",
    name: "orderDetail",
    component: orderDetail,
    meta: {
      title: "订单详情"
    }
  },
  {
    path: "/trade/tradeStatement",
    name: "tradeStatement",
    component: tradeStatement,
    meta: {
      title: "交易须知"
    }
  },
  {
    path: "/property/property_detail/:id",
    name: "propertyDetail",
    component: propertyDetail,
    meta: {
      title: "币种账户"
    }
  },
  {
    path: "/property/recharge",
    name: "Recharge",
    component: Recharge,
    meta: {
      title: "充值"
    }
  },
  {
    path: "/property/withdraw",
    name: "WithDraw",
    component: WithDraw,
    meta: {
      title: "提现",
      auth: true
    }
  },
  {
    path: "/property/record",
    name: "PropertyRecord",
    component: PropertyRecord,
    meta: {
      title: "账户记录"
    }
  },
  {
    path: "/property/detail_record",
    name: "DetailRecord",
    component: DetailRecord,
    meta: {
      title: "记录详情"
    }
  },
  {
    path: "/account",
    component: AccountMain,
    children: [
      {
        path: "",
        component: SecurityCenter,
        meta: {
          title: "安全中心",
          auth: true
        }
      },
      {
        path: "/account/changepwd",
        name: "ChangePassword",
        component: ChangePassword,
        meta: {
          title: "修改登录密码",
          auth: true,
        }
      },
      {
        path: "/account/changetradepwd",
        name: "ChangeTradePassword",
        component: ChangeTradePassword,
        meta: {
          title: "修改交易密码",
          auth: true,
        }
      },
      {
        path: "/account/bindemail",
        name: "BindEmail",
        component: BindEmail,
        meta: {
          title: "绑定邮箱",
          auth: true,
        }
      },
      {
        path: "/account/bindbank",
        name: "BindBank",
        component: BindBank,
        meta: {
          title: "绑定银行卡",
          auth: true,
        }
      },
      {
        path: "/account/google_auth",
        name: "GoogleAuth",
        component: GoogleAuth,
        meta: {
          title: "谷歌验证",
          auth: true,
        }
      },
      {
        path: "/account/identify",
        name: "Identify",
        component: Identify,
        meta: {
          title: "身份认证",
          auth: true,
        }
      },
      {
        path: "/account/account_log",
        name: "AccountLogs",
        component: AccountLogs,
        meta: {
          title: "安全日志",
          auth: true,
        }
      },
      {
        path: "/account/login_logs",
        name: "LoginLogs",
        component: LoginLogs,
        meta: {
          title: "登录日志",
          auth: true,
        }
      },
      {
        path: "/account/center",
        name: "AccountCenter",
        component: AccountCenter,
        meta: {
          title: "个人信息",
          auth: true
        }
      },
      {
        path: "/account/address",
        name: "Address",
        component: AddressList,
        meta: {
          title: "我的地址",
          auth: true
        }
      },
      {
        path: "/account/add_address",
        name: "AddAddress",
        component: AddAddress,
        meta: {
          title: "添加地址",
          auth: true
        }
      },
      {
        path: "/account/workorder",
        name: "WorkOrder",
        component: WorkOrder,
        meta: {
          title: "提交工单",
          auth: true
        }
      }
    ]
  },
  {
    path: "/vip",
    name: "VipLevel",
    component: VipLevel,
    meta: {
      title: "vip等级",
      auth: true
    }
  },
  {
    path: '/articles',
    component: ArticleMain,
    children: [
      {
        path: "",
        component: AboutTrade,
        meta: { title: "问题中心" }
      },
      {
        path: "/articles/fee",
        name: "Fee",
        component: Fee,
        meta: { title: "费率" }
      },
      {
        path: "/articles/coininfo",
        name: "CoinInfo",
        component: CoinInfo,
        meta: { title: "币种资料" }
      },
      {
        path: "/articles/coin_detail/:id",
        name: "CoinInfoDetail",
        component: CoinInfoDetail,
        meta: { title: "币种详情" }
      },
      {
        path: "/articles/about",
        name: "About",
        component: About,
        meta: { title: "关于我们" }
      },
    ]
  }
];
export default new Router({ routes });