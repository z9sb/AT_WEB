import { Box, IconButton, Typography } from "@mui/material";
import { RxDashboard } from "react-icons/rx";
import { RiUser3Line } from "react-icons/ri";
import { PiTicketDuotone } from "react-icons/pi";
import { TbSettings2 } from "react-icons/tb";

const LeftMenu = ({ open }) => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <img src="https://imgur.com/L6f4wux.png" alt="logo" width={50} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          variant="text"
          sx={{
            borderRadius: "10px",
            width: "100%",
            justifyContent: "flex-start",
            color: "#2E2C34",
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginLeft: open ? "30px" : "15px",
              transition: "margin-left 0.3s ease-in-out",
            }}
          >
            <RxDashboard />
            {open ? (
              <Typography sx={{ marginLeft: "10px" }}>Dashboard</Typography>
            ) : (
              ""
            )}
          </Box>
        </IconButton>
        <IconButton
          variant="started"
          sx={{
            borderRadius: "10px",
            width: "100%",
            justifyContent: "flex-start",
            color: "#2E2C34",
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginLeft: open ? "30px" : "15px",
              transition: "margin-left 0.3s ease-in-out",
            }}
          >
            <RiUser3Line />
            {open ? (
              <Typography sx={{ marginLeft: "10px" }}>User</Typography>
            ) : (
              ""
            )}
          </Box>
        </IconButton>
        <IconButton
          variant="started"
          sx={{
            borderRadius: "10px",
            width: "100%",
            justifyContent: "flex-start",
            color: "#2E2C34",
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginLeft: open ? "30px" : "15px",
              transition: "margin-left 0.3s ease-in-out",
            }}
          >
            <PiTicketDuotone />
            {open ? (
              <Typography sx={{ marginLeft: "10px" }}>Ticket</Typography>
            ) : (
              ""
            )}
          </Box>
        </IconButton>
        <IconButton
          variant="started"
          sx={{
            borderRadius: "10px",
            width: "100%",
            justifyContent: "flex-start",
            color: "#2E2C34",
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginLeft: open ? "30px" : "15px",
              transition: "margin-left 0.3s ease-in-out",
            }}
          >
            <TbSettings2 />
            {open ? (
              <Typography sx={{ marginLeft: "10px" }}>Settings</Typography>
            ) : (
              ""
            )}
          </Box>
        </IconButton>
      </Box>
    </Box>
  );
};

export default LeftMenu;
