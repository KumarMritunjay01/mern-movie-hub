import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const MovieCard = ({ movie }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 250 }}>
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography>⭐ {movie.rating}</Typography>
        <Typography>Year: {movie.year}</Typography>

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
