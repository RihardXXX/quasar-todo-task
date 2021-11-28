<template>
  <q-page class="q-pa-md">

    <SearchBarCustomers />

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
        :slug="customer.id"
        :rating="customer.rating"
        :username="customer.username"
        :reviews="customer.reviews"
      />

      </template>
      <q-banner
        v-else-if="!customers.length && !isLoading"
        class="bg-primary text-white text-center"
      >
        <h6 class="q-ma-none">
          Клиентов пока нет
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
      <!--      <pre>-->
      <!--        {{orders}}-->
      <!--      </pre>-->

    </q-list>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CustomerItem from 'components/customers/CustomerItem'
  import SearchBarCustomers from 'components/customers/SearchBarCustomers'

  export default {
    name: 'PageCustomers',
    components: {
      CustomerItem,
      SearchBarCustomers
    },
    computed: {
      ...mapGetters('customers', ['customers', 'isLoading'])
    }
  }
</script>
