import { useState } from "react";
import axios from "../services/api";
import MovieCard from "../components/common/MovieCard";
import { TextField, Button, Box } from "@mui/material";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/movies/search?q=${query}`);
      setMovies(res.data);
    } catch (error) {
      console.error("Search failed", error);
    }
  };

  return (
    <Box p={3}>
      <Box display="flex" gap={2} mb={3}>
        <TextField
          fullWidth
          label="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      <Box display="flex" flexWrap="wrap" gap={2}>
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
};

export default Search;
