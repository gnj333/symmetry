import { Header } from "../../../entities/header/Header";
import { Footer } from "../../../entities/footer/ui/Footer";
import { CartFilling } from "../../../features/cart/ui/Cart";

export const CartPage = () => {
  return (
    <>
      <Header color={"black"} padding={"55px"} />
      <CartFilling />
      <Footer />
    </>
  );
};
