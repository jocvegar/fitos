import { mount } from "@vue/test-utils";
import FitoLogo from "@/components/FitoLogo.vue";

describe("FitoLogo", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(FitoLogo);
    expect(wrapper.vm).toBeTruthy();
  });
});
