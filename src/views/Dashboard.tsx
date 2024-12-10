import { Box, Typography } from "@mui/material";
import * as React from "react";
import InputText from "../components/InputText/InputText.tsx";
import ButtonTicket from "../components/ButtonTicket/ButtonTicket.tsx";
import LabTabsTicket from "../components/ControlTicket/ControlTicket.tsx";
import TicketForm from "./Form.tsx";

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
      <Typography variant="h4" sx={{ marginBottom: "10px" }}>
        Ticket
      </Typography>
      <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
        <Box
          sx={{
            padding: "20px",
            borderRadius: "5px",
            height: "75.9vh",
            width: "100%",
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
            <ButtonTicket setOpen={handleSetOpen} open={open} />
          </Box>
          <LabTabsTicket />
        </Box>

        {open && <TicketForm setOpen={handleSetOpen} open={open} />}
      </Box>
    </Box>
  );
};

export default Dashboard;
