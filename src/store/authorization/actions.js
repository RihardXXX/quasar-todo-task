import { auth } from 'boot/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";

// Регистрация нового пользователя
export const registerUser =  ({commit}, { email, password }) => {
  console.log('email: ', email)
  console.log('password: ', password)
  return new Promise(resolve => {
    commit('registerUserStart')
    createUserWithEmailAndPassword(auth, email, password)
    .then(response => {
      // Signed in
      console.log(response)
      commit('registerUserSuccess', response.user)
      resolve(response)
    })
    .catch((error) => {
      commit('registerUserFailure', error)
    });
  })
}

// Вход по почте и паролю для нового пользователя
export const signInUser = ({commit}, { email, password }) => {
  return new Promise((resolve, reject) => {
    commit('signInUserStart')
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response)
        commit('signInUserSuccess', response.user)
        resolve(response)
      })
      .catch((error) => {
        commit('signInUserFailure', error)
        reject(error)
      });
  })
}

// Устанавливает состояние авторизации юзера и наблюдает
export const handlerAuthStateChange = ({commit}) => {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log(user)
      commit('setIsLoggedIn', true)
      commit('setEmailUser', user.email)
    } else {
      commit('setIsLoggedIn', false)
      commit('setEmailUser', '')
    }
  });
}

// выйти из состояния авторизации
export const logoutUser = ({commit}) => {
  auth.signOut()
  commit('setIsLoggedIn', false)

}
