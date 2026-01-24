import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/auth/register", { name, email, password });
      alert("🎉 Registration Successful!");
      navigate("/user/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1c1c1c, #000)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              p: 4,
              borderRadius: "20px",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              backdropFilter: "blur(10px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              mb={1}
              sx={{
                color: "#ff9800",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              🎬 Create Account
            </Typography>

            <Typography
              align="center"
              mb={3}
              sx={{ color: "#aaa" }}
            >
              Join us and explore amazing movies
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                  },
                }}
                required
              />

              <TextField
                fullWidth
                label="Email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                  },
                }}
                required
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                  },
                }}
                required
              />

              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.4,
                  fontSize: "16px",
                  fontWeight: "bold",
                  background:
                    "linear-gradient(135deg, #ff9800, #ff5722)",
                  color: "#000",
                  borderRadius: "30px",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow:
                      "0 10px 25px rgba(255,152,0,0.6)",
                  },
                }}
              >
                Register
              </Button>
            </form>

            <Typography align="center" mt={3} color="#ccc">
              Already have an account?{" "}
              <Link
                to="/user/login"
                style={{
                  color: "#ff9800",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Register;