webpackJsonp([19],{"3Njd":function(t,n){},i9Ur:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("XJyL"),i=e("Fd2+"),a={data:function(){return{addressList:[]}},mounted:function(){var t=this;Object(s.t)().then(function(n){t.addressList=n})},methods:{delAddr:function(t){var n=this;t&&i.e.confirm({title:"提示",message:"确认删除?"}).then(function(){Object(s.r)(t).then(function(t){Object(s.t)().then(function(t){n.addressList=t})})}).catch(function(){})}}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"log-list van-hairline--top h-full"},[e("div",{staticClass:"h-full overflow-y"},t._l(t.addressList,function(n){return e("div",{key:n.autoid,staticClass:"list-item flex flex-v-center flex-between van-hairline--top"},[e("div",{staticClass:"col"},[e("div",{staticClass:"title font-15 font-bold",domProps:{textContent:t._s(n.title)}}),t._v(" "),e("div",{staticClass:"font-14 color-999",domProps:{textContent:t._s(n.address)}})]),t._v(" "),e("div",{staticClass:"col font-14 color-danger",on:{click:function(e){t.delAddr(n.autoid)}}},[t._v("删除")])])}),0),t._v(" "),e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn-block btn-large btn-primary riple",on:{click:function(n){t.navigateTo("/account/add_address")}}},[t._v("新增地址")])])])},staticRenderFns:[]};var c=e("VU/8")(a,o,!1,function(t){e("3Njd")},"data-v-7c8f07f6",null);n.default=c.exports}});