(self.webpackChunkpersonal_site_final=self.webpackChunkpersonal_site_final||[]).push([[902],{6902:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var i=n(9439),a=n(2791),r=n(1087),o=n(6842),s=n(184),c=function(e){var t=e.data;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:t.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},l=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,s.jsx)(c,{data:e},e.school)}))]})};l.defaultProps={data:[]};var u=l,d=n(7892),h=n.n(d),g=n(2773),p=function(e){var t=e.data,n=t.name,i=t.position,a=t.url,r=t.startDate,o=t.endDate,c=t.summary,l=t.highlights;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:a,children:n})," - ",i]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",h()(r).format("MMMM YYYY")," - ",o?h()(o).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,s.jsx)(g.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,l?(0,s.jsx)("ul",{className:"points",children:l.map((function(e){return(0,s.jsx)("li",{children:e},e)}))}):null]})},m=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,s.jsx)(p,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};m.defaultProps={data:[]};var f=m,y=n(9142);function v(e,t,n){return(t=(0,y.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){var t=e.handleClick,n=e.active,i=e.label;return(0,s.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},$=function(e){var t=e.data,n=e.categories,i=t.category,a=t.competency,r=t.title,o={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},c=D(D({},o),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return(0,s.jsxs)("div",{className:"skillbar clearfix",children:[(0,s.jsx)("div",{className:"skillbar-title",style:o,children:(0,s.jsx)("span",{children:r})}),(0,s.jsx)("div",{className:"skillbar-bar",style:c}),(0,s.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};$.defaultProps={categories:[]};var S=$,j=function(e){var t=e.skills,n=e.categories,r=Object.fromEntries([["All",!1]].concat(n.map((function(e){return[e.name,!1]})))),o=(0,a.useState)(r),c=(0,i.Z)(o,2),l=c[0],u=c[1],d=function(e){var t=Object.keys(l).reduce((function(t,n){return D(D({},t),{},v({},n,e===n&&!l[n]))}),{});t.All=!Object.keys(l).some((function(e){return t[e]})),u(t)};return(0,s.jsxs)("div",{className:"skills",children:[(0,s.jsx)("div",{className:"link-to",id:"skills"}),(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h3",{children:"Skills"}),(0,s.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,s.jsx)("div",{className:"skill-button-container",children:Object.keys(l).map((function(e){return(0,s.jsx)(M,{label:e,active:l,handleClick:d},e)}))}),(0,s.jsx)("div",{className:"skill-row-container",children:function(){var e=Object.keys(l).reduce((function(e,t){return l[t]?t:e}),"All");return t.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(t){return"All"===e||t.category.includes(e)})).map((function(e){return(0,s.jsx)(S,{categories:n,data:e},e.title)}))}()})]})};j.defaultProps={skills:[],categories:[]};var w=j,x=[{school:"Full Sail University",degree:"M.S. Game Design",link:"https://www.fullsail.edu/",year:"2015-2016"},{school:"Izmir University of Economics",degree:"B.S. Software Engineering",link:"https://www.ieu.edu.tr/en",year:"2010-2014"}],k=[{name:"Sumo Digital",position:"Level Designer",url:"https://arthena.com",startDate:"2019-01-01",endDate:"2022-02-01",summary:'Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,\n    <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.\n    We develop quantitative strategies to predict the value of fine art and build investment products.\n    I ran a 20-person product and engineering org for 8 years. We were acquired by\n    <a href="https://www.masterworks.com/">Masterworks</a> in 2023.',highlights:["Built production, online, end-to-end optimized machine learning pipelines for time-series prediction.","Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.","Set and communicated team priorities that supported the broader organization's goals. Aligned strategy, processes, and decision-making across teams.","Set clear expectations with individuals based on their level and role and aligned them to the broader organization's goals. Met regularly with individuals to discuss performance and development, and provided feedback and coaching.","Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs."]},{name:"Enveritas",position:"ML Engineering Contractor",url:"http://enveritas.org",startDate:"2016-09-01",endDate:"2018-01-01",summary:"Enveritas is a non-profit that works with coffee farmers to improve their livelihoods.\n    I joined on day one and helped build a variety of tools to collect and analyze data. I also advised\n    on technical strategy, helped hire engineers, and advised on their YC application.",highlights:["Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.","Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.","Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM's, and other techniques."]},{name:"Zenysis",position:"Software Engineering Contractor",url:"https://zenysis.com",startDate:"2016-02-01",endDate:"2016-03-01",summary:"Zenysis develops data analysis and visualization tools for government agencies and international organizations.\n    Their solutions help improve decision-making by integrating and analyzing large-scale datasets from various sources.\n    I was the second contributor to the codebase. We built data visualization tools and tackled complex data ingestion\n    challenges for the Ethiopian Ministry of Health.",highlights:["Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization tools in React and Flask.","Ingested multiple databases with different alphabets, calendars, and without official spellings of geographic locations."]},{name:"Matroid",position:"Co-founder",url:"https://matroid.com",startDate:"2015-07-01",endDate:"2016-01-01",summary:"Matroid is a computer vision platform for creating and deploying detectors. Detectors help customers identify objects,\n    events, or patterns in images and videos without requiring machine learning or coding expertise. I played a crucial role in\n    defining the company's vision. I was responsible for architecting and building the initial product. I left shortly after the\n    Series A to focus on Arthena.",highlights:["Developed end to end machine learning pipeline to train visual classifiers from keywords using Caffe, Node.JS, Redis, MongoDB, and other technologies."]},{name:"Planet",position:"Missions Intern",url:"https://planet.com",startDate:"2014-06-01",endDate:"2015-01-01",highlights:["Built models to improve image quality, signal to noise ratio, and dynamic range.","Performed statistical analysis of image quality in Matlab and Python.  Developed flight software in C++.","Organized first hackathon, prototyped hardware, and designed and built photography equipment for rocket launches."]}],O=n(3433),E=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:5,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Next.JS",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL/Redshift",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["ML Engineering"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Flask",competency:3,category:["Web Development","Python"]},{title:"FastAPI",competency:3,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"AWS",competency:3,category:["Tools","Web Development"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"AWS Lambda",competency:3,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Numba",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["ML Engineering","Python"]},{title:"PyTorch",competency:3,category:["ML Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python","ML Engineering"]},{title:"Ruby",competency:2,category:["Languages"]},{title:"Ruby on Rails",competency:3,category:["Web Development","Languages"]},{title:"C++",competency:1,category:["Languages"]},{title:"Julia",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","ML Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","ML Engineering","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","ML Engineering","Python"]},{title:"Spark",competency:2,category:["Data Engineering","ML Engineering"]},{title:"Dagster",competency:2,category:["Data Engineering","Python","ML Engineering"]},{title:"Mypy",competency:3,category:["Python"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((function(e){return D(D({},e),{},{category:e.category.sort()})})),L=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],P=(0,O.Z)(new Set(E.flatMap((function(e){return e.category})))).sort().map((function(e,t){return{name:e,color:L[t]}})),N={Education:function(){return(0,s.jsx)(u,{data:x})},Experience:function(){return(0,s.jsx)(f,{data:k})},Skills:function(){return(0,s.jsx)(w,{skills:E,categories:P})}},W=function(){return(0,s.jsx)(o.Z,{title:"Resume",description:"Ersel Erbay's Resume.",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h2",{children:(0,s.jsx)(r.rU,{to:"resume",children:"Resume"})}),(0,s.jsx)("div",{className:"link-container",children:Object.keys(N).map((function(e){return(0,s.jsx)("h4",{children:(0,s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object.entries(N).map((function(e){var t=(0,i.Z)(e,2),n=t[0],a=t[1];return(0,s.jsx)(a,{},n)}))]})})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",a="second",r="minute",o="hour",s="day",c="week",l="month",u="quarter",d="year",h="date",g="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+y(i,2,"0")+":"+y(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(i,l),r=n-a<0,o=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-a)/(r?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:h,h:o,m:r,s:a,ms:i,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",D={};D[b]=f;var M=function(e){return e instanceof w},$=function e(t,n,i){var a;if(!t)return b;if("string"==typeof t){var r=t.toLowerCase();D[r]&&(a=r),n&&(D[r]=n,a=r);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;D[s]=t,a=s}return!i&&a&&(b=a),a||!i&&b},S=function(e,t){if(M(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},j=v;j.l=$,j.i=M,j.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e)}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var a=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return j},y.isValid=function(){return!(this.$d.toString()===g)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return j.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,i=!!j.u(t)||t,u=j.p(e),g=function(e,t){var a=j.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?a:a.endOf(s)},p=function(e,t){return j.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,f=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return i?g(1,0):g(31,11);case l:return i?g(1,f):g(0,f+1);case c:var b=this.$locale().weekStart||0,D=(m<b?m+7:m)-b;return g(i?y-D:y+(6-D),f);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case r:return p(v+"Seconds",2);case a:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,c=j.p(e),u="set"+(this.$u?"UTC":""),g=(n={},n[s]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[r]=u+"Minutes",n[a]=u+"Seconds",n[i]=u+"Milliseconds",n)[c],p=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var m=this.clone().set(h,1);m.$d[g](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else g&&this.$d[g](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[j.p(e)]()},y.add=function(i,u){var h,g=this;i=Number(i);var p=j.p(u),m=function(e){var t=S(g);return j.w(t.date(t.date()+Math.round(e*i)),g)};if(p===l)return this.set(l,this.$M+i);if(p===d)return this.set(d,this.$y+i);if(p===s)return m(1);if(p===c)return m(7);var f=(h={},h[r]=t,h[o]=n,h[a]=e,h)[p]||1,y=this.$d.getTime()+i*f;return j.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||g;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=j.z(this),r=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=function(e,n,a,r){return e&&(e[n]||e(t,i))||a[n].slice(0,r)},d=function(e){return j.s(r%12||12,e,"0")},h=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:j.s(this.$y,4,"0"),M:s+1,MM:j.s(s+1,2,"0"),MMM:u(n.monthsShort,s,l,3),MMMM:u(l,s),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:j.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:j.s(o,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:a};return i.replace(m,(function(e,t){return t||p[e]||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(i,h,g){var p,m=j.p(h),f=S(i),y=(f.utcOffset()-this.utcOffset())*t,v=this-f,b=j.m(this,f);return b=(p={},p[d]=b/12,p[l]=b,p[u]=b/3,p[c]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[o]=v/n,p[r]=v/t,p[a]=v/e,p)[m]||v,g?b:j.a(b)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return D[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},y.clone=function(){return j.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),x=w.prototype;return S.prototype=x,[["$ms",i],["$s",a],["$m",r],["$H",o],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,w,S),e.$i=!0),S},S.locale=$,S.isDayjs=M,S.unix=function(e){return S(1e3*e)},S.en=D[b],S.Ls=D,S.p={},S}()}}]);
//# sourceMappingURL=902.b2b8d767.chunk.js.map