(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{15:function(c,e,a){},16:function(c,e,a){},18:function(c,e,a){"use strict";a.r(e);var i=a(1),t=a.n(i),r=a(10),n=a.n(r),d=(a(15),a(5)),l=a(2),s=a(4),p=a(7),o=(a(16),a(0)),m=function(c){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:c.item.image,"data-item":JSON.stringify(c.item),onClick:function(e){return c.onClick(e)},alt:c.item.id}),Object(o.jsxs)("p",{children:[c.item.name,",",c.item.id]})]})},k=a(9),f=function(){var c=function(){return Math.floor(24*Math.random())},e=Object(i.useState)([]),a=Object(p.a)(e,2),t=a[0],r=a[1],n=Object(i.useState)({1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0}),f=Object(p.a)(n,2),h=f[0],j=f[1],g=Object(i.useState)({currentScore:0,highScore:0}),O=Object(p.a)(g,2),u=O[0],b=O[1];Object(i.useEffect)((function(){!function(){var e=Object(s.a)(Array(12).keys()).map((function(){return c()})),a=Object(s.a)(new Set(e)).splice(0,6);r(a)}()}),[]);var v=function(e){var a=t.slice(0);console.log(a.indexOf(Number(e)-1)),a.splice(a.indexOf(Number(e)-1),1);var i=Object(s.a)(new Set([].concat(Object(s.a)(a),[c(),c(),c()]))).splice(0,6);r(i)};Object(i.useEffect)((function(){for(var c in h)h[c]>=2&&(u.currentScore-1>u.highScore?(b((function(c,e){return{highScore:Number(c.currentScore)-1,currentScore:0}})),j((function(c){return{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0}})),v(c)):(b(Object(l.a)(Object(l.a)({},u),{},{currentScore:0})),j((function(c){return{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0}})),v(c)))}),[h,u,v]);var y=function(c){var e=JSON.parse(c.target.dataset.item).id;j((function(c){return Object(l.a)(Object(l.a)({},c),{},Object(d.a)({},e,[Number(c[e])+1]))})),b((function(c){return Object(l.a)(Object(l.a)({},c),{},{currentScore:Number(c.currentScore)+1})}))},w=t.map((function(c){return Object(o.jsx)(m,{onClick:y,item:k[c]},"image".concat(k[c].id))}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("u",{children:"Memory Game - R&M Theme"})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["currentScore : ",u.currentScore]}),Object(o.jsxs)("p",{children:["highScore: ",u.highScore]})]}),Object(o.jsx)("div",{className:"imgContainer",children:w})]})},h=function(c){c&&c instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(e){var a=e.getCLS,i=e.getFID,t=e.getFCP,r=e.getLCP,n=e.getTTFB;a(c),i(c),t(c),r(c),n(c)}))};n.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),h()},9:function(c){c.exports=JSON.parse('[{"id":1,"clickedOnce":false,"clickedTwice":false,"clicked":0,"image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg"},{"id":2,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg","clicked":0},{"clicked":0,"id":3,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/3.jpeg"},{"clicked":0,"id":4,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/4.jpeg"},{"clicked":0,"id":5,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/5.jpeg"},{"clicked":0,"id":6,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/6.jpeg"},{"clicked":0,"id":7,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/7.jpeg"},{"clicked":0,"id":8,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/8.jpeg"},{"clicked":0,"id":9,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/9.jpeg"},{"clicked":0,"id":10,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/10.jpeg"},{"clicked":0,"id":11,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/11.jpeg"},{"clicked":0,"id":12,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/12.jpeg"},{"clicked":0,"id":13,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/13.jpeg"},{"clicked":0,"id":14,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/14.jpeg"},{"clicked":0,"id":15,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/15.jpeg"},{"clicked":0,"id":16,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/16.jpeg"},{"clicked":0,"id":17,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/17.jpeg"},{"clicked":0,"id":18,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/18.jpeg"},{"clicked":0,"id":19,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/19.jpeg"},{"clicked":0,"id":20,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/20.jpeg"},{"clicked":0,"id":21,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/21.jpeg"},{"clicked":0,"id":22,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/22.jpeg"},{"clicked":0,"id":23,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/23.jpeg"},{"clicked":0,"id":24,"clickedOnce":false,"clickedTwice":false,"image":"https://rickandmortyapi.com/api/character/avatar/24.jpeg"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.21e188a4.chunk.js.map