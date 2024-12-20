import {
  Typography,
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { FaUser, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { isValidEmail, isValidPassword } from "../utils/verification";
import { supabase } from "../Context.tsx";
import { singupAutentication } from "../services/authentication";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: {
      value: "",
      error: null,
      helperText: null,
    },
    password: {
      value: "",
      error: null,
      helperText: null,
    },
    confirm_password: {
      value: "",
      error: null,
      helperText: null,
    },
  });

  const verifyInformation = async () => {
    if (isValidEmail(data.email.value)) {
      if (data.password.value === data.confirm_password.value) {
        if (isValidPassword(data.password.value)) {
          let { data: response, error } = await singupAutentication(
            data.email.value,
            data.password.value,
            supabase
          );
          if (error) {
            setData({
              ...data,
              email: {
                ...data.email,
                error: "Email já cadastrado",
                helperText: "Email já cadastrado",
              },
            });
          } else {
            navigate("/");
          }
        } else {
          setData({
            ...data,
            password: {
              ...data.password,
              error: "Senha inválida",
              helperText: "Senha inválida",
            },
          });
        }
      } else {
        setData({
          ...data,
          confirm_password: {
            ...data.confirm_password,
            error: "As senhas não são iguais",
            helperText: "As senhas não são iguais",
          },
        });
      }
    } else {
      setData({
        ...data,
        email: {
          ...data.email,
          error: "Email inválido",
          helperText: "Email inválido",
        },
      });
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {" "}
      <Box sx={{ width: "40%", height: "100%", backgroundColor: "#1A1A1A" }}>
        <img
          src="https://imgur.com/NIeIDtv.png"
          alt="logo"
          style={{ width: "100%", marginTop: "100px" }}
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          width: "60%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <Typography
          gutterBottom
          sx={{ fontSize: "24px", fontWeight: "bold", color: "#1A1A1A" }}
        >
          Criar Conta
        </Typography>
        <Button
          variant="standard"
          sx={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <FcGoogle size={30} />
          <Typography
            gutterBottom
            sx={{
              color: "#A1A1A1",
              marginLeft: "10px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              alignContent: "center",
              textAlign: "center",
              marginTop: "5px",
            }}
          >
            Criar com Google
          </Typography>
        </Button>
        <Typography sx={{ color: "#1A1A1A", fontSize: "14px" }}>
          - OU -
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            type="text"
            placeholder="Email ou Telefone"
            variant="standard"
            value={data.email.value}
            helperText={data.email.helperText}
            onChange={(e) =>
              setData({ ...data, email: { value: e.target.value } })
            }
            sx={{ width: "70%", height: "20px" }}
            InputProps={{
              style: { height: "50px" },
              endAdornment: (
                <InputAdornment position="end">
                  <FaUser
                    size={20}
                    color="#ccc"
                    style={{ marginRight: "10px" }}
                  />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            placeholder="Senha"
            type={showPassword ? "text" : "password"}
            variant="standard"
            value={data.password.value}
            helperText={data.password.helperText}
            onChange={(e) =>
              setData({ ...data, password: { value: e.target.value } })
            }
            sx={{ width: "70%" }}
            InputProps={{
              style: { height: "50px" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <FaRegEyeSlash size={20} color="#ccc" />
                    ) : (
                      <FaRegEye size={20} color="#ccc" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            placeholder="Confirmar Senha"
            type={showPassword ? "text" : "password"}
            variant="standard"
            value={data.confirm_password.value}
            helperText={data.confirm_password.helperText}
            onChange={(e) =>
              setData({ ...data, confirm_password: { value: e.target.value } })
            }
            sx={{ width: "70%" }}
            InputProps={{
              style: { height: "38px" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <FaRegEyeSlash size={20} color="#ccc" />
                    ) : (
                      <FaRegEye size={20} color="#ccc" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={verifyInformation}
          sx={{
            width: "70%",
            marginTop: "10px",
            backgroundColor: "#1A1A1A",
            height: "50px",
          }}
        >
          Criar
        </Button>

        <Typography
          variant="body1"
          gutterBottom
          sx={{ color: "#A1A1A1", marginTop: "15px" }}
        >
          Já tem uma conta?{" "}
          <Link
            href="/signin"
            sx={{ color: "#1A1A1A", textDecoration: "none" }}
          >
            Entrar
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
