import { useEffect, useState } from "react";
import API from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await API.get("/movies");
        setMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Movies</h2>

      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        movies.map((movie) => (
          <div key={movie._id}>
            <h3>{movie.title}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;