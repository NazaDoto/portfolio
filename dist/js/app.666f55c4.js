(function(){"use strict";var a={501:function(a,t,e){var n=e(4373),s=e(5130),o=e(6768);const i={class:"full-page"};function r(a,t,e,n,s,r){const c=(0,o.g2)("NavbarComponent"),d=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(c),(0,o.Lk)("div",i,[(0,o.bF)(d)])],64)}var c=e(4232);const d={class:"nav-left"};function l(a,t,e,n,s,i){const r=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",{class:(0,c.C4)(["nav-dota",{active:"/"===a.$route.path}])},[(0,o.Lk)("div",d,[(0,o.bF)(r,{to:"/",class:(0,c.C4)(["container-logo",{active:"/"===a.$route.path}])},{default:(0,o.k6)((()=>[(0,o.Lk)("div",{class:(0,c.C4)(["container-logo-outer",{active:"/"===a.$route.path}])},null,2),(0,o.Lk)("div",{class:(0,c.C4)(["container-logo-inner",{active:"/"===a.$route.path}])},t[0]||(t[0]=[(0,o.Lk)("img",{src:"/resources/logo.png",alt:"",class:"nav-logo"},null,-1)]),2)])),_:1},8,["class"]),(0,o.bF)(r,{id:"about-content",class:(0,c.C4)(["nav-left-item nav-item",{active:"/about"===a.$route.path}]),to:"/about"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.Lk)("span",{class:"mauto"},"ABOUT",-1)]))),_:1},8,["class"]),(0,o.bF)(r,{id:"exp-content",class:(0,c.C4)(["nav-left-item nav-item push-left",{active:"/experience"===a.$route.path}]),to:"/experience"},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.Lk)("span",{class:"mauto"},"EXPERIENCE",-1)]))),_:1},8,["class"]),(0,o.bF)(r,{id:"projects-content",class:(0,c.C4)(["nav-left-item nav-item push-left-",{active:"/projects"===a.$route.path}]),to:"/projects"},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.Lk)("span",{class:"mauto"},"PROJECTS",-1)]))),_:1},8,["class"])]),t[4]||(t[4]=(0,o.Fv)('<div class="nav-right" data-v-9d9c3b92><a href="https://wa.me/5493855223287" target="_blank" class="nav-opt-item nav-item" data-v-9d9c3b92><img class="nav-opt-img" src="/resources/whatsapp.png" alt="" data-v-9d9c3b92></a><a href="https://linkedin.com/in/nazadoto" target="_blank" class="nav-opt-item nav-item" data-v-9d9c3b92><img class="nav-opt-img" src="/resources/linkedin.png" alt="" data-v-9d9c3b92></a><a href="https://github.com/nazadoto" target="_blank" class="nav-opt-item nav-item" data-v-9d9c3b92><img class="nav-opt-img" src="/resources/github.png" alt="" data-v-9d9c3b92></a></div>',1))],2)}var v={},p=e(1241);const u=(0,p.A)(v,[["render",l],["__scopeId","data-v-9d9c3b92"]]);var m=u,h={name:"App",components:{NavbarComponent:m}};const f=(0,p.A)(h,[["render",r]]);var g=f,k=(e(8992),e(7550),e(1387));const b={class:"left"},y={key:0,class:"sidebar"},C={class:"sidebar-profile"},L={class:"profile-header"},S=["src"],E={class:"profile-name"},_=["href"],A={class:"sidebar-matches"},x={class:"match-row"},w={class:"match-row-hero"},I=["src","alt"],D={class:"flex-column"},M={class:"hero-name"},O={class:"match-time-ago"},N={class:"header-kda"},P={class:"match-duration"},T={key:1,class:"loading-container"};function F(a,t,e,n,s,i){return(0,o.uX)(),(0,o.CE)("div",b,[s.loadingData?((0,o.uX)(),(0,o.CE)("div",T,t[3]||(t[3]=[(0,o.Lk)("h2",null,"Loading...",-1),(0,o.Lk)("div",{class:"spinner"},null,-1)]))):((0,o.uX)(),(0,o.CE)("div",y,[(0,o.Lk)("div",C,[(0,o.Lk)("div",L,[(0,o.Lk)("img",{src:s.profile.avatarfull,height:"100",width:"100",alt:""},null,8,S),(0,o.Lk)("div",E,[(0,o.eW)((0,c.v_)(s.profile.personaname)+" ",1),(0,o.Lk)("a",{class:"profile-url",href:s.profile.profileurl},t[0]||(t[0]=[(0,o.Lk)("svg",{class:"sc-fjdhpX kwMXpV icon",viewBox:"0 0 110 110"},[(0,o.Lk)("path",{d:"M55,0C25.881,0,2.062,22.634,0.14,51.267l28.525,11.507C31.172,61.029,34.214,60,37.5,60\r\n                  c0.706,0,1.396,0.063,2.076,0.155l13.426-19.691C53.021,29.159,62.19,20,73.5,20C84.822,20,94,29.178,94,40.5S84.822,61,73.5,61\r\n                  c-0.01,0-0.021-0.001-0.031-0.001L52.944,74.385C52.97,74.754,53,75.124,53,75.5C53,84.061,46.061,91,37.5,91\r\n                  c-7.565,0-13.855-5.422-15.218-12.591L2.118,70.107C8.685,93.134,29.866,110,55,110c30.376,0,55-24.624,55-55\r\n                  C110,24.625,85.376,0,55,0z M37.5,84c-0.915,0-1.795-0.148-2.621-0.416l-0.004,0.01l-0.252-0.104\r\n      c-0.243-0.087-0.48-0.185-0.712-0.293l-6.805-2.801C28.945,84.295,32.902,87,37.5,87C43.851,87,49,81.852,49,75.5\r\n      S43.851,64,37.5,64c-1.406,0-2.747,0.265-3.993,0.727l7.2,2.904c0.05,0.021,0.1,0.039,0.149,0.061l0.56,0.226l-0.015,0.037\r\n      C44.131,69.368,46,72.213,46,75.5C46,80.194,42.194,84,37.5,84z M88,40.5C88,32.492,81.508,26,73.5,26S59,32.492,59,40.5\r\n      S65.492,55,73.5,55S88,48.508,88,40.5z M63,40.5C63,34.701,67.701,30,73.5,30S84,34.701,84,40.5S79.299,51,73.5,51\r\n      S63,46.299,63,40.5z"})],-1)]),8,_)])]),t[1]||(t[1]=(0,o.Lk)("div",{class:"dota-rank"},[(0,o.Lk)("img",{src:"/resources/immortal.png",height:"100",width:"100",alt:""})],-1))]),t[2]||(t[2]=(0,o.Fv)('<div class="matches-header" data-v-2a16ace2><span class="header-hero" data-v-2a16ace2>HERO</span><span class="header-result" data-v-2a16ace2>RESULT</span><div class="header-kda" data-v-2a16ace2><span data-v-2a16ace2>K</span><span data-v-2a16ace2>D</span><span data-v-2a16ace2>A</span></div><span class="header-duration" data-v-2a16ace2>DURATION</span></div>',1)),(0,o.Lk)("div",A,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.matchesWithHeroIcons,((a,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:"match"},[(0,o.Lk)("div",x,[(0,o.Lk)("div",w,[(0,o.Lk)("span",null,[(0,o.Lk)("img",{src:a.heroIcon,alt:a.hero_id},null,8,I)]),(0,o.Lk)("div",D,[(0,o.Lk)("span",M,(0,c.v_)(a.heroName),1),(0,o.Lk)("small",O,(0,c.v_)(i.formatTimeAgo(a.start_time)),1)])]),(0,o.Lk)("span",{class:(0,c.C4)(["header-result",i.checkWin(a)?"match-won":"match-lost"])},(0,c.v_)(i.checkWin(a)?"Victory":"Defeat"),3),(0,o.Lk)("div",N,[(0,o.Lk)("span",null,(0,c.v_)(a.kills),1),(0,o.Lk)("span",null,(0,c.v_)(a.deaths),1),(0,o.Lk)("span",null,(0,c.v_)(a.assists),1)]),(0,o.Lk)("span",P,(0,c.v_)(i.formatDuration(a.duration)),1)])])))),128))])]))])}e(2577),e(1454);var $={name:"HomeComponent",data(){return{loadingData:!0,matches:[],profile:"",heroeIcons:[]}},methods:{checkWin(a){const t=a.player_slot<128;return t&&a.radiant_win||!t&&!a.radiant_win},formatDuration(a){const t=Math.floor(a/3600),e=Math.floor(a%3600/60),n=a%60,s=t>0?String(t).padStart(2,"0")+":":"",o=String(e).padStart(2,"0"),i=String(n).padStart(2,"0");return`${s}${o}:${i}`},formatTimeAgo(a){const t=Math.floor(Date.now()/1e3),e=t-a,n=Math.floor(e/60),s=Math.floor(n/60),o=Math.floor(s/24);return o>0?`${o} day${o>1?"s":""} ago`:s>0?`${s} hour${s>1?"s":""} ago`:n>0?`${n} minute${n>1?"s":""} ago`:"Just now"},async fetchDota(){try{const a=n.A.get("https://api.opendota.com/api/players/377361889/recentMatches"),t=n.A.get("https://api.opendota.com/api/players/377361889/"),e=n.A.get("https://api.opendota.com/api/heroStats"),[s,o,i]=await Promise.all([a,t,e]);this.matches=s.data,this.profile=o.data.profile,this.heroeIcons=i.data}catch(a){console.error("Error fetching data:",a)}},async getHeroIcon(a){const t=this.heroeIcons.find((t=>t.id===a));return t?t.img:(console.warn(`Hero with ID ${a} not found.`),null)}},async mounted(){try{this.loadingData=!0,await this.fetchDota()}catch(a){console.log(a)}finally{this.loadingData=!1}},computed:{matchesWithHeroIcons(){return this.matches.map((a=>{const t=this.heroeIcons.find((t=>t.id===a.hero_id));return{...a,heroName:t?t.localized_name:"NN",heroIcon:t?`https://cdn.cloudflare.steamstatic.com${t.img}`:"/resources/default.png"}}))}}};const X=(0,p.A)($,[["render",F],["__scopeId","data-v-2a16ace2"]]);var j=X,z=e.p+"img/yo.ca4fb107.png";const R={class:"container"};function H(a,t,e,n,s,i){return(0,o.uX)(),(0,o.CE)("div",R,t[0]||(t[0]=[(0,o.Fv)('<div class="container-left" data-v-2919d590><div class="img" data-v-2919d590><img class="profile-pic" src="'+z+'" alt="" data-v-2919d590><div class="info" data-v-2919d590><span class="name" data-v-2919d590>Nazareno Navarrete</span><span class="title" data-v-2919d590>DEVELOPER</span></div><div class="links" data-v-2919d590><a href="https://wa.me/5493855223287" target="_blank" class="nav-opt-item nav-item" data-v-2919d590><img class="nav-opt-img" src="/resources/whatsapp.png" alt="" data-v-2919d590></a><a href="https://linkedin.com/in/nazadoto" target="_blank" class="nav-opt-item nav-item" data-v-2919d590><img class="nav-opt-img" src="/resources/linkedin.png" alt="" data-v-2919d590></a><a href="https://github.com/nazadoto" target="_blank" class="nav-opt-item nav-item" data-v-2919d590><img class="nav-opt-img" src="/resources/github.png" alt="" data-v-2919d590></a></div></div><div class="technologies item" data-v-2919d590> TECHNOLOGIES <div class="radar-chart" data-v-2919d590><div class="radar-background" data-v-2919d590></div><svg class="radar-data" viewBox="0 0 200 200" data-v-2919d590><polygon points="100,45 150,75 130,145 65,130 60,75" data-v-2919d590></polygon><text x="100" y="25" class="radar-label" data-v-2919d590>HTML5</text><text x="175" y="75" class="radar-label" data-v-2919d590>CSS</text><text x="145" y="160" class="radar-label" data-v-2919d590>JS</text><text x="45" y="160" class="radar-label" data-v-2919d590>JAVA</text><text x="30" y="75" class="radar-label" data-v-2919d590>PY</text></svg></div></div></div><div class="container-right" data-v-2919d590><div class="cover item" data-v-2919d590> Hello, I’m from Santiago del Estero, Argentina, and I’m an Information Systems Analyst and Fullstack Developer. Building innovative and efficient web solutions is what excites me the most, and I’m always eager to explore new tools and techniques to enhance my work. </div><div class="education item" data-v-2919d590> EDUCATION <div class="education-content" data-v-2919d590><ul data-v-2919d590><li data-v-2919d590><strong data-v-2919d590>Bachelor&#39;s in Social Sciences and Humanities:</strong> Colegio San José (2012–2016) </li><li data-v-2919d590><strong data-v-2919d590>Cambridge English Advanced:</strong> CEFR: C1 Advanced (2019)</li><li data-v-2919d590><strong data-v-2919d590>Information Systems Analyst Degree:</strong> Universidad Nacional de Santiago del Estero (2017–2024)</li><li data-v-2919d590><strong data-v-2919d590>Bachelor&#39;s in Information Systems:</strong> Universidad Nacional de Santiago del Estero (2025)</li></ul></div></div><div class="languages item" data-v-2919d590> LANGUAGES <ul data-v-2919d590><li data-v-2919d590><strong data-v-2919d590>Spanish:</strong> Native</li><li data-v-2919d590><strong data-v-2919d590>English:</strong> Professional (CEFR: C1 Advanced)</li></ul></div></div>',2)]))}var U={};const J=(0,p.A)(U,[["render",H],["__scopeId","data-v-2919d590"]]);var W=J;const B={class:"container"},V={class:"experience-year"},G={class:"experience-details"},K={class:"experience-position"},Q={class:"experience-description"};function q(a,t,e,n,s,i){return(0,o.uX)(),(0,o.CE)("div",B,[t[0]||(t[0]=(0,o.Lk)("h2",{class:"title"},"Work Experience",-1)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.experience,((a,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"experience-item",key:t},[(0,o.Lk)("div",V,(0,c.v_)(a.year),1),(0,o.Lk)("div",G,[(0,o.Lk)("div",K,(0,c.v_)(a.company),1),(0,o.Lk)("div",Q,(0,c.v_)(a.position),1)])])))),128))])}var Y={data(){return{experience:[{year:"2017 – 2021",company:"Freelance Graphic Designer",position:"Design of banners, covers, and audiovisual material for various institutions and ventures using Adobe Photoshop, Adobe Premiere Pro, and Adobe After Effects."},{year:"2019 – 2020",company:"Database Administrator at Editorial AMERICANIA",position:"Management of books and magazines database for AMERICANIA publishing house using Excel."},{year:"2022 – Present",company:"IT Technician at Ministerio de Desarrollo Social de Santiago del Estero",position:"IT service (hardware and software maintenance for the employees), structured cabling (cat 6 UTP cable assembly, IP configuration), web application development (control and monitoring of IT supplies using VueJS, ExpressJS, MySQL), database administration (SQL Server)."}]}}};const Z=(0,p.A)(Y,[["render",q],["__scopeId","data-v-0e231859"]]);var aa=Z;const ta={class:"container"},ea=["href"];function na(a,t,e,n,s,i){return(0,o.uX)(),(0,o.CE)("div",ta,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.projects,(a=>((0,o.uX)(),(0,o.CE)("div",{key:a.name},[(0,o.Lk)("h3",null,(0,c.v_)(a.name),1),(0,o.Lk)("p",null,(0,c.v_)(a.description),1),(0,o.Lk)("a",{href:a.link},"Ver Proyecto",8,ea)])))),128))])}var sa={data(){return{projects:[{name:"Puestito Online",description:"Plataforma de pedidos mediante QR.",link:"puestito-online.nazadoto.com"},{name:"SNMDS",description:"Sistema de Notificaciones.",link:"sn-mds.nazadoto.com"},{name:"SGTS",description:"Sistema de gestión de tarjetas sociales.",link:"sgts.nazadoto.com"}]}}};const oa=(0,p.A)(sa,[["render",na],["__scopeId","data-v-ff98f0ea"]]);var ia=oa;const ra=[{path:"/",component:j},{path:"/about",component:W},{path:"/experience",component:aa},{path:"/projects",component:ia}],ca=(0,k.aE)({history:(0,k.LA)("/"),routes:ra,linkActiveClass:"active",linkExactActiveClass:"active"});ca.beforeEach(((a,t,e)=>{const n=localStorage.getItem("token");a.matched.some((a=>a.meta.requiresAuth))?n?e():e("/"):e()}));var da=ca;const la="http://192.168.1.235:3000",va="dev";n.A.defaults.baseURL="dev"==va?la:"https://puestito.online:3600";const pa=(0,s.Ef)(g);pa.use(da),pa.mount("#app")}},t={};function e(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return a[n].call(o.exports,o,o.exports,e),o.exports}e.m=a,function(){var a=[];e.O=function(t,n,s,o){if(!n){var i=1/0;for(l=0;l<a.length;l++){n=a[l][0],s=a[l][1],o=a[l][2];for(var r=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(e.O).every((function(a){return e.O[a](n[c])}))?n.splice(c--,1):(r=!1,o<i&&(i=o));if(r){a.splice(l--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=a.length;l>0&&a[l-1][2]>o;l--)a[l]=a[l-1];a[l]=[n,s,o]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var a={524:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var s,o,i=n[0],r=n[1],c=n[2],d=0;if(i.some((function(t){return 0!==a[t]}))){for(s in r)e.o(r,s)&&(e.m[s]=r[s]);if(c)var l=c(e)}for(t&&t(n);d<i.length;d++)o=i[d],e.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return e.O(l)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(501)}));n=e.O(n)})();
//# sourceMappingURL=app.666f55c4.js.map