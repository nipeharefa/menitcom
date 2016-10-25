export const setNews = function (store, data) {
  var dispatch = store.dispatch
  dispatch('SET_NEWS', data)
}