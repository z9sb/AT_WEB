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

const TicketForm = ({ open, setOpen }) => {
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
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        transition: "margin-left 0.3s ease-in-out",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "10px", fontSize: "18px" }}>
        Criar ticket rápido
      </Typography>
      <Typography
        variant="outlined"
        sx={{ marginBottom: "10px", fontSize: "14px", color: "#9E9E9E" }}
      >
        Escreva abaixo suas sugestões e problemas
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
              label="Título"
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
              label="Descrição"
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
          <InputLabel>Tipo</InputLabel>
          <Controller
            name="type"
            control={control}
            defaultValue=""
            rules={{ required: "Tipo é requerido" }}
            render={({ field }) => (
              <Select {...field} label="Tipo">
                <MenuItem value="">
                  <em>Selecione um tipo</em>
                </MenuItem>
                <MenuItem value="bug">Erro</MenuItem>
                <MenuItem value="feature">Sugestão</MenuItem>
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
          Enviar Ticket
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
          Cancelar
        </Button>
      </form>
    </Box>
  );
};

const FormBug = ({ control, errors }) => (
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
            <em>Selecione a severidade</em>
          </MenuItem>
          <MenuItem value="low">Baixa</MenuItem>
          <MenuItem value="medium">Média</MenuItem>
          <MenuItem value="high">Alta</MenuItem>
          <MenuItem value="critical">Imediata</MenuItem>
        </Select>
      )}
    />
    {errors.severity && (
      <p style={{ color: "red" }}>{errors.severity.message}</p>
    )}
  </FormControl>
);

const FormFeature = ({ control, errors }) => (
  <FormControl fullWidth error={!!errors.priority}>
    <InputLabel>Propriedade</InputLabel>
    <Controller
      name="priority"
      control={control}
      defaultValue=""
      rules={{ required: "Propriedade é requerida" }}
      render={({ field }) => (
        <Select {...field} label="Propriedade">
          <MenuItem value="">
            <em>Selecione uma prioridade</em>
          </MenuItem>
          <MenuItem value="low">Melhoria de aparência</MenuItem>
          <MenuItem value="high">Nova funcionalidade</MenuItem>
          <MenuItem value="medium">Outros</MenuItem>
        </Select>
      )}
    />
    {errors.priority && (
      <p style={{ color: "red" }}>{errors.priority.message}</p>
    )}
  </FormControl>
);

export default TicketForm;
