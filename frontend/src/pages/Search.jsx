import { useState } from "react";
import axios from "../services/api";
import MovieCard from "../components/common/MovieCard";
import { TextField, Button, Box, Typography } from "@mui/material";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);
      const res = await axios.get(`/movies/search?q=${query}`);
      setMovies(res.data);
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>
        🔍 Search Movies
      </Typography>

      <Box display="flex" gap={2} mb={3}>
        <TextField
          fullWidth
          label="Search movie..."
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            style: {
              color: "#000", // 👈 text color
            },
          }}
          InputLabelProps={{
            style: {
              color: "#555",
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={loading}
        >
          Search
        </Button>
      </Box>

      {loading && <Typography>Loading...</Typography>}

      {!loading && movies.length === 0 && (
        <Typography>No movies found</Typography>
      )}

      <Box display="flex" flexWrap="wrap" gap={2}>
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
};

export default Search;