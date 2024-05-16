"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[446],{5666:function(e,a,s){s.d(a,{Z:function(){return I}});var r=s(9439),l=s(2791),n=s(7609),i=s(6082),t=s.n(i),o=s(7948),c=s.n(o),d={card:"TeachersCard_card__BInJP",avatarWrap:"TeachersCard_avatarWrap__UF-OU",avatar:"TeachersCard_avatar__3pTPQ",statusWrap:"TeachersCard_statusWrap__nSyCO",statList:"TeachersCard_statList__PFEet",statItem:"TeachersCard_statItem__mB4ZN",statIconWrap:"TeachersCard_statIconWrap__hz1xu",priceSpan:"TeachersCard_priceSpan__IykNC",favoriteWrap:"TeachersCard_favoriteWrap__GDdon",iconFav:"TeachersCard_iconFav__5Ig1F",iconFavActive:"TeachersCard_iconFavActive__4Hk7W",nameTitle:"TeachersCard_nameTitle__VydVu",descSpan:"TeachersCard_descSpan__QmXCb",descList:"TeachersCard_descList__xJ1oj",descItem:"TeachersCard_descItem__lW6AH",moreButton:"TeachersCard_moreButton__rXhg3",levelList:"TeachersCard_levelList__7g2k3",levelItem:"TeachersCard_levelItem__J7Uhf",buttonBook:"TeachersCard_buttonBook__ZfEBs",modalContent:"TeachersCard_modalContent__cbGXX","modal-overlay":"TeachersCard_modal-overlay__1h3mk"},m=s(4420),u=s(4546),h=s(5752),_=s.p+"static/media/user-icon.a76280f6b89e3e03aca1.webp",p={exprText:"ReadMoreCard_exprText__s9yHe",reviewsList:"ReadMoreCard_reviewsList__W3hhc",reviewsWrap:"ReadMoreCard_reviewsWrap__C7Woz",reviewsImg:"ReadMoreCard_reviewsImg__PpIWI",reviewersList:"ReadMoreCard_reviewersList__s2qkt",reviewersItem:"ReadMoreCard_reviewersItem__iT7fJ",commentText:"ReadMoreCard_commentText__bCHVQ"},v=s(184),x=function(e){var a=e.experience,s=e.reviews;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{className:p.exprText,children:a}),(0,v.jsx)("ul",{className:p.reviewsList,children:s.map((function(e,a){return(0,v.jsxs)("li",{className:p.reviewsItem,children:[(0,v.jsxs)("div",{className:p.reviewsWrap,children:[(0,v.jsx)("div",{className:p.imageWrap,children:(0,v.jsx)("img",{className:p.reviewsImg,src:_,alt:"reviewer icon",width:64})}),(0,v.jsxs)("ul",{className:p.reviewersList,children:[(0,v.jsx)("li",{className:p.reviewersItem,children:e.reviewer_name}),(0,v.jsxs)("li",{className:p.reviewersItem,children:[(0,v.jsx)("svg",{width:"16",height:"16",children:(0,v.jsx)("use",{href:"".concat(n.Z,"#icon-star")})}),(0,v.jsx)("span",{className:p.reviewersSpan,children:e.reviewer_rating})]})]})]}),(0,v.jsx)("p",{className:p.commentText,children:e.comment})]},a)}))})]})},j=s(5705),f=s(8007),N={formWrap:"BookTrialForm_formWrap__9rvee",formTitle:"BookTrialForm_formTitle__EcRXk",formText:"BookTrialForm_formText__Hgwj9",formCloseButton:"BookTrialForm_formCloseButton__I9x5v",teacherWrap:"BookTrialForm_teacherWrap__XF22E",avatar:"BookTrialForm_avatar__ni4no",teacherSpan:"BookTrialForm_teacherSpan__fsT2x",teacherText:"BookTrialForm_teacherText__dtBco",formSubtitle:"BookTrialForm_formSubtitle__DvJYr",form:"BookTrialForm_form__786lK",radioGroup:"BookTrialForm_radioGroup__Xqemv",radioLabel:"BookTrialForm_radioLabel__JKDj8",radioInput:"BookTrialForm_radioInput__TqKGK",infoLabel:"BookTrialForm_infoLabel__Egqzm",infoInput:"BookTrialForm_infoInput__5efDE",StyledField:"BookTrialForm_StyledField__K-TRu",submitButton:"BookTrialForm_submitButton__ifeDF"},g=RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),b={reason:"",name:"",email:"",number:""},T=f.Ry().shape({reason:f.Z_().required("Please choose a reason for learning English"),name:f.Z_().min(4,"Name must be at least 4 characters").max(32,"Name must be no more than 16 characters").required("Name is required"),email:f.Z_().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Enter a valid email").email("Enter a valid email").required("Email is required"),number:f.Z_().required("Phone is required").matches(g,"Phone number must be digits and dashes.")}),F=function(e){var a=e.onClose,s=e.card,r=s.avatar_url,l=s.name,i=s.surname;return(0,v.jsxs)("div",{className:N.formWrap,children:[(0,v.jsx)("h2",{className:N.formTitle,children:"Book trial lesson"}),(0,v.jsx)("p",{className:N.formText,children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),(0,v.jsx)("button",{className:N.formCloseButton,type:"button",onClick:function(){return a()},children:(0,v.jsx)("svg",{className:N.iconClose,width:"20",height:"20",children:(0,v.jsx)("use",{href:"".concat(n.Z,"#x")})})}),(0,v.jsxs)("div",{className:N.teacherWrap,children:[(0,v.jsx)("div",{children:(0,v.jsx)("img",{className:N.avatar,src:r,alt:"avatar",width:44})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{className:N.teacherSpan,children:"Your teacher"}),(0,v.jsxs)("p",{className:N.teacherText,children:[l," ",i]})]})]}),(0,v.jsx)("h3",{className:N.formSubtitle,children:"What is your main reason for learning English?"}),(0,v.jsx)(j.J9,{initialValues:b,validationSchema:T,onSubmit:function(e,s){(0,s.resetForm)(),a()},children:(0,v.jsxs)(j.l0,{className:N.form,children:[(0,v.jsx)("div",{className:N.radioWrap,id:"my-radio=group",children:(0,v.jsxs)("div",{className:N.radioGroup,role:"group","aria-labelledby":"my-radio-group",children:[(0,v.jsxs)("label",{className:N.radioLabel,children:[(0,v.jsx)(j.gN,{className:N.radioInput,type:"radio",name:"reason",value:"Career and business"}),"Career and business"]}),(0,v.jsxs)("label",{className:N.radioLabel,children:[(0,v.jsx)(j.gN,{className:N.radioInput,type:"radio",name:"reason",value:"Lesson for kids"}),"Lesson for kids"]}),(0,v.jsxs)("label",{className:N.radioLabel,children:[(0,v.jsx)(j.gN,{className:N.radioInput,type:"radio",name:"reason",value:"Living abroad"}),"Living abroad"]}),(0,v.jsxs)("label",{className:N.radioLabel,children:[(0,v.jsx)(j.gN,{className:N.radioInput,type:"radio",name:"reason",value:"Exams and coursework"}),"Exams and coursework"]}),(0,v.jsxs)("label",{className:N.radioLabel,children:[(0,v.jsx)(j.gN,{className:N.radioInput,type:"radio",name:"reason",value:"Culture, travel or hobby"}),"Culture, travel or hobby"]})]})}),(0,v.jsxs)("label",{className:N.infoLabel,children:[(0,v.jsx)(j.gN,{className:N.infoInput,name:"name",type:"text",placeholder:"Full Name"}),(0,v.jsx)(j.Bc,{name:"name",component:"p"})]}),(0,v.jsxs)("label",{className:N.infoLabel,children:[(0,v.jsx)(j.gN,{className:N.infoInput,name:"email",type:"email",placeholder:"Email"}),(0,v.jsx)(j.Bc,{name:"email",component:"p"})]}),(0,v.jsxs)("label",{className:N.infoLabel,children:[(0,v.jsx)(j.gN,{className:N.infoInput,name:"number",type:"tel",placeholder:"Phone"}),(0,v.jsx)(j.Bc,{name:"number",component:"p"})]}),(0,v.jsx)("button",{className:N.submitButton,type:"submit",children:"Book"})]})})]})},C=s(4217),I=function(e){var a=e.card,s=(0,l.useState)(!1),i=(0,r.Z)(s,2),o=i[0],_=i[1],p=(0,l.useState)(!1),j=(0,r.Z)(p,2),f=j[0],N=j[1],g=(0,m.v9)(u._l),b=(0,m.v9)(C.Qb),T=(0,m.I0)(),I=(0,l.useMemo)((function(){return g.find((function(e){return e.id===a.id}))}),[g,a.id]),L=function(){N(!1),document.body.style.overflow=""};return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("li",{className:d.card,children:[(0,v.jsxs)("div",{className:d.avatarWrap,children:[(0,v.jsx)("div",{className:d.statusWrap,children:(0,v.jsx)("svg",{width:"12",height:"12",children:(0,v.jsx)("use",{href:"".concat(n.Z,"#status")})})}),(0,v.jsx)("img",{className:d.avatar,src:a.avatar_url,alt:"avatar",width:30})]}),(0,v.jsxs)("div",{className:d.infoWrap,children:[(0,v.jsx)("div",{className:d.favoriteWrap,children:(0,v.jsx)("button",{type:"button",onClick:function(){return a.id,void(b?T((0,h.mN)(a)):t().Notify.Warning("Please authorize first"))},children:(0,v.jsx)("svg",{className:"".concat(d.iconFav," ").concat(I&&b?d.iconFavActive:""),width:"26",height:"26",children:(0,v.jsx)("use",{href:"".concat(n.Z,"#icon-fav")})})})}),(0,v.jsx)("div",{className:d.statWrap,children:(0,v.jsxs)("ul",{className:d.statList,children:[(0,v.jsx)("li",{className:d.mainText,children:"Languages"}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("li",{className:d.statItem,children:[(0,v.jsx)("div",{className:d.statIconWrap,children:(0,v.jsx)("svg",{width:"16",height:"16",children:(0,v.jsx)("use",{href:"".concat(n.Z,"#book")})})}),"Lessons online"]}),(0,v.jsxs)("li",{className:d.statItem,children:["Lessons done: ",a.lessons_done]}),(0,v.jsxs)("li",{className:d.statItem,children:[(0,v.jsx)("div",{className:d.statIconWrap,children:(0,v.jsx)("svg",{width:"16",height:"16",children:(0,v.jsx)("use",{href:"".concat(n.Z,"#icon-star")})})}),"Rating: ",a.rating]}),(0,v.jsxs)("li",{className:d.statItem,children:["Price / 1 hour:",(0,v.jsxs)("span",{className:d.priceSpan,children:[" ",a.price_per_hour,"$"]})]})]})]})}),(0,v.jsxs)("h3",{className:d.nameTitle,children:[a.name," ",a.surname]}),(0,v.jsxs)("ul",{className:d.descList,children:[(0,v.jsxs)("li",{className:d.descItem,children:["Speaks:"," ",(0,v.jsx)("span",{className:d.descSpan,children:a.languages.join(", ")})]}),(0,v.jsxs)("li",{className:d.descItem,children:["Lesson Info:"," ",(0,v.jsx)("span",{className:d.descSpan,children:a.lesson_info})]}),(0,v.jsxs)("li",{className:d.descItem,children:["Conditions:"," ",(0,v.jsx)("span",{className:d.descSpan,children:a.conditions.join(", ")})]})]}),!o&&(0,v.jsx)("button",{className:d.moreButton,type:"button",onClick:function(){_(!0)},children:"Read more"}),o&&(0,v.jsx)(x,{experience:a.experience,reviews:a.reviews}),(0,v.jsx)("ul",{className:d.levelList,children:a.levels.map((function(e,a){return(0,v.jsxs)("li",{className:d.levelItem,children:["#",e]},a)}))}),o&&(0,v.jsx)("button",{className:d.buttonBook,type:"button",onClick:function(){N(!0),document.body.style.overflow="hidden"},children:"Book trial lesson"})]}),(0,v.jsx)(c(),{isOpen:f,className:d.modalContent,overlayClassName:d.modalOverlay,contentLabel:"Modal",onRequestClose:L,children:(0,v.jsx)(F,{onClose:L,card:a})})]})})}},5580:function(e,a,s){s.r(a),s.d(a,{default:function(){return F}});var r=s(9439),l=s(4420),n=s(4546),i=s(2791),t=s(5666),o=function(e,a){return(0,i.useMemo)((function(){return e.filter((function(e){var s=a.languages,r=a.levels,l=a.price_per_hour;if("All"!==s&&"All"!==r){var n=!s||e.languages.includes(s),i=!r||e.levels.includes(r),t=!l||e.price_per_hour<=l;return n&&i&&t}if("All"===s&&"All"===r)return!l||e.price_per_hour<=l;if("All"===s&&"All"!==r){var o=!r||e.levels.includes(r),c=!l||e.price_per_hour<=l;return o&&c}if("All"!==s&&"All"===r){var d=!s||e.languages.includes(s),m=!l||e.price_per_hour<=l;return d&&m}return!0}))}),[e,a])},c="TeachersList_wrapList__85KoF",d="TeachersList_list__EE+ct",m="TeachersList_teacherText__Qv0fF",u="TeachersList_buttonMore__IqTY0",h=s(184),_=function(){var e=(0,l.v9)(n.no),a=(0,i.useState)(4),s=(0,r.Z)(a,2),_=s[0],p=s[1],v=(0,l.v9)(n.NU),x=(0,l.v9)(n.zK),j=o(e,x),f=j.slice(0,_);return(0,h.jsxs)("div",{className:c,children:[j.length>0?(0,h.jsx)("ul",{className:d,children:f.length>0&&f.map((function(e,a){return(0,h.jsx)(t.Z,{card:e},a)}))}):(0,h.jsx)("p",{className:m,children:"No teachers found.."}),f.length<v&&f.length>0&&(0,h.jsx)("button",{className:u,onClick:function(){p((function(e){return e+4}))},type:"button",children:"Load more"})]})},p=s(900),v=s(1413),x=s(5705),j=JSON.parse('{"dK":["All","English","Spanish","French","Italian","German","Mandarin Chinese","Polish"],"gr":["All","A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate"],"nt":[10,25,27,28,30,32]}'),f=s(5752),N={FiltersWrap:"Filters_FiltersWrap__JEqgE",FiltersForm:"Filters_FiltersForm__qlqEx",FiltersLabel:"Filters_FiltersLabel__V9c4h",FiltersInput:"Filters_FiltersInput__m3nda"},g={languages:"",levels:"",price_per_hour:""},b=function(){var e=(0,l.I0)();return(0,h.jsx)("div",{className:N.FiltersWrap,children:(0,h.jsx)(x.J9,{initialValues:g,children:function(a){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("form",{className:N.FiltersForm,children:[(0,h.jsxs)("label",{className:N.FiltersLabel,children:["Languages",(0,h.jsx)(x.gN,{name:"languages",as:"select",className:N.FiltersInput,onChange:function(s){a.setFieldValue("languages",s.target.value,!1),e((0,f.Tv)((0,v.Z)((0,v.Z)({},a.values),{},{languages:s.target.value})))},children:j.dK.map((function(e){return(0,h.jsx)("option",{className:N.FiltersOption,value:e,children:e},e)}))})]}),(0,h.jsxs)("label",{className:N.FiltersLabel,children:["Level of knowledge",(0,h.jsx)(x.gN,{name:"levels",as:"select",className:N.FiltersInput,onChange:function(s){a.setFieldValue("levels",s.target.value,!1),e((0,f.Tv)((0,v.Z)((0,v.Z)({},a.values),{},{levels:s.target.value})))},children:j.gr.map((function(e){return(0,h.jsx)("option",{className:N.FiltersOption,value:e,children:e},e)}))})]}),(0,h.jsxs)("label",{className:N.FiltersLabel,children:["Price",(0,h.jsx)(x.gN,{name:"price_per_hour",as:"select",className:N.FiltersInput,onChange:function(s){a.setFieldValue("price_per_hour",s.target.value,!1),e((0,f.Tv)((0,v.Z)((0,v.Z)({},a.values),{},{price_per_hour:s.target.value})))},children:j.nt.map((function(e){return(0,h.jsx)("option",{className:N.FiltersOption,value:parseFloat(e),children:"".concat(e," $")},e)}))})]})]})})}})})},T=s(8222),F=function(){var e=(0,l.I0)(),a=(0,l.v9)(n.Vc);return(0,i.useEffect)((function(){var a=new AbortController;return e((0,p.i)({signal:a.signal})),function(){return a.abort()}}),[e]),(0,h.jsxs)("div",{style:{backgroundColor:"#f8f8f8"},children:[(0,h.jsx)(b,{}),a?(0,h.jsx)(T.Z,{}):(0,h.jsx)(_,{})]})}}}]);
//# sourceMappingURL=446.579894ff.chunk.js.map