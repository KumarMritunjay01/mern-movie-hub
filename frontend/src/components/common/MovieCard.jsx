import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const MovieCard = ({ movie }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
      <Card sx={{ width: 350, borderRadius:5}} className="movie-card">
      {/* ✅ Movie Poster */}
      <img
        src={movie.poster || "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
      />

      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>

        <Typography>⭐ {movie.rating}</Typography>

        <Typography>
          Year: {new Date(movie.releaseDate).getFullYear()}
        </Typography>

        {user?.role === "admin" && (
          <Button
            size="small"
            onClick={() => navigate(`/admin/edit/${movie._id}`)}
          >
            Edit
          </Button>
        )}
      </CardContent>
      </Card>
  );
};

export default MovieCard;