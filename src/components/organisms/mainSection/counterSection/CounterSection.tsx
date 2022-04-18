import React, { FC } from "react";
import styled from "styled-components";

// COMPONENTS
import Counter from "../../../molecules/mainSection/counterSection/Counter";
import CommonIconButton from "../../../atoms/common/iconButton/CommonIconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ICounter } from "../../../molecules/mainSection/counterSection/Counter";

const CounterSectionWrapper = styled.div`
  position: relative;
  z-index: 0;

  & > div {
    padding: 30px;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }

  & > button {
    position: absolute;
    right: 2px;
    top: 2px;
  }
`;

interface ICounterSection extends ICounter {
  closeCounterHandler: Function;
}

const CounterSection: FC<ICounterSection> = ({
  counterDispatchHandler,
  counterState,
  closeCounterHandler,
}) => {
  return (
    <CounterSectionWrapper>
      <Counter
        counterDispatchHandler={counterDispatchHandler}
        counterState={counterState}
      />
      <CommonIconButton clickHandler={closeCounterHandler} color="warning">
        <CloseIcon />
      </CommonIconButton>
    </CounterSectionWrapper>
  );
};

export default CounterSection;
