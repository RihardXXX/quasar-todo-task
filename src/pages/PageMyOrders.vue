<template>
  <q-page>
    <q-item-label header>
      Общий список заказов
    </q-item-label>

    <template v-if="orders.length">
      <Order
        v-for="order in orders"
        :key="order.id"
        :slug="order.slug"
        :title="order.title"
        :description="order.description"
        :price="order.price"
        :selected-performer="order.selectedPerformer"
        :status="order.status"
        class="ordersList"
      />
    </template>
    <q-infinite-scroll
      @load="loadMore"
      ref="infiniteScroll"
    >
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots
            color="primary"
            size="70px"
          />
        </div>
      </template>
    </q-infinite-scroll>

    <div v-if="!orders.length">
      <q-banner dense class="bg-grey-3 text-center q-ma-md">
        <h5>Ничего не найдено</h5>
      </q-banner>
    </div>
  </q-page>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Order from 'components/orders/Order';


  export default {
    name: 'MyOrders',
    components: {
      Order
    },
    computed: {
      ...mapGetters('orders', ['myOrders']),
      ...mapGetters('authorization', ['customer', 'performer']),
    },
    methods: {
      // ...mapActions('orders', ['getAllMyOrders'])
    },
    // тут будут подгружаться только мои заказы
    mounted() {
      // отрисовка заказов для кастомера
      // this.getAllMyOrders()
    }
  }
</script>

