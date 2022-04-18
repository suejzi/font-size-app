import React, { Dispatch, FC, useEffect, useState } from "react";
import styled from "styled-components";

// COMPONENTS
import CommonIconButton from "../../../atoms/common/iconButton/CommonIconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Alert from "@mui/material/Alert";

// HOOKS & HELPERS
import {
  ActionType,
  ICountAction,
  ICountState,
} from "../../../../utils/hooks/useCounter";
import { asyncLocalStorage } from "../../../../utils/helpers/asyncLocalStorage";

// STYLED
const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const AlertMessage = styled(Alert)`
  position: absolute;
  bottom: 0;
  right: 26px;
  border: 0 !important;
  p {
    color: red;
  }
`;

export interface ICounter {
  counterState: ICountState;
  counterDispatchHandler: Dispatch<ICountAction>;
}

const Counter: FC<ICounter> = ({ counterDispatchHandler, counterState }) => {
  const { count, maxCount, minCount } = counterState;
  const counterStateCondition = count >= maxCount || count <= minCount;
  const [alert, setAlert] = useState(counterStateCondition);

  useEffect(() => {
    setAlert(false);
    if (counterStateCondition) {
      setAlert(true);
      const timer = setTimeout(() => {
        setAlert(false);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [counterState, setAlert]);

  const dispatchHandler = (
    type: ActionType,
    payload: number,
    count: number,
    countMaxMin: number,
    countMathOperation: number
  ) => {
    asyncLocalStorage.setItem(
      "fontSizeCounter",
      countMaxMin === count ? count : countMathOperation
    );

    counterDispatchHandler({
      type,
      payload,
    });
  };

  const alertMessage = alert ? (
    <AlertMessage variant="outlined" severity="error">
      <p>Osiągnięto limit!</p>
    </AlertMessage>
  ) : null;
  return (
    <CounterWrapper>
      {alertMessage}
      <h4>Font size: {count}%</h4>
      <CommonIconButton
        clickHandler={() =>
          dispatchHandler(ActionType.INCREMENT, 5, count, maxCount, count + 5)
        }
        color="primary"
      >
        <AddCircleOutlineIcon />
      </CommonIconButton>
      <CommonIconButton
        clickHandler={() =>
          dispatchHandler(ActionType.DECREMENT, 5, count, minCount, count - 5)
        }
        color="primary"
      >
        <RemoveCircleOutlineIcon />
      </CommonIconButton>
    </CounterWrapper>
  );
};

export default Counter;
