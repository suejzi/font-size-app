import React, { FC } from "react";
import styled from "styled-components";

// STYLED
const Item = styled.li`
  color: #fff;
  cursor: pointer;
  text-decoration: unset;
  list-style-type: none;
  text-transform: capitalize;

  margin-bottom: 10px;

  @media only screen and (min-width: 992px) {
    margin-left: 10px;
    margin-bottom: 0;
  }

  &:hover {
    color: #f1f1f1;
  }
`;

export interface IMenuItem {
  itemText: string;
}

const MenuItem: FC<IMenuItem> = ({ itemText }) => {
  return <Item>{itemText}</Item>;
};

export default MenuItem;
