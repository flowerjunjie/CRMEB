(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-417fa994"],{"2c3e":function(t,e,n){"use strict";var r=n("83ab"),i=n("9f7f").MISSED_STICKY,c=n("c6b6"),a=n("edd0"),u=n("69f3").get,o=RegExp.prototype,s=TypeError;r&&i&&a(o,"sticky",{configurable:!0,get:function(){if(this!==o){if("RegExp"===c(this))return!!u(this).sticky;throw new s("Incompatible receiver, RegExp required")}}})},4399:function(t,e,n){},"4d63":function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),c=n("e330"),a=n("94ca"),u=n("7156"),o=n("9112"),s=n("241c").f,d=n("3a9b"),l=n("44e7"),f=n("577e"),m=n("90d8"),p=n("9f7f"),h=n("aeb0"),b=n("cb2d"),g=n("d039"),v=n("1a2d"),y=n("69f3").enforce,O=n("2626"),j=n("b622"),_=n("fce3"),w=n("107c"),C=j("match"),k=i.RegExp,T=k.prototype,x=i.SyntaxError,P=c(T.exec),E=c("".charAt),S=c("".replace),R=c("".indexOf),z=c("".slice),G=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,I=/a/g,U=/a/g,$=(n=new k(I)!==I,p.MISSED_STICKY),M=p.UNSUPPORTED_Y;j=r&&(!n||$||_||w||g((function(){return U[C]=!1,k(I)!==I||k(U)===U||"/a/i"!==String(k(I,"i"))})));if(a("RegExp",j)){for(var N=function(t,e){var n,r,i=d(T,this),c=l(t),a=void 0===e,s=[],p=t;if(!i&&c&&a&&t.constructor===N)return t;if((c||d(T,t))&&(t=t.source,a)&&(e=m(p)),t=void 0===t?"":f(t),e=void 0===e?"":f(e),p=t,c=e=_&&"dotAll"in I&&(n=!!e&&-1<R(e,"s"))?S(e,/s/g,""):e,$&&"sticky"in I&&(r=!!e&&-1<R(e,"y"))&&M&&(e=S(e,/y/g,"")),w&&(t=(a=function(t){for(var e,n=t.length,r=0,i="",c=[],a={},u=!1,o=!1,s=0,d="";r<=n;r++){if("\\"===(e=E(t,r)))e+=E(t,++r);else if("]"===e)u=!1;else if(!u)switch(!0){case"["===e:u=!0;break;case"("===e:P(G,z(t,r+1))&&(r+=2,o=!0),i+=e,s++;continue;case">"===e&&o:if(""===d||v(a,d))throw new x("Invalid capture group name");a[d]=!0,o=!(c[c.length]=[d,s]),d="";continue}o?d+=e:i+=e}return[i,c]}(t))[0],s=a[1]),a=u(k(t,e),i?this:T,N),(n||r||s.length)&&(e=y(a),n&&(e.dotAll=!0,e.raw=N(function(t){for(var e,n=t.length,r=0,i="",c=!1;r<=n;r++)"\\"===(e=E(t,r))?i+=e+E(t,++r):c||"."!==e?("["===e?c=!0:"]"===e&&(c=!1),i+=e):i+="[\\s\\S]";return i}(t),c)),r&&(e.sticky=!0),s.length)&&(e.groups=s),t!==p)try{o(a,"source",""===p?"(?:)":p)}catch(t){}return a},A=s(k),q=0;A.length>q;)h(N,k,A[q++]);(T.constructor=N).prototype=T,b(i,"RegExp",N,{constructor:!0})}O("RegExp")},"61f7":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return s}));var r=n("ade3"),i=n("5530");function c(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n,r,i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(n in i)new RegExp("(".concat(n,")")).test(e)&&(r=i[n]+"",e=e.replace(RegExp.$1,1===RegExp.$1.length?r:("00"+r).substr(r.length)));return e}n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("498a"),n("d3b7"),n("13d5"),n("b64b"),n("99af");var a={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};function u(t,e){t.message=function(t){return e.replace("%s",t||"")}}function o(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)({required:!0,message:t,type:"string"},e)}function s(t){return d.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}u(o,"请输入%s"),u(s,"%s格式不正确");var d=Object.keys(a).reduce((function(t,e){return t[e]=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a="range"===e?{min:t[0],max:t[1]}:Object(r.a)({},e,t);return Object(i.a)(Object(i.a)({message:n.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},a),c)},u(t[e],a[e]),t}),{})},"74ad":function(t,e,n){"use strict";n("4399")},8593:function(t,e,n){"use strict";n.d(e,"i",(function(){return i})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return a})),n.d(e,"ib",(function(){return u})),n.d(e,"m",(function(){return o})),n.d(e,"k",(function(){return s})),n.d(e,"l",(function(){return d})),n.d(e,"j",(function(){return l})),n.d(e,"Q",(function(){return f})),n.d(e,"I",(function(){return m})),n.d(e,"P",(function(){return p})),n.d(e,"N",(function(){return h})),n.d(e,"K",(function(){return b})),n.d(e,"L",(function(){return g})),n.d(e,"M",(function(){return v})),n.d(e,"O",(function(){return y})),n.d(e,"eb",(function(){return O})),n.d(e,"kb",(function(){return j})),n.d(e,"x",(function(){return _})),n.d(e,"c",(function(){return w})),n.d(e,"e",(function(){return C})),n.d(e,"b",(function(){return k})),n.d(e,"d",(function(){return T})),n.d(e,"f",(function(){return x})),n.d(e,"B",(function(){return P})),n.d(e,"z",(function(){return E})),n.d(e,"A",(function(){return S})),n.d(e,"V",(function(){return R})),n.d(e,"U",(function(){return z})),n.d(e,"W",(function(){return G})),n.d(e,"db",(function(){return I})),n.d(e,"o",(function(){return U})),n.d(e,"n",(function(){return $})),n.d(e,"Z",(function(){return M})),n.d(e,"q",(function(){return N})),n.d(e,"y",(function(){return A})),n.d(e,"ab",(function(){return q})),n.d(e,"a",(function(){return D})),n.d(e,"F",(function(){return F})),n.d(e,"hb",(function(){return Y})),n.d(e,"J",(function(){return B})),n.d(e,"wb",(function(){return H})),n.d(e,"vb",(function(){return J})),n.d(e,"R",(function(){return K})),n.d(e,"T",(function(){return L})),n.d(e,"G",(function(){return V})),n.d(e,"X",(function(){return W})),n.d(e,"Y",(function(){return Q})),n.d(e,"C",(function(){return X})),n.d(e,"fb",(function(){return Z})),n.d(e,"D",(function(){return tt})),n.d(e,"gb",(function(){return et})),n.d(e,"p",(function(){return nt})),n.d(e,"H",(function(){return rt})),n.d(e,"E",(function(){return it})),n.d(e,"bb",(function(){return ct})),n.d(e,"qb",(function(){return at})),n.d(e,"sb",(function(){return ut})),n.d(e,"pb",(function(){return ot})),n.d(e,"tb",(function(){return st})),n.d(e,"rb",(function(){return dt})),n.d(e,"r",(function(){return lt})),n.d(e,"ub",(function(){return ft})),n.d(e,"lb",(function(){return mt})),n.d(e,"jb",(function(){return pt})),n.d(e,"mb",(function(){return ht})),n.d(e,"cb",(function(){return bt})),n.d(e,"ob",(function(){return gt})),n.d(e,"S",(function(){return vt})),n.d(e,"nb",(function(){return yt})),n.d(e,"s",(function(){return Ot})),n.d(e,"v",(function(){return jt})),n.d(e,"t",(function(){return _t})),n.d(e,"u",(function(){return wt})),n.d(e,"w",(function(){return Ct})),n("99af");var r=n("6b6c");function i(t){return Object(r.a)({url:"setting/config_class",method:"get",params:t})}function c(t){return Object(r.a)({url:"setting/config_class/create",method:"get"})}function a(t){return Object(r.a)({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function u(t){return Object(r.a)({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function o(t){return Object(r.a)({url:"setting/config",method:"get",params:t})}function s(t){return Object(r.a)({url:"setting/config/create",method:"get",params:t})}function d(t){return Object(r.a)({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function l(t,e){return Object(r.a)({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function f(t){return Object(r.a)({url:"setting/group",method:"get",params:t})}function m(t){return Object(r.a)({url:t.url,method:t.method,data:t.datas})}function p(t){return Object(r.a)({url:"setting/group/".concat(t),method:"get"})}function h(t,e){return Object(r.a)({url:e,method:"get",params:t})}function b(t,e){return Object(r.a)({url:e,method:"get",params:t})}function g(t,e){return Object(r.a)({url:e,method:"get",params:t})}function v(t,e){return Object(r.a)({url:e,method:"get",params:t})}function y(t){return Object(r.a)({url:t,method:"PUT"})}function O(t){return Object(r.a)({url:"system/log/search_admin",method:"GET"})}function j(t){return Object(r.a)({url:"system/log",method:"GET",params:t})}function _(){return Object(r.a)({url:"system/file",method:"GET"})}function w(){return Object(r.a)({url:"system/backup",method:"GET"})}function C(t){return Object(r.a)({url:"system/backup/read",method:"GET",params:t})}function k(t){return Object(r.a)({url:"system/backup/backup",method:"put",data:t})}function T(t){return Object(r.a)({url:"system/backup/optimize",method:"put",data:t})}function x(t){return Object(r.a)({url:"system/backup/repair",method:"put",data:t})}function P(t){return Object(r.a)({url:"system/backup/file_list",method:"GET"})}function E(t){return Object(r.a)({url:"backup/download",method:"get",params:t})}function S(t){return Object(r.a)({url:"system/backup/import",method:"POST",data:t})}function R(t){return Object(r.a)({url:"system/file/login",method:"POST",data:t})}function z(t){return Object(r.a)({url:"system/file/opendir",method:"GET",params:t,file_edit:!0})}function G(t){return Object(r.a)({url:"system/file/openfile",method:"GET",params:t,file_edit:!0})}function I(t){return Object(r.a)({url:"system/file/savefile?fileToken=".concat(t.fileToken),method:"post",data:t,file_edit:!0})}function U(t){return Object(r.a)({url:"system/file/createFolder",method:"GET",params:t,file_edit:!0})}function $(t){return Object(r.a)({url:"system/file/createFile",method:"GET",params:t,file_edit:!0})}function M(t){return Object(r.a)({url:"system/file/rename",method:"GET",params:t,file_edit:!0})}function N(t){return Object(r.a)({url:"system/file/delFolder",method:"GET",params:t,file_edit:!0})}function A(t){return Object(r.a)({url:"system/file/mark",method:"get",params:t,file_edit:!0})}function q(t){return Object(r.a)({url:"system/replace_site_url",method:"post",data:t})}function D(){return Object(r.a)({url:"auth",method:"get"})}function F(){return Object(r.a)({url:"setting/get_kf_adv",method:"get"})}function Y(t){return Object(r.a)({url:"setting/set_kf_adv",method:"post",data:t})}function B(){return Object(r.a)({url:"setting/group_all",method:"get"})}function H(t){return Object(r.a)({url:"system/version_list",method:"get",params:t})}function J(t){return Object(r.a)({url:"system/version_crate/".concat(t),method:"get"})}function K(t){return Object(r.a)({url:"setting/group_data/save_all",method:"POST",data:t})}function L(t){return Object(r.a)({url:"diy/open_adv/add",method:"POST",data:t})}function V(){return Object(r.a)({url:"diy/open_adv/info",method:"get"})}function W(t){return Object(r.a)({url:"setting/config/get_system/".concat(t),method:"get"})}function Q(t){return Object(r.a)({url:"setting/config/save_basics",method:"POST",data:t})}function X(){return Object(r.a)({url:"setting/get_user_agreement",method:"get"})}function Z(t){return Object(r.a)({url:"setting/set_user_agreement",method:"post",data:t})}function tt(t){return Object(r.a)({url:"setting/get_agreement/".concat(t),method:"get"})}function et(t,e){return Object(r.a)({url:"setting/save_agreement",method:"post",data:t})}function nt(t){return Object(r.a)({url:"crmeb_product",method:"get",params:t})}function rt(){return Object(r.a)({url:"setting/get_version",method:"get"})}function it(){return Object(r.a)({url:"copyright",method:"get"})}function ct(t){return Object(r.a)({url:"copyright",method:"post",data:t})}function at(t){return Object(r.a)({url:"/system/upgrade/list",method:"get",params:t})}function ut(){return Object(r.a)({url:"/system/upgrade_progress",method:"get"})}function ot(){return Object(r.a)({url:"/system/upgrade/agreement",method:"get"})}function st(){return Object(r.a)({url:"/system/upgrade_status",method:"get"})}function dt(t){return Object(r.a)({url:"/system/upgrade_log/list",method:"get",params:t})}function lt(t){return Object(r.a)({url:"/system/upgrade_download/"+t,method:"POST"})}function ft(t){return Object(r.a)({url:"/system/upgradeable/list",method:"get",params:t})}function mt(t){return Object(r.a)({url:"system/crontab/list",params:t})}function pt(t,e){return Object(r.a)({url:"system/crontab/set_open/".concat(t,"/").concat(e)})}function ht(t){return Object(r.a)({url:"system/crontab/info/".concat(t)})}function bt(t){return Object(r.a)({url:"system/crontab/save",method:"post",data:t})}function gt(t){return Object(r.a)({url:"system/database/update_mark",method:"post",data:t})}function vt(t,e){return Object(r.a)({url:"system/file/mark/save?fileToken=".concat(t),method:"post",data:e})}function yt(){return Object(r.a)({url:"system/crontab/mark"})}function Ot(t){return Object(r.a)({url:"system/event/list",params:t})}function jt(t,e){return Object(r.a)({url:"system/event/set_open/".concat(t,"/").concat(e)})}function _t(t){return Object(r.a)({url:"system/event/info/".concat(t)})}function wt(t){return Object(r.a)({url:"system/event/save",method:"post",data:t})}function Ct(){return Object(r.a)({url:"system/event/mark"})}},c2b5:function(t,e,n){"use strict";n.r(e);var r=n("5530"),i=(n("ac1f"),n("5319"),n("b0e7")),c=n("8593"),a=n("2f62"),u=n("61f7");n("d044"),r={name:"system_auth",computed:Object(r.a)(Object(r.a)(Object(r.a)({},Object(a.d)("admin/layout",["isMobile"])),Object(a.d)("admin/userLevel",["categoryId"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){return{baseUrl:"https://shop.crmeb.net/html/index.html",iframeUrl:"",captchs:"http://authorize.crmeb.net/api/captchs/",authCode:"",status:1,dayNum:0,copyright:"",isTemplate:!1,price:"",proPrice:"",productStatus:!1,copyrightText:"",success:!1,payType:"",disabled:!1,isShow:!1,active:0,timer:null,version:"",label:"",productType:"",modalPic:!1,isChoice:"单选",authorizedPicture:"",gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8}}},filters:{formatDate:function(t){if(0!==t)return t=new Date(1e3*t),Object(u.a)(t,"yyyy-MM-dd hh:mm")}},components:{uploadPictures:i.a},mounted:function(){var t=this;this.getAuth(),this.getVersion(),window.addEventListener("message",(function(e){"onCancel"===e.data.event&&t.cancel()}))},methods:{getVersion:function(){var t=this;Object(c.H)().then((function(e){t.version=e.data.version,t.label=e.data.label}))},getCrmebCopyRight:function(){var t=this;Object(c.E)().then((function(e){t.getAuth()}))},saveCopyRight:function(){var t=this;Object(c.bb)({copyright:this.copyrightText,copyright_img:this.authorizedPicture}).then((function(e){return t.$message.success(e.msg)}))},modalPicTap:function(){this.modalPic=!0},getPic:function(t){this.authorizedPicture=t.att_dir,this.modalPic=!1},getCopyRight:function(){var t=this;Object(c.E)().then((function(e){t.copyrightText=e.data.copyrightContext||"",t.authorizedPicture=e.data.copyrightImage||""}))},cancel:function(){"copyright"===this.productType?this.getCrmebCopyRight():this.getAuth(),this.iframeUrl="",this.isTemplate=!1},loginTabSwitch:function(t){this.active=t},getAuth:function(){var t=this;Object(c.a)().then((function(e){e=e.data||{},t.authCode=e.authCode||"",t.status=void 0===e.status?-1:e.status,t.dayNum=e.day||0,t.copyright=e.copyright,t.copyright&&t.getCopyRight()})).catch((function(e){t.$message.error(e.msg)}))},toCrmeb:function(){window.open("http://www.crmeb.com")},getProduct:function(){var t=this;Object(c.p)({type:"copyright"}).then((function(e){t.price=e.data.attr.price,t.productStatus=!0})).catch((function(e){t.$message.error(e.msg)})),Object(c.p)({type:"pro"}).then((function(e){t.proPrice=e.data.attr.price})).catch((function(e){t.$message.error(e.msg)}))},payment:function(t){this.productType=t;var e=location.host,n=e.split(".");"test"===n[0]&&4===n.length?e=e.replace("test.",""):"www"===n[0]&&3===n.length&&(e=e.replace("www.","")),this.iframeUrl=this.baseUrl+"?url="+e+"&product="+t+"&version="+this.version+"&label="+this.label,this.isTemplate=!0},onClose:function(){this.isShow=!1}},destroyed:function(){}},n("74ad"),a=n("2877"),i=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[e("div",{staticClass:"auth acea-row row-between-wrapper"},[e("div",{staticClass:"acea-row row-middle"},[e("i",{staticClass:"iconfont iconshangyeshouquan iconIos blue"}),1===t.status?e("div",{staticClass:"text"},[e("div",[t._v("商业授权")]),e("div",{staticClass:"code"},[t._v("授权码："+t._s(t.authCode))])]):e("div",{staticClass:"text"},[e("div",[t._v("商业授权")]),e("div",{staticClass:"code"},[t._v("未授权")])])]),e("div",[1===t.status?e("el-button",{directives:[{name:"db-click",rawName:"v-db-click"}],attrs:{type:"primary"},on:{click:function(e){return t.toCrmeb()}}},[t._v("进入官网")]):t._e(),1!==t.status?e("el-button",{directives:[{name:"db-click",rawName:"v-db-click"}],attrs:{type:"primary"},on:{click:function(e){return t.payment("bz")}}},[t._v("购买授权")]):t._e()],1)])]),t.copyright||1!=t.status?t._e():e("el-card",{staticClass:"mt16",attrs:{bordered:!1,shadow:"never"}},[e("div",{staticClass:"auth acea-row row-between-wrapper"},[e("div",{staticClass:"acea-row row-middle"},[e("span",{staticClass:"iconfont iconbanquan iconIos blue"}),e("div",{staticClass:"text"},[e("div",[t._v("去版权服务")]),e("div",{staticClass:"code"},[t._v("购买之后可以设置")]),t.productStatus?e("div",{staticClass:"pro_price"},[t._v("￥"+t._s(t.price))]):t._e()])]),e("el-button",{directives:[{name:"db-click",rawName:"v-db-click"}],attrs:{type:"primary"},on:{click:function(e){return t.payment("copyright")}}},[t._v("立即购买")])],1)]),t.copyright?e("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[e("div",{staticClass:"auth acea-row row-between-wrapper"},[e("div",{staticClass:"acea-row row-middle"},[e("span",{staticClass:"iconfont iconbanquan iconIos blue"}),e("div",{staticClass:"acea-row row-middle"},[e("span",{staticClass:"update"},[t._v("修改授权信息:")]),e("el-input",{staticStyle:{width:"460px"},model:{value:t.copyrightText,callback:function(e){t.copyrightText=e},expression:"copyrightText"}})],1)]),e("el-button",{directives:[{name:"db-click",rawName:"v-db-click"}],attrs:{type:"primary"},on:{click:t.saveCopyRight}},[t._v("保存")])],1),e("div",{staticClass:"authorized auth"},[e("div",{staticClass:"acea-row row-middle"},[e("div",{staticClass:"box"}),e("span",{staticClass:"update"},[t._v("上传授权图片:")])]),t.authorizedPicture?e("div",{directives:[{name:"db-click",rawName:"v-db-click"}],staticClass:"uploadPictrue",on:{click:function(e){return t.modalPicTap("单选")}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.authorizedPicture,expression:"authorizedPicture"}]})]):e("div",{directives:[{name:"db-click",rawName:"v-db-click"}],staticClass:"upload",on:{click:function(e){return t.modalPicTap("单选")}}},[e("div",{staticClass:"iconfont"},[t._v("+")])])]),e("span",{staticClass:"prompt"},[t._v("建议尺寸：宽290px*高100px")])]):t._e(),e("el-dialog",{attrs:{visible:t.isTemplate,title:"商业授权",width:"550px"},on:{"update:visible":function(e){t.isTemplate=e},closed:t.cancel}},[e("iframe",{attrs:{width:"100%",height:"780",src:t.iframeUrl,frameborder:"0"}})]),e("el-dialog",{attrs:{visible:t.modalPic,width:"1024px",title:"上传授权图片","close-on-click-modal":!1},on:{"update:visible":function(e){t.modalPic=e}}},[t.modalPic?e("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)}),[],!1,null,"ddae01b6",null);e.default=i.exports},c607:function(t,e,n){"use strict";var r=n("83ab"),i=n("fce3"),c=n("c6b6"),a=n("edd0"),u=n("69f3").get,o=RegExp.prototype,s=TypeError;r&&i&&a(o,"dotAll",{configurable:!0,get:function(){if(this!==o){if("RegExp"===c(this))return!!u(this).dotAll;throw new s("Incompatible receiver, RegExp required")}}})}}]);