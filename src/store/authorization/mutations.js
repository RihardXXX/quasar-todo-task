// мутация которая устанавливает состояние авторизации
import {getPerformersOrCustomers} from 'src/store/authorization/actions';
import performers from 'src/store/performers';

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

// Мутация которые устаналивает состояние стейта выйти из авторизации
export function logoutUser(state) {
    state.isLoggedIn = false
    state.isLoading = false
    state.error = null
    state.user = undefined
}

// Мутации по установке лайка аккаунтам
export function setLikeAccountStart(state) {
  state.isLoading = true
  state.error = null
}

export function setLikeAccountSuccess(state) {
  state.isLoading = false
  state.error = null
}
export function setLikeAccountFailure(state, error) {
  state.isLoading = false
  state.error = error
}

// Для пагинации офссет увеличение
export const setOffset = (state, num) => {
  state.offset += num
}

// Сброс всего состояния по отзывам чтобы при переходе на роут и тп случаях не было ошибок
export const resetStateReviews = (state) => {
  state.reviews = []
  state.isLoading = false
  state.error = null
  state.limit = 10
  state.offset = 0
  state.reviewsCount = 0
}

// Мутации по получению отзывов по аккаунту
export function getReviewsByAccountStart(state) {
  state.isLoading = true
  state.error = null
}

export function getReviewsByAccountSuccess(state, { reviewsCount, reviews }) {
  // console.log(111, reviewsCount)
  // console.log(112, reviews)
  state.isLoading = false
  state.error = null
  state.reviews = [...state.reviews,...reviews]
  state.reviewsCount = reviewsCount
}
export function getReviewsByAccountFailure(state, error) {
  state.isLoading = false
  state.error = error
}

// Мутации для создания отзыва
export function createReviewStart(state) {
  state.isLoading = true
  state.error = null
}

export function createReviewSuccess(state) {
  state.isLoading = false
  state.error = null
}

export function createReviewFailure(state, error) {
  state.isLoading = false
  state.error = error
}

// Блок мутаций для подписки на аккаунты
export function subscribeAccountStart(state) {
  state.isLoading = true
  state.error = null
}

export function subscribeAccountSuccess(state) {
  state.isLoading = false
  state.error = null
}

export function subscribeAccountFailure(state, error) {
  state.isLoading = false
  state.error = error
}

// Блок мутаций для списка перфомермеров
export function getAllPerformersStart(state) {
  state.isLoading = true
  state.error = null
}

export function getAllPerformersSuccess(state, { performers, accountsCount }) {
  state.isLoading = false
  state.error = null
  state.performers = [...state.performers, ...performers]
  state.accountsCount = accountsCount
}

export function getAllPerformersFailure(state, error) {
  state.isLoading = false
  state.error = error
}

// Блок мутаций для списка кастомеров
export function getCustomersStart(state) {
  state.isLoading = true
  state.error = null
}

export function getCustomersSuccess(state, { customers, accountsCount }) {
  state.isLoading = false
  state.error = null
  state.customers = [...state.customers,...customers]
  state.accountsCount = accountsCount
}

export function getCustomersFailure(state, error) {
  state.isLoading = false
  state.error = error
}

// Сброс всего состояния по отзывам чтобы при переходе на роут и тп случаях не было ошибок
export const resetStateAccounts = (state) => {
  state.performers = []
  state.customers = []
  state.isLoading = false
  state.error = null
  state.limitAccount = 10
  state.offsetAccount = 0
  state.accountsCount = 0
}

// Для пагинации офссет увеличение
export const setOffsetAccount = (state, num) => {
  state.offsetAccount += num
}
