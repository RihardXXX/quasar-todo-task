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

        <q-toolbar-title class="absolute-center">
           05 Мастер
        </q-toolbar-title>

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

  export default {
    name: 'MainLayout',

    data () {
      return {
        leftDrawerOpen: false,
        isLoggedIn: true,
        menuBar: [
          {
            id: 0,
            title: 'Заказы на работу',
            icon: 'work',
            path: '/orders'
          },
          {
            id: 1,
            title: 'Клиенты',
            icon: 'people',
            path: '/customers'
          },
          {
            id: 2,
            title: 'Мастера',
            icon: 'engineering',
            path: '/performers'
          },
        ],
        menuNotAuthorization: [
          {
            id: 0,
            title: 'Регистрация',
            icon: 'app_registration',
            path: '/signUp'
          },
          {
            id: 1,
            title: 'Войти',
            icon: 'login',
            path: '/signIn'
          }
        ]
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
