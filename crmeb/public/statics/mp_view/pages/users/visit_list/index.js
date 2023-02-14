require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/visit_list/index"],{"092e":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=e("768b"),n=e("26cb"),o=e("a368"),c=h(e("9ad2")),l=e("168b");function h(t){return t&&t.__esModule?t:{default:t}}var a=function(){Promise.all([e.e("common/vendor"),e.e("components/recommend/index")]).then(function(){return resolve(e("ef32"))}.bind(null,e)).catch(e.oe)},u=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("a25b"))}.bind(null,e)).catch(e.oe)},d={components:{recommend:a,home:u},mixins:[c.default],data:function(){return{isShowChecked:0,count:0,times:[],isAllSelect:!1,hostProduct:[],loadTitle:this.$t("加载更多"),loading:!1,loadend:!1,visitList:[],limit:21,page:1,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,isItemAll:[],imgHost:l.HTTP_REQUEST_URL}},computed:(0,n.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?(this.loadend=!1,this.page=1,this.visitList=[],this.get_user_visit_list(),this.get_host_product()):(0,o.toLogin)()},onShow:function(){t.removeStorageSync("form_type_cart"),this.times=[],this.loadend=!1,this.page=1,this.visitList=[],this.get_user_visit_list()},methods:{goDetails:function(i){if(this.isShowChecked||!i.is_show)return!1;t.navigateTo({url:"/pages/goods_details/index?id="+i.product_id})},switchTap:function(){this.isShowChecked=!this.isShowChecked},collect:function(){var t=this,i=[];if(this.visitList.forEach((function(t){t.picList.forEach((function(t){t.checked&&i.push(t.product_id)}))})),!i.length)return this.$util.Tips({title:"请选择收藏商品"});var e=i.join(",");(0,s.collectAll)(e).then((function(i){return t.$util.Tips({title:i.msg})}))},del:function(){var t=this,i=[];if(this.visitList.forEach((function(t){t.picList.forEach((function(t){t.checked&&i.push(t.product_id)}))})),!i.length)return this.$util.Tips({title:"请选择删除商品"});(0,s.deleteVisitList)({ids:i}).then((function(i){return t.times=[],t.loadend=!1,t.page=1,t.$set(t,"visitList",[]),t.get_user_visit_list(),t.$util.Tips({title:i.msg})}))},picCheckbox:function(t,i){var e=this,s=t.detail.value;e.visitList[i].picList.forEach((function(t){-1!==s.indexOf(t.id+"")?t.checked=!0:t.checked=!1})),e.visitList[i].picList.length==s.length?e.visitList[i].checked=!0:e.visitList[i].checked=!1;var n=[];e.visitList.forEach((function(t){t.checked?n.push(t.time):-1!==n.indexOf(t.time)&&n.remove(t.time)})),n.length==e.visitList.length?e.isAllSelect=!0:e.isAllSelect=!1},checkboxChange:function(t){var i=this,e=t.detail.value;i.isItemAll=e,i.visitList.forEach((function(t,i){-1!==e.indexOf(t.time)?t.checked=!0:t.checked=!1,t.picList.forEach((function(i){t.checked?i.checked=!0:i.checked=!1}))})),e.length===i.visitList.length?i.isAllSelect=!0:i.isAllSelect=!1},forGoods:function(t){var i=this;i.visitList.length&&i.visitList.forEach((function(i){i.checked=!!t,i.picList.forEach((function(i){i.checked=!!t}))}))},checkboxAllChange:function(t){var i=t.detail.value;i.length?(this.isAllSelect=!0,this.forGoods(1)):(this.isAllSelect=!1,this.forGoods(0))},authColse:function(t){this.isShowAuth=t},get_user_visit_list:function(){var t=this,i=this;this.loading||this.loadend||(i.loading=!0,i.loadTitle="",(0,s.getVisitList)({page:i.page,limit:i.limit}).then((function(e){t.count=e.data.count;for(var s=0;s<e.data.time.length;s++)-1==t.times.indexOf(e.data.time[s])&&(t.times.push(e.data.time[s]),t.visitList.push({time:e.data.time[s],picList:[]}));for(var n=0;n<t.times.length;n++){t.visitList[n].checked=!!t.isAllSelect;for(var o=0;o<e.data.list.length;o++)t.times[n]===e.data.list[o].time_key&&(t.isAllSelect?e.data.list[o].checked=!0:e.data.list[o].checked=!1,t.visitList[n].picList.push(e.data.list[o]))}var c=e.data.list.length<i.limit;i.loadend=c,i.loadTitle=c?i.$t("没有更多内容啦~"):i.$t("加载更多"),i.page=i.page+1,i.loading=!1})).catch((function(t){i.loading=!1,i.loadTitle=i.$t("加载更多")})))},get_host_product:function(){var t=this;t.hotScroll||(0,s.getProductHot)(t.hotPage,t.hotLimit).then((function(i){t.hotPage++,t.hotScroll=i.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(i.data)}))}},onReachBottom:function(){this.visitList.length?this.get_user_visit_list():this.get_host_product()},onPageScroll:function(i){t.$emit("scroll")}};i.default=d}).call(this,e("543d")["default"])},"124d":function(t,i,e){"use strict";e.r(i);var s=e("092e"),n=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(i,t,(function(){return s[t]}))}(o);i["default"]=n.a},"582c":function(t,i,e){"use strict";(function(t){e("7b91");s(e("66fd"));var i=s(e("9746"));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])},8173:function(t,i,e){"use strict";var s;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return s}));var n=function(){var t=this,i=t.$createElement,e=(t._self._c,t.visitList.length?t.$t("共"):null),s=t.visitList.length?t.$t("件商品"):null,n=t.visitList.length&&!t.isShowChecked?t.$t("管理"):null,o=t.visitList.length&&t.isShowChecked?t.$t("取消"):null,c=t.visitList.length?t.__map(t.visitList,(function(i,e){var s=t.__get_orig(i),n=t.__map(i.picList,(function(i,e){var s=t.__get_orig(i),n=t.isShowChecked?i.id.toString():null,o=!t.isShowChecked&&i.stock<=0?t.$t("已售罄"):null,c=t.isShowChecked||i.is_show?null:t.$t("已下架");return{$orig:s,g0:n,m4:o,m5:c}}));return{$orig:s,l0:n}})):null,l=t.visitList.length&&t.isShowChecked?t.$t("全选"):null,h=t.visitList.length&&t.isShowChecked?t.$t("收藏"):null,a=t.visitList.length&&t.isShowChecked?t.$t("删除"):null,u=t.visitList.length||t.visitList.length||2!=t.page?null:t.$t("暂无数据");t.$mp.data=Object.assign({},{$root:{m0:e,m1:s,m2:n,m3:o,l1:c,m6:l,m7:h,m8:a,m9:u}})},o=[]},9746:function(t,i,e){"use strict";e.r(i);var s=e("8173"),n=e("124d");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("e0d7");var c,l=e("f0c5"),h=Object(l["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],c);i["default"]=h.exports},ce5c:function(t,i,e){},e0d7:function(t,i,e){"use strict";var s=e("ce5c"),n=e.n(s);n.a}},[["582c","common/runtime","common/vendor"]]]);