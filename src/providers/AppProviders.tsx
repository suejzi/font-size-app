import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle";

import { AppProvidersProps } from "./AppProviders.types";
import ResetCSS from "../assets/styles/ResetCSS";
import styled from "styled-components";

const ProviderWrapper = styled.div``;

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ProviderWrapper>
    <GlobalStyle />
    <ResetCSS />
    <Router>{children}</Router>
  </ProviderWrapper>
);
