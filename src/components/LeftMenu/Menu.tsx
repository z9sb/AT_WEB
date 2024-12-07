import { Box, IconButton, Typography } from "@mui/material";
import { RxDashboard } from "react-icons/rx";
import { RiUser3Line } from "react-icons/ri";
import { PiTicketDuotone } from "react-icons/pi";
import { TbSettings2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context.tsx";

const LeftMenu = ({ open }) => {
  const navigate = useNavigate();
  const { translations } = useAppContext();

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
          onClick={() => navigate("/dashboard")}
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
              <Typography sx={{ marginLeft: "10px" }}>{translations("Painel")}</Typography>
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
              <Typography sx={{ marginLeft: "10px" }}>{translations("Usuários")}</Typography>
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
              <Typography sx={{ marginLeft: "10px" }}>{translations("Tickets")}</Typography>
            ) : (
              ""
            )}
          </Box>
        </IconButton>
        <IconButton
          onClick={() => navigate("/settings")}
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
              <Typography sx={{ marginLeft: "10px" }}>{translations("Configurações")}</Typography>
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
