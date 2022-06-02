"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[9514,4204],{46483:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(63366),r=a(87462),o=a(67294),l=a(86010),i=a(39707),c=a(94780),s=a(90948),m=a(71657),d=a(98216),u=a(34867);function p(e){return(0,u.Z)("MuiTypography",e)}(0,a(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=a(85893);const b=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,d.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var E=o.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiTypography"}),o=(e=>g[e]||e)(a.color),s=(0,i.Z)((0,r.Z)({},a,{color:o})),{align:u="inherit",className:E,component:Z,gutterBottom:k=!1,noWrap:y=!1,paragraph:_=!1,variant:C="body1",variantMapping:N=v}=s,S=(0,n.Z)(s,b),T=(0,r.Z)({},s,{align:u,color:o,className:E,component:Z,gutterBottom:k,noWrap:y,paragraph:_,variant:C,variantMapping:N}),I=Z||(_?"p":N[C]||v[C])||"span",M=(e=>{const{align:t,gutterBottom:a,noWrap:n,paragraph:r,variant:o,classes:l}=e,i={root:["root",o,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,a&&"gutterBottom",n&&"noWrap",r&&"paragraph"]};return(0,c.Z)(i,p,l)})(T);return(0,h.jsx)(f,(0,r.Z)({as:I,ref:t,ownerState:T,className:(0,l.Z)(M.root,E)},S))}))},71055:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),r=a(86010),o=a(95999),l="backToTopButton_i9tI",i="backToTopButtonShow_wCmF",c=a(53810);function s(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var m=function(){var e,t=(0,n.useState)(!1),a=t[0],m=t[1],d=(0,n.useRef)(!1),u=s(),p=u.smoothScrollTop,h=u.cancelScrollToTop;return(0,c.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(d.current)d.current=!1;else{var r=a<n;if(r||h(),a<300)m(!1);else if(r){var o=document.documentElement.scrollHeight;a+window.innerHeight<o&&m(!0)}else m(!1)}})),(0,c.SL)((function(e){e.location.hash&&(d.current=!0,m(!1))})),n.createElement("button",{"aria-label":(0,o.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",c.kM.common.backToTopButton,l,(e={},e[i]=a,e)),type:"button",onClick:function(){return p()}})}},10284:function(e,t,a){a.d(t,{Z:function(){return H}});var n=a(67294),r=a(86010),o=a(53810),l=a(93783),i=a(55537),c=a(34096),s=a(95999),m=a(87462),d=a(63366),u=a(39960),p=a(13919),h=a(90541),b="menuLinkText_OKON",f="hasHref_TwRn",v=a(72389),g=["items"],E=["item"],Z=["item","onItemClick","activePath","level"],k=["item","onItemClick","activePath","level"],y=(0,n.memo)((function(e){var t=e.items,a=(0,d.Z)(e,g);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(_,(0,m.Z)({key:t,item:e},a))})))}));function _(e){var t=e.item,a=(0,d.Z)(e,E);return"category"===t.type?0===t.items.length?null:n.createElement(C,(0,m.Z)({item:t},a)):n.createElement(N,(0,m.Z)({item:t},a))}function C(e){var t,a=e.item,l=e.onItemClick,i=e.activePath,c=e.level,p=(0,d.Z)(e,Z),h=a.items,g=a.label,E=a.collapsible,k=a.className,_=a.href,C=function(e){var t=(0,v.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,o.Wl)(e):void 0}),[e,t])}(a),N=(0,o._F)(a,i),S=(0,o.uR)({initialState:function(){return!!E&&(!N&&a.collapsed)}}),T=S.collapsed,I=S.setCollapsed,M=S.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,r=e.setCollapsed,l=(0,o.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a,r])}({isActive:N,collapsed:T,setCollapsed:I}),n.createElement("li",{className:(0,r.Z)(o.kM.docs.docSidebarItemCategory,o.kM.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":T},k)},n.createElement("div",{className:"menu__list-item-collapsible"},n.createElement(u.Z,(0,m.Z)({className:(0,r.Z)("menu__link",(t={"menu__link--sublist":E&&!_,"menu__link--active":N},t[b]=!E,t[f]=!!C,t)),onClick:E?function(e){null==l||l(a),_?I(!1):(e.preventDefault(),M())}:function(){null==l||l(a)},href:E?null!=C?C:"#":C},p),g),_&&E&&n.createElement("button",{"aria-label":(0,s.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:g}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),M()}})),n.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},n.createElement(y,{items:h,tabIndex:T?-1:0,onItemClick:l,activePath:i,level:c+1})))}function N(e){var t=e.item,a=e.onItemClick,l=e.activePath,i=e.level,c=(0,d.Z)(e,k),s=t.href,b=t.label,f=t.className,v=(0,o._F)(t,l);return n.createElement("li",{className:(0,r.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(i),"menu__list-item",f),key:b},n.createElement(u.Z,(0,m.Z)({className:(0,r.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:s},(0,p.Z)(s)&&{onClick:a?function(){return a(t)}:void 0},c),(0,p.Z)(s)?b:n.createElement("span",null,b,n.createElement(h.Z,null))))}var S="sidebar_a3j0",T="sidebarWithHideableNavbar_VlPv",I="sidebarHidden_OqfG",M="sidebarLogo_hmkv",w="menu_cyFh",B="menuWithAnnouncementBar_+O1J",x="collapseSidebarButton_eoK2",A="collapseSidebarButtonIcon_e+kA";function L(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,s.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",x),onClick:t},n.createElement(c.Z,{className:A}))}function P(e){var t,a,l=e.path,c=e.sidebar,s=e.onCollapse,m=e.isHidden,d=function(){var e=(0,o.nT)().isActive,t=(0,n.useState)(e),a=t[0],r=t[1];return(0,o.RF)((function(t){var a=t.scrollY;e&&r(0===a)}),[e]),e&&a}(),u=(0,o.LU)(),p=u.navbar.hideOnScroll,h=u.hideableSidebar;return n.createElement("div",{className:(0,r.Z)(S,(t={},t[T]=p,t[I]=m,t))},p&&n.createElement(i.Z,{tabIndex:-1,className:M}),n.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",w,(a={},a[B]=d,a))},n.createElement("ul",{className:(0,r.Z)(o.kM.docs.docSidebarMenu,"menu__list")},n.createElement(y,{items:c,activePath:l,level:1}))),h&&n.createElement(L,{onClick:s}))}var F=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:(0,r.Z)(o.kM.docs.docSidebarMenu,"menu__list")},n.createElement(y,{items:a,activePath:l,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function R(e){return n.createElement(o.Cv,{component:F,props:e})}var W=n.memo(P),D=n.memo(R);function H(e){var t=(0,l.Z)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(W,e),r&&n.createElement(D,e))}},34096:function(e,t,a){var n=a(87462),r=a(67294);t.Z=function(e){return r.createElement("svg",(0,n.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},55976:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(67294),r=a(3905),o=a(46291),l=a(74019),i=a(10284),c=a(73491),s=a(84204),m=a(34096),d=a(71055),u=a(76775),p=a(95999),h=a(86010),b={docPage:"docPage_GMj9",docMainContainer:"docMainContainer_Q970",docSidebarContainer:"docSidebarContainer_k0Pq",docMainContainerEnhanced:"docMainContainerEnhanced_ipQ4",docSidebarContainerHidden:"docSidebarContainerHidden_05py",collapsedDocSidebar:"collapsedDocSidebar_3Col",expandSidebarButtonIcon:"expandSidebarButtonIcon_Dhhx",docItemWrapperEnhanced:"docItemWrapperEnhanced_JuqB"},f=a(53810),v=a(12859);function g(e){var t,a,o,s=e.currentDocRoute,u=e.versionMetadata,v=e.children,g=e.sidebarName,E=(0,f.Vq)(),Z=u.pluginId,k=u.version,y=(0,n.useState)(!1),_=y[0],C=y[1],N=(0,n.useState)(!1),S=N[0],T=N[1],I=(0,n.useCallback)((function(){S&&T(!1),C((function(e){return!e}))}),[S]);return n.createElement(l.Z,{wrapperClassName:f.kM.wrapper.docsPages,pageClassName:f.kM.page.docsDocPage,searchMetadata:{version:k,tag:(0,f.os)(Z,k)}},n.createElement("div",{className:b.docPage},n.createElement(d.Z,null),E&&n.createElement("aside",{className:(0,h.Z)(b.docSidebarContainer,(t={},t[b.docSidebarContainerHidden]=_,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(b.docSidebarContainer)&&_&&T(!0)}},n.createElement(i.Z,{key:g,sidebar:E,path:s.path,onCollapse:I,isHidden:S}),S&&n.createElement("div",{className:b.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},n.createElement(m.Z,{className:b.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,h.Z)(b.docMainContainer,(a={},a[b.docMainContainerEnhanced]=_||!E,a))},n.createElement("div",{className:(0,h.Z)("container padding-top--md padding-bottom--lg",b.docItemWrapper,(o={},o[b.docItemWrapperEnhanced]=_,o))},n.createElement(r.Zo,{components:c.Z},v)))))}var E=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,u.LX)(r.pathname,e)}));if(!l)return n.createElement(s.default,null);var i=l.sidebar,c=i?a.docsSidebars[i]:null;return n.createElement(n.Fragment,null,n.createElement(v.Z,null,n.createElement("html",{className:a.className})),n.createElement(f.qu,{version:a},n.createElement(f.bT,{sidebar:c},n.createElement(g,{currentDocRoute:l,versionMetadata:a,sidebarName:i},(0,o.Z)(t,{versionMetadata:a})))))}},84204:function(e,t,a){a.r(t);var n=a(67294),r=a(74019),o=a(95999),l=a(76775),i=a(98456),c=a(46483);t.default=function(){var e=(0,l.k6)(),t=(0,n.useState)(!1),a=t[0],s=t[1];return(0,n.useEffect)((function(){var t,a,n=window.location,r=n.pathname,o=n.search,l=n.hash;o=null==(t=o)?void 0:t.replace(/^\?/,""),l=null==(a=l)?void 0:a.replace(/^#/,""),/^\/analyze\/[^\/?#]+\/[^\/?#]+\/?$/.test(r)?e.replace({pathname:r,search:o,hash:l}):/^\/analyze\/?$/.test(r)?e.replace({pathname:"/analyze/pingcap/tidb",search:o,hash:l}):s(!0)}),[]),n.createElement(r.Z,{title:a?(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"}):"Loading..."},a?n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))):n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement(c.Z,{variant:"body1",fontSize:24},"Loading... \xa0",n.createElement(i.Z,{display:"inline-block",size:24}))))))}}}]);