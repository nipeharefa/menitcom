import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  news: [],
};
const mutations = {
  SET_USER(state, data) {
    state.news = data;
  },
  ADD_USER(state, data) {
  	state.news.push(data)
  },
  DELETE_USER(state, index) {
  	state.news.splice(index, 1)
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters: {
  	allnews: state => {
      return state.news
    }
  },
  actions: {
    increment (context, data) {
      context.commit('SET_USER', data)
    },
    addNews (context, data) {
    	context.commit('ADD_USER', data)
    },
    deleteNews(context, item) {
    	context.commit('DELETE_USER', item)
    }
  }
});