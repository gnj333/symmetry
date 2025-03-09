import { HeaderWrapper } from "./styled";
import { RefToAboutUs } from "../../shared/refs/Refs";
import { Header } from "../../entities/header/Header";

export const HeaderWithBackgroundImage = () => (
  <HeaderWrapper id={"symmetry"}>
    <RefToAboutUs id="about" />
    <Header />
  </HeaderWrapper>
);
