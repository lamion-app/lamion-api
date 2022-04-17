(function(){"use strict";var t={989:function(t,e,n){n(1703);var i=n(6754);const o=function(t){const e=[];for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")},a=function(t){return t||(t={}),"GET"!==t.method&&(t.body=JSON.stringify(t.body)),t.method||(t.method="GET"),null==t.headers&&(t.headers={}),t.headers["Content-Type"]||(t.headers={"Content-Type":"application/json"}),t.headers.Authorization||(t.headers.Authorization=localStorage.getItem("token")),t},r=async function(t,e){let n;e=a(e),n="GET"===e.method?fetch.bind(null,i.Z.baseApiUrl+t+"?"+o(e.body),e):fetch.bind(null,i.Z.baseApiUrl+t,e);const r=await n();let s=await r.text();try{s=JSON.parse(s)}catch(l){}if(r.ok)return s;{const t=new Error(s.details);throw t.ok=r.ok,t.status=r.status,t.statusText=r.statusText,t.redirected=r.redirected,t.url=r.url,t}};e["Z"]={auth:{login:function(t,e){return r.call(this,"/login",{method:"POST",body:{email:t,password:e}})},register:function(t,e){return r.call(this,"/register",{method:"POST",body:{email:t,password:e}})}},user:{load:function(t){return r.call(this,"/user",{method:"GET",headers:{Authorization:t}})}},apps:{create:function(t){return r.call(this,"/application/",{method:"POST",body:t})},load:function(){return r.call(this,"/application")},count:function(){return r.call(this,"/application/count")},get:function(t){return r.call(this,`/application/${t}`)},update:function(t,e){return r.call(this,`/application/${t}`,{method:"PUT",body:e})},delete:function(t){return r.call(this,`/application/${t}`,{method:"DELETE"})}},events:{create:function(t,e){return r.call(this,`/application/${t}/event`,{method:"POST",body:e})},load:function(t){return r.call(this,`/application/${t}/event`)},get:function(t,e){return r.call(this,`/application/${t}/event/${e}`)},delete:function(t,e){return r.call(this,`/application/${t}/event/${e}`,{method:"DELETE"})}},requests:{load:function(t,e){return r.call(this,`/application/${t}/event/${e}/request`)},loadAnalytics:function(t,e){return r.call(this,`/application/${t}/event/${e}/request/analytics`)}}}},6754:function(t,e){e["Z"]={applicationName:"Lamion",baseApiUrl:location.origin+"/api",user:{password:{minLength:6,maxLength:255}},app:{title:{maxLength:255},description:{maxLength:1024}},request:{title:{default:"Имя не указано"}},chart:{label:{maxLength:30}}}},9413:function(t,e,n){var i=n(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("md-toolbar",{staticClass:"md-primary"},[n("div",{staticClass:"md-toolbar-section-start"},[n("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.showNavigation=!0}}},[n("md-icon",{attrs:{"md-font-set":"material-icons"}},[t._v("menu")])],1),n("h3",{staticClass:"md-title"},[t._v(t._s(t.title))])],1)]),n("md-drawer",{attrs:{"md-active":t.showNavigation},on:{"update:mdActive":function(e){t.showNavigation=e},"update:md-active":function(e){t.showNavigation=e}}},[null==t.user?n("md-list",[n("RouterLink",{attrs:{to:"/login",exact:""}},[n("md-list-item",{attrs:{href:"#"}},[n("span",{staticClass:"md-list-item-text"},[t._v("Войти")])])],1),n("RouterLink",{attrs:{to:"/register",exact:""}},[n("md-list-item",{attrs:{href:"#"}},[n("span",{staticClass:"md-list-item-text"},[t._v("Зарегистрироваться")])])],1),n("md-divider"),n("RouterLink",{attrs:{to:"/",exact:""}},[n("md-list-item",{attrs:{href:"#"}},[n("span",{staticClass:"md-list-item-text"},[t._v("На главную")])])],1)],1):n("md-list",[n("md-list-item",[n("span",{staticClass:"md-list-item-text"},[n("span",[t._v(t._s(t.user.email))]),n("span",{staticClass:"btn-logout md-primary",on:{click:t.showLogoutDialog}},[t._v("Выйти")])])]),n("md-divider"),n("RouterLink",{attrs:{to:"/",exact:""}},[n("md-list-item",{attrs:{href:"#"}},[n("span",{staticClass:"md-list-item-text"},[t._v("На главную")])])],1),n("RouterLink",{attrs:{to:"/apps",exact:""}},[n("md-list-item",{attrs:{href:"#"}},[n("span",{staticClass:"md-list-item-text"},[t._v("Приложения")])])],1),n("RouterLink",{attrs:{to:"/app/create",exact:""}},[n("md-list-item",{attrs:{href:"#"}},[n("span",{staticClass:"md-list-item-text"},[t._v("Создать приложение")])])],1)],1)],1),n("router-view",{staticClass:"article"}),n("md-dialog-alert",{attrs:{"md-title":"Error!","md-content":"An error occurred during automatic login.","md-active":t.dialogs.autoLoginFailed},on:{"update:mdActive":function(e){return t.$set(t.dialogs,"autoLoginFailed",e)},"update:md-active":function(e){return t.$set(t.dialogs,"autoLoginFailed",e)}}}),n("md-dialog-confirm",{attrs:{"md-title":"Выйти из Lamion?","md-confirm-text":"Продолжить","md-cancel-text":"Отмена","md-active":t.dialogs.logout},on:{"update:mdActive":function(e){return t.$set(t.dialogs,"logout",e)},"update:md-active":function(e){return t.$set(t.dialogs,"logout",e)},"md-confirm":t.logout}})],1)},a=[],r=n(5822),s=n.n(r),l=n(989),u=n(6754);i["default"].use(s());var c={name:"App",data:function(){return{showNavigation:!1,loginFailed:!1,dialogs:{autoLoginFailed:!1,logout:!1}}},computed:{user(){return this.$store.state.user},token(){return this.$store.state.token},title(){return this.$store.state.pageTitle},isLoggedIn(){return null!=this.user}},methods:{showLogoutDialog:function(){this.showNavigation=!1,this.dialogs.logout=!0},login:async function(){try{const t=this.$store.state.token,e=await l.Z.user.load(t);this.onAuthSuccess(e)}catch(t){this.onAuthFailed(t)}},logout:function(){this.$store.commit("setUser",null),this.$store.commit("setToken",null),this.$router.go()},onAuthSuccess:function(t){console.log(`Auto login: ${t.email}.`),this.$store.commit("setUser",{id:t.id,email:t.email})},onAuthFailed:function(t){console.error(`Auto login failed: ${t}`),this.$store.commit("setUser",null),window.localStorage.clear(),this.dialogs.autoLoginFailed=!0}},created:function(){const t=localStorage.getItem("token");this.$store.commit("setToken",t),null!==t&&this.login()},watch:{title:{immediate:!0,handler(t,e){document.title=t||u.Z.applicationName}},token:{immediate:!0,handler(t,e){"undefined"!==typeof e&&t!==e&&(null===t?localStorage.clear():localStorage.setItem("token",t))}}}},d=c,m=n(1001),h=(0,m.Z)(d,o,a,!1,null,null,null),p=h.exports,f=n(2809),g=n(4665);i["default"].use(g.ZP);var v=new g.ZP.Store({state:{user:null,token:null,pageTitle:null},getters:{hasToken:t=>{const e=t.token;return"undefined"!==typeof e&&null!==e}},mutations:{setUser(t,e){t.user=e},setToken(t,e){t.token=e},setPageTitle(t,e){t.pageTitle=e}},actions:{},modules:{}});i["default"].use(f.Z);const b=[{path:"/",name:"Home",meta:{title:"Главная"},component:()=>n.e(177).then(n.bind(n,4310))},{path:"/login",name:"Login",meta:{title:"Войти",isAuthenticated:!1},component:()=>n.e(535).then(n.bind(n,3007))},{path:"/register",name:"Registration",meta:{title:"Зарегистрироваться",isAuthenticated:!1},component:()=>n.e(535).then(n.bind(n,5469))},{path:"/apps",name:"ApplicationsList",meta:{title:"Приложения",isAuthenticated:!0},component:()=>n.e(535).then(n.bind(n,6328))},{path:"/apps/:id",name:"ApplicationDetails",meta:{showTitle:!1,isAuthenticated:!0},component:()=>n.e(535).then(n.bind(n,9397))},{path:"/app/create",name:"ApplicationCreate",meta:{title:"Новое приложение",isAuthenticated:!0},component:()=>n.e(535).then(n.bind(n,8336))},{path:"/apps/:app_id/events/:id",name:"EventsDetails",meta:{showTitle:!1,isAuthenticated:!0},component:()=>n.e(535).then(n.bind(n,2044))},{path:"*",name:"PageNotFound",meta:{title:"Страница не найдена"},component:()=>n.e(596).then(n.bind(n,3704))}],y=new f.Z({base:"/",mode:"history",routes:b});y.beforeEach(((t,e,n)=>{"undefined"===typeof t.meta.isAuthenticated||null===t.meta.isAuthenticated||t.meta.isAuthenticated===(null!==localStorage.getItem("token"))?n():n({name:"Home",replace:!0})})),y.beforeEach(((t,e,n)=>{!1!==t.meta.showTitle&&v.commit("setPageTitle",t.meta.title),n()}));var w=y;i["default"].config.productionTip=!1,new i["default"]({router:w,store:v,render:t=>t(p)}).$mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,a){if(!i){var r=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],a=t[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(s=!1,a<r&&(r=a));if(s){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[i,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{177:"home",535:"login",596:"404"}[t]+"."+{177:"3ec9ace0",535:"87e49f23",596:"a17f40ba"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+{177:"home",535:"login"}[t]+"."+{177:"7bf66832",535:"3c06e16d"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="lamion:";n.l=function(i,o,a,r){if(t[i])t[i].push(o);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=i),t[i]=[o];var m=function(e,n){s.onerror=s.onload=null,clearTimeout(h);var o=t[i];if(delete t[i],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,o.parentNode.removeChild(o),i(l)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var o=n[i],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){o=r[i],a=o.getAttribute("data-href");if(a===t||a===e)return o}},i=function(i){return new Promise((function(o,a){var r=n.miniCssF(i),s=n.p+r;if(e(r,s))return o();t(i,s,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={177:1,535:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=i(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,i){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else{var a=new Promise((function(n,i){o=t[e]=[n,i]}));i.push(o[2]=a);var r=n.p+n.u(e),s=new Error,l=function(i){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,o[1](s)}};n.l(r,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,a,r=i[0],s=i[1],l=i[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(e&&e(i);u<r.length;u++)a=r[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},i=self["webpackChunklamion"]=self["webpackChunklamion"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9413)}));i=n.O(i)})();
//# sourceMappingURL=app.3d8ed995.js.map