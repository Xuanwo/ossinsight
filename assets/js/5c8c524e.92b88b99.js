"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[5537],{32133:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return h}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=["components"],r={title:"Build a Real-time Analytics Dashboard in Logistics Industry with Metabase",tags:["Real-time analytics","Proliferate data","Logistics industry"]},l=void 0,p={permalink:"/blog/build-a-real-time-analytics-dashboard-in-metabase",editUrl:"https://github.com/pingcap/ossinsight/edit/main/blog/build-a-real-time-analytics-dashboard-in-metabase.md",source:"@site/blog/build-a-real-time-analytics-dashboard-in-metabase.md",title:"Build a Real-time Analytics Dashboard in Logistics Industry with Metabase",description:"#Real-time analytics",date:"2022-04-24T06:58:02.087Z",formattedDate:"April 24, 2022",tags:[{label:"Real-time analytics",permalink:"/blog/tags/real-time-analytics"},{label:"Proliferate data",permalink:"/blog/tags/proliferate-data"},{label:"Logistics industry",permalink:"/blog/tags/logistics-industry"}],readingTime:3.81,truncated:!1,authors:[],nextItem:{title:"Changelog",permalink:"/blog/changelog"}},d={authorsImageUrls:[]},u=[{value:"Before you begin",id:"before-you-begin",children:[],level:2},{value:"1. Create a dashboard.",id:"1-create-a-dashboard",children:[],level:2},{value:"2. Add a question.",id:"2-add-a-question",children:[],level:2},{value:"3. Save the question.",id:"3-save-the-question",children:[],level:2},{value:"4. Repeat steps 2 and 3 for the second question, \u201cNumber of packages on the way.\u201d This is the query to use:",id:"4-repeat-steps-2-and-3-for-the-second-question-number-of-packages-on-the-way-this-is-the-query-to-use",children:[],level:2},{value:"5. Visualize the <strong>Number of packages in process in each state</strong>.",id:"5-visualize-the-number-of-packages-in-process-in-each-state",children:[],level:2},{value:"6. (Optional) Repeat the previous steps to add two more queries:",id:"6-optional-repeat-the-previous-steps-to-add-two-more-queries",children:[],level:2}],c={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"#Real-time analytics"),"\n","\xa0","\n",(0,i.kt)("inlineCode",{parentName:"p"},"#Proliferate data"),"\n","\xa0","\n",(0,i.kt)("inlineCode",{parentName:"p"},"#Logistics industry")),(0,i.kt)("p",null,"In this tutorial, you will build a prototype for PingExpress_DemoCorp\u2019s real-time analytics dashboard that runs on a TiDB Cloud Proof-of-Concept (PoC) cluster."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://en.pingcap.com/wp-content/uploads/2022/03/Metabase-dashboard-overview.png",alt:null})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Disclaimer:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"PingExpress_DemoCorp is a dummy company. It does NOT reflect or imply any real company."),(0,i.kt)("li",{parentName:"ul"},"This tutorial is for demonstration purposes only. Do NOT use any material (including but not limited to code, and commands) from this tutorial in production environments."))),(0,i.kt)("p",null,"PingExpress_DemoCorp is a supply chain management company in the United States. With more people shopping online due to the pandemic, it\u2019s business has scaled rapidly. They\u2019re delivering tens of billions of packages a year."),(0,i.kt)("p",null,"With so many deliveries, a key part of their success is accurate and efficient package tracking. Business managers need to know where packages are so they can identify potential traffic blocks and rearrange delivery routes. Customers need accurate delivery dates so they can plan ahead. Therefore, real-time tracking, status updates, and a detailed dashboard are very important to PingExpress_DemoCorp."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"With the current technology infra, PingExpress_DemoCorp is facing growing pains:")),(0,i.kt)("p",null,"PingExpress_DemoCorp uses MySQL. For a real-time dashboard, they need to use both historical data and new data coming in. Data analytics rely on stored procedures. As business roars, more data needs to be stored. The MySQL sharding solution can\u2019t meet their requirements, and the system is hard to scale and maintain.\nDuring peak hours, the performance on a standalone machine is poor. There is also high risk of a single-point failure."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PingExpress_DemoCorp considered two options:")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Option A:")," Add a dedicated column store to the existing data stack to separate the OLTP workload from the OLAP workload.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Option B:")," Replace MySQL database with TiDB, which contains both the row store for daily transactions and the column store for analytical workloads.")),(0,i.kt)("p",null,"PingExpress_DemoCorp chose ",(0,i.kt)("strong",{parentName:"p"},"option B"),". "),(0,i.kt)("p",null,"This is because adding another column storage for analysis workload makes the system more complicated. At the same time, data has to be synchronized from the row store to the column store via painful ETL processes over night. This means that choosing option A still does not enable PingExpress_DemoCorp to do real-time analytics."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"On the other hand, switching to ",(0,i.kt)("a",{parentName:"strong",href:"https://en.pingcap.com/tidb-cloud/?utm_source=ossinsight"},"TiDB Cloud"),"   as the backend database is very attractive to PingExpress_DemoCorp\uff1a")),(0,i.kt)("p",null,"In this tutorial, you will build a prototype for PingExpress_DemoCorp\u2019s real-time analytics dashboard that runs on a\nTiDB Cloud Proof-of-Concept (PoC) cluster."),(0,i.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,i.kt)("p",null,"You should have the following software and packages installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python (v. 3+)"),(0,i.kt)("li",{parentName:"ul"},"MySQL connector for Python"),(0,i.kt)("li",{parentName:"ul"},"SQLAlchemy"),(0,i.kt)("li",{parentName:"ul"},"sqlalchemy-tidb"),(0,i.kt)("li",{parentName:"ul"},"Metabase")),(0,i.kt)("p",null,"Note: It is recommended to use pip3 to install packages, such as SQLAlchemy. We also suggest NOT to use the Mac application version for Metabase. It is gradually being phased out. You may use the jar version instead."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"}," We recomand you Start with ",(0,i.kt)("a",{parentName:"strong",href:"https://docs.pingcap.com/tidbcloud/?utm_source=ossinsight"},"TiDB Cloud Documentation")," and finish this ",(0,i.kt)("a",{parentName:"strong",href:"https://ossinsight.io/blog/try-it-yourself/"},"10-minute tutorial")," first.")))),(0,i.kt)("h2",{id:"1-create-a-dashboard"},"1. Create a dashboard."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the top right corner of the dashboard, click the ",(0,i.kt)("strong",{parentName:"li"},"+")," sign, and then choose ",(0,i.kt)("strong",{parentName:"li"},"New Dashboard"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter the name as ",(0,i.kt)("strong",{parentName:"li"},"PingExpress_dashboard"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Create")),".")),(0,i.kt)("h2",{id:"2-add-a-question"},"2. Add a question."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the top right corner, click ",(0,i.kt)("strong",{parentName:"li"},"Ask a question")," on the top right corner, and then choose ",(0,i.kt)("strong",{parentName:"li"},"Native query"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"PingExpressDB")," as the database."),(0,i.kt)("li",{parentName:"ol"},"Display the total number of packages delivered. Enter the following query and click the right side of the screen to run it:\n",(0,i.kt)("inlineCode",{parentName:"li"},'SELECT COUNT(*) FROM packages WHERE transaction_kind="4_pkg_out";'))),(0,i.kt)("h2",{id:"3-save-the-question"},"3. Save the question."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper right corner, click ",(0,i.kt)("strong",{parentName:"li"},"Save"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter the name ",(0,i.kt)("strong",{parentName:"li"},"Total packages delivered"),"."),(0,i.kt)("li",{parentName:"ol"},"When being asked if you would like to add this question to the dashboard, click ",(0,i.kt)("strong",{parentName:"li"},"Yes please!"),", and choose ",(0,i.kt)("strong",{parentName:"li"},"PingExpress_dashboard"),".\nThe result will now appear on the dashboard."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("h2",{id:"4-repeat-steps-2-and-3-for-the-second-question-number-of-packages-on-the-way-this-is-the-query-to-use"},"4. Repeat steps 2 and 3 for the second question, \u201cNumber of packages on the way.\u201d This is the query to use:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'SELECT COUNT(*) FROM packages WHERE transaction_kind != "4_pkg_out";')),(0,i.kt)("h2",{id:"5-visualize-the-number-of-packages-in-process-in-each-state"},"5. Visualize the ",(0,i.kt)("strong",{parentName:"h2"},"Number of packages in process in each state"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Repeat step 3 and use the following query instead.\n",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT start_state, COUNT(package_id)")),(0,i.kt)("li",{parentName:"ol"},"After getting the result, click the ",(0,i.kt)("strong",{parentName:"li"},"Visualization")," button, and then choose ",(0,i.kt)("strong",{parentName:"li"},"Map"),". For the map options:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Map Type: Region map"),(0,i.kt)("li",{parentName:"ul"},"Region Map: United States"),(0,i.kt)("li",{parentName:"ul"},"Leave everything else as default.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Repeat step 4 and add this question to the dashboard.\n",(0,i.kt)("img",{parentName:"li",src:"https://en.pingcap.com/wp-content/uploads/2022/03/Add-questions-to-dashboard-768x602.png",alt:null}))),(0,i.kt)("h2",{id:"6-optional-repeat-the-previous-steps-to-add-two-more-queries"},"6. (Optional) Repeat the previous steps to add two more queries:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Number of packages in each stage (pie chart):\n",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT transaction_kind, count(*) "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Number of new packages per day (line chart):\n",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT DATE(start_time), count(*) ")))))}h.isMDXComponent=!0}}]);