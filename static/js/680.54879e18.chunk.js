"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{963:function(t,n,e){e.d(n,{Z:function(){return p}});var r=e(689),a=e(87),c="ListMoviesItem_itemMovie__60Gzs",s="ListMoviesItem_title__auEnq",u=e(184),i=function(t){var n=t.movie,e=(0,r.TH)(),i=n.id,o=n.poster_path,p=n.title;return(0,u.jsxs)(a.rU,{state:{from:e},className:c,to:"/movies/".concat(i),children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(o),alt:p,width:"360"}),(0,u.jsxs)("h4",{className:s,children:[" ",p]})]})},o="ListMovies_listMovies__HS4Dl",p=function(t){var n=t.movies;return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:o,children:n.map((function(t){return(0,u.jsx)(i,{movie:t},t.id)}))})})}},680:function(t,n,e){e.r(n);var r=e(861),a=e(439),c=e(757),s=e.n(c),u=e(963),i=e(791),o=e(690),p=e(184);n.default=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],f=(0,i.useState)(null),v=(0,a.Z)(f,2),l=v[0],d=v[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.rQ)("/trending/movie/day");case 3:n=t.sent,c(n.results),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),d(t.t0.message),alert("ERROR:",l);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[l]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending Today"}),(0,p.jsx)(u.Z,{movies:e})]})}},690:function(t,n,e){e.d(n,{Tg:function(){return p},bI:function(){return f},rQ:function(){return o}});var r=e(861),a=e(757),c=e.n(a),s=e(243),u="45b8ac4dc4bcb28ba01349825b9d5176",i="https://api.themoviedb.org/3",o=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i).concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i).concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n,e,r){var a,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i).concat(n,"?api_key=").concat(u,"&query=").concat(e,"&page=").concat(r,"&language=en-US"));case 2:return a=t.sent,o=a.data,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.54879e18.chunk.js.map