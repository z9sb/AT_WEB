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
import React, { useState } from "react";
import theme from "../theme/index.tsx";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../Context.tsx";
import { signinAutentication } from "../services/authentication.js";
import { useNavigate } from "react-router-dom";

const Signin: React.FC = () => {
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
    confirmEmail: null,
  });

  const verifyLogin = async () => {
    let { data: response, error } = await signinAutentication(
      data.email.value,
      data.password.value,
      supabase
    );

    if (error && error.message === "Invalid login credentials") {
      {
        setData({
          ...data,
          email: {
            ...data.email,
            error: "Invalid login credentials",
            helperText: "Email ou senha inválidos",
          },
        });
      }
    } else if (error && error.message === "Email not confirmed") {
      setData({ ...data, confirmEmail: 'Email não confirmado' });
    } else {
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
      theme={theme}
    >
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
          border: "0",
          borderRadius: "20px 0 0 20px",
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
          Acessar Wharal
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
            Login com Google
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
            placeholder="Account"
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
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            variant="standard"
            value={data.password.value}
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
        </Box>

        <Button
          onClick={verifyLogin}
          variant="contained"
          color="primary"
          sx={{
            width: "70%",
            marginTop: "10px",
            backgroundColor: "#1A1A1A",
            height: "50px",
          }}
        >
          Entrar
        </Button>

        <Typography
          variant="body1"
          gutterBottom
          sx={{ color: "#A1A1A1", marginTop: "15px" }}
        >
          Não tem uma conta?{" "}
          <Link
            href="/Signup"
            sx={{ color: "#1A1A1A", textDecoration: "none" }}
          >
            Crie uma conta
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signin;
