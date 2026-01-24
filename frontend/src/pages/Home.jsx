import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1c1c1c, #000)",
      }}
    >
      {/* HERO SECTION */}
      <Box
        sx={{
          height: 260,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#ff9800",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          🎬 Welcome to MovieVerse
        </Typography>
      </Box>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          px: 3,
          py: 6,
          display: "flex",
          gap: "80px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1 }}
        >
          {[
            {
              title: "About MovieVerse",
              text: "MovieVerse is a MERN stack based movie platform inspired by IMDb Top movies. Discover films with ratings, duration and rich details.",
            },
            {
              title: "Our Philosophy",
              text: "We believe movies are powerful stories. Our mission is to deliver a clean, fast and immersive movie browsing experience.",
            },
            {
              title: "Our Approach",
              text: "Built with modern technologies, MovieVerse ensures security, scalability and performance with a beautiful UI.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              sx={{
                mb: 3,
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                color: "#fff",
                borderRadius: "16px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: "#ff9800", mb: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#ccc" }}>
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* RIGHT LOGIN PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "380px" }}
        >
         <Card
              sx={{
                p: 5,
                minHeight: "420px",   // ✅ increase height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // center content vertically
                borderRadius: "22px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                color: "#fff",
                boxShadow: "0 25px 50px rgba(0,0,0,0.7)",
                position: "sticky",
                top: 100,
              }}
            >

            <Typography textAlign="center" color="#aaa">
              Welcome to
            </Typography>

            <Typography
              textAlign="center"
              variant="h4"
              fontWeight="bold"
              mb={2}
            >
              Movie<span style={{ color: "#ff9800" }}>Verse</span>
            </Typography>

            <Typography textAlign="center" mb={3} color="#ccc">
              Login to explore movies
            </Typography>

            <Button
              fullWidth
              component={Link}
              to="/user/login"
              sx={{
                mb: 2,
                py: 1.3,
                background:
                  "linear-gradient(135deg, #ff9800, #ff5722)",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "30px",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              User Login
            </Button>

            <Button
              fullWidth
              component={Link}
              to="/admin/login"
              sx={{
                py: 1.3,
                background: "#1f2937",
                color: "#fff",
                borderRadius: "30px",
                "&:hover": {
                  background: "#111827",
                },
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