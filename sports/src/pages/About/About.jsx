import React from "react";
import { useNavigate } from "react-router-dom";
import ExerciseInfoCard from "../../components/ExerciseInfoCard";
import { aboutStyle } from "../HomeAndAbout/mutalStyle";
import { CardContent } from "@mui/material";
import AppText from "../../components/AppText";
import { items } from "./consts";
import AppFooter from "../../components/Footer/AppFooter";
function About() {
  const navigate = useNavigate();
  function hanlePress() {
    navigate("/workoutPlan");
    console.log("clicked");
  }
  function cardContent() {
    return (
      <CardContent>
        {items.map((val) => {
          return (
            <AppText
              key={val.id}
              variant={val.variant}
              color={val.color}
              component={val.component ? val.component : null}
              children={val.children}
            />
          );
        })}
      </CardContent>
    );
  }
  return (
    <>
      <ExerciseInfoCard
        warpperStyle={aboutStyle.wrapper}
        cardStyle={{ width: "100%" }}
        cardTitle="Unlock Your Fitness Potential"
        cardContent={cardContent()}
        buttonAction={hanlePress}
        imgStyle={aboutStyle.aboutImgWrapper}
      />
      <AppFooter />
    </>
  );
}

export default About;
