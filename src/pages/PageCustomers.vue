<template>
  <q-page class="q-pa-md">
    тут поисковвый инпут с дебоунсом на сервер
    <br>
    тут будет фильтр клиентов  по рейтингу и отзывам
    <br>
    <q-list
      bordered
      padding
      separator
    >
      <q-item-label header>
        Общий список клиентов
      </q-item-label>

      <template
        v-if="customers.length"
      >

      <CustomerItem
        v-for="customer in customers"
        :key="customer.id"
        :rating="customer.rating"
        :username="customer.username"
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
import CustomerItem from "components/customers/CustomerItem";

export default {
  name: 'PageCustomers',
  components: {
    CustomerItem
  },
  computed: {
    ...mapGetters('customers', ['customers'])
  }
}
</script>
