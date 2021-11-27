export const getCurrentOrderStart = (state) => {
  state.isLoading = true
  state.error = null
}

export const getCurrentOrderSuccess = (state, payload) => {
  state.isLoading = false
  state.error = null
  state.currentOrder = {...payload}
}

export const getCurrentOrderFailure = (state, payload) => {
  state.isLoading = false
  state.error = payload
}

// кладём новый текущий заказ в котором в массив заявок от перформеров лежит предложение
export const setProposalCurrentOrderIsLoading = (state) => {
  state.isLoading = true
  state.error = null
}

export const setProposalCurrentOrder = (state, currentOrder) => {
  state.isLoading = false
  state.error = null
  state.currentOrder = currentOrder
}

// обновление состояние заказов
export const updateOrders = (state, currentOrder) => {
  // текущий заказ у которого в с массивом заполненных перформеров
  state.orders = state.orders.map(order => {
    if(order.id === currentOrder.id){
      order = currentOrder
    }
    return order
  })
}

export const setProposalCurrentOrderFailure = (state, error) => {
  state.isLoading = false
  state.error = error
}

// отклонить предложение мастера и удалить его из списка
export const rejectPerformerStart = (state) => {
  state.isLoading = true
  state.error = null
}

export const rejectPerformerSuccess = (state, idPerformer) => {
  state.isLoading = false
  state.error = null
  state.currentOrder.listOfPerformers = state.currentOrder
    .listOfPerformers
    .filter(performer => performer.id !== idPerformer)
  // console.log(state)
  // console.log(idPerformer)
}

export const rejectPerformerFailure = (state, error) => {
  state.isLoading = false
  state.error = error
}

// выбрать предложение мастера и сделать его победителем
export const selectPerformerStart = (state) => {
  state.isLoading = true
  state.error = null
}

export const selectPerformerSuccess = (state, idPerformer) => {
  state.isLoading = false
  state.error = null
  console.log('idPerformer', idPerformer)
  const victoryPerformer = state.currentOrder
    .listOfPerformers.find(performer => performer.id === idPerformer)

  state.currentOrder = {
    ...state.currentOrder,
    listOfPerformers: [],
    selectedPerformer: true,
    status: 'в работе',
    victory: [victoryPerformer]
  }

  // state.currentOrder = {}

  // console.log(state)
}

export const selectPerformerFailure = (state, error) => {
  state.isLoading = false
  state.error = error
}

// создаём новый заказ
export const createOrderStart = (state) => {
  state.isLoading = true
  state.error = null
}

export const createOrderSuccess = (state, order) => {
  state.isLoading = false
  state.error = null
  state.orders = [order, ... state.orders]
}

export const createOrderFailure = (state, error) => {
  state.isLoading = false
  state.error = error
}

// редактируем текущий заказ
export const editOrderStart = (state) => {
  state.isLoading = true
  state.error = null
}

export const editOrderSuccess = (state, order) => {
  state.isLoading = false
  state.error = null
  state.orders = state.orders.map(item => {
    if(item.id === order.id) {
      item = {...order}
    }
    return item
  })
  // state.orders = [order, ... state.orders]
}

export const editOrderFailure = (state, error) => {
  state.isLoading = false
  state.error = error
}

// установка в глобальный стейт поисковой строки
export const setSearchOrderString = (state, text) => {
  state.searchOrder = text
}

// Инициализация заказов с фейкового сервера при первичной отрисовке заказов
export const  initialOrdersSet = (state) => {
  state.orders = [...state.server]
}

// фильтрация заказов
export const filteredOrdersStart = (state) => {
  state.isLoading = true
  state.error = null
  state.orders = []
}

export const filteredOrdersSuccess = (state, text) => {
  state.isLoading = false
  state.error = null
  state.orders = state.server.filter(order => order.title.toLowerCase().includes(text.toLowerCase()))
}

export const filteredOrdersFailure = (state, error) => {
  state.isLoading = false
  state.error = error
}
