import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import ActionList from "@/components/ActionList";

Vue.use(Vuex);

describe("components/ActionList.vue", () => {
  let store;

  beforeEach(() => {
    const state = {
      posts: [],
      actions: []
    };
    store = new Vuex.Store({
      getters: {
        posts: state => state.posts,
        actions: state => state.actions
      },
      state
    });
  });

  it("renders a vue instance", () => {
    const wrapper = shallowMount(ActionList, { store });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
