import { Box, Typography } from "@mui/material";
import * as React from "react";
import CardMenu from "../components/CardMenu/index.jsx";

const Dashboard = () => {
  const [open, setOpen] = React.useState(() => {
    const storedOpen = localStorage.getItem("ticketModalOpen");
    return storedOpen === "true";
  });

  const handleSetOpen = (newOpenState) => {
    setOpen(newOpenState);
    localStorage.setItem("ticketModalOpen", newOpenState);
  };

  return (
    <Box
      sx={{
        padding: "20px 40px",
        height: "87.6vh",
      }}
    >
      
      <CardMenu />
    </Box>
  );
};

export default Dashboard;
