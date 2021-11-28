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


// Закомитить работу
// добить мутации и тп
// закончить с поиском клиентов

// сортировка клиентов по имени
export const filteredCustomers = ({commit, state}) => {

}
