import Vue from 'vue';
import axios from 'axios';
import { LocalStorage } from 'quasar';

Vue.prototype.$axios = axios

// базовый путь
const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  baseURL: 'http://localhost:3000/'
});

// Интерсептор для отслеживания состояния авторизации на сервере при каждом запросе
api.interceptors.request.use(config => {
  const token = LocalStorage.getItem('token') // получаем токен из локалсториджа
  const authorizationToken = token ? `token ${token}` : '' // формируем токен в виде строки
  if(authorizationToken) {
    config.headers.Authorization = authorizationToken // положили в хедеры токен
  }
  return config
})

Vue.prototype.$api = api

// пути чтобы вручную не прописывать
const url = {
  createUser: 'users',
  loginUser: 'users/login',
  currentUser: 'user',
  orders: {
    create: 'orders',
    list: 'orders/list',
    slug: slug => `orders/${slug}`,
    submitApplication: slug => `orders/${slug}/submit`
  }
}

export { axios, api, url }
