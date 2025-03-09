import { createEvent, createStore, restore, sample } from "effector";
import { getProductsFx, postToCartFx, Product } from "../../shared/api";
import { createGate } from "effector-react";

export const NewsGate = createGate();

export const $products = restore(getProductsFx, null);

sample({
  clock: NewsGate.open,
  target: getProductsFx,
});

export const selectProduct = createEvent<Product | null>();

export const $selectedProduct = createStore<Product | null>(null).on(
  selectProduct,
  (_, selectedProduct) => selectedProduct,
);

export const selectSize = createEvent<string>();

export const $selectedSize = createStore<string | null>("").on(
  selectSize,
  (_, size) => size,
);

sample({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  clock: selectSize,
  source: { product: $selectedProduct, size: $selectedSize },
  fn: ({ product, size }) => ({
    ...product,
    sizes: [size],
  }),
  target: postToCartFx,
});
