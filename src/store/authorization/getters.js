

export const username = (state) => {
  return state.user ? state.user.username : null;
}

export const customer = (state) => {
  return state.user ? state.user.role === 'customer' : null;
}

export const performer = (state) => {
  return state.user ? state.user.role === 'performer' : null;
}

export const role = (state) => {
  if (state.user) {
    return state.user.role === 'customer' ? 'клиент' : 'мастер'
  }
  return ''
}
