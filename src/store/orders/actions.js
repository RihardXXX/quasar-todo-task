import { api, url } from 'boot/axios';

// // получение всей информации об одном заказе
// import {setProposalCurrentOrderFailure} from "src/store/orders/mutations";
//
// Сделать подгрузку текущего заказа из сервера
export const getCurrentOrder =  ({commit}, slug) => {
  commit('getCurrentOrderStart')
  return new Promise((resolve, reject) => {
    const urlPath = url.orders.slug(slug)
    api.get(urlPath)
      .then(response => {
        // console.log(response)
        commit('getCurrentOrderSuccess', response.data.order)
        resolve()
      })
      .catch(error => {
        console.log(error)
        commit('getCurrentOrderFailure', error.response.message)
        reject()
      })
  })
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
export const addProposal = ({commit}, slug) => {
  commit('addProposalStart')
  return new Promise((resolve, reject) => {
    const urlPath = url.orders.submitApplication(slug)
    api.patch(urlPath)
      .then(response => {
        console.log(response)
        commit('addProposalSuccess', response.data.order)
        resolve()
      })
      .catch(error => {
        const message = error.response.message
        commit('addProposalFailure', message)
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
// // выбрать исполнителя
// export const selectPerformer = ({ commit }, idPerformer) => {
//   commit('selectPerformerStart')
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(idPerformer)
//     }, 2000)
//   })
//     .then((idPerformer) => {
//       commit('selectPerformerSuccess', idPerformer)
//     })
//     .catch((err) => {
//       commit('selectPerformerFailure', err)
//     })
// }
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
