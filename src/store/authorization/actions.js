import { LocalStorage } from "quasar";
import { api, url } from 'boot/axios';
import {getReviewsByAccountStart} from 'src/store/authorization/mutations';

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

// Поставить лайк аккаунту
export function setLikeAccount({commit, dispatch}, idAccount) {
  commit('setLikeAccountStart')
  return new Promise((resolve, reject) => {
    const urlPath = url.user.liked(idAccount)
    api.post(urlPath)
      .then(response => {
        // console.log(response)
        commit('setLikeAccountSuccess')
        commit('performers/getInfoPerformerSuccess', response.data, {root:true})
        // dispatch('performers/getInfoPerformer', idAccount, {root:true})
        resolve()
      })
      .catch(error => {
        commit('setLikeAccountFailure', error.response.data.message)
        reject()
      })
  })
}

// Получить все отзывы по текущему аккаунту
export function getReviewsByAccount({commit, state}, id) {
  // console.log('wqwq')
  commit('getReviewsByAccountStart')
  return new Promise((resolve, reject) => {
    const urlPath = url.user.reviews(id)

    const params = {
      limit: state.limit,
      offset: state.offset
    }

    api.get(urlPath, { params })
      .then((response) => {
        // console.log(response)
        const { reviewsCount, reviews } = response.data
        // console.log(reviewsCount)
        // console.log(reviews)
        commit('getReviewsByAccountSuccess', { reviewsCount, reviews })
        resolve()
      })
      .catch(error => {
        console.log(error)
        commit('getReviewsByAccountFailure', error.response.data.message)
        reject()
      })
  })
}

// Создание отзыва по текущему аккаунту
export function createReview({commit, dispatch}, review) {
  commit('createReviewStart')
  return new Promise((resolve, reject) => {
    const urlPath = url.user.createReview;
    api.post(urlPath, { review })
      .then(response => {
        // console.log(response)
        commit('createReviewSuccess')
        // после добавления отзыва сбрасываем все отзывы
        commit('resetStateReviews')
        dispatch('getReviewsByAccount', review.idAccount)
        resolve()
      })
      .catch(error => {
        const message = error.response.data.message[0]
        // console.log(message);
        commit('createReviewFailure', message)
        reject(message)
      })
  })
}

// Подписаться на аккаунт по указанному айди
export function subscribeAccount({commit}, id) {
  return new Promise()
}

