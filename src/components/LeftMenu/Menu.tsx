import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { PiTicketDuotone } from "react-icons/pi";
import { TbSettings2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context.tsx";

const menuItems = [
  { icon: RxDashboard, label: "Painel", path: "/dashboard" },
  { icon: RxPerson, label: "Usuários", path: "/users" },
  { icon: PiTicketDuotone, label: "Tickets", path: "/tickets" },
  { icon: TbSettings2, label: "Configurações", path: "/settings" },
];

const LeftMenu = ({ open }) => {
  const navigate = useNavigate();
  const { translations } = useAppContext();

  return (
    <Container>
      <LogoContainer
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Button
          color="inherit"
          sx={{
            padding: "10px",
            display: "flex",
            width: "49px",
            flexDirection: "column",
          }}
        >
          <Divider
            color="#E7E7E7"
            sx={{
              width: "48px",
              height: "5px",
              borderRadius: "15px",
            }}
          />
          <Typography variant="h4">W</Typography>
        </Button>
      </LogoContainer>

      <MenuItemsContainer>
        {menuItems.map((item) => (
          <StyledIconButton
            key={item.label}
            onClick={() => navigate(item.path)}
            aria-label={translations(item.label)}
            open={open}
          >
            <IconWrapper open={open}>
              <item.icon />
              {open && (
                <MenuText variant="body2">{translations(item.label)}</MenuText>
              )}
            </IconWrapper>
          </StyledIconButton>
        ))}
      </MenuItemsContainer>
    </Container>
  );
};

// Styled components
const Container = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const LogoContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const MenuItemsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 8,
});

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open, theme }) => ({
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  justifyContent: "flex-start",
  padding: theme.spacing(1.5),
  transition: theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.short,
  }),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "translateX(4px)",
  },
}));

const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open, theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: open ? theme.spacing(1) : theme.spacing(0.5),
  transition: theme.transitions.create("margin-left", {
    duration: theme.transitions.duration.standard,
  }),
  gap: theme.spacing(1.5),
}));

const MenuText = styled(Typography)({
  fontWeight: 500,
  whiteSpace: "nowrap",
});

export default LeftMenu;
