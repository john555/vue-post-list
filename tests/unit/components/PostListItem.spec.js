import { shallowMount } from "@vue/test-utils";
import PostListItem from "@/components/PostListItem";

describe("components/PostListItem.vue", () => {
  it("renders a vue instance", () => {
    const wrapper = shallowMount(PostListItem);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
