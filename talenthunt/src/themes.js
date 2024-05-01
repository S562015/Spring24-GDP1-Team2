import { createTheme } from "@mui/material/styles";

export const globalTheme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#FFC107",
    },
  },
});
