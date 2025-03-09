import { Column, FillingWrapper, QuotesWrapper, Text, Wrapper } from "./styled";

export const Quote = () => {
  return (
    <Wrapper>
      <FillingWrapper>
        <img src={"icons/devchushka.png"} alt="uote" />
        <Column>
          <QuotesWrapper>
            <img src={"icons/quotes.svg"} alt="Quote" />
          </QuotesWrapper>
          <Text>
            symmetry — это больше, чем бренд. Это стиль для тех, кто живёт в
            движении, впитывает культуру, ломает стереотипы и выбирает то, что
            реально отражает их характер. Здесь важны не правила, а твоя
            собственная история.
          </Text>
        </Column>
      </FillingWrapper>
    </Wrapper>
  );
};
