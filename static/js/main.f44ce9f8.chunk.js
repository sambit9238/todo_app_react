(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),r=(a(14),a(1)),s=a(7),i=a.n(s),m=(a(16),a(8)),u=function(e){var t=e.setTodos,a=e.todos,o=e.setInputText,c=e.inputText,l=e.setFilter;return n.a.createElement("form",null,n.a.createElement("input",{value:c,onChange:function(e){o(e.target.value)},type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),t([].concat(Object(m.a)(a),[{text:c,completed:!1,id:100*Math.random()}])),o("")},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},d=a(4),f=function(e){var t=e.eachTodoText,a=e.eachTodo,o=e.todos,c=e.setTodos;e.filteredTodos;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:"todo-item ".concat(a.completed?"completed":"")},t),n.a.createElement("button",{onClick:function(){c(o.map((function(e){return e.id===a.id?Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{onClick:function(){c(o.filter((function(e){return e.id!==a.id})))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-trash"})))},p=function(e){var t=e.todos,a=e.setTodos,o=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(f,{key:e.id,eachTodoText:e.text,eachTodo:e,todos:t,setTodos:a,filteredTodos:o})}))))};var E=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)(JSON.parse(localStorage.getItem("todos"))||[{}]),s=Object(r.a)(l,2),m=s[0],d=s[1],f=Object(o.useState)("all"),E=Object(r.a)(f,2),b=E[0],h=E[1],v=Object(o.useState)(m),T=Object(r.a)(v,2),O=T[0],N=T[1],j=Object(o.useState)(""),g=Object(r.a)(j,2),S=g[0],x=g[1];return Object(o.useEffect)((function(){N("all"===b?m:"completed"===b?m.filter((function(e){return!0===e.completed})):m.filter((function(e){return!0!==e.completed}))),localStorage.setItem("todos",JSON.stringify(m))}),[m,b]),Object(o.useEffect)((function(){x(i()().format("DD-MM-YYYY"))}),[]),n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"Hello Sam!")),n.a.createElement("h2",null,"What's for ",S,"?"),n.a.createElement(u,{setTodos:d,todos:m,setInputText:c,inputText:a,setFilter:h}),n.a.createElement(p,{todos:m,setTodos:d,filteredTodos:O}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.f44ce9f8.chunk.js.map