(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-80a89046"],{"0ad7":function(t,e,a){"use strict";a("295f")},"295f":function(t,e,a){},8404:function(t,e,a){"use strict";a.r(e),a("b0c0");var i=a("5530"),s=(a("a434"),a("2f62")),n=a("90e7");i={name:"setting_staff",components:{},computed:Object(i.a)(Object(i.a)(Object(i.a)({},Object(s.d)("media",["isMobile"])),Object(s.d)("userLevel",["categoryId"])),{},{labelWidth:function(){return this.isMobile?void 0:"90px"},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){return{grid:{xl:10,lg:10,md:12,sm:24,xs:24},artFrom:{page:1,limit:15,store_id:""},loading:!1,storeLists:[],storeSelectList:[],total:0}},mounted:function(){this.getList(),this.storeList()},methods:{storeList:function(){var t=this;Object(n.W)().then((function(e){t.storeSelectList=e.data}))},getList:function(){var t=this,e=this;e.loading=!0,Object(n.Lb)(e.artFrom).then((function(t){e.loading=!1,e.storeLists=t.data.list,e.total=t.data.count})).catch((function(e){t.$message.error(e.msg)}))},userSearchs:function(){this.artFrom.page=1,this.getList()},del:function(t,e,a){var i=this;e={title:e,num:a,url:"merchant/store_staff/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){i.$message.success(t.msg),i.storeLists.splice(a,1)})).catch((function(t){i.$message.error(t.msg)}))},add:function(){var t=this;this.$modalForm(Object(n.Mb)(0)).then((function(){return t.getList()}))},onchangeIsShow:function(t,e){var a=this;Object(n.Ob)(t,e).then((function(t){a.$message.success(t.msg),a.getList()}))},edit:function(t){var e=this;this.$modalForm(Object(n.Nb)(t)).then((function(){return e.getList()}))}}},a("0ad7"),s=a("2877"),a=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e("el-card",{staticClass:"ivu-mb-16",attrs:{bordered:!1,shadow:"never","body-style":{padding:0}}},[e("div",{staticClass:"padding-add"},[e("el-form",{ref:"artFrom",attrs:{model:t.artFrom,"label-width":t.labelWidth,"label-position":t.labelPosition,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"提货点名称："}},[e("el-select",{staticClass:"form_content_width",attrs:{clearable:""},on:{change:t.userSearchs},model:{value:t.artFrom.store_id,callback:function(e){t.$set(t.artFrom,"store_id",e)},expression:"artFrom.store_id"}},t._l(t.storeSelectList,(function(t){return e("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})})),1)],1)],1)],1)]),e("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[e("el-button",{directives:[{name:"auth",rawName:"v-auth",value:["merchant-store_staff-create"],expression:"['merchant-store_staff-create']"},{name:"db-click",rawName:"v-db-click"}],attrs:{type:"primary"},on:{click:t.add}},[t._v("添加核销员")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticClass:"mt14",attrs:{data:t.storeLists,"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}},[e("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.id))])]}}])}),e("el-table-column",{attrs:{label:"头像","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.row.avatar,expression:"scope.row.avatar"}]})])]}}])}),e("el-table-column",{attrs:{label:"微信名称","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.nickname))])]}}])}),e("el-table-column",{attrs:{label:"核销员名称","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.staff_name))])]}}])}),e("el-table-column",{attrs:{label:"所属提货点","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.name))])]}}])}),e("el-table-column",{attrs:{label:"添加时间","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.add_time))])]}}])}),e("el-table-column",{attrs:{label:"状态","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{staticClass:"defineSwitch",attrs:{"active-value":1,"inactive-value":0,value:a.row.status,size:"large","active-text":"开启","inactive-text":"关闭"},on:{change:function(e){return t.onchangeIsShow(a.row.id,a.row.status)}},model:{value:a.row.status,callback:function(e){t.$set(a.row,"status",e)},expression:"scope.row.status"}})]}}])}),e("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{directives:[{name:"db-click",rawName:"v-db-click"}],on:{click:function(e){return t.edit(a.row.id)}}},[t._v("编辑")]),e("el-divider",{attrs:{direction:"vertical"}}),e("a",{directives:[{name:"db-click",rawName:"v-db-click"}],on:{click:function(e){return t.del(a.row,"删除核销员",a.$index)}}},[t._v("删除")])]}}])})],1),e("div",{staticClass:"acea-row row-right page"},[t.total?e("pagination",{attrs:{total:t.total,page:t.artFrom.page,limit:t.artFrom.limit},on:{"update:page":function(e){return t.$set(t.artFrom,"page",e)},"update:limit":function(e){return t.$set(t.artFrom,"limit",e)},pagination:t.getList}}):t._e()],1)],1)],1)}),[],!1,null,"2e682095",null);e.default=a.exports}}]);