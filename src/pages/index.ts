import { MainPage } from "./mainPage";
import {
  cartPageRoute,
  mainPageRoute,
  productPageRoute,
} from "../shared/routes";
import { createHistoryRouter, createRouterControls } from "atomic-router";
import { createBrowserHistory } from "history";
import { createRoutesView } from "atomic-router-react";
import { ProductPage } from "./productPage";
import { Fallback } from "./Fallback";
import { CartPage } from "./cartPage";

const routes = [
  {
    view: MainPage.view,
    route: mainPageRoute,
    path: "/",
  },
  {
    view: ProductPage.view,
    route: productPageRoute,
    path: "/product/:slug",
  },
  {
    view: CartPage.view,
    route: cartPageRoute,
    path: "/cart",
  },
];

export const routerControls = createRouterControls();

export const RoutesView = createRoutesView({
  routes,
  otherwise: Fallback,
});

export const router = createHistoryRouter({
  routes,
  controls: routerControls,
  base: "",
});

const history = createBrowserHistory();

router.setHistory(history);
