import { useGate, useUnit } from "effector-react";
import { $products, NewsGate, selectProduct } from "../model";
import {
  FlexForButtonAndPrice,
  FlexForPrices,
  NegrFlex,
  NegrImageWrapper,
  NegrWrapper,
  OldPrice,
  Price,
  Wrapper,
} from "./styled";
import { Link as RouterLink } from "atomic-router-react";
import { productPageRoute } from "../../../shared/routes";
import { Button } from "../../../shared/ui/Button";
import { Item } from "../../../shared/ui/item/Item";
import { Names } from "../../../shared/ui/item/styled";
import { useState } from "react";
import { SizesModal } from "../../../shared/ui/SizesModal";
import { StrikethroughText } from "../../../shared/ui/styled";
import { Product } from "../../../shared/api";

export const News = () => {
  useGate(NewsGate);
  const products = useUnit($products);
  const mainProducts = products?.slice(0, 4);
  const negr = products?.[products.length - 1];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = (item: Product) => {
    setIsOpen(true);
    selectProduct(item);
  };

  return (
    negr && (
      <>
        <Wrapper>
          {mainProducts?.map((item, index) => <Item item={item} key={index} />)}
        </Wrapper>
        <NegrWrapper>
          <RouterLink to={productPageRoute} params={{ slug: negr?.slug }}>
            <NegrImageWrapper src={negr?.image} />
          </RouterLink>
          <NegrFlex>
            <Names>{negr?.name}</Names>
            <FlexForButtonAndPrice>
              <Button onClick={() => handleOpen(negr)}>в корзину</Button>
              <FlexForPrices>
                <StrikethroughText>
                  <OldPrice>{negr?.oldPrice} руб</OldPrice>
                </StrikethroughText>
                <Price>{negr?.price} руб</Price>
              </FlexForPrices>
            </FlexForButtonAndPrice>
          </NegrFlex>
        </NegrWrapper>
        <SizesModal
          item={negr}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          setIsOpen={setIsOpen}
        />
      </>
    )
  );
};
