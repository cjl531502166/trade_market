webpackJsonp([11],{BCSC:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Xxa5"),o=a.n(i),e=a("exGp"),s=a.n(e),c=a("XJyL"),r={data:function(){return{id:"",coinDetail:{}}},mounted:function(){var n=this;return s()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.$route.params.id,t.next=3,Object(c.z)();case 3:n.coinDetail=n.Store.state.coinInfo[a];case 4:case"end":return t.stop()}},t,n)}))()}},l={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"app-body overflow-y coin-detail van-hairline--top"},[a("div",{staticClass:"title font-18 font-bold flex flex-v-center"},[a("img",{staticClass:"coin-logo thumb-30",attrs:{src:n.coinDetail.logo}}),n._v("\n    "+n._s(n.coinDetail.name)+"\n  ")]),n._v(" "),a("div",{staticClass:"coin-info font-14 van-hairline--bottom"},[a("span",{staticClass:"font-bold"},[n._v("币种简介：")]),n._v(n._s(n.coinDetail.info)+"\n  ")]),n._v(" "),a("div",{staticClass:"coin-properties font-14"},[a("div",{staticClass:"van-hairline--bottom font-bold"},[n._v("币种属性")]),n._v(" "),a("van-row",[a("van-col",{attrs:{span:"16"}},[n._v("\n        推出日期："+n._s(n.coinDetail.sdate)+"\n      ")]),n._v(" "),a("van-col",{attrs:{span:"8"}},[n._v("\n        发行总量："+n._s(1*n.coinDetail.number)+"\n      ")])],1),n._v(" "),a("van-row",[a("van-col",{attrs:{span:"16"}},[n._v("\n        市值："+n._s(n.coinDetail.usdt)+"\n      ")]),n._v(" "),a("van-col",{attrs:{span:"8"}},[n._v("\n        币种算法："+n._s(n.coinDetail.coinscrypt)+"\n      ")])],1),n._v(" "),a("van-row",[a("van-col",{attrs:{span:"16"}},[n._v("\n        区块大小："+n._s(n.coinDetail.blocksize)+"\n      ")])],1)],1)])},staticRenderFns:[]};var v=a("VU/8")(r,l,!1,function(n){a("KGuS"),a("qdAJ")},"data-v-3fc8c491",null);t.default=v.exports},KGuS:function(n,t){},qdAJ:function(n,t){}});