import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Typography,
  Tooltip,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import * as React from "react";

const AccountMenu = ({ name }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Conta">
          <IconButton
            onClick={handleClick}
            sx={{
              width: "100%",
              borderRadius: "20px",
              backgroundColor: "#FAFAFA",
              padding: '4px'
            }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{
                bgcolor: deepPurple[500],
                width: 35,
                height: 35,
                fontSize: 16,
                marginRight: 1,
              }}
            >
              OP
            </Avatar>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1">{name}</Typography>
              <ArrowDropDownIcon />
            </Box>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default AccountMenu;
