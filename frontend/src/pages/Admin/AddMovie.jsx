import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    description: "",
    rating: "",
    releaseDate: "",
    duration: "",
    genre: "",
    poster: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/movies", movie);
      alert("🎉 Movie added successfully!");
      navigate("/");
    } catch {
      alert("❌ Failed to add movie");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1c1c1c, #000)",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              p: 4,
              boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              mb={3}
              sx={{
                fontWeight: "bold",
                color: "#ff9800",
                letterSpacing: "1px",
              }}
            >
              🎬 Add New Movie
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 2,
              }}
            >
              {[
                { label: "Title", name: "title" },
                { label: "Genre", name: "genre" },
                { label: "Rating", name: "rating", type: "number" },
                { label: "Release Year", name: "releaseDate", type: "number" },
                { label: "Duration (min)", name: "duration", type: "number" },
                { label: "Poster URL", name: "poster" },
              ].map((field) => (
                <TextField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type || "text"}
                  onChange={handleChange}
                  fullWidth
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  InputProps={{
                    style: {
                      color: "#fff",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderRadius: "10px",
                    },
                  }}
                />
              ))}

              <TextField
                label="Description"
                name="description"
                multiline
                rows={4}
                fullWidth
                sx={{ gridColumn: "1 / -1" }}
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                  },
                }}
                onChange={handleChange}
              />

              {movie.poster && (
                <Box
                  sx={{
                    gridColumn: "1 / -1",
                    textAlign: "center",
                    mt: 2,
                  }}
                >
                  <img
                    src={movie.poster}
                    alt="preview"
                    style={{
                      width: "180px",
                      borderRadius: "12px",
                      boxShadow: "0 10px 30px rgba(255,152,0,0.5)",
                    }}
                  />
                </Box>
              )}

              <Button
                type="submit"
                fullWidth
                sx={{
                  gridColumn: "1 / -1",
                  mt: 3,
                  py: 1.5,
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#000",
                  background:
                    "linear-gradient(135deg, #ff9800, #ff5722)",
                  borderRadius: "30px",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 10px 30px rgba(255,152,0,0.6)",
                  },
                }}
              >
                🎥 Add Movie
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AddMovie;