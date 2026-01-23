import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../../services/api";
import MovieCard from "../../components/common/MovieCard";
import { Box, Typography } from "@mui/material";

const Search = () => {
  const [params] = useSearchParams();
  const query = params.get("query");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) fetchMovies();
  }, [query]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/movies/search?q=${query}`);
      setMovies(res.data);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={3} sx={{ color: "#fff" }}>
      <Typography variant="h5" mb={3}>
        🔍 Results for: <span style={{ color: "#facc15" }}>{query}</span>
      </Typography>

      {loading && <Typography>Loading...</Typography>}

      {!loading && movies.length === 0 && (
        <Typography>No movies found</Typography>
      )}

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={3}
      >
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
};

export default Search;
