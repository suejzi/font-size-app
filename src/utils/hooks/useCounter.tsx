import React, { useReducer } from "react";

export enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export interface ICountAction {
  type: ActionType;
  payload: number;
}

export interface ICountState {
  count: number;
  maxCount: number;
  minCount: number;
}

function counterReducer(state: ICountState, action: ICountAction) {
  const { type, payload } = action;
  switch (type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        count:
          state.count === state.maxCount
            ? state.maxCount
            : state.count + payload,
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        count:
          state.count === state.minCount
            ? state.minCount
            : state.count - payload,
      };
    default:
      return state;
  }
}

export const useCounter = ({ count, maxCount, minCount }: ICountState) => {
  const [counterState, counterDispatchHandler] = useReducer(counterReducer, {
    count,
    maxCount,
    minCount,
  });

  return {
    counterState,
    counterDispatchHandler,
  };
};
