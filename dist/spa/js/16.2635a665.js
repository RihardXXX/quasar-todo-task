(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"4fc8":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{style:{maxWidth:"700px",margin:"0 auto"},attrs:{padding:""}},[e("q-banner",{staticClass:"bg-purple-8 text-white text-center",attrs:{rounded:""}},[a._v("\n      Авторизация\n    ")]),e("div",{staticClass:"q-gutter-y-md",staticStyle:{"max-width":"700px"}},[e("q-card",[e("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("q-tab",{attrs:{name:"mail",label:"почта и пароль"}})],1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"mail"}},[e("q-form",{staticClass:"q-gutter-md q-mt-md",on:{submit:a.onSubmit}},[e("q-input",{attrs:{filled:"",type:"text",label:"электронная почта","lazy-rules":"",rules:[a.fnValidateEmail]},model:{value:a.userData.email,callback:function(t){a.$set(a.userData,"email",t)},expression:"userData.email"}}),e("q-input",{attrs:{type:"password",filled:"",label:"пароль","lazy-rules":"",rules:[a.fnValidatePassword]},model:{value:a.userData.password,callback:function(t){a.$set(a.userData,"password",t)},expression:"userData.password"}}),e("div",[e("q-btn",{attrs:{disabled:!1,label:"войти",type:"submit",color:"primary"}})],1)],1)],1)],1)],1)],1)],1)},n=[],r=e("2f62"),i=e("cf57"),l={name:"SignIn",data(){return{userData:{name:"",email:"",password:"",role:"customer"},tab:"mail",phone:""}},methods:{...Object(r["b"])("authorization",["signInUser","signInNumberPhone"]),fnValidateEmail(a){return a.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"введите электронную почту в правильном формате"},fnValidateName(a){return a.length>6&&a.length<20||"имя должно быть больше 5 символов но меньше 20"},fnValidatePassword(a){return a.length&&a.length>10&&a.length<100||"пароль должен быть больше 10 символов но меньше 100"},onSubmit(){this.$q.loading.show({spinner:i["a"],spinnerColor:"red",message:"Идёт загрузка"}),this.signInUser({email:this.userData.email,password:this.userData.password}).then((()=>{this.$q.loading.hide(),this.$router.push({name:"index"})})).catch((a=>{this.$q.loading.hide(),this.$q.dialog({title:"Ошибка",message:a,ok:"ок",persistent:!0}).onOk((()=>{console.log(112)}))}))},signInInstagram(){console.log("sigIn instagram")},signInNumber(){this.signInNumberPhone(this.phone)}}},o=l,d=e("2877"),u=e("9989"),m=e("54e1"),c=e("f09f"),b=e("429b"),p=e("7460"),h=e("eb85"),g=e("adad"),f=e("823b"),q=e("0378"),w=e("27f9"),x=e("9c40"),y=e("eebe"),Q=e.n(y),v=Object(d["a"])(o,s,n,!1,null,null,null);t["default"]=v.exports;Q()(v,"components",{QPage:u["a"],QBanner:m["a"],QCard:c["a"],QTabs:b["a"],QTab:p["a"],QSeparator:h["a"],QTabPanels:g["a"],QTabPanel:f["a"],QForm:q["a"],QInput:w["a"],QBtn:x["a"]})}}]);