webpackJsonp([21],{Q6dc:function(t,e){},nWEl:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("3cXf");var n={data:function(){return{showLoading:!0,myEnstrumentData:[]}},mounted:function(){var t=this;this.request(this.api.getmyentru).then(function(e){if(t.showLoading=!1,e&&"0"!=e.code)return t.getDataFaild(e.msg),!1;e.data&&e.data.list&&(t.myEnstrumentData=e.data.list)})}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"title font-16 font-bold",domProps:{textContent:t._s(t.$t("myList")||"我的挂单")}}),t._v(" "),a("div",{staticClass:"table-wrap"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.showLoading,expression:"showLoading"}],attrs:{"max-height":"500","header-cell-style":{"background-color":"#fcfcfc","font-weight":"bold"},data:t.myEnstrumentData}},[a("el-table-column",{attrs:{prop:"writedate",label:t.$t("date")||"下单日期"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("type")||"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return a("span",{domProps:{textContent:t._s("买入"==e.row.type?t.$t("buy"):t.$t("sell"))}})}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("tradePair")||"交易对"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.tradcoin+"/"+e.row.maincoin)+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:t.$t("tradePrice")||"交易价"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dealnumber",label:t.$t("marketVol")+"("+t.$t("locked")+")"||"挂单量（锁定）"}}),t._v(" "),a("el-table-column",{attrs:{width:"150",label:t.$t("total")||"总计"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.dealnumber*e.row.price)+"\n        ")]}}])})],1)],1)])},staticRenderFns:[]};var o=a("C7Lr")(n,l,!1,function(t){a("Q6dc")},"data-v-d6bda0fe",null);e.default=o.exports}});