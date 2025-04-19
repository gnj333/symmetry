import {
  NavigateItem,
  NavigateWrapper,
} from "../../../shared/ui/navigate/styled";
import { Link as RouterLink } from "atomic-router-react";
import { mainPageRoute } from "../../../shared/routes";
import { CartWrapper, NullCart, NullCartTitle } from "./styled";
import { Button } from "../../../shared/ui/Button";
import { Contacts } from "../../../entities/contacts/Contacts";
import { useGate, useUnit } from "effector-react";
import { $cart, CartGate } from "../model";
import { CartItem } from "./CartItem";
import { animated, useTransition } from "react-spring";
import { Form } from "../../calibrationForm/ui/Form";
import { Product } from "../../../shared/api";

export const CartFilling = () => {
  useGate(CartGate);
  const cart = useUnit($cart);
  const reversedCart = cart?.slice().reverse();
  const transitions = useTransition(reversedCart, {
    //@ts-ignore
    keys: (item) => item.id,
    from: { transform: "translateX(100%)", opacity: 0 },
    enter: { transform: "translateX(0)", opacity: 1 },
    leave: { transform: "translateX(100%)", opacity: 0 },
    config: { duration: 500 },
  });

  const calculateTotalPrice = (products: Product[] | null) => {
    if (products)
      return products.reduce((sum, product) => sum + product.price, 0);
  };
  return (
    <CartWrapper>
      <NavigateWrapper isNeedBorderBottom>
        <RouterLink to={mainPageRoute}>
          <NavigateItem>главная</NavigateItem>
        </RouterLink>
        <NavigateItem>/</NavigateItem>
        <NavigateItem>корзина</NavigateItem>
      </NavigateWrapper>
      {cart?.length === 0 ? (
        <NullCart>
          <NullCartTitle>здесь пусто!</NullCartTitle>
          <RouterLink to={mainPageRoute}>
            <Button>вернуться на главную</Button>
          </RouterLink>
          <Contacts padding={"54px 0 0 0"} />
        </NullCart>
      ) : (
        transitions((styles, item) => (
          //@ts-ignore
          <animated.div style={styles}>
            <CartItem item={item} />
          </animated.div>
        ))
      )}
      {!!cart?.length && <Form total={calculateTotalPrice(cart)} />}
    </CartWrapper>
  );
};
