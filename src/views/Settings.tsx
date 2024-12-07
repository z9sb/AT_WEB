import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import { useAppContext } from "../Context.tsx";
import { IoLanguageOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigator = useNavigate();

  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || "pt";
  });

  const { switchLanguage } = useAppContext();
  const { translations } = useAppContext();
  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    switchLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <Box sx={{ padding: "20px", width: "90%" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        {translations("Configurações")}
      </Typography>

      <Box sx={{ marginBottom: "20px", marginTop: "20px" }}>
        <IoLanguageOutline size={20} color="#1A1A1A" />
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ color: "#1A1A1A" }}>
            {translations("Idioma")}
          </FormLabel>
          <RadioGroup
            row
            value={selectedLanguage}
            onChange={handleLanguageChange}
            sx={{
              marginTop: "10px",
              "& .MuiFormControlLabel-label": {
                color: "#2E2C34",
              },
              "& .MuiRadio-root": {
                color: "#2E2C34",
              },
              "& .Mui-checked": {
                color: "#1A1A1A",
              },
            }}
          >
            <FormControlLabel
              value="en"
              control={<Radio />}
              label={translations("English")}
            />
            <FormControlLabel
              value="pt"
              control={<Radio />}
              label={translations("Português")}
              sx={{ color: "#2E2C34" }}
            />
            <FormControlLabel
              value="es"
              control={<Radio />}
              label={translations("Español")}
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Typography variant="h6">Ticket</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <TextField
          sx={{ marginBottom: "10px", width: "100%" }}
          label="E-mail"
          variant="standard"
          fullWidth
        />
        <TextField label={translations("Senha")} variant="standard" fullWidth />
      </Box>

      <Button
        variant="standard"
        color="primary"
        onClick={() => window.location.reload()}
        sx={{ marginTop: "20px", color: "white", backgroundColor: "#1A1A1A" }}
      >
        {translations("Salvar")}
      </Button>
    </Box>
  );
};

export default Settings;
