import {
  AYEBASHMAK,
  BlackText,
  Box,
  Flex,
  LinksWrapper,
  ParagraphWrapper,
  Politic,
  PoliticWrapper,
  Title,
  Wrapper,
} from "./styled";
import { Link } from "../../contacts/styled";
import {
  scrollToAboutUs,
  scrollToCatalog,
  scrollToDelivery,
  scrollToSymmetry,
} from "../../../shared/refs/Refs";
import { IconWrapper } from "../../header/styled";
import { Link as RouterLink } from "atomic-router-react";
import { cartPageRoute, mainPageRoute } from "../../../shared/routes";

export const Footer = () => (
  <>
    <Wrapper>
      <AYEBASHMAK>
        <ParagraphWrapper>
          <RouterLink to={mainPageRoute}>
            <Title onClick={scrollToCatalog}>КАТАЛОГ</Title>
          </RouterLink>
        </ParagraphWrapper>
        <div>
          <RouterLink to={mainPageRoute}>
            <Title onClick={scrollToAboutUs}>О НАС</Title>
          </RouterLink>
        </div>
        <ParagraphWrapper>
          <RouterLink to={mainPageRoute}>
            <BlackText onClick={scrollToSymmetry}>SYMMETRY</BlackText>
          </RouterLink>
          <LinksWrapper>
            <Link
              href={"https://t.me/dzenqu"}
              target={"_blank"}
              color={"white"}
            >
              @dzenqu
            </Link>
            <Link
              href={"https://t.me/gnj333"}
              target={"_blank"}
              color={"white"}
            >
              @gnj333
            </Link>
            <Link color={"white"}>sale@symmetry.ru</Link>
          </LinksWrapper>
        </ParagraphWrapper>
        <div>
          <RouterLink to={mainPageRoute}>
            <Title onClick={scrollToDelivery}>ДОСТАВКА</Title>
          </RouterLink>
        </div>
        <RouterLink to={cartPageRoute}>
          <IconWrapper src={"/icons/bag.svg"} alt={""} />
        </RouterLink>
        <Flex>
          <a
            href={
              "https://www.instagram.com/g4ndjubas?igsh=cm5yMm1iZHdmYnNk&utm_source=qr"
            }
            target={"_blank"}
            rel="noreferrer"
          >
            <IconWrapper src={"/icons/instagram.svg"} alt={""} />
          </a>
          <a href={"https://t.me/gnj333"} target={"_blank"} rel="noreferrer">
            <IconWrapper src={"/icons/telegram.svg"} alt={""} />
          </a>
          <a
            href={"https://vk.com/wldrsd?from=groups"}
            target={"_blank"}
            rel="noreferrer"
          >
            <IconWrapper src={"/icons/vk.svg"} alt={""} />
          </a>
        </Flex>
      </AYEBASHMAK>
      <PoliticWrapper>
        <Box>
          <Link
            href={
              "https://www.meme-arsenal.com/memes/99b8cae68ac8647162ac0837eee00252.jpg"
            }
            target={"_blank"}
          >
            <Politic>
              Политика конфиденциальности и Условия использования
            </Politic>
          </Link>
        </Box>
      </PoliticWrapper>
    </Wrapper>
  </>
);
