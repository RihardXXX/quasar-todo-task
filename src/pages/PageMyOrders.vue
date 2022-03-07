<template>
  <q-page>
    <q-item-label header>
      Список заказов созданных мной
    </q-item-label>

    <template v-if="myOrders.length">
      <Order
        v-for="order in myOrders"
        :key="order.id"
        :slug="order.slug"
        :title="order.title"
        :description="order.description"
        :price="order.price"
        :selected-performer="order.selectedPerformer"
        :status="order.status"
        class="ordersList"
      />
    </template>
    <q-infinite-scroll
      @load="loadMore"
      ref="infiniteScroll"
    >
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots
            color="primary"
            size="70px"
          />
        </div>
      </template>
    </q-infinite-scroll>

    <div v-if="!myOrders.length">
      <q-banner dense class="bg-grey-3 text-center q-ma-md">
        <h5>Ничего не найдено</h5>
      </q-banner>
    </div>
  </q-page>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Order from 'components/orders/Order';


  export default {
    name: 'MyOrders',
    components: {
      Order
    },
    computed: {
      ...mapGetters('orders', ['myOrders', 'ordersCount']),
      ...mapGetters('authorization', ['customer', 'performer']),
    },
    methods: {
      ...mapActions('orders', ['getMyOrders']),

      // Метод запускающие коммиты для сброса параметров запроса, а также общего состояния заказов
      resetOrdersStateAndParamsFetch() {
        this.$store.commit('orders/resetStateOrders')
        this.$store.commit('orders/resetParamsForOrders')
      },

      // Бесконечная загрузка метод скролла
      loadMyOrders() {
        if (this.customer) {
          // console.log('load my performers')
          return this.getMyOrders({
            isCustomer: true
          })
        } else {
          // Отрисовка заказов для перформера
          // console.log('load my customers')
          return this.getMyOrders({
            isCustomer: false
          })
        }
      },
      loadMore (index, done) {
        // console.log('load scroll')
        // console.log('index: ', index)
        // console.log('done: ', done)
        // Чтобы первый раз не пролетел мимо скролл))
        if (this.myOrders.length === 0) {
          // console.log('метка')
          this.$refs.infiniteScroll.resume()
          done()
          return
        }
        //
        // // console.log('load scroll112')
        //
        // Если с количество найденных заказов больше чем прогружено то запускаем заново
        if (this.ordersCount > this.myOrders.length) {
          // console.log('this.accountsList.length1: ', this.accountsList.length)
          this.$store.commit('orders/setOffset', 20)
          this.loadMyOrders()
            .then(() => {
              // console.log('done 1')
              done()
            })
        } else if (this.myOrders.length >= this.ordersCount) {
          // console.log('this.accountsList.length2: ', this.accountsList.length)
          // console.log('this.accountsList.length2: ', this.accountsList)
          this.$refs.infiniteScroll.stop()
        }
      },
    },
    // тут будут подгружаться только мои заказы
    mounted() {
      // сброс состояния при переходе с другого юрл и тп
      this.resetOrdersStateAndParamsFetch()
      // отрисовка заказов для кастомера
      this.loadMyOrders()
    }
  }
</script>

