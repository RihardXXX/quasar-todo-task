import { auth } from 'boot/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

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
      const errorCode = error.code;
      const errorMessage = error.message;
      commit('registerUserFailure', error)
    });
  })
}
