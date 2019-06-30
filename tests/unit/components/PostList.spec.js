import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/PostList";

describe("components/PostList.vue", () => {
  it("renders a vue instance", () => {
    const wrapper = shallowMount(PostList);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
