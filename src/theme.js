import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#548c2f",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#eeb45b",
    },
    accent: {
      main: "#e63946",
    },
    background: {
      default: "#ffffff",
    },
    card: {
      first: "#00bbf9",
      second: "#548c2f",
      third: "#eeb45b",
      fourth: "#f15bb5",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontFamily: "Indie Flower",
    },
    p: {
      fontFamily: "Roboto",
      fontSize: "1.2rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        h1: {
          fontFamily: "Indie Flower",
          fontSize: "3rem",
          textAlign: "center",
        },
        h2: {
          fontFamily: "Indie Flower",
          fontSize: "2rem",
        },
        p: {
          fontFamily: "Roboto",
          fontSize: "1.2rem",
        },
      },
    },
  },
});

export default theme;
