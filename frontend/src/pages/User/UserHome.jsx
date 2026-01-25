import { useEffect, useState } from "react";
import { Typography, Pagination, Box } from "@mui/material";
import API from "../../services/api";
import MovieCard from "../../components/common/MovieCard";
import { motion } from "framer-motion";
import Loader from "../../components/common/Loader";

const UserHome = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const res = await API.get(`/api/movies?page=${page}&limit=8`);
        setMovies(res.data.movies);
        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  // ✅ SHOW LOADER
  if (loading) return <Loader />;

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
            },
            "& .Mui-selected": {
              backgroundColor: "#ff9800 !important",
              color: "#000",
              fontWeight: "bold",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default UserHome;