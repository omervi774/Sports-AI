import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import theme from "./Theme";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="workoutPlan" element={<h1> workout</h1>} />
          <Route path="about" element={<h1> about</h1>} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
