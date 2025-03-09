import { GlobalBackground, GlobalStyle, GlobalWrapper } from "./styled";
import { lazy } from "react";

const Router = lazy(() => import("./Router"));

function App() {
  return (
    <GlobalBackground>
      <GlobalWrapper>
        <GlobalStyle />
        <Router />
      </GlobalWrapper>
    </GlobalBackground>
  );
}

export default App;
