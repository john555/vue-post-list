import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const mockStore = new Vuex.Store({
  state: {
    posts: [],
    actions: [],
    lastActionIndex: -1
  },
  getters: {
    posts: state => state.posts,
    actions: state => state.actions
  },
  actions: {
    fetchPosts: jest.fn()
  }
});
