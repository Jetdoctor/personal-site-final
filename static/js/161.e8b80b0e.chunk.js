(self.webpackChunkpersonal_site_final=self.webpackChunkpersonal_site_final||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var i=n(1087),r=n(6842),s=n(7892),a=n.n(s),o=n(184),u=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},c=[{title:"Spyder",subtitle:"2020 iOS Puzzle Platformer Game",link:"https://www.spyderthegame.com/",image:"/images/projects/Spyder.jpg",date:"2020-03-20",desc:"In Spyder\u2014the action-packed adventure on Apple Arcade\u2014you control Agent 8,an adorable robotic arachnid that crawls up walls, shoots webs, and sees all.From defusing bombs to rescuing stranded astronauts, there\u2019s no situation you can\u2019t handle!"},{title:"Call of Duty WWII",subtitle:"2017 Main Call of Duty Title Set During WWII",link:"https://www.callofduty.com/wwii",image:"/images/projects/Call of Duty.jpg",date:"2017-11-03",desc:"Call of Duty: WWII is a 2017 first-person shooter game developed by Sledgehammer Games and published by Activision."},{title:"Divey Jones Memory Diver",subtitle:"Mobile Indie Puzzle Game",image:"/images/projects/Memory Diver.png",date:"2016-04-28",desc:"Dare to become the card king of the Seven Seas!Challenge a friend to see who can become the undisputed maritime memory master!"},{title:"Divey Jones Ocean Odyssey",subtitle:"Mobile Indie Endless Runner Game",image:"/images/projects/Ocean Oddysey.jpeg",date:"2016-01-15",desc:"Solve the challenge of each reef to unlock \u201cDeep Dives\u201d. Set a new record to impress your friends. How low can you go while maintaining your score?"},{title:"Vampire Slayer",subtitle:"Greenlit MP FPS Game",image:"/images/projects/Vampire Slayer.webp",date:"2014-06-15",desc:"The game features multiplayer team-based deathmatch gameplay with a unique twist. Players must also contend with neutral elements scattered throughout the map, which adds an additional strategic dimension to the gameplay."},{title:"The Last Resort",subtitle:"Greenlit MP Survival Game",image:"/images/projects/The Last Resort.webp",date:"2013-05-15",desc:"In this game, your objective is to defend both your base and a data unit containing vital information for humanity's survival. It is a first-person shooter (FPS) where you defend your base against waves of enemies."}],h=function(){return(0,o.jsx)(r.Z,{title:"Projects",description:"Learn about Ersel Erbay's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(i.rU,{to:"/projects",children:"Projects"})}),(0,o.jsxs)("p",{children:["A list of projects that I'm allowed to list here. Web projects can be found on my ",(0,o.jsx)("a",{href:"https://github.com/jetdoctor",children:"github"})]})]})}),c.map((function(t){return(0,o.jsx)(u,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",u="week",c="month",h="quarter",l="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:o,D:d,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",M={};M[v]=$;var w=function(t){return t instanceof j},D=function t(e,n,i){var r;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(r=s),n&&(M[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,r=o}return!i&&r&&(v=r),r||!i&&v},S=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new j(n)},b=y;b.l=D,b.i=w,b.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function $(t){this.$L=D(t.locale,null,!0),this.parse(t)}var g=$.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return b},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return S(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<S(t)},g.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,i=!!b.u(e)||e,h=b.p(t),f=function(t,e){var r=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},m=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,$=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case l:return i?f(1,0):f(31,11);case c:return i?f(1,$):f(0,$+1);case u:var v=this.$locale().weekStart||0,M=(p<v?p+7:p)-v;return f(i?g-M:g+(6-M),$);case o:case d:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,u=b.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[d]=h+"Date",n[c]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===l){var p=this.clone().set(d,1);p.$d[f](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[b.p(t)]()},g.add=function(i,h){var d,f=this;i=Number(i);var m=b.p(h),p=function(t){var e=S(f);return b.w(e.date(e.date()+Math.round(t*i)),f)};if(m===c)return this.set(c,this.$M+i);if(m===l)return this.set(l,this.$y+i);if(m===o)return p(1);if(m===u)return p(7);var $=(d={},d[s]=e,d[a]=n,d[r]=t,d)[m]||1,g=this.$d.getTime()+i*$;return b.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},l=function(t){return b.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:b.s(this.$y,4,"0"),M:o+1,MM:b.s(o+1,2,"0"),MMM:h(n.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:b.s(s,2,"0"),h:l(1),hh:l(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(t,e){return e||m[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,d,f){var m,p=b.p(d),$=S(i),g=($.utcOffset()-this.utcOffset())*e,y=this-$,v=b.m(this,$);return v=(m={},m[l]=v/12,m[c]=v,m[h]=v/3,m[u]=(y-g)/6048e5,m[o]=(y-g)/864e5,m[a]=y/n,m[s]=y/e,m[r]=y/t,m)[p]||y,f?v:b.a(v)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=D(t,e,!0);return i&&(n.$L=i),n},g.clone=function(){return b.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},$}(),x=j.prototype;return S.prototype=x,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",c],["$y",l],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,j,S),t.$i=!0),S},S.locale=D,S.isDayjs=w,S.unix=function(t){return S(1e3*t)},S.en=M[v],S.Ls=M,S.p={},S}()}}]);
//# sourceMappingURL=161.e8b80b0e.chunk.js.map