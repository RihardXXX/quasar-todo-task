<template>
  <q-page>
    <div class="q-pa-md">
      <q-btn-dropdown
        color="primary"
        label="Выбрать категорию для поиска"
      >
        <q-list>
          <q-item
            v-for="category in categoryList"
            :key="category.label"
            clickable
            v-close-popup
            @click="setCategoryForSearchOrders(category.label)"
          >
            <q-item-section>
              <q-item-label>{{category.label}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      &nbsp;

      <q-badge
        v-if="currentCategory"
        outline
        color="secondary"
        :label="currentCategory"
        class="q-ma-md"
      />

      &nbsp;

      <q-btn
        v-if="currentCategory"
        color="amber"
        glossy
        text-color="black"
        icon="close"
        class="q-ma-md"
        @click="clearCategory"
      />

    </div>
        <q-item-label header>
          Общий список заказов
        </q-item-label>

        <q-infinite-scroll
          @load="onLoad"
          :offset="250"
        >
<!--          <template-->
<!--            v-if="orders.length"-->
<!--          >-->
              <transition-group
                appear
                enter-active-class="animated backInUp"
                leave-active-class="animated backInUp"
              >

                <Order
                  v-for="order in orders"
                  :key="order.id"
                  :slug="order.slug"
                  :title="order.title"
                  :description="order.description"
                  :price="order.price"
                  :selected-performer="order.selectedPerformer"
                  :status="order.status"
                  class="ordersList"
                />


              </transition-group>

<!--          </template>-->
          <template v-slot:loading>
            <div class="row justify-center q-my-md">
              <q-spinner-dots
                color="primary"
                size="70px"
              />
            </div>
          </template>
        </q-infinite-scroll>
        <div v-if="!orders.length">
          <q-banner dense class="bg-grey-3 text-center q-ma-md">
            <h5>Ничего не найдено</h5>
          </q-banner>
        </div>
  </q-page>
</template>

<script>
import {mapActions, mapState} from 'vuex';
  import Order from 'components/orders/Order';
  import SearchBarOrders from 'components/orders/SearchBarOrders';
  import SortByOrders from 'components/orders/SortByOrders';
  import {categoryList} from 'boot/staticData';


export default {
    name: 'PageOrders',
    components: {
      Order,
      SearchBarOrders,
      SortByOrders
    },
    data() {
      return {
        // Прогрузка категорий для поиска
        categoryList: [...categoryList],
        // Выбранная категория для поиска
        currentCategory: '',
      }
    },
    computed: {
      ...mapState('orders', [
        'isLoading',
        'error',
        'orders',
        'ordersCount',
        'offset'
      ])
    },
    // watch: {
    //   currentCategory(selectCategory){
    //     // console.log(selectCategory)
    //
    //
    //   }
    // },
    methods: {
      ...mapActions('orders', ['getAllOrders']),
      // Бесконечная загрузка метод скролла
      onLoad (index, done) {
        console.log('112')
        console.log('index: ', index)
        console.log('done: ', done)
        console.log('this.ordersCount: ', this.ordersCount)
        console.log('this.orders.length: ', this.orders.length)
        // Если с количество найденных заказов больше чем прогружено то запускаем заново
        if (this.ordersCount > this.orders.length) {
          console.log('continue')
          this.$store.commit('orders/setOffset', 20)
          this.getAllOrders()
          // done()
        } else {
          console.log('break')
          // когда всё подгруженно
          // index = 0
          // done(true)
          done()
        }
      },
      // Установить категорию для поиска
      setCategoryForSearchOrders(categoryName) {
        // console.log('category name: ', categoryName);
        this.currentCategory = categoryName
        // запускаем мутацию на добавление параметров при запросе
        this.$store.commit('orders/addParamsForOrders', {
          category: categoryName
        })

        // мутация на стирание старых данных сброс
        this.$store.commit('orders/resetStateOrders')

        // делаем новы запрос
        this.getAllOrders()
      },
      // Очистка категории
      clearCategory() {
        this.currentCategory = ''
        this.$store.commit('orders/resetParamsForOrders')
        this.getAllOrders()
      }
    },
    // Все заказы
    mounted() {
      // сброс состояния чтобы не было дублирования при смене роута и тп
      this.$store.commit('orders/resetStateOrders')
      // первичная отрисовка
      this.getAllOrders()
    }
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

  .example-item {
    height: 56px
  }

</style>
