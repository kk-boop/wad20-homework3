import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    profiles: [],
    userInfo: {

    }
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_PROFILES(state, profiles) {
      state.profiles = profiles
    },
    SET_USERINFO(state, user) {
      state.userInfo = user
    }
  },
  actions: {
    getPosts({ commit }) {
      axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
        .then(response => {
          commit('SET_POSTS', response.data)
        })
    },
    getProfiles({ commit }) {
      axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
        .then(response => {
          commit('SET_PROFILES', response.data)
        })
    },
    getUserInfo({ commit }) {
      axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
      .then(response => {
        commit('SET_USERINFO', response.data)
      })
    }
  },
  modules: {
  }
})
