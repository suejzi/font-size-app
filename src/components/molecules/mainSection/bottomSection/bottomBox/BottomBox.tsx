import React, { FC } from "react";
import styled from "styled-components";

// HOOKS
import { ICountState } from "../../../../../utils/hooks/useCounter";

// TYPOGRAPHY
import { SizeCounterText } from "../../../../atoms/common/Typography";

// STYLED
const BottomBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-right: 15px;
  }

  img {
    height: 129px;
    object-fit: cover;
  }

  div {
    border: 2px solid rgba(0, 0, 0, 0.1);
    height: 125px;

    h3 {
      padding-left: 10px;
      padding-top: 10px;
    }
  }

  @media only screen and (max-width: 992px) {
    margin-bottom: 5px;

    &:first-child {
      margin-right: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    img {
      height: 49px;
    }

    div {
      height: 49px;
      width: auto;
      display: flex;
      align-items: center;
      padding-left: 10px;

      h3 {
        padding: 3px 0 0 0;
        text-overflow: ellipsis;
        line-clamp: 1;
      }
    }
  }
`;

const Title = styled.h3``;

export interface IBottomBox {
  bottomSection: {
    title: string;
    image: string;
  };
  counterState: ICountState;
}

const BottomBox: FC<IBottomBox> = ({ bottomSection, counterState }) => {
  return (
    <BottomBoxWrapper>
      <img alt={bottomSection.title} src={bottomSection.image} />
      <div>
        <Title>
          <SizeCounterText counterState={counterState.count}>
            {bottomSection.title}
          </SizeCounterText>
        </Title>
      </div>
    </BottomBoxWrapper>
  );
};

export default BottomBox;
