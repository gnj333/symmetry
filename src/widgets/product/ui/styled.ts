import styled from "@emotion/styled";
import { Typography } from "../../../shared/ui/styled";

export const InfoWrapper = styled.div`
  display: flex;
  gap: 100px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ProductWrapper = styled.div`
  padding-left: 170px;
  padding-bottom: 130px;
`;

export const ImageWrapper = styled.img`
  width: 420px;
  height: 525px;
  border-radius: 30px;
`;

export const Name = styled(Typography)`
  font-size: 24px;
`;

export const Description = styled(Typography)`
  font-size: 18px;
`;

export const Sizes = styled.div`
  display: flex;
  gap: 36px;
  padding-top: 30px;
`;

export const ButtonAndPrice = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

export const Material = styled(Typography)`
  font-size: 18px;
  color: gray;
  padding-top: 20px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 5px;
`;

export const RecommendationsWrapper = styled.div`
  display: flex;
  padding: 50px 0 50px 170px;
  gap: 60px;
`;
