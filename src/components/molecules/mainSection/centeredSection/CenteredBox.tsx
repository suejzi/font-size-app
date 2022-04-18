import React, { FC } from "react";
import styled from "styled-components";

// ASSETS
import Image from "../../../../assets/images/stock-photo.jpg";

// STYLED
const CenteredBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("${Image}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 74.5%;

  @media only screen and (max-width: 992px) {
    height: 350px;
  }

  h4 {
    text-transform: uppercase;
    color: #fff;
  }
`;

const CenteredBox: FC = ({}) => (
  <CenteredBoxWrapper>
    <h4>Centered Text</h4>
  </CenteredBoxWrapper>
);

export default CenteredBox;
