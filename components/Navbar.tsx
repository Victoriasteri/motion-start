"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  PlayArrow,
  MenuBook,
  BuildCircle,
  AutoFixHigh,
  Menu as MenuIcon,
} from "@mui/icons-material";

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 50%, rgba(15, 52, 96, 0.95) 100%)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(102, 191, 191, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              minWidth: 0,
            }}
          >
            <PlayArrow
              sx={{
                mr: 1,
                color: "#66bfbf",
                fontSize: { xs: "1.5rem", md: "1.8rem" },
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(45deg, #66bfbf, #f76b8a)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Motion Start
            </Typography>
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              color="inherit"
              startIcon={<MenuBook />}
              sx={{
                color: "#eaf6f6",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "rgba(102, 191, 191, 0.15)",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Гайд
            </Button>
            <Button
              color="inherit"
              startIcon={<BuildCircle />}
              sx={{
                color: "#eaf6f6",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "rgba(102, 191, 191, 0.15)",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Инструменты
            </Button>
            <Button
              color="inherit"
              startIcon={<AutoFixHigh />}
              sx={{
                color: "#eaf6f6",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "rgba(102, 191, 191, 0.15)",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Техники
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-label="open menu"
              onClick={handleOpenMenu}
              edge="end"
              sx={{
                ml: 1,
                color: "#eaf6f6",
                "&:hover": { backgroundColor: "rgba(102, 191, 191, 0.15)" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
            >
              <MenuItem onClick={handleCloseMenu}>
                <MenuBook sx={{ mr: 1 }} /> Гайд
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <BuildCircle sx={{ mr: 1 }} /> Инструменты
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <AutoFixHigh sx={{ mr: 1 }} /> Техники
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
