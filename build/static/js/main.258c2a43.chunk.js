(this["webpackJsonpamong-us-simon-says"]=this["webpackJsonpamong-us-simon-says"]||[]).push([[0],{2:function(n,r,e){"use strict";e.d(r,"k",(function(){return a})),e.d(r,"c",(function(){return u})),e.d(r,"j",(function(){return o})),e.d(r,"m",(function(){return s})),e.d(r,"l",(function(){return d})),e.d(r,"b",(function(){return b})),e.d(r,"f",(function(){return f})),e.d(r,"e",(function(){return l})),e.d(r,"d",(function(){return j})),e.d(r,"h",(function(){return p})),e.d(r,"g",(function(){return x})),e.d(r,"i",(function(){return g}));var t=e(12),c=Object(t.b)({name:"game",initialState:{isLaunched:!1,totalRounds:5,currentRound:1,lastSuccessRound:1,isUserTurn:!1,randomArray:[],userArray:[]},reducers:{start:function(n,r){n.isLaunched=!0,n.totalRounds=r.payload.totalRounds,n.randomArray=r.payload.randomArray},reset:function(n){n.isLaunched=!1,n.userArray=[],n.currentRound=1,n.lastSuccessRound=1},setTurn:function(n,r){n.isUserTurn=r.payload},userClick:function(n,r){n.userArray.push(r.payload)},success:function(n){n.lastSuccessRound=n.currentRound,n.currentRound=n.currentRound+1,n.isUserTurn=!1,n.userArray=[]},fail:function(n){n.currentRound=n.lastSuccessRound,n.isUserTurn=!1,n.userArray=[]}}}),i=c.actions,a=i.start,u=i.reset,o=i.setTurn,s=i.userClick,d=i.success,b=i.fail,f=function(n){return n.game.isUserTurn},l=function(n){return n.game.isLaunched},j=function(n){return n.game.currentRound},p=function(n){return n.game.totalRounds},x=function(n){return n.game.randomArray},g=function(n){return n.game.userArray};r.a=c.reducer},36:function(n,r,e){"use strict";e.r(r);var t=e(1),c=e(0),i=e.n(c),a=e(11),u=e.n(a),o=e(5),s=e(12),d=e(2),b=Object(s.a)({reducer:{game:d.a}}),f=e(3),l=e(4);function j(){var n=Object(f.a)(["\n  position: absolute;\n"]);return j=function(){return n},n}function p(){var n=Object(f.a)(["\n  font-size: 7.2rem;\n  margin-top: 1rem;\n"]);return p=function(){return n},n}function x(){var n=Object(f.a)(["\n  width: 338px;\n  height: 97px;\n"]);return x=function(){return n},n}function g(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]);return g=function(){return n},n}var O=l.b.div(g()),m=l.b.img(x()),h=l.b.h1(p()),v=(l.b.img(j()),e.p+"static/media/logo.fcde088b.svg"),y=function(n){var r=n.children;return Object(t.jsxs)(O,{children:[Object(t.jsx)(m,{src:v}),Object(t.jsx)(h,{children:"SIMON SAYS"}),r]})};function w(){var n=Object(f.a)(["\n  font-size: 3.2rem;\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n  border: 2.5px solid #ffffff;\n  border-radius: 5px;\n  background: transparent;\n  text-align: center;\n  cursor: pointer;\n  text-transform: uppercase;\n  max-width: 200px;\n  align-self: flex-end;\n"]);return w=function(){return n},n}var k=l.b.div(w()),R=function(){var n=Object(o.b)();return Object(t.jsx)(k,{onClick:function(){n(Object(d.c)())},children:"Reset"})};function A(){var n=Object(f.a)(["\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]);return A=function(){return n},n}function S(){var n=Object(f.a)(["\n  max-width: 1140px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  aligin-items: center;\n"]);return S=function(){return n},n}var z=l.b.div(S()),T=Object(l.b)(z)(A()),C=e(7);function U(){var n=Object(f.a)(["\n  font-size: 10rem;\n  font-weight: bold;\n"]);return U=function(){return n},n}function L(){var n=Object(f.a)(["\n  background: #000;\n  border: 3px solid #ffffff;\n  padding: 5rem;\n  margin-top: 2rem;\n"]);return L=function(){return n},n}function I(){var n=Object(f.a)(["\n  background-image: radial-gradient(circle farthest-corner at 10% 20%, gray 0%, rgb(5, 5, 5) 82.8%);\n  border: 1px solid black;\n  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n"]);return I=function(){return n},n}function W(){var n=Object(f.a)(["\n  pointer-events: ",";\n  background: transparent;\n  gap: 5px 5px;\n"]);return W=function(){return n},n}function E(){var n=Object(f.a)(["\n  background: #000;\n  width: 50px;\n  height: 50px;\n"]);return E=function(){return n},n}function B(){var n=Object(f.a)(["\n  padding: 3px;\n  background: #000;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 50px 50px;\n  gap: 3px 3px;\n  grid-template-areas:\n    '. . . . '\n    '. . . . '\n    '. . . . '\n    '. . . . ';\n"]);return B=function(){return n},n}function J(){var n=Object(f.a)(["\n  max-width: 300px;\n  width: 100%;\n  background: #a4a3a3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px;\n  box-shadow: 0px 0px 10px 14px rgba(0, 0, 0, 0.75);\n  margin-top: 30px;\n\n  height: 350px;\n"]);return J=function(){return n},n}var M=l.b.div(J()),N=l.b.div(B()),Y=l.b.div(E()),F=Object(l.b)(N)(W(),(function(n){return n.active?"auto":"none"})),G=l.b.div(I()),$=l.b.div(L()),q=l.b.p(U());function D(){var n=Object(f.a)(["\n  background: ",";\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n"]);return D=function(){return n},n}function H(){var n=Object(f.a)(["\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 35px 50px;\n  gap: 5px 12px;\n  grid-template-areas:\n    '. . . . .'\n    '. . . . .';\n"]);return H=function(){return n},n}var K=l.b.div(H()),P=l.b.div(D(),(function(n){return n.active?"radial-gradient(circle, rgba(152,152,152,1) 1%, rgba(0,0,0,1) 79%)":"radial-gradient(circle, rgba(9, 189, 45, 1) 1%, rgba(0, 0, 0, 1) 70%)"})),Q=function(n){var r=n.currentRound,e=Object(o.c)(d.h);return Object(t.jsx)(K,{children:Object(C.a)(Array(e)).map((function(n,e){return Object(t.jsx)(P,{active:r<e+1},e)}))})},V=function(){var n=Object(o.b)(),r=Object(o.c)(d.i),e=Object(o.c)(d.g),t=Object(o.c)(d.f),i=Object(o.c)(d.d);Object(c.useEffect)((function(){var t,c,a=(c=e,(t=r).every((function(n,r){return c[r]===t[r]})));a||n(Object(d.b)()),n(Object(d.j)(!0)),r.length<i||a&&n(Object(d.l)())}),[r]);return{currentRound:i,isUserTurn:t,handleClick:function(r,e){n(Object(d.m)(r)),n(Object(d.j)(!1))}}},X=function(){var n=V(),r=n.currentRound,e=n.isUserTurn,c=n.handleClick;return Object(t.jsxs)(M,{children:[Object(t.jsx)(Q,{currentRound:r-1}),Object(t.jsx)(F,{active:e,children:Object(C.a)(Array(16)).map((function(n,r){return Object(t.jsx)(G,{onClick:function(n){return c(r,n)}},"screenItem"+r)}))})]})},Z=e(13),_=function(){var n=Object(o.b)(),r=Object(c.useRef)(null),e=Object(o.c)(d.g),t=Object(o.c)(d.d);return Object(c.useLayoutEffect)((function(){null!==r.current&&e.every((function(e,c){var i=r.current.children[e],a=800*(c+1),u=a+500;return c<t?(Object(Z.delay)((function(){i.style.background="blue"}),a),Object(Z.delay)((function(){i.removeAttribute("style")}),u),!0):(Object(Z.delay)((function(){return n(Object(d.j)(!0))}),a),!1)}))}),[t]),{currentRound:t,screenRef:r}},nn=function(){var n=_(),r=n.currentRound,e=n.screenRef;return Object(t.jsxs)(M,{children:[Object(t.jsx)(Q,{currentRound:r}),Object(t.jsx)(N,{ref:e,children:Object(C.a)(Array(16)).map((function(n,r){return Object(t.jsx)(Y,{active:!0},"screenItem"+r)}))})]})},rn=function(){return Object(t.jsx)($,{children:Object(t.jsx)(q,{children:"You won!"})})},en=function(){var n=Object(o.c)(d.h);return{isWin:Object(o.c)(d.d)>n}},tn=function(){var n=en().isWin;return Object(t.jsxs)(z,{children:[Object(t.jsx)(R,{}),Object(t.jsx)(T,{children:n?Object(t.jsx)(rn,{}):Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(nn,{}),Object(t.jsx)(X,{})]})})]})},cn=Object(c.lazy)((function(){return e.e(3).then(e.bind(null,37))})),an=function(){var n=Object(o.c)(d.e);return Object(t.jsx)(y,{children:Object(t.jsx)(c.Suspense,{fallback:Object(t.jsx)("h1",{children:"Game loading ... "}),children:n?Object(t.jsx)(tn,{}):Object(t.jsx)(cn,{})})})},un=e.p+"static/media/background.bbbd1b44.png";function on(){var n=Object(f.a)(["  \n  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  html {\n    font-size: 62.5%; \n  }\n  \n  body {\n    overflow-x: hidden;\n    font-size: 1.6rem;\n    font-family: 'Amatic SC', cursive, sans-serif;\n    color: #fff;\n    background: #000;\n    background-image: url(",");\n    background-size: contain;\n    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);\n  }\n\n  body::-webkit-scrollbar {\n    width: 0.5em;\n  }\n\n  body::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  }\n\n  body::-webkit-scrollbar-thumb {\n    border-radius: 100px;\n    background-color: darkgrey;\n    outline: 1px solid slategrey;\n  }\n  button {\n    outline: none!important;\n  }\n"]);return on=function(){return n},n}var sn=Object(l.a)(on(),un);var dn=function(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(sn,{}),Object(t.jsx)(o.a,{store:b,children:Object(t.jsx)(an,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var bn=e(23);e.n(bn).a.load({google:{families:["Amatic SC:400,700","cursive","sans-serif"]}}),u.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(dn,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.258c2a43.chunk.js.map