import { Box, Button, IconButton, Typography } from "@mui/material";
import AccountMenu from "../Account/AccountMenu.tsx";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useAppContext } from "../../Context.tsx";
import { TbSunHigh } from "react-icons/tb";

const Header = ({ setOpen, open, setDarkMode, darkMode }) => {
  const { translations } = useAppContext();
  
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", padding: "10px" }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="standard"
          onClick={() => setOpen(!open)}
          startIcon={<HiOutlineMenuAlt1 size={30} />}
        ></Button>
        <Typography sx={{ fontSize: "18px" }}>
          {translations("Bem vindo!")}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <IconButton
          sx={{
            border: "1px solid #E7E7E7",
            marginRight: "5px",
            width: "43px",
            height: "43px",
          }}
        >
          <IoIosNotificationsOutline size={25} />
        </IconButton>
        <IconButton
          onClick={() => setDarkMode(!darkMode)}
        >
          <TbSunHigh />
        </IconButton>
        <AccountMenu name={"João Pereira"} />
      </Box>
    </Box>
  );
};

export default Header;
