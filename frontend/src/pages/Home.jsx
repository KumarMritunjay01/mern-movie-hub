import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>

      {/* HERO */}
      <Box
        sx={{
          height: 240,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* MAIN WRAPPER */}
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          px: 3,
          py: 5,
          display: "flex",
          gap: "80px",
        }}
      >

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "55%" }}
        >
          <Typography variant="h5" mb={2}>
            About MovieVerse
          </Typography>

          <Card sx={{ mb: 3, background: "#1f2937", color: "#fff" }}>
            <CardContent>
              MovieVerse is a MERN stack based movie platform inspired by IMDb Top
              250 movies. Users can explore movies with ratings, duration and
              release year.
            </CardContent>
          </Card>

          <Typography variant="h5" mb={2}>
            Our Philosophy
          </Typography>

          <Card sx={{ mb: 3, background: "#1f2937", color: "#fff" }}>
            <CardContent>
              We believe movies are powerful storytelling tools. Our goal is to
              provide a clean, fast and engaging experience for movie lovers.
            </CardContent>
          </Card>

          <Typography variant="h5" mb={2}>
            Our Approach
          </Typography>

          <Card sx={{ background: "#1f2937", color: "#fff" }}>
            <CardContent>
              With secure authentication, optimized APIs and modern UI, MovieVerse
              ensures smooth performance and scalability.
            </CardContent>
          </Card>
        </motion.div>

        {/* RIGHT LOGIN CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "40%" }}
        >
          <Card
            sx={{
              p: 4,
              borderRadius: 4,
              background: "#1f2937",
              color: "#fff",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              position: "sticky",
              top: 100,
            }}
          >
            <Typography textAlign="center" color="gray">
              Welcome to
            </Typography>

            <Typography
              textAlign="center"
              variant="h4"
              fontWeight="bold"
              mb={2}
            >
              Movie<span style={{ color: "#f59e0b" }}>Verse</span>
            </Typography>

            <Typography textAlign="center" mb={3}>
              Continue with Google or GitHub
            </Typography>

            <Button
              fullWidth
              component={Link}
              to="/user/login"
              sx={{
                mb: 2,
                background: "#14b8a6",
                color: "#000",
                fontWeight: "bold",
                "&:hover": { background: "#0d9488" },
              }}
            >
              User Login
            </Button>

            <Button
              fullWidth
              component={Link}
              to="/admin/login"
              sx={{
                background: "#374151",
                color: "#fff",
                "&:hover": { background: "#1f2937" },
              }}
            >
              Admin Login
            </Button>
          </Card>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;