import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../../services/api";
import MovieCard from "../../components/common/MovieCard";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

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
      const res = await API.get(`/movies/search?q=${query}`);
      setMovies(res.data);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1c1c1c, #000)",
        py: 5,
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            color: "#ff9800",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          🔍 Results for:{" "}
          <span style={{ color: "#fff" }}>{query}</span>
        </Typography>
      </motion.div>

      {/* Loading */}
      {loading && (
        <Typography textAlign="center" color="#aaa">
          Searching movies...
        </Typography>
      )}

      {/* No Results */}
      {!loading && movies.length === 0 && (
        <Typography
          textAlign="center"
          color="#aaa"
          mt={4}
          fontSize="18px"
        >
          😕 No movies found
        </Typography>
      )}

      {/* Movie Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
          mt: 3,
        }}
      >
        {movies.map((movie, index) => (
          <motion.div
            key={movie._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            <MovieCard movie={movie} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Search;