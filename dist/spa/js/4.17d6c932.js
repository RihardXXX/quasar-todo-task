(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"072a":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[r("div",{staticClass:"q-pa-md absolute full-width full-height"},[r("div",{staticClass:"bg-grey-2 q-pa-sm rounded-borders q-mb-md"},[r("q-toggle",{attrs:{name:"music_active",label:e.labelToggle},model:{value:e.showFilterSort,callback:function(t){e.showFilterSort=t},expression:"showFilterSort"}})],1),r("transition",{attrs:{appear:"","enter-active-class":"animated backInUp"}},[e.showFilterSortPanel?r("div",{staticClass:"menu-filter"},[r("SearchBarOrders"),r("SortByOrders",{staticClass:"q-mb-md"})],1):e._e()]),r("q-list",{style:{height:"60vh"},attrs:{bordered:"",padding:"",separator:""}},[r("q-item-label",{attrs:{header:""}},[e._v("\n        Общий список заказов\n      ")]),e.orders.length?[r("q-scroll-area",{staticClass:"q-scroll-area-orders",attrs:{visible:""}},[r("transition-group",{attrs:{appear:"","enter-active-class":"animated backInUp","leave-active-class":"animated backInUp"}},e._l(e.orders,(function(e){return r("Order",{key:e.id,staticClass:"ordersList",attrs:{slug:e.id,title:e.title,description:e.description,price:e.price,"selected-performer":e.selectedPerformer,status:e.status}})})),1)],1)]:e.orders.length||e.isLoading?e.isLoading?r("div",{staticClass:"flex justify-center"},[r("q-spinner-hourglass",{attrs:{color:"purple",size:"4em"}})],1):e._e():r("q-banner",{staticClass:"bg-primary text-white text-center"},[r("h6",{staticClass:"q-ma-none"},[e._v("\n          Заказов пока нет\n        ")])])],2)],1)])},a=[],i=r("2f62"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-item",{class:e.selectedPerformer?"bg-light-green-3":"bg-grey-1",attrs:{clickable:"",exact:"",to:{path:"order/"+e.slug}}},[r("q-item-section",{attrs:{top:"",avatar:""}},[r("q-avatar",{attrs:{color:"primary","text-color":"white",icon:"work"}})],1),r("q-item-section",[r("q-item-label",[e._v("\n      "+e._s(e.title)+"\n    ")]),r("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.description)+"\n    ")]),r("q-item-label",{attrs:{caption:""}},[e._v("\n      Подробнее ...\n    ")])],1),r("q-item-section",{attrs:{side:"",top:""}},[r("q-badge",{staticClass:"q-mb-sm",attrs:{color:e.colorBadge,label:e.status,rounded:""}}),r("q-badge",{attrs:{color:"positive",label:"цена: "+e.price}}),r("q-item-label",{staticClass:"q-mt-sm",attrs:{caption:""}},[e._v("\n      рейтинг автора\n    ")]),r("div",{staticClass:"text-orange"},[r("q-icon",{attrs:{name:"star"}}),r("q-icon",{attrs:{name:"star"}}),r("q-icon",{attrs:{name:"star"}})],1)],1)],1)},o=[],n={name:"Order",props:{slug:{type:Number,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},selectedPerformer:{type:Boolean,required:!0},price:{type:Number,required:!0},status:{type:String,required:!0}},computed:{colorBadge(){return this.selectedPerformer?"positive":"purple"}}},c=n,d=r("2877"),u=r("66e5"),p=r("4074"),m=r("cb32"),h=r("0170"),b=r("58a81"),g=r("0016"),q=r("eebe"),v=r.n(q),f=Object(d["a"])(c,l,o,!1,null,null,null),O=f.exports;v()(f,"components",{QItem:u["a"],QItemSection:p["a"],QAvatar:m["a"],QItemLabel:h["a"],QBadge:b["a"],QIcon:g["a"]});var S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-input",{attrs:{outlined:"","bottom-slots":"",label:"поиск заказов"},on:{input:e.filterOrders},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.searchText?r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:e.cleanInput}}):e._e(),r("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})},y=[],_=r("1c16"),w={name:"SearchBarOrders",computed:{...Object(i["d"])("orders",["searchOrder"]),searchText:{get(){return this.searchOrder},set(e){this.setSearchOrderString(e)}}},methods:{...Object(i["b"])("orders",["setSearchOrderString","filteredOrders"]),filterOrders(){console.log(112),this.filteredOrders()},cleanInput(){this.searchText="",this.filteredOrders()}},created(){this.filterOrders=Object(_["a"])(this.filterOrders,2e3),this.cleanInput=Object(_["a"])(this.cleanInput,1e3)}},x=w,Q=r("27f9"),B=Object(d["a"])(x,S,y,!1,null,null,null),I=B.exports;v()(B,"components",{QInput:Q["a"],QIcon:g["a"]});var j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-select",{attrs:{outlined:"",options:e.options,"emit-value":"","map-options":"",label:"сортировка заказов клиентов"},model:{value:e.sortBy,callback:function(t){e.sortBy=t},expression:"sortBy"}})},k=[],C={name:"SortByOrders",data(){return{options:[{label:"по имени",value:"title"},{label:"по цене",value:"price"},{label:"по дате",value:"date"},{label:"по статусу заказа",value:"selectedPerformer"}]}},computed:{...Object(i["d"])("orders",["sortType"]),sortBy:{get(){return this.sortType},set(e){this.setSort(e)}}},methods:{...Object(i["b"])("orders",["setSort"])}},T=C,P=r("ddd8"),F=Object(d["a"])(T,j,k,!1,null,null,null),L=F.exports;v()(F,"components",{QSelect:P["a"]});var $={name:"PageOrders",components:{Order:O,SearchBarOrders:I,SortByOrders:L},computed:{...Object(i["c"])("orders",["orders","isLoading","showFilterSortPanel"]),labelToggle(){const e=this.showFilterSort?"спрятать":"показать";return`${e} фильтр поиска и сортировки заказов`},showFilterSort:{get(){return this.showFilterSortPanel},set(e){this.setShowFilterSortPanel(e)}}},methods:{...Object(i["b"])("orders",["initialOrders","setShowFilterSortPanel","initialToggleStatus"])},mounted(){this.initialOrders(),this.initialToggleStatus()}},E=$,U=(r("8383"),r("9989")),A=r("9564"),J=r("1c1c"),N=r("4983"),z=r("54e1"),H=r("9149"),D=Object(d["a"])(E,s,a,!1,null,"6d9a599a",null);t["default"]=D.exports;v()(D,"components",{QPage:U["a"],QToggle:A["a"],QList:J["a"],QItemLabel:h["a"],QScrollArea:N["a"],QBanner:z["a"],QSpinnerHourglass:H["a"]})},"3ca3":function(e,t,r){},8383:function(e,t,r){"use strict";r("3ca3")}}]);