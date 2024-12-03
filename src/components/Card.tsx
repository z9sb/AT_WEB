import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { deepPurple, deepOrange } from "@mui/material/colors";
import AvatarComponent from "./avatar";
import Checkbox from '@mui/material/Checkbox';

const CardComponent: React.FC = () => {
  const user = {
    name: "João Pereira",
    age: 29,
    email: "joao.pereira@example.com",
    city: "São Paulo",
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Stack
      direction="column"
      spacing={2}
      border={1}
      borderRadius={1}
      width={250}
      alignItems="center"
      padding={2}
      margin={2}
      sx={{
        borderColor: deepPurple[500],
      }}
    >
      <AvatarComponent user={user}/>

      <Typography variant="h6">{user.name}</Typography>
      <Box textAlign="center">
        <Typography variant="body1" color="text.secondary">
          Idade: {user.age}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Email: {user.email}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Cidade: {user.city}
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: deepOrange[500],
          color: "white",
          padding: 1,
          borderRadius: 1,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Checkbox {...label} defaultChecked /> Informações do usuário
      </Box>
    </Stack>
  );
};

export default CardComponent;
