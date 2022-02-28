<template>
  <q-page class="q-pa-md" :style="{ height: '100%' }">
    <pre>
<!--      accountsList: {{accountsList}}-->
    </pre>
<!--    <pre>{{performers}}</pre>-->
<!--    <pre>{{customers}}</pre>-->
    <div
      class="bg-grey-2 q-pa-sm rounded-borders q-mb-md text-center"
    >
      <q-btn-dropdown
        color="primary"
        label="выбрать"
        dropdown-icon="change_history"
      >
        <q-list>
          <q-item
            clickable
            v-close-popup
            @click="allFace"
          >
            <q-item-section>
              <q-item-label>
                Все {{labelFilterSort}}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-close-popup
            @click="followFace"
          >
            <q-item-section>
              <q-item-label>
                {{labelFilterSort}} на которых я подписался
              </q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-btn-dropdown>
    </div>

    <transition
      appear
      enter-active-class="animated backInUp"
    >
      <div
        v-if="true"
        class="menu-filter"
      >
<!--        <SearchBarCustomers />-->
<!--        <SortByCustomers -->
<!--          class="q-mb-md" -->
<!--        />-->
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
        v-if="accountsList.length"
      >
        <transition-group
          appear
          enter-active-class="animated backInUp"
          leave-active-class="animated backInUp"
        >
          <CustomerItem
            v-for="account in accountsList"
            :key="account.id"
            :slug="account.id"
            :rating="account.rating"
            :username="account.username"
            :reviews="account.reviews"
            :role="account.role"
            class="customerList"
          />
       </transition-group>
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

      <div v-if="!accountsList.length">
        <q-banner dense class="bg-grey-3 text-center q-ma-md">
          <h5>Ничего не найдено</h5>
        </q-banner>
      </div>

    </q-list>
  </q-page>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'
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
    computed: {
      ...mapGetters('customers', ['customers', 'isLoading', 'showFilterSortPanel']),
      ...mapGetters('authorization', ['customer', 'performer']),
      ...mapState('authorization', ['performers', 'customers', 'accountsCount']),
      labelToggle() {
        const message = !this.showFilterSortPanel ? 'показать' : 'спрятать'
        return `${message} фильтр поиска и сортировки клиентов`
      },
      showFilterSort: {
        get() {
          return this.showFilterSortPanel
        },
        set(statusToggleCustomer) {
          console.log(statusToggleCustomer)
          this.setShowFilterSortPanel(statusToggleCustomer)
        }
      },
      // В зависимости от роли выбираем мастера или клиенты в названии
      labelFilterSort() {
        return this.customer ? 'мастера' : 'клиенты'
      },
      // В зависимости от ролли возвращаем нудный массив
      accountsList() {
        return this.customer ? this.performers : this.customers
      }
    },
    methods: {
      ...mapActions('customers', [
        'initialCustomers',
        'setShowFilterSortPanel',
        'initialStatusToggleCustomer'
      ]),
      ...mapActions('authorization', [
        'getAllPerformers',
        'getAllCustomers'
      ]),
      // все лица
      allFace() {
        console.log('all face')
      },
      // лица на которых я подписан
      followFace(){
        console.log('follow face')
      },
      // Бесконечная загрузка метод скролла
      loadMore (index, done) {
        console.log('load scroll')
        // Чтобы первый раз не пролетел мимо скролл))
        if (this.accountsList.length === 0) {
          this.$refs.infiniteScroll.resume()
          done()
          return
        }

        console.log('load scroll112')

        // Если с количество найденных заказов больше чем прогружено то запускаем заново
        if (this.accountsCount > this.accountsList.length) {
          console.log('this.accountsList.length1: ', this.accountsList.length)
          this.$store.commit('authorization/setOffsetAccount', 2)
          this.loadAccounts()
            .then(() => {
              console.log('done 1')
              done()
            })
        } else if (this.accountsList.length >= this.accountsCount) {
          console.log('this.accountsList.length2: ', this.accountsList.length)
          this.$refs.infiniteScroll.stop()
        }
      },
      // Подгрузка данных
      loadAccounts() {
        // console.log(this.customer)
        // console.log(this.performer)
        if (this.customer) {
          return this.getAllPerformers()
        } else {
          return this.getAllCustomers()
        }
      }
    },
    mounted() {
      // Cбрасываем старые данные если переходим например с другого роута
      this.$store.commit('authorization/resetStateAccounts')
      // запрос на клиентов или мастеров в зависимости от какой ролли мы заходим
      // подгрузка кастомеров
      // Узнаем в какой мы роли и в зависимости от неё запускаем нужный экшен
      this.loadAccounts()
      // this.initialCustomers()
      // // инициализация состояния тогла из локалсториджа
      // this.initialStatusToggleCustomer()
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
