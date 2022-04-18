import React, { FC } from "react";
import styled from "styled-components";

// COMPONENTS
import BottomBox from "../../../molecules/mainSection/bottomSection/bottomBox/BottomBox";

// HOOKS & HELPERS
import { ICountState } from "../../../../utils/hooks/useCounter";

// STYLED
const BottomSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -144px;

  & > div {
    width: 50%;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin-top: 0;

    & > div {
      width: 100%;
    }
  }
`;

export interface IBottomSection {
  bottomSection: {
    title: string;
    image: string;
  }[];
  counterState: ICountState;
}

const BottomSection: FC<IBottomSection> = ({ bottomSection, counterState }) => {
  const Boxes = bottomSection.map((single) => (
    <BottomBox
      key={single.title}
      bottomSection={single}
      counterState={counterState}
    />
  ));

  return <BottomSectionWrapper>{Boxes}</BottomSectionWrapper>;
};

export default BottomSection;
