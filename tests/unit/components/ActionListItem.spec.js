import { shallowMount } from "@vue/test-utils";
import ActionListItem from "@/components/ActionListItem";

describe("components/ActionListItem.vue", () => {
  it("renders a vue instance", () => {
    const wrapper = shallowMount(ActionListItem);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
