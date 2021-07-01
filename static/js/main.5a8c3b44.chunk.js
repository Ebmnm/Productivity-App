(this["webpackJsonpreact-goals"]=this["webpackJsonpreact-goals"]||[]).push([[0],{46:function(t,e,n){"use strict";n.r(e);var o,c,s=n(0),a=n(26),r=n.n(a),i=n(14),l=n(15),u=n(18),d=(n(9),n(1)),j=Object(l.a)(u.b)(o||(o=Object(i.a)(["\nfont-size: 2rem;\ncolor:white;\ntext-decoration:none;\nwidth: auto;\npadding:1em;\nheight: auto;\nwidth: 33%;\ndisplay: flex;\njustify-content: center;\ncursor: pointer;\n\n@media screen and (max-width:830px){\nfont-size: 1em;\nmin-height: 60px;\nalign-items: center;\n\n}\n"]))),f=l.a.div(c||(c=Object(i.a)(["\ndisplay: flex;\njustify-content:space-around;\nborder-bottom: 8px white solid;\nalign-items: center;\nwidth: 100%;\n\n\n"])));function b(){return Object(d.jsx)("div",{children:Object(d.jsxs)(f,{children:[Object(d.jsx)(j,{to:"/Productivity-App",children:" Daily"}),Object(d.jsx)(j,{to:"/Productivity-App/custom",className:"side-border",children:" Custom"}),Object(d.jsx)(j,{to:"/Productivity-App/long",children:" Long Term"})]})})}var O=n(3),m=n(7),x=n(2),p=n(11),h=n.n(p);function v(t){var e=t.todos,n=t.setTodos,o=Object(s.useRef)();return Object(d.jsxs)("div",{className:"todo-form-div",children:[Object(d.jsxs)("form",{className:"todo-form",children:[Object(d.jsx)("input",{className:"new-todo-input",ref:o,type:"text"}),Object(d.jsx)("button",{className:"add-button",onClick:function(t){t.preventDefault();var e=o.current.value;""!==e&&(n((function(t){return[].concat(Object(x.a)(t),[{id:h()(),name:e,complete:!1,info:""}])})),o.current.value=null)},children:"Add Todo"})]}),Object(d.jsx)("button",{className:"delete-button",onClick:function(){var t=Object(x.a)(e);t=t.filter((function(t){return!1===t.complete})),n(t)},children:"Delete Checked Todos "})]})}function g(t){var e=t.todo,n=(t.info,t.setInfo),o=t.setTodos,c=Object(s.useRef)();function a(t){var n=c.current.value;o((function(t){var o=Object(x.a)(t);return e.info=n,o}))}return Object(d.jsxs)("div",{className:"info-container",children:[Object(d.jsx)("form",{children:Object(d.jsx)("textarea",{className:"todo-input-info",onKeyPress:function(t){"Enter"===t.key&&a()},type:"text",ref:c,placeholder:e.info?e.info:"Enter Info",onClick:function(){c.current.value=e.info}})}),Object(d.jsx)("button",{className:"info-button",onClick:a,children:" Set Info"}),Object(d.jsx)("button",{onClick:function(){n(!1)},className:"delete-button",children:" Close "})]})}function k(t){var e=t.todos,n=t.setTodos,o=t.toggleTodo,c=(t.setTodoInfo,Object(s.useState)(!1)),a=Object(m.a)(c,2),r=a[0],i=a[1],l=Object(s.useRef)();return Object(d.jsxs)("div",{className:"todo-container",children:[Object(d.jsx)("input",{className:"checkbox",type:"checkbox",checked:e.complete,onChange:function(){o(e.id)}}),Object(d.jsx)("label",{className:"todo-label",children:Object(d.jsxs)("p",{className:"todo-text",children:[" ",e.name]})}),Object(d.jsx)("input",{className:"todo-input-date",type:"text",placeholder:e.date?"".concat(e.date):"Enter Date",onChange:function(){n((function(t){var n=Object(x.a)(t),o=l.current.value;return""===o&&(o="Enter Date"),e.date=o,n}))},ref:l}),Object(d.jsx)("button",{className:"info-button",onClick:function(){i(!0)},children:" Info "}),r?Object(d.jsx)(g,{todo:e,info:r,setInfo:i,setTodos:n},e.id):null]})}function N(t){var e=t.todos,n=t.setTodos;function o(t){var o=Object(x.a)(e),c=o.find((function(e){return e.id===t}));c.complete=!c.complete,n(o)}return e.map((function(t){return Object(d.jsx)(k,{todos:t,toggleTodo:o,setTodos:n},t.id)}))}var y="todoApp.todos";function C(){var t=Object(s.useState)([]),e=Object(m.a)(t,2),n=e[0],o=e[1];return Object(s.useEffect)((function(){var t=JSON.parse(localStorage.getItem(y));t&&o(t)}),[]),Object(s.useEffect)((function(){localStorage.setItem(y,JSON.stringify(n))}),[n]),Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{todos:n,setTodos:o}),Object(d.jsx)(N,{todos:n,setTodos:o})]})}function I(t){var e=t.tasks,n=t.settasks,o=Object(s.useRef)();return Object(d.jsxs)("div",{className:"todo-form-div",children:[Object(d.jsxs)("form",{className:"todo-form",children:[Object(d.jsx)("input",{className:"new-todo-input",ref:o,type:"text"}),Object(d.jsx)("button",{className:"add-button",onClick:function(t){t.preventDefault();var e=o.current.value;""!==e&&(n((function(t){return[].concat(Object(x.a)(t),[{id:h()(),name:e,complete:!1,info:""}])})),o.current.value=null)},children:"Add Task"})]}),Object(d.jsx)("button",{className:"delete-button",onClick:function(){var t=Object(x.a)(e);t=t.filter((function(t){return!1===t.complete})),n(t)},children:"Delete Checked Tasks "})]})}function T(t){var e=t.task,n=(t.info,t.setInfo),o=t.settasks,c=Object(s.useRef)();function a(t){var n=c.current.value;o((function(t){var o=Object(x.a)(t);return e.info=n,o}))}return Object(d.jsxs)("div",{className:"info-container",children:[Object(d.jsx)("form",{children:Object(d.jsx)("textarea",{className:"todo-input-info",onKeyPress:function(t){"Enter"===t.key&&a()},type:"text",ref:c,placeholder:e.info?e.info:"Enter Info",onClick:function(){c.current.value=e.info}})}),Object(d.jsx)("button",{className:"info-button",onClick:a,children:" Set Info"}),Object(d.jsx)("button",{onClick:function(){n(!1)},className:"delete-button",children:" Close "})]})}function S(t){var e=t.tasks,n=t.settasks,o=t.toggleTodo,c=(t.setTodoInfo,Object(s.useState)(!1)),a=Object(m.a)(c,2),r=a[0],i=a[1],l=Object(s.useRef)();return Object(d.jsxs)("div",{className:"todo-container",children:[Object(d.jsxs)("label",{className:"todo-label",children:[Object(d.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){o(e.id)}}),Object(d.jsxs)("p",{className:"todo-text",children:[" ",e.name]})]}),Object(d.jsx)("input",{className:"todo-input-date",type:"text",placeholder:e.date?"".concat(e.date):"Enter Date",onChange:function(){n((function(t){var n=Object(x.a)(t),o=l.current.value;return""===o&&(o="Enter Date"),e.date=o,n}))},ref:l}),Object(d.jsx)("button",{className:"info-button",onClick:function(){i(!0)},children:" Info "}),r?Object(d.jsx)(T,{task:e,info:r,setInfo:i,settasks:n},e.id):null]})}function E(t){var e=t.tasks,n=t.settasks;function o(t){var o=Object(x.a)(e),c=o.find((function(e){return e.id===t}));c.complete=!c.complete,n(o)}return e.map((function(t){return Object(d.jsx)(S,{tasks:t,toggleTodo:o,settasks:n},t.id)}))}var w="todoApp.tasks";function D(){var t=Object(s.useState)([]),e=Object(m.a)(t,2),n=e[0],o=e[1];return Object(s.useEffect)((function(){var t=JSON.parse(localStorage.getItem(w));t&&o(t)}),[]),Object(s.useEffect)((function(){localStorage.setItem(w,JSON.stringify(n))}),[n]),Object(d.jsxs)("div",{children:[Object(d.jsx)(I,{tasks:n,settasks:o}),Object(d.jsx)(E,{tasks:n,settasks:o})]})}function A(t){var e=t.goals,n=t.setgoals,o=Object(s.useRef)();return Object(d.jsxs)("div",{className:"todo-form-div",children:[Object(d.jsxs)("form",{className:"todo-form",children:[Object(d.jsx)("input",{className:"new-todo-input",ref:o,type:"text"}),Object(d.jsx)("button",{className:"add-button",onClick:function(t){t.preventDefault();var e=o.current.value;""!==e&&(n((function(t){return[].concat(Object(x.a)(t),[{id:h()(),name:e,complete:!1,info:""}])})),o.current.value=null)},children:"Add Goal"})]}),Object(d.jsx)("button",{className:"delete-button",onClick:function(){var t=Object(x.a)(e);t=t.filter((function(t){return!1===t.complete})),n(t)},children:"Delete Checked Goals "})]})}function P(t){var e=t.goal,n=(t.info,t.setInfo),o=t.setgoals,c=Object(s.useRef)();function a(t){var n=c.current.value;o((function(t){var o=Object(x.a)(t);return e.info=n,o}))}return Object(d.jsxs)("div",{className:"info-container",children:[Object(d.jsx)("form",{children:Object(d.jsx)("textarea",{className:"todo-input-info",onKeyPress:function(t){"Enter"===t.key&&a()},type:"text",ref:c,placeholder:e.info?e.info:"Enter Info",onClick:function(){c.current.value=e.info}})}),Object(d.jsx)("button",{className:"info-button",onClick:a,children:" Set Info"}),Object(d.jsx)("button",{onClick:function(){n(!1)},className:"delete-button",children:" Close "})]})}function R(t){var e=t.goals,n=t.setgoals,o=t.toggleTodo,c=(t.setTodoInfo,Object(s.useState)(!1)),a=Object(m.a)(c,2),r=a[0],i=a[1],l=Object(s.useRef)();return Object(d.jsxs)("div",{className:"todo-container",children:[Object(d.jsxs)("label",{className:"todo-label",children:[Object(d.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){o(e.id)}}),Object(d.jsxs)("p",{className:"todo-text",children:[" ",e.name]})]}),Object(d.jsx)("input",{className:"todo-input-date",type:"text",placeholder:e.date?"".concat(e.date):"Date",onChange:function(){n((function(t){var n=Object(x.a)(t),o=l.current.value;return""===o&&(o="Enter Date"),e.date=o,n}))},ref:l}),Object(d.jsx)("button",{className:"info-button",onClick:function(){i(!0)},children:" Info "}),r?Object(d.jsx)(P,{goal:e,info:r,setInfo:i,setgoals:n},e.id):null]})}function J(t){var e=t.goals,n=t.setgoals;function o(t){var o=Object(x.a)(e),c=o.find((function(e){return e.id===t}));c.complete=!c.complete,n(o)}return e.map((function(t){return Object(d.jsx)(R,{goals:t,toggleTodo:o,setgoals:n},t.id)}))}var K,z="todoApp.goals";function G(){var t=Object(s.useState)([]),e=Object(m.a)(t,2),n=e[0],o=e[1];return Object(s.useEffect)((function(){var t=JSON.parse(localStorage.getItem(z));t&&o(t)}),[]),Object(s.useEffect)((function(){localStorage.setItem(z,JSON.stringify(n))}),[n]),Object(d.jsxs)("div",{children:[Object(d.jsx)(A,{goals:n,setgoals:o}),Object(d.jsx)(J,{goals:n,setgoals:o})]})}var B=l.a.div(K||(K=Object(i.a)(["\nwidth: 70vw;\nheight: auto;\nbackground-color: #2E2727;\nmargin:auto;\ntop:0;\nleft:15vw;\npadding-bottom: 3%;\nmin-height:75vh;\n\n\n@media screen and (max-width:830px){\nwidth: 90vw;\n}\n"])));var F=function(){return Object(d.jsx)(u.a,{children:Object(d.jsxs)(B,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(O.a,{path:"/Productivity-App",exact:!0,component:C}),Object(d.jsx)(O.a,{path:"/Productivity-App/custom",exact:!0,component:D}),Object(d.jsx)(O.a,{path:"/Productivity-App/long",exact:!0,component:G})]})})};r.a.render(Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.5a8c3b44.chunk.js.map