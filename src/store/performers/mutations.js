// Получение информации по текущему мастеру
export function getInfoPerformerStart (state) {
  state.isLoading = true
  state.error = null
}

export function getInfoPerformerSuccess (state, currentPerformer) {
  state.isLoading = false
  state.error = null
  state.currentPerformer = {...currentPerformer}
}

export function getInfoPerformerFailure (state, error) {
  state.isLoading = false
  state.error = error
}
