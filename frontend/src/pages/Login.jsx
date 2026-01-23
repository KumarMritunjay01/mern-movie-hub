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
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>

        {/* Divider */}
        <Divider sx={{ my: 3 }}>OR</Divider>

        {/* Google Login */}
        <Button
          fullWidth
          sx={{
            mb: 1,
            background: "#4285F4",
            color: "#fff",
            "&:hover": { background: "#357ae8" },
          }}
        >
          Login with Google
        </Button>

        {/* GitHub Login */}
        <Button
          fullWidth
          sx={{
            background: "#24292e",
            color: "#fff",
            "&:hover": { background: "#1b1f23" },
          }}
        >
          Login with GitHub
        </Button>

        {/* Register Link */}
        <Typography align="center" mt={3}>
          Don’t have an account?{" "}
          <Link to="/register" style={{ color: "#1976d2" }}>
            Register
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;