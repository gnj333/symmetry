import { createEvent, sample } from "effector";

import { FormValues } from "./formValues";
import { sendCheckoutFx } from "../../../shared/api";

export const submitForm = createEvent<FormValues>();

sample({
  clock: submitForm,
  fn: (formData) => {
    const { name, lastName, patronymic, telegram, phone, address, email } =
      formData;
    return {
      user: {
        name,
        lastName,
        address,
        patronymic,
        telegram,
        phone,
        email,
      },
    };
  },
  target: sendCheckoutFx,
});

export const scrollToTop = createEvent();

scrollToTop.watch(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

sample({
  clock: sendCheckoutFx.doneData,
  target: scrollToTop,
});
