(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(8),s=n.n(l),i=(n(14),n(5)),r=n(2),u=(n(15),n(16),n(17),n(0)),o=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(u.jsxs)("div",{className:"expense-date",children:[Object(u.jsx)("div",{className:"expense-date__month",children:t}),Object(u.jsx)("div",{className:"expense-date__day",children:n}),Object(u.jsx)("div",{className:"expense-date__year",children:a})]})},j=function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)(d,{className:"expense-item",children:[Object(u.jsx)(o,{date:e.date}),Object(u.jsxs)("div",{className:"expense-item_description",children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsxs)("div",{className:"expense-item_price",children:["$",e.amount]})]})]})})},d=function(e){var t="card "+e.className;return Object(u.jsx)("div",{className:t,children:e.children})},b=(n(19),n(20),function(e){return 0===e.items.length?Object(u.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(u.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(u.jsx)(j,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),x=(n(21),function(e){return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("label",{children:"Filter by year"}),Object(u.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})]})})}),O=n(9),h=(n(22),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(u.jsxs)("div",{className:"chart-bar__label",children:[e.label," "]})]})}),v=(n(23),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(u.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(u.jsx)(h,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),m=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(O.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(u.jsx)(v,{dataPoints:n})},p=function(e){var t=Object(a.useState)("2019"),n=Object(r.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(u.jsxs)(d,{className:"expenses",children:[Object(u.jsx)(x,{selected:c,onChangeFilter:function(e){l(e)}}),Object(u.jsx)(m,{expenses:s}),Object(u.jsx)(b,{items:s})]})},f=(n(24),n(7)),g=(n(25),function(e){var t=Object(a.useState)(" "),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(" "),i=Object(r.a)(s,2),o=i[0],j=i[1],d=Object(a.useState)(" "),b=Object(r.a)(d,2),x=b[0],O=b[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:o,date:new Date(x)};console.log(n),e.onSaveExpenseData(n),l(""),O(""),j("")},children:[Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Title:"}),Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){l(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Amount:"}),Object(u.jsx)("input",{type:"number",value:o,min:"0.01",step:"0.01",onChange:function(e){j(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Date:"}),Object(u.jsx)("input",{type:"date",value:x,min:"2019-01-01",max:"2022-12-31",onChange:function(e){O(e.target.value)},required:!0})]})]}),Object(u.jsxs)("div",{className:"new-expense__actions",children:[Object(u.jsx)("button",{type:"submit",children:"Add Expense"}),Object(u.jsx)("button",{type:"submit",onClick:e.onCancel,children:" Cancel"})]})]})}),N=(n(26),function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1];return Object(u.jsxs)("div",{className:"new-expense",children:[!c&&Object(u.jsx)("button",{onClick:function(){l(!0)},children:"Add New Expense"}),c&&Object(u.jsx)(g,{onSaveExpenseData:function(t){var n=Object(f.a)(Object(f.a)({},t),{},{id:Math.random().toString()});console.log(n),e.onAddExpense(n),l(!1)},onCancel:function(){l(!1)}})]})}),_=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:450,date:new Date(2021,5,12)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],y=function(){var e=Object(a.useState)(_),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(N,{onAddExpense:function(e){console.log("[App.js]"),console.log(e),c((function(t){return[].concat(Object(i.a)(t),[e])}))}}),Object(u.jsx)(p,{items:n})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),S()}],[[27,1,2]]]);
//# sourceMappingURL=main.699a5393.chunk.js.map