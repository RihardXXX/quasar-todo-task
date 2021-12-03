

export default function () {
  return {
    isLoading: false,
    error: null,
    currentOrder: {},
    searchOrder: '',
    sortType: '',
    orders: [
      {
        id: 0,
        title: 'Починить котёл',
        description: 'Описание000000000 00000000000 000000000 00000000000000 0000000000000',
        body: 'В общем котёл сам по себе выключается',
        price: 1000,
        address: 'Гагаринский дом 3',
        category: 'сантехника',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: false,
        customer: 'Rihard',
        status: 'свободен',
        victory: []
      },
      {
        id: 1,
        title: 'Поклеить обои',
        description: 'Описание',
        body: 'Поклеить обои в одной комнате',
        price: 1500,
        address: 'Гагаринский дом 3',
        category: 'общий ремонт',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: true,
        customer: 'Rihard',
        status: 'в работе',
        victory: [{
          id: '123',
          name: ''
        }]
      },
      {
        id: 2,
        title: 'Установить люстру',
        description: 'Описание',
        body: 'В общем котёл сам по себе выключается',
        price: 2000,
        address: 'Гагаринский дом 3',
        category: 'сантехника',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: false,
        customer: 'Rihard',
        status: 'свободен',
        victory: []
      },
    ],
    server: [
      {
        id: 0,
        title: 'Починить котёл',
        description: 'Описание000000000 00000000000 000000000 00000000000000 0000000000000',
        body: 'В общем котёл сам по себе выключается',
        price: 1300,
        address: 'Гагаринский дом 3',
        category: 'сантехника',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: false,
        customer: 'Rihard',
        status: 'свободен',
        victory: []
      },
      {
        id: 1,
        title: 'Поклеить обои',
        description: 'Описание',
        body: 'Поклеить обои в одной комнате',
        price: 1800,
        address: 'Гагаринский дом 3',
        category: 'общий ремонт',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: true,
        customer: 'Rihard',
        status: 'в работе',
        victory: [{
          id: '123',
          name: ''
        }]
      },
      {
        id: 2,
        title: 'Установить люстру',
        description: 'Описание',
        body: 'В общем котёл сам по себе выключается',
        price: 3000,
        address: 'Гагаринский дом 3',
        category: 'сантехника',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: false,
        customer: 'Rihard',
        status: 'свободен',
        victory: []
      },
      {
        id: 3,
        title: 'Ламинат постелить',
        description: 'Описание',
        body: 'В общем котёл сам по себе выключается',
        price: 2000,
        address: 'Гагаринский дом 3',
        category: 'сантехника',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: false,
        customer: 'Rihard',
        status: 'свободен',
        victory: []
      },
      {
        id: 4,
        title: 'Карнизы повесить',
        description: 'Описание',
        body: 'В общем котёл сам по себе выключается',
        price: 2000,
        address: 'Гагаринский дом 3',
        category: 'сантехника',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: false,
        customer: 'Rihard',
        status: 'свободен',
        victory: []
      },
      {
        id: 5,
        title: 'Уборка дома',
        description: 'Описание',
        body: 'В общем котёл сам по себе выключается',
        price: 2000,
        address: 'Гагаринский дом 3',
        category: 'сантехника',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: false,
        customer: 'Rihard',
        status: 'свободен',
        victory: []
      },
      {
        id: 6,
        title: 'Уборка в офисе',
        description: 'Описание',
        body: 'В общем котёл сам по себе выключается',
        price: 2000,
        address: 'Гагаринский дом 3',
        category: 'сантехника',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: false,
        customer: 'Rihard',
        status: 'свободен',
        victory: []
      },
      {
        id: 7,
        title: 'Постирать одежду',
        description: 'Описание',
        body: 'В общем котёл сам по себе выключается',
        price: 2000,
        address: 'Гагаринский дом 3',
        category: 'сантехника',
        dueDate: '01.01.2021г.',
        dueTime: '15:44',
        listOfPerformers: [],
        selectedPerformer: false,
        customer: 'Rihard',
        status: 'свободен',
        victory: []
      },
    ]
  }
}

