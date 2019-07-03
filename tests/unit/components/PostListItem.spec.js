import { shallowMount, mount } from "@vue/test-utils";
import PostListItem from "@/components/PostListItem";

describe("components/PostListItem.vue", () => {
  const defaultProps = {
    moveUp: jest.fn(),
    moveDown: jest.fn()
  };

  it("renders a vue instance", () => {
    const propsData = { ...defaultProps };
    const wrapper = shallowMount(PostListItem, { propsData });
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it("renders a title", () => {
    const propsData = { title: "test title", ...defaultProps };
    const wrapper = mount(PostListItem, { propsData });

    expect(wrapper.find(".post-list-item__title").text()).toMatch(
      propsData.title
    );
  });

  it("should invoke event handlers when buttons are clicked", () => {
    const propsData = { ...defaultProps };
    const wrapper = mount(PostListItem, { propsData });

    wrapper.find(".post-list-item__button--up").trigger("click");
    expect(propsData.moveUp).toHaveBeenCalled();

    wrapper.find(".post-list-item__button--down").trigger("click");
    expect(propsData.moveDown).toHaveBeenCalled();
  });

  it("should not render up button of first item in list", () => {
    const propsData = { isFirstItem: true, ...defaultProps };
    const wrapper = mount(PostListItem, { propsData });
    expect(wrapper.contains(".post-list-item__button--up")).toBe(false);
  });

  it("should not render up button of last item in list", () => {
    const propsData = { isLastItem: true, ...defaultProps };
    const wrapper = mount(PostListItem, { propsData });
    expect(wrapper.contains(".post-list-item__button--down")).toBe(false);
  });
});
