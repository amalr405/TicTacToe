(this.webpackJsonp1=this.webpackJsonp1||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t);c(1);var n,i=c(4),d=c.n(i),o=(c(3),c(0)),s=function(){return Object(o.jsx)("h1",{id:"header",children:"Tic Tac Toe "})},r="X",a=0,l=1,j=r;function u(){window.location.reload()}function m(e){l++;var t=e.target,c=document.createElement("h1");if(t.innerText);else if(0!=a);else if(0==a&&l>=10)n=j=j===r?"O":r,c.innerText=n,t.append(c),function(){var e=document.getElementById("root"),t=document.createElement("h1");t.id="los",t.innerText="Draw!",e.append(t)}();else{n=j=j===r?"O":r,c.innerText=n,t.append(c),1==(!0===function(e){var t=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[0,3,6],[2,5,8]],c=(document.getElementById("tictactoe"),document.querySelectorAll(".tic"));return t.some((function(t){return t.every((function(t){return c[t].innerText===e}))}))}(n)||"")&&(!function(e){var t=document.getElementById("root"),c=document.createElement("h1");c.id="win",c.innerText="".concat(e," won!"),t.append(c)}(n),a++)}}var x=function(e){return Object(o.jsxs)("div",{id:"main",children:[Object(o.jsxs)("div",{id:"tictactoe",children:[Object(o.jsx)("div",{onClick:m,className:"tic",id:"1"}),Object(o.jsx)("div",{onClick:m,className:"tic",id:"2"}),Object(o.jsx)("div",{onClick:m,className:"tic",id:"3"}),Object(o.jsx)("div",{onClick:m,className:"tic",id:"4"}),Object(o.jsx)("div",{onClick:m,className:"tic",id:"5"}),Object(o.jsx)("div",{onClick:m,className:"tic",id:"6"}),Object(o.jsx)("div",{onClick:m,className:"tic",id:"7"}),Object(o.jsx)("div",{onClick:m,className:"tic",id:"8"}),Object(o.jsx)("div",{onClick:m,className:"tic",id:"9"})]}),Object(o.jsx)("button",{id:"reset",onClick:u,children:"New Game"})]})},b=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(s,{}),Object(o.jsx)(x,{})]})};d.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))},3:function(e,t,c){}},[[10,1,2]]]);
//# sourceMappingURL=main.9e427e50.chunk.js.map