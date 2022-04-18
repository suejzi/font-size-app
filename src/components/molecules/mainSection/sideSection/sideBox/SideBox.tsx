import React, { FC } from "react";
import styled from "styled-components";

// COMPONENTS
import Link from "@mui/material/Link";
import { SizeCounterText } from "../../../../atoms/common/Typography";

// HOOKS & HELPERS
import { ICountState } from "../../../../../utils/hooks/useCounter";

// STYLED
const SideBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(0, 0, 0, 0.1);
  padding: 0 10px 10px 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: unset;
    padding: 10px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media only screen and (min-width: 992px) {
    a {
      display: none;
    }
  }

  img {
    height: 80px;
    width: 60px;
    object-fit: cover;
    margin-right: 10px;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 80px;
  }

  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img,
    p {
      display: none;
    }
  }
`;

const Title = styled.h3`
  span {
    height: 32px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  @media only screen and (max-width: 992px) {
    height: initial;
  } ;
`;

export interface ISideBox {
  sideSection: {
    title: string;
    image: string;
    description: string;
    link: string;
  };
  counterState: ICountState;
}

const SideBox: FC<ISideBox> = ({ sideSection, counterState }) => {
  return (
    <SideBoxWrapper>
      <Title>
        <SizeCounterText counterState={counterState.count}>
          {sideSection.title}
        </SizeCounterText>
      </Title>
      <DescriptionWrapper>
        <img alt={sideSection.title} src={sideSection.image} />
        <p>
          <SizeCounterText counterState={counterState.count}>
            {sideSection.description}
          </SizeCounterText>
        </p>
        <Link href={sideSection.link}>
          <SizeCounterText counterState={counterState.count}>
            {"link >"}
          </SizeCounterText>
        </Link>
      </DescriptionWrapper>
    </SideBoxWrapper>
  );
};

export default SideBox;
