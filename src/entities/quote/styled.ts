import styled from "@emotion/styled";
import { Typography } from "../../shared/ui/styled";

export const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 0 333px 90px 147px;
`;

export const FillingWrapper = styled.div`
  display: flex;
  padding-top: 90px;
  gap: 71px;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuotesWrapper = styled.div`
  width: 85px;
  height: 85px;
`;

export const Text = styled(Typography)`
  font-size: 25px;
`;
