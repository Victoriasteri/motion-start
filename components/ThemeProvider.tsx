"use client";

import React, { useState, useEffect } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#66bfbf",
      light: "#eaf6f6",
      dark: "#4a9b9b",
    },
    secondary: {
      main: "#f76b8a",
      light: "#fcfefe",
      dark: "#e55a7a",
    },
    background: {
      default: "#fcfefe",
      paper: "#eaf6f6",
    },
    text: {
      primary: "#2c3e50",
      secondary: "#66bfbf",
    },
  },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ minHeight: "100vh" }} />;
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
