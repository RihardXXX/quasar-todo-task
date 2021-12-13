<template>
  <q-page>
    <Orders :orders="orders" />
  </q-page>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Orders from "components/orders/Orders";

  export default {
    name: 'PageOrders',
    components: {Orders},
    computed: {
      ...mapGetters('orders', ['orders']),
    },
    methods: {
      ...mapActions('orders', ['initialOrders'])
    },
    // Все заказы
    mounted() {
      // первичная заполнение с фейковго сервера заказов
      this.initialOrders()
    }
  }
</script>

