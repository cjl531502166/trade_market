webpackJsonp([0],{"2Uyi":function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"d",function(){return a}),e.d(n,"b",function(){return r}),e.d(n,"c",function(){return s});var i=e("GmYL");function o(t){var n=i.a.get("customList");n&&n.length>0?(n.map(function(e,i){e.coinid==t.coinid&&n.splice(i,1)}),n.push(t)):(n=[]).push(t),i.a.set("customList",n)}function a(t){var n=i.a.get("customList");return n&&n.map(function(e,i){e.coinid==t.coinid&&e.maincoinid==e.maincoinid&&n.splice(i,1)}),i.a.set("customList",n),n}function r(t){var n=i.a.get("customList");return n&&t&&n.map(function(n,e){t.map(function(e,i){e.coinid==n.coinid&&e.maincoinid==n.maincoinid&&(t[i].isMyLike=!0)})}),t}function s(t){t=t||32;for(var n="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",e=n.length,i="",o=0;o<t;o++)i+=n.charAt(Math.floor(Math.random()*e));return i}},"5zde":function(t,n,e){e("zQR9"),e("qyJz"),t.exports=e("FeBl").Array.from},Gu7T:function(t,n,e){"use strict";n.__esModule=!0;var i,o=e("c/Tr"),a=(i=o)&&i.__esModule?i:{default:i};n.default=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return(0,a.default)(t)}},MWE1:function(t,n,e){"use strict";n.a={newsList:null,newsId:null,newsItem:null}},RwLX:function(t,n,e){"use strict";e.d(n,"a",function(){return f});var i,o=e("Xxa5"),a=e.n(o),r=e("exGp"),s=e.n(r),c=e("vt++"),l=e("fQyU"),d=e("l6IN"),u=(e.n(d),e("GmYL"),this),f=(i=s()(a.a.mark(function t(n){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)(c.a.checkTradpwd,{tradpwd:n});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,u)})),function(t){return i.apply(this,arguments)})},Zhn7:function(t,n,e){"use strict";var i={name:"verCode",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:26},fontSizeMax:{type:Number,default:30},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:80},contentHeight:{type:Number,default:30}},data:function(){return{}},mounted:function(){this.drawPic()},methods:{randomNum:function(t,n){return Math.floor(Math.random()*(n-t)+t)},randomColor:function(t,n){return"rgb("+this.randomNum(t,n)+","+this.randomNum(t,n)+","+this.randomNum(t,n)+")"},drawPic:function(t){var n=this.$refs.canvas;if(!n)return!1;var e=n.getContext("2d");e.textBaseline="bottom",e.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),e.fillRect(0,0,this.contentWidth,this.contentHeight);for(var i=0;i<this.identifyCode.length;i++)this.drawText(e,this.identifyCode[i],i);this.drawLine(e),this.drawDot(e)},drawText:function(t,n,e){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var i=(e+1)*(this.contentWidth/(this.identifyCode.length+1)),o=this.randomNum(this.fontSizeMax,this.contentHeight-5),a=this.randomNum(-20,20);t.translate(i,o),t.rotate(a*Math.PI/180),t.fillText(n,0,0),t.rotate(-a*Math.PI/180),t.translate(-i,-o)},drawLine:function(t){for(var n=0;n<5;n++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var n=0;n<80;n++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),.5,0,2*Math.PI),t.fill()}},watch:{identifyCode:function(t,n){this.drawPic()}}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"s-canvas"},[n("canvas",{ref:"canvas",attrs:{title:"点击刷新验证码",width:this.contentWidth,height:this.contentHeight}})])},staticRenderFns:[]},a=e("VU/8")(i,o,!1,null,null,null);n.a=a.exports},"c/Tr":function(t,n,e){t.exports={default:e("5zde"),__esModule:!0}},eK1z:function(t,n){},fBQ2:function(t,n,e){"use strict";var i=e("evD5"),o=e("X8DO");t.exports=function(t,n,e){n in t?i.f(t,n,o(0,e)):t[n]=e}},fez0:function(t,n,e){t.exports=e.p+"pcstatic/img/bg.9b1ca44.jpg"},neeE:function(t,n,e){"use strict";var i={props:{width:{type:String,default:"500px"},titleText:String,headerBg:{type:String,default:null},titleSize:{type:String,default:"26px"},titleColor:{type:String,default:"#fff"}},data:function(){return{}}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dialog",style:{width:t.width}},[e("div",{staticClass:"dialog-header p-rel",style:{background:t.headerBg}},[e("div",{staticClass:"title",style:{"font-size":t.titleSize,color:t.titleColor},domProps:{textContent:t._s(t.titleText)}})]),t._v(" "),e("div",{staticClass:"dialog-body"},[t._t("default")],2)])},staticRenderFns:[]};var a=e("VU/8")(i,o,!1,function(t){e("eK1z")},"data-v-7f430dbe",null);n.a=a.exports},qyJz:function(t,n,e){"use strict";var i=e("+ZMJ"),o=e("kM2E"),a=e("sB3e"),r=e("msXi"),s=e("Mhyx"),c=e("QRG4"),l=e("fBQ2"),d=e("3fs2");o(o.S+o.F*!e("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,o,u,f=a(t),h="function"==typeof this?this:Array,m=arguments.length,p=m>1?arguments[1]:void 0,v=void 0!==p,g=0,y=d(f);if(v&&(p=i(p,m>2?arguments[2]:void 0,2)),void 0==y||h==Array&&s(y))for(e=new h(n=c(f.length));n>g;g++)l(e,g,v?p(f[g],g):f[g]);else for(u=y.call(f),e=new h;!(o=u.next()).done;g++)l(e,g,v?r(u,p,[o.value,g],!0):o.value);return e.length=g,e}})},wYp3:function(t,n){},yPbj:function(t,n,e){"use strict";e("mvHQ");var i=e("SPPm"),o=e("2Uyi"),a={name:"ce-aside-comp",data:function(){return{mainCoinModel:i.a,currentId:0,tableData:null,showLoading:!0}},mounted:function(){var t=this;if(i.a.coinid)return this.$route.query.maincoinid&&(i.a.coinid=this.$route.query.maincoinid),this.getTradCoin(i.a.coinid),void(this.currentId=i.a.coinid);this.$bus.on("mainCoinLoad",function(n){t.currentId=n,t.getTradCoin(n)})},destroyed:function(){this.$bus.off("tradeCoinLoad")},methods:{onTabChange:function(){if("opt"==this.currentId){var t=this.storage.get("customList");if(this.tableData=(t&&t.length)>0?t:[],!t[0])return!1;this.passCoinInfo(t)}else this.getTradCoin(this.currentId)},passCoinInfo:function(t,n,e){if(!t)return!1;var i=t[0];n&&e&&t.map(function(t){t.maincoinid&&t.coinid&&t.maincoinid==n&&t.coinid==e&&(i=t)}),this.$bus.emit("tradeCoinLoad",i)},addMylist:function(t,n){var e=t;this.$set(this.tableData,n,e),e.isMyLike=!e.isMyLike,e.isMyLike?Object(o.a)(e):"opt"==this.currentId?this.tableData=Object(o.d)(e):Object(o.d)(e)},getTradCoin:function(t){var n=this;this.showLoading=!0,this.request(this.api.getTradCoin,{maincoin:t}).then(function(e){if(n.showLoading=!1,e&&"0"!=e.code)return n.getDataFaild(e.msg),!1;i.a.coinid=t,e.data&&e.data.list&&(n.tableData=Object(o.b)(e.data.list),e.data.list[0]&&n.passCoinInfo(e.data.list,n.$route.query.maincoinid,n.$route.query.coinid))})},onTableRowClick:function(t){this.$emit("onRowClick",t)}}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"side"},[e("div",{staticClass:"tab-wrap p-rel"},[e("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.onTabChange},model:{value:t.currentId,callback:function(n){t.currentId=n},expression:"currentId"}},[t._l(t.mainCoinModel.maincoin,function(n,i){return e("el-tab-pane",{key:i,attrs:{label:n.coinid+" "+t.$t("trade"),name:n.coinid}})}),t._v(" "),e("el-tab-pane",{directives:[{name:"show",rawName:"v-show",value:t.mainCoinModel.maincoin,expression:"mainCoinModel.maincoin"}],attrs:{label:t.$t("optMarket"),name:"opt"}})],2)],1),t._v(" "),e("el-input",{attrs:{"suffix-icon":"el-icon-search"}}),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.showLoading,expression:"showLoading"}],staticStyle:{"font-size":"14px"},attrs:{data:t.tableData,stripe:""},on:{"row-click":t.onTableRowClick}},[e("el-table-column",{attrs:{label:t.$t("coin")||"币种",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"operate"},[n.row.icon||n.row.logo?e("img",{staticClass:"thumb-20 m-right-10",attrs:{src:n.row.icon||n.row.logo,alt:""}}):t._e(),t._v(" "),e("span",[t._v(t._s(n.row.coinid))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("latestPrice")||"最新价"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n          "+t._s(1*n.row.prise)+"\n        ")]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("increase")||"涨幅"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{class:1*n.row.rise>0?"color-danger":"color-success",domProps:{textContent:t._s(1*n.row.rise+"%")}})]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:t.$t("optional")||"自选"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"operate flex flex-h-center",on:{click:function(e){e.stopPropagation(),t.addMylist(n.row,n.$index)}}},[e("i",{staticClass:"font-18 flex-center",class:n.row.isMyLike?"el-icon-star-on":"el-icon-star-off"})])]}}])})],1)],1)},staticRenderFns:[]};var s=e("VU/8")(a,r,!1,function(t){e("wYp3")},"data-v-59de7f9e",null);n.a=s.exports}});