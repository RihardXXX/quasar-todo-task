// получение всей информации об одном заказе
export const getCurrentOrder =  ({state, commit}, slug) => {
  commit('getCurrentOrderStart')
  // console.log('slug: ', slug)
  // console.log('state: ', state)
  const currentOrder = state.orders.find(order => order.id === +slug)
  // console.log('11: ', currentOrder)
  commit('getCurrentOrderSuccess', currentOrder)
}

// подача заявки перформера на заказ кастомера кладём в массив

export const addProposal = ({state, commit}, {performer, idCurrentOrder}) => {

}
