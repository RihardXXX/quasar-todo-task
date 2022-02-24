<template>
  <q-page class="q-pa-md">

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
        v-if="customers.length"
      >

        <transition-group
          appear
          enter-active-class="animated backInUp"
          leave-active-class="animated backInUp"
        >

          <CustomerItem
            v-for="customer in customers"
            :key="customer.id"
            :slug="customer.id"
            :rating="customer.rating"
            :username="customer.username"
            :reviews="customer.reviews"
            class="customerList"
          />

       </transition-group>

      </template>
      <q-banner
        v-else-if="!customers.length && !isLoading"
        class="bg-primary text-white text-center"
      >
        <h6 class="q-ma-none">
          Клиентов пока нет
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
  </q-page>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
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
      }
    },
    methods: {
      ...mapActions('customers', [
        'initialCustomers',
        'setShowFilterSortPanel',
        'initialStatusToggleCustomer'
      ]),
      // все лица
      allFace() {
        console.log('all face')
      },
      // лица на которых я подписан
      followFace(){
        console.log('follow face')
      }
    },
    mounted() {
      // запрос на клиентов или мастеров в зависимости от какой ролли мы заходим
      // подгрузка кастомеров
      
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
