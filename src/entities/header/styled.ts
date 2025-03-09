import styled from "@emotion/styled";
import { Typography } from "../../shared/ui/styled";

export const NavBar = styled.div`
  display: flex;
  gap: 75px;
`;

export const Wrapper = styled.div<{ color?: string; padding?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: ${({ color }) => (color ? color : "none")};
  padding: ${({ padding }) => (padding ? padding : "0")};
`;

export const NavBarItem = styled(Typography)`
  font-size: 25px;
  color: white;
  cursor: pointer;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
`;

export const IconWrapper = styled.img`
  height: 29px;
  width: 29px;
  cursor: pointer;
`;

export const CartWrapper = styled.div`
  position: relative;
`;

export const Counter = styled.div`
  border-radius: 50%;
  background-color: white;
  color: black;
  position: absolute;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  top: 15px;
  left: 20px;
  width: 30px;
  height: 30px;
`;
