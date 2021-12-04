
export const customers = (state) => {
  console.log(state.sortType)
  if (state.sortType) {
    const param = state.sortType
    switch (param){
      case 'rating':
        return [...state.customers].sort((a, b) => b.rating - a.rating)
      case 'reviews':
        return [...state.customers].sort((a, b) => b.reviews.length - a.reviews.length)
      default:
        return state.customers
    }
  } else {
    return state.customers.length ? state.customers : []
  }
}

export const isLoading = (state) => {
  return state.isLoading
}

// получение статуса тогла показа поиска и сортировки меню у клиентов
export const showFilterSortPanel = (state) => {
  return state ? state.showFilterSortPanel : null
}
