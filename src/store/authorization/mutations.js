

// Регистрация пользователя в системе
export const registerUserStart = (state) => {
  state.isLoggedIn = false
  state.isLoading = true
  state.error = null
}

export const registerUserSuccess = (state, user) => {
  state.isLoading = false
  state.error = null
  state.isLoggedIn = true
  state.user = {...user}
}

export const registerUserFailure = (state, error) => {
  state.isLoggedIn = false
  state.isLoading = false
  state.error = error
}
