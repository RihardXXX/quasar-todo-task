import { sortTitle } from 'src/utils'

export function orders (state) {
  if (state)  {
    if (state.sortType !== '') {
      const { sortType } = state

      console.log('sortType: ', sortType)

      // типы сортировок
      switch (sortType) {
        case 'title':
          return [...state.orders].sort(sortTitle)
        case 'price':
          return [...state.orders].sort((a, b) => a.price - b.price)
        default:
          return state.orders
      }
    } else {
      return state.orders
    }
  }
  return []
}

export function myOrders(state) {
  return state.myOrders.length ? state.myOrders : []
}

export function isLoading (state) {
  return state ? state.isLoading : null
}

export const showFilterSortPanel =  (state) => {
  return state ? state.showFilterSortPanel : null
}
