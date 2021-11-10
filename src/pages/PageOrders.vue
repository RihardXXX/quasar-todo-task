<template>
  <q-page class="q-pa-md">
    тут поисковвый инпут с дебоунсом на сервер
    <br>
    плюс тут будет фильтр по свободным и выполненным заявкам
    <br>
    а также поиск по дате
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
        />


      </template>
      <div
        class="flex justify-center"
        v-else
      >
        <q-spinner-hourglass
          color="purple"
          size="4em"
        />
      </div>
<!--      <pre>-->
<!--        {{orders}}-->
<!--      </pre>-->

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
  import Order from "components/orders/Order";

  export default {
    name: 'PageOrders',
    components: {
      Order
    },
    computed: {
      ...mapGetters('orders', ['orders'])
    }
  }
</script>
