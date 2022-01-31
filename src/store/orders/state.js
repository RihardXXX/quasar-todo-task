

export default function () {
  return {
    isLoading: false,
    error: null,
    currentOrder: undefined,
    searchOrder: '',
    sortType: '',
    showFilterSortPanel: true,
    // эта шл]па нужна для пагинации
    limit: 20,
    offset: 0,
    ordersCount: 0,
    // для динамического добавления параметров поиска
    params: {},
    // заказы текущего кастомера или перформера
    myOrders: [],
    orders: [],
  }
}

