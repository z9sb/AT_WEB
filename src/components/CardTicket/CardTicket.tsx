import { Box, Button, Typography, Avatar, Divider } from "@mui/material";

const CardTicket: React.FC = ({ ticket }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        width: "100%",
        border: "1px solid #E7E7E7",
        borderRadius: "10px",
        padding: "10px",
        flexDirection: "column",
        marginBottom: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: 500, marginTop: "10px" }}
        >
          Ticket {ticket.id}
        </Typography>
        <Avatar
          sx={{
            width: 37,
            height: 37,
            marginTop: "10px",
            marginRight: "10px",
          }}
        >
          {" "}
          AB{" "}
        </Avatar>
      </Box>
      <Box sx={{ width: "100%", marginBottom: "10px" }}>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          {ticket.assunto}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: 500, marginTop: "5px" }}
        >
          {ticket.descricao}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: 500, marginTop: "10px" }}
        >
          Data de abertura{" "}
          {new Date(ticket.data_criacao).toLocaleString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>
        <Button
          variant="standard"
          sx={{
            textTransform: "none",
            fontSize: "12px",
            color: "#1A1A1A",
            fontWeight: 500,
            textDecoration: "",
          }}
        >
          Responder
        </Button>
      </Box>
    </Box>
  );
};

export { CardTicket };
