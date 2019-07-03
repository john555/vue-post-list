import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { VUE_APP_API_BASE_URL } from "./constants/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    posts: state => state.posts
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get(`${VUE_APP_API_BASE_URL}/posts`);
        commit("setPosts", response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
});
