import { createGate } from "effector-react";
import { createEvent, sample } from "effector";
import { getCartFx } from "../../shared/api";

export const HeaderGate = createGate();

export const reload = createEvent();

sample({
  clock: [HeaderGate.open, reload],
  target: getCartFx,
});
