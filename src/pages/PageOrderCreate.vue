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
              label="создать заказ"
              type="submit"
              color="primary"
            />
          </div>
        </q-form>

      </div>
  </q-page>
</template>

<script>
  export default {
    name: 'OrderCreate',
    data() {
      return {
        order: {
          id: '',
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
          customer: 'Rihard',
          status: 'свободен',
          victory: []
        },
      }
    },
    methods: {
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
        return val.length > 0 && val.length < 6 || 'длина символов до 6'
      },

      onSubmit() {

        // this.$refs.title.validation()

        console.log(111)

        const order = {
          id: Math.random(),
          title: this.order.title,
          description: this.order.description,
          body: this.order.body,
          price: this.order.price,
          address: this.order.address,
          category: this.order.category,
          dueDate: this.order.dueDate,
          dueTime: this.order.dueTime,
          listOfPerformers: this.order.listOfPerformers,
          selectedPerformer: this.order.selectedPerformer,
          customer: this.order.customer,
          status: this.order.status,
          victory: this.order.victory
        }
        console.log('onSubmit')
      },
      onReset() {
        console.log('onReset')
      }
    }
  }
</script>
