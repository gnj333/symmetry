import { HeaderWithBackgroundImage } from "../../features/headerWithBackgroundImage/HeaderWithBackgroundImage";
import { Quote } from "../../entities/quote/Quote";
import { BlackBarWithText } from "../../entities/blackBarWithText/BlackBarWithText";
import { News } from "../../features/news/ui/News";
import { Information } from "../../entities/information/Information";
import { Contacts } from "../../entities/contacts/Contacts";
import { Footer } from "../../entities/footer/ui/Footer";
import { RefToCatalog, RefToDelivery } from "../../shared/refs/Refs";

export const Main = () => {
  return (
    <div>
      <HeaderWithBackgroundImage />
      <Quote />
      <RefToCatalog id={"news"} />
      <BlackBarWithText whiteText={"КАТАЛОГ"} blackText={"NEW"} />
      <News />
      <RefToDelivery id={"delivery"} />
      <BlackBarWithText
        whiteText={"ОПЛАТА И ДОСТАВКА"}
        blackText={"SYMMETRY"}
        topBorderRadius={"0"}
      />
      <Information />
      <Contacts />
      <Footer />
    </div>
  );
};
