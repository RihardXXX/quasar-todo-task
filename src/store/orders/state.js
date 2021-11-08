import {getCurrentOrderStart} from "src/store/orders/mutations";

export default function () {
  return {
    isLoading: false,
    error: null,
    currentOrder: {},
    orders: [
      {
        id: 0,
        title: 'Починить котёл',
        description: 'Описание000000000 00000000000 000000000 00000000000000 0000000000000',
        body: 'В общем котёл сам по себе выключается',
        price: '1000 рублей',
        address: 'Гагаринский дом 3',
        category: 'сантехника',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: false,
        customer: 'Rihard',
        status: 'filed'
      },
      {
        id: 1,
        title: 'Поклеить обои',
        description: 'Описание',
        body: 'Поклеить обои в одной комнате',
        price: '1500 рублей',
        address: 'Гагаринский дом 3',
        category: 'общий ремонт',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: true,
        customer: 'Rihard',
        status: 'inWork'
      },
      {
        id: 2,
        title: 'Установить люстру',
        description: 'Описание',
        body: 'В общем котёл сам по себе выключается',
        price: '2000 рублей',
        address: 'Гагаринский дом 3',
        category: 'сантехника',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: false,
        customer: 'Rihard',
        status: 'done'
      },
    ]
  }
}
