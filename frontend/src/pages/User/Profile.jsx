import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at top, #1c1c1c, #000)",
        }}
      >
        <Typography color="#fff" mb={2}>
          You are not logged in
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/login")}
          sx={{
            background: "linear-gradient(135deg, #ff9800, #ff5722)",
            color: "#000",
          }}
        >
          Login
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1c1c1c, #000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card
          sx={{
            width: 380,
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            color: "#fff",
            boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <CardContent sx={{ textAlign: "center", p: 4 }}>
            {/* Avatar */}
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: "#ff9800",
                color: "#000",
                fontSize: 36,
                fontWeight: "bold",
                margin: "auto",
                mb: 2,
                boxShadow: "0 10px 25px rgba(255,152,0,0.6)",
              }}
            >
              {user.name?.charAt(0).toUpperCase()}
            </Avatar>

            {/* Info */}
            <Typography variant="h5" fontWeight="bold">
              {user.name}
            </Typography>

            <Typography sx={{ color: "#aaa", mb: 2 }}>
              {user.email}
            </Typography>

            <Divider sx={{ my: 2, bgcolor: "#333" }} />

            <Typography>
              <strong>Role:</strong>{" "}
              <span style={{ color: "#22c55e" }}>
                {user.role || "User"}
              </span>
            </Typography>

            <Divider sx={{ my: 3, bgcolor: "#333" }} />

            {/* Buttons */}
            <Button
              fullWidth
              sx={{
                mb: 1.5,
                py: 1.2,
                background:
                  "linear-gradient(135deg, #ff9800, #ff5722)",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "30px",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow:
                    "0 10px 25px rgba(255,152,0,0.6)",
                },
              }}
              onClick={() => navigate("/user")}
            >
              🎬 Back to Home
            </Button>

            <Button
              fullWidth
              sx={{
                py: 1.2,
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "30px",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow:
                    "0 10px 25px rgba(239,68,68,0.6)",
                },
              }}
              onClick={logout}
            >
              🚪 Logout
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default Profile;