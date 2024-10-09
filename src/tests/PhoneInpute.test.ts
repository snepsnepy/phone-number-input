/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import PhoneInput from "../components/PhoneInput.vue";

const wrapper = mount(PhoneInput);

describe("Phone Input Tests", () => {
  it("should render", () => {
    expect(wrapper.find("h1").exists()).toBeTruthy();
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
  });
});
