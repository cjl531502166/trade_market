webpackJsonp([33],{Yf39:function(e,t){},vRL0:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("X2mQ"),n=s("XJyL"),r={components:{vueQr:a.a},data:function(){return{address:""}},mounted:function(){var e=this,t=this.$route.query.coin;Object(n.N)(t).then(function(t){t.address[0]&&(e.address=t.address[0].address)})},methods:{codeComplete:function(e,t){console.log(e)},onCopy:function(e){this.$toast.success("复制成功")}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-main wh-full"},[s("my-header"),e._v(" "),e.address?s("div",{staticClass:"content van-hairline--top app-body h-full"},[s("div",{staticClass:"qr-code flex flex-h-center"},[s("vue-qr",{attrs:{callback:e.codeComplete,text:e.address,margin:"10",dotScale:"1",size:"180"}})],1),e._v(" "),e._m(0),e._v(" "),s("p",{staticClass:"charge-address font-15 txt-center"},[e._v(e._s(e.address))]),e._v(" "),s("div",{staticClass:"text font-14 font-bold txt-center"},[s("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.address,expression:"address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],staticClass:"riple"},[e._v("复制地址")])])]):s("div",{staticClass:"h-full flex flex-v-center flex-h-center font-16 color-999"},[e._v("暂无数据")])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text font-14 font-bold txt-center"},[t("span",{staticClass:"riple"},[this._v("长按二维码可保存")])])}]};var o=s("VU/8")(r,c,!1,function(e){s("Yf39")},"data-v-2e8fcd0e",null);t.default=o.exports}});