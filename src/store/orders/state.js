

export default function () {
  return {
    isLoading: false,
    error: null,
    // Текущий заказ
    currentOrder: undefined,
    // Список мастеров по текущему заказу
    listOfPerformersOnCurrentOrder: [],
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
    // Все заказы
    orders: [],
  }
}

