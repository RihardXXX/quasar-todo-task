(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{8650:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"q-pa-md"},[s("SearchBarCustomers"),s("SortByCustomers",{staticClass:"q-mb-md"}),s("q-list",{attrs:{bordered:"",padding:"",separator:""}},[s("q-item-label",{attrs:{header:""}},[e._v("\n      Общий список клиентов\n    ")]),e.customers.length?e._l(e.customers,(function(e){return s("CustomerItem",{key:e.id,attrs:{slug:e.id,rating:e.rating,username:e.username,reviews:e.reviews}})})):e.customers.length||e.isLoading?e.isLoading?s("div",{staticClass:"flex justify-center"},[s("q-spinner-hourglass",{attrs:{color:"purple",size:"4em"}})],1):e._e():s("q-banner",{staticClass:"bg-primary text-white text-center"},[s("h6",{staticClass:"q-ma-none"},[e._v("\n        Клиентов пока нет\n      ")])])],2)],1)},a=[],n=s("2f62"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",{staticClass:"my-card q-mt-md"},[s("q-card-section",[s("div",{staticClass:"text-h6"},[s("q-icon",{attrs:{name:"people"}}),e._v("\n      "+e._s(e.username)+"\n    ")],1)]),s("q-separator"),s("q-card-actions",{attrs:{vertical:""}},[s("div",{staticClass:"flex justify-start"},[s("span",[e._v("рейтинг")]),s("div",{staticClass:"q-ml-md",class:e.colorStar},e._l(e.rating,(function(e){return s("q-icon",{key:e,attrs:{name:"star"}})})),1)]),s("div",{staticClass:"flex justify-start"},[s("span",[e._v("отзывы")]),s("div",{staticClass:"q-ml-md"},[s("q-icon",{attrs:{name:"reviews"}})],1),e.reviews.length?s("q-badge",{staticClass:"q-ml-md",attrs:{rounded:"",color:"primary",label:e.reviews.length}}):e._e()],1),s("q-btn",{staticClass:"q-mt-md",attrs:{color:"primary",label:"Подробнее о клиенте",to:{path:"customer/"+e.slug},exact:""}})],1)],1)},i=[],c={name:"CustomerItem",props:{slug:{type:Number,required:!0},username:{type:String,required:!0},rating:{type:Number,required:!0},reviews:{type:Array,required:!0}},computed:{colorStar(){return this.rating>7?"text-positive":this.rating<7&&this.rating>4?"text-warning":"text-red"}}},l=c,u=s("2877"),m=s("f09f"),d=s("a370"),p=s("0016"),h=s("eb85"),C=s("4b7e"),b=s("58a81"),f=s("9c40"),v=s("eebe"),g=s.n(v),q=Object(u["a"])(l,o,i,!1,null,null,null),y=q.exports;g()(q,"components",{QCard:m["a"],QCardSection:d["a"],QIcon:p["a"],QSeparator:h["a"],QCardActions:C["a"],QBadge:b["a"],QBtn:f["a"]});var _=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-input",{attrs:{outlined:"","bottom-slots":"",label:"поиск клиентов"},on:{input:e.filterCustomers},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.searchNameCustomer?s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:e.cleanInput}}):e._e(),s("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.searchNameCustomer,callback:function(t){e.searchNameCustomer=t},expression:"searchNameCustomer"}})},S=[],x=s("1c16"),j={name:"SearchBarCustomers",computed:{...Object(n["d"])("customers",["searchCustomer"]),searchNameCustomer:{get(){return this.searchCustomer},set(e){this.setSearchNameCustomer(e)}}},methods:{...Object(n["b"])("customers",["setSearchNameCustomer","filteredCustomers"]),filterCustomers(){console.log(112),this.filteredCustomers()},cleanInput(){this.searchNameCustomer="",this.filteredCustomers()}},created(){this.filterCustomers=Object(x["a"])(this.filterCustomers,2e3),this.cleanInput=Object(x["a"])(this.cleanInput,1e3)}},w=j,Q=s("27f9"),B=Object(u["a"])(w,_,S,!1,null,null,null),O=B.exports;g()(B,"components",{QInput:Q["a"],QIcon:p["a"]});var I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-select",{attrs:{outlined:"",options:e.options,"emit-value":"","map-options":"",label:"сортировка клиентов по рейтингу и отзывам"},model:{value:e.sortBy,callback:function(t){e.sortBy=t},expression:"sortBy"}})},N=[],k={name:"SortByCustomers",data(){return{options:[{label:"по рейтингу",value:"rating"},{label:"по количеству отзывов",value:"reviews"}]}},computed:{...Object(n["d"])("customers",["sortType"]),sortBy:{get(){return this.sortType},set(e){this.setSortType(e)}}},methods:{...Object(n["b"])("customers",["setSortType"])}},L=k,E=s("ddd8"),T=Object(u["a"])(L,I,N,!1,null,null,null),$=T.exports;g()(T,"components",{QSelect:E["a"]});var A={name:"PageCustomers",components:{CustomerItem:y,SearchBarCustomers:O,SortByCustomers:$},computed:{...Object(n["c"])("customers",["customers","isLoading"])},methods:{...Object(n["b"])("customers",["initialCustomers"])},mounted(){this.initialCustomers()}},J=A,P=s("9989"),z=s("1c1c"),H=s("0170"),D=s("54e1"),F=s("9149"),G=Object(u["a"])(J,r,a,!1,null,null,null);t["default"]=G.exports;g()(G,"components",{QPage:P["a"],QList:z["a"],QItemLabel:H["a"],QBanner:D["a"],QSpinnerHourglass:F["a"]})}}]);