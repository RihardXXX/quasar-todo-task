<template>
  <q-select
    outlined
    v-model="sortBy"
    :options="options"
    emit-value
    map-options
    label="сортировка заказов клиентов"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {
    name: 'SortByOrders',
    data () {
      return {
        options: [
          {
            label: 'по имени',
            value: 'title'
          },
          {
            label: 'по цене',
            value: 'price'
          },
          {
            label: 'по дате',
            value: 'date'
          },
          {
            label: 'по статусу заказа',
            value: 'selectedPerformer'
          },
        ]
      }
    },
    computed: {
      ...mapState('orders', ['sortType']),
      sortBy: {
        get() {
          return this.sortType
        },
        set(value) {
          // console.log(value)
          this.setSort(value)
        }
      }
    },
    methods: {
      ...mapActions('orders', ['setSort'])
    }
  }


</script>
