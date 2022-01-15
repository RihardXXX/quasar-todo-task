// import { LocalStorage, uid as generateId } from 'quasar'
// // import { getDatabase, ref, onValue, set, update} from "firebase/database";
//
// // получение всей информации об одном заказе
// import {setProposalCurrentOrderFailure} from "src/store/orders/mutations";
//
// // Сделать подгрузку текущего заказа из сервера
// export const getCurrentOrder =  ({state, commit, rootState}, slug) => {
//   commit('getCurrentOrderStart')
//   console.log('slug: ', slug)
//   // console.log('state: ', state)
//   return new Promise((resolve, reject) => {
//     const uid = rootState?.authorization?.currentUser?.uid
//
//     const db = getDatabase();
//     const currentUserOrders = ref(db, `orders/${uid}/${slug}`);
//     onValue(currentUserOrders, (snapshot) => {
//       const data = snapshot.val();
//       const currentOrder = {
//         id: slug,
//         ...data
//       }
//       console.log('data: ', data);
//       console.log('currentOrder', currentOrder);
//       commit('getCurrentOrderSuccess', currentOrder)
//     });
//   })
// }
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
// // подача заявки перформера на заказ кастомера кладём в массив
//
// export const addProposal = ({state, commit}, {performer, currentOrder}) => {
//
//   commit('setProposalCurrentOrderIsLoading')
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // копируем массив с заявками и кладёт туда заявку с новым перформером
//       const newListPerformer = [...currentOrder.listOfPerformers, performer]
//
//       // создаём новый текущий заказ кладём старый но меняем поле массива с заказами
//       const newCurrentOrder = {
//         ...currentOrder,
//         listOfPerformers: newListPerformer
//       }
//       resolve(newCurrentOrder)
//     }, 2000)
//   })
//     .then((newCurrentOrder) => {
//       // кладём в текущий заказ обновленный заказ с предлодежением перформера
//       commit('setProposalCurrentOrder', newCurrentOrder)
//       // отправляем новый текущий заказ с предложенными перформерами в состояние
//       commit('updateOrders', newCurrentOrder)
//   })
//     .catch((err) => {
//       commit('setProposalCurrentOrderFailure', err)
//   })
//
//
//
// }
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
// // создать заказ
// export const createOrder = ({ commit, rootState }, order) => {
//   return new Promise((resolve) => {
//     commit('createOrderStart')
//
//     // формируем id и кладём его
//     const id = generateId()
//     const newOrder = {}
//     newOrder[id] = {...order}
//     const uid = rootState?.authorization?.currentUser?.uid
//
//     //сформировать нормальный объект для firebase в самом компоненте
//     const db = getDatabase();
//     update(ref(db, `orders/${uid}`), newOrder)
//       .then(() => {
//         // commit('createOrderSuccess')
//       })
//       .catch((error) => {
//         commit('createOrderFailure', error)
//       })
//   })
//
// }
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
// // первое заполнение заказов из фейковго сервера
// export  const initialOrders = ({ commit }) => {
//   commit('initialOrdersSet')
// }
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
