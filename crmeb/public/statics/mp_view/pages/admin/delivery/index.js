require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/delivery/index"],{"13fb":function(e,t,i){"use strict";i.r(t);var n=i("ffcd"),r=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=r.a},6985:function(e,t,i){"use strict";(function(e){i("7b91");n(i("66fd"));var t=n(i("8a64"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i("543d")["createPage"])},"8a64":function(e,t,i){"use strict";i.r(t);var n=i("b069"),r=i("13fb");for(var s in r)"default"!==s&&function(e){i.d(t,e,(function(){return r[e]}))}(s);i("a786");var o,l=i("f0c5"),u=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=u.exports},"8a8e":function(e,t,i){},a786:function(e,t,i){"use strict";var n=i("8a8e"),r=i.n(n);r.a},b069:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=(e._self._c,e.$t("订单号")),n=e.$t("发货方式"),r=e.logistics.length>0&&1==e.delivery.config_export_open?e.$t("发货类型"):null,s=e.logistics.length>0&&1==e.curExpress?e.$t("快递公司"):null,o=e.logistics.length>0&&1==e.curExpress?e.$t("快递单号"):null,l=e.logistics.length>0&&1==e.curExpress?e.$t("填写快递单号"):null,u=e.logistics.length>0&&1==e.curExpress&&1==e.curExpress?e.$t("顺丰请输入单号 :收件人或寄件人手机号后四位"):null,c=e.logistics.length>0&&1==e.curExpress&&1==e.curExpress?e.$t("例如：SF000000000000:3941"):null,a=e.logistics.length>0&&2==e.curExpress?e.$t("快递公司"):null,d=e.logistics.length>0&&2==e.curExpress&&e.expTemp.length>0?e.$t("电子面单"):null,p=e.logistics.length>0&&2==e.curExpress&&e.expTemp.length>0?e.$t("预览"):null,f=e.logistics.length>0&&2==e.curExpress?e.$t("寄件人姓名"):null,v=e.logistics.length>0&&2==e.curExpress?e.$t("填写寄件人姓名"):null,h=e.logistics.length>0&&2==e.curExpress?e.$t("寄件人电话"):null,x=e.logistics.length>0&&2==e.curExpress?e.$t("填写寄件人电话"):null,_=e.logistics.length>0&&2==e.curExpress?e.$t("寄件人地址"):null,g=e.logistics.length>0&&2==e.curExpress?e.$t("填写寄件人地址"):null,m=e.$t("送货人"),y=e.$t("remark"),$=e.$t("确认提交");e.$mp.data=Object.assign({},{$root:{m0:i,m1:n,m2:r,m3:s,m4:o,m5:l,m6:u,m7:c,m8:a,m9:d,m10:p,m11:f,m12:v,m13:h,m14:x,m15:_,m16:g,m17:m,m18:y,m19:$}})},s=[]},ffcd:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(i("a34a")),r=i("b65d");i("a25d");function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t,i,n,r,s,o){try{var l=e[s](o),u=l.value}catch(c){return void i(c)}l.done?t(u):Promise.resolve(u).then(n,r)}function l(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var s=e.apply(t,i);function l(e){o(s,n,r,l,u,"next",e)}function u(e){o(s,n,r,l,u,"throw",e)}l(void 0)}))}}var u={name:"GoodsDeliver",components:{},props:{},data:function(){return{types:[{type:"express",title:this.$t("发货"),key:1},{type:"send",title:this.$t("送货"),key:2},{type:"fictitious",title:this.$t("无需物流"),key:3}],expressType:[{title:this.$t("手动填写"),key:1},{title:this.$t("电子面单打印"),key:2}],curExpress:1,active:0,order_id:"",delivery:[],logistics:[],delivery_type:"1",delivery_name:"",delivery_id:"",seIndex:0,expIndex:0,expTemp:[],to_name:"",to_tel:"",to_addr:"",postPeople:[],postIndex:0,fictitious_content:""}},watch:{"$route.params.oid":function(e){var t=this;void 0!=e&&(t.order_id=e,t.getIndex())}},onLoad:function(e){this.order_id=e.id,this.getIndex(),this.getLogistics(),this.orderDeliveryInfo(),this.geTorderOrderDelivery()},methods:{scanCode:function(){var t=this;e.scanCode({scanType:["barCode"],success:function(e){t.delivery_id=e.result.replace("CODE_128,","")}})},previewImage:function(){e.previewImage({urls:[this.expTemp[this.expIndex].pic],success:function(){},fail:function(e){}})},geTorderOrderDelivery:function(){var e=this;(0,r.orderOrderDelivery)().then((function(t){e.postPeople=t.data}))},bindPostChange:function(e){this.postIndex=e.detail.value},changeExpTpe:function(e,t){this.curExpress=e.key,this.getLogistics(t||"")},changeType:function(e,t){this.active=t,this.delivery_type=e.key},getIndex:function(){var e=this;(0,r.getAdminOrderDelivery)(e.order_id).then((function(t){e.delivery=t.data}),(function(t){e.$util.Tips({title:t})}))},getLogistics:function(e){var t=this;(0,r.getLogistics)({status:e}).then((function(e){t.logistics=e.data,t.getExpTemp(e.data[0].code)}),(function(e){t.$util.Tips({title:e})}))},saveInfo:function(){var e=this;return l(n.default.mark((function t(){var i,r,s,o,l,u,c,a;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e,r=i.delivery_type,s=i.logistics[i.seIndex].name,o=i.delivery_id,i.delivery_name,l={},l.delivery_type=s,l.delivery_code=i.logistics[i.seIndex].code,l.delivery_name=i.logistics[i.seIndex].id,l.type=i.active+1,1!=r||1!=e.curExpress){t.next=11;break}if(o){t.next=8;break}return t.abrupt("return",e.$util.Tips({title:i.$t("填写快递单号")}));case 8:l.express_record_type=i.curExpress,l.delivery_id=o,i.setInfo(l);case 11:if(1!=r||2!=e.curExpress){t.next=28;break}if(i.to_name){t.next=14;break}return t.abrupt("return",e.$util.Tips({title:i.$t("填写寄件人姓名")}));case 14:if(i.to_tel){t.next=16;break}return t.abrupt("return",e.$util.Tips({title:i.$t("填写寄件人电话")}));case 16:if(/^1[3456789]\d{9}$/.test(i.to_tel)){t.next=18;break}return t.abrupt("return",e.$util.Tips({title:i.$t("填写寄件人电话")}));case 18:if(i.to_addr){t.next=20;break}return t.abrupt("return",e.$util.Tips({title:i.$t("填写寄件人地址")}));case 20:if(0!=i.expTemp.length){t.next=22;break}return t.abrupt("return",e.$util.Tips({title:i.$t("请选择电子面单")}));case 22:l.express_record_type=i.curExpress,l.to_name=i.to_name,l.to_tel=i.to_tel,l.to_addr=i.to_addr,l.express_temp_id=i.expTemp[i.expIndex].temp_id,i.setInfo(l);case 28:2==r&&(u=e.postPeople[e.postIndex],c={},c.type=i.delivery_type,c.sh_delivery_name=u.wx_name,c.sh_delivery_id=u.phone,c.sh_delivery_uid=u.uid,i.setInfo(c)),3==r&&(a={},a.type=i.delivery_type,a.fictitious_content=i.fictitious_content,i.setInfo(a));case 30:case"end":return t.stop()}}),t)})))()},setInfo:function(t){var i=this;(0,r.setAdminOrderDelivery)(i.delivery.id,t).then((function(t){i.$util.Tips({title:t.msg,icon:"success",mask:!0}),setTimeout((function(t){e.navigateBack()}),2e3)}),(function(e){i.$util.Tips({title:e})}))},bindPickerChange:function(e){this.seIndex=e.detail.value,this.getExpTemp(this.logistics[e.detail.value].code)},bindTempChange:function(e){this.expIndex=e.detail.value},getExpTemp:function(e){var t=this;(0,r.orderExportTemp)({com:e}).then((function(e){t.expTemp=e.data.data}))},orderDeliveryInfo:function(){var e=this;(0,r.orderDeliveryInfo)().then((function(t){e.to_name=t.data.to_name,e.to_tel=t.data.to_tel,e.to_addr=t.data.to_add}))}}};t.default=u}).call(this,i("543d")["default"])}},[["6985","common/runtime","common/vendor"]]]);