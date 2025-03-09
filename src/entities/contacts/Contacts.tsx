import { ContactWrapper, ImgWrapper, Link, Wrapper } from "./styled";

type Props = {
  padding?: string;
};

export const Contacts = ({ padding }: Props) => (
  <Wrapper padding={padding}>
    <ContactWrapper>
      <ImgWrapper src={"icons/telegram2.svg"} />
      <Link href={"https://t.me/dzenqu"} target={"_blank"}>
        @dzenqu
      </Link>
      <Link href={"https://t.me/gnj333"} target={"_blank"}>
        @gnj333
      </Link>
    </ContactWrapper>
    <ContactWrapper>
      <ImgWrapper src={"icons/mail.svg"} />
      <Link>sale@symmetry.ru</Link>
    </ContactWrapper>
  </Wrapper>
);
