

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

// Мутация для входа в систему

export const signInUserStart = (state) => {
  state.isLoading = true
  state.isLoading = false
  state.user = null
}

export const signInUserSuccess = (state, user) => {
  state.isLoading = false
  state.error = null
  state.user = { ...user}
  state.isLoggedIn = true
}
export const signInUserFailure = (state, error) => {
  state.isLoading = false
  state.isLoggedIn = false
  state.error = error
}
