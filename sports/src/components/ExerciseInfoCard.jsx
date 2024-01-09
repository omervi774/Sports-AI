import React from "react";
import AppCard from "./Card/AppCard";
import { Box } from "@mui/material";

function ExerciseInfoCard({
  warpperStyle,
  cardStyle,
  cardTitle,
  cardContent,
  buttonAction,
  imgStyle,
}) {
  return (
    <Box sx={warpperStyle}>
      <AppCard
        style={cardStyle}
        cardTitle={cardTitle}
        cardContent={cardContent}
        buttonText="get started"
        buttonAction={buttonAction}
      />
      <Box sx={imgStyle} />
    </Box>
  );
}

export default ExerciseInfoCard;
