webpackJsonp([11],{QvTH:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("mvHQ");var i=e("dLv+"),a=i.a.faqList,s={data:function(){return{banner:e("pOgh"),currentId:1,currentItem:null,tabCfg:[{i18nKey:"faq",id:"1",label:"常见问题"}],currentTab:null,qList:null}},mounted:function(){this.currentTab=this.tabCfg[0],this.getQuestionList()},methods:{onTabChange:function(t,n){this.currentId=t,this.currentTab=this.tabCfg[n]},getQuestionList:function(t){var n=this;a?this.qList=a:this.request(this.api.getquest).then(function(t){if(t&&"0"!=t.code)return n.getDataFaild(t.msg);t.data&&t.data.list&&(n.qList=i.a.faqList=t.data.list)})}}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"faq-content"},[e("img",{staticClass:"banner",attrs:{src:t.banner,alt:""}}),t._v(" "),e("div",{staticClass:"container"},[e("ul",{staticClass:"tab-bar"},t._l(t.tabCfg,function(n,i){return e("li",{key:n.id,class:t.currentId==n.id?"active":"",domProps:{textContent:t._s(t.$t(n.i18nKey)||n.title)},on:{click:function(e){t.onTabChange(n.id,i)}}})})),t._v(" "),e("ul",{staticClass:"q-list"},[t._l(t.qList,function(n,i){return[e("li",{key:i,staticClass:"flex flex-between flex-v-center",on:{click:function(e){t.navigateTo("/help_center/faq_detail",{i18nKey:t.currentTab.i18nKey,type:t.currentId,qid:n.id})}}},[e("span",{staticClass:"font-16",domProps:{textContent:t._s(n.title)}}),t._v(" "),e("i",{staticClass:"el-icon-arrow-right font-16"})])]})],2)])])},staticRenderFns:[]};var c=e("VU/8")(s,r,!1,function(t){e("g+cA")},"data-v-07671f14",null);n.default=c.exports},"dLv+":function(t,n,e){"use strict";n.a={faqList:null,workOrderList:null}},"g+cA":function(t,n){},pOgh:function(t,n,e){t.exports=e.p+"pcstatic/img/bangzhu_banner.df40033.png"}});