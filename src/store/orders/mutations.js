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
export const setProposalCurrentOrder = (state, currentOrder) => {
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
