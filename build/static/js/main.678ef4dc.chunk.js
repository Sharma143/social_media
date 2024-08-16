(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(19),s=a(31),o=a(78),l=a(91),u="UPDATE",d="CREATE",p="DELETE",j="FETCH_ALL",b="AUTH",f="LOGOUT",h=a(12),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return localStorage.setItem("profile",JSON.stringify(Object(h.a)({},null===t||void 0===t?void 0:t.data))),Object(h.a)(Object(h.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case f:return localStorage.clear(),Object(h.a)(Object(h.a)({},e),{},{authData:null});default:return e}},x=Object(s.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e.filter((function(e){return e._id!==t.payload}));case u:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case j:return t.payload;case d:return[].concat(Object(l.a)(e),[t.payload]);default:return e}},auth:m}),O=a(179),g=a(39),v=a(13),y=a(27),C=a(169),w=a(135),k=a(171),N=a(186),S=a(172),I=a.p+"static/media/memories.9cfa8a46.png",D=a(165),A=a(168),T=Object(D.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(A.a[500]),backgroundColor:A.a[500]}}})),E=a(2),F=function(){var e=T(),t=Object(v.f)(),a=Object(v.g)(),r=Object(i.b)(),c=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),s=Object(y.a)(c,2),o=s[0],l=s[1];return Object(n.useEffect)((function(){null===o||void 0===o||o.token;l(JSON.parse(localStorage.getItem("profile")))}),[a]),Object(E.jsxs)(C.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(w.a,{component:g.b,to:"/",className:e.heading,variant:"h3",align:"center",children:"Memories"}),Object(E.jsx)("img",{className:e.image,src:I,alt:"img",height:"60"})]}),Object(E.jsx)(k.a,{className:e.toolbar,children:o?Object(E.jsxs)("div",{className:e.profile,children:[Object(E.jsx)(N.a,{className:e.purple,alt:o.result.name,src:o.result.imageUrl,children:o.result.name.charAt(0)}),Object(E.jsx)(w.a,{className:e.userName,variant:"h6",children:o.result.name}),Object(E.jsx)(S.a,{variant:"contained",className:e.logout,color:"secondary",onClick:function(){r({type:"LOGOUT"}),t.push("/"),l(null)},children:"Logout"})]}):Object(E.jsx)(S.a,{component:g.b,to:"/auth",variant:"contained",color:"primary",children:"Sign in"})})]})},B=a(185),W=a(178),_=a(15),L=a.n(_),P=a(24),U=a(83),z=a.n(U).a.create({baseUrl:"http://localhost:5000"});z.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var J=function(e,t){return z.patch("/posts/".concat(e),t)},M=function(e){return z.delete("/posts/".concat(e))},H=function(e){return z.patch("/posts/".concat(e,"/likePost"))},R=function(e){return z.post("/user/signin",e)},G=function(e){return z.post("/user/signup",e)},V=a(173),q=a(174),Z=a(175),K=a(176),Q=a(86),X=a.n(Q),Y=a(87),$=a.n(Y),ee=a(85),te=a.n(ee),ae=a(84),ne=a.n(ae),re=Object(D.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),ce=function(e){var t=e.post,a=e.setCurrentId,n=re(),r=Object(i.b)();return Object(E.jsxs)(V.a,{className:n.card,children:[Object(E.jsx)(q.a,{className:n.media,image:t.selectedFile,title:t.title}),Object(E.jsxs)("div",{className:n.overlay,children:[Object(E.jsx)(w.a,{variant:"h6",children:t.name}),Object(E.jsx)(w.a,{variant:"body2",children:ne()(t.createdAt).fromNow()})]}),Object(E.jsx)("div",{className:n.overlay2,children:Object(E.jsx)(S.a,{style:{color:"white"},size:"small",onClick:function(){a(t._id)},children:Object(E.jsx)(te.a,{fontSize:"default"})})}),Object(E.jsx)("div",{className:n.details,children:Object(E.jsx)(w.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(E.jsx)(w.a,{className:n.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(E.jsx)(Z.a,{children:Object(E.jsx)(w.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(E.jsxs)(K.a,{className:n.cardActions,children:[Object(E.jsxs)(S.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(P.a)(L.a.mark((function t(a){var n,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H(e);case 3:n=t.sent,r=n.data,a({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(E.jsx)(X.a,{fontSize:"small"}),"\xa0 Like  \xa0",t.likeCount]}),Object(E.jsxs)(S.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(P.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(E.jsx)($.a,{fontSize:"small"}),"Delete"]})]})]})},ie=Object(D.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),se=a(177),oe=function(e){var t=e.setCurrentId,a=ie(),n=Object(i.c)((function(e){return e.posts}));return console.log(n),n.length?Object(E.jsx)(W.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(E.jsx)(W.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(ce,{post:e,setCurrentId:t})},e._id)}))}):Object(E.jsx)(se.a,{})},le=a(93),ue=a(184),de=a(88),pe=a.n(de),je=Object(D.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),be=function(e){var t,a=e.currentId,r=e.setCurrentId,c=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),s=Object(y.a)(c,2),o=s[0],l=s[1],p=Object(i.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),j=je(),b=Object(i.b)(),f=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){p&&l(p)}),[p]);var m=function(){r(0),l({title:"",message:"",tags:"",selectedFile:""})};return(null===f||void 0===f||null===(t=f.result)||void 0===t?void 0:t.name)?Object(E.jsx)("div",{children:Object(E.jsx)(le.a,{className:j.paper,children:Object(E.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(j.root," ").concat(j.form),onSubmit:function(e){var t,n;(e.preventDefault(),0===a)?b(function(e){return function(){var t=Object(P.a)(L.a.mark((function t(a){var n,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,z.post("/posts",c);case 3:n=t.sent,r=n.data,a({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(Object(h.a)(Object(h.a)({},o),{},{name:null===f||void 0===f||null===(t=f.result)||void 0===t?void 0:t.name}))):b(function(e,t){return function(){var a=Object(P.a)(L.a.mark((function a(n){var r,c;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,J(e,t);case 3:r=a.sent,c=r.data,n({type:u,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(a,Object(h.a)(Object(h.a)({},o),{},{name:null===f||void 0===f||null===(n=f.result)||void 0===n?void 0:n.name})));m()},children:[Object(E.jsxs)(w.a,{variant:"h6",children:[a?"Editing":"Creating"," a Memory"]}),Object(E.jsx)(ue.a,{name:"title",variant:"outlined",label:"title",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(h.a)(Object(h.a)({},o),{},{title:e.target.value}))}}),Object(E.jsx)(ue.a,{name:"message",variant:"outlined",label:"message",fullWidth:!0,value:o.message,onChange:function(e){return l(Object(h.a)(Object(h.a)({},o),{},{message:e.target.value}))}}),Object(E.jsx)(ue.a,{name:"tags",variant:"outlined",label:"tags",fullWidth:!0,value:o.tags,onChange:function(e){return l(Object(h.a)(Object(h.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(E.jsx)("div",{className:j.fileInput,children:Object(E.jsx)(pe.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(h.a)(Object(h.a)({},o),{},{selectedFile:t}))}})}),Object(E.jsx)(S.a,{className:j.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(E.jsx)(S.a,{variant:"contained",color:"secondary",size:"small",onClick:m,fullWidth:!0,children:"Clear"})]})})}):Object(E.jsx)(le.a,{className:j.paper,children:Object(E.jsx)(w.a,{variant:"h6",align:"center",children:"please Signin to create your own memories and like others memory"})})},fe=function(){var e=Object(n.useState)(null),t=Object(y.a)(e,2),a=t[0],r=t[1],c=Object(i.b)();return Object(n.useEffect)((function(){c(function(){var e=Object(P.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.get("/posts");case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,c]),Object(E.jsx)(B.a,{in:!0,children:Object(E.jsx)(O.a,{children:Object(E.jsxs)(W.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(E.jsx)(W.a,{item:!0,xs:12,sm:7,children:Object(E.jsx)(oe,{setCurrentId:r})}),Object(E.jsx)(W.a,{item:!0,xs:12,sm:4,children:Object(E.jsx)(be,{currentId:a,setCurrentId:r})})]})})})},he=a(57),me=a(89),xe=a.n(me),Oe=function(){return Object(E.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(E.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},ge=a(180),ve=a(181),ye=a(182),Ce=a(183),we=function(e){var t=e.half,a=e.name,n=e.handleChange,r=e.label,c=e.autoFocus,i=e.type,s=e.handleShowPassword;return Object(E.jsx)(W.a,{item:!0,xs:12,sm:t?6:12,children:Object(E.jsx)(ue.a,{name:a,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:r,autoFocus:c,type:i,InputProps:"password"===a?{endAdornment:Object(E.jsx)(ge.a,{position:"end",children:Object(E.jsx)(ve.a,{onClick:s,children:"password"===i?Object(E.jsx)(ye.a,{}):Object(E.jsx)(Ce.a,{})})})}:null})})},ke=a(90),Ne=a.n(ke),Se=Object(D.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ie={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},De=function(){var e=Se(),t=Object(i.b)(),a=Object(v.f)(),r=Object(n.useState)(!1),c=Object(y.a)(r,2),s=c[0],o=c[1],l=Object(n.useState)(!1),u=Object(y.a)(l,2),d=u[0],p=u[1],j=Object(n.useState)(Ie),f=Object(y.a)(j,2),m=f[0],x=f[1],g=function(e){x(Object(h.a)(Object(h.a)({},m),{},Object(he.a)({},e.target.name,e.target.value)))},C=function(){var e=Object(P.a)(L.a.mark((function e(n){var r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=null===n||void 0===n?void 0:n.profileObj,c=null===n||void 0===n?void 0:n.tokenId;try{t({type:"AUTH",data:{result:r,token:c}}),a.push("/")}catch(i){console.log(i)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)(O.a,{component:"main",maxWidth:"xs",children:Object(E.jsxs)(le.a,{className:e.paper,elevation:3,children:[Object(E.jsx)(N.a,{className:e.avatar,children:Object(E.jsx)(Ne.a,{})}),Object(E.jsx)(w.a,{variant:"h5",children:d?"Sign Up":"Sign In"}),Object(E.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),console.log(m),t(d?function(e,t){return function(){var a=Object(P.a)(L.a.mark((function a(n){var r,c;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,G(e);case 3:r=a.sent,c=r.data,n({type:b,data:c}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(m,a):function(e,t){return function(){var a=Object(P.a)(L.a.mark((function a(n){var r,c;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R(e);case 3:r=a.sent,c=r.data,n({type:b,data:c}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(m,a))},children:[Object(E.jsxs)(W.a,{container:!0,spacing:2,children:[d&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(we,{name:"firstName",label:"First Name",handleChange:g,autoFocus:!0,half:!0}),Object(E.jsx)(we,{name:"lastName",label:"Last Name",handleChange:g,half:!0})]}),Object(E.jsx)(we,{name:"email",label:"Email Address",handleChange:g,type:"text"}),Object(E.jsx)(we,{name:"password",label:"Password",handleChange:g,type:s?"text":"password",handleShowPassword:function(){return o((function(e){return!e}))}}),d&&Object(E.jsx)(we,{name:"confirmPassword",label:"Repeat Password",handleChange:g,type:"password"})]}),Object(E.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:d?"Sign Up":"Sign In"}),Object(E.jsx)(xe.a,{clientId:"848055730228-nsrr3vd1uh8mpvd3so0gvvl02pt7n7uk.apps.googleusercontent.com",render:function(t){return Object(E.jsx)(S.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(E.jsx)(Oe,{}),variant:"contained",children:"Google Sign In"})},onSuccess:C,onFailure:function(){console.log("failure")},cookiePolicy:"single_host_origin"}),Object(E.jsx)(W.a,{container:!0,justify:"flex-end",children:Object(E.jsx)(W.a,{item:!0,children:Object(E.jsx)(S.a,{onClick:function(){p((function(e){return!e})),o(!1)},children:d?"Already have an account? Sign In":"Dont have an acoount? Sign Up"})})})]})]})})},Ae=function(){return Object(E.jsx)(g.a,{children:Object(E.jsxs)(O.a,{maxWidth:"lg",children:[Object(E.jsx)(F,{}),Object(E.jsxs)(v.c,{children:[Object(E.jsx)(v.a,{path:"/",exact:!0,component:fe}),Object(E.jsx)(v.a,{path:"/auth",exact:!0,component:De})]})]})})},Te=(a(132),Object(s.e)(x,Object(s.d)(Object(s.a)(o.a))));c.a.render(Object(E.jsx)(i.a,{store:Te,children:Object(E.jsx)(Ae,{})}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.678ef4dc.chunk.js.map