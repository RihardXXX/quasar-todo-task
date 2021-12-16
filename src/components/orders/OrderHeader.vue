<template>

 <div>
   <q-banner class="bg-primary text-white text-center">
     {{ title }}
   </q-banner>

   <q-card class="my-card">

     <q-list
       v-if="!isLoading"
     >

       <q-item>
         <q-item-section avatar>
           <q-icon
             color="primary"
             name="subtitles"
           />
         </q-item-section>
         <q-item-section>
           <q-item-label>
             Клиент
           </q-item-label>
           <q-item-label caption>
             {{ customer }}
             сюда отдельным запросом взять имя клиента
           </q-item-label>
         </q-item-section>
       </q-item>

       <q-item>
         <q-item-section avatar>
           <q-icon
             color="primary"
             name="subtitles"
           />
         </q-item-section>
         <q-item-section>
           <q-item-label>
             краткое описание
           </q-item-label>
           <q-item-label caption>
             {{ description }}
           </q-item-label>
         </q-item-section>
       </q-item>

       <q-item>
         <q-item-section avatar>
           <q-icon
             color="primary"
             name="description"
           />
         </q-item-section>
         <q-item-section>
           <q-item-label>
             что нужно сделать
           </q-item-label>
           <q-item-label caption>
             {{ body }}
           </q-item-label>
         </q-item-section>
       </q-item>

       <q-item>
         <q-item-section avatar>
           <q-icon
             color="primary"
             name="price_change"
           />
         </q-item-section>
         <q-item-section>
           <q-item-label>
             стоимость работ
           </q-item-label>
           <q-badge
             color="positive"
             outline
             style="max-width: fit-content"
             :label="`цена: ${price}`"
           />
         </q-item-section>
       </q-item>

       <q-item>
         <q-item-section avatar>
           <q-icon
             color="primary"
             name="event"
           />
         </q-item-section>
         <q-item-section>
           <q-item-label>
             дата и время начала работ
           </q-item-label>
           <div class="flex justify-start">
             <q-badge
               outline
               color="primary"
               style="max-width: fit-content"
               :label="dueDate"
             />
             <q-badge
               outline
               color="primary"
               style="max-width: fit-content"
               class="q-ml-md"
               :label="dueTime"
             />
           </div>
         </q-item-section>
       </q-item>

       <q-item>
         <q-item-section avatar>
           <q-icon
             color="primary"
             name="home"
           />
         </q-item-section>
         <q-item-section>
           <q-item-label>
             адрес
           </q-item-label>
           <q-item-label caption>
             {{ address }}
           </q-item-label>
         </q-item-section>
       </q-item>

       <q-item>
         <q-item-section avatar>
           <q-icon
             color="primary"
             name="timeline"
           />
         </q-item-section>
         <q-item-section>
           <q-item-label>
             статус
           </q-item-label>
           <q-badge
             :color="statusCurrentOrder"
             style="max-width: fit-content"
             :label="status"
           />
         </q-item-section>
       </q-item>

     </q-list>

     <div
       class="flex justify-center"
       v-else
     >
       <q-spinner-hourglass
         color="purple"
         size="4em"
       />
     </div>

   </q-card>
 </div>

</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'OrderHeader',
    props: {
      title: {
        type: String,
        required: true,
        default: ''
      },
      customer: {
        type: String,
        required: true,
        default: ''
      },
      description: {
        type: String,
        required: true,
        default: ''
      },
      body: {
        type: String,
        required: true,
        default: ''
      },
      price: {
        type: [String, Number],
        required: true,
        default: 0
      },
      dueDate: {
        type: String,
        required: true,
        default: ''
      },
      dueTime: {
        type: String,
        required: true,
        default: ''
      },
      address: {
        type: String,
        required: true,
        default: ''
      },
      status: {
        type: String,
        required: true,
        default: ''
      },
    },
    computed: {
      ...mapState('orders', ['isLoading']),
      statusCurrentOrder() {
        const statusObject = {
          positive: 'свободен',
          info: 'в работе',
          warning: 'выполнено'
        }
        // выбор цвета в зависимости от статуса заявки, берём ключ объекта
        return this.status
          ? Object.keys(statusObject).find(key => statusObject[key] === this.status)
          : null
      },
    }
  }

</script>
