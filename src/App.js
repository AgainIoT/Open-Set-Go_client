import { StyledEngineProvider } from "@mui/styled-engine";
import { RecoilRoot, RecoilEnv } from "recoil";
import Router from "./routes/router";
import GlobalStyle from "./styles/globalStyle";
import "./App.css";
import React from "react";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </StyledEngineProvider>
  );
};

export default App;
