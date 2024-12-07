import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { IoIosArrowDown } from "react-icons/io";
import { useAppContext } from "../../Context.js";

const TicketFilter = () => {
  const { translations } = useAppContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(
    translations("Selecione a prioridade")
  );
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
    handleClose();
  };

  return (
    <Box>
      <Button
        variant="standard"
        color="primary"
        onClick={handleClick}
        endIcon={<IoIosArrowDown />}
        sx={{
          textTransform: "none",
          borderRadius: "5px",
          padding: "8px 16px",
          border: "1px solid #E7E7E7",
        }}
      >
        {selectedOption}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "8px 0",
          },
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick("Novo Ticket")}>
          <ListItemIcon>
            <FiberManualRecordIcon
              sx={{ color: "#1976D2", fontSize: "20px" }}
            />
          </ListItemIcon>
          <ListItemText primary={translations("Novo Ticket")} />
        </MenuItem>

        <MenuItem onClick={() => handleMenuItemClick("Tickets em andamento")}>
          <ListItemIcon>
            <FiberManualRecordIcon
              sx={{ color: "#FFB74D", fontSize: "20px" }}
            />
          </ListItemIcon>
          <ListItemText primary={translations("Tickets em andamento")} />
        </MenuItem>

        <MenuItem onClick={() => handleMenuItemClick("Tickets fechados")}>
          <ListItemIcon>
            <FiberManualRecordIcon
              sx={{ color: "#4CAF50", fontSize: "20px" }}
            />
          </ListItemIcon>
          <ListItemText primary={translations("Tickets fechados")} />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default TicketFilter;
