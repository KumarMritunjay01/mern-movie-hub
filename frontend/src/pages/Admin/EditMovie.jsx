import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import API from "../../services/api";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await API.get(`/api/movies/${id}`);
        setMovie(res.data);
      } catch {
        alert("Movie not found");
        navigate("/admin");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id, navigate]);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, rating, releaseDate, description, genre, duration } = movie;

    if (!title || !rating || !releaseDate || !description || !genre || !duration) {
      alert("⚠️ Please fill all required fields");
      return;
    }

    try {
      await API.put(`/api/movies/${id}`, movie);
      alert("🎉 Movie updated successfully");
      navigate("/admin");
    } catch (error) {
      alert("❌ Failed to update movie");
    }
  };

  if (loading) return <p style={{ color: "#fff" }}>Loading...</p>;

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
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              mb={3}
              sx={{
                color: "#ff9800",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              🎬 Edit Movie
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
              <TextField
                label="Title"
                name="title"
                value={movie.title}
                onChange={handleChange}
                required
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

              <TextField
                label="Rating"
                name="rating"
                type="number"
                value={movie.rating}
                onChange={handleChange}
                required
                fullWidth
                inputProps={{
                  min: 1,
                  max: 10,
                  step: 0.1,
                }}
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                  },
                }}
              />

              <TextField
                label="Release Date"
                name="releaseDate"
                type="date"
                value={movie.releaseDate?.split("T")[0]}
                onChange={handleChange}
                required
                fullWidth
                InputLabelProps={{ shrink: true, style: { color: "#ccc" } }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                  },
                }}
              />

              <TextField
                label="Poster URL"
                name="poster"
                value={movie.poster}
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
                  background:
                    "linear-gradient(135deg, #ff9800, #ff5722)",
                  color: "#000",
                  borderRadius: "30px",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow:
                      "0 10px 30px rgba(255,152,0,0.6)",
                  },
                }}
              >
                💾 Update Movie
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default EditMovie;