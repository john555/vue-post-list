import { shallowMount } from "@vue/test-utils";
import ActionList from "@/components/ActionList";

describe("components/ActionList.vue", () => {
  it("renders a vue instance", () => {
    const wrapper = shallowMount(ActionList);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
