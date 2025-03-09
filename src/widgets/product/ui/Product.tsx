import { $product } from "../model";
import { useUnit } from "effector-react/compat";
import {
  ButtonAndPrice,
  Description,
  Flex,
  ImageWrapper,
  Info,
  InfoWrapper,
  Material,
  Name,
  ProductWrapper,
  RecommendationsWrapper,
} from "./styled";
import { Header } from "../../../entities/header/Header";
import { Footer } from "../../../entities/footer/ui/Footer";
import { Button } from "../../../shared/ui/Button";
import { Price } from "../../../features/news/ui/styled";
import { BlackBarWithText } from "../../../entities/blackBarWithText/BlackBarWithText";
import { Item } from "../../../shared/ui/item/Item";
import { getProductFx } from "../../../shared/api";
import { useEffect, useState } from "react";
import { mainPageRoute, productPageRoute } from "../../../shared/routes";
import { scrollToCatalog } from "../../../shared/refs/Refs";
import { Link as RouterLink } from "atomic-router-react";
import {
  NavigateItem,
  NavigateWrapper,
} from "../../../shared/ui/navigate/styled";
import { selectProduct } from "../../../features/news/model";
import { SizesModal } from "../../../shared/ui/SizesModal";

export const Product = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const product = useUnit($product);
  const { slug } = useUnit(productPageRoute.$params);

  useEffect(() => {
    if (slug) {
      getProductFx(slug);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [slug]);

  const handleOpen = () => {
    setIsOpen(true);
    selectProduct(product);
  };

  return (
    <>
      <Header color={"black"} padding={"55px"} />
      <ProductWrapper>
        <NavigateWrapper>
          <RouterLink to={mainPageRoute}>
            <NavigateItem>главная</NavigateItem>
          </RouterLink>
          <NavigateItem>/</NavigateItem>
          <RouterLink to={mainPageRoute}>
            <NavigateItem onClick={scrollToCatalog}>каталог</NavigateItem>
          </RouterLink>
          <NavigateItem>/</NavigateItem>
          <NavigateItem>{product?.name}</NavigateItem>
          <NavigateItem></NavigateItem>
        </NavigateWrapper>
        <InfoWrapper>
          <ImageWrapper src={product?.image} />
          <Info>
            <Name>{product?.name}</Name>
            <Description>{product?.description}</Description>
            <ButtonAndPrice>
              <Button onClick={() => handleOpen()}>в корзину</Button>
              <Price>{product?.price} руб</Price>
            </ButtonAndPrice>
            <Flex>
              {product?.materials.map((item, index, array) => (
                <Material key={index}>
                  {item.percentage} {item.name.toLowerCase()}
                  {index !== array.length - 1 && ","}
                </Material>
              ))}
            </Flex>
          </Info>
        </InfoWrapper>
      </ProductWrapper>
      <BlackBarWithText
        whiteText={"С ЭТИМ ЧАСТО ЗАКАЗЫВАЮТ"}
        blackText={"ORDER"}
      />
      <RecommendationsWrapper>
        {product?.recommendations.map((item, index) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          <Item item={item} key={index} />
        ))}
      </RecommendationsWrapper>
      <Footer />
      <SizesModal
        //@ts-ignore
        item={product}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setIsOpen={setIsOpen}
      />
    </>
  );
};
