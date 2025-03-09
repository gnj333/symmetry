import styled from "@emotion/styled";
import { Typography } from "../../../shared/ui/styled";

export const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  text-align: center;
  padding-bottom: 100px;
  border-radius: 30px 30px 0 0;
`;

export const Title = styled(Typography)`
  font-size: 32px;
  cursor: pointer;
  color: white;
`;

export const SubTitle = styled(Typography)`
  font-size: 24px;
  cursor: pointer;
`;

export const SubtitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 21px;
`;

export const BlackText = styled(Typography)`
  font-size: 36px;
  font-weight: bold;
  color: black;
  text-shadow:
    0 0 2px white,
    0 -1px 2px white,
    1px 0 2px white,
    -1px 0 2px white,
    0 1px 2px white;
  cursor: pointer;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Politic = styled(Typography)`
  font-size: 18px;
  color: gray;
`;

export const AYEBASHMAK = styled.div`
  color: white;
  padding: 108px 200px 78px 200px;
  border-radius: 30px 30px 0 0;
  display: flex;
  justify-content: space-between;
`;

export const PoliticWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  padding-top: 60px;
  width: fit-content;
`;
