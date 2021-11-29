export function orders (state) {
  if (state)  {
    if (state.sort !== '') {
      console.log('включена сортировка')
      return []
    }
    return state.orders
  }
  return []
}

export function isLoading (state) {
  return state ? state.isLoading : null
}
