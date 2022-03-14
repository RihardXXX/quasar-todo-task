import Vue from 'vue'
import Vuex from 'vuex'

import 'leaflet/dist/leaflet.css';

import orders from './orders'
import authorization from './authorization'
import customers from './customers'
import performers from './performers'

Vue.use(Vuex)
Vue.config.devtools = true
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      orders,
      authorization,
      customers,
      performers,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
