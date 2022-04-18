import React, { FC } from "react";
import { IconButton } from "@mui/material";

interface ICommonIconButton {
  color: "primary" | "warning" | "secondary";
  clickHandler?: any;
}

const CommonIconButton: FC<ICommonIconButton> = ({
  children,
  color,
  clickHandler,
}) => (
  <IconButton onClick={() => clickHandler()} color={color}>
    {children}
  </IconButton>
);

export default CommonIconButton;
