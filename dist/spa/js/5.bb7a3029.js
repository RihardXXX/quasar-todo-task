(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{b26a:function(e,r,t){"use strict";t.d(r,"a",(function(){return l}));const l=[{label:"Демонтажные работы",value:"Демонтажные работы",color:"green"},{label:"Строительные работы",value:"Строительные работы",color:"green"},{label:"Возведение стен из блоков",value:"Возведение стен из блоков",color:"green"},{label:"Утепление балконов и лоджий (с присоединением помещений)",value:"Утепление балконов и лоджий (с присоединением помещений)",color:"green"},{label:"Малярно-штукатурные работы",value:"Малярно-штукатурные работы",color:"green"},{label:"Выравнивание стен и потолков",value:"Выравнивание стен и потолков",color:"green"},{label:"Шпатлевание стен и потолков",value:" Шпатлевание стен и потолков",color:"green"},{label:"Шлифовка поверхностей",value:"Шлифовка поверхностей",color:"green"},{label:"Оклейка стен обоями (всех видов)",value:"Оклейка стен обоями (всех видов)",color:"green"},{label:"Столярно-плотницкие работы",value:"Столярно-плотницкие работы",color:"green"},{label:"Установка межкомнатных дверей",value:"Установка межкомнатных дверей",color:"green"},{label:"Монтаж стен из гипсокартона",value:"Монтаж стен из гипсокартона",color:"green"},{label:"Устройство полов",value:"Устройство полов",color:"green"},{label:"Сантехнические работы",value:"Сантехнические работы",color:"green"},{label:"Электромонтажные работы",value:"Электромонтажные работы",color:"green"},{label:"Вентиляционные работы",value:"Вентиляционные работы",color:"green"},{label:"Доставка стройматериалов для ремонта",value:"Доставка стройматериалов для ремонта",color:"green"}]},f22e:function(e,r,t){"use strict";t.r(r);var l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("q-page",{staticClass:"container"},[t("h5",{staticClass:"text-center q-mb-none"},[e._v("Создать заказ")]),t("div",{staticClass:"q-pa-md"},[t("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit}},[t("q-input",{attrs:{filled:"",label:"имя заказа",clearable:"","lazy-rules":"",rules:[e.fnValidateTitle,e.fnValidateLength]},model:{value:e.order.title,callback:function(r){e.$set(e.order,"title",r)},expression:"order.title"}}),t("q-input",{attrs:{filled:"",label:"краткое описание",clearable:"","lazy-rules":"",rules:[e.fnValidateTitle,e.fnValidateLength]},model:{value:e.order.description,callback:function(r){e.$set(e.order,"description",r)},expression:"order.description"}}),t("q-input",{attrs:{type:"textarea",filled:"",label:"общая информация о заказе",clearable:"","lazy-rules":"",rules:[e.fnValidateTitle,e.fnValidateBody]},model:{value:e.order.body,callback:function(r){e.$set(e.order,"body",r)},expression:"order.body"}}),t("q-input",{attrs:{filled:"",label:"адрес",clearable:"","lazy-rules":"",rules:[e.fnValidateTitle,e.fnValidateLength]},model:{value:e.order.address,callback:function(r){e.$set(e.order,"address",r)},expression:"order.address"}}),t("div",{staticClass:"q-pa-md"},[t("q-option-group",{attrs:{options:e.options,type:"checkbox"},model:{value:e.order.category,callback:function(r){e.$set(e.order,"category",r)},expression:"order.category"}})],1),t("div",{staticClass:"q-pa-md text-center"},[t("q-date",{attrs:{title:"дата выполнения",subtitle:"какого числа придти мастеру"},model:{value:e.order.dueDate,callback:function(r){e.$set(e.order,"dueDate",r)},expression:"order.dueDate"}})],1),t("div",{staticClass:"q-pa-md text-center"},[t("q-time",{attrs:{format24h:""},model:{value:e.order.dueTime,callback:function(r){e.$set(e.order,"dueTime",r)},expression:"order.dueTime"}})],1),t("q-input",{attrs:{type:"number",filled:"",prefix:"₽",label:"цена за работу",clearable:"","lazy-rules":"",rules:[e.fnValidateTitle,e.fnValidatePrice]},model:{value:e.order.price,callback:function(r){e.$set(e.order,"price",r)},expression:"order.price"}}),t("div",{staticClass:"q-pa-md text-center"},[t("q-btn",{attrs:{label:e.buttonLabel,type:"submit",color:"primary"}})],1)],1)],1)])},a=[],o=(t("ddb0"),t("2f62")),n=t("cf57"),i=t("b26a"),s={name:"OrderCreate",data(){return{category:["сантехника","электрика","общестроительные"],create:!0,edit:!1,order:{title:"",description:"",body:"",price:"",address:"",category:[],dueDate:"",dueTime:""},options:[...i["a"]]}},computed:{...Object(o["d"])("orders",["currentOrder","orders"]),buttonLabel(){return this.$route.params.hasOwnProperty("idOrder")?"редактировать заказ":"создать заказ"}},methods:{...Object(o["b"])("orders",["createOrder","editOrder"]),fnValidateTitle(e){return null!==e&&""!==e||"заполните поле пожалуйста"},fnValidateLength(e){return e.length>0&&e.length<100||"длина символов до 100"},fnValidateBody(e){return e.length>0&&e.length<300||"длина символов до 300"},fnValidatePrice(e){return console.log(e),e=String(e),e.length>0&&e.length<10||"длина символов до 10"},onSubmit(){this.create?(this.$q.loading.show({spinner:n["a"],spinnerColor:"red",message:"Идёт загрузка"}),this.createOrder(this.order).then((()=>{this.$q.loading.hide(),this.$router.push({name:"index"})})).catch((e=>{const r=e.map((e=>`<li>${e}</li>`)).join(""),t=`<ul>${r}</ul>`;this.$q.loading.hide(),this.$q.dialog({title:"Ошибка",message:t,html:!0,ok:"ок",persistent:!0}).onOk((()=>{console.log(112)}))}))):(console.log("редактирование"),this.editOrder(order),this.$router.push("/orders"))}},mounted(){const e=this.$route.params.idOrder;this.$route.params.hasOwnProperty("idOrder")&&(this.order={...this.orders.find((r=>r.id===e))},this.create=!1,this.edit=!0)}},d=s,c=t("2877"),u=t("9989"),b=t("0378"),p=t("27f9"),g=t("9f0a"),m=t("52ee"),h=t("ca78"),f=t("9c40"),v=t("eebe"),y=t.n(v),q=Object(c["a"])(d,l,a,!1,null,null,null);r["default"]=q.exports;y()(q,"components",{QPage:u["a"],QForm:b["a"],QInput:p["a"],QOptionGroup:g["a"],QDate:m["a"],QTime:h["a"],QBtn:f["a"]})}}]);