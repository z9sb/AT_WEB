import { Box } from "@mui/material";
import HeaderComponent from "../components/header/HeaderComponent";
import LeftMenu from "../components/LeftMenu/Menu";
import React from "react";
import Divider from "@mui/material/Divider";
import { Outlet } from "react-router-dom";


const Home = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: open ? "12%" : "4%",
          transition: "width 0.3s ease-in-out",
        }}
      >
        <LeftMenu open={open} />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ height: "100vh" }}/>
      <Box
        sx={{
          width: open ? "88%" : "96%",
          transition: "width 0.3s ease-in-out",
        }}
      >
        <HeaderComponent setOpen={setOpen} open={open} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;

