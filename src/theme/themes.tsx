import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    color: "#212121",
    body1: {
      fontSize: "14px",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
        input: {
          fontSize: "14px",
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64b5f6",
    },
    secondary: {
      main: "#ba68c8",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#e0e0e0",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    color: "#e0e0e0",
    body1: {
      fontSize: "14px",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
        input: {
          fontSize: "14px",
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
