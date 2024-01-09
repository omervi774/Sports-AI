import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./components/Header/AppHeader";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        // height: "100%",
        // width: "100%",
        flex: 1,
        backgroundColor: "#e0e0d1",
      }}
    >
      <AppHeader />
      <Outlet />
    </Box>
  );
}

export default App;
