import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3498db",
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
  },
});

export default theme;
