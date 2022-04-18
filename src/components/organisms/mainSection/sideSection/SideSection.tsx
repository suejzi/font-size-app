import React, { FC } from "react";
import styled from "styled-components";

// COMPONENTS
import SideBox from "../../../molecules/mainSection/sideSection/sideBox/SideBox";
import { ICountState } from "../../../../utils/hooks/useCounter";

// MOCK DATA
const SideSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 992px) {
    height: auto;
  }
`;

export interface ISideSection {
  sideSection: {
    title: string;
    image: string;
    description: string;
    link: string;
  }[];
  counterState: ICountState;
}

const SideSection: FC<ISideSection> = ({ sideSection, counterState }) => {
  const Boxes = sideSection.map((single) => {
    return (
      <SideBox
        key={single.title}
        counterState={counterState}
        sideSection={single}
      />
    );
  });

  return <SideSectionWrapper>{Boxes}</SideSectionWrapper>;
};

export default SideSection;
