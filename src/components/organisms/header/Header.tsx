import React, { FC } from "react";
import styled from "styled-components";

// COMPONENTS
import MenuItem, { IMenuItem } from "../../molecules/header/menuItem/MenuItem";
import { SizeCounterText } from "../../atoms/common/Typography";

// HOOKS & HELPERS
import { ICountState } from "../../../utils/hooks/useCounter";

// STYLED
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  align-items: center;
  padding: 40px 0;
  z-index: 1;

  @media only screen and (max-width: 1440px) {
    padding: 40px 10px;
  }

  @media only screen and (max-width: 992px) {
    padding: 0 0 0 10px;
  }

  h2 {
    color: #fff;
  }

  .nav {
    width: calc(100% - 20px);
    margin-left: 10px;
    height: 100%;
    position: fixed;
    background-color: #1e1e23;
    overflow: hidden;
    left: 0;
    top: 80px;
    max-height: 0;
    transition: max-height 0.3s ease-out;

    ul {
      padding-left: 10px;
    }
  }

  .hamb {
    cursor: pointer;
    float: right;
    padding: 40px 20px;
  }

  .hamb-line {
    background: white;
    display: block;
    height: 2px;
    position: relative;
    width: 24px;

    &:before,
    &:after {
      background: white;
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.3s ease-out;
      width: 100%;
    }

    &:before {
      top: 5px;
    }

    &:after {
      top: -5px;
    }
  }

  .side-menu {
    display: none;

    &:checked {
      & ~ nav {
        max-height: 100%;
      }
      & ~ .hamb .hamb-line {
        background: transparent;
      }

      & ~ .hamb .hamb-line::before {
        transform: rotate(-45deg);
        top: 0;
      }

      & ~ .hamb .hamb-line::after {
        transform: rotate(45deg);
        top: 0;
      }
    }
  }

  /* Responsiveness */

  @media only screen and (min-width: 992px) {
    .nav {
      max-height: none;
      top: 0;
      left: 0;
      position: relative;
      width: fit-content;
      background-color: transparent;

      ul {
        span {
          display: flex;
          flex-direction: row;
        }
      }
    }

    .hamb {
      display: none;
    }
  }
`;

export interface IHeader {
  counterState: ICountState;
  menuItems: IMenuItem[];
}

const Header: FC<IHeader> = ({ menuItems, counterState }) => {
  const Menu = menuItems.map((single) => (
    <MenuItem key={single.itemText} itemText={single.itemText} />
  ));

  return (
    <HeaderWrapper>
      <h2>
        <SizeCounterText counterState={counterState.count}>
          Sticky Header
        </SizeCounterText>
      </h2>
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>
      <nav className="nav">
        <ul className="menu">
          <SizeCounterText counterState={counterState.count}>
            {Menu}
          </SizeCounterText>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
