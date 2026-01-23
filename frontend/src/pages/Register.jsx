import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("🎉 Registration Successful!");
      navigate("/user/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
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
          background: "rgba(20,20,20,0.9)",
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
          🎬 Create Account
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{ color: "#aaa", mb: 3 }}
        >
          Join us and explore movies
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={inputStyle}
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
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
            Register
          </Button>
        </form>

        <Typography align="center" mt={3}>
          Already have an account?{" "}
          <Link to="/user/login" style={{ color: "#ff4b2b" }}>
            Login
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

export default Register;