(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_cate/goods_cate1"],{"35b4":function(t,e,n){"use strict";n.r(e);var i=n("d4cb"),r=n("be53");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("c06d"),n("6ebf");var a,c=n("f0c5"),u=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"1bc8235f",null,!1,i["a"],a);e["default"]=u.exports},4955:function(t,e,n){},"6d33":function(t,e,n){},"6ebf":function(t,e,n){"use strict";var i=n("6d33"),r=n.n(i);r.a},be53:function(t,e,n){"use strict";n.r(e);var i=n("f001"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},c06d:function(t,e,n){"use strict";var i=n("4955"),r=n.n(i);r.a},d4cb:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={easyLoadimage:function(){return Promise.all([n.e("common/vendor"),n.e("components/easy-loadimage/easy-loadimage")]).then(n.bind(null,"e3c3"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("搜索商品名称")),i=t.__map(t.productList,(function(e,n){var i=t.__get_orig(e),r=t.$t(e.cate_name);return{$orig:i,m1:r}})),r=t.__map(t.productList,(function(e,n){var i=t.__get_orig(e),r=t.$t(e.cate_name),o=t.__map(e.children,(function(e,n){var i=t.__get_orig(e),r=t.$t(e.cate_name);return{$orig:i,m3:r}}));return{$orig:i,m2:r,l1:o}}));t.$mp.data=Object.assign({},{$root:{m0:n,l0:i,l2:r}})},o=[]},f001:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("768b"),r=n("26cb"),o=n("18f5");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=t.getSystemInfoSync().statusBarHeight+"px",l=function(){Promise.all([n.e("common/vendor"),n.e("components/pageFooter/index")]).then(function(){return resolve(n("fa6b"))}.bind(null,n)).catch(n.oe)},f=function(){Promise.all([n.e("common/vendor"),n.e("pages/index/visualization/components/tabBar")]).then(function(){return resolve(n("fd5d"))}.bind(null,n)).catch(n.oe)},g=(getApp(),{components:{pageFooter:l,tabBar:f},data:function(){return{navlist:[],productList:[],navActive:0,number:"",is_diy:t.getStorageSync("is_diy"),height:0,hightArr:[],toView:"",tabbarH:0,footH:0,windowHeight:0,newData:{},activeRouter:"",pageHeight:"100%",sysHeight:s,lock:!1}},computed:c({},(0,r.mapState)({cartNum:function(t){return t.indexData.cartNum}})),mounted:function(){var t=getCurrentPages(),e=t[t.length-1].route;this.activeRouter="/"+e,this.getAllCategory()},methods:{getNav:function(){var t=this;(0,o.getNavigation)().then((function(e){t.newData=e.data}))},goRouter:function(e){var n=getCurrentPages(),i=n[n.length-1].$page.fullPath;e.link!=i&&t.switchTab({url:e.link,fail:function(n){t.redirectTo({url:e.link})}})},footHeight:function(t){this.footH=t},infoScroll:function(){var e=this,n=e.productList.length;this.number=e.productList[n-1].children.length,t.getSystemInfo({success:function(t){e.height=t.windowHeight*(750/t.windowWidth)-98}});for(var i=[],r=0;r<n;r++){var o=t.createSelectorQuery().in(this),a="#b"+r;o.select(a).boundingClientRect(),o.exec((function(t){var n=t[0].top;i.push(n),e.hightArr=i}))}},tap:function(t,e){this.toView=e,this.navActive=t,this.$set(this,"lock",!0)},getAllCategory:function(){var t=this;(0,i.getCategoryList)().then((function(e){t.productList=e.data,t.$nextTick((function(e){t.infoScroll()}))}))},scroll:function(e){var n=e.detail.scrollTop,i=this.hightArr;if(this.lock)this.$set(this,"lock",!1);else{for(var r=0;r<i.length;r++)n>=0&&n<i[1]-i[0]?this.navActive=0:n>=i[r]-i[0]&&n<i[r+1]-i[0]?this.navActive=r:n>=i[i.length-1]-i[0]&&(this.navActive=i.length-1);t.$emit("scroll")}},searchSubmitValue:function(e){if(!(this.$util.trim(e.detail.value).length>0))return this.$util.Tips({title:this.$t("搜索商品名称")});t.navigateTo({url:"/pages/goods/goods_list/index?searchValue="+e.detail.value})}}});e.default=g}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/goods_cate/goods_cate1-create-component',
    {
        'pages/goods_cate/goods_cate1-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("35b4"))
        })
    },
    [['pages/goods_cate/goods_cate1-create-component']]
]);
