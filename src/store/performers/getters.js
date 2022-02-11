// "user": {
//   "id": 6,
//     "username": "новый клиент",
//     "role": "performer",
//     "bio": "",
//     "blackList": [],
//     "listIdLikes": [],
//     "countLikes": 0
//   }

// имя
export function username (state) {
  return state.currentPerformer ? state.currentPerformer.username : null
}

// роль
export function role (state) {
  if (state.currentPerformer){
    return state.currentPerformer.role === 'performer' ? 'мастер' : 'клиент'
  }
  return null
}

// биография
export function bio (state) {
  return state.currentPerformer ? state.currentPerformer.bio : null
}

// количество лайков
export function countLikes (state) {
  return state.currentPerformer ? state.currentPerformer.countLikes : 0
}

