<template>
  <q-list bordered class="rounded-borders">
    <h6
      class="text-center q-pt-md no-margin"
    >
      Заказы
    </h6>
    <q-separator />

    <q-item
      clickable
      v-ripple
      v-for="order in orders"
      :key="order.id"
      :to="{ path: `/order/${order.id}`}"
    >
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar2.jpg">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label lines="1">
          {{order.title}}
        </q-item-label>
        <q-item-label caption lines="2">
          {{order.body}}
        </q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label lines="1">
          {{order.dueDate}}
        </q-item-label>
        <q-item-label caption lines="2">
          {{order.dueTime}}
        </q-item-label>
      </q-item-section>
    </q-item>

  </q-list>
</template>

<script>

  export default {
    name: 'OrdersInfoCustomer',
    props: {
      orders: {
        type: Array,
        required: true
      }
    }
  }

</script>
