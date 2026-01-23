import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#14b8a6", // Teal
    },
    background: {
      default: "#0f172a", // Dark body
      paper: "#1e293b",   // Navbar / cards
    },
    text: {
      primary: "#ffffff",
      secondary: "#94a3b8",
    },
  },
});

export default theme;
