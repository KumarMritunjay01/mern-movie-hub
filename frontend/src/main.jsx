import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';
import { createRoot } from 'react-dom/client';
import theme from './theme.js';
import { ThemeProvider } from "@mui/material/styles";
import "./index.css"

createRoot(document.getElementById('root')).render(
   <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
   </ThemeProvider>
  
)
