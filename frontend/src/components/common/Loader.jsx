import { Box, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <CircularProgress
          size={70}
          thickness={4}
          sx={{
            color: "#ff9800",
          }}
        />
      </motion.div>

      {/* Text */}
      <Typography
        sx={{
          mt: 3,
          color: "#facc15",
          fontSize: "16px",
          letterSpacing: "1px",
        }}
      >
        Loading movies...
      </Typography>
    </Box>
  );
};

export default Loader;