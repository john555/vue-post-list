import { shallowMount } from "@vue/test-utils";
import ActionList from "@/components/ActionList";
import { mockStore } from "../mockStore";

describe("components/ActionList.vue", () => {
  it("renders a vue instance", () => {
    const wrapper = shallowMount(ActionList, { store: mockStore });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
