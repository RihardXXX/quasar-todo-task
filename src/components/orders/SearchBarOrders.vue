<template>
  <q-input
    outlined
    bottom-slots
    v-model="searchText"
    label="поиск заказов"
    @input="filterOrders"
  >
    <template v-slot:append>
      <q-icon
        v-if="searchText !== ''"
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
    name: 'SearchBarOrders',
    computed: {
      ...mapState('orders', ['searchOrder']),
      searchText: {
        get() {
          return this.searchOrder
        },
        set(value) {
          this.setSearchOrderString(value)
        }
      }
    },
    methods: {
      ...mapActions('orders', [
        'setSearchOrderString',
        'filteredOrders'
      ]),
      filterOrders() {
        console.log(112)
        this.filteredOrders()
      },
      cleanInput() {
        this.searchText = ''
        this.filteredOrders()
      },
    },
    created () {
      this.filterOrders = debounce(this.filterOrders, 2000)
      this.cleanInput = debounce(this.cleanInput, 1000)
    }
  }

</script>
