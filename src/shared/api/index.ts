import { createEffect } from "effector";

async function fetcher<T>(
  url: string,
  method: string = "GET",
  body?: any,
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  }
  return response.json();
}

export type Product = {
  name: string;
  slug: string;
  price: number;
  oldPrice?: number;
  sizes: string[];
  materials: {
    name: string;
    percentage: string;
  }[];
  description: string;
  image: string;
  recommendations: {
    name: string;
    slug: string;
    price: number;
    oldPrice?: number;
    sizes: string[];
    materials: {
      name: string;
      percentage: string;
    }[];
    description: string;
    image: string;
  }[];
};

export const getCartFx = createEffect(async () => {
  return fetcher<Product[]>("http://localhost:5000/cart");
});

export const postToCartFx = createEffect(async (product: Product) => {
  return fetcher("http://localhost:5000/cart", "POST", product);
});

export const deleteFromCartFx = createEffect(async (id: number) => {
  return fetcher(`http://localhost:5000/cart/${id}`, "DELETE");
});

export const getProductsFx = createEffect(async () => {
  return fetcher<Product[]>("http://localhost:5000/products");
});

export const getProductFx = createEffect(async (slug: string) => {
  const response = await fetcher<Product[]>(
    `http://localhost:5000/products?slug=${slug}`,
  );
  return response[0];
});
