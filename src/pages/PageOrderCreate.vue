<template>
  <q-page class="container">
    <h5 class="text-center q-mb-none">Создать заказ</h5>
      <div class="q-pa-md text-center">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="order.title"
            label="имя заказа"
            clearable
            lazy-rules
            :rules="[fnValidateTitle, fnValidateLength]"
          />
          <q-input
            filled
            v-model="order.description"
            label="краткое описание"
            clearable
            lazy-rules
            :rules="[fnValidateTitle, fnValidateLength]"
          />
          <q-input
            type="textarea"
            filled
            v-model="order.body"
            label="общая информация о заказе"
            clearable
            lazy-rules
            :rules="[fnValidateTitle, fnValidateBody]"
          />
          <q-input
            filled
            v-model="order.address"
            label="адрес"
            clearable
            lazy-rules
            :rules="[fnValidateTitle, fnValidateLength]"
          />

          <q-select
            v-model="order.category"
            :options="category"
            label="категория"
          />

          <q-date
            v-model="order.dueDate"
            title="дата выполнения"
            subtitle="какого числа придти мастеру"
          />
          <br>

          <q-time
            v-model="order.dueTime"
            format24h
          />
          <br>

          <q-input
            type="number"
            filled
            prefix="₽"
            v-model="order.price"
            label="цена за работу"
            clearable
            lazy-rules
            :rules="[fnValidateTitle, fnValidatePrice]"
          />


          <div>
            <q-btn
              :label="buttonLabel"
              type="submit"
              color="primary"
            />
          </div>
        </q-form>

<!--        <q-btn-->
<!--          label="тестовый заказы"-->
<!--          @click="createTestOrder"-->
<!--          color="primary"-->
<!--        />-->

      </div>
  </q-page>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { uid } from 'quasar'

  export default {
    name: 'OrderCreate',
    data() {
      return {
        category: ['сантехника', 'электрика', 'общестроительные'],
        create: true,
        edit: false,
        order: {
          title: '',
          description: '',
          body: '',
          price: '',
          address: '',
          category: '',
          dueDate: '',
          dueTime: '',
          listOfPerformers: [],
          selectedPerformer: false,
          status: 'свободен',
          victory: []
        },
      }
    },
    computed: {
      ...mapState('orders', ['currentOrder', 'orders']),
      buttonLabel() {
        return this.$route.params.hasOwnProperty('idOrder')
          ? 'редактировать заказ'
          : 'создать заказ'
      }
    },
    methods: {
      ...mapActions('orders', ['createOrder', 'editOrder']),
      fnValidateTitle(val) {
         return val !== null && val !== '' || 'заполните поле пожалуйста'
      },
      fnValidateLength(val) {
        return val.length > 0 && val.length < 100 || 'длина символов до 100'
      },
      fnValidateBody(val) {
        return val.length > 0 && val.length < 300 || 'длина символов до 300'
      },
      fnValidatePrice(val) {
        console.log(val)
        val = String(val)
        return val.length > 0 && val.length < 6 || 'длина символов до 6'
      },

      createTestOrder() {
        this.createOrder()
      },

      onSubmit() {

        if (this.create) {
          console.log('создание')
          this.createOrder(this.order)
          this.$router.push('/my-orders')
        } else {
          console.log('редактирование')
          this.editOrder(order)
          this.$router.push('/orders')
        }

      },
    },
    mounted() {
      const idOrder = this.$route.params.idOrder
      if (this.$route.params.hasOwnProperty('idOrder')) {
        this.order = {...this.orders.find(order => order.id === idOrder)}
        this.create = false
        this.edit = true
      }
    }
  }
</script>
