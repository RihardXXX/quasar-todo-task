// import Vue from 'vue'
// import axios from 'axios'
//
// Vue.prototype.$axios = axios.create({
//   baseURL: 'http//:localhost:3000'
// })
import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$axios = axios

// базовый путь
const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  baseURL: 'http://localhost:3000/'
});

Vue.prototype.$api = api

// пути чтобы вручную не приписывать
const url = {
  createUser: 'users'
}

export { axios, api, url }
