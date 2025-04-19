import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const appearAnimation = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const disappearAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`;

const moveAnimation = keyframes`
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(24px, 0);
    }
`;
const BaseDot = styled("div")({
  position: "absolute",
  top: "0",
  width: "13px",
  height: "13px",
  borderRadius: "50%",
  background: "black",
  animationTimingFunction: "cubic-bezier(0, 1, 1, 0)",
});

const FirstDot = styled(BaseDot)({
  left: "8px",
  animation: `${appearAnimation} 0.6s infinite`,
});

const SecondDot = styled(BaseDot)({
  left: "8px",
  animation: `${moveAnimation} 0.6s infinite`,
});

const ThirdDot = styled(BaseDot)({
  left: "32px",
  animation: `${moveAnimation} 0.6s infinite`,
});

const FourthDot = styled(BaseDot)({
  left: "56px",
  animation: `${disappearAnimation} 0.6s infinite`,
});

export const RootStyled = styled.div({
  display: "inline-block",
  position: "relative",
  width: "80px",
  height: "13px",
});

export const Spinner = (props: React.ComponentProps<typeof RootStyled>) => (
  <RootStyled {...props}>
    <FirstDot />
    <SecondDot />
    <ThirdDot />
    <FourthDot />
  </RootStyled>
);
