import styled from "@emotion/styled";
import { Typography } from "../styled";

export const NavigateWrapper = styled.div<{ isNeedBorderBottom?: boolean }>`
  padding: 59px 0 59px 0;
  display: flex;
  color: black;
  border-bottom: ${({ isNeedBorderBottom }) =>
    isNeedBorderBottom ? "1px solid black" : "none"};
`;

export const NavigateItem = styled(Typography)`
  font-size: 24px;
`;
