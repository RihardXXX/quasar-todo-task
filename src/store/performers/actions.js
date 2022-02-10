import { api, url } from 'boot/axios';

// Получение информации по текущему мастеру
export function getInfoPerformer ({commit}, id) {
  commit('getInfoPerformerStart')
  return new Promise((resolve, reject) => {
    const urlPath = url.userInfo(id)
    api.get(urlPath)
      .then(response => {
        console.log(response)
        commit('getInfoPerformerSuccess', response.data.user)
      })
      .catch(error => {
        console.log(error.response.message)
        const message = error.response.message
        commit('getInfoPerformerFailure', message)
      })
  })
}
