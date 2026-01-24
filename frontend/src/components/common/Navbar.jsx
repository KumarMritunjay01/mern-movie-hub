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
  const [query, setQuery] = useState(""); // ✅ FIXED

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    navigate("/login");
  };

  const menuItemStyle = {
  py: 1.5,
  px: 3,
  fontSize: "0.95rem",
  transition: "all 0.2s ease",
  "&:hover": {
    background: "#1f2937",
    paddingLeft: "28px",
  },
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
        
        {/* LOGO */}
        <Typography
          variant="h6"
          onClick={() => navigate("/user")}
          sx={{
            fontWeight: "bold",
            cursor: "pointer",
            color: "#facc15",
          }}
        >
          🎬 MovieFlix
        </Typography>

        {/* SEARCH BAR */}
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
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      {user?.name?.[0]?.toUpperCase()}
    </Avatar>
  </IconButton>

  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={() => setAnchorEl(null)}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    PaperProps={{
      sx: {
        mt: 1.5,
        minWidth: 220,
        borderRadius: 3,
        background: "rgba(17, 24, 39, 0.95)",
        color: "#fff",
        boxShadow: "0px 20px 40px rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        animation: "dropdownFade 0.25s ease",
      },
    }}
  >
    <MenuItem
      onClick={() => {
        navigate("/user/profile");
        setAnchorEl(null);
      }}
      sx={menuItemStyle}
    >
      👤 Profile
    </MenuItem>

    <MenuItem
      onClick={handleLogout}
      sx={{
        ...menuItemStyle,
        color: "#f87171",
      }}
    >
      🚪 Logout
    </MenuItem>

    {/* Animation */}
    <style>
      {`
        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-5px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}
    </style>
  </Menu>
</Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;