(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/pageFooter/index"],{"0014":function(t,e,n){"use strict";n.r(e);var a=n("051d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"051d":function(t,e,n){"use strict";(function(t){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=a(n("9523")),u=n("26cb"),r=n("4e39"),c=n("39ed"),s=(i={name:"pageFooter",props:{status:{type:Number|String,default:1},countNum:{type:Number|String,default:0},isSpe:{type:Number,default:0},dataConfig:{type:Object,default:function(){}}},data:function(){return{newData:void 0,footHeight:0,isShow:!1}},computed:{}},(0,o.default)(i,"computed",(0,u.mapGetters)(["isLogin","cartNum","activityTab"])),(0,o.default)(i,"watch",{activityTab:{handler:function(t,e){},deep:!0},configData:{handler:function(e,n){var a=this,i=t.createSelectorQuery().in(this);this.newData=e,this.$nextTick((function(){i.select("#target").boundingClientRect((function(e){t.$emit("footHeight",e.height),e&&(a.footHeight=e.height+50)})).exec()}))},deep:!0}}),(0,o.default)(i,"created",(function(){var e=this,n=getCurrentPages(),a=n[n.length-1].route;this.$store.commit("ACTIVITYTAB","/"+a),t.$on("uploadFooter",(function(){var t=getCurrentPages(),n=t[t.length-1].route;e.$store.commit("ACTIVITYTAB","/"+n)}))})),(0,o.default)(i,"onShow",(function(){})),(0,o.default)(i,"mounted",(function(){var e=this;if(this.isSpe)this.newData=this.dataConfig;else{(0,r.getNavigation)().then((function(n){t.setStorageSync("pageFoot",n.data),e.$store.commit("FOOT_UPLOAD",n.data),e.newData=n.data}));t.hideTabBar(),this.newData=this.$store.state.app.pageFooter,this.isLogin&&this.getCartNum()}})),(0,o.default)(i,"onHide",(function(){t.$off(["uploadFooter"])})),(0,o.default)(i,"methods",{goRouter:function(e){var n=getCurrentPages(),a=n[n.length-1].route;this.$store.commit("ACTIVITYTAB",e.link),e.link!="/"+a&&t.switchTab({url:e.link,fail:function(n){t.redirectTo({url:e.link})}})},getCartNum:function(){var t=this,e=this;(0,c.getCartCounts)().then((function(n){e.cartCount=n.data.count,t.$store.commit("indexData/setCartNum",n.data.count>99?"...":n.data.count)}))}}),i);e.default=s}).call(this,n("543d")["default"])},"4c21":function(t,e,n){"use strict";var a=n("8be6d"),i=n.n(a);i.a},"605d":function(t,e,n){"use strict";n.r(e);var a=n("735d"),i=n("0014");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("4c21");var u=n("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"0694180a",null,!1,a["a"],void 0);e["default"]=r.exports},"735d":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.newData&&(t.isSpe&&t.newData.status.status||!t.isSpe)?t.__map(t.newData.menuList,(function(e,n){var a=t.__get_orig(e),i=e.link==t.activityTab?t.$t(e.name):null,o=e.link!=t.activityTab?t.$t(e.name):null;return{$orig:a,m0:i,m1:o}})):null);t.$mp.data=Object.assign({},{$root:{l0:n}})},i=[]},"8be6d":function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/pageFooter/index-create-component',
    {
        'components/pageFooter/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("605d"))
        })
    },
    [['components/pageFooter/index-create-component']]
]);
