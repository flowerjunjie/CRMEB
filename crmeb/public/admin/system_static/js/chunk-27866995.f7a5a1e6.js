(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-27866995"],{"3f2e":function(e,t,n){},"4b65":function(e,t,n){"use strict";n.r(t);var a=n("a069"),i=n("c24f");a={components:{WangEditor:a.a},data:function(){return{ueConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/UEditor/",serverUrl:""},id:0,agreement:{title:"",content:"",status:1},spinShow:!1}},created:function(){this.memberAgreement()},methods:{getEditorContent:function(e){this.agreement.content=e},memberAgreement:function(){var e=this;this.spinShow=!0,Object(i.q)().then((function(t){e.spinShow=!1;t=t.data;var n=t.title,a=t.content,i=t.status;t=t.id;e.agreement.title=n,e.agreement.content=a,e.agreement.status=i,e.id=t})).catch((function(t){e.$message.error(t),e.spinShow=!1}))},memberAgreementSave:function(){var e=this;Object(i.r)(this.id,this.agreement).then((function(t){e.$message.success("保存成功"),e.memberAgreement()})).catch((function(t){e.$message.error(t)}))}}},n("f1bd"),n=n("2877"),n=Object(n.a)(a,(function(){var e=this,t=e._self._c;return t("div",[t("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[t("el-form",{attrs:{"label-width":"85px"},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"协议名称："}},[t("el-input",{model:{value:e.agreement.title,callback:function(t){e.$set(e.agreement,"title",t)},expression:"agreement.title"}})],1),t("el-form-item",{attrs:{label:"协议内容："}},[t("WangEditor",{attrs:{content:e.agreement.content},on:{editorContent:e.getEditorContent}})],1),t("el-form-item",{attrs:{label:"开启状态："}},[t("el-switch",{attrs:{"active-value":1,"inactive-value":0,size:"large"},model:{value:e.agreement.status,callback:function(t){e.$set(e.agreement,"status",t)},expression:"agreement.status"}})],1),t("el-form-item",[t("el-button",{directives:[{name:"db-click",rawName:"v-db-click"}],attrs:{type:"primary"},on:{click:e.memberAgreementSave}},[e._v("保存")])],1)],1)],1)],1)}),[],!1,null,"49892e8c",null);t.default=n.exports},f1bd:function(e,t,n){"use strict";n("3f2e")}}]);