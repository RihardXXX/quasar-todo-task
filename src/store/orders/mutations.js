export const getCurrentOrderStart = (state) => {
  state.isLoading = true
  state.error = null
}

export const getCurrentOrderSuccess = (state, payload) => {
  state.isLoading = false
  state.error = null
  state.currentOrder = {...payload}
}

export const getCurrentOrderFailure = (state, payload) => {
  state.isLoading = false
  state.error = payload
}
