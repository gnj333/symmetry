import { GlobalBackground, GlobalStyle, GlobalWrapper } from "./styled";
import { lazy } from "react";
import { NotificationsProvider } from "../shared/ui/notifier";

const Router = lazy(() => import("./Router"));

function App() {
  return (
    <GlobalBackground>
      <GlobalWrapper>
        <GlobalStyle />
        <NotificationsProvider>
          <Router />
        </NotificationsProvider>
      </GlobalWrapper>
    </GlobalBackground>
  );
}

export default App;
