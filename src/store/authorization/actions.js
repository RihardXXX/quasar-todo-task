import { LocalStorage } from "quasar";
import { api, url } from 'boot/axios';

// Регистрация нового пользователя
export const registerUser =  ({commit}, user) => {
  commit('registerUserStart');
  return new Promise((resolve, reject) => {
    api.post(url.createUser, { user: user })
      .then(response => {
        // сохранить юзер и токен
        const { user } = response.data;
        commit('registerUserSuccess', user);
        LocalStorage.set('token', user.token);
        resolve(user);
        // console.log(response.data.user);
      })
      .catch(error => {
        const { message } = error.response.data;
        reject(message);
        commit('registerUserFailure', message);
      })
  })
}

// Вход по почте и паролю для нового пользователя
export const signInUser = ({commit}, { email, password }) => {
  commit('signInUserStart');
  return new Promise((resolve, reject) => {
    api.post(url.loginUser, { user: { email, password } })
      .then(response => {
        // сохранить юзер и токен
        // console.log('response: ', response);
        const { user } = response.data;
        commit('signInUserSuccess', user);
        LocalStorage.set('token', user.token);
        resolve(user);
      })
      .catch(error => {
        const { message } = error.response.data;
        reject(message);
        commit('signInUserFailure', message);
      })
  })
}

// Устанавливает состояние авторизации юзера и наблюдает
export function authUser({commit}) {
  const token = LocalStorage.getItem('token');
  // если нет токена то не делать запрос на проверку состояния
  if (!token) {
    return;
  }

  commit('signInUserStart');
  return new Promise(resolve => {
    api.get(url.currentUser)
      .then(response => {
        // console.log(response);
        const { user } = response.data;
        commit('signInUserSuccess', user);
        LocalStorage.set('token', user.token);
        resolve();
      })
      .catch(error => {
        const { message } = error.response.data;
        commit('signInUserFailure', message);
      })
  })

}

// выйти из состояния авторизации
export function logoutUser({commit}) {
  return new Promise(resolve => {
    LocalStorage.remove('token')
    commit('logoutUser')
    resolve('exit')
  })
}

