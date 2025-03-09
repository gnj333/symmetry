import { createGate } from "effector-react";
import { createEvent, restore, sample } from "effector";
import { deleteFromCartFx, getCartFx } from "../../shared/api";

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
