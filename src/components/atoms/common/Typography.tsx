import React from "react";
import styled from "styled-components";

interface ISizeCounterText {
  counterState: number;
}

export const SizeCounterText = styled.span<ISizeCounterText>`
  font-family: "Open Sans", sans-serif;
  font-size: ${(props) => `${props.counterState}%`};
`;
