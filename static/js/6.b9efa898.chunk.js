(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{226:function(e,t,a){e.exports={formControl:"FormsControls_formControl__1unnd",error:"FormsControls_error__amWdj"}},227:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return m}));var r=a(232),n=a(0),c=a.n(n),o=a(226),l=a.n(o),i=function(e){var t=e.input,a=e.meta,n=Object(r.a)(e,["input","meta"]),o=a.touched&&a.error;return c.a.createElement("div",{className:l.a.formControl+" "+(o?l.a.error:" ")},c.a.createElement("textarea",Object.assign({},t,n)),o&&c.a.createElement("span",null,a.error))},m=function(e){var t=e.input,a=e.meta,n=Object(r.a)(e,["input","meta"]),o=a.touched&&a.error;return c.a.createElement("div",{className:l.a.formControl+" "+(o?l.a.error:" ")},c.a.createElement("input",Object.assign({},t,n)),o&&c.a.createElement("span",null,a.error))}},228:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var r=function(e){if(!e)return"Field is required"},n=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},252:function(e,t,a){e.exports={wrapper:"Login_wrapper__2ghFZ",preloader:"Login_preloader__15R1M"}},300:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),o=a(25),l=a(19),i=a(252),m=a.n(i),u=a(44),s=a(110),p=a(111),d=a(227),h=a(228),f=a(226),E=a.n(f),b=Object(p.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error,r=e.captchaUrl,c=e.isFetching;return n.a.createElement(n.a.Fragment,null,c&&n.a.createElement(u.a,{styles:m.a.preloader}),n.a.createElement("form",{onSubmit:t},n.a.createElement(s.a,{component:d.a,validate:[h.b],placeholder:"Email",name:"email"}),n.a.createElement(s.a,{component:d.a,validate:[h.b],type:"password",placeholder:"Password",name:"password"}),n.a.createElement(s.a,{component:"input",type:"checkbox",name:"rememberMe"})," Remember Me",r&&n.a.createElement("div",null,n.a.createElement("img",{src:r}),n.a.createElement("div",null,n.a.createElement(s.a,{component:"input",type:"text",name:"captcha",validate:[h.b]}))),a&&n.a.createElement("div",{className:E.a.error},a),n.a.createElement("div",null,n.a.createElement("button",null,"Login"))))}));t.default=Object(c.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth,isFetching:e.auth.isFetching}}),{login:o.c,logout:o.d})((function(e){return e.isAuth?n.a.createElement(l.a,{to:"/profile"}):n.a.createElement("div",{className:m.a.wrapper},n.a.createElement("h1",null,"Login"),n.a.createElement("div",{style:{marginBottom:"15px"}},"\u0414\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430:",n.a.createElement("br",null),"Email: free@samuraijs.com",n.a.createElement("br",null),"Password: free"),n.a.createElement(b,{isFetching:e.isFetching,captchaUrl:e.captchaUrl,onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)}}))}))}}]);
//# sourceMappingURL=6.b9efa898.chunk.js.map