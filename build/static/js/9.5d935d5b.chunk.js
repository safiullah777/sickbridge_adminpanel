(this["webpackJsonplightence-admin"]=this["webpackJsonplightence-admin"]||[]).push([[9],{2261:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var i=t(4),a=t(10),r=t(16),c=(t(0),t(62)),s=t(2262),o=t(297),l=t(298),d=t(299),u=t(2),j=["form","isFieldsChanged","setFieldsChanged","footer","loading","children"],b=function(e){var n=e.form,t=e.isFieldsChanged,o=e.setFieldsChanged,l=e.footer,d=e.loading,b=void 0!==d&&d,O=e.children,m=Object(r.a)(e,j),f=c.a.useForm(),v=Object(a.a)(f,1)[0],h=n||v;return Object(u.jsxs)(c.a,Object(i.a)(Object(i.a)({form:h},m),{},{children:[O,t&&(l||Object(u.jsx)(s.a,{loading:b,onCancel:function(){null===h||void 0===h||h.resetFields(),o&&o(!1)}}))]}))};b.Title=o.a,b.Item=l.a,b.List=d.a,b.useForm=c.a.useForm,b.Provider=c.a.Provider},2262:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var i=t(4),a=t(16),r=(t(0),t(2219)),c=t(2220),s=t(48),o=t(2209),l=t(2),d=["className","onCancel","loading"],u=function(e){var n=e.className,t=e.onCancel,u=e.loading,j=Object(a.a)(e,d),b=Object(o.a)().t;return Object(l.jsxs)(r.a,{className:n,gutter:[10,10],wrap:!1,children:[Object(l.jsx)(c.a,{span:12,children:Object(l.jsx)(s.a,Object(i.a)(Object(i.a)({block:!0,type:"ghost",onClick:t},j),{},{children:b("common.cancel")}))}),Object(l.jsx)(c.a,{span:12,children:Object(l.jsx)(s.a,Object(i.a)(Object(i.a)({block:!0,type:"primary",loading:u,htmlType:"submit"},j),{},{children:b("common.save")}))})]})}},2291:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));t(0);var i=t(2209),a=t(2261),r=t(138),c=t(2),s=function(e){e.required,e.onClick,e.verified;var n=Object(i.a)().t;return Object(c.jsx)(a.a.Item,{name:"phoneNo",label:n("Phone"),children:Object(c.jsx)(r.a,{isDisable:!0})})}},2292:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var i=t(4),a=t(16),r=(t(0),t(2209)),c=t(138),s=t(2261),o=t(2),l=["required","onClick","verified"],d=function(e){var n=e.required,t=e.onClick,d=e.verified,u=Object(a.a)(e,l),j=Object(r.a)().t;return Object(o.jsx)(s.a.Item,Object(i.a)(Object(i.a)({name:"email",$isSuccess:d,$successText:j("profile.nav.personalInfo.verified"),label:j("common.email"),rules:[{required:n,message:j("common.requiredField")},{type:"email",message:j("common.notValidEmail")}]},u),{},{children:Object(o.jsx)(c.a,{disabled:d,onClick:t})}))}},2293:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return a}));var i=new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),a=/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?/gi},2463:function(e,n,t){"use strict";t.r(n);var i,a,r,c=t(0),s=t(2209),o=t(2219),l=t(2220),d=t(80),u=t(10),j=t(2261),b=t(300),O=t(2),m=function(){var e=Object(s.a)().t;return Object(O.jsx)(j.a.Item,{name:"confirmPassword",label:e("profile.nav.securitySettings.confirmPassword"),dependencies:["newPassword"],rules:[{required:!0,message:e("profile.nav.securitySettings.requiredPassword")},function(n){var t=n.getFieldValue;return{validator:function(n,i){return i&&t("newPassword")!==i?Promise.reject(new Error(e("profile.nav.securitySettings.dontMatchPassword"))):Promise.resolve()}}}],children:Object(O.jsx)(b.a,{})})},f=function(){var e=Object(s.a)().t;return Object(O.jsx)(j.a.Item,{name:"password",label:e("profile.nav.securitySettings.currentPassword"),rules:[{required:!0,message:e("profile.nav.securitySettings.requiredPassword")}],children:Object(O.jsx)(b.a,{})})},v=t(2293),h=function(){var e=Object(s.a)().t;return Object(O.jsx)(j.a.Item,{name:"newPassword",label:e("profile.nav.securitySettings.newPassword"),dependencies:["password"],rules:[{required:!0,message:e("profile.nav.securitySettings.requiredPassword")},{pattern:v.a,message:e("profile.nav.securitySettings.notValidPassword")},function(n){var t=n.getFieldValue;return{validator:function(n,i){return i&&t("password")===i?Promise.reject(new Error(e("profile.nav.securitySettings.samePassword"))):Promise.resolve()}}}],children:Object(O.jsx)(b.a,{})})},x=t(84),p=t(11),g=t(48),w=t(13),y=t(12),C=Object(y.default)(g.a)(i||(i=Object(p.a)(["\n  margin: 0.5rem 0 1.5rem 0;\n  width: 100%;\n\n  @media only screen and "," {\n    max-width: 10rem;\n  }\n\n  @media only screen and "," {\n    max-width: unset;\n  }\n"])),w.h.md,w.h.xl),P=function(){var e=Object(c.useState)(!1),n=Object(u.a)(e,2),t=n[0],i=n[1],a=Object(c.useState)(!1),r=Object(u.a)(a,2),d=r[0],b=r[1],v=Object(s.a)().t;return Object(O.jsx)(j.a,{name:"newPassword",requiredMark:"optional",isFieldsChanged:t,onFieldsChange:function(){return i(!0)},footer:Object(O.jsx)(C,{loading:d,type:"primary",htmlType:"submit",children:v("common.confirm")}),onFinish:function(e){b(!0),setTimeout((function(){b(!1),i(!1),x.a.success({message:v("common.success")}),console.log(e)}),1e3)},children:Object(O.jsxs)(o.a,{gutter:{md:15,xl:30},children:[Object(O.jsx)(l.a,{span:24,children:Object(O.jsx)(j.a.Item,{children:Object(O.jsx)(j.a.Title,{children:v("profile.nav.securitySettings.changePassword")})})}),Object(O.jsx)(l.a,{xs:24,md:12,xl:24,children:Object(O.jsx)(f,{})}),Object(O.jsx)(l.a,{xs:24,md:12,xl:24,children:Object(O.jsx)(h,{})}),Object(O.jsx)(l.a,{xs:24,md:12,xl:24,children:Object(O.jsx)(m,{})})]})})},F=t(8),S=t(4),k=t(210),q=t(2292),A=t(2291),E=t(31),I=Object(y.default)(k.a)(a||(a=Object(p.a)(["\n  margin-right: 0;\n  width: 100%;\n  transition: all 0.5s ease;\n\n  ",";\n\n  & > span:last-of-type {\n    flex-grow: 1;\n  }\n"])),(function(e){return!e.$isActive&&"opacity: 0.5"})),T=function(e){var n=e.selectedOption,t=e.setSelectedOption,i=Object(E.b)((function(e){return e.user.user})),a=Object(c.useMemo)((function(){return{isPhoneActive:"phone"===n,isEmailActive:"email"===n}}),[n]),r=a.isEmailActive,s=a.isPhoneActive,o=Object(c.useCallback)((function(e){return function(){t(e)}}),[t]);return Object(c.useEffect)((function(){null!==i&&void 0!==i&&i.email.verified&&null!==i&&void 0!==i&&i.phone.verified&&t(null)}),[t,null===i||void 0===i?void 0:i.email.verified,null===i||void 0===i?void 0:i.phone.verified]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(k.c,{value:n,onChange:function(e){return t(e.target.value)},children:[Object(O.jsx)(I,{value:"phone",$isActive:s,disabled:null===i||void 0===i?void 0:i.phone.verified,children:Object(O.jsx)(A.a,{required:s,onClick:o("phone"),verified:null===i||void 0===i?void 0:i.phone.verified})}),Object(O.jsx)(I,{value:"email",$isActive:r,disabled:null===i||void 0===i?void 0:i.email.verified,children:Object(O.jsx)(q.a,{required:r,onClick:o("email"),verified:null===i||void 0===i?void 0:i.email.verified})})]})})},$=t(2240),z=function(e){var n=e.isEnabled,t=e.setEnabled,i=Object(s.a)().t;return Object(O.jsx)(j.a.Item,{children:Object(O.jsxs)(o.a,{gutter:[10,10],justify:"space-between",align:"middle",children:[Object(O.jsx)(l.a,{span:20,children:Object(O.jsx)(j.a.Title,{children:i("profile.nav.securitySettings.twoFactorAuth")})}),Object(O.jsx)(l.a,{span:4,children:Object(O.jsx)(o.a,{justify:"end",children:Object(O.jsx)(l.a,{children:Object(O.jsx)(j.a.Item,{name:"2fa",children:Object(O.jsx)($.a,{checked:n,onChange:t})})})})})]})})},M=t(379),V=t(198),Z=t(120),N=Object(y.default)(Z.c)(r||(r=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .ant-modal-body {\n    padding: 0;\n  }\n"]))),B=function(){var e=Object(E.b)((function(e){return e.user.user})),n=Object(c.useMemo)((function(){return(null===e||void 0===e?void 0:e.email.name)&&!(null!==e&&void 0!==e&&e.email.verified)||(null===e||void 0===e?void 0:e.phone.number)&&!(null!==e&&void 0!==e&&e.phone.verified)}),[e]),t=Object(c.useState)(Boolean(n)),i=Object(u.a)(t,2),a=i[0],r=i[1],d=Object(c.useState)(!1),b=Object(u.a)(d,2),m=b[0],f=b[1],v=Object(c.useState)(Boolean((null===e||void 0===e?void 0:e.email.verified)||(null===e||void 0===e?void 0:e.phone.verified))),h=Object(u.a)(v,2),p=h[0],w=h[1],y=Object(c.useState)("email"),C=Object(u.a)(y,2),P=C[0],k=C[1],q=Object(c.useState)(!1),A=Object(u.a)(q,2),I=A[0],$=A[1],Z=Object(E.a)(),B=Object(s.a)().t,J=Object(c.useCallback)((function(){if(e&&P){f(!1),r(!1),$(!1),x.a.success({message:B("common.success")});var n=Object(S.a)(Object(S.a)({},e),{},Object(F.a)({},P,Object(S.a)(Object(S.a)({},e[P]),{},{verified:!0})));Z(Object(V.b)(n))}}),[Z,P,B,e]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{name:"twoFactorAuth",requiredMark:"optional",isFieldsChanged:a,onFieldsChange:function(){return r(!0)},initialValues:{email:null===e||void 0===e?void 0:e.email.name,phone:null===e||void 0===e?void 0:e.phone.number},footer:p&&Object(O.jsx)(g.a,{type:"link",loading:m,htmlType:"submit",children:B("profile.nav.securitySettings.verify")})||Object(O.jsx)("span",{}),onFinish:function(){$(!0)},children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(l.a,{span:24,children:Object(O.jsx)(z,{isEnabled:p,setEnabled:w})}),p&&Object(O.jsx)(l.a,{span:24,children:Object(O.jsx)(T,{selectedOption:P,setSelectedOption:k})})]})}),Object(O.jsx)(N,{destroyOnClose:!0,open:I,footer:!1,closable:!1,onCancel:function(){return $(!1)},children:Object(O.jsx)(M.a,{onBack:function(){return $(!1)},onFinish:J})})]})},J=function(){return Object(O.jsx)(d.a,{children:Object(O.jsxs)(o.a,{gutter:[30,0],children:[Object(O.jsx)(l.a,{xs:24,xl:10,children:Object(O.jsx)(P,{})}),Object(O.jsx)(l.a,{xs:24,xl:14,children:Object(O.jsx)(B,{})})]})})},_=t(68);n.default=function(){var e=Object(s.a)().t;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(_.a,{children:e("profile.nav.securitySettings.title")}),Object(O.jsx)(J,{})]})}}}]);
//# sourceMappingURL=9.5d935d5b.chunk.js.map