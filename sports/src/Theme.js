import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#e0e0d1 ",
      light: "#ecf0f1",
    },
    secondary: {
      main: "#2c3e50",
      light: "#white",
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
          color: "black",
          "&:hover": {
            cursor: "pointer",
            border: "2px solid #bdc3c7",
            borderRadius: "3px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#2c3e50",
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
