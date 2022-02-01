<template>
  <q-page>
    <div class="q-pa-md">

      <div class="q-ma-md">
        <q-btn-dropdown
          color="primary"
          :disable="closeCategory"
          :label="currentCategory || 'Выбрать категорию для поиска'"
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

      <div class="q-ma-md">
        <q-input
          outlined
          debounce="2000"
          v-model="searchName"
          :disable="closeInput"
          filled
          label="Поиск заказа по ключевой фразе"
        />
      </div>

    </div>
        <q-item-label header>
          Общий список заказов
        </q-item-label>

        <template v-if="orders.length">
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

        <div v-if="!orders.length">
          <q-banner dense class="bg-grey-3 text-center q-ma-md">
            <h5>Ничего не найдено</h5>
          </q-banner>
        </div>
  </q-page>
</template>

<script>
  // Компонент готов к работе, легкие тесты пройдены
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
        // Поиск заказа по ключевой фразе
        searchName: '',
        // Закрытие инпута когда выбрана категория
        closeInput: false,
        // Отключение фильтра поиска по категории при выбранном поиске по ключевой фразе
        closeCategory: false
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
    watch: {
      // Реализация поиска по ключевой фразе
      searchName(newName) {
        if (!newName) {
          // если стёр всё в инпуте то сбрасываем всё и запускаем поиск общий заново
          this.closeCategory = false
          this.resetOrdersStateAndParamsFetch()
          this.getAllOrders()
          this.$refs.infiniteScroll.resume()
        } else {
          // Если написал что то в инпуте то добавляем параметр для поиска и запускаем запрос на сервер
          this.closeCategory = true
          this.resetOrdersStateAndParamsFetch()
          // запускаем мутацию на добавление параметров при запросе
          this.$store.commit('orders/addParamsForOrders', {
            name: newName
          })
          this.getAllOrders()
          this.$refs.infiniteScroll.resume()
        }
      }
    },
    methods: {
      ...mapActions('orders', ['getAllOrders']),
      // Метод запускающие коммиты для сброса параметров запроса, а также общего состояния заказов
      resetOrdersStateAndParamsFetch() {
        this.$store.commit('orders/resetStateOrders')
        this.$store.commit('orders/resetParamsForOrders')
      },
      // Бесконечная загрузка метод скролла
      loadMore (index, done) {
        // Чтобы первый раз не пролетел мимо скролл))
        if (this.orders.length === 0) {
          this.$refs.infiniteScroll.resume()
          done()
          return
        }

        // Если с количество найденных заказов больше чем прогружено то запускаем заново
        if (this.ordersCount > this.orders.length) {
          this.$store.commit('orders/setOffset', 20)
          this.getAllOrders()
            .then(() => done())
        } else if (this.orders.length >= this.ordersCount) {
          this.$refs.infiniteScroll.stop()
        }
      },
      // Установить категорию для поиска
      setCategoryForSearchOrders(categoryName) {
        // Чтобы пользователь видел выбранную категорию а также закрываем поиск по имени
        this.currentCategory = categoryName
        this.closeInput = true

        // сброс старых данных
        this.resetOrdersStateAndParamsFetch()

        // запускаем мутацию на добавление параметров при запросе
        this.$store.commit('orders/addParamsForOrders', {
          category: categoryName
        })

        // делаем новы запрос
        this.getAllOrders()
        // обновляем состояние скролла
        this.$refs.infiniteScroll.resume()
      },
      // Очистка категории
      clearCategory() {
        this.currentCategory = ''
        this.closeInput = false
        this.searchName = ''
        this.resetOrdersStateAndParamsFetch()
        this.getAllOrders()
        // обновляем состояние скролла
        this.$refs.infiniteScroll.resume()
      }
    },
    // Все заказы
    mounted() {
      // сброс состояния чтобы не было дублирования при смене роута и тп
      // при смене роута категории тоже сбрасываем
      this.resetOrdersStateAndParamsFetch()
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
