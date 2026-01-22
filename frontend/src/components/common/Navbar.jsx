import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "white" }}>
          🎬 MovieApp
        </Typography>

        {/* Menu */}
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/search">
            Search
          </Button>

          {/* Admin Links */}
          {user?.role === "admin" && (
            <Button color="inherit" component={Link} to="/admin/add">
              Add Movie
            </Button>
          )}

          {/* Auth Buttons */}
          {!user ? (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
