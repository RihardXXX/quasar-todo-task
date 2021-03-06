import { api, url } from 'boot/axios';

// // получение всей информации об одном заказе
// import {setProposalCurrentOrderFailure} from "src/store/orders/mutations";
//
// Сделать подгрузку текущего заказа из сервера
export const getCurrentOrder =  ({commit, dispatch}, slug) => {
  commit('getCurrentOrderStart')
  return new Promise((resolve, reject) => {
    const urlPath = url.orders.slug(slug)
    api.get(urlPath)
      .then(response => {
        // console.log(response)
        const order = response.data.order
        commit('getCurrentOrderSuccess', order)
        dispatch('getListOfPerformersOnCurrentOrder', order.listOfPerformers)
        resolve()
      })
      .catch(error => {
        console.log(error)
        commit('getCurrentOrderFailure', error.response.message)
        reject()
      })
  })
}

// Получение списка мастеров по текущему заказу
export function getListOfPerformersOnCurrentOrder({commit}, listId) {
  commit('getListOfPerformersOnCurrentOrderStart')
  Promise.all(listId.map(id => api.get(url.userInfo(id))))
    .then(response => {
      const performersCurrentOrder = response.map(ob => ob.data.user)
      commit('getListOfPerformersOnCurrentOrderSuccess', performersCurrentOrder)
    })
    .catch(error => commit('getListOfPerformersOnCurrentOrderFailure', error.response.message))
}

//
// // Получение только моих заказов для кастомера то есть клиента
// export function getAllMyOrders({commit, state}, uid) {
//
//   const db = getDatabase();
//   const currentUserOrders = ref(db, `orders/${uid}`);
//   onValue(currentUserOrders, (snapshot) => {
//     const data = snapshot.val();
//     // разобраться с Джейсоном
//     // console.log('data: ', data)
//     let myOrders = []
//     Object.keys(data).forEach(key => {
//       const order = {
//         id: key,
//         ...data[key]
//       }
//       myOrders.push(order)
//     })
//     // console.log('myOrders: ', myOrders)
//     commit('setMyOrders', [...myOrders])
//     // Сделай коммит для сохранения заказов кастомера
//     // updateOrders(postElement, data);
//   });
// }
//
// подача заявки перформера на заказ кастомера кладём в массив
export const addProposal = ({commit, dispatch}, slug) => {
  commit('addProposalStart')
  return new Promise((resolve, reject) => {
    const urlPath = url.orders.submitApplication(slug)
    api.patch(urlPath)
      .then(response => {
        console.log(response)
        commit('addProposalSuccess', response.data.order)
        dispatch('getCurrentOrder', slug)
        resolve()
      })
      .catch(error => {
        const message = error.response.message
        commit('addProposalFailure', message)
        reject(message)
      })
  })
}

// Поставить лайка текущему заказу
export const likedOrder = ({commit, dispatch}, slug) => {
  commit('likedOrdersStart')
  return new Promise((resolve, reject) => {
    const urlPath = url.orders.liked(slug)

    api.post(urlPath)
      .then(() => {
        // console.log(response)
        commit('likedOrdersSuccess')
        dispatch('getCurrentOrder', slug)
        resolve()
      })
      .catch(error => {
        const message = error.response.message
        commit('likedOrdersFailure', message)
        reject(message)
      })
  })
}

// Поставить лайка текущему заказу
export const dislikedOrder = ({commit, dispatch}, slug) => {
  commit('likedOrdersStart')
  return new Promise((resolve, reject) => {
    const urlPath = url.orders.liked(slug)

    api.delete(urlPath)
      .then(() => {
        // console.log(response)
        commit('likedOrdersSuccess')
        dispatch('getCurrentOrder', slug)
        resolve()
      })
      .catch(error => {
        const message = error.response.message
        commit('likedOrdersFailure', message)
        reject(message)
      })
  })
}
//
// // отклонение заявки определённого мастера
// export const rejectPerformer = ({ commit }, idPerformer) => {
//   commit('rejectPerformerStart')
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(idPerformer)
//     }, 2000)
//   })
//     .then((idPerformer) => {
//       commit('rejectPerformerSuccess', idPerformer)
//     })
//     .catch((err) => {
//       commit('rejectPerformerFailure', err)
//     })
// }
//
// выбрать исполнителя
export const selectPerformer = ({ commit, dispatch }, {id, slugOrder}) => {
  console.log(id, slugOrder)
  commit('selectPerformerStart')
  return new Promise((resolve, reject) => {
    api.post(url.orders.victory, {
      victory: {
        idPerformer: String(id),
        slugOrder: slugOrder
      }
    })
      .then(() => {
        commit('selectPerformerSuccess')
        dispatch('getCurrentOrder', slugOrder)
        resolve()
      })
      .catch((err) => {
        commit('selectPerformerFailure', err.response.message)
        reject()
      })
  })
}
//
// создать заказ
export const createOrder = ({ commit }, order) => {
  commit('createOrderStart')
  return new Promise((resolve, reject) => {
    // console.log('orders: ', order)
    api.post(url.orders.create, { order })
      .then(response => {
        // console.log(response)
        commit('createOrderSuccess')
        resolve(response)
      }).catch(error => {
      const { message } = error.response.data;
        commit('createOrderFailure', message)
        reject(message)
    })
  })

}
//
// // редактировать заказ
// export const editOrder = ({ commit }, order) => {
//   commit('editOrderStart')
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(order)
//     }, 2000)
//   })
//     .then((order) => {
//       commit('editOrderSuccess', order)
//     })
//     .catch((error) => {
//       commit('editOrderFailure', error)
//     })
// }
//
// // заносим данные в поисковую строку поиска заказов
// export const setSearchOrderString = ({ commit }, text) => {
//   commit('setSearchOrderString', text)
// }
//
// подгрузка заказов c пагинацией
export  const getAllOrders = ({ commit, state }) => {
  commit('getAllOrdersStart')
  return new Promise((resolve, reject) => {

    const urlPath = url.orders.list

    const params = {
      limit: state.limit,
      offset: state.offset
    }

    // тут будем мёрджить параметры из стейта при поиске например
    Object.assign(params, state.params)

    api.get(urlPath, { params })
      .then((response) => {
        commit('getAllOrdersSSuccess', {
          orders: response.data.orders,
          ordersCount: response.data.ordersCount
        })
        resolve()
    })
      .catch(error => {
        const { message } = error.response.data;
        commit('getAllOrdersFailure', message)
        reject()
      })
  })
}

// прогрузка моих заказов для кастомера и перформера
export function getMyOrders({commit, state}, { isCustomer }) {
  commit('getMyOrdersStart')
  return new Promise((resolve, reject) => {

    const pathUrl = isCustomer
      ? url.orders.myOrdersForCustomer
      : url.orders.myOrdersForPerformer

    const params = {
      limit: state.limit,
      offset: state.offset
    }

    api.get(pathUrl, { params })
      .then(response => {
        console.log(response)
        const { orders, ordersCount } = response.data
        commit('getMyOrdersSuccess', {
          myOrders: orders,
          ordersCount
        })
        resolve()
      })
      .catch(error => {
        console.log(error)
        const { message } = error.response.data;
        commit('getMyOrdersFailure', message)
        reject()
      })

  })
}

// Функция которая меняет статус заказа на выполнено
export function changeStatusOrderByDone({commit}, slug) {
  commit('changeStatusOrderByDoneStart')
  // console.log(112, slug)
  return new Promise((resolve, reject) => {
    const urlPath = url.orders.setStatusDone(slug)

    api.patch(urlPath)
      .then(response => {
        // console.log(response);
        commit('changeStatusOrderByDoneSuccess', response.data)
        resolve()
    })
      .catch(error => {
        // console.log(error)
        const { message } = error.response.data;
        commit('changeStatusOrderByDoneFailure', message)
        reject(message)
      })
  })
}

//
// // фильтрация заказов по поисковой строке
// export const filteredOrders = ({ commit, state }) => {
//   commit('filteredOrdersStart')
//   return new Promise((resolve) => {
//       const text = state.searchOrder
//       resolve(text)
//   })
//     .then(text => {
//       commit('filteredOrdersSuccess', text)
//     })
//     .catch(error => {
//       commit('filteredOrdersFailure', error)
//     })
// }
//
// // сортировка заказов
// export const setSort = ({commit}, sortName) => {
//   commit('setSort', sortName)
// }
//
// // установка состояния тогла переключателя показа меню поиска и сортировки
// export const setShowFilterSortPanel = ({commit}, statusToggleOrder) => {
//   commit('setShowFilterSortPanel', statusToggleOrder)
//   LocalStorage.set('statusToggleOrder', statusToggleOrder)
// }
//
// // инициализация состояния из локалсториджа показа и сокрытия панели фильтра и сортировки
// export const initialToggleStatus = ({commit}) => {
//   const statusToggleOrder = LocalStorage.getItem('statusToggleOrder')
//   commit('setShowFilterSortPanel', statusToggleOrder)
// }
//
//
//
