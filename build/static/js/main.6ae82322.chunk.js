(this["webpackJsonpreact-antdesign-demo"]=this["webpackJsonpreact-antdesign-demo"]||[]).push([[0],{117:function(t,e,n){},119:function(t,e,n){},120:function(t,e,n){},121:function(t,e,n){},122:function(t,e,n){},148:function(t,e,n){},151:function(t,e,n){},152:function(t,e,n){},155:function(t,e,n){},162:function(t,e,n){"use strict";n.r(e);var i=n(3),a=n(0),s=n.n(a),c=n(21),r=n.n(c),o=(n(117),n(118),n(14));var u=function(t){return Object(i.jsxs)("div",{className:"loginPage",children:[Object(i.jsx)("div",{children:"\u767b\u5f55\u9875\u9762"}),Object(i.jsx)("button",{onClick:function(){t.history.push("/system")},children:"Login"})]})},l=n(164),d=n(167),b=n(109),j=n(44);var h=function(t){this.action.state=function(){return Object(j.a)({},e)},this.action.publish=function(t){e=Object(j.a)(Object(j.a)({},e),t),i.forEach((function(t){return t(e)}))};var e=this.state,n=this.action,i=[];return function(){var a=t.useState(),s=Object(b.a)(a,2)[1];return t.useEffect((function(){return i.push(s),function(){i=i.filter((function(t){return t!==s}))}}),[e]),{state:e,action:n}}},m=h.bind({state:{frameHeight:window.innerHeight},action:{windowHeightChange:function(){this.publish({frameHeight:window.innerHeight})}}},s.a)(),p=(n(119),h.bind({state:{appTitle:"\u5e94\u7528\u8f6f\u4ef6\u540d\u79f0",buildTime:"2021-01-06 16:15"},action:{setPageTitle:function(t){document.querySelector("title").innerHTML=t||this.state().appTitle}}},s.a)());var f=function(t){var e=p();return Object(i.jsx)("div",{className:"buildTime",children:Object(i.jsxs)("div",{children:["\u6784\u5efa\u65f6\u95f4\uff1a",e.state.buildTime]})})};n(120);var O=function(t){return Object(i.jsx)("div",{className:"appFooter",children:Object(i.jsx)(f,{})})},v=n(166),x=h.bind({state:{menuCollapse:!1,menuList:[{id:"1",icon:"AppstoreOutlined",name:"\u83dc\u53551",submenu:[{id:"1-1",icon:"AppstoreOutlined",name:"\u83dc\u53551-1",route:"/system/page1"},{id:"1-2",icon:"AppstoreOutlined",name:"\u83dc\u53551-2",route:"/system/page2"}]},{id:"2",icon:"AppstoreOutlined",name:"\u83dc\u53552"},{id:"3",icon:"AppstoreOutlined",name:"\u83dc\u53553",submenu:[{id:"3-1",icon:"AppstoreOutlined",name:"\u83dc\u53553-1",submenu:[{id:"3-1-1",icon:"AppstoreOutlined",name:"\u83dc\u53553-1-1"},{id:"3-1-2",icon:"AppstoreOutlined",name:"\u83dc\u53553-1-2"},{id:"3-1-3",icon:"AppstoreOutlined",name:"\u83dc\u53553-1-3"},{id:"3-1-4",icon:"AppstoreOutlined",name:"\u83dc\u53553-1-4"}]},{id:"3-2",icon:"AppstoreOutlined",name:"\u83dc\u53553-2",submenu:[{id:"3-2-1",icon:"AppstoreOutlined",name:"\u83dc\u53553-2-1"},{id:"3-2-2",icon:"AppstoreOutlined",name:"\u83dc\u53553-2-2"}]}]},{id:"4",icon:"AppstoreOutlined",name:"\u793a\u4f8b",submenu:[{id:"card",icon:"AppstoreOutlined",name:"\u5361\u7247",route:"/system/demo/cardDemo"},{id:"table",icon:"AppstoreOutlined",name:"\u8868\u683c",route:"/system/demo/tableDemo"}]}],tabList:[{id:"home",name:"\u9996\u9875",route:"/system/home",unclose:!0}],activeTab:"home"},action:{switchCollapse:function(){this.publish({menuCollapse:!this.state().menuCollapse}),this.storeTabList()},getTab:function(t){for(var e=0;e<this.state().tabList.length;e++)if(this.state().tabList[e].id===t)return Object(j.a)({},this.state().tabList[e]);return null},getTabByRoute:function(t){for(var e=0;e<this.state().tabList.length;e++)if(this.state().tabList[e].route===t)return Object(j.a)({},this.state().tabList[e]);return null},setActiveTab:function(t){this.publish({activeTab:t})},setOpenMenu:function(t){this.publish({openMenu:t})},removeTab:function(t){for(var e=this.state().tabList,n=null,i=0;i<this.state().tabList.length;i++)if(this.state().tabList[i].id===t){n=this.state().tabList[i-1],e.splice(i,1),this.publish({tabList:e});break}return n},getMenuByRoute:function(t){var e=null,n=!1;return this.state().menuList.forEach((function(i){g(i,(function(i){n||i.route!==t||(e=i,n=!0)}))})),e},menuClick:function(t){var e=null,n=!1;if(this.state().menuList.forEach((function(i){g(i,(function(i){n||i.id!==t||(e=i,n=!0)}))})),e&&e.route){if(!this.getTab(e.id)){var i=this.state().tabList;i.push(e),this.publish({tabList:i})}this.setActiveTab(e.id)}return e},restoreTabList:function(){var t={},e=window.sessionStorage.getItem("tabList");e&&(t.tabList=JSON.parse(e));var n=window.sessionStorage.getItem("activeTab");n&&(t.activeTab=n);var i=window.sessionStorage.getItem("menuCollapse");i&&(t.menuCollapse="true"===i),this.publish(t)},storeTabList:function(){var t=this.state();window.sessionStorage.setItem("tabList",JSON.stringify(t.tabList)),window.sessionStorage.setItem("activeTab",t.activeTab),window.sessionStorage.setItem("menuCollapse",t.menuCollapse)}}},s.a)(),g=function t(e,n){e.submenu&&e.submenu.length>0?e.submenu.forEach((function(e){return t(e,n)})):"function"===typeof n&&n(e)},T=(n(121),n(122),n.p+"static/media/logo.6ce24c58.svg");var L=function(t){var e=p(),n=x();return Object(i.jsx)("div",{className:"appTitle",title:e.state.appTitle,children:Object(i.jsx)("div",{className:"bg",children:Object(i.jsxs)("div",{className:"bg-content",children:[Object(i.jsx)("div",{className:"logo-div",children:Object(i.jsx)("img",{className:"logo",src:T,alt:""})}),n.state.menuCollapse?null:Object(i.jsx)("div",{className:"title-div",children:Object(i.jsx)("span",{className:"title",children:e.state.appTitle})})]})})})},w=n(40);var N=function(t){var e=x(),n=Object.keys(w),a=Object(o.g)();function s(t){for(var e=0;e<n.length;e++)if(w[n[e]].render&&w[n[e]].render.displayName&&w[n[e]].render.displayName===t)return w[n[e]].render()}function c(t){return t.submenu&&t.submenu.length>0?Object(i.jsx)(v.a.SubMenu,{title:t.name,icon:s(t.icon),popupClassName:"popMenu",children:t.submenu.map((function(t){return c(t)}))},t.id):Object(i.jsx)(v.a.Item,{icon:s(t.icon),title:t.name,children:t.name},t.id)}return Object(i.jsxs)("div",{className:"menuTree",children:[Object(i.jsx)(L,{}),Object(i.jsx)("div",{className:"menuTree-div",children:Object(i.jsx)(v.a,{mode:"inline",theme:"dark",inlineIndent:10,onClick:function(t){return function(t){var n=e.action.menuClick(t.key);n&&n.route&&a.push(n.route),e.action.storeTabList()}(t)},children:e.state.menuList.map((function(t){return c(t)}))})})]})};var y=function(t){return Object(i.jsx)("div",{children:"Home"})};var C=function(t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{}),Object(i.jsx)("div",{style:{height:"800px"},children:"Page1"})]})};var A=function(t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{}),Object(i.jsx)("div",{style:{height:"80px"},children:"Page2"})]})},k=n(66),S=n.n(k);n(147),n(148);var H=function(t){return S.a.configure({showSpinner:!1}),s.a.useState(S.a.start()),s.a.useEffect((function(){return S.a.done(),function(){S.a.start()}})),Object(i.jsx)(o.b,Object(j.a)({},t))};function I(t){var e=x(),n=[{path:["","/home"],component:y,exact:!0},{path:["/page1"],component:C},{path:["/page2"],component:A}];return Object(i.jsxs)(o.d,{children:[n.map((function(n){return Object(i.jsx)(H,{path:n.path.map((function(e){return t.base+e})),exact:n.exact,render:function(a){return function(n){var i;(i=n.location.pathname===t.base?e.state.tabList[0]:e.action.getTabByRoute(n.location.pathname))?e.state.activeTab!==i.id&&(e.action.setActiveTab(i.id),e.action.storeTabList()):(i=e.action.getMenuByRoute(n.location.pathname))&&e.action.menuClick(i.id)}(a),Object(i.jsx)(n.component,{})}},n.path[0])})),Object(i.jsx)(o.a,{from:t.base+"/*",to:"/notFound"})]})}I.defaultProps={base:"/system"};var E=I,M=n(94),P=n(74),B=n(96),F=n(95);var J=function(t){var e=x();return Object(i.jsx)("div",{className:"collapseButton",children:Object(i.jsx)(P.a,{onClick:function(){return e.action.switchCollapse()},children:e.state.menuCollapse?Object(i.jsx)(B.a,{}):Object(i.jsx)(F.a,{})})})},R=(n(151),n(168)),z=n(97);n(152);var D=function(t){var e=Object(o.g)(),n=Object(i.jsxs)(v.a,{children:[Object(i.jsx)(v.a.Item,{children:"\u4e2a\u4eba\u4fe1\u606f"},"info"),Object(i.jsx)(v.a.Item,{children:"\u8bbe\u7f6e"},"setting"),Object(i.jsx)(v.a.Divider,{}),Object(i.jsx)(v.a.Item,{onClick:function(){return e.push("/login")},children:"\u767b\u51fa"},"logout")]});return Object(i.jsx)("div",{className:"userProfile",children:Object(i.jsx)(R.a,{overlay:n,trigger:["click"],children:Object(i.jsxs)("div",{children:[Object(i.jsx)(z.a,{})," admin"]})})})};var q=function(t){return Object(i.jsxs)("div",{className:"appHeader",children:[Object(i.jsx)(J,{}),Object(i.jsx)(D,{})]})},K=n(165);n(155);var W=function(t){var e=Object(o.g)(),n=x();function a(t,i){switch(i){case"add":break;case"remove":!function(t){var i=n.state.activeTab,a=n.action.removeTab(t);a&&i===t&&(e.push(a.route),n.action.setActiveTab(a.id));n.action.storeTabList()}(t)}}return Object(i.jsx)("div",{className:"tabBar",children:Object(i.jsx)(K.a,{hideAdd:!0,type:"editable-card",size:"small",activeKey:n.state.activeTab,onTabClick:function(t){return function(t){if(n.state.activeTab!==t){var i=n.action.getTab(t);i&&(e.push(i.route),n.action.setActiveTab(t)),n.action.storeTabList()}}(t)},onEdit:function(t,e){return a(t,e)},children:n.state.tabList.map((function(t){return Object(i.jsx)(K.a.TabPane,{tab:t.name,closable:!t.unclose},t.id)}))})})};var G=function(t){var e=m(),n=x();function a(){e.action.windowHeightChange()}return s.a.useEffect((function(){return window.addEventListener("resize",a),n.action.restoreTabList(),function(){window.removeEventListener("resize",a)}}),[]),Object(i.jsx)("div",{className:"system",children:Object(i.jsxs)(l.a,{style:{height:e.state.frameHeight+"px"},children:[Object(i.jsx)(l.a.Sider,{className:"side",collapsed:n.state.menuCollapse,collapsedWidth:"50px",width:"200px",children:Object(i.jsx)(N,{})}),Object(i.jsxs)(l.a,{children:[Object(i.jsx)(l.a.Header,{className:"header",children:Object(i.jsx)(q,{})}),Object(i.jsx)(W,{}),Object(i.jsxs)(l.a.Content,{className:"content",id:"pageContent",children:[Object(i.jsx)("div",{children:Object(i.jsx)(E,{})}),Object(i.jsx)(d.a,{visibilityHeight:0,target:function(){return document.querySelector("#pageContent")},children:Object(i.jsx)("div",{className:"up-div",children:Object(i.jsxs)("div",{className:"up",children:[Object(i.jsx)(M.a,{}),Object(i.jsx)("span",{children:"\u56de\u5230\u9876\u90e8"})]})})})]}),Object(i.jsx)(l.a.Footer,{className:"footer",children:Object(i.jsx)(O,{})})]})]})})};var Q=function(t){return Object(i.jsx)("div",{className:"notFound",children:Object(i.jsx)("div",{children:"404 - Not Found"})})};var U=function(t){var e=[{path:["","/login"],component:u,exact:!0},{path:["/system"],component:G}];return Object(i.jsxs)(o.d,{children:[e.map((function(t){return Object(i.jsx)(H,{path:t.path,exact:t.exact,component:t.component},t.path[0])})),Object(i.jsx)(H,{path:["/notFound","*"],component:Q})]})},V=n(46);var X=function(){return p().action.setPageTitle(),Object(i.jsx)("div",{className:"app",children:Object(i.jsx)(V.a,{basename:"/react-antdesign-demo",children:Object(i.jsx)(U,{})})})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(X,{})}),document.getElementById("root"))}},[[162,1,2]]]);