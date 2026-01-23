import { useEffect, useState } from "react";
import axios from "../services/api";
import MovieCard from "../components/common/MovieCard";
import { Box, Pagination } from "@mui/material";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (pageNumber) => {
    const res = await axios.get(`/movies?page=${pageNumber}&limit=6`);
    setMovies(res.data.movies);
    setTotalPages(res.data.totalPages);
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  return (
    <Box p={3}>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </Box>

      {/* Pagination */}
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default Home;