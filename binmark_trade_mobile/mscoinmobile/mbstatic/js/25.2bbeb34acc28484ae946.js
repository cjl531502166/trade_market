webpackJsonp([25],{"/V7y":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("X2mQ"),n=t("XJyL"),i={components:{vueQr:a.a},data:function(){return{size:0,scale:.45,link:"",shareCode:""}},mounted:function(){var e=this;this.size=Math.ceil(window.innerWidth*this.scale),Object(n.Q)().then(function(s){e.link=s.url,e.shareCode=s.sharecode})},methods:{onCopy:function(){this.$toast({message:"复制成功",position:"bottom"})}}},o={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"app-main wh-full"},[t("my-header"),e._v(" "),t("div",{staticClass:"app-body h-full p-rel",style:{backgroundImage:"url("+e.assetConfig.imgs.share_bg+")"}},[e.link?t("div",{staticClass:"content p-abs abs-h-center txt-center",style:{backgroundImage:"url("+e.assetConfig.imgs.share_content_bg+")"}},[t("span",{staticClass:"share-label font-16"},[e._v("您的邀请码")]),t("br"),e._v(" "),t("span",{staticClass:"font-30 font-bold",domProps:{textContent:e._s(e.shareCode)}}),t("br"),e._v(" "),t("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.shareCode,expression:"shareCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-small btn-radius riple"},[e._v("复制")]),e._v(" "),t("div",{staticClass:"qr-code"},[t("vueQr",{attrs:{size:e.size,text:e.link,margin:"10"}})],1),e._v(" "),t("div",{staticClass:"font-14"},[e._v("邀请好友扫一扫")])]):e._e()])],1)},staticRenderFns:[]};var r=t("VU/8")(i,o,!1,function(e){t("K7lO")},"data-v-4edc6cb3",null);s.default=r.exports},K7lO:function(e,s){}});