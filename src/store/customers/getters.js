
export const customers = (state) => {
  return state.customers.length ? state.customers : []
}

export const isLoading = (state) => {
  return state.isLoading
}
