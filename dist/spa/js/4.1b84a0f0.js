(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{7972:function(t,e,a){},a9c3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hhh lpR fFf"}},[a("q-header",{attrs:{elevated:"",bordered:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",{staticClass:"absolute-center"},[t._v("\n         05 Мастер\n      ")]),t.isLoggedIn?a("q-item",{staticClass:"absolute-right"},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})])],1),a("q-item-section",[a("q-item-label",[t._v("\n            "+t._s(t.emailUser)+"\n          ")])],1),a("q-item-section",[a("q-btn",{attrs:{color:"deep-orange",glossy:"",label:"выйти"},on:{click:t.exit}})],1)],1):t._e()],1)],1),a("q-drawer",{attrs:{breakpoint:767,width:220,"show-if-above":"",bordered:"","content-class":"bg-grey-3"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Меню\n      ")]),t.isLoggedIn?t._l(t.menuBar,(function(e){return a("q-item",{key:e.id,attrs:{exact:"",clickable:"",to:e.path}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v("\n                "+t._s(e.title)+"\n              ")])],1)],1)})):t._l(t.menuNotAuthorization,(function(e){return a("q-item",{key:e.id,attrs:{exact:"",clickable:"",to:e.path}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v("\n                "+t._s(e.title)+"\n              ")])],1)],1)}))],2)],1),a("q-page-container",[a("router-view")],1),a("q-footer",{attrs:{elevated:"",bordered:""}},[t.isLoggedIn?[a("q-tabs",t._l(t.menuBar,(function(t){return a("q-route-tab",{key:t.id,attrs:{exact:"",to:t.path,icon:t.icon,label:t.title}})})),1)]:[a("q-tabs",t._l(t.menuNotAuthorization,(function(t){return a("q-route-tab",{key:t.id,attrs:{exact:"",to:t.path,icon:t.icon,label:t.title}})})),1)]],2)],1)},n=[],o=(a("ddb0"),a("2f62")),r=a("cf57");const s=[{id:0,title:"Главная страница",icon:"home",path:"/"},{id:1,title:"Заказы на работу",icon:"work",path:"/orders"},{id:2,title:"Клиенты",icon:"people",path:"/customers"},{id:3,title:"Мастера",icon:"engineering",path:"/performers"},{id:4,title:"Чат",icon:"chat",path:"/chats"}];var l={name:"MainLayout",data(){return{leftDrawerOpen:!1}},computed:{...Object(o["d"])("authorization",["isLoggedIn","isLoading","emailUser"]),isCustomer(){return!0},isPerformer(){return 0},menuBar(){return this.isCustomer?[...s,{id:Math.random(),title:"Мои заказы",icon:"work",path:"/my-orders"},{id:Math.random(),title:"Создать заказ",icon:"add",path:"/order"}]:s},menuNotAuthorization(){return[{id:0,title:"Главная страница",icon:"home",path:"/"},{id:1,title:"Регистрация",icon:"app_registration",path:"/signUp"},{id:2,title:"Войти",icon:"login",path:"/signIn"}]}},methods:{...Object(o["b"])("authorization",["logoutUser"]),exit(){console.log("exit"),this.$q.loading.show({spinner:r["a"],spinnerColor:"red",message:"Идёт загрузка"}),this.logoutUser().then((t=>{"ok"===t&&(this.$router.push("/signIn").catch((t=>{})),this.$q.loading.hide())}))}}},c=l,d=(a("aa62"),a("2877")),u=a("4d5a"),h=a("e359"),m=a("65c6"),p=a("9c40"),b=a("6ac5"),q=a("66e5"),g=a("4074"),f=a("cb32"),v=a("0170"),w=a("9404"),Q=a("1c1c"),_=a("0016"),k=a("09e3"),y=a("7ff0"),x=a("429b"),I=a("7867"),L=a("eebe"),O=a.n(L),C=Object(d["a"])(c,i,n,!1,null,"392ee354",null);e["default"]=C.exports;O()(C,"components",{QLayout:u["a"],QHeader:h["a"],QToolbar:m["a"],QBtn:p["a"],QToolbarTitle:b["a"],QItem:q["a"],QItemSection:g["a"],QAvatar:f["a"],QItemLabel:v["a"],QDrawer:w["a"],QList:Q["a"],QIcon:_["a"],QPageContainer:k["a"],QFooter:y["a"],QTabs:x["a"],QRouteTab:I["a"]})},aa62:function(t,e,a){"use strict";a("7972")}}]);