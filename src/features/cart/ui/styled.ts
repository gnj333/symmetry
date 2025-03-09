import styled from "@emotion/styled";
import { Typography } from "../../../shared/ui/styled";

export const CartWrapper = styled.div`
  padding: 0 170px 130px 170px;
`;

export const NullCart = styled.div`
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  max-width: 500px;
`;

export const NullCartTitle = styled(Typography)`
  font-size: 48px;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  gap: 57px;
  font-size: 24px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid black;
  position: relative;
`;

export const Image = styled.img`
  width: 235px;
  height: 295px;
  border-radius: 30px;
`;

export const NameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 42px;
`;

export const NameAndSize = styled.div`
  display: flex;
  gap: 35px;
`;

export const Size = styled.div`
  border-bottom: 1px solid black;
  height: fit-content;
`;

export const DeleteButton = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
