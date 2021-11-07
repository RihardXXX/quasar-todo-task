<template>
  <q-page class="q-pa-md">
    дропдаун с выбором категорий
    <br>
    <ListOrder
      :orders="orders"
    />
  </q-page>
</template>

<script>
  import ListOrder from "components/ListOrder";

  export default {
    name: 'PageOrders',
    components: {
      ListOrder
    },
    data() {
      return {
        orders: [
          {
            id: 0,
            title: 'Починить котёл',
            description: 'Описание000000000 00000000000 000000000 00000000000000 0000000000000',
            body: 'В общем котёл сам по себе выключается',
            price: '1000 рублей',
            address: 'Гагаринский дом 3',
            category: 'сантехника',
            dueDate: '01.01.2021г.',
            dueTime: '15:44',
            listOfPerformers: [],
            selectedPerformer: false,
            customer: 'Rihard',
          },
          {
            id: 1,
            title: 'Поклеить обои',
            description: 'Описание',
            body: 'Поклеить обои в одной комнате',
            price: '1500 рублей',
            address: 'Гагаринский дом 3',
            category: 'общий ремонт',
            dueDate: '01.01.2021г.',
            dueTime: '15:44',
            listOfPerformers: [],
            selectedPerformer: true,
            customer: 'Rihard',
          },
          {
            id: 2,
            title: 'Установить люстру',
            description: 'Описание',
            body: 'В общем котёл сам по себе выключается',
            price: '2000 рублей',
            address: 'Гагаринский дом 3',
            category: 'сантехника',
            dueDate: '01.01.2021г.',
            dueTime: '15:44',
            listOfPerformers: [],
            selectedPerformer: false,
            customer: 'Rihard',
          },
        ]
      }
    }
  }
</script>
