
const routes = [
  {
    path: '',
    component: () => import('layouts/Layout.vue'),
    children: [
      // Эти роуты открыть для не авторизованных
      {
        path: 'signUp',
        name: 'signUp',
        component: () => import('pages/SignUp')
      },
      {
        path: 'signIn',
        name: 'signIn',
        component: () => import('pages/SignIn')
      },
      // Эти нижние роуты закрыть для тех кто не авторизован
      {
        path: '',
        name: 'index',
        component: () => import('pages/PageIndex.vue')
      },
      {
        path: 'orders', //  все заказы список
        component: () => import('pages/PageOrders.vue')
      },
      {
        path: 'order', // создание заказа
        name: 'order',
        component: () => import('pages/PageOrderCreate'),
      },
      {
        path: 'orders/:slug', // описание одного заказа
        component: () => import('pages/PageOrder.vue'),
      },
      {
        path: 'order/:slug/edit', // редактирование заказа автором
        component: () => import('pages/PageOrderEdit'),
      },
      { // компонент будет переиспользуемый
        path: 'workers', // список заказчиков или клиентов
        component: () => import('pages/PageWorkers.vue')
      },
      {
        path: 'customer/:slug', // страница с отзывами и рейтингом заказчика
        component: () => import('pages/PageCustomer.vue')
      },
      // {
      //   path: 'performers', // список мастеров исполнителей
      //   component: () => import('pages/PagePerformers.vue')
      // },
      {
        path: 'account/:id', // индивидуальная страница с отзывами и рейтингом мастера
        component: () => import('pages/PageAccount.vue')
      },
      {
        path: 'chats', // список чатов
        component: () => import('pages/PageChats.vue')
      },
      {
        path: 'chat/:slug', // чат с определенным челом
        component: () => import('pages/PageChat.vue')
      },
      {
        path: 'my-orders', // мои заказы для кастомера и перформера
        component: () => import('pages/PageMyOrders')
      },
      {
        path: 'who-liked',
        name: 'who-liked',
        component: () => import ('pages/PageWhoLikedAccounts')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
