import React from "react";
import Card from "@mui/material/Card";
import AppButton from "../AppButton";

function AppCard({ style, cardTitle, cardContent, buttonText, buttonAction }) {
  return (
    <Card sx={style}>
      {cardContent}
      <AppButton
        variant="contained"
        color="success"
        style={{
          width: "100%",
          fontSize: "2rem",
        }}
        action={buttonAction}
        children={buttonText}
      />
    </Card>
  );
}

export default AppCard;
