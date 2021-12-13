<template>

    <div
      class="q-pa-md absolute full-width full-height"
    >

      <div class="bg-grey-2 q-pa-sm rounded-borders q-mb-md">
        <q-toggle
          name="music_active"
          v-model="showFilterSort"
          :label="labelToggle"
        />
      </div>

      <transition
        appear
        enter-active-class="animated backInUp"
      >
        <div v-if="showFilterSortPanel" class="menu-filter">
          <SearchBarOrders />
          <SortByOrders class="q-mb-md" />
        </div>
      </transition>

      <q-list
        bordered
        padding
        separator
        :style="{height: '60vh'}"
      >
        <q-item-label header>
          Общий список заказов
        </q-item-label>

        <template
          v-if="orders.length"
        >
          <q-scroll-area
            visible
            class="q-scroll-area-orders"
          >

            <transition-group
              appear
              enter-active-class="animated backInUp"
              leave-active-class="animated backInUp"
            >

              <Order
                v-for="order in orders"
                :key="order.id"
                :slug="order.id"
                :title="order.title"
                :description="order.description"
                :price="order.price"
                :selected-performer="order.selectedPerformer"
                :status="order.status"
                class="ordersList"
              />


            </transition-group>

          </q-scroll-area>

        </template>
        <q-banner
          v-else-if="!orders.length && !isLoading"
          class="bg-primary text-white text-center"
        >
          <h6 class="q-ma-none">
            Заказов пока нет
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


      </q-list>

    </div>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Order from 'components/orders/Order'
  import SearchBarOrders from 'components/orders/SearchBarOrders'
  import SortByOrders from "components/orders/SortByOrders";

  export default {
    name: 'PageOrders',
    components: {
      Order,
      SearchBarOrders,
      SortByOrders,
    },
    props: {
      orders: {
        type: Array,
        required: false
      }
    },
    computed: {
      ...mapGetters('orders', ['isLoading', 'showFilterSortPanel']),
      labelToggle() {
        const message = !this.showFilterSort ? 'показать' : 'спрятать'
        return `${message} фильтр поиска и сортировки заказов`
      },
      showFilterSort: {
        get() {
          return this.showFilterSortPanel
        },
        set(statusToggleOrder) {
          this.setShowFilterSortPanel(statusToggleOrder)
        }
      }
    },
    methods: {
      ...mapActions('orders', ['initialOrders', 'setShowFilterSortPanel', 'initialToggleStatus'])
    },
  }
</script>

<style scoped>
  .q-scroll-area-orders {
    /*display: flex;*/
    /*flex-grow: 1;*/
    height: 100%;
  }

  .menu-filter {
    animation-duration: .5s;
  }

  .ordersList {
    animation-duration: .5s;
  }
</style>
