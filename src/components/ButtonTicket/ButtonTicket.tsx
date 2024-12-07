import SelectPriority from "../SelectPriority/SelectPriority.tsx";
import { TbEdit } from "react-icons/tb";
import { Box, Button } from "@mui/material";
import { useAppContext } from "../../Context.js";

const ButtonTicket = ({ setOpen, open }) => {
  const { translations } = useAppContext();
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <SelectPriority />
      <Button
        startIcon={<TbEdit />}
        variant="standard"
        onClick={() => setOpen(!open)}
        sx={{
          borderRadius: "5px",
          border: "1px solid #E7E7E7",
          textTransform: "none",
          height: "42px",
          color: "white",
          backgroundColor: "#1A1A1A",
        }}
      >
        {translations("Novo ticket")}
      </Button>
    </Box>
  );
};

export default ButtonTicket;
