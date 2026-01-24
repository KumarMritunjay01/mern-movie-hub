import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";

const MovieCard = ({ movie, onDelete }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Convert minutes → hours
  const formatDuration = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card
        sx={{
          borderRadius: "18px",
          overflow: "hidden",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
          backdropFilter: "blur(10px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          color: "#fff",
        }}
      >
        {/* Poster */}
        <Box sx={{ position: "relative" }}>
          <img
            src={
              movie.poster ||
              "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.title}
            style={{
              width: "100%",
              height: "340px",
              objectFit: "cover",
            }}
          />

          {/* Gradient */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "50%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
            }}
          />
        </Box>

        {/* Content */}
        <CardContent>
          {/* Title */}
         <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#ff9800",
              textAlign: "center",
              mb: 0.5,

              /* 👇 important part */
              display: "-webkit-box",
              WebkitLineClamp: 1,     // show only 1 line
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
          >
            {movie.title}
          </Typography>


          {/* Rating & Duration */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 0.5,
              fontSize: "14px",
              color: "#ccc",
              pt:2,
            }}
          >
            <span style={{ color: "#facc15" }}>
              ⭐ {movie.rating}
            </span>

            <span style={{ color: "#60a5fa" }}>
              ⏱ {formatDuration(movie.duration)}
            </span>
          </Box>

          {/* Admin Buttons */}
          {user?.role === "admin" && (
            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 2,
              }}
            >
              {/* Edit */}
              <Button
                size="small"
                onClick={() =>
                  navigate(`/admin/edit/${movie._id}`)
                }
                sx={{
                  flex: 1,
                  background:
                    "linear-gradient(135deg, #ffb74d, #ff9800)",
                  color: "#1a1a1a",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  transition: "0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #ffa726, #fb8c00)",
                    boxShadow:
                      "0 6px 16px rgba(255,167,38,0.5)",
                    transform: "scale(1.05)",
                    pt:2,
                  },
                }}
              >
                Edit
              </Button>

              {/* Delete */}
              <Button
                size="small"
                onClick={() => onDelete(movie._id)}
                sx={{
                  flex: 1,
                  background:
                    "linear-gradient(135deg, #ef5350, #e53935)",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  transition: "0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #e53935, #c62828)",
                    boxShadow:
                      "0 6px 16px rgba(239,83,80,0.5)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                Delete
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MovieCard;