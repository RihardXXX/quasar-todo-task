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
export const selectPerformerStart = (state, slug) => {

}

export const selectPerformerSuccess = (state, slug) => {

}

export const selectPerformerFailure = (state, slug) => {

}
