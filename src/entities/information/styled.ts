import { Typography } from "../../shared/ui/styled";
import styled from "@emotion/styled";

export const Title = styled(Typography)`
  font-size: 48px;
  font-weight: bold;
  color: white;
  text-shadow:
    0 0 2px black,
    0 -1px 2px black,
    1px 0 2px black,
    -1px 0 2px black,
    0 1px 2px black;
`;

export const Paragraph = styled(Typography)`
  font-size: 28px;
  color: black;
`;

export const SubParagraph = styled(Typography)`
  font-size: 20px;
  color: black;
`;

export const Wrapper = styled.div`
  padding: 50px 0 55px 170px;
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding-bottom: 50px;
`;

export const SubParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 33px;
`;
