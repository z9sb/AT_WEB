import { Box, Typography } from "@mui/material";
import * as React from "react";

import InputText from "../components/InputText/InputText.tsx";
import ButtonTicket from "../components/ButtonTicket/ButtonTicket.tsx";
import LabTabsTicket from "../components/ControlTicket/ControlTicket.tsx";

const Dashboard = () => {
  return (
    <Box
      sx={{
        padding: "20px 40px",
        backgroundColor: "#F8F8F8",
        height: "87.6vh",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "10px" }}>
        Ticketz
      </Typography>
      <Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "5px",
            height: "75.9vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <InputText />
            <ButtonTicket />
          </Box>
          <LabTabsTicket />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
