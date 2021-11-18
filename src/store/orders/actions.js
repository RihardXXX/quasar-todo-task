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
  // В каждом заказе показывать кто подал заявку для кастомера видит только кастомер +
  // добавить модалку для подачи заявки +
  // добавить кнопки для заявки отклонить и принять заявку +
  // Добавить кнопку зайти на страницу перформера +
  // добавить модалку для выбора мастер в рамках текущего заказа +
  // Добавить две кнопки выбрать мастера и модалку вы уверены что выбираете этого мастера +
  // Реализовал отклонение мастера +
  // Реализовать победителя
  // Выбрать мастера и положить его в массив виктори
  // очистить массив с заявками
  // поменять заказу статус на в работе

  // Сделать страницу создания заявки кастомером

  // выбрать одного участника и когда он выбран положить его в победители
  // поставить галочку выбран и победители и галочку в работе
  // сделать проверку на кастомера, чтобы два раза один и тот же не могу подавать
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

export const selectPerformer = ({ commit }, slug) => {

}
