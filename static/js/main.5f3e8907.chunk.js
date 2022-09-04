(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{58:function(e,t,a){},61:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(47),s=a.n(r),i=a(21),o=a(26),l=a(28),h=a(27),d=(a(58),a(0)),u=function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)("a",{href:"#",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Comics"})})]})})]})},j=a(93),m=a(91),b=a(29),f=a.n(b),p=a(38),O=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=d892d0cf12c9f63c5fb7a4cf5400e9af",this._baseOffset=210,this.getResource=function(){var e=Object(p.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(p.a)(f.a.mark((function e(){var a,n,c=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>0&&void 0!==c[0]?c[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(p.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return n=e.sent,e.abrupt("return",t._transformCharacter(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{name:e.name,desciption:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,id:e.id,comics:e.comics.items}}},_=(a(61),a.p+"static/media/mjolnir.61f31e18.png"),v=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={char:{},loading:!0,error:!1},e.marvelService=new O,e.onCharloaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.marvelService.getCharacter(t).then(e.onCharloaded).catch(e.onError)},e.tryIt=function(){e.updateChar(),e.setState({loading:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,c=n?Object(d.jsx)(m.a,{severity:"error"}):null,r=a?Object(d.jsx)(j.a,{}):null,s=n||a?null:Object(d.jsx)(x,{char:t});return Object(d.jsxs)("div",{className:"randomchar",children:[s,r,c,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{className:"button button__main",children:Object(d.jsx)("div",{onClick:this.tryIt,className:"inner",children:"try it"})}),Object(d.jsx)("img",{src:_,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(n.Component),x=function(e){var t=e.char,a=t.name,n=t.desciption,c=t.thumbnail,r=t.wiki,s=t.homepage,i="randomchar__img";return-1!==c.indexOf("image_not_available.jpg")&&(i="randomchar__imgunk"),Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:c,alt:"Random character",className:i}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:a}),Object(d.jsx)("p",{className:"randomchar__descr",children:n}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:s,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:r,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},g=v,N=a(18),y=a(94),k=(a(69),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={charList:[],loading:!0,error:!1,newItemLoading:!1,offset:210,charEnded:!1},e.marvelService=new O,e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharacters(t).then(e.onCharListLoaded).catch(e.onError)},e.onCharListLoading=function(){e.setState({newItemLoading:!0})},e.onCharListLoaded=function(t){var a=!1;t.length<9&&(a=!0),e.setState((function(e){var n=e.offset,c=e.charList;return{charList:[].concat(Object(N.a)(c),Object(N.a)(t)),loading:!1,newItemLoading:!1,offset:n+9,charEnded:a}}))},e.onError=function(){e.setState({error:!0,loading:!1})},e.itemRefs=[],e.setRef=function(t){e.itemRefs.push(t)},e.focusOnItem=function(t){e.itemRefs.forEach((function(e){return e.classList.remove("char__item_selected")})),e.itemRefs[t].classList.add("char__item_selected"),e.itemRefs[t].focus()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.onRequest()}},{key:"renderItems",value:function(e){var t=this,a=e.map((function(e,a){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(n={objectFit:"unset"}),Object(d.jsxs)("li",{className:"char__item",ref:t.setRef,onClick:function(){t.props.onCharSelected(e.id),t.focusOnItem(a)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(t.props.onCharSelected(e.id),t.focusOnItem(a))},children:[Object(d.jsx)("img",{src:e.thumbnail,alt:e.name,style:n}),Object(d.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(d.jsx)("ul",{className:"char__grid",children:a})}},{key:"render",value:function(){var e=this,t=this.state,a=t.charList,n=t.loading,c=t.error,r=t.offset,s=t.newItemLoading,i=t.charEnded,o=this.renderItems(a),l=c?Object(d.jsx)(m.a,{severity:"error"}):null,h=n?Object(d.jsx)(y.a,{}):null,u=n||c?null:o;return Object(d.jsxs)("div",{className:"char__list",children:[l,h,u,Object(d.jsx)("button",{className:"button button__main button__long",disabled:s,style:{display:i?"none":"block"},onClick:function(){return e.onRequest(r)},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(n.Component)),C=(a(70),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),w=(a(71),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={char:null,loading:!1,error:!1},e.marvelService=new O,e.onCharloaded=function(t){e.setState({char:t,loading:!1})},e.updateChar=function(){var t=e.props.charId;t&&e.marvelService.getCharacter(t).then(e.onCharloaded).catch(e.onError)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,c=t||a||n?null:Object(d.jsx)(C,{}),r=n?Object(d.jsx)(m.a,{severity:"error"}):null,s=a?Object(d.jsx)(y.a,{}):null,i=n||a||!t?null:Object(d.jsx)(S,{char:t});return Object(d.jsxs)("div",{className:"char__info",children:[c,r,s,i]})}}]),a}(n.Component)),S=function(e){var t=e.char,a=t.name,n=t.desciption,c=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(o={objectFit:"contain"}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:c,alt:a,style:o}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:a}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:r,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:n}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},L=w,I=a.p+"static/media/vision.067d4ae1.png",R=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(g,{}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(k,{onCharSelected:this.onCharSelected}),Object(d.jsx)(L,{charId:this.state.selectedChar})]}),Object(d.jsx)("img",{className:"bg-decoration",src:I,alt:"vision"})]})]})}}]),a}(n.Component);a(72);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.5f3e8907.chunk.js.map