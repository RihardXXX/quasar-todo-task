<template>
  <q-page class="q-pa-md">

    <SearchBarOrders />

    <SortByOrders class="q-mb-md" />


    <q-list
      bordered
      padding
      separator
    >
      <q-item-label header>
        Общий список заказов
      </q-item-label>

      <template
        v-if="orders.length"
      >

        <Order
          v-for="order in orders"
          :key="order.id"
          :slug="order.id"
          :title="order.title"
          :description="order.description"
          :price="order.price"
          :selected-performer="order.selectedPerformer"
          :status="order.status"
        />

      </template>
      <q-banner
        v-else-if="!orders.length && !isLoading"
        class="bg-primary text-white text-center"
      >
        <h6 class="q-ma-none">
          Заказов пока нет
        </h6>
      </q-banner>
      <div
        class="flex justify-center"
        v-else-if="isLoading"
      >
        <q-spinner-hourglass
          color="purple"
          size="4em"
        />
      </div>

    </q-list>

<!--          <pre>-->
<!--            {{isLoading}}-->
<!--          </pre>-->
  </q-page>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Order from 'components/orders/Order'
  import SearchBarOrders from 'components/orders/SearchBarOrders'
  import SortByOrders from "components/orders/SortByOrders";

  export default {
    name: 'PageOrders',
    components: {
      Order,
      SearchBarOrders,
      SortByOrders,
    },
    computed: {
      ...mapGetters('orders', ['orders', 'isLoading']),
    },
    methods: {
      ...mapActions('orders', ['initialOrders'])
    },
    mounted() {
      // первичная заполнение с фейковго сервера заказов
      this.initialOrders()
    }
  }
</script>
