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

export const addProposal = ({state, commit}, {performer, currentOrder}) => {
  // найти заказ по айди +
  // положить перформера в массив желающих +
  // далее заспредить и отправить в мутации +
  // установить лоадер +
  // сделать общий список кастомеров со рейтингом и отзывами +
  // создать мутации и экшены для текущего кастомера +
  // Сделать страницу кастомера и там показывать внизу заказы всю инфу +
  // В каждом заказе показывать кто подал заявку для кастомера видит только кастомер

  // Сделать страницу создания заявки кастомером

  // выбрать одного участника и когда он выбран положить его в победители
  // поставить галочку выбран и победители и галочку в работе
  // сделать проверку на кастомера, чтобы два раза один и тот же не могу подавать
  // добавить чат общий
  // индивидуальные чаты

  // копируем массив с заявками и кладёт туда заявку с новым перформером
  const newListPerformer = [...currentOrder.listOfPerformers, performer]

  // создаём новый текущий заказ кладём старый но меняем поле массива с заказами
  const newCurrentOrder = {
    ...currentOrder,
    listOfPerformers: newListPerformer
  }

  // кладём в текущий заказ обновленный заказ с предлодежением перформера
  commit('setProposalCurrentOrder', newCurrentOrder)
  // отправляем новый текущий заказ с предложенными перформерами в состояние
  commit('updateOrders', newCurrentOrder)
}
