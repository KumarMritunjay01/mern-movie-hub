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
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h6">You are not logged in</Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => navigate("/login")}
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
        background: "linear-gradient(135deg, #020617, #0f172a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Card
        sx={{
          width: 400,
          bgcolor: "rgba(30, 41, 59, 0.9)",
          color: "#fff",
          borderRadius: 4,
          boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
          animation: "fadeUp 0.5s ease",
        }}
      >
        <CardContent sx={{ textAlign: "center", p: 4 }}>
          {/* Avatar */}
          <Avatar
            sx={{
              width: 100,
              height: 100,
              bgcolor: "#facc15",
              margin: "auto",
              mb: 2,
              fontSize: 36,
              fontWeight: "bold",
              boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
            }}
          >
            {user.name?.charAt(0).toUpperCase()}
          </Avatar>

          {/* User Info */}
          <Typography variant="h5" fontWeight="bold">
            {user.name}
          </Typography>

          <Typography sx={{ color: "#94a3b8", mb: 2 }}>
            {user.email}
          </Typography>

          <Divider sx={{ my: 2, bgcolor: "#334155" }} />

          <Typography>
            <strong>Role:</strong>{" "}
            <span style={{ color: "#22c55e" }}>
              {user.role || "User"}
            </span>
          </Typography>

          <Divider sx={{ my: 2, bgcolor: "#334155" }} />

          {/* Buttons */}
          <Button
            fullWidth
            sx={{
              mb: 1.5,
              color: "#0f172a",
              background: "#facc15",
              fontWeight: "bold",
              "&:hover": {
                background: "#eab308",
                transform: "scale(1.03)",
              },
            }}
            onClick={() => navigate("/user")}
          >
            Back to Home
          </Button>

          <Button
            fullWidth
            sx={{
              background: "#ef4444",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                background: "#dc2626",
                transform: "scale(1.03)",
              },
            }}
            onClick={logout}
          >
            Logout
          </Button>
        </CardContent>
      </Card>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeUp {
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
    </Box>
  );
};

export default Profile;