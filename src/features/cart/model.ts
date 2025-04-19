import { createGate } from "effector-react";
import { createEvent, restore, sample } from "effector";
import {
  clearCartFx,
  deleteFromCartFx,
  getCartFx,
  sendCheckoutFx,
} from "../../shared/api";
import { notifyFromEffect } from "../../shared/ui/notifier";

export const CartGate = createGate();

export const $cart = restore(getCartFx.doneData, null);

sample({
  clock: [CartGate.open, deleteFromCartFx.doneData],
  target: getCartFx,
});

export const deleteCartItem = createEvent<number>();

sample({
  clock: deleteCartItem,
  target: deleteFromCartFx,
});

notifyFromEffect({
  effect: sendCheckoutFx,
  $isActive: CartGate.status,
  success: "Спасибо за заказ, мы с Вами свяжемся!",
  isNeedRedirect: true,
  isNeedRedirectFromSuccess: true,
});

sample({
  clock: sendCheckoutFx.doneData,
  target: clearCartFx,
});
