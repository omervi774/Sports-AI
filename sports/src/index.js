import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import theme from "./Theme";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import WorkOut from "./pages/Workout/WorkOut";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="workoutPlan" element={<WorkOut />} />
          <Route path="about" element={<About />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
