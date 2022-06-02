"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[6198],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48582:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Use TiDB Cloud to Analyze GitHub Events in 10 Minutes",date:new Date("2022-04-01T00:00:00.000Z"),authors:["fendy","hooopo"],tags:["tidbcloud"]},u=void 0,c={permalink:"/blog/try-it-yourself",editUrl:"https://github.com/pingcap/ossinsight/edit/main/blog/try-it-yourself/index.md",source:"@site/blog/try-it-yourself/index.md",title:"Use TiDB Cloud to Analyze GitHub Events in 10 Minutes",description:"TiDB is an open source distributed NewSQL database with horizontal scalability, high availability, and strong consistency. It can also deal with mixed OLTP and OLAP workloads at the same time by leveraging its hybrid transactional and analytical (HTAP) capability.",date:"2022-04-01T00:00:00.000Z",formattedDate:"April 1, 2022",tags:[{label:"tidbcloud",permalink:"/blog/tags/tidbcloud"}],readingTime:5.055,truncated:!0,authors:[{name:"Fendy Feng",title:"Technical Content Developer",url:"https://github.com/septemberfd",imageURL:"https://github.com/septemberfd.png",key:"fendy"},{name:"hooopo",title:"Engineer of TiDB Community",url:"https://twitter.com/hooopo",imageURL:"https://github.com/hooopo.png",key:"hooopo"}],prevItem:{title:"SaaS Insight for Building a Real-time CRM Application",permalink:"/blog/saas-insight-for-building-a-real-time-crm-application"},nextItem:{title:"Data Preparation for Analytics",permalink:"/blog/how-it-works"}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"Sign up for a TiDB Cloud account (Free)",id:"sign-up-for-a-tidb-cloud-account-free",children:[],level:2}],d={toc:p};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/overview?utm_source=ossinsight&utm_medium=referral"},"TiDB")," is an open source distributed NewSQL database with horizontal scalability, high availability, and strong consistency. It can also deal with mixed OLTP and OLAP workloads at the same time by leveraging its hybrid transactional and analytical (HTAP) capability. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.pingcap.com/tidbcloud/public-preview?utm_source=ossinsight&utm_medium=referral"},"TiDB Cloud")," is a fully-managed Database-as-a-Service (DBaaS)")," that brings everything great about TiDB to your cloud and lets you focus on your applications, not the complexities of your database. "),(0,a.kt)("p",null,"In this tutorial, we will provide you with a piece of sample data of all GitHub events occurring on January 1, 2022, and walk you through on how to use TiDB Cloud to analyze this data in 10 minutes.  "),(0,a.kt)("h2",{id:"sign-up-for-a-tidb-cloud-account-free"},"Sign up for a TiDB Cloud account (Free)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("a",{parentName:"li",href:"https://tidbcloud.com/signup?utm_source=ossinsight&utm_medium=referral"},"here")," to sign up for a TiDB Cloud account free of charge. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://tidbcloud.com/?utm_source=ossinsight&utm_medium=referral"},"Log in")," to your account.")))}m.isMDXComponent=!0}}]);