<template>
  <q-layout
    view="hhh lpR fFf"
  >
    <q-header
      elevated
      bordered
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title
          v-if="$q.platform.is.desktop || ($q.platform.is.mobile && !isLoggedIn)"
          :class="{
          'absolute-center': !isLoggedIn
        }">
           05 Мастер
        </q-toolbar-title>

        <q-item
          v-if="isLoggedIn"
          class="absolute-right"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ username }}
            </q-item-label>
          </q-item-section>
          &nbsp;
          <q-item-section>
            <q-item-label>
              {{ role }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-btn
              color="deep-orange"
              glossy
              label="выйти"
              @click="exit"
            />
          </q-item-section>
        </q-item>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="220"
      show-if-above
      bordered
      content-class="bg-grey-3"
    >
      <q-list>

        <q-item-label
          header
          class="text-grey-8"
        >
          Меню
        </q-item-label>
          <template v-if="isLoggedIn">
            <q-item
              v-for="item in menuBar"
              :key="item.id"
              exact
              clickable
              :to="item.path"
            >
              <q-item-section
                avatar
              >
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ item.title }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </template>
          <template v-else>
            <q-item
              v-for="item in menuNotAuthorization"
              :key="item.id"
              exact
              clickable
              :to="item.path"
            >
              <q-item-section
                avatar
              >
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ item.title }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </template>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      elevated
      bordered
    >
      <template v-if="isLoggedIn">
        <q-tabs>
          <q-route-tab
            v-for="item in menuBar"
            :key="item.id"
            exact
            :to="item.path"
            :icon="item.icon"
            :label="item.title"
          />
        </q-tabs>
      </template>
      <template v-else>
        <q-tabs>
          <q-route-tab
            v-for="item in menuNotAuthorization"
            :key="item.id"
            exact
            :to="item.path"
            :icon="item.icon"
            :label="item.title"
          />
        </q-tabs>
      </template>

    </q-footer>
  </q-layout>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import { QSpinnerGears } from 'quasar'


  export default {
    name: 'MainLayout',

    data () {
      return {
        leftDrawerOpen: false,
      }
    },
    computed: {
      ...mapState('authorization', ['isLoggedIn', 'isLoading']),
      ...mapGetters('authorization', ['username', 'customer', 'performer', 'role']),
      menuBar() {
        // сделаем топорно ))

       return this.customer
         ? [
             {
               id: 0,
               title: 'Главная страница',
               icon: 'home',
               path: '/'
             },
             {
               id: 1,
               title: 'Все заказы',
               icon: 'work',
               path: '/orders'
             },
             {
               id: 3,
               title: 'Мастера',
               icon: 'engineering',
               path: '/workers'
             },
             {
               id: Math.random(),
               title: 'Мои заказы',
               icon: 'work',
               path: '/my-orders'
             },
             {
               id: Math.random(),
               title: 'Создать заказ',
               icon: 'add',
               path: '/order'
             },
             {
               id: Math.random(),
               title: 'чаты',
               icon: 'chat',
               path: '/chats'
             },
         ]
         : [
             {
               id: 0,
               title: 'Главная страница',
               icon: 'home',
               path: '/'
             },
             {
               id: 1,
               title: 'Все заказы',
               icon: 'work',
               path: '/orders'
             },
             {
               id: 2,
               title: 'Клиенты',
               icon: 'people',
               path: '/workers'
             },
             {
               id: Math.random(),
               title: 'Заказы на которые подал заявки',
               icon: 'work',
               path: '/my-orders'
             },
             {
               id: Math.random(),
               title: 'чаты',
               icon: 'chat',
               path: '/chats'
             },
         ]
      },
      menuNotAuthorization() {
        return [
          {
            id: 0,
            title: 'Главная страница',
            icon: 'home',
            path: '/'
          },
          {
            id: 1,
            title: 'Регистрация',
            icon: 'app_registration',
            path: '/signUp'
          },
          {
            id: 2,
            title: 'Войти',
            icon: 'login',
            path: '/signIn'
          }
        ]
      }
    },
    methods: {
      ...mapActions('authorization', ['logoutUser']),
      exit() {
        // console.log('exit')
        // спиннер загрузки
        this.$q.loading.show({
          spinner: QSpinnerGears,
          spinnerColor: 'red',
          message: 'Идёт загрузка'
        })
        this.logoutUser()
          .then(status => {
            if (status === 'exit') {
              this.$router.push('/signIn')
                .catch(() => {})
              this.$q.loading.hide()
            }
          })

      }
    }
  }
</script>

<style scoped>

  @media screen and (min-width: 768px){
    .q-footer {
      display: none;
    }
  }
</style>
