(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f1194"],{"9ed6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-top":"150px"}},[n("div",{staticStyle:{"margin-bottom":"10px"},attrs:{align:"center"}},[n("img",{staticStyle:{width:"80px",height:"80px"},attrs:{src:t.logo}})]),t._v(" "),n("div",{staticStyle:{width:"300px",margin:"auto"}},[n("el-input",{staticStyle:{"margin-bottom":"20px"},attrs:{tabindex:"1",clearable:""},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}},[n("template",{slot:"prepend"},[t._v("账号")])],2),t._v(" "),n("el-input",{staticStyle:{"margin-bottom":"20px"},attrs:{tabindex:"2","show-password":"",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}},[n("template",{slot:"prepend"},[t._v("密码")])],2),t._v(" "),n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登录")])],1)])])},r=[],a=n("cf05"),o=n.n(a),l={name:"Login",data:function(){return{loginForm:{username:"",password:""},redirect:void 0,logo:o.a}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{handleLogin:function(){var t=this;this.$store.dispatch("user/login",this.loginForm).then((function(){t.$router.push({path:t.redirect||"/"})}))}}},s=l,c=n("2877"),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports}}]);