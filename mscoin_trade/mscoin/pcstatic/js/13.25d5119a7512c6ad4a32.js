webpackJsonp([13],{"/jbN":function(t,e){},Pj2N:function(t,e){},l1Rq:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-aside-panel"},[s("el-aside",[s("div",{staticClass:"user-info"},[s("div",{staticClass:"info-title font-16",domProps:{textContent:t._s(t.$t("label176"))}}),t._v(" "),s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.showLoading,expression:"showLoading"}],staticClass:"info-content"},[s("dl",[s("dt",{staticClass:"font-16 color-danger font-bold"},[t._v("ID："+t._s(t.userData.member))]),t._v(" "),s("dd",[s("span",{staticClass:"font-bold"},[t._v(t._s(t.$t("label178"))+"："+t._s(t.userData.viplevel))]),t._v("  \n            "),s("router-link",{staticClass:"vip-detail",attrs:{to:"/my/vip_detail"}},[t._v(t._s(t.$t("label186")))])],1),t._v(" "),s("dd",{staticClass:"font-bold color-danger"},[t._v(t._s(t.$t("label177"))+"："+t._s(t.userData.balance))]),t._v(" "),s("dd",{staticClass:"flex",staticStyle:{"margin-top":"5px"}},[s("button",{staticClass:"btn-danger btn-mini"},[s("router-link",{attrs:{to:"/property"}},[t._v(t._s(t.$t("recharge")))])],1),t._v(" "),s("button",{staticClass:"btn-success btn-mini",staticStyle:{"margin-left":"20px"}},[s("router-link",{attrs:{to:"/property"}},[t._v(t._s(t.$t("withdraw")))])],1)])])]),t._v(" "),s("el-menu",{attrs:{"active-text-color":"#ab1e24"},on:{select:t.handleSelect}},[s("el-submenu",[s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("label187")))]),t._v(" "),s("el-menu-item",{attrs:{index:"/my/order_detail"}},[t._v(t._s(t.$t("billDetail")))]),t._v(" "),s("el-menu-item",{attrs:{index:"/my/entrustment"}},[t._v(t._s(t.$t("myEntrustment")))]),t._v(" "),s("el-menu-item",{attrs:{index:"/my/deal_history"}},[t._v(t._s(t.$t("transRecord")))]),t._v(" "),s("el-menu-item",{attrs:{index:"/my/otc_history"}},[t._v(t._s(t.$t("otcRecord")))]),t._v(" "),s("el-menu-item",{attrs:{index:"/my/c2c_history"}},[t._v(t._s(t.$t("ctcRecord")))])],1),t._v(" "),s("el-menu-item",{attrs:{index:"/account/security"}},[t._v(t._s(t.$t("securityCenter")))]),t._v(" "),s("el-menu-item",{attrs:{index:"/account/identify"}},[t._v(t._s(t.$t("identify")))]),t._v(" "),s("el-menu-item",{attrs:{index:"/account/work_order"}},[t._v(t._s(t.$t("label111")))])],1)],1)])],1)},staticRenderFns:[]};var n={components:{userAside:s("VU/8")({name:"user-aside",data:function(){return{userData:"",showLoading:!0}},mounted:function(){var t=this;this.showLoading=!0,this.$bus.on("userLoaded",function(e){e&&(t.userData=e),t.showLoading=!1})},methods:{handleSelect:function(t){this.navigateTo(t)}}},a,!1,function(t){s("/jbN")},"data-v-5f5a040a",null).exports},data:function(){return{}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main wh-full"},[e("my-header",{staticClass:"header-main"},[e("login-bar")],1),this._v(" "),e("el-container",{staticClass:"container"},[e("user-aside"),this._v(" "),e("el-main",[e("keep-alive",[e("router-view")],1)],1)],1),this._v(" "),e("my-footer")],1)},staticRenderFns:[]};var r=s("VU/8")(n,i,!1,function(t){s("Pj2N")},"data-v-66280f3d",null);e.default=r.exports}});