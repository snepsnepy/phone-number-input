/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { Placeholder } from "../baseTypes";
import PhoneInput from "../components/PhoneInput.vue";

const wrapper = mount(PhoneInput);

const setupLocaleMock = (locale: string) => {
  Object.defineProperty(navigator, "language", {
    value: locale,
  });
};

describe("Phone Input Tests", () => {
  it("should render", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find("h1").exists()).toBeTruthy();
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
  });

  it("should display formatted phone number", async () => {
    const input = wrapper.find("input");
    await input.setValue("11234567890");
    expect(input.element.value).toEqual("+1 (123) 456-7890");
  });

  it("should display the correct placeholder for English", () => {
    setupLocaleMock("en-US");
    const input = wrapper.find("input");
    expect(input.attributes("placeholder")).toBe(Placeholder.en);
  });
});
