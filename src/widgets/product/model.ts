import { restore } from "effector";
import { getProductFx } from "../../shared/api";

export const $product = restore(getProductFx, null);
