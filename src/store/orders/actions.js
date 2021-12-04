import { LocalStorage } from 'quasar'

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

  // создать фильтр поиска заказа +

  // добавить баннер заказов не найдено +

  // сделать аналогичный фильтр для мастеров

  // создать фильтр перформеров

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

// заносим данные в поисковую строку поиска заказов
export const setSearchOrderString = ({ commit }, text) => {
  commit('setSearchOrderString', text)
}

// первое заполнение заказов из фейковго сервера
export  const initialOrders = ({ commit }) => {
  commit('initialOrdersSet')
}

// фильтрация заказов по поисковой строке
export const filteredOrders = ({ commit, state }) => {
  commit('filteredOrdersStart')
  return new Promise((resolve) => {
      const text = state.searchOrder
      resolve(text)
  })
    .then(text => {
      commit('filteredOrdersSuccess', text)
    })
    .catch(error => {
      commit('filteredOrdersFailure', error)
    })
}

// сортировка заказов
export const setSort = ({commit}, sortName) => {
  commit('setSort', sortName)
}

// установка состояния тогла переключателя показа меню поиска и сортировки
export const setShowFilterSortPanel = ({commit}, statusToggleOrder) => {
  commit('setShowFilterSortPanel', statusToggleOrder)
  LocalStorage.set('statusToggleOrder', statusToggleOrder)
}

// инициализация состояния из локалсториджа показа и сокрытия панели фильтра и сортировки
export const initialToggleStatus = ({commit}) => {
  const statusToggleOrder = LocalStorage.getItem('statusToggleOrder')
  commit('setShowFilterSortPanel', statusToggleOrder)
}



