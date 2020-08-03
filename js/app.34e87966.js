(function(e){function t(t){for(var s,o,i=t[0],l=t[1],c=t[2],u=0,h=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},n=[];function o(e){return i.p+"js/"+({errorPage:"errorPage"}[e]||e)+"."+{errorPage:"9ac2407a"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=r[e]=[t,s]}));t.push(a[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}r[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/deployTv-Shows/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("8a23"),r=a.n(s);r.a},"39fb":function(e,t,a){"use strict";var s=a("457f"),r=a.n(s);r.a},"457f":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app",[a("appHeader"),a("v-content",[a("router-view")],1),a("appFooter")],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"header"}},[a("v-card",[a("v-row",[a("v-col",{staticClass:"pl-10",attrs:{md:"3",sm:"4",cols:"6"}},[a("v-toolbar-title",[a("router-link",{class:{light:!e.$vuetify.theme.dark,dark:e.$vuetify.theme.dark},attrs:{to:"/"}},[e._v("TV Shows")])],1)],1),a("v-spacer"),a("v-col",{staticClass:"hidden-xs-only",attrs:{md:"3",sm:"4",cols:"8"}},[e.showSearchBar?a("v-text-field",{attrs:{rounded:"",outlined:"",dense:"",label:"Search Shows",clearable:""},on:{input:e.searchQueryChanged},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}):e._e()],1),a("v-col",{attrs:{md:"1",sm:"1",cols:"2",align:"end"}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{on:{click:function(t){e.showSearchBar=!e.showSearchBar}}},[e._v("mdi-magnify")])],1)],1),a("v-col",{attrs:{md:"2",sm:"2",cols:"4"}},[a("v-switch",{staticClass:"mt-0",attrs:{label:"Dark",color:"white"},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}})],1),a("v-col",{staticClass:"hidden-sm-and-up",attrs:{cols:"12"}},[e.showSearchBar?a("v-text-field",{attrs:{rounded:"",outlined:"",dense:"",label:"Search Shows",clearable:""},on:{input:e.searchQueryChanged},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}):e._e()],1)],1)],1)],1)},i=[],l=(a("b0c0"),{name:"Header",data:function(){return{showSearchBar:!1,searchQuery:"",dark:!1}},watch:{dark:function(){this.$vuetify.theme.dark=this.dark}},methods:{searchQueryChanged:function(){null===this.searchQuery&&(this.searchQuery=""),this.searchQuery.length?this.$router.push({name:"search",params:{id:this.searchQuery}}):this.searchQuery.length||"home"===this.$route.name||this.$router.push("/")}}}),c=l,u=(a("d7cd"),a("2877")),d=a("6544"),h=a.n(d),m=a("8336"),v=a("b0af"),p=a("62ad"),A=a("132d"),f=a("0fd9"),g=a("2fa4"),w=a("b73d"),C=a("8654"),y=a("2a7f"),b=Object(u["a"])(c,o,i,!1,null,"7a6eb73c",null),_=b.exports;h()(b,{VBtn:m["a"],VCard:v["a"],VCol:p["a"],VIcon:A["a"],VRow:f["a"],VSpacer:g["a"],VSwitch:w["a"],VTextField:C["a"],VToolbarTitle:y["a"]});var S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"footer"}},[a("v-card",{attrs:{height:"60"}},[a("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:""}},[a("v-col",{staticClass:"text-center"},[e._v(" TV-Shows @"+e._s((new Date).getFullYear())+" ")])],1)],1)],1)},V=[],B={name:"Footer"},k=B,x=a("553a"),E=Object(u["a"])(k,S,V,!1,null,null,null),Q=E.exports;h()(E,{VCard:v["a"],VCol:p["a"],VFooter:x["a"]});var L={name:"App",components:{appHeader:_,appFooter:Q},created:function(){this.$vuetify.theme.dark=!1}},D=L,I=(a("034f"),a("7496")),F=a("a75b"),U=Object(u["a"])(D,r,n,!1,null,null,null),T=U.exports;h()(U,{VApp:I["a"],VContent:F["a"]});a("d3b7");var j=a("8c4f"),K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("appShows")],1)},O=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Shows"}},[e.showsList.length?a("TopShows",{attrs:{"shows-list":e.showsList}}):e._e(),e._l(e.genres,(function(t,s){return a("div",{key:s},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(s){var r=s.hover;return[a("div",{staticClass:"mx-md-12 mt-md-9 pl-md-1 mt-2 pointer",on:{click:function(a){return e.showSelectedGenre(t)}}},[a("span",{staticClass:"pl-5",class:{light:!e.$vuetify.theme.dark,dark:e.$vuetify.theme.dark}},[e._v(" "+e._s(t)+" ")]),r?a("v-btn",{staticClass:"overline no-background-hover",attrs:{text:!0,tile:!1,ripple:!1,small:""}},[e._v(" Explore All "),a("v-icon",[e._v("mdi-chevron-right")])],1):e._e()],1)]}}],null,!0)}),a("div",{staticClass:"container"},e._l(e.filterByGenre(e.showsList,t).slice(0,12),(function(e,t){return a("v-col",{key:t,staticClass:"pa-0 pr-1",attrs:{md:"2",sm:"3",cols:"5"}},[a("Cards",{attrs:{list:e,image:e.image.medium}})],1)})),1)],1)}))],2)},R=[],G=a("5530"),q=(a("4160"),a("159b"),function(e,t){var a=[];return e.forEach((function(e){e.genres.forEach((function(s){t==s&&a.push(e)}))})),a}),N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Cards"}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var s=t.hover;return[a("v-card",{staticClass:"ml-1 mb-2 mt-1",attrs:{width:e.size,elevation:s?24:1,outlined:s,light:s},on:{click:function(t){return e.moreDetails(e.list.id)}}},[a("v-img",{staticClass:"align-end",attrs:{src:e.image}},[a("div",{staticClass:"on-hover"},[s?a("v-card-title",{staticClass:"align-top"},[a("span",{staticClass:"body-2 white--text"},[e._v(" "+e._s(e.list.name.toUpperCase())+" ")])]):e._e(),s?a("v-card-text",[e._l(e.list.genres,(function(t){return a("span",{key:t,staticClass:"overline white--text"},[e._v(" •"+e._s(t)+" "),a("br")])})),a("v-rating",{attrs:{readonly:"",color:"yellow","background-color":"white darken-2",small:"","half-increments":""},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}}),a("span",{staticClass:"white--text"},[e._v("RATING: "+e._s(e.rating)+"/5")])],2):e._e()],1)])],1)]}}])})],1)},P=[],M={name:"Cards",props:{list:{type:Object,required:!0},image:{type:String},size:{type:String}},computed:{rating:function(){return this.list.rating.average/2}},methods:{moreDetails:function(e){this.$router.push({name:"showDetails",params:{id:e}})}}},Y=M,H=(a("82e4"),a("99d9")),W=a("ce87"),z=a("adda"),J=a("1d4d"),Z=Object(u["a"])(Y,N,P,!1,null,"d2d93e2e",null),X=Z.exports;h()(Z,{VCard:v["a"],VCardText:H["b"],VCardTitle:H["c"],VHover:W["a"],VImg:z["a"],VRating:J["a"]});var ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"hidden-xs-only"},[a("v-container",[a("v-carousel",e._l(e.getTopShows,(function(t,s){return a("v-carousel-item",{key:s},[a("v-img",{staticClass:"pointer",attrs:{src:t.image.original,"min-height":"550",gradient:"to left, rgba(255,255,255,0.3), rgba(0,0,0,0.85),rgba(0,0,0,0.95), rgba(0,0,0,0.98)"},on:{click:function(a){return e.moreDetails(t.id)}}},[a("v-col",{staticClass:"ml-md-2",attrs:{justify:"center",md:"9",sm:"10"}},[a("Summary",{attrs:{"show-detail":t}})],1)],1)],1)})),1)],1)],1),a("div",{staticClass:"hidden-sm-and-up mb-0 pb-0",attrs:{align:"center",justify:"center"}},[a("v-row",[a("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[a("v-carousel",{attrs:{cycle:"","hide-delimiters":"","show-arrows":""}},e._l(e.getTopShows,(function(e,t){return a("v-carousel-item",{key:t},[a("appCards",{attrs:{list:e,image:e.image.original,size:"90%"}})],1)})),1)],1)],1)],1)])},te=[],ae=(a("fb6a"),a("4e827"),a("2909")),se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-5 mr-10"},[a("div",{staticClass:"display-2 mt-6 ml-2"},[a("span",{class:e.theme},[e._v(e._s(e.showDetail.name))])]),a("div",{staticClass:"body-2 mt-3 ml-3 mr-md-10",class:e.theme,domProps:{innerHTML:e._s(e.showDetail.summary)}}),e._l(e.showDetail.genres,(function(t,s){return a("v-chip",{key:s,staticClass:"ml-sm-2 mb-2 ml-1"},[e._v(" "+e._s(t)+" ")])})),a("div",{staticClass:"ml-3 title",class:e.theme},[e._v(" Rating: "+e._s(e.showDetail.rating.average)+" "),a("v-icon",{attrs:{color:"yellow",size:"20"}},[e._v(" mdi-star ")])],1)],2)},re=[],ne={name:"Summary",props:{showDetail:{type:Object,required:!0},theme:{type:String,default:"white--text"}}},oe=ne,ie=a("cc20"),le=Object(u["a"])(oe,se,re,!1,null,null,null),ce=le.exports;h()(le,{VChip:ie["a"],VIcon:A["a"]});var ue={name:"TopShows",components:{appCards:X,Summary:ce},props:{showsList:{type:Array,default:function(){return[]}}},computed:{getTopShows:function(){var e=Object(ae["a"])(this.showsList);return e.sort((function(e,t){return t.rating.average-e.rating.average})),e.slice(0,6)}},methods:{moreDetails:function(e){this.$router.push({name:"showDetails",params:{id:e}})}}},de=ue,he=a("5e66"),me=a("3e35"),ve=a("a523"),pe=Object(u["a"])(de,ee,te,!1,null,null,null),Ae=pe.exports;h()(pe,{VCarousel:he["a"],VCarouselItem:me["a"],VCol:p["a"],VContainer:ve["a"],VImg:z["a"],VRow:f["a"]});var fe=a("2f62"),ge=(a("96cf"),a("1da1")),we=a("bc3a"),Ce=a.n(we),ye="https://api.tvmaze.com",be=function(){return Ce.a.get("".concat(ye,"/shows"))},_e=function(e){return Ce.a.get("".concat(ye,"/shows/").concat(e,"?embed[]=cast&&embed[]=crew&&embed[]=episodes"))},Se={methods:{getAllShows:function(){var e=this;return Object(ge["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,be();case 3:a=t.sent,e.$store.dispatch("setAllShowsList",a.data),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},Ve=Se,Be={name:"Shows",components:{Cards:X,TopShows:Ae},mixins:[Ve],data:function(){return{genres:["Action","Horror","Comedy","Drama","Romance","Adventure","Thriller","Science-Fiction"]}},computed:Object(G["a"])({},Object(fe["b"])({showsList:"allShowsList"})),created:function(){this.getAllShows()},methods:{filterByGenre:function(e,t){return q(e,t)},showSelectedGenre:function(e){this.$router.push({name:"showByGenre",params:{id:e}})},moreDetails:function(e){this.$router.push({name:"showDetails",params:{id:e}})}}},ke=Be,xe=(a("39fb"),Object(u["a"])(ke,$,R,!1,null,"e0f8b91c",null)),Ee=xe.exports;h()(xe,{VBtn:m["a"],VCol:p["a"],VHover:W["a"],VIcon:A["a"]});var Qe={name:"Home",components:{appShows:Ee}},Le=Qe,De=Object(u["a"])(Le,K,O,!1,null,null,null),Ie=De.exports,Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"genre"}},[a("v-container",[a("div",{staticClass:"headline mx-5 mt-5",class:{light:!e.$vuetify.theme.dark,dark:e.$vuetify.theme.dark}},[a("v-row",[a("v-col",[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-icon",e._g({on:{click:function(t){return e.$router.go(-1)}}},s),[e._v(" mdi-arrow-left ")]),e._v(" "+e._s(e.genre)+" ")]}}])},[a("span",[e._v("Back")])])],1)],1),a("v-row",e._l(e.filteredGenre,(function(e){return a("v-col",{key:e.id,attrs:{md:"2",sm:"4",cols:"6"}},[a("Cards",{attrs:{list:e,image:e.image.medium,size:"90%"}})],1)})),1)],1)])],1)},Ue=[],Te={name:"ShowByGenre",components:{Cards:X},mixins:[Ve],data:function(){return{genre:this.$route.params.id,filteredGenre:{}}},computed:Object(G["a"])({},Object(fe["b"])({showsList:"allShowsList"})),created:function(){this.getFilter()},methods:{filterByGenre:function(e,t){return q(e,t)},getFilter:function(){var e=this;return Object(ge["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.showsList.length){t.next=3;break}return t.next=3,e.getAllShows();case 3:e.filteredGenre=e.filterByGenre(e.showsList,e.genre);case 4:case"end":return t.stop()}}),t)})))()}}},je=Te,Ke=a("3a2f"),Oe=Object(u["a"])(je,Fe,Ue,!1,null,null,null),$e=Oe.exports;h()(Oe,{VCol:p["a"],VContainer:ve["a"],VIcon:A["a"],VRow:f["a"],VTooltip:Ke["a"]});var Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"search"}},[a("v-icon",{staticClass:"pt-3 pl-3",on:{click:function(t){return e.$router.push("/")}}},[e._v(" mdi-arrow-left ")]),a("v-container",[a("v-row",[e._l(e.searchQuery(),(function(e){return a("v-col",{key:e.id,attrs:{md:"2",sm:"3",cols:"6"}},[a("Cards",{attrs:{list:e,image:e.image.medium,size:"100%"}})],1)})),e.searchQuery().length?e._e():a("div",{staticClass:"pa-4"},[e._v(" Sorry, No Show found! ")])],2)],1)],1)},Ge=[],qe=(a("4de4"),a("c975"),function(e,t){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}))}),Ne={name:"Search",components:{Cards:X},mixins:[Ve],data:function(){return{showId:this.$route.params.id}},computed:Object(G["a"])({},Object(fe["b"])({showList:"allShowsList"})),methods:{searchQuery:function(){return this.showId=this.$route.params.id,this.showList.length||this.getAllShows(),qe(this.showList,this.showId)}}},Pe=Ne,Me=Object(u["a"])(Pe,Re,Ge,!1,null,null,null),Ye=Me.exports;h()(Me,{VCol:p["a"],VContainer:ve["a"],VIcon:A["a"],VRow:f["a"]});var He=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.showDetail.id?a("div",{attrs:{id:"showDetails"}},[a("v-icon",{staticClass:"ml-4 ma-1 mt-3",on:{click:function(t){return e.$router.go(-1)}}},[e._v(" mdi-arrow-left ")]),a("v-icon",{staticClass:"ml-4 ma-1 mt-3",on:{click:function(t){return e.$router.push("/")}}},[e._v(" mdi-home ")]),a("v-row",[a("v-col",{staticClass:"pl-md-10 pl-sm-8",attrs:{md:"11",sm:"11"}},[a("div",{staticClass:"hidden-xs-only"},[a("v-img",{staticClass:"align-left",attrs:{src:e.showDetail.image.original,"max-height":"550",gradient:"to left, rgba(255,255,255,0.3), rgba(0,0,0,0.85),rgba(0,0,0,0.95), rgba(0,0,0,0.98)"}},[a("v-col",{staticClass:"ml-md-2",attrs:{justify:"center",md:"9",sm:"10"}},[a("Summary",{attrs:{"show-detail":e.showDetail}})],1)],1)],1),a("div",{staticClass:"hidden-sm-and-up"},[a("v-img",{staticClass:"mx-5",attrs:{src:e.showDetail.image.original}}),a("v-col",[a("Summary",{attrs:{"show-detail":e.showDetail,theme:e.theme}})],1)],1)])],1),a("div",{staticClass:"headline ml-6 mt-md-4 mb-2",on:{click:function(t){e.showEpisodes=!e.showEpisodes}}},[e._v(" Episodes "),a("v-icon",[e._v(" "+e._s(e.showEpisodes?"mdi-chevron-up":"mdi-chevron-down")+" ")])],1),e.showDetail._embedded.episodes.length&&e.showEpisodes?a("div",[a("v-row",{staticClass:"ml-5"},[a("v-col",{attrs:{cols:"7",md:"2",sm:"4"}},[a("v-select",{attrs:{items:e.getSeasons,placeholder:"Season 1"},model:{value:e.season,callback:function(t){e.season=t},expression:"season"}})],1)],1),a("EpisodeDetail",{attrs:{details:e.getEpisodes}})],1):e._e(),a("div",{staticClass:"headline ml-6 mt-md-4 mb-2",on:{click:function(t){e.showCast=!e.showCast}}},[e._v(" Cast "),a("v-icon",[e._v(e._s(e.showCast?"mdi-chevron-up":"mdi-chevron-down"))])],1),e.showCast?a("Team",{attrs:{details:e.showDetail._embedded.cast}}):e._e(),a("div",{staticClass:"headline ml-6 mt-md-4 mb-2 ",on:{click:function(t){e.showCrew=!e.showCrew}}},[e._v(" Crew "),a("v-icon",[e._v(e._s(e.showCrew?"mdi-chevron-up":"mdi-chevron-down"))])],1),e.showCrew?a("Team",{attrs:{details:e.showDetail._embedded.crew}}):e._e()],1):e._e()},We=[],ze=(a("a9e3"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"container"},e._l(e.details,(function(t,r){return s("v-col",{key:r},[s("v-card",{attrs:{"max-height":"350","min-height":"350","min-width":"200"}},[t.person.image?s("v-img",{staticClass:"align-end",attrs:{src:t.person.image.medium,"lazy-src":a("988a"),height:"250"}}):e._e(),t.person.image?e._e():s("v-card-title",[s("span",{staticClass:"pt-11 mt-11 pb-12 mb-12"},[e._v("Image not found")])]),s("v-card-title",{staticClass:"title text-center"},[s("span",[e._v(e._s(t.person.name))])]),t.type?s("v-card-subtitle",{staticClass:"text-center"},[s("span",[e._v(e._s(t.type))])]):e._e()],1)],1)})),1)])}),Je=[],Ze={name:"Team",props:{details:{type:Array,required:!0}}},Xe=Ze,et=Object(u["a"])(Xe,ze,Je,!1,null,null,null),tt=et.exports;h()(et,{VCard:v["a"],VCardSubtitle:H["a"],VCardTitle:H["c"],VCol:p["a"],VImg:z["a"]});var at=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},e._l(e.details,(function(t,s){return a("v-col",{key:s,staticClass:"pa-1"},[a("v-card",{attrs:{"min-width":"180"}},[t.image?a("v-img",{staticClass:"align-end",attrs:{src:t.image.medium}}):e._e(),t.image?e._e():a("v-card-title",[a("span",{staticClass:"pt-11 mt-11"},[e._v("Image not found")])]),a("v-container",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"150px","min-height":"150px"}},[t.summary?e._e():a("v-card-title",[e._v(" No Summary found ")]),a("v-card-text",{domProps:{innerHTML:e._s(t.summary)}})],1)],1)],1)})),1)])},st=[],rt={name:"Episodes",props:{details:{type:Array,required:!0}}},nt=rt,ot=Object(u["a"])(nt,at,st,!1,null,null,null),it=ot.exports;h()(ot,{VCard:v["a"],VCardText:H["b"],VCardTitle:H["c"],VCol:p["a"],VContainer:ve["a"],VImg:z["a"]});var lt={name:"ShowDetails",components:{Summary:ce,Team:tt,EpisodeDetail:it},data:function(){return{showId:this.$route.params.id,showDetail:{},showCast:!1,showCrew:!1,showEpisodes:!1,season:"season 1"}},computed:{getSeasons:function(){for(var e=this.showDetail._embedded.episodes[this.showDetail._embedded.episodes.length-1].season,t=[],a=0;a<e;a++)t.push("Season ".concat(a+1));return t},getEpisodes:function(){var e=this,t=[];return this.showDetail._embedded.episodes.forEach((function(a){a.season===Number(e.season.substring(7,8))&&t.push(a)})),t},theme:function(){return this.$vuetify.theme.dark?"white--text":"black--text"}},created:function(){this.getShowDetails()},methods:{getShowDetails:function(){var e=this,t=_e(this.showId);t.then((function(t){e.showDetail=t.data}))["catch"]((function(e){console.log(e)}))}}},ct=lt,ut=a("b974"),dt=Object(u["a"])(ct,He,We,!1,null,null,null),ht=dt.exports;h()(dt,{VCol:p["a"],VIcon:A["a"],VImg:z["a"],VRow:f["a"],VSelect:ut["a"]}),s["a"].use(j["a"]);var mt=[{path:"/",name:"home",component:Ie},{path:"/genre/:id",name:"showByGenre",component:$e},{path:"/search/show/:id",name:"search",component:Ye},{path:"/show/:id",name:"showDetails",component:ht},{path:"*",name:"invalidURL",component:function(){return a.e("errorPage").then(a.bind(null,"649d"))}}],vt=new j["a"]({mode:"history",base:"/deployTv-Shows/",routes:mt}),pt=vt;s["a"].use(fe["a"]);var At=new fe["a"].Store({state:{allShowsList:[]},mutations:{allShowsList:function(e,t){e.allShowsList=t}},actions:{setAllShowsList:function(e,t){var a=e.commit;a("allShowsList",t)}},modules:{},getters:{allShowsList:function(e){return e.allShowsList}}}),ft=a("f309");s["a"].use(ft["a"]);var gt=new ft["a"]({theme:{dark:!0}});s["a"].config.productionTip=!0,new s["a"]({router:pt,store:At,vuetify:gt,render:function(e){return e(T)}}).$mount("#app")},"82e4":function(e,t,a){"use strict";var s=a("a8e4"),r=a.n(s);r.a},"8a23":function(e,t,a){},"988a":function(e,t){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUXFxUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisZFRkrKystLTctLS0tLS0rLSstNystNzcrKy0rLTctLS0tNy0tLSsrLS0rLTctLS03Ky0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EAB0QAQEBAAICAwAAAAAAAAAAAAABERKRQYECIWH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APH9TU0AKgC6WgBoaAaaixQNNQF1UgCiQoKalNBpEiyAsIRaByLUi0F5DKwFlXUNBdGMUGBF1ATTQFEgARUAVFUQoALAABQGYqaCqALIQAUqALCCQFVIUAQBlCiCLhAAWoC6gAGmgAi6oKACoAUhABYQAxSFAqooAagLFxmKBgAOYEQRcKoCAABgBQANCqKUAUgQEABYGICrGcWAqs61ASKmAKrMUBTiA54iiCAACoBCKkAAwBagooiwAEgKCghVSgspAgKuJhoNIrINCSiDWjOqDnUgUCrKyQFIIC0KQALABUwBQFCioCKYAIoAoAsEi2gqasSgKiwGuhkBjUoIBQ0DEXQEioQCVYiwC1UMUU0IgUIVRKACriLQRYEgLiCgFNAI1GZGqACg4lKiABABUAAAAAiwFF1ABSgAgUCLEaA1Yw1KCrqQ0AIoItolBelTiIOS0KAilAQMBUAACUCrqEUWFE0GiIAqEKCiLAFokBqVNRZQWKkAKUkIBoaA5mlMQAhgAAAJAWIChFgYChqAoAKhQBcTVBFABWVBopAAiRoEDBBzoqAioUBQBBaQECkUUNANVFARYgLBIqAqVVA1AFCkAq0AIqQtBrf0TAGEBBKLUAAAWRCAWkKmKNCFBYABQQBqMrKCrKzVoBAAqxJFAUKAGgLoaA5FBBRIUAAAKKJGmVBbEVICgAWmhgGGJFoKJAFgAKCAsLAgKqANehPsByMDUClADRFBAVRFTSgsEIDQIAomAoigYolAWJKSgoigosAFhADAUHFIoBEUQKeFAZICgUAVFAFoAJABasQAWADNPiANNQEFiTyCjTQAAA//2Q=="},a8e4:function(e,t,a){},d7cd:function(e,t,a){"use strict";var s=a("f108"),r=a.n(s);r.a},f108:function(e,t,a){}});
//# sourceMappingURL=app.34e87966.js.map