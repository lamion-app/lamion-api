"use strict";(self["webpackChunklamion"]=self["webpackChunklamion"]||[]).push([[177],{4310:function(t,s,a){a.r(s),a.d(s,{default:function(){return c}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",[t.isLoggedIn&&t.loaded?a("div",{staticClass:"logged"},[a("h1",{staticClass:"md-display-2"},[t._v("Кол-во ваших приложений: ")]),a("RouterLink",{staticClass:"md-display-2",attrs:{to:"/apps",exact:""}},[t._v(t._s(t.appsCount))])],1):t._e(),t.isLoggedIn?t._e():a("div",{staticClass:"unlogged"},[a("h1",{staticClass:"md-display-2"},[t._v("Добро пожаловать в")]),a("RouterLink",{staticClass:"md-display-1",attrs:{to:"/login",exact:""}},[t._v("Lamion")])],1)])},n=[],i=a(989),o={name:"HomeAction",data:function(){return{showContent:!1,appsCount:0,loaded:!1}},computed:{user(){return this.$store.state.user},isLoggedIn(){return null!=this.$store.state.token}},mounted:async function(){if(this.isLoggedIn){const t=await i.Z.apps.count();this.appsCount=t.count}this.loaded=!0}},l=o,u=a(1001),d=(0,u.Z)(l,e,n,!1,null,"2635c37d",null),c=d.exports}}]);
//# sourceMappingURL=home.3ec9ace0.js.map