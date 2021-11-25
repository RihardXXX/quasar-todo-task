// получение всей информации об одном заказе
import {setProposalCurrentOrderFailure} from "src/store/orders/mutations";

export const getCurrentOrder =  ({state, commit}, slug) => {
  commit('getCurrentOrderStart')
  // console.log('slug: ', slug)
  // console.log('state: ', state)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentOrder = state.orders.find(order => order.id === +slug)
      resolve(currentOrder)
    }, 2000)
  })
    .then((currentOrder) => {
    commit('getCurrentOrderSuccess', currentOrder)
  })
    .catch((err) => {
      commit('getCurrentOrderFailure', err)
    })


  // console.log('11: ', currentOrder)

}

// подача заявки перформера на заказ кастомера кладём в массив

export const addProposal = ({state, commit}, {performer, currentOrder}) => {


  // сделать блок с лицом выполняющим работу для кастомера +

  // кнопку подать заявку сделать меньше +

  // Сделать страницу создания заявки кастомером +

  // создать страницу редактирования заказа +

  // создать мастера страницу


  // добавить чат общий
  // индивидуальные чаты

  commit('setProposalCurrentOrderIsLoading')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // копируем массив с заявками и кладёт туда заявку с новым перформером
      const newListPerformer = [...currentOrder.listOfPerformers, performer]

      // создаём новый текущий заказ кладём старый но меняем поле массива с заказами
      const newCurrentOrder = {
        ...currentOrder,
        listOfPerformers: newListPerformer
      }
      resolve(newCurrentOrder)
    }, 2000)
  })
    .then((newCurrentOrder) => {
      // кладём в текущий заказ обновленный заказ с предлодежением перформера
      commit('setProposalCurrentOrder', newCurrentOrder)
      // отправляем новый текущий заказ с предложенными перформерами в состояние
      commit('updateOrders', newCurrentOrder)
  })
    .catch((err) => {
      commit('setProposalCurrentOrderFailure', err)
  })



}

// отклонение заявки определённого мастера
export const rejectPerformer = ({ commit }, idPerformer) => {
  commit('rejectPerformerStart')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(idPerformer)
    }, 2000)
  })
    .then((idPerformer) => {
      commit('rejectPerformerSuccess', idPerformer)
    })
    .catch((err) => {
      commit('rejectPerformerFailure', err)
    })
}

// выбрать исполнителя
export const selectPerformer = ({ commit }, idPerformer) => {
  commit('selectPerformerStart')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(idPerformer)
    }, 2000)
  })
    .then((idPerformer) => {
      commit('selectPerformerSuccess', idPerformer)
    })
    .catch((err) => {
      commit('selectPerformerFailure', err)
    })
}

// создать заказ
export const createOrder = ({ commit }, order) => {
  commit('createOrderStart')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(order)
    }, 2000)
  })
    .then((order) => {
      commit('createOrderSuccess', order)
    })
    .catch((error) => {
      commit('createOrderFailure', error)
    })
}

// редактировать заказ
export const editOrder = ({ commit }, order) => {
  commit('editOrderStart')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(order)
    }, 2000)
  })
    .then((order) => {
      commit('editOrderSuccess', order)
    })
    .catch((error) => {
      commit('editOrderFailure', error)
    })
}

