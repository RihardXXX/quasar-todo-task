<template>
  <q-input
    outlined
    bottom-slots
    v-model="searchNameCustomer"
    label="поиск клиентов"
    @input="filterCustomers"
  >
    <template v-slot:append>
      <q-icon
        v-if="searchNameCustomer !== ''"
        name="close"
        @click="cleanInput"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { debounce } from 'quasar'


export default {
  name: 'SearchBarCustomers',
  computed: {
    ...mapState('customers', ['searchCustomer']),
    searchNameCustomer: {
      get() {
        return this.searchCustomer
      },
      set(value) {
        this.setSearchNameCustomer(value)
      }
    }
  },
  methods: {
    ...mapActions('customers', [
      'setSearchNameCustomer',
      'filteredCustomers'
    ]),
    filterCustomers() {
      console.log(112)
      this.filteredCustomers()
    },
    cleanInput() {
      this.searchNameCustomer = ''
      this.filteredCustomers()
    },
  },
  created () {
    this.filterCustomers = debounce(this.filterCustomers, 2000)
    this.cleanInput = debounce(this.cleanInput, 1000)
  }
}

</script>
