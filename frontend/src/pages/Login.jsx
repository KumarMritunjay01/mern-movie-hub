import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/user");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          p: 4,
          borderRadius: 4,
          background: "rgba(20, 20, 20, 0.9)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          color: "#fff",
          animation: "fadeIn 0.8s ease-in-out",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", letterSpacing: 1 }}
        >
          🎬 Movie Login
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{ color: "#aaa", mb: 3 }}
        >
          Login to explore movies
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={inputStyle}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={inputStyle}
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              py: 1.3,
              background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "30px",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 10px 25px rgba(255,75,43,0.6)",
              },
            }}
          >
            Login
          </Button>
        </form>

        <Divider sx={{ my: 3, color: "#555" }}>OR</Divider>

        <Button
          fullWidth
          sx={{
            mb: 1,
            background: "#4285F4",
            color: "#fff",
            py: 1.2,
            "&:hover": { background: "#357ae8" },
          }}
        >
          Login with Google
        </Button>

        <Button
          fullWidth
          sx={{
            background: "#24292e",
            color: "#fff",
            py: 1.2,
            "&:hover": { background: "#1b1f23" },
          }}
        >
          Login with GitHub
        </Button>

        <Typography align="center" mt={3}>
          Don’t have an account?{" "}
          <Link to="/register" style={{ color: "#ff4b2b" }}>
            Register
          </Link>
        </Typography>
      </Box>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Container>
  );
};

const inputStyle = {
  input: { color: "#fff" },
  label: { color: "#aaa" },
  "& label.Mui-focused": { color: "#ff4b2b" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#444" },
    "&:hover fieldset": { borderColor: "#ff4b2b" },
    "&.Mui-focused fieldset": { borderColor: "#ff4b2b" },
  },
};

export default Login;