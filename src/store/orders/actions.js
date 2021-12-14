import { LocalStorage, uid as generateId } from 'quasar'
import { getDatabase, ref, onValue, set, update} from "firebase/database";

// получение всей информации об одном заказе
import {setProposalCurrentOrderFailure} from "src/store/orders/mutations";
// import {myOrders} from "src/store/orders/getters";

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

// Получение только моих заказов для кастомера то есть клиента
export function getAllMyOrders({commit, state}, uid) {
  // console.log('getAllMyOrders')
  // const uid  = rootState.authorization.currentUser ? rootState.authorization.currentUser.uid : undefined

  const db = getDatabase();
  const currentUserOrders = ref(db, `orders/${uid}`);
  onValue(currentUserOrders, (snapshot) => {
    const data = snapshot.val();
    // разобраться с Джейсоном
    console.log('data: ', data)
    let myOrders = []
    Object.keys(data).forEach(key => {
      const order = {
        id: key,
        ...data[key]
      }
      myOrders.push(order)
    })
    console.log('myOrders: ', myOrders)
    commit('setMyOrders', [...myOrders])
    // Сделай коммит для сохранения заказов кастомера
    // updateOrders(postElement, data);
  });
}

// подача заявки перформера на заказ кастомера кладём в массив

export const addProposal = ({state, commit}, {performer, currentOrder}) => {

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
export const createOrder = ({ commit, rootState }) => {
  return new Promise((resolve) => {
    commit('createOrderStart')
    // генератор id
    const idOrder = generateId()
    let newOrder = {}
    newOrder[idOrder] = {
      title: "Починить котёл",
      description: "Описание000000000",
      body: "В общем котёл сам по себе выключается",
      price: 100,
      address: "Гагаринский дом 3",
      category: "сантехника",
      dueDate: "01.01.2021г.",
      dueTime: "15:44",
      listOfPerformers: "[]",
      selectedPerformer: false,
      status: "свободен",
      victory: "[]"
    }

    console.log('start', newOrder)
    const uid = rootState?.authorization?.currentUser?.uid
    console.log('rootState', rootState)
    console.log('uid', uid)

    //сформировать нормальный объект для firebase в самом компоненте

    const db = getDatabase();
    update(ref(db, `orders/${uid}`), newOrder)
      .then(() => {
        // commit('createOrderSuccess')
      })
      .catch((error) => {
        commit('createOrderFailure', error)
      })
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



