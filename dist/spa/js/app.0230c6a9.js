(function(e){function r(r){for(var o,n,a=r[0],d=r[1],u=r[2],c=0,l=[];c<a.length;c++)n=a[c],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&l.push(i[n][0]),i[n]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);m&&m(r);while(l.length)l.shift()();return s.push.apply(s,u||[]),t()}function t(){for(var e,r=0;r<s.length;r++){for(var t=s[r],o=!0,n=1;n<t.length;n++){var a=t[n];0!==i[a]&&(o=!1)}o&&(s.splice(r--,1),e=d(d.s=t[0]))}return e}var o={},n={1:0},i={1:0},s=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{2:"a02fb025",3:"803ed8cc",4:"17d6c932",5:"d1c5a786",6:"edaf6542",7:"0b94a9d9",8:"b79fc951",9:"4baa897d",10:"8e4ca206",11:"14e78936",12:"68ef3832",13:"458f4aff",14:"53582ee8",15:"4a0603df",16:"e0385afd"}[e]+".js"}function d(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var r=[],t={2:1,3:1,4:1};n[e]?r.push(n[e]):0!==n[e]&&t[e]&&r.push(n[e]=new Promise((function(r,t){for(var o="css/"+({}[e]||e)+"."+{2:"d5c4f96e",3:"313822bd",4:"404f26da",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0"}[e]+".css",i=d.p+o,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var u=s[a],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===o||c===i))return r()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){u=l[a],c=u.getAttribute("data-href");if(c===o||c===i)return r()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=r,m.onerror=function(r){var o=r&&r.target&&r.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete n[e],m.parentNode.removeChild(m),t(s)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){n[e]=0})));var o=i[e];if(0!==o)if(o)r.push(o[2]);else{var s=new Promise((function(r,t){o=i[e]=[r,t]}));r.push(o[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.src=a(e);var l=new Error;u=function(r){c.onerror=c.onload=null,clearTimeout(m);var t=i[e];if(0!==t){if(t){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,t[1](l)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(r)},d.m=e,d.c=o,d.d=function(e,r,t){d.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,r){if(1&r&&(e=d(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)d.d(t,o,function(r){return e[r]}.bind(null,o));return t},d.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(r,"a",r),r},d.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},d.p="",d.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=r,u=u.slice();for(var l=0;l<u.length;l++)r(u[l]);var m=c;s.push([0,0]),t()})({0:function(e,r,t){e.exports=t("2f39")},"2a8b":function(e,r,t){"use strict";t.r(r),t.d(r,"getCurrentOrderStart",(function(){return o})),t.d(r,"getCurrentOrderSuccess",(function(){return n})),t.d(r,"getCurrentOrderFailure",(function(){return i})),t.d(r,"setProposalCurrentOrderIsLoading",(function(){return s})),t.d(r,"setProposalCurrentOrder",(function(){return a})),t.d(r,"updateOrders",(function(){return d})),t.d(r,"setProposalCurrentOrderFailure",(function(){return u})),t.d(r,"rejectPerformerStart",(function(){return c})),t.d(r,"rejectPerformerSuccess",(function(){return l})),t.d(r,"rejectPerformerFailure",(function(){return m})),t.d(r,"selectPerformerStart",(function(){return f})),t.d(r,"selectPerformerSuccess",(function(){return p})),t.d(r,"selectPerformerFailure",(function(){return h})),t.d(r,"createOrderStart",(function(){return g})),t.d(r,"createOrderSuccess",(function(){return y})),t.d(r,"createOrderFailure",(function(){return P})),t.d(r,"editOrderStart",(function(){return b})),t.d(r,"editOrderSuccess",(function(){return v})),t.d(r,"editOrderFailure",(function(){return O})),t.d(r,"setSearchOrderString",(function(){return S})),t.d(r,"initialOrdersSet",(function(){return w})),t.d(r,"filteredOrdersStart",(function(){return C})),t.d(r,"filteredOrdersSuccess",(function(){return T})),t.d(r,"filteredOrdersFailure",(function(){return L})),t.d(r,"setSort",(function(){return F})),t.d(r,"setShowFilterSortPanel",(function(){return R}));t("ddb0");const o=e=>{e.isLoading=!0,e.error=null},n=(e,r)=>{e.isLoading=!1,e.error=null,e.currentOrder={...r}},i=(e,r)=>{e.isLoading=!1,e.error=r},s=e=>{e.isLoading=!0,e.error=null},a=(e,r)=>{e.isLoading=!1,e.error=null,e.currentOrder=r},d=(e,r)=>{e.orders=e.orders.map((e=>(e.id===r.id&&(e=r),e)))},u=(e,r)=>{e.isLoading=!1,e.error=r},c=e=>{e.isLoading=!0,e.error=null},l=(e,r)=>{e.isLoading=!1,e.error=null,e.currentOrder.listOfPerformers=e.currentOrder.listOfPerformers.filter((e=>e.id!==r))},m=(e,r)=>{e.isLoading=!1,e.error=r},f=e=>{e.isLoading=!0,e.error=null},p=(e,r)=>{e.isLoading=!1,e.error=null,console.log("idPerformer",r);const t=e.currentOrder.listOfPerformers.find((e=>e.id===r));e.currentOrder={...e.currentOrder,listOfPerformers:[],selectedPerformer:!0,status:"в работе",victory:[t]}},h=(e,r)=>{e.isLoading=!1,e.error=r},g=e=>{e.isLoading=!0,e.error=null},y=(e,r)=>{e.isLoading=!1,e.error=null,e.orders=[r,...e.orders]},P=(e,r)=>{e.isLoading=!1,e.error=r},b=e=>{e.isLoading=!0,e.error=null},v=(e,r)=>{e.isLoading=!1,e.error=null,e.orders=e.orders.map((e=>(e.id===r.id&&(e={...r}),e)))},O=(e,r)=>{e.isLoading=!1,e.error=r},S=(e,r)=>{e.searchOrder=r},w=e=>{e.orders=[...e.server]},C=e=>{e.isLoading=!0,e.error=null,e.orders=[]},T=(e,r)=>{e.isLoading=!1,e.error=null,e.orders=e.server.filter((e=>e.title.toLowerCase().includes(r.toLowerCase())))},L=(e,r)=>{e.isLoading=!1,e.error=r},F=(e,r)=>{console.log("sort name: ",r),e.sortType=r},R=(e,r)=>{e.showFilterSortPanel=r}},"2f39":function(e,r,t){"use strict";t.r(r);var o={};t.r(o),t.d(o,"orders",(function(){return j})),t.d(o,"isLoading",(function(){return M})),t.d(o,"showFilterSortPanel",(function(){return D}));var n={};t.r(n),t.d(n,"someGetter",(function(){return A}));var i={};t.r(i),t.d(i,"someMutation",(function(){return J}));var s={};t.r(s),t.d(s,"someAction",(function(){return N}));var a={};t.r(a),t.d(a,"customers",(function(){return B})),t.d(a,"isLoading",(function(){return V})),t.d(a,"showFilterSortPanel",(function(){return $}));var d={};t.r(d),t.d(d,"getCurrentCustomerStart",(function(){return G})),t.d(d,"getCurrentCustomerSuccess",(function(){return U})),t.d(d,"getCurrentCustomerFailure",(function(){return z})),t.d(d,"setSearchNameCustomer",(function(){return H})),t.d(d,"filteredCustomersStart",(function(){return K})),t.d(d,"filteredCustomersSuccess",(function(){return Q})),t.d(d,"filteredCustomersFailure",(function(){return W})),t.d(d,"setInitialCustomers",(function(){return X})),t.d(d,"setSortType",(function(){return Y})),t.d(d,"setShowFilterSortPanel",(function(){return Z}));var u={};t.r(u),t.d(u,"getCurrentCustomer",(function(){return ee})),t.d(u,"setSearchNameCustomer",(function(){return re})),t.d(u,"filteredCustomers",(function(){return te})),t.d(u,"initialCustomers",(function(){return oe})),t.d(u,"setSortType",(function(){return ne})),t.d(u,"setShowFilterSortPanel",(function(){return ie})),t.d(u,"initialStatusToggleCustomer",(function(){return se}));var c={};t.r(c),t.d(c,"someGetter",(function(){return ue}));var l={};t.r(l),t.d(l,"someMutation",(function(){return ce}));var m={};t.r(m),t.d(m,"someAction",(function(){return le}));t("5319"),t("7d6e"),t("e54f"),t("4439"),t("4605"),t("f580"),t("5b2b"),t("8753"),t("2967"),t("7e67"),t("d770"),t("dd82"),t("922c"),t("d7fb"),t("a533"),t("c32e"),t("a151"),t("8bc7"),t("e80f"),t("5fec"),t("e42f"),t("57fc"),t("d67f"),t("880e"),t("1c10"),t("9482"),t("e797"),t("4848"),t("53d0"),t("63b1"),t("e9fd"),t("195c"),t("64e9"),t("33c5"),t("4f62"),t("0dbc"),t("7c38"),t("0756"),t("4953"),t("81db"),t("2e52"),t("22485"),t("7797"),t("12a1"),t("ce96"),t("70ca"),t("2318"),t("24bd"),t("8f27"),t("3064"),t("c9a2"),t("8767"),t("4a8e"),t("b828"),t("3c1c"),t("21cb"),t("c00e"),t("e4a8"),t("e4d3"),t("f4d9"),t("fffd"),t("f645"),t("639e"),t("34ee"),t("b794"),t("af24"),t("7c9c"),t("7bb2"),t("64f7"),t("c382"),t("053c"),t("c48f"),t("f5d1"),t("3cec"),t("c00ee"),t("d450"),t("ca07"),t("14e3"),t("9393"),t("9227"),t("1dba"),t("674a"),t("de26"),t("6721"),t("9cb5"),t("ed9b"),t("fc83"),t("98e5"),t("605a"),t("ba60"),t("df07"),t("7903"),t("e046"),t("58af"),t("7713"),t("0571"),t("3e27"),t("6837"),t("3fc9"),t("0693"),t("bf41"),t("985d"),t("31cd");var f=t("2b0e"),p=t("14c0"),h=t("42d2"),g=t("b05d"),y=t("436b"),P=t("18d6");f["a"].use(g["a"],{config:{},lang:p["a"],iconSet:h["a"],plugins:{Dialog:y["a"],LocalStorage:P["a"]}});var b=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},v=[],O={name:"App"},S=O,w=t("2877"),C=Object(w["a"])(S,b,v,!1,null,null,null),T=C.exports,L=t("2f62"),F=function(){return{isLoading:!1,error:null,currentOrder:{},searchOrder:"",sortType:"",showFilterSortPanel:!0,orders:[{id:0,title:"Починить котёл",description:"Описание000000000 00000000000 000000000 00000000000000 0000000000000",body:"В общем котёл сам по себе выключается",price:1e3,address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]},{id:1,title:"Поклеить обои",description:"Описание",body:"Поклеить обои в одной комнате",price:1500,address:"Гагаринский дом 3",category:"общий ремонт",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!0,customer:"Rihard",status:"в работе",victory:[{id:"123",name:""}]},{id:2,title:"Установить люстру",description:"Описание",body:"В общем котёл сам по себе выключается",price:2e3,address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]}],server:[{id:0,title:"Починить котёл",description:"Описание000000000 00000000000 000000000 00000000000000 0000000000000",body:"В общем котёл сам по себе выключается",price:1300,address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]},{id:1,title:"Поклеить обои",description:"Описание",body:"Поклеить обои в одной комнате",price:1800,address:"Гагаринский дом 3",category:"общий ремонт",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!0,customer:"Rihard",status:"в работе",victory:[{id:"123",name:""}]},{id:2,title:"Установить люстру",description:"Описание",body:"В общем котёл сам по себе выключается",price:3e3,address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]},{id:3,title:"Ламинат постелить",description:"Описание",body:"В общем котёл сам по себе выключается",price:2e3,address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]},{id:4,title:"Карнизы повесить",description:"Описание",body:"В общем котёл сам по себе выключается",price:2e3,address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]},{id:5,title:"Уборка дома",description:"Описание",body:"В общем котёл сам по себе выключается",price:2e3,address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]},{id:6,title:"Уборка в офисе",description:"Описание",body:"В общем котёл сам по себе выключается",price:2e3,address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]},{id:7,title:"Постирать одежду",description:"Описание",body:"В общем котёл сам по себе выключается",price:2e3,address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]}]}};t("4e82"),t("ddb0");const R=(e,r)=>{const t=e.title.toLowerCase(),o=r.title.toLowerCase();return t<o?-1:t>o?1:0};function j(e){if(e){if(""===e.sortType)return e.orders;{const{sortType:r}=e;switch(console.log("sortType: ",r),r){case"title":return[...e.orders].sort(R);case"price":return[...e.orders].sort(((e,r)=>e.price-r.price));default:return e.orders}}}return[]}function M(e){return e?e.isLoading:null}const D=e=>e?e.showFilterSortPanel:null;var I=t("2a8b"),x=t("756f"),_={namespaced:!0,getters:o,mutations:I,actions:x,state:F},E=function(){return{isLoggedIn:!1,isLoading:!1,error:null}};function A(){}function J(){}function N(){}var k={namespaced:!0,getters:n,mutations:i,actions:s,state:E},q=function(){return{isLoading:!1,error:null,currentCustomer:{},searchCustomer:"",sortType:"",showFilterSortPanel:!0,customers:[{id:0,username:"Rihard",payment:"наличка",rating:9,reviews:[{id:Math.random(),name:"John",body:"Клиент очень хороший платит как договорились"},{id:Math.random(),name:"Irina",body:"Крутой чувак"},{id:Math.random(),name:"Robert",body:"нервный немного"}],orders:[{id:0,title:"Починить котёл",description:"Описание000000000 00000000000 000000000 00000000000000 0000000000000",body:"В общем котёл сам по себе выключается",price:"1000 рублей",address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]},{id:1,title:"Поклеить обои",description:"Описание",body:"Поклеить обои в одной комнате",price:"1500 рублей",address:"Гагаринский дом 3",category:"общий ремонт",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!0,customer:"Rihard",status:"в работе",victory:[{id:"123",name:""}]},{id:2,title:"Установить люстру",description:"Описание",body:"В общем котёл сам по себе выключается",price:"2000 рублей",address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]}]},{id:1,username:"Roman",payment:"карта",rating:8,reviews:[{id:Math.random(),name:"John",body:"Жадничает"}],orders:[]},{id:2,username:"Ivan",payment:"карта",rating:5,reviews:[{id:Math.random(),name:"John",body:"клиент крыса"},{id:Math.random(),name:"Irina",body:"Так себе"}],orders:[]}],server:[{id:0,username:"Rihard",payment:"наличка",rating:9,reviews:[{id:Math.random(),name:"John",body:"Клиент очень хороший платит как договорились"},{id:Math.random(),name:"Irina",body:"Крутой чувак"},{id:Math.random(),name:"Robert",body:"нервный немного"}],orders:[{id:0,title:"Починить котёл",description:"Описание000000000 00000000000 000000000 00000000000000 0000000000000",body:"В общем котёл сам по себе выключается",price:"1000 рублей",address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]},{id:1,title:"Поклеить обои",description:"Описание",body:"Поклеить обои в одной комнате",price:"1500 рублей",address:"Гагаринский дом 3",category:"общий ремонт",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!0,customer:"Rihard",status:"в работе",victory:[{id:"123",name:""}]},{id:2,title:"Установить люстру",description:"Описание",body:"В общем котёл сам по себе выключается",price:"2000 рублей",address:"Гагаринский дом 3",category:"сантехника",dueDate:"01.01.2021г.",dueTime:"15:44",listOfPerformers:[],selectedPerformer:!1,customer:"Rihard",status:"свободен",victory:[]}]},{id:1,username:"Roman",payment:"карта",rating:6,reviews:[{id:Math.random(),name:"John",body:"Жадничает"}],orders:[]},{id:2,username:"Ivan",payment:"карта",rating:3,reviews:[{id:Math.random(),name:"John",body:"клиент крыса"},{id:Math.random(),name:"Irina",body:"Так себе"}],orders:[]},{id:3,username:"Malcovich",payment:"карта",rating:5,reviews:[{id:Math.random(),name:"John",body:"клиент крыса"},{id:Math.random(),name:"Irina",body:"Так себе"}],orders:[]}]}};const B=e=>{if(console.log(e.sortType),!e.sortType)return e.customers.length?e.customers:[];{const r=e.sortType;switch(r){case"rating":return[...e.customers].sort(((e,r)=>r.rating-e.rating));case"reviews":return[...e.customers].sort(((e,r)=>r.reviews.length-e.reviews.length));default:return e.customers}}},V=e=>e.isLoading,$=e=>e?e.showFilterSortPanel:null,G=e=>{e.isLoading=!0,e.error=null},U=(e,r)=>{e.isLoading=!1,e.error=null,e.currentCustomer=r},z=(e,r)=>{e.isLoading=!1,e.error=r},H=(e,r)=>{e.searchCustomer=r},K=e=>{e.isLoading=!0,e.error=null,e.customers=[]},Q=(e,r)=>{e.isLoading=!1,e.error=null,console.log("search name: ",r),e.customers=e.server.filter((e=>e.username.toLowerCase().includes(r.toLowerCase())))},W=(e,r)=>{e.isLoading=!1,e.error=null},X=e=>{e.customers=[...e.server]},Y=(e,r)=>{console.log(r),e.sortType=r},Z=(e,r)=>{e.showFilterSortPanel=r},ee=({state:e,commit:r},t)=>(r("getCurrentCustomerStart"),new Promise(((r,o)=>{setTimeout((()=>{const o=e.customers.find((e=>e.id===+t));r(o)}),2e3)})).then((e=>{r("getCurrentCustomerSuccess",e)})).catch((e=>{r("getCurrentCustomerFailure",e),reject(e)}))),re=({commit:e},r)=>{e("setSearchNameCustomer",r)},te=({commit:e,state:r})=>(e("filteredCustomersStart"),new Promise((e=>{const t=r.searchCustomer;e(t)})).then((r=>{e("filteredCustomersSuccess",r)})).catch((r=>{e("filteredCustomersFailure",r)}))),oe=({commit:e})=>{e("setInitialCustomers")},ne=({commit:e},r)=>{e("setSortType",r)},ie=({commit:e},r)=>{e("setShowFilterSortPanel",r),P["a"].set("statusToggleCustomer",r)},se=({commit:e})=>{const r=P["a"].getItem("statusToggleCustomer");e("setShowFilterSortPanel",r)};var ae={namespaced:!0,getters:a,mutations:d,actions:u,state:q},de=function(){return{}};function ue(){}function ce(){}function le(){}var me={namespaced:!0,getters:c,mutations:l,actions:m,state:de};f["a"].use(L["a"]);var fe=function(){const e=new L["a"].Store({modules:{orders:_,authorization:k,customers:ae,performers:me},strict:!1});return e},pe=t("8c4f");const he=[{path:"/",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"a9c3")),children:[{path:"signUp",component:()=>Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"89a8"))},{path:"signIn",component:()=>Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"4fc8"))},{path:"",component:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"1061"))},{path:"orders",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"072a"))},{path:"order",name:"order",component:()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"f22e"))},{path:"order/:slug",component:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"37e8f"))},{path:"order/:slug/edit",component:()=>Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"a30b"))},{path:"customers",component:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"8650"))},{path:"customer/:slug",component:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"bbd0"))},{path:"performers",component:()=>Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"2bec"))},{path:"performer/:slug",component:()=>Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"2548"))},{path:"chats",component:()=>t.e(7).then(t.bind(null,"2425"))},{path:"chat/:slug",component:()=>t.e(6).then(t.bind(null,"5b17"))}]},{path:"*",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"e51e"))}];var ge=he;f["a"].use(pe["a"]);var ye=function(){const e=new pe["a"]({scrollBehavior:()=>({x:0,y:0}),routes:ge,mode:"hash",base:""});return e},Pe=async function(){const e="function"===typeof fe?await fe({Vue:f["a"]}):fe,r="function"===typeof ye?await ye({Vue:f["a"],store:e}):ye;e.$router=r;const t={router:r,store:e,render:e=>e(T),el:"#q-app"};return{app:t,store:e,router:r}},be=t("bc3a"),ve=t.n(be);f["a"].prototype.$axios=ve.a;const Oe="";async function Se(){const{app:e,store:r,router:t}=await Pe();let o=!1;const n=e=>{o=!0;const r=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=r},i=window.location.href.replace(window.location.origin,""),s=[void 0];for(let d=0;!1===o&&d<s.length;d++)if("function"===typeof s[d])try{await s[d]({app:e,router:t,store:r,Vue:f["a"],ssrContext:null,redirect:n,urlPath:i,publicPath:Oe})}catch(a){return a&&a.url?void(window.location.href=a.url):void console.error("[Quasar] boot error:",a)}!0!==o&&new f["a"](e)}Se()},"31cd":function(e,r,t){},"756f":function(e,r,t){"use strict";t.r(r),t.d(r,"getCurrentOrder",(function(){return n})),t.d(r,"addProposal",(function(){return i})),t.d(r,"rejectPerformer",(function(){return s})),t.d(r,"selectPerformer",(function(){return a})),t.d(r,"createOrder",(function(){return d})),t.d(r,"editOrder",(function(){return u})),t.d(r,"setSearchOrderString",(function(){return c})),t.d(r,"initialOrders",(function(){return l})),t.d(r,"filteredOrders",(function(){return m})),t.d(r,"setSort",(function(){return f})),t.d(r,"setShowFilterSortPanel",(function(){return p})),t.d(r,"initialToggleStatus",(function(){return h}));t("ddb0");var o=t("18d6");t("2a8b");const n=({state:e,commit:r},t)=>(r("getCurrentOrderStart"),new Promise(((r,o)=>{setTimeout((()=>{const o=e.orders.find((e=>e.id===+t));r(o)}),2e3)})).then((e=>{r("getCurrentOrderSuccess",e)})).catch((e=>{r("getCurrentOrderFailure",e)}))),i=({state:e,commit:r},{performer:t,currentOrder:o})=>(r("setProposalCurrentOrderIsLoading"),new Promise(((e,r)=>{setTimeout((()=>{const r=[...o.listOfPerformers,t],n={...o,listOfPerformers:r};e(n)}),2e3)})).then((e=>{r("setProposalCurrentOrder",e),r("updateOrders",e)})).catch((e=>{r("setProposalCurrentOrderFailure",e)}))),s=({commit:e},r)=>(e("rejectPerformerStart"),new Promise((e=>{setTimeout((()=>{e(r)}),2e3)})).then((r=>{e("rejectPerformerSuccess",r)})).catch((r=>{e("rejectPerformerFailure",r)}))),a=({commit:e},r)=>(e("selectPerformerStart"),new Promise((e=>{setTimeout((()=>{e(r)}),2e3)})).then((r=>{e("selectPerformerSuccess",r)})).catch((r=>{e("selectPerformerFailure",r)}))),d=({commit:e},r)=>(e("createOrderStart"),new Promise((e=>{setTimeout((()=>{e(r)}),2e3)})).then((r=>{e("createOrderSuccess",r)})).catch((r=>{e("createOrderFailure",r)}))),u=({commit:e},r)=>(e("editOrderStart"),new Promise((e=>{setTimeout((()=>{e(r)}),2e3)})).then((r=>{e("editOrderSuccess",r)})).catch((r=>{e("editOrderFailure",r)}))),c=({commit:e},r)=>{e("setSearchOrderString",r)},l=({commit:e})=>{e("initialOrdersSet")},m=({commit:e,state:r})=>(e("filteredOrdersStart"),new Promise((e=>{const t=r.searchOrder;e(t)})).then((r=>{e("filteredOrdersSuccess",r)})).catch((r=>{e("filteredOrdersFailure",r)}))),f=({commit:e},r)=>{e("setSort",r)},p=({commit:e},r)=>{e("setShowFilterSortPanel",r),o["a"].set("statusToggleOrder",r)},h=({commit:e})=>{const r=o["a"].getItem("statusToggleOrder");e("setShowFilterSortPanel",r)}}});