import { GlobalBackground, GlobalStyle, GlobalWrapper } from "./styled";
import { Header } from "../widgets/header/Header";

function App() {
  return (
    <GlobalBackground>
      <GlobalWrapper>
        <GlobalStyle />
        <Header />
      </GlobalWrapper>
    </GlobalBackground>
  );
}

export default App;
