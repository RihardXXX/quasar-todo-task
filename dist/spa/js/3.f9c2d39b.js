(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"2fc8":function(t,e,a){"use strict";a("f6ba")},a9c3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hhh lpR fFf"}},[a("q-header",{attrs:{elevated:"",bordered:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),t.$q.platform.is.desktop||t.$q.platform.is.mobile&&!t.isLoggedIn?a("q-toolbar-title",{class:{"absolute-center":!t.isLoggedIn}},[t._v("\n         05 Мастер\n      ")]):t._e(),t.isLoggedIn?a("q-item",{staticClass:"absolute-right"},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})])],1),a("q-item-section",[a("q-item-label",[t._v("\n            "+t._s(t.username)+"\n          ")])],1),t._v("\n         \n        "),a("q-item-section",[a("q-item-label",[t._v("\n            "+t._s(t.role)+"\n          ")])],1),a("q-item-section",[a("q-btn",{attrs:{color:"deep-orange",glossy:"",label:"выйти"},on:{click:t.exit}})],1)],1):t._e()],1)],1),a("q-drawer",{attrs:{breakpoint:767,width:220,"show-if-above":"",bordered:"","content-class":"bg-grey-3"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Меню\n      ")]),t.isLoggedIn?t._l(t.menuBar,(function(e){return a("q-item",{key:e.id,attrs:{exact:"",clickable:"",to:e.path}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v("\n                "+t._s(e.title)+"\n              ")])],1)],1)})):t._l(t.menuNotAuthorization,(function(e){return a("q-item",{key:e.id,attrs:{exact:"",clickable:"",to:e.path}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v("\n                "+t._s(e.title)+"\n              ")])],1)],1)}))],2)],1),a("q-page-container",[a("router-view")],1),a("q-footer",{attrs:{elevated:"",bordered:""}},[t.isLoggedIn?[a("q-tabs",t._l(t.menuBar,(function(t){return a("q-route-tab",{key:t.id,attrs:{exact:"",to:t.path,icon:t.icon,label:t.title}})})),1)]:[a("q-tabs",t._l(t.menuNotAuthorization,(function(t){return a("q-route-tab",{key:t.id,attrs:{exact:"",to:t.path,icon:t.icon,label:t.title}})})),1)]],2)],1)},n=[],o=(a("ddb0"),a("2f62")),r=a("cf57");a("4bd2");const s=[{id:0,title:"Главная страница",icon:"home",path:"/"},{id:1,title:"Все заказы",icon:"work",path:"/orders"},{id:2,title:"Клиенты",icon:"people",path:"/customers"},{id:3,title:"Мастера",icon:"engineering",path:"/performers"},{id:4,title:"Чат",icon:"chat",path:"/chats"}];var c={name:"MainLayout",data(){return{leftDrawerOpen:!1}},computed:{...Object(o["d"])("authorization",["isLoggedIn","isLoading"]),...Object(o["c"])("authorization",["username","customer","performer","role"]),menuBar(){return this.customer?[...s,{id:Math.random(),title:"Мои заказы",icon:"work",path:"/my-orders"},{id:Math.random(),title:"Создать заказ",icon:"add",path:"/order"}]:[...s,{id:Math.random(),title:"Заказы на которые подал заявки",icon:"work",path:"/my-orders"}]},menuNotAuthorization(){return[{id:0,title:"Главная страница",icon:"home",path:"/"},{id:1,title:"Регистрация",icon:"app_registration",path:"/signUp"},{id:2,title:"Войти",icon:"login",path:"/signIn"}]}},methods:{...Object(o["b"])("authorization",["logoutUser"]),exit(){this.$q.loading.show({spinner:r["a"],spinnerColor:"red",message:"Идёт загрузка"}),this.logoutUser().then((t=>{"exit"===t&&(this.$router.push("/signIn").catch((()=>{})),this.$q.loading.hide())}))}}},l=c,d=(a("2fc8"),a("2877")),u=a("4d5a"),m=a("e359"),h=a("65c6"),b=a("9c40"),p=a("6ac5"),q=a("66e5"),g=a("4074"),f=a("cb32"),v=a("0170"),w=a("9404"),_=a("1c1c"),k=a("0016"),Q=a("09e3"),y=a("7ff0"),I=a("429b"),L=a("7867"),x=a("eebe"),O=a.n(x),D=Object(d["a"])(l,i,n,!1,null,"4aa4aa7a",null);e["default"]=D.exports;O()(D,"components",{QLayout:u["a"],QHeader:m["a"],QToolbar:h["a"],QBtn:b["a"],QToolbarTitle:p["a"],QItem:q["a"],QItemSection:g["a"],QAvatar:f["a"],QItemLabel:v["a"],QDrawer:w["a"],QList:_["a"],QIcon:k["a"],QPageContainer:Q["a"],QFooter:y["a"],QTabs:I["a"],QRouteTab:L["a"]})},f6ba:function(t,e,a){}}]);