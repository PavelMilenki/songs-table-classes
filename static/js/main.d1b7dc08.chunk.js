(this["webpackJsonpsongs-table"]=this["webpackJsonpsongs-table"]||[]).push([[0],{1:function(e,t,n){e.exports={App:"App_App__2-HKk",container:"App_container__3dey8",tableSongs:"App_tableSongs__2zwEj",songsTable:"App_songsTable__3CZym",icon:"App_icon__lmsIP",selects:"App_selects__1ue9C",select:"App_select__3-_6X",paginatorContainer:"App_paginatorContainer__1D8hC",paginator:"App_paginator__bpVf1"}},160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),s=n.n(o),c=(n(96),n(1)),l=n.n(c),u=n(19),i=n(75),g=n(76),p=n(88),m=n(77),f=n(89),E=n(30),d=n(49),h=n.n(d),C=n(79),v=n(31),b=n(80),y=n.n(b).a.create({baseURL:"https://raw.githubusercontent.com/PavelMilenki/songs-table-classes/master/src/songs.json"}),S=function(){return y.get("")},_="/redux/songsReducer/SET_SONGS",k="/redux/songsReducer/SET_CURRENT_SONGS",w="/redux/songsReducer/SET_PAGE",P={songs:[],currentSongs:[],totalCount:1,page:1,pageCount:5},j=function(e){return{type:_,songs:e}},O=function(e){var t=e.year,n=e.country,a=e.artist,o=e.song;return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,o),r.a.createElement("td",null,n),r.a.createElement("td",null,t)))},N=n(162),A=function(e){var t=e.sortByUP,n=e.sortByDown,a=e.tableElements;return r.a.createElement("table",{className:l.a.songsTable},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Artist",r.a.createElement(N.a,{className:l.a.icon,type:I,onClick:function(){return t(R)}}),r.a.createElement(N.a,{className:l.a.icon,type:J,onClick:function(){return n(R)}})),r.a.createElement("th",null,"Song",r.a.createElement(N.a,{className:l.a.icon,type:I,onClick:function(){return t(U)}}),r.a.createElement(N.a,{className:l.a.icon,type:J,onClick:function(){return n(U)}})),r.a.createElement("th",null,"Country",r.a.createElement(N.a,{className:l.a.icon,type:I,onClick:function(){return t(Y)}}),r.a.createElement(N.a,{className:l.a.icon,type:J,onClick:function(){return n(Y)}})),r.a.createElement("th",null,"Year",r.a.createElement(N.a,{className:l.a.icon,type:I,onClick:function(){return t(G)}}),r.a.createElement(N.a,{className:l.a.icon,type:J,onClick:function(){return n(G)}})))),a)},B=function(e){var t=e.option,n=e.value,a=e.selected;return r.a.createElement("option",{selected:a,value:n},t)},T=function(e){var t=e.title,n=e.getSelectorsValues,a=e.selected,o=e.onChange,s=n.map((function(e){return r.a.createElement(B,{option:e,value:e,key:e+Math.random()})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,t),r.a.createElement("select",{onChange:o,className:l.a.select,value:a},s))},V=function(e){var t=e.selected,n=e.songs,a=e.onChangedValue,o=function(e){var t=n.map((function(t){return t[e]}));return t=(t=Object(u.a)(new Set(t))).sort((function(e,t){return e.localeCompare(t)})),[L].concat(Object(u.a)(t))};return r.a.createElement("div",{className:l.a.selects},r.a.createElement(T,{title:R,onChange:function(e){a(R,e)},selected:t,getSelectorsValues:o(R)}),r.a.createElement(T,{title:Y,onChange:function(e){a(Y,e)},selected:t,getSelectorsValues:o(Y)}),r.a.createElement(T,{title:G,onChange:function(e){a(G,e)},selected:t,getSelectorsValues:o(G)}))},x=function(e){for(var t=e.page,n=e.pageCount,a=e.totalCount,o=e.getPage,s=[],c=Math.ceil(a/n),u=function(e){s.push(r.a.createElement("button",{key:e,style:{background:t===e?"#1C6EA4":""},onClick:function(){return o(e,n)}},e))},i=1;i<=c;i++)u(i);return t+4<c&&(s[t+2]=r.a.createElement("span",{key:t+3},"- ... -"),s=s.filter((function(e,n){return n<t+3||n===c-1}))),t>5&&(s[1]=r.a.createElement("span",{key:2},"- ... -"),s=s.filter((function(e,n){return n<2||n>t-4}))),r.a.createElement("div",{className:l.a.paginator},r.a.createElement("div",null,r.a.createElement("select",{value:n,onChange:function(e){return o(t=1,Number(e.currentTarget.value))}},r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:10},"10"),r.a.createElement("option",{value:25},"25"),r.a.createElement("option",{value:50},"50"),r.a.createElement("option",{value:100},"100"))),r.a.createElement("div",null,s))},D=n(86),M=n(8),R="Artist",U="Song",Y="Country",G="Year",L="ALL",I="up",J="down",W=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={selected:L},n.setSelected=function(e){n.setState({selected:e})},n.sortSongParams=function(e,t){var a=n.props.currentSongs.sort((function(t,n){return t[e].localeCompare(n[e])}));if(t===I)n.props.setSongs(Object(u.a)(a));else if(t===J){var r=a.reverse();n.props.setSongs(Object(u.a)(r))}},n.sortByUP=function(e){n.sortSongParams(e,I)},n.sortByDown=function(e){n.sortSongParams(e,J)},n.onChanged=function(e,t){var a=n.props.songs.filter((function(n){return n[e]===t}));t===L?(n.setState({selected:L}),n.props.getSongs()):(n.setSelected(t),n.props.setCurrentSongs(a))},n.onChangedValue=function(e,t){n.onChanged(e,t.currentTarget.value)},n.getPage=function(e,t){n.props.setPage(e,t)},n}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentSongs,n=e.songs;this.props.getSongs(t,n)}},{key:"render",value:function(){var e=Object(D.slice)(this.props.currentSongs,[(this.props.page-1)*this.props.pageCount],[this.props.pageCount*this.props.page]).map((function(e){return r.a.createElement(O,{year:e.Year,country:e.Country,artist:e.Artist,song:e.Song,key:e.Year+Math.random()})}));return r.a.createElement("div",{className:l.a.container},r.a.createElement("div",{className:l.a.tableSongs},r.a.createElement(A,{sortByUP:this.sortByUP,sortByDown:this.sortByDown,tableElements:e}),r.a.createElement(V,{onChangedValue:this.onChangedValue,selected:this.state.selected,songs:this.props.songs})),r.a.createElement("div",{className:l.a.paginatorContainer},r.a.createElement(x,{page:this.props.page,pageCount:this.props.pageCount,totalCount:this.props.totalCount,getPage:this.getPage})))}}]),t}(r.a.Component),z=Object(M.d)(Object(E.b)((function(e){return{songs:e.songsPage.songs,currentSongs:e.songsPage.currentSongs,page:e.songsPage.page,pageCount:e.songsPage.pageCount,totalCount:e.songsPage.totalCount}}),{getSongs:function(){return function(){var e=Object(C.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S();case 3:n=e.sent,t(j(n.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Message error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},setCurrentSongs:function(e){return{type:k,songs:e}},setPage:function(e,t){return{type:w,page:e,pageCount:t}},setSongs:j})(W)),F=n(87),H=Object(M.c)({songsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(v.a)({},e,{songs:t.songs,currentSongs:t.songs,totalCount:t.songs.length});case k:return Object(v.a)({},e,{currentSongs:t.songs,totalCount:t.songs.length});case w:return Object(v.a)({},e,{page:t.page,pageCount:t.pageCount});default:return e}}}),K=Object(M.e)(H,Object(M.a)(F.a)),X=K;window.store=K;var Z=function(){return r.a.createElement("div",{className:l.a.app},r.a.createElement(E.a,{store:X},r.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,n){e.exports=n(160)},96:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.d1b7dc08.chunk.js.map