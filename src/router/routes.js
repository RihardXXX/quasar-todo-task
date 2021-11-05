
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageIndex.vue')
      },
      {
        path: 'orders',
        component: () => import('pages/PageOrders.vue')
      },
      {
        path: 'order',
        component: () => import('pages/PageOrderCreate'),
      },
      {
        path: 'order/:slug',
        component: () => import('pages/PageOrder.vue'),
      },
      {
        path: 'order/:slug/edit',
        component: () => import('pages/PageOrderEdit'),
      },
      {
        path: 'customers',
        component: () => import('pages/PageCustomers.vue')
      },
      {
        path: 'customer/:slug',
        component: () => import('pages/PageCustomer.vue')
      },
      {
        path: 'performers',
        component: () => import('pages/PagePerformers.vue')
      },
      {
        path: 'performer/:slug',
        component: () => import('pages/PagePerformer.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
