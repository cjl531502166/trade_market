webpackJsonp([33],{dPE2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mtWM"),i=a.n(s),o={data:function(){return{formData:{type:"",desc:""},dialogImageUrl:"",history:[]}},mounted:function(){this.getHistory()},methods:{initData:function(){this.formData.type="",this.formData.desc="",this.dialogImageUrl=""},getHistory:function(){var t=this;this.request(this.api.gethisorder).then(function(e){"0"==e.code?t.history=e.data.list:t.errMsg(e.msg)})},submitForm:function(){var t=this;if(""==this.formData.type||""==this.formData.desc||""==this.dialogImageUrl)return this.errMsg("请填写完整信息"),!1;this.request(this.api.addorder,{type:this.formData.type,title:this.formData.desc,url:this.dialogImageUrl,showLoading:!0}).then(function(e){t.initData(),"0"==e.code?(t.getHistory(),t.successMsg(e.msg)):t.errMsg(e.msg)})},upLoadFunc:function(t){var e=this;t.preventDefault();var a=t.target.files[0],s=a.name,o=a.size,r=(a.type,new FormData),l={headers:{"Content-Type":"MultipartFile/form-data"},method:"post"};/\.(jpg|png)$/.test(s)?o>4*Math.pow(1024)?this.$message.error(""+this.$t("label150")+o/Math.pow(1024,2)+"M"):(r.append("imgurl",a),l.data=r,l.url=this.api.baseURL+"/"+this.api.img.url,i()(l).then(function(t){"0"==t.data.code&&(e.successMsg(t.msg||"上传成功"),e.dialogImageUrl=t.data.data.isFlag)})):this.$message.error(this.$t("label149"))}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"title font-18 font-bold",domProps:{textContent:t._s(t.$t("label111"))}}),t._v(" "),a("el-form",{attrs:{"label-position":"top","label-width":"120px"}},[a("el-form-item",{staticClass:"form",attrs:{label:t.$t("label112")}},[a("el-select",{attrs:{placeholder:t.$t("label114")},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("el-option",{attrs:{value:t.$t("recharge")}}),t._v(" "),a("el-option",{attrs:{value:t.$t("withdraw")}}),t._v(" "),a("el-option",{attrs:{value:"OTC"}}),t._v(" "),a("el-option",{attrs:{value:t.$t("identify")}}),t._v(" "),a("el-option",{attrs:{value:t.$t("googleAuth")}}),t._v(" "),a("el-option",{attrs:{value:t.$t("label113")}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("label117")}},[a("div",{staticClass:"upload-box fl p-rel",style:{backgroundImage:"url("+t.dialogImageUrl+")"}},[a("i",{staticClass:"el-icon-plus p-abs abs-vh-center"}),t._v(" "),a("input",{staticClass:"wh-full",attrs:{type:"file"},on:{change:t.upLoadFunc}})]),t._v(" "),a("span",{staticClass:"upload-tip",domProps:{innerHTML:t._s(t.$t("label151"))}})]),t._v(" "),a("el-form-item",{staticStyle:{width:"50%"},attrs:{label:t.$t("label115"),prop:"desc"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.desc,expression:"formData.desc"}],domProps:{value:t.formData.desc},on:{input:function(e){e.target.composing||t.$set(t.formData,"desc",e.target.value)}}})]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:t.submitForm}},[t._v(t._s(t.$t("submit")))])],1),t._v(" "),a("div",{staticClass:"title font-bold font-14",staticStyle:{"margin-top":"20px"},domProps:{textContent:t._s(t.$t("label116"))}}),t._v(" "),a("div",{staticClass:"workorder-record"},[a("div",{staticClass:"tip color-danger"},[t._v(t._s(t.$t("label118")))]),t._v(" "),a("div",{staticClass:"record-content"},[a("div",{staticClass:"tab-item font-16"},[a("a",{attrs:{href:"javasccript:"},domProps:{textContent:t._s(t.$t("label116"))}})]),t._v(" "),a("div",{staticClass:"replay"},t._l(t.history,function(e,s){return a("div",{key:s},[a("div",{staticClass:"question"},[a("div",{staticClass:"title fl",domProps:{textContent:t._s(e.title)}}),t._v(" "),a("div",{staticClass:"type fr color-danger",domProps:{textContent:t._s(e.type)}})]),t._v(" "),e.reply?a("div",{staticClass:"answer color-success"},[t._v("\n            回复："),a("span",{domProps:{textContent:t._s(e.reply)}})]):t._e()])}))])])],1)},staticRenderFns:[]};var l=a("VU/8")(o,r,!1,function(t){a("kaNq")},"data-v-31d0a6f9",null);e.default=l.exports},kaNq:function(t,e){}});