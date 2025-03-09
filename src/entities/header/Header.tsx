import {
  scrollToAboutUs,
  scrollToCatalog,
  scrollToDelivery,
} from "../../shared/refs/Refs";
import {
  CartWrapper,
  Counter,
  IconsWrapper,
  IconWrapper,
  NavBar,
  NavBarItem,
  Wrapper,
} from "./styled";
import { Link } from "atomic-router-react";
import { cartPageRoute, mainPageRoute } from "../../shared/routes";
import { useGate, useUnit } from "effector-react";
import { $cart } from "../../features/cart/model";
import { HeaderGate } from "./model";

type Props = {
  color?: string;
  padding?: string;
};

export const Header = ({ color, padding }: Props) => {
  useGate(HeaderGate);
  const cart = useUnit($cart);

  return (
    <Wrapper color={color} padding={padding}>
      <Link to={mainPageRoute}>
        <img src={"/icons/symmetry.svg"} alt={""} />
      </Link>
      <NavBar>
        <Link to={mainPageRoute}>
          <NavBarItem onClick={scrollToCatalog}>каталог</NavBarItem>
        </Link>
        <Link to={mainPageRoute}>
          <NavBarItem onClick={scrollToAboutUs}>о нас</NavBarItem>
        </Link>
        <Link to={mainPageRoute}>
          <NavBarItem onClick={scrollToDelivery}>доставка</NavBarItem>
        </Link>
      </NavBar>
      <Link to={cartPageRoute}>
        <CartWrapper>
          <IconWrapper src={"/icons/bag.svg"} alt={""} />
          {cart && cart.length > 0 && <Counter>{cart.length}</Counter>}
          {cart && cart.length > 10 && <Counter>10+</Counter>}
        </CartWrapper>
      </Link>
      <IconsWrapper>
        <a
          href={
            "https://www.instagram.com/g4ndjubas?igsh=cm5yMm1iZHdmYnNk&utm_source=qr"
          }
          target={"_blank"}
          rel="noreferrer"
        >
          <IconWrapper src={"/icons/instagram.svg"} alt={""} />
        </a>
        <a href={"https://t.me/gnj333"} target={"_blank"} rel="noreferrer">
          <IconWrapper src={"/icons/telegram.svg"} alt={""} />
        </a>
        <a
          href={"https://vk.com/wldrsd?from=groups"}
          target={"_blank"}
          rel="noreferrer"
        >
          <IconWrapper src={"/icons/vk.svg"} alt={""} />
        </a>
      </IconsWrapper>
    </Wrapper>
  );
};
