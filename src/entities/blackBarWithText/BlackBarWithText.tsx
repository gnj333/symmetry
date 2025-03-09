import { BlackBar, BlackText, TextWrapper, WhiteText, Wrapper } from "./styled";

type Props = {
  whiteText: string;
  blackText: string;
  topBorderRadius?: string | undefined;
};
export const BlackBarWithText = ({
  whiteText,
  blackText,
  topBorderRadius,
}: Props) => (
  <BlackBar topBorderRadius={topBorderRadius}>
    <Wrapper>
      <TextWrapper>
        <WhiteText>{whiteText}</WhiteText>
        <BlackText>{blackText}</BlackText>
      </TextWrapper>
    </Wrapper>
  </BlackBar>
);
