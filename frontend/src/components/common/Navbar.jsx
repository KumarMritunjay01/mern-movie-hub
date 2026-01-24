import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [query, setQuery] = useState("");

  const isAdmin = user?.role === "admin";

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    navigate("/user/login");
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(180deg, #0f172a, #020617)",
        boxShadow: "none",
        px: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* LOGO + HOME */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h6"
            onClick={() => navigate(isAdmin ? "/admin" : "/user")}
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              color: "#facc15",
            }}
          >
            MovieFlix
          </Typography>

          {/* HOME BUTTON */}
          <Typography
          onClick={() => navigate(isAdmin ? "/admin" : "/user")}
          sx={{
            cursor: "pointer",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            color: "#facc15",
            px: 2.5,
            py: 0.8,
            borderRadius: "999px",
            transition: "all 0.3s ease",
            background: "rgba(250, 204, 21, 0.08)",
            border: "1px solid rgba(250, 204, 21, 0.3)",

            "&:hover": {
              background: "linear-gradient(135deg, #facc15, #f59e0b)",
              color: "#000",
              boxShadow: "0 4px 15px rgba(250, 204, 21, 0.6)",
              transform: "translateY(-1px)",
            },
          }}
        >
          Home
        </Typography>

        </Box>

        {/* SEARCH (ONLY USER) */}
        {!isAdmin && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              background: "#111827",
              px: 2,
              py: 0.5,
              borderRadius: "30px",
              width: { xs: "55%", md: "35%" },
            }}
          >
            <SearchIcon sx={{ color: "#9ca3af" }} />
            <InputBase
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && query.trim()) {
                  navigate(`/user/search?query=${query}`);
                  setQuery("");
                }
              }}
              sx={{ ml: 1, color: "#fff", width: "100%" }}
            />
          </Box>
        )}

        {/* PROFILE */}
        <Box>
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Avatar
              sx={{
                bgcolor: "#facc15",
                color: "#000",
                width: 42,
                height: 42,
                fontWeight: "bold",
              }}
            >
              {user?.name?.[0]?.toUpperCase()}
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            PaperProps={{
              sx: {
                mt: 1.5,
                minWidth: 220,
                borderRadius: 3,
                background: "rgba(17,24,39,0.95)",
                color: "#fff",
              },
            }}
          >
            {/* USER MENU */}
            {!isAdmin && (
              <MenuItem
                onClick={() => {
                  navigate("/user/profile");
                  setAnchorEl(null);
                }}
              >
                👤 Profile
              </MenuItem>
            )}

            {/* ADMIN MENU */}
            {isAdmin && (
              <MenuItem
                onClick={() => {
                  navigate("/admin");
                  setAnchorEl(null);
                }}
              >
                Manage Movies
              </MenuItem>
            )}

            <MenuItem
              onClick={handleLogout}
              sx={{ color: "#f87171" }}
            >
              🚪 Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;