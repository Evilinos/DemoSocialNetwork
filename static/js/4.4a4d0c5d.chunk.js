(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{226:function(e,t,a){e.exports={formControl:"FormsControls_formControl__1unnd",error:"FormsControls_error__amWdj"}},227:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c}));var n=a(236),r=a(0),o=a.n(r),i=a(226),l=a.n(i),s=function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),i=a.touched&&a.error;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:l.a.formControl+" "+(i?l.a.error:" ")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,r))),i&&o.a.createElement("span",null,a.error)))},c=function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),i=a.touched&&a.error;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:l.a.formControl+" "+(i?l.a.error:" ")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,r))),i&&o.a.createElement("span",null,a.error)))}},228:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(60);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},250:function(e,t,a){e.exports={wrapper:"ProfileInfo_wrapper__39M0N",profileBackground:"ProfileInfo_profileBackground__23mlq",descriptionBlock:"ProfileInfo_descriptionBlock__VlRTk",description:"ProfileInfo_description__lU_fF",descriptionItem:"ProfileInfo_descriptionItem__ImUEi"}},293:function(e,t,a){},294:function(e,t,a){e.exports=a.p+"static/media/profileBackground.450874ba.jpg"},295:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__D_09Y",posts:"MyPosts_posts__n8PCf"}},296:function(e,t,a){e.exports={item:"Post_item__1NrTz"}},298:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(33),o=a(34),i=a(35),l=a(0),s=a.n(l),c=(a(293),a(250)),u=a.n(c),m=a(294),p=a.n(m),f=a(235),d=function(e){var t=Object(l.useState)(!1),a=Object(f.a)(t,2),n=a[0],r=a[1],o=Object(l.useState)(e.status),i=Object(f.a)(o,2),c=i[0],m=i[1];Object(l.useEffect)((function(){m(e.status)}),[e.status]);return s.a.createElement("div",{className:u.a.descriptionItem},!n&&s.a.createElement("div",null,s.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"-----")),n&&s.a.createElement("div",null,s.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},onBlur:function(){r(!1)},autoFocus:!0,value:c})))},b=function(e){return s.a.createElement("div",{className:u.a.wrapper},s.a.createElement("img",{className:u.a.profileBackground,src:p.a}),s.a.createElement("div",{className:u.a.descriptionBlock},s.a.createElement("img",{src:e.profile.photos.large}),s.a.createElement("div",{className:u.a.description},s.a.createElement("div",{className:u.a.descriptionItem},"Full name: ",e.profile.fullName),s.a.createElement(d,{status:e.status,updateUserStatus:e.updateUserStatus}),s.a.createElement("div",{className:u.a.descriptionItem},"About: ",e.profile.aboutMe),s.a.createElement("div",{className:u.a.descriptionItem},"Contacts:",s.a.createElement("ul",null,s.a.createElement("li",null,"facebook: ",e.profile.contacts.facebook),s.a.createElement("li",null,"website: ",e.profile.contacts.website),s.a.createElement("li",null,"vk: ",e.profile.contacts.vk),s.a.createElement("li",null,"twitter: ",e.profile.contacts.twitter),s.a.createElement("li",null,"instagram: ",e.profile.contacts.instagram),s.a.createElement("li",null,"youtube: ",e.profile.contacts.youtube),s.a.createElement("li",null,"github: ",e.profile.contacts.github),s.a.createElement("li",null,"mainLink: ",e.profile.contacts.mainLink))))))},E=a(59),v=a(26),h=a(295),g=a.n(h),_=a(296),k=a.n(_),y=function(e){return s.a.createElement("div",{className:k.a.item},s.a.createElement("img",{src:"https://thewallpaper.co/wp-content/uploads/2017/08/disney-action-macbook-warrior-futuristic-hd-abstract-wallpapers-alien-backgrounds-aliens-fighting-adventure-avatar-mobile-scifi-free-images-fantasy.jpg"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"Like: ",e.likesCounts)))},j=a(109),O=a(110),P=a(228),w=a(227),I=Object(P.a)(10),N=function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(j.a,{component:w.b,validate:[P.b,I],name:"newPostText",placeholder:"Enter your text"}),s.a.createElement("button",null,"Add Post"))};N=Object(O.a)({form:"profileAddNewPostForm"})(N);var S=function(e){var t=Object(v.a)(e.posts).reverse().map((function(e){return s.a.createElement(y,{likesCounts:e.likesCounts,key:e.id,message:e.message})}));return s.a.createElement("div",{className:g.a.postsBlock},s.a.createElement("h3",null,"My posts"),s.a.createElement(N,{onSubmit:function(t){e.addPost(t.newPostText)}}),s.a.createElement("div",{className:g.a.posts},t))},C=a(22),U=Object(C.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:E.a})(S),x=a(47),B=function(e){return e.profile?s.a.createElement("div",null,s.a.createElement(b,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),s.a.createElement(U,null)):s.a.createElement(x.a,null)},F=a(19),M=a(21),T=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return s.a.createElement(B,this.props)}}]),a}(s.a.Component);t.default=Object(M.d)(Object(C.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.id}}),{getUserProfile:E.c,getUserStatus:E.d,updateUserStatus:E.e}),F.f,s.a.memo)(T)}}]);
//# sourceMappingURL=4.4a4d0c5d.chunk.js.map