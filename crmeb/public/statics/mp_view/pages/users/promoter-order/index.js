require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/promoter-order/index"],{"03bf":function(t,e,n){"use strict";n.r(e);var r=n("8399"),o=n("69ed");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("1174");var a,u=n("f0c5"),l=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"0a2e9e9b",null,!1,r["a"],a);e["default"]=l.exports},1174:function(t,e,n){"use strict";var r=n("aa79"),o=n.n(r);o.a},"2da9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("816a"),o=n("a368"),i=n("26cb"),a=u(n("9ad2"));function u(t){return t&&t.__esModule?t:{default:t}}var l=function(){n.e("components/Authorize").then(function(){return resolve(n("cacf"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/emptyPage").then(function(){return resolve(n("d173"))}.bind(null,n)).catch(n.oe)},d=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("a25b"))}.bind(null,n)).catch(n.oe)},s={components:{authorize:l,emptyPage:c,home:d},mixins:[a.default],data:function(){return{page:1,limit:5,status:!1,recordList:[],times:[],recordCount:0,count:0,orderType:0,isAuto:!1,isShowAuth:!1}},computed:(0,i.mapGetters)(["isLogin"]),onLoad:function(t){this.isLogin?(this.orderType=t.type||0,this.getRecordOrderList(t.type)):(0,o.toLogin)()},methods:{open:function(t){t.open=!t.open},onLoadFun:function(){this.getRecordOrderList()},authColse:function(t){this.isShowAuth=t},getRecordOrderList:function(){var e,n=this,o=this,i=o.page,a=o.limit,u=o.status;1!=u&&(this.orderType?(e=r.divisionOrder,t.setNavigationBarTitle({title:o.$t("推广订单列表")})):e=r.spreadOrder,e({page:i,limit:a}).then((function(t){for(var e=0;e<t.data.time.length;e++)n.times.includes(t.data.time[e].time)||(n.times.push(t.data.time[e].time),n.recordList.push({time:t.data.time[e].time,count:t.data.time[e].count,child:[]}));for(var r=0;r<n.times.length;r++)for(var i=0;i<t.data.list.length;i++)n.times[r]===t.data.list[i].time_key&&(t.data.list[i].open=!1,n.recordList[r].child.push(t.data.list[i]));o.count=t.data.count||0,o.status=t.data.list.length<5,o.page+=1})))}},onReachBottom:function(){this.getRecordOrderList()}};e.default=s}).call(this,n("543d")["default"])},"69ed":function(t,e,n){"use strict";n.r(e);var r=n("2da9"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},8399:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("累积推广订单")),r=t.$t("单"),o=t.$t("本月累计推广订单"),i=t.$t("单"),a=t.recordList.length>0?t.__map(t.recordList,(function(e,n){var r=t.__get_orig(e),o=t.$t("订单编号"),i=t.__map(e.child,(function(e,n){var r=t.__get_orig(e),o="brokerage"==e.type?t.$t("返佣"):null,i="brokerage"==e.type?t.$t("￥"):null,a="brokerage"!=e.type?t.$t("暂未返佣"):null,u="brokerage"!=e.type?t.$t("￥"):null,l="brokerage"==e.type?t.$t("返佣时间"):null,c="brokerage"!=e.type?t.$t("下单时间"):null,d=e.children&&e.children.length&&e.open?t.$t("收起"):null,s=e.children&&e.children.length&&!e.open?t.$t("更多"):null,m=t.$t("单号"),f=e.open?t.__map(e.children,(function(e,n){var r=t.__get_orig(e),o="brokerage"==e.type?t.$t("返佣"):null,i="brokerage"==e.type?t.$t("￥"):null,a="brokerage"!=e.type?t.$t("暂未返佣"):null,u="brokerage"!=e.type?t.$t("￥"):null;return{$orig:r,m14:o,m15:i,m16:a,m17:u}})):null;return{$orig:r,m4:o,m5:i,m6:a,m7:u,m9:l,m10:c,m11:d,m12:s,m13:m,l0:f}}));return{$orig:r,m8:o,l1:i}})):null,u=0==t.recordList.length?t.$t("暂无推广订单～"):null;t.$mp.data=Object.assign({},{$root:{m0:n,m1:r,m2:o,m3:i,l2:a,m18:u}})},i=[]},a509:function(t,e,n){"use strict";(function(t){n("7b91");r(n("66fd"));var e=r(n("03bf"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},aa79:function(t,e,n){}},[["a509","common/runtime","common/vendor"]]]);