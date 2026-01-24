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
import { useNavigate, Link, useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isAdminLogin = location.pathname.includes("/admin");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await login(email, password);

      if (isAdminLogin && user.role !== "admin") {
        alert("❌ You are not an admin");
        return;
      }

      if (!isAdminLogin && user.role === "admin") {
        alert("❌ Admin must login from admin panel");
        return;
      }

      navigate(user.role === "admin" ? "/admin" : "/user");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Box sx={{ p: 4, width: "100%", background: "#141414", borderRadius: 4 }}>

        <Typography variant="h4" align="center" color="#fff">
          🎬 {isAdminLogin ? "Admin Login" : "User Login"}
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

          <Button fullWidth type="submit" sx={{ mt: 3 }}>
            Login
          </Button>
        </form>

        {/* 👇 REGISTER ONLY FOR USER */}
        {!isAdminLogin && (
          <Typography align="center" mt={2}>
            Don’t have an account?{" "}
            <Link to="/register">Register</Link>
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Login;