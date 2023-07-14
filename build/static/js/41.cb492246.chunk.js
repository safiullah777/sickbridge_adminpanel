(this["webpackJsonplightence-admin"]=this["webpackJsonplightence-admin"]||[]).push([[41],{2261:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var a=t(4),r=t(10),c=t(16),i=(t(0),t(62)),o=t(2262),s=t(297),d=t(298),l=t(299),u=t(2),b=["form","isFieldsChanged","setFieldsChanged","footer","loading","children"],j=function(e){var n=e.form,t=e.isFieldsChanged,s=e.setFieldsChanged,d=e.footer,l=e.loading,j=void 0!==l&&l,m=e.children,p=Object(c.a)(e,b),O=i.a.useForm(),f=Object(r.a)(O,1)[0],h=n||f;return Object(u.jsxs)(i.a,Object(a.a)(Object(a.a)({form:h},p),{},{children:[m,t&&(d||Object(u.jsx)(o.a,{loading:j,onCancel:function(){null===h||void 0===h||h.resetFields(),s&&s(!1)}}))]}))};j.Title=s.a,j.Item=d.a,j.List=l.a,j.useForm=i.a.useForm,j.Provider=i.a.Provider},2262:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(4),r=t(16),c=(t(0),t(2219)),i=t(2220),o=t(48),s=t(2209),d=t(2),l=["className","onCancel","loading"],u=function(e){var n=e.className,t=e.onCancel,u=e.loading,b=Object(r.a)(e,l),j=Object(s.a)().t;return Object(d.jsxs)(c.a,{className:n,gutter:[10,10],wrap:!1,children:[Object(d.jsx)(i.a,{span:12,children:Object(d.jsx)(o.a,Object(a.a)(Object(a.a)({block:!0,type:"ghost",onClick:t},b),{},{children:j("common.cancel")}))}),Object(d.jsx)(i.a,{span:12,children:Object(d.jsx)(o.a,Object(a.a)(Object(a.a)({block:!0,type:"primary",loading:u,htmlType:"submit"},b),{},{children:j("common.save")}))})]})}},2457:function(e,n,t){"use strict";t.r(n);var a,r,c,i,o,s,d,l,u,b,j,m,p,O,f,h,x,g,y,v=t(0),k=t(2209),F=t(68),C=t(2219),I=t(2220),_=t(10),w=t(62),M=t(80),T=t(2238),z=t(24),D=t(195),A=[{id:1,name:"profile.nav.payments.status.paid",priority:D.a.LOW},{id:2,name:"profile.nav.payments.status.scheduled",priority:D.a.INFO},{id:3,name:"profile.nav.payments.status.pending",priority:D.a.MEDIUM},{id:4,name:"profile.nav.payments.status.failed",priority:D.a.HIGH}],N=t(44),S=t(11),U=t(12),E=t(2301),q=t(13),H=Object(U.default)(E.a)(a||(a=Object(S.a)(["\n  padding: 0.375rem 0;\n  min-width: 7.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n\n  @media only screen and "," {\n    min-width: 6.5rem;\n  }\n"])),q.h.md),L=t(2),V=function(e){var n=e.color,t=e.text;return Object(L.jsx)(H,{color:n,children:t})},R=t(2210),P=U.default.div(r||(r=Object(S.a)(["\n  padding: 1.5rem 3.5rem;\n  display: flex;\n  align-items: center;\n\n  background-color: var(--secondary-background-color);\n"]))),$=U.default.div(c||(c=Object(S.a)(["\n  width: 2rem;\n  margin-right: 1.25rem;\n"]))),B=Object(U.default)(R.a.Text)(i||(i=Object(S.a)(["\n  font-weight: 600;\n"]))),J=U.default.div(o||(o=Object(S.a)(["\n  padding: 1rem 2rem;\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    height: 1px;\n\n    background-color: 1px solid rgba(var(--primary-rgb-color), 0.3);\n  }\n"]))),Q=U.default.div(s||(s=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n\n  &:nth-last-of-type(1) {\n    margin-bottom: 0;\n  }\n"]))),Y=Object(U.default)(R.a.Text)(d||(d=Object(S.a)(["\n  font-weight: 500;\n  font-size: 0.75rem;\n\n  color: var(--primary-color);\n"]))),G=U.default.div(l||(l=Object(S.a)(["\n  padding: 0.8rem;\n  text-align: center;\n"]))),W=t(48),X=function(e){var n=e.src,t=e.recipient,a=e.date,r=e.status,c=e.price,i=e.currency,o=Object(k.a)().t,s=Object(v.useMemo)((function(){return A.find((function(e){return e.id===r}))}),[r]);return s?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(P,{children:[Object(L.jsx)($,{children:Object(L.jsx)(T.a,{src:n,alt:t,shape:"circle"})}),Object(L.jsx)(B,{children:t})]}),Object(L.jsxs)(J,{children:[Object(L.jsxs)(Q,{children:[Object(L.jsx)(Y,{children:o("profile.nav.payments.date")}),Object(L.jsx)(B,{children:N.a.format(a,"LL")})]}),Object(L.jsxs)(Q,{children:[Object(L.jsx)(Y,{children:o("profile.nav.payments.status.title")}),Object(L.jsx)(V,{color:Object(z.c)(s.priority),text:o(s.name)})]}),Object(L.jsxs)(Q,{children:[Object(L.jsx)(Y,{children:o("profile.nav.payments.date")}),Object(L.jsx)(B,{children:Object(z.f)(c,i)})]})]}),Object(L.jsx)(G,{children:Object(L.jsx)(W.a,{type:"link",children:o("profile.nav.payments.details")})})]}):null},K=t(2229),Z=Object(U.default)(K.a)(u||(u=Object(S.a)(["\n  .ant-table-thead > tr > th {\n    border-top: 1px solid rgba(var(--primary-rgb-color), 0.3);\n\n    border-bottom: 1px solid rgba(var(--primary-rgb-color), 0.3);\n\n    color: var(--primary-color);\n\n    text-align: center;\n\n    &::before {\n      display: none;\n    }\n  }\n\n  .ant-table-tbody > tr > td {\n    border-bottom: 1px solid rgba(var(--primary--rgb-color), 0.3);\n\n    font-weight: 600;\n    font-size: 1rem;\n  }\n"]))),ee=U.default.div(b||(b=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  text-align: left;\n\n  & > span:first-of-type {\n    margin-right: 0.5rem;\n  }\n"]))),ne=function(e){var n=e.payments,t=Object(k.a)().t,a=Object(v.useMemo)((function(){return[{title:t("profile.nav.payments.recipient"),dataIndex:"recipient",key:"recipient",render:function(e){return Object(L.jsxs)(ee,{children:[Object(L.jsx)(T.a,{src:e.img,alt:e.name}),e.name]})},align:"center"},{title:t("profile.nav.payments.date"),dataIndex:"date",key:"date",render:function(e){return N.a.format(e,"LL")},sorter:function(e,n){return e.date-n.date},align:"center"},{title:t("profile.nav.payments.status.title"),dataIndex:"status",key:"status",render:function(e){return Object(L.jsx)(V,{color:Object(z.c)(e.priority),text:t(e.name).toUpperCase()})},align:"center"},{title:t("profile.nav.payments.totalAmount"),dataIndex:"totalAmount",key:"totalAmount",align:"center"},{title:"",dataIndex:"details",key:"details",align:"center",render:function(){return Object(L.jsx)(W.a,{type:"link",children:t("profile.nav.payments.details")})}}]}),[t]),r=Object(v.useMemo)((function(){return n.map((function(e,n){return{key:n,recipient:{name:e.recipient,img:e.imgUrl},date:e.date,status:A.find((function(n){return n.id===e.status})),totalAmount:Object(z.f)(e.amount,e.currency),details:e}}))}),[n]);return Object(L.jsx)(Z,{size:"middle",columns:a,dataSource:r,pagination:!1})},te=t(38),ae=t(72),re=t(254),ce=U.default.div(j||(j=Object(S.a)(["\n  ",";\n\n  @media only screen and "," {\n    ",";\n  }\n\n  @media only screen and "," {\n    margin: 0;\n  }\n"])),(function(e){return!e.isEmptyHistory&&"margin: 0 -".concat(re.a.mobile[1],"px -").concat(re.a.mobile[0],"px -").concat(re.a.mobile[1],"px")}),q.h.md,(function(e){return!e.isEmptyHistory&&"margin: 0 -".concat(re.a.tablet[1],"px -").concat(re.a.tablet[0],"px -").concat(re.a.tablet[1],"px")}),q.h.xl),ie=Object(U.default)(R.a.Text)(m||(m=Object(S.a)(["\n  @media only screen and "," {\n    font-size: 1rem;\n  }\n"])),q.h.md),oe=function(){var e=Object(v.useState)([]),n=Object(_.a)(e,2),t=n[0],a=n[1],r=Object(te.a)(),c=r.mobileOnly,i=r.isTablet,o=Object(k.a)().t,s=Object(v.useMemo)((function(){return t.map((function(e){return Object(L.jsx)(X,{src:e.imgUrl,recipient:e.recipient,date:e.date,status:e.status,price:e.amount,currency:e.currency},e.id)}))}),[t]);Object(v.useEffect)((function(){new Promise((function(e){setTimeout((function(){e([{id:1,recipient:"IBM Transactions",date:16260372e5,status:1,amount:500,currency:ae.a.USD,imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988451/Ellipse_72_hwxejr.png"},{id:2,recipient:"Citigroup",date:16304436e5,status:2,amount:40,currency:ae.a.USD,imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988456/Ellipse_73_zanfs3.png"},{id:3,recipient:"Netflix",date:162837e7,status:3,amount:1200,currency:ae.a.USD,imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988460/Ellipse_73_1_hhfpzj.png"},{id:4,recipient:"IBM Transactions",date:16226676e5,status:4,amount:190,currency:ae.a.USD,imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988451/Ellipse_72_hwxejr.png"}])}),0)})).then((function(e){return a(e)}))}),[]);var d=Object(v.useMemo)((function(){return Object(L.jsxs)(C.a,{gutter:[32,32],children:[Object(L.jsx)(I.a,{span:24,children:Object(L.jsx)(w.a.Title,{children:o("profile.nav.payments.paymentHistory")})}),Object(L.jsx)(I.a,{span:24,children:Object(L.jsxs)(ce,{isEmptyHistory:0===t.length,children:[c&&(t.length>0?s:Object(L.jsx)(ie,{children:o("profile.nav.payments.noHistory")})),i&&Object(L.jsx)(ne,{payments:t})]})})]})}),[i,t,s,c,o]);return i?d:Object(L.jsx)(M.a,{children:d})},se=t(15),de=t(4),le=t(2407),ue=(t(2412),U.default.div(p||(p=Object(S.a)(["\n  & > .rccs > .rccs__card--unknown > div {\n    background: ",";\n    background-size: cover;\n    transition: all 0.5s ease;\n  }\n\n  & > .rccs > .rccs__card {\n    & .rccs__card--front,\n    & .rccs__card--back {\n      box-shadow: none;\n    }\n\n    & > .rccs__card--front .rccs__issuer {\n      right: unset;\n      left: 10%;\n      background-position: left;\n    }\n\n    & > div {\n      color: var(--text-secondary-color);\n\n      & > .rccs__chip {\n        display: none;\n      }\n\n      & > div:first-of-type {\n        background: ",";\n        background-size: cover;\n        transition: all 0.5s ease;\n      }\n    }\n  }\n"])),(function(e){return"url(".concat(e.$background,")")}),(function(e){return"url(".concat(e.$background,")")}))),be=function(e){var n=e.className,t=e.cardData,a=e.children;return Object(L.jsxs)(ue,{className:n,$background:t.background,children:[Object(L.jsx)(le.a,Object(de.a)({},t)),a]})},je=t(2322),me=t(96),pe=t(421),Oe=U.default.div(O||(O=Object(S.a)(["\n  display: flex;\n  position: absolute;\n  column-gap: 1rem;\n  top: 13%;\n  right: 7%;\n\n  & > button {\n    padding: 0;\n    width: unset;\n    height: unset;\n\n    color: var(--text-secondary-color);\n  }\n"]))),fe=function(e){var n=e.onRemove,t=Object(k.a)().t;return Object(L.jsx)(Oe,{children:Object(L.jsx)(je.a,{title:t("common.deleteQuestion"),onConfirm:n,children:Object(L.jsx)(me.a,{type:"link",icon:Object(L.jsx)(pe.a,{})})})})},he=Object(U.default)(W.a)(f||(f=Object(S.a)(["\n  width: 290px;\n  height: 182.86px;\n  font-size: 2rem;\n  border-radius: 14.5px;\n"]))),xe=t(120),ge=t(8),ye=t(206),ve=t(2261),ke=t(2262),Fe=t(2299),Ce=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(k.a)().t;return Object(L.jsx)(ve.a.Item,{name:"number",label:a("profile.nav.payments.cardNumber"),rules:[{required:!0,message:a("common.requiredField")}],children:Object(L.jsx)(Fe.a,{placeholder:a("profile.nav.payments.yourCardNumber"),name:"number",mask:"0000 0000 0000 0000",onFocus:t,disabled:n})})},Ie=t(138),_e=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(k.a)().t;return Object(L.jsx)(ve.a.Item,{name:"name",label:a("profile.nav.payments.cardholderName"),rules:[{required:!0,message:a("common.requiredField")}],children:Object(L.jsx)(Ie.a,{name:"name",placeholder:a("profile.nav.payments.yourName"),onFocus:t,disabled:n})})},we=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(k.a)().t;return Object(L.jsx)(ve.a.Item,{name:"expiry",label:a("profile.nav.payments.expDate"),rules:[{required:!0,message:a("common.requiredField")}],children:Object(L.jsx)(Fe.a,{placeholder:"MM/YY",mask:"00/00",name:"expiry",onFocus:t,disabled:n})})},Me=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(k.a)().t;return Object(L.jsx)(ve.a.Item,{name:"cvc",label:a("profile.nav.payments.CVV"),rules:[{required:!0,message:a("common.requiredField")}],children:Object(L.jsx)(Fe.a,{placeholder:"***",mask:"000",name:"cvc",onFocus:t,disabled:n})})},Te=t(200),ze=U.default.div(h||(h=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 3.125rem;\n  height: 3.125rem;\n  margin: 0 auto;\n  transition: all 0.5s ease;\n\n  border-radius: ",";\n\n  ",";\n  background-size: cover;\n\n  & > div {\n    background: ",";\n    background-size: cover;\n  }\n\n  &:hover {\n    opacity: 0.7;\n\n    ",";\n    background-size: cover;\n  }\n"])),q.b,(function(e){return e.isActive&&"background: url(".concat(e.background,")")}),(function(e){return"url(".concat(e.background,")")}),(function(e){return"background: url(".concat(e.background,")")})),De=U.default.div(x||(x=Object(S.a)(["\n  width: calc(100% - 0.4rem);\n  height: calc(100% - 0.4rem);\n  margin: 0.2rem;\n\n  border: 5px solid var(--background-color);\n\n  border-radius: ",";\n"])),q.b),Ae=function(e){var n=e.cardData,t=e.setCardData,a=Object(k.a)().t,r=Object(v.useCallback)((function(e){return function(){t(Object(de.a)(Object(de.a)({},n),{},{background:e.background}))}}),[t,n]),c=Object(v.useMemo)((function(){return Te.a.map((function(e){return Object(L.jsx)(I.a,{xs:8,md:4,children:Object(L.jsx)(ze,{background:e.background,isActive:n.background===e.background,children:Object(L.jsx)(De,{tabIndex:0,onClick:r(e)})})},e.id)}))}),[n,r]);return Object(L.jsx)(ve.a.Item,{label:a("profile.nav.payments.cardTheme"),children:Object(L.jsx)(C.a,{gutter:[10,10],children:c})})},Ne=Object(U.default)(be)(g||(g=Object(S.a)(["\n  position: absolute;\n  top: -5rem;\n  left: 50%;\n  transform: translateX(-50%);\n"]))),Se=U.default.div(y||(y=Object(S.a)(["\n  padding-top: 7.5rem;\n"]))),Ue={name:"",cvc:"",expiry:"",number:"",focused:"",background:Te.a[0].background,isEdit:!1},Ee=function(e){var n=e.closeModal,t=e.onFormFinish,a=Object(v.useState)(Ue),r=Object(_.a)(a,2),c=r[0],i=r[1],o=Object(v.useState)(!1),s=Object(_.a)(o,2),d=s[0],l=s[1],u=Object(v.useState)(!1),b=Object(_.a)(u,2),j=b[0],m=b[1],p=ye.a.useForm(),O=Object(_.a)(p,1)[0],f=Object(v.useCallback)((function(e){i(Object(de.a)(Object(de.a)({},c),{},{focused:e.target.name}))}),[i,c]),h=Object(v.useCallback)((function(e){l(!0),setTimeout((function(){l(!1),m(!1);var a=Object(de.a)(Object(de.a)({},e),{},{background:c.background});t(a),i(Ue),n(),O.setFieldsValue(Ue)}),1e3)}),[c.background,n,O,t]);return Object(L.jsxs)(ve.a,{form:O,requiredMark:"optional",name:"paymentCard",onFinish:h,footer:Object(L.jsx)(ke.a,{loading:d,onCancel:n}),initialValues:Ue,onValuesChange:function(e){var n=Object.entries(e)[0];i(Object(de.a)(Object(de.a)({},c),{},Object(ge.a)({},n[0],n[1])))},isFieldsChanged:j,onFieldsChange:function(){return m(!0)},children:[Object(L.jsx)(Ne,{cardData:c}),Object(L.jsxs)(Se,{children:[Object(L.jsx)(Ce,{handleInputFocus:f}),Object(L.jsx)(_e,{handleInputFocus:f}),Object(L.jsxs)(C.a,{gutter:[20,0],children:[Object(L.jsx)(I.a,{span:12,children:Object(L.jsx)(we,{handleInputFocus:f})}),Object(L.jsx)(I.a,{span:12,children:Object(L.jsx)(Me,{handleInputFocus:f})})]}),Object(L.jsx)(Ae,{cardData:c,setCardData:i})]})]})},qe=function(e){var n=e.isModalOpen,t=e.closeModal,a=e.onCardAdd;return Object(L.jsx)(xe.c,{destroyOnClose:!0,size:"small",open:n,onCancel:t,footer:null,closable:!1,children:Object(L.jsx)(Ee,{closeModal:t,onFormFinish:a})})},He=function(e){var n=e.onCardAdd,t=Object(v.useState)(!1),a=Object(_.a)(t,2),r=a[0],c=a[1],i=Object(k.a)().t;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(he,{type:"ghost",onClick:function(){return c(!0)},children:i("profile.nav.payments.addNewCard")}),Object(L.jsx)(qe,{isModalOpen:r,closeModal:function(){return c(!1)},onCardAdd:n})]})},Le=function(e){var n=e.cards,t=e.onCardRemove,a=e.onCardAdd,r=(0,Object(te.a)().useMediaQuery)({query:"(min-width: ".concat(659.98,"px)")})?"start":"space-around";return Object(L.jsxs)(C.a,{justify:r,gutter:[16,16],children:[n.map((function(e){return Object(L.jsx)(I.a,{children:Object(L.jsx)(be,{cardData:e,children:Object(L.jsx)(fe,{onRemove:function(){return t(e.number)}})})},e.number)})),Object(L.jsx)(I.a,{children:Object(L.jsx)(He,{onCardAdd:a})})]})},Ve=t(320),Re=t(31),Pe=t(342),$e=function(){var e=Object(k.a)().t,n=Object(v.useState)([]),t=Object(_.a)(n,2),a=t[0],r=t[1],c=Object(v.useState)(!1),i=Object(_.a)(c,2),o=i[0],s=i[1],d=Object(Re.b)((function(e){var n,t;return null===(n=e.user)||void 0===n||null===(t=n.user)||void 0===t?void 0:t.id}));Object(v.useEffect)((function(){d&&(s(!0),Object(Pe.a)(d).then((function(e){return r(e)})).finally((function(){return s(!1)})))}),[d]);var l=Object(te.a)().isTablet,u=Object(L.jsxs)(C.a,{gutter:[32,32],children:[Object(L.jsx)(I.a,{span:24,children:Object(L.jsx)(w.a.Title,{children:e("profile.nav.payments.paymentMethod")})}),Object(L.jsx)(I.a,{span:24,children:Object(L.jsx)(Ve.a,{spinning:o,children:Object(L.jsx)(Le,{cards:a,onCardRemove:function(e){return r(a.filter((function(n){return n.number!==e})))},onCardAdd:function(e){r([].concat(Object(se.a)(a),[e]))}})})})]});return l?u:Object(L.jsx)(M.a,{children:u})},Be=function(){var e=Object(te.a)().isTablet,n=Object(v.useMemo)((function(){return Object(L.jsxs)(C.a,{gutter:[0,30],children:[Object(L.jsx)(I.a,{span:24,children:Object(L.jsx)($e,{})}),Object(L.jsx)(I.a,{span:24,children:Object(L.jsx)(oe,{})})]})}),[]);return e?Object(L.jsx)(M.a,{children:n}):n};n.default=function(){var e=Object(k.a)().t;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(F.a,{children:e("profile.nav.payments.title")}),Object(L.jsx)(Be,{})]})}}}]);
//# sourceMappingURL=41.cb492246.chunk.js.map