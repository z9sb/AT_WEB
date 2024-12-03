import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    body1: {
      fontSize: "14px",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "12px",
        },
        input: {
          fontSize: "12px",
        },
      },
    },
  },
});

export default theme;
