import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Pagination,
  Box,
} from "@mui/material";
import API from "../../services/api";
import MovieCard from "../../components/common/MovieCard";

const UserHome = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await API.get(`/movies?page=${page}&limit=9`);
      setMovies(res.data.movies);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
     <div className="page-animation bg-glow">
      <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(-45deg, #020617, #0f172a, #020617, #1e293b)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Glow Effect */}
      <Box className="bg-animation" />

      <Container sx={{ mt: 5, mb: 6, position: "relative", zIndex: 1 }}>
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: "#facc15",
          }}
        >
          🎬 Explore Movies
        </Typography>

        {/* Movie Grid */}
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid
              item
              key={movie._id}
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="center"
            >
              <Box
                sx={{
                  width: "100%",
                  transition: "0.3s",
                  opacity: loading ? 0.6 : 1,
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <MovieCard movie={movie} />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
            size="large"
            disabled={loading}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#fff",
                transition: "0.3s",
              },
              "& .Mui-selected": {
                backgroundColor: "#facc15 !important",
                color: "#1111",
                fontWeight: "bold",
                transform: "scale(1.15)",
              },
            }}
          />
        </Box>
      </Container>
      </Box>
     </div>
    
  );
};

export default UserHome;