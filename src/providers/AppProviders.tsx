import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalCSS";

import { AppProvidersProps } from "./AppProviders.types";
import styled from "styled-components";

const ProviderWrapper = styled.div``;

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ProviderWrapper>
    <GlobalStyle />
    <Router>{children}</Router>
  </ProviderWrapper>
);
