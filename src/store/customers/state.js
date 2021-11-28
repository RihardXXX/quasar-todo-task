export default function () {
  return {
    isLoading: false,
    error: null,
    currentCustomer: {},
    searchCustomer: '',
    customers: [
      {
        id: 0,
        username: 'Rihard',
        payment: 'наличка',
        rating: 9,
        reviews: [
          {
            id: Math.random(),
            name: 'John',
            body: 'Клиент очень хороший платит как договорились'
          },
          {
            id: Math.random(),
            name: 'Irina',
            body: 'Крутой чувак'
          },
          {
            id: Math.random(),
            name: 'Robert',
            body: 'нервный немного'
          },
        ],
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
            status: 'свободен',
            victory: []
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
            price: '2000 рублей',
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
      },
      {
        id: 1,
        username: 'Roman',
        payment: 'карта',
        rating: 6,
        reviews: [
          {
            id: Math.random(),
            name: 'John',
            body: 'Жадничает'
          }
        ],
        orders: [],
      },
      {
        id: 2,
        username: 'Ivan',
        payment: 'карта',
        rating: 3,
        reviews: [
          {
            id: Math.random(),
            name: 'John',
            body: 'клиент крыса'
          },
          {
            id: Math.random(),
            name: 'Irina',
            body: 'Так себе'
          },
        ],
        orders: [],
      },
    ],
    server: [
      {
        id: 0,
        username: 'Rihard',
        payment: 'наличка',
        rating: 9,
        reviews: [
          {
            id: Math.random(),
            name: 'John',
            body: 'Клиент очень хороший платит как договорились'
          },
          {
            id: Math.random(),
            name: 'Irina',
            body: 'Крутой чувак'
          },
          {
            id: Math.random(),
            name: 'Robert',
            body: 'нервный немного'
          },
        ],
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
            status: 'свободен',
            victory: []
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
            price: '2000 рублей',
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
      },
      {
        id: 1,
        username: 'Roman',
        payment: 'карта',
        rating: 6,
        reviews: [
          {
            id: Math.random(),
            name: 'John',
            body: 'Жадничает'
          }
        ],
        orders: [],
      },
      {
        id: 2,
        username: 'Ivan',
        payment: 'карта',
        rating: 3,
        reviews: [
          {
            id: Math.random(),
            name: 'John',
            body: 'клиент крыса'
          },
          {
            id: Math.random(),
            name: 'Irina',
            body: 'Так себе'
          },
        ],
        orders: [],
      },
      {
        id: 3,
        username: 'Malcovich',
        payment: 'карта',
        rating: 3,
        reviews: [
          {
            id: Math.random(),
            name: 'John',
            body: 'клиент крыса'
          },
          {
            id: Math.random(),
            name: 'Irina',
            body: 'Так себе'
          },
        ],
        orders: [],
      },
    ]
  }
}
