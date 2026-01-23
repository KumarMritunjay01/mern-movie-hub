import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
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
    } catch (error) {
      console.error(error);
      alert("❌ Failed to add movie");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ➕ Add New Movie
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          fullWidth
          required
          margin="normal"
          onChange={handleChange}
        />

        <TextField
          label="Description"
          name="description"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          onChange={handleChange}
        />

        <TextField
          label="Rating"
          name="rating"
          type="number"
          inputProps={{ min: 0, max: 10 }}
          fullWidth
          margin="normal"
          onChange={handleChange}
        />

        <TextField
          label="Release Year"
          name="releaseDate"
          type="number"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />

        <TextField
          label="Duration (minutes)"
          name="duration"
          type="number"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />

        <TextField
          label="Genre"
          name="genre"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />

        <TextField
          label="Poster URL"
          name="poster"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
        >
          Add Movie
        </Button>
      </Box>
    </Container>
  );
};

export default AddMovie;