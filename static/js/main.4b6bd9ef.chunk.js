(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(6),i=c.n(s),a=(c(12),c(7)),n=c(2),l=c(1),r=(c(13),c(14),c(15),c(0)),d=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:t.Title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"content",children:[t.Plot,Object(r.jsx)("br",{})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{className:"movies",children:t.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(d,{movie:e})},e.imdbID)}))})})},j=(c(17),function(e){return t="&t=".concat(e),fetch("".concat("https://www.omdbapi.com/?apikey=eb4a7b27").concat(t)).then((function(e){return e.ok?e.json():Promise.reject("".concat(e.status,": ").concat(e.statusText))}));var t}),b=function(e){var t=e.addMovie,c=e.errMess,s=e.cancelErrMess,i=Object(l.useState)(null),a=Object(n.a)(i,2),o=a[0],b=a[1],m=Object(l.useState)(""),u=Object(n.a)(m,2),h=u[0],O=u[1],v=Object(l.useState)(!1),x=Object(n.a)(v,2),f=x[0],N=x[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:f?"input is-danger":"input",value:h,onChange:function(e){O(e.target.value),N(!1)},autoComplete:"off"})}),f&&Object(r.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-light",onClick:function(){s(),h&&(b(null),N(!1),j(h).then((function(e){e.imdbID?(b(e),O("")):(N(!0),console.log(e),O(""))})))},"data-cy":"find",children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){t(o),b(null)},"data-cy":"add",children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),o&&Object(r.jsx)(d,{movie:o})]}),Object(r.jsx)("div",{children:c.length>0&&Object(r.jsx)("p",{className:"mt-3 has-text-danger",children:c})})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],i=Object(l.useState)(""),d=Object(n.a)(i,2),j=d[0],m=d[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{addMovie:function(e){if(e){if(c.find((function(t){return t.imdbID===e.imdbID})))return console.log("Movie is already added to the list!"),void m("Movie is already added to the list!");s((function(t){return[].concat(Object(a.a)(t),[e])}))}},errMess:j,cancelErrMess:function(){m("")}})})]})};i.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.4b6bd9ef.chunk.js.map