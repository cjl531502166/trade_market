webpackJsonp([10],{LVMN:function(t,s){},kOzV:function(t,s){},v2Uw:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Gu7T"),i=a.n(e),n=a("//Fk"),o=a.n(n),r=a("mvHQ"),l=a.n(r),c=a("SPPm"),d=a("2Uyi"),u=void 0,m=!1;window.onbeforeunload=function(){u.close()};var v={data:function(){return{logo:a("YMSV"),mainCoinList:c.a,userData:this.userModel,tableData:[],contentId:0,mainCoinId:"",nowTrade:[],tradeRecord:[],showLoading:!1,showLoading_1:!1,currentConInfo:!1,myEntrustList:[],myHistoryEntrustList:[],latestBuyData:[],latestSoldData:[],historicalBuyData:[],buyFormData:{price:"",number:""},latestData:"",sellNum:"",buyNum:"",sellFormData:{price:"",number:""},timer:null,iframUrl:"./static/kline.html?"}},computed:{buyTotal:function(){return this.Util.accMul(this.buyFormData.number,this.buyFormData.price)},sellTotal:function(){return this.Util.accMul(this.sellFormData.number,this.sellFormData.price)},buyListTotal:function(){var t=0;return this.latestBuyData.map(function(s){t+=1*s.total}),t},sellListTotal:function(){var t=0;return this.latestSoldData.map(function(s){t+=1*s.total}),t}},beforeRouteLeave:function(t,s,a){u&&(u.close(),u=null),clearInterval(this.timer),this.timer=null,a()},mounted:function(){this.getMainCoin()},methods:{cancelOrder:function(t){var s=this;this.showLoading=!0,this.request(this.api.clearentrust,{id:t,showLoading:!0}).then(function(a){if(a&&"0"!=a.code)return s.getDataFaild(a.msg);s.successMsg(a.msg),s.delItemFromList(t,s.myEntrustList),s.showLoading=!1})},delItemFromList:function(t,s){s.map(function(a,e){if(a.id==t)return s.splice(e,1),s})},updateLastestData:function(t,s,a){"WebSocket"in window?this.updateListBySocket(t,s,a):this.updateListByAjax()},updateListBySocket:function(t,s,a){var e=this;if(u)return u.send(t+"_"+s+"_"+a),!1;(u=new WebSocket(""+this.api.socketUrl+(t||Object(d.c)(32))+"/"+s+"_"+a)).onopen=function(){u.send(t+"_"+s+"_"+a),e.timer&&clearInterval(e.timer)},u.onmessage=function(t){var s=JSON.parse(t.data);e.latestData=s.info[0],e.latestBuyData=e.Util.sumCalc(s.buy,"price","number"),e.latestSoldData=e.Util.sumCalc(s.sell,"price","number"),e.historicalBuyData=e.Util.sumCalc(s.top,"price","number")},u.onerror=function(t){e.updateListByAjax(s,a)},u.onclose=function(){}},updateListByAjax:function(t,s){var a=this;this.timer=setInterval(function(){if(m){o.a.all([a.getEntrustData(t,s),a.getHistoryData(t,s)]).then(function(t){m=!0,a.myEntrustList=t[0],a.myHistoryEntrustList=t[1]});var e={maincoin:t,tradcoin:s},n=a.request(a.api.buyorder,e),r=a.request(a.api.sellorder,e),l=a.request(a.api.gettoporder,e);o.a.all([n,r,l]).then(function(t){a.showLoading=!1,m=!0;var s=[].concat(i()(t)),e=s[0],n=s[1],o=s[2];a.latestBuyData=a.Util.sumCalc(e.data.list,"price","number"),a.latestSoldData=a.Util.sumCalc(n.data.list,"price","number"),a.historicalBuyData=a.Util.sumCalc(o.data.list,"price","number")}).catch(function(t){})}m=!1},3e3)},getMainCoin:function(){var t=this;this.request(this.api.getmaincoin).then(function(s){if("0"==s.code)return t.mainCoinId=s.data.list[0].coinid,t.getConiInfo(t.mainCoinId)}).then(function(s){if("{}"!=l()(t.$route.query)&&(t.currentConInfo={coinid:t.$route.query.coinid,maincoinid:t.$route.query.maincoinid}),t.currentConInfo){t.Util.setCookie("maincoinname",t.currentConInfo.maincoinid),t.Util.setCookie("tradcoinname",t.currentConInfo.coinid),t.iframUrl=t.iframUrl+"t="+(new Date).getTime(),t.updateLastestData(t.storage.get("token"),t.currentConInfo.maincoinid,t.currentConInfo.coinid);var a=t.currentConInfo,e=a.coinid,i=a.maincoinid;t.showLoading_1=!0,o.a.all([t.getEntrustData(i,e),t.getHistoryData(i,e)]).then(function(s){m=!0,t.showLoading_1=!1,t.myEntrustList=s[0],t.myHistoryEntrustList=s[1]})}})},getEntrustData:function(t,s){var a=this;if(this.userData.isLogin)return this.request(this.api.getentrust,{maincoin:t,tradcoin:s}).then(function(t){if("0"==t.code)return o.a.resolve(t.data.list);a.errMsg(t.msg)})},getHistoryData:function(t,s){var a=this;if(this.userData.isLogin)return this.request(this.api.gethistoryorder,{maincoin:t,tradcoin:s}).then(function(t){if("0"==t.code)return o.a.resolve(t.data.list);a.errMsg(t.msg)})},onTableRowClick:function(t){var s=this;t&&(this.currentConInfo=t,this.Util.setCookie("maincoinname",this.currentConInfo.maincoinid),this.Util.setCookie("tradcoinname",this.currentConInfo.coinid),this.iframUrl=this.iframUrl+"t="+(new Date).getTime(),o.a.all([this.getEntrustData(t.maincoinid,t.coinid),this.getHistoryData(t.maincoinid,t.coinid)]).then(function(t){s.myEntrustList=t[0],s.myHistoryEntrustList=t[1]}),this.updateLastestData(this.storage.get("token"),t.maincoinid,t.coinid))},tabChange:function(t){var s=this;this.mainCoinId=t.coinid,this.getConiInfo(this.mainCoinId).then(function(t){if("0"==t.code){var a=s.currentConInfo,e=a.coinid,i=a.maincoinid;s.Util.setCookie("maincoinname",s.currentConInfo.maincoinid),s.Util.setCookie("tradcoinname",s.currentConInfo.coinid),s.iframUrl=s.iframUrl+"t="+(new Date).getTime(),o.a.all([s.getEntrustData(i,e),s.getHistoryData(i,e)]).then(function(t){s.myEntrustList=t[0],s.myHistoryEntrustList=t[1]}),s.updateLastestData(s.storage.get("token"),i,e)}})},changeTable:function(t){this.contentId=t},getCustomList:function(){var t=this.storage.get("customList");this.mainCoinId="opt",this.tableData=t||[]},addMylist:function(t,s){var a=t;this.$set(this.tableData,s,a),a.isMyLike=!a.isMyLike,a.isMyLike?Object(d.a)(a):"opt"==this.currentId?this.tableData=Object(d.d)(a):Object(d.d)(a)},getConiInfo:function(t){var s=this;return this.showLoading=!0,this.request(this.api.getTradCoin,{maincoin:t}).then(function(t){return s.showLoading=!1,t&&"0"!=t.code?(s.getDataFaild(t.msg),!1):t.data&&t.data.list?(s.tableData=Object(d.b)(t.data.list),s.currentConInfo=s.tableData[0],o.a.resolve(t)):void 0})},handleBuy:function(){var t=this;this.userData.isLogin?""!=this.buyFormData.number&&""!=this.buyFormData.price?isNaN(this.buyTotal)||0==this.buyTotal?this.errMsg("请输入有效的数量或价格"):this.request(this.api.forbuy,{maincoin:this.currentConInfo.maincoinid,tradcoin:this.currentConInfo.coinid,number:this.buyFormData.number,prise:this.buyFormData.price}).then(function(s){"0"==s.code?(t.successMsg(s.msg),t.getEntrustData(t.currentConInfo.maincoinid,t.currentConInfo.coinid).then(function(s){"0"==s.code&&(t.myEntrustList=s.data.list)})):t.errMsg(s.msg)}):this.errMsg("请填写完整信息"):this.errMsg("请登录后操作")},handleSell:function(){var t=this;this.userData.isLogin?""!=this.sellFormData.number&&""!=this.sellFormData.price?isNaN(this.sellTotal)||0==this.sellTotal?this.errMsg("请输入有效的数量或价格"):this.request(this.api.forsell,{maincoin:this.currentConInfo.maincoinid,tradcoin:this.currentConInfo.coinid,number:this.sellFormData.number,prise:this.sellFormData.price}).then(function(s){"0"==s.code?(t.successMsg(s.msg),t.getEntrustData(t.currentConInfo.maincoinid,t.currentConInfo.coinid).then(function(s){"0"==s.code&&(t.myEntrustList=s.data.list)})):t.errMsg(s.msg)}):this.errMsg("请填写完整信息"):this.errMsg("请登录后操作")},onLatestLiClick:function(t,s){switch(s){case 1:this.sellNum=t.number,this.sellFormData.price=1*t.price,this.sellFormData.number=1*t.number;break;case 2:this.buyNum=t.number,this.buyFormData.price=1*t.price,this.buyFormData.number=1*t.number}},changeNum:function(t,s){switch(s){case 1:this.buyFormData.number=this.Util.accMul(this.buyNum,t);break;case 2:this.sellFormData.number=this.Util.accMul(this.sellNum,t)}}}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main wh-full"},[a("my-header",{staticClass:"header-dark",attrs:{showHeadBody:!1,"show-head-top":!0}},[a("div",{staticClass:"k-line-top",attrs:{slot:"top-slot"},slot:"top-slot"},[a("router-link",{attrs:{to:"./main"}},[a("img",{staticClass:"logo p-rel",attrs:{src:t.logo,alt:""}})]),t._v(" "),a("div",{staticClass:"mark-name p-rel"},[a("span",{staticClass:"font-bold"},[t._v(t._s(t.currentConInfo.coinid)+"/"+t._s(t.currentConInfo.maincoinid))]),t._v(" "),a("div",{staticClass:"table p-abs"},[a("div",{staticClass:"thead"},[t._l(t.mainCoinList.maincoin,function(s,e){return a("span",{key:e,class:t.mainCoinId==s.coinid?"active":"",domProps:{textContent:t._s(s.coinid)},on:{click:function(a){t.tabChange(s)}}})}),t._v(" "),a("span",{class:"opt"==t.mainCoinId?"active":"",domProps:{textContent:t._s(t.$t("optional"))},on:{click:t.getCustomList}})],2),t._v(" "),a("div",{staticClass:"table-content"},[a("div",{staticClass:"tr flex flex-between"},[a("div",{staticClass:"td",domProps:{textContent:t._s(t.$t("optional"))}}),t._v(" "),a("div",{staticClass:"td",domProps:{textContent:t._s(t.$t("currencyType"))}}),t._v(" "),a("div",{staticClass:"td",domProps:{textContent:t._s(t.$t("latestPrice"))}}),t._v(" "),a("div",{staticClass:"td",domProps:{textContent:t._s(t.$t("high"))}}),t._v(" "),a("div",{staticClass:"td",domProps:{textContent:t._s(t.$t("low"))}}),t._v(" "),a("div",{staticClass:"td",domProps:{textContent:t._s(t.$t("increase"))}}),t._v(" "),a("div",{staticClass:"td",domProps:{textContent:t._s(t.$t("dayVol"))}})]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.showLoading,expression:"showLoading"}],staticClass:"tbody",attrs:{"element-loading-background":"rgba(0,0,0,.4)"}},t._l(t.tableData,function(s,e){return a("div",{key:s.autoid,staticClass:"tr flex flex-between",on:{click:function(a){t.onTableRowClick(s)}}},[a("div",{staticClass:"td",on:{click:function(a){t.addMylist(s,e)}}},[a("i",{staticClass:"font-16",class:s.isMyLike?"el-icon-star-on":"el-icon-star-off"})]),t._v(" "),a("div",{staticClass:"td flex flex-v-center"},[a("img",{staticClass:"thumb-20",attrs:{src:s.logo,alt:""}}),t._v(" "),a("span",[t._v(t._s(s.coinid)+"/"+t._s(s.maincoinid))])]),t._v(" "),a("div",{staticClass:"td"},[a("span",[t._v(t._s(1*s.prise))])]),t._v(" "),a("div",{staticClass:"td"},[a("span",[t._v(t._s(1*s.height))])]),t._v(" "),a("div",{staticClass:"td"},[a("span",[t._v(t._s(1*s.low))])]),t._v(" "),a("div",{staticClass:"td"},[a("span",{class:1*s.rise>0?"color-danger":"color-success"},[t._v("\n                    "+t._s(1*s.rise)+"\n                  ")])]),t._v(" "),a("div",{staticClass:"td"},[a("span",[t._v(t._s(1*s.number))])])])}))])])]),t._v(" "),a("div",{staticClass:"price flex fl"},[a("div",{staticClass:"item h-full"},[a("em",{staticClass:"font-16 color-success font-bold"},[t._v(t._s(1*(t.latestData.prise||0)))]),t._v(" \n          "),a("em",{staticClass:"price-1 font-12"},[t._v("≈ ￥"+t._s(1*(t.latestData.cny||0)))])]),t._v(" "),a("i",{staticClass:"tag"},[t._v("|")]),t._v(" "),a("div",{staticClass:"item h-full fl"},[a("em",{staticClass:"label",domProps:{textContent:t._s(t.$t("increase"))}}),t._v(" "),a("em",{staticClass:"price-1 font-14",class:t.currentConInfo.rise>0?"color-danger":"color-success"},[t._v(" "+t._s(1*(t.latestData.rise||0))+"%\n          ")])]),t._v(" "),a("i",{staticClass:"tag"},[t._v("|")]),t._v(" "),a("div",{staticClass:"item h-full fl"},[a("em",{staticClass:"label",domProps:{textContent:t._s(t.$t("high"))}}),t._v(" "),a("em",{staticClass:"price-1 font-14"},[t._v(t._s(1*(t.latestData.height||0)))])]),t._v(" "),a("i",{staticClass:"tag"},[t._v("|")]),t._v(" "),a("div",{staticClass:"item h-full fl"},[a("em",{staticClass:"label",domProps:{textContent:t._s(t.$t("low"))}}),t._v(" "),a("em",{staticClass:"price-1 font-14"},[t._v(t._s(1*(t.latestData.low||0)))])]),t._v(" "),a("i",{staticClass:"tag"},[t._v("|")]),t._v(" "),a("div",{staticClass:"item h-full fl"},[a("em",{staticClass:"label",domProps:{textContent:t._s(t.$t("dayVol"))}}),t._v(" "),a("em",{staticClass:"price-1 font-14"},[t._v(t._s(1*(t.latestData.number||0)))])])])],1)]),t._v(" "),a("div",{staticClass:"main-body p-rel"},[a("div",{staticClass:"k-map"},[a("div",{staticClass:"map-wrap fl"},[a("iframe",{attrs:{id:"iframe",src:t.iframUrl,width:"100%",height:"100%",frameborder:"0"}})]),t._v(" "),a("div",{staticClass:"trade-panel flex flex-between"},[a("div",{staticClass:"trade-table"},[a("div",{staticClass:"trade-head flex flex-between"},[a("div",{staticClass:"tr-mPrice"},[t._v(t._s(t.$t("type")))]),t._v(" "),a("div",{staticClass:"tr-name"},[t._v(t._s(t.$t("price")))]),t._v(" "),a("div",{staticClass:"tr-vol"},[t._v(t._s(t.$t("amount")))])]),t._v(" "),t.latestSoldData.length>0?a("ul",{staticClass:"tb-left trade-body"},t._l(t.latestSoldData,function(s,e){return a("li",{key:e,staticClass:"flex flex-between p-rel",on:{click:function(a){t.onLatestLiClick(s,1)}}},[a("span",{staticClass:"color-danger tr-mPrice"},[t._v(t._s(t.$t("sell")))]),t._v(" "),a("span",{staticClass:"tr-name",domProps:{textContent:t._s(1*s.price)}}),t._v(" "),a("span",{staticClass:"tr-vol",domProps:{textContent:t._s(1*s.number)}}),t._v(" "),a("div",{staticClass:"p-abs progress",style:{width:s.total/t.sellListTotal*100+"%"}})])})):a("div",{staticClass:"table-no-data txt-center",domProps:{textContent:t._s(t.$t("label108"))}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1*t.latestData.prise,expression:"latestData.prise*1"}],staticClass:"newprice txt-center color-danger"},[a("span",{staticClass:"font-16"},[t._v("\n              "+t._s(1*t.latestData.prise)+"\n            ")]),t._v(" "),a("em",[t._v("≈￥"+t._s(1*t.latestData.cny))])]),t._v(" "),t.latestBuyData.length>0?a("ul",{staticClass:"tb-left trade-body"},t._l(t.latestBuyData,function(s,e){return a("li",{key:e,staticClass:"flex flex-between p-rel",on:{click:function(a){t.onLatestLiClick(s,2)}}},[a("span",{staticClass:"color-success tr-mPrice"},[t._v(t._s(t.$t("buy")))]),t._v(" "),a("span",{staticClass:"tr-name",domProps:{textContent:t._s(1*s.price)}}),t._v(" "),a("span",{staticClass:"tr-vol",domProps:{textContent:t._s(1*s.number)}}),t._v(" "),a("div",{staticClass:"p-abs progress",style:{width:s.total/t.buyListTotal*100+"%"}})])})):a("div",{staticClass:"table-no-data txt-center",domProps:{textContent:t._s(t.$t("label108"))}})]),t._v(" "),a("div",{staticClass:"trade-table"},[a("div",{staticClass:"trade-head flex flex-between"},[a("div",{staticClass:"tr-mPrice"},[t._v(t._s(t.$t("date")))]),t._v(" "),a("div",{staticClass:"tr-name"},[t._v(t._s(t.$t("price")))]),t._v(" "),a("div",{staticClass:"tr-vol"},[t._v(t._s(t.$t("volumn")))])]),t._v(" "),t.historicalBuyData.length>0?a("ul",{staticClass:"tb-right trade-body"},t._l(t.historicalBuyData,function(s,e){return a("li",{key:e,staticClass:"flex flex-between p-rel"},[a("span",{staticClass:"color-666 tr-mPrice",domProps:{textContent:t._s(s.writedate)}}),t._v(" "),a("span",{staticClass:"tr-name color-danger",domProps:{textContent:t._s(1*s.price)}}),t._v(" "),a("span",{staticClass:"tr-vol",domProps:{textContent:t._s(1*s.number)}})])})):a("div",{staticClass:"table-no-data txt-center",domProps:{textContent:t._s(t.$t("label108"))}})])])]),t._v(" "),a("div",{staticClass:"bottom"},[a("div",{staticClass:"record"},[a("div",{staticClass:"entrust_btn"},[a("div",{staticClass:"btn",class:0==t.contentId?"click":"",on:{click:function(s){t.changeTable(0)}}},[t._v(t._s(t.$t("currEnstrument")))]),t._v(" "),a("div",{staticClass:"btn",class:1==t.contentId?"click":"",on:{click:function(s){t.changeTable(1)}}},[t._v(t._s(t.$t("oldEnstrument")))])]),t._v(" "),t.userData.isLogin?[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.showLoading_1,expression:"showLoading_1"},{name:"show",rawName:"v-show",value:0==t.contentId,expression:"contentId==0"}],staticClass:"entr-content",attrs:{"element-loading-background":"rgba(0,0,0,.4)"}},[a("div",{staticClass:"flex entr-head flex-between"},[a("div",{staticStyle:{flex:"1"},domProps:{textContent:t._s(t.$t("time"))}}),t._v(" "),a("div",{staticStyle:{flex:"1"},domProps:{textContent:t._s(t.$t("currencyType"))}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(t.$t("price"))}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(t.$t("amount"))}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(t.$t("volumn"))}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(t.$t("total"))}}),t._v(" "),a("div",{staticStyle:{flex:"0.5"},domProps:{textContent:t._s(t.$t("operation"))}})]),t._v(" "),a("div",{staticClass:"entr-body"},[t._l(t.myEntrustList,function(s,e){return t.myEntrustList.length>0?a("div",{key:e,staticClass:"row flex flex-between"},[a("div",{staticStyle:{flex:"1"},domProps:{textContent:t._s(s.writedate)}}),t._v(" "),a("div",{staticStyle:{flex:"1"},domProps:{textContent:t._s(s.tradcoin)}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(1*s.price)}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(1*s.number)}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(1*s.dealnumber)}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(s.number*s.price)}}),t._v(" "),a("div",{staticClass:"color-danger",staticStyle:{flex:"0.5",cursor:"pointer"},domProps:{textContent:t._s(t.$t("withdrawed"))},on:{click:function(a){t.cancelOrder(s.id)}}})]):t._e()}),t._v(" "),0==t.myEntrustList.length?a("div",{staticClass:"no-data",domProps:{textContent:t._s(t.$t("label108"))}}):t._e()],2)]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.showLoading_1,expression:"showLoading_1"},{name:"show",rawName:"v-show",value:1==t.contentId,expression:"contentId==1"}],staticClass:"entr-content",attrs:{"element-loading-background":"rgba(0,0,0,.4)"}},[a("div",{staticClass:"flex entr-head flex-between"},[a("div",{staticStyle:{flex:"1"},domProps:{textContent:t._s(t.$t("time"))}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(t.$t("currencyType"))}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(t.$t("price"))}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(t.$t("amount"))}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(t.$t("money"))}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(t.$t("commision"))}}),t._v(" "),a("div",{staticStyle:{flex:"0.5"},domProps:{textContent:t._s(t.$t("type"))}})]),t._v(" "),a("div",{staticClass:"entr-body"},[t._l(t.myHistoryEntrustList,function(s,e){return t.myHistoryEntrustList.length>0?a("div",{key:e,staticClass:"row flex flex-between"},[a("div",{staticStyle:{flex:"1"},domProps:{textContent:t._s(s.writedate)}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(s.tradcoin)}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(1*s.price)}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(s.number*s.price)}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(s.dealnumber*s.price)}}),t._v(" "),a("div",{staticStyle:{flex:"1.5"},domProps:{textContent:t._s(s.tradgas)}}),t._v(" "),a("div",{class:"0"==s.state?"color-danger":"color-success",staticStyle:{flex:"0.5"},domProps:{textContent:t._s("0"==s.state?t.$t("buy"):t.$t("sell"))}})]):t._e()}),t._v(" "),0==t.myHistoryEntrustList.length?a("div",{domProps:{textContent:t._s(t.$t("label108"))}}):t._e()],2)])]:t._e(),t._v(" "),t.userData.isLogin?t._e():a("div",{staticClass:"no-login"},[a("span",{staticClass:"font-16"},[a("router-link",{staticClass:"color-danger",attrs:{to:"/user/login"}},[t._v(t._s(t.$t("login")))]),t._v(" or \n            "),a("router-link",{staticClass:"color-success",attrs:{to:"/user/register"}},[t._v(t._s(t.$t("register")))])],1)])],2),t._v(" "),a("div",{staticClass:"form-wrap"},[a("ul",{staticClass:"transaction-tabs"},[a("li",{staticClass:"tab-xj selected",domProps:{textContent:t._s(t.$t("label119"))}})]),t._v(" "),a("div",{staticClass:"transaction-content"},[a("div",{staticClass:"form transaction-sell"},[a("p",{staticClass:"transaction-title"},[t._v(t._s(t.$t("buy")))]),t._v(" "),a("p",{staticClass:"transaction-input transaction-xj"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.buyFormData.price,expression:"buyFormData.price"}],staticClass:"tread-input",attrs:{id:"getCountPrice",placeholder:t.$t("buyingRate")},domProps:{value:t.buyFormData.price},on:{input:function(s){s.target.composing||t.$set(t.buyFormData,"price",s.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),a("p",{staticClass:"transaction-input transaction-xj"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.buyFormData.number,expression:"buyFormData.number"}],staticClass:"tread-input",attrs:{id:"getCountPrice",placeholder:t.$t("buyVol")},domProps:{value:t.buyFormData.number},on:{input:function(s){s.target.composing||t.$set(t.buyFormData,"number",s.target.value)}}})]),t._v(" "),a("p",{staticClass:"transaction-input flex flex-between"},[a("span",{staticClass:"percentage",on:{click:function(s){t.changeNum(.25,1)}}},[t._v("25%")]),t._v(" "),a("span",{staticClass:"percentage",on:{click:function(s){t.changeNum(.5,1)}}},[t._v("50%")]),t._v(" "),a("span",{staticClass:"percentage",on:{click:function(s){t.changeNum(.75,1)}}},[t._v("75%")]),t._v(" "),a("span",{staticClass:"percentage",on:{click:function(s){t.changeNum(1,1)}}},[t._v("100%")])]),t._v(" "),a("p",{staticClass:"transaction-treadNum"},[a("label",[t._v(t._s(t.$t("total")))]),t._v(" "),t._m(1),t._v("  "+t._s(t.buyTotal)+"\n            ")]),t._v(" "),a("p",{staticClass:"transaction-button clearfix"},[a("span",{staticClass:"button-jy",on:{click:t.handleBuy}},[t._v(t._s(t.$t("buy")))])])]),t._v(" "),a("div",{staticClass:"form transaction-buy"},[a("p",{staticClass:"transaction-title"},[t._v(t._s(t.$t("sell")))]),t._v(" "),a("p",{staticClass:"transaction-input transaction-xj"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sellFormData.price,expression:"sellFormData.price"}],staticClass:"tread-input",attrs:{id:"getCountPrice",placeholder:t.$t("sellingRate")},domProps:{value:t.sellFormData.price},on:{input:function(s){s.target.composing||t.$set(t.sellFormData,"price",s.target.value)}}})]),t._v(" "),t._m(2),t._v(" "),a("p",{staticClass:"transaction-input transaction-xj"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sellFormData.number,expression:"sellFormData.number"}],staticClass:"tread-input",attrs:{id:"getCountPrice",placeholder:t.$t("sellVol")},domProps:{value:t.sellFormData.number},on:{input:function(s){s.target.composing||t.$set(t.sellFormData,"number",s.target.value)}}})]),t._v(" "),a("p",{staticClass:"transaction-input flex flex-between"},[a("span",{staticClass:"percentage",on:{click:function(s){t.changeNum(.25,2)}}},[t._v("25%")]),t._v(" "),a("span",{staticClass:"percentage",on:{click:function(s){t.changeNum(.5,2)}}},[t._v("50%")]),t._v(" "),a("span",{staticClass:"percentage",on:{click:function(s){t.changeNum(.75,2)}}},[t._v("75%")]),t._v(" "),a("span",{staticClass:"percentage",on:{click:function(s){t.changeNum(1,2)}}},[t._v("100%")])]),t._v(" "),a("p",{staticClass:"transaction-treadNum"},[a("label",[t._v(t._s(t.$t("total")))]),t._v(" "),t._m(3),t._v("  "+t._s(t.sellTotal)+"\n            ")]),t._v(" "),a("p",{staticClass:"transaction-button clearfix"},[a("span",{staticClass:"button-jy",on:{click:t.handleSell}},[t._v(t._s(t.$t("sell")))])])])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"transaction-treadNum"},[s("span",{staticClass:"transaction-price"},[s("s",[this._v("--")])]),this._v("  \n            ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"transaction-price"},[s("s",[this._v("--")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"transaction-treadNum"},[s("span",{staticClass:"transaction-price"},[s("s",[this._v("--")])]),this._v("  \n            ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"transaction-price"},[s("s",[this._v("--")])])}]};var p=a("VU/8")(v,_,!1,function(t){a("kOzV"),a("LVMN")},"data-v-eeb13fbe",null);s.default=p.exports}});