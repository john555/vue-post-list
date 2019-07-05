import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { VUE_APP_API_BASE_URL } from "./constants/api";
import { LS_POSTS_KEY } from "./constants/localstorage";
import { applyActions } from "./helpers/applyActions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    actions: [],
    lastActionIndex: -1
  },

  getters: {
    posts: state =>
      applyActions(state.posts, state.actions, state.lastActionIndex),
    actions: state => state.actions
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    addAction(state, action) {
      state.lastActionIndex = -1;
      state.actions.push(action);
    },
    setLastActionIndex(state, index) {
      state.lastActionIndex = index;
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
    },

    setLastActionIndex({ commit }, index) {
      commit("setLastActionIndex", index);
    }
  }
});
