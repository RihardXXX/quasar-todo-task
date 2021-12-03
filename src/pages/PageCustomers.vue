<template>
  <q-page class="q-pa-md">

    <div class="bg-grey-2 q-pa-sm rounded-borders q-mb-md">
      <q-toggle
        name="music_active"
        v-model="showFilterSortPanel"
        :label="labelToggle"
      />
    </div>

    <transition
      appear
      enter-active-class="animated backInUp"
    >
      <div v-if="showFilterSortPanel" class="menu-filter">
        <SearchBarCustomers />
        <SortByCustomers class="q-mb-md" />
      </div>
    </transition>

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

        <transition-group
          appear
          enter-active-class="animated backInUp"
          leave-active-class="animated backInUp"
        >

          <CustomerItem
            v-for="customer in customers"
            :key="customer.id"
            :slug="customer.id"
            :rating="customer.rating"
            :username="customer.username"
            :reviews="customer.reviews"
            class="customerList"
          />

       </transition-group>

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
  import { mapGetters, mapActions } from 'vuex'
  import CustomerItem from 'components/customers/CustomerItem'
  import SearchBarCustomers from 'components/customers/SearchBarCustomers'
  import SortByCustomers from 'components/customers/SortByCustomers'

  export default {
    name: 'PageCustomers',
    components: {
      CustomerItem,
      SearchBarCustomers,
      SortByCustomers
    },
    data() {
      return {
        showFilterSortPanel: true,
      }
    },
    computed: {
      ...mapGetters('customers', ['customers', 'isLoading']),
      labelToggle() {
        const message = !this.showFilterSortPanel ? 'показать' : 'спрятать'
        return `${message} фильтр поиска и сортировки клиентов`
      }
    },
    methods: {
      ...mapActions('customers', ['initialCustomers'])
    },
    mounted() {
      this.initialCustomers()
    }
  }
</script>

<style scoped>
  .menu-filter {
    animation-duration: .5s;
  }

  .customerList {
    animation-duration: .5s;
  }
</style>
