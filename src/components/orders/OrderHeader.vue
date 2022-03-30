<template>

 <div>
   <!-- userId: {{typeof userId}}
   <br>
   idUser: {{typeof idUser}} -->
   <q-banner
     inline-actions
     class="bg-primary text-white"
   >
     {{ title }}
     <template v-slot:action>
       <q-btn
         round
         color="secondary"
         icon="thumb_up_off_alt"
         @click="liked"
       />
       <q-btn
         round
         color="deep-orange"
         icon="favorite"
       >
         {{favoritesCount}}
       </q-btn>
       <q-btn
         round
         color="secondary"
         icon="thumb_down_off_alt"
         @click="disliked"
       />
     </template>
   </q-banner>

   <q-card class="my-card">

     <q-list>

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

       <q-item>
         <q-btn
           v-if="isAuthor"
           outline
           rounded
           color="primary"
           label="сменить статус заказа на выполнено"
           @click="changeStatusOrderDone"
         />
       </q-item>

       <q-item v-if="isNotAuthorAndSelectedPerformer">
         <q-btn
          color="red"
          icon="mail"
          icon-right="send"
          label="создать чат"
          @click="createChat"
         />
       </q-item>

     </q-list>

   </q-card>

 </div>

</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';


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
      },
      description: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: false,
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
      },
      dueTime: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      favoritesCount: {
        type: [String, Number],
        required: true
      },
      slug: {
        type: String,
        required: true
      },
      userId: {
        type: Number,
        required: true
      },
      selectedPerformer: {
        type: Boolean,
        required: true,
      }
    },
    computed: {
      ...mapState('orders', ['isLoading']),
      ...mapGetters('authorization', ['idUser']),
      // Для того чтобы создать чат мы проверяем
      // Чтобы на заказ не было выбранного мастера а также вы не являлись автором заказа
      isNotAuthorAndSelectedPerformer() {
        // console.log(this.userId);
        // console.log(this.idUser);
        return this.userId !== this.idUser && !this.selectedPerformer;
      },

      // В зависимости от статуса даём разын цвета
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
      // являетесь ли вы автором заказа и то что заказ в работе
      isAuthor() {
        const { idUser, userId } = this
        // console.log(112, this.status)
        return idUser === userId && this.status === 'в работе'
      }
    },
    methods: {
      ...mapActions('orders', [
        'likedOrder',
        'dislikedOrder',
        'changeStatusOrderByDone'
        ]),
      // Создать чат
      createChat() {
        // прокидываем айдишник пользователя с кем будет создаваться чат
        this.$router.push({ name: 'chats', params: { userId: this.userId } });
      },
      liked() {
        // console.log(112, this.slug)
        this.likedOrder(this.slug)
      },
      disliked() {
        this.dislikedOrder(this.slug)
      },
      // Сменить статус заказа на выполнено
      changeStatusOrderDone() {
        console.log('done', this.slug)
        this.changeStatusOrderByDone(this.slug)
      }
    }
  }

</script>
