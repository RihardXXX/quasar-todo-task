<template>
  <q-page>
    <Orders
      :orders="myOrders"
    />
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Orders from "components/orders/Orders";

export default {
  name: 'PageOrders',
  components: {Orders},
  computed: {
    ...mapGetters('orders', ['myOrders']),
  },
  methods: {
    ...mapActions('orders', ['getAllMyOrders'])
  },
  // тут будут подгружаться только мои заказы
  mounted() {
    // отрисовка заказов для кастомера
    // this.getAllMyOrders()
  }
}
</script>

