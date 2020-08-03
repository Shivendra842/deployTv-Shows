(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],u=0,h=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function o(t){return i.p+"js/"+({errorPage:"errorPage"}[t]||t)+"."+{errorPage:"9ac2407a"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/deployTv-Shows/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("8a23"),r=a.n(s);r.a},"39fb":function(t,e,a){"use strict";var s=a("457f"),r=a.n(s);r.a},"457f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",[a("appHeader"),a("v-content",[a("router-view")],1),a("appFooter")],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header"}},[a("v-card",[a("v-row",[a("v-col",{staticClass:"pl-10",attrs:{md:"3",sm:"4",cols:"8"}},[a("v-toolbar-title",[a("router-link",{class:{light:!t.$vuetify.theme.dark,dark:t.$vuetify.theme.dark},attrs:{to:"/"}},[t._v("TV Shows")])],1)],1),a("v-spacer",{staticClass:"hidden-sm-and-down"}),a("v-col",{staticClass:"hidden-sm-and-up",attrs:{cols:"4",align:"end",justify:"end","align-self":"end"}},[a("v-switch",{staticClass:"mt-0",attrs:{label:"Dark",color:"white"},model:{value:t.dark,callback:function(e){t.dark=e},expression:"dark"}})],1),a("v-col",{attrs:{md:"3",sm:"4",cols:"8"}},[t.showSearchBar?a("v-text-field",{attrs:{rounded:"",outlined:"",dense:"",label:"Search Shows",clearable:""},on:{input:t.searchQueryChanged},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}):t._e()],1),a("v-col",{attrs:{md:"1",sm:"1",cols:"4"}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{on:{click:function(e){t.showSearchBar=!t.showSearchBar}}},[t._v("mdi-magnify")])],1)],1),a("v-col",{staticClass:"hidden-xs-only",attrs:{md:"2",sm:"2",align:"end"}},[a("v-switch",{staticClass:"mt-0",attrs:{label:"Dark",color:"white"},model:{value:t.dark,callback:function(e){t.dark=e},expression:"dark"}})],1)],1)],1)],1)},i=[],l=(a("b0c0"),{name:"Header",data:function(){return{showSearchBar:!1,searchQuery:"",dark:!1}},watch:{dark:function(){this.$vuetify.theme.dark=this.dark}},methods:{searchQueryChanged:function(){null===this.searchQuery&&(this.searchQuery=""),this.searchQuery.length?this.$router.push({name:"search",params:{id:this.searchQuery}}):this.searchQuery.length||"home"===this.$route.name||this.$router.push("/")}}}),c=l,u=(a("9b0f"),a("2877")),d=a("6544"),h=a.n(d),m=a("8336"),v=a("b0af"),p=a("62ad"),A=a("132d"),f=a("0fd9"),g=a("2fa4"),w=a("b73d"),C=a("8654"),b=a("2a7f"),y=Object(u["a"])(c,o,i,!1,null,"3d71ee06",null),_=y.exports;h()(y,{VBtn:m["a"],VCard:v["a"],VCol:p["a"],VIcon:A["a"],VRow:f["a"],VSpacer:g["a"],VSwitch:w["a"],VTextField:C["a"],VToolbarTitle:b["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer"}},[a("v-card",{attrs:{height:"60"}},[a("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:""}},[a("v-col",{staticClass:"text-center"},[t._v(" TV-Shows @"+t._s((new Date).getFullYear())+" ")])],1)],1)],1)},V=[],k={name:"Footer"},B=k,x=a("553a"),E=Object(u["a"])(B,S,V,!1,null,null,null),Q=E.exports;h()(E,{VCard:v["a"],VCol:p["a"],VFooter:x["a"]});var L={name:"App",components:{appHeader:_,appFooter:Q},created:function(){this.$vuetify.theme.dark=!1}},D=L,I=(a("034f"),a("7496")),F=a("a75b"),U=Object(u["a"])(D,r,n,!1,null,null,null),T=U.exports;h()(U,{VApp:I["a"],VContent:F["a"]});a("d3b7");var j=a("8c4f"),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("appShows")],1)},O=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Shows"}},[t.showsList.length?a("TopShows",{attrs:{"shows-list":t.showsList}}):t._e(),t._l(t.genres,(function(e,s){return a("div",{key:s},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var r=s.hover;return[a("div",{staticClass:"mx-md-12 mt-md-9 pl-md-1 mt-2 pointer",on:{click:function(a){return t.showSelectedGenre(e)}}},[a("span",{staticClass:"pl-5",class:{light:!t.$vuetify.theme.dark,dark:t.$vuetify.theme.dark}},[t._v(" "+t._s(e)+" ")]),r?a("v-btn",{staticClass:"overline no-background-hover",attrs:{text:!0,tile:!1,ripple:!1,small:""}},[t._v(" Explore All "),a("v-icon",[t._v("mdi-chevron-right")])],1):t._e()],1)]}}],null,!0)}),a("div",{staticClass:"container"},t._l(t.filterByGenre(t.showsList,e).slice(0,12),(function(t,e){return a("v-col",{key:e,staticClass:"pa-0 pr-1",attrs:{md:"2",sm:"3",cols:"5"}},[a("Cards",{attrs:{list:t,image:t.image.medium}})],1)})),1)],1)}))],2)},R=[],G=a("5530"),q=(a("4160"),a("159b"),function(t,e){var a=[];return t.forEach((function(t){t.genres.forEach((function(s){e==s&&a.push(t)}))})),a}),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Cards"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[a("v-card",{staticClass:"ml-1 mb-2 mt-1",attrs:{width:t.size,elevation:s?24:1,outlined:s,light:s},on:{click:function(e){return t.moreDetails(t.list.id)}}},[a("v-img",{staticClass:"align-end",attrs:{src:t.image}},[a("div",{staticClass:"on-hover"},[s?a("v-card-title",{staticClass:"align-top"},[a("span",{staticClass:"body-2 white--text"},[t._v(" "+t._s(t.list.name.toUpperCase())+" ")])]):t._e(),s?a("v-card-text",[t._l(t.list.genres,(function(e){return a("span",{key:e,staticClass:"overline white--text"},[t._v(" •"+t._s(e)+" "),a("br")])})),a("v-rating",{attrs:{readonly:"",color:"yellow","background-color":"white darken-2",small:"","half-increments":""},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}}),a("span",{staticClass:"white--text"},[t._v("RATING: "+t._s(t.rating)+"/5")])],2):t._e()],1)])],1)]}}])})],1)},P=[],M={name:"Cards",props:{list:{type:Object,required:!0},image:{type:String},size:{type:String}},computed:{rating:function(){return this.list.rating.average/2}},methods:{moreDetails:function(t){this.$router.push({name:"showDetails",params:{id:t}})}}},Y=M,H=(a("82e4"),a("99d9")),W=a("ce87"),z=a("adda"),J=a("1d4d"),Z=Object(u["a"])(Y,N,P,!1,null,"d2d93e2e",null),X=Z.exports;h()(Z,{VCard:v["a"],VCardText:H["b"],VCardTitle:H["c"],VHover:W["a"],VImg:z["a"],VRating:J["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hidden-xs-only"},[a("v-container",[a("v-carousel",t._l(t.getTopShows,(function(e,s){return a("v-carousel-item",{key:s},[a("v-img",{staticClass:"pointer",attrs:{src:e.image.original,"min-height":"550",gradient:"to left, rgba(255,255,255,0.3), rgba(0,0,0,0.85),rgba(0,0,0,0.95), rgba(0,0,0,0.98)"},on:{click:function(a){return t.moreDetails(e.id)}}},[a("v-col",{staticClass:"ml-md-2",attrs:{justify:"center",md:"9",sm:"10"}},[a("Summary",{attrs:{"show-detail":e}})],1)],1)],1)})),1)],1)],1),a("div",{staticClass:"hidden-sm-and-up mb-0 pb-0",attrs:{align:"center",justify:"center"}},[a("v-row",[a("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[a("v-carousel",{attrs:{cycle:"","hide-delimiters":"","show-arrows":""}},t._l(t.getTopShows,(function(t,e){return a("v-carousel-item",{key:e},[a("appCards",{attrs:{list:t,image:t.image.original,size:"90%"}})],1)})),1)],1)],1)],1)])},et=[],at=(a("fb6a"),a("4e827"),a("2909")),st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 mr-10"},[a("div",{staticClass:"display-2 mt-6 ml-2"},[a("span",{class:t.theme},[t._v(t._s(t.showDetail.name))])]),a("div",{staticClass:"body-2 mt-3 ml-3 mr-md-10",class:t.theme,domProps:{innerHTML:t._s(t.showDetail.summary)}}),t._l(t.showDetail.genres,(function(e,s){return a("v-chip",{key:s,staticClass:"ml-sm-2 mb-2 ml-1"},[t._v(" "+t._s(e)+" ")])})),a("div",{staticClass:"ml-3 title",class:t.theme},[t._v(" Rating: "+t._s(t.showDetail.rating.average)+" "),a("v-icon",{attrs:{color:"yellow",size:"20"}},[t._v(" mdi-star ")])],1)],2)},rt=[],nt={name:"Summary",props:{showDetail:{type:Object,required:!0},theme:{type:String,default:"white--text"}}},ot=nt,it=a("cc20"),lt=Object(u["a"])(ot,st,rt,!1,null,null,null),ct=lt.exports;h()(lt,{VChip:it["a"],VIcon:A["a"]});var ut={name:"TopShows",components:{appCards:X,Summary:ct},props:{showsList:{type:Array,default:function(){return[]}}},computed:{getTopShows:function(){var t=Object(at["a"])(this.showsList);return t.sort((function(t,e){return e.rating.average-t.rating.average})),t.slice(0,6)}},methods:{moreDetails:function(t){this.$router.push({name:"showDetails",params:{id:t}})}}},dt=ut,ht=a("5e66"),mt=a("3e35"),vt=a("a523"),pt=Object(u["a"])(dt,tt,et,!1,null,null,null),At=pt.exports;h()(pt,{VCarousel:ht["a"],VCarouselItem:mt["a"],VCol:p["a"],VContainer:vt["a"],VImg:z["a"],VRow:f["a"]});var ft=a("2f62"),gt=(a("96cf"),a("1da1")),wt=a("bc3a"),Ct=a.n(wt),bt="https://api.tvmaze.com",yt=function(){return Ct.a.get("".concat(bt,"/shows"))},_t=function(t){return Ct.a.get("".concat(bt,"/shows/").concat(t,"?embed[]=cast&&embed[]=crew&&embed[]=episodes"))},St={methods:{getAllShows:function(){var t=this;return Object(gt["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,yt();case 3:a=e.sent,t.$store.dispatch("setAllShowsList",a.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},Vt=St,kt={name:"Shows",components:{Cards:X,TopShows:At},mixins:[Vt],data:function(){return{genres:["Action","Horror","Comedy","Drama","Romance","Adventure","Thriller","Science-Fiction"]}},computed:Object(G["a"])({},Object(ft["b"])({showsList:"allShowsList"})),created:function(){this.getAllShows()},methods:{filterByGenre:function(t,e){return q(t,e)},showSelectedGenre:function(t){this.$router.push({name:"showByGenre",params:{id:t}})},moreDetails:function(t){this.$router.push({name:"showDetails",params:{id:t}})}}},Bt=kt,xt=(a("39fb"),Object(u["a"])(Bt,$,R,!1,null,"e0f8b91c",null)),Et=xt.exports;h()(xt,{VBtn:m["a"],VCol:p["a"],VHover:W["a"],VIcon:A["a"]});var Qt={name:"Home",components:{appShows:Et}},Lt=Qt,Dt=Object(u["a"])(Lt,K,O,!1,null,null,null),It=Dt.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"genre"}},[a("v-container",[a("div",{staticClass:"headline mx-5 mt-5",class:{light:!t.$vuetify.theme.dark,dark:t.$vuetify.theme.dark}},[a("v-row",[a("v-col",[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-icon",t._g({on:{click:function(e){return t.$router.go(-1)}}},s),[t._v(" mdi-arrow-left ")]),t._v(" "+t._s(t.genre)+" ")]}}])},[a("span",[t._v("Back")])])],1)],1),a("v-row",t._l(t.filteredGenre,(function(t){return a("v-col",{key:t.id,attrs:{md:"2",sm:"4",cols:"6"}},[a("Cards",{attrs:{list:t,image:t.image.medium,size:"90%"}})],1)})),1)],1)])],1)},Ut=[],Tt={name:"ShowByGenre",components:{Cards:X},mixins:[Vt],data:function(){return{genre:this.$route.params.id,filteredGenre:{}}},computed:Object(G["a"])({},Object(ft["b"])({showsList:"allShowsList"})),created:function(){this.getFilter()},methods:{filterByGenre:function(t,e){return q(t,e)},getFilter:function(){var t=this;return Object(gt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.showsList.length){e.next=3;break}return e.next=3,t.getAllShows();case 3:t.filteredGenre=t.filterByGenre(t.showsList,t.genre);case 4:case"end":return e.stop()}}),e)})))()}}},jt=Tt,Kt=a("3a2f"),Ot=Object(u["a"])(jt,Ft,Ut,!1,null,null,null),$t=Ot.exports;h()(Ot,{VCol:p["a"],VContainer:vt["a"],VIcon:A["a"],VRow:f["a"],VTooltip:Kt["a"]});var Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"search"}},[a("v-icon",{staticClass:"pt-3 pl-3",on:{click:function(e){return t.$router.push("/")}}},[t._v(" mdi-arrow-left ")]),a("v-container",[a("v-row",[t._l(t.searchQuery(),(function(t){return a("v-col",{key:t.id,attrs:{md:"2",sm:"3",cols:"6"}},[a("Cards",{attrs:{list:t,image:t.image.medium,size:"100%"}})],1)})),t.searchQuery().length?t._e():a("div",{staticClass:"pa-4"},[t._v(" Sorry, No Show found! ")])],2)],1)],1)},Gt=[],qt=(a("4de4"),a("c975"),function(t,e){return t.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.toLowerCase())}))}),Nt={name:"Search",components:{Cards:X},mixins:[Vt],data:function(){return{showId:this.$route.params.id}},computed:Object(G["a"])({},Object(ft["b"])({showList:"allShowsList"})),methods:{searchQuery:function(){return this.showId=this.$route.params.id,this.showList.length||this.getAllShows(),qt(this.showList,this.showId)}}},Pt=Nt,Mt=Object(u["a"])(Pt,Rt,Gt,!1,null,null,null),Yt=Mt.exports;h()(Mt,{VCol:p["a"],VContainer:vt["a"],VIcon:A["a"],VRow:f["a"]});var Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showDetail.id?a("div",{attrs:{id:"showDetails"}},[a("v-icon",{staticClass:"ml-4 ma-1 mt-3",on:{click:function(e){return t.$router.go(-1)}}},[t._v(" mdi-arrow-left ")]),a("v-icon",{staticClass:"ml-4 ma-1 mt-3",on:{click:function(e){return t.$router.push("/")}}},[t._v(" mdi-home ")]),a("v-row",[a("v-col",{staticClass:"pl-md-10 pl-sm-8",attrs:{md:"11",sm:"11"}},[a("div",{staticClass:"hidden-xs-only"},[a("v-img",{staticClass:"align-left",attrs:{src:t.showDetail.image.original,"max-height":"550",gradient:"to left, rgba(255,255,255,0.3), rgba(0,0,0,0.85),rgba(0,0,0,0.95), rgba(0,0,0,0.98)"}},[a("v-col",{staticClass:"ml-md-2",attrs:{justify:"center",md:"9",sm:"10"}},[a("Summary",{attrs:{"show-detail":t.showDetail}})],1)],1)],1),a("div",{staticClass:"hidden-sm-and-up"},[a("v-img",{staticClass:"mx-5",attrs:{src:t.showDetail.image.original}}),a("v-col",[a("Summary",{attrs:{"show-detail":t.showDetail,theme:t.theme}})],1)],1)])],1),a("div",{staticClass:"headline ml-6 mt-md-4 mb-2",on:{click:function(e){t.showEpisodes=!t.showEpisodes}}},[t._v(" Episodes "),a("v-icon",[t._v(" "+t._s(t.showEpisodes?"mdi-chevron-up":"mdi-chevron-down")+" ")])],1),t.showDetail._embedded.episodes.length&&t.showEpisodes?a("div",[a("v-row",{staticClass:"ml-5"},[a("v-col",{attrs:{cols:"7",md:"2",sm:"4"}},[a("v-select",{attrs:{items:t.getSeasons,placeholder:"Season 1"},model:{value:t.season,callback:function(e){t.season=e},expression:"season"}})],1)],1),a("EpisodeDetail",{attrs:{details:t.getEpisodes}})],1):t._e(),a("div",{staticClass:"headline ml-6 mt-md-4 mb-2",on:{click:function(e){t.showCast=!t.showCast}}},[t._v(" Cast "),a("v-icon",[t._v(t._s(t.showCast?"mdi-chevron-up":"mdi-chevron-down"))])],1),t.showCast?a("Team",{attrs:{details:t.showDetail._embedded.cast}}):t._e(),a("div",{staticClass:"headline ml-6 mt-md-4 mb-2 ",on:{click:function(e){t.showCrew=!t.showCrew}}},[t._v(" Crew "),a("v-icon",[t._v(t._s(t.showCrew?"mdi-chevron-up":"mdi-chevron-down"))])],1),t.showCrew?a("Team",{attrs:{details:t.showDetail._embedded.crew}}):t._e()],1):t._e()},Wt=[],zt=(a("a9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},t._l(t.details,(function(e,r){return s("v-col",{key:r},[s("v-card",{attrs:{"max-height":"350","min-height":"350","min-width":"200"}},[e.person.image?s("v-img",{staticClass:"align-end",attrs:{src:e.person.image.medium,"lazy-src":a("988a"),height:"250"}}):t._e(),e.person.image?t._e():s("v-card-title",[s("span",{staticClass:"pt-11 mt-11 pb-12 mb-12"},[t._v("Image not found")])]),s("v-card-title",{staticClass:"title text-center"},[s("span",[t._v(t._s(e.person.name))])]),e.type?s("v-card-subtitle",{staticClass:"text-center"},[s("span",[t._v(t._s(e.type))])]):t._e()],1)],1)})),1)])}),Jt=[],Zt={name:"Team",props:{details:{type:Array,required:!0}}},Xt=Zt,te=Object(u["a"])(Xt,zt,Jt,!1,null,null,null),ee=te.exports;h()(te,{VCard:v["a"],VCardSubtitle:H["a"],VCardTitle:H["c"],VCol:p["a"],VImg:z["a"]});var ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},t._l(t.details,(function(e,s){return a("v-col",{key:s,staticClass:"pa-1"},[a("v-card",{attrs:{"min-width":"180"}},[e.image?a("v-img",{staticClass:"align-end",attrs:{src:e.image.medium}}):t._e(),e.image?t._e():a("v-card-title",[a("span",{staticClass:"pt-11 mt-11"},[t._v("Image not found")])]),a("v-container",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"150px","min-height":"150px"}},[e.summary?t._e():a("v-card-title",[t._v(" No Summary found ")]),a("v-card-text",{domProps:{innerHTML:t._s(e.summary)}})],1)],1)],1)})),1)])},se=[],re={name:"Episodes",props:{details:{type:Array,required:!0}}},ne=re,oe=Object(u["a"])(ne,ae,se,!1,null,null,null),ie=oe.exports;h()(oe,{VCard:v["a"],VCardText:H["b"],VCardTitle:H["c"],VCol:p["a"],VContainer:vt["a"],VImg:z["a"]});var le={name:"ShowDetails",components:{Summary:ct,Team:ee,EpisodeDetail:ie},data:function(){return{showId:this.$route.params.id,showDetail:{},showCast:!1,showCrew:!1,showEpisodes:!1,season:"season 1"}},computed:{getSeasons:function(){for(var t=this.showDetail._embedded.episodes[this.showDetail._embedded.episodes.length-1].season,e=[],a=0;a<t;a++)e.push("Season ".concat(a+1));return e},getEpisodes:function(){var t=this,e=[];return this.showDetail._embedded.episodes.forEach((function(a){a.season===Number(t.season.substring(7,8))&&e.push(a)})),e},theme:function(){return this.$vuetify.theme.dark?"white--text":"black--text"}},created:function(){this.getShowDetails()},methods:{getShowDetails:function(){var t=this,e=_t(this.showId);e.then((function(e){t.showDetail=e.data}))["catch"]((function(t){console.log(t)}))}}},ce=le,ue=a("b974"),de=Object(u["a"])(ce,Ht,Wt,!1,null,null,null),he=de.exports;h()(de,{VCol:p["a"],VIcon:A["a"],VImg:z["a"],VRow:f["a"],VSelect:ue["a"]}),s["a"].use(j["a"]);var me=[{path:"/",name:"home",component:It},{path:"/genre/:id",name:"showByGenre",component:$t},{path:"/search/show/:id",name:"search",component:Yt},{path:"/show/:id",name:"showDetails",component:he},{path:"*",name:"invalidURL",component:function(){return a.e("errorPage").then(a.bind(null,"649d"))}}],ve=new j["a"]({mode:"history",base:"/deployTv-Shows/",routes:me}),pe=ve;s["a"].use(ft["a"]);var Ae=new ft["a"].Store({state:{allShowsList:[]},mutations:{allShowsList:function(t,e){t.allShowsList=e}},actions:{setAllShowsList:function(t,e){var a=t.commit;a("allShowsList",e)}},modules:{},getters:{allShowsList:function(t){return t.allShowsList}}}),fe=a("f309");s["a"].use(fe["a"]);var ge=new fe["a"]({theme:{dark:!0}});s["a"].config.productionTip=!0,new s["a"]({router:pe,store:Ae,vuetify:ge,render:function(t){return t(T)}}).$mount("#app")},"82e4":function(t,e,a){"use strict";var s=a("a8e4"),r=a.n(s);r.a},"8a23":function(t,e,a){},"988a":function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUXFxUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisZFRkrKystLTctLS0tLS0rLSstNystNzcrKy0rLTctLS0tNy0tLSsrLS0rLTctLS03Ky0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EAB0QAQEBAAICAwAAAAAAAAAAAAABERKRQYECIWH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APH9TU0AKgC6WgBoaAaaixQNNQF1UgCiQoKalNBpEiyAsIRaByLUi0F5DKwFlXUNBdGMUGBF1ATTQFEgARUAVFUQoALAABQGYqaCqALIQAUqALCCQFVIUAQBlCiCLhAAWoC6gAGmgAi6oKACoAUhABYQAxSFAqooAagLFxmKBgAOYEQRcKoCAABgBQANCqKUAUgQEABYGICrGcWAqs61ASKmAKrMUBTiA54iiCAACoBCKkAAwBagooiwAEgKCghVSgspAgKuJhoNIrINCSiDWjOqDnUgUCrKyQFIIC0KQALABUwBQFCioCKYAIoAoAsEi2gqasSgKiwGuhkBjUoIBQ0DEXQEioQCVYiwC1UMUU0IgUIVRKACriLQRYEgLiCgFNAI1GZGqACg4lKiABABUAAAAAiwFF1ABSgAgUCLEaA1Yw1KCrqQ0AIoItolBelTiIOS0KAilAQMBUAACUCrqEUWFE0GiIAqEKCiLAFokBqVNRZQWKkAKUkIBoaA5mlMQAhgAAAJAWIChFgYChqAoAKhQBcTVBFABWVBopAAiRoEDBBzoqAioUBQBBaQECkUUNANVFARYgLBIqAqVVA1AFCkAq0AIqQtBrf0TAGEBBKLUAAAWRCAWkKmKNCFBYABQQBqMrKCrKzVoBAAqxJFAUKAGgLoaA5FBBRIUAAAKKJGmVBbEVICgAWmhgGGJFoKJAFgAKCAsLAgKqANehPsByMDUClADRFBAVRFTSgsEIDQIAomAoigYolAWJKSgoigosAFhADAUHFIoBEUQKeFAZICgUAVFAFoAJABasQAWADNPiANNQEFiTyCjTQAAA//2Q=="},"9b0f":function(t,e,a){"use strict";var s=a("a4f4"),r=a.n(s);r.a},a4f4:function(t,e,a){},a8e4:function(t,e,a){}});
//# sourceMappingURL=app.01cd828d.js.map