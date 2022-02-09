// Получение текущего заказа
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

// Получение списка мастеров по текущему заказу
export function getListOfPerformersOnCurrentOrderStart(state) {
  state.isLoading = true
  state.error = null
}

export function getListOfPerformersOnCurrentOrderSuccess(state, listOfPerformersOnCurrentOrder) {
  state.isLoading = false
  state.error = null
  state.listOfPerformersOnCurrentOrder = [...listOfPerformersOnCurrentOrder]
}

export function getListOfPerformersOnCurrentOrderFailure(state, error) {
  state.isLoading = false
  state.error = error
}

// Подача заявки на заказ
export function addProposalStart(state) {
  state.isLoading = true
  state.error = null
}

export function addProposalSuccess(state, currentOrder) {
  state.isLoading = false
  state.error = null
  state.currentOrder = {...currentOrder}
}

export function addProposalFailure(state, error) {
  state.isLoading = false
  state.error = error
}

// лайк поставить заказу
export function likedOrdersStart(state){
  state.isLoading = true
  state.error = null
}

export function likedOrdersSuccess(state){
  state.isLoading = false
  state.error = null
}
export function likedOrdersFailure(state, error){
  state.isLoading = false
  state.error = error
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

export const selectPerformerSuccess = (state) => {
  state.isLoading = false
  state.error = null
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

export const createOrderSuccess = (state) => {
  state.isLoading = false
  state.error = null
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

// Подгрузка всех заказов
export const  getAllOrdersStart = (state) => {
  state.isLoading = true
  state.error = null
}

export const  getAllOrdersSSuccess = (state, {orders, ordersCount}) => {
  state.isLoading = false
  state.error = null
  state.ordersCount = ordersCount
  state.orders = [...state.orders,...orders]
}

export const  getAllOrdersFailure = (state, error) => {
  state.isLoading = false
  state.error = error
}

// Для пагинации офссет увеличение
export const setOffset = (state, num) => {
  state.offset += num
}

// Сброс всего состояния по заказам чтобы при переходе на роут и тп случаях не было ошибок
export const resetStateOrders = (state) => {
  state.orders = []
  state.isLoading = false
  state.error = null
  state.limit = 20
  state.offset = 0
  state.ordersCount = 0
}

// Добавление параметров для поискового запроса в заказах со стиранием старого
export const addParamsForOrders = (state, nameParams) => {
  state.params = { ...nameParams }
}

// мерджим в существующий объект параметров
export const mergeNewParams = (state, nameParams) => {
  state.params = { ...state.params,...nameParams }
}

// Сброс параметров для поискового запроса
export const resetParamsForOrders = (state) => {
  state.params = {}
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

// установка фильтра сортировки в состянии
export const setSort = (state, sortName) => {
  console.log('sort name: ', sortName)
  state.sortType = sortName
}

// установка показа состояния меню поиска и сортировке в заказах
export const setShowFilterSortPanel = (state, status) => {
  state.showFilterSortPanel = status
}

// установка заказов текущего кастомера клиента
export function setMyOrders (state, myOrders) {
  state.myOrders = myOrders
}
