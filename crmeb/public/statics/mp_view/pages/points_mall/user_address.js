require('./common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/user_address"],{"0585":function(t,e,i){},"1e12":function(t,e,i){"use strict";i.r(e);var s=i("c987"),n=i.n(s);for(var d in s)"default"!==d&&function(t){i.d(e,t,(function(){return s[t]}))}(d);e["default"]=n.a},"4f74":function(t,e,i){"use strict";i.r(e);var s=i("e1bb"),n=i("1e12");for(var d in n)"default"!==d&&function(t){i.d(e,t,(function(){return n[t]}))}(d);i("558e");var o,u=i("f0c5"),a=Object(u["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],o);e["default"]=a.exports},"558e":function(t,e,i){"use strict";var s=i("0585"),n=i.n(s);n.a},"85c7":function(t,e,i){"use strict";(function(t){i("7b91");s(i("66fd"));var e=s(i("4f74"));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},c987:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("816a"),n=i("a368"),d=i("26cb"),o=a(i("9ad2")),u=i("168b");function a(t){return t&&t.__esModule?t:{default:t}}var r=function(){i.e("components/Authorize").then(function(){return resolve(i("cacf"))}.bind(null,i)).catch(i.oe)},c=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("a25b"))}.bind(null,i)).catch(i.oe)},l={components:{authorize:r,home:c},mixins:[o.default],data:function(){return{imgHost:u.HTTP_REQUEST_URL,addressList:[],loading:!1,loadend:!1,loadTitle:this.$t("加载更多"),page:1,limit:20,isAuto:!1,isShowAuth:!1,news:"",unique:"",num:""}},computed:(0,d.mapGetters)(["isLogin"]),onLoad:function(t){this.unique=t.unique,this.num=t.num,this.isLogin?(this.cartId=t.cartId||"",this.pinkId=t.pinkId||0,this.couponId=t.couponId||0,this.news=t.news||0,this.getAddressList(!0)):(0,n.toLogin)()},onShow:function(){var t=this;t.getAddressList(!0)},methods:{onLoadFun:function(){this.getAddressList()},authColse:function(t){this.isShowAuth=t},getWxAddress:function(){var e=this;t.authorize({scope:"scope.address",success:function(i){t.chooseAddress({success:function(t){var i={};i.province=t.provinceName,i.city=t.cityName,i.district=t.countyName,(0,s.editAddress)({address:i,is_default:1,real_name:t.userName,post_code:t.postalCode,phone:t.telNumber,detail:t.detailInfo,id:0,type:1}).then((function(t){e.$util.Tips({title:e.$t("添加成功"),icon:"success"},(function(){e.getAddressList(!0)}))})).catch((function(t){return e.$util.Tips({title:t})}))},fail:function(t){if("chooseAddress:cancel"==t.errMsg)return e.$util.Tips({title:e.$t("取消选择")})}})},fail:function(i){t.showModal({title:this.$t("您已拒绝导入微信地址权限"),content:this.$t("是否进入权限管理，调整授权？"),success:function(i){if(i.confirm)t.openSetting({success:function(t){}});else if(i.cancel)return e.$util.Tips({title:e.$t("已取消")})}})}})},getAddress:function(){var t=this;t.$wechat.openAddress().then((function(e){(0,s.editAddress)({real_name:e.userName,phone:e.telNumber,address:{province:e.provinceName,city:e.cityName,district:e.countryName},detail:e.detailInfo,post_code:e.postalCode,is_default:1,type:1}).then((function(){t.$util.Tips({title:t.$t("添加成功"),icon:"success"},(function(){t.getAddressList(!0)}))})).catch((function(e){return t.$util.Tips({title:e||t.$t("添加失败")})}))}))},getAddressList:function(t){var e=this;t&&(e.loadend=!1,e.page=1,e.$set(e,"addressList",[])),e.loading||e.loadend||(e.loading=!0,e.loadTitle="",(0,s.getAddressList)({page:e.page,limit:e.limit}).then((function(t){var i=t.data,s=i.length<e.limit;e.addressList=e.$util.SplitArray(i,e.addressList),e.$set(e,"addressList",e.addressList),e.loadend=s,e.loadTitle=s?e.$t("我也是有底线的"):e.$t("加载更多"),e.page=e.page+1,e.loading=!1})).catch((function(t){e.loading=!1,e.loadTitle=e.$t("加载更多")})))},radioChange:function(t){var e=parseInt(t.detail.value),i=this,n=this.addressList[e];if(void 0==n)return i.$util.Tips({title:i.$t("您设置的默认地址不存在!")});(0,s.setAddressDefault)(n.id).then((function(t){for(var s=0,n=i.addressList.length;s<n;s++)i.addressList[s].is_default=s==e;i.$util.Tips({title:i.$t("设置成功"),icon:"success"},(function(){i.$set(i,"addressList",i.addressList)}))})).catch((function(t){return i.$util.Tips({title:t})}))},editAddress:function(e){this.cartId;var i=this.pinkId,s=this.couponId;this.cartId="",this.pinkId="",this.couponId="",t.navigateTo({url:"/pages/users/user_address/index?id="+e+"&pinkId="+i+"&couponId="+s+"&new="+this.news})},delAddress:function(t){var e=this,i=this.addressList[t];if(void 0==i)return e.$util.Tips({title:e.$t("您删除的地址不存在!")});(0,s.delAddress)(i.id).then((function(i){e.$util.Tips({title:e.$t("删除成功"),icon:"success"},(function(){e.addressList.splice(t,1),e.$set(e,"addressList",e.addressList)}))})).catch((function(t){return e.$util.Tips({title:t})}))},addAddress:function(){t.navigateTo({url:"/pages/users/user_address/index?&new="+this.news})},goOrder:function(e){e&&t.redirectTo({url:"/pages/points_mall/integral_order?is_address=1&new="+this.news+"&addressId="+e+"&num="+this.num+"&unique="+this.unique})}},onReachBottom:function(){this.getAddressList()}};e.default=l}).call(this,i("543d")["default"])},e1bb:function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return d})),i.d(e,"a",(function(){return s}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$t("收货人")),s=t.$t("收货地址"),n=t.$t("设为默认"),d=t.$t("编辑"),o=t.$t("删除"),u=t.$t("添加新地址"),a=t.$t("导入微信地址");t.$mp.data=Object.assign({},{$root:{m0:i,m1:s,m2:n,m3:d,m4:o,m5:u,m6:a}})},d=[]}},[["85c7","common/runtime","common/vendor"]]]);