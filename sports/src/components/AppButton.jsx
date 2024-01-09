import React from "react";
import Button from "@mui/material/Button";

function AppButton({ variant, color, style, action, children }) {
  return (
    <Button
      variant={variant}
      color={color}
      sx={style}
      onClick={action}
      children={children}
    />
  );
}

export default AppButton;
