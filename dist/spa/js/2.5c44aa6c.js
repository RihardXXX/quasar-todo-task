(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{3794:function(t,e,a){"use strict";a("f126")},a9c3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hhh lpR fFf"}},[a("q-header",{attrs:{elevated:"",bordered:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",{staticClass:"absolute-center"},[t._v("\n         05 Мастер\n      ")]),t.isLoggedIn?a("q-item",{staticClass:"absolute-right"},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})])],1),a("q-item-section",[a("q-item-label",[t._v("\n            "+t._s(t.emailUser)+"\n          ")])],1),a("q-item-section",[a("q-btn",{attrs:{color:"deep-orange",glossy:"",label:"выйти"},on:{click:t.exit}})],1)],1):t._e()],1)],1),a("q-drawer",{attrs:{breakpoint:767,width:220,"show-if-above":"",bordered:"","content-class":"bg-grey-3"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Меню\n      ")]),t.isLoggedIn?t._l(t.menuBar,(function(e){return a("q-item",{key:e.id,attrs:{exact:"",clickable:"",to:e.path}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v("\n                "+t._s(e.title)+"\n              ")])],1)],1)})):t._l(t.menuNotAuthorization,(function(e){return a("q-item",{key:e.id,attrs:{exact:"",clickable:"",to:e.path}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v("\n                "+t._s(e.title)+"\n              ")])],1)],1)}))],2)],1),a("q-page-container",[a("router-view")],1),a("q-footer",{attrs:{elevated:"",bordered:""}},[t.isLoggedIn?[a("q-tabs",t._l(t.menuBar,(function(t){return a("q-route-tab",{key:t.id,attrs:{exact:"",to:t.path,icon:t.icon,label:t.title}})})),1)]:[a("q-tabs",t._l(t.menuNotAuthorization,(function(t){return a("q-route-tab",{key:t.id,attrs:{exact:"",to:t.path,icon:t.icon,label:t.title}})})),1)]],2)],1)},n=[],o=(a("ddb0"),a("2f62"));const r=[{id:0,title:"Главная страница",icon:"home",path:"/"},{id:1,title:"Заказы на работу",icon:"work",path:"/orders"},{id:2,title:"Клиенты",icon:"people",path:"/customers"},{id:3,title:"Мастера",icon:"engineering",path:"/performers"},{id:4,title:"Чат",icon:"chat",path:"/chats"}];var s={name:"MainLayout",data(){return{leftDrawerOpen:!1}},computed:{...Object(o["d"])("authorization",["isLoggedIn","isLoading","emailUser"]),isCustomer(){return!0},isPerformer(){return 0},menuBar(){return this.isCustomer?[...r,{id:Math.random(),title:"Мои заказы",icon:"work",path:"/my-order"},{id:Math.random(),title:"Создать заказ",icon:"add",path:"/order"}]:r},menuNotAuthorization(){return[{id:0,title:"Главная страница",icon:"home",path:"/"},{id:1,title:"Регистрация",icon:"app_registration",path:"/signUp"},{id:2,title:"Войти",icon:"login",path:"/signIn"}]}},methods:{...Object(o["b"])("authorization",["logoutUser"]),exit(){console.log("exit"),this.logoutUser()}}},c=s,l=(a("3794"),a("2877")),u=a("4d5a"),d=a("e359"),m=a("65c6"),b=a("9c40"),p=a("6ac5"),h=a("66e5"),q=a("4074"),f=a("cb32"),g=a("0170"),v=a("9404"),w=a("1c1c"),Q=a("0016"),_=a("09e3"),k=a("7ff0"),y=a("429b"),x=a("7867"),I=a("eebe"),L=a.n(I),O=Object(l["a"])(c,i,n,!1,null,"3c6744ab",null);e["default"]=O.exports;L()(O,"components",{QLayout:u["a"],QHeader:d["a"],QToolbar:m["a"],QBtn:b["a"],QToolbarTitle:p["a"],QItem:h["a"],QItemSection:q["a"],QAvatar:f["a"],QItemLabel:g["a"],QDrawer:v["a"],QList:w["a"],QIcon:Q["a"],QPageContainer:_["a"],QFooter:k["a"],QTabs:y["a"],QRouteTab:x["a"]})},f126:function(t,e,a){}}]);