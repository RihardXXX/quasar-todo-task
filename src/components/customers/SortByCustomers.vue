<template>
  <q-select
    outlined
    v-model="sortBy"
    :options="options"
    emit-value
    map-options
    label="сортировка клиентов по рейтингу и отзывам"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {
    name: 'SortByCustomers',
    data () {
      return {
        options: [
          {
            label: 'по рейтингу',
            value: 'rating'
          },
          {
            label: 'по количеству отзывов',
            value: 'reviews'
          },
        ]
      }
    },
    computed: {
      ...mapState('customers', ['sortType']),
      sortBy: {
        get() {
          return this.sortType
        },
        set(value) {
          this.setSortType(value)
        }
      }
    },
    methods: {
      ...mapActions('customers', ['setSortType'])
    }
  }


</script>
