import {
  BagWrapper,
  HeaderWrapper,
  IconsWrapper,
  IconWrapper,
  NavBar,
  NavBarItem,
  Wrapper,
} from "./styled";

export const Header = () => (
  <HeaderWrapper>
    <Wrapper>
      <img src={"src/assets/icons/symmetry.svg"} alt={""} />
      <NavBar>
        <NavBarItem>Каталог</NavBarItem>
        <NavBarItem>О нас</NavBarItem>
        <NavBarItem>Доставка</NavBarItem>
      </NavBar>
      <BagWrapper>
        <img src={"src/assets/icons/bag.svg"} alt={""} />
      </BagWrapper>
      <IconsWrapper>
        <IconWrapper>
          <img src={"src/assets/icons/instagram.svg"} alt={""} />
        </IconWrapper>
        <IconWrapper>
          <img src={"src/assets/icons/telegram.svg"} alt={""} />
        </IconWrapper>
        <IconWrapper>
          <img src={"src/assets/icons/vk.svg"} alt={""} />
        </IconWrapper>
      </IconsWrapper>
    </Wrapper>
  </HeaderWrapper>
);
