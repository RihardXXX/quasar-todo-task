<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
         <q-item
           clickable
           to="/"
         >
           <span class="bannerMenu">
             05 Мастер
           </span>
         </q-item>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Меню
        </q-item-label>
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
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

  export default {
    name: 'MainLayout',

    data () {
      return {
        leftDrawerOpen: false,
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
        ]
      }
    }
  }
</script>

<style scoped>
  .bannerMenu {
    color: white;
  }
</style>
