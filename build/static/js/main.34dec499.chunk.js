(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),s=(a(39),a(33),a(3)),i=(a(40),a(4)),o=a.n(i),u=a(9),m=a(10),p=a.n(m),f=(a(59),function(e){var t=e.title,a=e.artist,c=e.length,l=e.id,i=e.isFavorite,o=Object(n.useState)(!1),u=Object(s.a)(o,2),m=u[0],f=(u[1],Object(n.useState)({isFavorite:i})),h=Object(s.a)(f,2),v=h[0],d=h[1];n.useHistory;m&&console.log("deleted!");return r.a.createElement("div",null,r.a.createElement("div",{className:"big-song-container"},r.a.createElement("div",{className:"song-container-left"},r.a.createElement("p",{className:"title"},t),r.a.createElement("p",{className:"artist"},a)),r.a.createElement("div",{className:"song-container-right"},r.a.createElement("p",{className:"length"},c),r.a.createElement("p",{className:"heart",onClick:function(){p()({url:"http://localhost:3000/songs/".concat(l),method:"PUT",data:{isFavorite:v}}).then((function(){return d(!v)})).catch(console.error),console.log(v)}},"\u2665"))))}),h=(a(60),a(16)),v=a(18),d=(a(61),function(e){var t=e.pid,a=Object(n.useState)({title:"",artist:"",time:""}),c=Object(s.a)(a,2),l=c[0],i=c[1],m=Object(n.useState)(null),f=Object(s.a)(m,2),d=(f[0],f[1]),b=Object(n.useState)(!1),E=Object(s.a)(b,2),g=(E[0],E[1]),j=Object(n.useState)(null),O=Object(s.a)(j,2),y=(O[0],O[1],function(e){i(Object(v.a)(Object(v.a)({},l),{},Object(h.a)({},e.target.name,e.target.value)))});console.log(t);var N=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p()({url:"http://localhost:3000/songs",method:"POST",data:l}).then((function(e){d({createdItem:e.data.item})})).catch(console.error);case 3:i({title:"",artist:"",time:""}),g(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"add-song"},r.a.createElement("h1",null,"Add a new song to this playlist"),r.a.createElement("form",{onSubmit:N},r.a.createElement("div",{id:"input-container"},r.a.createElement("label",{className:"label"},"Title"),r.a.createElement("input",{value:l.title,name:"title",onChange:y})),r.a.createElement("div",{id:"input-container"},r.a.createElement("label",{className:"label"},"Artist"),r.a.createElement("input",{value:l.artist,name:"artist",onChange:y})),r.a.createElement("div",{id:"input-container"},r.a.createElement("label",{className:"label"},"Song Length"),r.a.createElement("input",{value:l.length,name:"length",onChange:y})),r.a.createElement("button",{className:"add_song_button",type:"submit"},"Add New Song")))}),b=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),m=Object(s.a)(i,2),h=m[0],v=m[1];if(console.log(e),Object(n.useEffect)((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p()("http://localhost:3000/playlists/".concat(e.match.params.id));case 3:a=t.sent,l(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p()("http://localhost:3000/playlists/".concat(e.match.params.id));case 3:a=t.sent,v(a.data.songs),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[]),c){var b=h.map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,title:e.title,artist:e.artist,isFavorite:e.isFavorite,length:e.length})}));return r.a.createElement("div",null,r.a.createElement("img",{src:c.img}),r.a.createElement("h1",null,c.title),r.a.createElement("h3",null,c.description),b,r.a.createElement(d,{pid:c.id}))}return r.a.createElement("h3",null,"Serving up some goodness...")},E=(a(62),function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),c=a[0],l=a[1];if(Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/songs");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),c){var i=c.filter((function(e){return!0===e.isFavorite})).map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,title:e.title,artist:e.artist,isFavorite:e.isFavorite,length:e.length})}));return r.a.createElement("div",{className:"favorite-songs"},r.a.createElement("h1",null,"Favorites"),i)}return r.a.createElement("h3",null,"Heating up your favorites...")}),g=(a(63),a(11)),j=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),c=a[0],l=a[1];if(Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/playlists");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),c){var i=c.map((function(e){return r.a.createElement("div",{className:"tile"},r.a.createElement(g.b,{to:"/playlists/".concat(e.id)},r.a.createElement("img",{src:e.img,alt:"album covers",key:e.id}),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.description)))}));return r.a.createElement("div",{className:"discover"},r.a.createElement("h1",null,"Discover"),i)}return r.a.createElement("h3",null,"Coming right up....")},O=function(){return r.a.createElement("img",{src:"https://res.cloudinary.com/hannahbannan/image/upload/v1596753632/spudify/spudify-logo_cbt13r.png"})},y=a(1);var N=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2);return t[0],t[1],r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"top"},r.a.createElement(g.b,{to:"/"},r.a.createElement("h1",{className:"header"},"Spudify")),r.a.createElement("p",{className:"playlist"},"Songs about potatoes."),r.a.createElement("div",{className:"nav"},r.a.createElement(g.b,{to:"/playlists"},"Discover"),r.a.createElement(g.b,{to:"/favorites"},"Your Favorites"))),r.a.createElement(y.d,null,r.a.createElement(y.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(y.b,{path:"/home",component:O}),r.a.createElement(y.b,{path:"/playlists/:id",component:b}),r.a.createElement(y.b,{path:"/playlists",component:j}),r.a.createElement(y.b,{path:"/favorites",component:E})))};l.a.render(r.a.createElement(g.a,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.34dec499.chunk.js.map