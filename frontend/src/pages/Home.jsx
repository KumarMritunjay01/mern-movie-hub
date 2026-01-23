import { useEffect, useState } from "react";
import { Container, Grid, Typography, Pagination } from "@mui/material";
import API from "../services/api";
import MovieCard from "../components/common/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async () => {
    try {
      const res = await API.get(`/movies?page=${page}&limit=9`);
      setMovies(res.data.movies);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        🎬 Movie List
      </Typography>

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
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Pagination
        sx={{ mt: 4, display: "flex", justifyContent: "center" }}
        count={totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
        color="primary"
      />
    </Container>
  );
};

export default Home;