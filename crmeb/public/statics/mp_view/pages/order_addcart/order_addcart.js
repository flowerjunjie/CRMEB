(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_addcart/order_addcart"],{"0be7":function(t,e,i){"use strict";i.r(e);var a=i("acac"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"5df6":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.canShow?t.$t("100%正品保证"):null),a=t.canShow?t.$t("所有商品精挑细选"):null,n=t.canShow?t.$t("售后无忧"):null,r=t.canShow?t.$t("购物数量"):null,c=t.canShow&&(t.cartList.valid.length>0||t.cartList.invalid.length>0)&&t.footerswitch?t.$t("管理"):null,s=t.canShow&&(t.cartList.valid.length>0||t.cartList.invalid.length>0)&&!t.footerswitch?t.$t("取消"):null,o=t.canShow&&(t.cartList.valid.length>0||t.cartList.invalid.length>0)&&t.canShow?t.__map(t.cartList.valid,(function(e,i){var a=t.__get_orig(e),n=e.productInfo.attrInfo?t.$t("属性"):null,r=e.attrStatus?t.$t("￥"):null,c=e.attrStatus?null:t.$t("请重新选择商品规格"),s=e.attrStatus?null:t.$t("重选");return{$orig:a,m6:n,m7:r,m8:c,m9:s}})):null,u=t.canShow&&(t.cartList.valid.length>0||t.cartList.invalid.length>0)&&t.canShow&&t.cartList.invalid.length>0?t.$t("失效商品"):null,l=t.canShow&&(t.cartList.valid.length>0||t.cartList.invalid.length>0)&&t.canShow&&t.cartList.invalid.length>0?t.$t("清空"):null,h=t.$t("失效"),d=t.$t("该商品已失效"),f=t.canShow&&(t.cartList.valid.length>0||t.cartList.invalid.length>0)&&t.canShow&&t.cartList.invalid.length>0?t.__map(t.cartList.invalid,(function(e,i){var a=t.__get_orig(e),n=e.productInfo.attrInfo?t.$t("属性"):null;return{$orig:a,m13:n}})):null,g=t.canShow&&0==t.cartList.valid.length&&0==t.cartList.invalid.length&&t.canShow?t.$t("暂无商品"):null,v=t.canShow&&t.cartList.valid.length>0&&t.canShow?t.$t("全选"):null,m=t.canShow&&t.cartList.valid.length>0&&t.canShow&&1==t.footerswitch?t.$t("￥"):null,p=t.canShow&&t.cartList.valid.length>0&&t.canShow&&1==t.footerswitch?t.$t("立即下单"):null,S=t.canShow&&t.cartList.valid.length>0&&t.canShow&&1!=t.footerswitch?t.$t("收藏"):null,$=t.canShow&&t.cartList.valid.length>0&&t.canShow&&1!=t.footerswitch?t.$t("删除"):null;t.$mp.data=Object.assign({},{$root:{m0:i,m1:a,m2:n,m3:r,m4:c,m5:s,l0:o,m10:u,m11:l,m12:h,m14:d,l1:f,m15:g,m16:v,m17:m,m18:p,m19:S,m20:$}})},r=[]},"70f5":function(t,e,i){"use strict";i.r(e);var a=i("5df6"),n=i("0be7");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("e487");var c,s=i("f0c5"),o=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5153f3a0",null,!1,a["a"],c);e["default"]=o.exports},"8ae2":function(t,e,i){"use strict";(function(t){i("7b91");a(i("66fd"));var e=a(i("70f5"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},acac:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,n=h(i("a34a")),r=i("5ba0"),c=i("768b"),s=i("a368"),o=i("26cb"),u=h(i("9ad2")),l=i("168b");function h(t){return t&&t.__esModule?t:{default:t}}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function f(t,e,i,a,n,r,c){try{var s=t[r](c),o=s.value}catch(u){return void i(u)}s.done?e(o):Promise.resolve(o).then(a,n)}function g(t){return function(){var e=this,i=arguments;return new Promise((function(a,n){var r=t.apply(e,i);function c(t){f(r,a,n,c,s,"next",t)}function s(t){f(r,a,n,c,s,"throw",t)}c(void 0)}))}}var v=0,m=function(){Promise.all([i.e("common/vendor"),i.e("pages/index/visualization/components/tabBar")]).then(function(){return resolve(i("fd5d"))}.bind(null,i)).catch(i.oe)},p=function(){Promise.all([i.e("common/vendor"),i.e("components/recommend/index")]).then(function(){return resolve(i("ef32"))}.bind(null,i)).catch(i.oe)},S=function(){i.e("components/productWindow/index").then(function(){return resolve(i("f9f0"))}.bind(null,i)).catch(i.oe)},$=function(){i.e("components/Authorize").then(function(){return resolve(i("cacf"))}.bind(null,i)).catch(i.oe)},w=function(){Promise.all([i.e("common/vendor"),i.e("components/pageFooter/index")]).then(function(){return resolve(i("fa6b"))}.bind(null,i)).catch(i.oe)},_={components:{pageFooter:w,recommend:p,productWindow:S,tabBar:m,authorize:$},mixins:[u.default],data:function(){return{imgHost:l.HTTP_REQUEST_URL,is_diy:t.getStorageSync("is_diy"),canShow:!1,cartCount:0,goodsHidden:!0,footerswitch:!0,hostProduct:[],cartList:{valid:[],invalid:[]},isAllSelect:!1,selectValue:[],selectCountPrice:0,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,loading:!1,loadend:!1,loadTitle:this.$t("我也是有底线的"),page:1,limit:20,loadingInvalid:!1,loadendInvalid:!1,loadTitleInvalid:this.$t("加载更多"),pageInvalid:1,limitInvalid:20,attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],storeInfo:{},attrValue:"",attrTxt:this.$t("请选择"),cartId:0,product_id:0,sysHeight:v,newData:{},activeRouter:"",is_diy_set:!1}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(e){t.hideTabBar();var i=this;0==i.isLogin&&(0,s.toLogin)();var a=getCurrentPages(),n=a[a.length-1].route;this.activeRouter="/"+n},onShow:function(){this.canShow=!1,1==this.isLogin&&(this.hotPage=1,this.hostProduct=[],this.hotScroll=!1,this.getHostProduct(),this.loadend=!1,this.page=1,this.cartList.valid=[],this.getCartList(),this.loadendInvalid=!1,this.pageInvalid=1,this.cartList.invalid=[],this.getInvalidList(),this.getCartNum(),this.goodsHidden=!0,this.footerswitch=!0,this.hostProduct=[],this.hotScroll=!1,this.hotPage=1,this.hotLimit=10,this.cartList={valid:[],invalid:[]},this.isAllSelect=!1,this.selectValue=[],this.selectCountPrice=0,this.cartCount=0,this.isShowAuth=!1)},methods:(a={authColse:function(t){this.isShowAuth=t},reGoCat:function(){var t=this,e=t.productValue[this.attrValue];if(t.attr.productAttr.length&&void 0===e)return t.$util.Tips({title:t.$t("产品库存不足，请选择其它")});var i={id:t.cartId,product_id:t.product_id,num:t.attr.productSelect.cart_num,unique:void 0!==t.attr.productSelect?t.attr.productSelect.unique:""};(0,r.getResetCart)(i).then((function(e){t.attr.cartAttr=!1,t.$util.Tips({title:t.$t("添加购物车成功"),success:function(){t.loadend=!1,t.page=1,t.cartList.valid=[],t.getCartList(),t.getCartNum()}})})).catch((function(e){return t.$util.Tips({title:e.msg})}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},reElection:function(t){this.getGoodsDetails(t)},getGoodsDetails:function(e){t.showLoading({title:this.$t("加载中"),mask:!0});var i=this;i.cartId=e.id,i.product_id=e.product_id,(0,c.getProductDetail)(e.product_id).then((function(e){t.hideLoading(),i.attr.cartAttr=!0;var a=e.data.storeInfo;i.$set(i,"storeInfo",a),i.$set(i.attr,"productAttr",e.data.productAttr),i.$set(i,"productValue",e.data.productValue),i.DefaultSelect()})).catch((function(e){t.hideLoading()}))},ChangeAttr:function(t){var e=this.productValue[t];e&&e.stock>0?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"stock",e.stock),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",t),this.$set(this,"attrTxt",this.$t("已选择"))):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择")))},DefaultSelect:function(){var t=this.attr.productAttr,e=[];for(var i in this.productValue)if(this.productValue[i].stock>0){e=this.attr.productAttr.length?i.split(","):[];break}for(var a=0;a<t.length;a++)this.$set(t[a],"index",e[a]);var n=this.productValue[e.sort().join(",")];n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",n.image),this.$set(this.attr.productSelect,"price",n.price),this.$set(this.attr.productSelect,"stock",n.stock),this.$set(this.attr.productSelect,"unique",n.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",e.sort().join(",")),this.$set(this,"attrTxt",this.$t("已选择"))):!n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择"))):n||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择")))},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var i=e.stock||0,a=this.attr.productSelect;t?(a.cart_num++,a.cart_num>i&&(this.$set(this.attr.productSelect,"cart_num",i||1),this.$set(this,"cart_num",i||1))):(a.cart_num--,a.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},subDel:function(t){var e=this,i=e.selectValue;if(!(i.length>0))return e.$util.Tips({title:e.$t("请选择产品")});(0,r.cartDel)(i).then((function(t){e.loadend=!1,e.page=1,e.cartList.valid=[],e.getCartList(),e.getCartNum()}))},getSelectValueProductId:function(){var t=this,e=t.cartList.valid,i=t.selectValue,a=[];if(i.length>0)for(var n in e)t.inArray(e[n].id,i)&&a.push(e[n].product_id);return a},subCollect:function(t){var e=this,i=e.selectValue;if(!(i.length>0))return e.$util.Tips({title:e.$t("请选择产品")});e.getSelectValueProductId();(0,c.collectAll)(e.getSelectValueProductId().join(",")).then((function(t){return e.$util.Tips({title:t.msg,icon:"success"})})).catch((function(t){return e.$util.Tips({title:t})}))},subOrder:function(e){var i=this,a=i.selectValue;if(!(a.length>0))return i.$util.Tips({title:i.$t("请选择产品")});t.navigateTo({url:"/pages/goods/order_confirm/index?cartId="+a.join(",")})},checkboxAllChange:function(t){var e=t.detail.value;e.length>0?this.setAllSelectValue(1):this.setAllSelectValue(0)},setAllSelectValue:function(t){var e=this,i=[],a=e.cartList.valid;if(a.length>0){var n=a.map((function(a){return t?(e.footerswitch?a.attrStatus?(a.checked=!0,i.push(a.id)):a.checked=!1:(a.checked=!0,i.push(a.id)),e.isAllSelect=!0):(a.checked=!1,e.isAllSelect=!1),a}));e.$set(e.cartList,"valid",n),e.selectValue=i,e.switchSelect()}},checkboxChange:function(t){var e=this,i=t.detail.value,a=e.cartList.valid,n=[],r=[],c=[],s=a.map((function(t){return e.inArray(t.id,i)?e.footerswitch?t.attrStatus?(t.checked=!0,n.push(t)):t.checked=!1:(t.checked=!0,n.push(t)):(t.checked=!1,r.push(t)),t}));e.footerswitch&&(c=r.filter((function(t){return!t.attrStatus}))),e.$set(e.cartList,"valid",s),e.isAllSelect=s.length===n.length+c.length,e.selectValue=i,e.switchSelect()},inArray:function(t,e){for(var i in e)if(e[i]==t)return!0;return!1},switchSelect:function(){var t=this,e=t.cartList.valid,i=t.selectValue,a=0;if(i.length<1)t.selectCountPrice=a;else{for(var n in e)t.inArray(e[n].id,i)&&(a=t.$util.$h.Add(a,t.$util.$h.Mul(e[n].cart_num,e[n].truePrice)));t.selectCountPrice=a}}},d(a,"iptCartNum",(function(t){var e=this.cartList.valid[t];e.cart_num&&this.setCartNum(e.id,e.cart_num),this.switchSelect()})),d(a,"blurInput",(function(t){var e=this.cartList.valid[t];e.cart_num||(e.cart_num=1,this.$set(this.cartList,"valid",this.cartList.valid))})),d(a,"subCart",(function(t){var e=this,i=!1,a=e.cartList.valid[t];a.cart_num=Number(a.cart_num)-1,a.cart_num<1&&(i=!0),a.cart_num<=1?(a.cart_num=1,a.numSub=!0):(a.numSub=!1,a.numAdd=!1),0==i&&e.setCartNum(a.id,a.cart_num,(function(i){e.cartList.valid[t]=a,e.getCartNum(),e.switchSelect()}))})),d(a,"addCart",(function(t){var e=this,i=e.cartList.valid[t];i.cart_num=Number(i.cart_num)+1;var a=i.productInfo;a.hasOwnProperty("attrInfo")&&i.cart_num>=i.productInfo.attrInfo.stock?(i.cart_num=i.productInfo.attrInfo.stock,i.numAdd=!0,i.numSub=!1):(i.numAdd=!1,i.numSub=!1),e.setCartNum(i.id,i.cart_num,(function(a){e.cartList.valid[t]=i,e.getCartNum(),e.switchSelect()}))})),d(a,"setCartNum",(function(t,e,i){var a=this;(0,r.changeCartNum)(t,e).then((function(t){i&&i(t.data)})).catch((function(t){return a.$util.Tips({title:t})}))})),d(a,"getCartNum",(function(){var t=this,e=this;(0,r.getCartCounts)().then((function(i){e.cartCount=i.data.count,t.$store.commit("indexData/setCartNum",i.data.count>99?"..":i.data.count),i.data.count>0?wx.setTabBarBadge({index:2,text:i.data.count+""}):wx.hideTabBarRedDot({index:2})}))})),d(a,"getCartData",(function(t){var e=this;return new Promise((function(i,a){(0,r.getCartList)(t).then((function(t){i(t.data)})).catch((function(t){e.loading=!1,e.canShow=!0,e.$util.Tips({title:t})}))}))})),d(a,"getCartList",(function(){var e=this;return g(n.default.mark((function i(){var a,c;return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:t.showLoading({title:e.$t("加载中"),mask:!0}),a=e,c={page:a.page,limit:a.limit,status:1},(0,r.getCartCounts)().then(function(){var i=g(n.default.mark((function i(r){var s,o,u,l,h,d,f,g;return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a.cartCount=r.data.count,s=0;case 2:if(!(s<Math.ceil(r.data.ids.length/a.limit))){i.next=20;break}return i.next=5,e.getCartData(c);case 5:if(o=i.sent,u=o.valid,l=a.$util.SplitArray(u,a.cartList.valid),[{numSub:!0},{numSub:!1}],[{numAdd:!0},{numAdd:!1}],h=[],l.length>0)for(d in l)1==l[d].cart_num?l[d].numSub=!0:l[d].numSub=!1,f=l[d].productInfo,f.hasOwnProperty("attrInfo")&&l[d].cart_num==l[d].productInfo.attrInfo.stock||l[d].cart_num==l[d].productInfo.stock?l[d].numAdd=!0:l[d].numAdd=!1,l[d].attrStatus?(l[d].checked=!0,h.push(l[d].id)):l[d].checked=!1;a.$set(a.cartList,"valid",l),c.page=a.page+1,a.selectValue=h,g=l.filter((function(t){return t.attrStatus})),a.isAllSelect=g.length==h.length&&g.length,a.switchSelect();case 17:s++,i.next=2;break;case 20:a.loading=!1,e.canShow=!0,t.hideLoading();case 23:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}());case 4:case"end":return i.stop()}}),i)})))()})),d(a,"getInvalidList",(function(){var t=this;if(this.loadendInvalid)return!1;if(this.loadingInvalid)return!1;var e={page:t.pageInvalid,limit:t.limitInvalid,status:0};(0,r.getCartList)(e).then((function(e){var i=e.data,a=i.invalid,n=a.length<t.limitInvalid,r=t.$util.SplitArray(a,t.cartList.invalid);t.$set(t.cartList,"invalid",r),t.loadendInvalid=n,t.loadTitleInvalid=n?t.$t("我也是有底线的"):t.$t("加载更多"),t.pageInvalid=t.pageInvalid+1,t.loadingInvalid=!1})).catch((function(e){t.loadingInvalid=!1,t.loadTitleInvalid=t.$t("加载更多")}))})),d(a,"getHostProduct",(function(){var t=this;t.hotScroll||(0,c.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))})),d(a,"goodsOpen",(function(){var t=this;t.goodsHidden=!t.goodsHidden})),d(a,"goRouter",(function(e){var i=getCurrentPages(),a=i[i.length-1].$page.fullPath;e.link!=a&&t.switchTab({url:e.link,fail:function(i){t.redirectTo({url:e.link})}})})),d(a,"manage",(function(){var t=this;t.footerswitch=!t.footerswitch;var e=[],i=[],a=t.cartList.valid.map((function(a){return t.footerswitch?a.attrStatus?a.checked&&e.push(a.id):(a.checked=!1,i.push(a)):a.checked&&e.push(a.id),a}));t.cartList.valid=a,t.footerswitch?t.isAllSelect=a.length===e.length+i.length:t.isAllSelect=a.length===e.length,t.selectValue=e,t.switchSelect()})),d(a,"unsetCart",(function(){for(var t=this,e=[],i=0,a=t.cartList.invalid.length;i<a;i++)e.push(t.cartList.invalid[i].id);(0,r.cartDel)(e).then((function(e){t.$util.Tips({title:t.$t("清除成功")}),t.$set(t.cartList,"invalid",[]),t.getCartNum()})).catch((function(t){}))})),a),onReachBottom:function(){var t=this;t.loadend&&t.getInvalidList(),0==t.cartList.valid.length&&0==t.cartList.invalid.length&&t.getHostProduct()},onPageScroll:function(e){t.$emit("scroll")}};e.default=_}).call(this,i("543d")["default"])},cb7a:function(t,e,i){},e487:function(t,e,i){"use strict";var a=i("cb7a"),n=i.n(a);n.a}},[["8ae2","common/runtime","common/vendor"]]]);