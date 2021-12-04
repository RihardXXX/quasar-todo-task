
// получние текущего кастомера
import {customers} from "src/store/customers/getters";

export const getCurrentCustomerStart = (state) => {
  state.isLoading = true
  state.error = null
}

export const getCurrentCustomerSuccess = (state, currentCustomer) => {
  state.isLoading = false
  state.error = null
  state.currentCustomer = currentCustomer
}

export const getCurrentCustomerFailure = (state, error) => {
  state.isLoading = false
  state.error = error
}

// устанавливаем поисковую строку для поиска клиентов в глобальное состоние
export const setSearchNameCustomer = (state, searchCustomer) => {
  state.searchCustomer = searchCustomer
}

// поиск клиентов по имени
export const filteredCustomersStart = (state) => {
  state.isLoading = true
  state.error = null
  state.customers = []
}

export const filteredCustomersSuccess = (state, searchCustomerName) => {
  state.isLoading = false
  state.error = null
  console.log('search name: ', searchCustomerName)
  state.customers = state.server
    .filter(customer => customer.username.toLowerCase().includes(searchCustomerName.toLowerCase()))
}

export const filteredCustomersFailure = (state, error) => {
  state.isLoading = false
  state.error = null
}


// иницилазиация кастомеров при первичной отрисовке с фейкогового сервера
export const  setInitialCustomers = (state) => {
  state.customers = [...state.server]
}

// устанавливаем тип сортировки клиентов
export const setSortType = (state, sortType) => {
  console.log(sortType)
  state.sortType = sortType
}

// мутация на измненения состояния тогла показа фильтра поиска и сортировки кастомеров
export const setShowFilterSortPanel = (state, statusToggleCustomer) => {
  state.showFilterSortPanel = statusToggleCustomer
}
