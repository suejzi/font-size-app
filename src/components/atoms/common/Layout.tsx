import React from "react";
import styled from "styled-components";

export const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media only screen and (max-width: 1440px) {
    padding: 0 10px;
  }
`;

export const SectionWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;
