import React from "react";

import { useNavigate } from "react-router-dom";
import ExerciseInfoCard from "../../components/ExerciseInfoCard";
import { homeStyle } from "../HomeAndAbout/mutalStyle";
import { CardContent } from "@mui/material";
import AppText from "../../components/AppText";
import { Box } from "@mui/material";
import AppFooter from "../../components/Footer/AppFooter";
function Home() {
  const navigate = useNavigate();
  function hanlePress() {
    navigate("/workoutPlan");
    console.log("clicked");
  }
  function cardContent() {
    return (
      <CardContent>
        <AppText
          variant="h3"
          color="white"
          children="Unlock Your Fitness Potential"
        />
        <AppText
          variant="h4"
          color="white"
          component="div"
          children="Craft a tailored fitness plan with our AI-powered workout generator. Whether you're a beginner or an enthusiast, achieve your goals with personalized guidance."
        />
      </CardContent>
    );
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ExerciseInfoCard
        warpperStyle={homeStyle.wrapper}
        cardStyle={{ height: "50%", width: "100%" }}
        cardContent={cardContent()}
        buttonAction={hanlePress}
        imgStyle={homeStyle.homeImgWrapper}
      />
      <AppFooter />
    </Box>
  );
}

export default Home;
