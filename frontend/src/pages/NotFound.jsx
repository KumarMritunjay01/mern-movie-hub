import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0f172a, #020617)",
        color: "#fff",
        textAlign: "center",
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography variant="h1" fontWeight="bold" color="#f59e0b">
          404
        </Typography>

        <Typography variant="h5" mb={2}>
          Page Not Found
        </Typography>

        <Typography color="gray" mb={4}>
          The page you are looking for doesn't exist or has been moved.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            mr: 2,
            background: "#f59e0b",
            color: "#000",
            fontWeight: "bold",
            "&:hover": { background: "#fbbf24" },
          }}
        >
          Go Home
        </Button>

        <Button
          component={Link}
          to="/user/login"
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            "&:hover": {
              borderColor: "#f59e0b",
              color: "#f59e0b",
            },
          }}
        >
          Login
        </Button>
      </motion.div>
    </Box>
  );
};

export default NotFound;
