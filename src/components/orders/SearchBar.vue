<template>
  <q-input
    outlined
    bottom-slots
    v-model="searchText"
    label="поиск заказов"
  >
    <template v-slot:append>
      <q-icon
        v-if="searchText !== ''"
        name="close"
        @click="searchText = ''"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'SearchBar',
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
      ...mapActions('orders', ['setSearchOrderString'])
    }
  }

</script>
