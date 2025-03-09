import styled from "@emotion/styled";
import { Typography } from "../styled";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.img`
  border-radius: 30px;
  width: 520px;
  height: 640px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
`;

export const Names = styled(Typography)`
  font-size: 24px;
`;

export const ModalTitle = styled(Typography)`
  font-size: 32px;
`;

export const ModalFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: fit-content;
`;
