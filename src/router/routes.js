
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
      {
        path: 'customers', // список заказчиков
        component: () => import('pages/PageCustomers.vue')
      },
      {
        path: 'customer/:slug', // страница с отзывами и рейтингом заказчика
        component: () => import('pages/PageCustomer.vue')
      },
      {
        path: 'performers', // список мастеров исполнителей
        component: () => import('pages/PagePerformers.vue')
      },
      {
        path: 'performer/:id', // индивидуальная страница с отзывами и рейтингом мастера
        component: () => import('pages/PagePerformer.vue')
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
        path: 'my-orders', // чат с определенным челом
        component: () => import('pages/PageMyOrders')
      },
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
