(this["webpackJsonpamong-us-simon-says"]=this["webpackJsonpamong-us-simon-says"]||[]).push([[0],{2:function(n,e,r){"use strict";r.d(e,"n",(function(){return a})),r.d(e,"c",(function(){return u})),r.d(e,"m",(function(){return o})),r.d(e,"p",(function(){return s})),r.d(e,"o",(function(){return d})),r.d(e,"b",(function(){return b})),r.d(e,"d",(function(){return f})),r.d(e,"h",(function(){return l})),r.d(e,"g",(function(){return j})),r.d(e,"e",(function(){return g})),r.d(e,"k",(function(){return p})),r.d(e,"i",(function(){return x})),r.d(e,"l",(function(){return O})),r.d(e,"f",(function(){return m})),r.d(e,"j",(function(){return h}));var t=r(13),c=Object(t.b)({name:"game",initialState:{isLaunched:!1,totalRounds:5,currentRound:1,lastSuccessRound:1,isUserTurn:!1,randomArray:[],userArray:[],isFailed:!1,shouldChange:!0},reducers:{start:function(n,e){n.isLaunched=!0,n.totalRounds=e.payload.totalRounds,n.randomArray=e.payload.randomArray},reset:function(n){n.isLaunched=!1,n.userArray=[],n.currentRound=1,n.lastSuccessRound=1},setTurn:function(n,e){n.isUserTurn=e.payload},userClick:function(n,e){n.userArray.push(e.payload)},success:function(n){n.lastSuccessRound=n.currentRound,n.currentRound=n.currentRound+1,n.isUserTurn=!1,n.userArray=[]},fail:function(n){n.currentRound=n.lastSuccessRound,n.isUserTurn=!1,n.userArray=[],n.isFailed=!0,n.shouldChange=n.lastSuccessRound===n.currentRound?!n.shouldChange:n.shouldChange},resetFailed:function(n){n.isFailed=!1}}}),i=c.actions,a=i.start,u=i.reset,o=i.setTurn,s=i.userClick,d=i.success,b=i.fail,f=i.resetFailed,l=function(n){return n.game.isUserTurn},j=function(n){return n.game.isLaunched},g=function(n){return n.game.currentRound},p=function(n){return n.game.totalRounds},x=function(n){return n.game.randomArray},O=function(n){return n.game.userArray},m=function(n){return n.game.isFailed},h=function(n){return n.game.shouldChange};e.a=c.reducer},36:function(n,e,r){"use strict";r.r(e);var t=r(1),c=r(0),i=r.n(c),a=r(12),u=r.n(a),o=r(3),s=r(13),d=r(2),b=Object(s.a)({reducer:{game:d.a}}),f=r(4),l=r(5);function j(){var n=Object(f.a)(["\n  position: absolute;\n"]);return j=function(){return n},n}function g(){var n=Object(f.a)(["\n  font-size: 7.2rem;\n  margin-top: 1rem;\n  text-transform: uppercase;\n"]);return g=function(){return n},n}function p(){var n=Object(f.a)(["\n  width: 338px;\n  height: 97px;\n"]);return p=function(){return n},n}function x(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]);return x=function(){return n},n}var O=l.b.div(x()),m=l.b.img(p()),h=l.b.h1(g()),v=(l.b.img(j()),r.p+"static/media/logo.fcde088b.svg"),y=function(n){var e=n.children;return Object(t.jsxs)(O,{children:[Object(t.jsx)(m,{src:v}),Object(t.jsx)(h,{children:"Simon Says"}),e]})};function k(){var n=Object(f.a)(["\n  font-size: 3.2rem;\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n  border: 2.5px solid #ffffff;\n  border-radius: 5px;\n  background: transparent;\n  text-align: center;\n  cursor: pointer;\n  text-transform: uppercase;\n  max-width: 200px;\n  align-self: flex-end;\n"]);return k=function(){return n},n}var w=l.b.div(k()),R=function(){var n=Object(o.b)();return Object(t.jsx)(w,{onClick:function(){n(Object(d.c)())},children:"Reset"})};function A(){var n=Object(f.a)(["\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]);return A=function(){return n},n}function C(){var n=Object(f.a)(["\n  max-width: 1140px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  aligin-items: center;\n"]);return C=function(){return n},n}var F=l.b.div(C()),S=Object(l.b)(F)(A()),z=r(8);function T(){var n=Object(f.a)(["\n  font-size: 10rem;\n  font-weight: bold;\n  text-align: center;\n"]);return T=function(){return n},n}function U(){var n=Object(f.a)(["\n  background: #000;\n  border: 3px solid #ffffff;\n  padding: 5rem;\n  margin-top: 2rem;\n"]);return U=function(){return n},n}function E(){var n=Object(f.a)(["\n  background-image: radial-gradient(circle farthest-corner at 10% 20%, gray 0%, rgb(5, 5, 5) 82.8%);\n  border: 1px solid black;\n  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.75);\n\n  width: 50px;\n  height: 50px;\n  &:active,\n  &:focus {\n    transform: scale(1.1);\n    background: blue;\n  }\n"]);return E=function(){return n},n}function I(){var n=Object(f.a)(["\n  pointer-events: ",";\n  cursor: ",";\n  background: transparent;\n  gap: 5px 5px;\n  position: relative;\n  &:after {\n    display: ",";\n    cursor: ",";\n    content: '';\n    position: absolute;\n    background-color: rgba(255, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n  }\n"]);return I=function(){return n},n}function L(){var n=Object(f.a)(["\n  background: #000;\n  width: 50px;\n  height: 50px;\n"]);return L=function(){return n},n}function W(){var n=Object(f.a)(["\n  padding: 3px;\n  background: #000;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 50px 50px;\n  gap: 3px 3px;\n  grid-template-areas:\n    '. . . . '\n    '. . . . '\n    '. . . . '\n    '. . . . ';\n"]);return W=function(){return n},n}function B(){var n=Object(f.a)(["\n  max-width: 300px;\n  width: 100%;\n  background: #a4a3a3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px;\n  box-shadow: 0px 0px 10px 14px rgba(0, 0, 0, 0.75);\n  margin-top: 30px;\n  height: 350px;\n"]);return B=function(){return n},n}var J=l.b.div(B()),G=l.b.div(W()),M=l.b.div(L()),N=Object(l.b)(G)(I(),(function(n){return n.active?"auto":"none"}),(function(n){return n.active?"pointer":"not-allowed"}),(function(n){return n.isFailed?"block":"none"}),(function(n){return n.isFailed?"not-allowed":"pointer"})),Y=l.b.div(E()),$=l.b.div(U()),q=l.b.p(T());function D(){var n=Object(f.a)(["\n  background: ",";\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n"]);return D=function(){return n},n}function H(){var n=Object(f.a)(["\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 35px 50px;\n  gap: 5px 12px;\n  grid-template-areas:\n    '. . . . .'\n    '. . . . .';\n"]);return H=function(){return n},n}var K=l.b.div(H()),P=l.b.div(D(),(function(n){return n.active?"radial-gradient(circle, rgba(152,152,152,1) 1%, rgba(0,0,0,1) 79%)":"radial-gradient(circle, rgba(9, 189, 45, 1) 1%, rgba(0, 0, 0, 1) 70%)"})),Q=function(n){var e=n.currentRound,r=Object(o.c)(d.k);return Object(t.jsx)(K,{children:Object(z.a)(Array(r)).map((function(n,r){return Object(t.jsx)(P,{active:e<r+1},"progressItem"+r)}))})},V=r(7),X=function(){var n=Object(o.b)(),e=Object(o.c)(d.l),r=Object(o.c)(d.i),t=Object(o.c)(d.h),i=Object(o.c)(d.e),a=Object(o.c)(d.f);Object(c.useEffect)((function(){Object(V.delay)((function(){return n(Object(d.d)())}),1500)}),[a]),Object(c.useEffect)((function(){if(0!==e.length){var t,c,a=(c=r,(t=e).every((function(n,e){return c[e]===t[e]})));a||n(Object(d.b)()),n(Object(d.m)(!0)),e.length<i||a&&n(Object(d.o)())}}),[e]);return{currentRound:i,isUserTurn:t,handleClick:function(e,r){n(Object(d.p)(e)),n(Object(d.m)(!1))},isFailed:a}},Z=function(){var n=X(),e=n.currentRound,r=n.isUserTurn,c=n.handleClick,i=n.isFailed;return Object(t.jsxs)(J,{children:[Object(t.jsx)(Q,{currentRound:e-1}),Object(t.jsx)(N,{isFailed:i,active:r,children:Object(z.a)(Array(16)).map((function(n,e){return Object(t.jsx)(Y,{isFailed:i,onClick:function(n){return c(e,n)}},"keyboardItem"+e)}))})]})},_=function(){var n=Object(o.b)(),e=Object(c.useRef)(null),r=Object(o.c)(d.i),t=Object(o.c)(d.e),i=Object(o.c)(d.j),a=Object(o.c)(d.k);return Object(c.useEffect)((function(){null!==e.current&&(a===t&&Object(V.delay)((function(){return n(Object(d.m)(!0))}),1e3*t+1e3),r.every((function(r,c){var i=e.current.children[r],a=1e3*(c+1)+500,u=a+500;return t<=c?(Object(V.delay)((function(){return n(Object(d.m)(!0))}),a),!1):(Object(V.delay)((function(){i.style.background="blue"}),a),Object(V.delay)((function(){i.removeAttribute("style")}),u),!0)})))}),[t,i]),{currentRound:t,screenRef:e}},nn=function(){var n=_(),e=n.currentRound,r=n.screenRef;return Object(t.jsxs)(J,{children:[Object(t.jsx)(Q,{currentRound:e}),Object(t.jsx)(G,{ref:r,children:Object(z.a)(Array(16)).map((function(n,e){return Object(t.jsx)(M,{},"screenItem"+e)}))})]})},en=function(){return Object(t.jsx)($,{children:Object(t.jsx)(q,{children:"You won!"})})},rn=function(){var n=Object(o.c)(d.k);return{isWin:Object(o.c)(d.e)>n}},tn=function(){var n=rn().isWin;return Object(t.jsxs)(F,{children:[Object(t.jsx)(R,{}),Object(t.jsx)(S,{children:n?Object(t.jsx)(en,{}):Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(nn,{}),Object(t.jsx)(Z,{})]})})]})},cn=Object(c.lazy)((function(){return r.e(3).then(r.bind(null,37))})),an=function(){var n=Object(o.c)(d.g);return Object(t.jsx)(y,{children:Object(t.jsx)(c.Suspense,{fallback:Object(t.jsx)("h1",{children:"Game loading ... "}),children:n?Object(t.jsx)(tn,{}):Object(t.jsx)(cn,{})})})},un=r.p+"static/media/background.bbbd1b44.png";function on(){var n=Object(f.a)(["  \n  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  html {\n    font-size: 62.5%; \n  }\n  \n  body {\n    overflow-x: hidden;\n    font-size: 1.6rem;\n    font-family: 'Amatic SC', cursive, sans-serif;\n    color: #fff;\n    background: #000;\n    background-image: url(",");\n    background-size: contain;\n    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);\n  }\n\n  body::-webkit-scrollbar {\n    width: 0.5em;\n  }\n\n  body::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  }\n\n  body::-webkit-scrollbar-thumb {\n    border-radius: 100px;\n    background-color: darkgrey;\n    outline: 1px solid slategrey;\n  }\n  button {\n    outline: none!important;\n  }\n"]);return on=function(){return n},n}var sn=Object(l.a)(on(),un);var dn=function(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(sn,{}),Object(t.jsx)(o.a,{store:b,children:Object(t.jsx)(an,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var bn=r(23);r.n(bn).a.load({google:{families:["Amatic SC:400,700","cursive","sans-serif"]}}),u.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(dn,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.544ddd40.chunk.js.map