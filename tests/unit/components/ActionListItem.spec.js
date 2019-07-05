import { shallowMount } from "@vue/test-utils";
import ActionListItem from "@/components/ActionListItem";

describe("components/ActionListItem.vue", () => {
  it("renders a vue instance", () => {
    const propsData = { clickHandler: jest.fn() };
    const wrapper = shallowMount(ActionListItem, { propsData });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
