import styled from "@emotion/styled";

export const Wrapper = styled.div<{ padding?: string }>`
  padding: ${({ padding }) => (padding ? padding : "0 0 55px 170px")};
  display: flex;
  gap: 106px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Link = styled.a<{ color?: string }>`
  font-size: 24px;
  text-decoration: none;
  color: ${({ color }) => (color ? color : "black")};
`;

export const ImgWrapper = styled.img`
  width: 59px;
  height: 59px;
`;
