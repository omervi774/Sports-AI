import Typography from "@mui/material/Typography";
import React from "react";

export default function AppText({
  variant,
  component,
  color,
  gutterBottomFlag,
  children,
}) {
  return (
    <Typography
      variant={variant}
      component={component}
      color={color}
      children={children}
      gutterBottom
    />
  );
}
