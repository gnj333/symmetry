import {
  Paragraph,
  ParagraphWrapper,
  SubParagraph,
  SubParagraphWrapper,
  Title,
  Wrapper,
} from "./styled";

export const Information = () => (
  <Wrapper>
    <ParagraphWrapper>
      <Title>Покупка</Title>
      <Paragraph>
        исследуйте весь наш сайт. добавьте понравившиеся товары в корзину.
      </Paragraph>
    </ParagraphWrapper>
    <ParagraphWrapper>
      <Title>Оплата</Title>
      <Paragraph>
        произведите оплату на сайте удобным для вас способом.
      </Paragraph>
      <Paragraph>если возникли проблемы, обратитесь на нашу почту.</Paragraph>
    </ParagraphWrapper>
    <ParagraphWrapper>
      <Title>Доставка</Title>
      <SubParagraphWrapper>
        <Paragraph>доставка по г. Тюмень</Paragraph>
        <SubParagraph>при заказе от 5900 руб. – бесплатно</SubParagraph>
        <SubParagraph>при заказе до 5900 руб.- 190 руб</SubParagraph>
      </SubParagraphWrapper>
      <SubParagraphWrapper>
        <Paragraph>доставка вне г. Тюмень</Paragraph>
        <SubParagraph> при заказе от 7900 руб. – бесплатно </SubParagraph>
        <SubParagraph>при заказе до 7900 руб.- 390 руб</SubParagraph>
      </SubParagraphWrapper>
    </ParagraphWrapper>
  </Wrapper>
);
