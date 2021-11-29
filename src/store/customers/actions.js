// получение всей информации об текущем клиенте

export const getCurrentCustomer =  ({state, commit}, slug) => {
  // console.log('slug: ', slug)
  // console.log('state: ', state)
  commit('getCurrentCustomerStart')

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const currentCustomer = state.customers.find(customer => customer.id === +slug)
      resolve(currentCustomer)
    }, 2000)
    // const currentCustomer = state.customers.find(customer => customer.id === +slug)
    // resolve(currentCustomer)

  })
    .then((currentCustomer) => {
      commit('getCurrentCustomerSuccess', currentCustomer)
    })
    .catch((error) => {
      commit('getCurrentCustomerFailure', error)
      reject(error)
    })

  // console.log('11: ', currentOrder)
}

// поиск клиентов строку устанавливаем
export const setSearchNameCustomer = ({commit}, value) => {
  commit('setSearchNameCustomer', value)
}

// сортировка клиентов по имени
export const filteredCustomers = ({commit, state}) => {
  commit('filteredCustomersStart')
  return new Promise(resolve => {
    const searchCustomerName = state.searchCustomer
    resolve(searchCustomerName)
  })
    .then((searchCustomerName) => {
      commit('filteredCustomersSuccess', searchCustomerName)
    })
    .catch((error) => {
      commit('filteredCustomersFailure', error)
    })
}

// инициализация первичной отрисовки клиентов
export const initialCustomers = ({commit}) => {
  commit('setInitialCustomers')
}
