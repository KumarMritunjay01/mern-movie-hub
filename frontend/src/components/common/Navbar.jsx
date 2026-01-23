import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const pages = [
  { name: "Home", path: "/user" },
  { name: "Search", path: "/user/search" },
];

const adminPages = [{ name: "Add Movie", path: "/admin/add" }];

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleLogout = () => {
    logout();
    setAnchorElUser(null);
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>

          {/* LOGO */}
          <Typography
            variant="h6"
            component={Link}
            to="/user"
            sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
          >
            🎬 MovieApp
          </Typography>

          {/* MOBILE MENU */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={(e) => setAnchorElNav(e.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    setAnchorElNav(null);
                    navigate(page.path);
                  }}
                >
                  {page.name}
                </MenuItem>
              ))}

              {user?.role === "admin" &&
                adminPages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => {
                      setAnchorElNav(null);
                      navigate(page.path);
                    }}
                  >
                    {page.name}
                  </MenuItem>
                ))}
            </Menu>
          </Box>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.path)}
                sx={{ color: "white" }}
              >
                {page.name}
              </Button>
            ))}

            {user?.role === "admin" &&
              adminPages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => navigate(page.path)}
                  sx={{ color: "white" }}
                >
                  {page.name}
                </Button>
              ))}
          </Box>

          {/* USER MENU */}
          <Box>
            {!user ? (
              <>
                <Button color="inherit" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button color="inherit" onClick={() => navigate("/register")}>
                  Register
                </Button>
              </>
            ) : (
              <>
                <Tooltip title="Account">
                  <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)}>
                    <Avatar>
                      {user?.name?.[0]?.toUpperCase() || "U"}
                    </Avatar>
                  </IconButton>
                </Tooltip>

                <Menu
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={() => setAnchorElUser(null)}
                >
                  <MenuItem onClick={() => navigate("/profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;