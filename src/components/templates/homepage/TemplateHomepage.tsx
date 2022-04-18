import React, { FC, useState } from "react";
import styled from "styled-components";

// COMPONENTS
import CounterSection from "../../organisms/mainSection/counterSection/CounterSection";
import { SectionWrapper, TemplateWrapper } from "../../atoms/common/Layout";
import CenteredBox from "../../molecules/mainSection/centeredSection/CenteredBox";
import SideSection from "../../organisms/mainSection/sideSection/SideSection";
import BottomSection from "../../organisms/mainSection/bottomSection/BottomSection";
import Header from "../../organisms/header/Header";
import Footer from "../../organisms/footer/Footer";

// HOOKS & HELPERS
import { useCounter } from "../../../utils/hooks/useCounter";

// DATA
import { mockData } from "../../../utils/data/mockData";

// STYLED
const HeaderWrapper = styled.header`
  display: flex;
  background-color: #1e1e23;
  margin-bottom: 5px;
  top: 0;
  width: 100%;
  position: sticky;
  z-index: 1;
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  border-top: 2px solid #1e1e23;
  width: 100%;
  bottom: 0;
  margin-top: auto;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    width: 66.666%;
    margin-right: 15px;
    margin-bottom: 10px;
  }

  & > div:nth-child(2) {
    width: calc(33.333% - 15px);
    margin-right: 0;
  }

  @media only screen and (max-width: 992px) {
    & > div {
      width: 100%;
      margin-right: 0;

      &:nth-child(2),
      &:nth-child(3) {
        width: calc(50% - 5px);
      }

      &:nth-child(2) {
        order: 3;
        margin-left: 5px;
      }

      &:nth-child(3) {
        order: 2;
        margin-right: 5px;
      }

      &:last-child {
        order: 4;
      }
    }
  }
`;

const TemplateHomepage: FC = () => {
  const localStorageCount = localStorage.getItem("fontSizeCounter");

  const { counterState, counterDispatchHandler } = useCounter({
    count: localStorageCount !== null ? JSON.parse(localStorageCount) : 100,
    maxCount: 125,
    minCount: 75,
  });

  const [closeCounter, setCloseCounter] = useState(true);

  const closeCounterHandler = () => {
    setCloseCounter(false);
  };

  return (
    <TemplateWrapper>
      <HeaderWrapper>
        <SectionWrapper>
          <Header menuItems={mockData.menuItems} counterState={counterState} />
        </SectionWrapper>
      </HeaderWrapper>
      <SectionWrapper>
        <MainWrapper>
          <div>
            <CenteredBox />
          </div>
          <SideSection
            sideSection={mockData.sideSection}
            counterState={counterState}
          />
          <BottomSection
            bottomSection={mockData.bottomSection}
            counterState={counterState}
          />
          {closeCounter && (
            <CounterSection
              counterDispatchHandler={counterDispatchHandler}
              counterState={counterState}
              closeCounterHandler={closeCounterHandler}
            />
          )}
        </MainWrapper>
      </SectionWrapper>
      <FooterWrapper>
        <SectionWrapper>
          <Footer counterState={counterState} />
        </SectionWrapper>
      </FooterWrapper>
    </TemplateWrapper>
  );
};

export default TemplateHomepage;
