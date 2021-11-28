
// получние текущего кастомера
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
