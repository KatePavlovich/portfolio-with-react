(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports={navbar:"Header_navbar__yg1-4",menu:"Header_menu__-qqdZ",languageBtn:"Header_languageBtn__MQvQv"}},2:function(e,t,a){e.exports={section:"Home_section__3XndA",introSection:"Home_introSection__3y4br",contactsWrapper:"Home_contactsWrapper__1-Hq7",contactsWrapperInner:"Home_contactsWrapperInner__2ZtpC",bioPhoto:"Home_bioPhoto__2EIkA",content:"Home_content__2wrxy",contactsWrapperLink:"Home_contactsWrapperLink__3saLn",info:"Home_info__3vLhe",descriptionColumns:"Home_descriptionColumns__1IbfA",descriptionIndent:"Home_descriptionIndent__3oa4E",descriptionPointsStyle:"Home_descriptionPointsStyle__2ZuIl",listItem:"Home_listItem__3fH4u",downloadButton:"Home_downloadButton__2OSl0"}},24:function(e,t,a){e.exports={content:"Projects_content__3K5O9"}},27:function(e,t,a){e.exports=a(59)},32:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(32),a(61)),i=a(62),s=a(15),m=a(60),p=function(e){var t=e.label,a=e.to,n=e.activeOnlyWhenExact;return r.a.createElement(i.a,{path:a,exact:n,children:function(e){var n=e.match;return r.a.createElement("div",null,r.a.createElement(m.a,{to:a,className:n?"nav-link--active":"nav-link"},t))}})},h=a(12),u=a.n(h),g=a(16),d=a(25),E=a(20),v=a.n(E),f=a(6);g.a.use(d.a).use(v.a).use(f.a).init({fallbackLng:["en"],defaultLng:"en",debug:!0,whitelist:["en","ru"],interpolation:{escapeValue:!1}});var _=g.a,b=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(function(){c(_.language)});var l=Object(f.b)().t,o=function(e){_.changeLanguage(e),c(e)};return r.a.createElement("header",null,"en"===a&&r.a.createElement("button",{className:u.a.languageBtn,onClick:function(){return o("ru")}},"ru"),"ru"===a&&r.a.createElement("button",{className:u.a.languageBtn,onClick:function(){return o("en")}},"en"),r.a.createElement("nav",{className:u.a.navbar},r.a.createElement("ul",{className:u.a.menu},r.a.createElement("li",null,r.a.createElement(p,{activeOnlyWhenExact:!0,to:"/",label:l("About")})),r.a.createElement("li",null,r.a.createElement(p,{to:"/projects",label:l("Work")})),r.a.createElement("li",null,r.a.createElement(p,{to:"/contact",label:l("ContactMenu")})))))},w=a(2),k=a.n(w),N=function(){var e=Object(f.b)().t;return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("section",{className:k.a.section},r.a.createElement("div",{className:k.a.parallax}),r.a.createElement("section",{className:k.a.introSection},r.a.createElement("h1",null,e("weather.title")),r.a.createElement("div",{className:k.a.contactsWrapper},r.a.createElement("img",{className:k.a.bioPhoto,src:"https://github.com/KatePavlovich/rsschool-codejam1-cv/blob/gh-pages/img/bioPhoto.jpg?raw=true",alt:"me",width:"144",height:"144"}),r.a.createElement("p",null,e("Tel"),r.a.createElement("a",{className:k.a.contactsWrapperLink,href:"tel:+375293207933"},"+37529 320 79 33")),r.a.createElement("p",null,e("Email"),r.a.createElement("a",{className:k.a.contactsWrapperLink,href:"mailto:ekate.pavlovich@gmail.com"},"ekate.pavlovich@gmail.com")))),r.a.createElement("section",{className:k.a.content},r.a.createElement("article",{className:k.a.descriptionIndent},e("Content").split("%").map(function(e,t){return r.a.createElement("p",{key:t},e,r.a.createElement("br",null))}))),r.a.createElement("section",{className:k.a.info},r.a.createElement("div",{className:k.a.descriptionColumns},r.a.createElement("p",{className:k.a.descriptionPointsStyle},e("Education"),": "),r.a.createElement("ul",null,r.a.createElement("li",{className:k.a.listItem},e("Educ1")),r.a.createElement("li",{className:k.a.listItem},e("Educ2")),r.a.createElement("li",{className:k.a.listItem},"The Rolling Scopes School, 2017-2018"))),r.a.createElement("div",{className:k.a.descriptionColumns},r.a.createElement("p",{className:k.a.descriptionPointsStyle},e("Certificates"),":"),r.a.createElement("ul",null,r.a.createElement("li",{className:k.a.listItem},r.a.createElement("a",{className:k.a.contactsWrapperLink,href:"https://www.freecodecamp.org/certification/kate/front-end-libraries",target:"_blank",rel:"noopener noreferrer"},"Front End Libraries")),r.a.createElement("li",{className:k.a.listItem},r.a.createElement("a",{className:k.a.contactsWrapperLink,href:"https://www.freecodecamp.org/certification/kate/javascript-algorithms-and-data-structures",target:"_blank",rel:"noopener noreferrer"},"JavaScript Algorithms and Data Structures")),r.a.createElement("li",{className:k.a.listItem},r.a.createElement("a",{className:k.a.contactsWrapperLink,href:"https://www.sololearn.com/Certificate/1024-9303082/pdf/",target:"_blank",rel:"noopener noreferrer"},"JavaScript Tutorial course")),r.a.createElement("li",{className:k.a.listItem},r.a.createElement("a",{className:k.a.contactsWrapperLink,href:"https://www.sololearn.com/Certificate/1059-9303082/pdf/",target:"_blank",rel:"noopener noreferrer"},"PHP Tutorial course")),r.a.createElement("li",{className:k.a.listItem},r.a.createElement("a",{className:k.a.contactsWrapperLink,href:"https://www.sololearn.com/Certificate/1082-9303082/pdf/",target:"_blank",rel:"noopener noreferrer"},"jQuery Tutorial course")),r.a.createElement("li",{className:k.a.listItem},r.a.createElement("a",{className:k.a.contactsWrapperLink,href:"https://www.freecodecamp.org/certification/kate/responsive-web-design",target:"_blank",rel:"noopener noreferrer"},"Responsive Web Design")),r.a.createElement("li",{className:k.a.listItem},r.a.createElement("a",{className:k.a.contactsWrapperLink,href:"http://learn.javascript.ru/courses/react-20180510/kate21/certificate.jpg",target:"_blank",rel:"noopener noreferrer"},"React.JS")))),r.a.createElement("div",{className:k.a.descriptionColumns},r.a.createElement("p",{className:k.a.descriptionPointsStyle},e("Skills"),": "),r.a.createElement("p",null,"JavaScript, HTML5, CSS3, Jquery, Sass, Bootstrap, Ajax, OOP, ES6, Git, React, Redux")),r.a.createElement("div",{className:k.a.descriptionColumns},r.a.createElement("p",{className:k.a.descriptionPointsStyle},e("English level"),":"," "),r.a.createElement("div",null,r.a.createElement("p",null,"B1"),r.a.createElement("a",{className:k.a.contactsWrapperLink,href:"https://www.efset.org/cert/WhpTPx",target:"_blank",rel:"noopener noreferrer"},"EF SET Certificate"))),r.a.createElement("a",{className:k.a.downloadButton,href:"file/Profile.pdf",target:"_blank",download:!0},e("Download")))))},j=a(8),y=a.n(j),P=function(e){var t=e.href,a=e.src,c=e.width,l=e.height,o=e.name,i=e.technologies,m=Object(f.b)().t,p=Object(n.useState)(!0),h=Object(s.a)(p,2),u=h[0],g=h[1],d=m(u?"HideSkills":"WhatGave");return r.a.createElement("div",{className:y.a.container},r.a.createElement("a",{className:y.a.title,href:t,target:"blank"},r.a.createElement("h3",{className:y.a.itemTitle},o),r.a.createElement("div",{className:y.a.imgWrapper},r.a.createElement("img",{className:y.a.img,src:a,alt:o,width:c,height:l}))),u&&r.a.createElement("ul",{className:y.a.skillList},i.map(function(e){return r.a.createElement("li",{className:y.a.skillItem,key:e},e)})),r.a.createElement("button",{onClick:function(e){e.preventDefault(),g(!u)},className:y.a.projectButton},d))},S=[{id:"65T58674022R",link:"https://theheroes.media",name:"The Heroes",src:"https://res.cloudinary.com/dtpnizbx2/image/upload/v1566669461/Snag_8f05172_i3lont.png",width:"600",height:"390",description:"This site is a teamwork of many people. My personal components are stories and news.",technologies:["React","Gatsby","Css modules","refactoring and rewriting","& more"]},{id:"9172A1525F45",link:"https://markery.io/",name:"Markery site",src:"https://res.cloudinary.com/dtpnizbx2/image/upload/v1566669445/Snag_8f012d3_nfhcc6.png",width:"600",height:"390",technologies:["Css grid","Gulp"]},{id:"59F5863477G8",link:"https://codepen.io/asylumhere/full/Kejxxw/",name:"Calculator on React",src:"https://res.cloudinary.com/dtpnizbx2/image/upload/v1566673492/Snag_92dcc18_nl3pm6.png",width:"600",height:"390",technologies:["React","ES6","grid css"]},{id:"945034B249C7",link:"https://katepavlovich.github.io/game.html",name:"Runner Game",src:"https://github.com/KatePavlovich/KatePavlovich.github.io/blob/master/portfolio/img/screenshot3.jpg?raw=true",width:"600",height:"423",technologies:["OOP","canvas","IIFE","Module Pattern","requestAnimationFrame","keyboard events"]},{id:"81010A1741B2",link:"https://katepavlovich.github.io/match-match-game1",name:"Match-match Game",src:"https://github.com/KatePavlovich/KatePavlovich.github.io/blob/master/portfolio/img/screenshot1-match-game.jpg?raw=true",width:"600",height:"423",technologies:["OOP","DOM","DOM Events","template literals","ES6","setTimeout"]},{id:"64D58674022E",link:"https://codepen.io/asylumhere/full/VdGyQM/",name:"Quotes App",src:"https://github.com/KatePavlovich/KatePavlovich.github.io/blob/master/portfolio/img/1.jpg?raw=true",width:"600",height:"390",technologies:["jQuery","Bootstrap","Rest Api"]},{id:"3172E9525F35",link:"https://codepen.io/asylumhere/full/deLVZq/",name:"Weather App",src:"https://github.com/KatePavlovich/KatePavlovich.github.io/blob/master/portfolio/img/weaterApp.jpg?raw=true",width:"600",height:"390",technologies:["jQuery","Bootstrap","Rest Api","geolocation"]},{id:"335C98083D98",link:"https://melcom.by/",name:"Melcom.by",src:"https://github.com/KatePavlovich/KatePavlovich.github.io/blob/master/portfolio/img/screenshot1-melc.jpg?raw=true",width:"600",height:"423",technologies:["cms Wordpress","project design","forms","maps","SSL","setting hosting and domain"]}],C=function(e){return function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(e,null))}},O=a(24),I=a.n(O),W=C(function(){var e=S.map(function(e){var t=e.id,a=e.link,n=e.src,c=e.width,l=e.height,o=e.name,i=e.technologies;return r.a.createElement(P,{href:a,src:n,width:c,height:l,name:o,technologies:i,key:t})});return r.a.createElement("section",{className:I.a.content},e)});function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var L=r.a.createElement("path",{d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"}),H=function(e){return r.a.createElement("svg",x({height:"48px",viewBox:"0 0 438.549 438.549",width:"48px"},e),L)};a.p;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var A=r.a.createElement("path",{d:"M149.996 0C67.157 0 .001 67.158.001 149.997c0 82.837 67.156 150 149.995 150s150-67.163 150-150C299.996 67.158 232.835 0 149.996 0zm.003 52.686l88.763 55.35H61.236l88.763-55.35zm89.869 143.737h-.009c0 8.878-7.195 16.072-16.072 16.072H76.211c-8.878 0-16.072-7.195-16.072-16.072v-84.865c0-.939.096-1.852.252-2.749l84.808 52.883c.104.065.215.109.322.169.112.062.226.122.34.179a8.903 8.903 0 0 0 1.847.721c.065.018.13.026.195.041a9.148 9.148 0 0 0 2.093.265h.015c.7 0 1.401-.099 2.093-.265.065-.016.13-.023.195-.041a8.99 8.99 0 0 0 1.847-.721 9.19 9.19 0 0 0 .34-.179c.106-.06.218-.104.322-.169l84.808-52.883c.156.897.252 1.808.252 2.749v84.865z"}),M=function(e){return r.a.createElement("svg",B({height:"48px",viewBox:"0 0 299.997 299.997",width:"48px"},e),A)};a.p;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var T=r.a.createElement("path",{d:"M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0"}),z=function(e){return r.a.createElement("svg",K({height:"48px",viewBox:"0 0 512 512",width:"48px"},e),T)};a.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var G=r.a.createElement("circle",{cx:150.001,cy:226.085,r:11.718}),V=r.a.createElement("path",{d:"M182.691 68.248h-65.382c-3.665 0-6.647 2.843-6.647 6.331v123.592c0 3.491 2.98 6.331 6.647 6.331h65.382c3.665 0 6.647-2.843 6.647-6.331V74.579c-.002-3.491-2.982-6.331-6.647-6.331z"}),D=r.a.createElement("path",{d:"M149.996 0C67.157 0 .001 67.161.001 149.997S67.157 300 149.996 300s150.003-67.163 150.003-150.003S232.835 0 149.996 0zm58.358 224.021c0 11.458-9.29 20.749-20.749 20.749h-75.214c-11.458 0-20.749-9.29-20.749-20.749V75.323c0-11.458 9.29-20.749 20.749-20.749h75.214c11.458 0 20.749 9.29 20.749 20.749v148.698z"}),F=function(e){return r.a.createElement("svg",R({height:"48px",viewBox:"0 0 300 300",width:"48px"},e),G,V,D)},Q=(a.p,a(9)),q=a.n(Q),J=C(function(){var e=Object(f.b)().t;return r.a.createElement("section",{className:q.a.contactSection},r.a.createElement("nav",{className:q.a.contactListWrapper},r.a.createElement("ul",{className:q.a.contactList},r.a.createElement("li",{className:q.a.contactItem},r.a.createElement("a",{href:"https://github.com/KatePavlovich",target:"blank","aria-label":"github"},r.a.createElement(H,null))),r.a.createElement("li",{className:q.a.contactItem},r.a.createElement("a",{href:"https://www.linkedin.com/in/ekaterinaPaulovich/",target:"blank","aria-label":"linkedIn"},r.a.createElement(z,null))),r.a.createElement("li",{className:q.a.contactItem},r.a.createElement("a",{href:"mailto:ekate.pavlovich@gmail.com","aria-label":"email"},r.a.createElement(M,null))),r.a.createElement("li",{className:q.a.contactItem},r.a.createElement("a",{href:"tel:+375293207933","aria-label":"phone"},r.a.createElement(F,null))))),r.a.createElement("h2",{className:q.a.advert},e("LetsWork")))}),Z=function(){return r.a.createElement("div",null,"loading...")},U=function(){return r.a.createElement("div",{className:"wrapper-page"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(Z,null)},r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(i.a,{path:"/",exact:!0,component:N}),r.a.createElement(i.a,{path:"/projects",component:W}),r.a.createElement(i.a,{path:"/contact",component:J})))))};l.a.render(r.a.createElement(U,null),document.getElementById("root"))},8:function(e,t,a){e.exports={container:"Project_container__1WgCa",title:"Project_title__3_AKL",imgWrapper:"Project_imgWrapper__1gpuF",img:"Project_img__3wAbS",skillList:"Project_skillList__39IQW",skillItem:"Project_skillItem__1K8RT",itemTitle:"Project_itemTitle__27z4A",projectButton:"Project_projectButton__3OHOc",toggleAnimationContainer:"Project_toggleAnimationContainer__m0rjq"}},9:function(e,t,a){e.exports={contactSection:"Contact_contactSection__34gwG",contactListWrapper:"Contact_contactListWrapper__24yUj",contactList:"Contact_contactList__3OdeV",contactItem:"Contact_contactItem__2Rohf",advert:"Contact_advert__3C3Ib"}}},[[27,2,1]]]);
//# sourceMappingURL=main.6baded1e.chunk.js.map