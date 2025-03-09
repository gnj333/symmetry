import { Link as RouterLink } from "atomic-router-react";
import { productPageRoute } from "../../routes";

import { Button } from "../Button";
import { Flex, ImageWrapper, ItemWrapper, Names } from "./styled";
import { useState } from "react";
import { SizesModal } from "../SizesModal";
import { selectProduct } from "../../../features/news/model";
import { Product } from "../../api";

type Props = {
  item: {
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
};

export const Item = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = (item: Product) => {
    setIsOpen(true);
    selectProduct(item);
  };
  return (
    <ItemWrapper key={item.name}>
      {item && (
        <RouterLink to={productPageRoute} params={{ slug: item.slug }}>
          <ImageWrapper src={item.image} key={item.image} />
        </RouterLink>
      )}
      <Flex>
        <Names>{item.name}</Names>
        <Button onClick={() => handleOpen(item)}>в корзину</Button>
      </Flex>
      <SizesModal
        item={item}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setIsOpen={setIsOpen}
      />
    </ItemWrapper>
  );
};
