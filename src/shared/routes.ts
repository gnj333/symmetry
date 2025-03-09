import { createRoute } from "atomic-router";

export const mainPageRoute = createRoute();

export const productPageRoute = createRoute<{ slug: string }>();

export const cartPageRoute = createRoute();
