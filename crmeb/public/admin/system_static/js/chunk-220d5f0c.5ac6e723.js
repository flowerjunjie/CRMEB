(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-220d5f0c"],{"31b4":function(e,t,a){"use strict";a("a630"),a("3ca3");var l=a("5530"),i=(a("d3b7"),a("159b"),a("30ba")),s=(i=a.n(i),a("6b6c")),r=a("2f62");i={name:"edit",components:{formCreate:i.a.$form()},computed:Object(l.a)({},Object(r.d)("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},watch:{FromData:function(){this.FromData.rules.forEach((function(e){e.title+="："}))}},data:function(){return{modals:!1,type:0,loading:!1,fapi:null,config:{form:{labelWidth:"100px"},resetBtn:!1,submitBtn:!1,global:{upload:{props:{onSuccess:function(e,t){200===e.status?t.url=e.data.src:this.$message.error(e.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},formSubmit:function(){this.fapi.submit()},onSubmit:function(e){var t=this;this.loading||(this.loading=!0,Object(s.a)({url:this.FromData.action,method:this.FromData.method,data:e}).then((function(e){t.update&&t.$parent.getList(),t.$message.success(e.msg),t.modals=!1,setTimeout((function(){t.$emit("submitFail"),t.loading=!1}),1e3)})).catch((function(e){t.loading=!1,t.$message.error(e.msg)})))},cancel:function(){this.type=0}}},a("c97f"),l=a("2877"),r=Object(l.a)(i,(function(){var e=this,t=e._self._c;return e.FromData?t("div",[t("el-dialog",{attrs:{visible:e.modals,title:e.FromData.title,"z-index":1,width:"720px"},on:{"update:visible":function(t){e.modals=t},closed:e.cancel}},[["/marketing/coupon/save.html"===e.FromData.action?t("div",{staticClass:"radio acea-row row-middle"},[t("div",{staticClass:"name ivu-form-item-content"},[e._v("优惠券类型")]),t("el-radio-group",{on:{input:e.couponsType},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[t("el-radio",{attrs:{label:0}},[e._v("通用券")]),t("el-radio",{attrs:{label:1}},[e._v("品类券")]),t("el-radio",{attrs:{label:2}},[e._v("商品券")])],1)],1):e._e()],t("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:e.config,rule:Array.from(this.FromData.rules),handleIcon:"false"},on:{submit:e.onSubmit},model:{value:e.fapi,callback:function(t){e.fapi=t},expression:"fapi"}}),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{directives:[{name:"db-click",rawName:"v-db-click"}],on:{click:function(t){e.modals=!1}}},[e._v("取 消")]),t("el-button",{directives:[{name:"db-click",rawName:"v-db-click"}],attrs:{type:"primary"},on:{click:e.formSubmit}},[e._v("确 定")])],1)],2)],1):e._e()}),[],!1,null,"35556d70",null);t.a=r.exports},8381:function(e,t,a){},"85e5":function(e,t,a){},c97f:function(e,t,a){"use strict";a("8381")},f1a5:function(e,t,a){"use strict";a("85e5")},fe78:function(e,t,a){"use strict";a.r(t),a("b0c0");var l=a("c7eb"),i=a("1da1"),s=a("5530"),r=a("2f62"),o=a("c24f"),n=(a("a434"),{name:"task",components:{editFrom:a("31b4").a},data:function(){return{grid:{xl:10,lg:10,md:12,sm:24,xs:24},modals:!1,levelFrom:{is_show:"",name:"",page:1,limit:20},total:0,levelLists:[],loading:!1,FromData:null,ids:0,titleType:"task"}},computed:Object(s.a)(Object(s.a)(Object(s.a)({},Object(r.d)("media",["isMobile"])),Object(r.d)("userLevel",["levelId"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:Object(s.a)(Object(s.a)({},Object(r.c)("userLevel",["getTaskId","getlevelId"])),{},{add:function(){this.ids="",this.getFrom()},getFrom:function(){var e=this,t={id:this.ids,level_id:this.levelId};this.$modalForm(Object(o.e)(t)).then((function(){return e.getList()}))},edit:function(e){this.ids=e.id,this.getFrom()},handleReset:function(){this.modals=!1},userSearchs:function(){this.getList()},getList:function(){var e=this;this.loading=!0,this.levelFrom.is_show=this.levelFrom.is_show||"",Object(o.H)(this.levelId,this.levelFrom).then(function(){var t=Object(i.a)(Object(l.a)().mark((function t(a){var i;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=a.data,e.levelLists=i.list,e.total=a.data.count,e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$message.error(t.msg)}))},onchangeIsShow:function(e){var t=this;e={id:e.id,is_show:e.is_show};Object(o.F)(e).then(function(){var e=Object(i.a)(Object(l.a)().mark((function e(a){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$message.success(a.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$message.error(e.msg)}))},onchangeIsMust:function(e){var t=this;e={id:e.id,is_must:e.is_must};Object(o.E)(e).then(function(){var e=Object(i.a)(Object(l.a)().mark((function e(a){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$message.success(a.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$message.error(e.msg)}))},submitFail:function(){this.getList()},del:function(e,t,a){var l=this;t={title:t,num:a,url:"user/user_level/delete_task/".concat(e.id),method:"DELETE",ids:""};this.$modalSure(t).then((function(e){l.$message.success(e.msg),l.levelLists.splice(a,1)})).catch((function(e){l.$message.error(e.msg)}))}})}),c=a("2877");Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{visible:e.modals,title:"等级任务","close-on-click-modal":!1,width:"1000px"},on:{"update:visible":function(t){e.modals=t},closed:e.handleReset}},[t("el-form",{ref:"levelFrom",attrs:{model:e.levelFrom,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-row",{attrs:{gutter:24}},[t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"等级状态："}},[t("el-select",{attrs:{placeholder:"是否显示",clearable:""},on:{change:e.userSearchs},model:{value:e.levelFrom.is_show,callback:function(t){e.$set(e.levelFrom,"is_show",t)},expression:"levelFrom.is_show"}},[t("el-option",{attrs:{value:"1",label:"显示"}}),t("el-option",{attrs:{value:"0",label:"不显示"}})],1)],1)],1),t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"等级名称：",prop:"status2","label-for":"status2"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{search:"","enter-button":"",placeholder:"请输入等级名称"},on:{"on-search":e.userSearchs},model:{value:e.levelFrom.name,callback:function(t){e.$set(e.levelFrom,"name",t)},expression:"levelFrom.name"}})],1)],1)],1)],1),t("el-divider",{attrs:{direction:"vertical",dashed:""}}),t("el-row",[t("el-col",e._b({staticClass:"mb15"},"el-col",e.grid,!1),[t("el-button",{directives:[{name:"db-click",rawName:"v-db-click"}],attrs:{type:"primary"},on:{click:e.add}},[e._v("添加等级任务")])],1),t("el-col",{staticClass:"userAlert",attrs:{span:24}},[t("el-alert",{attrs:{"show-icon":"",closable:""}},[t("template",{slot:"title"},[e._v("\n          添加等级任务,任务类型中的{$num}会自动替换成限定数量+系统预设的单位生成任务名\n        ")])],2)],1)],1),t("el-divider",{attrs:{direction:"vertical",dashed:""}}),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{data:e.levelLists,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}},[t("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.id))])]}}])}),t("el-table-column",{attrs:{label:"等级名称","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.level_name))])]}}])}),t("el-table-column",{attrs:{label:"任务名称","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.name))])]}}])}),t("el-table-column",{attrs:{label:"是否显示","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{staticClass:"defineSwitch",attrs:{"active-value":1,"inactive-value":0,value:a.row.is_show,size:"large","active-text":"显示","inactive-text":"隐藏"},on:{change:function(t){return e.onchangeIsShow(a.row)}},model:{value:a.row.is_show,callback:function(t){e.$set(a.row,"is_show",t)},expression:"scope.row.is_show"}})]}}])}),t("el-table-column",{attrs:{label:"务必达成","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{staticClass:"defineSwitch",attrs:{"active-value":1,"inactive-value":0,value:a.row.is_must,"true-value":1,"false-value":0,size:"large","active-text":"全部","inactive-text":"其一"},on:{change:function(t){return e.onchangeIsMust(a.row)}},model:{value:a.row.is_must,callback:function(t){e.$set(a.row,"is_must",t)},expression:"scope.row.is_must"}})]}}])}),t("el-table-column",{attrs:{label:"任务说明","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.illustrate))])]}}])}),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("a",{directives:[{name:"db-click",rawName:"v-db-click"}],on:{click:function(t){return e.edit(a.row)}}},[e._v("编辑 | ")]),t("a",{directives:[{name:"db-click",rawName:"v-db-click"}],on:{click:function(t){return e.del(a.row,"删除等级任务",e.index)}}},[e._v(" 删除")])]}}])})],1),t("div",{staticClass:"acea-row row-right page"},[e.total?t("pagination",{attrs:{total:e.total,page:e.levelFrom.page,limit:e.levelFrom.limit},on:{"update:page":function(t){return e.$set(e.levelFrom,"page",t)},"update:limit":function(t){return e.$set(e.levelFrom,"limit",t)},pagination:e.getList}}):e._e()],1),t("edit-from",{ref:"edits",attrs:{FromData:e.FromData,titleType:e.titleType},on:{submitFail:e.submitFail}})],1)}),[],!1,null,"181d0d5b",null).exports,n={name:"orderMark",data:function(){return{formValidate:{remark:""},modals:!1,ruleValidate:{remark:[{required:!0,message:"请输入备注信息",trigger:"blur"}]}}},props:{remark:{default:"",type:String}},methods:{cancel:function(e){this.modals=!1,this.$refs[e].resetFields()},putRemark:function(e){var t=this;this.$refs[e].validate((function(e){e?t.$emit("submitFail",t.formValidate.remark):t.$message.warning("请填写备注信息")}))}}},n={name:"user_level",components:{remark:Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("el-dialog",{staticClass:"order_box",attrs:{visible:e.modals,title:"备注",width:"470px","show-close":!0},on:{"update:visible":function(t){e.modals=t}}},[t("el-form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":"85px"},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"备注：",prop:"remark"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{maxlength:200,"show-word-limit":"",type:"textarea",placeholder:"请输入备注信息"},model:{value:e.formValidate.remark,callback:function(t){e.$set(e.formValidate,"remark",t)},expression:"formValidate.remark"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{directives:[{name:"db-click",rawName:"v-db-click"}],attrs:{type:"primary"},on:{click:function(t){return e.putRemark("formValidate")}}},[e._v("提交")]),t("el-button",{directives:[{name:"db-click",rawName:"v-db-click"}],on:{click:function(t){return e.cancel("formValidate")}}},[e._v("取消")])],1)],1)}),[],!1,null,"5f0725a3",null).exports},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},id:"",loading:!1,levelFrom:{status:"",keywords:"",page:1,limit:15},levelLists:[],total:0}},created:function(){this.getList()},computed:Object(s.a)(Object(s.a)({},Object(r.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:Object(s.a)(Object(s.a)({},Object(r.c)("userLevel",["getlevelId"])),{},{remark:function(e){this.id=e.id,this.$refs.remark.formValidate.remark=e.remark,this.$refs.remark.modals=!0},agree:function(e){var t=this;this.delfromData={title:"注销用户",url:"/user/cancel/agree/".concat(e.id),method:"get"},this.$modalSure(this.delfromData).then((function(e){t.$message.success(e.msg),t.getList()})).catch((function(e){t.$message.error(e.msg)}))},refuse:function(e){var t=this;this.delfromData={title:"拒绝注销用户",info:"您确认拒绝注销此用户吗?",url:"/user/cancel/refuse/".concat(e.id),method:"get"},this.$modalSure(this.delfromData).then((function(e){t.$message.success(e.msg),t.getList()})).catch((function(e){t.$message.error(e.msg)}))},submitFail:function(e){var t=this;e={id:this.id,mark:e};Object(o.K)(e).then((function(e){t.$refs.remark.modals=!1,t.$message.success(e.msg),t.getList()})).catch((function(e){t.$refs.remark.modals=!1,t.$message.error(e.msg)}))},getList:function(){var e=this;this.loading=!0,this.levelFrom.status=this.levelFrom.status||"",Object(o.J)(this.levelFrom).then(function(){var t=Object(i.a)(Object(l.a)().mark((function t(a){var i;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=a.data,e.levelLists=i.list,e.total=a.data.count,e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$message.error(t.msg)}))},userSearchs:function(){this.levelFrom.page=1,this.getList()}})},a("f1a5"),s=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[t("el-form",{ref:"levelFrom",attrs:{model:e.levelFrom,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-row",{attrs:{gutter:24}},[t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"状态：","label-for":"status1"}},[t("el-radio-group",{attrs:{type:"button"},on:{input:function(t){return e.userSearchs(e.levelFrom.status)}},model:{value:e.levelFrom.status,callback:function(t){e.$set(e.levelFrom,"status",t)},expression:"levelFrom.status"}},[t("el-radio-button",{attrs:{label:""}},[e._v("全部")]),t("el-radio-button",{attrs:{label:"0"}},[e._v("待审核")]),t("el-radio-button",{attrs:{label:"1"}},[e._v("通过")]),t("el-radio-button",{attrs:{label:"2"}},[e._v("拒绝")])],1)],1)],1),t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"用户搜索：","label-for":"title"}},[t("el-input",{attrs:{search:"","enter-button":"",placeholder:"请输入用户昵称/ID/手机号"},on:{"on-search":e.userSearchs},model:{value:e.levelFrom.keywords,callback:function(t){e.$set(e.levelFrom,"keywords",t)},expression:"levelFrom.keywords"}})],1)],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticClass:"mt14",attrs:{data:e.levelLists,"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}},[t("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.id))])]}}])}),t("el-table-column",{attrs:{label:"昵称","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.name))])]}}])}),t("el-table-column",{attrs:{label:"手机号","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.phone))])]}}])}),t("el-table-column",{attrs:{label:"状态","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.status))])]}}])}),t("el-table-column",{attrs:{label:"申请时间","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.add_time))])]}}])}),t("el-table-column",{attrs:{label:"审核时间","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.up_time))])]}}])}),t("el-table-column",{attrs:{label:"备注","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.remark))])]}}])}),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("a",{directives:[{name:"db-click",rawName:"v-db-click"}],on:{click:function(t){return e.agree(a.row)}}},[e._v("同意")]),t("el-divider",{attrs:{direction:"vertical"}}),t("a",{directives:[{name:"db-click",rawName:"v-db-click"}],on:{click:function(t){return e.refuse(a.row)}}},[e._v("拒绝")]),t("el-divider",{attrs:{direction:"vertical"}}),t("a",{directives:[{name:"db-click",rawName:"v-db-click"}],on:{click:function(t){return e.remark(a.row)}}},[e._v("备注")])]}}])})],1),t("div",{staticClass:"acea-row row-right page"},[e.total?t("pagination",{attrs:{total:e.total,page:e.levelFrom.page,limit:e.levelFrom.limit},on:{"update:page":function(t){return e.$set(e.levelFrom,"page",t)},"update:limit":function(t){return e.$set(e.levelFrom,"limit",t)},pagination:e.getList}}):e._e()],1)],1),t("remark",{ref:"remark",on:{submitFail:e.submitFail}})],1)}),[],!1,null,"24185938",null);t.default=s.exports}}]);