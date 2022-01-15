// мутация которая устанавливает состояние авторизации
export const setIsLoggedIn = (state, status) => {
  state.isLoggedIn = status
}

// устанавливаем почту юзера для клиента
export const setEmailUser = (state, email) => {
  state.emailUser = email
}

// устанавливаем состояние юзера в свойство
export const setUser = (state, user) => {
  state.user = user
}

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

// установка данных текущего юзера при handlerAuthStateChange
export function setCurrentUser(state, user) {
  state.currentUser = user
}

