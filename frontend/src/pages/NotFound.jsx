import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1c1c1c, #000)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 404 Text */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "100px", md: "140px" },
            fontWeight: "900",
            color: "#ff9800",
            textShadow: "0 0 30px rgba(255,152,0,0.7)",
          }}
        >
          404
        </Typography>

        <Typography
          variant="h5"
          sx={{ mb: 1, fontWeight: "bold" }}
        >
          Page Not Found 🎬
        </Typography>

        <Typography
          sx={{
            color: "#aaa",
            mb: 4,
            maxWidth: "400px",
            margin: "auto",
          }}
        >
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              px: 4,
              py: 1.3,
              background:
                "linear-gradient(135deg, #ff9800, #ff5722)",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "30px",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow:
                  "0 10px 30px rgba(255,152,0,0.6)",
              },
            }}
          >
            🏠 Home
          </Button>

          <Button
            component={Link}
            to="/user/login"
            sx={{
              px: 4,
              py: 1.3,
              color: "#fff",
              border: "2px solid #fff",
              borderRadius: "30px",
              transition: "0.3s",
              "&:hover": {
                color: "#ff9800",
                borderColor: "#ff9800",
                transform: "scale(1.05)",
              },
            }}
          >
            🔐 Login
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default NotFound;