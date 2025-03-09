import styled from "styled-components";
import { Typography } from "../../shared/ui/styled";

export const BlackBar = styled.div<{ topBorderRadius: string | undefined }>`
  background-color: black;
  border-radius: ${({ topBorderRadius }) =>
    topBorderRadius
      ? `${topBorderRadius} 30px 30px 30px`
      : "30px 30px 30px 30px"};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  padding-left: 170px;
`;

export const TextWrapper = styled.div`
  padding: 20px 0 20px 0;
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const BlackText = styled(Typography)`
  font-size: 48px;
  font-weight: bold;
  color: black;
  text-shadow:
    0 0 2px white,
    0 -1px 2px white,
    1px 0 2px white,
    -1px 0 2px white,
    0 1px 2px white;
`;

export const WhiteText = styled(Typography)`
  font-size: 48px;
  font-weight: bold;
  color: white;
`;
