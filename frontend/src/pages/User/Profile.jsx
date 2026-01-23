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
          onClick={() => navigate("/")}
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
        bgcolor: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 380,
          bgcolor: "#1e293b",
          color: "#fff",
          borderRadius: 3,
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          {/* Avatar */}
          <Avatar
            sx={{
              width: 90,
              height: 90,
              bgcolor: "#14b8a6",
              margin: "auto",
              mb: 2,
              fontSize: 32,
            }}
          >
            {user.name?.charAt(0).toUpperCase()}
          </Avatar>

          {/* User Info */}
          <Typography variant="h6">{user.name}</Typography>
          <Typography sx={{ color: "#94a3b8" }}>
            {user.email}
          </Typography>

          <Divider sx={{ my: 2, bgcolor: "#334155" }} />

          <Typography>
            <strong>Role:</strong>{" "}
            <span style={{ color: "#14b8a6" }}>
              {user.role || "User"}
            </span>
          </Typography>

          <Divider sx={{ my: 2, bgcolor: "#334155" }} />

          {/* Actions */}
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderColor: "#14b8a6",
              color: "#14b8a6",
              mb: 1,
            }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>

          <Button
            variant="contained"
            fullWidth
            color="error"
            onClick={logout}
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
