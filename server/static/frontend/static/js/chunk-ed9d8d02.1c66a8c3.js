(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed9d8d02"],{1019:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return i}));var r=n("b775");function o(t){return Object(r["a"])({method:"post",url:"/browser/list",params:t})}function a(t){return Object(r["a"])({method:"get",url:"/browser/".concat(t,"/start")})}function i(){return Object(r["a"])({method:"get",url:"/browser/online"})}},"333d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},o=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function u(t,e,n){var r=s(),o=t-r,u=20,c=0;e="undefined"===typeof e?500:e;var l=function t(){c+=u;var s=Math.easeInOutQuad(c,r,o,e);i(s),c<e?a(t):n&&"function"===typeof n&&n()};l()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&u(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&u(0,800)}}},l=c,p=(n("e498"),n("2877")),d=Object(p["a"])(l,r,o,!1,null,"6af373ef",null);e["a"]=d.exports},4893:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("el-input",{staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"agentIp"},model:{value:t.queryForm.agentIp,callback:function(e){t.$set(t.queryForm,"agentIp","string"===typeof e?e.trim():e)},expression:"queryForm.agentIp"}}),t._v(" "),n("el-button",{staticClass:"el-icon-search",attrs:{type:"primary"},on:{click:t.onQueryBtnClick}})],1),t._v(" "),n("div",[n("el-table",{attrs:{data:t.browserList,"highlight-current-row":"",border:""}},[n("el-table-column",{attrs:{label:"操作系统",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v("\n          "+t._s(1===n.platform?"windows":2===n.platform?"linux":"macos")+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"类型",align:"center",prop:"type","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"浏览器id",align:"center",prop:"id","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"版本号",align:"center",prop:"version","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"agent ip",align:"center",prop:"agentIp",width:"150","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("el-button",{attrs:{type:t._f("btnType")(r.status),disabled:t._f("btnDisabled")(r.status)},on:{click:function(e){return t.useBrowser(r)}}},[t._v(t._s(t._f("btnText")(r)))])]}}])})],1)],1),t._v(" "),n("div",[n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryForm.pageNum,limit:t.queryForm.pageSize},on:{"update:page":function(e){return t.$set(t.queryForm,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryForm,"pageSize",e)},pagination:t.fetchBrowserList}})],1)])},o=[],a=(n("7f7f"),n("1019")),i=n("333d"),s={components:{Pagination:i["a"]},filters:{btnDisabled:function(t){return 2!==t},btnType:function(t){return 0===t?"info":1===t?"danger":"success"},btnText:function(t){var e=t.status;return 0===e?"离线":1===e?"["+t.username+"]使用中":"立即使用"}},data:function(){return{browserList:[],total:0,queryForm:{pageNum:1,pageSize:10,agentIp:""}}},computed:{showBrowser:function(){return this.$store.state.browser.show}},watch:{showBrowser:function(t,e){!0===e&&!1===t&&setTimeout(this.fetchBrowserList,2e3)}},created:function(){this.fetchBrowserList()},methods:{onQueryBtnClick:function(){this.queryForm.pageNum=1,this.fetchBrowserList()},useBrowser:function(t){var e=this;this.$store.state.browser.show?this.$notify.error("只能使用一个浏览器"):Object(a["a"])(t.id).then((function(n){t.agentIp=n.data.agentIp,t.agentPort=n.data.agentPort,t.username=e.$store.state.user.name,t.status=1,e.$store.dispatch("browser/setAgentIp",t.agentIp),e.$store.dispatch("browser/setAgentPort",t.agentPort),e.$store.dispatch("browser/setId",t.id),e.$store.dispatch("browser/setShow",!0)})).catch((function(){e.fetchBrowserList()}))},fetchBrowserList:function(){var t=this;Object(a["b"])(this.queryForm).then((function(e){t.browserList=e.data.data,t.total=e.data.total}))}}},u=s,c=n("2877"),l=Object(c["a"])(u,r,o,!1,null,"004ffbec",null);e["default"]=l.exports},7456:function(t,e,n){},e498:function(t,e,n){"use strict";n("7456")}}]);