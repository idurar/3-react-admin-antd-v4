(this["webpackJsonpreact-antdesign-demo"]=this["webpackJsonpreact-antdesign-demo"]||[]).push([[0],{23:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),r=n.n(i),a=n(15),s=n.n(a),o=(n(23),n(24),n(2));var u=function(t){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"\u767b\u5f55\u9875\u9762"}),Object(c.jsx)("button",{onClick:function(){t.history.push("/system")},children:"Login"})]})};var j=function(t){return Object(c.jsx)("div",{children:"Home"})};var b=function(t){return Object(c.jsx)("div",{children:"Page1"})};var d=function(t){return Object(c.jsx)("div",{children:"Page2"})};function h(t){return Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:[t.base,t.base+"/home"],exact:!0,component:j}),Object(c.jsx)(o.a,{path:t.base+"/page1",component:b}),Object(c.jsx)(o.a,{path:t.base+"/page2",component:d})]})}h.defaultProps={base:""};var l=h;var f=function(t){var e="/system";function n(n){t.history.push(e+n)}return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"system"}),Object(c.jsx)("button",{onClick:function(){return n("/home")},children:"home"}),Object(c.jsx)("button",{onClick:function(){return n("/page1")},children:"page1"}),Object(c.jsx)("button",{onClick:function(){return n("/page2")},children:"page2"}),Object(c.jsx)("div",{children:Object(c.jsx)(l,{base:e})})]})};function p(t){return Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:[t.base,t.base+"/login"],exact:!0,component:u}),Object(c.jsx)(o.a,{path:t.base+"/system",component:f})]})}p.defaultProps={base:""};var O=p,x=n(17),v=n(10);var g=function(t){this.action.state=function(){return Object(v.a)({},e)},this.action.publish=function(t){e=Object(v.a)(Object(v.a)({},e),t),c.forEach((function(t){return t(e)}))};var e=this.state,n=this.action,c=[];return function(){var i=t.useState(),r=Object(x.a)(i,2)[1];return t.useEffect((function(){return c.push(r),function(){c=c.filter((function(t){return t!==r}))}}),[e]),{state:e,action:n}}}.bind({state:{appTitle:"\u5e94\u7528\u8f6f\u4ef6\u540d\u79f0",buildTime:"2020-12-30 17:11"},action:{setPageTitle:function(t){document.querySelector("title").innerHTML=t||this.state().appTitle}}},r.a)(),m=n(9);var y=function(){return g().action.setPageTitle(),Object(c.jsx)("div",{children:Object(c.jsx)(m.a,{basename:"/react-antdesign-demo",children:Object(c.jsx)(O,{})})})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),P()}},[[33,1,2]]]);