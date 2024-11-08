(this["webpackJsonpmovie-database"]=this["webpackJsonpmovie-database"]||[]).push([[5],{132:function(e,i,s){},143:function(e,i,s){},144:function(e,i,s){},156:function(e,i,s){"use strict";s.r(i);var a=s(2),t=s.n(a),l=s(38),c=(s(143),s(132),s.p+"static/media/i2.239f9100.webp"),r=s(3);var o=function(e){return 0!==e.cast.length?Object(r.jsxs)("div",{className:"movieDetails__credits",children:[Object(r.jsx)("h2",{className:"movieDetails__credits__title",children:"Cast"}),Object(r.jsx)("div",{className:"movieDetails__credits__profile",children:e.cast&&e.cast.slice(0,9).map((e=>Object(r.jsxs)("div",{className:"movieDetails__credits__card",children:[" ",Object(r.jsx)("img",{className:"movieDetails__credits__images",src:null!==e&&void 0!==e&&e.profile_path?l.a.poster+(null===e||void 0===e?void 0:e.profile_path):c,alt:null===e||void 0===e?void 0:e.name}),Object(r.jsxs)("div",{className:"movieDetails__credits__text",children:[Object(r.jsx)("p",{className:"movieDetails__credits__name",children:(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)}),Object(r.jsx)("p",{children:null===e||void 0===e?void 0:e.character})]})]},e.id)))})]}):Object(r.jsx)(t.a.Fragment,{})};var d=function(e){return 0!==e.crew.length?Object(r.jsxs)("div",{className:"movieDetails__credits movieDetails__creditsCrew",children:[Object(r.jsx)("h2",{className:"movieDetails__credits__title",children:"Crew"}),Object(r.jsx)("div",{className:"movieDetails__credits__profile",children:e.crew&&e.crew.slice(0,9).map((e=>Object(r.jsxs)("div",{className:"movieDetails__credits__card",children:[Object(r.jsx)("img",{className:"movieDetails__credits__images",src:null!==e&&void 0!==e&&e.profile_path?l.a.poster+(null===e||void 0===e?void 0:e.profile_path):c,alt:null===e||void 0===e?void 0:e.name}),Object(r.jsxs)("div",{className:"movieDetails__credits__text",children:[Object(r.jsx)("p",{className:"movieDetails__credits__name",children:(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)}),Object(r.jsx)("p",{children:null===e||void 0===e?void 0:e.job})]})]},e.id)))})]}):Object(r.jsx)("div",{})},n=(s(144),s(39));var m=function(e){return 0!==e.similar.length?Object(r.jsxs)("div",{className:"movieDetails__similar",children:[Object(r.jsx)("h2",{className:"movieDetails__similar__title",children:"More Like This"}),Object(r.jsx)("div",{className:"movieDetails__similar__profile",children:e.similar&&e.similar.map((e=>Object(r.jsx)("div",{className:"movieDetails__similar__card",children:Object(r.jsx)(n.b,{to:`/movie/${e.id}`,children:Object(r.jsx)("img",{onClick:window.scrollTo(0,0),className:"movieDetails__similar__images",src:l.a.poster+(null===e||void 0===e?void 0:e.poster_path),alt:e.title})})},e.id)))})]}):Object(r.jsx)(t.a.Fragment,{})},_=(s(145),s(146)),v=s.n(_);i.default=function(e){let{match:i}=e;const[s,t]=Object(a.useState)([]),[c,n]=Object(a.useState)([]),[_,j]=Object(a.useState)([]),[b,h]=Object(a.useState)(!1),[u,p]=Object(a.useState)([]);return Object(a.useEffect)((()=>{(async()=>{const e=await l.b.get(`/movie/${i.params.id}?&append_to_response=videos,similar,credits`).catch((e=>{console.log("MovieDetails Error",e.response)})),s=e.data.similar.results.filter((e=>null!==(null===e||void 0===e?void 0:e.poster_path)||void 0)).slice(0,4),a=e.data.videos.results.filter((e=>"Trailer"===(null===e||void 0===e?void 0:e.type))).slice(0,1);t(e.data),n(e.data.credits),j(s),p(a)})()}),[i.params.id]),s.genres&&c.cast&&c.crew?Object(r.jsxs)("div",{className:"movieDetails",children:[Object(r.jsx)("div",{className:"movieDetails__backdrop",style:{backgroundRepeat:"no-repeat",backgroundPosition:"top center",backgroundSize:"cover",objectFit:"contain",backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%), url(${l.a.backdrop}${null===s||void 0===s?void 0:s.backdrop_path})`},children:Object(r.jsx)("div",{className:"movieDetails__main",children:Object(r.jsxs)("div",{className:"movieDetails__info",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:"movieDetails__mainPoster",src:l.a.posterBig+(null===s||void 0===s?void 0:s.poster_path),alt:null===s||void 0===s?void 0:s.title})}),Object(r.jsxs)("div",{className:"movieDetails__mainInfo",children:[Object(r.jsxs)("h1",{className:"movieDetails__title",children:[(null===s||void 0===s?void 0:s.title)||(null===s||void 0===s?void 0:s.original_name)||(null===s||void 0===s?void 0:s.name)," ",Object(r.jsxs)("span",{children:["(",s.release_date.substring(0,4),")"]})]}),c.crew&&c.crew.filter((e=>"Director"===e.job)).slice(0,1).map((e=>Object(r.jsxs)("p",{className:"movieDetails__director",children:["Directed by"," ",Object(r.jsx)("span",{className:"movieDetails__director__span",children:e.original_name})," "]},e.id*Math.floor(100*Math.random()))))," ",0!==s.runtime?Object(r.jsxs)("p",{className:"movieDetails__runtime",children:[Math.floor(s.runtime/60),"h ",s.runtime%60,"m"," "]}):Object(r.jsx)("p",{})," ",Object(r.jsx)("div",{className:"movieDetails__genres",children:s.genres.slice(0,3).map(((e,i)=>Object(r.jsxs)("p",{className:"movieDetails__genre",children:[i?"| ":"",e.name]},e.id*Math.floor(100*Math.random()))))}),Object(r.jsx)("div",{className:"movieDetails__buttonDiv",children:Object(r.jsx)("button",{className:"trailer__button movieDetails__button",onClick:()=>h(!0),children:"Play Trailer"})}),Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"movieDetails__overview",children:s.overview})})]})]})})}),Object(r.jsx)("div",{className:"movieDetails__trailer",children:0!==u.length?Object(r.jsx)(v.a,{channel:"youtube",autoplay:!0,isOpen:b,videoId:u[0].key,onClose:()=>h(!1)}):Object(r.jsx)("div",{})}),Object(r.jsx)("div",{className:"movieDetails__cast",children:Object(r.jsx)(o,{...c})}),Object(r.jsx)("div",{className:"movieDetails__cast",children:Object(r.jsx)(d,{...c})}),Object(r.jsx)("div",{className:"movieDetails__similar",children:Object(r.jsx)(m,{similar:_})})]}):null}}}]);
//# sourceMappingURL=5.b4ceed0b.chunk.js.map