import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Pagination,
  Box,
} from "@mui/material";
import API from "../../services/api";
import MovieCard from "../../components/common/MovieCard";
import { motion } from "framer-motion";

const UserHome = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async () => {
    try {
      const res = await API.get(`/api/movies?page=${page}&limit=8`)
      setMovies(res.data.movies);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1c1c1c, #000)",
        py: 5,
        px: { xs: 2, md: 4 },
      }}
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            mb: 4,
            color: "#ff9800",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          🎬 Explore Movies
        </Typography>
      </motion.div>

      {/* MOVIE GRID */}
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
        }}
      >
        {movies.map((movie, index) => (
          <motion.div
            key={movie._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ scale: 1.05 }}
          >
            <MovieCard movie={movie} />
          </motion.div>
        ))}
      </Box>

      {/* PAGINATION */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, val) => setPage(val)}
          size="large"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#fff",
              border: "1px solid #ff9800",
              borderRadius: "10px",
              transition: "0.3s",
            },
            "& .Mui-selected": {
              backgroundColor: "#ff9800 !important",
              color: "#000",
              fontWeight: "bold",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "rgba(255,152,0,0.2)",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default UserHome;