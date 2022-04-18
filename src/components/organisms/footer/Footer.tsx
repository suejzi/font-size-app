import React, { FC } from "react";
import { ICountState } from "../../../utils/hooks/useCounter";
import { SizeCounterText } from "../../atoms/common/Typography";

export interface IFooter {
  counterState: ICountState;
}

const Footer: FC<IFooter> = ({ counterState }) => {
  return (
    <h3>
      <SizeCounterText counterState={counterState.count}>
        footer always at the bottom
      </SizeCounterText>
    </h3>
  );
};

export default Footer;
