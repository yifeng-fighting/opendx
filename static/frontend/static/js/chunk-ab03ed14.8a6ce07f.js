(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab03ed14"],{1019:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o}));var a=n("b775");function r(e){return Object(a["a"])({method:"post",url:"/browser/list",params:e})}function s(e){return Object(a["a"])({method:"get",url:"/browser/".concat(e,"/start")})}function o(){return Object(a["a"])({method:"get",url:"/browser/online"})}},"3f13":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i}));var a=n("b775");function r(e){return Object(a["a"])({method:"post",url:"/testPlan/add",data:e})}function s(e){return Object(a["a"])({method:"delete",url:"/testPlan/"+e})}function o(e){return Object(a["a"])({method:"post",url:"/testPlan/update",data:e})}function i(e){return Object(a["a"])({method:"post",url:"/testPlan/list",params:e})}},"5cc1":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n("b775");function r(e){return Object(a["a"])({method:"post",url:"/mobile/list",params:e})}function s(e){return Object(a["a"])({method:"get",url:"/mobile/".concat(e,"/start")})}function o(e){return Object(a["a"])({method:"get",url:"/mobile/online/platform/"+e})}function i(e){return Object(a["a"])({method:"delete",url:"/mobile/".concat(e)})}},"6d17":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i}));var a=n("b775");function r(e){return Object(a["a"])({method:"post",url:"/environment/add",data:e})}function s(e){return Object(a["a"])({method:"delete",url:"/environment/".concat(e)})}function o(e){return Object(a["a"])({method:"post",url:"/environment/update",data:e})}function i(e){return Object(a["a"])({method:"post",url:"/environment/list",params:e})}},8121:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return c}));var a=n("b775");function r(e){return Object(a["a"])({method:"post",url:"/action/add",data:e})}function s(e){return Object(a["a"])({method:"post",url:"/action/update",data:e})}function o(e){return Object(a["a"])({method:"post",url:"/action/list",params:e})}function i(e){return Object(a["a"])({method:"delete",url:"/action/".concat(e)})}function l(e,t,n){return Object(a["a"])({method:"get",url:"/action/cascader",params:{projectId:e,platform:t,type:n}})}function c(e){return Object(a["a"])({method:"post",url:"/action/debug",data:e})}},"9cce":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("save-test-plan",{attrs:{"is-add":!1}})],1)},r=[],s=n("c661"),o={name:"UpdateTestPlan",components:{SaveTestPlan:s["a"]}},i=o,l=n("2877"),c=Object(l["a"])(i,a,r,!1,null,null,null);t["default"]=c.exports},c661:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"测试计划名",rules:[{required:!0}]}},[n("el-input",{attrs:{clearable:""},model:{value:e.saveTestPlanForm.name,callback:function(t){e.$set(e.saveTestPlanForm,"name","string"===typeof t?t.trim():t)},expression:"saveTestPlanForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.saveTestPlanForm.description,callback:function(t){e.$set(e.saveTestPlanForm,"description","string"===typeof t?t.trim():t)},expression:"saveTestPlanForm.description"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"BeforeClass"}},[n("el-cascader",{staticStyle:{width:"60%"},attrs:{props:{value:"id",label:"name",children:"children",emitPath:!1,expandTrigger:"hover"},options:e.actions,filterable:"",clearable:""},model:{value:e.saveTestPlanForm.beforeClass,callback:function(t){e.$set(e.saveTestPlanForm,"beforeClass",t)},expression:"saveTestPlanForm.beforeClass"}}),e._v(" "),n("span",{staticStyle:{"margin-left":"10px","font-size":"10px",color:"#8c939d"}},[e._v("所有测试用例执行前执行的操作")])],1),e._v(" "),n("el-form-item",{attrs:{label:"BeforeMethod"}},[n("el-cascader",{staticStyle:{width:"60%"},attrs:{props:{value:"id",label:"name",children:"children",emitPath:!1,expandTrigger:"hover"},options:e.actions,filterable:"",clearable:""},model:{value:e.saveTestPlanForm.beforeMethod,callback:function(t){e.$set(e.saveTestPlanForm,"beforeMethod",t)},expression:"saveTestPlanForm.beforeMethod"}}),e._v(" "),n("span",{staticStyle:{"margin-left":"10px","font-size":"10px",color:"#8c939d"}},[e._v("每条测试用例执行前执行的操作")])],1),e._v(" "),n("el-form-item",{attrs:{label:"AfterMethod"}},[n("el-cascader",{staticStyle:{width:"60%"},attrs:{props:{value:"id",label:"name",children:"children",emitPath:!1,expandTrigger:"hover"},options:e.actions,filterable:"",clearable:""},model:{value:e.saveTestPlanForm.afterMethod,callback:function(t){e.$set(e.saveTestPlanForm,"afterMethod",t)},expression:"saveTestPlanForm.afterMethod"}}),e._v(" "),n("span",{staticStyle:{"margin-left":"10px","font-size":"10px",color:"#8c939d"}},[e._v("每条测试用例执行后执行的操作")])],1),e._v(" "),n("el-form-item",{attrs:{label:"AfterClass"}},[n("el-cascader",{staticStyle:{width:"60%"},attrs:{props:{value:"id",label:"name",children:"children",emitPath:!1,expandTrigger:"hover"},options:e.actions,filterable:"",clearable:""},model:{value:e.saveTestPlanForm.afterClass,callback:function(t){e.$set(e.saveTestPlanForm,"afterClass",t)},expression:"saveTestPlanForm.afterClass"}}),e._v(" "),n("span",{staticStyle:{"margin-left":"10px","font-size":"10px",color:"#8c939d"}},[e._v("所有测试用例执行后执行的操作")])],1),e._v(" "),n("el-form-item",{attrs:{label:"测试集",rules:[{required:!0}]}},[n("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"",clearable:"",rules:[{required:!0}]},on:{"visible-change":e.testSuiteSelectChange},model:{value:e.saveTestPlanForm.testSuites,callback:function(t){e.$set(e.saveTestPlanForm,"testSuites",t)},expression:"saveTestPlanForm.testSuites"}},e._l(e.testSuites,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"环境",rules:[{required:!0}]}},[n("el-select",{on:{"visible-change":e.envSelectChange},model:{value:e.saveTestPlanForm.environmentId,callback:function(t){e.$set(e.saveTestPlanForm,"environmentId",t)},expression:"saveTestPlanForm.environmentId"}},e._l(e.environmentList,(function(e){return n("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"devices",rules:[{required:!0}]}},[n("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",filterable:"",multiple:""},on:{"visible-change":e.deviceSelectChange},model:{value:e.saveTestPlanForm.deviceIds,callback:function(t){e.$set(e.saveTestPlanForm,"deviceIds",t)},expression:"saveTestPlanForm.deviceIds"}},e._l(e.onlineDevices,(function(t){return n("el-option",{key:t.id,attrs:{label:t.id,value:t.id}},[3===e.platform?[n("span",[e._v(e._s(1===t.platform?"windows":2===t.platform?"linux":"macos"))]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(t.type))]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(t.version))]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(t.id))])]:[n("span",[e._v(e._s(t.id))]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(t.name))]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(t.systemVersion))])]],2)})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"定时执行",rules:[{required:!0}]}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.saveTestPlanForm.enableSchedule,callback:function(t){e.$set(e.saveTestPlanForm,"enableSchedule",t)},expression:"saveTestPlanForm.enableSchedule"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"cron表达式"}},[n("el-input",{attrs:{clearable:""},model:{value:e.saveTestPlanForm.cronExpression,callback:function(t){e.$set(e.saveTestPlanForm,"cronExpression",t)},expression:"saveTestPlanForm.cronExpression"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"录制视频",rules:[{required:!0}]}},[n("el-switch",{attrs:{disabled:3===e.platform,"active-value":1,"inactive-value":0},model:{value:e.saveTestPlanForm.enableRecordVideo,callback:function(t){e.$set(e.saveTestPlanForm,"enableRecordVideo",t)},expression:"saveTestPlanForm.enableRecordVideo"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"失败重试次数",rules:[{required:!0}]}},[n("el-input",{attrs:{clearable:""},model:{value:e.saveTestPlanForm.failRetryCount,callback:function(t){e.$set(e.saveTestPlanForm,"failRetryCount",t)},expression:"saveTestPlanForm.failRetryCount"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"用例分发策略",rules:[{required:!0}]}},[n("el-radio",{attrs:{label:1},model:{value:e.saveTestPlanForm.runMode,callback:function(t){e.$set(e.saveTestPlanForm,"runMode",t)},expression:"saveTestPlanForm.runMode"}},[e._v("\n          兼容模式\n          "),n("el-popover",{attrs:{placement:"top",trigger:"hover",content:"[并发执行]所选device执行同一份用例"}},[n("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1),e._v(" "),n("el-radio",{attrs:{label:2},model:{value:e.saveTestPlanForm.runMode,callback:function(t){e.$set(e.saveTestPlanForm,"runMode",t)},expression:"saveTestPlanForm.runMode"}},[e._v("\n          高效模式\n          "),n("el-popover",{attrs:{placement:"top",trigger:"hover",content:"[并发执行]用例平均分配给所选device执行"}},[n("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.saveTestPlan}},[e._v("保 存")])],1)],1)],1)],1)},r=[],s=n("8121"),o=n("d023"),i=n("3f13"),l=n("5cc1"),c=n("1019"),u=n("6d17"),d={props:{isAdd:Boolean},data:function(){return{saveTestPlanForm:{id:void 0,name:"",description:"",projectId:this.$store.state.project.id,environmentId:-1,beforeClass:null,beforeMethod:null,afterClass:null,afterMethod:null,testSuites:[],deviceIds:[],runMode:1,cronExpression:void 0,enableSchedule:0,enableRecordVideo:0,failRetryCount:0},actions:[],testSuites:[],onlineDevices:[],environmentList:[]}},computed:{projectId:function(){return this.$store.state.project.id},platform:function(){return this.$store.state.project.platform}},methods:{saveTestPlanSuccess:function(e){var t=this;this.$notify.success(e),this.$store.dispatch("tagsView/delView",this.$store.state.tagsView.visitedViews.filter((function(e){return e.path===t.$route.path}))[0]),this.$router.back()},saveTestPlan:function(){var e=this;this.isAdd?Object(i["a"])(this.saveTestPlanForm).then((function(t){e.saveTestPlanSuccess(t.msg)})):Object(i["d"])(this.saveTestPlanForm).then((function(t){e.saveTestPlanSuccess(t.msg)}))},fetchActionCascader:function(){var e=this;Object(s["d"])(this.projectId,this.platform).then((function(t){e.actions=t.data}))},testSuiteSelectChange:function(e){e&&this.fetchTestSuiteList()},fetchTestSuiteList:function(){var e=this;Object(o["c"])({projectId:this.projectId}).then((function(t){e.testSuites=t.data}))},envSelectChange:function(e){e&&this.fetchEnvironmentList()},fetchEnvironmentList:function(){var e=this;Object(u["c"])({projectId:this.projectId}).then((function(t){e.environmentList=[{id:-1,name:"默认"}].concat(t.data)}))},deviceSelectChange:function(e){e&&this.fetchOnlineDevices()},fetchOnlineDevices:function(){var e=this;3===this.platform?Object(c["c"])().then((function(t){e.onlineDevices=t.data})):Object(l["c"])(this.platform).then((function(t){e.onlineDevices=t.data}))}},created:function(){var e=this;this.fetchOnlineDevices(),this.fetchActionCascader(),this.fetchTestSuiteList(),this.fetchEnvironmentList(),this.isAdd||Object(i["c"])({id:this.$route.params.testPlanId}).then((function(t){e.saveTestPlanForm=t.data[0]}))}},v=d,m=n("2877"),f=Object(m["a"])(v,a,r,!1,null,null,null);t["a"]=f.exports},d023:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i}));var a=n("b775");function r(e){return Object(a["a"])({method:"post",url:"/testSuite/add",data:e})}function s(e){return Object(a["a"])({method:"delete",url:"/testSuite/".concat(e)})}function o(e){return Object(a["a"])({method:"post",url:"/testSuite/update",data:e})}function i(e){return Object(a["a"])({method:"post",url:"/testSuite/list",params:e})}}}]);