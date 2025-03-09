import {
  CartItemWrapper,
  DeleteButton,
  Image,
  NameAndPrice,
  NameAndSize,
  Size,
} from "./styled";
import { Product } from "../../../shared/api";
import { OldPrice, Price } from "../../news/ui/styled";
import { StrikethroughText } from "../../../shared/ui/styled";
import { deleteCartItem } from "../model";

type Props = {
  item: Product | undefined;
};

export const CartItem = ({ item }: Props) => {
  return (
    <CartItemWrapper>
      <Image src={item?.image} />
      <NameAndPrice>
        <NameAndSize>
          {item?.name}
          <Size>{item?.sizes[0].toUpperCase()}</Size>
        </NameAndSize>
        {item?.oldPrice && (
          <OldPrice>
            <StrikethroughText>{item?.oldPrice} руб</StrikethroughText>
          </OldPrice>
        )}
        <Price>{item?.price} руб</Price>
      </NameAndPrice>

      <DeleteButton
        src={"/icons/close.svg"}
        //@ts-ignore
        onClick={() => deleteCartItem(item.id)}
      />
    </CartItemWrapper>
  );
};
