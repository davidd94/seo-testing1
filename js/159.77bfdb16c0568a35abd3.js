(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{"/dLU":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var l=a("aPrC"),i=(a("bWfx"),a("q1tI")),r=a.n(i),n=a("RMmg"),c=(a("f3/d"),a("ZqbR")),s=a("usVm"),u=a("GJcV"),d=a("LPWd"),m=r.a.createElement,o=function(e){var t=e.article,a=t.image,i=t.readMore,r=t.title,o=t.url,_=t.description,f=Object(c.useSelector)((function(e){return e.userData})),p=function(e){d.b.dispatch(d.a.relatedArticleClick,{user:f.data,nextTitle:e})};return m(n.Col,{element:"li",className:"related-article list-item"},m(u.default,{to:o,"aria-label":r,className:"related-article__link list-item__link",onClick:function(){return p(r)}},a?m(s.default,Object(l.a)({image:a},{className:"related-article__image list-item__image"})):null,m("h3",{className:"related-article__title list-item__title"},r),_?m("p",{className:"related-article__description list-item__description"},_):null),i?m(u.default,{to:i.url,"aria-label":i.name,className:"related-article__button list-item__button",onClick:function(){return p(r)}},i.name):null)},_=(a("2dc7"),r.a.createElement),f=function(e){var t=e.title,a=e.articleList;return _(n.Wrapper,{className:"related-articles"},t?_(n.Row,{className:"related-articles__header"},_("h2",null,t)):null,_(n.Row,{element:"ul",className:"related-articles__list"},a.map((function(e){return _(o,Object(l.a)({article:e},{key:e.url}))}))))}}}]);