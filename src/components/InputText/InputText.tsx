import InputAdornment from "@mui/material/InputAdornment";
import { AiOutlineSearch } from "react-icons/ai";
import { Box, TextField } from "@mui/material";

const InputText = () => {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        placeholder="buscar"
        variant="outlined"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AiOutlineSearch size={20} />
              </InputAdornment>
            ),
            style: {
              height: "42px",
              fontSize: "14px",
              width: "95%",
            },
          },
        }}
      />
    </Box>
  );
};

export default InputText;