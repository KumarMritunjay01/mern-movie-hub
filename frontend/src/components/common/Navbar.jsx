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
  Drawer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [query, setQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const isAdmin = user?.role === "admin";

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/user/search?query=${query}`);
    setQuery("");
    setMobileSearchOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(180deg, #0f172a, #020617)",
          px: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          
          {/* LEFT */}
          <Box display="flex" alignItems="center" gap={2}>
            <Typography
              onClick={() => navigate(isAdmin ? "/admin" : "/user")}
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                color: "#facc15",
                fontSize: "20px",
              }}
            >
              MovieFlix
            </Typography>
          </Box>

          {/* DESKTOP SEARCH */}
          {!isAdmin && (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                background: "#111827",
                px: 2,
                borderRadius: "30px",
                width: "35%",
              }}
            >
              <SearchIcon sx={{ color: "#aaa" }} />
              <InputBase
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                sx={{ ml: 1, color: "#fff", width: "100%" }}
              />
            </Box>
          )}

          {/* RIGHT ICONS */}
          <Box display="flex" alignItems="center">
            {/* Mobile Search */}
            <IconButton
              sx={{ display: { md: "none" }, color: "#fff" }}
              onClick={() => setMobileSearchOpen(true)}
            >
              <SearchIcon />
            </IconButton>

            {/* Profile */}
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <Avatar sx={{ bgcolor: "#facc15", color: "#000" }}>
                {user?.name?.[0]?.toUpperCase()}
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE SEARCH DRAWER */}
      <Drawer
        anchor="top"
        open={mobileSearchOpen}
        onClose={() => setMobileSearchOpen(false)}
      >
        <Box sx={{ p: 2, background: "#020617" }}>
          <InputBase
            autoFocus
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            sx={{
              width: "100%",
              color: "#fff",
              background: "#111827",
              px: 2,
              py: 1,
              borderRadius: "8px",
            }}
          />
        </Box>
      </Drawer>

      {/* PROFILE MENU */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {/* HOME FOR MOBILE */}
        <MenuItem
          onClick={() => {
            navigate(isAdmin ? "/admin" : "/user");
            setAnchorEl(null);
          }}
        >
          🏠 Home
        </MenuItem>

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

        <MenuItem
          onClick={() => {
            logout();
            navigate("/user/login");
          }}
          sx={{ color: "red" }}
        >
          🚪 Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;