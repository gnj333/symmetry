import styled from "@emotion/styled";

export const Typography = styled("p")`
  font-family: Raleway, sans-serif;
`;

export const Title = styled(Typography)`
  color: black;
  font-size: 21px;
  font-weight: bolder;
  margin-bottom: 3px;
`;

export const StrikethroughText = styled.span`
  position: relative;
  font-size: 24px;
  color: #333;

  &::after {
    content: "";
    position: absolute;
    left: -5px;
    top: 10px;
    width: 100%;
    height: 2px;
    background: black;
    transform: rotate(-10deg);
  }
`;
