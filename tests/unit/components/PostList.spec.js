import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/PostList";
import { mockStore } from "../mockStore";

describe("components/PostList.vue", () => {
  it("renders a vue instance", () => {
    const wrapper = shallowMount(PostList, { store: mockStore });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
