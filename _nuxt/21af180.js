(window.webpackJsonp=window.webpackJsonp||[]).push([[24,3],{368:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},slug:{type:String}}},l=n(46),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between"},[t.prev?n("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:{name:t.slug,params:{slug:t.prev.slug}}}},[n("span",{staticClass:"text-h6 text--primary"},[t._v("← ")]),t._v("\n    "+t._s(t.prev.title)+"\n  ")]):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:t.slug,params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)),n("span",{staticClass:"text-h6 text--primary"},[t._v(" →")])]):n("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},369:function(t,e){t.exports="data:image/svg+xml;base64,"},370:function(t,e,n){"use strict";n.r(e);var r={props:{author:{type:Object,required:!0}}},l=n(46),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[n("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:"/blog/author/"+t.author.name}},[t.author.img?n("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:t.author.img}}):t._e(),t._v(" "),n("div",{staticClass:"flex flex-col m-4"},[n("h4",{staticClass:"font-semibold"},[t._v("Author")]),t._v(" "),n("p",[t._v(t._s(t.author.name))]),t._v(" "),n("p",[t._v(t._s(t.author.bio))])])])],1)}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,n){"use strict";n.r(e);var r={props:{articles:{type:Array}},data:function(){return{drawer:!0,miniVariant:!1}}},l=n(46),o=n(59),c=n.n(o),v=n(181),d=n(168),x=n(169),f=n(106),m=n(170),h=n(28),_=n(458),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:!0,fixed:"",app:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("div",{staticClass:"pa-2 float-right"},[n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("nav",{staticClass:"pb-6"},[n("ul",{staticClass:"mb-6"},t._l(t.articles,(function(e){return n("li",{key:e.path,staticClass:"pl-3 text-body-2 py-1 font-weight-regular text--disabled"},[n("nuxtLink",{staticClass:"hover:underline v-toc-link d-block transition-swing text-decoration-none",attrs:{to:e.path}},[t._v(t._s(e.title)+"\n         ")])],1)})),0)]),t._v(" "),n("v-list",t._l(t.articles,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.path,router:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:d.a,VList:x.a,VListItem:f.a,VListItemAction:m.a,VListItemContent:h.a,VListItemTitle:h.b,VNavigationDrawer:_.a})},373:function(t,e,n){"use strict";n.r(e);var r={props:{toc:{type:Array}}},l=n(46),o=n(59),c=n.n(o),v=n(458),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"py-4 pr-3 ",attrs:{right:!0,app:"",fixed:"",clipped:!0}},[n("div",{staticClass:"mb-2 text-h6 font-weight-medium text--primary"},[t._v("\n  Contents\n   "),n("nav",{staticClass:"pb-6"},[n("ul",{staticClass:"mb-6"},t._l(t.toc,(function(link){return n("li",{key:link.id,staticClass:"pl-3 text-body-2 py-1 font-weight-regular text--disabled",class:{"font-semibold":2===link.depth}},[n("nuxtLink",{staticClass:"hover:underline v-toc-link d-block transition-swing text-decoration-none",class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth},attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VNavigationDrawer:v.a})},386:function(t,e,n){var content=n(415);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5db94864",content,!0,{sourceMap:!1})},414:function(t,e,n){"use strict";n(386)},415:function(t,e,n){var r=n(10),l=n(374),o=n(369);e=r(!1);var c=l(o);e.push([t.i,".nuxt-content p{margin-bottom:20px}.nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.icon.icon-link{background-image:url("+c+");display:inline-block;width:20px;height:20px;background-size:20px 20px}",""]),t.exports=e},456:function(t,e,n){"use strict";n.r(e);n(15),n(47),n(43);var r=n(8),l=n(2),o=n(35),c=(n(70),n(14)),v={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,v,article,d,x,f,m,h,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,e.next=3,n("unix/articles").only(["title","description","img","slug","author"]).sortBy("createdAt","desc").fetch();case 3:return v=e.sent,e.next=6,n("unix/articles",c.slug).fetch();case 6:return article=e.sent,e.next=9,n("unix/tags").only(["name","slug"]).where({name:{$containsAny:article.tags}}).fetch();case 9:return d=e.sent,x=Object.assign.apply(Object,[{}].concat(Object(o.a)(d.map((function(s){return Object(l.a)({},s.name,s)}))))),e.next=13,n("unix/articles").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 13:return f=e.sent,m=Object(r.a)(f,2),h=m[0],_=m[1],e.abrupt("return",{articles:v,article:article,tags:x,prev:h,next:_,slug:"unix-slug"});case 18:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},d=(n(414),n(46)),x=n(59),f=n.n(x),m=n(363),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar",{attrs:{articles:t.articles}}),t._v(" "),n("toc",{attrs:{toc:t.article.toc}}),t._v(" "),n("h1",{staticClass:"text-6xl font-bold"},[t._v(t._s(t.article.title))]),t._v(" "),n("p",[t._v(t._s(t.article.description))]),t._v(" "),n("nuxt-content",{staticClass:"wrap",attrs:{document:t.article}}),t._v(" "),n("div",{staticClass:"flex flex-wrap align-center w-screen xs:flex-col lg:flex-row"},[n("author",{attrs:{author:t.article.author}}),t._v(" "),n("v-spacer"),t._v(" "),n("p",{staticClass:"pb-4"},[t._v(t._s(t.formatDate(t.article.updatedAt)))])],1),t._v(" "),n("div",{staticClass:"flex wrap w-screen xs:flex-col lg:flex-row "},[n("PrevNext",{staticClass:"mt-8",attrs:{prev:t.prev,next:t.next,slug:t.slug}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{NavBar:n(372).default,Toc:n(373).default,Author:n(370).default,PrevNext:n(368).default}),f()(component,{VSpacer:m.a})}}]);