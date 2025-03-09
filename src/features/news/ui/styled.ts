import { Typography } from "../../../shared/ui/styled";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 130px;
  gap: 140px 60px;
`;

export const NegrImageWrapper = styled.img`
  border-radius: 30px 30px 30px 0;
`;

export const NegrWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -3px;
`;

export const NegrFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const OldPrice = styled(Typography)`
  font-size: 24px;
  color: gray;
`;

export const Price = styled(Typography)`
  font-size: 24px;
`;

export const FlexForButtonAndPrice = styled.div`
  display: flex;
  gap: 60px;
`;

export const FlexForPrices = styled.div`
  display: flex;
  flex-direction: column;
`;
