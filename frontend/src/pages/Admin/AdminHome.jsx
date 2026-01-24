import MovieCard from "../../components/common/MovieCard";
import { useState, useEffect } from "react";
import API from "../../services/api";
import { Button, Box, Pagination, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdminHome = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  const fetchMovies = async (pageNumber = 1) => {
    try {
      const res = await API.get(`/movies?page=${pageNumber}&limit=8`);
      setMovies(res.data.movies);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this movie?")) return;
    await API.delete(`/movies/${id}`);
    fetchMovies(page);
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
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            mb: 4,
            p: 3,
            borderRadius: "20px",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#ff9800",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            🎬 Admin Dashboard
          </Typography>

          <Button
            onClick={() => navigate("/admin/add")}
            sx={{
              background: "linear-gradient(135deg, #ff9800, #ff5722)",
              color: "#000",
              px: 3,
              py: 1,
              borderRadius: "30px",
              fontWeight: "bold",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 10px 25px rgba(255,152,0,0.6)",
              },
            }}
          >
            ➕ Add Movie
          </Button>
        </Box>
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
            <MovieCard movie={movie} onDelete={handleDelete} />
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

export default AdminHome;