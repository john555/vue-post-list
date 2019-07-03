import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/PostList";

Vue.use(Vuex);

describe("components/PostList.vue", () => {
  let store;

  beforeEach(() => {
    const state = {
      posts: []
    };
    store = new Vuex.Store({
      getters: {
        posts: state => state.posts
      },
      state
    });
  });

  it("renders a vue instance", () => {
    const wrapper = shallowMount(PostList, { store });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
