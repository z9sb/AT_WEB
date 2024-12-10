import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { database } from "../services/database.js";
import { useAppContext } from "../Context.js";

const TicketForm = ({ open, setOpen }) => {
  const { translations } = useAppContext();
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    database(data);
    reset();
  };

  const ticketType = watch("type");

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 300,
        margin: "0px 0px 0px 10px",
        border: "1px solid #E7E7E7",
        padding: "20px",
        borderRadius: "5px",
        transition: "margin-left 0.3s ease-in-out",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "10px", fontSize: "18px" }}>
        {translations("Criar ticket rápido")}
      </Typography>
      <Typography
        variant="outlined"
        sx={{ marginBottom: "10px", fontSize: "14px", color: "#9E9E9E" }}
      >
        {translations("Escreva abaixo suas sugestões e problemas")}
      </Typography>
      <Divider sx={{ m: "10px 0" }} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
        }}
      >
        <Controller
          name="title"
          control={control}
          defaultValue=""
          rules={{ required: "Título é requerido" }}
          render={({ field }) => (
            <TextField
              {...field}
              label={translations("Título")}
              variant="outlined"
              error={!!errors.title}
              helperText={errors.title?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          defaultValue=""
          rules={{ required: "Descrição é requerida" }}
          render={({ field }) => (
            <TextField
              {...field}
              label={translations("Descrição")}
              variant="outlined"
              multiline
              rows={4}
              error={!!errors.description}
              helperText={errors.description?.message}
              fullWidth
            />
          )}
        />

        <FormControl fullWidth error={!!errors.type}>
          <InputLabel>{translations("Tipo")}</InputLabel>
          <Controller
            name="type"
            control={control}
            defaultValue=""
            rules={{ required: "Tipo é requerido" }}
            render={({ field }) => (
              <Select {...field} label="Tipo">
                <MenuItem value="">
                  <em>{translations("Selecione um tipo")}</em>
                </MenuItem>
                <MenuItem value="bug">{translations("Erro")}</MenuItem>
                <MenuItem value="feature">{translations("Sugestão")}</MenuItem>
              </Select>
            )}
          />
          {errors.type && <p style={{ color: "red" }}>{errors.type.message}</p>}
        </FormControl>

        {ticketType === "bug" && <FormBug control={control} errors={errors} />}
        {ticketType === "feature" && (
          <FormFeature control={control} errors={errors} />
        )}

        <Button
          variant="standard"
          type="submit"
          sx={{
            borderRadius: "5px",
            border: "1px solid #E7E7E7",
            textTransform: "none",
            height: "42px",
            color: "white",
            backgroundColor: "#1A1A1A",
          }}
        >
          {translations("Enviar ticket")}
        </Button>
        <Button
          variant="standard"
          type="reset"
          onClick={() => setOpen(!open)}
          sx={{
            borderRadius: "5px",
            border: "1px solid #E7E7E7",
            textTransform: "none",
            height: "42px",
            color: "#1A1A1A",
            backgroundColor: "white",
          }}
        >
          {translations("Cancelar")}
        </Button>
      </form>
    </Box>
  );
};

const FormBug = ({ control, errors }) => {
  const { translations } = useAppContext();

  return (
    <FormControl fullWidth error={!!errors.severity}>
      <InputLabel>Severidade</InputLabel>
      <Controller
        name="severity"
        control={control}
        defaultValue=""
        rules={{ required: "Severidade é requerida" }}
        render={({ field }) => (
          <Select {...field} label="Severidade">
            <MenuItem value="">
              <em>{translations("Selecione a severidade")}</em>
            </MenuItem>
            <MenuItem value="low">{translations("Baixa")}</MenuItem>
            <MenuItem value="medium">{translations("Média")}</MenuItem>
            <MenuItem value="high">{translations("Alta")}</MenuItem>
            <MenuItem value="critical">{translations("Imediata")}</MenuItem>
          </Select>
        )}
      />
      {errors.severity && (
        <p style={{ color: "red" }}>{errors.severity.message}</p>
      )}
    </FormControl>
  );
};

const FormFeature = ({ control, errors }) => {
  const { translations } = useAppContext();

  return (
    <FormControl fullWidth error={!!errors.priority}>
      <InputLabel>{translations("Propriedade")}</InputLabel>
      <Controller
        name="priority"
        control={control}
        defaultValue=""
        rules={{ required: "Propriedade é requerida" }}
        render={({ field }) => (
          <Select {...field} label="Propriedade">
            <MenuItem value="">
              <em>{translations("Selecione uma propriedade")}</em>
            </MenuItem>
            <MenuItem value="low">{translations("Melhoria de aparência")}</MenuItem>
            <MenuItem value="high">{translations("Novas funções")}</MenuItem>
            <MenuItem value="medium">{translations("Outros")}</MenuItem>
          </Select>
        )}
      />
      {errors.priority && (
        <p style={{ color: "red" }}>{errors.priority.message}</p>
      )}
    </FormControl>
  );
};

export default TicketForm;
