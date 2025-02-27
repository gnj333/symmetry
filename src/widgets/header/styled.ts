import styled from "@emotion/styled";
import { Typography } from "../../shared/ui/styled";

export const NavBar = styled.div`
  display: flex;
  gap: 75px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.div`
  background-image: url("/src/assets/icons/back.jpg");
  height: 880px;
  padding: 55px 55px 55px 55px;
`;

export const NavBarItem = styled(Typography)`
  font-size: 25px;
  color: white;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
`;

export const BagWrapper = styled.div`
  height: 29px;
  width: 26;
`;

export const IconWrapper = styled.div`
  height: 29px;
  width: 29px;
`;
