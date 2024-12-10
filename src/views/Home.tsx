import { Box, Divider, CssBaseline, ThemeProvider } from "@mui/material";
import HeaderComponent from "../components/header/HeaderComponent";
import LeftMenu from "../components/LeftMenu/Menu";
import React from "react";
import { Outlet } from "react-router-dom";
import { lightTheme, darkTheme } from "../theme/themes.tsx";

const Home = () => {
  const [open, setOpen] = React.useState(true);
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("isDarkMode", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: open ? "12%" : "4%",
            transition: "width 0.3s ease-in-out",
          }}
        >
          <LeftMenu open={open} />
        </Box>
        <Divider orientation="vertical" flexItem sx={{ height: "100vh" }} />
        <Box
          sx={{
            width: open ? "88%" : "96%",
            transition: "width 0.3s ease-in-out",
          }}
        >
          <HeaderComponent
            setOpen={setOpen}
            open={open}
            setDarkMode={toggleTheme}
            darkMode={isDarkMode}
          />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
