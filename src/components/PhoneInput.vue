<template>
  <div class="flex flex-col mx-auto py-4 px-2 gap-y-4 items-center">
    <h1 class="text-white text-2xl font-medium">Phone Number Input</h1>
    <input
      type="text"
      v-model="phoneNumber"
      @input="onInput"
      :placeholder="getPhonePlaceholder()"
      maxlength="17"
      class="border-2 border-black rounded-md px-2 py-1 w-80"
    />
    <div class="flex flex-col w-1/2 text-white gap-y-2">
      <p class="text-lg text-center font-bold">How to use it:</p>
      <dl>
        <dd>
          Enter a phone number using digits only (no special characters). The
          mask will be applied when the input length is equal to 11 characters
          and it will display the input into the desired format '+1 (123)
          456-7890'
        </dd>
      </dl>
      <p class="text-lg text-center font-bold">Future Improvements:</p>
      <dl class="space-y-2">
        <dd>
          <span class="font-bold">Support for special characters</span>
          - In the future iterations, it would be beneficial to allow the user
          to input special characters and have the input mask handle these
          entries.
        </dd>
        <dd>
          <span class="font-bold">Internalization Improvement</span> - Future
          version could dynamically adapt the format based on the user's
          location or a selected country code.
        </dd>
        <dd>
          <span class="font-bold">Real Time Validation</span> - Display a visual
          indicator if the user enters an invalid or incomplete phone number.
          This will increase UX.
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Placeholder } from ".././baseTypes";

const phoneNumber = ref<string>("");
const userLocale: string = navigator.language;

const nonNumericCharsRegex = /[^+\-()\d\s]/g;
const phoneNumberPattern = /(\d{1})(\d{3})(\d{3})(\d{4})/;
const formattedPhoneNumberTemplate = "+$1 ($2) $3-$4";

const isEnglishLanguage = (locale: string): boolean => locale.startsWith("en");

const getPhonePlaceholder = (): string =>
  isEnglishLanguage(userLocale) ? Placeholder.en : Placeholder.international;

const onInput = (): void => {
  const allowedInput = phoneNumber.value.replace(nonNumericCharsRegex, "");

  phoneNumber.value = allowedInput.replace(
    phoneNumberPattern,
    formattedPhoneNumberTemplate
  );
};
</script>
