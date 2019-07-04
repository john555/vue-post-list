import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { VUE_APP_API_BASE_URL } from "./constants/api";
import { LS_POSTS_KEY } from "./constants/localstorage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    actions: []
  },

  getters: {
    posts: state => state.posts,
    actions: state => state.actions
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    addAction(state, action) {
      state.actions.push(action);
    }
  },

  actions: {
    async fetchPosts({ commit }) {
      const localData = localStorage.getItem(LS_POSTS_KEY);

      if (localData) {
        commit("setPosts", JSON.parse(localData));
      }

      try {
        const response = await axios.get(`${VUE_APP_API_BASE_URL}/posts`);
        localStorage.setItem(LS_POSTS_KEY, JSON.stringify(response.data));

        commit("setPosts", response.data);
      } catch (error) {
        console.error(error);
      }
    },

    addAction({ commit }, action) {
      commit("addAction", action);
    }
  }
});
