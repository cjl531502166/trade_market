webpackJsonp([40],{"Ata+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Fd2+"),n=a("mtWM"),i=a.n(n),l=a("XJyL"),o={components:{Actionsheet:s.a},data:function(){return{show:!1,title:"",message:"",qurl:"",qTypes:[{name:"充值"},{name:"提现"},{name:"OTC"},{name:"身份认证"},{name:"谷歌认证"},{name:"其他"}]}},computed:{disabled:function(){return!(this.title&&this.message&&this.qurl)}},methods:{showAction:function(){this.show=!0},onSelect:function(t){this.title=t.name,this.show=!1},onChange:function(t){var e=this;t.preventDefault();var a=t.target.files[0],s=new FormData,n={headers:{"Content-Type":"MultipartFile/form-data"},method:"post"};s.append("imgurl",a),n.data=s,n.url=this.api.baseURL+"/"+this.api.img.url,i()(n).then(function(t){"0"==t.data.code&&(e.qurl=t.data.data.isFlag)})},onSubmit:function(){var t=this;Object(l.e)(this.title,this.message,this.qurl).then(function(e){t.navigateTo("/articles")})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wh-full van-hairline--top"},[a("van-cell",{attrs:{title:t.title||"请选择类型","is-link":""},on:{click:t.showAction}}),t._v(" "),a("div",{staticClass:"panel"},[a("div",{staticClass:"title font-14 font-bold"},[t._v("添加图片")]),t._v(" "),a("div",{staticClass:"upload-file p-rel txt-center color-999 font-40",style:{backgroundImage:"url("+t.qurl+")"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.qurl,expression:"!qurl"}]},[t._v("+")]),t._v(" "),a("input",{staticClass:"file-input wh-full",attrs:{type:"file"},on:{change:t.onChange}})])]),t._v(" "),a("div",{staticClass:"panel"},[a("div",{staticClass:"title font-14 font-bold"},[t._v("添加文字")]),t._v(" "),a("van-field",{attrs:{type:"textarea",placeholder:"请具体描述您的问题，这有助于我们更有效的帮助您！",rows:"3",autosize:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),t._v(" "),a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn-block btn-large btn-primary riple",attrs:{disabled:t.disabled},on:{click:t.onSubmit}},[t._v("提交")])]),t._v(" "),a("van-actionsheet",{attrs:{actions:t.qTypes},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},staticRenderFns:[]};var c=a("VU/8")(o,r,!1,function(t){a("J12W")},"data-v-0deba4b0",null);e.default=c.exports},J12W:function(t,e){}});